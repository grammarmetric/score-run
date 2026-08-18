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
