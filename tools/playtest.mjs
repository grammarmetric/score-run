/* Drives a quest lesson to prove the PPP mechanics work: the warm-up
   costs no life, practice awards XP and takes a life on a miss, the
   boss HP bar falls, and clearing it shows the certificate.          */
import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, extname } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const CHROME = ['C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'].find((p) => existsSync(p));
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css' };
const server = createServer((q, s) => {
  const f = join(ROOT, q.url === '/' ? 'index.html' : decodeURIComponent(q.url.split('?')[0]));
  if (!existsSync(f) || !extname(f)) { s.writeHead(404); return s.end(); }
  s.writeHead(200, { 'Content-Type': MIME[extname(f)] || 'text/plain' }); s.end(readFileSync(f));
});
await new Promise((r) => server.listen(8797, r));
const chrome = spawn(CHROME, ['--headless=new', '--disable-gpu', '--mute-audio',
  '--remote-debugging-port=9339', '--user-data-dir=' + join(ROOT, '.verify-profile7'), 'about:blank'], { stdio: 'ignore' });
let u; for (let i = 0; i < 40 && !u; i++) {
  try { const r = await fetch('http://127.0.0.1:9339/json/version'); if (r.ok) { u = (await r.json()).webSocketDebuggerUrl; } } catch (e) {}
  if (!u) { await new Promise((r) => setTimeout(r, 300)); }
}
const ws = new WebSocket(u); await new Promise((r) => { ws.onopen = r; });
let id = 0; const pend = new Map(); const errs = [];
ws.onmessage = (m) => { const d = JSON.parse(m.data);
  if (d.id && pend.has(d.id)) { pend.get(d.id)(d); pend.delete(d.id); }
  else if (d.method === 'Runtime.exceptionThrown') { errs.push(d.params.exceptionDetails); } };
const send = (me, pa = {}, si) => new Promise((r) => { const i = ++id; pend.set(i, r); ws.send(JSON.stringify({ id: i, method: me, params: pa, sessionId: si })); });
const { result: { targetId } } = await send('Target.createTarget', { url: 'about:blank' });
const { result: { sessionId } } = await send('Target.attachToTarget', { targetId, flatten: true });
await send('Runtime.enable', {}, sessionId);
const ev = async (e) => { const { result } = await send('Runtime.evaluate', { expression: e, returnByValue: true }, sessionId);
  if (result.exceptionDetails) { throw new Error(result.exceptionDetails.exception.description.split('\n')[0]); }
  return result.result.value; };
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const cks = []; const ck = (n, p, d = '') => cks.push({ n, p, d });

await send('Page.navigate', { url: 'http://127.0.0.1:8797/lessons/w01a.html' }, sessionId);
await wait(900);

ck('warm-up section exists', await ev(`!!document.querySelector('#warmup')`));
ck('presentation section exists', await ev(`!!document.querySelector('#learn')`));
ck('teaching modules rendered', (await ev(`document.querySelectorAll('#learn .card').length`)) >= 3, String(await ev(`document.querySelectorAll('#learn .card').length`)));
ck('modules carry concept cards', (await ev(`document.querySelectorAll('#learn .concept').length`)) >= 6);
ck('modules carry right/wrong examples', (await ev(`document.querySelectorAll('#learn .ex').length`)) >= 4);
ck('modules carry rule + trap boxes', (await ev(`document.querySelectorAll('#learn .box.rule').length`)) >= 3 && (await ev(`document.querySelectorAll('#learn .box.trap').length`)) >= 3);
ck('worked examples with numbered steps', (await ev(`document.querySelectorAll('#learn .worked .step').length`)) >= 9);
ck('presentation comes before practice',
  await ev(`document.querySelector('#learn').compareDocumentPosition(document.querySelector('#practice')) === 4`));

const lives0 = await ev(`document.querySelector('#c-lives').textContent`);
await ev(`(()=>{const q=document.querySelector('#warmup .choices');const w=window.LESSON.present.check.answer;
  q.children[(w+1)%q.children.length].click();})()`);
await wait(250);
ck('a wrong warm-up answer costs no life',
  (await ev(`document.querySelector('#c-lives').textContent`)) === lives0,
  lives0 + ' -> ' + await ev(`document.querySelector('#c-lives').textContent`));

/* practice: one right, one wrong */
await ev(`(()=>{const q=document.querySelectorAll('#practice .quiz')[0];
  q.querySelectorAll('.choice')[window.LESSON.speed.items[0].answer].click();})()`);
await wait(250);
ck('a correct practice answer awards XP',
  parseInt((await ev(`document.querySelector('#c-xp').textContent`)).replace(/\D/g, ''), 10) > 0);
await ev(`(()=>{const q=document.querySelectorAll('#practice .quiz')[1];const w=window.LESSON.speed.items[1].answer;
  q.querySelectorAll('.choice')[(w+1)%4].click();})()`);
await wait(250);
ck('a wrong practice answer costs a life',
  (await ev(`document.querySelector('#c-lives').textContent`)) !== lives0);
ck('every answered question shows an explanation',
  (await ev(`document.querySelectorAll('#practice .fb.show').length`)) === 2);

/* boss: clear it */
const hp0 = await ev(`document.querySelector('#hpfill').style.width || '100%'`);
await ev(`(()=>{const qs=document.querySelectorAll('#boss .quiz');
  window.LESSON.sim.items.forEach((it,i)=>{ if(qs[i]) qs[i].querySelectorAll('.choice')[it.answer].click(); });})()`);
await wait(1200);
ck('boss HP falls to zero', (await ev(`document.querySelector('#hpfill').style.width`)) === '0%',
  hp0 + ' -> ' + await ev(`document.querySelector('#hpfill').style.width`));
ck('certificate appears on clearing the boss', await ev(`document.querySelector('#cert').classList.contains('show')`));
ck('badges were unlocked', (await ev(`document.querySelectorAll('.ach.got').length`)) >= 2);
ck('no uncaught exceptions', errs.length === 0,
  errs.slice(0, 2).map((e) => (e.exception && e.exception.description || '').split('\n')[0]).join(' | '));

let bad = 0;
for (const c of cks) { console.log(`${c.p ? 'ok  ' : 'FAIL'} ${c.n}${c.p ? '' : '  → ' + c.d}`); if (!c.p) { bad++; } }
console.log(bad ? `\n${bad} of ${cks.length} checks FAILED` : `\nall ${cks.length} quest checks passed`);
ws.close(); chrome.kill(); server.close(); process.exit(bad ? 1 : 0);
