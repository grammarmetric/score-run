/* w07b — Quadratics and functions. Generated from tools/content-*.mjs */
window.LESSON = {
 "id": "w07b",
 "week": 7,
 "session": "B",
 "lead": "orange",
 "domain": "Mathematics",
 "title": "Quadratics and functions",
 "sub": "The topic the diagnostic never measured — and roughly a third of the real maths section. Teach it assuming nothing.",
 "stampSet": "math",
 "present": {
  "rule": "f(x) is an instruction: put this number wherever x appears. And a quadratic usually has two solutions.",
  "steps": [
   "f(3) means substitute 3 for every x — it is not multiplication",
   "To factorise, find two numbers that multiply to the last term and add to the middle one",
   "Set each bracket to zero to get the roots",
   "In y = (x − h)² + k the vertex is (h, k) — the sign inside the bracket flips"
  ],
  "worked": {
   "text": "Solve x² − 5x + 6 = 0.",
   "lines": [
    "Find two numbers multiplying to +6 and adding to −5: that is −2 and −3.",
    "So it factorises to (x − 2)(x − 3) = 0.",
    "Set each bracket to zero in turn: x − 2 = 0 and x − 3 = 0.",
    "The solutions are <em>x = 2 and x = 3</em>. Giving only one of them loses the mark."
   ]
  },
  "check": {
   "stem": "If f(x) = 2x + 1, what is f(3)?",
   "options": [
    "6x + 3",
    "7"
   ],
   "answer": 1,
   "explain": "Substitute 3 for x: 2(3) + 1 = 7."
  }
 },
 "forensics": {
  "intro": "The diagnostic never tested this topic, so nothing is assumed. Name the fault in each wrong option.",
  "watch": [
   "f(x) is an instruction, not a multiplication",
   "A quadratic usually has two solutions — losing one is the classic error",
   "Read whether the question wants the roots or the vertex"
  ],
  "items": [
   {
    "stem": "If f(x) = 2x + 1, what is f(3)?",
    "options": [
     {
      "t": "6x + 3",
      "trap": "misread",
      "why": "f(3) means substitute 3 for x, not multiply the whole function by 3."
     },
     {
      "t": "7",
      "correct": true
     },
     {
      "t": "9",
      "trap": "slip",
      "why": "This adds before multiplying: 2 × (3 + 1)."
     },
     {
      "t": "3",
      "trap": "partial",
      "why": "This just returns the input."
     }
    ],
    "explain": "f(3) means put 3 wherever x appears: 2(3) + 1 = <strong>7</strong>. The brackets are an instruction to substitute."
   },
   {
    "stem": "What are the solutions of x² − 5x + 6 = 0?",
    "options": [
     {
      "t": "x = 2 and x = 3",
      "correct": true
     },
     {
      "t": "x = −2 and x = −3",
      "trap": "sign",
      "why": "The signs are inverted. Factorising gives (x − 2)(x − 3), so the roots are positive."
     },
     {
      "t": "x = 2 only",
      "trap": "partial",
      "why": "One root found, the other dropped. A quadratic normally has two."
     },
     {
      "t": "x = 5 and x = 6",
      "trap": "misread",
      "why": "These are the coefficients from the equation, not its solutions."
     }
    ],
    "explain": "x² − 5x + 6 factorises to (x − 2)(x − 3) = 0, so <strong>x = 2 and x = 3</strong>. Check by substituting both back in."
   },
   {
    "stem": "The graph of y = (x − 2)² + 3 is a parabola. What are the coordinates of its vertex?",
    "options": [
     {
      "t": "(−2, 3)",
      "trap": "sign",
      "why": "In this form the x-coordinate takes the opposite sign to the number in the bracket."
     },
     {
      "t": "(2, 3)",
      "correct": true
     },
     {
      "t": "(2, −3)",
      "trap": "sign",
      "why": "The constant outside the bracket keeps its own sign."
     },
     {
      "t": "(3, 2)",
      "trap": "swap",
      "why": "The coordinates have been written the wrong way round."
     }
    ],
    "explain": "In y = (x − h)² + k the vertex is at (h, k). Here h = 2 and k = 3, so the vertex is <strong>(2, 3)</strong>."
   }
  ]
 },
 "speed": {
  "seconds": 95,
  "items": [
   {
    "stem": "If f(x) = 3x − 2, what is f(4)?",
    "options": [
     "10",
     "12",
     "14",
     "2"
    ],
    "answer": 0,
    "skill": "Function notation",
    "explain": "3(4) − 2 = 10."
   },
   {
    "stem": "If f(x) = x², what is f(−3)?",
    "options": [
     "−9",
     "9",
     "−6",
     "6"
    ],
    "answer": 1,
    "skill": "Function notation",
    "explain": "Squaring a negative gives a positive: 9."
   },
   {
    "stem": "What are the solutions of x² = 16?",
    "options": [
     "x = 4",
     "x = 4 and x = −4",
     "x = 8",
     "x = 256"
    ],
    "answer": 1,
    "skill": "Quadratics",
    "explain": "Taking a square root gives both a positive and a negative solution."
   },
   {
    "stem": "Factorise x² + 7x + 12.",
    "options": [
     "(x + 3)(x + 4)",
     "(x + 2)(x + 6)",
     "(x − 3)(x − 4)",
     "(x + 12)(x + 1)"
    ],
    "answer": 0,
    "skill": "Factorising",
    "explain": "Two numbers multiplying to 12 and adding to 7: 3 and 4."
   },
   {
    "stem": "If f(x) = 2x + 5 and f(x) = 13, what is x?",
    "options": [
     "4",
     "9",
     "6",
     "3"
    ],
    "answer": 0,
    "skill": "Function notation",
    "explain": "2x + 5 = 13, so 2x = 8 and x = 4."
   },
   {
    "stem": "What is the vertex of y = (x + 1)² − 4?",
    "options": [
     "(1, −4)",
     "(−1, −4)",
     "(−1, 4)",
     "(4, −1)"
    ],
    "answer": 1,
    "skill": "Parabolas",
    "explain": "y = (x − h)² + k gives vertex (h, k); here h = −1 and k = −4."
   },
   {
    "stem": "If f(x) = x² − 1, what is f(0)?",
    "options": [
     "0",
     "1",
     "−1",
     "2"
    ],
    "answer": 2,
    "skill": "Function notation",
    "explain": "0² − 1 = −1."
   },
   {
    "stem": "What are the solutions of (x − 5)(x + 2) = 0?",
    "options": [
     "x = 5 and x = −2",
     "x = −5 and x = 2",
     "x = 5 and x = 2",
     "x = 3"
    ],
    "answer": 0,
    "skill": "Quadratics",
    "explain": "Each bracket is set to zero in turn."
   }
  ]
 },
 "sim": {
  "seconds": 95,
  "items": [
   {
    "stem": "If f(x) = 4x + 1, what is f(3)?",
    "options": [
     "13",
     "12",
     "15",
     "7"
    ],
    "answer": 0,
    "skill": "Function notation",
    "explain": "4(3) + 1 = 13."
   },
   {
    "stem": "What are the solutions of x² = 25?",
    "options": [
     "x = 5",
     "x = 5 and x = −5",
     "x = 12.5",
     "x = 625"
    ],
    "answer": 1,
    "skill": "Quadratics",
    "explain": "Both roots must be given."
   },
   {
    "stem": "Factorise x² − 3x − 10.",
    "options": [
     "(x − 5)(x + 2)",
     "(x + 5)(x − 2)",
     "(x − 5)(x − 2)",
     "(x + 5)(x + 2)"
    ],
    "answer": 0,
    "skill": "Factorising",
    "explain": "Two numbers multiplying to −10 and adding to −3: −5 and +2."
   },
   {
    "stem": "What is the vertex of y = (x − 3)² + 1?",
    "options": [
     "(−3, 1)",
     "(3, 1)",
     "(3, −1)",
     "(1, 3)"
    ],
    "answer": 1,
    "skill": "Parabolas",
    "explain": "h = 3 and k = 1."
   },
   {
    "stem": "If f(x) = x² + 2, what is f(−2)?",
    "options": [
     "−2",
     "6",
     "2",
     "−6"
    ],
    "answer": 1,
    "skill": "Function notation",
    "explain": "(−2)² + 2 = 4 + 2 = 6."
   }
  ],
  "teachback": [
   "Explain what f(3) is asking you to do, in plain words.",
   "Why does a quadratic usually have two solutions?",
   "In y = (x − h)² + k, where is the vertex and why does the sign flip?"
  ]
 }
};
