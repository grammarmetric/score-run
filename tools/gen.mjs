/* Build script for Score run.
   Run with `node tools/gen.mjs`; it writes plain static files that need
   no build step to serve. Regenerate after editing the manifest or the
   content banks.

   Each teaching session produces THREE files:
     lessons/<id>.html         the roguelike run  (run.js — the default)
     lessons/<id>-plain.html   the quiet drill    (lesson.js — exam-ish)
     teacher/<id>.html         the run-sheet
   Checkpoints produce the proctor page and a run-sheet.               */

import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { sessions } from './manifest.mjs';
import { rw } from './content-rw.mjs';
import { math } from './content-math.mjs';
import { presentRw } from './present-rw.mjs';
import { presentMath } from './present-math.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const content = { ...rw, ...math };
const present = { ...presentRw, ...presentMath };

const esc = (s) => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

const FONT = '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lexend:wght@400;500&display=swap">';

/* Desmos graphing API. The key is a client-side key by design — it ships
   in the page source on every Desmos embed. Same key as the other builds.
   `defer` matters: without it this blocks HTML parsing, and on a slow
   connection the student stares at a blank lesson until Desmos arrives.
   Deferred, the lesson renders immediately and the graph fills in after —
   quest.js polls for window.Desmos, so the ordering is safe either way. */
const DESMOS = '<script defer src="https://www.desmos.com/api/v1.9/calculator.js?apiKey=186f2d55ee6f4a3fa62ae79378493afd"></script>';

function page({ title, lead, css, body, scripts = [], depth = 1, desmos = false }) {
  const up = '../'.repeat(depth);
  return `<!doctype html>
<html lang="en"${lead ? ` data-lead="${lead}"` : ''}>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title>
<meta name="robots" content="noindex">
${FONT}${desmos ? '\n' + DESMOS : ''}
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

let lessonCount = 0, proctorCount = 0, itemCount = 0;

for (const s of sessions) {
  if (s.type === 'lesson') {
    const c = content[s.id];
    const p = present[s.id];
    if (!c) { throw new Error(`No content bank for ${s.id}`); }
    if (!p) { throw new Error(`No presentation block for ${s.id} — PPP needs all three phases`); }

    itemCount += 1 + c.forensics.items.length + c.speed.items.length + c.sim.items.length;

    const bank = {
      id: s.id, week: s.week, session: s.session, lead: s.lead,
      domain: s.domain, title: s.title, sub: s.sub,
      stampSet: c.stampSet,
      present: p,                    // PRESENTATION
      forensics: c.forensics,        // PRACTICE — recon
      speed: c.speed,                // PRACTICE — waves
      sim: c.sim                     // PRODUCTION — boss
    };
    writeFileSync(
      join(ROOT, 'banks', `${s.id}.js`),
      `/* ${s.id} — ${s.title}. Generated from tools/content-*.mjs */\nwindow.LESSON = ${JSON.stringify(bank, null, 1)};\n`
    );

    /* the lesson — present → practice → produce, with the game layer.
       Desmos is loaded only where a module actually uses it.          */
    const usesDesmos = p.modules.some((m) => !!m.desmos);
    writeFileSync(join(ROOT, 'lessons', `${s.id}.html`), page({
      title: `${s.title} · Score run`,
      css: 'quest.css',
      desmos: usesDesmos,
      body: `<canvas id="fx"></canvas>
<div id="quest"></div>`,
      scripts: [`banks/${s.id}.js`, 'assets/quest.js']
    }));

    /* the quiet version — same content, no game layer */
    writeFileSync(join(ROOT, 'lessons', `${s.id}-plain.html`), page({
      title: `${s.title} · plain drill`,
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

  if (s.type === 'lesson') {
    const p = present[s.id];
    const c = content[s.id];
    blocks.push(`<div class="card">
      <h3>PPP — how the lesson page is structured</h3>
      <div class="trun">
        <div class="tstep">
          <span class="tt">Present</span>
          <span><span class="tw">Warm-up + ${p.modules.length} teaching modules</span><span class="td">Opens with the “${esc(p.hook.title)}” analogy, then teaches: ${p.modules.map((m) => esc(m.title)).join(' · ')}. Each module carries concept cards, a right/wrong example pair, the rule, the trap the exam builds from it, and a worked example in numbered steps. Nothing is timed and nothing costs a life.</span></span>
        </div>
        <div class="tstep">
          <span class="tt">Practice</span>
          <span><span class="tw">Recon, then waves</span><span class="td">${c.forensics.items.length} recon questions where they label why each wrong option is wrong, then ${c.speed.items.length} timed questions at ${c.speed.seconds}s each. Scaffolded: hints, a scanner perk, and shields from streaks.</span></span>
        </div>
        <div class="tstep">
          <span class="tt">Produce</span>
          <span><span class="tw">Boss</span><span class="td">${c.sim.items.length} questions, no hints and no scaffolding, with HP carried over from practice. This is the independent-application stage — do not coach through it.</span></span>
        </div>
      </div>
      <p>If they lose all HP the run ends and restarts from the briefing. That is deliberate: a failed run costs about four minutes and they will usually go again without being asked.</p>
    </div>`);
  }

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

  const links = s.type === 'lesson'
    ? `<a class="back" href="../lessons/${s.id}.html">Open the run</a>
    <a class="back" href="../lessons/${s.id}-plain.html">Plain drill</a>`
    : `<a class="back" href="../lessons/${s.id}.html">Open the timer</a>`;

  writeFileSync(join(ROOT, 'teacher', `${s.id}.html`), page({
    title: `Teacher · ${s.title} · Score run`,
    lead: s.lead, css: 'lesson.css',
    body: `<main class="wrap">
  <div class="bar">
    <a class="back" href="../lessons.html">← All lessons</a>
    <div class="bar-sp"></div>
    ${links}
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
    const extra = s.type === 'lesson'
      ? `<a class="hublink" href="lessons/${s.id}-plain.html">Plain drill</a>`
      : '';
    hub += `
    <div class="hubrow ${s.lead}">
      <span>
        <span class="ht">Session ${s.session} · ${esc(s.title)}</span>
        <span class="hs">${esc(s.domain)} — ${esc(s.goal)}</span>
      </span>
      <span class="hublinks">
        <a class="hublink go" href="lessons/${s.id}.html">${s.type === 'proctor' ? 'Open the timer' : 'Play the run'}</a>
        ${extra}
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
    <p class="sub">Each teaching session is a roguelike run built on the PPP shape — briefing teaches the rule, recon and waves practise it, the boss makes them apply it alone. Lose all your health and the run restarts. A plain drill version of the same content sits alongside each one for exam-condition work, and the yellow sessions are timed checkpoints with no game layer at all.</p>
  </div>
  <div class="hub">${hub}
  </div>
</main>`
}));

console.log(`runs      ${lessonCount}`);
console.log(`plain     ${lessonCount}`);
console.log(`proctors  ${proctorCount}`);
console.log(`teacher   ${sessions.length}`);
console.log(`items     ${itemCount}`);
