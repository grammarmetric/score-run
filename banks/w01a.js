/* w01a — Finding the subject. Generated from tools/content-*.mjs */
window.LESSON = {
 "id": "w01a",
 "week": 1,
 "session": "A",
 "lead": "cyan",
 "domain": "Reading & writing",
 "title": "Finding the subject",
 "sub": "Before any grammar rule can be applied, you have to know what the sentence is actually about. This is the skill everything in weeks 2 and 3 is built on.",
 "stampSet": "rw",
 "present": {
  "rule": "Cross out the describing parts. Whatever noun is left is the subject — and the verb must match that noun.",
  "steps": [
   "Cross out every phrase starting of, in, with, by, from, for",
   "Cross out any clause starting who, which or that",
   "The noun still standing is the subject",
   "Match the verb to it: singular subject, singular verb"
  ],
  "worked": {
   "text": "The collection <s>of rare manuscripts</s> <s>donated by several professors</s> ______ housed in the basement.",
   "lines": [
    "\"of rare manuscripts\" is a prepositional phrase — cross it out.",
    "\"donated by several professors\" describes the collection — cross it out too.",
    "What survives: \"The collection ______ housed\". That is singular.",
    "So the verb is <em>is</em>. Note that \"manuscripts\" and \"professors\" were both bait."
   ]
  },
  "check": {
   "stem": "The box <s>of old photographs</s> ______ on the shelf.",
   "options": [
    "sit",
    "sits"
   ],
   "answer": 1,
   "explain": "Subject is \"box\", not \"photographs\". Singular."
  }
 },
 "forensics": {
  "intro": "You are not picking answers yet. For each wrong option, name the reason it is wrong. Naming the trap is the skill that transfers — picking the right answer is not.",
  "watch": [
   "Cross out every prepositional phrase before you decide anything",
   "The subject is almost never inside \"of …\", \"in …\", \"with …\"",
   "A relative clause beginning \"which\" or \"who\" is describing, not the main action"
  ],
  "items": [
   {
    "passage": "The <em>collection</em> of rare manuscripts donated by several retired professors ______ housed in the library's basement archive.",
    "stem": "Which choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
     {
      "t": "are",
      "trap": "contradicts",
      "why": "This matches \"professors\", which sits inside a phrase describing the collection. The subject is \"collection\" — singular."
     },
     {
      "t": "is",
      "correct": true
     },
     {
      "t": "were",
      "trap": "contradicts",
      "why": "Plural again, and it also shifts the sentence into the past for no reason the text gives."
     },
     {
      "t": "have been",
      "trap": "contradicts",
      "why": "Plural. \"Manuscripts\" and \"professors\" are both decoys sitting between the subject and its verb."
     }
    ],
    "explain": "Cross out \"of rare manuscripts\" and \"by several retired professors\" and the sentence reduces to \"The collection ______ housed\". Singular subject, singular verb: <strong>is</strong>."
   },
   {
    "passage": "Marie Tharp, <em>whose</em> maps of the ocean floor helped confirm the theory of continental drift, ______ largely uncredited during her lifetime.",
    "stem": "Which choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
     {
      "t": "remaining",
      "trap": "unsupported",
      "why": "This leaves the sentence with no main verb at all. Everything between the commas is a description, so the sentence still needs its own action."
     },
     {
      "t": "to remain",
      "trap": "unsupported",
      "why": "An infinitive cannot serve as the main verb here — the sentence would never finish."
     },
     {
      "t": "remained",
      "correct": true
     },
     {
      "t": "having remained",
      "trap": "unsupported",
      "why": "Another non-finite form. The relative clause has already used up \"helped\"; the main clause still needs a verb of its own."
     }
    ],
    "explain": "The clause between the commas describes Marie Tharp. Remove it and you get \"Marie Tharp ______ largely uncredited\" — which needs a real main verb: <strong>remained</strong>."
   },
   {
    "passage": "Neither of the two proposals submitted to the committee ______ the budget constraints the council had set out in March.",
    "stem": "Which choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
     {
      "t": "meet",
      "trap": "contradicts",
      "why": "\"Proposals\" is inside \"of the two proposals\" — a prepositional phrase. The subject is \"Neither\", which is singular."
     },
     {
      "t": "meets",
      "correct": true
     },
     {
      "t": "have met",
      "trap": "contradicts",
      "why": "Plural, and drawn from the same decoy noun."
     },
     {
      "t": "are meeting",
      "trap": "halfright",
      "why": "The tense is arguably defensible, but the number is not — \"neither\" takes a singular verb."
     }
    ],
    "explain": "\"Neither\", \"either\", \"each\" and \"every\" are singular, however plural the phrase after them looks. Cross out \"of the two proposals\" and the choice is obvious: <strong>meets</strong>."
   }
  ]
 },
 "speed": {
  "seconds": 71,
  "items": [
   {
    "stem": "The <em>results</em> of the experiment, which took three years to complete, ______ published last spring.",
    "options": [
     "was",
     "were",
     "has been",
     "is"
    ],
    "answer": 1,
    "skill": "Finding the subject",
    "explain": "Subject is \"results\" — plural. \"Of the experiment\" and the relative clause are both describing."
   },
   {
    "stem": "A <em>box</em> of old photographs and letters ______ on the top shelf of the wardrobe.",
    "options": [
     "sit",
     "sits",
     "are sitting",
     "have sat"
    ],
    "answer": 1,
    "skill": "Prepositional phrases",
    "explain": "The subject is \"box\", not \"photographs and letters\" — those sit inside \"of …\"."
   },
   {
    "stem": "The scientist <em>who</em> discovered the enzyme ______ still working at the same laboratory.",
    "options": [
     "are",
     "were",
     "is",
     "have been"
    ],
    "answer": 2,
    "skill": "Relative clauses",
    "explain": "\"Who discovered the enzyme\" describes the scientist. The main subject is singular: \"The scientist … is\"."
   },
   {
    "stem": "Each of the students ______ a different explanation for the result.",
    "options": [
     "offer",
     "offers",
     "have offered",
     "are offering"
    ],
    "answer": 1,
    "skill": "Finding the subject",
    "explain": "\"Each\" is singular. \"Of the students\" is a prepositional phrase and cannot contain the subject."
   },
   {
    "stem": "The <em>paintings</em> in the east wing of the gallery ______ restored last year.",
    "options": [
     "was",
     "is",
     "has been",
     "were"
    ],
    "answer": 3,
    "skill": "Prepositional phrases",
    "explain": "Two prepositional phrases in a row — \"in the east wing\", \"of the gallery\". Strip both: \"The paintings … were restored\"."
   },
   {
    "stem": "The <em>committee</em>, along with its three advisers, ______ agreed to postpone the vote.",
    "options": [
     "have",
     "has",
     "were",
     "are"
    ],
    "answer": 1,
    "skill": "Finding the subject",
    "explain": "\"Along with\" does not create a compound subject the way \"and\" does. The subject is still \"committee\" — singular."
   },
   {
    "stem": "Among the documents recovered from the wreck ______ a captain's logbook dating from 1802.",
    "options": [
     "was",
     "were",
     "have been",
     "are"
    ],
    "answer": 0,
    "skill": "Inverted sentences",
    "explain": "The sentence is inverted. The subject is \"a captain's logbook\", which follows the verb — singular."
   },
   {
    "stem": "The <em>rise</em> in global temperatures recorded by these stations ______ consistent with the model's predictions.",
    "options": [
     "are",
     "is",
     "were",
     "have been"
    ],
    "answer": 1,
    "skill": "Prepositional phrases",
    "explain": "Subject is \"rise\". \"In global temperatures\" and \"recorded by these stations\" are both describing it."
   }
  ]
 },
 "sim": {
  "seconds": 71,
  "items": [
   {
    "stem": "The <em>archive</em> of letters written by the poet's contemporaries ______ rarely consulted by scholars.",
    "options": [
     "are",
     "is",
     "were",
     "have been"
    ],
    "answer": 1,
    "skill": "Finding the subject",
    "explain": "Subject: \"archive\". Singular."
   },
   {
    "stem": "Neither of the proposed routes ______ through protected woodland.",
    "options": [
     "pass",
     "passes",
     "have passed",
     "are passing"
    ],
    "answer": 1,
    "skill": "Finding the subject",
    "explain": "\"Neither\" is singular."
   },
   {
    "stem": "The engineers <em>who</em> designed the bridge ______ awarded a national prize.",
    "options": [
     "was",
     "were",
     "has been",
     "is"
    ],
    "answer": 1,
    "skill": "Relative clauses",
    "explain": "Subject is \"engineers\" — plural. The relative clause only describes them."
   },
   {
    "stem": "A <em>series</em> of unexpected delays ______ the launch by nearly a year.",
    "options": [
     "have pushed back",
     "push back",
     "has pushed back",
     "are pushing back"
    ],
    "answer": 2,
    "skill": "Prepositional phrases",
    "explain": "\"Series\" is the subject and is singular; \"of unexpected delays\" describes it."
   },
   {
    "stem": "Beneath the floorboards ______ a bundle of newspapers from the 1930s.",
    "options": [
     "lie",
     "were",
     "lies",
     "have lain"
    ],
    "answer": 2,
    "skill": "Inverted sentences",
    "explain": "Inverted. The subject is \"a bundle\" — singular."
   }
  ],
  "teachback": [
   "Pick any question above. Say out loud how you found the subject, step by step.",
   "What is the difference between \"each of the students\" and \"the students\"? Why does it matter?",
   "Name one question you got right where you were not actually sure. What made you pick it?"
  ]
 }
};
