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
  "hook": {
   "icon": "📐",
   "title": "A short list, known cold",
   "text": "Geometry is the smallest maths domain on the exam and the most finite. There is a short list of exact facts, the formula sheet is provided on the day, and almost every question is one of those facts applied once. The two ways to lose marks are not knowing the list, and trusting what the diagram looks like instead of what it says."
  },
  "modules": [
   {
    "title": "The angle rules",
    "accent": "sky",
    "lead": "Four facts. Everything about angles on this exam is built from them.",
    "concepts": [
     {
      "i": "📏",
      "t": "Straight line",
      "d": "Angles on a straight line total 180°."
     },
     {
      "i": "🔄",
      "t": "Around a point",
      "d": "A full turn totals 360°."
     },
     {
      "i": "🔺",
      "t": "In a triangle",
      "d": "The three angles total 180°.",
      "f": "a + b + c = 180°"
     },
     {
      "i": "⚖️",
      "t": "Isosceles",
      "d": "Two equal sides means two equal angles — but only if the question says so."
     }
    ],
    "examples": [
     {
      "ok": true,
      "t": "Two angles on a line, one is 115° → other = 180 − 115 = <span class=\"hl-ok\">65°</span>",
      "note": "Subtracted from 180."
     },
     {
      "ok": false,
      "t": "→ 360 − 115 = <span class=\"hl-no\">245°</span>",
      "note": "Used the around-a-point rule for a straight line."
     }
    ],
    "rule": "Identify which configuration you are in — line, point, or triangle — before subtracting.",
    "trap": "Never assume a right angle, equal sides, or parallel lines because the picture looks that way. Diagrams are not drawn to scale unless stated.",
    "worked": {
     "q": "Two angles of a triangle are 45° and 65°. What is the third?",
     "steps": [
      "The configuration is a triangle, so the total is 180°.",
      "Add the two known angles: 45 + 65 = 110.",
      "Subtract from the total: 180 − 110.",
      "Sanity check: all three should add back to 180. 45 + 65 + 70 = 180 ✓"
     ],
     "answer": "70°."
    }
   },
   {
    "title": "Pythagoras, and the triples worth memorising",
    "accent": "teal",
    "lead": "Square, add, square-root. The step people forget is the last one.",
    "concepts": [
     {
      "i": "🔢",
      "t": "The formula",
      "d": "Square both legs, add them, then take the square root.",
      "f": "a² + b² = c²"
     },
     {
      "i": "⭐",
      "t": "Common triples",
      "d": "3-4-5, 6-8-10, 5-12-13, 9-12-15. Spotting these saves real time."
     },
     {
      "i": "🛑",
      "t": "The missed step",
      "d": "a² + b² gives c SQUARED. You still have to root it."
     }
    ],
    "examples": [
     {
      "ok": true,
      "t": "Legs 6 and 8 → 36 + 64 = 100 → √100 = <span class=\"hl-ok\">10</span>",
      "note": "Rooted at the end."
     },
     {
      "ok": false,
      "t": "Legs 6 and 8 → 6 + 8 = <span class=\"hl-no\">14</span>",
      "note": "Added the legs without squaring. Also offered: 100, which stops one step early."
     }
    ],
    "rule": "Square, add, root. Three steps, and the third is the one that gets dropped.",
    "trap": "Both the un-rooted answer (100) and the simply-added answer (14) appear as options.",
    "tip": "The formula sheet is on the real exam. Use it — many students forget it exists and try to recall formulas under pressure.",
    "worked": {
     "q": "A right-angled triangle has legs of 6 and 8. Find the hypotenuse.",
     "steps": [
      "Square each leg: 6² = 36 and 8² = 64.",
      "Add them: 36 + 64 = 100.",
      "This is c², not c. Take the square root: √100.",
      "Recognise it: 6-8-10 is a common triple, double 3-4-5."
     ],
     "answer": "The hypotenuse is 10."
    }
   },
   {
    "title": "The trigonometry worth knowing by heart",
    "accent": "olive",
    "lead": "A handful of exact values come up repeatedly. Knowing them removes the calculator from the loop entirely.",
    "concepts": [
     {
      "i": "📊",
      "t": "SOH CAH TOA",
      "d": "sin = opposite/hypotenuse, cos = adjacent/hypotenuse, tan = opposite/adjacent."
     },
     {
      "i": "⭐",
      "t": "Know these",
      "d": "sin 30° = 0.5, cos 60° = 0.5, sin 90° = 1, cos 0° = 1, sin 0° = 0.",
      "f": "sin 30° = cos 60° = ½"
     },
     {
      "i": "🔄",
      "t": "Degrees or radians",
      "d": "Check which the question uses before touching the calculator."
     }
    ],
    "examples": [
     {
      "ok": true,
      "t": "sin 30° = <span class=\"hl-ok\">0.5</span> exactly",
      "note": "An exact value, not a decimal approximation."
     },
     {
      "ok": false,
      "t": "sin 30° = <span class=\"hl-no\">0.866</span>",
      "note": "That is cos 30°. The pair is swapped."
     }
    ],
    "rule": "Learn the small table of exact values. It converts several questions into instant recall.",
    "trap": "sin and cos values are offered swapped, so a half-memory produces a confident wrong answer.",
    "worked": {
     "q": "What is the value of sin 30°?",
     "steps": [
      "This is one of the exact values, so no calculation is needed.",
      "Picture a 30-60-90 triangle: the side opposite 30° is exactly half the hypotenuse.",
      "sin is opposite over hypotenuse, so that ratio is ½.",
      "Note the partner fact: cos 60° is also ½. The trap answer 0.866 is cos 30°."
     ],
     "answer": "sin 30° = 0.5."
    },
    "desmos": {
     "title": "The unit circle",
     "hint": "Drag <code>t</code> around the circle. The point’s <em>height</em> is the sine and its <em>distance along</em> is the cosine. Stop at 30° and read the height — exactly 0.5. Stop at 90° and it is 1.",
     "options": {
      "degreeMode": true
     },
     "bounds": {
      "left": -1.7,
      "right": 1.7,
      "bottom": -1.35,
      "top": 1.35
     },
     "expressions": [
      {
       "id": "circ",
       "latex": "x^2+y^2=1",
       "color": "#39c4b6"
      },
      {
       "id": "t",
       "latex": "t=30",
       "sliderBounds": {
        "min": 0,
        "max": 360,
        "step": 1
       }
      },
      {
       "id": "ray",
       "latex": "y=\\tan(t)x\\left\\{0\\le x\\cos(t)\\right\\}",
       "color": "#9a9f17"
      },
      {
       "id": "pt",
       "latex": "(\\cos(t),\\sin(t))",
       "color": "#fee801",
       "showLabel": true,
       "label": "sin = height"
      },
      {
       "id": "drop",
       "latex": "x=\\cos(t)\\left\\{0\\le y\\le\\sin(t)\\right\\}",
       "color": "#54c1e6"
      }
     ]
    }
   }
  ],
  "check": {
   "stem": "A right-angled triangle has legs 3 and 4. What is the hypotenuse?",
   "options": [
    "7",
    "5"
   ],
   "answer": 1,
   "explain": "9 + 16 = 25, and √25 = 5. Adding the legs gives 7, which is the trap."
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
