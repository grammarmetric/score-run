/* w03a — Where one sentence ends. Generated from tools/content-*.mjs */
window.LESSON = {
 "id": "w03a",
 "week": 3,
 "session": "A",
 "lead": "cyan",
 "domain": "Reading & writing",
 "title": "Where one sentence ends",
 "sub": "The highest-yield grammar topic on the exam. Knowing where a sentence stops decides a large share of every conventions set.",
 "stampSet": "rw",
 "present": {
  "hook": {
   "icon": "🚧",
   "title": "Where the road ends",
   "text": "Every sentence is a stretch of road with a definite end. Punctuation is the sign that tells you the road has ended and a new one begins. Put the wrong sign up and traffic crashes. This is the single highest-scoring topic in the whole reading and writing section — more questions turn on it than on any other rule."
  },
  "modules": [
   {
    "title": "The clause test",
    "accent": "sky",
    "lead": "Before any punctuation decision, you have to know whether each side can stand alone. There is exactly one test, and it takes two seconds.",
    "concepts": [
     {
      "i": "🧍",
      "t": "Subject",
      "d": "Who or what is doing something? If there is no answer, it is not a sentence."
     },
     {
      "i": "🏃",
      "t": "Finite verb",
      "d": "A real conjugated verb, not “running” or “to run” on their own."
     },
     {
      "i": "✅",
      "t": "Stands alone",
      "d": "Could you say it by itself and be understood? Then it is independent.",
      "f": "Subject + verb + stands alone = sentence"
     }
    ],
    "examples": [
     {
      "ok": true,
      "t": "<span class=\"hl-ok\">The runner crossed the line.</span>",
      "note": "Subject “runner”, verb “crossed”, stands alone. A complete sentence."
     },
     {
      "ok": false,
      "t": "<span class=\"hl-no\">Running through the field behind the old barn.</span>",
      "note": "Long, but no subject and no finite verb. A fragment."
     }
    ],
    "rule": "Length has nothing to do with it. A ten-word string can be a fragment and a three-word string can be a complete sentence.",
    "trap": "Words like “although”, “because”, “while”, “since” and “when” at the front make an otherwise complete sentence dependent. “She won” is a sentence; “Although she won” is not.",
    "worked": {
     "q": "Is “Because the samples had been stored incorrectly” a complete sentence?",
     "steps": [
      "Subject? Yes — “the samples”.",
      "Finite verb? Yes — “had been stored”.",
      "Can it stand alone? Say it out loud. It leaves you waiting for the rest — because of that, <em>what</em>?",
      "The word “because” is what makes it dependent. Remove it and “The samples had been stored incorrectly” is complete."
     ],
     "answer": "No — it is a dependent clause, and it needs a main clause attached."
    }
   },
   {
    "title": "The four legal joins",
    "accent": "teal",
    "lead": "When both sides are complete sentences, you have exactly four ways to join them. Nothing else is allowed.",
    "concepts": [
     {
      "i": ".",
      "t": "A full stop",
      "d": "Always legal. Two separate sentences."
     },
     {
      "i": ";",
      "t": "A semicolon",
      "d": "Legal when the two ideas are closely related."
     },
     {
      "i": ",+",
      "t": "Comma + FANBOYS",
      "d": "for, and, nor, but, or, yet, so — the comma comes BEFORE the conjunction."
     },
     {
      "i": "↘️",
      "t": "Make one dependent",
      "d": "Add because, although, while, since to one side."
     }
    ],
    "examples": [
     {
      "ok": true,
      "t": "The storm damaged power lines<span class=\"hl-ok\">, and</span> thousands of homes lost electricity.",
      "note": "Comma plus a FANBOYS conjunction. Legal."
     },
     {
      "ok": false,
      "t": "The storm damaged power lines<span class=\"hl-no\">,</span> thousands of homes lost electricity.",
      "note": "A comma splice — the most commonly tested error on the exam."
     }
    ],
    "rule": "Two complete sentences may never be joined by a comma alone. That error has a name — a comma splice — and it appears on every test.",
    "trap": "A comma splice sounds completely natural when read aloud, because a comma is where you would pause. You cannot hear this error; you have to test for it.",
    "worked": {
     "q": "The results were surprising ______ they contradicted three decades of accepted theory.",
     "steps": [
      "Test the left side: “The results were surprising.” Subject, verb, stands alone. Complete.",
      "Test the right side: “They contradicted three decades of accepted theory.” Also complete.",
      "Two complete sentences, so a bare comma is illegal — that would be a splice.",
      "Legal options here: a full stop, a semicolon, or “, and”. The two ideas are closely linked, so the semicolon fits best."
     ],
     "answer": "The answer is a semicolon."
    }
   },
   {
    "title": "“However” is not a conjunction",
    "accent": "olive",
    "lead": "This is the trap the exam returns to most often. Words that feel like joining words are, grammatically, just adverbs — and they cannot hold two sentences together.",
    "concepts": [
     {
      "i": "🚫",
      "t": "Not conjunctions",
      "d": "however, therefore, moreover, nevertheless, consequently, furthermore, thus, instead."
     },
     {
      "i": "✅",
      "t": "Real conjunctions",
      "d": "Only the seven FANBOYS words can join two sentences with a comma."
     },
     {
      "i": "🔧",
      "t": "How to use them",
      "d": "Semicolon before, comma after: “…was rejected; therefore, the architect resubmitted.”"
     }
    ],
    "examples": [
     {
      "ok": true,
      "t": "The design was rejected twice<span class=\"hl-ok\">; therefore,</span> the architect submitted a third version.",
      "note": "Semicolon before, comma after. Correct."
     },
     {
      "ok": false,
      "t": "The design was rejected twice<span class=\"hl-no\">, therefore,</span> the architect submitted a third version.",
      "note": "Still a comma splice — “therefore” cannot do the joining."
     }
    ],
    "rule": "If you can replace the word with “but” or “and” and the punctuation still needs changing, it was never a conjunction.",
    "trap": "These words look formal and academic, so students trust them more. The exam knows that.",
    "tip": "Quick check: a real conjunction cannot be moved. You can say “The results, however, were poor” — moving it proves it is an adverb. You could never say “The results, but, were poor”.",
    "worked": {
     "q": "The bridge opened in 1937 ______ it remains one of the most photographed structures in the country.",
     "steps": [
      "Both sides are complete sentences — check them individually first.",
      "So the only legal joins are: full stop, semicolon, or comma + FANBOYS.",
      "A bare comma would be a splice. “, however” would also be a splice, because “however” is an adverb.",
      "The two ideas are closely related and there is no contrast word offered, so the semicolon is right."
     ],
     "answer": "The answer is a semicolon."
    }
   }
  ],
  "check": {
   "stem": "The bridge opened in 1937 ______ it is still in use.",
   "options": [
    ", (comma alone)",
    "; (semicolon)"
   ],
   "answer": 1,
   "explain": "Both sides stand alone, so a semicolon is legal and a bare comma is a splice."
  }
 },
 "forensics": {
  "intro": "One rule underneath all of this: is each side of the punctuation a complete sentence? Label each wrong option with what it actually does.",
  "watch": [
   "Two complete sentences may never be joined by a comma alone",
   "\"However\", \"therefore\" and \"moreover\" are not conjunctions — they cannot join two sentences with a comma",
   "A semicolon needs a complete sentence on both sides"
  ],
  "items": [
   {
    "passage": "The storm damaged power lines across the region ______ thousands of homes were left without electricity for three days.",
    "stem": "Which choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
     {
      "t": ", ",
      "trap": "contradicts",
      "why": "A comma splice. Both sides are complete sentences, and a comma alone cannot join them."
     },
     {
      "t": ", and ",
      "correct": true
     },
     {
      "t": ", however, ",
      "trap": "contradicts",
      "why": "\"However\" is an adverb, not a conjunction — this is still a comma splice, and the logic is not contrastive anyway."
     },
     {
      "t": " ",
      "trap": "contradicts",
      "why": "A run-on with no punctuation at all."
     }
    ],
    "explain": "Both halves stand alone as sentences. The four legal joins are: a full stop, a semicolon, a comma plus a FANBOYS conjunction, or making one side dependent. <strong>\", and\"</strong> is the one offered here."
   },
   {
    "passage": "Although the museum had promised to return the artefacts by the end of the year ______ negotiations stalled over the terms of transport.",
    "stem": "Which choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
     {
      "t": ", ",
      "correct": true
     },
     {
      "t": "; ",
      "trap": "contradicts",
      "why": "A semicolon needs a complete sentence on both sides. \"Although the museum had promised…\" is dependent — it cannot stand alone."
     },
     {
      "t": ". ",
      "trap": "contradicts",
      "why": "This leaves the \"Although\" clause as a fragment."
     },
     {
      "t": " and ",
      "trap": "contradicts",
      "why": "Joins a dependent clause to an independent one with a conjunction that expects two equals."
     }
    ],
    "explain": "\"Although\" makes the first half dependent. A dependent clause opening a sentence is followed by a plain comma: <strong>\", \"</strong>."
   },
   {
    "passage": "The results were surprising ______ they contradicted three decades of accepted theory.",
    "stem": "Which choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
     {
      "t": ", ",
      "trap": "contradicts",
      "why": "Comma splice — both sides are complete sentences."
     },
     {
      "t": "; ",
      "correct": true
     },
     {
      "t": ", moreover ",
      "trap": "contradicts",
      "why": "Still a splice, and \"moreover\" would need a semicolon before it and a comma after it."
     },
     {
      "t": " which ",
      "trap": "halfright",
      "why": "\"Which\" would need to refer to a noun, and here it would point vaguely at the whole first clause."
     }
    ],
    "explain": "Two complete sentences, closely related. A semicolon is exactly the right join: <strong>\"; \"</strong>."
   }
  ]
 },
 "speed": {
  "seconds": 71,
  "items": [
   {
    "stem": "The bridge opened in 1937 ______ it remains one of the most photographed structures in the country.",
    "options": [
     ", ",
     "; ",
     ", however ",
     " "
    ],
    "answer": 1,
    "skill": "Run-ons",
    "explain": "Two complete sentences — a semicolon joins them legally; a comma alone does not."
   },
   {
    "stem": "Because the samples had been stored incorrectly ______ the team had to repeat the entire experiment.",
    "options": [
     "; ",
     ", ",
     ". ",
     " and "
    ],
    "answer": 1,
    "skill": "Dependent clauses",
    "explain": "\"Because…\" is dependent, so a plain comma follows it."
   },
   {
    "stem": "She studied architecture for five years ______ she never practised professionally.",
    "options": [
     ", but ",
     ", ",
     "; however ",
     " therefore "
    ],
    "answer": 0,
    "skill": "Run-ons",
    "explain": "Comma plus a FANBOYS conjunction. The relationship is contrastive, so \"but\"."
   },
   {
    "stem": "The path was steep and uneven ______ making the final ascent slower than expected.",
    "options": [
     "; ",
     ". ",
     ", ",
     " and it was "
    ],
    "answer": 2,
    "skill": "Fragments",
    "explain": "\"Making the final ascent slower\" is not a sentence, so it attaches with a comma."
   },
   {
    "stem": "The design was rejected twice ______ therefore, the architect submitted a third version.",
    "options": [
     ", ",
     "; ",
     " ",
     ", and"
    ],
    "answer": 1,
    "skill": "Conjunctive adverbs",
    "explain": "\"Therefore\" is an adverb, not a conjunction: semicolon before, comma after."
   },
   {
    "stem": "Which of the following is a complete sentence?",
    "options": [
     "Running through the field behind the old barn.",
     "The runner crossed the line.",
     "Although she had trained for months.",
     "Because the weather turned."
    ],
    "answer": 1,
    "skill": "The clause test",
    "explain": "Only option B has a subject and a finite verb and can stand alone."
   },
   {
    "stem": "The report was delayed ______ the committee had requested additional data.",
    "options": [
     ", ",
     "; ",
     ", because ",
     " however "
    ],
    "answer": 2,
    "skill": "Dependent clauses",
    "explain": "\"Because\" makes the second half dependent, which fixes the splice."
   },
   {
    "stem": "Volcanic ash reached the upper atmosphere ______ temperatures across the hemisphere fell measurably that summer.",
    "options": [
     ", ",
     " ",
     "; ",
     ", so"
    ],
    "answer": 3,
    "skill": "Run-ons",
    "explain": "Comma plus \"so\" — a FANBOYS conjunction expressing consequence. A bare comma or no punctuation both leave a run-on."
   }
  ]
 },
 "sim": {
  "seconds": 71,
  "items": [
   {
    "stem": "The library closed for renovation in March ______ it reopened the following January.",
    "options": [
     ", ",
     "; ",
     " ",
     ", however "
    ],
    "answer": 1,
    "skill": "Run-ons",
    "explain": "Two complete sentences joined by a semicolon."
   },
   {
    "stem": "While the engine was being rebuilt ______ the car sat untouched in the garage.",
    "options": [
     "; ",
     ". ",
     ", ",
     " and "
    ],
    "answer": 2,
    "skill": "Dependent clauses",
    "explain": "\"While…\" is dependent; a comma follows it."
   },
   {
    "stem": "The theory was elegant ______ it could not be tested with the equipment available.",
    "options": [
     ", ",
     ", but ",
     "; moreover ",
     " "
    ],
    "answer": 1,
    "skill": "Run-ons",
    "explain": "Contrast between two complete sentences: comma plus \"but\"."
   },
   {
    "stem": "Which of the following is a fragment?",
    "options": [
     "The rain stopped.",
     "She waited.",
     "Having waited for over an hour in the cold.",
     "They left early."
    ],
    "answer": 2,
    "skill": "Fragments",
    "explain": "\"Having waited…\" has no finite main verb and cannot stand alone."
   },
   {
    "stem": "The trial produced no clear result ______ nevertheless, the drug was approved for limited use.",
    "options": [
     ", ",
     "; ",
     " ",
     " and"
    ],
    "answer": 1,
    "skill": "Conjunctive adverbs",
    "explain": "\"Nevertheless\" is an adverb: semicolon before it, comma after it."
   }
  ],
  "teachback": [
   "State the clause test in your own words, in one sentence.",
   "List the four legal ways to join two complete sentences.",
   "Why is \"however\" not the same as \"but\"?"
  ]
 }
};
