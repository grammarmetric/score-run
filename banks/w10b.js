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
