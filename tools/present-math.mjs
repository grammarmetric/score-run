/* PRESENTATION content — mathematics.
   Three teaching modules per lesson: concept cards with formulas,
   a right/wrong pair, the rule, the trap the exam builds from it,
   and a worked example broken into numbered steps.               */

export const presentMath = {

/* ══ w01b · linear equations and slope ═══════════════════════════ */
w01b: {
  hook: {
    icon: '🎁',
    title: 'Solving is not finishing',
    text: 'The most expensive mistake in SAT maths is not getting the algebra wrong. It is getting the algebra right, finding x, and handing in x when the question asked for 2x. The wrong answers are built from this — one of them is always the value of x, sitting there waiting for you. Underlining what is actually asked, before you start, is worth more marks than any technique in this lesson.'
  },
  modules: [
    {
      title: 'Underline the ask',
      accent: 'sky',
      lead: 'Read the final clause of the question first and underline exactly what it wants. Then solve.',
      concepts: [
        { i: '✏️', t: 'Before solving', d: 'Underline the quantity asked for: x, or 2x, or x + 1, or “the value of the expression”.' },
        { i: '🔁', t: 'After solving', d: 'Go back to the underline. Compare it with what you have written down.' },
        { i: '🪤', t: 'The decoy', d: 'The value of x is nearly always one of the four options, even when x is not what was asked.', f: 'found x ≠ finished' }
      ],
      examples: [
        { ok: true, t: '5x − 3 = 12 → x = 3 → asked for 10x → <span class="hl-ok">30</span>', note: 'Solved, then went back to the underline.' },
        { ok: false, t: '5x − 3 = 12 → x = <span class="hl-no">3</span> → answered 3', note: 'Correct algebra, wrong quantity. Full marks lost.' }
      ],
      rule: 'Underline the ask before the first line of working, and check against it before you choose.',
      trap: 'This error feels impossible until it happens under time pressure. It is the single most common avoidable loss on the maths section.',
      worked: {
        q: 'If 5x − 3 = 12, what is the value of 10x?',
        steps: [
          'Underline the ask: <strong>10x</strong> — not x.',
          'Add 3 to both sides: 5x = 15.',
          'Divide by 5: x = 3. This is where most people stop and lose the mark.',
          'Return to the underline. It said 10x, so multiply: 10 × 3.'
        ],
        answer: '10x = 30. Note that 3 is offered as an option.'
      }
    },
    {
      title: 'Isolating x, in reverse order',
      accent: 'teal',
      lead: 'To undo an equation, reverse the operations and reverse their order — the last thing done to x is the first thing you undo.',
      concepts: [
        { i: '➕', t: 'Undo add/subtract', d: 'Move constants across first by doing the opposite.' },
        { i: '✖️', t: 'Undo multiply/divide', d: 'Then deal with the coefficient.' },
        { i: '🧊', t: 'Brackets', d: 'When x sits inside brackets, dividing by the outside number first is usually faster than expanding.', f: '4(x − 1) = 20 → x − 1 = 5' }
      ],
      examples: [
        { ok: true, t: '4(x − 1) = 20 → divide by 4 → x − 1 = 5 → <span class="hl-ok">x = 6</span>', note: 'Divide first: one line of working instead of three.' },
        { ok: false, t: '4(x − 1) = 20 → 4x − 1 = 20', note: 'The 4 was multiplied into only the first term. Both terms in the bracket must be multiplied.' }
      ],
      rule: 'Whatever you do to one side, do to the other. Undo in reverse order.',
      trap: 'Sign errors when moving terms across. Every wrong option in these questions is reachable by exactly one sign slip.',
      tip: 'When the bracket has a clean factor, divide before expanding. Fewer steps means fewer chances to slip.',
      worked: {
        q: 'If 4(x − 1) = 20, what is x?',
        steps: [
          'The bracket is multiplied by 4, and 20 divides by 4 cleanly — so divide first.',
          '4(x − 1) ÷ 4 = 20 ÷ 4, giving x − 1 = 5.',
          'Now undo the subtraction: add 1 to both sides.',
          'Check by substituting back: 4(6 − 1) = 4 × 5 = 20 ✓'
        ],
        answer: 'x = 6.'
      }
    },
    {
      title: 'Slope is a rate, the intercept is a start',
      accent: 'olive',
      lead: 'The SAT rarely asks you to compute a slope in isolation. It asks what the slope <em>means</em> in the situation described.',
      concepts: [
        { i: '📈', t: 'Slope = rate', d: 'How much y changes for each 1 unit of x. In a cost model, the price per hour or per item.', f: 'm = (y₂ − y₁) ÷ (x₂ − x₁)' },
        { i: '🏁', t: 'Intercept = start', d: 'The value when x is zero. The fixed fee, the joining charge, the starting amount.' },
        { i: '📐', t: 'Same order', d: 'Subtract in the same order on top and bottom or the sign flips.', f: 'y = mx + b' }
      ],
      examples: [
        { ok: true, t: 'C = 45 + 30h → <span class="hl-ok">30 is the hourly rate</span>, 45 is the call-out fee.', note: 'The number attached to the variable is the rate.' },
        { ok: false, t: 'C = 45 + 30h → <span class="hl-no">30 is the call-out fee</span>', note: 'Swapped. The constant, not the coefficient, is the fixed charge.' }
      ],
      rule: 'The number multiplying the variable is the rate; the number standing alone is the starting amount.',
      trap: 'Both numbers appear in the options with their meanings swapped, and a third option gives their sum — the cost of one hour.',
      worked: {
        q: 'A line passes through (2, 5) and (6, 13). What is its slope?',
        steps: [
          'Slope is change in y over change in x.',
          'Change in y: 13 − 5 = 8. Keep the order — second point minus first.',
          'Change in x, in the SAME order: 6 − 2 = 4.',
          'Divide: 8 ÷ 4. Reversing one subtraction but not the other is what produces the negative decoy.'
        ],
        answer: 'The slope is 2.'
      },
      desmos: {
        title: 'Slope and intercept explorer',
        hint: 'Drag <code>m</code> and watch the steepness change. Then drag <code>b</code> — the line slides up and down without ever changing steepness. That is the whole difference between a rate and a starting amount.',
        bounds: { left: -10, right: 10, bottom: -10, top: 10 },
        expressions: [
          { id: 'm', latex: 'm=2', sliderBounds: { min: -5, max: 5, step: 0.1 } },
          { id: 'b', latex: 'b=3', sliderBounds: { min: -8, max: 8, step: 0.5 } },
          { id: 'line', latex: 'y=mx+b', color: '#54c1e6' },
          { id: 'yint', latex: '(0,b)', color: '#fee801', showLabel: true, label: 'starting amount' }
        ]
      }
    }
  ],
  check: {
    stem: 'If 2x = 8, what is 4x?',
    options: ['4', '16'], answer: 1,
    explain: 'x = 4, but the question asked for 4x, which is 16.'
  }
},

/* ══ w02b · systems, inequalities and translation ═════════════════ */
w02b: {
  hook: {
    icon: '🌉',
    title: 'The bridge from words to symbols',
    text: 'Most maths marks lost on word problems are not lost in the algebra. They are lost in the first line, translating the sentence into an equation. Once the setup is right the solving is usually routine — which means the time you spend getting the setup right is the best-value time on the whole paper. This is also where the reading weakness shows up in the maths score.'
  },
  modules: [
    {
      title: 'Check the direction with real numbers',
      accent: 'sky',
      lead: '“Three times as many A as B” trips up almost everyone. Do not reason about it — test it with a number.',
      concepts: [
        { i: '🔢', t: 'Pick a number', d: 'Let the smaller group be 4. Then the larger must be 12. Which formula gives that?' },
        { i: '📏', t: 'The bigger group', d: 'gets the multiplier. If A is three times B, then A = 3B.' },
        { i: '⚠️', t: 'The reversal', d: 'Writing B = 3A instead is the single most common translation error.', f: 'A = 3B, not B = 3A' }
      ],
      examples: [
        { ok: true, t: 'Three times as many chose biology as chemistry → <span class="hl-ok">b = 3c</span>', note: 'Test: c = 4 gives b = 12. Twelve is three times four ✓' },
        { ok: false, t: 'Three times as many chose biology as chemistry → <span class="hl-no">c = 3b</span>', note: 'Test: b = 4 gives c = 12 — that makes chemistry the bigger group.' }
      ],
      rule: 'Write your candidate equation, then substitute an easy number to check the direction before solving.',
      trap: 'Both directions are always offered. Reasoning it out in your head under time pressure is a coin flip; testing takes five seconds and is certain.',
      worked: {
        q: 'Three times as many students chose biology as chose chemistry. If c is chemistry, what is biology?',
        steps: [
          'Identify which group is larger: biology, because it is “three times as many”.',
          'Write the candidate: b = 3c.',
          'Test it. Let c = 4, so b = 3 × 4 = 12.',
          'Is 12 three times as many as 4? Yes. If you had written c = 3b, testing would have given chemistry as the larger group.'
        ],
        answer: 'b = 3c.'
      }
    },
    {
      title: 'Inequality words',
      accent: 'teal',
      lead: 'Four phrases carry all the marks here, and two of them include the boundary value while two exclude it.',
      concepts: [
        { i: '≥', t: 'At least / no fewer than', d: 'Includes the value itself. “At least 15” means 15 is allowed.' },
        { i: '≤', t: 'At most / no more than', d: 'Includes the value. “At most 400 kg” means 400 kg is allowed.' },
        { i: '>', t: 'More than / over', d: 'Excludes the value. “More than 15” means 16 upward.' },
        { i: '<', t: 'Fewer than / under', d: 'Excludes the value.' }
      ],
      examples: [
        { ok: true, t: 'A lift carries at most 400 kg → <span class="hl-ok">w ≤ 400</span>', note: '“At most” caps from above and includes 400.' },
        { ok: false, t: 'A lift carries at most 400 kg → <span class="hl-no">w < 400</span>', note: 'Right direction, but excludes exactly 400, which is allowed.' }
      ],
      rule: '“At least” and “at most” include the boundary. “More than” and “fewer than” do not.',
      trap: 'The options give you both the right direction with the wrong boundary and the wrong direction with the right boundary — so getting one half right is not enough.',
      worked: {
        q: 'A worker must complete at least 15 units a day. Which inequality shows the acceptable numbers u?',
        steps: [
          'Which direction? “At least” means a minimum, so acceptable values go upward from 15.',
          'That eliminates anything with < or ≤.',
          'Does 15 itself count? “At least 15” means 15 is acceptable, so the boundary is included.',
          'Include the boundary with the line under the sign.'
        ],
        answer: 'u ≥ 15.'
      }
    },
    {
      title: 'Solving a system, then answering the right part',
      accent: 'olive',
      lead: 'Two equations, two unknowns. Substitute or eliminate — then check which of the two the question wanted.',
      concepts: [
        { i: '🔄', t: 'Substitution', d: 'Best when one equation is already solved for a variable, like y = 2x.' },
        { i: '➕', t: 'Elimination', d: 'Best when coefficients match: add or subtract to cancel one variable.', f: 'x + y = 10, x − y = 4 → add → 2x = 14' },
        { i: '🎯', t: 'Then re-read', d: 'You will have found both values. Only one was asked for.' }
      ],
      examples: [
        { ok: true, t: 'n + p = 12, 3n + 2p = 31 → <span class="hl-ok">n = 7</span> notebooks (and p = 5 pens)', note: 'Both values found, then the question re-read.' },
        { ok: false, t: '…→ answered <span class="hl-no">5</span>', note: 'That is the number of pens. Same working, wrong half.' }
      ],
      rule: 'Solve fully, write down both values, then go back to the question and pick the one it names.',
      trap: 'Both values are always offered as options. The working can be perfect and still score zero.',
      worked: {
        q: 'A shop sells notebooks for $3 and pens for $2. Maya buys 12 items and spends $31. How many notebooks?',
        steps: [
          'Two unknowns, so two equations. Items: n + p = 12. Money: 3n + 2p = 31.',
          'Rearrange the first: p = 12 − n. Substitute into the second.',
          '3n + 2(12 − n) = 31 → 3n + 24 − 2n = 31 → n + 24 = 31 → n = 7.',
          'Now p = 12 − 7 = 5. The question asked for notebooks, so the answer is n, not p.'
        ],
        answer: '7 notebooks.'
      },
      desmos: {
        title: 'Where two equations meet',
        hint: 'Both equations from a system are graphed together. The solution is the single point where they cross — which is why a system with parallel lines has no solution at all.',
        bounds: { left: -2, right: 12, bottom: -2, top: 14 },
        expressions: [
          { id: 'l1', latex: 'x+y=10', color: '#54c1e6' },
          { id: 'l2', latex: 'x-y=4', color: '#39c4b6' },
          { id: 'sol', latex: '(7,3)', color: '#fee801', showLabel: true, label: 'solution (7, 3)' }
        ]
      }
    }
  ],
  check: {
    stem: 'Four times as many chairs as tables. If t is tables, chairs = ?',
    options: ['t ÷ 4', '4t'], answer: 1,
    explain: 'Chairs are the larger group, so they take the multiplier. Test with t = 3: 12 chairs is four times 3 ✓'
  }
},

/* ══ w03b · ratios, rates and percentages ════════════════════════ */
w03b: {
  hook: {
    icon: '🧾',
    title: 'Everything is measured against the original',
    text: 'This was the weakest area on the diagnostic — one correct out of seven. Almost all of it comes down to one habit: knowing which number goes on the bottom of the fraction. Percentage change is measured against where you started, never where you ended up. Get that one thing automatic and this domain stops being the worst on the paper.'
  },
  modules: [
    {
      title: 'Percentage of, versus percentage change',
      accent: 'sky',
      lead: 'Two different operations that students blur together. Separate them and half of this topic is solved.',
      concepts: [
        { i: '✖️', t: 'Percentage OF', d: 'Convert to a decimal and multiply. 20% of 45 = 0.2 × 45.', f: 'part = (pct ÷ 100) × whole' },
        { i: '📊', t: 'Percentage CHANGE', d: 'Find the change, then divide by the ORIGINAL value.', f: '% change = change ÷ original × 100' },
        { i: '🔙', t: 'Working backwards', d: 'If a price after 20% off is $64, divide by 0.8 — do not add 20% back.', f: 'original = final ÷ (1 − r)' }
      ],
      examples: [
        { ok: true, t: '$80 → $100. Change 20, original 80 → 20 ÷ 80 = <span class="hl-ok">25%</span>', note: 'Divided by the starting value.' },
        { ok: false, t: '$80 → $100. 20 ÷ 100 = <span class="hl-no">20%</span>', note: 'Divided by the final value instead of the original.' }
      ],
      rule: 'The denominator is always where you started, never where you finished.',
      trap: 'Both answers appear in the options — the correct one and the one from dividing by the wrong figure. There is no way to tell them apart by eye.',
      tip: 'A rise of 25% and a fall of 25% are not opposites. Take 100 → +25% → 125 → −25% → 93.75. You do not get back.',
      worked: {
        q: 'A price rises from $80 to $100. What is the percentage increase?',
        steps: [
          'Identify the original: 80. This is the denominator.',
          'Find the change: 100 − 80 = 20.',
          'Divide the change by the original: 20 ÷ 80 = 0.25.',
          'Convert to a percentage. Dividing by 100 instead would give 20% — which is offered as a trap.'
        ],
        answer: 'A 25% increase.'
      }
    },
    {
      title: 'Rates carry units',
      accent: 'teal',
      lead: 'A rate is “per one unit”. If you track the units through the calculation, you cannot divide the wrong way round.',
      concepts: [
        { i: '🚗', t: 'Speed', d: 'Distance divided by time. The units tell you: km per hour means km ÷ hours.', f: 'rate = amount ÷ units' },
        { i: '🏷️', t: 'Unit price', d: 'Total cost divided by quantity. Compare two deals by putting both per single item.' },
        { i: '🔍', t: 'Sanity check', d: 'Does the answer’s size make sense? 375 km/h for a car should stop you immediately.' }
      ],
      examples: [
        { ok: true, t: '150 km in 2.5 hours → 150 ÷ 2.5 = <span class="hl-ok">60 km/h</span>', note: 'The unit “km per hour” tells you to divide km by hours.' },
        { ok: false, t: '150 × 2.5 = <span class="hl-no">375 km/h</span>', note: 'Multiplied instead of divided. The size alone should reject it.' }
      ],
      rule: 'Write the units the answer needs, and let them tell you which way to divide.',
      trap: 'Averaging two rates directly is wrong. If you drive out at 30 km/h and back at 60 km/h, the average is not 45 — you must use total distance over total time.',
      worked: {
        q: 'A car uses 6 litres per 100 km. How much does it use for 250 km?',
        steps: [
          'The rate is 6 litres per 100 km.',
          '250 km is 2.5 lots of 100 km.',
          'So the fuel needed is 2.5 lots of 6 litres.',
          'Check the size: more distance than 100 km, so more than 6 litres. 15 is sensible.'
        ],
        answer: '15 litres.'
      },
      desmos: {
        title: 'A rate is a straight line through the origin',
        hint: 'Fuel used against distance, at 6 litres per 100 km. Drag <code>r</code> to change the rate and watch the steepness change. Every constant rate is a line through (0, 0) — which is why doubling the distance always doubles the fuel.',
        bounds: { left: -20, right: 320, bottom: -3, top: 26 },
        expressions: [
          { id: 'r', latex: 'r=0.06', sliderBounds: { min: 0.01, max: 0.2, step: 0.01 } },
          { id: 'fuel', latex: 'y=rx', color: '#54c1e6' },
          { id: 'pt', latex: '(250,250r)', color: '#fee801', showLabel: true, label: '250 km' }
        ]
      }
    },
    {
      title: 'Ratios: find one part first',
      accent: 'olive',
      lead: 'Every ratio question is the same three steps. Add the parts, divide to find one part, multiply for the part you want.',
      concepts: [
        { i: '➕', t: 'Add the parts', d: 'A ratio of 3 : 5 has 3 + 5 = 8 parts in total.' },
        { i: '➗', t: 'Find one part', d: 'Divide the total quantity by the number of parts.', f: 'one part = total ÷ sum of parts' },
        { i: '✖️', t: 'Multiply up', d: 'Multiply one part by the number of parts you were asked about.' }
      ],
      examples: [
        { ok: true, t: '3 : 5, total 32 → 8 parts → 32 ÷ 8 = 4 → girls = 5 × 4 = <span class="hl-ok">20</span>', note: 'All three steps, and the right side of the ratio chosen.' },
        { ok: false, t: '…→ answered <span class="hl-no">12</span>', note: 'That is 3 × 4 — the boys. Same working, wrong side.' }
      ],
      rule: 'Add, divide, multiply — then check which side of the ratio the question named.',
      trap: 'Both sides of the ratio appear as options, along with the value of one part (4 here) and the number of parts (8).',
      worked: {
        q: 'In a class the ratio of boys to girls is 3 : 5. There are 32 students. How many girls?',
        steps: [
          'Add the parts: 3 + 5 = 8.',
          'Find one part: 32 ÷ 8 = 4 students per part.',
          'The question asks for girls, which is the 5 side of the ratio.',
          'Multiply: 5 × 4. Answering 3 × 4 = 12 would give the boys instead.'
        ],
        answer: '20 girls.'
      }
    }
  ],
  check: {
    stem: 'A price falls from $50 to $40. What is the percentage decrease?',
    options: ['20%', '25%'], answer: 0,
    explain: 'Change is 10, original is 50: 10 ÷ 50 = 20%. Dividing by 40 would give the 25% trap.'
  }
},

/* ══ w05b · tables, charts and averages ══════════════════════════ */
w05b: {
  hook: {
    icon: '🔭',
    title: 'Read the instrument before the question',
    text: 'A chart question is really a reading question wearing a maths costume. The numbers are easy; extracting the right ones is the whole task. There is a fixed routine — title, axes, units, then the question — and students who skip it get the arithmetic right on the wrong figures.'
  },
  modules: [
    {
      title: 'The four-second routine',
      accent: 'sky',
      lead: 'Before reading the question, read the chart. Title, both axis labels, units, and whether the scale starts at zero.',
      concepts: [
        { i: '🏷️', t: 'Title and axes', d: 'What is being measured, and against what.' },
        { i: '📏', t: 'Units', d: 'Thousands? Percentages? Per capita? The answer options often differ only by unit.' },
        { i: '⚠️', t: 'Zero check', d: 'A vertical axis starting at 40 makes small differences look enormous.' }
      ],
      examples: [
        { ok: true, t: 'Read the axes, note “figures in thousands”, then answer → <span class="hl-ok">correct scale</span>', note: 'The unit was carried into the answer.' },
        { ok: false, t: 'Read the question, grab the nearest number → <span class="hl-no">answer off by 1000×</span>', note: 'Right shape of reasoning, wrong magnitude.' }
      ],
      rule: 'Chart first, question second. Always.',
      trap: 'A truncated axis exaggerates differences visually. If a question asks whether one bar is “twice” another, check the numbers, not the picture.',
      worked: {
        q: 'A bar chart’s vertical axis starts at 40 rather than 0. What is the risk?',
        steps: [
          'Picture two bars, one at 45 and one at 50.',
          'With the axis starting at zero, they are nearly the same height.',
          'With the axis starting at 40, one is 5 units tall and the other is 10 — it looks twice as big.',
          'The numbers have not changed; only the impression has.'
        ],
        answer: 'Differences between bars look far larger than they are.'
      }
    },
    {
      title: 'Two-way tables: the words pick the denominator',
      accent: 'teal',
      lead: 'The hard part of a two-way table is never the reading. It is knowing which total goes on the bottom of the fraction.',
      concepts: [
        { i: '📋', t: 'Row and column totals', d: 'The totals row and column are summaries, not data. Do not treat them as another category.' },
        { i: '🔑', t: '“Of the…”', d: 'The phrase “of the X” fixes your denominator to X’s total.' },
        { i: '🎯', t: 'Three candidates', d: 'Row total, column total, grand total. Only one matches the wording.' }
      ],
      examples: [
        { ok: true, t: '“Of the Year 11 students, how many walk?” → <span class="hl-ok">15 out of 40</span>', note: '“Of the Year 11 students” fixes the denominator to that row’s total.' },
        { ok: false, t: '→ <span class="hl-no">15 out of 80</span>', note: 'Used the grand total. A different question entirely.' }
      ],
      rule: 'Underline the phrase beginning “of the…”. That names your denominator.',
      trap: 'All three denominators — row total, column total and grand total — are offered as options, each with the same numerator.',
      worked: {
        q: 'Year 11 row: bus 25, walk 15, total 40. Grand total 80. Of the Year 11 students, what fraction walk?',
        steps: [
          'Underline the restricting phrase: “of the Year 11 students”.',
          'That fixes the group to the Year 11 row only, so the denominator is 40.',
          'Find the numerator inside that row: 15 walk.',
          'So the fraction is 15 out of 40. Using 80 or 37 means the wrong total was picked up.'
        ],
        answer: '15 out of 40.'
      }
    },
    {
      title: 'Mean, median and mode',
      accent: 'olive',
      lead: 'Three different averages that the exam deliberately places close together in the answer options.',
      concepts: [
        { i: '➗', t: 'Mean', d: 'Add all values, divide by how many there are.', f: 'mean = total ÷ count' },
        { i: '🎯', t: 'Median', d: 'Order the list first, then take the middle value. Ordering is not optional.' },
        { i: '🔁', t: 'Mode', d: 'The value appearing most often.' },
        { i: '🔙', t: 'Working backwards', d: 'Given a mean and a count, the total is mean × count.', f: 'total = mean × count' }
      ],
      examples: [
        { ok: true, t: '12, 4, 9, 21, 7 → order → 4, 7, 9, 12, 21 → median <span class="hl-ok">9</span>', note: 'Ordered before taking the middle.' },
        { ok: false, t: '12, 4, 9, 21, 7 → middle as written = <span class="hl-no">9</span>… but 5, 2, 9, 4, 7 → 9 is wrong', note: 'Taking the middle of an unordered list works by luck, not method.' }
      ],
      rule: 'Order first for a median. For a missing value, use total = mean × count.',
      trap: 'A dataset is chosen so the mean, median and mode are all different but close — and all three appear as options.',
      worked: {
        q: 'The mean of 8, x and 12 is 10. What is x?',
        steps: [
          'There are three values and the mean is 10.',
          'So the total must be mean × count = 10 × 3 = 30.',
          'The two known values sum to 8 + 12 = 20.',
          'Therefore x is whatever makes the total 30.'
        ],
        answer: 'x = 10.'
      },
      desmos: {
        title: 'Scatterplot and line of best fit',
        hint: 'Change any number in the table and the line updates instantly. The regression <code>y_1 ~ mx_1 + b</code> is already typed in — click it to see the values Desmos worked out for m and b.',
        bounds: { left: -1, right: 8, bottom: -1, top: 14 },
        expressions: [
          { type: 'table', columns: [
            { latex: 'x_1', values: ['1', '2', '3', '4', '5'] },
            { latex: 'y_1', values: ['3', '5', '7', '8', '11'], color: '#54c1e6' }
          ] },
          { id: 'reg', latex: 'y_1 \\sim mx_1+b' }
        ]
      }
    }
  ],
  check: {
    stem: 'Values 12, 4, 9. What is the median?',
    options: ['12', '9'], answer: 1,
    explain: 'Order them first: 4, 9, 12. The middle value is 9.'
  }
},

/* ══ w06b · angles, triangles and the unit circle ════════════════ */
w06b: {
  hook: {
    icon: '📐',
    title: 'A short list, known cold',
    text: 'Geometry is the smallest maths domain on the exam and the most finite. There is a short list of exact facts, the formula sheet is provided on the day, and almost every question is one of those facts applied once. The two ways to lose marks are not knowing the list, and trusting what the diagram looks like instead of what it says.'
  },
  modules: [
    {
      title: 'The angle rules',
      accent: 'sky',
      lead: 'Four facts. Everything about angles on this exam is built from them.',
      concepts: [
        { i: '📏', t: 'Straight line', d: 'Angles on a straight line total 180°.' },
        { i: '🔄', t: 'Around a point', d: 'A full turn totals 360°.' },
        { i: '🔺', t: 'In a triangle', d: 'The three angles total 180°.', f: 'a + b + c = 180°' },
        { i: '⚖️', t: 'Isosceles', d: 'Two equal sides means two equal angles — but only if the question says so.' }
      ],
      examples: [
        { ok: true, t: 'Two angles on a line, one is 115° → other = 180 − 115 = <span class="hl-ok">65°</span>', note: 'Subtracted from 180.' },
        { ok: false, t: '→ 360 − 115 = <span class="hl-no">245°</span>', note: 'Used the around-a-point rule for a straight line.' }
      ],
      rule: 'Identify which configuration you are in — line, point, or triangle — before subtracting.',
      trap: 'Never assume a right angle, equal sides, or parallel lines because the picture looks that way. Diagrams are not drawn to scale unless stated.',
      worked: {
        q: 'Two angles of a triangle are 45° and 65°. What is the third?',
        steps: [
          'The configuration is a triangle, so the total is 180°.',
          'Add the two known angles: 45 + 65 = 110.',
          'Subtract from the total: 180 − 110.',
          'Sanity check: all three should add back to 180. 45 + 65 + 70 = 180 ✓'
        ],
        answer: '70°.'
      }
    },
    {
      title: 'Pythagoras, and the triples worth memorising',
      accent: 'teal',
      lead: 'Square, add, square-root. The step people forget is the last one.',
      concepts: [
        { i: '🔢', t: 'The formula', d: 'Square both legs, add them, then take the square root.', f: 'a² + b² = c²' },
        { i: '⭐', t: 'Common triples', d: '3-4-5, 6-8-10, 5-12-13, 9-12-15. Spotting these saves real time.' },
        { i: '🛑', t: 'The missed step', d: 'a² + b² gives c SQUARED. You still have to root it.' }
      ],
      examples: [
        { ok: true, t: 'Legs 6 and 8 → 36 + 64 = 100 → √100 = <span class="hl-ok">10</span>', note: 'Rooted at the end.' },
        { ok: false, t: 'Legs 6 and 8 → 6 + 8 = <span class="hl-no">14</span>', note: 'Added the legs without squaring. Also offered: 100, which stops one step early.' }
      ],
      rule: 'Square, add, root. Three steps, and the third is the one that gets dropped.',
      trap: 'Both the un-rooted answer (100) and the simply-added answer (14) appear as options.',
      tip: 'The formula sheet is on the real exam. Use it — many students forget it exists and try to recall formulas under pressure.',
      worked: {
        q: 'A right-angled triangle has legs of 6 and 8. Find the hypotenuse.',
        steps: [
          'Square each leg: 6² = 36 and 8² = 64.',
          'Add them: 36 + 64 = 100.',
          'This is c², not c. Take the square root: √100.',
          'Recognise it: 6-8-10 is a common triple, double 3-4-5.'
        ],
        answer: 'The hypotenuse is 10.'
      }
    },
    {
      title: 'The trigonometry worth knowing by heart',
      accent: 'olive',
      lead: 'A handful of exact values come up repeatedly. Knowing them removes the calculator from the loop entirely.',
      concepts: [
        { i: '📊', t: 'SOH CAH TOA', d: 'sin = opposite/hypotenuse, cos = adjacent/hypotenuse, tan = opposite/adjacent.' },
        { i: '⭐', t: 'Know these', d: 'sin 30° = 0.5, cos 60° = 0.5, sin 90° = 1, cos 0° = 1, sin 0° = 0.', f: 'sin 30° = cos 60° = ½' },
        { i: '🔄', t: 'Degrees or radians', d: 'Check which the question uses before touching the calculator.' }
      ],
      examples: [
        { ok: true, t: 'sin 30° = <span class="hl-ok">0.5</span> exactly', note: 'An exact value, not a decimal approximation.' },
        { ok: false, t: 'sin 30° = <span class="hl-no">0.866</span>', note: 'That is cos 30°. The pair is swapped.' }
      ],
      rule: 'Learn the small table of exact values. It converts several questions into instant recall.',
      trap: 'sin and cos values are offered swapped, so a half-memory produces a confident wrong answer.',
      worked: {
        q: 'What is the value of sin 30°?',
        steps: [
          'This is one of the exact values, so no calculation is needed.',
          'Picture a 30-60-90 triangle: the side opposite 30° is exactly half the hypotenuse.',
          'sin is opposite over hypotenuse, so that ratio is ½.',
          'Note the partner fact: cos 60° is also ½. The trap answer 0.866 is cos 30°.'
        ],
        answer: 'sin 30° = 0.5.'
      },
      desmos: {
        title: 'The unit circle',
        hint: 'Drag <code>t</code> around the circle. The point’s <em>height</em> is the sine and its <em>distance along</em> is the cosine. Stop at 30° and read the height — exactly 0.5. Stop at 90° and it is 1.',
        options: { degreeMode: true },
        bounds: { left: -1.7, right: 1.7, bottom: -1.35, top: 1.35 },
        expressions: [
          { id: 'circ', latex: 'x^2+y^2=1', color: '#39c4b6' },
          { id: 't', latex: 't=30', sliderBounds: { min: 0, max: 360, step: 1 } },
          { id: 'ray', latex: 'y=\\tan(t)x\\left\\{0\\le x\\cos(t)\\right\\}', color: '#9a9f17' },
          { id: 'pt', latex: '(\\cos(t),\\sin(t))', color: '#fee801', showLabel: true, label: 'sin = height' },
          { id: 'drop', latex: 'x=\\cos(t)\\left\\{0\\le y\\le\\sin(t)\\right\\}', color: '#54c1e6' }
        ]
      }
    }
  ],
  check: {
    stem: 'A right-angled triangle has legs 3 and 4. What is the hypotenuse?',
    options: ['7', '5'], answer: 1,
    explain: '9 + 16 = 25, and √25 = 5. Adding the legs gives 7, which is the trap.'
  }
},

/* ══ w07b · quadratics and functions ═════════════════════════════ */
w07b: {
  hook: {
    icon: '🎰',
    title: 'A machine, not a multiplication',
    text: 'This is the topic your diagnostic never tested — and on the real exam it is roughly a third of the maths section. So nothing here is assumed. f(x) is not f times x. It is a machine: you feed a number in, the rule inside processes it, and one number comes out. Everything else in this lesson follows from taking that literally.'
  },
  modules: [
    {
      title: 'f(x) is an instruction',
      accent: 'sky',
      lead: 'The brackets mean “substitute”. Whatever is inside them goes wherever x appears in the rule.',
      concepts: [
        { i: '🎰', t: 'Input → output', d: 'f(3) means: put 3 wherever the rule has an x, then simplify.' },
        { i: '🏷️', t: 'The letter is a name', d: 'f, g, h — just labels. Two functions in one question means two different rules.' },
        { i: '🔄', t: 'Working backwards', d: 'If f(x) = 13, set the rule equal to 13 and solve for x instead.' }
      ],
      examples: [
        { ok: true, t: 'f(x) = 2x + 1, so f(3) = 2(3) + 1 = <span class="hl-ok">7</span>', note: 'Substituted 3 for x.' },
        { ok: false, t: 'f(x) = 2x + 1, so f(3) = <span class="hl-no">6x + 3</span>', note: 'Multiplied the whole function by 3 instead of substituting.' }
      ],
      rule: 'Brackets mean substitute. Never multiply.',
      trap: 'With f(g(2)), work from the inside out — find g(2) first, then feed that result into f.',
      worked: {
        q: 'If f(x) = 3x − 2, what is f(4)?',
        steps: [
          'The instruction is: put 4 wherever x appears.',
          'The rule is 3x − 2, so it becomes 3(4) − 2.',
          'Multiply first, following order of operations: 12 − 2.',
          'Adding before multiplying would give 3 × 2 = 6, which is one of the wrong options.'
        ],
        answer: 'f(4) = 10.'
      }
    },
    {
      title: 'Factorising, and keeping both roots',
      accent: 'teal',
      lead: 'Find two numbers that multiply to the last term and add to the middle one. Then set each bracket to zero.',
      concepts: [
        { i: '✖️', t: 'Multiply to c', d: 'The two numbers multiply to give the constant term.' },
        { i: '➕', t: 'Add to b', d: 'The same two numbers add to give the middle coefficient.', f: 'x² + bx + c = (x + p)(x + q)' },
        { i: '2️⃣', t: 'Two roots', d: 'Set each bracket to zero separately. A quadratic normally has two solutions.' }
      ],
      examples: [
        { ok: true, t: 'x² − 5x + 6 = (x − 2)(x − 3) → x = <span class="hl-ok">2 and 3</span>', note: 'Both roots given.' },
        { ok: false, t: 'x² − 5x + 6 → x = <span class="hl-no">2</span> only', note: 'One root found, the other dropped. Half the answer scores nothing.' }
      ],
      rule: 'Two numbers, multiplying to the constant and adding to the middle. Then both brackets, both roots.',
      trap: 'Signs. If the constant is positive and the middle is negative, both numbers are negative — as in this example.',
      tip: 'Always substitute your roots back in to check. It takes ten seconds and catches every sign error.',
      worked: {
        q: 'Solve x² − 5x + 6 = 0.',
        steps: [
          'Look for two numbers multiplying to +6 and adding to −5.',
          'Both must be negative, since they multiply to a positive and add to a negative: −2 and −3.',
          'So it factorises as (x − 2)(x − 3) = 0.',
          'Set each bracket to zero: x − 2 = 0 gives x = 2; x − 3 = 0 gives x = 3. Check: 4 − 10 + 6 = 0 ✓'
        ],
        answer: 'x = 2 and x = 3.'
      }
    },
    {
      title: 'Vertex form, and the sign that flips',
      accent: 'olive',
      lead: 'Written as y = a(x − h)² + k, the parabola’s turning point is at (h, k) — and the sign inside the bracket inverts.',
      concepts: [
        { i: '📍', t: 'The vertex', d: 'Read (h, k) straight off. No calculation.', f: 'y = a(x − h)² + k → vertex (h, k)' },
        { i: '🔄', t: 'The flip', d: 'The form has a minus, so (x + 1)² means h = −1.' },
        { i: '↕️', t: 'What a does', d: 'Positive opens upward, negative opens downward. Larger |a| means narrower.' }
      ],
      examples: [
        { ok: true, t: 'y = (x − 2)² + 3 → vertex <span class="hl-ok">(2, 3)</span>', note: 'Minus two in the bracket gives h = +2.' },
        { ok: false, t: 'y = (x − 2)² + 3 → vertex <span class="hl-no">(−2, 3)</span>', note: 'Took the sign as written instead of flipping it.' }
      ],
      rule: 'Inside the bracket, flip the sign. Outside it, keep the sign.',
      trap: 'The x-coordinate flips and the y-coordinate does not — so options are offered with one flipped, the other flipped, and both flipped.',
      worked: {
        q: 'What are the coordinates of the vertex of y = (x + 1)² − 4?',
        steps: [
          'Compare with the standard form y = a(x − h)² + k.',
          'The bracket shows (x + 1), and the form expects (x − h), so −h = +1, giving h = −1.',
          'The constant outside is −4, and that keeps its sign, so k = −4.',
          'The vertex is (h, k). Note the x flipped and the y did not.'
        ],
        answer: 'The vertex is (−1, −4).'
      },
      desmos: {
        title: 'Vertex form playground',
        hint: 'Drag <code>h</code> and watch the vertex move. Increasing <code>h</code> moves the curve <strong>right</strong>, even though the formula reads <code>(x − h)</code> — that is the sign flip, and seeing it happen is easier than memorising it. Then drag <code>a</code> to flip and stretch it.',
        bounds: { left: -10, right: 10, bottom: -10, top: 10 },
        expressions: [
          { id: 'a', latex: 'a=1', sliderBounds: { min: -3, max: 3, step: 0.1 } },
          { id: 'h', latex: 'h=2', sliderBounds: { min: -6, max: 6, step: 0.5 } },
          { id: 'k', latex: 'k=3', sliderBounds: { min: -6, max: 6, step: 0.5 } },
          { id: 'par', latex: 'y=a(x-h)^2+k', color: '#54c1e6' },
          { id: 'v', latex: '(h,k)', color: '#fee801', showLabel: true, label: 'vertex (h, k)' }
        ]
      }
    }
  ],
  check: {
    stem: 'If f(x) = 2x + 1, what is f(3)?',
    options: ['6x + 3', '7'], answer: 1,
    explain: 'Substitute 3 for x: 2(3) + 1 = 7. The brackets mean substitute, not multiply.'
  }
},

/* ══ w09b · repair session · mixed advanced ══════════════════════ */
w09b: {
  hook: {
    icon: '🔧',
    title: 'The rules that look like they should apply, and do not',
    text: 'Exponents and transformations are where confident students lose marks, because both have rules that feel like they ought to extend further than they do. Exponent rules apply to multiplication and division, never to addition. And graph shifts inside the bracket move the opposite way to the sign. Both feel wrong, which is exactly why they are tested.'
  },
  modules: [
    {
      title: 'Exponent rules',
      accent: 'sky',
      lead: 'Three rules cover almost everything, and each applies only when the bases are the same and the operation is multiply or divide.',
      concepts: [
        { i: '✖️', t: 'Multiplying', d: 'Same base multiplied: ADD the exponents.', f: 'xᵃ × xᵇ = xᵃ⁺ᵇ' },
        { i: '➗', t: 'Dividing', d: 'Same base divided: subtract the exponents.', f: 'xᵃ ÷ xᵇ = xᵃ⁻ᵇ' },
        { i: '🔺', t: 'Power of a power', d: 'Multiply the exponents. Coefficients get raised too.', f: '(2x³)² = 4x⁶' },
        { i: '0️⃣', t: 'Zero power', d: 'Anything non-zero to the power zero is 1.' }
      ],
      examples: [
        { ok: true, t: 'x³ × x⁴ = x<sup>3+4</sup> = <span class="hl-ok">x⁷</span>', note: 'Multiplication, so the exponents add.' },
        { ok: false, t: 'x³ × x⁴ = <span class="hl-no">x¹²</span>', note: 'Multiplied the exponents. That is the power-of-a-power rule.' }
      ],
      rule: 'Multiply → add exponents. Divide → subtract. Power of a power → multiply.',
      trap: 'These rules never apply to addition. x³ + x⁴ does not simplify at all.',
      worked: {
        q: 'Simplify (2x³)².',
        steps: [
          'Everything inside the bracket is squared, including the coefficient.',
          'Square the coefficient: 2² = 4.',
          'Apply power-of-a-power to the variable: (x³)² means multiply the exponents, 3 × 2 = 6.',
          'Combine. Forgetting to square the 2 gives 2x⁶, which is offered as a trap.'
        ],
        answer: '4x⁶.'
      }
    },
    {
      title: 'Roots: when there are two answers and when there is one',
      accent: 'teal',
      lead: 'x² = 25 has two solutions. √x = 5 has one. The difference matters and is tested directly.',
      concepts: [
        { i: '2️⃣', t: 'Squaring undone', d: 'If x² = 25, then x = 5 or x = −5. Both square to 25.' },
        { i: '1️⃣', t: 'The root symbol', d: 'The √ symbol means the positive root only, so √x = 5 gives x = 25 alone.' },
        { i: '🔄', t: 'Undoing a root', d: 'Square both sides. √x = 7 becomes x = 49, not 14 or 3.5.' }
      ],
      examples: [
        { ok: true, t: 'x² = 36 → x = <span class="hl-ok">6 or −6</span>', note: 'Both roots, because squaring destroys the sign.' },
        { ok: false, t: 'x² = 36 → x = <span class="hl-no">6</span> only', note: 'Lost the negative solution.' }
      ],
      rule: 'Solving x² = k gives two answers. Evaluating √k gives one.',
      trap: 'Options include the single positive root, the doubled value, and the halved value — each reachable by one specific wrong operation.',
      worked: {
        q: 'If √x = 7, what is x?',
        steps: [
          'The root symbol is applied to x, so undo it by squaring both sides.',
          '(√x)² = x, and 7² = 49.',
          'So x = 49. Doubling would give 14 and halving would give 3.5 — both offered.',
          'Only one answer here, because the √ symbol denotes the positive root. Contrast x² = 49, which has two.'
        ],
        answer: 'x = 49.'
      }
    },
    {
      title: 'Graph transformations',
      accent: 'olive',
      lead: 'Changes inside the bracket move the graph horizontally and backwards. Changes outside move it vertically and forwards.',
      concepts: [
        { i: '↔️', t: 'Inside the bracket', d: 'Horizontal movement, opposite to the sign. f(x − 3) moves right.', f: 'f(x − 3) → 3 right' },
        { i: '↕️', t: 'Outside the function', d: 'Vertical movement, in the direction of the sign. f(x) + 2 moves up.', f: 'f(x) + 2 → 2 up' },
        { i: '🧠', t: 'Why it feels wrong', d: 'To get the same output, x must now be 3 larger — so every point shifts right.' }
      ],
      examples: [
        { ok: true, t: 'y = f(x − 3) → the graph moves <span class="hl-ok">3 units right</span>', note: 'Inside the bracket, so opposite to the sign.' },
        { ok: false, t: 'y = f(x − 3) → moves <span class="hl-no">3 units left</span>', note: 'Followed the sign as written.' }
      ],
      rule: 'Inside → horizontal → opposite. Outside → vertical → same direction.',
      trap: 'All four options — left, right, up, down — are always offered, so a half-remembered rule has a one-in-four chance.',
      tip: 'Test it with a point. If f(0) = 5, then for f(x − 3) you need x = 3 to get 5 out. The point moved from 0 to 3: right.',
      worked: {
        q: 'The graph of y = f(x) becomes y = f(x + 4). Describe the shift.',
        steps: [
          'The change is inside the bracket, so the movement is horizontal, not vertical.',
          'Inside changes go opposite to the sign, and the sign is plus.',
          'So the graph moves in the negative direction — to the left.',
          'Check with a point: if f(0) = 7, then f(x + 4) = 7 needs x = −4. The point moved left ✓'
        ],
        answer: '4 units to the left.'
      },
      desmos: {
        title: 'Which way does the graph move?',
        hint: 'The dashed olive curve is the original. Drag <code>p</code> — the change <em>inside</em> the bracket — and watch it move the opposite way to its sign. Then drag <code>q</code>, the change <em>outside</em>, which moves exactly the way you would expect.',
        bounds: { left: -10, right: 10, bottom: -7, top: 12 },
        expressions: [
          { id: 'p', latex: 'p=3', sliderBounds: { min: -6, max: 6, step: 0.5 } },
          { id: 'q', latex: 'q=0', sliderBounds: { min: -6, max: 6, step: 0.5 } },
          { id: 'orig', latex: 'y=x^2', color: '#9a9f17', lineStyle: 'DASHED' },
          { id: 'moved', latex: 'y=(x-p)^2+q', color: '#54c1e6' }
        ]
      }
    }
  ],
  check: {
    stem: 'Simplify x³ × x⁴.',
    options: ['x¹²', 'x⁷'], answer: 1,
    explain: 'Multiplying powers of the same base adds the exponents: 3 + 4 = 7.'
  }
},

/* ══ w10b · exam craft ═══════════════════════════════════════════ */
w10b: {
  hook: {
    icon: '🧰',
    title: 'Technique only pays once the content is there',
    text: 'By week 10 the content is in place, which is the only reason this lesson comes now rather than in week 1. Technique amplifies knowledge; it never replaces it. Three tools: work backwards from the answers, pick a number when the answers are expressions, and never — under any circumstances — leave a bubble empty.'
  },
  modules: [
    {
      title: 'Backsolving',
      accent: 'sky',
      lead: 'When the four options are numbers, one of them is the answer. Substitute and check instead of solving.',
      concepts: [
        { i: '🔢', t: 'When to use it', d: 'The options are plain numbers and the algebra looks messy.' },
        { i: '🎯', t: 'Start in the middle', d: 'Options are usually ordered. Starting at B or C tells you which way to go next.' },
        { i: '✅', t: 'Substitute properly', d: 'Put the number into the original equation and check both sides match.' }
      ],
      examples: [
        { ok: true, t: '3x − 7 = 14, try 7: 3(7) − 7 = <span class="hl-ok">14 ✓</span>', note: 'Substituted and verified.' },
        { ok: false, t: '3x − 7 = 14, “7 looks about right”', note: 'Backsolving means checking, not estimating.' }
      ],
      rule: 'Backsolving is substitution, not guessing. Always verify the arithmetic.',
      trap: 'Starting at option A wastes time when the answer is D. Start in the middle and use the result to choose a direction.',
      worked: {
        q: 'Which value of x satisfies 3x − 7 = 14?',
        steps: [
          'The options are numbers, so backsolving is available.',
          'Start with a middle option. Try x = 7: 3(7) = 21, then 21 − 7 = 14.',
          'That matches the right-hand side exactly, so it is correct.',
          'If it had come out too small, you would move to a larger option — the ordering tells you which way.'
        ],
        answer: 'x = 7.'
      }
    },
    {
      title: 'Picking numbers',
      accent: 'teal',
      lead: 'When the options are expressions rather than numbers, choose a value for the variable and turn the whole question into arithmetic.',
      concepts: [
        { i: '🎲', t: 'When to use it', d: 'The answers contain letters, or the question says “in terms of n”.' },
        { i: '🚫', t: 'Avoid 0 and 1', d: 'They make too many options come out the same, so they cannot separate them.' },
        { i: '🔁', t: 'Test twice', d: 'If two options survive your first number, try a second one.' }
      ],
      examples: [
        { ok: true, t: 'n even, which is always odd? Try n = 4 → <span class="hl-ok">n + 1 = 5</span> ✓, confirm with n = 10 → 11 ✓', note: 'Two values tested.' },
        { ok: false, t: 'Try n = 0 → 2n = 0, n + 2 = 2, n ÷ 2 = 0', note: 'Zero makes several options coincide and separates nothing.' }
      ],
      rule: 'Pick a small, awkward, convenient number — 4 or 5 works far better than 0, 1 or 10.',
      trap: 'Testing only one value. If two options both survive, you must test a second before choosing.',
      worked: {
        q: 'If n is an even integer, which expression is always odd?',
        steps: [
          'The options are expressions, so pick a value. Let n = 4.',
          'Test each: 2n = 8 (even), n ÷ 2 = 2 (even), n + 2 = 6 (even), n + 1 = 5 (odd).',
          'Only one came out odd — but confirm with a second value.',
          'Let n = 10: n + 1 = 11, still odd. Two confirmations is enough.'
        ],
        answer: 'n + 1, found without any algebra at all.'
      },
      desmos: {
        title: 'Backsolving, seen',
        hint: 'The blue line is <code>3x − 7</code> and the dashed line is <code>14</code>. Backsolving is just asking which x makes them meet. Substituting each option is the same as checking whether that x lands on the crossing point.',
        bounds: { left: -2, right: 12, bottom: -12, top: 26 },
        expressions: [
          { id: 'f', latex: 'y=3x-7', color: '#54c1e6' },
          { id: 'target', latex: 'y=14', color: '#fee801', lineStyle: 'DASHED' },
          { id: 'sol', latex: '(7,14)', color: '#39c4b6', showLabel: true, label: 'x = 7' }
        ]
      }
    },
    {
      title: 'Pacing, and the blank rule',
      accent: 'olive',
      lead: 'There is no penalty for a wrong answer on the SAT. That single fact settles how you should behave when time is short.',
      concepts: [
        { i: '⏱️', t: 'The 30-second rule', d: 'No route into a question after 30 seconds? Mark it, guess, move on, come back.' },
        { i: '🎯', t: 'Guess beats blank', d: 'A blank scores zero every time. A guess scores 25% of the time.' },
        { i: '🔁', t: 'Come back', d: 'Questions you skipped are often easy on a second pass with fresh eyes.' }
      ],
      examples: [
        { ok: true, t: 'Stuck at 30 seconds → mark, guess, move on → <span class="hl-ok">time preserved</span>', note: 'Two other questions got answered with the time saved.' },
        { ok: false, t: 'Stuck → keep pushing for four minutes → <span class="hl-no">three questions unreached</span>', note: 'One hard mark chased at the cost of three easier ones.' }
      ],
      rule: 'Every bubble gets filled. Always. There is nothing to lose by guessing.',
      trap: 'Sunk cost. Two minutes into a question it feels wasteful to abandon it — which is precisely when abandoning it is worth the most.',
      tip: 'Your original diagnostic had one blank in the maths section. That was 25% of a mark handed back for nothing.',
      worked: {
        q: 'Time is nearly up and you have no route into a question. What do you do?',
        steps: [
          'Check the scoring rule: the SAT applies no penalty for a wrong answer.',
          'So compare the options. A blank scores zero with certainty.',
          'A guess between four choices scores about a quarter of the time.',
          'One is strictly better than the other, so there is never a reason to leave a blank.'
        ],
        answer: 'Guess and move on. Never leave it empty.'
      }
    }
  ],
  check: {
    stem: 'Time is nearly up and you have no route into a question. Do what?',
    options: ['Leave it blank', 'Guess and move on'], answer: 1,
    explain: 'No penalty for a wrong answer, so a guess is strictly better than a blank.'
  }
}

};
