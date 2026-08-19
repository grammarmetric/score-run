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
  "hook": {
   "icon": "🔧",
   "title": "The rules that look like they should apply, and do not",
   "text": "Exponents and transformations are where confident students lose marks, because both have rules that feel like they ought to extend further than they do. Exponent rules apply to multiplication and division, never to addition. And graph shifts inside the bracket move the opposite way to the sign. Both feel wrong, which is exactly why they are tested."
  },
  "modules": [
   {
    "title": "Exponent rules",
    "accent": "sky",
    "lead": "Three rules cover almost everything, and each applies only when the bases are the same and the operation is multiply or divide.",
    "concepts": [
     {
      "i": "✖️",
      "t": "Multiplying",
      "d": "Same base multiplied: ADD the exponents.",
      "f": "xᵃ × xᵇ = xᵃ⁺ᵇ"
     },
     {
      "i": "➗",
      "t": "Dividing",
      "d": "Same base divided: subtract the exponents.",
      "f": "xᵃ ÷ xᵇ = xᵃ⁻ᵇ"
     },
     {
      "i": "🔺",
      "t": "Power of a power",
      "d": "Multiply the exponents. Coefficients get raised too.",
      "f": "(2x³)² = 4x⁶"
     },
     {
      "i": "0️⃣",
      "t": "Zero power",
      "d": "Anything non-zero to the power zero is 1."
     }
    ],
    "examples": [
     {
      "ok": true,
      "t": "x³ × x⁴ = x<sup>3+4</sup> = <span class=\"hl-ok\">x⁷</span>",
      "note": "Multiplication, so the exponents add."
     },
     {
      "ok": false,
      "t": "x³ × x⁴ = <span class=\"hl-no\">x¹²</span>",
      "note": "Multiplied the exponents. That is the power-of-a-power rule."
     }
    ],
    "rule": "Multiply → add exponents. Divide → subtract. Power of a power → multiply.",
    "trap": "These rules never apply to addition. x³ + x⁴ does not simplify at all.",
    "worked": {
     "q": "Simplify (2x³)².",
     "steps": [
      "Everything inside the bracket is squared, including the coefficient.",
      "Square the coefficient: 2² = 4.",
      "Apply power-of-a-power to the variable: (x³)² means multiply the exponents, 3 × 2 = 6.",
      "Combine. Forgetting to square the 2 gives 2x⁶, which is offered as a trap."
     ],
     "answer": "4x⁶."
    }
   },
   {
    "title": "Roots: when there are two answers and when there is one",
    "accent": "teal",
    "lead": "x² = 25 has two solutions. √x = 5 has one. The difference matters and is tested directly.",
    "concepts": [
     {
      "i": "2️⃣",
      "t": "Squaring undone",
      "d": "If x² = 25, then x = 5 or x = −5. Both square to 25."
     },
     {
      "i": "1️⃣",
      "t": "The root symbol",
      "d": "The √ symbol means the positive root only, so √x = 5 gives x = 25 alone."
     },
     {
      "i": "🔄",
      "t": "Undoing a root",
      "d": "Square both sides. √x = 7 becomes x = 49, not 14 or 3.5."
     }
    ],
    "examples": [
     {
      "ok": true,
      "t": "x² = 36 → x = <span class=\"hl-ok\">6 or −6</span>",
      "note": "Both roots, because squaring destroys the sign."
     },
     {
      "ok": false,
      "t": "x² = 36 → x = <span class=\"hl-no\">6</span> only",
      "note": "Lost the negative solution."
     }
    ],
    "rule": "Solving x² = k gives two answers. Evaluating √k gives one.",
    "trap": "Options include the single positive root, the doubled value, and the halved value — each reachable by one specific wrong operation.",
    "worked": {
     "q": "If √x = 7, what is x?",
     "steps": [
      "The root symbol is applied to x, so undo it by squaring both sides.",
      "(√x)² = x, and 7² = 49.",
      "So x = 49. Doubling would give 14 and halving would give 3.5 — both offered.",
      "Only one answer here, because the √ symbol denotes the positive root. Contrast x² = 49, which has two."
     ],
     "answer": "x = 49."
    }
   },
   {
    "title": "Graph transformations",
    "accent": "olive",
    "lead": "Changes inside the bracket move the graph horizontally and backwards. Changes outside move it vertically and forwards.",
    "concepts": [
     {
      "i": "↔️",
      "t": "Inside the bracket",
      "d": "Horizontal movement, opposite to the sign. f(x − 3) moves right.",
      "f": "f(x − 3) → 3 right"
     },
     {
      "i": "↕️",
      "t": "Outside the function",
      "d": "Vertical movement, in the direction of the sign. f(x) + 2 moves up.",
      "f": "f(x) + 2 → 2 up"
     },
     {
      "i": "🧠",
      "t": "Why it feels wrong",
      "d": "To get the same output, x must now be 3 larger — so every point shifts right."
     }
    ],
    "examples": [
     {
      "ok": true,
      "t": "y = f(x − 3) → the graph moves <span class=\"hl-ok\">3 units right</span>",
      "note": "Inside the bracket, so opposite to the sign."
     },
     {
      "ok": false,
      "t": "y = f(x − 3) → moves <span class=\"hl-no\">3 units left</span>",
      "note": "Followed the sign as written."
     }
    ],
    "rule": "Inside → horizontal → opposite. Outside → vertical → same direction.",
    "trap": "All four options — left, right, up, down — are always offered, so a half-remembered rule has a one-in-four chance.",
    "tip": "Test it with a point. If f(0) = 5, then for f(x − 3) you need x = 3 to get 5 out. The point moved from 0 to 3: right.",
    "worked": {
     "q": "The graph of y = f(x) becomes y = f(x + 4). Describe the shift.",
     "steps": [
      "The change is inside the bracket, so the movement is horizontal, not vertical.",
      "Inside changes go opposite to the sign, and the sign is plus.",
      "So the graph moves in the negative direction — to the left.",
      "Check with a point: if f(0) = 7, then f(x + 4) = 7 needs x = −4. The point moved left ✓"
     ],
     "answer": "4 units to the left."
    }
   }
  ],
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
