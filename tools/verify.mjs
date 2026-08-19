/* Headless verification over the Chrome DevTools Protocol.
   Loads every generated page, fails on any console error or uncaught
   exception, and checks that each page actually built its content.
   Run with `node tools/verify.mjs` after `node tools/gen.mjs`.        */

import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, extname } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PORT = 8791;
const CHROME = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'
].find((p) => existsSync(p));
if (!CHROME) { console.error('No Chromium browser found'); process.exit(1); }

const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css' };

const server = createServer((req, res) => {
  const url = req.url.split('?')[0];
  const file = join(ROOT, url === '/' ? 'index.html' : decodeURIComponent(url));
  if (!existsSync(file) || !extname(file)) { res.writeHead(404); return res.end('nf'); }
  res.writeHead(200, { 'Content-Type': MIME[extname(file)] || 'text/plain' });
  res.end(readFileSync(file));
});
await new Promise((r) => server.listen(PORT, r));

const chrome = spawn(CHROME, [
  '--headless=new', '--disable-gpu', '--no-first-run', '--no-default-browser-check',
  `--remote-debugging-port=9333`, '--user-data-dir=' + join(ROOT, '.verify-profile'),
  'about:blank'
], { stdio: 'ignore' });

async function cdpTargets() {
  for (let i = 0; i < 40; i++) {
    try {
      const r = await fetch('http://127.0.0.1:9333/json/version');
      if (r.ok) { return (await r.json()).webSocketDebuggerUrl; }
    } catch (e) { /* not up yet */ }
    await new Promise((r) => setTimeout(r, 300));
  }
  throw new Error('Chrome did not expose a debugging port');
}

const wsUrl = await cdpTargets();
const { WebSocket } = await import('node:worker_threads').then(() => globalThis);
const ws = new WebSocket(wsUrl);
await new Promise((r) => { ws.onopen = r; });

let msgId = 0;
const pending = new Map();
const events = [];
ws.onmessage = (m) => {
  const d = JSON.parse(m.data);
  if (d.id && pending.has(d.id)) { pending.get(d.id)(d); pending.delete(d.id); }
  else if (d.method) { events.push(d); }
};
function send(method, params = {}, sessionId) {
  const id = ++msgId;
  return new Promise((res) => {
    pending.set(id, res);
    ws.send(JSON.stringify({ id, method, params, sessionId }));
  });
}

const { result: { targetId } } = await send('Target.createTarget', { url: 'about:blank' });
const { result: { sessionId } } = await send('Target.attachToTarget', { targetId, flatten: true });
await send('Runtime.enable', {}, sessionId);
await send('Log.enable', {}, sessionId);
await send('Page.enable', {}, sessionId);

const pages = [
  'index.html', 'lessons.html',
  ...readdirSync(join(ROOT, 'lessons')).map((f) => 'lessons/' + f),
  ...readdirSync(join(ROOT, 'teacher')).map((f) => 'teacher/' + f)
];

let failures = 0;
for (const p of pages) {
  events.length = 0;
  await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/${p}` }, sessionId);
  await new Promise((r) => setTimeout(r, 800));

  const bad = events.filter((e) =>
    (e.method === 'Runtime.exceptionThrown') ||
    (e.method === 'Log.entryAdded' && e.params.entry.level === 'error' &&
     !/fonts\.googleapis|favicon/.test(e.params.entry.url || ''))
  );

  const { result } = await send('Runtime.evaluate', {
    expression: `(() => {
      /* Pages with a #lesson / #quest host are script-built and must be
         populated. index.html is static — it only has to have rendered. */
      const host = document.querySelector('#lesson') || document.querySelector('#quest');
      const cards = document.querySelectorAll('.card, .hubrow, .fig, .need, .panel').length;
      const opts  = document.querySelectorAll('.opt, .sbtn, .tstep, .hublink, .act, .btn').length;
      return JSON.stringify({ scripted: !!host, kids: host ? host.children.length : -1, cards, opts });
    })()`, returnByValue: true
  }, sessionId);

  const m = JSON.parse(result.result.value);
  const ok = bad.length === 0 && m.cards > 0 && (!m.scripted || m.kids > 0);
  if (!ok) {
    failures++;
    console.log(`FAIL ${p}  kids=${m.kids} cards=${m.cards} interactive=${m.opts}`);
    bad.slice(0, 3).forEach((e) => {
      const t = e.params?.exceptionDetails?.exception?.description || e.params?.entry?.text;
      console.log(`     ${String(t).split('\n')[0]}`);
    });
  } else {
    console.log(`ok   ${p.padEnd(26)} cards=${String(m.cards).padStart(2)} interactive=${String(m.opts).padStart(3)}`);
  }
}

console.log(failures ? `\n${failures} of ${pages.length} pages FAILED` : `\nall ${pages.length} pages rendered clean`);
ws.close();
chrome.kill();
server.close();
process.exit(failures ? 1 : 0);
