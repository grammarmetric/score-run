# Score run — a 12-week gamified SAT programme

Live: **https://grammarmetric.github.io/score-run/**
All lessons: **https://grammarmetric.github.io/score-run/lessons.html**

A parent-facing programme overview, 16 playable lesson runs, 8 checkpoint
proctor pages, and a teacher run-sheet for every one of the 24 sessions. No
build step is needed to serve any of it; no account, no backend, no network
calls, no third-party libraries.

> **No student's name lives in this repository.** Same convention as
> star-quest-course: diagnostic scores are committed, personal data never is.

## Layout

```
index.html            parent-facing programme overview   (on-guide)
lessons.html          hub — every session, all three links
assets/
  run.css  run.js     SIGNAL LOST — the roguelike lesson engine
  lesson.css          the GrammarMetric design system
  lesson.js           the plain drill engine (same content, no game)
  proctor.js          checkpoint engine: timing, answer sheet, scoring
banks/  w01a.js …     lesson content, one file per teaching session (16)
lessons/w01a.html …   the run           (16)
lessons/w01a-plain…   the quiet twin    (16)
lessons/w04a.html …   checkpoint timers  (8)
teacher/w01a.html …   run-sheets        (24)
tools/                manifest, content source, build and test scripts
```

`banks/`, `lessons/` and `teacher/` are **generated**. Edit `tools/manifest.mjs`
(session metadata and run-sheets) or `tools/content-*.mjs` (the questions and
the presentation blocks), then:

```
node tools/gen.mjs        # rebuild every page
node tools/verify.mjs     # load all 66 pages headless, fail on any console error
node tools/playtest.mjs   # play a run to death and assert the game rules
node tools/interact.mjs   # assert the plain drill mechanics
```

## Signal lost — the game layer

Each teaching session is a **roguelike run**. Lose all your health and the run
ends and restarts from the briefing. A failed run costs about four minutes,
which is the point: it is cheap enough to go again without being asked.

PPP is the spine of the run, not a label stuck on it:

| Phase | In the run | What it does |
| --- | --- | --- |
| **Presentation** | Briefing | The rule is taught, one worked example is decrypted line by line, then a free shot that costs no HP. No timer, no risk. |
| **Practice** | Recon → waves | Name *why* each wrong option is wrong, then timed combat. Scaffolded: a scanner that removes an option, shields earned from streaks. |
| **Production** | Boss | No hints, no scaffolding, HP carried over from practice. Independent application. |

Roguelike systems: HP and max-HP, shields from streaks, a combo multiplier, a
three-card perk draft between stages, procedurally drawn enemies, a persisted
personal best, and permadeath per run.

The **confidence wager** became the attack choice — *Strike* or *Overcharge*.
Overcharge multiplies the score and costs 2 HP instead of 1 when it misses.
A miss still cannot be skipped: naming the error is what unlocks the next
question, and every named error lands in the damage report at the end.

Everything is procedural — WebAudio for sound, canvas for particles and
damage numbers, generated SVG for enemies. No image or audio files.

## Why this layer breaks the style guide

Deliberately, and only here. Glow, gradients, motion, screen shake and sound
are all in play, because the student this is for does not engage with anything
that does not look like a game — and the guide bans essentially every tool that
creates game feel.

The brand palette is kept, since those hexes were already neon and carry into an
arcade treatment without inventing a second colour language.

Everything else stays on-guide: `index.html`, `lessons.html`, the checkpoint
proctor pages and all 24 teacher sheets. Every run also has a `-plain.html`
twin with identical content and no game layer, for exam-condition work as the
real test gets closer.

The original adaptation stance was wrong for this student. It came from an
IELTS blueprint written for adult professionals, which argues *against* "cartoon
avatars, arbitrary badges and decorative experience points" — reasoning that
does not transfer to a sixteen-year-old who only responds to games.

## Checkpoints

The 8 sessions in weeks 4, 8, 11 and 12 run `proctor.js`: real module timing
(39 or 43 minutes), a digital answer sheet, a blank counter, and scoring against
the key typed in from the official answers PDF. **No game layer at all** — that
is what a checkpoint is for, and by week 12 the plain interface should feel
completely familiar.

## What was kept from the blueprint, and what was cut

| Kept | Cut |
| --- | --- |
| Score predictor with a range | AI essay marking — no SAT essay since 2021 |
| Confidence wagers → Strike / Overcharge | Speaking debates — the SAT has no speaking |
| Skill prerequisites → the PPP stage order | Team relays, breakout pods, peer marking |
| Mock-test tokens — the scarcity is genuine | Live leaderboards |
| Focus mode → the `-plain` twin pages | |

**Mock-test tokens** stop being invented scarcity: only four practice tests
match the current digital exam format. Tests 1, 2 and 4 are spent at the
checkpoints; test 3 is broken up for the week 11 drills.

## Design of the on-guide pages

- **Lexend** only, 400/500. No 600+. Sentence case everywhere.
- Lead accent set per page via `[data-lead]` — **cyan** reading, **orange**
  maths, **yellow** checkpoint — so colour tells you the session type.
- Flat surfaces, elevation opacity scale levels 1–2, radii 14/10/20,
  touch targets ≥ 44px.
- Dark default, light override, all three viewer states handled.
- Accent-as-text goes through `--lead-text`, swapping to the darkened pair in
  light mode: cyan `#006666`, orange `#3d0f00`, yellow `#736f00`. Raw
  `#00FFFF` on white is 1.25:1, a hard WCAG failure. Answer state never relies
  on colour alone — a text mark is appended alongside the fill.

The shared-assets split (rather than one self-contained file per page) is the
other deliberate deviation: 66 pages on one origin should not each carry a copy
of the engine. There is still no build pipeline — the generator emits plain
static files.

## Verification

All three harnesses pass at the time of committing:

- `verify.mjs` — loads all 66 pages in headless Chrome, fails on any console
  error or uncaught exception, checks script-built pages actually populated.
- `playtest.mjs` — plays a real run: asserts the briefing costs no HP, the
  commit gate locks the options, an overcharged miss costs 2 HP less shields,
  a miss cannot be skipped without naming it, and zero HP ends the run with a
  damage report. 23 checks.
- `interact.mjs` — the same assertions against the plain drill engine, plus
  the proctor answer sheet and blank counter. 11 checks.

## Companion document

A teacher-facing *course plan* — session-by-session, with exact PDF page
numbers and verified scan offsets for the books on the Drive — is kept out of
this repository on purpose. The run-sheets in `teacher/` carry the page
references needed to actually teach, plus a PPP breakdown of what each stage
of the run is doing pedagogically.
