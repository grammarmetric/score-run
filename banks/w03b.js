/* w03b — Ratios, rates and percentages. Generated from tools/content-*.mjs */
window.LESSON = {
 "id": "w03b",
 "week": 3,
 "session": "B",
 "lead": "orange",
 "domain": "Mathematics",
 "title": "Ratios, rates and percentages",
 "sub": "The mechanical half of the weakest area on the diagnostic — 1 correct out of 7. Start here, because these can be made reliable quickly.",
 "stampSet": "math",
 "present": {
  "hook": {
   "icon": "🧾",
   "title": "Everything is measured against the original",
   "text": "This was the weakest area on the diagnostic — one correct out of seven. Almost all of it comes down to one habit: knowing which number goes on the bottom of the fraction. Percentage change is measured against where you started, never where you ended up. Get that one thing automatic and this domain stops being the worst on the paper."
  },
  "modules": [
   {
    "title": "Percentage of, versus percentage change",
    "accent": "sky",
    "lead": "Two different operations that students blur together. Separate them and half of this topic is solved.",
    "concepts": [
     {
      "i": "✖️",
      "t": "Percentage OF",
      "d": "Convert to a decimal and multiply. 20% of 45 = 0.2 × 45.",
      "f": "part = (pct ÷ 100) × whole"
     },
     {
      "i": "📊",
      "t": "Percentage CHANGE",
      "d": "Find the change, then divide by the ORIGINAL value.",
      "f": "% change = change ÷ original × 100"
     },
     {
      "i": "🔙",
      "t": "Working backwards",
      "d": "If a price after 20% off is $64, divide by 0.8 — do not add 20% back.",
      "f": "original = final ÷ (1 − r)"
     }
    ],
    "examples": [
     {
      "ok": true,
      "t": "$80 → $100. Change 20, original 80 → 20 ÷ 80 = <span class=\"hl-ok\">25%</span>",
      "note": "Divided by the starting value."
     },
     {
      "ok": false,
      "t": "$80 → $100. 20 ÷ 100 = <span class=\"hl-no\">20%</span>",
      "note": "Divided by the final value instead of the original."
     }
    ],
    "rule": "The denominator is always where you started, never where you finished.",
    "trap": "Both answers appear in the options — the correct one and the one from dividing by the wrong figure. There is no way to tell them apart by eye.",
    "tip": "A rise of 25% and a fall of 25% are not opposites. Take 100 → +25% → 125 → −25% → 93.75. You do not get back.",
    "worked": {
     "q": "A price rises from $80 to $100. What is the percentage increase?",
     "steps": [
      "Identify the original: 80. This is the denominator.",
      "Find the change: 100 − 80 = 20.",
      "Divide the change by the original: 20 ÷ 80 = 0.25.",
      "Convert to a percentage. Dividing by 100 instead would give 20% — which is offered as a trap."
     ],
     "answer": "A 25% increase."
    }
   },
   {
    "title": "Rates carry units",
    "accent": "teal",
    "lead": "A rate is “per one unit”. If you track the units through the calculation, you cannot divide the wrong way round.",
    "concepts": [
     {
      "i": "🚗",
      "t": "Speed",
      "d": "Distance divided by time. The units tell you: km per hour means km ÷ hours.",
      "f": "rate = amount ÷ units"
     },
     {
      "i": "🏷️",
      "t": "Unit price",
      "d": "Total cost divided by quantity. Compare two deals by putting both per single item."
     },
     {
      "i": "🔍",
      "t": "Sanity check",
      "d": "Does the answer’s size make sense? 375 km/h for a car should stop you immediately."
     }
    ],
    "examples": [
     {
      "ok": true,
      "t": "150 km in 2.5 hours → 150 ÷ 2.5 = <span class=\"hl-ok\">60 km/h</span>",
      "note": "The unit “km per hour” tells you to divide km by hours."
     },
     {
      "ok": false,
      "t": "150 × 2.5 = <span class=\"hl-no\">375 km/h</span>",
      "note": "Multiplied instead of divided. The size alone should reject it."
     }
    ],
    "rule": "Write the units the answer needs, and let them tell you which way to divide.",
    "trap": "Averaging two rates directly is wrong. If you drive out at 30 km/h and back at 60 km/h, the average is not 45 — you must use total distance over total time.",
    "worked": {
     "q": "A car uses 6 litres per 100 km. How much does it use for 250 km?",
     "steps": [
      "The rate is 6 litres per 100 km.",
      "250 km is 2.5 lots of 100 km.",
      "So the fuel needed is 2.5 lots of 6 litres.",
      "Check the size: more distance than 100 km, so more than 6 litres. 15 is sensible."
     ],
     "answer": "15 litres."
    },
    "desmos": {
     "title": "A rate is a straight line through the origin",
     "hint": "Fuel used against distance, at 6 litres per 100 km. Drag <code>r</code> to change the rate and watch the steepness change. Every constant rate is a line through (0, 0) — which is why doubling the distance always doubles the fuel.",
     "bounds": {
      "left": -20,
      "right": 320,
      "bottom": -3,
      "top": 26
     },
     "expressions": [
      {
       "id": "r",
       "latex": "r=0.06",
       "sliderBounds": {
        "min": 0.01,
        "max": 0.2,
        "step": 0.01
       }
      },
      {
       "id": "fuel",
       "latex": "y=rx",
       "color": "#54c1e6"
      },
      {
       "id": "pt",
       "latex": "(250,250r)",
       "color": "#fee801",
       "showLabel": true,
       "label": "250 km"
      }
     ]
    }
   },
   {
    "title": "Ratios: find one part first",
    "accent": "olive",
    "lead": "Every ratio question is the same three steps. Add the parts, divide to find one part, multiply for the part you want.",
    "concepts": [
     {
      "i": "➕",
      "t": "Add the parts",
      "d": "A ratio of 3 : 5 has 3 + 5 = 8 parts in total."
     },
     {
      "i": "➗",
      "t": "Find one part",
      "d": "Divide the total quantity by the number of parts.",
      "f": "one part = total ÷ sum of parts"
     },
     {
      "i": "✖️",
      "t": "Multiply up",
      "d": "Multiply one part by the number of parts you were asked about."
     }
    ],
    "examples": [
     {
      "ok": true,
      "t": "3 : 5, total 32 → 8 parts → 32 ÷ 8 = 4 → girls = 5 × 4 = <span class=\"hl-ok\">20</span>",
      "note": "All three steps, and the right side of the ratio chosen."
     },
     {
      "ok": false,
      "t": "…→ answered <span class=\"hl-no\">12</span>",
      "note": "That is 3 × 4 — the boys. Same working, wrong side."
     }
    ],
    "rule": "Add, divide, multiply — then check which side of the ratio the question named.",
    "trap": "Both sides of the ratio appear as options, along with the value of one part (4 here) and the number of parts (8).",
    "worked": {
     "q": "In a class the ratio of boys to girls is 3 : 5. There are 32 students. How many girls?",
     "steps": [
      "Add the parts: 3 + 5 = 8.",
      "Find one part: 32 ÷ 8 = 4 students per part.",
      "The question asks for girls, which is the 5 side of the ratio.",
      "Multiply: 5 × 4. Answering 3 × 4 = 12 would give the boys instead."
     ],
     "answer": "20 girls."
    }
   }
  ],
  "check": {
   "stem": "A price falls from $50 to $40. What is the percentage decrease?",
   "options": [
    "20%",
    "25%"
   ],
   "answer": 0,
   "explain": "Change is 10, original is 50: 10 ÷ 50 = 20%. Dividing by 40 would give the 25% trap."
  }
 },
 "forensics": {
  "intro": "This was the weakest area on the diagnostic — one correct out of seven. Every wrong option below is a specific, nameable slip.",
  "watch": [
   "Percentage change is always measured against the original amount",
   "Decide whether the question wants the new value or the change itself",
   "In a ratio question, find the value of one part first"
  ],
  "items": [
   {
    "stem": "A jacket costs $80. Its price increases by 15%. What is the new price?",
    "options": [
     {
      "t": "$92",
      "correct": true
     },
     {
      "t": "$12",
      "trap": "partial",
      "why": "That is the increase itself. The question asked for the new price, so it still has to be added on."
     },
     {
      "t": "$68",
      "trap": "sign",
      "why": "The percentage has been subtracted rather than added."
     },
     {
      "t": "$95",
      "trap": "slip",
      "why": "An arithmetic error — 15% of 80 is 12, not 15."
     }
    ],
    "explain": "15% of 80 is 12, so the new price is 80 + 12 = <strong>$92</strong>. Or multiply directly: 80 × 1.15."
   },
   {
    "stem": "A car travels 150 km in 2.5 hours. What is its average speed?",
    "options": [
     {
      "t": "375 km/h",
      "trap": "swap",
      "why": "Distance has been multiplied by time instead of divided by it."
     },
     {
      "t": "60 km/h",
      "correct": true
     },
     {
      "t": "75 km/h",
      "trap": "slip",
      "why": "This divides by 2 rather than 2.5."
     },
     {
      "t": "0.017 km/h",
      "trap": "swap",
      "why": "Time divided by distance — the reciprocal of the rate asked for."
     }
    ],
    "explain": "Speed is distance divided by time: 150 ÷ 2.5 = <strong>60 km/h</strong>. Check the units in the answer match the units in the question."
   },
   {
    "stem": "In a class the ratio of boys to girls is 3 : 5. There are 32 students in total. How many girls are there?",
    "options": [
     {
      "t": "12",
      "trap": "swap",
      "why": "That is the number of boys. Both come from the same working — read which was asked for."
     },
     {
      "t": "20",
      "correct": true
     },
     {
      "t": "4",
      "trap": "partial",
      "why": "That is the value of one part. You stopped before multiplying by 5."
     },
     {
      "t": "8",
      "trap": "misread",
      "why": "That is the total number of parts, not a number of students."
     }
    ],
    "explain": "3 + 5 = 8 parts, and 32 ÷ 8 = 4 students per part. Girls are 5 parts: 5 × 4 = <strong>20</strong>."
   }
  ]
 },
 "speed": {
  "seconds": 95,
  "items": [
   {
    "stem": "What is 20% of 45?",
    "options": [
     "9",
     "90",
     "0.9",
     "25"
    ],
    "answer": 0,
    "skill": "Percentages",
    "explain": "0.2 × 45 = 9."
   },
   {
    "stem": "A price falls from $50 to $40. What is the percentage decrease?",
    "options": [
     "10%",
     "25%",
     "20%",
     "80%"
    ],
    "answer": 2,
    "skill": "Percentage change",
    "explain": "The change is 10, measured against the original 50: 10 ÷ 50 = 20%."
   },
   {
    "stem": "Three kilograms of flour cost $7.50. What do 8 kilograms cost?",
    "options": [
     "$20.00",
     "$18.75",
     "$22.50",
     "$15.00"
    ],
    "answer": 0,
    "skill": "Rates",
    "explain": "$2.50 per kg, so 8 × 2.50 = $20.00."
   },
   {
    "stem": "Two quantities are in the ratio 2 : 3 and total 45. What is the smaller quantity?",
    "options": [
     "15",
     "18",
     "27",
     "9"
    ],
    "answer": 1,
    "skill": "Ratios",
    "explain": "5 parts, 45 ÷ 5 = 9 per part. The smaller is 2 × 9 = 18."
   },
   {
    "stem": "A number increased by 25% gives 60. What was the original number?",
    "options": [
     "45",
     "48",
     "75",
     "35"
    ],
    "answer": 1,
    "skill": "Reverse percentages",
    "explain": "60 ÷ 1.25 = 48."
   },
   {
    "stem": "12 is what percentage of 80?",
    "options": [
     "12%",
     "20%",
     "15%",
     "6.7%"
    ],
    "answer": 2,
    "skill": "Percentages",
    "explain": "12 ÷ 80 = 0.15, which is 15%."
   },
   {
    "stem": "A car uses 6 litres of fuel per 100 km. How much does it use for 250 km?",
    "options": [
     "12 L",
     "15 L",
     "18 L",
     "24 L"
    ],
    "answer": 1,
    "skill": "Rates",
    "explain": "2.5 × 6 = 15 litres."
   },
   {
    "stem": "The ratio of red to blue counters is 4 : 7. There are 28 red counters. How many blue?",
    "options": [
     "16",
     "35",
     "49",
     "63"
    ],
    "answer": 2,
    "skill": "Ratios",
    "explain": "28 ÷ 4 = 7 per part, so blue is 7 × 7 = 49."
   }
  ]
 },
 "sim": {
  "seconds": 95,
  "items": [
   {
    "stem": "What is 30% of 70?",
    "options": [
     "21",
     "2.1",
     "210",
     "40"
    ],
    "answer": 0,
    "skill": "Percentages",
    "explain": "0.3 × 70 = 21."
   },
   {
    "stem": "A price rises from $80 to $100. What is the percentage increase?",
    "options": [
     "20%",
     "25%",
     "30%",
     "80%"
    ],
    "answer": 1,
    "skill": "Percentage change",
    "explain": "The change is 20, against the original 80: 20 ÷ 80 = 25%. Measuring against 100 instead of 80 is what produces the 20% trap."
   },
   {
    "stem": "Five metres of cable cost $12. What do 15 metres cost?",
    "options": [
     "$24",
     "$36",
     "$30",
     "$60"
    ],
    "answer": 1,
    "skill": "Rates",
    "explain": "Three times the length, so three times the price: $36."
   },
   {
    "stem": "Two quantities are in the ratio 1 : 4 and total 35. What is the larger quantity?",
    "options": [
     "7",
     "28",
     "14",
     "31"
    ],
    "answer": 1,
    "skill": "Ratios",
    "explain": "5 parts, 7 per part; the larger is 4 × 7 = 28."
   },
   {
    "stem": "After a 20% discount an item costs $64. What was the original price?",
    "options": [
     "$76.80",
     "$80",
     "$84",
     "$72"
    ],
    "answer": 1,
    "skill": "Reverse percentages",
    "explain": "64 ÷ 0.8 = 80."
   }
  ],
  "teachback": [
   "Explain the difference between \"20% of\" and \"a 20% increase\".",
   "How do you find the original price when you only know the discounted one?",
   "In a ratio question, what is always the first thing to work out?"
  ]
 }
};
