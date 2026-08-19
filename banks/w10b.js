/* w10b — Exam craft. Generated from tools/content-*.mjs */
window.LESSON = {
 "id": "w10b",
 "week": 10,
 "session": "B",
 "lead": "orange",
 "domain": "Mathematics",
 "title": "Exam craft",
 "sub": "The techniques that only pay once the content is there — which, by week 10, it is. Mixed questions with no topic labels.",
 "stampSet": "math",
 "present": {
  "hook": {
   "icon": "🧰",
   "title": "Technique only pays once the content is there",
   "text": "By week 10 the content is in place, which is the only reason this lesson comes now rather than in week 1. Technique amplifies knowledge; it never replaces it. Three tools: work backwards from the answers, pick a number when the answers are expressions, and never — under any circumstances — leave a bubble empty."
  },
  "modules": [
   {
    "title": "Backsolving",
    "accent": "sky",
    "lead": "When the four options are numbers, one of them is the answer. Substitute and check instead of solving.",
    "concepts": [
     {
      "i": "🔢",
      "t": "When to use it",
      "d": "The options are plain numbers and the algebra looks messy."
     },
     {
      "i": "🎯",
      "t": "Start in the middle",
      "d": "Options are usually ordered. Starting at B or C tells you which way to go next."
     },
     {
      "i": "✅",
      "t": "Substitute properly",
      "d": "Put the number into the original equation and check both sides match."
     }
    ],
    "examples": [
     {
      "ok": true,
      "t": "3x − 7 = 14, try 7: 3(7) − 7 = <span class=\"hl-ok\">14 ✓</span>",
      "note": "Substituted and verified."
     },
     {
      "ok": false,
      "t": "3x − 7 = 14, “7 looks about right”",
      "note": "Backsolving means checking, not estimating."
     }
    ],
    "rule": "Backsolving is substitution, not guessing. Always verify the arithmetic.",
    "trap": "Starting at option A wastes time when the answer is D. Start in the middle and use the result to choose a direction.",
    "worked": {
     "q": "Which value of x satisfies 3x − 7 = 14?",
     "steps": [
      "The options are numbers, so backsolving is available.",
      "Start with a middle option. Try x = 7: 3(7) = 21, then 21 − 7 = 14.",
      "That matches the right-hand side exactly, so it is correct.",
      "If it had come out too small, you would move to a larger option — the ordering tells you which way."
     ],
     "answer": "x = 7."
    }
   },
   {
    "title": "Picking numbers",
    "accent": "teal",
    "lead": "When the options are expressions rather than numbers, choose a value for the variable and turn the whole question into arithmetic.",
    "concepts": [
     {
      "i": "🎲",
      "t": "When to use it",
      "d": "The answers contain letters, or the question says “in terms of n”."
     },
     {
      "i": "🚫",
      "t": "Avoid 0 and 1",
      "d": "They make too many options come out the same, so they cannot separate them."
     },
     {
      "i": "🔁",
      "t": "Test twice",
      "d": "If two options survive your first number, try a second one."
     }
    ],
    "examples": [
     {
      "ok": true,
      "t": "n even, which is always odd? Try n = 4 → <span class=\"hl-ok\">n + 1 = 5</span> ✓, confirm with n = 10 → 11 ✓",
      "note": "Two values tested."
     },
     {
      "ok": false,
      "t": "Try n = 0 → 2n = 0, n + 2 = 2, n ÷ 2 = 0",
      "note": "Zero makes several options coincide and separates nothing."
     }
    ],
    "rule": "Pick a small, awkward, convenient number — 4 or 5 works far better than 0, 1 or 10.",
    "trap": "Testing only one value. If two options both survive, you must test a second before choosing.",
    "worked": {
     "q": "If n is an even integer, which expression is always odd?",
     "steps": [
      "The options are expressions, so pick a value. Let n = 4.",
      "Test each: 2n = 8 (even), n ÷ 2 = 2 (even), n + 2 = 6 (even), n + 1 = 5 (odd).",
      "Only one came out odd — but confirm with a second value.",
      "Let n = 10: n + 1 = 11, still odd. Two confirmations is enough."
     ],
     "answer": "n + 1, found without any algebra at all."
    }
   },
   {
    "title": "Pacing, and the blank rule",
    "accent": "olive",
    "lead": "There is no penalty for a wrong answer on the SAT. That single fact settles how you should behave when time is short.",
    "concepts": [
     {
      "i": "⏱️",
      "t": "The 30-second rule",
      "d": "No route into a question after 30 seconds? Mark it, guess, move on, come back."
     },
     {
      "i": "🎯",
      "t": "Guess beats blank",
      "d": "A blank scores zero every time. A guess scores 25% of the time."
     },
     {
      "i": "🔁",
      "t": "Come back",
      "d": "Questions you skipped are often easy on a second pass with fresh eyes."
     }
    ],
    "examples": [
     {
      "ok": true,
      "t": "Stuck at 30 seconds → mark, guess, move on → <span class=\"hl-ok\">time preserved</span>",
      "note": "Two other questions got answered with the time saved."
     },
     {
      "ok": false,
      "t": "Stuck → keep pushing for four minutes → <span class=\"hl-no\">three questions unreached</span>",
      "note": "One hard mark chased at the cost of three easier ones."
     }
    ],
    "rule": "Every bubble gets filled. Always. There is nothing to lose by guessing.",
    "trap": "Sunk cost. Two minutes into a question it feels wasteful to abandon it — which is precisely when abandoning it is worth the most.",
    "tip": "Your original diagnostic had one blank in the maths section. That was 25% of a mark handed back for nothing.",
    "worked": {
     "q": "Time is nearly up and you have no route into a question. What do you do?",
     "steps": [
      "Check the scoring rule: the SAT applies no penalty for a wrong answer.",
      "So compare the options. A blank scores zero with certainty.",
      "A guess between four choices scores about a quarter of the time.",
      "One is strictly better than the other, so there is never a reason to leave a blank."
     ],
     "answer": "Guess and move on. Never leave it empty."
    }
   }
  ],
  "check": {
   "stem": "Time is nearly up and you have no route into a question. Do what?",
   "options": [
    "Leave it blank",
    "Guess and move on"
   ],
   "answer": 1,
   "explain": "No penalty for a wrong answer, so a guess is strictly better than a blank."
  }
 },
 "forensics": {
  "intro": "No topic labels from here on. The first job on every question is recognising what kind of question it is. Name the fault in each wrong option.",
  "watch": [
   "When the options are numbers, try working backwards from the middle one",
   "When the options are expressions, pick a value and test it",
   "Avoid picking 0 or 1 — they make too many options look right"
  ],
  "items": [
   {
    "stem": "Which value of x satisfies 3x − 7 = 14?",
    "options": [
     {
      "t": "5",
      "trap": "slip",
      "why": "Testing it: 3(5) − 7 = 8, not 14. Backsolving means substituting to check, not estimating."
     },
     {
      "t": "7",
      "correct": true
     },
     {
      "t": "21",
      "trap": "partial",
      "why": "That is 3x, not x."
     },
     {
      "t": "2.33",
      "trap": "slip",
      "why": "This divides 7 by 3 — working with the wrong number."
     }
    ],
    "explain": "Backsolving: try the middle options first. 3(7) − 7 = 14 ✓. The answer is <strong>7</strong>. This technique only helps if you actually substitute."
   },
   {
    "stem": "If n is an even integer, which expression is always odd?",
    "options": [
     {
      "t": "2n",
      "trap": "misread",
      "why": "Test n = 4: 2n = 8, which is even. Doubling anything gives an even number."
     },
     {
      "t": "n + 1",
      "correct": true
     },
     {
      "t": "n ÷ 2",
      "trap": "misread",
      "why": "Test n = 8: n ÷ 2 = 4, even. It also is not guaranteed to be an integer."
     },
     {
      "t": "n + 2",
      "trap": "misread",
      "why": "Test n = 4: n + 2 = 6, even. Adding two keeps the parity the same."
     }
    ],
    "explain": "Pick a number and test. With n = 4: only n + 1 = 5 is odd. Test a second value to be sure — <strong>n + 1</strong> works every time."
   },
   {
    "stem": "A question gives four expressions as answer choices and no numbers at all. What is the most efficient first move?",
    "options": [
     {
      "t": "Solve it algebraically from scratch",
      "trap": "partial",
      "why": "Sometimes correct, but usually slower — and the exam is scored on marks per minute, not elegance."
     },
     {
      "t": "Pick a convenient value for the variable and test each option",
      "correct": true
     },
     {
      "t": "Guess and move on",
      "trap": "misread",
      "why": "Guessing is the right move only after a genuine attempt has failed."
     },
     {
      "t": "Use the calculator on each option",
      "trap": "partial",
      "why": "Without choosing a value first there is nothing for the calculator to work on."
     }
    ],
    "explain": "When the answers are expressions rather than numbers, <strong>picking a value</strong> converts an abstract question into arithmetic. Avoid 0 and 1."
   }
  ]
 },
 "speed": {
  "seconds": 95,
  "items": [
   {
    "stem": "Which value of x satisfies 4x + 3 = 23?",
    "options": [
     "5",
     "4",
     "6",
     "20"
    ],
    "answer": 0,
    "skill": "Backsolving",
    "explain": "4(5) + 3 = 23 ✓."
   },
   {
    "stem": "If n is odd, which is always even?",
    "options": [
     "n + 2",
     "2n",
     "n²",
     "n − 2"
    ],
    "answer": 1,
    "skill": "Picking numbers",
    "explain": "Any integer doubled is even. Test n = 3: 2n = 6."
   },
   {
    "stem": "If 2(x − 3) = 10, what is x?",
    "options": [
     "8",
     "5",
     "11",
     "2"
    ],
    "answer": 0,
    "skill": "Backsolving",
    "explain": "x − 3 = 5, so x = 8. Check: 2(5) = 10 ✓."
   },
   {
    "stem": "A number is increased by 40% and then decreased by 40%. Compared with the original it is:",
    "options": [
     "the same",
     "larger",
     "smaller",
     "impossible to tell"
    ],
    "answer": 2,
    "skill": "Picking numbers",
    "explain": "Take 100: 140, then 40% off gives 84. Percentages apply to different bases."
   },
   {
    "stem": "Which is largest?",
    "options": [
     "0.4",
     "3 ÷ 8",
     "0.35",
     "1 ÷ 3"
    ],
    "answer": 0,
    "skill": "Comparing values",
    "explain": "3 ÷ 8 = 0.375 and 1 ÷ 3 ≈ 0.333, so 0.4 is largest."
   },
   {
    "stem": "If x = 5, what is 3x² ?",
    "options": [
     "225",
     "75",
     "30",
     "15"
    ],
    "answer": 1,
    "skill": "Order of operations",
    "explain": "Square first: 3 × 25 = 75."
   },
   {
    "stem": "You have 30 seconds left and no route into a question. What is the correct move?",
    "options": [
     "Keep working on it",
     "Leave it blank",
     "Guess and move on",
     "Restart the question"
    ],
    "answer": 2,
    "skill": "Exam craft",
    "explain": "There is no penalty for a wrong answer, so a guess is strictly better than a blank."
   },
   {
    "stem": "If 5(x + 2) = 45, what is x?",
    "options": [
     "7",
     "9",
     "43",
     "11"
    ],
    "answer": 0,
    "skill": "Backsolving",
    "explain": "x + 2 = 9, so x = 7. Check: 5(9) = 45 ✓."
   }
  ]
 },
 "sim": {
  "seconds": 95,
  "items": [
   {
    "stem": "Which value of x satisfies 6x − 4 = 26?",
    "options": [
     "5",
     "4",
     "6",
     "30"
    ],
    "answer": 0,
    "skill": "Backsolving",
    "explain": "6(5) − 4 = 26 ✓."
   },
   {
    "stem": "If n is an integer, which is always an integer?",
    "options": [
     "n ÷ 2",
     "n ÷ 3",
     "2n",
     "√n"
    ],
    "answer": 2,
    "skill": "Picking numbers",
    "explain": "Doubling an integer always gives an integer; the others fail for most values."
   },
   {
    "stem": "A price is decreased by 20% and then increased by 20%. Compared with the original it is:",
    "options": [
     "the same",
     "larger",
     "smaller",
     "cannot tell"
    ],
    "answer": 2,
    "skill": "Picking numbers",
    "explain": "Take 100: 80, then +20% gives 96."
   },
   {
    "stem": "Which is smallest?",
    "options": [
     "0.25",
     "1 ÷ 5",
     "0.3",
     "2 ÷ 7"
    ],
    "answer": 1,
    "skill": "Comparing values",
    "explain": "1 ÷ 5 = 0.2, the smallest of the four."
   },
   {
    "stem": "If x = 3, what is 2x³ ?",
    "options": [
     "216",
     "54",
     "18",
     "27"
    ],
    "answer": 1,
    "skill": "Order of operations",
    "explain": "Cube first: 2 × 27 = 54."
   }
  ],
  "teachback": [
   "When do you backsolve, and when do you pick a number?",
   "Why should you avoid picking 0 or 1 as a test value?",
   "State the rule about blank answers, and why it is true."
  ]
 }
};
