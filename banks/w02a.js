/* w02a — Making the verb match. Generated from tools/content-*.mjs */
window.LESSON = {
 "id": "w02a",
 "week": 2,
 "session": "A",
 "lead": "cyan",
 "domain": "Reading & writing",
 "title": "Making the verb match",
 "sub": "Subject-verb agreement is the direct payoff of last week. It is also the densest chapter in the book, and worth the whole session.",
 "stampSet": "rw",
 "present": {
  "hook": {
   "icon": "⚖️",
   "title": "The scales must balance",
   "text": "Subject and verb are two sides of a scale: one thing takes one kind of verb, many things take another. It sounds trivial — and it is, in a four-word sentence. The SAT never gives you a four-word sentence. It buries fifteen words between the two sides of the scale and waits to see if you can still tell what is being weighed."
  },
  "modules": [
   {
    "title": "Collective nouns are one thing",
    "accent": "sky",
    "lead": "A word naming a group of people is treated as a single unit in American English — which is the English the SAT uses.",
    "concepts": [
     {
      "i": "👥",
      "t": "The group words",
      "d": "team, jury, committee, family, staff, audience, orchestra, company, government."
     },
     {
      "i": "🇺🇸",
      "t": "American convention",
      "d": "British English often treats these as plural. The SAT does not. Singular, always."
     },
     {
      "i": "🧱",
      "t": "Why",
      "d": "The group acts as one body making one decision, so it takes one verb."
     }
    ],
    "examples": [
     {
      "ok": true,
      "t": "The <span class=\"hl-s\">jury</span> <span class=\"hl-ok\">was</span> unable to reach a verdict.",
      "note": "One jury, one verb."
     },
     {
      "ok": false,
      "t": "The jury <span class=\"hl-no\">were</span> unable to reach a verdict.",
      "note": "Correct in British English, marked wrong on the SAT."
     }
    ],
    "rule": "Group nouns take singular verbs and singular pronouns: “the committee announced <em>its</em> decision”.",
    "trap": "A long interrupting phrase is usually dropped in — “the jury, after deliberating for nine hours across two days, ______” — so that by the time you reach the blank you have lost the subject.",
    "worked": {
     "q": "The jury, after deliberating for nine hours across two days, ______ unable to reach a unanimous verdict.",
     "steps": [
      "Everything between the commas is an interrupter. Cross it out.",
      "What remains: “The jury ______ unable to reach a verdict.”",
      "“Jury” is a group acting as one unit, so it is singular.",
      "The sentence is set in the past, so use the past singular."
     ],
     "answer": "The answer is “was”."
    }
   },
   {
    "title": "“There” is never the subject",
    "accent": "teal",
    "lead": "In sentences beginning “there is” or “there are”, the word “there” is a placeholder. The real subject comes after the verb.",
    "concepts": [
     {
      "i": "👉",
      "t": "Look right",
      "d": "The subject is whatever noun follows the verb. Match the verb to that."
     },
     {
      "i": "🔁",
      "t": "Rewrite it",
      "d": "Flip the sentence: “There are several reasons” → “Several reasons are”. Now it is obvious."
     },
     {
      "i": "🎭",
      "t": "Other inversions",
      "d": "Also happens after “here”, and after an opening phrase: “Among the documents was a logbook.”"
     }
    ],
    "examples": [
     {
      "ok": true,
      "t": "There <span class=\"hl-ok\">are</span> <span class=\"hl-s\">several reasons</span> the design was abandoned.",
      "note": "Flip it: “Several reasons are…” — plural."
     },
     {
      "ok": false,
      "t": "There <span class=\"hl-no\">is</span> several reasons the design was abandoned.",
      "note": "Matched to “there”, which is not a subject at all."
     }
    ],
    "rule": "In an inverted sentence, find the noun after the verb and match to that.",
    "trap": "“There is” sounds natural in speech before almost anything, so your ear gives you no warning at all here.",
    "tip": "Careful with “number”: <em>the</em> number of X <strong>is</strong> (singular), but <em>a</em> number of X <strong>are</strong> (plural).",
    "worked": {
     "q": "Among the documents recovered from the wreck ______ a captain’s logbook dating from 1802.",
     "steps": [
      "The sentence opens with a phrase, not a subject — “Among the documents recovered from the wreck”.",
      "That whole phrase is prepositional. Cross it out.",
      "What is left after the blank: “a captain’s logbook”. That is the subject, and it follows the verb.",
      "One logbook, so the verb is singular."
     ],
     "answer": "The answer is “was”."
    }
   },
   {
    "title": "And, or, nor",
    "accent": "olive",
    "lead": "Two subjects joined by “and” are plural. Joined by “or” or “nor”, the verb matches whichever subject is nearer to it.",
    "concepts": [
     {
      "i": "➕",
      "t": "and → plural",
      "d": "The cat and the dog play. Two things, plural verb, no exceptions."
     },
     {
      "i": "🎯",
      "t": "or / nor → nearest",
      "d": "The verb agrees with whichever subject sits closest to it."
     },
     {
      "i": "🔀",
      "t": "Order matters",
      "d": "“Neither the students nor the teacher is” but “Neither the teacher nor the students are”."
     }
    ],
    "examples": [
     {
      "ok": true,
      "t": "Either the manager or the two <span class=\"hl-s\">assistants</span> <span class=\"hl-ok\">are</span> responsible.",
      "note": "“Assistants” is nearer the verb, so plural wins."
     },
     {
      "ok": false,
      "t": "Either the manager or the two assistants <span class=\"hl-no\">is</span> responsible.",
      "note": "Matched to the further subject instead of the nearer one."
     }
    ],
    "rule": "With either…or and neither…nor, the verb agrees with the subject closest to it.",
    "trap": "The test writers flip the order between two otherwise identical questions, so the same-looking sentence has opposite answers.",
    "worked": {
     "q": "Neither the director nor the producers ______ willing to comment.",
     "steps": [
      "Spot the structure: “neither … nor”, so the nearest-subject rule applies.",
      "Identify the two subjects: “the director” (singular) and “the producers” (plural).",
      "Which is nearer the verb? “The producers” — it sits immediately before the blank.",
      "So the verb is plural. Reverse the two nouns and the answer would flip to “is”."
     ],
     "answer": "The answer is “were” (or “are”)."
    }
   }
  ],
  "check": {
   "stem": "Each of the students ______ a different answer.",
   "options": [
    "give",
    "gives"
   ],
   "answer": 1,
   "explain": "“Each” is singular, however plural “students” looks. It sits inside a prepositional phrase."
  }
 },
 "forensics": {
  "intro": "Same discipline as last week, harder cases. Label why each wrong option fails before you decide which one survives.",
  "watch": [
   "Collective nouns — team, committee, jury — are singular in American English",
   "\"There is\" / \"there are\" takes its number from what comes after it",
   "Two subjects joined by \"and\" are plural; joined by \"or\", the verb matches the nearer one"
  ],
  "items": [
   {
    "passage": "The <em>jury</em>, after deliberating for nine hours across two days, ______ unable to reach a unanimous verdict.",
    "stem": "Which choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
     {
      "t": "were",
      "trap": "contradicts",
      "why": "In American English — which the SAT uses — a collective noun like \"jury\" is treated as singular."
     },
     {
      "t": "was",
      "correct": true
     },
     {
      "t": "have been",
      "trap": "contradicts",
      "why": "Plural. The long interrupting phrase is there to make you lose the subject."
     },
     {
      "t": "are",
      "trap": "contradicts",
      "why": "Plural, and also shifts to the present with no support in the sentence."
     }
    ],
    "explain": "Strip the interrupter: \"The jury ______ unable\". Collective noun, singular verb: <strong>was</strong>."
   },
   {
    "passage": "There ______ several reasons why the original design was abandoned before construction began.",
    "stem": "Which choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
     {
      "t": "is",
      "trap": "contradicts",
      "why": "In a \"there ___\" sentence the verb matches whatever follows it. What follows is \"several reasons\" — plural."
     },
     {
      "t": "was",
      "trap": "contradicts",
      "why": "Singular, and the tense would also need to match \"was abandoned\", which it can — but the number is still wrong."
     },
     {
      "t": "are",
      "correct": true
     },
     {
      "t": "has been",
      "trap": "contradicts",
      "why": "Singular again. \"There\" is never the subject; it is a placeholder."
     }
    ],
    "explain": "\"There\" is a placeholder, not a subject. The real subject is \"several reasons\", so the verb is plural: <strong>are</strong>."
   },
   {
    "passage": "Either the manager or the two assistants ______ responsible for locking the building each evening.",
    "stem": "Which choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
     {
      "t": "is",
      "trap": "narrow",
      "why": "This matches \"the manager\", but with \"either … or\" the verb matches whichever subject is nearer — here, \"assistants\"."
     },
     {
      "t": "are",
      "correct": true
     },
     {
      "t": "has been",
      "trap": "narrow",
      "why": "Singular, and drawn from the further subject rather than the nearer one."
     },
     {
      "t": "was",
      "trap": "contradicts",
      "why": "Singular and past; neither is supported."
     }
    ],
    "explain": "With \"either … or\" and \"neither … nor\", the verb agrees with the subject closest to it. \"The two assistants\" is nearer, so: <strong>are</strong>."
   }
  ]
 },
 "speed": {
  "seconds": 71,
  "items": [
   {
    "stem": "The team ______ practising every morning before the tournament.",
    "options": [
     "are",
     "is",
     "were",
     "have"
    ],
    "answer": 1,
    "skill": "Collective nouns",
    "explain": "\"Team\" is singular in American English."
   },
   {
    "stem": "There ______ a surprising number of errors in the final draft.",
    "options": [
     "were",
     "are",
     "is",
     "have been"
    ],
    "answer": 2,
    "skill": "There is / there are",
    "explain": "The subject is \"number\", which is singular. (\"A number of things are\" is plural; \"the number is\" singular.)"
   },
   {
    "stem": "Neither the director nor the producers ______ willing to comment.",
    "options": [
     "was",
     "is",
     "were",
     "has been"
    ],
    "answer": 2,
    "skill": "Either / neither",
    "explain": "The nearer subject is \"producers\" — plural."
   },
   {
    "stem": "Mathematics ______ often described as the language of the sciences.",
    "options": [
     "are",
     "is",
     "were",
     "have been"
    ],
    "answer": 1,
    "skill": "Tricky singulars",
    "explain": "Subjects ending in -ics — mathematics, physics, economics — are singular."
   },
   {
    "stem": "The committee and its chair ______ scheduled to meet on Thursday.",
    "options": [
     "is",
     "was",
     "has been",
     "are"
    ],
    "answer": 3,
    "skill": "Compound subjects",
    "explain": "Two subjects joined by \"and\" make a plural."
   },
   {
    "stem": "Every one of the applicants ______ submitted the required documents.",
    "options": [
     "have",
     "has",
     "were",
     "are"
    ],
    "answer": 1,
    "skill": "Each / every",
    "explain": "\"Every one\" is singular; \"of the applicants\" is a prepositional phrase."
   },
   {
    "stem": "The data collected in the first round ______ inconsistent with the later findings.",
    "options": [
     "was",
     "is",
     "were",
     "has been"
    ],
    "answer": 2,
    "skill": "Tricky plurals",
    "explain": "In formal and scientific writing \"data\" is plural. The SAT follows that convention."
   },
   {
    "stem": "Ten kilometres ______ a long way to walk in that heat.",
    "options": [
     "are",
     "is",
     "were",
     "have been"
    ],
    "answer": 1,
    "skill": "Tricky singulars",
    "explain": "A measurement treated as one single amount takes a singular verb."
   }
  ]
 },
 "sim": {
  "seconds": 71,
  "items": [
   {
    "stem": "The orchestra ______ rehearsing the new symphony all week.",
    "options": [
     "are",
     "have been",
     "has been",
     "were"
    ],
    "answer": 2,
    "skill": "Collective nouns",
    "explain": "\"Orchestra\" is a collective noun and singular here."
   },
   {
    "stem": "There ______ two explanations that fit the evidence equally well.",
    "options": [
     "is",
     "are",
     "has been",
     "was"
    ],
    "answer": 1,
    "skill": "There is / there are",
    "explain": "The subject is \"two explanations\" — plural."
   },
   {
    "stem": "Neither the students nor the teacher ______ aware of the change.",
    "options": [
     "were",
     "are",
     "was",
     "have been"
    ],
    "answer": 2,
    "skill": "Either / neither",
    "explain": "The nearer subject is \"the teacher\" — singular."
   },
   {
    "stem": "Economics ______ a required course for all first-year students.",
    "options": [
     "are",
     "is",
     "were",
     "have been"
    ],
    "answer": 1,
    "skill": "Tricky singulars",
    "explain": "A subject ending in -ics takes a singular verb."
   },
   {
    "stem": "Each of the three routes ______ its own difficulties.",
    "options": [
     "have",
     "has",
     "are having",
     "were having"
    ],
    "answer": 1,
    "skill": "Each / every",
    "explain": "\"Each\" is singular."
   }
  ],
  "teachback": [
   "Explain the difference between \"the number of students is\" and \"a number of students are\".",
   "Why does \"either … or\" behave differently from \"and\"?",
   "Name a question you got right by ear rather than by rule. What is the rule?"
  ]
 }
};
