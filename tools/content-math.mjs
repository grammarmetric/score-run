/* Mathematics lesson content.
   Wrong options are built from real failure modes, not random numbers:
   answering the wrong question, stopping halfway, a sign error, an
   arithmetic slip, or swapping two quantities.                        */

export const math = {

/* ══ w01b · linear equations and slope ═══════════════════════════ */
w01b: {
  stampSet: 'math',
  forensics: {
    intro: 'Every wrong answer here is what you get by making one specific mistake. Name the mistake — that is what stops you repeating it.',
    watch: [
      'Underline what the question actually asks for before solving',
      'If you find x but the question wanted 2x, you have not finished',
      'Slope is the rate; the intercept is the starting amount'
    ],
    items: [
      {
        stem: 'If 5x − 3 = 12, what is the value of 10x?',
        options: [
          { t: '3', trap: 'misread', why: 'This is x. The question asked for 10x — finding x is only the first step.' },
          { t: '30', correct: true },
          { t: '15', trap: 'partial', why: 'This is 5x. You stopped one line early.' },
          { t: '1.8', trap: 'slip', why: 'This comes from dividing 9 by 5 — subtracting 3 instead of adding it when moving it across.' }
        ],
        explain: '5x − 3 = 12, so 5x = 15 and x = 3. The question asked for 10x, which is <strong>30</strong>. Always re-read the final line before choosing.'
      },
      {
        stem: 'A plumber charges according to C = 45 + 30h, where C is the total cost in dollars and h is the number of hours worked. What does 30 represent?',
        options: [
          { t: 'The fixed call-out fee', trap: 'swap', why: 'That is the 45 — the amount charged before any hours are worked.' },
          { t: 'The hourly rate', correct: true },
          { t: 'The total cost of a one-hour job', trap: 'slip', why: 'A one-hour job costs 45 + 30 = 75. This confuses the rate with a total.' },
          { t: 'The number of hours worked', trap: 'misread', why: 'That is h, the variable — not the number multiplying it.' }
        ],
        explain: 'In C = 45 + 30h the number attached to h is the rate of change: the <strong>hourly rate</strong>. The constant 45 is the starting amount.'
      },
      {
        stem: 'A line passes through the points (2, 5) and (6, 13). What is its slope?',
        options: [
          { t: '2', correct: true },
          { t: '0.5', trap: 'swap', why: 'Rise and run have been swapped — this is 4 divided by 8 instead of 8 divided by 4.' },
          { t: '−2', trap: 'sign', why: 'The subtraction has been done in opposite orders on top and bottom.' },
          { t: '4', trap: 'partial', why: 'This is the run — the change in x — not the slope.' }
        ],
        explain: 'Slope is change in y over change in x: (13 − 5) ÷ (6 − 2) = 8 ÷ 4 = <strong>2</strong>. Keep both subtractions in the same order.'
      }
    ]
  },
  speed: {
    seconds: 95,
    items: [
      { stem: 'If 2x + 7 = 19, what is x?', options: ['6', '12', '13', '26'], answer: 0, skill: 'Linear equations', explain: '2x = 12, so x = 6.' },
      { stem: 'If 4(x − 1) = 20, what is x?', options: ['6', '5', '4', '24'], answer: 0, skill: 'Linear equations', explain: 'Divide first: x − 1 = 5, so x = 6.' },
      { stem: 'A line passes through (0, 3) and (4, 11). What is its slope?', options: ['8', '2', '0.5', '4'], answer: 1, skill: 'Slope', explain: '(11 − 3) ÷ (4 − 0) = 8 ÷ 4 = 2.' },
      { stem: 'What is the y-intercept of y = −3x + 7?', options: ['−3', '3', '7', '−7'], answer: 2, skill: 'Slope and intercept', explain: 'The constant term is the y-intercept: 7.' },
      { stem: 'If 3x − 5 = 16, what is the value of 6x?', options: ['7', '21', '42', '11'], answer: 2, skill: 'Answering the question asked', explain: '3x = 21, x = 7, so 6x = 42.' },
      { stem: 'A gym charges a $25 joining fee plus $15 a month. Which expression gives the cost after m months?', options: ['25m + 15', '15m + 25', '40m', '25 + 15'], answer: 1, skill: 'Modelling', explain: 'The monthly rate multiplies m; the joining fee is added once.' },
      { stem: 'What is the x-intercept of y = 2x − 4?', options: ['−4', '4', '2', '−2'], answer: 2, skill: 'Intercepts', explain: 'Set y = 0: 2x − 4 = 0, so x = 2.' },
      { stem: 'If x ÷ 3 + 2 = 7, what is x?', options: ['15', '5', '27', '3'], answer: 0, skill: 'Linear equations', explain: 'x ÷ 3 = 5, so x = 15.' }
    ]
  },
  sim: {
    seconds: 95,
    items: [
      { stem: 'If 5x + 2 = 27, what is x?', options: ['5', '25', '29', '6'], answer: 0, skill: 'Linear equations', explain: '5x = 25, so x = 5.' },
      { stem: 'A line passes through (1, 4) and (5, 16). What is its slope?', options: ['12', '4', '3', '0.33'], answer: 2, skill: 'Slope', explain: '(16 − 4) ÷ (5 − 1) = 12 ÷ 4 = 3.' },
      { stem: 'A taxi fare is given by C = 60 + 20h. What does 60 represent?', options: ['The hourly rate', 'The fixed starting charge', 'The total for one hour', 'The number of hours'], answer: 1, skill: 'Interpreting models', explain: 'The constant is the amount charged before any hours accumulate.' },
      { stem: 'If 2(x + 3) = 14, what is x?', options: ['4', '7', '10', '5'], answer: 0, skill: 'Linear equations', explain: 'x + 3 = 7, so x = 4.' },
      { stem: 'What is the slope of y = −4x + 9?', options: ['9', '4', '−4', '−9'], answer: 2, skill: 'Slope', explain: 'The number multiplying x is the slope: −4.' }
    ],
    teachback: [
      'Take any question above and say aloud what the question asked for, versus what you solved for first.',
      'Explain in words what the slope of a cost equation means.',
      'Name a question you got right but were not sure about. What would you check next time?'
    ]
  }
},

/* ══ w02b · systems, inequalities and translation ═════════════════ */
w02b: {
  stampSet: 'math',
  forensics: {
    intro: 'The setup is where these are won or lost. For each wrong option, name which part of the translation went wrong.',
    watch: [
      '"Twice as many A as B" means A = 2B — check the direction every time',
      '"At least" is ≥ and "more than" is >',
      'Solve for the variable the question names, not the one you found first'
    ],
    items: [
      {
        stem: 'A shop sells notebooks for $3 and pens for $2. Maya buys 12 items in total and spends $31. How many notebooks did she buy?',
        options: [
          { t: '5', trap: 'swap', why: 'That is the number of pens. Both numbers come out of the same working — you have to read which one was asked for.' },
          { t: '7', correct: true },
          { t: '9', trap: 'slip', why: 'An arithmetic error in the substitution step.' },
          { t: '12', trap: 'misread', why: 'That is the total number of items, given in the question.' }
        ],
        explain: 'Let n be notebooks: n + p = 12 and 3n + 2p = 31. Substituting p = 12 − n gives 3n + 24 − 2n = 31, so n = <strong>7</strong> (and p = 5).'
      },
      {
        stem: 'Three times as many students chose biology as chose chemistry. If c is the number who chose chemistry, which expression gives the number who chose biology?',
        options: [
          { t: 'c ÷ 3', trap: 'swap', why: 'This makes biology the smaller group. The sentence says biology is the larger one.' },
          { t: '3c', correct: true },
          { t: 'c + 3', trap: 'misread', why: '"Three times as many" is multiplication, not addition.' },
          { t: '3 ÷ c', trap: 'swap', why: 'Reversed, and it produces a fraction rather than a count.' }
        ],
        explain: 'Biology is three times chemistry, so biology = <strong>3c</strong>. Test it with a number: if c = 4, biology should be 12.'
      },
      {
        stem: 'A lift can carry a load of at most 400 kg. Which inequality represents the possible loads w?',
        options: [
          { t: 'w > 400', trap: 'sign', why: 'This says the load must exceed the limit — the opposite of a maximum.' },
          { t: 'w ≥ 400', trap: 'sign', why: 'Direction reversed. "At most" caps the value from above.' },
          { t: 'w ≤ 400', correct: true },
          { t: 'w < 400', trap: 'sign', why: 'Close, but "at most 400" includes exactly 400.' }
        ],
        explain: '"At most" means the value can be anything up to and including the limit: <strong>w ≤ 400</strong>.'
      }
    ]
  },
  speed: {
    seconds: 95,
    items: [
      { stem: 'If x + y = 10 and x − y = 4, what is x?', options: ['3', '7', '6', '14'], answer: 1, skill: 'Systems', explain: 'Adding the equations: 2x = 14, so x = 7.' },
      { stem: 'A bus holds no more than 52 passengers. Which inequality shows the possible numbers p?', options: ['p < 52', 'p > 52', 'p ≤ 52', 'p ≥ 52'], answer: 2, skill: 'Inequalities', explain: '"No more than" includes the limit itself.' },
      { stem: 'There are four times as many chairs as tables. If t is the number of tables, how many chairs are there?', options: ['t ÷ 4', '4t', 't + 4', '4 ÷ t'], answer: 1, skill: 'Translation', explain: 'Chairs are the larger quantity: 4t.' },
      { stem: 'If 2x + 3y = 12 and y = 2, what is x?', options: ['3', '6', '9', '2'], answer: 0, skill: 'Systems', explain: '2x + 6 = 12, so 2x = 6 and x = 3.' },
      { stem: 'A number increased by 6 equals three times the number. What is the number?', options: ['2', '3', '6', '9'], answer: 1, skill: 'Translation', explain: 'n + 6 = 3n, so 2n = 6 and n = 3.' },
      { stem: 'If y = x + 2 and y = 3x − 4, what is x?', options: ['2', '3', '5', '6'], answer: 1, skill: 'Systems', explain: 'x + 2 = 3x − 4, so 6 = 2x and x = 3.' },
      { stem: 'The sum of two numbers is 20 and their difference is 6. What is the larger number?', options: ['7', '13', '14', '26'], answer: 1, skill: 'Systems', explain: 'The two numbers are 13 and 7.' },
      { stem: 'A worker must complete at least 15 units a day. Which inequality shows the acceptable numbers u?', options: ['u > 15', 'u ≥ 15', 'u < 15', 'u ≤ 15'], answer: 1, skill: 'Inequalities', explain: '"At least" includes the value itself and everything above it.' }
    ]
  },
  sim: {
    seconds: 95,
    items: [
      { stem: 'If x + y = 14 and x − y = 2, what is y?', options: ['6', '8', '7', '12'], answer: 0, skill: 'Systems', explain: 'Subtracting: 2y = 12, so y = 6.' },
      { stem: 'A crate holds at most 30 bottles. Which inequality shows the possible numbers b?', options: ['b < 30', 'b ≤ 30', 'b ≥ 30', 'b > 30'], answer: 1, skill: 'Inequalities', explain: '"At most" includes the limit.' },
      { stem: 'There are five times as many students as teachers. If T is the number of teachers, how many students are there?', options: ['T ÷ 5', 'T + 5', '5T', '5 ÷ T'], answer: 2, skill: 'Translation', explain: 'Students are the larger group: 5T.' },
      { stem: 'If 3x − y = 7 and y = 2, what is x?', options: ['3', '5', '9', '2'], answer: 0, skill: 'Systems', explain: '3x − 2 = 7, so 3x = 9 and x = 3.' },
      { stem: 'A number decreased by 4 equals half the number. What is the number?', options: ['4', '6', '8', '2'], answer: 2, skill: 'Translation', explain: 'n − 4 = n ÷ 2, so n ÷ 2 = 4 and n = 8.' }
    ],
    teachback: [
      'Read one word problem aloud and say the equation before solving it.',
      'What is the difference between "at least 15" and "more than 15"?',
      'Describe how you check that "three times as many" is the right way round.'
    ]
  }
},

/* ══ w03b · ratios, rates and percentages ════════════════════════ */
w03b: {
  stampSet: 'math',
  forensics: {
    intro: 'This was the weakest area on the diagnostic — one correct out of seven. Every wrong option below is a specific, nameable slip.',
    watch: [
      'Percentage change is always measured against the original amount',
      'Decide whether the question wants the new value or the change itself',
      'In a ratio question, find the value of one part first'
    ],
    items: [
      {
        stem: 'A jacket costs $80. Its price increases by 15%. What is the new price?',
        options: [
          { t: '$92', correct: true },
          { t: '$12', trap: 'partial', why: 'That is the increase itself. The question asked for the new price, so it still has to be added on.' },
          { t: '$68', trap: 'sign', why: 'The percentage has been subtracted rather than added.' },
          { t: '$95', trap: 'slip', why: 'An arithmetic error — 15% of 80 is 12, not 15.' }
        ],
        explain: '15% of 80 is 12, so the new price is 80 + 12 = <strong>$92</strong>. Or multiply directly: 80 × 1.15.'
      },
      {
        stem: 'A car travels 150 km in 2.5 hours. What is its average speed?',
        options: [
          { t: '375 km/h', trap: 'swap', why: 'Distance has been multiplied by time instead of divided by it.' },
          { t: '60 km/h', correct: true },
          { t: '75 km/h', trap: 'slip', why: 'This divides by 2 rather than 2.5.' },
          { t: '0.017 km/h', trap: 'swap', why: 'Time divided by distance — the reciprocal of the rate asked for.' }
        ],
        explain: 'Speed is distance divided by time: 150 ÷ 2.5 = <strong>60 km/h</strong>. Check the units in the answer match the units in the question.'
      },
      {
        stem: 'In a class the ratio of boys to girls is 3 : 5. There are 32 students in total. How many girls are there?',
        options: [
          { t: '12', trap: 'swap', why: 'That is the number of boys. Both come from the same working — read which was asked for.' },
          { t: '20', correct: true },
          { t: '4', trap: 'partial', why: 'That is the value of one part. You stopped before multiplying by 5.' },
          { t: '8', trap: 'misread', why: 'That is the total number of parts, not a number of students.' }
        ],
        explain: '3 + 5 = 8 parts, and 32 ÷ 8 = 4 students per part. Girls are 5 parts: 5 × 4 = <strong>20</strong>.'
      }
    ]
  },
  speed: {
    seconds: 95,
    items: [
      { stem: 'What is 20% of 45?', options: ['9', '90', '0.9', '25'], answer: 0, skill: 'Percentages', explain: '0.2 × 45 = 9.' },
      { stem: 'A price falls from $50 to $40. What is the percentage decrease?', options: ['10%', '25%', '20%', '80%'], answer: 2, skill: 'Percentage change', explain: 'The change is 10, measured against the original 50: 10 ÷ 50 = 20%.' },
      { stem: 'Three kilograms of flour cost $7.50. What do 8 kilograms cost?', options: ['$20.00', '$18.75', '$22.50', '$15.00'], answer: 0, skill: 'Rates', explain: '$2.50 per kg, so 8 × 2.50 = $20.00.' },
      { stem: 'Two quantities are in the ratio 2 : 3 and total 45. What is the smaller quantity?', options: ['15', '18', '27', '9'], answer: 1, skill: 'Ratios', explain: '5 parts, 45 ÷ 5 = 9 per part. The smaller is 2 × 9 = 18.' },
      { stem: 'A number increased by 25% gives 60. What was the original number?', options: ['45', '48', '75', '35'], answer: 1, skill: 'Reverse percentages', explain: '60 ÷ 1.25 = 48.' },
      { stem: '12 is what percentage of 80?', options: ['12%', '20%', '15%', '6.7%'], answer: 2, skill: 'Percentages', explain: '12 ÷ 80 = 0.15, which is 15%.' },
      { stem: 'A car uses 6 litres of fuel per 100 km. How much does it use for 250 km?', options: ['12 L', '15 L', '18 L', '24 L'], answer: 1, skill: 'Rates', explain: '2.5 × 6 = 15 litres.' },
      { stem: 'The ratio of red to blue counters is 4 : 7. There are 28 red counters. How many blue?', options: ['16', '35', '49', '63'], answer: 2, skill: 'Ratios', explain: '28 ÷ 4 = 7 per part, so blue is 7 × 7 = 49.' }
    ]
  },
  sim: {
    seconds: 95,
    items: [
      { stem: 'What is 30% of 70?', options: ['21', '2.1', '210', '40'], answer: 0, skill: 'Percentages', explain: '0.3 × 70 = 21.' },
      { stem: 'A price rises from $80 to $100. What is the percentage increase?', options: ['20%', '25%', '30%', '80%'], answer: 1, skill: 'Percentage change', explain: 'The change is 20, against the original 80: 20 ÷ 80 = 25%. Measuring against 100 instead of 80 is what produces the 20% trap.' },
      { stem: 'Five metres of cable cost $12. What do 15 metres cost?', options: ['$24', '$36', '$30', '$60'], answer: 1, skill: 'Rates', explain: 'Three times the length, so three times the price: $36.' },
      { stem: 'Two quantities are in the ratio 1 : 4 and total 35. What is the larger quantity?', options: ['7', '28', '14', '31'], answer: 1, skill: 'Ratios', explain: '5 parts, 7 per part; the larger is 4 × 7 = 28.' },
      { stem: 'After a 20% discount an item costs $64. What was the original price?', options: ['$76.80', '$80', '$84', '$72'], answer: 1, skill: 'Reverse percentages', explain: '64 ÷ 0.8 = 80.' }
    ],
    teachback: [
      'Explain the difference between "20% of" and "a 20% increase".',
      'How do you find the original price when you only know the discounted one?',
      'In a ratio question, what is always the first thing to work out?'
    ]
  }
},

/* ══ w05b · tables, charts and averages ══════════════════════════ */
w05b: {
  stampSet: 'math',
  forensics: {
    intro: 'Before any chart question: read the title, the axes and the units. Then read the question. For each wrong option, name what was misread.',
    watch: [
      'Check whether the axis starts at zero',
      'In a two-way table, the totals row is not a data row',
      'Order the values before finding a median'
    ],
    items: [
      {
        stem: 'A dataset contains the values 3, 5, 8, 8 and 11. What is the mean?',
        options: [
          { t: '8', trap: 'swap', why: 'That is the median (and the mode). The question asked for the mean.' },
          { t: '7', correct: true },
          { t: '35', trap: 'partial', why: 'That is the sum. You stopped before dividing by 5.' },
          { t: '5.6', trap: 'slip', why: 'This divides by the wrong count.' }
        ],
        explain: 'The values total 35 and there are 5 of them: 35 ÷ 5 = <strong>7</strong>. The mean and the median are both worth checking when the answers are close together.'
      },
      {
        passage: '<strong>Students by year group and transport</strong><table style="width:100%;border-collapse:collapse"><tr><td></td><td><strong>Bus</strong></td><td><strong>Walk</strong></td><td><strong>Total</strong></td></tr><tr><td><strong>Year 10</strong></td><td>18</td><td>22</td><td>40</td></tr><tr><td><strong>Year 11</strong></td><td>25</td><td>15</td><td>40</td></tr><tr><td><strong>Total</strong></td><td>43</td><td>37</td><td>80</td></tr></table>',
        stem: 'What fraction of Year 11 students walk to school?',
        options: [
          { t: '15 out of 80', trap: 'misread', why: 'This uses the grand total as the denominator. The question restricts us to Year 11.' },
          { t: '15 out of 40', correct: true },
          { t: '15 out of 37', trap: 'misread', why: 'This uses the total number who walk — a different group from Year 11.' },
          { t: '22 out of 40', trap: 'swap', why: 'That is the Year 10 row.' }
        ],
        explain: 'The question fixes the group as Year 11, so the denominator is that row\'s total: <strong>15 out of 40</strong>. In two-way tables, the words "of the …" tell you the denominator.'
      },
      {
        stem: 'The values 12, 4, 9, 21 and 7 are given. What is the median?',
        options: [
          { t: '9', correct: true },
          { t: '10.6', trap: 'swap', why: 'That is the mean.' },
          { t: '21', trap: 'misread', why: 'That is the largest value, not the middle one.' },
          { t: '12', trap: 'slip', why: 'This takes the middle of the list as written, without ordering it first.' }
        ],
        explain: 'Order them: 4, 7, 9, 12, 21. The middle value is <strong>9</strong>. Never take a median from an unordered list.'
      }
    ]
  },
  speed: {
    seconds: 95,
    items: [
      { stem: 'What is the mean of 6, 10 and 14?', options: ['10', '30', '12', '8'], answer: 0, skill: 'Averages', explain: '30 ÷ 3 = 10.' },
      { stem: 'What is the median of 5, 2, 9, 4 and 7?', options: ['9', '4', '5', '5.4'], answer: 2, skill: 'Averages', explain: 'Ordered: 2, 4, 5, 7, 9. The middle value is 5.' },
      { stem: 'A set of four numbers has a mean of 9. What is their total?', options: ['13', '36', '2.25', '9'], answer: 1, skill: 'Averages', explain: 'Total = mean × count = 9 × 4 = 36.' },
      { stem: 'In a survey, 45 out of 180 people chose option A. What percentage is that?', options: ['45%', '25%', '18%', '4%'], answer: 1, skill: 'Reading data', explain: '45 ÷ 180 = 0.25, which is 25%.' },
      { stem: 'What is the mode of 3, 7, 7, 2 and 9?', options: ['7', '5.6', '3', '2'], answer: 0, skill: 'Averages', explain: 'The mode is the value that appears most often.' },
      { stem: 'A bar chart\'s vertical axis starts at 40 rather than 0. What is the risk?', options: ['The bars are too short to read', 'Differences between bars look larger than they are', 'The mean cannot be calculated', 'The bars are in the wrong order'], answer: 1, skill: 'Reading charts', explain: 'A truncated axis exaggerates the visual difference between values.' },
      { stem: 'The mean of 8, x and 12 is 10. What is x?', options: ['10', '30', '12', '9'], answer: 0, skill: 'Averages', explain: 'The three values must total 30, and 8 + 12 = 20, so x = 10.' },
      { stem: 'Of 60 respondents, 24 said yes. What fraction said yes, in simplest form?', options: ['24 ÷ 60', '2 ÷ 5', '3 ÷ 5', '1 ÷ 3'], answer: 1, skill: 'Reading data', explain: '24 ÷ 60 simplifies to 2 ÷ 5.' }
    ]
  },
  sim: {
    seconds: 95,
    items: [
      { stem: 'What is the mean of 4, 8, 10 and 14?', options: ['9', '36', '10', '8'], answer: 0, skill: 'Averages', explain: '36 ÷ 4 = 9.' },
      { stem: 'What is the median of 11, 3, 8, 6 and 2?', options: ['8', '6', '11', '6.6'], answer: 1, skill: 'Averages', explain: 'Ordered: 2, 3, 6, 8, 11. The middle value is 6.' },
      { stem: 'A set of five numbers has a mean of 12. What is their total?', options: ['17', '60', '2.4', '12'], answer: 1, skill: 'Averages', explain: '12 × 5 = 60.' },
      { stem: '36 out of 150 people chose option B. What percentage is that?', options: ['36%', '24%', '15%', '4%'], answer: 1, skill: 'Reading data', explain: '36 ÷ 150 = 0.24, which is 24%.' },
      { stem: 'The mean of 5, 9 and x is 8. What is x?', options: ['8', '10', '14', '6'], answer: 1, skill: 'Averages', explain: 'The total must be 24, and 5 + 9 = 14, so x = 10.' }
    ],
    teachback: [
      'What do you read on a chart before you read the question?',
      'In a two-way table, how do you decide what goes on the bottom of the fraction?',
      'Why must a list be ordered before you take the median?'
    ]
  }
},

/* ══ w06b · angles, triangles and the unit circle ════════════════ */
w06b: {
  stampSet: 'math',
  forensics: {
    intro: 'Geometry rewards knowing a small number of facts exactly. Name the fault in each wrong option.',
    watch: [
      'The formula sheet is provided in the real exam — use it',
      'Never assume a right angle because the picture looks like one',
      'Check whether the question is in degrees or radians'
    ],
    items: [
      {
        stem: 'Two angles lie on a straight line. One measures 115°. What is the other?',
        options: [
          { t: '65°', correct: true },
          { t: '245°', trap: 'slip', why: 'This subtracts from 360° — the rule for angles around a point, not on a line.' },
          { t: '75°', trap: 'slip', why: 'This subtracts from 190°, which is not a rule at all.' },
          { t: '115°', trap: 'misread', why: 'This repeats the given angle rather than finding the other one.' }
        ],
        explain: 'Angles on a straight line total 180°, so the other is 180 − 115 = <strong>65°</strong>.'
      },
      {
        stem: 'A right-angled triangle has legs of length 6 and 8. What is the length of the hypotenuse?',
        options: [
          { t: '14', trap: 'slip', why: 'The two legs have been added. Pythagoras squares them first.' },
          { t: '10', correct: true },
          { t: '48', trap: 'slip', why: 'The legs have been multiplied.' },
          { t: '100', trap: 'partial', why: 'That is the square of the hypotenuse. You stopped before taking the square root.' }
        ],
        explain: '6² + 8² = 36 + 64 = 100, and the square root of 100 is <strong>10</strong>. The 6-8-10 triangle is worth memorising.'
      },
      {
        stem: 'What is the value of sin 30°?',
        options: [
          { t: '0.5', correct: true },
          { t: '1', trap: 'misread', why: 'That is sin 90°.' },
          { t: '0.866', trap: 'swap', why: 'That is cos 30° — the two have been swapped.' },
          { t: '30', trap: 'misread', why: 'This gives the angle back rather than its sine.' }
        ],
        explain: 'sin 30° = <strong>0.5</strong> exactly. Worth knowing by heart alongside sin 90° = 1 and cos 60° = 0.5.'
      }
    ]
  },
  speed: {
    seconds: 95,
    items: [
      { stem: 'Two angles of a triangle are 45° and 65°. What is the third?', options: ['70°', '110°', '80°', '90°'], answer: 0, skill: 'Triangles', explain: 'Angles in a triangle total 180°: 180 − 110 = 70.' },
      { stem: 'A right-angled triangle has legs 5 and 12. What is the hypotenuse?', options: ['17', '13', '60', '169'], answer: 1, skill: 'Pythagoras', explain: '25 + 144 = 169, and √169 = 13.' },
      { stem: 'What is the area of a circle with radius 3?', options: ['6π', '9π', '3π', '18π'], answer: 1, skill: 'Circles', explain: 'Area = πr² = 9π.' },
      { stem: 'What is the circumference of a circle with radius 5?', options: ['25π', '5π', '10π', '20π'], answer: 2, skill: 'Circles', explain: 'Circumference = 2πr = 10π.' },
      { stem: 'What is cos 60°?', options: ['0.5', '1', '0.866', '0'], answer: 0, skill: 'Trigonometry', explain: 'cos 60° = 0.5 exactly.' },
      { stem: 'Angles around a point total how many degrees?', options: ['180', '90', '270', '360'], answer: 3, skill: 'Angle rules', explain: 'A full turn is 360°.' },
      { stem: 'Two similar triangles have sides in the ratio 2 : 5. The smaller has a side of 6. What is the matching side of the larger?', options: ['15', '12', '30', '10'], answer: 0, skill: 'Similar triangles', explain: '6 corresponds to 2 parts, so one part is 3 and 5 parts is 15.' },
      { stem: 'What is sin 90°?', options: ['0', '0.5', '1', '90'], answer: 2, skill: 'Trigonometry', explain: 'sin 90° = 1.' }
    ]
  },
  sim: {
    seconds: 95,
    items: [
      { stem: 'Two angles of a triangle are 30° and 85°. What is the third?', options: ['65°', '55°', '75°', '115°'], answer: 0, skill: 'Triangles', explain: '180 − 115 = 65.' },
      { stem: 'A right-angled triangle has legs 9 and 12. What is the hypotenuse?', options: ['21', '15', '108', '225'], answer: 1, skill: 'Pythagoras', explain: '81 + 144 = 225, and √225 = 15.' },
      { stem: 'What is the area of a circle with radius 4?', options: ['8π', '16π', '4π', '32π'], answer: 1, skill: 'Circles', explain: 'πr² = 16π.' },
      { stem: 'Two angles lie on a straight line. One is 40°. What is the other?', options: ['50°', '140°', '320°', '40°'], answer: 1, skill: 'Angle rules', explain: '180 − 40 = 140.' },
      { stem: 'What is cos 0°?', options: ['0', '0.5', '1', 'undefined'], answer: 2, skill: 'Trigonometry', explain: 'cos 0° = 1.' }
    ],
    teachback: [
      'State the three angle rules you used today.',
      'Explain Pythagoras in words, without symbols.',
      'Which trigonometric values do you now know by heart?'
    ]
  }
},

/* ══ w07b · quadratics and functions ═════════════════════════════ */
w07b: {
  stampSet: 'math',
  forensics: {
    intro: 'The diagnostic never tested this topic, so nothing is assumed. Name the fault in each wrong option.',
    watch: [
      'f(x) is an instruction, not a multiplication',
      'A quadratic usually has two solutions — losing one is the classic error',
      'Read whether the question wants the roots or the vertex'
    ],
    items: [
      {
        stem: 'If f(x) = 2x + 1, what is f(3)?',
        options: [
          { t: '6x + 3', trap: 'misread', why: 'f(3) means substitute 3 for x, not multiply the whole function by 3.' },
          { t: '7', correct: true },
          { t: '9', trap: 'slip', why: 'This adds before multiplying: 2 × (3 + 1).' },
          { t: '3', trap: 'partial', why: 'This just returns the input.' }
        ],
        explain: 'f(3) means put 3 wherever x appears: 2(3) + 1 = <strong>7</strong>. The brackets are an instruction to substitute.'
      },
      {
        stem: 'What are the solutions of x² − 5x + 6 = 0?',
        options: [
          { t: 'x = 2 and x = 3', correct: true },
          { t: 'x = −2 and x = −3', trap: 'sign', why: 'The signs are inverted. Factorising gives (x − 2)(x − 3), so the roots are positive.' },
          { t: 'x = 2 only', trap: 'partial', why: 'One root found, the other dropped. A quadratic normally has two.' },
          { t: 'x = 5 and x = 6', trap: 'misread', why: 'These are the coefficients from the equation, not its solutions.' }
        ],
        explain: 'x² − 5x + 6 factorises to (x − 2)(x − 3) = 0, so <strong>x = 2 and x = 3</strong>. Check by substituting both back in.'
      },
      {
        stem: 'The graph of y = (x − 2)² + 3 is a parabola. What are the coordinates of its vertex?',
        options: [
          { t: '(−2, 3)', trap: 'sign', why: 'In this form the x-coordinate takes the opposite sign to the number in the bracket.' },
          { t: '(2, 3)', correct: true },
          { t: '(2, −3)', trap: 'sign', why: 'The constant outside the bracket keeps its own sign.' },
          { t: '(3, 2)', trap: 'swap', why: 'The coordinates have been written the wrong way round.' }
        ],
        explain: 'In y = (x − h)² + k the vertex is at (h, k). Here h = 2 and k = 3, so the vertex is <strong>(2, 3)</strong>.'
      }
    ]
  },
  speed: {
    seconds: 95,
    items: [
      { stem: 'If f(x) = 3x − 2, what is f(4)?', options: ['10', '12', '14', '2'], answer: 0, skill: 'Function notation', explain: '3(4) − 2 = 10.' },
      { stem: 'If f(x) = x², what is f(−3)?', options: ['−9', '9', '−6', '6'], answer: 1, skill: 'Function notation', explain: 'Squaring a negative gives a positive: 9.' },
      { stem: 'What are the solutions of x² = 16?', options: ['x = 4', 'x = 4 and x = −4', 'x = 8', 'x = 256'], answer: 1, skill: 'Quadratics', explain: 'Taking a square root gives both a positive and a negative solution.' },
      { stem: 'Factorise x² + 7x + 12.', options: ['(x + 3)(x + 4)', '(x + 2)(x + 6)', '(x − 3)(x − 4)', '(x + 12)(x + 1)'], answer: 0, skill: 'Factorising', explain: 'Two numbers multiplying to 12 and adding to 7: 3 and 4.' },
      { stem: 'If f(x) = 2x + 5 and f(x) = 13, what is x?', options: ['4', '9', '6', '3'], answer: 0, skill: 'Function notation', explain: '2x + 5 = 13, so 2x = 8 and x = 4.' },
      { stem: 'What is the vertex of y = (x + 1)² − 4?', options: ['(1, −4)', '(−1, −4)', '(−1, 4)', '(4, −1)'], answer: 1, skill: 'Parabolas', explain: 'y = (x − h)² + k gives vertex (h, k); here h = −1 and k = −4.' },
      { stem: 'If f(x) = x² − 1, what is f(0)?', options: ['0', '1', '−1', '2'], answer: 2, skill: 'Function notation', explain: '0² − 1 = −1.' },
      { stem: 'What are the solutions of (x − 5)(x + 2) = 0?', options: ['x = 5 and x = −2', 'x = −5 and x = 2', 'x = 5 and x = 2', 'x = 3'], answer: 0, skill: 'Quadratics', explain: 'Each bracket is set to zero in turn.' }
    ]
  },
  sim: {
    seconds: 95,
    items: [
      { stem: 'If f(x) = 4x + 1, what is f(3)?', options: ['13', '12', '15', '7'], answer: 0, skill: 'Function notation', explain: '4(3) + 1 = 13.' },
      { stem: 'What are the solutions of x² = 25?', options: ['x = 5', 'x = 5 and x = −5', 'x = 12.5', 'x = 625'], answer: 1, skill: 'Quadratics', explain: 'Both roots must be given.' },
      { stem: 'Factorise x² − 3x − 10.', options: ['(x − 5)(x + 2)', '(x + 5)(x − 2)', '(x − 5)(x − 2)', '(x + 5)(x + 2)'], answer: 0, skill: 'Factorising', explain: 'Two numbers multiplying to −10 and adding to −3: −5 and +2.' },
      { stem: 'What is the vertex of y = (x − 3)² + 1?', options: ['(−3, 1)', '(3, 1)', '(3, −1)', '(1, 3)'], answer: 1, skill: 'Parabolas', explain: 'h = 3 and k = 1.' },
      { stem: 'If f(x) = x² + 2, what is f(−2)?', options: ['−2', '6', '2', '−6'], answer: 1, skill: 'Function notation', explain: '(−2)² + 2 = 4 + 2 = 6.' }
    ],
    teachback: [
      'Explain what f(3) is asking you to do, in plain words.',
      'Why does a quadratic usually have two solutions?',
      'In y = (x − h)² + k, where is the vertex and why does the sign flip?'
    ]
  }
},

/* ══ w09b · repair session · mixed advanced ══════════════════════ */
w09b: {
  stampSet: 'math',
  forensics: {
    intro: 'Mixed advanced material — the default set for the repair session. Substitute whatever checkpoint 2 exposed if something more urgent came up.',
    watch: [
      'Exponent rules apply to multiplication, never to addition',
      'Check the direction of a graph transformation',
      'Keep both solutions when taking a square root'
    ],
    items: [
      {
        stem: 'Simplify x³ × x⁴.',
        options: [
          { t: 'x¹²', trap: 'slip', why: 'The exponents have been multiplied. When the bases multiply, the exponents add.' },
          { t: 'x⁷', correct: true },
          { t: 'x¹', trap: 'sign', why: 'The exponents have been subtracted, which is the rule for division.' },
          { t: '2x⁷', trap: 'slip', why: 'The coefficient is invented — there is nothing to double.' }
        ],
        explain: 'Multiplying powers of the same base adds the exponents: 3 + 4 = 7, giving <strong>x⁷</strong>.'
      },
      {
        stem: 'The graph of y = f(x) is shifted to produce y = f(x − 3). Which describes the shift?',
        options: [
          { t: '3 units left', trap: 'sign', why: 'Changes inside the bracket move the graph the opposite way to the sign. Minus three moves it right.' },
          { t: '3 units right', correct: true },
          { t: '3 units down', trap: 'misread', why: 'Vertical shifts come from changes outside the function, not inside the bracket.' },
          { t: '3 units up', trap: 'misread', why: 'Again a vertical shift, which is not what a change to x produces.' }
        ],
        explain: 'A change inside the bracket moves the graph horizontally and in the opposite direction to the sign: f(x − 3) is <strong>3 units right</strong>.'
      },
      {
        stem: 'If √x = 7, what is x?',
        options: [
          { t: '49', correct: true },
          { t: '3.5', trap: 'slip', why: 'This halves 7 rather than squaring it.' },
          { t: '14', trap: 'slip', why: 'This doubles 7. Squaring and doubling are different operations.' },
          { t: '±49', trap: 'sign', why: 'The square-root symbol denotes the positive root only, so there is one answer here.' }
        ],
        explain: 'Square both sides: x = 7² = <strong>49</strong>. Note the contrast with x² = 49, which does have two solutions.'
      }
    ]
  },
  speed: {
    seconds: 95,
    items: [
      { stem: 'Simplify x⁵ ÷ x².', options: ['x⁷', 'x³', 'x²·⁵', 'x¹⁰'], answer: 1, skill: 'Exponents', explain: 'Dividing powers of the same base subtracts the exponents.' },
      { stem: 'What is (2x³)²?', options: ['2x⁶', '4x⁶', '4x⁵', '2x⁹'], answer: 1, skill: 'Exponents', explain: 'Square both the coefficient and the power: 2² = 4 and (x³)² = x⁶.' },
      { stem: 'If √x = 5, what is x?', options: ['25', '2.5', '10', '±25'], answer: 0, skill: 'Radicals', explain: 'Square both sides: x = 25.' },
      { stem: 'The graph of y = f(x) becomes y = f(x) + 2. What is the shift?', options: ['2 right', '2 left', '2 up', '2 down'], answer: 2, skill: 'Transformations', explain: 'A change outside the function shifts the graph vertically, in the direction of the sign.' },
      { stem: 'What is x⁰, for any non-zero x?', options: ['0', '1', 'x', 'undefined'], answer: 1, skill: 'Exponents', explain: 'Any non-zero number to the power zero is 1.' },
      { stem: 'Solve x² = 36.', options: ['x = 6', 'x = 6 and x = −6', 'x = 18', 'x = 1296'], answer: 1, skill: 'Quadratics', explain: 'Both roots.' },
      { stem: 'Simplify (x²)³.', options: ['x⁵', 'x⁶', 'x⁸', '3x²'], answer: 1, skill: 'Exponents', explain: 'A power raised to a power multiplies the exponents.' },
      { stem: 'The graph of y = f(x) becomes y = f(x + 4). What is the shift?', options: ['4 right', '4 left', '4 up', '4 down'], answer: 1, skill: 'Transformations', explain: 'Inside the bracket, and opposite to the sign: plus four moves it left.' }
    ]
  },
  sim: {
    seconds: 95,
    items: [
      { stem: 'Simplify x⁶ ÷ x³.', options: ['x²', 'x³', 'x⁹', 'x¹⁸'], answer: 1, skill: 'Exponents', explain: '6 − 3 = 3.' },
      { stem: 'What is (3x²)²?', options: ['9x⁴', '3x⁴', '6x⁴', '9x²'], answer: 0, skill: 'Exponents', explain: '3² = 9 and (x²)² = x⁴.' },
      { stem: 'If √x = 9, what is x?', options: ['3', '18', '81', '±81'], answer: 2, skill: 'Radicals', explain: '9² = 81.' },
      { stem: 'y = f(x) becomes y = f(x) − 5. What is the shift?', options: ['5 left', '5 right', '5 up', '5 down'], answer: 3, skill: 'Transformations', explain: 'Outside the function, in the direction of the sign.' },
      { stem: 'Simplify x⁴ × x.', options: ['x⁴', 'x⁵', 'x³', '2x⁴'], answer: 1, skill: 'Exponents', explain: 'x is x¹, so 4 + 1 = 5.' }
    ],
    teachback: [
      'State the three exponent rules you used today.',
      'Why does f(x − 3) move the graph right rather than left?',
      'When does a square root give two answers, and when does it give one?'
    ]
  }
},

/* ══ w10b · exam craft ═══════════════════════════════════════════ */
w10b: {
  stampSet: 'math',
  forensics: {
    intro: 'No topic labels from here on. The first job on every question is recognising what kind of question it is. Name the fault in each wrong option.',
    watch: [
      'When the options are numbers, try working backwards from the middle one',
      'When the options are expressions, pick a value and test it',
      'Avoid picking 0 or 1 — they make too many options look right'
    ],
    items: [
      {
        stem: 'Which value of x satisfies 3x − 7 = 14?',
        options: [
          { t: '5', trap: 'slip', why: 'Testing it: 3(5) − 7 = 8, not 14. Backsolving means substituting to check, not estimating.' },
          { t: '7', correct: true },
          { t: '21', trap: 'partial', why: 'That is 3x, not x.' },
          { t: '2.33', trap: 'slip', why: 'This divides 7 by 3 — working with the wrong number.' }
        ],
        explain: 'Backsolving: try the middle options first. 3(7) − 7 = 14 ✓. The answer is <strong>7</strong>. This technique only helps if you actually substitute.'
      },
      {
        stem: 'If n is an even integer, which expression is always odd?',
        options: [
          { t: '2n', trap: 'misread', why: 'Test n = 4: 2n = 8, which is even. Doubling anything gives an even number.' },
          { t: 'n + 1', correct: true },
          { t: 'n ÷ 2', trap: 'misread', why: 'Test n = 8: n ÷ 2 = 4, even. It also is not guaranteed to be an integer.' },
          { t: 'n + 2', trap: 'misread', why: 'Test n = 4: n + 2 = 6, even. Adding two keeps the parity the same.' }
        ],
        explain: 'Pick a number and test. With n = 4: only n + 1 = 5 is odd. Test a second value to be sure — <strong>n + 1</strong> works every time.'
      },
      {
        stem: 'A question gives four expressions as answer choices and no numbers at all. What is the most efficient first move?',
        options: [
          { t: 'Solve it algebraically from scratch', trap: 'partial', why: 'Sometimes correct, but usually slower — and the exam is scored on marks per minute, not elegance.' },
          { t: 'Pick a convenient value for the variable and test each option', correct: true },
          { t: 'Guess and move on', trap: 'misread', why: 'Guessing is the right move only after a genuine attempt has failed.' },
          { t: 'Use the calculator on each option', trap: 'partial', why: 'Without choosing a value first there is nothing for the calculator to work on.' }
        ],
        explain: 'When the answers are expressions rather than numbers, <strong>picking a value</strong> converts an abstract question into arithmetic. Avoid 0 and 1.'
      }
    ]
  },
  speed: {
    seconds: 95,
    items: [
      { stem: 'Which value of x satisfies 4x + 3 = 23?', options: ['5', '4', '6', '20'], answer: 0, skill: 'Backsolving', explain: '4(5) + 3 = 23 ✓.' },
      { stem: 'If n is odd, which is always even?', options: ['n + 2', '2n', 'n²', 'n − 2'], answer: 1, skill: 'Picking numbers', explain: 'Any integer doubled is even. Test n = 3: 2n = 6.' },
      { stem: 'If 2(x − 3) = 10, what is x?', options: ['8', '5', '11', '2'], answer: 0, skill: 'Backsolving', explain: 'x − 3 = 5, so x = 8. Check: 2(5) = 10 ✓.' },
      { stem: 'A number is increased by 40% and then decreased by 40%. Compared with the original it is:', options: ['the same', 'larger', 'smaller', 'impossible to tell'], answer: 2, skill: 'Picking numbers', explain: 'Take 100: 140, then 40% off gives 84. Percentages apply to different bases.' },
      { stem: 'Which is largest?', options: ['0.4', '3 ÷ 8', '0.35', '1 ÷ 3'], answer: 0, skill: 'Comparing values', explain: '3 ÷ 8 = 0.375 and 1 ÷ 3 ≈ 0.333, so 0.4 is largest.' },
      { stem: 'If x = 5, what is 3x² ?', options: ['225', '75', '30', '15'], answer: 1, skill: 'Order of operations', explain: 'Square first: 3 × 25 = 75.' },
      { stem: 'You have 30 seconds left and no route into a question. What is the correct move?', options: ['Keep working on it', 'Leave it blank', 'Guess and move on', 'Restart the question'], answer: 2, skill: 'Exam craft', explain: 'There is no penalty for a wrong answer, so a guess is strictly better than a blank.' },
      { stem: 'If 5(x + 2) = 45, what is x?', options: ['7', '9', '43', '11'], answer: 0, skill: 'Backsolving', explain: 'x + 2 = 9, so x = 7. Check: 5(9) = 45 ✓.' }
    ]
  },
  sim: {
    seconds: 95,
    items: [
      { stem: 'Which value of x satisfies 6x − 4 = 26?', options: ['5', '4', '6', '30'], answer: 0, skill: 'Backsolving', explain: '6(5) − 4 = 26 ✓.' },
      { stem: 'If n is an integer, which is always an integer?', options: ['n ÷ 2', 'n ÷ 3', '2n', '√n'], answer: 2, skill: 'Picking numbers', explain: 'Doubling an integer always gives an integer; the others fail for most values.' },
      { stem: 'A price is decreased by 20% and then increased by 20%. Compared with the original it is:', options: ['the same', 'larger', 'smaller', 'cannot tell'], answer: 2, skill: 'Picking numbers', explain: 'Take 100: 80, then +20% gives 96.' },
      { stem: 'Which is smallest?', options: ['0.25', '1 ÷ 5', '0.3', '2 ÷ 7'], answer: 1, skill: 'Comparing values', explain: '1 ÷ 5 = 0.2, the smallest of the four.' },
      { stem: 'If x = 3, what is 2x³ ?', options: ['216', '54', '18', '27'], answer: 1, skill: 'Order of operations', explain: 'Cube first: 2 × 27 = 54.' }
    ],
    teachback: [
      'When do you backsolve, and when do you pick a number?',
      'Why should you avoid picking 0 or 1 as a test value?',
      'State the rule about blank answers, and why it is true.'
    ]
  }
}

};
