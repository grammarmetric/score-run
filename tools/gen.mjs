/* Build script for Score run.
   Run once with `node tools/gen.mjs`; it writes plain static files that
   need no build step to serve. Regenerate after editing the manifest
   or the content banks.                                               */

import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { sessions } from './manifest.mjs';
import { rw } from './content-rw.mjs';
import { math } from './content-math.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const content = { ...rw, ...math };

const esc = (s) => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

const FONT = '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lexend:wght@400;500&display=swap">';

function page({ title, lead, css, body, scripts = [], depth = 1 }) {
  const up = '../'.repeat(depth);
  return `<!doctype html>
<html lang="en" data-lead="${lead}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title>
<meta name="robots" content="noindex">
${FONT}
<link rel="stylesheet" href="${up}assets/${css}">
</head>
<body>
${body}
${scripts.map((s) => `<script src="${up}${s}"></script>`).join('\n')}
</body>
</html>
`;
}

mkdirSync(join(ROOT, 'banks'), { recursive: true });
mkdirSync(join(ROOT, 'lessons'), { recursive: true });
mkdirSync(join(ROOT, 'teacher'), { recursive: true });

let lessonCount = 0;
let proctorCount = 0;
let itemCount = 0;

for (const s of sessions) {
  /* ── student page ─────────────────────────────────────── */
  if (s.type === 'lesson') {
    const c = content[s.id];
    if (!c) { throw new Error(`No content bank for ${s.id}`); }

    itemCount += c.forensics.items.length + c.speed.items.length + c.sim.items.length;

    const bank = {
      id: s.id, week: s.week, session: s.session, lead: s.lead,
      domain: s.domain, title: s.title, sub: s.sub,
      stampSet: c.stampSet,
      forensics: c.forensics, speed: c.speed, sim: c.sim
    };
    writeFileSync(
      join(ROOT, 'banks', `${s.id}.js`),
      `/* ${s.id} — ${s.title}. Generated from tools/content-*.mjs */\nwindow.LESSON = ${JSON.stringify(bank, null, 1)};\n`
    );
    writeFileSync(join(ROOT, 'lessons', `${s.id}.html`), page({
      title: `${s.title} · Score run`,
      lead: s.lead, css: 'lesson.css',
      body: '<main class="wrap" id="lesson"></main>',
      scripts: [`banks/${s.id}.js`, 'assets/lesson.js']
    }));
    lessonCount++;
  } else {
    const cfg = {
      id: s.id, week: s.week, session: s.session,
      domain: s.domain, title: s.title, sub: s.sub,
      modules: s.proctor.modules
    };
    writeFileSync(join(ROOT, 'lessons', `${s.id}.html`), page({
      title: `${s.title} · Score run`,
      lead: 'yellow', css: 'lesson.css',
      body: `<main class="wrap" id="lesson"></main>\n<script>window.PROCTOR = ${JSON.stringify(cfg)};</script>`,
      scripts: ['assets/proctor.js']
    }));
    proctorCount++;
  }

  /* ── teacher sheet ────────────────────────────────────── */
  const run = s.run.map(([t, w, d]) => `
    <div class="tstep">
      <span class="tt">${esc(t)}</span>
      <span><span class="tw">${esc(w)}</span>${d ? `<span class="td">${esc(d)}</span>` : ''}</span>
    </div>`).join('');

  const list = (arr) => arr.map((x) => `<li>${esc(x)}</li>`).join('');
  const mats = s.materials.map((m) => `<div class="mat">${esc(m)}</div>`).join('');

  const blocks = [];
  blocks.push(`<div class="card brief">
      <h3>Goal for this session</h3>
      <p class="plain">${esc(s.goal)}</p>
    </div>`);
  blocks.push(`<div class="card">
      <h3>What you need open</h3>
      ${mats}
    </div>`);
  blocks.push(`<div class="card">
      <h3>Running order</h3>
      <div class="trun">${run}</div>
    </div>`);
  if (s.watch.length) {
    blocks.push(`<div class="card">
      <h3>What to watch for</h3>
      <ul class="ticks">${list(s.watch)}</ul>
    </div>`);
  }
  if (s.errors.length) {
    blocks.push(`<div class="card">
      <h3>Errors to expect</h3>
      <ul class="ticks">${list(s.errors)}</ul>
    </div>`);
  }
  blocks.push(`<div class="card">
      <h3>Homework to set</h3>
      <ul class="ticks">${list(s.homework)}</ul>
    </div>`);

  writeFileSync(join(ROOT, 'teacher', `${s.id}.html`), page({
    title: `Teacher · ${s.title} · Score run`,
    lead: s.lead, css: 'lesson.css',
    body: `<main class="wrap">
  <div class="bar">
    <a class="back" href="../lessons.html">← All lessons</a>
    <div class="bar-sp"></div>
    <a class="back" href="../lessons/${s.id}.html">Open the student page</a>
  </div>
  <div class="head">
    <span class="eyebrow">Teacher sheet · week ${s.week} · session ${s.session} · ${esc(s.domain)}</span>
    <h1>${esc(s.title)}</h1>
    <p class="sub">${esc(s.sub)}</p>
  </div>
  <div class="stack">
    ${blocks.join('\n    ')}
  </div>
</main>`
  }));
}

