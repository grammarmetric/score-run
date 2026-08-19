/* w05a — Commas, dashes and colons. Generated from tools/content-*.mjs */
window.LESSON = {
 "id": "w05a",
 "week": 5,
 "session": "A",
 "lead": "cyan",
 "domain": "Reading & writing",
 "title": "Commas, dashes and colons",
 "sub": "The longest chapter in the book and the most-tested convention on the exam. Two sessions are budgeted for it.",
 "stampSet": "rw",
 "present": {
  "hook": {
   "icon": "🔌",
   "title": "Punctuation is wiring, not breathing",
   "text": "Most students place commas where they would take a breath. That works about half the time, which is exactly why it feels reliable and exactly why it costs marks. Punctuation is wiring: what matters is what is connected on each side of the mark, not how the sentence sounds when read aloud."
  },
  "modules": [
   {
    "title": "The colon needs a complete sentence on its left",
    "accent": "sky",
    "lead": "A colon introduces something — a list, an explanation, a single word. Whatever is to its LEFT must be able to stand alone.",
    "concepts": [
     {
      "i": "⬅️",
      "t": "Left side",
      "d": "Must be a complete sentence. This is the whole rule."
     },
     {
      "i": "➡️",
      "t": "Right side",
      "d": "Can be anything — a list, a phrase, one word, another sentence."
     },
     {
      "i": "🆚",
      "t": "Versus semicolon",
      "d": "A semicolon needs a complete sentence on BOTH sides. A colon only needs one on the left.",
      "f": "colon = 1 side · semicolon = 2 sides"
     }
    ],
    "examples": [
     {
      "ok": true,
      "t": "The expedition carried only what was necessary<span class=\"hl-ok\">:</span> rope, food and a compass.",
      "note": "Left side is a complete sentence; a list follows."
     },
     {
      "ok": false,
      "t": "The expedition carried<span class=\"hl-no\">:</span> rope, food and a compass.",
      "note": "“The expedition carried” cannot stand alone — it is waiting for an object."
     }
    ],
    "rule": "Cover everything to the right of the colon. If what is left is a sentence, the colon is legal.",
    "trap": "The wrong version often sounds better, because we naturally pause before a list. Ignore the pause and test the left side.",
    "worked": {
     "q": "She had one ambition ______ to sail around the world alone.",
     "steps": [
      "Cover everything after the blank. What is left: “She had one ambition.”",
      "Is that a complete sentence? Subject “she”, verb “had”, stands alone. Yes.",
      "What follows is an explanation, not a second sentence — so a semicolon would be illegal.",
      "A complete sentence introducing an explanation is exactly what a colon does."
     ],
     "answer": "The answer is a colon."
    }
   },
   {
    "title": "Non-essential information takes a matching pair",
    "accent": "teal",
    "lead": "If a phrase can be lifted out of the sentence without breaking it, it must be enclosed — and both ends must use the same mark.",
    "concepts": [
     {
      "i": "✂️",
      "t": "The lift-out test",
      "d": "Remove the phrase. Does the sentence still work and mean the same thing? Then it is non-essential."
     },
     {
      "i": "👯",
      "t": "Pairs must match",
      "d": "Two commas, or two dashes. Never one comma and one dash."
     },
     {
      "i": "🔒",
      "t": "Essential = no marks",
      "d": "If removing it changes which thing you mean, it is essential and takes no punctuation at all."
     }
    ],
    "examples": [
     {
      "ok": true,
      "t": "Ada Lovelace<span class=\"hl-ok\">,</span> whose notes became the first program<span class=\"hl-ok\">,</span> received little recognition.",
      "note": "Matching pair of commas around removable information."
     },
     {
      "ok": false,
      "t": "Ada Lovelace<span class=\"hl-no\">,</span> whose notes became the first program <span class=\"hl-no\">—</span> received little recognition.",
      "note": "A comma at one end and a dash at the other. Never legal."
     }
    ],
    "rule": "Non-essential information is enclosed by a matching pair. One mark on its own is always wrong.",
    "trap": "The commonest version of this error gives you the opening comma and silently drops the closing one — and the sentence still reads smoothly.",
    "tip": "Count the marks. If you can see an opening comma around a describing phrase, look for its partner before you accept the answer.",
    "worked": {
     "q": "The novel ______ which took eleven years to write ______ was an immediate success.",
     "steps": [
      "Test whether the middle phrase can be lifted out: “The novel was an immediate success.” Still works.",
      "So it is non-essential and must be enclosed on both sides.",
      "Now check the options: any choice with only one mark, or with two different marks, is out.",
      "That leaves a matching pair. Commas are the standard choice here."
     ],
     "answer": "A matching pair of commas."
    }
   },
   {
    "title": "Never split a subject from its verb",
    "accent": "olive",
    "lead": "A single comma between the subject and the verb is always wrong — no matter how long the subject is.",
    "concepts": [
     {
      "i": "🚫",
      "t": "The forbidden gap",
      "d": "One comma sitting between the subject and its verb. Always an error."
     },
     {
      "i": "📏",
      "t": "Long subjects",
      "d": "The longer the subject, the more you want to pause. That urge is the trap."
     },
     {
      "i": "👯",
      "t": "Unless it is a pair",
      "d": "Two commas enclosing a non-essential phrase are fine — that is a pair, not a split."
     }
    ],
    "examples": [
     {
      "ok": true,
      "t": "The rock samples collected from the crater floor <span class=\"hl-ok\">turned out</span> to be far older than predicted.",
      "note": "Nothing between the long subject and its verb."
     },
     {
      "ok": false,
      "t": "The rock samples collected from the crater floor<span class=\"hl-no\">,</span> turned out to be far older.",
      "note": "A single comma splitting subject from verb."
     }
    ],
    "rule": "Find the subject, find the verb. A lone comma may never sit between them.",
    "trap": "The subject is deliberately made long — six or eight words — so a pause feels natural right before the verb.",
    "worked": {
     "q": "The students who had finished early ______ were allowed to leave.",
     "steps": [
      "Identify the subject: “The students who had finished early” — all of it.",
      "Identify the verb: “were allowed”.",
      "The blank sits exactly between them.",
      "A single mark there would split subject from verb, so the answer must be nothing at all."
     ],
     "answer": "No punctuation."
    }
   }
  ],
  "check": {
   "stem": "She had one ambition ______ to sail around the world.",
   "options": [
    ", (comma)",
    ": (colon)"
   ],
   "answer": 1,
   "explain": "Complete sentence on the left, explanation on the right — that is a colon."
  }
 },
 "forensics": {
  "intro": "Punctuation is decided by structure, never by where you would pause when speaking. For each wrong option, name what it actually breaks.",
  "watch": [
   "A colon needs a complete sentence on its left",
   "Non-essential information takes a pair of marks — two commas, or two dashes, never one of each",
   "Never put a single comma between a subject and its verb"
  ],
  "items": [
   {
    "passage": "The expedition carried only what was strictly necessary ______ rope, dried food, a compass and two spare tents.",
    "stem": "Which choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
     {
      "t": ": ",
      "correct": true
     },
     {
      "t": "; ",
      "trap": "contradicts",
      "why": "A semicolon needs a complete sentence on both sides. The list that follows is not one."
     },
     {
      "t": ", ",
      "trap": "halfright",
      "why": "A comma is not wrong often enough to be safe here — with a formal list introduced by a complete sentence, the colon is the tested answer."
     },
     {
      "t": " ",
      "trap": "contradicts",
      "why": "The list needs some mark introducing it."
     }
    ],
    "explain": "\"The expedition carried only what was strictly necessary\" is a complete sentence, and a list follows it. That is exactly what a <strong>colon</strong> is for."
   },
   {
    "passage": "Ada Lovelace ______ whose notes on the analytical engine are now considered the first computer program ______ received little recognition in her own century.",
    "stem": "Which choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
     {
      "t": ", … , ",
      "correct": true
     },
     {
      "t": ", … — ",
      "trap": "contradicts",
      "why": "You may use two commas or two dashes, but never one of each. The pair must match."
     },
     {
      "t": " … , ",
      "trap": "narrow",
      "why": "Only one mark. Non-essential information needs enclosing on both sides."
     },
     {
      "t": ": … : ",
      "trap": "contradicts",
      "why": "Colons do not enclose. A colon introduces; it does not wrap."
     }
    ],
    "explain": "The clause between the marks can be removed and the sentence still works, so it is non-essential — and it must be enclosed by a <strong>matching pair</strong>."
   },
   {
    "passage": "The rock samples collected from the crater floor ______ turned out to be far older than anyone had predicted.",
    "stem": "Which choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
     {
      "t": ", ",
      "trap": "contradicts",
      "why": "A single comma between the subject and its verb. This is one of the most consistently tested errors on the exam."
     },
     {
      "t": " ",
      "correct": true
     },
     {
      "t": ": ",
      "trap": "contradicts",
      "why": "A colon here would cut the sentence between its subject and verb."
     },
     {
      "t": "; ",
      "trap": "contradicts",
      "why": "A semicolon needs complete sentences on both sides, and the left side has no verb yet."
     }
    ],
    "explain": "The subject is \"The rock samples collected from the crater floor\" and the verb is \"turned out\". <strong>Nothing</strong> may separate them."
   }
  ]
 },
 "speed": {
  "seconds": 71,
  "items": [
   {
    "stem": "She had one ambition ______ to sail around the world alone.",
    "options": [
     ", ",
     ": ",
     "; ",
     " "
    ],
    "answer": 1,
    "skill": "Colons",
    "explain": "A complete sentence on the left, an explanation on the right — colon."
   },
   {
    "stem": "The novel ______ which took eleven years to write ______ was an immediate success.",
    "options": [
     ", … , ",
     ", … — ",
     " … , ",
     "— … , "
    ],
    "answer": 0,
    "skill": "Non-essential pairs",
    "explain": "Matching pair of commas around removable information."
   },
   {
    "stem": "The results of the second trial ______ were far more encouraging.",
    "options": [
     ", ",
     ": ",
     " ",
     "; "
    ],
    "answer": 2,
    "skill": "Subject and verb",
    "explain": "Never separate a subject from its verb with a single comma."
   },
   {
    "stem": "Three cities were shortlisted ______ Lisbon, Tallinn and Ljubljana.",
    "options": [
     ": ",
     ", ",
     "; ",
     " and "
    ],
    "answer": 0,
    "skill": "Colons",
    "explain": "Complete sentence, then a list — colon."
   },
   {
    "stem": "The path, narrow and badly lit ______ wound steeply upward.",
    "options": [
     ", ",
     " ",
     ": ",
     "; "
    ],
    "answer": 0,
    "skill": "Non-essential pairs",
    "explain": "The description opened with a comma, so it must close with one."
   },
   {
    "stem": "He packed his bag, locked the door ______ and walked to the station.",
    "options": [
     ", ",
     " ",
     "; ",
     ": "
    ],
    "answer": 0,
    "skill": "Lists",
    "explain": "Items in a series are separated by commas, including before the final \"and\"."
   },
   {
    "stem": "The committee reached its decision quickly ______ the evidence left little room for doubt.",
    "options": [
     ", ",
     "; ",
     " ",
     ", and"
    ],
    "answer": 1,
    "skill": "Semicolons",
    "explain": "Two complete, closely linked sentences."
   },
   {
    "stem": "Only one thing stood in the way ______ money.",
    "options": [
     ", ",
     "; ",
     ": ",
     " "
    ],
    "answer": 2,
    "skill": "Colons",
    "explain": "A colon can introduce a single word as well as a list, provided its left side is a complete sentence."
   }
  ]
 },
 "sim": {
  "seconds": 71,
  "items": [
   {
    "stem": "The team had a single objective ______ to finish before nightfall.",
    "options": [
     ", ",
     ": ",
     "; ",
     " "
    ],
    "answer": 1,
    "skill": "Colons",
    "explain": "Complete sentence, then the explanation — colon."
   },
   {
    "stem": "The manuscript ______ discovered in a Cairo storeroom ______ has never been fully translated.",
    "options": [
     ", … , ",
     "— … , ",
     " … , ",
     ": … : "
    ],
    "answer": 0,
    "skill": "Non-essential pairs",
    "explain": "A matching pair encloses removable information."
   },
   {
    "stem": "The students who had finished early ______ were allowed to leave.",
    "options": [
     ", ",
     " ",
     ": ",
     "; "
    ],
    "answer": 1,
    "skill": "Subject and verb",
    "explain": "No mark between the subject and its verb."
   },
   {
    "stem": "The weather turned suddenly ______ within an hour the road was impassable.",
    "options": [
     ", ",
     "; ",
     " ",
     ", however "
    ],
    "answer": 1,
    "skill": "Semicolons",
    "explain": "Two complete sentences, closely related."
   },
   {
    "stem": "She brought everything she needed ______ notebooks, pens and a folding chair.",
    "options": [
     ": ",
     ", ",
     "; ",
     " "
    ],
    "answer": 0,
    "skill": "Colons",
    "explain": "A complete sentence introduces a list."
   }
  ],
  "teachback": [
   "What must always be true of the words to the left of a colon?",
   "Why can you not use a comma at one end of a phrase and a dash at the other?",
   "Give an example of a comma that would be wrong even though you would pause there when reading aloud."
  ]
 }
};
