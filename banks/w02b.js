/* w02b — Turning words into equations. Generated from tools/content-*.mjs */
window.LESSON = {
 "id": "w02b",
 "week": 2,
 "session": "B",
 "lead": "orange",
 "domain": "Mathematics",
 "title": "Turning words into equations",
 "sub": "Systems and inequalities, but the real target is translation — the point where the reading weakness starts costing maths marks.",
 "stampSet": "math",
 "present": {
  "hook": {
   "icon": "🌉",
   "title": "The bridge from words to symbols",
   "text": "Most maths marks lost on word problems are not lost in the algebra. They are lost in the first line, translating the sentence into an equation. Once the setup is right the solving is usually routine — which means the time you spend getting the setup right is the best-value time on the whole paper. This is also where the reading weakness shows up in the maths score."
  },
  "modules": [
   {
    "title": "Check the direction with real numbers",
    "accent": "sky",
    "lead": "“Three times as many A as B” trips up almost everyone. Do not reason about it — test it with a number.",
    "concepts": [
     {
      "i": "🔢",
      "t": "Pick a number",
      "d": "Let the smaller group be 4. Then the larger must be 12. Which formula gives that?"
     },
     {
      "i": "📏",
      "t": "The bigger group",
      "d": "gets the multiplier. If A is three times B, then A = 3B."
     },
     {
      "i": "⚠️",
      "t": "The reversal",
      "d": "Writing B = 3A instead is the single most common translation error.",
      "f": "A = 3B, not B = 3A"
     }
    ],
    "examples": [
     {
      "ok": true,
      "t": "Three times as many chose biology as chemistry → <span class=\"hl-ok\">b = 3c</span>",
      "note": "Test: c = 4 gives b = 12. Twelve is three times four ✓"
     },
     {
      "ok": false,
      "t": "Three times as many chose biology as chemistry → <span class=\"hl-no\">c = 3b</span>",
      "note": "Test: b = 4 gives c = 12 — that makes chemistry the bigger group."
     }
    ],
    "rule": "Write your candidate equation, then substitute an easy number to check the direction before solving.",
    "trap": "Both directions are always offered. Reasoning it out in your head under time pressure is a coin flip; testing takes five seconds and is certain.",
    "worked": {
     "q": "Three times as many students chose biology as chose chemistry. If c is chemistry, what is biology?",
     "steps": [
      "Identify which group is larger: biology, because it is “three times as many”.",
      "Write the candidate: b = 3c.",
      "Test it. Let c = 4, so b = 3 × 4 = 12.",
      "Is 12 three times as many as 4? Yes. If you had written c = 3b, testing would have given chemistry as the larger group."
     ],
     "answer": "b = 3c."
    }
   },
   {
    "title": "Inequality words",
    "accent": "teal",
    "lead": "Four phrases carry all the marks here, and two of them include the boundary value while two exclude it.",
    "concepts": [
     {
      "i": "≥",
      "t": "At least / no fewer than",
      "d": "Includes the value itself. “At least 15” means 15 is allowed."
     },
     {
      "i": "≤",
      "t": "At most / no more than",
      "d": "Includes the value. “At most 400 kg” means 400 kg is allowed."
     },
     {
      "i": ">",
      "t": "More than / over",
      "d": "Excludes the value. “More than 15” means 16 upward."
     },
     {
      "i": "<",
      "t": "Fewer than / under",
      "d": "Excludes the value."
     }
    ],
    "examples": [
     {
      "ok": true,
      "t": "A lift carries at most 400 kg → <span class=\"hl-ok\">w ≤ 400</span>",
      "note": "“At most” caps from above and includes 400."
     },
     {
      "ok": false,
      "t": "A lift carries at most 400 kg → <span class=\"hl-no\">w < 400</span>",
      "note": "Right direction, but excludes exactly 400, which is allowed."
     }
    ],
    "rule": "“At least” and “at most” include the boundary. “More than” and “fewer than” do not.",
    "trap": "The options give you both the right direction with the wrong boundary and the wrong direction with the right boundary — so getting one half right is not enough.",
    "worked": {
     "q": "A worker must complete at least 15 units a day. Which inequality shows the acceptable numbers u?",
     "steps": [
      "Which direction? “At least” means a minimum, so acceptable values go upward from 15.",
      "That eliminates anything with < or ≤.",
      "Does 15 itself count? “At least 15” means 15 is acceptable, so the boundary is included.",
      "Include the boundary with the line under the sign."
     ],
     "answer": "u ≥ 15."
    }
   },
   {
    "title": "Solving a system, then answering the right part",
    "accent": "olive",
    "lead": "Two equations, two unknowns. Substitute or eliminate — then check which of the two the question wanted.",
    "concepts": [
     {
      "i": "🔄",
      "t": "Substitution",
      "d": "Best when one equation is already solved for a variable, like y = 2x."
     },
     {
      "i": "➕",
      "t": "Elimination",
      "d": "Best when coefficients match: add or subtract to cancel one variable.",
      "f": "x + y = 10, x − y = 4 → add → 2x = 14"
     },
     {
      "i": "🎯",
      "t": "Then re-read",
      "d": "You will have found both values. Only one was asked for."
     }
    ],
    "examples": [
     {
      "ok": true,
      "t": "n + p = 12, 3n + 2p = 31 → <span class=\"hl-ok\">n = 7</span> notebooks (and p = 5 pens)",
      "note": "Both values found, then the question re-read."
     },
     {
      "ok": false,
      "t": "…→ answered <span class=\"hl-no\">5</span>",
      "note": "That is the number of pens. Same working, wrong half."
     }
    ],
    "rule": "Solve fully, write down both values, then go back to the question and pick the one it names.",
    "trap": "Both values are always offered as options. The working can be perfect and still score zero.",
    "worked": {
     "q": "A shop sells notebooks for $3 and pens for $2. Maya buys 12 items and spends $31. How many notebooks?",
     "steps": [
      "Two unknowns, so two equations. Items: n + p = 12. Money: 3n + 2p = 31.",
      "Rearrange the first: p = 12 − n. Substitute into the second.",
      "3n + 2(12 − n) = 31 → 3n + 24 − 2n = 31 → n + 24 = 31 → n = 7.",
      "Now p = 12 − 7 = 5. The question asked for notebooks, so the answer is n, not p."
     ],
     "answer": "7 notebooks."
    },
    "desmos": {
     "title": "Where two equations meet",
     "hint": "Both equations from a system are graphed together. The solution is the single point where they cross — which is why a system with parallel lines has no solution at all.",
     "bounds": {
      "left": -2,
      "right": 12,
      "bottom": -2,
      "top": 14
     },
     "expressions": [
      {
       "id": "l1",
       "latex": "x+y=10",
       "color": "#54c1e6"
      },
      {
       "id": "l2",
       "latex": "x-y=4",
       "color": "#39c4b6"
      },
      {
       "id": "sol",
       "latex": "(7,3)",
       "color": "#fee801",
       "showLabel": true,
       "label": "solution (7, 3)"
      }
     ]
    }
   }
  ],
  "check": {
   "stem": "Four times as many chairs as tables. If t is tables, chairs = ?",
   "options": [
    "t ÷ 4",
    "4t"
   ],
   "answer": 1,
   "explain": "Chairs are the larger group, so they take the multiplier. Test with t = 3: 12 chairs is four times 3 ✓"
  }
 },
 "forensics": {
  "intro": "The setup is where these are won or lost. For each wrong option, name which part of the translation went wrong.",
  "watch": [
   "\"Twice as many A as B\" means A = 2B — check the direction every time",
   "\"At least\" is ≥ and \"more than\" is >",
   "Solve for the variable the question names, not the one you found first"
  ],
  "items": [
   {
    "stem": "A shop sells notebooks for $3 and pens for $2. Maya buys 12 items in total and spends $31. How many notebooks did she buy?",
    "options": [
     {
      "t": "5",
      "trap": "swap",
      "why": "That is the number of pens. Both numbers come out of the same working — you have to read which one was asked for."
     },
     {
      "t": "7",
      "correct": true
     },
     {
      "t": "9",
      "trap": "slip",
      "why": "An arithmetic error in the substitution step."
     },
     {
      "t": "12",
      "trap": "misread",
      "why": "That is the total number of items, given in the question."
     }
    ],
    "explain": "Let n be notebooks: n + p = 12 and 3n + 2p = 31. Substituting p = 12 − n gives 3n + 24 − 2n = 31, so n = <strong>7</strong> (and p = 5)."
   },
   {
    "stem": "Three times as many students chose biology as chose chemistry. If c is the number who chose chemistry, which expression gives the number who chose biology?",
    "options": [
     {
      "t": "c ÷ 3",
      "trap": "swap",
      "why": "This makes biology the smaller group. The sentence says biology is the larger one."
     },
     {
      "t": "3c",
      "correct": true
     },
     {
      "t": "c + 3",
      "trap": "misread",
      "why": "\"Three times as many\" is multiplication, not addition."
     },
     {
      "t": "3 ÷ c",
      "trap": "swap",
      "why": "Reversed, and it produces a fraction rather than a count."
     }
    ],
    "explain": "Biology is three times chemistry, so biology = <strong>3c</strong>. Test it with a number: if c = 4, biology should be 12."
   },
   {
    "stem": "A lift can carry a load of at most 400 kg. Which inequality represents the possible loads w?",
    "options": [
     {
      "t": "w > 400",
      "trap": "sign",
      "why": "This says the load must exceed the limit — the opposite of a maximum."
     },
     {
      "t": "w ≥ 400",
      "trap": "sign",
      "why": "Direction reversed. \"At most\" caps the value from above."
     },
     {
      "t": "w ≤ 400",
      "correct": true
     },
     {
      "t": "w < 400",
      "trap": "sign",
      "why": "Close, but \"at most 400\" includes exactly 400."
     }
    ],
    "explain": "\"At most\" means the value can be anything up to and including the limit: <strong>w ≤ 400</strong>."
   }
  ]
 },
 "speed": {
  "seconds": 95,
  "items": [
   {
    "stem": "If x + y = 10 and x − y = 4, what is x?",
    "options": [
     "3",
     "7",
     "6",
     "14"
    ],
    "answer": 1,
    "skill": "Systems",
    "explain": "Adding the equations: 2x = 14, so x = 7."
   },
   {
    "stem": "A bus holds no more than 52 passengers. Which inequality shows the possible numbers p?",
    "options": [
     "p < 52",
     "p > 52",
     "p ≤ 52",
     "p ≥ 52"
    ],
    "answer": 2,
    "skill": "Inequalities",
    "explain": "\"No more than\" includes the limit itself."
   },
   {
    "stem": "There are four times as many chairs as tables. If t is the number of tables, how many chairs are there?",
    "options": [
     "t ÷ 4",
     "4t",
     "t + 4",
     "4 ÷ t"
    ],
    "answer": 1,
    "skill": "Translation",
    "explain": "Chairs are the larger quantity: 4t."
   },
   {
    "stem": "If 2x + 3y = 12 and y = 2, what is x?",
    "options": [
     "3",
     "6",
     "9",
     "2"
    ],
    "answer": 0,
    "skill": "Systems",
    "explain": "2x + 6 = 12, so 2x = 6 and x = 3."
   },
   {
    "stem": "A number increased by 6 equals three times the number. What is the number?",
    "options": [
     "2",
     "3",
     "6",
     "9"
    ],
    "answer": 1,
    "skill": "Translation",
    "explain": "n + 6 = 3n, so 2n = 6 and n = 3."
   },
   {
    "stem": "If y = x + 2 and y = 3x − 4, what is x?",
    "options": [
     "2",
     "3",
     "5",
     "6"
    ],
    "answer": 1,
    "skill": "Systems",
    "explain": "x + 2 = 3x − 4, so 6 = 2x and x = 3."
   },
   {
    "stem": "The sum of two numbers is 20 and their difference is 6. What is the larger number?",
    "options": [
     "7",
     "13",
     "14",
     "26"
    ],
    "answer": 1,
    "skill": "Systems",
    "explain": "The two numbers are 13 and 7."
   },
   {
    "stem": "A worker must complete at least 15 units a day. Which inequality shows the acceptable numbers u?",
    "options": [
     "u > 15",
     "u ≥ 15",
     "u < 15",
     "u ≤ 15"
    ],
    "answer": 1,
    "skill": "Inequalities",
    "explain": "\"At least\" includes the value itself and everything above it."
   }
  ]
 },
 "sim": {
  "seconds": 95,
  "items": [
   {
    "stem": "If x + y = 14 and x − y = 2, what is y?",
    "options": [
     "6",
     "8",
     "7",
     "12"
    ],
    "answer": 0,
    "skill": "Systems",
    "explain": "Subtracting: 2y = 12, so y = 6."
   },
   {
    "stem": "A crate holds at most 30 bottles. Which inequality shows the possible numbers b?",
    "options": [
     "b < 30",
     "b ≤ 30",
     "b ≥ 30",
     "b > 30"
    ],
    "answer": 1,
    "skill": "Inequalities",
    "explain": "\"At most\" includes the limit."
   },
   {
    "stem": "There are five times as many students as teachers. If T is the number of teachers, how many students are there?",
    "options": [
     "T ÷ 5",
     "T + 5",
     "5T",
     "5 ÷ T"
    ],
    "answer": 2,
    "skill": "Translation",
    "explain": "Students are the larger group: 5T."
   },
   {
    "stem": "If 3x − y = 7 and y = 2, what is x?",
    "options": [
     "3",
     "5",
     "9",
     "2"
    ],
    "answer": 0,
    "skill": "Systems",
    "explain": "3x − 2 = 7, so 3x = 9 and x = 3."
   },
   {
    "stem": "A number decreased by 4 equals half the number. What is the number?",
    "options": [
     "4",
     "6",
     "8",
     "2"
    ],
    "answer": 2,
    "skill": "Translation",
    "explain": "n − 4 = n ÷ 2, so n ÷ 2 = 4 and n = 8."
   }
  ],
  "teachback": [
   "Read one word problem aloud and say the equation before solving it.",
   "What is the difference between \"at least 15\" and \"more than 15\"?",
   "Describe how you check that \"three times as many\" is the right way round."
  ]
 }
};
