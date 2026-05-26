const englishTopics = [
  // SECTION 1: GRAMMAR & SYNTAX (6 topics)
  
  {
    id: "eng-1-1",
    module: "Section 1: Grammar & Syntax",
    title: "Subject-Verb Agreement",
    analogy: "Subject and verb must match in number like a data type check in programming. A singular subject runs a singular verb; plural subjects run plural verbs. It's a type mismatch error if they don't align.",
    mechanics: "<p><strong>Core Rules:</strong></p><p><strong>Rule 1:</strong> One subject = singular verb. More than one = plural verb.</p><p><strong>Rule 2 (Intervening Phrases):</strong> Extra info wedged between subject and verb does NOT change the verb. Phrases like 'along with', 'as well as', 'together with', 'including' are decorative metadata — ignore them.</p><p><strong>Rule 3 (Indefinite Pronouns):</strong><br/>Always Singular: everyone, somebody, each, neither, one<br/>Always Plural: both, few, many, several<br/>Context-Dependent: some, any, none, all, most</p><p><strong>Rule 4 (Compound Subjects):</strong> X and Y → PLURAL | Either X or Y → verb matches Y | Neither X nor Y → verb matches Y</p><p><strong>Rule 5 (Collective Nouns):</strong> team, class, committee, group, staff, jury are usually SINGULAR.</p><p><strong>Rule 6 (Inverted Sentences):</strong> When verb comes before subject, find the subject first. 'There are three reasons...' → reasons is plural.</p>",
    examRule: "Find the actual subject by deleting intervening phrases. Match the verb to that subject, not the nearest noun.",
    traps: "Test-makers insert long phrases between subject and verb to confuse you. They want you to agree the verb with the noun closest to it. Draw a mental line through the intervening phrase and match the verb to the true subject.",
    challenge: {
      question: "The quality of the research papers _______ been questioned by the committee.",
      options: [
        "A) have",
        "B) has",
        "C) are",
        "D) were"
      ],
      correct: "B",
      explanation: "The subject is 'quality' (singular), not 'papers.' Delete 'of the research papers' as an intervening phrase. 'Quality' requires the singular verb 'has.' Answer: B"
    }
  },

  {
    id: "eng-1-2",
    module: "Section 1: Grammar & Syntax",
    title: "Tense Consistency",
    analogy: "Verb tenses are like version control branches in Git. You stay on one timeline (one branch) unless there's a clear reason to merge or checkout another. Randomly switching tenses without a logical reason is like uncommitted changes breaking the build.",
    mechanics: "<p><strong>The Six Most Common Tenses:</strong></p><table style='border-collapse:collapse; width:100%'><tr><td style='border:1px solid #ddd; padding:8px'><strong>Tense</strong></td><td style='border:1px solid #ddd; padding:8px'><strong>Example</strong></td></tr><tr><td style='border:1px solid #ddd; padding:8px'>Simple Past</td><td style='border:1px solid #ddd; padding:8px'>He studied.</td></tr><tr><td style='border:1px solid #ddd; padding:8px'>Simple Present</td><td style='border:1px solid #ddd; padding:8px'>He studies.</td></tr><tr><td style='border:1px solid #ddd; padding:8px'>Past Perfect</td><td style='border:1px solid #ddd; padding:8px'>He had studied before the test.</td></tr><tr><td style='border:1px solid #ddd; padding:8px'>Present Perfect</td><td style='border:1px solid #ddd; padding:8px'>He has studied all week.</td></tr></table><p><strong>Legitimate Tense Shifts:</strong> You CAN shift tenses when comparing events at different times, stating general truths, or using time signal words (before, after, since).</p><p><strong>Past Perfect Rule:</strong> If two things both happened in the past and one happened BEFORE the other, the earlier event uses 'had + past participle.'</p>",
    examRule: "Identify the main tense of the passage. All verbs should remain consistent unless a time signal or logical shift justifies a change.",
    traps: "The sneaky switch: the wrong verb is buried mid-sentence, surrounded by correct verbs. General truths in past stories: stay in present tense (Darwin observed that animals 'adapt,' not 'adapted').",
    challenge: {
      question: "Last year, she _______ the report and _______ it to the manager before the deadline arrives.",
      options: [
        "A) completes; submits",
        "B) completed; submitted",
        "C) has completed; submitted",
        "D) completed; submits"
      ],
      correct: "B",
      explanation: "The passage is in simple past tense ('Last year'). Both actions happened in the past: she completed and submitted the report. Both verbs should be simple past. 'Before the deadline arrives' is incorrect — it should be 'before the deadline arrived' to maintain consistency. Answer: B"
    }
  },

  {
    id: "eng-1-3",
    module: "Section 1: Grammar & Syntax",
    title: "Misplaced & Dangling Modifiers",
    analogy: "Modifiers are like HTML attribute tags that must be attached to the correct element. A modifier placed on the wrong noun creates a logically broken sentence — and often an unintentionally hilarious one.",
    mechanics: "<p><strong>Type 1: Dangling Modifier</strong> — The phrase describes something, but the noun being described is completely missing.</p><p>Example: 'Exhausted from the exam, the bed was collapsed onto.' ✗ (The bed is not exhausted; a person is.)</p><p><strong>Type 2: Misplaced Modifier</strong> — The describing phrase is in the sentence but attached to the wrong noun.</p><p>Example: 'She served pasta to the guests that was overcooked.' ✗ (The clause modifies 'guests,' implying they were overcooked.)</p><p><strong>The Fix:</strong> Make sure the noun being described immediately follows the comma after the opening phrase.</p><p><strong>Step-by-Step:</strong><br/>1. Find the modifier (usually an introductory phrase before a comma)<br/>2. Ask: 'What is this phrase describing? Who is actually doing/experiencing this?'<br/>3. Check: Does that noun appear right after the comma?<br/>4. If not, restructure the sentence.</p>",
    examRule: "The first noun after an introductory comma must be the one performing or experiencing the action described in the modifier.",
    traps: "Test-makers give you an intro phrase followed by a comma, then swap the intended subject with a different noun. Always ask: 'Who is actually doing the action described?'",
    challenge: {
      question: "_______ from the laboratory, the equipment was carefully stored in the cabinet.",
      options: [
        "A) Removed",
        "B) After being removed",
        "C) The technician removed it",
        "D) Following the removal of it"
      ],
      correct: "A",
      explanation: "The opening phrase describes who or what was removed. The subject after the comma must be the person/thing that performed the removal. 'Equipment was carefully stored' — but who removed it? This is a dangling modifier. The correct version: 'Removed from the laboratory, [the technician] carefully stored the equipment.' OR restructure entirely. Among the options, A creates the least awkward result. Answer: A"
    }
  },

  {
    id: "eng-1-4",
    module: "Section 1: Grammar & Syntax",
    title: "Pronoun Cases & Antecedents",
    analogy: "A pronoun is a pointer variable; the antecedent is the memory address it points to. A mismatched pronoun is a null pointer or type mismatch — the program doesn't know what object to reference.",
    mechanics: "<p><strong>Pronoun Cases:</strong></p><p><strong>Subjective:</strong> I, you, he, she, it, we, they, who — used as subject</p><p><strong>Objective:</strong> me, you, him, her, it, us, them, whom — used as object of verb/preposition</p><p><strong>Possessive:</strong> my, mine, your, yours, his, her, hers, its, our, ours, their, theirs</p><p><strong>Who vs. Whom Test:</strong> Replace with he/she (subjective) or him/her (objective).<br/>If 'he' works → use 'who'<br/>If 'him' works → use 'whom'</p><p><strong>Pronoun Agreement Rules:</strong><br/>1. Singular antecedent → singular pronoun<br/>2. Plural antecedent → plural pronoun<br/>3. Indefinite pronouns (everyone, anybody, each) are SINGULAR<br/>4. Every pronoun must have exactly one clear antecedent</p>",
    examRule: "Match pronouns to their antecedents in both number and case. For who/whom, use the he/him substitution test.",
    traps: "Ambiguous pronouns: 'Maria told Ana that she had passed.' Who passed? The correct fix is to rewrite: 'Maria told Ana that Ana had passed.' Also watch collective nouns: 'The team won its championship' (its, not their).",
    challenge: {
      question: "The researcher _______ the committee selected won an award for _______ innovative approach to data analysis.",
      options: [
        "A) who; her",
        "B) whom; her",
        "C) who; theirs",
        "D) whom; theirs"
      ],
      correct: "B",
      explanation: "First blank: 'The committee selected [him/her]' — objective case. Use 'whom.' Second blank: The researcher is singular, so use 'her' (not 'theirs'). Answer: B"
    }
  },

  {
    id: "eng-1-5",
    module: "Section 1: Grammar & Syntax",
    title: "Parallelism",
    analogy: "Parallelism is consistent data formatting in an array. All items in a list must be the same type. Mixed types cause errors; mixed grammatical formats cause awkward, incorrect writing.",
    mechanics: "<p><strong>Core Rule:</strong> When you list things, every item must be in the same grammatical format.</p><p><strong>Examples of Parallel Formats:</strong></p><ul><li>All gerunds (-ing): 'coding, reading, swimming'</li><li>All infinitives (to+verb): 'to code, to read, to swim'</li><li>All nouns: 'code, books, swimming'</li><li>All adjectives: 'fast, reliable, efficient'</li></ul><p><strong>Parallel Pairs:</strong> X and Y, X but Y, X or Y — both sides must match.</p><p><strong>Parallel Comparisons:</strong> Both sides of a comparison must have identical structure.</p><p><strong>Correlative Conjunctions:</strong> 'Not only X but also Y' — X and Y must be parallel.<br/>'Either X or Y' — X and Y must be parallel.</p>",
    examRule: "The first item in a list establishes the format; every subsequent item must match that format.",
    traps: "The non-parallel item is usually the LAST item in a list. You scan the first two items, they look fine, and you miss the last one breaking the pattern. Read EVERY item.",
    challenge: {
      question: "The new software is faster, more reliable, and _______ memory-intensive than the previous version.",
      options: [
        "A) uses less",
        "B) it uses less",
        "C) less",
        "D) with less"
      ],
      correct: "C",
      explanation: "The list uses the adjective format: 'faster' (adj), 'more reliable' (adj), so the third item must also be an adjective phrase. 'Less memory-intensive' fits the pattern. Among the options, C is the most concise and parallel. Answer: C"
    }
  },

  {
    id: "eng-1-6",
    module: "Section 1: Grammar & Syntax",
    title: "Correlative Conjunctions",
    analogy: "Correlative conjunctions are paired tags like HTML: <b> must close with </b>. You cannot open one without the other, and the content between them must be logically equivalent.",
    mechanics: "<p><strong>Common Correlative Pairs:</strong></p><ul><li>Either...or</li><li>Neither...nor</li><li>Not only...but also</li><li>Both...and</li><li>Whether...or</li><li>As...as</li></ul><p><strong>Rule 1: Parallelism After Conjunctions</strong> — Whatever follows the first conjunction must match what follows the second.</p><p><strong>Rule 2: Neither/Nor Agreement</strong> — The verb agrees with the subject closest to it (after 'nor').</p><p><strong>Rule 3: Don't Add 'Not' to Neither/Nor</strong> — 'Neither she nor I was responsible' ✓ 'Neither she nor I was not responsible' ✗ (double negative)</p><p><strong>Rule 4: Placement</strong> — Position the first conjunction carefully so elements remain parallel.</p>",
    examRule: "Keep parallel structure on both sides of correlative conjunction pairs. Verb agreement with neither/nor follows the closer subject.",
    traps: "Misplacing the first conjunction breaks parallelism. Using 'neither...or' instead of 'neither...nor.' Watch for verb agreement errors with neither/nor pairs.",
    challenge: {
      question: "She is _______ a talented artist _______ an accomplished musician.",
      options: [
        "A) both; and",
        "B) neither; or",
        "C) not only; but also",
        "D) either; or"
      ],
      correct: "C",
      explanation: "The sentence suggests TWO positive accomplishments ('talented artist' AND 'accomplished musician'). 'Not only...but also' is used to emphasize both positive qualities. 'Both...and' would also work, but among the options given, C is the most emphatic and elegant. Answer: C"
    }
  },

  // SECTION 2: VOCABULARY (2 topics)

  {
    id: "eng-2-1",
    module: "Section 2: Vocabulary",
    title: "Context Clues",
    analogy: "Unknown words are like undocumented functions in someone else's code. But the code around them — inputs, outputs, conditions — tells you what they do even without documentation. You infer their behavior from context.",
    mechanics: "<p><strong>Type 1: Definition/Explanation Clue</strong><br/>The sentence directly defines the word. Signal phrases: 'which means', 'that is', 'in other words', ', or'<br/>Example: 'The scientist studied osmosis, the process by which water moves through a membrane.'</p><p><strong>Type 2: Synonym Clue</strong><br/>A familiar word with similar meaning appears nearby.<br/>Example: 'The student was tenacious; her persistent, never-give-up attitude impressed judges.' (tenacious = persistent)</p><p><strong>Type 3: Antonym/Contrast Clue</strong><br/>Opposite meaning nearby. Signal words: but, however, although, unlike, rather than, on the other hand<br/>Example: 'While her brother was gregarious, she was shy.' (gregarious = outgoing)</p><p><strong>Type 4: Inference/General Context</strong><br/>No single clue word; piece together the overall situation.<br/>Example: 'After the flood, the village was in destitution — no food, no shelter, no water.' (destitution = extreme poverty)</p>",
    examRule: "Look for signal words (but, however, that is, also called). Find the clue (synonym, antonym, or definition). Substitute your guessed meaning back into the sentence to verify.",
    traps: "Contrast (especially with 'but', 'however', 'although') is the most reliable clue type. But/However = opposite meaning. Don't miss subtle signal phrases like semicolons, which often introduce elaboration.",
    challenge: {
      question: "The CEO was known for her **frugality**; she never wasted money and always found the cheapest solutions.",
      options: [
        "A) generosity with resources",
        "B) extravagance in spending",
        "C) carefulness with money",
        "D) ability to manage accounts"
      ],
      correct: "C",
      explanation: "Signal: semicolon introduces elaboration. Clue: 'never wasted money', 'cheapest solutions' = careful with money. Frugality = thriftiness or carefulness with money. Answer: C"
    }
  },

  {
    id: "eng-2-2",
    module: "Section 2: Vocabulary",
    title: "Root Word Analysis",
    analogy: "Root words are like modular packages. A root like 'bio' = 'life' is a library. Prefixes and suffixes are parameters. 'bio + logy' = biology (study of life). Decode meaning by reading the components.",
    mechanics: "<p><strong>Common Scientific Prefixes:</strong><br/>macro- (large), micro- (small), hypo- (under), hyper- (over), photo- (light), bio- (life), geo- (earth), hydro- (water), thermo- (heat), neuro- (nerve), cardio- (heart), anti- (against), trans- (across), inter- (between), sub- (under)</p><p><strong>Common Roots:</strong><br/>-port- (carry), -rupt- (break), -script-/-scrib- (write), -struct- (build), -form- (shape), -mit-/-miss- (send), -duc-/-duct- (lead), -spect- (look), -fact-/-fect- (make)</p><p><strong>Common Suffixes:</strong><br/>-ify/-ize (to make), -tion/-sion (act/result), -ment (state), -ness (state), -able/-ible (capable), -ous/-ious (having quality), -ist (person), -logy (study of), -phobia (fear of), -meter (measure), -graph (write)</p><p><strong>Process:</strong> Break word into parts → Translate each part → Combine meanings for working definition</p>",
    examRule: "Systematically break down complex words. Look for recognizable prefixes, roots, and suffixes from the master lists.",
    traps: "Watch 'in-' prefix — sometimes means 'not' (incorrect), sometimes means 'into' (inflammable = can catch fire, not 'not flammable'). Always verify with context.",
    challenge: {
      question: "An **electroencephalogram** measures...",
      options: [
        "A) muscle contraction strength",
        "B) electrical activity in the brain",
        "C) sound wave frequency",
        "D) heart rhythm patterns"
      ],
      correct: "B",
      explanation: "Break it down: electro- (electricity) + encephalo- (brain) + -gram (written record) = written record of brain electrical activity. An EEG measures brain electrical activity. Answer: B"
    }
  },

  // SECTION 3: READING COMPREHENSION (2 topics)

  {
    id: "eng-3-1",
    module: "Section 3: Reading Comprehension",
    title: "Skimming & Scanning Strategies",
    analogy: "Skimming = reading the README.md for project overview. Scanning = using grep to find a specific keyword. Skimming gives you the schema; scanning extracts the data you need.",
    mechanics: "<p><strong>The SQ3R Protocol (Your Reading Algorithm):</strong></p><p><strong>SURVEY (5 seconds):</strong> Skim title, first sentence of each paragraph, last paragraph. Build a mental index.</p><p><strong>QUESTION (Before reading):</strong> Read the questions first. Now you know what data you're extracting. Transform from passive reader to active data extractor.</p><p><strong>READ (Actively):</strong> Read the passage hunting for answers. Underline key names, dates, comparisons, conclusion words.</p><p><strong>RECITE (Quick mental summary):</strong> After each paragraph, summarize the main point in one line.</p><p><strong>REVIEW (Verification):</strong> Go back to the relevant passage section. Don't rely on memory; verify with the text.</p><p><strong>Signal Words to Watch:</strong> But, however, although, yet, despite (CONTRAST); Therefore, thus, hence (CONCLUSION); Furthermore, moreover (ADDITION); For example (EXAMPLE)</p>",
    examRule: "Read the questions FIRST. Then read the passage to find answers. Active extraction beats passive reading.",
    traps: "Don't get lost in technical details on first pass. Scientific passages follow predictable structure: Problem → Background → Method → Finding → Conclusion. Know this structure; know where to look.",
    challenge: {
      question: "Which reading strategy is BEST for finding a specific fact in a long scientific passage?",
      options: [
        "A) Skimming the entire passage slowly",
        "B) Scanning for the specific keyword or concept",
        "C) Reading every word carefully from start to finish",
        "D) Memorizing key details as you read"
      ],
      correct: "B",
      explanation: "Scanning is the targeted search strategy — like grep. It hunts for specific keywords/concepts without reading every word. For extracting specific data from dense text, scanning is most efficient. Answer: B"
    }
  },

  {
    id: "eng-3-2",
    module: "Section 3: Reading Comprehension",
    title: "Spotting Exam Traps",
    analogy: "Exam traps are like logic bombs in code — plausible on first glance but subtly broken. One wrong word, one extreme claim, one piece of outside knowledge can detonate the entire answer.",
    mechanics: "<p><strong>TRAP 1: The 'Mostly True' Trap</strong> — One small detail makes an otherwise correct answer wrong.</p><p>Fix: Verify EVERY claim in an answer choice against the passage. One word flip = completely wrong.</p><p><strong>TRAP 2: The 'Outside Knowledge' Trap</strong> — An answer is scientifically true BUT not stated in the passage.</p><p>Rule: The passage is the ONLY truth. Prior knowledge is irrelevant. If the passage doesn't say it, eliminate it.</p><p><strong>TRAP 3: The 'Extreme Word' Trap</strong> — Extreme words (always, never, all, none, completely, impossible) are usually wrong.</p><p>Extreme → Suspect. Qualified (often, seldom, many, probably, typically) → Usually correct.</p><p><strong>TRAP 4: The 'Opposite Meaning' Trap</strong> — Answer reverses cause/effect or inverts who did what.</p><p>Fix: Double-check direction of relationships (who did the action, what caused what).</p>",
    examRule: "For each answer: (1) Verify every claim against the passage. (2) Ignore outside knowledge. (3) Beware extreme words. (4) Check direction of relationships.",
    traps: "The 'mostly true' trap is the most dangerous — it feels right because most of it IS right. Read every word. Extreme words in answers are red flags unless the passage used the same absolute language.",
    challenge: {
      question: "A passage states: 'Regular exercise **can** reduce the risk of heart disease.' Which answer is CORRECT?",
      options: [
        "A) Exercise always prevents heart disease.",
        "B) Exercise completely eliminates the risk of heart disease.",
        "C) Exercise may lower the likelihood of heart disease.",
        "D) Exercise sometimes cures heart disease."
      ],
      correct: "C",
      explanation: "The passage uses qualified language ('can reduce'). Options A and B use extreme words ('always', 'completely') not supported. Option D ('cures') goes beyond the passage. Option C ('may lower the likelihood') matches the passage's qualified tone. Answer: C"
    }
  },

  // SECTION 4: LINGUISTIC ABILITY (1 topic)

  {
    id: "eng-4-1",
    module: "Section 4: Linguistic Ability",
    title: "Sentence Arrangement & Paragraph Sequencing",
    analogy: "You're reassembling disassembled code. Each sentence is a line. The function runs correctly only if lines are in the right order: initialize variables, process, then output. You cannot call a variable before it's defined.",
    mechanics: "<p><strong>Step 1: Find the TOPIC SENTENCE (First sentence)</strong><br/>Characteristics: Broad and general | No pronoun start | No contrast word (but, however) | No specific example</p><p><strong>Step 2: Find the CONCLUDING SENTENCE (Last sentence)</strong><br/>Uses signal words: therefore, thus, in conclusion, finally, ultimately | Makes a summary/final judgment | Echoes the topic sentence</p><p><strong>Step 3: Use TRANSITION WORDS as Logical Connectors</strong><br/>First, Second, Then (sequencing) | However, Yet (contrast) | For example (elaboration) | Therefore, Thus (conclusion) | Furthermore, Moreover (addition)</p><p><strong>Step 4: Trace Pronoun References</strong><br/>If sentence C says 'This phenomenon occurs...' — sentence B must have introduced that phenomenon. Chains reveal mandatory order.</p><p><strong>Step 5: Apply New-to-Known Principle</strong><br/>General topic INTRODUCED → EXPLAINED with specific details/examples → CONCLUDED</p>",
    examRule: "Topic sentence first (broad, no pronouns). Supporting details middle (use transitions). Conclusion last (therefore/thus/in summary). Pronoun chains determine order.",
    traps: "An attractive first sentence with specific details is NOT the topic sentence. Specific details are support, not introduction. Any sentence with contrast words (but, however) or pronouns (this, these) cannot be first.",
    challenge: {
      question: "Which sentence is BEST as the opening of a paragraph about photosynthesis?",
      options: [
        "A) For instance, plants convert sunlight into glucose during photosynthesis.",
        "B) Photosynthesis is the process by which plants convert light energy into chemical energy.",
        "C) This process occurs in the chloroplasts of plant cells.",
        "D) Therefore, understanding photosynthesis is crucial to biology."
      ],
      correct: "B",
      explanation: "B is broad and general, introduces the topic, has no pronouns or contrast words, and no 'for instance.' A starts with an example (support, not intro). C starts with 'this' (pronoun, not first). D starts with 'therefore' (conclusion, not intro). Answer: B"
    }
  },

  // SECTION 5: BONUS MODULE (5 topics)

  {
    id: "eng-5-1",
    module: "Section 5: Bonus Topics",
    title: "Active vs. Passive Voice",
    analogy: "Active = direct function call: user.submitForm(). Passive = event received: formSubmitEvent was triggered by user. Active is direct; passive puts the action front and center but obscures the agent.",
    mechanics: "<p><strong>Active Voice Formula:</strong> Subject → Verb → Object</p><p>Example: 'The engineer designed the circuit.'</p><p><strong>Passive Voice Formula:</strong> Object → was/were + past participle → by Subject</p><p>Example: 'The circuit was designed by the engineer.'</p><p><strong>When Passive is Acceptable:</strong><br/>• Agent (doer) is unknown: 'The file was deleted.'<br/>• Agent is unimportant: 'The experiment was conducted at 25°C.'<br/>• Formal scientific writing (very common)</p><p><strong>When to Prefer Active:</strong><br/>• General writing when clarity and directness matter<br/>• Exam questions often ask you to convert one to the other</p><p><strong>Conversion Tip:</strong> In a passive sentence, the 'by [agent]' IS the real subject in active voice. 'Data was analyzed by researchers' → 'Researchers analyzed the data.'</p>",
    examRule: "Recognize both active and passive forms. Know the conversion formula. Understand when each is appropriate.",
    traps: "When converting passive to active, correctly identify the subject and object. Don't confuse who performed the action with what received it.",
    challenge: {
      question: "Convert to ACTIVE voice: 'Mistakes were made by the development team.'",
      options: [
        "A) The development team made mistakes.",
        "B) Mistakes have been made by developers.",
        "C) The mistakes were made intentionally.",
        "D) Developers made the mistakes intentionally."
      ],
      correct: "A",
      explanation: "In passive 'by the development team' is the real subject. 'Mistakes' is what received the action. Active: Subject (team) → Verb (made) → Object (mistakes). Answer: A"
    }
  },

  {
    id: "eng-5-2",
    module: "Section 5: Bonus Topics",
    title: "Commonly Confused Words (Homophones & Near-Pairs)",
    analogy: "Like variable naming conflicts: user_data vs userData vs userdata. One wrong choice crashes the logic. These are hardcoded language rules you must memorize.",
    mechanics: "<p><strong>Master Pairs:</strong></p><p><strong>affect (verb) vs effect (noun):</strong> Affect = Action (verb). Effect = End result (noun).</p><p><strong>accept vs except:</strong> Accept = to receive/agree. Except = excluding.</p><p><strong>principal vs principle:</strong> Principal = main person/thing. Principle = a rule/value.</p><p><strong>complement vs compliment:</strong> Complement = completes. Compliment = praise.</p><p><strong>fewer vs less:</strong> Fewer = countable (fewer students). Less = uncountable (less water).</p><p><strong>lay vs lie:</strong> Lay = to place something (needs object). Lie = to recline (no object).</p><p><strong>its vs it's:</strong> Its = possessive. It's = it is/it has.</p><p><strong>than vs then:</strong> Than = comparison. Then = at that time/next.</p><p><strong>between vs among:</strong> Between = exactly two. Among = three or more.</p>",
    examRule: "Memorize the distinction for each pair. On the exam, verify which word is correct by checking the meaning of the sentence.",
    traps: "affect/effect is the most-tested pair. Treat affect=verb, effect=noun 99% of the time. Also watch possessive pronouns (its/whose) vs contractions (it's/who's).",
    challenge: {
      question: "The new policy had a significant _______ on employee productivity, and many workers were _______ to adapt quickly.",
      options: [
        "A) affect; reluctant",
        "B) effect; reluctant",
        "C) affect; reticent",
        "D) effect; reticent"
      ],
      correct: "B",
      explanation: "First blank: 'had a significant [noun]' = effect (result/consequence). Second blank: 'reluctant' (adjective) and 'reticent' (adjective meaning unwilling to speak) both work, but 'reluctant' is more common for 'unwilling to adapt.' Answer: B (effect; reluctant)"
    }
  },

  {
    id: "eng-5-3",
    module: "Section 5: Bonus Topics",
    title: "Idiomatic Expressions & Preposition Pairs",
    analogy: "Reserved keywords in a programming language. You can't rename them or swap them out. 'break' means 'break,' not 'pause.' Fixed terms; memorize them.",
    mechanics: "<p><strong>Preposition Pair Rules:</strong></p><p><strong>agree with (person):</strong> I agree with her. | <strong>agree to (plan):</strong> He agreed to the terms. | <strong>agree on (decision):</strong> They agreed on a solution.</p><p><strong>differ from (things):</strong> This model differs from the other. | <strong>differ with (person's opinion):</strong> I differ with you on this.</p><p><strong>consist of:</strong> The package consists of three modules.</p><p><strong>comply with:</strong> You must comply with regulations.</p><p><strong>responsible for:</strong> He is responsible for the error.</p><p><strong>result in (cause→effect):</strong> The bug resulted in data loss. | <strong>result from (effect←cause):</strong> Data loss resulted from the bug.</p><p><strong>compared to (similarity):</strong> Compared to last year... | <strong>compared with (differences):</strong> Compared with the old system...</p>",
    examRule: "Memorize the preposition pairs. On the exam, when you see a preposition after a verb/adjective, recall the correct pair from memory.",
    traps: "Exam swaps a correct preposition with a plausible but wrong one. The sentence sounds vaguely okay to untrained ears. Example: 'She is capable to solving' (WRONG — capable of).",
    challenge: {
      question: "The new design _______ the old one in efficiency, _______ reduced maintenance costs.",
      options: [
        "A) differs from; resulted in",
        "B) is different to; result in",
        "C) differs with; resulting in",
        "D) is different from; resulting in"
      ],
      correct: "D",
      explanation: "First blank: 'differs from' (comparing things). 'Different from' (comparing nouns) also works — option D uses 'different from.' Second blank: 'resulting in' (participial phrase showing the result/consequence). Answer: D"
    }
  },

  {
    id: "eng-5-4",
    module: "Section 5: Bonus Topics",
    title: "Sentence Completion (Logical Inference)",
    analogy: "Auto-completing a function call with the right parameters. Surrounding code tells you exactly what data type and value the blank needs.",
    mechanics: "<p><strong>The Strategy:</strong></p><p><strong>Step 1: Identify the Relationship</strong><br/>• Contrast (but, however, although) → blank word = opposite meaning<br/>• Cause-effect (because, therefore) → blank word = logical consequence<br/>• Similarity (and, similarly) → blank word = same tone/meaning<br/>• Definition (colon, that is) → blank = restatement/explanation</p><p><strong>Step 2: Predict Your Own Word</strong><br/>Before looking at options, mentally fill the blank. Then choose the closest match from options.</p><p><strong>Step 3: Eliminate by Tone and Direction</strong><br/>Is the sentence positive or negative? Eliminate options with wrong polarity.</p><p><strong>For Two-Blank Questions:</strong> Test BOTH blanks. An option perfect for the first blank might clash with the second.</p>",
    examRule: "Identify the logical relationship first. Predict your answer before looking at options. For two blanks, verify both work together.",
    traps: "The attractive distractor: perfect for the first blank but clashes with the second (two-blank questions). Always read the full sentence with both blanks filled before choosing.",
    challenge: {
      question: "Although the experiment was _______, the researchers were _______ to publish the results in a peer-reviewed journal.",
      options: [
        "A) successful; eager",
        "B) inconclusive; reluctant",
        "C) perfect; motivated",
        "D) complete; obligated"
      ],
      correct: "B",
      explanation: "The word 'Although' signals contrast. If the experiment was successful (positive), researchers should be eager (positive) — no contrast. If inconclusive (negative), researchers reluctant (negative) — makes sense as a contrast: 'Although the experiment wasn't conclusive, they still published.' Answer: B"
    }
  },

  {
    id: "eng-5-5",
    module: "Section 5: Bonus Topics",
    title: "Tone, Purpose & Author's Intent",
    analogy: "Every function has a purpose (what it does) and a mode (how aggressively/gently it operates). Tone = the 'attitude' of the code. Different tone = different intent.",
    mechanics: "<p><strong>Common Author Purposes:</strong><br/>To INFORM (neutral, facts, stats) | To PERSUADE (loaded language, one-sided) | To ENTERTAIN (narrative, humor, stories) | To DESCRIBE (adjectives, sensory language) | To ANALYZE (components, cause-effect) | To CRITIQUE (flaws, evaluative)</p><p><strong>Tone Word Categories:</strong></p><p><strong>Positive:</strong> admiring, enthusiastic, optimistic, encouraging, celebratory</p><p><strong>Negative:</strong> critical, pessimistic, sarcastic, cynical, bitter, condescending</p><p><strong>Neutral:</strong> objective, analytical, informative, detached, clinical, impartial</p><p><strong>Nuanced:</strong> nostalgic, ambivalent, resigned, ironic, cautious</p><p><strong>How to Read Tone:</strong><br/>1. Word choice (diction) — positive, negative, neutral?<br/>2. What the author FOCUSES on reveals purpose<br/>3. Opinion markers (I believe, clearly, unfortunately) show author has opinion<br/>4. Match your reading to provided tone options</p>",
    examRule: "Read for word choice and focus. Distinguish tone from topic (a sad topic doesn't mean sad tone — could be objective analysis). Look for opinion markers.",
    traps: "Confusing TONE with TOPIC: a passage about tragedy doesn't automatically have tragic tone — could be objective. Extreme tone words are usually wrong unless the passage is truly emotional.",
    challenge: {
      question: "A scientific paper concludes: 'While the preliminary results are promising, further investigation is necessary before drawing definitive conclusions.' What is the author's tone?",
      options: [
        "A) ecstatic and celebratory",
        "B) cautiously optimistic",
        "C) critical and dismissive",
        "D) resigned and defeated"
      ],
      correct: "B",
      explanation: "Word choice: 'promising' (optimistic signal) but 'further investigation necessary' (cautionary). Not extreme ('ecstatic'), not dismissive, not defeated. Cautiously optimistic = qualified optimism with appropriate caution. Answer: B"
    }
  }
];

// Export for use in HTML/Node.js environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = englishTopics;
}
