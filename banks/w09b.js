/* w09b — Repair session. Generated from tools/content-*.mjs */
window.LESSON = {
 "id": "w09b",
 "week": 9,
 "session": "B",
 "lead": "orange",
 "domain": "Mathematics",
 "title": "Repair session",
 "sub": "Deliberately unallocated. Whatever checkpoint 2 exposed is what gets taught here — this page carries mixed advanced-maths work as the default.",
 "stampSet": "math",
 "present": {
  "rule": "Exponent rules apply to multiplication and division, never to addition. Graph shifts inside the bracket go the opposite way to the sign.",
  "steps": [
   "Multiplying powers of the same base: ADD the exponents",
   "Dividing: subtract. A power of a power: multiply",
   "A change inside f( ) moves the graph horizontally, opposite to the sign",
   "A change outside f( ) moves it vertically, in the direction of the sign"
  ],
  "worked": {
   "text": "The graph of y = f(x) becomes y = f(x − 3). Describe the shift.",
   "lines": [
    "The change is INSIDE the bracket, so the movement is horizontal.",
    "Inside changes always move the graph opposite to the sign.",
    "The sign is minus, so the graph moves in the positive direction.",
    "It shifts <em>3 units right</em>. This one feels backwards, which is exactly why it is tested."
   ]
  },
  "check": {
   "stem": "Simplify x³ × x⁴.",
   "options": [
    "x¹²",
    "x⁷"
   ],
   "answer": 1,
   "explain": "Multiplying powers of the same base adds the exponents: 3 + 4 = 7."
  }
 },
 "forensics": {
  "intro": "Mixed advanced material — the default set for the repair session. Substitute whatever checkpoint 2 exposed if something more urgent came up.",
  "watch": [
   "Exponent rules apply to multiplication, never to addition",
   "Check the direction of a graph transformation",
   "Keep both solutions when taking a square root"
  ],
  "items": [
   {
    "stem": "Simplify x³ × x⁴.",
    "options": [
     {
      "t": "x¹²",
      "trap": "slip",
      "why": "The exponents have been multiplied. When the bases multiply, the exponents add."
     },
     {
      "t": "x⁷",
      "correct": true
     },
     {
      "t": "x¹",
      "trap": "sign",
      "why": "The exponents have been subtracted, which is the rule for division."
     },
     {
      "t": "2x⁷",
      "trap": "slip",
      "why": "The coefficient is invented — there is nothing to double."
     }
    ],
    "explain": "Multiplying powers of the same base adds the exponents: 3 + 4 = 7, giving <strong>x⁷</strong>."
   },
   {
    "stem": "The graph of y = f(x) is shifted to produce y = f(x − 3). Which describes the shift?",
    "options": [
     {
      "t": "3 units left",
      "trap": "sign",
      "why": "Changes inside the bracket move the graph the opposite way to the sign. Minus three moves it right."
     },
     {
      "t": "3 units right",
      "correct": true
     },
     {
      "t": "3 units down",
      "trap": "misread",
      "why": "Vertical shifts come from changes outside the function, not inside the bracket."
     },
     {
      "t": "3 units up",
      "trap": "misread",
      "why": "Again a vertical shift, which is not what a change to x produces."
     }
    ],
    "explain": "A change inside the bracket moves the graph horizontally and in the opposite direction to the sign: f(x − 3) is <strong>3 units right</strong>."
   },
   {
    "stem": "If √x = 7, what is x?",
    "options": [
     {
      "t": "49",
      "correct": true
     },
     {
      "t": "3.5",
      "trap": "slip",
      "why": "This halves 7 rather than squaring it."
     },
     {
      "t": "14",
      "trap": "slip",
      "why": "This doubles 7. Squaring and doubling are different operations."
     },
     {
      "t": "±49",
      "trap": "sign",
      "why": "The square-root symbol denotes the positive root only, so there is one answer here."
     }
    ],
    "explain": "Square both sides: x = 7² = <strong>49</strong>. Note the contrast with x² = 49, which does have two solutions."
   }
  ]
 },
 "speed": {
  "seconds": 95,
  "items": [
   {
    "stem": "Simplify x⁵ ÷ x².",
    "options": [
     "x⁷",
     "x³",
     "x²·⁵",
     "x¹⁰"
    ],
    "answer": 1,
    "skill": "Exponents",
    "explain": "Dividing powers of the same base subtracts the exponents."
   },
   {
    "stem": "What is (2x³)²?",
    "options": [
     "2x⁶",
     "4x⁶",
     "4x⁵",
     "2x⁹"
    ],
    "answer": 1,
    "skill": "Exponents",
    "explain": "Square both the coefficient and the power: 2² = 4 and (x³)² = x⁶."
   },
   {
    "stem": "If √x = 5, what is x?",
    "options": [
     "25",
     "2.5",
     "10",
     "±25"
    ],
    "answer": 0,
    "skill": "Radicals",
    "explain": "Square both sides: x = 25."
   },
   {
    "stem": "The graph of y = f(x) becomes y = f(x) + 2. What is the shift?",
    "options": [
     "2 right",
     "2 left",
     "2 up",
     "2 down"
    ],
    "answer": 2,
    "skill": "Transformations",
    "explain": "A change outside the function shifts the graph vertically, in the direction of the sign."
   },
   {
    "stem": "What is x⁰, for any non-zero x?",
    "options": [
     "0",
     "1",
     "x",
     "undefined"
    ],
    "answer": 1,
    "skill": "Exponents",
    "explain": "Any non-zero number to the power zero is 1."
   },
   {
    "stem": "Solve x² = 36.",
    "options": [
     "x = 6",
     "x = 6 and x = −6",
     "x = 18",
     "x = 1296"
    ],
    "answer": 1,
    "skill": "Quadratics",
    "explain": "Both roots."
   },
   {
    "stem": "Simplify (x²)³.",
    "options": [
     "x⁵",
     "x⁶",
     "x⁸",
     "3x²"
    ],
    "answer": 1,
    "skill": "Exponents",
    "explain": "A power raised to a power multiplies the exponents."
   },
   {
    "stem": "The graph of y = f(x) becomes y = f(x + 4). What is the shift?",
    "options": [
     "4 right",
     "4 left",
     "4 up",
     "4 down"
    ],
    "answer": 1,
    "skill": "Transformations",
    "explain": "Inside the bracket, and opposite to the sign: plus four moves it left."
   }
  ]
 },
 "sim": {
  "seconds": 95,
  "items": [
   {
    "stem": "Simplify x⁶ ÷ x³.",
    "options": [
     "x²",
     "x³",
     "x⁹",
     "x¹⁸"
    ],
    "answer": 1,
    "skill": "Exponents",
    "explain": "6 − 3 = 3."
   },
   {
    "stem": "What is (3x²)²?",
    "options": [
     "9x⁴",
     "3x⁴",
     "6x⁴",
     "9x²"
    ],
    "answer": 0,
    "skill": "Exponents",
    "explain": "3² = 9 and (x²)² = x⁴."
   },
   {
    "stem": "If √x = 9, what is x?",
    "options": [
     "3",
     "18",
     "81",
     "±81"
    ],
    "answer": 2,
    "skill": "Radicals",
    "explain": "9² = 81."
   },
   {
    "stem": "y = f(x) becomes y = f(x) − 5. What is the shift?",
    "options": [
     "5 left",
     "5 right",
     "5 up",
     "5 down"
    ],
    "answer": 3,
    "skill": "Transformations",
    "explain": "Outside the function, in the direction of the sign."
   },
   {
    "stem": "Simplify x⁴ × x.",
    "options": [
     "x⁴",
     "x⁵",
     "x³",
     "2x⁴"
    ],
    "answer": 1,
    "skill": "Exponents",
    "explain": "x is x¹, so 4 + 1 = 5."
   }
  ],
  "teachback": [
   "State the three exponent rules you used today.",
   "Why does f(x − 3) move the graph right rather than left?",
   "When does a square root give two answers, and when does it give one?"
  ]
 }
};
