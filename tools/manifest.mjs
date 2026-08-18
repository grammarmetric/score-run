/* Session manifest for Score run.
   One entry per class. `type:'lesson'` gets an interactive page driven by
   /banks/<id>.js; `type:'proctor'` gets a timed exam-conditions page.
   Page numbers are PDF page numbers, offsets already applied:
     College Panda  PDF = book + 1
     Kaplan 1600    PDF = book + 8                                        */

export const CP = 'College Panda SAT Writing';
export const KP = 'Kaplan Advanced Prep for 1600';
export const DRIVE = 'G:\\My Drive\\Classroom\\SAT\\';

export const sessions = [
  /* ── week 1 ────────────────────────────────────────────── */
  {
    id: 'w01a', week: 1, session: 'A', lead: 'cyan', type: 'lesson',
    domain: 'Reading & writing',
    title: 'Finding the subject',
    sub: 'Before any grammar rule can be applied, you have to know what the sentence is actually about. This is the skill everything in weeks 2 and 3 is built on.',
    goal: 'Strip a sentence back to its subject and verb by crossing out the parts that are only describing. Establish the error log and the confidence habit.',
    materials: [
      CP + ' — ch 3 relative clauses, PDF p. 11–12',
      CP + ' — ch 4 prepositional phrases, PDF p. 13–14',
      CP + ' — ch 2 test breakdown, PDF p. 9–10 (skim together, 5 min)'
    ],
    run: [
      ['0:00', 'Diagnostic debrief', 'Walk through the 710 honestly. The key number: 17 right out of 54 in reading and writing, when guessing alone scores about 13. Frame the next 12 weeks as a rebuild, not polish. Do not soften it — they already know.'],
      ['0:15', 'Exam orientation', 'Two modules each section, adaptive, 54 reading and writing questions and 44 maths. No penalty for a wrong answer — establish the never-leave-a-blank rule today, because there was a blank on the diagnostic.'],
      ['0:25', 'Trap forensics', 'Phase 1 of the lesson page. Do the first item together on the screen, then let them drive. The stamps matter more than the answers.'],
      ['0:55', 'Break', 'Ten minutes, properly away from the screen.'],
      ['1:05', 'Speed lab', 'Phase 2. First exposure to the confidence wager — explain it once, then say nothing more about it.'],
      ['1:35', 'Simulation', 'Phase 3. Six questions under time.'],
      ['1:50', 'Error log and homework', 'Open the notebook. Every miss written as: what I thought / what was true / the rule. Set the homework.']
    ],
    watch: [
      'Whether they can point at the subject of a sentence at all. If they cannot, spend the whole of block A here and push relative clauses to week 2 — nothing later works without this.',
      'Reading the question before the passage. If they read the passage first, stop them.',
      'Whether "I am sure" gets picked at all. A student who never wagers is protecting themselves; a student who always wagers is not reading the question.'
    ],
    errors: [
      'Treating the noun nearest the verb as the subject — the exact trap prepositional phrases are built to set.',
      'Assuming a longer answer is a better answer.',
      'Reading only until the first plausible option, then stopping.'
    ],
    homework: [
      CP + ' ch 3 and ch 4 exercises, marked against PDF p. 213',
      'One reading passage from ' + KP + ' ch 2, PDF p. 13 onward — annotated, not just answered',
      'Start the vocabulary log: every unfamiliar word, in the sentence it appeared in'
    ]
  },
  {
    id: 'w01b', week: 1, session: 'B', lead: 'orange', type: 'lesson',
    domain: 'Mathematics',
    title: 'Linear equations, and what slope means',
    sub: 'Algebra is the one real strength on the diagnostic — 52%. This session is about converting it, and about finding out exactly which 48% is failing.',
    goal: 'Solve linear equations reliably, and read slope and intercept as meaning rather than as letters in a formula.',
    materials: [KP + ' — ch 11 heart of algebra, PDF p. 247–260'],
    run: [
      ['0:00', 'Retrieval warm-up', 'Five quick equations, no calculator. Purely to see the working, not the answers.'],
      ['0:15', 'Trap forensics', 'Phase 1. Maths traps are different from reading traps: the wrong answers here are the answer to a slightly different question.'],
      ['0:45', 'Slope as meaning', 'Take one linear model and ask what the slope means in the sentence, in words, with units. Repeat until it is automatic. This is what makes the word problems in week 3 possible.'],
      ['0:55', 'Break', 'Ten minutes.'],
      ['1:05', 'Speed lab', 'Phase 2. 95 seconds a question — real maths pace.'],
      ['1:35', 'Simulation', 'Phase 3.'],
      ['1:50', 'Error log and homework', 'Separate maths page in the log. Classify each miss: method, setup, or arithmetic. The distinction matters.']
    ],
    watch: [
      'Which of the three failure types dominates. Method failures need reteaching; setup failures are a reading problem; arithmetic slips are a pace problem. All three look identical on a score report.',
      'Whether they reach for the calculator on questions that do not need one.'
    ],
    errors: [
      'Sign errors when moving a term across the equals sign.',
      'Solving for x when the question asked for 3x — the single most common avoidable maths error on this exam.',
      'Reading a graph\'s intercept as the slope.'
    ],
    homework: [KP + ' ch 11 drill set, PDF p. 247–260', 'Redo every question missed in today\'s speed lab, from scratch, without looking at the working']
  },

  /* ── week 2 ────────────────────────────────────────────── */
  {
    id: 'w02a', week: 2, session: 'A', lead: 'cyan', type: 'lesson',
    domain: 'Reading & writing',
    title: 'Making the verb match',
    sub: 'Subject-verb agreement is the direct payoff of last week. It is also the densest chapter in the book, and worth the whole session.',
    goal: 'Find the true subject through interrupting phrases, and match the verb to it every time.',
    materials: [
      CP + ' — ch 6 subject-verb agreement, PDF p. 19–27',
      CP + ' — ch 24 singular/plural nouns, PDF p. 175–176'
    ],
    run: [
      ['0:00', 'Retrieval warm-up', 'Ten sentences from last week — cross out the modifiers, circle the subject. Nothing new.'],
      ['0:15', 'Trap forensics', 'Phase 1. Every item here hides the subject behind something.'],
      ['0:45', 'The hard cases', 'Each/every/neither, collective nouns, "there is/there are", and subjects joined by "along with" rather than "and". Twenty minutes, worked on the board.'],
      ['0:55', 'Break', 'Ten minutes.'],
      ['1:05', 'Speed lab', 'Phase 2.'],
      ['1:35', 'Simulation', 'Phase 3.'],
      ['1:50', 'Error log and homework', '']
    ],
    watch: [
      'Whether they are matching the verb by ear rather than by rule. Ear is what got 20% on the diagnostic.',
      'Inverted sentences — "there are", "here comes" — where the subject follows the verb.'
    ],
    errors: [
      'Matching the verb to the noun in the prepositional phrase.',
      'Treating "each of the students" as plural.',
      'Losing agreement across a long relative clause.'
    ],
    homework: [CP + ' ch 6 exercises, PDF p. 19–27', 'One reading passage, annotated', 'Vocabulary log']
  },
  {
    id: 'w02b', week: 2, session: 'B', lead: 'orange', type: 'lesson',
    domain: 'Mathematics',
    title: 'Turning words into equations',
    sub: 'Systems and inequalities, but the real target is translation — the point where the reading weakness starts costing maths marks.',
    goal: 'Convert a worded situation into an equation or inequality without losing a condition.',
    materials: [KP + ' — ch 11 heart of algebra, PDF p. 260–272'],
    run: [
      ['0:00', 'Retrieval warm-up', 'Five slope-meaning questions from last session.'],
      ['0:15', 'Translation drill', 'Sentences to equations, one line at a time, no solving. "At least" versus "more than". "Twice as many A as B" — which way round. Fifteen minutes of nothing but setup.'],
      ['0:30', 'Trap forensics', 'Phase 1.'],
      ['0:55', 'Break', 'Ten minutes.'],
      ['1:05', 'Speed lab', 'Phase 2.'],
      ['1:35', 'Simulation', 'Phase 3.'],
      ['1:50', 'Error log and homework', '']
    ],
    watch: [
      'The "twice as many" reversal. If it appears twice, stop and drill it in isolation — it will otherwise recur every week to week 12.',
      'Whether they read the final sentence of the question before setting up.'
    ],
    errors: [
      'Reversing the ratio in a translation.',
      'Using > when the wording says "at least".',
      'Solving the system correctly and then answering for the wrong variable.'
    ],
    homework: [KP + ' ch 11 remaining drills, PDF p. 260–272', 'Rewrite three missed questions as a plain-English sentence first, then as an equation']
  },

  /* ── week 3 ────────────────────────────────────────────── */
  {
    id: 'w03a', week: 3, session: 'A', lead: 'cyan', type: 'lesson',
    domain: 'Reading & writing',
    title: 'Where one sentence ends',
    sub: 'The highest-yield grammar topic on the exam. Knowing where a sentence stops decides a large share of every conventions set.',
    goal: 'Test any string of words for whether it is a complete sentence, and join two of them legally.',
    materials: [
      CP + ' — ch 8 run-ons, PDF p. 35–45',
      CP + ' — ch 9 fragments, PDF p. 46–50'
    ],
    run: [
      ['0:00', 'Retrieval warm-up', 'Ten agreement items from week 2.'],
      ['0:15', 'The clause test', 'One rule, taught until automatic: does this have a subject and a verb, and can it stand alone? Then the four legal joins — full stop, semicolon, comma plus FANBOYS, and the dependent-clause comma.'],
      ['0:35', 'Trap forensics', 'Phase 1.'],
      ['0:55', 'Break', 'Ten minutes.'],
      ['1:05', 'Speed lab', 'Phase 2.'],
      ['1:35', 'Simulation', 'Phase 3.'],
      ['1:50', 'Error log and homework', 'This topic is the one to over-practise. Set double the usual.']
    ],
    watch: [
      'Comma splices being read as correct because they "sound like a pause". This is the single most common error at this level.',
      'Whether they can spot that "however" is not a conjunction.'
    ],
    errors: [
      'Joining two complete sentences with a comma.',
      'Treating a long phrase as a sentence because it is long.',
      'Using a semicolon before a fragment.'
    ],
    homework: [CP + ' ch 8 and ch 9 exercises in full, PDF p. 35–50', 'One reading passage, annotated', 'Vocabulary log']
  },
  {
    id: 'w03b', week: 3, session: 'B', lead: 'orange', type: 'lesson',
    domain: 'Mathematics',
    title: 'Ratios, rates and percentages',
    sub: 'The mechanical half of the weakest area on the diagnostic — 1 correct out of 7. Start here, because these can be made reliable quickly.',
    goal: 'Set up and solve proportion, rate and percentage-change problems without second-guessing the direction.',
    materials: [KP + ' — ch 12 problem solving and data analysis, PDF p. 273–290'],
    run: [
      ['0:00', 'Retrieval warm-up', 'Five translation items from week 2.'],
      ['0:15', 'Percent change, one method only', 'Teach a single method for increase and decrease and refuse alternatives for now. Multiple competing methods is why this area scored 14%.'],
      ['0:35', 'Trap forensics', 'Phase 1.'],
      ['0:55', 'Break', 'Ten minutes.'],
      ['1:05', 'Speed lab', 'Phase 2.'],
      ['1:35', 'Simulation', 'Phase 3.'],
      ['1:50', 'Error log and homework', '']
    ],
    watch: [
      'Percentage of versus percentage change — if these blur, everything in this domain fails.',
      'Whether units get carried through. Most rate errors here are unit errors.'
    ],
    errors: [
      'Finding the new value when the question asked for the increase.',
      'Averaging two rates directly instead of using total over total.',
      'Applying a percentage to the wrong base.'
    ],
    homework: [KP + ' ch 12 drills, PDF p. 273–290', 'Redo every missed speed lab item from scratch']
  },

  /* ── week 4 · checkpoint 1 ─────────────────────────────── */
  {
    id: 'w04a', week: 4, session: 'A', lead: 'yellow', type: 'proctor',
    domain: 'Checkpoint 1',
    title: 'Practice test 1 — reading and writing',
    sub: 'Two modules, 33 questions each, 39 minutes each. Strict conditions. This is the first honest read on whether the last three weeks landed.',
    goal: 'A clean, properly timed section score, and an error log broken down by domain rather than by question number.',
    proctor: { modules: [{ name: 'Module 1', minutes: 39, questions: 33 }, { name: 'Module 2', minutes: 39, questions: 33 }] },
    materials: [
      DRIVE + 'Practice Papers\\SAT Practice Test 1\\SAT Practice Test 1.pdf',
      'Answer key and conversion table: SAT Answers Test 1.pdf',
      'Explanations: SAT Answer Explaination Test 1.pdf'
    ],
    run: [
      ['0:00', 'Set up', 'Phone away and out of sight. Paper, pencil, and the answer sheet. No dictionary. Explain that you will not answer questions once the clock starts.'],
      ['0:05', 'Module 1', '39 minutes, 33 questions. Do not intervene, even when it is uncomfortable to watch.'],
      ['0:46', 'Short pause', 'Three minutes. Stay in the room.'],
      ['0:49', 'Module 2', '39 minutes, 33 questions.'],
      ['1:28', 'Break', 'Ten minutes. They will need it.'],
      ['1:38', 'Score together', 'Use the answer key, then the conversion table. Let them do the counting — it matters that the number is theirs.'],
      ['1:50', 'Error log by domain', 'Not question by question. Tally into: words in context, evidence, structure, grammar rules, transitions. The shape of the tally sets weeks 5 to 7.']
    ],
    watch: [
      'Whether they finish. Running out of time and being unable to answer look identical on a score report and need opposite fixes.',
      'Any blanks. There should be none — that rule was set in week 1.',
      'Where in the module the accuracy falls off. A late collapse is stamina, not knowledge.'
    ],
    errors: [],
    homework: ['Nothing new. Rest before the maths sitting.']
  },
  {
    id: 'w04b', week: 4, session: 'B', lead: 'yellow', type: 'proctor',
    domain: 'Checkpoint 1',
    title: 'Practice test 1 — mathematics',
    sub: 'Two modules, 27 questions each, 43 minutes each, from the separate maths PDF.',
    goal: 'A clean maths section score and a domain tally: algebra, data, geometry, advanced.',
    proctor: { modules: [{ name: 'Module 1', minutes: 43, questions: 27 }, { name: 'Module 2', minutes: 43, questions: 27 }] },
    materials: [
      DRIVE + 'Practice Papers\\SAT Practice Test 1\\(MATH PART) SAT Practice Test 1.pdf',
      'Answer key and conversion table: SAT Answers Test 1.pdf'
    ],
    run: [
      ['0:00', 'Set up', 'Calculator allowed throughout on the digital SAT — let them use it as they would on the day.'],
      ['0:03', 'Module 1', '43 minutes, 27 questions.'],
      ['0:46', 'Short pause', 'Three minutes.'],
      ['0:49', 'Module 2', '43 minutes, 27 questions.'],
      ['1:32', 'Score together', 'Answer key, then conversion table.'],
      ['1:45', 'Domain tally and debrief', 'Tally into algebra, problem solving and data, geometry, advanced maths. Compare against the diagnostic — especially advanced maths, which was never tested there.']
    ],
    watch: [
      'Blanks in the grid-in questions specifically — they are the easiest to abandon.',
      'Whether advanced maths questions were attempted at all, or skipped on sight.'
    ],
    errors: [],
    homework: ['Rewrite the three worst questions as fully worked solutions, from the explanations PDF']
  },

  /* ── week 5 ────────────────────────────────────────────── */
  {
    id: 'w05a', week: 5, session: 'A', lead: 'cyan', type: 'lesson',
    domain: 'Reading & writing',
    title: 'Commas, dashes and colons',
    sub: 'The longest chapter in the book and the most-tested convention on the exam. Two sessions are budgeted for it.',
    goal: 'Choose punctuation by structure rather than by pause, and know what a colon and a dash each require to their left.',
    materials: [CP + ' — ch 16 commas, dashes and colons, PDF p. 86–101'],
    run: [
      ['0:00', 'Checkpoint review', '25 minutes on test 1 reading and writing. Read the official explanations aloud — they say why each wrong answer is wrong. Do not paraphrase them.'],
      ['0:25', 'Punctuation by structure', 'The rule that replaces guessing: what is on the left of the mark, and what is on the right. Complete sentence or not. Everything follows from that.'],
      ['0:40', 'Trap forensics', 'Phase 1.'],
      ['0:55', 'Break', 'Ten minutes.'],
      ['1:05', 'Speed lab', 'Phase 2.'],
      ['1:35', 'Simulation', 'Phase 3.'],
      ['1:50', 'Error log and homework', '']
    ],
    watch: [
      'Commas being placed where they would pause when speaking. This has to be actively unlearned.',
      'Whether the clause test from week 3 is holding up under pressure — punctuation depends on it entirely.'
    ],
    errors: [
      'A colon after a fragment.',
      'One comma where a pair is needed around a non-essential phrase.',
      'A comma between subject and verb.'
    ],
    homework: [CP + ' ch 16 exercises, PDF p. 86–101', 'One reading passage, annotated', 'Vocabulary log']
  },
  {
    id: 'w05b', week: 5, session: 'B', lead: 'orange', type: 'lesson',
    domain: 'Mathematics',
    title: 'Reading tables and graphs',
    sub: 'The interpretation half of problem solving and data — where the reading weakness meets the maths paper most directly.',
    goal: 'Pull the right number out of a table or chart, and handle mean, median and two-way tables.',
    materials: [KP + ' — ch 12 problem solving and data analysis, PDF p. 290–308'],
    run: [
      ['0:00', 'Checkpoint review', '20 minutes on test 1 maths, by domain.'],
      ['0:20', 'Read the axes first', 'A fixed routine before any chart question: read the title, the axes, the units, and only then the question. Drill it on five charts.'],
      ['0:35', 'Trap forensics', 'Phase 1.'],
      ['0:55', 'Break', 'Ten minutes.'],
      ['1:05', 'Speed lab', 'Phase 2.'],
      ['1:35', 'Simulation', 'Phase 3.'],
      ['1:50', 'Error log and homework', '']
    ],
    watch: [
      'Reading the wrong row or column — usually a rushing error, not a comprehension one.',
      'Mean and median being treated as interchangeable.'
    ],
    errors: [
      'Using the total row as a data row in a two-way table.',
      'Finding the median without ordering the list first.',
      'Missing that an axis does not start at zero.'
    ],
    homework: [KP + ' ch 12 remaining drills, PDF p. 290–308', 'Redo missed items from scratch']
  },

  /* ── week 6 ────────────────────────────────────────────── */
  {
    id: 'w06a', week: 6, session: 'A', lead: 'cyan', type: 'lesson',
    domain: 'Reading & writing',
    title: 'Apostrophes and pronouns',
    sub: 'Possession, contraction, and making a pronoun point at exactly one thing.',
    goal: 'Distinguish its/it\'s and their/they\'re/there reliably, and spot a pronoun with no clear antecedent.',
    materials: [
      CP + ' — ch 16 remainder, PDF p. 96–101',
      CP + ' — ch 17 apostrophes, PDF p. 103–106',
      CP + ' — ch 14 pronoun reference, PDF p. 72–77'
    ],
    run: [
      ['0:00', 'Retrieval warm-up', 'Ten punctuation items from week 5.'],
      ['0:15', 'Apostrophes in ten minutes', 'It is genuinely a ten-minute topic: possession or contraction, never a plural. Then test it hard.'],
      ['0:25', 'Pronoun reference', 'The question is always: can this pronoun point at one and only one noun? If two candidates exist, the sentence is wrong regardless of how it sounds.'],
      ['0:40', 'Trap forensics', 'Phase 1.'],
      ['0:55', 'Break', 'Ten minutes.'],
      ['1:05', 'Speed lab', 'Phase 2.'],
      ['1:35', 'Simulation', 'Phase 3.'],
      ['1:50', 'Error log and homework', '']
    ],
    watch: ['Plural apostrophes creeping in — the most common written error and the easiest to fix.', 'Ambiguous "it" being accepted because the meaning is guessable from context.'],
    errors: ['Its versus it\'s under time pressure.', 'A pronoun agreeing with the nearest noun rather than the intended one.', 'Apostrophes added to plurals.'],
    homework: [CP + ' ch 17 and ch 14 exercises', 'One reading passage, annotated', 'Vocabulary log']
  },
  {
    id: 'w06b', week: 6, session: 'B', lead: 'orange', type: 'lesson',
    domain: 'Mathematics',
    title: 'Angles, triangles and the unit circle',
    sub: 'Geometry is a small section and largely formula-driven — a contained fix. There is a purpose-built interactive lesson for the second half.',
    goal: 'Use the angle and triangle rules confidently, and read the unit circle rather than memorise it.',
    materials: [
      DRIVE + 'Math\\Unit Circle Lesson\\index.html — the built 90-minute lesson',
      KP + ' — ch 14 additional topics, PDF p. 365–380'
    ],
    run: [
      ['0:00', 'Retrieval warm-up', 'Five chart-reading items from week 5.'],
      ['0:15', 'Trap forensics', 'Phase 1 — angle and triangle traps.'],
      ['0:40', 'Speed lab', 'Phase 2.'],
      ['0:55', 'Break', 'Ten minutes.'],
      ['1:05', 'Unit circle lesson', 'Switch to the built interactive lesson for the rest of the session. Check its Desmos key works before class — it ships with the public demo key.'],
      ['1:50', 'Error log and homework', '']
    ],
    watch: ['Whether the formula sheet is being used at all — it is provided on the real exam and many students forget it exists.', 'Degrees and radians being mixed.'],
    errors: ['Assuming a triangle is right-angled because it looks it.', 'Using the wrong pair of sides in a ratio.', 'Forgetting that angles on a straight line sum to 180.'],
    homework: [KP + ' ch 14 drills, PDF p. 365–380', 'Finish any unfinished sections of the unit circle lesson']
  },

  /* ── week 7 ────────────────────────────────────────────── */
  {
    id: 'w07a', week: 7, session: 'A', lead: 'cyan', type: 'lesson',
    domain: 'Reading & writing',
    title: 'Tenses and misplaced descriptions',
    sub: 'Keeping time consistent across a passage, and making sure a describing phrase is next to the thing it describes.',
    goal: 'Choose a verb form from the passage\'s existing timeline, and detect a dangling modifier by asking who is doing the action.',
    materials: [CP + ' — ch 15 tenses, PDF p. 79–84', CP + ' — ch 7 modifiers, PDF p. 28–33'],
    run: [
      ['0:00', 'Retrieval warm-up', 'Ten pronoun and apostrophe items from week 6.'],
      ['0:15', 'Tense by evidence', 'The right tense is never a matter of taste — there is always another verb or a time marker in the passage that settles it. Find the evidence, then choose.'],
      ['0:30', 'The modifier question', 'After an opening phrase, ask: who or what is doing this? The answer must be the very next noun. One question, applied every time.'],
      ['0:40', 'Trap forensics', 'Phase 1.'],
      ['0:55', 'Break', 'Ten minutes.'],
      ['1:05', 'Speed lab', 'Phase 2.'],
      ['1:35', 'Simulation', 'Phase 3.'],
      ['1:50', 'Error log and homework', '']
    ],
    watch: ['Tense chosen by what sounds natural in speech rather than by the passage timeline.', 'Dangling modifiers being read as fine because the meaning is recoverable.'],
    errors: ['Switching tense mid-passage.', 'Using the past perfect where the simple past is correct.', 'An opening phrase describing the wrong noun.'],
    homework: [CP + ' ch 15 and ch 7 exercises', 'One reading passage, annotated', 'Vocabulary log']
  },
  {
    id: 'w07b', week: 7, session: 'B', lead: 'orange', type: 'lesson',
    domain: 'Mathematics',
    title: 'Quadratics and functions',
    sub: 'The topic the diagnostic never measured — and roughly a third of the real maths section. Teach it assuming nothing.',
    goal: 'Handle function notation, factorise a quadratic, and read what a parabola\'s features mean.',
    materials: [KP + ' — ch 13 passport to advanced math, PDF p. 317–340'],
    run: [
      ['0:00', 'Retrieval warm-up', 'Five geometry items from week 6.'],
      ['0:10', 'Function notation from zero', 'f(x) is an instruction, not a multiplication. Do not assume this is known — the diagnostic gives us no evidence either way.'],
      ['0:25', 'Trap forensics', 'Phase 1.'],
      ['0:55', 'Break', 'Ten minutes.'],
      ['1:05', 'Speed lab', 'Phase 2.'],
      ['1:35', 'Simulation', 'Phase 3.'],
      ['1:50', 'Error log and homework', 'Flag clearly for week 8 how much of this landed — checkpoint 2 is the first real measurement of this domain.']
    ],
    watch: [
      'Whether f(x) notation is understood at all. If not, this becomes a two-week topic and week 9 session B absorbs the overflow.',
      'Confidence collapsing on sight of a quadratic. Watch for skipping before reading.'
    ],
    errors: ['Reading f(3) as f times 3.', 'Losing a sign when factorising.', 'Giving the x-intercepts when the vertex was asked for.'],
    homework: [KP + ' ch 13 drills, PDF p. 317–340', 'Rewrite three missed questions as fully worked solutions']
  },

  /* ── week 8 · checkpoint 2 ─────────────────────────────── */
  {
    id: 'w08a', week: 8, session: 'A', lead: 'yellow', type: 'proctor',
    domain: 'Checkpoint 2',
    title: 'Practice test 2 — reading and writing',
    sub: 'Same conditions as week 4. The comparison that matters is domain by domain, not the headline number.',
    goal: 'Measure movement since checkpoint 1, especially in grammar rules — the area that should have moved most.',
    proctor: { modules: [{ name: 'Module 1', minutes: 39, questions: 33 }, { name: 'Module 2', minutes: 39, questions: 33 }] },
    materials: [
      DRIVE + 'Practice Papers\\SAT Practice Test 2\\SAT Practice Test 2.pdf',
      'Answer key: SAT Answers Test 2.pdf',
      'Explanations: SAT Answer Explaination Test 2.pdf'
    ],
    run: [
      ['0:00', 'Set up', 'Same conditions as week 4. Say nothing about targets beforehand.'],
      ['0:05', 'Module 1', '39 minutes.'],
      ['0:46', 'Short pause', 'Three minutes.'],
      ['0:49', 'Module 2', '39 minutes.'],
      ['1:28', 'Break', 'Ten minutes.'],
      ['1:38', 'Score and compare', 'Put the week 4 tally beside the week 8 tally. Grammar rules should show the clearest movement.'],
      ['1:50', 'Decide', 'If grammar has not moved, the teaching method is the problem, not the effort. Change the approach for weeks 9 to 11 and say so openly.']
    ],
    watch: [
      'Reading may look flat. That is expected at this point and is not a failure — say so before they draw their own conclusion.',
      'Whether pacing improved even where accuracy did not.'
    ],
    errors: [],
    homework: ['Rest before the maths sitting.']
  },
  {
    id: 'w08b', week: 8, session: 'B', lead: 'yellow', type: 'proctor',
    domain: 'Checkpoint 2',
    title: 'Practice test 2 — mathematics',
    sub: 'The first real measurement of advanced maths, which the original diagnostic never tested.',
    goal: 'Measure movement across all four maths domains, and get a first honest reading on advanced maths.',
    proctor: { modules: [{ name: 'Module 1', minutes: 43, questions: 27 }, { name: 'Module 2', minutes: 43, questions: 27 }] },
    materials: [
      DRIVE + 'Practice Papers\\SAT Practice Test 2\\(MATH PART) SAT Practice Test 2.pdf',
      'Answer key: SAT Answers Test 2.pdf'
    ],
    run: [
      ['0:00', 'Set up', ''],
      ['0:03', 'Module 1', '43 minutes.'],
      ['0:46', 'Short pause', 'Three minutes.'],
      ['0:49', 'Module 2', '43 minutes.'],
      ['1:32', 'Score and compare', 'Domain tally beside week 4.'],
      ['1:45', 'Set the week 9 agenda', 'Whatever the weakest domain is here becomes week 9 session B. That session is deliberately unallocated for this reason.']
    ],
    watch: ['Advanced maths specifically — this is the number that decides how week 9 is spent.', 'Whether the never-blank rule held.'],
    errors: [],
    homework: ['Fully worked solutions for the three worst questions']
  },

  /* ── week 9 ────────────────────────────────────────────── */
  {
    id: 'w09a', week: 9, session: 'A', lead: 'cyan', type: 'lesson',
    domain: 'Reading & writing',
    title: 'Joining ideas',
    sub: 'Transitions are heavily tested and entirely learnable — the highest-return topic left in the reading and writing section.',
    goal: 'Read the relationship between two sentences before looking at any choice, then pick the transition that matches it.',
    materials: [CP + ' — ch 19 transitions, PDF p. 117–122'],
    run: [
      ['0:00', 'Checkpoint review', '20 minutes on test 2 reading and writing.'],
      ['0:20', 'Relationship first', 'Cover the answer choices. Read the two sentences. Say the relationship out loud — same direction, opposite, cause, example, sequence. Only then uncover. This single habit is most of the topic.'],
      ['0:35', 'Trap forensics', 'Phase 1.'],
      ['0:55', 'Break', 'Ten minutes.'],
      ['1:05', 'Speed lab', 'Phase 2.'],
      ['1:35', 'Simulation', 'Phase 3.'],
      ['1:50', 'Error log and homework', '']
    ],
    watch: ['Choosing a transition because it sounds sophisticated rather than because it matches the logic.', 'Whether they can state the relationship before seeing choices — if not, the habit has not formed yet.'],
    errors: ['"However" used where the ideas agree.', '"Therefore" used where there is no causal link.', 'Missing that the second sentence is an example rather than a consequence.'],
    homework: [CP + ' ch 19 exercises, PDF p. 117–122', 'One reading passage, annotated', 'Vocabulary log']
  },
  {
    id: 'w09b', week: 9, session: 'B', lead: 'orange', type: 'lesson',
    domain: 'Mathematics',
    title: 'Repair session',
    sub: 'Deliberately unallocated. Whatever checkpoint 2 exposed is what gets taught here — this page carries mixed advanced-maths work as the default.',
    goal: 'Close the largest gap that checkpoint 2 revealed, or continue advanced maths if nothing more urgent surfaced.',
    materials: [KP + ' — ch 13 advanced math, PDF p. 340–356', 'Test 2 explanations for the specific misses'],
    run: [
      ['0:00', 'Checkpoint review', '20 minutes on test 2 maths, by domain.'],
      ['0:20', 'Targeted reteach', 'The weakest domain from checkpoint 2. If that is advanced maths, continue from week 7. If it is data, go back to the chart routine from week 5.'],
      ['0:55', 'Break', 'Ten minutes.'],
      ['1:05', 'Speed lab', 'Phase 2 — mixed advanced maths as the default set.'],
      ['1:35', 'Simulation', 'Phase 3.'],
      ['1:50', 'Error log and homework', '']
    ],
    watch: ['Whether the same domain is failing for the third checkpoint running. If so, the method needs changing, not repeating.'],
    errors: ['Exponent rules applied to addition.', 'Losing a solution when taking a square root.', 'Misreading a function transformation\'s direction.'],
    homework: ['Whatever the reteach exposed — set specifically, not generically']
  },

  /* ── week 10 ───────────────────────────────────────────── */
  {
    id: 'w10a', week: 10, session: 'A', lead: 'cyan', type: 'lesson',
    domain: 'Reading & writing',
    title: 'Purpose and synthesis',
    sub: 'Why a sentence is there, and the notes-to-sentence question type — which is more formulaic than it looks.',
    goal: 'Answer a purpose question from the passage\'s structure, and handle rhetorical synthesis by reading the goal first.',
    materials: [
      CP + ' — ch 20 topic and conclusion sentences, PDF p. 124–133',
      CP + ' — ch 21 supporting evidence, PDF p. 135–143',
      CP + ' — ch 22 relevance and purpose, PDF p. 145–158'
    ],
    run: [
      ['0:00', 'Retrieval warm-up', 'Ten transition items from week 9.'],
      ['0:15', 'Goal first, always', 'On a synthesis question the prompt states the goal in its final sentence. Read that first, then the bullets. Most wrong answers are true statements that miss the stated goal.'],
      ['0:35', 'Trap forensics', 'Phase 1.'],
      ['0:55', 'Break', 'Ten minutes.'],
      ['1:05', 'Speed lab', 'Phase 2.'],
      ['1:35', 'Simulation', 'Phase 3.'],
      ['1:50', 'Error log and homework', '']
    ],
    watch: ['Picking an answer because it is factually true rather than because it does the stated job.', 'Skipping the goal sentence in the prompt.'],
    errors: ['Choosing the most detailed option regardless of purpose.', 'Ignoring a stated audience or emphasis in the goal.', 'Confusing what the passage says with why it says it.'],
    homework: [CP + ' ch 20 to 22 exercises', 'One reading passage, annotated', 'Vocabulary log']
  },
  {
    id: 'w10b', week: 10, session: 'B', lead: 'orange', type: 'lesson',
    domain: 'Mathematics',
    title: 'Exam craft',
    sub: 'The techniques that only pay once the content is there — which, by week 10, it is. Mixed questions with no topic labels.',
    goal: 'Recognise what a question is before solving it, and use backsolving, number-picking and the built-in calculator deliberately.',
    materials: [KP + ' — mixed drills across ch 11 to 14'],
    run: [
      ['0:00', 'Retrieval warm-up', 'Five mixed items, unlabelled.'],
      ['0:15', 'Backsolving and picking numbers', 'Two techniques, taught properly: when the answers are numbers, work backwards from B or C; when the answers are expressions, pick a value. Show when each fails.'],
      ['0:35', 'Trap forensics', 'Phase 1 — mixed, unlabelled.'],
      ['0:55', 'Break', 'Ten minutes.'],
      ['1:05', 'Speed lab', 'Phase 2 — mixed set, no topic chips.'],
      ['1:35', 'Simulation', 'Phase 3.'],
      ['1:50', 'The blank rule, one last time', 'No penalty for wrong answers. Every bubble filled, always. Reference the blank on the original diagnostic.']
    ],
    watch: ['Whether they can name the topic of a question before starting it. That recognition step is what the mixed set is testing.', 'Over-use of backsolving on questions where solving directly is faster.'],
    errors: ['Backsolving from A instead of the middle.', 'Picking 0 or 1 when the question makes them special cases.', 'Trusting the calculator on a question that needed rearranging first.'],
    homework: ['Mixed set, timed, unlabelled', 'Full review of the vocabulary log ahead of week 11']
  },

  /* ── week 11 ───────────────────────────────────────────── */
  {
    id: 'w11a', week: 11, session: 'A', lead: 'yellow', type: 'proctor',
    domain: 'Timed drill',
    title: 'Test 3 — one reading and writing module',
    sub: 'One module rather than two, so there is genuine room to review it properly afterwards.',
    goal: 'Practise pacing under real timing, then review every question — including the correct ones.',
    proctor: { modules: [{ name: 'Module 1', minutes: 39, questions: 33 }] },
    materials: [
      DRIVE + 'Practice Papers\\SAT Practice Test 3\\SAT Practice Test 3.pdf — module 1 only',
      CP + ' — ch 29 review cheat sheet, PDF p. 208–211'
    ],
    run: [
      ['0:00', 'Set up', 'One module only. Tell them that, so they pace for 39 minutes rather than 78.'],
      ['0:05', 'Module 1', '39 minutes, 33 questions.'],
      ['0:44', 'Break', 'Ten minutes.'],
      ['0:54', 'Full review', 'Every question, not just the misses. Ask for the reasoning on correct answers too — this is where lucky guesses get found.'],
      ['1:35', 'Cheat sheet consolidation', 'Work through the College Panda review sheet. Every rule from weeks 1 to 10 on a few pages.'],
      ['1:50', 'Pacing plan', 'Agree a per-question target and what to do when they are behind at the halfway mark.']
    ],
    watch: ['Time per question across the module. A slow start is the most common and most fixable pacing fault.', 'Correct answers the student cannot explain.'],
    errors: [],
    homework: ['Redo the module untimed, writing the rule beside every question']
  },
  {
    id: 'w11b', week: 11, session: 'B', lead: 'yellow', type: 'proctor',
    domain: 'Timed drill',
    title: 'Test 3 — one mathematics module',
    sub: 'One module, then a full review and an explicit decision rule for when to abandon a question.',
    goal: 'Practise maths pacing, and build the habit of cutting losses.',
    proctor: { modules: [{ name: 'Module 1', minutes: 43, questions: 27 }] },
    materials: [DRIVE + 'Practice Papers\\SAT Practice Test 3\\(MATH PART) SAT Practice Test 3.pdf — module 1 only'],
    run: [
      ['0:00', 'Set up', 'One module.'],
      ['0:03', 'Module 1', '43 minutes, 27 questions.'],
      ['0:46', 'Break', 'Ten minutes.'],
      ['0:56', 'Full review', 'Every question. Reasoning required on the correct ones too.'],
      ['1:35', 'The abandon rule', 'Agree an explicit rule: if there is no route after 30 seconds, mark it, guess, move on, come back. Practise it deliberately.'],
      ['1:50', 'Pacing plan', '']
    ],
    watch: ['Time sunk on a single question. This is where most maths marks are lost at this level.', 'Whether the abandon rule is actually used or just agreed to.'],
    errors: [],
    homework: ['Redo the module untimed with full working']
  },

  /* ── week 12 · final ───────────────────────────────────── */
  {
    id: 'w12a', week: 12, session: 'A', lead: 'yellow', type: 'proctor',
    domain: 'Final',
    title: 'Practice test 4 — reading and writing',
    sub: 'Full dress rehearsal. Same conditions as the real thing.',
    goal: 'A final honest section score, and a three-point trend line across weeks 4, 8 and 12.',
    proctor: { modules: [{ name: 'Module 1', minutes: 39, questions: 33 }, { name: 'Module 2', minutes: 39, questions: 33 }] },
    materials: [
      DRIVE + 'Practice Papers\\SAT Practice Test 4\\SAT Practice Test 4.pdf',
      'Answer key: SAT Answer Test 4.pdf'
    ],
    run: [
      ['0:00', 'Set up', 'Exactly as the real exam. Treat it as the real exam.'],
      ['0:05', 'Module 1', '39 minutes.'],
      ['0:46', 'Short pause', 'Three minutes.'],
      ['0:49', 'Module 2', '39 minutes.'],
      ['1:28', 'Break', 'Ten minutes.'],
      ['1:38', 'Score and chart', 'Plot all three checkpoints together. The trend line matters more than any single number — say that out loud.']
    ],
    watch: ['Confidence rather than accuracy. By now the behaviour under pressure is as informative as the score.'],
    errors: [],
    homework: ['Rest.']
  },
  {
    id: 'w12b', week: 12, session: 'B', lead: 'yellow', type: 'proctor',
    domain: 'Final',
    title: 'Practice test 4 — mathematics, and the exam-day plan',
    sub: 'The last sitting, then the plan for the day itself.',
    goal: 'Final maths score, and an agreed, written plan for exam day.',
    proctor: { modules: [{ name: 'Module 1', minutes: 43, questions: 27 }, { name: 'Module 2', minutes: 43, questions: 27 }] },
    materials: [DRIVE + 'Practice Papers\\SAT Practice Test 4\\(MATH PART) SAT Practice Test 4.pdf'],
    run: [
      ['0:00', 'Set up', ''],
      ['0:03', 'Module 1', '43 minutes.'],
      ['0:46', 'Short pause', 'Three minutes.'],
      ['0:49', 'Module 2', '43 minutes.'],
      ['1:32', 'Score and chart', 'Complete the three-point trend for maths.'],
      ['1:42', 'The exam-day plan', 'Write it down together: the three rules most worth remembering, the pacing plan, and specifically what to do when a module opens badly — because it will feel like it has.'],
      ['1:55', 'Hand over what is left', 'Test 3 module 2 in both sections is unused. Give it to them as post-course practice, with the answer keys.']
    ],
    watch: ['Any sign that a bad opening module causes a spiral. That is the single most valuable thing to rehearse in the last ten minutes.'],
    errors: [],
    homework: ['Two or three Bluebook sittings before the real exam — the interface is the last unfamiliar thing left.']
  }
];
