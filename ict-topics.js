const ictTopics = [
  {
    id: "ict-1-1",
    module: "Module 1: Radix Transformations",
    title: "Binary and Radix Conversion",
    analogy: "Different numeric bases like counting objects using different box capacities—Decimal uses boxes of 10, Binary uses boxes of 2, and Hexadecimal uses boxes of 16.",
    mechanics: "<p><strong>Radix Equivalency:</strong> Decimal (Base-10) converts to Binary (Base-2), Octal (Base-8), and Hexadecimal (Base-16) using positional notation.</p><p><strong>Integer Conversion:</strong> Divide by target radix repeatedly, collecting remainders from bottom to top.</p><p><strong>Fractional Conversion:</strong> Multiply fractional part by target radix repeatedly, collecting integer drops from left to right.</p><p><strong>Example:</strong> 62.75₁₀ = 111110.11₂</p>",
    examRule: "Always isolate integer and fractional parts separately. Group binary-to-hex bits starting from the radix point outwards.",
    traps: "Exam options show inverted binary sequences to trick you. Group right-to-left for integers, left-to-right for fractions.",
    challenge: {
      question: "Convert the decimal value 28.5 to binary. Which representation is correct?",
      options: [
        "A) 11110.11₂",
        "B) 11100.1₂",
        "C) 10110.01₂",
        "D) 11010.11₂"
      ],
      correct: "B",
      explanation: "28₁₀ = 11100₂ (28÷2=14 R0, 14÷2=7 R0, 7÷2=3 R1, 3÷2=1 R1, 1÷2=0 R1). For 0.5: 0.5×2=1.0, so 0.5₁₀=.1₂. Therefore, 28.5₁₀=11100.1₂."
    }
  },
  {
    id: "ict-1-2",
    module: "Module 1: Radix Transformations",
    title: "2's Complement and Signed Integers",
    analogy: "2's Complement is like a circular number system where numbers wrap around—adding a small positive to a large negative can flip to positive, representing overflow.",
    mechanics: "<p><strong>Signed Integer Range (N bits):</strong> From -2^(N-1) to +2^(N-1) - 1</p><p><strong>Derivation for -X:</strong> (1) Express positive X in N-bit binary, (2) Invert all bits (1's complement), (3) Add 1 to LSB</p><p><strong>Decoding Negative:</strong> Check MSB for sign, subtract 1, invert bits to find magnitude, reapply negative sign</p><p><strong>Example:</strong> -45₁₀ in 8-bit: 00101101 → 11010010 → 11010011</p>",
    examRule: "If adding two positive numbers produces a negative sign bit, overflow has occurred. Never use overflow when adding opposite signs.",
    traps: "Questions hide overflow scenarios by adding values that produce sign bit corruption (e.g., +120 + +10 = negative result in 8-bit).",
    challenge: {
      question: "An 8-bit signed register holds 10011100₂. What is its decimal equivalent?",
      options: [
        "A) -28₁₀",
        "B) -100₁₀",
        "C) -99₁₀",
        "D) +156₁₀"
      ],
      correct: "B",
      explanation: "MSB is 1 (negative). Reverse 2's complement: 10011100 - 1 = 10011011, invert to 01100100 = 64+32+4 = 100₁₀, so result is -100₁₀."
    }
  },
  {
    id: "ict-2-1",
    module: "Module 2: Logic Gates",
    title: "Boolean Algebra and Logic Gates",
    analogy: "Logic gates are like security checkpoints—AND gates require all conditions met, OR gates need at least one, and NOT gates invert the result.",
    mechanics: "<p><strong>Boolean Laws:</strong> Identity (A·1=A, A+0=A), Null (A·0=0, A+1=1), Idempotent (A·A=A), Complementarity (A·Ā=0, A+Ā=1)</p><p><strong>Universal Gates:</strong> NAND (Y=Ā·B̄), NOR (Y=Ā+B̄)</p><p><strong>Minimization:</strong> Apply distributive property, factor common terms, use absorption law: A(A+B)=A</p><p><strong>Example:</strong> AB + ĀBC + AB̄C + AĈ minimizes to A + BC</p>",
    examRule: "Factor aggressively to find common terms. Use complementarity law (X+X̄=1) to eliminate variables in grouped expressions.",
    traps: "Distractors show expressions with bars placed incorrectly. Watch for answers that look similar but have missed factoring steps.",
    challenge: {
      question: "Which Boolean expression represents the simplified form of: Y = AB + AB̄ + ĀB?",
      options: [
        "A) A + B",
        "B) A·B",
        "C) A + B̄",
        "D) AB + B"
      ],
      correct: "A",
      explanation: "Factor A from first two terms: A(B+B̄) + ĀB = A(1) + ĀB = A + ĀB. Since A+ĀB means A dominates: applying absorption A+(ĀB)=A+B simplifies to A+B."
    }
  },
  {
    id: "ict-2-2",
    module: "Module 2: Logic Gates",
    title: "De Morgan's Theorems",
    analogy: "De Morgan's rules show that an AND gate with inverted inputs equals a NOR gate—gates can be restructured without changing logical meaning.",
    mechanics: "<p><strong>De Morgan's Theorem I:</strong> Ā+B̄ = (A·B)̄ — complement of sum equals product of complements</p><p><strong>De Morgan's Theorem II:</strong> Ā·B̄ = (A+B)̄ — complement of product equals sum of complements</p><p><strong>Application Rule:</strong> Break the bar (move it down), change the operator (+ becomes ·, · becomes +)</p><p><strong>Nested Example:</strong> Ā+(B·C)̄ → Ā·(B̄+C̄)</p>",
    examRule: "Apply De Morgan's laws stage by stage, working from outside in. Always move bars down and flip operators.",
    traps: "Simply putting bars over individual letters without changing operators is the #1 distractor. Test answers show Ā+B̄·C̄ when the correct answer needs careful operator transformation.",
    challenge: {
      question: "Apply De Morgan's theorem to simplify: (A+B·C)̄",
      options: [
        "A) Ā+B̄·C̄",
        "B) Ā·(B̄+C̄)",
        "C) (Ā+B̄)·(Ā+C̄)",
        "D) Ā·B̄+Ā·C̄"
      ],
      correct: "B",
      explanation: "Start with Ā+B·C̄. Apply De Morgan's to outer bar: Ā·(B·C)̄. Apply De Morgan's again to (B·C)̄: Ā·(B̄+C̄). This is the correct form."
    }
  },
  {
    id: "ict-3-1",
    module: "Module 3: Programming Controls",
    title: "Nested Loops and Trace Analysis",
    analogy: "Nested loops work like gears in a clock—the outer loop is the hour hand (slow), inner loop is the minute hand (fast)—the minute hand must complete its full rotation before the hour hand moves once.",
    mechanics: "<p><strong>Loop Structure:</strong> Initialization → Condition Check → Execute Body → Update Counter → Repeat</p><p><strong>Nested Execution:</strong> For each outer loop iteration, the entire inner loop executes from start to finish</p><p><strong>Trace Method:</strong> Create a state tracking table tracking i, j, conditions, and printed output for each iteration</p><p><strong>Example Output:</strong> For i=1 to 3 with j from i down to 1: prints '1 ' then '2 2 ' then '3 3 3 '</p>",
    examRule: "Always maintain a manual variable tracking matrix. Cross out old values and write new ones at each update step.",
    traps: "Empty loop bodies (while(x);) cause infinite loops. Post-decrement (x--) must save values back; misplaced semicolons break code logic.",
    challenge: {
      question: "Trace this loop and determine the output: for(int i=0; i<3; i++) { for(int j=0; j<2; j++) { print(i); } }",
      options: [
        "A) 0 0 1 1 2 2",
        "B) 0 1 2",
        "C) 0 0 0 1 1 1 2 2 2",
        "D) 1 1 2 2 3 3"
      ],
      correct: "A",
      explanation: "Outer loop: i=0,1,2. For each i, inner loop executes twice (j=0,1), printing i each time. i=0 prints '0' twice, i=1 prints '1' twice, i=2 prints '2' twice. Output: 0 0 1 1 2 2"
    }
  },
  {
    id: "ict-3-2",
    module: "Module 3: Programming Controls",
    title: "Recursive Function Execution",
    analogy: "Recursion is like looking in two mirrors facing each other—each reflection calls another reflection until you hit the base case (the end), then unwinds back outward.",
    mechanics: "<p><strong>Recursive Structure:</strong> Base Case (exit condition) and Recursive Case (calls itself with modified parameters)</p><p><strong>Execution Stack:</strong> Each call pushes parameters onto stack, reaching base case, then unwinding substitutes values back</p><p><strong>Trace Method:</strong> Write recursive calls downward, mark base case return, then trace back up substituting returned values</p><p><strong>Example:</strong> Compute(4,3) → 4×Compute(4,2) → 4×(4×Compute(4,1)) → 4×(4×(4×1)) = 64</p>",
    examRule: "Mark the base case clearly. Unwind the stack precisely, substituting each returned value one step at a time.",
    traps: "Confusing the recursion depth—off-by-one errors in parameter updates. Missing the base case entirely causes infinite recursion.",
    challenge: {
      question: "What value is returned by Factorial(5) where Factorial(n) = 1 if n≤1, else n×Factorial(n-1)?",
      options: [
        "A) 25",
        "B) 120",
        "C) 720",
        "D) 5"
      ],
      correct: "B",
      explanation: "Factorial(5) = 5×Factorial(4) = 5×(4×Factorial(3)) = 5×(4×(3×Factorial(2))) = 5×(4×(3×(2×Factorial(1)))) = 5×(4×(3×(2×1))) = 5×4×3×2×1 = 120"
    }
  },
  {
    id: "ict-4-1",
    module: "Module 4: Combinatorics",
    title: "Permutations and Combinations",
    analogy: "Permutations care about order (like seating arrangements where position matters), combinations ignore order (like selecting a committee where position doesn't matter).",
    mechanics: "<p><strong>Permutations:</strong> P(n,r) = n!/(n-r)! — select and arrange r items from n items</p><p><strong>Combinations:</strong> C(n,r) = n!/[r!(n-r)!] — select r items from n items without regard to order</p><p><strong>Identical Items:</strong> Total = N!/(n₁!·n₂!·...·nₖ!) — divides out redundant arrangements</p><p><strong>Example:</strong> Arrange 7 chocolate &amp; 12 vanilla biscuits: C(19,7) = 50,388 distinct arrangements</p>",
    examRule: "Check if items are distinct or identical. Distinct items use standard formulas; identical items require factorial division.",
    traps: "Confusing P(n,r) with C(n,r)—test questions hide whether order matters. Distractors use standard combinations when identical reduction is required.",
    challenge: {
      question: "How many distinct ways can 5 distinct data packets be distributed among 3 servers if each server can receive any number?",
      options: [
        "A) 15",
        "B) 125",
        "C) 243",
        "D) 120"
      ],
      correct: "C",
      explanation: "Each packet has 3 routing choices independently. Using fundamental counting principle: 3×3×3×3×3 = 3⁵ = 243 distinct distributions."
    }
  },
  {
    id: "ict-4-2",
    module: "Module 4: Combinatorics",
    title: "Stars-and-Bars Distribution",
    analogy: "Stars-and-Bars models distributing identical items into distinct buckets—imagine placing identical stars in rows and using bars as dividers between bucket categories.",
    mechanics: "<p><strong>Theorem 1 (Zero Allowed, ≥0):</strong> C(n+k-1, k-1) — distribute n identical items into k distinct buckets, buckets can be empty</p><p><strong>Theorem 2 (Strictly Positive, ≥1):</strong> C(n-1, k-1) — each bucket must receive at least one item</p><p><strong>Example 1:</strong> Distribute 10 identical candies among 3 friends: C(10+3-1, 3-1) = C(12,2) = 66 ways</p><p><strong>Example 2:</strong> Solutions to a+b+c+d+e=75 (all ≥1): C(75-1, 5-1) = C(74,4) = 1,150,626</p>",
    examRule: "Check if zero values are allowed (≥0) or required positive (≥1). Use appropriate theorem; mixing them causes wrong answers.",
    traps: "Test questions hide constraint rules deep in problem text. Using standard combinations C(n,r) directly without adjusting for item identity gives distractors.",
    challenge: {
      question: "How many natural number solutions exist for x+y+z=20 where all variables must be positive (≥1)?",
      options: [
        "A) 171",
        "B) 190",
        "C) 156",
        "D) 210"
      ],
      correct: "A",
      explanation: "Using Stars-and-Bars Theorem 2 (≥1 constraint): C(n-1, k-1) = C(20-1, 3-1) = C(19, 2) = (19×18)/2 = 171 solutions."
    }
  },
  {
    id: "ict-5-1",
    module: "Module 5: Computer Architecture",
    title: "Storage Hierarchy and Performance Metrics",
    analogy: "Computer storage is like a restaurant kitchen—cutting board (registers) is fastest but tiny, counter (RAM) is fast with moderate space, freezer (hard drive) holds massive amounts but is slow.",
    mechanics: "<p><strong>Storage Levels (fastest to slowest):</strong> CPU Registers (sub-nanoseconds) → L1/L2 Cache (nanoseconds) → RAM DRAM (nanoseconds) → SSD (microseconds) → HDD (milliseconds) → Magnetic Tape (seconds/minutes)</p><p><strong>Volatility:</strong> Registers, Cache, and RAM are volatile (data lost on power loss). SSD, HDD, and Tape are non-volatile.</p><p><strong>Performance Calculation:</strong> Total Latency = Operations × Average Access Time. Example: 10,000 ops × 10ms (HDD) = 100 seconds vs 10,000 ops × 100μs (SSD) = 1 second</p>",
    examRule: "Always verify metric units: nanoseconds (10⁻⁹s), microseconds (10⁻⁶s), milliseconds (10⁻³s). RAM is 1000× faster than SSD, SSD is 1000× faster than HDD.",
    traps: "Test questions trick you into choosing SSD as fastest because it 'feels fast' in daily use. RAM is actually thousands of times faster due to direct CPU connection.",
    challenge: {
      question: "A system performs 5,000 read operations. HDD average seek time is 8ms, SSD average seek time is 150μs. What is the time difference?",
      options: [
        "A) 40 seconds",
        "B) 39.25 seconds",
        "C) 750 milliseconds",
        "D) 5 seconds"
      ],
      correct: "B",
      explanation: "HDD total: 5,000 × 8ms = 40,000ms = 40 seconds. SSD total: 5,000 × 150μs = 750,000μs = 0.75 seconds. Difference: 40 - 0.75 = 39.25 seconds."
    }
  },
  {
    id: "ict-5-2",
    module: "Module 5: Computer Architecture",
    title: "File Identification and Magic Bytes",
    analogy: "File extensions are like labels on boxes that can be easily changed, but magic bytes are the actual physical contents inside—the OS reads the contents to identify true file type.",
    mechanics: "<p><strong>File Extensions:</strong> Characters appended to filename (.exe, .pdf, .md, .jpg). Easy to rename or spoof; doesn't affect actual file content.</p><p><strong>Magic Bytes (File Signature):</strong> Permanent raw byte signatures embedded in file header. PDF always starts with '%PDF' (25 50 44 46 hex). JPG starts with FF D8 FF. PNG starts with 89 50 4E 47.</p><p><strong>Validation Method:</strong> Rigorous OS validators ignore extensions, read magic bytes header, and determine true file type regardless of name.</p><p><strong>Example:</strong> File renamed from report.pdf to report.exe still contains %PDF magic bytes, so OS identifies it as PDF.</p>",
    examRule: "Magic bytes are immutable without rewriting file content. Extension changes do not alter internal structure or magic bytes.",
    traps: "Distractors claim renaming files converts them or corrupts them. Wrong answers say files become volatile or are deleted on power loss.",
    challenge: {
      question: "If a user renames DataReport.pdf to DataReport.exe, what does the OS validator detect when reading the file header?",
      options: [
        "A) The file is converted to executable program",
        "B) The magic bytes still identify it as PDF format",
        "C) The file becomes corrupted and unreadable",
        "D) The file is deleted on next power cycle"
      ],
      correct: "B",
      explanation: "Changing only the extension does not modify the binary content. The OS reads the magic bytes header (%PDF for PDFs) and correctly identifies the file type as PDF regardless of the .exe extension name."
    }
  },
  {
    id: "ict-6-1",
    module: "Module 6: Flowcharting",
    title: "Flowchart Symbols and Standard Shapes",
    analogy: "Flowchart symbols are standardized road signs—diamonds always mean decision points, rectangles mean actions, ovals mean start/stop, and parallelograms mean data input/output.",
    mechanics: "<p><strong>ISO Standard Symbols:</strong> Oval/Capsule (Terminal—Start/Stop) → Rectangle (Process—assignments, operations) → Parallelogram (Input/Output—read/print) → Diamond (Decision—true/false branching) → Circle (On-Page Connector—links flowchart sections)</p><p><strong>Symbol Selection Rule:</strong> Process box for internal operations (X = Y + Z). Parallelogram for external data interaction (Read X, Print result). Diamond for conditional statements (X &gt; 10?).</p><p><strong>Example Flow:</strong> [Start] → [Read X] → [R = X Mod 2] → {Decision: R==0?} → [Print Even/Odd] → [Stop]</p>",
    examRule: "Ask: 'Is this action internal or external?' Internal math = Rectangle. External data transfer = Parallelogram.",
    traps: "Distractors swap Rectangle and Parallelogram. Wrong answers place input/output operations inside process boxes.",
    challenge: {
      question: "Which flowchart symbol represents the operation: 'Get user input for employee ID'?",
      options: [
        "A) Rectangle (Process box)",
        "B) Parallelogram (Input/Output)",
        "C) Diamond (Decision)",
        "D) Oval (Terminal)"
      ],
      correct: "B",
      explanation: "Getting user input is an external data interaction with the system. This requires the Parallelogram (Input/Output) symbol, not the Rectangle which is used only for internal computational operations."
    }

  }
];
export default ictTopics
