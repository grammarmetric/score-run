/* w06a — Apostrophes and pronouns. Generated from tools/content-*.mjs */
window.LESSON = {
 "id": "w06a",
 "week": 6,
 "session": "A",
 "lead": "cyan",
 "domain": "Reading & writing",
 "title": "Apostrophes and pronouns",
 "sub": "Possession, contraction, and making a pronoun point at exactly one thing.",
 "stampSet": "rw",
 "present": {
  "hook": {
   "icon": "🏷️",
   "title": "Two jobs, one mark",
   "text": "The apostrophe has exactly two jobs: it shows ownership, or it marks a missing letter. It has never in the history of English made anything plural. Meanwhile a pronoun has one job: to point at exactly one noun. Both of these look like easy marks — and both appear on every single test, because most students go on ear."
  },
  "modules": [
   {
    "title": "Its and it’s",
    "accent": "sky",
    "lead": "This one pair accounts for more apostrophe questions than everything else combined, and there is a two-second test that settles it every time.",
    "concepts": [
     {
      "i": "🔍",
      "t": "The expansion test",
      "d": "Read “it’s” as “it is”. If the sentence still makes sense, the apostrophe is right."
     },
     {
      "i": "🏠",
      "t": "Possessive its",
      "d": "No apostrophe. Like his and hers, which also take none."
     },
     {
      "i": "🚫",
      "t": "its’",
      "d": "This form does not exist in English. Any choice showing it can be eliminated instantly."
     }
    ],
    "examples": [
     {
      "ok": true,
      "t": "The company revised <span class=\"hl-ok\">its</span> safety policy.",
      "note": "Expansion test: “revised it is safety policy” — nonsense. So the possessive is right."
     },
     {
      "ok": false,
      "t": "The company revised <span class=\"hl-no\">it’s</span> safety policy.",
      "note": "Expands to “it is”, which does not fit."
     }
    ],
    "rule": "Expand it to “it is”. Fits → it’s. Does not fit → its.",
    "trap": "Possessives normally take an apostrophe, so “its” feels wrong. It is the exception, and pronouns as a group follow it: his, hers, ours, yours, theirs all take none.",
    "worked": {
     "q": "______ been raining since Tuesday.",
     "steps": [
      "Try the expansion: “It is been raining since Tuesday.” That is not English.",
      "Try the other expansion: “It has been raining since Tuesday.” That works.",
      "“It’s” contracts both “it is” and “it has”, so the contraction is correct here.",
      "The possessive “its” would be meaningless — nothing is being owned."
     ],
     "answer": "The answer is “It’s”."
    }
   },
   {
    "title": "Singular and plural possession",
    "accent": "teal",
    "lead": "Get the number right first, then add the apostrophe. Doing it in the other order is what produces the errors.",
    "concepts": [
     {
      "i": "1️⃣",
      "t": "One owner",
      "d": "Add ’s — the inspector’s report."
     },
     {
      "i": "👥",
      "t": "Several owners",
      "d": "Make it plural first (inspectors), then add just the apostrophe: inspectors’."
     },
     {
      "i": "🚫",
      "t": "Never",
      "d": "No apostrophe ever makes a plural. “Two inspector’s” is always wrong.",
      "f": "plural first → then apostrophe"
     }
    ],
    "examples": [
     {
      "ok": true,
      "t": "The two <span class=\"hl-ok\">inspectors’</span> reports contradicted each other.",
      "note": "Plural “inspectors”, then apostrophe after the s."
     },
     {
      "ok": false,
      "t": "The two <span class=\"hl-no\">inspector’s</span> reports contradicted each other.",
      "note": "Singular possessive, but the sentence says there are two."
     }
    ],
    "rule": "Decide how many owners there are, write that plural, then attach the apostrophe.",
    "trap": "A regular plural already ending in -s takes only the apostrophe — never an extra s. “Inspectors’s” is not a form.",
    "worked": {
     "q": "The two ______ reports contradicted each other on almost every point.",
     "steps": [
      "How many owners? “The two” tells you: more than one.",
      "Write the plural noun first: <strong>inspectors</strong>.",
      "It already ends in s, so add only the apostrophe: inspectors’.",
      "Check the alternatives — “inspector’s” is one owner, “inspectors” has no possession at all."
     ],
     "answer": "The answer is “inspectors’”."
    }
   },
   {
    "title": "A pronoun must point at one noun",
    "accent": "olive",
    "lead": "If a pronoun could refer to more than one thing in the sentence, it is wrong — even when a reader could work out the meaning.",
    "concepts": [
     {
      "i": "👆",
      "t": "The count test",
      "d": "Ask: how many nouns could this pronoun be pointing at? More than one means it fails."
     },
     {
      "i": "🤷",
      "t": "“Guessable” is not enough",
      "d": "The exam does not care that context makes it recoverable. Ambiguous is wrong."
     },
     {
      "i": "📛",
      "t": "The fix",
      "d": "Usually the correct answer simply names the thing instead of using a pronoun."
     }
    ],
    "examples": [
     {
      "ok": true,
      "t": "When Priya met Elena, <span class=\"hl-ok\">Elena</span> had just returned from fieldwork.",
      "note": "Naming her removes all doubt."
     },
     {
      "ok": false,
      "t": "When Priya met Elena, <span class=\"hl-no\">she</span> had just returned from fieldwork.",
      "note": "“She” could be either woman. Ambiguous, therefore wrong."
     }
    ],
    "rule": "Count the possible antecedents. Two or more means the pronoun cannot be used.",
    "trap": "When the correct answer just repeats a name, it looks clumsy and repetitive — so students reject it in favour of the smoother-sounding pronoun.",
    "tip": "Also match number: “each”, “every” and “neither” are singular, so they take a singular pronoun.",
    "worked": {
     "q": "The editor sent the draft back to the author because ______ contained several factual errors.",
     "steps": [
      "List the nouns available: the editor, the draft, the author.",
      "Try “it” — it could point at the draft, but grammatically it could reach for other things too.",
      "The safest answer removes the ambiguity entirely by naming the thing.",
      "Notice that the smoother-sounding option is the wrong one here."
     ],
     "answer": "The answer is “the draft”."
    }
   }
  ],
  "check": {
   "stem": "The company revised ______ safety policy.",
   "options": [
    "it’s",
    "its"
   ],
   "answer": 1,
   "explain": "“It is safety policy” makes no sense, so it is the possessive “its”."
  }
 },
 "forensics": {
  "intro": "Two topics that look easy and are tested constantly. Name the fault in each wrong option.",
  "watch": [
   "An apostrophe shows possession or a contraction — never a plural",
   "\"Its\" is possessive; \"it's\" only ever means \"it is\" or \"it has\"",
   "A pronoun must point at exactly one possible noun"
  ],
  "items": [
   {
    "passage": "The company revised ______ safety policy after the inspection.",
    "stem": "Which choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
     {
      "t": "it's",
      "trap": "contradicts",
      "why": "\"It's\" expands to \"it is\" — \"the company revised it is safety policy\" is not a sentence."
     },
     {
      "t": "its",
      "correct": true
     },
     {
      "t": "its'",
      "trap": "unsupported",
      "why": "This form does not exist in English at all."
     },
     {
      "t": "their",
      "trap": "halfright",
      "why": "The meaning is recoverable, but \"company\" is singular, so a plural pronoun does not agree with it."
     }
    ],
    "explain": "Possessive \"its\" never takes an apostrophe. Test it by expanding: if \"it is\" does not fit, you need <strong>its</strong>."
   },
   {
    "passage": "When Priya met Elena, ______ had just returned from three months of fieldwork in Iceland.",
    "stem": "Which choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
     {
      "t": "she",
      "trap": "unsupported",
      "why": "Ambiguous — \"she\" could point at Priya or at Elena, and nothing in the sentence settles which."
     },
     {
      "t": "they",
      "trap": "contradicts",
      "why": "Plural, and it implies both women returned, which the sentence does not say."
     },
     {
      "t": "Elena",
      "correct": true
     },
     {
      "t": "her",
      "trap": "contradicts",
      "why": "Wrong case — this is the subject of the clause, and it is still ambiguous."
     }
    ],
    "explain": "With two possible antecedents of the same gender, a pronoun cannot do the job. Naming the person is the only unambiguous option: <strong>Elena</strong>."
   },
   {
    "passage": "The two ______ reports contradicted each other on almost every point.",
    "stem": "Which choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
     {
      "t": "inspectors'",
      "correct": true
     },
     {
      "t": "inspector's",
      "trap": "contradicts",
      "why": "Singular possessive, but the sentence says \"the two\", so there is more than one inspector."
     },
     {
      "t": "inspectors",
      "trap": "narrow",
      "why": "Plural, but with no possessive at all — the reports belong to the inspectors."
     },
     {
      "t": "inspectors's",
      "trap": "unsupported",
      "why": "A regular plural already ending in -s takes only the apostrophe, never an extra -s."
     }
    ],
    "explain": "Plural possessive: make the noun plural first (\"inspectors\"), then add the apostrophe after the s — <strong>inspectors'</strong>."
   }
  ]
 },
 "speed": {
  "seconds": 71,
  "items": [
   {
    "stem": "The bird built ______ nest in the chimney.",
    "options": [
     "it's",
     "its",
     "its'",
     "their"
    ],
    "answer": 1,
    "skill": "Its / it's",
    "explain": "Possessive \"its\" — no apostrophe."
   },
   {
    "stem": "______ been raining since Tuesday.",
    "options": [
     "Its",
     "Its'",
     "It's",
     "It is'"
    ],
    "answer": 2,
    "skill": "Its / it's",
    "explain": "\"It has been raining\" — a contraction, so \"it's\"."
   },
   {
    "stem": "The ______ changing rooms were refurbished last summer.",
    "options": [
     "players",
     "player's",
     "players'",
     "players's"
    ],
    "answer": 2,
    "skill": "Plural possessive",
    "explain": "More than one player, so plural first, then apostrophe: \"players'\"."
   },
   {
    "stem": "The report criticised the council and the developer, but ______ response was published.",
    "options": [
     "their",
     "its",
     "no",
     "neither's"
    ],
    "answer": 3,
    "skill": "Pronoun clarity",
    "explain": "\"Their\" and \"its\" would both be ambiguous with two possible owners; \"neither's\" is unambiguous."
   },
   {
    "stem": "Each of the machines has ______ own serial number.",
    "options": [
     "their",
     "its",
     "it's",
     "there"
    ],
    "answer": 1,
    "skill": "Pronoun agreement",
    "explain": "\"Each\" is singular, so the pronoun is singular too."
   },
   {
    "stem": "The ______ decision surprised everyone in the room.",
    "options": [
     "committees",
     "committee's",
     "committees'",
     "committee's'"
    ],
    "answer": 1,
    "skill": "Singular possessive",
    "explain": "One committee owning one decision: \"committee's\"."
   },
   {
    "stem": "The scientists presented the findings to the reviewers before ______ were published.",
    "options": [
     "they",
     "these",
     "the findings",
     "it"
    ],
    "answer": 2,
    "skill": "Pronoun clarity",
    "explain": "\"They\" could point at the scientists, the reviewers or the findings. Naming it removes the ambiguity."
   },
   {
    "stem": "Neither of the applicants had submitted ______ portfolio on time.",
    "options": [
     "their",
     "his or her",
     "there",
     "they're"
    ],
    "answer": 1,
    "skill": "Pronoun agreement",
    "explain": "\"Neither\" is singular, so the possessive must be singular in formal usage."
   }
  ]
 },
 "sim": {
  "seconds": 71,
  "items": [
   {
    "stem": "The museum extended ______ opening hours for the exhibition.",
    "options": [
     "it's",
     "its",
     "their",
     "its'"
    ],
    "answer": 1,
    "skill": "Its / it's",
    "explain": "Possessive \"its\"."
   },
   {
    "stem": "______ too late to change the booking now.",
    "options": [
     "Its",
     "Its'",
     "It's",
     "Their"
    ],
    "answer": 2,
    "skill": "Its / it's",
    "explain": "\"It is too late\" — contraction."
   },
   {
    "stem": "The ______ union voted to accept the offer.",
    "options": [
     "workers",
     "worker's",
     "workers'",
     "workers's"
    ],
    "answer": 2,
    "skill": "Plural possessive",
    "explain": "Plural possessive: \"workers'\"."
   },
   {
    "stem": "Every one of the volunteers brought ______ own equipment.",
    "options": [
     "their",
     "his or her",
     "there",
     "they're"
    ],
    "answer": 1,
    "skill": "Pronoun agreement",
    "explain": "\"Every one\" is singular."
   },
   {
    "stem": "The editor sent the draft back to the author because ______ contained several factual errors.",
    "options": [
     "it",
     "they",
     "the draft",
     "she"
    ],
    "answer": 2,
    "skill": "Pronoun clarity",
    "explain": "Naming the draft removes the ambiguity between draft, editor and author."
   }
  ],
  "teachback": [
   "How do you test whether a sentence needs \"its\" or \"it's\"?",
   "Where does the apostrophe go for one inspector, and where for several? Why?",
   "Explain why a pronoun with two possible antecedents is wrong even when you can work out the meaning."
  ]
 }
};
