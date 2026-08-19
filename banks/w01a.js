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
  "hook": {
   "icon": "🎒",
   "title": "The overstuffed backpack",
   "text": "A sentence is like a backpack with one thing that actually matters inside it and a lot of padding around it. The SAT stuffs the padding in deliberately — long phrases, extra descriptions — so that you grab the wrong thing. Every question in this lesson is really one question: <strong>what is actually in the bag?</strong> Learn to pull the padding out and the answer is usually obvious."
  },
  "modules": [
   {
    "title": "Cross out the “of” phrases",
    "accent": "sky",
    "lead": "A prepositional phrase adds detail but can never contain the subject. Cross them out and the sentence gets much shorter — and much easier.",
    "concepts": [
     {
      "i": "✂️",
      "t": "What to cross out",
      "d": "Any phrase starting of, in, on, with, by, from, for, to, at, between."
     },
     {
      "i": "🎯",
      "t": "What is left",
      "d": "The noun still standing is the subject. That is the only noun the verb has to agree with."
     },
     {
      "i": "🪤",
      "t": "Why it works",
      "d": "The SAT puts a plural noun inside the phrase and a singular subject outside it, hoping your ear picks the nearer one.",
      "f": "Nearest noun ≠ subject"
     }
    ],
    "examples": [
     {
      "ok": true,
      "t": "The <span class=\"hl-s\">box</span> <span class=\"cut\">of chocolates</span> <span class=\"hl-ok\">sits</span> on the table.",
      "note": "Subject is “box” — singular. “Chocolates” is inside the crossed-out phrase."
     },
     {
      "ok": false,
      "t": "The box of chocolates <span class=\"hl-no\">sit</span> on the table.",
      "note": "The verb has been matched to “chocolates”, which cannot be the subject."
     }
    ],
    "rule": "Cross out every prepositional phrase before you look at the verb. Whatever noun survives is the subject.",
    "trap": "The plural noun is almost always placed right next to the verb so it <em>sounds</em> right. Your ear will get this wrong. The crossing-out has to be done on the page, not in your head.",
    "worked": {
     "q": "The collection of rare manuscripts donated by several retired professors ______ housed in the basement archive.",
     "steps": [
      "Find the phrases: “of rare manuscripts” and “by several retired professors”. Both start with a preposition.",
      "Cross both out. What remains: “The collection ______ housed in the basement archive.”",
      "The surviving noun is <strong>collection</strong> — one collection, so singular.",
      "Match the verb to it. Note that “manuscripts” and “professors” were both bait placed close to the blank."
     ],
     "answer": "The answer is “is”."
    }
   },
   {
    "title": "Relative clauses are just more padding",
    "accent": "teal",
    "lead": "A clause beginning who, which or that describes the noun before it. It is never the main action of the sentence, so it can be crossed out too.",
    "concepts": [
     {
      "i": "🔗",
      "t": "The signal words",
      "d": "who, whom, whose, which, that — each one opens a describing clause."
     },
     {
      "i": "📏",
      "t": "How far it runs",
      "d": "Usually to the next comma, or to the point where the main verb appears."
     },
     {
      "i": "⚠️",
      "t": "The leftover test",
      "d": "After crossing out, the sentence must still have a main verb. If it does not, you have crossed out too much."
     }
    ],
    "examples": [
     {
      "ok": true,
      "t": "Marie Tharp, <span class=\"cut\">whose maps helped confirm continental drift</span>, <span class=\"hl-ok\">remained</span> uncredited.",
      "note": "Remove the clause and “Marie Tharp remained uncredited” still stands. Good."
     },
     {
      "ok": false,
      "t": "Marie Tharp, whose maps helped confirm continental drift, <span class=\"hl-no\">remaining</span> uncredited.",
      "note": "Now nothing is the main verb — the sentence never finishes."
     }
    ],
    "rule": "Cross out the relative clause, then check the sentence still has a real main verb. If it does not, the answer choice you picked was not a verb.",
    "trap": "The clause usually contains its own verb (“helped”, above). Students see a verb, assume the sentence is complete, and pick a non-finite form like “remaining” or “having remained”.",
    "worked": {
     "q": "The scientist who discovered the enzyme ______ still working at the same laboratory.",
     "steps": [
      "Spot the relative clause: “who discovered the enzyme”.",
      "Cross it out: “The scientist ______ still working at the same laboratory.”",
      "The subject is <strong>scientist</strong> — singular.",
      "The sentence still needs its own main verb, so the answer has to be a real conjugated verb."
     ],
     "answer": "The answer is “is”."
    }
   },
   {
    "title": "Words that look plural and are not",
    "accent": "olive",
    "lead": "A small group of subjects are singular no matter how plural the words around them look. These are worth memorising outright.",
    "concepts": [
     {
      "i": "1️⃣",
      "t": "Always singular",
      "d": "each, every, either, neither, one, anyone, everyone, somebody, nobody."
     },
     {
      "i": "🔄",
      "t": "Inverted order",
      "d": "In “there is / here comes / among the X was Y”, the subject comes AFTER the verb."
     },
     {
      "i": "➕",
      "t": "“Along with” ≠ “and”",
      "d": "Only “and” makes a compound plural subject. “Along with”, “as well as” and “in addition to” do not."
     }
    ],
    "examples": [
     {
      "ok": true,
      "t": "<span class=\"hl-s\">Neither</span> of the two proposals <span class=\"hl-ok\">meets</span> the budget.",
      "note": "“Neither” is the subject and is always singular."
     },
     {
      "ok": false,
      "t": "Neither of the two proposals <span class=\"hl-no\">meet</span> the budget.",
      "note": "Matched to “proposals”, which sits inside a crossed-out phrase."
     }
    ],
    "rule": "Each, every, either and neither are singular — always, regardless of what follows them.",
    "trap": "These words are almost always followed by “of the [plural noun]”, precisely so the plural sits next to the verb.",
    "tip": "Say the sentence with just the key word: “Neither … meets.” If that sounds fine, you have found the subject correctly.",
    "worked": {
     "q": "The committee, along with its three advisers, ______ agreed to postpone the vote.",
     "steps": [
      "“Along with its three advisers” sits between commas — cross it out.",
      "Note that “along with” is NOT “and”, so it does not create a plural subject.",
      "What survives: “The committee ______ agreed.” One committee, so singular.",
      "If the sentence had said “The committee <em>and</em> its three advisers”, the answer would flip to plural."
     ],
     "answer": "The answer is “has”."
    }
   }
  ],
  "check": {
   "stem": "The box <span class=\"cut\">of old photographs</span> ______ on the shelf.",
   "options": [
    "sit",
    "sits"
   ],
   "answer": 1,
   "explain": "Subject is “box”, not “photographs”. Singular subject, singular verb."
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
