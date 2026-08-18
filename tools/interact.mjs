/* Drives the speed lab through a real interaction sequence to prove the
   mechanics work: the wager gate locks the options, a correct answer
   explains itself, and a wrong answer forces the Socratic loop.        */

import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, extname } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PORT = 8792;
const CHROME = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'
].find((p) => existsSync(p));

const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css' };
const server = createServer((req, res) => {
  const f = join(ROOT, req.url === '/' ? 'index.html' : decodeURIComponent(req.url.split('?')[0]));
  if (!existsSync(f) || !extname(f)) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': MIME[extname(f)] || 'text/plain' });
  res.end(readFileSync(f));
});
await new Promise((r) => server.listen(PORT, r));

const chrome = spawn(CHROME, ['--headless=new', '--disable-gpu', '--no-first-run',
  '--remote-debugging-port=9334', '--user-data-dir=' + join(ROOT, '.verify-profile2'), 'about:blank'], { stdio: 'ignore' });

let wsUrl;
for (let i = 0; i < 40 && !wsUrl; i++) {
  try { const r = await fetch('http://127.0.0.1:9334/json/version'); if (r.ok) { wsUrl = (await r.json()).webSocketDebuggerUrl; } } catch (e) {}
  if (!wsUrl) { await new Promise((r) => setTimeout(r, 300)); }
}
const ws = new WebSocket(wsUrl);
await new Promise((r) => { ws.onopen = r; });
let id = 0; const pending = new Map();
ws.onmessage = (m) => { const d = JSON.parse(m.data); if (d.id && pending.has(d.id)) { pending.get(d.id)(d); pending.delete(d.id); } };
const send = (method, params = {}, sessionId) => new Promise((res) => { const i = ++id; pending.set(i, res); ws.send(JSON.stringify({ id: i, method, params, sessionId })); });

const { result: { targetId } } = await send('Target.createTarget', { url: 'about:blank' });
const { result: { sessionId } } = await send('Target.attachToTarget', { targetId, flatten: true });
await send('Runtime.enable', {}, sessionId);
await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/lessons/w01a.html` }, sessionId);
await new Promise((r) => setTimeout(r, 600));

const evalIn = async (expr) => {
  const { result } = await send('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true }, sessionId);
  if (result.exceptionDetails) { throw new Error(result.exceptionDetails.exception.description); }
  return result.result.value;
};

const checks = [];
const check = (name, pass, detail = '') => { checks.push({ name, pass, detail }); };

/* 1 · forensics renders and stamps respond */
check('forensics builds 3 questions',
  await evalIn(`document.querySelectorAll('#lesson .panel:nth-of-type(1) .card').length >= 4`));

const stampResult = await evalIn(`(() => {
  const s = document.querySelector('.stamps .stamp');
  if (!s) return 'no stamp';
  s.click();
  return document.querySelectorAll('.tagrow').length > 0 ? 'tagged' : 'no tag';
})()`);
check('stamping a wrong option gives feedback', stampResult === 'tagged', stampResult);

/* 2 · move to the speed lab */
await evalIn(`document.querySelectorAll('.pnav')[1].click()`);
await new Promise((r) => setTimeout(r, 200));

/* the wager gate must hide the options until confidence is declared */
const gated = await evalIn(`(() => {
  const p = document.querySelectorAll('.panel')[1];
  const opts = p.querySelector('.opts');
  return opts && getComputedStyle(opts).display === 'none';
})()`);
check('options are locked until a wager is made', gated === true, String(gated));

await evalIn(`document.querySelectorAll('.panel')[1].querySelector('.wbtn.sure').click()`);
await new Promise((r) => setTimeout(r, 150));
const revealed = await evalIn(`getComputedStyle(document.querySelectorAll('.panel')[1].querySelector('.opts')).display !== 'none'`);
check('declaring a wager reveals the options', revealed === true);

/* 3 · a WRONG answer must force the Socratic loop */
await evalIn(`(() => {
  const p = document.querySelectorAll('.panel')[1];
  const correct = window.LESSON.speed.items[0].answer;
  const opts = p.querySelectorAll('.opts .opt');
  opts[(correct + 1) % opts.length].click();
})()`);
await new Promise((r) => setTimeout(r, 150));
const socratic = await evalIn(`document.querySelectorAll('.socratic').length > 0`);
check('a wrong answer opens the Socratic loop', socratic === true);

const blockedUntilNamed = await evalIn(`document.querySelectorAll('.socratic .btn').length === 0`);
check('you cannot advance before naming the error', blockedUntilNamed === true);

await evalIn(`document.querySelector('.socratic .why').click()`);
await new Promise((r) => setTimeout(r, 150));
const advanced = await evalIn(`document.querySelectorAll('.socratic .btn').length > 0 && document.querySelectorAll('.socratic .explain').length > 0`);
check('naming the error unlocks the explanation and next', advanced === true);

/* 4 · streak resets after a wrong answer */
const mult = await evalIn(`[...document.querySelectorAll('.gauge')].map(g => g.textContent).join(' | ')`);
check('multiplier reset to 1.0x after the miss', /1\.0×/.test(mult), mult);

/* 5 · focus mode strips the game layer */
await evalIn(`document.querySelector('.toggle').click()`);
await new Promise((r) => setTimeout(r, 150));
const focus = await evalIn(`(() => {
  const hidden = [...document.querySelectorAll('.hideable')].every(n => getComputedStyle(n).display === 'none');
  return document.documentElement.getAttribute('data-focus') === 'on' && hidden;
})()`);
check('focus mode hides every game element', focus === true);

/* 6 · proctor answer sheet records and counts blanks */
await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/lessons/w04a.html` }, sessionId);
await new Promise((r) => setTimeout(r, 600));
const sheet = await evalIn(`document.querySelectorAll('.srow').length`);
check('proctor builds a 66-question answer sheet', sheet === 66, String(sheet));
const marked = await evalIn(`(() => {
  document.querySelector('.sbtn').click();
  return document.querySelector('.blanks').textContent;
})()`);
check('marking an answer updates the blank counter', /1 of 66 answered/.test(marked), marked);

let bad = 0;
for (const c of checks) {
  console.log(`${c.pass ? 'ok  ' : 'FAIL'} ${c.name}${c.pass ? '' : '  → ' + c.detail}`);
  if (!c.pass) { bad++; }
}
console.log(bad ? `\n${bad} interaction check(s) failed` : `\nall ${checks.length} interaction checks passed`);
ws.close(); chrome.kill(); server.close();
process.exit(bad ? 1 : 0);
