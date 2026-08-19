/* PRESENTATION content — the P that was missing.
   Every lesson now teaches its rule and walks one worked example
   before any drilling happens. In the run this is the briefing:
   no HP at risk, no timer, and one free shot to confirm it landed. */

export const present = {

w01a: {
  rule: 'Cross out the describing parts. Whatever noun is left is the subject — and the verb must match that noun.',
  steps: [
    'Cross out every phrase starting of, in, with, by, from, for',
    'Cross out any clause starting who, which or that',
    'The noun still standing is the subject',
    'Match the verb to it: singular subject, singular verb'
  ],
  worked: {
    text: 'The collection <s>of rare manuscripts</s> <s>donated by several professors</s> ______ housed in the basement.',
    lines: [
      '"of rare manuscripts" is a prepositional phrase — cross it out.',
      '"donated by several professors" describes the collection — cross it out too.',
      'What survives: "The collection ______ housed". That is singular.',
      'So the verb is <em>is</em>. Note that "manuscripts" and "professors" were both bait.'
    ]
  },
  check: {
    stem: 'The box <s>of old photographs</s> ______ on the shelf.',
    options: ['sit', 'sits'], answer: 1,
    explain: 'Subject is "box", not "photographs". Singular.'
  }
},

w02a: {
  rule: 'Some subjects look plural and are not. Each, every, neither and collective nouns all take a singular verb.',
  steps: [
    'Find the true subject first, as in week 1',
    'If it starts each, every, either or neither — singular, always',
    'If it is a group word (team, jury, committee) — singular',
    'In "there is/are", the verb matches whatever comes after it'
  ],
  worked: {
    text: 'The jury, <s>after deliberating for nine hours</s>, ______ unable to reach a verdict.',
    lines: [
      'Cross out the interrupting phrase between the commas.',
      'What survives: "The jury ______ unable".',
      '"Jury" is a group acting as one unit, so it is singular.',
      'The verb is <em>was</em>.'
    ]
  },
  check: {
    stem: 'Each of the students ______ a different answer.',
    options: ['give', 'gives'], answer: 1,
    explain: '"Each" is singular, however plural "students" looks.'
  }
},

w03a: {
  rule: 'Two complete sentences can never be joined by a comma alone. There are exactly four legal joins.',
  steps: [
    'Test each side: does it have a subject and a verb, and could it stand alone?',
    'If both sides are complete, you may use: a full stop, a semicolon, or a comma plus and/but/or/so/for/nor/yet',
    'Or make one side dependent with because, although, while, since',
    'However, therefore and moreover are NOT conjunctions — they cannot do this job'
  ],
  worked: {
    text: 'The storm damaged power lines ______ thousands of homes lost electricity.',
    lines: [
      'Left side: "The storm damaged power lines" — complete.',
      'Right side: "thousands of homes lost electricity" — also complete.',
      'Two complete sentences, so a comma alone would be a splice.',
      'Legal fixes: a semicolon, or <em>, and</em>. Not a bare comma, and not ", however".'
    ]
  },
  check: {
    stem: 'The bridge opened in 1937 ______ it is still in use.',
    options: [', ', '; '], answer: 1,
    explain: 'Both sides stand alone, so a semicolon is legal and a bare comma is not.'
  }
},

w05a: {
  rule: 'Punctuation is decided by what sits on each side of the mark — never by where you would pause.',
  steps: [
    'A colon needs a complete sentence on its LEFT',
    'Non-essential information takes a matching pair — two commas or two dashes, never one of each',
    'Never put a single comma between a subject and its verb',
    'A semicolon needs a complete sentence on BOTH sides'
  ],
  worked: {
    text: 'The expedition carried only what was necessary ______ rope, food and a compass.',
    lines: [
      'Look left: "The expedition carried only what was necessary" — a complete sentence.',
      'Look right: a list, not a sentence.',
      'Complete sentence, then a list, is exactly what a colon is for.',
      'So the answer is <em>:</em> — a semicolon would be wrong because the right side cannot stand alone.'
    ]
  },
  check: {
    stem: 'She had one ambition ______ to sail around the world.',
    options: [', ', ': '], answer: 1,
    explain: 'Complete sentence on the left, explanation on the right.'
  }
},

w06a: {
  rule: 'An apostrophe means possession or a contraction. It never makes a plural. And a pronoun must point at exactly one noun.',
  steps: [
    'Test its/it\'s by expanding: if "it is" fits, use it\'s',
    'For plural possessives, make the noun plural FIRST, then add the apostrophe',
    'For any pronoun, ask: how many nouns could this point at?',
    'If the answer is more than one, the sentence is wrong — even if you can guess the meaning'
  ],
  worked: {
    text: 'The two inspectors\' reports contradicted each other.',
    lines: [
      'More than one inspector, so start with the plural: "inspectors".',
      'The reports belong to them, so it needs a possessive.',
      'A plural already ending in -s takes only the apostrophe: <em>inspectors\'</em>.',
      'Never "inspectors\'s", and never "inspector\'s" when there is more than one.'
    ]
  },
  check: {
    stem: 'The company revised ______ safety policy.',
    options: ['it\'s', 'its'], answer: 1,
    explain: '"It is safety policy" makes no sense, so it is the possessive "its".'
  }
},

w07a: {
  rule: 'Tense is settled by evidence elsewhere in the passage. A describing phrase must sit next to the thing it describes.',
  steps: [
    'For tense: find another verb or a time marker that fixes the timeline',
    'Two past events? The earlier one takes had + past participle',
    '"Since" or "ever since" reaching now? Present perfect',
    'After an opening phrase, ask WHO is doing it — the answer must be the very next noun'
  ],
  worked: {
    text: 'Walking through the abandoned station, ______',
    lines: [
      'Ask the question: who is walking?',
      'A person is walking — not a poster, not "it", not "there".',
      'So the noun immediately after the comma must be that person.',
      '"…, <em>she</em> noticed the peeling posters." Anything else leaves the phrase dangling.'
    ]
  },
  check: {
    stem: 'Exhausted after the climb, ______',
    options: ['the tent was welcome.', 'they set up camp.'], answer: 1,
    explain: 'Who was exhausted? They were — so "they" must come next.'
  }
},

w09a: {
  rule: 'Name the relationship between the two sentences BEFORE you look at a single answer choice.',
  steps: [
    'Cover the choices completely',
    'Read both sentences and say the link out loud',
    'It will be one of five: same direction, opposite, cause, example, or sequence',
    'Only then uncover, and pick the word that matches what you already said'
  ],
  worked: {
    text: 'The filtration system removed 98% in the lab. ______ , its field performance was far poorer.',
    lines: [
      'First sentence: the result was excellent.',
      'Second sentence: the result was poor.',
      'Good then poor — the relationship is opposite.',
      'So the transition is <em>However</em>. "Therefore" would claim the good result caused the bad one.'
    ]
  },
  check: {
    stem: 'The soil is very rich. ______ , farms there get two harvests a year.',
    options: ['However', 'Consequently'], answer: 1,
    explain: 'Rich soil causes the double harvest — that is cause, not contrast.'
  }
},

w10a: {
  rule: 'On these questions most wrong answers are completely true. They just fail to do the job the prompt asked for.',
  steps: [
    'Find the goal — it is always in the final sentence of the prompt',
    'Underline the exact words of that goal',
    'Ask of each option: does this do THAT specific job?',
    'Being true is not enough; it has to serve the stated goal'
  ],
  worked: {
    text: 'Notes about the Antikythera mechanism. Goal: emphasise its COMPLEXITY.',
    lines: [
      'The goal word is "complexity" — underline it.',
      '"Recovered from a shipwreck in 1901" is true, but that is history, not complexity.',
      '"Dates from roughly 100 BCE" is true, but that is age, not complexity.',
      '"Contains at least 30 bronze gears" is the only detail that evidences <em>complexity</em>.'
    ]
  },
  check: {
    stem: 'Goal: stress how unlikely her survival was. Which does that job?',
    options: ['She took part in a 1921 expedition.', 'With no training, she survived alone for two years.'], answer: 1,
    explain: 'Unlikelihood needs the lack of training set against the length of survival.'
  }
},

w01b: {
  rule: 'Solve the equation, then read the question again. It often asks for something other than x.',
  steps: [
    'Underline exactly what the question asks for before you start',
    'Undo operations in reverse order to isolate x',
    'Check what was underlined — is it x, or 2x, or x + 1?',
    'For a line, slope is the rate of change and the constant is the starting amount'
  ],
  worked: {
    text: 'If 5x − 3 = 12, what is the value of 10x?',
    lines: [
      'Underline the ask: <em>10x</em>, not x.',
      'Add 3 to both sides: 5x = 15.',
      'Divide by 5: x = 3. This is where most people stop and lose the mark.',
      'The ask was 10x, so the answer is <em>30</em>.'
    ]
  },
  check: {
    stem: 'If 2x = 8, what is 4x?', options: ['4', '16'], answer: 1,
    explain: 'x = 4, but the question asked for 4x, which is 16.'
  }
},

w02b: {
  rule: 'Translate the sentence into an equation one clause at a time, then check the direction with a real number.',
  steps: [
    '"Twice as many A as B" means A = 2B — the bigger group gets the multiplier',
    'Test the direction with easy numbers before solving',
    '"At least" is ≥ and "at most" is ≤; "more than" is > and excludes the value',
    'After solving, check which variable was actually asked for'
  ],
  worked: {
    text: 'Three times as many chose biology as chemistry. If c is chemistry, what is biology?',
    lines: [
      'Biology is the larger group — it is three times the other.',
      'Candidate answer: b = 3c.',
      'Test it: if c = 4 then b = 12. Is 12 three times as many as 4? Yes.',
      'So <em>3c</em> is right. Writing c ÷ 3 would make biology the smaller group.'
    ]
  },
  check: {
    stem: 'Four times as many chairs as tables. If t is tables, chairs = ?',
    options: ['t ÷ 4', '4t'], answer: 1,
    explain: 'Chairs are the larger quantity, so they take the multiplier.'
  }
},

w03b: {
  rule: 'Percentage change is always measured against the ORIGINAL amount — and decide whether you want the change or the new total.',
  steps: [
    'Identify the original amount; that is the denominator',
    'Work out the change itself',
    'Divide the change by the original, not by the new value',
    'Re-read: does the question want the change, or the value after the change?'
  ],
  worked: {
    text: 'A price rises from $80 to $100. What is the percentage increase?',
    lines: [
      'Original = 80. That is what everything is measured against.',
      'Change = 100 − 80 = 20.',
      'Divide by the ORIGINAL: 20 ÷ 80 = 0.25.',
      'So the increase is <em>25%</em>. Dividing by 100 instead gives 20%, which is the classic trap.'
    ]
  },
  check: {
    stem: 'A price falls from $50 to $40. Percentage decrease?',
    options: ['20%', '25%'], answer: 0,
    explain: 'Change is 10, original is 50: 10 ÷ 50 = 20%.'
  }
},

w05b: {
  rule: 'Read the chart before you read the question: title, axes, units. Then find what the question restricts you to.',
  steps: [
    'Read the title and both axis labels first',
    'Check whether the axis starts at zero — if not, differences look bigger than they are',
    'In a two-way table, the words "of the …" tell you the denominator',
    'For a median, order the list before taking the middle'
  ],
  worked: {
    text: 'Of the Year 11 students, how many walk? (Year 11 row: bus 25, walk 15, total 40)',
    lines: [
      'The phrase "of the Year 11 students" fixes the group.',
      'So the denominator is that row\'s total: 40 — not the grand total of 80.',
      'The number who walk in that row is 15.',
      'The answer is <em>15 out of 40</em>. Using 80 or 37 means you read the wrong total.'
    ]
  },
  check: {
    stem: 'Values 12, 4, 9. What is the median?',
    options: ['12', '9'], answer: 1,
    explain: 'Order them first: 4, 9, 12. The middle is 9.'
  }
},

w06b: {
  rule: 'Geometry runs on a short list of exact facts. Know them cold and never assume what the picture merely looks like.',
  steps: [
    'Angles on a straight line total 180°; around a point, 360°; in a triangle, 180°',
    'Pythagoras: square the two legs, add, then square-root',
    'The formula sheet is provided in the real exam — use it',
    'Never assume a right angle or equal sides from the drawing alone'
  ],
  worked: {
    text: 'A right-angled triangle has legs 6 and 8. Find the hypotenuse.',
    lines: [
      'Square each leg: 6² = 36 and 8² = 64.',
      'Add them: 36 + 64 = 100.',
      'That gives the SQUARE of the hypotenuse, not the hypotenuse itself.',
      'Square-root it: <em>10</em>. Stopping at 100 is the most common miss here.'
    ]
  },
  check: {
    stem: 'Legs 3 and 4. Hypotenuse?', options: ['7', '5'], answer: 1,
    explain: '9 + 16 = 25, and √25 = 5. Adding the legs gives 7, which is wrong.'
  }
},

w07b: {
  rule: 'f(x) is an instruction: put this number wherever x appears. And a quadratic usually has two solutions.',
  steps: [
    'f(3) means substitute 3 for every x — it is not multiplication',
    'To factorise, find two numbers that multiply to the last term and add to the middle one',
    'Set each bracket to zero to get the roots',
    'In y = (x − h)² + k the vertex is (h, k) — the sign inside the bracket flips'
  ],
  worked: {
    text: 'Solve x² − 5x + 6 = 0.',
    lines: [
      'Find two numbers multiplying to +6 and adding to −5: that is −2 and −3.',
      'So it factorises to (x − 2)(x − 3) = 0.',
      'Set each bracket to zero in turn: x − 2 = 0 and x − 3 = 0.',
      'The solutions are <em>x = 2 and x = 3</em>. Giving only one of them loses the mark.'
    ]
  },
  check: {
    stem: 'If f(x) = 2x + 1, what is f(3)?', options: ['6x + 3', '7'], answer: 1,
    explain: 'Substitute 3 for x: 2(3) + 1 = 7.'
  }
},

w09b: {
  rule: 'Exponent rules apply to multiplication and division, never to addition. Graph shifts inside the bracket go the opposite way to the sign.',
  steps: [
    'Multiplying powers of the same base: ADD the exponents',
    'Dividing: subtract. A power of a power: multiply',
    'A change inside f( ) moves the graph horizontally, opposite to the sign',
    'A change outside f( ) moves it vertically, in the direction of the sign'
  ],
  worked: {
    text: 'The graph of y = f(x) becomes y = f(x − 3). Describe the shift.',
    lines: [
      'The change is INSIDE the bracket, so the movement is horizontal.',
      'Inside changes always move the graph opposite to the sign.',
      'The sign is minus, so the graph moves in the positive direction.',
      'It shifts <em>3 units right</em>. This one feels backwards, which is exactly why it is tested.'
    ]
  },
  check: {
    stem: 'Simplify x³ × x⁴.', options: ['x¹²', 'x⁷'], answer: 1,
    explain: 'Multiplying powers of the same base adds the exponents: 3 + 4 = 7.'
  }
},

w10b: {
  rule: 'Recognise the question type before solving. If the answers are numbers, work backwards; if they are expressions, pick a value.',
  steps: [
    'Numbers as answers? Substitute one in and check — start from the middle',
    'Expressions as answers? Choose an easy value and test every option',
    'Avoid 0 and 1 as test values — they make too many options look correct',
    'No route after 30 seconds? Mark it, guess, move on. Never leave a blank'
  ],
  worked: {
    text: 'If n is an even integer, which expression is always odd?',
    lines: [
      'The answers are expressions, so pick a value: let n = 4.',
      'Test each: 2n = 8 (even), n ÷ 2 = 2 (even), n + 2 = 6 (even), n + 1 = 5 (odd).',
      'Confirm with a second value, n = 10: n + 1 = 11, still odd.',
      'So <em>n + 1</em> is the answer — found without any algebra at all.'
    ]
  },
  check: {
    stem: 'Time is nearly up and you have no route into a question. Do what?',
    options: ['Leave it blank', 'Guess and move on'], answer: 1,
    explain: 'There is no penalty for a wrong answer, so a guess is strictly better than a blank.'
  }
}

};
