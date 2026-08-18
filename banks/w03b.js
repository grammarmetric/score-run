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
