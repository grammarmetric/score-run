# Score run — a 12-week gamified SAT programme

Live: **https://grammarmetric.github.io/score-run/**
All lessons: **https://grammarmetric.github.io/score-run/lessons.html**

A parent-facing programme overview, 16 full PPP lessons, 8 checkpoint proctor
pages, and a teacher run-sheet for every one of the 24 sessions. No build step
to serve any of it; no account, no backend, no libraries.

> **No student's name lives in this repository.** Diagnostic scores are
> committed, personal data never is.

## Layout

```
index.html            parent-facing programme overview
lessons.html          hub — every session, all three links
assets/
  quest.css quest.js  the lesson engine (present → practice → produce)
  lesson.css          the GrammarMetric design system
  lesson.js           plain drill engine — same content, no game layer
  proctor.js          checkpoint engine: timing, answer sheet, scoring
banks/  w01a.js …     question content, one per teaching session (16)
lessons/w01a.html …   the lesson         (16)
lessons/w01a-plain…   the quiet twin     (16)
lessons/w04a.html …   checkpoint timers   (8)
teacher/w01a.html …   run-sheets         (24)
tools/                manifest, content source, build and test scripts
```

`banks/`, `lessons/` and `teacher/` are **generated**. Edit `tools/manifest.mjs`
(session metadata and run-sheets), `tools/present-*.mjs` (the teaching content)
or `tools/content-*.mjs` (the questions), then:

```
node tools/gen.mjs        # rebuild every page
node tools/verify.mjs     # load all 66 pages headless, fail on any console error
node tools/playtest.mjs   # drive a lesson and assert the PPP mechanics
node tools/interact.mjs   # assert the plain drill mechanics
```

## The lesson shape

PPP is the spine, and **Presentation carries real weight** — the teaching has
to land before any drilling is worth doing.

| Phase | What is on the page |
| --- | --- |
| **Warm-up** | An analogy that makes the idea concrete, then one free question. No life at risk. |
| **Presentation** | **Three teaching modules.** Each carries a lead, 3 concept cards (with formulas where they help), a right/wrong example pair, the rule, the trap the exam builds from that rule, and a worked example broken into numbered steps with the answer called out. Every maths lesson also embeds a **live Desmos calculator** on the module it helps most. |
| **Practice** | Trap forensics — name *why* each wrong option is wrong — then scaffolded quizzes with XP, streak bonuses and lives. |
| **Produce** | Boss battle: no hints, no topic labels, HP bar, mixed application. |
| **Victory** | Badges, certificate, accuracy, and the teach-back prompts. |

Game layer: XP and levels, streak bonuses at four in a row, five lives, six
badges with toasts, a boss HP bar, canvas confetti, and a sticky HUD. Lives
reset rather than ending the lesson — running out sends the student back to the
briefing module for that skill, which is the useful consequence.

Each lesson also has a `-plain.html` twin with identical questions and no game
layer, for exam-condition work as the real test approaches.

## Checkpoints

Weeks 4, 8, 11 and 12 run `proctor.js` instead: real module timing (39 or 43
minutes), a digital answer sheet, a blank counter, and scoring against the key
typed in from the official answers PDF. No game layer at all — by week 12 the
plain interface should feel completely familiar.

## Design

House style, matching the existing lesson builds: **Lexend**, the five-colour
brand palette (`#00060e` ink, `#9a9f17` olive, `#fee801` yellow, `#54c1e6` sky,
`#39c4b6` teal), dark ground with radial washes, gradient headings, glow
accents, concept grids, and colour-coded callouts for rule / trap / tip.

The parent page, the hub, the checkpoints and all 24 teacher sheets stay on the
flat GrammarMetric style guide. The lesson pages deliberately do not — the guide
bans gradients, glow and motion, which are the tools that make a page read as a
game rather than a worksheet.

## What was kept from the IELTS blueprint, and what was cut

| Kept | Cut |
| --- | --- |
| Score predictor → running XP and level | AI essay marking — no SAT essay since 2021 |
| Confidence wagers → streak bonuses | Speaking debates — the SAT has no speaking |
| Skill prerequisites → the PPP module order | Team relays, breakout pods, peer marking |
| Mock-test tokens — the scarcity is genuine | Live leaderboards |
| Focus mode → the `-plain` twin pages | |

Only four practice tests match the current digital exam format. Tests 1, 2 and 4
are spent at the checkpoints; test 3 is broken up for the week 11 drills.

## Verification

All three harnesses pass at the time of committing:

- `verify.mjs` — all **66 pages** in headless Chrome, zero console errors.
- `playtest.mjs` — **16 checks**: modules render with concept cards, examples,
  rule and trap boxes and numbered worked steps; Presentation precedes Practice
  in the document; a wrong warm-up answer costs no life; a correct practice
  answer awards XP and a wrong one costs a life; the boss HP reaches zero and
  the certificate appears.
- `interact.mjs` — **11 checks** on the plain drill engine and the proctor sheet.

## Desmos

The eight maths lessons embed a live Desmos graph on the module where seeing
it beats reading it — slope/intercept sliders, a system's intersection, rate as
a line through the origin, a scatterplot with regression, the unit circle in
degree mode, the vertex-form flip, transformation sliders, and backsolving as
an intersection.

The script is loaded **deferred**, and only on lessons that use it. That is not
cosmetic: loaded synchronously it blocks HTML parsing, so a student on a slow
connection stares at a blank lesson until Desmos arrives. Deferred, the lesson
renders immediately and the graph fills in after — `quest.js` polls for
`window.Desmos`, and if it never appears the calculator is replaced by a short
notice rather than an empty white box. The API key is a client-side key by
design; it ships in page source on every Desmos embed.

## Companion document

A teacher-facing *course plan* — session-by-session, with exact PDF page numbers
and verified scan offsets for the books on the Drive — is kept out of this
repository. The run-sheets in `teacher/` carry the page references needed to
teach, plus a PPP breakdown naming each module in that lesson.
