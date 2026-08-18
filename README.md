# Score run — a 12-week gamified SAT programme

Live: **https://grammarmetric.github.io/score-run/**
All lessons: **https://grammarmetric.github.io/score-run/lessons.html**

A parent-facing programme overview plus 24 self-contained lesson pages — one
per class — each with a matching run-sheet for the teacher. No build step is
needed to serve any of it; no account, no backend, no network calls.

> **No student's name lives in this repository.** Same convention as
> star-quest-course: diagnostic scores are committed, personal data never is.

## Layout

```
index.html          parent-facing programme overview
lessons.html        hub — all 24 sessions, student page + teacher sheet
assets/
  lesson.css        the whole design system, shared by every page
  lesson.js         PPP engine: trap forensics, speed lab, simulation
  proctor.js        checkpoint engine: exam timing, answer sheet, scoring
banks/  w01a.js …   question content, one file per teaching session
lessons/w01a.html … student page per session   (24)
teacher/w01a.html … teacher run-sheet per session (24)
tools/              manifest, content source and the build + verify scripts
```

`lessons/` and `teacher/` and `banks/` are **generated**. Edit
`tools/manifest.mjs` (session metadata, run-sheets) or `tools/content-*.mjs`
(questions), then:

```
node tools/gen.mjs        # rebuild all pages
node tools/verify.mjs     # load all 50 pages headless, fail on any console error
node tools/interact.mjs   # drive the mechanics and assert they work
```

## Session types

**16 teaching sessions** run the three-phase shape, driven by `lesson.js`:

| Phase | What happens | Mechanic |
| --- | --- | --- |
| Trap forensics | No answering. Every wrong option gets labelled with *why* it is wrong | Diagnostic stamps; naming the trap is the transferable skill |
| Speed lab | Timed at real exam pace — 71 s a question in reading, 95 s in maths | Confidence wager, streak multiplier, Socratic loop on any miss |
| Simulation | One block, exam conditions, no feedback until the end | Teach-back prompts, including on correct answers |

**8 checkpoint sessions** (weeks 4, 8, 11, 12) run `proctor.js` instead: real
module timing, a digital answer sheet, and scoring against the key from the
official PDF. The game layer is absent by design — that is the point of a
checkpoint.

## The mechanics, and why these ones

Adapted from an IELTS hybrid-classroom blueprint written for cohorts of 20+ on
a bespoke platform. Most of it does not survive contact with one student and
two hours:

| Kept | Cut |
| --- | --- |
| Score predictor with a range | AI essay marking — no SAT essay since 2021 |
| Confidence wagers before answering | Speaking debates — the SAT has no speaking |
| Skill tree with ordered prerequisites | Team relays, breakout pods, peer marking |
| Mock-test tokens (scarcity is genuine) | Live leaderboards |
| Focus mode that hides the game layer | |

The **confidence wager** is load-bearing. This student answered all 54 reading
questions, left none blank, and got 17 right — so the deficit is not only
knowledge but knowing which answers are sound. The options stay locked until a
confidence level is declared, and a wrong answer cannot be skipped past: the
Socratic loop requires the error to be classified before the page moves on.

**Mock-test tokens** stop being invented scarcity, because only four practice
tests actually match the current digital exam format. Tests 1, 2 and 4 are
spent at the checkpoints; test 3 is broken up for the week 11 drills.

## Design

Follows the GrammarMetric style guide:

- **Lexend** only, weights 400/500. No 600+. Sentence case everywhere.
- Locked palette. Lead accent is set per page via `[data-lead]` on `<html>` —
  **cyan** for reading and writing, **orange** for maths, **yellow** for
  checkpoints — so the accent tells you what kind of session you are in.
- Flat surfaces only: no gradients, shadows or blur. Depth comes from the
  elevation opacity scale, levels 1–2 only.
- Radii 14px cards / 10px controls / 20px pills. Touch targets ≥ 44px.
- Dark mode default, light override, and all three viewer states handled
  (explicit dark, explicit light, unset system preference).

**Contrast:** every accent-as-text use goes through `--lead-text`, which swaps
to the darkened pair in light mode — cyan `#006666`, orange `#3d0f00`, yellow
`#736f00`. Raw `#00FFFF` on white is 1.25:1, a hard WCAG failure. Answer state
never relies on colour alone: a text mark is appended alongside the fill.

**One deviation from the guide**, deliberate: the guide asks for a single
self-contained HTML file per project, which exists so pages survive being
dropped into a Google Sites iframe. These 48 pages are served from one origin
with their own links, so they share `assets/lesson.css` and `assets/lesson.js`
rather than duplicating the engine 48 times. There is still no build pipeline
or bundler — the generator emits plain static files.

## Verification

`tools/verify.mjs` loads all 50 pages in headless Chrome and fails on any
console error or uncaught exception, checking that script-built pages actually
populated. `tools/interact.mjs` drives the speed lab and asserts the mechanics:
the wager gate locks the options, a wrong answer opens the Socratic loop and
cannot be skipped, the multiplier resets, focus mode hides every game element,
and the proctor sheet counts blanks. Both pass at the time of committing.

## Companion document

A teacher-facing *course plan* — session-by-session, with exact PDF page
numbers and verified scan offsets for the books on the Drive — is kept out of
this repository on purpose. The per-session run-sheets in `teacher/` carry the
page references needed to actually teach.
