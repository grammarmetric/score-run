/* w10a — Purpose and synthesis. Generated from tools/content-*.mjs */
window.LESSON = {
 "id": "w10a",
 "week": 10,
 "session": "A",
 "lead": "cyan",
 "domain": "Reading & writing",
 "title": "Purpose and synthesis",
 "sub": "Why a sentence is there, and the notes-to-sentence question type — which is more formulaic than it looks.",
 "stampSet": "rw",
 "present": {
  "hook": {
   "icon": "🎯",
   "title": "True is not the same as right",
   "text": "On these questions almost every wrong answer is a completely true statement, pulled straight from the notes. That is what makes them hard: there is nothing to catch, no error to spot. The only thing separating the right answer from three true ones is whether it does the specific job the prompt asked for — and the prompt always states that job in its final sentence."
  },
  "modules": [
   {
    "title": "The goal is in the last sentence",
    "accent": "sky",
    "lead": "Synthesis prompts end with a sentence beginning “The student wants to…”. That sentence decides the answer, and it should be the first thing you read.",
    "concepts": [
     {
      "i": "📍",
      "t": "Where it is",
      "d": "Always the final sentence of the prompt, usually in italics."
     },
     {
      "i": "✏️",
      "t": "Underline it",
      "d": "Physically underline the goal word — emphasise, introduce, compare, explain."
     },
     {
      "i": "🔁",
      "t": "Read notes second",
      "d": "Bullets before goal means you will read them without knowing what you are looking for."
     }
    ],
    "examples": [
     {
      "ok": true,
      "t": "Goal: emphasise <span class=\"hl-y\">complexity</span> → “…contains at least <span class=\"hl-ok\">30 bronze gears</span>.”",
      "note": "Gear count is direct evidence of complexity."
     },
     {
      "ok": false,
      "t": "Goal: emphasise complexity → “…was recovered from a shipwreck in <span class=\"hl-no\">1901</span>.”",
      "note": "True, from the notes, and completely irrelevant to complexity."
     }
    ],
    "rule": "Read the goal first, underline its key word, then test each option against that word alone.",
    "trap": "The notes are interesting, so students read them top to bottom and form an opinion about what matters — before finding out what the question wants.",
    "worked": {
     "q": "Notes about the Antikythera mechanism. Goal: emphasise its complexity.",
     "steps": [
      "Find and underline the goal word: <strong>complexity</strong>.",
      "Test each bullet against it. “Recovered from a shipwreck in 1901” — that is history, not complexity.",
      "“Dates from roughly 100 BCE” — that is age, not complexity.",
      "“Contains at least 30 bronze gears” — a count of moving parts. That is complexity, and it is the only one."
     ],
     "answer": "The option built around the 30 bronze gears."
    }
   },
   {
    "title": "Some goals need two bullets",
    "accent": "teal",
    "lead": "When the goal involves a contrast, a gap or an unlikelihood, a single fact cannot do the job. The answer must combine two.",
    "concepts": [
     {
      "i": "↔️",
      "t": "Contrast goals",
      "d": "“Despite”, “gap between”, “how unlikely” — these always need two facts set against each other."
     },
     {
      "i": "🧩",
      "t": "Combining",
      "d": "The right answer usually joins them with a comma or a “despite/although” opener."
     },
     {
      "i": "✂️",
      "t": "Single-fact answers",
      "d": "When the goal is a contrast, any option containing only one fact is automatically out."
     }
    ],
    "examples": [
     {
      "ok": true,
      "t": "<span class=\"hl-ok\">With no prior survival training</span>, Ada Blackjack <span class=\"hl-ok\">survived alone for two years</span>.",
      "note": "Two facts, set against each other. The unlikelihood is visible."
     },
     {
      "ok": false,
      "t": "Ada Blackjack <span class=\"hl-no\">survived alone for two years</span>.",
      "note": "True, but nothing here makes it sound unlikely."
     }
    ],
    "rule": "If the goal is about a contrast or a gap, count the facts in each option. Fewer than two cannot do it.",
    "trap": "The single-fact options are shorter and cleaner, so they read better. The correct answer often looks clumsier.",
    "worked": {
     "q": "Notes: the tunnel took 14 years; original estimates allowed 4 years. Goal: emphasise the overrun.",
     "steps": [
      "Underline the goal: <strong>the overrun</strong>.",
      "An overrun is a comparison — how long it took against how long it should have taken.",
      "So one number alone cannot show it. “Took 14 years” on its own is just a fact.",
      "The answer must carry both figures in one sentence."
     ],
     "answer": "“Estimated at 4 years, the tunnel took 14 to complete.”"
    }
   },
   {
    "title": "Purpose asks what a sentence DOES",
    "accent": "olive",
    "lead": "A purpose question is not asking what the sentence says. It is asking what job it performs in the paragraph.",
    "concepts": [
     {
      "i": "🔨",
      "t": "Common jobs",
      "d": "introduces, illustrates, qualifies, contrasts, explains, concedes, sets up an exception."
     },
     {
      "i": "🗣️",
      "t": "The test",
      "d": "Say “this sentence is there in order to…” and finish the phrase in your own words."
     },
     {
      "i": "🪞",
      "t": "The trap answer",
      "d": "An option that accurately paraphrases the sentence but never names a job."
     }
    ],
    "examples": [
     {
      "ok": true,
      "t": "“…they support a quarter of all marine species.” → <span class=\"hl-ok\">highlights a disproportion</span>",
      "note": "Names the job: setting a tiny area against a huge share."
     },
     {
      "ok": false,
      "t": "“…they support a quarter of all marine species.” → <span class=\"hl-no\">explains why reefs occupy little of the floor</span>",
      "note": "The sentence gives no cause. Wrong job entirely."
     }
    ],
    "rule": "Answer with a verb of function, not a summary of content.",
    "trap": "The paraphrase option is comforting because you can verify it against the text word by word. That verification tells you nothing about purpose.",
    "tip": "Look at what came immediately before. Purpose is nearly always defined by the relationship to the previous sentence.",
    "worked": {
     "q": "“Coral reefs occupy less than one per cent of the ocean floor. They support around a quarter of all marine species.” Purpose of the second sentence?",
     "steps": [
      "What does sentence one establish? A very small area.",
      "What does sentence two add? A very large share of species.",
      "Ask what job that does: it is not explaining, and nothing is being corrected.",
      "It sets a small number against a large one — the job is to show the mismatch."
     ],
     "answer": "To highlight the disproportion between the reefs’ size and their importance."
    }
   }
  ],
  "check": {
   "stem": "Goal: stress how unlikely her survival was. Which option does that job?",
   "options": [
    "She took part in a 1921 expedition.",
    "With no training, she survived alone for two years."
   ],
   "answer": 1,
   "explain": "Unlikelihood needs two facts set against each other — the lack of training and the length of survival."
  }
 },
 "forensics": {
  "intro": "On these questions the wrong answers are usually true. They just do not do the job the question asked for. Label each one with what it gets wrong.",
  "watch": [
   "Read the goal in the final sentence of the prompt first",
   "A true statement that misses the goal is still wrong",
   "Underline the exact words of the goal before looking at the options"
  ],
  "items": [
   {
    "passage": "While researching a presentation, a student has taken these notes:<br>• The Antikythera mechanism was recovered from a shipwreck in 1901.<br>• It dates from roughly 100 BCE.<br>• It contains at least 30 bronze gears.<br>• It was used to predict astronomical positions.<br><br><em>The student wants to emphasise the mechanism's complexity.</em>",
    "stem": "Which choice most effectively uses the notes to accomplish this goal?",
    "options": [
     {
      "t": "The Antikythera mechanism was recovered from a shipwreck in 1901.",
      "trap": "unsupported",
      "why": "True, and from the notes — but it says nothing about complexity. It answers a different question."
     },
     {
      "t": "Dating from roughly 100 BCE, the Antikythera mechanism contains at least 30 bronze gears.",
      "correct": true
     },
     {
      "t": "The Antikythera mechanism dates from roughly 100 BCE.",
      "trap": "unsupported",
      "why": "Age, not complexity. The goal is stated explicitly and this misses it."
     },
     {
      "t": "The Antikythera mechanism was used to predict astronomical positions.",
      "trap": "halfright",
      "why": "Closer — its function is impressive — but \"30 bronze gears\" is the detail that actually evidences complexity."
     }
    ],
    "explain": "The goal is complexity. Only the gear count is direct evidence of that, so the option built around <strong>30 bronze gears</strong> does the job."
   },
   {
    "passage": "A researcher writes: \"Coral reefs occupy less than one per cent of the ocean floor. They support around a quarter of all marine species.\"",
    "stem": "What is the main rhetorical purpose of the second sentence?",
    "options": [
     {
      "t": "To correct a misconception introduced in the first sentence.",
      "trap": "unsupported",
      "why": "Nothing in the first sentence is presented as mistaken."
     },
     {
      "t": "To highlight a disproportion between the reefs' size and their importance.",
      "correct": true
     },
     {
      "t": "To explain why coral reefs occupy so little of the ocean floor.",
      "trap": "contradicts",
      "why": "It gives no cause for the small area — that is the opposite of what the sentence does."
     },
     {
      "t": "To introduce a counterargument about marine biodiversity.",
      "trap": "unsupported",
      "why": "There is no argument being countered; the two facts work together."
     }
    ],
    "explain": "A very small area, a very large share of species. The second sentence exists to set up that contrast: <strong>disproportion</strong>."
   },
   {
    "passage": "Notes:<br>• Hedy Lamarr was a film actor in the 1930s and 1940s.<br>• She co-invented a frequency-hopping signal system in 1942.<br>• The system was intended to stop torpedo guidance being jammed.<br>• Related principles are used in modern Bluetooth and Wi-Fi.<br><br><em>The student wants to introduce Lamarr's invention to an audience unfamiliar with her.</em>",
    "stem": "Which choice most effectively uses the notes to accomplish this goal?",
    "options": [
     {
      "t": "Related principles are used in modern Bluetooth and Wi-Fi.",
      "trap": "narrow",
      "why": "It never mentions Lamarr, so it cannot introduce her to someone who does not know who she is."
     },
     {
      "t": "Hedy Lamarr, a film actor of the 1930s and 1940s, co-invented a frequency-hopping signal system in 1942.",
      "correct": true
     },
     {
      "t": "The frequency-hopping system was intended to stop torpedo guidance being jammed.",
      "trap": "narrow",
      "why": "A detail about the invention with no introduction of the inventor."
     },
     {
      "t": "Hedy Lamarr was a film actor in the 1930s and 1940s.",
      "trap": "narrow",
      "why": "It introduces her, but omits the invention the goal asks to introduce."
     }
    ],
    "explain": "The goal needs both halves: who she was, and what she invented. Only one option carries <strong>both</strong>."
   }
  ]
 },
 "speed": {
  "seconds": 71,
  "items": [
   {
    "passage": "Notes:<br>• The Voyager 1 probe launched in 1977.<br>• It crossed into interstellar space in 2012.<br>• It carries a gold-plated record of sounds from Earth.<br><br><em>Goal: emphasise the probe's longevity.</em>",
    "stem": "Which choice best accomplishes the goal?",
    "options": [
     "Voyager 1 carries a gold-plated record of sounds from Earth.",
     "Launched in 1977, Voyager 1 crossed into interstellar space 35 years later, in 2012.",
     "Voyager 1 crossed into interstellar space in 2012.",
     "Voyager 1 launched in 1977."
    ],
    "answer": 1,
    "skill": "Synthesis",
    "explain": "Longevity needs the span, which only the option pairing both dates provides."
   },
   {
    "passage": "\"The technique was dismissed for decades. It is now standard in every major laboratory.\"",
    "stem": "What is the purpose of the second sentence?",
    "options": [
     "To explain why the technique was dismissed.",
     "To mark a reversal in the technique's reception.",
     "To question the technique's reliability.",
     "To introduce a competing method."
    ],
    "answer": 1,
    "skill": "Purpose",
    "explain": "Dismissed, then standard — the sentence exists to register the reversal."
   },
   {
    "passage": "Notes:<br>• Ada Blackjack was the sole survivor of a 1921 Arctic expedition.<br>• She had no prior survival training.<br>• She survived alone for two years.<br><br><em>Goal: stress how unlikely her survival was.</em>",
    "stem": "Which choice best accomplishes the goal?",
    "options": [
     "Ada Blackjack took part in a 1921 Arctic expedition.",
     "Ada Blackjack survived alone for two years.",
     "With no prior survival training, Ada Blackjack survived alone in the Arctic for two years.",
     "Ada Blackjack was the sole survivor of the expedition."
    ],
    "answer": 2,
    "skill": "Synthesis",
    "explain": "Unlikelihood needs the lack of training set against the length of survival."
   },
   {
    "passage": "\"Most volcanic islands erode within a few million years. The Hawaiian chain preserves a record stretching back over 80 million.\"",
    "stem": "What is the purpose of the second sentence?",
    "options": [
     "To present an exception to the general pattern.",
     "To explain how volcanic islands erode.",
     "To question the accuracy of the first sentence.",
     "To give an example of rapid erosion."
    ],
    "answer": 0,
    "skill": "Purpose",
    "explain": "The general rule, then a case that departs from it."
   },
   {
    "passage": "Notes:<br>• The library holds 40,000 manuscripts.<br>• Only 3,000 have been catalogued.<br><br><em>Goal: emphasise how much work remains.</em>",
    "stem": "Which choice best accomplishes the goal?",
    "options": [
     "The library holds 40,000 manuscripts.",
     "Of the library's 40,000 manuscripts, only 3,000 have been catalogued.",
     "The library has catalogued 3,000 manuscripts.",
     "Cataloguing manuscripts is slow work."
    ],
    "answer": 1,
    "skill": "Synthesis",
    "explain": "The remaining work is visible only when both numbers appear together."
   },
   {
    "passage": "\"Early photographs required exposures of several minutes. Sitters were often clamped into head braces to stay still.\"",
    "stem": "What is the purpose of the second sentence?",
    "options": [
     "To contradict the first sentence.",
     "To give a consequence of the long exposure times.",
     "To introduce a new photographic technique.",
     "To question whether the exposures were really that long."
    ],
    "answer": 1,
    "skill": "Purpose",
    "explain": "The braces are a direct result of the exposure times."
   },
   {
    "passage": "Notes:<br>• Mangroves cover a small fraction of tropical coastline.<br>• They store up to four times more carbon per hectare than rainforest.<br><br><em>Goal: argue for their protection on climate grounds.</em>",
    "stem": "Which choice best accomplishes the goal?",
    "options": [
     "Mangroves grow along tropical coastlines.",
     "Mangroves cover only a small fraction of tropical coastline.",
     "Despite covering a small area, mangroves store up to four times more carbon per hectare than rainforest.",
     "Rainforests store large amounts of carbon."
    ],
    "answer": 2,
    "skill": "Synthesis",
    "explain": "The climate argument needs the carbon figure, and the contrast with area sharpens it."
   },
   {
    "passage": "\"The map contained several deliberate errors. Cartographers used them to detect unauthorised copying.\"",
    "stem": "What is the purpose of the second sentence?",
    "options": [
     "To criticise the mapmakers' carelessness.",
     "To explain the reason for the errors.",
     "To contrast two mapping methods.",
     "To question the map's accuracy."
    ],
    "answer": 1,
    "skill": "Purpose",
    "explain": "It supplies the motive, turning apparent mistakes into a deliberate device."
   }
  ]
 },
 "sim": {
  "seconds": 71,
  "items": [
   {
    "passage": "Notes:<br>• The seed vault is built into Arctic permafrost.<br>• It holds over a million seed samples.<br>• It is designed to function without power.<br><br><em>Goal: emphasise the vault's resilience.</em>",
    "stem": "Which choice best accomplishes the goal?",
    "options": [
     "The seed vault holds over a million seed samples.",
     "Built into Arctic permafrost, the vault is designed to function even without power.",
     "The seed vault is located in the Arctic.",
     "Seed vaults preserve crop diversity."
    ],
    "answer": 1,
    "skill": "Synthesis",
    "explain": "Resilience is carried by the permafrost siting plus the no-power design."
   },
   {
    "passage": "\"The orchestra had rehearsed the piece for months. On the night, the lead violinist played from memory.\"",
    "stem": "What is the purpose of the second sentence?",
    "options": [
     "To contradict the first sentence.",
     "To show a result of the long preparation.",
     "To criticise the violinist.",
     "To introduce a different piece."
    ],
    "answer": 1,
    "skill": "Purpose",
    "explain": "Playing from memory follows from months of rehearsal."
   },
   {
    "passage": "Notes:<br>• The tunnel took 14 years to complete.<br>• Original estimates allowed 4 years.<br><br><em>Goal: emphasise the overrun.</em>",
    "stem": "Which choice best accomplishes the goal?",
    "options": [
     "The tunnel took 14 years to complete.",
     "The tunnel was originally estimated at 4 years.",
     "Estimated at 4 years, the tunnel took 14 to complete.",
     "Tunnelling is difficult work."
    ],
    "answer": 2,
    "skill": "Synthesis",
    "explain": "An overrun is only visible when estimate and actual appear together."
   },
   {
    "passage": "\"Few of the letters survive. Those that do are held in three separate national collections.\"",
    "stem": "What is the purpose of the second sentence?",
    "options": [
     "To explain why so few survive.",
     "To specify where the surviving letters are.",
     "To question their authenticity.",
     "To contrast two archives."
    ],
    "answer": 1,
    "skill": "Purpose",
    "explain": "It locates the survivors introduced in the first sentence."
   },
   {
    "passage": "Notes:<br>• The alloy was discovered by accident.<br>• It is now used in every commercial aircraft.<br><br><em>Goal: stress the gap between its origin and its importance.</em>",
    "stem": "Which choice best accomplishes the goal?",
    "options": [
     "The alloy was discovered by accident.",
     "The alloy is used in commercial aircraft.",
     "Discovered by accident, the alloy is now used in every commercial aircraft.",
     "Alloys are important in aviation."
    ],
    "answer": 2,
    "skill": "Synthesis",
    "explain": "The gap needs both the accidental origin and the universal use."
   }
  ],
  "teachback": [
   "Where in a synthesis prompt is the goal always stated?",
   "Give an example of an answer that is completely true and still wrong.",
   "For one purpose question above, say what the sentence is doing rather than what it says."
  ]
 }
};
