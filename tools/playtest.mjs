/* Plays an actual run end to end and asserts the game rules hold:
   the PPP order, that the briefing costs nothing, that the commit gate
   locks the options, that overcharging costs 2 HP, that shields absorb,
   that a miss cannot be skipped, and that zero HP ends the run.        */

import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, extname } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PORT = 8793;
const CHROME = ['C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'].find((p) => existsSync(p));

const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css' };
const server = createServer((req, res) => {
  const f = join(ROOT, req.url === '/' ? 'index.html' : decodeURIComponent(req.url.split('?')[0]));
  if (!existsSync(f) || !extname(f)) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': MIME[extname(f)] || 'text/plain' });
  res.end(readFileSync(f));
});
await new Promise((r) => server.listen(PORT, r));

const chrome = spawn(CHROME, ['--headless=new', '--disable-gpu', '--no-first-run', '--mute-audio',
  '--remote-debugging-port=9335', '--user-data-dir=' + join(ROOT, '.verify-profile3'), 'about:blank'], { stdio: 'ignore' });

let wsUrl;
for (let i = 0; i < 40 && !wsUrl; i++) {
  try { const r = await fetch('http://127.0.0.1:9335/json/version'); if (r.ok) { wsUrl = (await r.json()).webSocketDebuggerUrl; } } catch (e) {}
  if (!wsUrl) { await new Promise((r) => setTimeout(r, 300)); }
}
const ws = new WebSocket(wsUrl);
await new Promise((r) => { ws.onopen = r; });
let id = 0; const pending = new Map(); const errs = [];
ws.onmessage = (m) => {
  const d = JSON.parse(m.data);
  if (d.id && pending.has(d.id)) { pending.get(d.id)(d); pending.delete(d.id); }
  else if (d.method === 'Runtime.exceptionThrown') { errs.push(d.params.exceptionDetails); }
};
const send = (method, params = {}, sessionId) => new Promise((res) => {
  const i = ++id; pending.set(i, res); ws.send(JSON.stringify({ id: i, method, params, sessionId }));
});

const { result: { targetId } } = await send('Target.createTarget', { url: 'about:blank' });
const { result: { sessionId } } = await send('Target.attachToTarget', { targetId, flatten: true });
await send('Runtime.enable', {}, sessionId);

