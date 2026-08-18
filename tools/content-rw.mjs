/* Reading & writing lesson content.
   Question style follows the digital SAT: short passage, one question,
   four options. Every explanation says why the wrong answers are wrong,
   because that is the transferable part.                              */

export const rw = {

/* ══ w01a · finding the subject ══════════════════════════════════ */
w01a: {
  stampSet: 'rw',
  forensics: {
    intro: 'You are not picking answers yet. For each wrong option, name the reason it is wrong. Naming the trap is the skill that transfers — picking the right answer is not.',
    watch: [
      'Cross out every prepositional phrase before you decide anything',
      'The subject is almost never inside "of …", "in …", "with …"',
      'A relative clause beginning "which" or "who" is describing, not the main action'
    ],
    items: [
      {
        passage: 'The <em>collection</em> of rare manuscripts donated by several retired professors ______ housed in the library\'s basement archive.',
        stem: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
        options: [
          { t: 'are', trap: 'contradicts', why: 'This matches "professors", which sits inside a phrase describing the collection. The subject is "collection" — singular.' },
          { t: 'is', correct: true },
          { t: 'were', trap: 'contradicts', why: 'Plural again, and it also shifts the sentence into the past for no reason the text gives.' },
          { t: 'have been', trap: 'contradicts', why: 'Plural. "Manuscripts" and "professors" are both decoys sitting between the subject and its verb.' }
        ],
        explain: 'Cross out "of rare manuscripts" and "by several retired professors" and the sentence reduces to "The collection ______ housed". Singular subject, singular verb: <strong>is</strong>.'
      },
      {
        passage: 'Marie Tharp, <em>whose</em> maps of the ocean floor helped confirm the theory of continental drift, ______ largely uncredited during her lifetime.',
        stem: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
        options: [
          { t: 'remaining', trap: 'unsupported', why: 'This leaves the sentence with no main verb at all. Everything between the commas is a description, so the sentence still needs its own action.' },
          { t: 'to remain', trap: 'unsupported', why: 'An infinitive cannot serve as the main verb here — the sentence would never finish.' },
          { t: 'remained', correct: true },
          { t: 'having remained', trap: 'unsupported', why: 'Another non-finite form. The relative clause has already used up "helped"; the main clause still needs a verb of its own.' }
        ],
        explain: 'The clause between the commas describes Marie Tharp. Remove it and you get "Marie Tharp ______ largely uncredited" — which needs a real main verb: <strong>remained</strong>.'
      },
      {
        passage: 'Neither of the two proposals submitted to the committee ______ the budget constraints the council had set out in March.',
        stem: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
        options: [
          { t: 'meet', trap: 'contradicts', why: '"Proposals" is inside "of the two proposals" — a prepositional phrase. The subject is "Neither", which is singular.' },
          { t: 'meets', correct: true },
          { t: 'have met', trap: 'contradicts', why: 'Plural, and drawn from the same decoy noun.' },
          { t: 'are meeting', trap: 'halfright', why: 'The tense is arguably defensible, but the number is not — "neither" takes a singular verb.' }
        ],
        explain: '"Neither", "either", "each" and "every" are singular, however plural the phrase after them looks. Cross out "of the two proposals" and the choice is obvious: <strong>meets</strong>.'
      }
    ]
  },
  speed: {
    seconds: 71,
    items: [
      { stem: 'The <em>results</em> of the experiment, which took three years to complete, ______ published last spring.', options: ['was', 'were', 'has been', 'is'], answer: 1, skill: 'Finding the subject', explain: 'Subject is "results" — plural. "Of the experiment" and the relative clause are both describing.' },
      { stem: 'A <em>box</em> of old photographs and letters ______ on the top shelf of the wardrobe.', options: ['sit', 'sits', 'are sitting', 'have sat'], answer: 1, skill: 'Prepositional phrases', explain: 'The subject is "box", not "photographs and letters" — those sit inside "of …".' },
      { stem: 'The scientist <em>who</em> discovered the enzyme ______ still working at the same laboratory.', options: ['are', 'were', 'is', 'have been'], answer: 2, skill: 'Relative clauses', explain: '"Who discovered the enzyme" describes the scientist. The main subject is singular: "The scientist … is".' },
      { stem: 'Each of the students ______ a different explanation for the result.', options: ['offer', 'offers', 'have offered', 'are offering'], answer: 1, skill: 'Finding the subject', explain: '"Each" is singular. "Of the students" is a prepositional phrase and cannot contain the subject.' },
      { stem: 'The <em>paintings</em> in the east wing of the gallery ______ restored last year.', options: ['was', 'is', 'has been', 'were'], answer: 3, skill: 'Prepositional phrases', explain: 'Two prepositional phrases in a row — "in the east wing", "of the gallery". Strip both: "The paintings … were restored".' },
      { stem: 'The <em>committee</em>, along with its three advisers, ______ agreed to postpone the vote.', options: ['have', 'has', 'were', 'are'], answer: 1, skill: 'Finding the subject', explain: '"Along with" does not create a compound subject the way "and" does. The subject is still "committee" — singular.' },
      { stem: 'Among the documents recovered from the wreck ______ a captain\'s logbook dating from 1802.', options: ['was', 'were', 'have been', 'are'], answer: 0, skill: 'Inverted sentences', explain: 'The sentence is inverted. The subject is "a captain\'s logbook", which follows the verb — singular.' },
      { stem: 'The <em>rise</em> in global temperatures recorded by these stations ______ consistent with the model\'s predictions.', options: ['are', 'is', 'were', 'have been'], answer: 1, skill: 'Prepositional phrases', explain: 'Subject is "rise". "In global temperatures" and "recorded by these stations" are both describing it.' }
    ]
  },
  sim: {
    seconds: 71,
    items: [
      { stem: 'The <em>archive</em> of letters written by the poet\'s contemporaries ______ rarely consulted by scholars.', options: ['are', 'is', 'were', 'have been'], answer: 1, skill: 'Finding the subject', explain: 'Subject: "archive". Singular.' },
      { stem: 'Neither of the proposed routes ______ through protected woodland.', options: ['pass', 'passes', 'have passed', 'are passing'], answer: 1, skill: 'Finding the subject', explain: '"Neither" is singular.' },
      { stem: 'The engineers <em>who</em> designed the bridge ______ awarded a national prize.', options: ['was', 'were', 'has been', 'is'], answer: 1, skill: 'Relative clauses', explain: 'Subject is "engineers" — plural. The relative clause only describes them.' },
      { stem: 'A <em>series</em> of unexpected delays ______ the launch by nearly a year.', options: ['have pushed back', 'push back', 'has pushed back', 'are pushing back'], answer: 2, skill: 'Prepositional phrases', explain: '"Series" is the subject and is singular; "of unexpected delays" describes it.' },
      { stem: 'Beneath the floorboards ______ a bundle of newspapers from the 1930s.', options: ['lie', 'were', 'lies', 'have lain'], answer: 2, skill: 'Inverted sentences', explain: 'Inverted. The subject is "a bundle" — singular.' }
    ],
    teachback: [
      'Pick any question above. Say out loud how you found the subject, step by step.',
      'What is the difference between "each of the students" and "the students"? Why does it matter?',
      'Name one question you got right where you were not actually sure. What made you pick it?'
    ]
  }
},

/* ══ w02a · subject-verb agreement ═══════════════════════════════ */
w02a: {
  stampSet: 'rw',
  forensics: {
    intro: 'Same discipline as last week, harder cases. Label why each wrong option fails before you decide which one survives.',
    watch: [
      'Collective nouns — team, committee, jury — are singular in American English',
      '"There is" / "there are" takes its number from what comes after it',
      'Two subjects joined by "and" are plural; joined by "or", the verb matches the nearer one'
    ],
    items: [
      {
        passage: 'The <em>jury</em>, after deliberating for nine hours across two days, ______ unable to reach a unanimous verdict.',
        stem: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
        options: [
          { t: 'were', trap: 'contradicts', why: 'In American English — which the SAT uses — a collective noun like "jury" is treated as singular.' },
          { t: 'was', correct: true },
          { t: 'have been', trap: 'contradicts', why: 'Plural. The long interrupting phrase is there to make you lose the subject.' },
          { t: 'are', trap: 'contradicts', why: 'Plural, and also shifts to the present with no support in the sentence.' }
        ],
        explain: 'Strip the interrupter: "The jury ______ unable". Collective noun, singular verb: <strong>was</strong>.'
      },
      {
        passage: 'There ______ several reasons why the original design was abandoned before construction began.',
        stem: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
        options: [
          { t: 'is', trap: 'contradicts', why: 'In a "there ___" sentence the verb matches whatever follows it. What follows is "several reasons" — plural.' },
          { t: 'was', trap: 'contradicts', why: 'Singular, and the tense would also need to match "was abandoned", which it can — but the number is still wrong.' },
          { t: 'are', correct: true },
          { t: 'has been', trap: 'contradicts', why: 'Singular again. "There" is never the subject; it is a placeholder.' }
        ],
        explain: '"There" is a placeholder, not a subject. The real subject is "several reasons", so the verb is plural: <strong>are</strong>.'
      },
      {
        passage: 'Either the manager or the two assistants ______ responsible for locking the building each evening.',
        stem: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
        options: [
          { t: 'is', trap: 'narrow', why: 'This matches "the manager", but with "either … or" the verb matches whichever subject is nearer — here, "assistants".' },
          { t: 'are', correct: true },
          { t: 'has been', trap: 'narrow', why: 'Singular, and drawn from the further subject rather than the nearer one.' },
          { t: 'was', trap: 'contradicts', why: 'Singular and past; neither is supported.' }
        ],
        explain: 'With "either … or" and "neither … nor", the verb agrees with the subject closest to it. "The two assistants" is nearer, so: <strong>are</strong>.'
      }
    ]
  },
  speed: {
    seconds: 71,
    items: [
      { stem: 'The team ______ practising every morning before the tournament.', options: ['are', 'is', 'were', 'have'], answer: 1, skill: 'Collective nouns', explain: '"Team" is singular in American English.' },
      { stem: 'There ______ a surprising number of errors in the final draft.', options: ['were', 'are', 'is', 'have been'], answer: 2, skill: 'There is / there are', explain: 'The subject is "number", which is singular. ("A number of things are" is plural; "the number is" singular.)' },
      { stem: 'Neither the director nor the producers ______ willing to comment.', options: ['was', 'is', 'were', 'has been'], answer: 2, skill: 'Either / neither', explain: 'The nearer subject is "producers" — plural.' },
      { stem: 'Mathematics ______ often described as the language of the sciences.', options: ['are', 'is', 'were', 'have been'], answer: 1, skill: 'Tricky singulars', explain: 'Subjects ending in -ics — mathematics, physics, economics — are singular.' },
      { stem: 'The committee and its chair ______ scheduled to meet on Thursday.', options: ['is', 'was', 'has been', 'are'], answer: 3, skill: 'Compound subjects', explain: 'Two subjects joined by "and" make a plural.' },
      { stem: 'Every one of the applicants ______ submitted the required documents.', options: ['have', 'has', 'were', 'are'], answer: 1, skill: 'Each / every', explain: '"Every one" is singular; "of the applicants" is a prepositional phrase.' },
      { stem: 'The data collected in the first round ______ inconsistent with the later findings.', options: ['was', 'is', 'were', 'has been'], answer: 2, skill: 'Tricky plurals', explain: 'In formal and scientific writing "data" is plural. The SAT follows that convention.' },
      { stem: 'Ten kilometres ______ a long way to walk in that heat.', options: ['are', 'is', 'were', 'have been'], answer: 1, skill: 'Tricky singulars', explain: 'A measurement treated as one single amount takes a singular verb.' }
    ]
  },
  sim: {
    seconds: 71,
    items: [
      { stem: 'The orchestra ______ rehearsing the new symphony all week.', options: ['are', 'have been', 'has been', 'were'], answer: 2, skill: 'Collective nouns', explain: '"Orchestra" is a collective noun and singular here.' },
      { stem: 'There ______ two explanations that fit the evidence equally well.', options: ['is', 'are', 'has been', 'was'], answer: 1, skill: 'There is / there are', explain: 'The subject is "two explanations" — plural.' },
      { stem: 'Neither the students nor the teacher ______ aware of the change.', options: ['were', 'are', 'was', 'have been'], answer: 2, skill: 'Either / neither', explain: 'The nearer subject is "the teacher" — singular.' },
      { stem: 'Economics ______ a required course for all first-year students.', options: ['are', 'is', 'were', 'have been'], answer: 1, skill: 'Tricky singulars', explain: 'A subject ending in -ics takes a singular verb.' },
      { stem: 'Each of the three routes ______ its own difficulties.', options: ['have', 'has', 'are having', 'were having'], answer: 1, skill: 'Each / every', explain: '"Each" is singular.' }
    ],
    teachback: [
      'Explain the difference between "the number of students is" and "a number of students are".',
      'Why does "either … or" behave differently from "and"?',
      'Name a question you got right by ear rather than by rule. What is the rule?'
    ]
  }
},

/* ══ w03a · sentence boundaries ══════════════════════════════════ */
w03a: {
  stampSet: 'rw',
  forensics: {
    intro: 'One rule underneath all of this: is each side of the punctuation a complete sentence? Label each wrong option with what it actually does.',
    watch: [
      'Two complete sentences may never be joined by a comma alone',
      '"However", "therefore" and "moreover" are not conjunctions — they cannot join two sentences with a comma',
      'A semicolon needs a complete sentence on both sides'
    ],
    items: [
      {
        passage: 'The storm damaged power lines across the region ______ thousands of homes were left without electricity for three days.',
        stem: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
        options: [
          { t: ', ', trap: 'contradicts', why: 'A comma splice. Both sides are complete sentences, and a comma alone cannot join them.' },
          { t: ', and ', correct: true },
          { t: ', however, ', trap: 'contradicts', why: '"However" is an adverb, not a conjunction — this is still a comma splice, and the logic is not contrastive anyway.' },
          { t: ' ', trap: 'contradicts', why: 'A run-on with no punctuation at all.' }
        ],
        explain: 'Both halves stand alone as sentences. The four legal joins are: a full stop, a semicolon, a comma plus a FANBOYS conjunction, or making one side dependent. <strong>", and"</strong> is the one offered here.'
      },
      {
        passage: 'Although the museum had promised to return the artefacts by the end of the year ______ negotiations stalled over the terms of transport.',
        stem: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
        options: [
          { t: ', ', correct: true },
          { t: '; ', trap: 'contradicts', why: 'A semicolon needs a complete sentence on both sides. "Although the museum had promised…" is dependent — it cannot stand alone.' },
          { t: '. ', trap: 'contradicts', why: 'This leaves the "Although" clause as a fragment.' },
          { t: ' and ', trap: 'contradicts', why: 'Joins a dependent clause to an independent one with a conjunction that expects two equals.' }
        ],
        explain: '"Although" makes the first half dependent. A dependent clause opening a sentence is followed by a plain comma: <strong>", "</strong>.'
      },
      {
        passage: 'The results were surprising ______ they contradicted three decades of accepted theory.',
        stem: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
        options: [
          { t: ', ', trap: 'contradicts', why: 'Comma splice — both sides are complete sentences.' },
          { t: '; ', correct: true },
          { t: ', moreover ', trap: 'contradicts', why: 'Still a splice, and "moreover" would need a semicolon before it and a comma after it.' },
          { t: ' which ', trap: 'halfright', why: '"Which" would need to refer to a noun, and here it would point vaguely at the whole first clause.' }
        ],
        explain: 'Two complete sentences, closely related. A semicolon is exactly the right join: <strong>"; "</strong>.'
      }
    ]
  },
  speed: {
    seconds: 71,
    items: [
      { stem: 'The bridge opened in 1937 ______ it remains one of the most photographed structures in the country.', options: [', ', '; ', ', however ', ' '], answer: 1, skill: 'Run-ons', explain: 'Two complete sentences — a semicolon joins them legally; a comma alone does not.' },
      { stem: 'Because the samples had been stored incorrectly ______ the team had to repeat the entire experiment.', options: ['; ', ', ', '. ', ' and '], answer: 1, skill: 'Dependent clauses', explain: '"Because…" is dependent, so a plain comma follows it.' },
      { stem: 'She studied architecture for five years ______ she never practised professionally.', options: [', but ', ', ', '; however ', ' therefore '], answer: 0, skill: 'Run-ons', explain: 'Comma plus a FANBOYS conjunction. The relationship is contrastive, so "but".' },
      { stem: 'The path was steep and uneven ______ making the final ascent slower than expected.', options: ['; ', '. ', ', ', ' and it was '], answer: 2, skill: 'Fragments', explain: '"Making the final ascent slower" is not a sentence, so it attaches with a comma.' },
      { stem: 'The design was rejected twice ______ therefore, the architect submitted a third version.', options: [', ', '; ', ' ', ', and'], answer: 1, skill: 'Conjunctive adverbs', explain: '"Therefore" is an adverb, not a conjunction: semicolon before, comma after.' },
      { stem: 'Which of the following is a complete sentence?', options: ['Running through the field behind the old barn.', 'The runner crossed the line.', 'Although she had trained for months.', 'Because the weather turned.'], answer: 1, skill: 'The clause test', explain: 'Only option B has a subject and a finite verb and can stand alone.' },
      { stem: 'The report was delayed ______ the committee had requested additional data.', options: [', ', '; ', ', because ', ' however '], answer: 2, skill: 'Dependent clauses', explain: '"Because" makes the second half dependent, which fixes the splice.' },
      { stem: 'Volcanic ash reached the upper atmosphere ______ temperatures across the hemisphere fell measurably that summer.', options: [', ', ' ', '; ', ', so'], answer: 3, skill: 'Run-ons', explain: 'Comma plus "so" — a FANBOYS conjunction expressing consequence. A bare comma or no punctuation both leave a run-on.' }
    ]
  },
  sim: {
    seconds: 71,
    items: [
      { stem: 'The library closed for renovation in March ______ it reopened the following January.', options: [', ', '; ', ' ', ', however '], answer: 1, skill: 'Run-ons', explain: 'Two complete sentences joined by a semicolon.' },
      { stem: 'While the engine was being rebuilt ______ the car sat untouched in the garage.', options: ['; ', '. ', ', ', ' and '], answer: 2, skill: 'Dependent clauses', explain: '"While…" is dependent; a comma follows it.' },
      { stem: 'The theory was elegant ______ it could not be tested with the equipment available.', options: [', ', ', but ', '; moreover ', ' '], answer: 1, skill: 'Run-ons', explain: 'Contrast between two complete sentences: comma plus "but".' },
      { stem: 'Which of the following is a fragment?', options: ['The rain stopped.', 'She waited.', 'Having waited for over an hour in the cold.', 'They left early.'], answer: 2, skill: 'Fragments', explain: '"Having waited…" has no finite main verb and cannot stand alone.' },
      { stem: 'The trial produced no clear result ______ nevertheless, the drug was approved for limited use.', options: [', ', '; ', ' ', ' and'], answer: 1, skill: 'Conjunctive adverbs', explain: '"Nevertheless" is an adverb: semicolon before it, comma after it.' }
    ],
    teachback: [
      'State the clause test in your own words, in one sentence.',
      'List the four legal ways to join two complete sentences.',
      'Why is "however" not the same as "but"?'
    ]
  }
},

/* ══ w05a · commas, dashes and colons ════════════════════════════ */
w05a: {
  stampSet: 'rw',
  forensics: {
    intro: 'Punctuation is decided by structure, never by where you would pause when speaking. For each wrong option, name what it actually breaks.',
    watch: [
      'A colon needs a complete sentence on its left',
      'Non-essential information takes a pair of marks — two commas, or two dashes, never one of each',
      'Never put a single comma between a subject and its verb'
    ],
    items: [
      {
        passage: 'The expedition carried only what was strictly necessary ______ rope, dried food, a compass and two spare tents.',
        stem: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
        options: [
          { t: ': ', correct: true },
          { t: '; ', trap: 'contradicts', why: 'A semicolon needs a complete sentence on both sides. The list that follows is not one.' },
          { t: ', ', trap: 'halfright', why: 'A comma is not wrong often enough to be safe here — with a formal list introduced by a complete sentence, the colon is the tested answer.' },
          { t: ' ', trap: 'contradicts', why: 'The list needs some mark introducing it.' }
        ],
        explain: '"The expedition carried only what was strictly necessary" is a complete sentence, and a list follows it. That is exactly what a <strong>colon</strong> is for.'
      },
      {
        passage: 'Ada Lovelace ______ whose notes on the analytical engine are now considered the first computer program ______ received little recognition in her own century.',
        stem: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
        options: [
          { t: ', … , ', correct: true },
          { t: ', … — ', trap: 'contradicts', why: 'You may use two commas or two dashes, but never one of each. The pair must match.' },
          { t: ' … , ', trap: 'narrow', why: 'Only one mark. Non-essential information needs enclosing on both sides.' },
          { t: ': … : ', trap: 'contradicts', why: 'Colons do not enclose. A colon introduces; it does not wrap.' }
        ],
        explain: 'The clause between the marks can be removed and the sentence still works, so it is non-essential — and it must be enclosed by a <strong>matching pair</strong>.'
      },
      {
        passage: 'The rock samples collected from the crater floor ______ turned out to be far older than anyone had predicted.',
        stem: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
        options: [
          { t: ', ', trap: 'contradicts', why: 'A single comma between the subject and its verb. This is one of the most consistently tested errors on the exam.' },
          { t: ' ', correct: true },
          { t: ': ', trap: 'contradicts', why: 'A colon here would cut the sentence between its subject and verb.' },
          { t: '; ', trap: 'contradicts', why: 'A semicolon needs complete sentences on both sides, and the left side has no verb yet.' }
        ],
        explain: 'The subject is "The rock samples collected from the crater floor" and the verb is "turned out". <strong>Nothing</strong> may separate them.'
      }
    ]
  },
  speed: {
    seconds: 71,
    items: [
      { stem: 'She had one ambition ______ to sail around the world alone.', options: [', ', ': ', '; ', ' '], answer: 1, skill: 'Colons', explain: 'A complete sentence on the left, an explanation on the right — colon.' },
      { stem: 'The novel ______ which took eleven years to write ______ was an immediate success.', options: [', … , ', ', … — ', ' … , ', '— … , '], answer: 0, skill: 'Non-essential pairs', explain: 'Matching pair of commas around removable information.' },
      { stem: 'The results of the second trial ______ were far more encouraging.', options: [', ', ': ', ' ', '; '], answer: 2, skill: 'Subject and verb', explain: 'Never separate a subject from its verb with a single comma.' },
      { stem: 'Three cities were shortlisted ______ Lisbon, Tallinn and Ljubljana.', options: [': ', ', ', '; ', ' and '], answer: 0, skill: 'Colons', explain: 'Complete sentence, then a list — colon.' },
      { stem: 'The path, narrow and badly lit ______ wound steeply upward.', options: [', ', ' ', ': ', '; '], answer: 0, skill: 'Non-essential pairs', explain: 'The description opened with a comma, so it must close with one.' },
      { stem: 'He packed his bag, locked the door ______ and walked to the station.', options: [', ', ' ', '; ', ': '], answer: 0, skill: 'Lists', explain: 'Items in a series are separated by commas, including before the final "and".' },
      { stem: 'The committee reached its decision quickly ______ the evidence left little room for doubt.', options: [', ', '; ', ' ', ', and'], answer: 1, skill: 'Semicolons', explain: 'Two complete, closely linked sentences.' },
      { stem: 'Only one thing stood in the way ______ money.', options: [', ', '; ', ': ', ' '], answer: 2, skill: 'Colons', explain: 'A colon can introduce a single word as well as a list, provided its left side is a complete sentence.' }
    ]
  },
  sim: {
    seconds: 71,
    items: [
      { stem: 'The team had a single objective ______ to finish before nightfall.', options: [', ', ': ', '; ', ' '], answer: 1, skill: 'Colons', explain: 'Complete sentence, then the explanation — colon.' },
      { stem: 'The manuscript ______ discovered in a Cairo storeroom ______ has never been fully translated.', options: [', … , ', '— … , ', ' … , ', ': … : '], answer: 0, skill: 'Non-essential pairs', explain: 'A matching pair encloses removable information.' },
      { stem: 'The students who had finished early ______ were allowed to leave.', options: [', ', ' ', ': ', '; '], answer: 1, skill: 'Subject and verb', explain: 'No mark between the subject and its verb.' },
      { stem: 'The weather turned suddenly ______ within an hour the road was impassable.', options: [', ', '; ', ' ', ', however '], answer: 1, skill: 'Semicolons', explain: 'Two complete sentences, closely related.' },
      { stem: 'She brought everything she needed ______ notebooks, pens and a folding chair.', options: [': ', ', ', '; ', ' '], answer: 0, skill: 'Colons', explain: 'A complete sentence introduces a list.' }
    ],
    teachback: [
      'What must always be true of the words to the left of a colon?',
      'Why can you not use a comma at one end of a phrase and a dash at the other?',
      'Give an example of a comma that would be wrong even though you would pause there when reading aloud.'
    ]
  }
},

/* ══ w06a · apostrophes and pronouns ═════════════════════════════ */
w06a: {
  stampSet: 'rw',
  forensics: {
    intro: 'Two topics that look easy and are tested constantly. Name the fault in each wrong option.',
    watch: [
      'An apostrophe shows possession or a contraction — never a plural',
      '"Its" is possessive; "it\'s" only ever means "it is" or "it has"',
      'A pronoun must point at exactly one possible noun'
    ],
    items: [
      {
        passage: 'The company revised ______ safety policy after the inspection.',
        stem: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
        options: [
          { t: 'it\'s', trap: 'contradicts', why: '"It\'s" expands to "it is" — "the company revised it is safety policy" is not a sentence.' },
          { t: 'its', correct: true },
          { t: 'its\'', trap: 'unsupported', why: 'This form does not exist in English at all.' },
          { t: 'their', trap: 'halfright', why: 'The meaning is recoverable, but "company" is singular, so a plural pronoun does not agree with it.' }
        ],
        explain: 'Possessive "its" never takes an apostrophe. Test it by expanding: if "it is" does not fit, you need <strong>its</strong>.'
      },
      {
        passage: 'When Priya met Elena, ______ had just returned from three months of fieldwork in Iceland.',
        stem: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
        options: [
          { t: 'she', trap: 'unsupported', why: 'Ambiguous — "she" could point at Priya or at Elena, and nothing in the sentence settles which.' },
          { t: 'they', trap: 'contradicts', why: 'Plural, and it implies both women returned, which the sentence does not say.' },
          { t: 'Elena', correct: true },
          { t: 'her', trap: 'contradicts', why: 'Wrong case — this is the subject of the clause, and it is still ambiguous.' }
        ],
        explain: 'With two possible antecedents of the same gender, a pronoun cannot do the job. Naming the person is the only unambiguous option: <strong>Elena</strong>.'
      },
      {
        passage: 'The two ______ reports contradicted each other on almost every point.',
        stem: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
        options: [
          { t: 'inspectors\'', correct: true },
          { t: 'inspector\'s', trap: 'contradicts', why: 'Singular possessive, but the sentence says "the two", so there is more than one inspector.' },
          { t: 'inspectors', trap: 'narrow', why: 'Plural, but with no possessive at all — the reports belong to the inspectors.' },
          { t: 'inspectors\'s', trap: 'unsupported', why: 'A regular plural already ending in -s takes only the apostrophe, never an extra -s.' }
        ],
        explain: 'Plural possessive: make the noun plural first ("inspectors"), then add the apostrophe after the s — <strong>inspectors\'</strong>.'
      }
    ]
  },
  speed: {
    seconds: 71,
    items: [
      { stem: 'The bird built ______ nest in the chimney.', options: ['it\'s', 'its', 'its\'', 'their'], answer: 1, skill: 'Its / it\'s', explain: 'Possessive "its" — no apostrophe.' },
      { stem: '______ been raining since Tuesday.', options: ['Its', 'Its\'', 'It\'s', 'It is\''], answer: 2, skill: 'Its / it\'s', explain: '"It has been raining" — a contraction, so "it\'s".' },
      { stem: 'The ______ changing rooms were refurbished last summer.', options: ['players', 'player\'s', 'players\'', 'players\'s'], answer: 2, skill: 'Plural possessive', explain: 'More than one player, so plural first, then apostrophe: "players\'".' },
      { stem: 'The report criticised the council and the developer, but ______ response was published.', options: ['their', 'its', 'no', 'neither\'s'], answer: 3, skill: 'Pronoun clarity', explain: '"Their" and "its" would both be ambiguous with two possible owners; "neither\'s" is unambiguous.' },
      { stem: 'Each of the machines has ______ own serial number.', options: ['their', 'its', 'it\'s', 'there'], answer: 1, skill: 'Pronoun agreement', explain: '"Each" is singular, so the pronoun is singular too.' },
      { stem: 'The ______ decision surprised everyone in the room.', options: ['committees', 'committee\'s', 'committees\'', 'committee\'s\''], answer: 1, skill: 'Singular possessive', explain: 'One committee owning one decision: "committee\'s".' },
      { stem: 'The scientists presented the findings to the reviewers before ______ were published.', options: ['they', 'these', 'the findings', 'it'], answer: 2, skill: 'Pronoun clarity', explain: '"They" could point at the scientists, the reviewers or the findings. Naming it removes the ambiguity.' },
      { stem: 'Neither of the applicants had submitted ______ portfolio on time.', options: ['their', 'his or her', 'there', 'they\'re'], answer: 1, skill: 'Pronoun agreement', explain: '"Neither" is singular, so the possessive must be singular in formal usage.' }
    ]
  },
  sim: {
    seconds: 71,
    items: [
      { stem: 'The museum extended ______ opening hours for the exhibition.', options: ['it\'s', 'its', 'their', 'its\''], answer: 1, skill: 'Its / it\'s', explain: 'Possessive "its".' },
      { stem: '______ too late to change the booking now.', options: ['Its', 'Its\'', 'It\'s', 'Their'], answer: 2, skill: 'Its / it\'s', explain: '"It is too late" — contraction.' },
      { stem: 'The ______ union voted to accept the offer.', options: ['workers', 'worker\'s', 'workers\'', 'workers\'s'], answer: 2, skill: 'Plural possessive', explain: 'Plural possessive: "workers\'".' },
      { stem: 'Every one of the volunteers brought ______ own equipment.', options: ['their', 'his or her', 'there', 'they\'re'], answer: 1, skill: 'Pronoun agreement', explain: '"Every one" is singular.' },
      { stem: 'The editor sent the draft back to the author because ______ contained several factual errors.', options: ['it', 'they', 'the draft', 'she'], answer: 2, skill: 'Pronoun clarity', explain: 'Naming the draft removes the ambiguity between draft, editor and author.' }
    ],
    teachback: [
      'How do you test whether a sentence needs "its" or "it\'s"?',
      'Where does the apostrophe go for one inspector, and where for several? Why?',
      'Explain why a pronoun with two possible antecedents is wrong even when you can work out the meaning.'
    ]
  }
},

/* ══ w07a · tenses and modifiers ═════════════════════════════════ */
w07a: {
  stampSet: 'rw',
  forensics: {
    intro: 'Tense is settled by evidence elsewhere in the passage, never by taste. A modifier must sit next to the thing it describes. Label each fault.',
    watch: [
      'Look for another verb or a time marker that fixes the timeline',
      'After an opening phrase, ask: who or what is doing this?',
      'The answer to that question must be the very next noun'
    ],
    items: [
      {
        passage: 'By the time the rescue team arrived, the climbers ______ already for eleven hours.',
        stem: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
        options: [
          { t: 'waited', trap: 'halfright', why: 'Simple past. It does not show that the waiting finished before the team arrived — which "by the time" requires.' },
          { t: 'had been waiting', correct: true },
          { t: 'have been waiting', trap: 'contradicts', why: 'Present perfect connects to now, but the whole sentence is set in the past.' },
          { t: 'are waiting', trap: 'contradicts', why: 'Present continuous, contradicting "arrived".' }
        ],
        explain: '"By the time … arrived" places one past event before another. The earlier one takes the past perfect: <strong>had been waiting</strong>.'
      },
      {
        passage: 'Walking through the abandoned station, ______',
        stem: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
        options: [
          { t: 'the peeling posters caught her eye.', trap: 'contradicts', why: 'This says the posters were walking through the station. The opening phrase must describe the next noun.' },
          { t: 'it was clear that decades had passed.', trap: 'contradicts', why: '"It" cannot walk. The phrase is left dangling with nothing to attach to.' },
          { t: 'she noticed the peeling posters.', correct: true },
          { t: 'there were peeling posters everywhere.', trap: 'contradicts', why: '"There" is a placeholder, not a walker.' }
        ],
        explain: 'Ask who is walking. The answer must be the noun immediately after the comma — <strong>she</strong>.'
      },
      {
        passage: 'The observatory, built in 1897, ______ continuously ever since.',
        stem: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
        options: [
          { t: 'operated', trap: 'halfright', why: 'Simple past closes the action off, but "ever since" runs up to the present.' },
          { t: 'has operated', correct: true },
          { t: 'was operating', trap: 'contradicts', why: 'Past continuous does not reach the present.' },
          { t: 'operates', trap: 'narrow', why: 'Simple present describes now but not the stretch of time "ever since" demands.' }
        ],
        explain: '"Ever since" runs from a past point to the present, which is exactly what the present perfect is for: <strong>has operated</strong>.'
      }
    ]
  },
  speed: {
    seconds: 71,
    items: [
      { stem: 'She ______ in Berlin for six years before she moved to Lisbon.', options: ['lives', 'has lived', 'had lived', 'is living'], answer: 2, skill: 'Past perfect', explain: 'Two past events; the earlier one takes the past perfect.' },
      { stem: 'Exhausted after the climb, ______', options: ['the tent was a welcome sight.', 'they set up camp immediately.', 'it began to rain.', 'there was little daylight left.'], answer: 1, skill: 'Dangling modifiers', explain: 'Who was exhausted? "They" — and it must be the next noun.' },
      { stem: 'The company ______ its headquarters three times since 2010.', options: ['moved', 'has moved', 'had moved', 'moves'], answer: 1, skill: 'Present perfect', explain: '"Since 2010" runs up to now — present perfect.' },
      { stem: 'Written in a single week, ______', options: ['critics praised the novel.', 'the novel nonetheless became a classic.', 'it was surprising.', 'there was little revision.'], answer: 1, skill: 'Dangling modifiers', explain: 'What was written in a week? The novel — so it must follow the comma.' },
      { stem: 'By 1920 the factory ______ more than two thousand workers.', options: ['employs', 'has employed', 'employed', 'will employ'], answer: 2, skill: 'Tense consistency', explain: 'A completed past period takes the simple past.' },
      { stem: 'Having finished the experiment, ______', options: ['the results were recorded.', 'the notebook was closed.', 'the team recorded the results.', 'it was late.'], answer: 2, skill: 'Dangling modifiers', explain: 'Who finished it? The team.' },
      { stem: 'The manuscript ______ in the archive since it was donated in 1954.', options: ['sat', 'has sat', 'had sat', 'sits'], answer: 1, skill: 'Present perfect', explain: '"Since 1954" up to now — present perfect.' },
      { stem: 'Buried under decades of silt, ______', options: ['archaeologists found the wreck.', 'the wreck went undetected for years.', 'it was hard to see.', 'there was no trace.'], answer: 1, skill: 'Dangling modifiers', explain: 'What was buried? The wreck, not the archaeologists.' }
    ]
  },
  sim: {
    seconds: 71,
    items: [
      { stem: 'He ______ the piece twice before the recital began.', options: ['rehearses', 'has rehearsed', 'had rehearsed', 'rehearse'], answer: 2, skill: 'Past perfect', explain: 'Earlier of two past events.' },
      { stem: 'Painted in 1642, ______', options: ['visitors admire the work daily.', 'the canvas has darkened considerably.', 'it is very famous.', 'there is much debate.'], answer: 1, skill: 'Dangling modifiers', explain: 'What was painted? The canvas.' },
      { stem: 'The glacier ______ by nearly a kilometre since records began.', options: ['retreated', 'has retreated', 'had retreated', 'retreats'], answer: 1, skill: 'Present perfect', explain: '"Since records began" reaches the present.' },
      { stem: 'Delayed by fog, ______', options: ['the schedule was disrupted.', 'passengers waited in the terminal.', 'the flight left four hours late.', 'it was frustrating.'], answer: 2, skill: 'Dangling modifiers', explain: 'What was delayed by fog? The flight.' },
      { stem: 'The treaty ______ in 1815, ending more than two decades of conflict.', options: ['is signed', 'has been signed', 'was signed', 'had been signed'], answer: 2, skill: 'Tense consistency', explain: 'A fixed date in the past takes the simple past.' }
    ],
    teachback: [
      'What in a sentence tells you that the past perfect is needed rather than the simple past?',
      'State the one question you ask after any opening descriptive phrase.',
      'Why does "ever since" force the present perfect?'
    ]
  }
},

/* ══ w09a · transitions ══════════════════════════════════════════ */
w09a: {
  stampSet: 'rw',
  forensics: {
    intro: 'Cover the choices. Read the two sentences. Say the relationship out loud first. Then label why each wrong option misreads it.',
    watch: [
      'Same direction, opposite, cause, example, or sequence — name it before you look',
      'Most wrong transitions describe a relationship that is not there',
      'A sophisticated-sounding word is not a correct word'
    ],
    items: [
      {
        passage: 'The new filtration system removed 98% of the contaminant in laboratory conditions. ______ , its performance in the field was substantially poorer.',
        stem: 'Which choice completes the text with the most logical transition?',
        options: [
          { t: 'Similarly', trap: 'contradicts', why: 'This claims the two results agree. They do not — one is good, the other poor.' },
          { t: 'However', correct: true },
          { t: 'Therefore', trap: 'contradicts', why: 'This claims the poor field performance was caused by the good lab result.' },
          { t: 'For example', trap: 'contradicts', why: 'The second sentence is a contrast, not an instance of the first.' }
        ],
        explain: 'Lab result good, field result poor — the relationship is opposition. <strong>However</strong>.'
      },
      {
        passage: 'Several species in the reserve depend entirely on a single flowering plant. ______ , the loss of that plant would trigger a cascade of local extinctions.',
        stem: 'Which choice completes the text with the most logical transition?',
        options: [
          { t: 'Nevertheless', trap: 'contradicts', why: 'Signals contrast, but the second sentence follows directly from the first.' },
          { t: 'Consequently', correct: true },
          { t: 'In contrast', trap: 'contradicts', why: 'There is no contrast — the second sentence is the result of the first.' },
          { t: 'Meanwhile', trap: 'unsupported', why: 'Signals simultaneous time, which is not the relationship here.' }
        ],
        explain: 'Total dependence causes cascading loss. That is consequence: <strong>Consequently</strong>.'
      },
      {
        passage: 'Many early mapmakers filled unknown regions with decorative illustrations. ______ , the 1502 Cantino chart shows elaborate sea creatures across the whole southern ocean.',
        stem: 'Which choice completes the text with the most logical transition?',
        options: [
          { t: 'Nonetheless', trap: 'contradicts', why: 'Signals contrast; the second sentence agrees with and illustrates the first.' },
          { t: 'For instance', correct: true },
          { t: 'As a result', trap: 'halfright', why: 'The chart is not caused by the general practice — it is an example of it.' },
          { t: 'Instead', trap: 'contradicts', why: 'Signals replacement, which is not happening.' }
        ],
        explain: 'A general claim followed by one specific case. That is exemplification: <strong>For instance</strong>.'
      }
    ]
  },
  speed: {
    seconds: 71,
    items: [
      { stem: 'The drug performed well in trials. ______ , it was withdrawn after unexpected side effects emerged.', options: ['Therefore', 'Similarly', 'However', 'For example'], answer: 2, skill: 'Contrast', explain: 'Good result, then withdrawal — opposition.' },
      { stem: 'The soil in the valley is unusually rich. ______ , farms there produce two harvests a year.', options: ['Nevertheless', 'Consequently', 'In contrast', 'Otherwise'], answer: 1, skill: 'Cause and effect', explain: 'Rich soil causes the double harvest.' },
      { stem: 'Several composers experimented with unusual instruments. ______ , Satie scored one piece for typewriter.', options: ['However', 'For instance', 'Therefore', 'Instead'], answer: 1, skill: 'Example', explain: 'A specific case illustrating the general claim.' },
      { stem: 'The first prototype failed within minutes. ______ , the second ran for a full week.', options: ['Likewise', 'By contrast', 'As a result', 'Furthermore'], answer: 1, skill: 'Contrast', explain: 'Two opposite outcomes set against each other.' },
      { stem: 'The city widened the road to ease congestion. ______ , traffic volumes rose and journey times stayed the same.', options: ['Accordingly', 'For example', 'Ironically', 'Moreover'], answer: 2, skill: 'Contrast', explain: 'The outcome was the opposite of the intention.' },
      { stem: 'The material is light and extremely strong. ______ , it is inexpensive to produce.', options: ['However', 'Moreover', 'Nevertheless', 'Instead'], answer: 1, skill: 'Addition', explain: 'A further point in the same direction.' },
      { stem: 'Rainfall declined steadily for a decade. ______ , the reservoir was never at risk, because demand fell just as fast.', options: ['Therefore', 'Nonetheless', 'Similarly', 'Consequently'], answer: 1, skill: 'Contrast', explain: 'The expected consequence did not follow — concession.' },
      { stem: 'The survey covered only urban households. ______ , its conclusions cannot be applied to rural areas.', options: ['For instance', 'Nevertheless', 'Therefore', 'Similarly'], answer: 2, skill: 'Cause and effect', explain: 'The limitation causes the restriction on conclusions.' }
    ]
  },
  sim: {
    seconds: 71,
    items: [
      { stem: 'The bridge was designed to last a century. ______ , it was demolished after forty years.', options: ['Consequently', 'However', 'Similarly', 'Moreover'], answer: 1, skill: 'Contrast', explain: 'Intention against outcome — opposition.' },
      { stem: 'The species has no natural predators on the island. ______ , its population has grown unchecked.', options: ['Nevertheless', 'In contrast', 'As a result', 'For example'], answer: 2, skill: 'Cause and effect', explain: 'No predators causes unchecked growth.' },
      { stem: 'Some minerals fluoresce under ultraviolet light. ______ , fluorite glows a deep violet.', options: ['However', 'For example', 'Therefore', 'Instead'], answer: 1, skill: 'Example', explain: 'One specific mineral illustrating the general claim.' },
      { stem: 'The recording is technically flawed. ______ , it remains the only surviving document of the performance.', options: ['Nonetheless', 'Consequently', 'Likewise', 'Furthermore'], answer: 0, skill: 'Contrast', explain: 'A flaw conceded, then value asserted despite it.' },
      { stem: 'The instrument measures temperature to within a thousandth of a degree. ______ , it can detect changes no earlier device could.', options: ['However', 'By contrast', 'Accordingly', 'Instead'], answer: 2, skill: 'Cause and effect', explain: 'The precision causes the new capability.' }
    ],
    teachback: [
      'Name the five relationships you check for before looking at the choices.',
      'Why is "however" wrong when the two sentences agree?',
      'Pick a question you got right. State the relationship in your own words before naming the transition.'
    ]
  }
},

/* ══ w10a · purpose and synthesis ════════════════════════════════ */
w10a: {
  stampSet: 'rw',
  forensics: {
    intro: 'On these questions the wrong answers are usually true. They just do not do the job the question asked for. Label each one with what it gets wrong.',
    watch: [
      'Read the goal in the final sentence of the prompt first',
      'A true statement that misses the goal is still wrong',
      'Underline the exact words of the goal before looking at the options'
    ],
    items: [
      {
        passage: 'While researching a presentation, a student has taken these notes:<br>• The Antikythera mechanism was recovered from a shipwreck in 1901.<br>• It dates from roughly 100 BCE.<br>• It contains at least 30 bronze gears.<br>• It was used to predict astronomical positions.<br><br><em>The student wants to emphasise the mechanism\'s complexity.</em>',
        stem: 'Which choice most effectively uses the notes to accomplish this goal?',
        options: [
          { t: 'The Antikythera mechanism was recovered from a shipwreck in 1901.', trap: 'unsupported', why: 'True, and from the notes — but it says nothing about complexity. It answers a different question.' },
          { t: 'Dating from roughly 100 BCE, the Antikythera mechanism contains at least 30 bronze gears.', correct: true },
          { t: 'The Antikythera mechanism dates from roughly 100 BCE.', trap: 'unsupported', why: 'Age, not complexity. The goal is stated explicitly and this misses it.' },
          { t: 'The Antikythera mechanism was used to predict astronomical positions.', trap: 'halfright', why: 'Closer — its function is impressive — but "30 bronze gears" is the detail that actually evidences complexity.' }
        ],
        explain: 'The goal is complexity. Only the gear count is direct evidence of that, so the option built around <strong>30 bronze gears</strong> does the job.'
      },
      {
        passage: 'A researcher writes: "Coral reefs occupy less than one per cent of the ocean floor. They support around a quarter of all marine species."',
        stem: 'What is the main rhetorical purpose of the second sentence?',
        options: [
          { t: 'To correct a misconception introduced in the first sentence.', trap: 'unsupported', why: 'Nothing in the first sentence is presented as mistaken.' },
          { t: 'To highlight a disproportion between the reefs\' size and their importance.', correct: true },
          { t: 'To explain why coral reefs occupy so little of the ocean floor.', trap: 'contradicts', why: 'It gives no cause for the small area — that is the opposite of what the sentence does.' },
          { t: 'To introduce a counterargument about marine biodiversity.', trap: 'unsupported', why: 'There is no argument being countered; the two facts work together.' }
        ],
        explain: 'A very small area, a very large share of species. The second sentence exists to set up that contrast: <strong>disproportion</strong>.'
      },
      {
        passage: 'Notes:<br>• Hedy Lamarr was a film actor in the 1930s and 1940s.<br>• She co-invented a frequency-hopping signal system in 1942.<br>• The system was intended to stop torpedo guidance being jammed.<br>• Related principles are used in modern Bluetooth and Wi-Fi.<br><br><em>The student wants to introduce Lamarr\'s invention to an audience unfamiliar with her.</em>',
        stem: 'Which choice most effectively uses the notes to accomplish this goal?',
        options: [
          { t: 'Related principles are used in modern Bluetooth and Wi-Fi.', trap: 'narrow', why: 'It never mentions Lamarr, so it cannot introduce her to someone who does not know who she is.' },
          { t: 'Hedy Lamarr, a film actor of the 1930s and 1940s, co-invented a frequency-hopping signal system in 1942.', correct: true },
          { t: 'The frequency-hopping system was intended to stop torpedo guidance being jammed.', trap: 'narrow', why: 'A detail about the invention with no introduction of the inventor.' },
          { t: 'Hedy Lamarr was a film actor in the 1930s and 1940s.', trap: 'narrow', why: 'It introduces her, but omits the invention the goal asks to introduce.' }
        ],
        explain: 'The goal needs both halves: who she was, and what she invented. Only one option carries <strong>both</strong>.'
      }
    ]
  },
  speed: {
    seconds: 71,
    items: [
      { passage: 'Notes:<br>• The Voyager 1 probe launched in 1977.<br>• It crossed into interstellar space in 2012.<br>• It carries a gold-plated record of sounds from Earth.<br><br><em>Goal: emphasise the probe\'s longevity.</em>', stem: 'Which choice best accomplishes the goal?', options: ['Voyager 1 carries a gold-plated record of sounds from Earth.', 'Launched in 1977, Voyager 1 crossed into interstellar space 35 years later, in 2012.', 'Voyager 1 crossed into interstellar space in 2012.', 'Voyager 1 launched in 1977.'], answer: 1, skill: 'Synthesis', explain: 'Longevity needs the span, which only the option pairing both dates provides.' },
      { passage: '"The technique was dismissed for decades. It is now standard in every major laboratory."', stem: 'What is the purpose of the second sentence?', options: ['To explain why the technique was dismissed.', 'To mark a reversal in the technique\'s reception.', 'To question the technique\'s reliability.', 'To introduce a competing method.'], answer: 1, skill: 'Purpose', explain: 'Dismissed, then standard — the sentence exists to register the reversal.' },
      { passage: 'Notes:<br>• Ada Blackjack was the sole survivor of a 1921 Arctic expedition.<br>• She had no prior survival training.<br>• She survived alone for two years.<br><br><em>Goal: stress how unlikely her survival was.</em>', stem: 'Which choice best accomplishes the goal?', options: ['Ada Blackjack took part in a 1921 Arctic expedition.', 'Ada Blackjack survived alone for two years.', 'With no prior survival training, Ada Blackjack survived alone in the Arctic for two years.', 'Ada Blackjack was the sole survivor of the expedition.'], answer: 2, skill: 'Synthesis', explain: 'Unlikelihood needs the lack of training set against the length of survival.' },
      { passage: '"Most volcanic islands erode within a few million years. The Hawaiian chain preserves a record stretching back over 80 million."', stem: 'What is the purpose of the second sentence?', options: ['To present an exception to the general pattern.', 'To explain how volcanic islands erode.', 'To question the accuracy of the first sentence.', 'To give an example of rapid erosion.'], answer: 0, skill: 'Purpose', explain: 'The general rule, then a case that departs from it.' },
      { passage: 'Notes:<br>• The library holds 40,000 manuscripts.<br>• Only 3,000 have been catalogued.<br><br><em>Goal: emphasise how much work remains.</em>', stem: 'Which choice best accomplishes the goal?', options: ['The library holds 40,000 manuscripts.', 'Of the library\'s 40,000 manuscripts, only 3,000 have been catalogued.', 'The library has catalogued 3,000 manuscripts.', 'Cataloguing manuscripts is slow work.'], answer: 1, skill: 'Synthesis', explain: 'The remaining work is visible only when both numbers appear together.' },
      { passage: '"Early photographs required exposures of several minutes. Sitters were often clamped into head braces to stay still."', stem: 'What is the purpose of the second sentence?', options: ['To contradict the first sentence.', 'To give a consequence of the long exposure times.', 'To introduce a new photographic technique.', 'To question whether the exposures were really that long.'], answer: 1, skill: 'Purpose', explain: 'The braces are a direct result of the exposure times.' },
      { passage: 'Notes:<br>• Mangroves cover a small fraction of tropical coastline.<br>• They store up to four times more carbon per hectare than rainforest.<br><br><em>Goal: argue for their protection on climate grounds.</em>', stem: 'Which choice best accomplishes the goal?', options: ['Mangroves grow along tropical coastlines.', 'Mangroves cover only a small fraction of tropical coastline.', 'Despite covering a small area, mangroves store up to four times more carbon per hectare than rainforest.', 'Rainforests store large amounts of carbon.'], answer: 2, skill: 'Synthesis', explain: 'The climate argument needs the carbon figure, and the contrast with area sharpens it.' },
      { passage: '"The map contained several deliberate errors. Cartographers used them to detect unauthorised copying."', stem: 'What is the purpose of the second sentence?', options: ['To criticise the mapmakers\' carelessness.', 'To explain the reason for the errors.', 'To contrast two mapping methods.', 'To question the map\'s accuracy.'], answer: 1, skill: 'Purpose', explain: 'It supplies the motive, turning apparent mistakes into a deliberate device.' }
    ]
  },
  sim: {
    seconds: 71,
    items: [
      { passage: 'Notes:<br>• The seed vault is built into Arctic permafrost.<br>• It holds over a million seed samples.<br>• It is designed to function without power.<br><br><em>Goal: emphasise the vault\'s resilience.</em>', stem: 'Which choice best accomplishes the goal?', options: ['The seed vault holds over a million seed samples.', 'Built into Arctic permafrost, the vault is designed to function even without power.', 'The seed vault is located in the Arctic.', 'Seed vaults preserve crop diversity.'], answer: 1, skill: 'Synthesis', explain: 'Resilience is carried by the permafrost siting plus the no-power design.' },
      { passage: '"The orchestra had rehearsed the piece for months. On the night, the lead violinist played from memory."', stem: 'What is the purpose of the second sentence?', options: ['To contradict the first sentence.', 'To show a result of the long preparation.', 'To criticise the violinist.', 'To introduce a different piece.'], answer: 1, skill: 'Purpose', explain: 'Playing from memory follows from months of rehearsal.' },
      { passage: 'Notes:<br>• The tunnel took 14 years to complete.<br>• Original estimates allowed 4 years.<br><br><em>Goal: emphasise the overrun.</em>', stem: 'Which choice best accomplishes the goal?', options: ['The tunnel took 14 years to complete.', 'The tunnel was originally estimated at 4 years.', 'Estimated at 4 years, the tunnel took 14 to complete.', 'Tunnelling is difficult work.'], answer: 2, skill: 'Synthesis', explain: 'An overrun is only visible when estimate and actual appear together.' },
      { passage: '"Few of the letters survive. Those that do are held in three separate national collections."', stem: 'What is the purpose of the second sentence?', options: ['To explain why so few survive.', 'To specify where the surviving letters are.', 'To question their authenticity.', 'To contrast two archives.'], answer: 1, skill: 'Purpose', explain: 'It locates the survivors introduced in the first sentence.' },
      { passage: 'Notes:<br>• The alloy was discovered by accident.<br>• It is now used in every commercial aircraft.<br><br><em>Goal: stress the gap between its origin and its importance.</em>', stem: 'Which choice best accomplishes the goal?', options: ['The alloy was discovered by accident.', 'The alloy is used in commercial aircraft.', 'Discovered by accident, the alloy is now used in every commercial aircraft.', 'Alloys are important in aviation.'], answer: 2, skill: 'Synthesis', explain: 'The gap needs both the accidental origin and the universal use.' }
    ],
    teachback: [
      'Where in a synthesis prompt is the goal always stated?',
      'Give an example of an answer that is completely true and still wrong.',
      'For one purpose question above, say what the sentence is doing rather than what it says.'
    ]
  }
}

};
