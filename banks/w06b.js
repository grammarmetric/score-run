/* w06b — Angles, triangles and the unit circle. Generated from tools/content-*.mjs */
window.LESSON = {
 "id": "w06b",
 "week": 6,
 "session": "B",
 "lead": "orange",
 "domain": "Mathematics",
 "title": "Angles, triangles and the unit circle",
 "sub": "Geometry is a small section and largely formula-driven — a contained fix. There is a purpose-built interactive lesson for the second half.",
 "stampSet": "math",
 "present": {
  "rule": "Geometry runs on a short list of exact facts. Know them cold and never assume what the picture merely looks like.",
  "steps": [
   "Angles on a straight line total 180°; around a point, 360°; in a triangle, 180°",
   "Pythagoras: square the two legs, add, then square-root",
   "The formula sheet is provided in the real exam — use it",
   "Never assume a right angle or equal sides from the drawing alone"
  ],
  "worked": {
   "text": "A right-angled triangle has legs 6 and 8. Find the hypotenuse.",
   "lines": [
    "Square each leg: 6² = 36 and 8² = 64.",
    "Add them: 36 + 64 = 100.",
    "That gives the SQUARE of the hypotenuse, not the hypotenuse itself.",
    "Square-root it: <em>10</em>. Stopping at 100 is the most common miss here."
   ]
  },
  "check": {
   "stem": "Legs 3 and 4. Hypotenuse?",
   "options": [
    "7",
    "5"
   ],
   "answer": 1,
   "explain": "9 + 16 = 25, and √25 = 5. Adding the legs gives 7, which is wrong."
  }
 },
 "forensics": {
  "intro": "Geometry rewards knowing a small number of facts exactly. Name the fault in each wrong option.",
  "watch": [
   "The formula sheet is provided in the real exam — use it",
   "Never assume a right angle because the picture looks like one",
   "Check whether the question is in degrees or radians"
  ],
  "items": [
   {
    "stem": "Two angles lie on a straight line. One measures 115°. What is the other?",
    "options": [
     {
      "t": "65°",
      "correct": true
     },
     {
      "t": "245°",
      "trap": "slip",
      "why": "This subtracts from 360° — the rule for angles around a point, not on a line."
     },
     {
      "t": "75°",
      "trap": "slip",
      "why": "This subtracts from 190°, which is not a rule at all."
     },
     {
      "t": "115°",
      "trap": "misread",
      "why": "This repeats the given angle rather than finding the other one."
     }
    ],
    "explain": "Angles on a straight line total 180°, so the other is 180 − 115 = <strong>65°</strong>."
   },
   {
    "stem": "A right-angled triangle has legs of length 6 and 8. What is the length of the hypotenuse?",
    "options": [
     {
      "t": "14",
      "trap": "slip",
      "why": "The two legs have been added. Pythagoras squares them first."
     },
     {
      "t": "10",
      "correct": true
     },
     {
      "t": "48",
      "trap": "slip",
      "why": "The legs have been multiplied."
     },
     {
      "t": "100",
      "trap": "partial",
      "why": "That is the square of the hypotenuse. You stopped before taking the square root."
     }
    ],
    "explain": "6² + 8² = 36 + 64 = 100, and the square root of 100 is <strong>10</strong>. The 6-8-10 triangle is worth memorising."
   },
   {
    "stem": "What is the value of sin 30°?",
    "options": [
     {
      "t": "0.5",
      "correct": true
     },
     {
      "t": "1",
      "trap": "misread",
      "why": "That is sin 90°."
     },
     {
      "t": "0.866",
      "trap": "swap",
      "why": "That is cos 30° — the two have been swapped."
     },
     {
      "t": "30",
      "trap": "misread",
      "why": "This gives the angle back rather than its sine."
     }
    ],
    "explain": "sin 30° = <strong>0.5</strong> exactly. Worth knowing by heart alongside sin 90° = 1 and cos 60° = 0.5."
   }
  ]
 },
 "speed": {
  "seconds": 95,
  "items": [
   {
    "stem": "Two angles of a triangle are 45° and 65°. What is the third?",
    "options": [
     "70°",
     "110°",
     "80°",
     "90°"
    ],
    "answer": 0,
    "skill": "Triangles",
    "explain": "Angles in a triangle total 180°: 180 − 110 = 70."
   },
   {
    "stem": "A right-angled triangle has legs 5 and 12. What is the hypotenuse?",
    "options": [
     "17",
     "13",
     "60",
     "169"
    ],
    "answer": 1,
    "skill": "Pythagoras",
    "explain": "25 + 144 = 169, and √169 = 13."
   },
   {
    "stem": "What is the area of a circle with radius 3?",
    "options": [
     "6π",
     "9π",
     "3π",
     "18π"
    ],
    "answer": 1,
    "skill": "Circles",
    "explain": "Area = πr² = 9π."
   },
   {
    "stem": "What is the circumference of a circle with radius 5?",
    "options": [
     "25π",
     "5π",
     "10π",
     "20π"
    ],
    "answer": 2,
    "skill": "Circles",
    "explain": "Circumference = 2πr = 10π."
   },
   {
    "stem": "What is cos 60°?",
    "options": [
     "0.5",
     "1",
     "0.866",
     "0"
    ],
    "answer": 0,
    "skill": "Trigonometry",
    "explain": "cos 60° = 0.5 exactly."
   },
   {
    "stem": "Angles around a point total how many degrees?",
    "options": [
     "180",
     "90",
     "270",
     "360"
    ],
    "answer": 3,
    "skill": "Angle rules",
    "explain": "A full turn is 360°."
   },
   {
    "stem": "Two similar triangles have sides in the ratio 2 : 5. The smaller has a side of 6. What is the matching side of the larger?",
    "options": [
     "15",
     "12",
     "30",
     "10"
    ],
    "answer": 0,
    "skill": "Similar triangles",
    "explain": "6 corresponds to 2 parts, so one part is 3 and 5 parts is 15."
   },
   {
    "stem": "What is sin 90°?",
    "options": [
     "0",
     "0.5",
     "1",
     "90"
    ],
    "answer": 2,
    "skill": "Trigonometry",
    "explain": "sin 90° = 1."
   }
  ]
 },
 "sim": {
  "seconds": 95,
  "items": [
   {
    "stem": "Two angles of a triangle are 30° and 85°. What is the third?",
    "options": [
     "65°",
     "55°",
     "75°",
     "115°"
    ],
    "answer": 0,
    "skill": "Triangles",
    "explain": "180 − 115 = 65."
   },
   {
    "stem": "A right-angled triangle has legs 9 and 12. What is the hypotenuse?",
    "options": [
     "21",
     "15",
     "108",
     "225"
    ],
    "answer": 1,
    "skill": "Pythagoras",
    "explain": "81 + 144 = 225, and √225 = 15."
   },
   {
    "stem": "What is the area of a circle with radius 4?",
    "options": [
     "8π",
     "16π",
     "4π",
     "32π"
    ],
    "answer": 1,
    "skill": "Circles",
    "explain": "πr² = 16π."
   },
   {
    "stem": "Two angles lie on a straight line. One is 40°. What is the other?",
    "options": [
     "50°",
     "140°",
     "320°",
     "40°"
    ],
    "answer": 1,
    "skill": "Angle rules",
    "explain": "180 − 40 = 140."
   },
   {
    "stem": "What is cos 0°?",
    "options": [
     "0",
     "0.5",
     "1",
     "undefined"
    ],
    "answer": 2,
    "skill": "Trigonometry",
    "explain": "cos 0° = 1."
   }
  ],
  "teachback": [
   "State the three angle rules you used today.",
   "Explain Pythagoras in words, without symbols.",
   "Which trigonometric values do you now know by heart?"
  ]
 }
};
