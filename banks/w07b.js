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
  "hook": {
   "icon": "🎰",
   "title": "A machine, not a multiplication",
   "text": "This is the topic your diagnostic never tested — and on the real exam it is roughly a third of the maths section. So nothing here is assumed. f(x) is not f times x. It is a machine: you feed a number in, the rule inside processes it, and one number comes out. Everything else in this lesson follows from taking that literally."
  },
  "modules": [
   {
    "title": "f(x) is an instruction",
    "accent": "sky",
    "lead": "The brackets mean “substitute”. Whatever is inside them goes wherever x appears in the rule.",
    "concepts": [
     {
      "i": "🎰",
      "t": "Input → output",
      "d": "f(3) means: put 3 wherever the rule has an x, then simplify."
     },
     {
      "i": "🏷️",
      "t": "The letter is a name",
      "d": "f, g, h — just labels. Two functions in one question means two different rules."
     },
     {
      "i": "🔄",
      "t": "Working backwards",
      "d": "If f(x) = 13, set the rule equal to 13 and solve for x instead."
     }
    ],
    "examples": [
     {
      "ok": true,
      "t": "f(x) = 2x + 1, so f(3) = 2(3) + 1 = <span class=\"hl-ok\">7</span>",
      "note": "Substituted 3 for x."
     },
     {
      "ok": false,
      "t": "f(x) = 2x + 1, so f(3) = <span class=\"hl-no\">6x + 3</span>",
      "note": "Multiplied the whole function by 3 instead of substituting."
     }
    ],
    "rule": "Brackets mean substitute. Never multiply.",
    "trap": "With f(g(2)), work from the inside out — find g(2) first, then feed that result into f.",
    "worked": {
     "q": "If f(x) = 3x − 2, what is f(4)?",
     "steps": [
      "The instruction is: put 4 wherever x appears.",
      "The rule is 3x − 2, so it becomes 3(4) − 2.",
      "Multiply first, following order of operations: 12 − 2.",
      "Adding before multiplying would give 3 × 2 = 6, which is one of the wrong options."
     ],
     "answer": "f(4) = 10."
    }
   },
   {
    "title": "Factorising, and keeping both roots",
    "accent": "teal",
    "lead": "Find two numbers that multiply to the last term and add to the middle one. Then set each bracket to zero.",
    "concepts": [
     {
      "i": "✖️",
      "t": "Multiply to c",
      "d": "The two numbers multiply to give the constant term."
     },
     {
      "i": "➕",
      "t": "Add to b",
      "d": "The same two numbers add to give the middle coefficient.",
      "f": "x² + bx + c = (x + p)(x + q)"
     },
     {
      "i": "2️⃣",
      "t": "Two roots",
      "d": "Set each bracket to zero separately. A quadratic normally has two solutions."
     }
    ],
    "examples": [
     {
      "ok": true,
      "t": "x² − 5x + 6 = (x − 2)(x − 3) → x = <span class=\"hl-ok\">2 and 3</span>",
      "note": "Both roots given."
     },
     {
      "ok": false,
      "t": "x² − 5x + 6 → x = <span class=\"hl-no\">2</span> only",
      "note": "One root found, the other dropped. Half the answer scores nothing."
     }
    ],
    "rule": "Two numbers, multiplying to the constant and adding to the middle. Then both brackets, both roots.",
    "trap": "Signs. If the constant is positive and the middle is negative, both numbers are negative — as in this example.",
    "tip": "Always substitute your roots back in to check. It takes ten seconds and catches every sign error.",
    "worked": {
     "q": "Solve x² − 5x + 6 = 0.",
     "steps": [
      "Look for two numbers multiplying to +6 and adding to −5.",
      "Both must be negative, since they multiply to a positive and add to a negative: −2 and −3.",
      "So it factorises as (x − 2)(x − 3) = 0.",
      "Set each bracket to zero: x − 2 = 0 gives x = 2; x − 3 = 0 gives x = 3. Check: 4 − 10 + 6 = 0 ✓"
     ],
     "answer": "x = 2 and x = 3."
    }
   },
   {
    "title": "Vertex form, and the sign that flips",
    "accent": "olive",
    "lead": "Written as y = a(x − h)² + k, the parabola’s turning point is at (h, k) — and the sign inside the bracket inverts.",
    "concepts": [
     {
      "i": "📍",
      "t": "The vertex",
      "d": "Read (h, k) straight off. No calculation.",
      "f": "y = a(x − h)² + k → vertex (h, k)"
     },
     {
      "i": "🔄",
      "t": "The flip",
      "d": "The form has a minus, so (x + 1)² means h = −1."
     },
     {
      "i": "↕️",
      "t": "What a does",
      "d": "Positive opens upward, negative opens downward. Larger |a| means narrower."
     }
    ],
    "examples": [
     {
      "ok": true,
      "t": "y = (x − 2)² + 3 → vertex <span class=\"hl-ok\">(2, 3)</span>",
      "note": "Minus two in the bracket gives h = +2."
     },
     {
      "ok": false,
      "t": "y = (x − 2)² + 3 → vertex <span class=\"hl-no\">(−2, 3)</span>",
      "note": "Took the sign as written instead of flipping it."
     }
    ],
    "rule": "Inside the bracket, flip the sign. Outside it, keep the sign.",
    "trap": "The x-coordinate flips and the y-coordinate does not — so options are offered with one flipped, the other flipped, and both flipped.",
    "worked": {
     "q": "What are the coordinates of the vertex of y = (x + 1)² − 4?",
     "steps": [
      "Compare with the standard form y = a(x − h)² + k.",
      "The bracket shows (x + 1), and the form expects (x − h), so −h = +1, giving h = −1.",
      "The constant outside is −4, and that keeps its sign, so k = −4.",
      "The vertex is (h, k). Note the x flipped and the y did not."
     ],
     "answer": "The vertex is (−1, −4)."
    },
    "desmos": {
     "title": "Vertex form playground",
     "hint": "Drag <code>h</code> and watch the vertex move. Increasing <code>h</code> moves the curve <strong>right</strong>, even though the formula reads <code>(x − h)</code> — that is the sign flip, and seeing it happen is easier than memorising it. Then drag <code>a</code> to flip and stretch it.",
     "bounds": {
      "left": -10,
      "right": 10,
      "bottom": -10,
      "top": 10
     },
     "expressions": [
      {
       "id": "a",
       "latex": "a=1",
       "sliderBounds": {
        "min": -3,
        "max": 3,
        "step": 0.1
       }
      },
      {
       "id": "h",
       "latex": "h=2",
       "sliderBounds": {
        "min": -6,
        "max": 6,
        "step": 0.5
       }
      },
      {
       "id": "k",
       "latex": "k=3",
       "sliderBounds": {
        "min": -6,
        "max": 6,
        "step": 0.5
       }
      },
      {
       "id": "par",
       "latex": "y=a(x-h)^2+k",
       "color": "#54c1e6"
      },
      {
       "id": "v",
       "latex": "(h,k)",
       "color": "#fee801",
       "showLabel": true,
       "label": "vertex (h, k)"
      }
     ]
    }
   }
  ],
  "check": {
   "stem": "If f(x) = 2x + 1, what is f(3)?",
   "options": [
    "6x + 3",
    "7"
   ],
   "answer": 1,
   "explain": "Substitute 3 for x: 2(3) + 1 = 7. The brackets mean substitute, not multiply."
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
