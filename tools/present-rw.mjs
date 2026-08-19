/* PRESENTATION content — reading & writing.
   Three teaching modules per lesson, each with concept cards, a
   correct/wrong example pair, the rule, the trap it sets, and a
   worked example in numbered steps. This is the part of the lesson
   that has to land before any drilling is worth doing.            */

export const presentRw = {

/* ══ w01a · finding the subject ══════════════════════════════════ */
w01a: {
  hook: {
    icon: '🎒',
    title: 'The overstuffed backpack',
    text: 'A sentence is like a backpack with one thing that actually matters inside it and a lot of padding around it. The SAT stuffs the padding in deliberately — long phrases, extra descriptions — so that you grab the wrong thing. Every question in this lesson is really one question: <strong>what is actually in the bag?</strong> Learn to pull the padding out and the answer is usually obvious.'
  },
  modules: [
    {
      title: 'Cross out the “of” phrases',
      accent: 'sky',
      lead: 'A prepositional phrase adds detail but can never contain the subject. Cross them out and the sentence gets much shorter — and much easier.',
      concepts: [
        { i: '✂️', t: 'What to cross out', d: 'Any phrase starting of, in, on, with, by, from, for, to, at, between.' },
        { i: '🎯', t: 'What is left', d: 'The noun still standing is the subject. That is the only noun the verb has to agree with.' },
        { i: '🪤', t: 'Why it works', d: 'The SAT puts a plural noun inside the phrase and a singular subject outside it, hoping your ear picks the nearer one.', f: 'Nearest noun ≠ subject' }
      ],
      examples: [
        { ok: true, t: 'The <span class="hl-s">box</span> <span class="cut">of chocolates</span> <span class="hl-ok">sits</span> on the table.', note: 'Subject is “box” — singular. “Chocolates” is inside the crossed-out phrase.' },
        { ok: false, t: 'The box of chocolates <span class="hl-no">sit</span> on the table.', note: 'The verb has been matched to “chocolates”, which cannot be the subject.' }
      ],
      rule: 'Cross out every prepositional phrase before you look at the verb. Whatever noun survives is the subject.',
      trap: 'The plural noun is almost always placed right next to the verb so it <em>sounds</em> right. Your ear will get this wrong. The crossing-out has to be done on the page, not in your head.',
      worked: {
        q: 'The collection of rare manuscripts donated by several retired professors ______ housed in the basement archive.',
        steps: [
          'Find the phrases: “of rare manuscripts” and “by several retired professors”. Both start with a preposition.',
          'Cross both out. What remains: “The collection ______ housed in the basement archive.”',
          'The surviving noun is <strong>collection</strong> — one collection, so singular.',
          'Match the verb to it. Note that “manuscripts” and “professors” were both bait placed close to the blank.'
        ],
        answer: 'The answer is “is”.'
      }
    },
    {
      title: 'Relative clauses are just more padding',
      accent: 'teal',
      lead: 'A clause beginning who, which or that describes the noun before it. It is never the main action of the sentence, so it can be crossed out too.',
      concepts: [
        { i: '🔗', t: 'The signal words', d: 'who, whom, whose, which, that — each one opens a describing clause.' },
        { i: '📏', t: 'How far it runs', d: 'Usually to the next comma, or to the point where the main verb appears.' },
        { i: '⚠️', t: 'The leftover test', d: 'After crossing out, the sentence must still have a main verb. If it does not, you have crossed out too much.' }
      ],
      examples: [
        { ok: true, t: 'Marie Tharp, <span class="cut">whose maps helped confirm continental drift</span>, <span class="hl-ok">remained</span> uncredited.', note: 'Remove the clause and “Marie Tharp remained uncredited” still stands. Good.' },
        { ok: false, t: 'Marie Tharp, whose maps helped confirm continental drift, <span class="hl-no">remaining</span> uncredited.', note: 'Now nothing is the main verb — the sentence never finishes.' }
      ],
      rule: 'Cross out the relative clause, then check the sentence still has a real main verb. If it does not, the answer choice you picked was not a verb.',
      trap: 'The clause usually contains its own verb (“helped”, above). Students see a verb, assume the sentence is complete, and pick a non-finite form like “remaining” or “having remained”.',
      worked: {
        q: 'The scientist who discovered the enzyme ______ still working at the same laboratory.',
        steps: [
          'Spot the relative clause: “who discovered the enzyme”.',
          'Cross it out: “The scientist ______ still working at the same laboratory.”',
          'The subject is <strong>scientist</strong> — singular.',
          'The sentence still needs its own main verb, so the answer has to be a real conjugated verb.'
        ],
        answer: 'The answer is “is”.'
      }
    },
    {
      title: 'Words that look plural and are not',
      accent: 'olive',
      lead: 'A small group of subjects are singular no matter how plural the words around them look. These are worth memorising outright.',
      concepts: [
        { i: '1️⃣', t: 'Always singular', d: 'each, every, either, neither, one, anyone, everyone, somebody, nobody.' },
        { i: '🔄', t: 'Inverted order', d: 'In “there is / here comes / among the X was Y”, the subject comes AFTER the verb.' },
        { i: '➕', t: '“Along with” ≠ “and”', d: 'Only “and” makes a compound plural subject. “Along with”, “as well as” and “in addition to” do not.' }
      ],
      examples: [
        { ok: true, t: '<span class="hl-s">Neither</span> of the two proposals <span class="hl-ok">meets</span> the budget.', note: '“Neither” is the subject and is always singular.' },
        { ok: false, t: 'Neither of the two proposals <span class="hl-no">meet</span> the budget.', note: 'Matched to “proposals”, which sits inside a crossed-out phrase.' }
      ],
      rule: 'Each, every, either and neither are singular — always, regardless of what follows them.',
      trap: 'These words are almost always followed by “of the [plural noun]”, precisely so the plural sits next to the verb.',
      tip: 'Say the sentence with just the key word: “Neither … meets.” If that sounds fine, you have found the subject correctly.',
      worked: {
        q: 'The committee, along with its three advisers, ______ agreed to postpone the vote.',
        steps: [
          '“Along with its three advisers” sits between commas — cross it out.',
          'Note that “along with” is NOT “and”, so it does not create a plural subject.',
          'What survives: “The committee ______ agreed.” One committee, so singular.',
          'If the sentence had said “The committee <em>and</em> its three advisers”, the answer would flip to plural.'
        ],
        answer: 'The answer is “has”.'
      }
    }
  ],
  check: {
    stem: 'The box <span class="cut">of old photographs</span> ______ on the shelf.',
    options: ['sit', 'sits'], answer: 1,
    explain: 'Subject is “box”, not “photographs”. Singular subject, singular verb.'
  }
},

/* ══ w02a · subject-verb agreement ═══════════════════════════════ */
w02a: {
  hook: {
    icon: '⚖️',
    title: 'The scales must balance',
    text: 'Subject and verb are two sides of a scale: one thing takes one kind of verb, many things take another. It sounds trivial — and it is, in a four-word sentence. The SAT never gives you a four-word sentence. It buries fifteen words between the two sides of the scale and waits to see if you can still tell what is being weighed.'
  },
  modules: [
    {
      title: 'Collective nouns are one thing',
      accent: 'sky',
      lead: 'A word naming a group of people is treated as a single unit in American English — which is the English the SAT uses.',
      concepts: [
        { i: '👥', t: 'The group words', d: 'team, jury, committee, family, staff, audience, orchestra, company, government.' },
        { i: '🇺🇸', t: 'American convention', d: 'British English often treats these as plural. The SAT does not. Singular, always.' },
        { i: '🧱', t: 'Why', d: 'The group acts as one body making one decision, so it takes one verb.' }
      ],
      examples: [
        { ok: true, t: 'The <span class="hl-s">jury</span> <span class="hl-ok">was</span> unable to reach a verdict.', note: 'One jury, one verb.' },
        { ok: false, t: 'The jury <span class="hl-no">were</span> unable to reach a verdict.', note: 'Correct in British English, marked wrong on the SAT.' }
      ],
      rule: 'Group nouns take singular verbs and singular pronouns: “the committee announced <em>its</em> decision”.',
      trap: 'A long interrupting phrase is usually dropped in — “the jury, after deliberating for nine hours across two days, ______” — so that by the time you reach the blank you have lost the subject.',
      worked: {
        q: 'The jury, after deliberating for nine hours across two days, ______ unable to reach a unanimous verdict.',
        steps: [
          'Everything between the commas is an interrupter. Cross it out.',
          'What remains: “The jury ______ unable to reach a verdict.”',
          '“Jury” is a group acting as one unit, so it is singular.',
          'The sentence is set in the past, so use the past singular.'
        ],
        answer: 'The answer is “was”.'
      }
    },
    {
      title: '“There” is never the subject',
      accent: 'teal',
      lead: 'In sentences beginning “there is” or “there are”, the word “there” is a placeholder. The real subject comes after the verb.',
      concepts: [
        { i: '👉', t: 'Look right', d: 'The subject is whatever noun follows the verb. Match the verb to that.' },
        { i: '🔁', t: 'Rewrite it', d: 'Flip the sentence: “There are several reasons” → “Several reasons are”. Now it is obvious.' },
        { i: '🎭', t: 'Other inversions', d: 'Also happens after “here”, and after an opening phrase: “Among the documents was a logbook.”' }
      ],
      examples: [
        { ok: true, t: 'There <span class="hl-ok">are</span> <span class="hl-s">several reasons</span> the design was abandoned.', note: 'Flip it: “Several reasons are…” — plural.' },
        { ok: false, t: 'There <span class="hl-no">is</span> several reasons the design was abandoned.', note: 'Matched to “there”, which is not a subject at all.' }
      ],
      rule: 'In an inverted sentence, find the noun after the verb and match to that.',
      trap: '“There is” sounds natural in speech before almost anything, so your ear gives you no warning at all here.',
      tip: 'Careful with “number”: <em>the</em> number of X <strong>is</strong> (singular), but <em>a</em> number of X <strong>are</strong> (plural).',
      worked: {
        q: 'Among the documents recovered from the wreck ______ a captain’s logbook dating from 1802.',
        steps: [
          'The sentence opens with a phrase, not a subject — “Among the documents recovered from the wreck”.',
          'That whole phrase is prepositional. Cross it out.',
          'What is left after the blank: “a captain’s logbook”. That is the subject, and it follows the verb.',
          'One logbook, so the verb is singular.'
        ],
        answer: 'The answer is “was”.'
      }
    },
    {
      title: 'And, or, nor',
      accent: 'olive',
      lead: 'Two subjects joined by “and” are plural. Joined by “or” or “nor”, the verb matches whichever subject is nearer to it.',
      concepts: [
        { i: '➕', t: 'and → plural', d: 'The cat and the dog play. Two things, plural verb, no exceptions.' },
        { i: '🎯', t: 'or / nor → nearest', d: 'The verb agrees with whichever subject sits closest to it.' },
        { i: '🔀', t: 'Order matters', d: '“Neither the students nor the teacher is” but “Neither the teacher nor the students are”.' }
      ],
      examples: [
        { ok: true, t: 'Either the manager or the two <span class="hl-s">assistants</span> <span class="hl-ok">are</span> responsible.', note: '“Assistants” is nearer the verb, so plural wins.' },
        { ok: false, t: 'Either the manager or the two assistants <span class="hl-no">is</span> responsible.', note: 'Matched to the further subject instead of the nearer one.' }
      ],
      rule: 'With either…or and neither…nor, the verb agrees with the subject closest to it.',
      trap: 'The test writers flip the order between two otherwise identical questions, so the same-looking sentence has opposite answers.',
      worked: {
        q: 'Neither the director nor the producers ______ willing to comment.',
        steps: [
          'Spot the structure: “neither … nor”, so the nearest-subject rule applies.',
          'Identify the two subjects: “the director” (singular) and “the producers” (plural).',
          'Which is nearer the verb? “The producers” — it sits immediately before the blank.',
          'So the verb is plural. Reverse the two nouns and the answer would flip to “is”.'
        ],
        answer: 'The answer is “were” (or “are”).'
      }
    }
  ],
  check: {
    stem: 'Each of the students ______ a different answer.',
    options: ['give', 'gives'], answer: 1,
    explain: '“Each” is singular, however plural “students” looks. It sits inside a prepositional phrase.'
  }
},

/* ══ w03a · sentence boundaries ══════════════════════════════════ */
w03a: {
  hook: {
    icon: '🚧',
    title: 'Where the road ends',
    text: 'Every sentence is a stretch of road with a definite end. Punctuation is the sign that tells you the road has ended and a new one begins. Put the wrong sign up and traffic crashes. This is the single highest-scoring topic in the whole reading and writing section — more questions turn on it than on any other rule.'
  },
  modules: [
    {
      title: 'The clause test',
      accent: 'sky',
      lead: 'Before any punctuation decision, you have to know whether each side can stand alone. There is exactly one test, and it takes two seconds.',
      concepts: [
        { i: '🧍', t: 'Subject', d: 'Who or what is doing something? If there is no answer, it is not a sentence.' },
        { i: '🏃', t: 'Finite verb', d: 'A real conjugated verb, not “running” or “to run” on their own.' },
        { i: '✅', t: 'Stands alone', d: 'Could you say it by itself and be understood? Then it is independent.', f: 'Subject + verb + stands alone = sentence' }
      ],
      examples: [
        { ok: true, t: '<span class="hl-ok">The runner crossed the line.</span>', note: 'Subject “runner”, verb “crossed”, stands alone. A complete sentence.' },
        { ok: false, t: '<span class="hl-no">Running through the field behind the old barn.</span>', note: 'Long, but no subject and no finite verb. A fragment.' }
      ],
      rule: 'Length has nothing to do with it. A ten-word string can be a fragment and a three-word string can be a complete sentence.',
      trap: 'Words like “although”, “because”, “while”, “since” and “when” at the front make an otherwise complete sentence dependent. “She won” is a sentence; “Although she won” is not.',
      worked: {
        q: 'Is “Because the samples had been stored incorrectly” a complete sentence?',
        steps: [
          'Subject? Yes — “the samples”.',
          'Finite verb? Yes — “had been stored”.',
          'Can it stand alone? Say it out loud. It leaves you waiting for the rest — because of that, <em>what</em>?',
          'The word “because” is what makes it dependent. Remove it and “The samples had been stored incorrectly” is complete.'
        ],
        answer: 'No — it is a dependent clause, and it needs a main clause attached.'
      }
    },
    {
      title: 'The four legal joins',
      accent: 'teal',
      lead: 'When both sides are complete sentences, you have exactly four ways to join them. Nothing else is allowed.',
      concepts: [
        { i: '.', t: 'A full stop', d: 'Always legal. Two separate sentences.' },
        { i: ';', t: 'A semicolon', d: 'Legal when the two ideas are closely related.' },
        { i: ',+', t: 'Comma + FANBOYS', d: 'for, and, nor, but, or, yet, so — the comma comes BEFORE the conjunction.' },
        { i: '↘️', t: 'Make one dependent', d: 'Add because, although, while, since to one side.' }
      ],
      examples: [
        { ok: true, t: 'The storm damaged power lines<span class="hl-ok">, and</span> thousands of homes lost electricity.', note: 'Comma plus a FANBOYS conjunction. Legal.' },
        { ok: false, t: 'The storm damaged power lines<span class="hl-no">,</span> thousands of homes lost electricity.', note: 'A comma splice — the most commonly tested error on the exam.' }
      ],
      rule: 'Two complete sentences may never be joined by a comma alone. That error has a name — a comma splice — and it appears on every test.',
      trap: 'A comma splice sounds completely natural when read aloud, because a comma is where you would pause. You cannot hear this error; you have to test for it.',
      worked: {
        q: 'The results were surprising ______ they contradicted three decades of accepted theory.',
        steps: [
          'Test the left side: “The results were surprising.” Subject, verb, stands alone. Complete.',
          'Test the right side: “They contradicted three decades of accepted theory.” Also complete.',
          'Two complete sentences, so a bare comma is illegal — that would be a splice.',
          'Legal options here: a full stop, a semicolon, or “, and”. The two ideas are closely linked, so the semicolon fits best.'
        ],
        answer: 'The answer is a semicolon.'
      }
    },
    {
      title: '“However” is not a conjunction',
      accent: 'olive',
      lead: 'This is the trap the exam returns to most often. Words that feel like joining words are, grammatically, just adverbs — and they cannot hold two sentences together.',
      concepts: [
        { i: '🚫', t: 'Not conjunctions', d: 'however, therefore, moreover, nevertheless, consequently, furthermore, thus, instead.' },
        { i: '✅', t: 'Real conjunctions', d: 'Only the seven FANBOYS words can join two sentences with a comma.' },
        { i: '🔧', t: 'How to use them', d: 'Semicolon before, comma after: “…was rejected; therefore, the architect resubmitted.”' }
      ],
      examples: [
        { ok: true, t: 'The design was rejected twice<span class="hl-ok">; therefore,</span> the architect submitted a third version.', note: 'Semicolon before, comma after. Correct.' },
        { ok: false, t: 'The design was rejected twice<span class="hl-no">, therefore,</span> the architect submitted a third version.', note: 'Still a comma splice — “therefore” cannot do the joining.' }
      ],
      rule: 'If you can replace the word with “but” or “and” and the punctuation still needs changing, it was never a conjunction.',
      trap: 'These words look formal and academic, so students trust them more. The exam knows that.',
      tip: 'Quick check: a real conjunction cannot be moved. You can say “The results, however, were poor” — moving it proves it is an adverb. You could never say “The results, but, were poor”.',
      worked: {
        q: 'The bridge opened in 1937 ______ it remains one of the most photographed structures in the country.',
        steps: [
          'Both sides are complete sentences — check them individually first.',
          'So the only legal joins are: full stop, semicolon, or comma + FANBOYS.',
          'A bare comma would be a splice. “, however” would also be a splice, because “however” is an adverb.',
          'The two ideas are closely related and there is no contrast word offered, so the semicolon is right.'
        ],
        answer: 'The answer is a semicolon.'
      }
    }
  ],
  check: {
    stem: 'The bridge opened in 1937 ______ it is still in use.',
    options: [', (comma alone)', '; (semicolon)'], answer: 1,
    explain: 'Both sides stand alone, so a semicolon is legal and a bare comma is a splice.'
  }
},

/* ══ w05a · commas, dashes and colons ════════════════════════════ */
w05a: {
  hook: {
    icon: '🔌',
    title: 'Punctuation is wiring, not breathing',
    text: 'Most students place commas where they would take a breath. That works about half the time, which is exactly why it feels reliable and exactly why it costs marks. Punctuation is wiring: what matters is what is connected on each side of the mark, not how the sentence sounds when read aloud.'
  },
  modules: [
    {
      title: 'The colon needs a complete sentence on its left',
      accent: 'sky',
      lead: 'A colon introduces something — a list, an explanation, a single word. Whatever is to its LEFT must be able to stand alone.',
      concepts: [
        { i: '⬅️', t: 'Left side', d: 'Must be a complete sentence. This is the whole rule.' },
        { i: '➡️', t: 'Right side', d: 'Can be anything — a list, a phrase, one word, another sentence.' },
        { i: '🆚', t: 'Versus semicolon', d: 'A semicolon needs a complete sentence on BOTH sides. A colon only needs one on the left.', f: 'colon = 1 side · semicolon = 2 sides' }
      ],
      examples: [
        { ok: true, t: 'The expedition carried only what was necessary<span class="hl-ok">:</span> rope, food and a compass.', note: 'Left side is a complete sentence; a list follows.' },
        { ok: false, t: 'The expedition carried<span class="hl-no">:</span> rope, food and a compass.', note: '“The expedition carried” cannot stand alone — it is waiting for an object.' }
      ],
      rule: 'Cover everything to the right of the colon. If what is left is a sentence, the colon is legal.',
      trap: 'The wrong version often sounds better, because we naturally pause before a list. Ignore the pause and test the left side.',
      worked: {
        q: 'She had one ambition ______ to sail around the world alone.',
        steps: [
          'Cover everything after the blank. What is left: “She had one ambition.”',
          'Is that a complete sentence? Subject “she”, verb “had”, stands alone. Yes.',
          'What follows is an explanation, not a second sentence — so a semicolon would be illegal.',
          'A complete sentence introducing an explanation is exactly what a colon does.'
        ],
        answer: 'The answer is a colon.'
      }
    },
    {
      title: 'Non-essential information takes a matching pair',
      accent: 'teal',
      lead: 'If a phrase can be lifted out of the sentence without breaking it, it must be enclosed — and both ends must use the same mark.',
      concepts: [
        { i: '✂️', t: 'The lift-out test', d: 'Remove the phrase. Does the sentence still work and mean the same thing? Then it is non-essential.' },
        { i: '👯', t: 'Pairs must match', d: 'Two commas, or two dashes. Never one comma and one dash.' },
        { i: '🔒', t: 'Essential = no marks', d: 'If removing it changes which thing you mean, it is essential and takes no punctuation at all.' }
      ],
      examples: [
        { ok: true, t: 'Ada Lovelace<span class="hl-ok">,</span> whose notes became the first program<span class="hl-ok">,</span> received little recognition.', note: 'Matching pair of commas around removable information.' },
        { ok: false, t: 'Ada Lovelace<span class="hl-no">,</span> whose notes became the first program <span class="hl-no">—</span> received little recognition.', note: 'A comma at one end and a dash at the other. Never legal.' }
      ],
      rule: 'Non-essential information is enclosed by a matching pair. One mark on its own is always wrong.',
      trap: 'The commonest version of this error gives you the opening comma and silently drops the closing one — and the sentence still reads smoothly.',
      tip: 'Count the marks. If you can see an opening comma around a describing phrase, look for its partner before you accept the answer.',
      worked: {
        q: 'The novel ______ which took eleven years to write ______ was an immediate success.',
        steps: [
          'Test whether the middle phrase can be lifted out: “The novel was an immediate success.” Still works.',
          'So it is non-essential and must be enclosed on both sides.',
          'Now check the options: any choice with only one mark, or with two different marks, is out.',
          'That leaves a matching pair. Commas are the standard choice here.'
        ],
        answer: 'A matching pair of commas.'
      }
    },
    {
      title: 'Never split a subject from its verb',
      accent: 'olive',
      lead: 'A single comma between the subject and the verb is always wrong — no matter how long the subject is.',
      concepts: [
        { i: '🚫', t: 'The forbidden gap', d: 'One comma sitting between the subject and its verb. Always an error.' },
        { i: '📏', t: 'Long subjects', d: 'The longer the subject, the more you want to pause. That urge is the trap.' },
        { i: '👯', t: 'Unless it is a pair', d: 'Two commas enclosing a non-essential phrase are fine — that is a pair, not a split.' }
      ],
      examples: [
        { ok: true, t: 'The rock samples collected from the crater floor <span class="hl-ok">turned out</span> to be far older than predicted.', note: 'Nothing between the long subject and its verb.' },
        { ok: false, t: 'The rock samples collected from the crater floor<span class="hl-no">,</span> turned out to be far older.', note: 'A single comma splitting subject from verb.' }
      ],
      rule: 'Find the subject, find the verb. A lone comma may never sit between them.',
      trap: 'The subject is deliberately made long — six or eight words — so a pause feels natural right before the verb.',
      worked: {
        q: 'The students who had finished early ______ were allowed to leave.',
        steps: [
          'Identify the subject: “The students who had finished early” — all of it.',
          'Identify the verb: “were allowed”.',
          'The blank sits exactly between them.',
          'A single mark there would split subject from verb, so the answer must be nothing at all.'
        ],
        answer: 'No punctuation.'
      }
    }
  ],
  check: {
    stem: 'She had one ambition ______ to sail around the world.',
    options: [', (comma)', ': (colon)'], answer: 1,
    explain: 'Complete sentence on the left, explanation on the right — that is a colon.'
  }
},

/* ══ w06a · apostrophes and pronouns ═════════════════════════════ */
w06a: {
  hook: {
    icon: '🏷️',
    title: 'Two jobs, one mark',
    text: 'The apostrophe has exactly two jobs: it shows ownership, or it marks a missing letter. It has never in the history of English made anything plural. Meanwhile a pronoun has one job: to point at exactly one noun. Both of these look like easy marks — and both appear on every single test, because most students go on ear.'
  },
  modules: [
    {
      title: 'Its and it’s',
      accent: 'sky',
      lead: 'This one pair accounts for more apostrophe questions than everything else combined, and there is a two-second test that settles it every time.',
      concepts: [
        { i: '🔍', t: 'The expansion test', d: 'Read “it’s” as “it is”. If the sentence still makes sense, the apostrophe is right.' },
        { i: '🏠', t: 'Possessive its', d: 'No apostrophe. Like his and hers, which also take none.' },
        { i: '🚫', t: 'its’', d: 'This form does not exist in English. Any choice showing it can be eliminated instantly.' }
      ],
      examples: [
        { ok: true, t: 'The company revised <span class="hl-ok">its</span> safety policy.', note: 'Expansion test: “revised it is safety policy” — nonsense. So the possessive is right.' },
        { ok: false, t: 'The company revised <span class="hl-no">it’s</span> safety policy.', note: 'Expands to “it is”, which does not fit.' }
      ],
      rule: 'Expand it to “it is”. Fits → it’s. Does not fit → its.',
      trap: 'Possessives normally take an apostrophe, so “its” feels wrong. It is the exception, and pronouns as a group follow it: his, hers, ours, yours, theirs all take none.',
      worked: {
        q: '______ been raining since Tuesday.',
        steps: [
          'Try the expansion: “It is been raining since Tuesday.” That is not English.',
          'Try the other expansion: “It has been raining since Tuesday.” That works.',
          '“It’s” contracts both “it is” and “it has”, so the contraction is correct here.',
          'The possessive “its” would be meaningless — nothing is being owned.'
        ],
        answer: 'The answer is “It’s”.'
      }
    },
    {
      title: 'Singular and plural possession',
      accent: 'teal',
      lead: 'Get the number right first, then add the apostrophe. Doing it in the other order is what produces the errors.',
      concepts: [
        { i: '1️⃣', t: 'One owner', d: 'Add ’s — the inspector’s report.' },
        { i: '👥', t: 'Several owners', d: 'Make it plural first (inspectors), then add just the apostrophe: inspectors’.' },
        { i: '🚫', t: 'Never', d: 'No apostrophe ever makes a plural. “Two inspector’s” is always wrong.', f: 'plural first → then apostrophe' }
      ],
      examples: [
        { ok: true, t: 'The two <span class="hl-ok">inspectors’</span> reports contradicted each other.', note: 'Plural “inspectors”, then apostrophe after the s.' },
        { ok: false, t: 'The two <span class="hl-no">inspector’s</span> reports contradicted each other.', note: 'Singular possessive, but the sentence says there are two.' }
      ],
      rule: 'Decide how many owners there are, write that plural, then attach the apostrophe.',
      trap: 'A regular plural already ending in -s takes only the apostrophe — never an extra s. “Inspectors’s” is not a form.',
      worked: {
        q: 'The two ______ reports contradicted each other on almost every point.',
        steps: [
          'How many owners? “The two” tells you: more than one.',
          'Write the plural noun first: <strong>inspectors</strong>.',
          'It already ends in s, so add only the apostrophe: inspectors’.',
          'Check the alternatives — “inspector’s” is one owner, “inspectors” has no possession at all.'
        ],
        answer: 'The answer is “inspectors’”.'
      }
    },
    {
      title: 'A pronoun must point at one noun',
      accent: 'olive',
      lead: 'If a pronoun could refer to more than one thing in the sentence, it is wrong — even when a reader could work out the meaning.',
      concepts: [
        { i: '👆', t: 'The count test', d: 'Ask: how many nouns could this pronoun be pointing at? More than one means it fails.' },
        { i: '🤷', t: '“Guessable” is not enough', d: 'The exam does not care that context makes it recoverable. Ambiguous is wrong.' },
        { i: '📛', t: 'The fix', d: 'Usually the correct answer simply names the thing instead of using a pronoun.' }
      ],
      examples: [
        { ok: true, t: 'When Priya met Elena, <span class="hl-ok">Elena</span> had just returned from fieldwork.', note: 'Naming her removes all doubt.' },
        { ok: false, t: 'When Priya met Elena, <span class="hl-no">she</span> had just returned from fieldwork.', note: '“She” could be either woman. Ambiguous, therefore wrong.' }
      ],
      rule: 'Count the possible antecedents. Two or more means the pronoun cannot be used.',
      trap: 'When the correct answer just repeats a name, it looks clumsy and repetitive — so students reject it in favour of the smoother-sounding pronoun.',
      tip: 'Also match number: “each”, “every” and “neither” are singular, so they take a singular pronoun.',
      worked: {
        q: 'The editor sent the draft back to the author because ______ contained several factual errors.',
        steps: [
          'List the nouns available: the editor, the draft, the author.',
          'Try “it” — it could point at the draft, but grammatically it could reach for other things too.',
          'The safest answer removes the ambiguity entirely by naming the thing.',
          'Notice that the smoother-sounding option is the wrong one here.'
        ],
        answer: 'The answer is “the draft”.'
      }
    }
  ],
  check: {
    stem: 'The company revised ______ safety policy.',
    options: ['it’s', 'its'], answer: 1,
    explain: '“It is safety policy” makes no sense, so it is the possessive “its”.'
  }
},

/* ══ w07a · tenses and modifiers ═════════════════════════════════ */
w07a: {
  hook: {
    icon: '⏳',
    title: 'The passage sets the clock',
    text: 'Tense questions feel like taste — several options sound fine. They are not taste. Somewhere else in the passage there is always another verb or a date that fixes the timeline, and only one option fits it. And the second half of this lesson is one question you ask after every opening phrase: <em>who is doing this?</em>'
  },
  modules: [
    {
      title: 'Find the evidence that fixes the tense',
      accent: 'sky',
      lead: 'Never choose a tense by how it sounds. Look for the other verb, or the time marker, that decides it.',
      concepts: [
        { i: '🔎', t: 'Other verbs', d: 'If the surrounding verbs are past, the blank is almost certainly past too.' },
        { i: '📅', t: 'Time markers', d: 'in 1815, last year, by 1920, since, ever since, by the time — each one points at a tense.' },
        { i: '🔗', t: 'Consistency', d: 'A passage does not change tense without a reason you can point to.' }
      ],
      examples: [
        { ok: true, t: 'The treaty <span class="hl-ok">was signed</span> in 1815, ending two decades of conflict.', note: 'A fixed past date takes the simple past.' },
        { ok: false, t: 'The treaty <span class="hl-no">has been signed</span> in 1815.', note: 'Present perfect cannot sit with a finished date.' }
      ],
      rule: 'Every tense question has evidence elsewhere in the sentence. Find it before you choose.',
      trap: 'Two or three options will all sound acceptable in isolation. That is the design — the sentence is written so the ear cannot settle it.',
      worked: {
        q: 'The observatory, built in 1897, ______ continuously ever since.',
        steps: [
          'Look for the time marker: “ever since”.',
          '“Ever since” means from a past point running right up to now.',
          'Simple past would close the action off in the past — that contradicts “ever since”.',
          'A tense that connects past to present is needed: the present perfect.'
        ],
        answer: 'The answer is “has operated”.'
      }
    },
    {
      title: 'Past perfect: the earlier of two past events',
      accent: 'teal',
      lead: 'When two things both happened in the past, the one that happened first takes “had” plus the past participle.',
      concepts: [
        { i: '1️⃣', t: 'Earlier event', d: 'had + past participle — had waited, had finished, had gone.' },
        { i: '2️⃣', t: 'Later event', d: 'Simple past — arrived, saw, began.' },
        { i: '🚩', t: 'Signal phrases', d: '“By the time…”, “before…”, “after…” almost always set up this pairing.' }
      ],
      examples: [
        { ok: true, t: 'By the time the team arrived, the climbers <span class="hl-ok">had been waiting</span> for eleven hours.', note: 'The waiting came first, so it takes the past perfect.' },
        { ok: false, t: 'By the time the team arrived, the climbers <span class="hl-no">waited</span> for eleven hours.', note: 'Simple past loses the ordering that “by the time” requires.' }
      ],
      rule: 'Two past events, one before the other: the earlier one takes “had”.',
      trap: 'Do not use the past perfect when there is only one past event. “Last year I had visited Paris” is wrong — there is nothing for it to be earlier than.',
      worked: {
        q: 'She ______ in Berlin for six years before she moved to Lisbon.',
        steps: [
          'Identify the two past events: living in Berlin, and moving to Lisbon.',
          'Which happened first? The living in Berlin — “before she moved” tells you.',
          'The earlier of two past events takes had + past participle.',
          'Check: the later event, “moved”, correctly stays in the simple past.'
        ],
        answer: 'The answer is “had lived”.'
      }
    },
    {
      title: 'Who is doing this?',
      accent: 'olive',
      lead: 'When a sentence opens with a descriptive phrase, the very next noun must be the thing doing it. One question catches every one of these.',
      concepts: [
        { i: '❓', t: 'The question', d: 'After the opening phrase, ask: who or what is performing this action?' },
        { i: '👉', t: 'The answer’s position', d: 'That noun must appear immediately after the comma. Not later — immediately.' },
        { i: '🚫', t: 'Dead giveaways', d: 'If the option starts with “it was”, “there were” or an abstract noun, it is almost always the dangling one.' }
      ],
      examples: [
        { ok: true, t: 'Walking through the abandoned station, <span class="hl-ok">she</span> noticed the peeling posters.', note: 'She is walking. The noun after the comma is the walker.' },
        { ok: false, t: 'Walking through the abandoned station, <span class="hl-no">the peeling posters</span> caught her eye.', note: 'This says the posters were walking.' }
      ],
      rule: 'The noun immediately after the comma must be the one performing the opening action.',
      trap: 'The wrong versions are often smoother and more natural-sounding sentences. Meaning is recoverable, so nothing feels broken.',
      tip: 'Test it literally and absurdly: “Buried under decades of silt, archaeologists found the wreck” — the archaeologists were buried? Then it is wrong.',
      worked: {
        q: 'Exhausted after the climb, ______',
        steps: [
          'Ask the question: who was exhausted?',
          'A person or people were exhausted — not a tent, not “it”, not “there”.',
          'So the noun right after the comma has to be that person or people.',
          'Scan the options and eliminate every one that starts with an object, “it”, or “there”.'
        ],
        answer: '“…, they set up camp immediately.”'
      }
    }
  ],
  check: {
    stem: 'Exhausted after the climb, ______',
    options: ['the tent was a welcome sight.', 'they set up camp.'], answer: 1,
    explain: 'Who was exhausted? They were — so “they” must be the noun after the comma.'
  }
},

/* ══ w09a · transitions ══════════════════════════════════════════ */
w09a: {
  hook: {
    icon: '🧭',
    title: 'Name the turn before you take it',
    text: 'A transition is a road sign telling the reader which way the argument is about to turn. There are only five directions it can go. If you name the direction before you look at the answer choices, these questions become almost automatic — and if you look at the choices first, you will pick whichever word sounds most academic.'
  },
  modules: [
    {
      title: 'The five relationships',
      accent: 'sky',
      lead: 'Every transition question is one of five relationships. Learn the five and the whole topic collapses into a matching exercise.',
      concepts: [
        { i: '➡️', t: 'Same direction', d: 'moreover, in addition, furthermore, also — the second point agrees and adds.' },
        { i: '↔️', t: 'Opposite', d: 'however, by contrast, nevertheless, nonetheless — the second point pushes back.' },
        { i: '⚡', t: 'Cause and effect', d: 'therefore, consequently, as a result, accordingly — the second follows from the first.' },
        { i: '🔎', t: 'Example', d: 'for example, for instance — the second is one case of the first.' },
        { i: '🔢', t: 'Sequence', d: 'first, secondly, finally, meanwhile — ordering in time or in a list.' }
      ],
      examples: [
        { ok: true, t: 'Soil here is unusually rich. <span class="hl-ok">Consequently,</span> farms produce two harvests a year.', note: 'Rich soil causes the double harvest. Cause and effect.' },
        { ok: false, t: 'Soil here is unusually rich. <span class="hl-no">Nevertheless,</span> farms produce two harvests a year.', note: 'Signals contrast where the two ideas agree.' }
      ],
      rule: 'Decide which of the five relationships holds, then pick the word that names it.',
      trap: 'Several options will belong to the same family. Once you have named the relationship, the family narrows to one or two and the rest are instantly gone.',
      worked: {
        q: 'The new filtration system removed 98% in the laboratory. ______, its performance in the field was substantially poorer.',
        steps: [
          'Read the first sentence and summarise it in one word: <strong>good</strong>.',
          'Read the second and summarise it: <strong>poor</strong>.',
          'Good then poor — the argument turns. That is the opposite relationship.',
          'Now look at the choices and take the one from the opposite family.'
        ],
        answer: 'The answer is “However”.'
      }
    },
    {
      title: 'Cover the choices first',
      accent: 'teal',
      lead: 'This is a procedure, not a piece of advice. Physically cover the answers before reading the two sentences.',
      concepts: [
        { i: '🙈', t: 'Cover', d: 'Hand or finger over the four options.' },
        { i: '🗣️', t: 'Say it aloud', d: 'State the relationship in your own words: “this one disagrees with that one”.' },
        { i: '👀', t: 'Then uncover', d: 'Match your own words to a choice. Do not reconsider.' }
      ],
      examples: [
        { ok: true, t: 'Predict first, then match. <span class="hl-ok">One option survives.</span>', note: 'You are choosing against your own prediction, not against four plausible words.' },
        { ok: false, t: 'Read the options first, then decide. <span class="hl-no">Three sound reasonable.</span>', note: 'Each option makes its own relationship seem plausible in hindsight.' }
      ],
      rule: 'Predict, then match. Never read the options before you have named the relationship.',
      trap: 'Reading the choices first plants the relationship in your mind. Every transition sounds like it could work once you have read it in place.',
      tip: 'If you cannot name the relationship at all, the problem is that you have not understood one of the two sentences. Re-read them before touching the options.',
      worked: {
        q: 'Many early mapmakers filled unknown regions with illustrations. ______, the 1502 Cantino chart shows sea creatures across the southern ocean.',
        steps: [
          'Cover the choices completely.',
          'Sentence one is a general statement about mapmakers as a group.',
          'Sentence two is one specific chart. General, then one case of it.',
          'That is exemplification — say “for example” before you uncover anything.'
        ],
        answer: 'The answer is “For instance”.'
      }
    },
    {
      title: 'The two most-tested traps',
      accent: 'olive',
      lead: '“However” and “therefore” account for most wrong answers on this topic, because they sound authoritative in almost any sentence.',
      concepts: [
        { i: '🚫', t: '“However” misuse', d: 'Used where the two ideas actually agree. Check for real contrast.' },
        { i: '🚫', t: '“Therefore” misuse', d: 'Used where the second sentence is an example, not a consequence.' },
        { i: '🎓', t: 'Sophistication ≠ correct', d: 'The fancier-sounding word is not more likely to be right.' }
      ],
      examples: [
        { ok: true, t: 'Rainfall declined for a decade. <span class="hl-ok">Nonetheless,</span> the reservoir was never at risk.', note: 'The expected consequence did not follow — that is concession.' },
        { ok: false, t: 'Rainfall declined for a decade. <span class="hl-no">Therefore,</span> the reservoir was never at risk.', note: 'Claims declining rainfall caused the reservoir to be safe. It did not.' }
      ],
      rule: 'Before accepting “therefore”, check that the second sentence really is caused by the first. Before accepting “however”, check that the two really do disagree.',
      trap: 'Concession — “this happened, but the expected result did not follow” — is the relationship students miss most. It looks like contrast but sits between two facts that are both true.',
      worked: {
        q: 'The survey covered only urban households. ______, its conclusions cannot be applied to rural areas.',
        steps: [
          'Sentence one states a limitation of the survey.',
          'Sentence two states what follows from that limitation.',
          'Ask directly: does the first cause the second? Yes — the narrow sample is why the conclusions do not generalise.',
          'That is cause and effect, so “however” and “for instance” are both eliminated.'
        ],
        answer: 'The answer is “Therefore”.'
      }
    }
  ],
  check: {
    stem: 'The soil is very rich. ______, farms there get two harvests a year.',
    options: ['However', 'Consequently'], answer: 1,
    explain: 'Rich soil causes the double harvest — cause and effect, not contrast.'
  }
},

/* ══ w10a · purpose and synthesis ════════════════════════════════ */
w10a: {
  hook: {
    icon: '🎯',
    title: 'True is not the same as right',
    text: 'On these questions almost every wrong answer is a completely true statement, pulled straight from the notes. That is what makes them hard: there is nothing to catch, no error to spot. The only thing separating the right answer from three true ones is whether it does the specific job the prompt asked for — and the prompt always states that job in its final sentence.'
  },
  modules: [
    {
      title: 'The goal is in the last sentence',
      accent: 'sky',
      lead: 'Synthesis prompts end with a sentence beginning “The student wants to…”. That sentence decides the answer, and it should be the first thing you read.',
      concepts: [
        { i: '📍', t: 'Where it is', d: 'Always the final sentence of the prompt, usually in italics.' },
        { i: '✏️', t: 'Underline it', d: 'Physically underline the goal word — emphasise, introduce, compare, explain.' },
        { i: '🔁', t: 'Read notes second', d: 'Bullets before goal means you will read them without knowing what you are looking for.' }
      ],
      examples: [
        { ok: true, t: 'Goal: emphasise <span class="hl-y">complexity</span> → “…contains at least <span class="hl-ok">30 bronze gears</span>.”', note: 'Gear count is direct evidence of complexity.' },
        { ok: false, t: 'Goal: emphasise complexity → “…was recovered from a shipwreck in <span class="hl-no">1901</span>.”', note: 'True, from the notes, and completely irrelevant to complexity.' }
      ],
      rule: 'Read the goal first, underline its key word, then test each option against that word alone.',
      trap: 'The notes are interesting, so students read them top to bottom and form an opinion about what matters — before finding out what the question wants.',
      worked: {
        q: 'Notes about the Antikythera mechanism. Goal: emphasise its complexity.',
        steps: [
          'Find and underline the goal word: <strong>complexity</strong>.',
          'Test each bullet against it. “Recovered from a shipwreck in 1901” — that is history, not complexity.',
          '“Dates from roughly 100 BCE” — that is age, not complexity.',
          '“Contains at least 30 bronze gears” — a count of moving parts. That is complexity, and it is the only one.'
        ],
        answer: 'The option built around the 30 bronze gears.'
      }
    },
    {
      title: 'Some goals need two bullets',
      accent: 'teal',
      lead: 'When the goal involves a contrast, a gap or an unlikelihood, a single fact cannot do the job. The answer must combine two.',
      concepts: [
        { i: '↔️', t: 'Contrast goals', d: '“Despite”, “gap between”, “how unlikely” — these always need two facts set against each other.' },
        { i: '🧩', t: 'Combining', d: 'The right answer usually joins them with a comma or a “despite/although” opener.' },
        { i: '✂️', t: 'Single-fact answers', d: 'When the goal is a contrast, any option containing only one fact is automatically out.' }
      ],
      examples: [
        { ok: true, t: '<span class="hl-ok">With no prior survival training</span>, Ada Blackjack <span class="hl-ok">survived alone for two years</span>.', note: 'Two facts, set against each other. The unlikelihood is visible.' },
        { ok: false, t: 'Ada Blackjack <span class="hl-no">survived alone for two years</span>.', note: 'True, but nothing here makes it sound unlikely.' }
      ],
      rule: 'If the goal is about a contrast or a gap, count the facts in each option. Fewer than two cannot do it.',
      trap: 'The single-fact options are shorter and cleaner, so they read better. The correct answer often looks clumsier.',
      worked: {
        q: 'Notes: the tunnel took 14 years; original estimates allowed 4 years. Goal: emphasise the overrun.',
        steps: [
          'Underline the goal: <strong>the overrun</strong>.',
          'An overrun is a comparison — how long it took against how long it should have taken.',
          'So one number alone cannot show it. “Took 14 years” on its own is just a fact.',
          'The answer must carry both figures in one sentence.'
        ],
        answer: '“Estimated at 4 years, the tunnel took 14 to complete.”'
      }
    },
    {
      title: 'Purpose asks what a sentence DOES',
      accent: 'olive',
      lead: 'A purpose question is not asking what the sentence says. It is asking what job it performs in the paragraph.',
      concepts: [
        { i: '🔨', t: 'Common jobs', d: 'introduces, illustrates, qualifies, contrasts, explains, concedes, sets up an exception.' },
        { i: '🗣️', t: 'The test', d: 'Say “this sentence is there in order to…” and finish the phrase in your own words.' },
        { i: '🪞', t: 'The trap answer', d: 'An option that accurately paraphrases the sentence but never names a job.' }
      ],
      examples: [
        { ok: true, t: '“…they support a quarter of all marine species.” → <span class="hl-ok">highlights a disproportion</span>', note: 'Names the job: setting a tiny area against a huge share.' },
        { ok: false, t: '“…they support a quarter of all marine species.” → <span class="hl-no">explains why reefs occupy little of the floor</span>', note: 'The sentence gives no cause. Wrong job entirely.' }
      ],
      rule: 'Answer with a verb of function, not a summary of content.',
      trap: 'The paraphrase option is comforting because you can verify it against the text word by word. That verification tells you nothing about purpose.',
      tip: 'Look at what came immediately before. Purpose is nearly always defined by the relationship to the previous sentence.',
      worked: {
        q: '“Coral reefs occupy less than one per cent of the ocean floor. They support around a quarter of all marine species.” Purpose of the second sentence?',
        steps: [
          'What does sentence one establish? A very small area.',
          'What does sentence two add? A very large share of species.',
          'Ask what job that does: it is not explaining, and nothing is being corrected.',
          'It sets a small number against a large one — the job is to show the mismatch.'
        ],
        answer: 'To highlight the disproportion between the reefs’ size and their importance.'
      }
    }
  ],
  check: {
    stem: 'Goal: stress how unlikely her survival was. Which option does that job?',
    options: ['She took part in a 1921 expedition.', 'With no training, she survived alone for two years.'], answer: 1,
    explain: 'Unlikelihood needs two facts set against each other — the lack of training and the length of survival.'
  }
}

};