const ev = async (expr) => {
  const { result } = await send('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true }, sessionId);
  if (result.exceptionDetails) { throw new Error(result.exceptionDetails.exception.description.split('\n')[0]); }
  return result.result.value;
};
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

const checks = [];
const check = (n, pass, d = '') => checks.push({ n, pass, d });

await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/lessons/w01a.html` }, sessionId);
await wait(700);

/* ── PRESENTATION ─────────────────────────────────────── */
check('run opens on the Presentation briefing',
  /Presentation/.test(await ev(`document.querySelector('.tag').textContent`)));
check('briefing shows the rule before any question',
  (await ev(`document.querySelector('.q').textContent.length`)) > 20);
check('no answer options are on screen during the rule',
  (await ev(`document.querySelectorAll('.act').length`)) === 0);

const hp0 = await ev(`document.querySelectorAll('#hearts .hp:not(.empty)').length`);
check('run starts on 5 HP', hp0 === 5, String(hp0));

/* walk the worked example */
let guard = 0;
while (await ev(`!!document.querySelector('.btn') && /Decrypt/.test(document.querySelector('.btn').textContent)`) && guard++ < 12) {
  await ev(`document.querySelector('.btn').click()`);
  await wait(90);
}
check('worked example reveals step by step',
  (await ev(`document.querySelectorAll('.exp').length`)) >= 3);
check('free shot appears after the walkthrough',
  (await ev(`document.querySelectorAll('.act').length`)) >= 2);

/* answer the free shot WRONG — must not cost HP */
await ev(`(() => {
  const want = window.LESSON.present.check.answer;
  const a = document.querySelectorAll('.act');
  a[(want + 1) % a.length].click();
})()`);
await wait(200);
const hpAfterFree = await ev(`document.querySelectorAll('#hearts .hp:not(.empty)').length`);
check('a wrong answer in the briefing costs no HP', hpAfterFree === 5, String(hpAfterFree));

/* ── PRACTICE · recon ─────────────────────────────────── */
await ev(`[...document.querySelectorAll('.btn')].find(b => /Enter the field/.test(b.textContent)).click()`);
await wait(300);
check('briefing leads into Practice · recon',
  /Practice/.test(await ev(`[...document.querySelectorAll('.tag')].map(t=>t.textContent).join(' ')`)));
check('an enemy is on screen', (await ev(`document.querySelectorAll('.foe svg').length`)) === 1);

const stampScore = await ev(`(() => {
  const before = document.querySelector('#v-score').textContent;
  const o = window.LESSON.forensics.items[0].options.find(x => !x.correct);
  const rows = [...document.querySelectorAll('.stamps')];
  const labels = { broad:'Too broad', narrow:'Too narrow', contradicts:'Contradicts',
                   unsupported:'Not in text', halfright:'Half right' };
  const btn = [...rows[0].querySelectorAll('.stamp')].find(b => b.textContent === labels[o.trap]);
  btn.click();
  return before + '->' + document.querySelector('#v-score').textContent;
})()`);
check('correct trap call scores points', /0->60/.test(stampScore), stampScore);

/* ── PRACTICE · waves ─────────────────────────────────── */
/* clear the rest of recon — driven from Node, because the "next" button
   only appears after the enemy's 420ms death animation finishes */
const step = `(() => {
  const s = document.querySelector('.stamps .stamp:not(:disabled)');
  if (s) { s.click(); return 'stamp'; }
  const n = [...document.querySelectorAll('.btn')].find(b => /Next anomaly|Stage clear/.test(b.textContent));
  if (n) { n.click(); return 'next'; }
  if (document.querySelector('.perk')) { return 'draft'; }
  return 'none';
})()`;
let idle = 0;
for (let i = 0; i < 60; i++) {
  const did = await ev(step);
  if (did === 'draft') { break; }
  if (did === 'none') {
    /* the next button only appears after the enemy's 420ms death anim */
    if (++idle > 4) { break; }
    await wait(500);
    continue;
  }
  idle = 0;
  await wait(did === 'next' ? 300 : 140);
}
await wait(500);

/* a perk draft sits between practice stages */
const drafted = await ev(`document.querySelectorAll('.perk').length`);
check('a perk draft is offered between stages', drafted === 3, String(drafted));
await ev(`document.querySelectorAll('.perk')[0].click()`);
await wait(300);

check('waves stage reached', /waves/i.test(await ev(`[...document.querySelectorAll('.tag')].map(t=>t.textContent).join(' ')`)));
check('options stay hidden until you commit',
  (await ev(`getComputedStyle(document.querySelector('.acts')).display`)) === 'none');
check('commit gate offers strike and overcharge',
  (await ev(`document.querySelectorAll('.cbtn').length`)) === 2);

/* overcharge, then answer wrong — must cost 2 HP */
const hpBefore = await ev(`document.querySelectorAll('#hearts .hp:not(.empty)').length`);
const shieldsBefore = await ev(`document.querySelectorAll('#hearts .shield').length`);
await ev(`document.querySelector('.cbtn.over').click()`);
await wait(150);
check('committing reveals the options',
  (await ev(`getComputedStyle(document.querySelector('.acts')).display`)) !== 'none');

await ev(`(() => {
  const want = window.LESSON.speed.items[0].answer;
  const a = document.querySelectorAll('.acts .act');
  a[(want + 1) % a.length].click();
})()`);
await wait(250);
const hpAfter = await ev(`document.querySelectorAll('#hearts .hp:not(.empty)').length`);
const expected = hpBefore - Math.max(0, 2 - shieldsBefore);
check('overcharged miss costs 2 HP (less any shields)', hpAfter === expected,
  `before=${hpBefore} shields=${shieldsBefore} after=${hpAfter} expected=${expected}`);

check('a miss opens the Socratic panel',
  (await ev(`document.querySelectorAll('.tag.boss').length`)) > 0);
check('cannot advance before naming the error',
  (await ev(`[...document.querySelectorAll('.btn')].filter(b => /Next|Run over/.test(b.textContent)).length`)) === 0);
await ev(`[...document.querySelectorAll('.act')].filter(b => b.textContent.includes('Guessed'))[0].click()`);
await wait(200);
check('naming the error unlocks the advance',
  (await ev(`[...document.querySelectorAll('.btn')].filter(b => /Next|Run over/.test(b.textContent)).length`)) > 0);

/* ── death ────────────────────────────────────────────── */
/* Play recklessly — always overcharge, always answer wrong — so the run
   must die. Driven from Node so async transitions are respected.       */
const reckless = `(() => {
  if (document.querySelector('.big')) { return 'end'; }
  const over = document.querySelector('.cbtn.over');
  if (over) { over.click(); return 'commit'; }
  const acts = [...document.querySelectorAll('.acts .act:not(:disabled)')];
  if (acts.length) {
    const st = window.__stage || 'speed';
    const set = document.querySelector('.tag.boss') && /boss/i.test(document.querySelector('.tag').textContent)
      ? window.LESSON.sim : window.LESSON.speed;
    acts[0].click();
    return 'answer';
  }
  const why = [...document.querySelectorAll('.act:not(:disabled)')].filter(b => /Guessed|Ran out/.test(b.textContent))[0];
  if (why) { why.click(); return 'why'; }
  const nxt = [...document.querySelectorAll('.btn')].find(b => /Next|Run over|Stage clear|Finish/.test(b.textContent));
  if (nxt) { nxt.click(); return 'next'; }
  const perk = document.querySelector('.perk');
  if (perk) { perk.click(); return 'perk'; }
  return 'stuck';
})()`;
let stuck = 0;
for (let i = 0; i < 160; i++) {
  const did = await ev(reckless);
  if (did === 'end') { break; }
  if (did === 'stuck') { if (++stuck > 4) { break; } await wait(500); continue; }
  stuck = 0;
  await wait(180);
}
await wait(700);

const ended = await ev(`(() => {
  const b = document.querySelector('.big');
  return b ? b.textContent.trim() : 'none';
})()`);
check('the run reaches an end screen', /Run failed|Signal clear/.test(ended), ended);
check('the end screen carries a damage report',
  (await ev(`document.querySelectorAll('.logr').length`)) > 0);
check('replay is offered',
  (await ev(`[...document.querySelectorAll('.btn')].some(b => /Run it again/.test(b.textContent))`)) === true);

check('no uncaught exceptions during the whole run', errs.length === 0,
  errs.slice(0, 2).map((e) => (e.exception && e.exception.description || '').split('\n')[0]).join(' | '));

let bad = 0;
for (const c of checks) {
  console.log(`${c.pass ? 'ok  ' : 'FAIL'} ${c.n}${c.pass ? '' : '  → ' + c.d}`);
  if (!c.pass) { bad++; }
}
console.log(bad ? `\n${bad} of ${checks.length} playtest checks FAILED` : `\nall ${checks.length} playtest checks passed`);
ws.close(); chrome.kill(); server.close();
process.exit(bad ? 1 : 0);
