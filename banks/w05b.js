/* w05b — Reading tables and graphs. Generated from tools/content-*.mjs */
window.LESSON = {
 "id": "w05b",
 "week": 5,
 "session": "B",
 "lead": "orange",
 "domain": "Mathematics",
 "title": "Reading tables and graphs",
 "sub": "The interpretation half of problem solving and data — where the reading weakness meets the maths paper most directly.",
 "stampSet": "math",
 "present": {
  "hook": {
   "icon": "🔭",
   "title": "Read the instrument before the question",
   "text": "A chart question is really a reading question wearing a maths costume. The numbers are easy; extracting the right ones is the whole task. There is a fixed routine — title, axes, units, then the question — and students who skip it get the arithmetic right on the wrong figures."
  },
  "modules": [
   {
    "title": "The four-second routine",
    "accent": "sky",
    "lead": "Before reading the question, read the chart. Title, both axis labels, units, and whether the scale starts at zero.",
    "concepts": [
     {
      "i": "🏷️",
      "t": "Title and axes",
      "d": "What is being measured, and against what."
     },
     {
      "i": "📏",
      "t": "Units",
      "d": "Thousands? Percentages? Per capita? The answer options often differ only by unit."
     },
     {
      "i": "⚠️",
      "t": "Zero check",
      "d": "A vertical axis starting at 40 makes small differences look enormous."
     }
    ],
    "examples": [
     {
      "ok": true,
      "t": "Read the axes, note “figures in thousands”, then answer → <span class=\"hl-ok\">correct scale</span>",
      "note": "The unit was carried into the answer."
     },
     {
      "ok": false,
      "t": "Read the question, grab the nearest number → <span class=\"hl-no\">answer off by 1000×</span>",
      "note": "Right shape of reasoning, wrong magnitude."
     }
    ],
    "rule": "Chart first, question second. Always.",
    "trap": "A truncated axis exaggerates differences visually. If a question asks whether one bar is “twice” another, check the numbers, not the picture.",
    "worked": {
     "q": "A bar chart’s vertical axis starts at 40 rather than 0. What is the risk?",
     "steps": [
      "Picture two bars, one at 45 and one at 50.",
      "With the axis starting at zero, they are nearly the same height.",
      "With the axis starting at 40, one is 5 units tall and the other is 10 — it looks twice as big.",
      "The numbers have not changed; only the impression has."
     ],
     "answer": "Differences between bars look far larger than they are."
    }
   },
   {
    "title": "Two-way tables: the words pick the denominator",
    "accent": "teal",
    "lead": "The hard part of a two-way table is never the reading. It is knowing which total goes on the bottom of the fraction.",
    "concepts": [
     {
      "i": "📋",
      "t": "Row and column totals",
      "d": "The totals row and column are summaries, not data. Do not treat them as another category."
     },
     {
      "i": "🔑",
      "t": "“Of the…”",
      "d": "The phrase “of the X” fixes your denominator to X’s total."
     },
     {
      "i": "🎯",
      "t": "Three candidates",
      "d": "Row total, column total, grand total. Only one matches the wording."
     }
    ],
    "examples": [
     {
      "ok": true,
      "t": "“Of the Year 11 students, how many walk?” → <span class=\"hl-ok\">15 out of 40</span>",
      "note": "“Of the Year 11 students” fixes the denominator to that row’s total."
     },
     {
      "ok": false,
      "t": "→ <span class=\"hl-no\">15 out of 80</span>",
      "note": "Used the grand total. A different question entirely."
     }
    ],
    "rule": "Underline the phrase beginning “of the…”. That names your denominator.",
    "trap": "All three denominators — row total, column total and grand total — are offered as options, each with the same numerator.",
    "worked": {
     "q": "Year 11 row: bus 25, walk 15, total 40. Grand total 80. Of the Year 11 students, what fraction walk?",
     "steps": [
      "Underline the restricting phrase: “of the Year 11 students”.",
      "That fixes the group to the Year 11 row only, so the denominator is 40.",
      "Find the numerator inside that row: 15 walk.",
      "So the fraction is 15 out of 40. Using 80 or 37 means the wrong total was picked up."
     ],
     "answer": "15 out of 40."
    }
   },
   {
    "title": "Mean, median and mode",
    "accent": "olive",
    "lead": "Three different averages that the exam deliberately places close together in the answer options.",
    "concepts": [
     {
      "i": "➗",
      "t": "Mean",
      "d": "Add all values, divide by how many there are.",
      "f": "mean = total ÷ count"
     },
     {
      "i": "🎯",
      "t": "Median",
      "d": "Order the list first, then take the middle value. Ordering is not optional."
     },
     {
      "i": "🔁",
      "t": "Mode",
      "d": "The value appearing most often."
     },
     {
      "i": "🔙",
      "t": "Working backwards",
      "d": "Given a mean and a count, the total is mean × count.",
      "f": "total = mean × count"
     }
    ],
    "examples": [
     {
      "ok": true,
      "t": "12, 4, 9, 21, 7 → order → 4, 7, 9, 12, 21 → median <span class=\"hl-ok\">9</span>",
      "note": "Ordered before taking the middle."
     },
     {
      "ok": false,
      "t": "12, 4, 9, 21, 7 → middle as written = <span class=\"hl-no\">9</span>… but 5, 2, 9, 4, 7 → 9 is wrong",
      "note": "Taking the middle of an unordered list works by luck, not method."
     }
    ],
    "rule": "Order first for a median. For a missing value, use total = mean × count.",
    "trap": "A dataset is chosen so the mean, median and mode are all different but close — and all three appear as options.",
    "worked": {
     "q": "The mean of 8, x and 12 is 10. What is x?",
     "steps": [
      "There are three values and the mean is 10.",
      "So the total must be mean × count = 10 × 3 = 30.",
      "The two known values sum to 8 + 12 = 20.",
      "Therefore x is whatever makes the total 30."
     ],
     "answer": "x = 10."
    },
    "desmos": {
     "title": "Scatterplot and line of best fit",
     "hint": "Change any number in the table and the line updates instantly. The regression <code>y_1 ~ mx_1 + b</code> is already typed in — click it to see the values Desmos worked out for m and b.",
     "bounds": {
      "left": -1,
      "right": 8,
      "bottom": -1,
      "top": 14
     },
     "expressions": [
      {
       "type": "table",
       "columns": [
        {
         "latex": "x_1",
         "values": [
          "1",
          "2",
          "3",
          "4",
          "5"
         ]
        },
        {
         "latex": "y_1",
         "values": [
          "3",
          "5",
          "7",
          "8",
          "11"
         ],
         "color": "#54c1e6"
        }
       ]
      },
      {
       "id": "reg",
       "latex": "y_1 \\sim mx_1+b"
      }
     ]
    }
   }
  ],
  "check": {
   "stem": "Values 12, 4, 9. What is the median?",
   "options": [
    "12",
    "9"
   ],
   "answer": 1,
   "explain": "Order them first: 4, 9, 12. The middle value is 9."
  }
 },
 "forensics": {
  "intro": "Before any chart question: read the title, the axes and the units. Then read the question. For each wrong option, name what was misread.",
  "watch": [
   "Check whether the axis starts at zero",
   "In a two-way table, the totals row is not a data row",
   "Order the values before finding a median"
  ],
  "items": [
   {
    "stem": "A dataset contains the values 3, 5, 8, 8 and 11. What is the mean?",
    "options": [
     {
      "t": "8",
      "trap": "swap",
      "why": "That is the median (and the mode). The question asked for the mean."
     },
     {
      "t": "7",
      "correct": true
     },
     {
      "t": "35",
      "trap": "partial",
      "why": "That is the sum. You stopped before dividing by 5."
     },
     {
      "t": "5.6",
      "trap": "slip",
      "why": "This divides by the wrong count."
     }
    ],
    "explain": "The values total 35 and there are 5 of them: 35 ÷ 5 = <strong>7</strong>. The mean and the median are both worth checking when the answers are close together."
   },
   {
    "passage": "<strong>Students by year group and transport</strong><table style=\"width:100%;border-collapse:collapse\"><tr><td></td><td><strong>Bus</strong></td><td><strong>Walk</strong></td><td><strong>Total</strong></td></tr><tr><td><strong>Year 10</strong></td><td>18</td><td>22</td><td>40</td></tr><tr><td><strong>Year 11</strong></td><td>25</td><td>15</td><td>40</td></tr><tr><td><strong>Total</strong></td><td>43</td><td>37</td><td>80</td></tr></table>",
    "stem": "What fraction of Year 11 students walk to school?",
    "options": [
     {
      "t": "15 out of 80",
      "trap": "misread",
      "why": "This uses the grand total as the denominator. The question restricts us to Year 11."
     },
     {
      "t": "15 out of 40",
      "correct": true
     },
     {
      "t": "15 out of 37",
      "trap": "misread",
      "why": "This uses the total number who walk — a different group from Year 11."
     },
     {
      "t": "22 out of 40",
      "trap": "swap",
      "why": "That is the Year 10 row."
     }
    ],
    "explain": "The question fixes the group as Year 11, so the denominator is that row's total: <strong>15 out of 40</strong>. In two-way tables, the words \"of the …\" tell you the denominator."
   },
   {
    "stem": "The values 12, 4, 9, 21 and 7 are given. What is the median?",
    "options": [
     {
      "t": "9",
      "correct": true
     },
     {
      "t": "10.6",
      "trap": "swap",
      "why": "That is the mean."
     },
     {
      "t": "21",
      "trap": "misread",
      "why": "That is the largest value, not the middle one."
     },
     {
      "t": "12",
      "trap": "slip",
      "why": "This takes the middle of the list as written, without ordering it first."
     }
    ],
    "explain": "Order them: 4, 7, 9, 12, 21. The middle value is <strong>9</strong>. Never take a median from an unordered list."
   }
  ]
 },
 "speed": {
  "seconds": 95,
  "items": [
   {
    "stem": "What is the mean of 6, 10 and 14?",
    "options": [
     "10",
     "30",
     "12",
     "8"
    ],
    "answer": 0,
    "skill": "Averages",
    "explain": "30 ÷ 3 = 10."
   },
   {
    "stem": "What is the median of 5, 2, 9, 4 and 7?",
    "options": [
     "9",
     "4",
     "5",
     "5.4"
    ],
    "answer": 2,
    "skill": "Averages",
    "explain": "Ordered: 2, 4, 5, 7, 9. The middle value is 5."
   },
   {
    "stem": "A set of four numbers has a mean of 9. What is their total?",
    "options": [
     "13",
     "36",
     "2.25",
     "9"
    ],
    "answer": 1,
    "skill": "Averages",
    "explain": "Total = mean × count = 9 × 4 = 36."
   },
   {
    "stem": "In a survey, 45 out of 180 people chose option A. What percentage is that?",
    "options": [
     "45%",
     "25%",
     "18%",
     "4%"
    ],
    "answer": 1,
    "skill": "Reading data",
    "explain": "45 ÷ 180 = 0.25, which is 25%."
   },
   {
    "stem": "What is the mode of 3, 7, 7, 2 and 9?",
    "options": [
     "7",
     "5.6",
     "3",
     "2"
    ],
    "answer": 0,
    "skill": "Averages",
    "explain": "The mode is the value that appears most often."
   },
   {
    "stem": "A bar chart's vertical axis starts at 40 rather than 0. What is the risk?",
    "options": [
     "The bars are too short to read",
     "Differences between bars look larger than they are",
     "The mean cannot be calculated",
     "The bars are in the wrong order"
    ],
    "answer": 1,
    "skill": "Reading charts",
    "explain": "A truncated axis exaggerates the visual difference between values."
   },
   {
    "stem": "The mean of 8, x and 12 is 10. What is x?",
    "options": [
     "10",
     "30",
     "12",
     "9"
    ],
    "answer": 0,
    "skill": "Averages",
    "explain": "The three values must total 30, and 8 + 12 = 20, so x = 10."
   },
   {
    "stem": "Of 60 respondents, 24 said yes. What fraction said yes, in simplest form?",
    "options": [
     "24 ÷ 60",
     "2 ÷ 5",
     "3 ÷ 5",
     "1 ÷ 3"
    ],
    "answer": 1,
    "skill": "Reading data",
    "explain": "24 ÷ 60 simplifies to 2 ÷ 5."
   }
  ]
 },
 "sim": {
  "seconds": 95,
  "items": [
   {
    "stem": "What is the mean of 4, 8, 10 and 14?",
    "options": [
     "9",
     "36",
     "10",
     "8"
    ],
    "answer": 0,
    "skill": "Averages",
    "explain": "36 ÷ 4 = 9."
   },
   {
    "stem": "What is the median of 11, 3, 8, 6 and 2?",
    "options": [
     "8",
     "6",
     "11",
     "6.6"
    ],
    "answer": 1,
    "skill": "Averages",
    "explain": "Ordered: 2, 3, 6, 8, 11. The middle value is 6."
   },
   {
    "stem": "A set of five numbers has a mean of 12. What is their total?",
    "options": [
     "17",
     "60",
     "2.4",
     "12"
    ],
    "answer": 1,
    "skill": "Averages",
    "explain": "12 × 5 = 60."
   },
   {
    "stem": "36 out of 150 people chose option B. What percentage is that?",
    "options": [
     "36%",
     "24%",
     "15%",
     "4%"
    ],
    "answer": 1,
    "skill": "Reading data",
    "explain": "36 ÷ 150 = 0.24, which is 24%."
   },
   {
    "stem": "The mean of 5, 9 and x is 8. What is x?",
    "options": [
     "8",
     "10",
     "14",
     "6"
    ],
    "answer": 1,
    "skill": "Averages",
    "explain": "The total must be 24, and 5 + 9 = 14, so x = 10."
   }
  ],
  "teachback": [
   "What do you read on a chart before you read the question?",
   "In a two-way table, how do you decide what goes on the bottom of the fraction?",
   "Why must a list be ordered before you take the median?"
  ]
 }
};
