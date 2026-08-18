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
