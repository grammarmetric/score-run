/* w01b — Linear equations, and what slope means. Generated from tools/content-*.mjs */
window.LESSON = {
 "id": "w01b",
 "week": 1,
 "session": "B",
 "lead": "orange",
 "domain": "Mathematics",
 "title": "Linear equations, and what slope means",
 "sub": "Algebra is the one real strength on the diagnostic — 52%. This session is about converting it, and about finding out exactly which 48% is failing.",
 "stampSet": "math",
 "present": {
  "hook": {
   "icon": "🎁",
   "title": "Solving is not finishing",
   "text": "The most expensive mistake in SAT maths is not getting the algebra wrong. It is getting the algebra right, finding x, and handing in x when the question asked for 2x. The wrong answers are built from this — one of them is always the value of x, sitting there waiting for you. Underlining what is actually asked, before you start, is worth more marks than any technique in this lesson."
  },
  "modules": [
   {
    "title": "Underline the ask",
    "accent": "sky",
    "lead": "Read the final clause of the question first and underline exactly what it wants. Then solve.",
    "concepts": [
     {
      "i": "✏️",
      "t": "Before solving",
      "d": "Underline the quantity asked for: x, or 2x, or x + 1, or “the value of the expression”."
     },
     {
      "i": "🔁",
      "t": "After solving",
      "d": "Go back to the underline. Compare it with what you have written down."
     },
     {
      "i": "🪤",
      "t": "The decoy",
      "d": "The value of x is nearly always one of the four options, even when x is not what was asked.",
      "f": "found x ≠ finished"
     }
    ],
    "examples": [
     {
      "ok": true,
      "t": "5x − 3 = 12 → x = 3 → asked for 10x → <span class=\"hl-ok\">30</span>",
      "note": "Solved, then went back to the underline."
     },
     {
      "ok": false,
      "t": "5x − 3 = 12 → x = <span class=\"hl-no\">3</span> → answered 3",
      "note": "Correct algebra, wrong quantity. Full marks lost."
     }
    ],
    "rule": "Underline the ask before the first line of working, and check against it before you choose.",
    "trap": "This error feels impossible until it happens under time pressure. It is the single most common avoidable loss on the maths section.",
    "worked": {
     "q": "If 5x − 3 = 12, what is the value of 10x?",
     "steps": [
      "Underline the ask: <strong>10x</strong> — not x.",
      "Add 3 to both sides: 5x = 15.",
      "Divide by 5: x = 3. This is where most people stop and lose the mark.",
      "Return to the underline. It said 10x, so multiply: 10 × 3."
     ],
     "answer": "10x = 30. Note that 3 is offered as an option."
    }
   },
   {
    "title": "Isolating x, in reverse order",
    "accent": "teal",
    "lead": "To undo an equation, reverse the operations and reverse their order — the last thing done to x is the first thing you undo.",
    "concepts": [
     {
      "i": "➕",
      "t": "Undo add/subtract",
      "d": "Move constants across first by doing the opposite."
     },
     {
      "i": "✖️",
      "t": "Undo multiply/divide",
      "d": "Then deal with the coefficient."
     },
     {
      "i": "🧊",
      "t": "Brackets",
      "d": "When x sits inside brackets, dividing by the outside number first is usually faster than expanding.",
      "f": "4(x − 1) = 20 → x − 1 = 5"
     }
    ],
    "examples": [
     {
      "ok": true,
      "t": "4(x − 1) = 20 → divide by 4 → x − 1 = 5 → <span class=\"hl-ok\">x = 6</span>",
      "note": "Divide first: one line of working instead of three."
     },
     {
      "ok": false,
      "t": "4(x − 1) = 20 → 4x − 1 = 20",
      "note": "The 4 was multiplied into only the first term. Both terms in the bracket must be multiplied."
     }
    ],
    "rule": "Whatever you do to one side, do to the other. Undo in reverse order.",
    "trap": "Sign errors when moving terms across. Every wrong option in these questions is reachable by exactly one sign slip.",
    "tip": "When the bracket has a clean factor, divide before expanding. Fewer steps means fewer chances to slip.",
    "worked": {
     "q": "If 4(x − 1) = 20, what is x?",
     "steps": [
      "The bracket is multiplied by 4, and 20 divides by 4 cleanly — so divide first.",
      "4(x − 1) ÷ 4 = 20 ÷ 4, giving x − 1 = 5.",
      "Now undo the subtraction: add 1 to both sides.",
      "Check by substituting back: 4(6 − 1) = 4 × 5 = 20 ✓"
     ],
     "answer": "x = 6."
    }
   },
   {
    "title": "Slope is a rate, the intercept is a start",
    "accent": "olive",
    "lead": "The SAT rarely asks you to compute a slope in isolation. It asks what the slope <em>means</em> in the situation described.",
    "concepts": [
     {
      "i": "📈",
      "t": "Slope = rate",
      "d": "How much y changes for each 1 unit of x. In a cost model, the price per hour or per item.",
      "f": "m = (y₂ − y₁) ÷ (x₂ − x₁)"
     },
     {
      "i": "🏁",
      "t": "Intercept = start",
      "d": "The value when x is zero. The fixed fee, the joining charge, the starting amount."
     },
     {
      "i": "📐",
      "t": "Same order",
      "d": "Subtract in the same order on top and bottom or the sign flips.",
      "f": "y = mx + b"
     }
    ],
    "examples": [
     {
      "ok": true,
      "t": "C = 45 + 30h → <span class=\"hl-ok\">30 is the hourly rate</span>, 45 is the call-out fee.",
      "note": "The number attached to the variable is the rate."
     },
     {
      "ok": false,
      "t": "C = 45 + 30h → <span class=\"hl-no\">30 is the call-out fee</span>",
      "note": "Swapped. The constant, not the coefficient, is the fixed charge."
     }
    ],
    "rule": "The number multiplying the variable is the rate; the number standing alone is the starting amount.",
    "trap": "Both numbers appear in the options with their meanings swapped, and a third option gives their sum — the cost of one hour.",
    "worked": {
     "q": "A line passes through (2, 5) and (6, 13). What is its slope?",
     "steps": [
      "Slope is change in y over change in x.",
      "Change in y: 13 − 5 = 8. Keep the order — second point minus first.",
      "Change in x, in the SAME order: 6 − 2 = 4.",
      "Divide: 8 ÷ 4. Reversing one subtraction but not the other is what produces the negative decoy."
     ],
     "answer": "The slope is 2."
    },
    "desmos": {
     "title": "Slope and intercept explorer",
     "hint": "Drag <code>m</code> and watch the steepness change. Then drag <code>b</code> — the line slides up and down without ever changing steepness. That is the whole difference between a rate and a starting amount.",
     "bounds": {
      "left": -10,
      "right": 10,
      "bottom": -10,
      "top": 10
     },
     "expressions": [
      {
       "id": "m",
       "latex": "m=2",
       "sliderBounds": {
        "min": -5,
        "max": 5,
        "step": 0.1
       }
      },
      {
       "id": "b",
       "latex": "b=3",
       "sliderBounds": {
        "min": -8,
        "max": 8,
        "step": 0.5
       }
      },
      {
       "id": "line",
       "latex": "y=mx+b",
       "color": "#54c1e6"
      },
      {
       "id": "yint",
       "latex": "(0,b)",
       "color": "#fee801",
       "showLabel": true,
       "label": "starting amount"
      }
     ]
    }
   }
  ],
  "check": {
   "stem": "If 2x = 8, what is 4x?",
   "options": [
    "4",
    "16"
   ],
   "answer": 1,
   "explain": "x = 4, but the question asked for 4x, which is 16."
  }
 },
 "forensics": {
  "intro": "Every wrong answer here is what you get by making one specific mistake. Name the mistake — that is what stops you repeating it.",
  "watch": [
   "Underline what the question actually asks for before solving",
   "If you find x but the question wanted 2x, you have not finished",
   "Slope is the rate; the intercept is the starting amount"
  ],
  "items": [
   {
    "stem": "If 5x − 3 = 12, what is the value of 10x?",
    "options": [
     {
      "t": "3",
      "trap": "misread",
      "why": "This is x. The question asked for 10x — finding x is only the first step."
     },
     {
      "t": "30",
      "correct": true
     },
     {
      "t": "15",
      "trap": "partial",
      "why": "This is 5x. You stopped one line early."
     },
     {
      "t": "1.8",
      "trap": "slip",
      "why": "This comes from dividing 9 by 5 — subtracting 3 instead of adding it when moving it across."
     }
    ],
    "explain": "5x − 3 = 12, so 5x = 15 and x = 3. The question asked for 10x, which is <strong>30</strong>. Always re-read the final line before choosing."
   },
   {
    "stem": "A plumber charges according to C = 45 + 30h, where C is the total cost in dollars and h is the number of hours worked. What does 30 represent?",
    "options": [
     {
      "t": "The fixed call-out fee",
      "trap": "swap",
      "why": "That is the 45 — the amount charged before any hours are worked."
     },
     {
      "t": "The hourly rate",
      "correct": true
     },
     {
      "t": "The total cost of a one-hour job",
      "trap": "slip",
      "why": "A one-hour job costs 45 + 30 = 75. This confuses the rate with a total."
     },
     {
      "t": "The number of hours worked",
      "trap": "misread",
      "why": "That is h, the variable — not the number multiplying it."
     }
    ],
    "explain": "In C = 45 + 30h the number attached to h is the rate of change: the <strong>hourly rate</strong>. The constant 45 is the starting amount."
   },
   {
    "stem": "A line passes through the points (2, 5) and (6, 13). What is its slope?",
    "options": [
     {
      "t": "2",
      "correct": true
     },
     {
      "t": "0.5",
      "trap": "swap",
      "why": "Rise and run have been swapped — this is 4 divided by 8 instead of 8 divided by 4."
     },
     {
      "t": "−2",
      "trap": "sign",
      "why": "The subtraction has been done in opposite orders on top and bottom."
     },
     {
      "t": "4",
      "trap": "partial",
      "why": "This is the run — the change in x — not the slope."
     }
    ],
    "explain": "Slope is change in y over change in x: (13 − 5) ÷ (6 − 2) = 8 ÷ 4 = <strong>2</strong>. Keep both subtractions in the same order."
   }
  ]
 },
 "speed": {
  "seconds": 95,
  "items": [
   {
    "stem": "If 2x + 7 = 19, what is x?",
    "options": [
     "6",
     "12",
     "13",
     "26"
    ],
    "answer": 0,
    "skill": "Linear equations",
    "explain": "2x = 12, so x = 6."
   },
   {
    "stem": "If 4(x − 1) = 20, what is x?",
    "options": [
     "6",
     "5",
     "4",
     "24"
    ],
    "answer": 0,
    "skill": "Linear equations",
    "explain": "Divide first: x − 1 = 5, so x = 6."
   },
   {
    "stem": "A line passes through (0, 3) and (4, 11). What is its slope?",
    "options": [
     "8",
     "2",
     "0.5",
     "4"
    ],
    "answer": 1,
    "skill": "Slope",
    "explain": "(11 − 3) ÷ (4 − 0) = 8 ÷ 4 = 2."
   },
   {
    "stem": "What is the y-intercept of y = −3x + 7?",
    "options": [
     "−3",
     "3",
     "7",
     "−7"
    ],
    "answer": 2,
    "skill": "Slope and intercept",
    "explain": "The constant term is the y-intercept: 7."
   },
   {
    "stem": "If 3x − 5 = 16, what is the value of 6x?",
    "options": [
     "7",
     "21",
     "42",
     "11"
    ],
    "answer": 2,
    "skill": "Answering the question asked",
    "explain": "3x = 21, x = 7, so 6x = 42."
   },
   {
    "stem": "A gym charges a $25 joining fee plus $15 a month. Which expression gives the cost after m months?",
    "options": [
     "25m + 15",
     "15m + 25",
     "40m",
     "25 + 15"
    ],
    "answer": 1,
    "skill": "Modelling",
    "explain": "The monthly rate multiplies m; the joining fee is added once."
   },
   {
    "stem": "What is the x-intercept of y = 2x − 4?",
    "options": [
     "−4",
     "4",
     "2",
     "−2"
    ],
    "answer": 2,
    "skill": "Intercepts",
    "explain": "Set y = 0: 2x − 4 = 0, so x = 2."
   },
   {
    "stem": "If x ÷ 3 + 2 = 7, what is x?",
    "options": [
     "15",
     "5",
     "27",
     "3"
    ],
    "answer": 0,
    "skill": "Linear equations",
    "explain": "x ÷ 3 = 5, so x = 15."
   }
  ]
 },
 "sim": {
  "seconds": 95,
  "items": [
   {
    "stem": "If 5x + 2 = 27, what is x?",
    "options": [
     "5",
     "25",
     "29",
     "6"
    ],
    "answer": 0,
    "skill": "Linear equations",
    "explain": "5x = 25, so x = 5."
   },
   {
    "stem": "A line passes through (1, 4) and (5, 16). What is its slope?",
    "options": [
     "12",
     "4",
     "3",
     "0.33"
    ],
    "answer": 2,
    "skill": "Slope",
    "explain": "(16 − 4) ÷ (5 − 1) = 12 ÷ 4 = 3."
   },
   {
    "stem": "A taxi fare is given by C = 60 + 20h. What does 60 represent?",
    "options": [
     "The hourly rate",
     "The fixed starting charge",
     "The total for one hour",
     "The number of hours"
    ],
    "answer": 1,
    "skill": "Interpreting models",
    "explain": "The constant is the amount charged before any hours accumulate."
   },
   {
    "stem": "If 2(x + 3) = 14, what is x?",
    "options": [
     "4",
     "7",
     "10",
     "5"
    ],
    "answer": 0,
    "skill": "Linear equations",
    "explain": "x + 3 = 7, so x = 4."
   },
   {
    "stem": "What is the slope of y = −4x + 9?",
    "options": [
     "9",
     "4",
     "−4",
     "−9"
    ],
    "answer": 2,
    "skill": "Slope",
    "explain": "The number multiplying x is the slope: −4."
   }
  ],
  "teachback": [
   "Take any question above and say aloud what the question asked for, versus what you solved for first.",
   "Explain in words what the slope of a cost equation means.",
   "Name a question you got right but were not sure about. What would you check next time?"
  ]
 }
};
