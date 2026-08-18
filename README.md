# Score run — a 12-week gamified SAT programme

Live: **https://grammarmetric.github.io/score-run/**

A single, self-contained page explaining a 12-week SAT course to a **parent**.
One HTML file, no build step, no dependencies beyond the Lexend webfont.

> **No student's name lives in this repository.** Same convention as
> star-quest-course: diagnostic scores are committed, personal data never is.
> The page says "your child" throughout.

## What this is

The course is built from two real sources rather than invented:

1. **The diagnostic** — a third-party SAT mock: **710 overall** (Reading &
   Writing 320, Math 390), 36 of 98 correct. Every percentage on the page is
   from that result, not illustrative.
2. **The materials** — the SAT folder on the teaching Drive: four
   format-accurate practice tests, the College Panda writing guide, the Kaplan
   math chapters, and a purpose-built interactive geometry lesson.

The gamification layer is adapted from an IELTS hybrid-classroom blueprint
written for cohorts of 20+ on a bespoke platform. Most of it does not survive
contact with one student and two hours, so the page is explicit about what was
kept and what was cut:

| Kept | Cut |
| --- | --- |
| Running score predictor with a range | AI essay marking — no SAT essay since 2021 |
| Confidence wagers before answering | Speaking debates — the SAT has no speaking |
| Skill tree with ordered prerequisites | Team relays, breakout pods, peer marking |
| Mock-test tokens (scarcity is genuine) | Live leaderboards |
| Focus mode that hides the game layer | |

Two adaptations improved on the original. Mock-test tokens stop being invented
scarcity, because only four practice tests actually match the current exam
format. And confidence wagers stop being generic metacognition: this student
answered all 54 reading questions, left none blank, and got 17 right, so
"which of these do I actually know" is precisely the deficit.

## Design

Follows the GrammarMetric style guide:

- **Lexend** only, weights 400/500. No 600+.
- Sentence case everywhere — headings, labels, chips.
- Locked palette; lead accent is **cyan** (progress/informational). Yellow is
  spent in exactly two places: the target score and the ask of home.
- Flat surfaces only — no gradients, shadows, or blur. Depth via the elevation
  opacity scale (levels 1–2 only).
- Radii 14px cards / 10px controls / 20px pills.
- Dark mode is the default; light mode is the override, and all three viewer
  states (explicit dark, explicit light, unset system preference) are handled.

**Contrast:** accent-as-text swaps to its darkened pair in light mode —
cyan `#006666`, yellow `#736f00`, orange `#3d0f00`. Without the cyan swap,
`#00FFFF` on white is 1.25:1, a hard WCAG failure. Highlighted cards use a
14% tint of the accent, never a raw fill.

## Companion document

A teacher-facing version of the same course — session-by-session, with exact
PDF page numbers and verified scan offsets for the books on the Drive — is
kept **out of this repository** on purpose. It contains planning framing not
meant for a parent audience.