/* ── hub ────────────────────────────────────────────────── */
const byWeek = new Map();
for (const s of sessions) {
  if (!byWeek.has(s.week)) { byWeek.set(s.week, []); }
  byWeek.get(s.week).push(s);
}

const WEEK_NAMES = {
  1: 'Orientation', 2: 'Agreement', 3: 'Sentence boundaries',
  4: 'Checkpoint 1', 5: 'Punctuation and data', 6: 'Apostrophes and geometry',
  7: 'Tenses and advanced maths', 8: 'Checkpoint 2', 9: 'Transitions and repair',
  10: 'Rhetoric and exam craft', 11: 'Timed drills', 12: 'Final'
};

let hub = '';
for (const [week, list] of [...byWeek.entries()].sort((a, b) => a[0] - b[0])) {
  hub += `\n    <div class="hubweek">
      <h3>Week ${week} — ${esc(WEEK_NAMES[week])}</h3>
      <span class="hw">${list.length} sessions</span>
    </div>`;
  for (const s of list) {
    hub += `
    <div class="hubrow ${s.lead}">
      <span>
        <span class="ht">Session ${s.session} · ${esc(s.title)}</span>
        <span class="hs">${esc(s.domain)} — ${esc(s.goal)}</span>
      </span>
      <span class="hublinks">
        <a class="hublink go" href="lessons/${s.id}.html">${s.type === 'proctor' ? 'Open the timer' : 'Open the lesson'}</a>
        <a class="hublink" href="teacher/${s.id}.html">Teacher sheet</a>
      </span>
    </div>`;
  }
}

writeFileSync(join(ROOT, 'lessons.html'), page({
  title: 'All lessons · Score run',
  lead: 'cyan', css: 'lesson.css', depth: 0,
  body: `<main class="wrap wide">
  <div class="bar">
    <a class="back" href="index.html">← Programme overview</a>
  </div>
  <div class="head">
    <span class="eyebrow">24 sessions · 12 weeks · two hours each</span>
    <h1>All lessons</h1>
    <p class="sub">Every session has a page for the student and a run-sheet for the teacher. Sessions marked with a yellow edge are timed checkpoints, where the game layer is switched off entirely.</p>
  </div>
  <div class="hub">${hub}
  </div>
</main>`
}));

console.log(`lessons  ${lessonCount}`);
console.log(`proctors ${proctorCount}`);
console.log(`teacher  ${sessions.length}`);
console.log(`items    ${itemCount}`);
