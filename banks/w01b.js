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
  "rule": "Solve the equation, then read the question again. It often asks for something other than x.",
  "steps": [
   "Underline exactly what the question asks for before you start",
   "Undo operations in reverse order to isolate x",
   "Check what was underlined — is it x, or 2x, or x + 1?",
   "For a line, slope is the rate of change and the constant is the starting amount"
  ],
  "worked": {
   "text": "If 5x − 3 = 12, what is the value of 10x?",
   "lines": [
    "Underline the ask: <em>10x</em>, not x.",
    "Add 3 to both sides: 5x = 15.",
    "Divide by 5: x = 3. This is where most people stop and lose the mark.",
    "The ask was 10x, so the answer is <em>30</em>."
   ]
  },
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
