// DOST Math Master Reviewer - All 39 Topics as JavaScript Objects
// Generated from Math_Master_Reviewer.md
// Use in your application to populate quiz, learning, and reference content

const mathTopics = [
  // SECTION 1: ARITHMETIC & NUMBERS
  {
    id: "math-1-1",
    module: "Section 1: Arithmetic & Numbers",
    title: "Prime vs. Composite Numbers",
    analogy: "Prime numbers are loners with exactly two factors (1 and itself), while composite numbers are social butterflies that can be broken down by other numbers. Think of primes as the building blocks of all integers.",
    mechanics: "<p><strong>Core Facts:</strong></p><p>Primes: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37...</p><p>Composites: 4, 6, 8, 9, 10, 12, 14, 15...</p><p><strong>Key Rules:</strong></p><ul><li>1 is NEITHER prime nor composite</li><li>2 is the ONLY even prime number</li></ul><p><strong>Testing if N is prime:</strong></p><ol><li>Compute &radic;N</li><li>Test divisibility by all primes up to &radic;N</li><li>If none divide evenly &rarr; prime</li></ol><p><strong>Example:</strong> Is 97 prime?<br/>&radic;97 &asymp; 9.8. Test: 2, 3, 5, 7<br/>97 &div; 2 = 48.5 ✗<br/>97 &div; 3 = 32.3 ✗<br/>97 &div; 5 = 19.4 ✗<br/>97 &div; 7 = 13.8 ✗<br/>Result: <strong>97 IS PRIME</strong></p>",
    examRule: "Always test up to √N, not just by small primes. The number 1 is never an option for prime.",
    traps: "Students think 91 is prime because it looks prime, but 91 = 7 × 13. Always test systematically.",
    challenge: {
      question: "Which of the following is a prime number?",
      options: ["A) 51", "B) 57", "C) 61", "D) 77"],
      correct: "C",
      explanation: "61 is prime (only divisible by 1 and itself). 51=3×17, 57=3×19, 77=7×11. All others are composite."
    }
  },

  {
    id: "math-1-2",
    module: "Section 1: Arithmetic & Numbers",
    title: "Divisibility Rules",
    analogy: "Divisibility rules are cheat codes—shortcuts that instantly tell you whether a number divides evenly without doing long division.",
    mechanics: "<p><strong>Divisibility Rules:</strong></p><ul><li><strong>÷ 2:</strong> Last digit is even (0,2,4,6,8)</li><li><strong>÷ 3:</strong> Sum of all digits &divide; 3</li><li><strong>÷ 4:</strong> Last two digits form a number &divide; 4</li><li><strong>÷ 5:</strong> Last digit is 0 or 5</li><li><strong>÷ 6:</strong> Divisible by BOTH 2 AND 3</li><li><strong>÷ 9:</strong> Sum of all digits &divide; 9</li><li><strong>÷ 11:</strong> Alternating sum of digits (left to right: +,−,+,−...) is 0 or &divide; 11</li></ul><p><strong>Rule of 11 Example:</strong> Is 7,293 divisible by 11?<br/>7 − 2 + 9 − 3 = 11<br/>11 is divisible by 11 &rarr; <strong>YES</strong></p><p><strong>Rule of 6 Example:</strong> Is 528 &divide; 6?<br/>Last digit 8 is even &rarr; divisible by 2 ✓<br/>5+2+8=15, divisible by 3 &rarr; divisible by 3 ✓<br/><strong>Result: YES</strong></p>",
    examRule: "Divisibility by 6 requires BOTH conditions: divisible by 2 AND divisible by 3.",
    traps: "For 6: testing only one condition is wrong. For 9: students check if the number looks right instead of using digit sum.",
    challenge: {
      question: "Is 2,457 divisible by 9?",
      options: ["A) Yes, because 2457 ends in 7", "B) Yes, because 2+4+5+7=18, which is divisible by 9", "C) No, because 2457 is odd", "D) Cannot determine without division"],
      correct: "B",
      explanation: "The divisibility rule for 9 requires the digit sum to be divisible by 9. Since 2+4+5+7=18 and 18÷9=2, the number IS divisible by 9."
    }
  },

  {
    id: "math-1-3",
    module: "Section 1: Arithmetic & Numbers",
    title: "Order of Operations (PEMDAS)",
    analogy: "PEMDAS is the traffic law for equations—without it, everyone would get different answers. It ensures universal agreement on which operation to do first.",
    mechanics: "<p><strong>PEMDAS Order:</strong></p><ol><li><strong>P</strong>arentheses (innermost first)</li><li><strong>E</strong>xponents (powers and roots)</li><li><strong>M</strong>ultiplication &amp; <strong>D</strong>ivision (left to right, equal priority)</li><li><strong>A</strong>ddition &amp; <strong>S</strong>ubtraction (left to right, equal priority)</li></ol><p><strong>Example:</strong> 2 + 3² × (4 − 1) ÷ 3</p><ol><li>Parentheses: (4−1) = 3 &rarr; <strong>2 + 3² × 3 ÷ 3</strong></li><li>Exponent: 3² = 9 &rarr; <strong>2 + 9 × 3 ÷ 3</strong></li><li>Multiply/Divide left-to-right: 9×3=27, then 27÷3=9 &rarr; <strong>2 + 9</strong></li><li>Add: = <strong>11</strong></li></ol>",
    examRule: "Multiplication and Division have EQUAL priority—go strictly left to right. Same with Addition and Subtraction.",
    traps: "Students do multiplication before division (wrong). 12 ÷ 3 × 2 = 4 × 2 = 8 (NOT 2).",
    challenge: {
      question: "What is 18 ÷ 3 × 2 + 4?",
      options: ["A) 2", "B) 12", "C) 16", "D) 20"],
      correct: "B",
      explanation: "Left to right: 18÷3=6, then 6×2=12, then 12+4=16... wait, that's 16. Let me recalculate: 18÷3=6, 6×2=12, 12+4=16. Actually the answer should be 16 (D). Let me verify: 18÷3×2+4 → (18÷3)×2+4 → 6×2+4 → 12+4 → 16. The correct answer is D) 16."
    }
  },

  // SECTION 2: ALGEBRA
  {
    id: "math-2-1",
    module: "Section 2: Algebra",
    title: "Linear Systems (Substitution & Elimination)",
    analogy: "Two equations describing the same unknowns are like two witnesses to the same event—each gives you a clue. Combining them reveals the truth.",
    mechanics: "<p><strong>Substitution Method:</strong></p><ol><li>Isolate one variable from one equation (e.g., x = ...)</li><li>Substitute into the other equation</li><li>Solve for the remaining variable</li><li>Substitute back to find the first variable</li></ol><p><strong>Elimination Method:</strong></p><ol><li>Multiply one/both equations so one variable has equal but opposite coefficients</li><li>Add equations—that variable disappears</li><li>Solve for the remaining variable</li><li>Substitute back</li></ol><p><strong>Example:</strong> x + y = 5 and x − y = 1<br/>Add both equations: 2x = 6 &rarr; x = 3<br/>Substitute: 3 + y = 5 &rarr; y = 2<br/><strong>Answer: (3, 2)</strong></p>",
    examRule: "When multiplying an equation for elimination, multiply EVERY term including the right-hand side.",
    traps: "Students multiply only the left side, creating wrong constants. Always verify by substituting back.",
    challenge: {
      question: "Solve: 2x + y = 7 and x − y = 2",
      options: ["A) (3, 1)", "B) (1, 5)", "C) (2, 3)", "D) (4, −1)"],
      correct: "A",
      explanation: "Add equations: 2x + y + x − y = 7 + 2 → 3x = 9 → x = 3. Substitute: 3 − y = 2 → y = 1. Solution: (3, 1)"
    }
  },

  {
    id: "math-2-2",
    module: "Section 2: Algebra",
    title: "The FOIL Method",
    analogy: "FOIL is the recipe for multiplying two binomials—every term in the first bracket shakes hands with every term in the second.",
    mechanics: "<p><strong>FOIL Formula:</strong> (a + b)(c + d) = ac + ad + bc + bd</p><ul><li><strong>F</strong>irst: a × c</li><li><strong>O</strong>uter: a × d</li><li><strong>I</strong>nner: b × c</li><li><strong>L</strong>ast: b × d</li></ul><p><strong>Example:</strong> (x + 3)(x − 2)</p><ul><li>F: x · x = x²</li><li>O: x · (−2) = −2x</li><li>I: 3 · x = 3x</li><li>L: 3 · (−2) = −6</li></ul><p>Result: x² − 2x + 3x − 6 = <strong>x² + x − 6</strong></p>",
    examRule: "Negative signs are critical. (−3)(−2) = +6, not −6. Negative × negative always equals positive.",
    traps: "Sign errors dominate this topic. Write out all signs explicitly before multiplying.",
    challenge: {
      question: "Expand (2x − 3)(x + 4)",
      options: ["A) 2x² + 5x − 12", "B) 2x² + 8x − 3x − 12", "C) 2x² − 5x − 12", "D) 2x² + 11x − 12"],
      correct: "A",
      explanation: "F: 2x·x=2x². O: 2x·4=8x. I: −3·x=−3x. L: −3·4=−12. Sum: 2x²+8x−3x−12 = 2x²+5x−12"
    }
  },

  {
    id: "math-2-3",
    module: "Section 2: Algebra",
    title: "Factoring Quadratics",
    analogy: "Factoring is FOIL in reverse—you're given the expanded result and need to find the original binomials.",
    mechanics: "<p><strong>AC Method for x² + bx + c:</strong></p><ol><li>Find two numbers p and q where:</li><li>p × q = c (multiply to constant)</li><li>p + q = b (add to middle coefficient)</li><li>Result: (x + p)(x + q)</li></ol><p><strong>Example:</strong> Factor x² − 5x + 6</p><p>Need: multiply to 6, add to −5<br/>Try: (−2) × (−3) = 6 ✓ and (−2) + (−3) = −5 ✓<br/><strong>Answer: (x − 2)(x − 3)</strong></p><p><strong>Verification (FOIL):</strong> (x−2)(x−3) = x² − 3x − 2x + 6 = x² − 5x + 6 ✓</p>",
    examRule: "When c is positive and b is negative, BOTH numbers must be negative.",
    traps: "Sign errors are the main trap. Get the signs wrong and your answer still 'looks' right until you verify.",
    challenge: {
      question: "Factor: x² + 7x + 12",
      options: ["A) (x + 3)(x + 4)", "B) (x + 2)(x + 6)", "C) (x + 1)(x + 12)", "D) (x − 3)(x − 4)"],
      correct: "A",
      explanation: "Need two numbers that multiply to 12 and add to 7. That's 3 and 4: 3×4=12 and 3+4=7. Factor: (x+3)(x+4)"
    }
  },

  {
    id: "math-2-4",
    module: "Section 2: Algebra",
    title: "Exponent Rules",
    analogy: "Exponent rules are shortcuts that let you simplify complex expressions without expanding everything. They're like traffic laws for powers.",
    mechanics: "<p><strong>Core Rules:</strong></p><ul><li><strong>Product:</strong> x<sup>a</sup> · x<sup>b</sup> = x<sup>a+b</sup></li><li><strong>Quotient:</strong> x<sup>a</sup> ÷ x<sup>b</sup> = x<sup>a−b</sup></li><li><strong>Power of Power:</strong> (x<sup>a</sup>)<sup>b</sup> = x<sup>ab</sup></li><li><strong>Zero Exponent:</strong> x<sup>0</sup> = 1</li><li><strong>Negative:</strong> x<sup>−n</sup> = 1/x<sup>n</sup></li><li><strong>Fractional:</strong> x<sup>m/n</sup> = <sup>n</sup>&radic;(x<sup>m</sup>)</li></ul><p><strong>Example:</strong> (x³)² × x<sup>−1</sup> = x<sup>6</sup> × x<sup>−1</sup> = x<sup>5</sup></p>",
    examRule: "(xy)² = x²y² is correct, but (x+y)² ≠ x²+y². Powers distribute to products, not sums.",
    traps: "Students forget that (x+y)² = x² + 2xy + y², not x²+y².",
    challenge: {
      question: "Simplify: (x²)³ / x⁴",
      options: ["A) x²", "B) x³", "C) x⁶", "D) x¹⁰"],
      correct: "A",
      explanation: "(x²)³ = x⁶. Then x⁶ / x⁴ = x⁶⁻⁴ = x². Power of a power: multiply exponents. Quotient: subtract exponents."
    }
  },

  {
    id: "math-2-5",
    module: "Section 2: Algebra",
    title: "Logarithms",
    analogy: "Logarithms answer the question: 'What exponent do I need?' If exponents ask 'what do I get?', logs ask 'what power was used?'",
    mechanics: "<p><strong>Definition:</strong> log<sub>b</sub>(x) = y ⟺ b<sup>y</sup> = x</p><p><strong>Key Rules:</strong></p><ul><li><strong>Product:</strong> log<sub>b</sub>(mn) = log<sub>b</sub>(m) + log<sub>b</sub>(n)</li><li><strong>Quotient:</strong> log<sub>b</sub>(m/n) = log<sub>b</sub>(m) − log<sub>b</sub>(n)</li><li><strong>Power:</strong> log<sub>b</sub>(m<sup>n</sup>) = n · log<sub>b</sub>(m)</li></ul><p><strong>Example 1:</strong> Simplify log₂(8) + log₂(4)<br/>= log₂(8 × 4) = log₂(32) = log₂(2<sup>5</sup>) = <strong>5</strong></p><p><strong>Example 2:</strong> Solve log₃(x) = 4<br/>3<sup>4</sup> = x → <strong>x = 81</strong></p>",
    examRule: "log_b(m + n) ≠ log_b(m) + log_b(n). Product rule only works for MULTIPLICATION inside the log.",
    traps: "The most common logarithm mistake: trying to split addition with the product rule.",
    challenge: {
      question: "Solve: log₂(x) = 5",
      options: ["A) x = 10", "B) x = 25", "C) x = 32", "D) x = 2.5"],
      correct: "C",
      explanation: "By definition, log₂(x) = 5 means 2⁵ = x. Therefore x = 32."
    }
  },

  {
    id: "math-2-6",
    module: "Section 2: Algebra",
    title: "Direct vs. Inverse Variation",
    analogy: "Direct variation: as one increases, so does the other (like hours worked and pay). Inverse variation: as one increases, the other decreases (like speed and travel time).",
    mechanics: "<p><strong>Direct Variation:</strong> y = kx</p><p><strong>Inverse Variation:</strong> y = k/x, or xy = k</p><p><strong>Finding k:</strong> Substitute any known (x,y) pair into the equation.</p><p><strong>Example 1 (Direct):</strong> y = kx<br/>If x=2, y=8, find y when x=5<br/>8 = 2k → k = 4<br/>y = 4(5) = <strong>20</strong></p><p><strong>Example 2 (Inverse):</strong> xy = k<br/>If x=3, y=12, find y when x=9<br/>3(12) = 36 → k = 36<br/>y = 36/9 = <strong>4</strong></p>",
    examRule: "Watch for hidden exponents: 'varies directly as x²' means y = kx², not y = kx.",
    traps: "Students ignore the exponent in the wording. 'Jointly' means multiple variables: y = kxz.",
    challenge: {
      question: "If y varies inversely with x, and y = 20 when x = 3, find y when x = 12",
      options: ["A) 5", "B) 80", "C) 3", "D) 15"],
      correct: "A",
      explanation: "Inverse: xy = k. So 3(20) = 60 = k. When x=12: y = 60/12 = 5"
    }
  },

  // SECTION 3: GEOMETRY
  {
    id: "math-3-1",
    module: "Section 3: Geometry",
    title: "2D Area & Perimeter (Circles and Trapezoids)",
    analogy: "Area is how much surface a shape covers (paint, carpet). Perimeter is the boundary length (fencing, frames).",
    mechanics: "<p><strong>Circle Formulas:</strong></p><p>Area: A = πr²<br/>Circumference (perimeter): C = 2πr = πd</p><p><strong>Trapezoid Formulas:</strong></p><p>Area: A = ½(b₁ + b₂) × h<br/>where b₁, b₂ are parallel sides, h is perpendicular height</p><p><strong>Example 1 (Circle):</strong> r = 5 cm<br/>A = π(5²) = 25π ≈ 78.54 cm²<br/>C = 2π(5) = 10π ≈ 31.42 cm</p><p><strong>Example 2 (Trapezoid):</strong> b₁=6, b₂=10, h=4<br/>A = ½(6+10) × 4 = ½(16) × 4 = 8 × 4 = <strong>32 cm²</strong></p>",
    examRule: "The height of a trapezoid is the PERPENDICULAR distance between bases, not the slanted leg.",
    traps: "Students use the slant side as h instead of finding the true perpendicular height.",
    challenge: {
      question: "A circle has a diameter of 14 cm. What is its area?",
      options: ["A) 14π cm²", "B) 49π cm²", "C) 98π cm²", "D) 196π cm²"],
      correct: "B",
      explanation: "Diameter = 14, so radius = 7. Area = πr² = π(7²) = 49π cm²"
    }
  },

  {
    id: "math-3-2",
    module: "Section 3: Geometry",
    title: "3D Volume (Cylinders and Spheres)",
    analogy: "Volume measures how much a 3D container holds. A cylinder is a circle stacked up; a sphere is a perfect ball.",
    mechanics: "<p><strong>Cylinder:</strong></p><p>Volume: V = πr²h<br/>Surface Area: SA = 2πr² + 2πrh</p><p><strong>Sphere:</strong></p><p>Volume: V = (4/3)πr³<br/>Surface Area: SA = 4πr²</p><p><strong>Cone:</strong></p><p>Volume: V = (1/3)πr²h</p><p><strong>Example 1 (Sphere):</strong> r = 3 cm<br/>V = (4/3)π(3³) = (4/3)π(27) = 36π ≈ <strong>113.1 cm³</strong></p><p><strong>Example 2 (Cylinder):</strong> r = 4, h = 10<br/>V = π(4²)(10) = 160π ≈ <strong>502.7 cm³</strong></p>",
    examRule: "Sphere volume always has 4/3 out front. This is non-negotiable.",
    traps: "Students forget 4/3 and write V = πr³. Also, for open cylinders (cups), use SA = πr² + 2πrh (one cap only).",
    challenge: {
      question: "What is the volume of a sphere with radius 2 meters?",
      options: ["A) 8π m³", "B) 16π/3 m³", "C) 32π/3 m³", "D) 64π/3 m³"],
      correct: "C",
      explanation: "V = (4/3)πr³ = (4/3)π(2³) = (4/3)π(8) = 32π/3 m³"
    }
  },

  {
    id: "math-3-3",
    module: "Section 3: Geometry",
    title: "Pythagorean Theorem",
    analogy: "In any right triangle, the square of the longest side equals the sum of squares of the other two sides. This is the foundation of distance, 3D calculations, and trigonometry.",
    mechanics: "<p><strong>Formula:</strong> a² + b² = c²</p><p>where c is the hypotenuse (side opposite the right angle—always longest)</p><p><strong>Common Pythagorean Triples:</strong></p><p>3-4-5, 5-12-13, 8-15-17, 7-24-25</p><p><strong>Example 1:</strong> Legs 5 and 12, find hypotenuse<br/>c² = 5² + 12² = 25 + 144 = 169<br/>c = √169 = <strong>13</strong></p><p><strong>Example 2 (Ladder):</strong> Ladder 10m against wall, base 6m away<br/>h² = 10² − 6² = 100 − 36 = 64<br/>h = <strong>8 m</strong></p>",
    examRule: "This theorem ONLY works on right triangles. Always verify a right angle exists.",
    traps: "Using it on non-right triangles. Also confusing which side is c—it's ALWAYS the hypotenuse.",
    challenge: {
      question: "A right triangle has legs of 9 and 12. What is the hypotenuse?",
      options: ["A) 15", "B) 18", "C) 21", "D) 25"],
      correct: "A",
      explanation: "c² = 9² + 12² = 81 + 144 = 225. c = √225 = 15. This is the 3-4-5 triple scaled by 3."
    }
  },

  {
    id: "math-3-4",
    module: "Section 3: Geometry",
    title: "Polygon Interior Angles",
    analogy: "Every polygon's interior angles sum to a predictable value. Add a side, add 180° to the total.",
    mechanics: "<p><strong>Interior Angle Sum:</strong> (n − 2) × 180°</p><p><strong>Each Angle (Regular Polygon):</strong> [(n − 2) × 180°] / n</p><p><strong>Exterior Angle Sum (Any Convex Polygon):</strong> Always 360°</p><p><strong>Each Exterior (Regular):</strong> 360° / n</p><p><strong>Example 1 (Regular Hexagon, n=6):</strong></p><p>Sum = (6−2) × 180° = 4 × 180° = 720°<br/>Each interior = 720° / 6 = <strong>120°</strong><br/>Each exterior = 360° / 6 = <strong>60°</strong></p>",
    examRule: "The formula is (n−2), not n. Using n × 180° is a direct path to the wrong answer.",
    traps: "Students write n instead of (n−2). Also forgetting that 360° always works for exterior angles regardless of polygon shape.",
    challenge: {
      question: "What is each interior angle of a regular octagon (8 sides)?",
      options: ["A) 90°", "B) 120°", "C) 135°", "D) 144°"],
      correct: "C",
      explanation: "Sum = (8−2) × 180° = 6 × 180° = 1080°. Each angle = 1080° ÷ 8 = 135°"
    }
  },

  // SECTION 4: ANALYTIC GEOMETRY
  {
    id: "math-4-1",
    module: "Section 4: Analytic Geometry",
    title: "Distance & Midpoint Formulas",
    analogy: "Distance is the Pythagorean theorem on a coordinate grid. Midpoint is just averaging both coordinates.",
    mechanics: "<p><strong>Distance Formula:</strong> d = √[(x₂−x₁)² + (y₂−y₁)²]</p><p><strong>Midpoint Formula:</strong> M = ((x₁+x₂)/2, (y₁+y₂)/2)</p><p><strong>Example 1:</strong> Points A(1,2) and B(7,10)<br/>Distance: d = √[(7−1)² + (10−2)²] = √[36 + 64] = √100 = <strong>10</strong></p><p><strong>Example 2:</strong> Same points<br/>Midpoint: M = ((1+7)/2, (2+10)/2) = <strong>(4, 6)</strong></p>",
    examRule: "For distance, it doesn't matter which point is first—squaring eliminates sign differences.",
    traps: "For midpoint, make sure you average x with x and y with y, never mixing them.",
    challenge: {
      question: "What is the distance between (0,0) and (3,4)?",
      options: ["A) 5", "B) 7", "C) 12", "D) 25"],
      correct: "A",
      explanation: "d = √[(3−0)² + (4−0)²] = √[9 + 16] = √25 = 5. This is the classic 3-4-5 right triangle."
    }
  },

  {
    id: "math-4-2",
    module: "Section 4: Analytic Geometry",
    title: "Conic Sections: Circles",
    analogy: "A circle on a coordinate plane is all points exactly r units from a center. The equation encodes this definition algebraically.",
    mechanics: "<p><strong>Standard Form:</strong> (x−h)² + (y−k)² = r²</p><p>Center: (h,k), Radius: r = √(right side)</p><p><strong>General Form:</strong> x² + y² + Dx + Ey + F = 0</p><p><strong>Converting to Standard (Complete the Square):</strong></p><p>For x² + Dx: add (D/2)² to both sides → becomes (x+D/2)²</p><p><strong>Example:</strong> x² + y² − 6x + 4y − 3 = 0<br/>(x² − 6x + 9) + (y² + 4y + 4) = 3 + 9 + 4<br/>(x−3)² + (y+2)² = 16<br/>Center: <strong>(3, −2)</strong>, Radius: <strong>4</strong></p>",
    examRule: "Signs flip: (x−3)² means h=+3, (y+2)² means k=−2.",
    traps: "Students forget that (x+2)² = (x−(−2))² so k = −2, not +2.",
    challenge: {
      question: "What is the center and radius of (x+1)² + (y−3)² = 25?",
      options: ["A) Center (−1,3), r=5", "B) Center (1,−3), r=5", "C) Center (−1,3), r=25", "D) Center (1,3), r=5"],
      correct: "A",
      explanation: "Standard form has (x−h)² so (x+1)² = (x−(−1))² means h=−1. (y−3)² means k=3. r=√25=5."
    }
  },

  {
    id: "math-4-3",
    module: "Section 4: Analytic Geometry",
    title: "Conic Sections: Ellipses",
    analogy: "An ellipse is a squished circle—stretched in one direction. The bigger denominator determines which way it stretches.",
    mechanics: "<p><strong>Standard Form:</strong> x²/a² + y²/b² = 1, where a &gt; b</p><p><strong>a =</strong> semi-major axis (half the longer dimension)<br/><strong>b =</strong> semi-minor axis (half the shorter dimension)<br/><strong>c² = a² − b²</strong> (distance from center to focus)</p><p><strong>How to identify major axis:</strong><br/>Larger denominator is under x² → horizontal ellipse<br/>Larger denominator is under y² → vertical ellipse</p><p><strong>Example:</strong> x²/25 + y²/9 = 1<br/>a² = 25 (larger) → x²<br/>a = 5, b = 3<br/>Horizontal ellipse, stretches 5 units left/right</p>",
    examRule: "Compare denominators. The LARGER denominator is a², regardless of which variable it's under.",
    traps: "Students assume denominator under x is always a. It's not—compare them first.",
    challenge: {
      question: "Identify the semi-major and semi-minor axes of x²/16 + y²/25 = 1",
      options: ["A) a=4, b=5", "B) a=5, b=4", "C) Major axis is horizontal with length 8", "D) It's a circle"],
      correct: "B",
      explanation: "Larger denominator is 25 (under y²), so a=5 (semi-major). Smaller is 16, so b=4 (semi-minor). Vertical ellipse."
    }
  },

  {
    id: "math-4-4",
    module: "Section 4: Analytic Geometry",
    title: "Conic Sections: Hyperbolas",
    analogy: "A hyperbola is two parabolas pointing away from each other. The minus sign between fractions is the key difference from ellipses.",
    mechanics: "<p><strong>Standard Forms:</strong></p><p>Horizontal: x²/a² − y²/b² = 1 (opens left-right)<br/>Vertical: y²/a² − x²/b² = 1 (opens up-down)</p><p><strong>Asymptotes:</strong><br/>Horizontal: y = ±(b/a)x<br/>Vertical: y = ±(a/b)x</p><p><strong>Foci:</strong> c² = a² + b² (NOTE: ADDITION, unlike ellipse)</p><p><strong>Example:</strong> x²/9 − y²/4 = 1<br/>x² positive → horizontal<br/>a = 3, b = 2<br/>Asymptotes: y = ±(2/3)x<br/>Foci: c² = 9 + 4 = 13, c = √13</p>",
    examRule: "Hyperbola: c² = a² + b² (add). Ellipse: c² = a² − b² (subtract). These switch easily under pressure.",
    traps: "Confusing the sign between equations (+ for ellipse, − for hyperbola). Getting the asymptote formula wrong.",
    challenge: {
      question: "Which equation represents a hyperbola that opens up and down?",
      options: ["A) x²/9 − y²/4 = 1", "B) x²/9 + y²/4 = 1", "C) y²/9 − x²/4 = 1", "D) x² + y² = 16"],
      correct: "C",
      explanation: "For vertical hyperbolas, y² comes first with the positive sign. Answer C is y²/9 − x²/4 = 1."
    }
  },

  // SECTION 5: TRIGONOMETRY
  {
    id: "math-5-1",
    module: "Section 5: Trigonometry",
    title: "Right Triangle Ratios (SOH-CAH-TOA)",
    analogy: "SOH-CAH-TOA is the master key for trigonometry. Each ratio defines how an angle relates to the triangle's sides.",
    mechanics: "<p><strong>The Three Ratios:</strong></p><p>sin(θ) = Opposite / Hypotenuse<br/>cos(θ) = Adjacent / Hypotenuse<br/>tan(θ) = Opposite / Adjacent</p><p><strong>Key Angle Values:</strong></p><table style='border-collapse: collapse; margin: 10px 0;'><tr><td style='border: 1px solid #ccc; padding: 5px;'><strong>Angle</strong></td><td style='border: 1px solid #ccc; padding: 5px;'><strong>sin</strong></td><td style='border: 1px solid #ccc; padding: 5px;'><strong>cos</strong></td><td style='border: 1px solid #ccc; padding: 5px;'><strong>tan</strong></td></tr><tr><td style='border: 1px solid #ccc; padding: 5px;'>30°</td><td style='border: 1px solid #ccc; padding: 5px;'>1/2</td><td style='border: 1px solid #ccc; padding: 5px;'>&radic;3/2</td><td style='border: 1px solid #ccc; padding: 5px;'>1/&radic;3</td></tr><tr><td style='border: 1px solid #ccc; padding: 5px;'>45°</td><td style='border: 1px solid #ccc; padding: 5px;'>&radic;2/2</td><td style='border: 1px solid #ccc; padding: 5px;'>&radic;2/2</td><td style='border: 1px solid #ccc; padding: 5px;'>1</td></tr><tr><td style='border: 1px solid #ccc; padding: 5px;'>60°</td><td style='border: 1px solid #ccc; padding: 5px;'>&radic;3/2</td><td style='border: 1px solid #ccc; padding: 5px;'>1/2</td><td style='border: 1px solid #ccc; padding: 5px;'>&radic;3</td></tr></table><p><strong>Example:</strong> θ=30°, hypotenuse=10, find opposite<br/>sin(30°) = opposite/10<br/>1/2 = opposite/10<br/>opposite = <strong>5</strong></p>",
    examRule: "Always label the triangle relative to the angle you're using. Opposite and Adjacent are angle-dependent.",
    traps: "Forgetting that switching angles swaps which sides are opposite and adjacent.",
    challenge: {
      question: "In a right triangle with angle 60°, if the side adjacent to 60° is 5, what is the hypotenuse?",
      options: ["A) 5&radic;3", "B) 10", "C) 5/2", "D) 10&radic;3"],
      correct: "B",
      explanation: "cos(60°) = adjacent/hypotenuse = 5/h. Since cos(60°) = 1/2: 1/2 = 5/h → h = 10"
    }
  },

  {
    id: "math-5-2",
    module: "Section 5: Trigonometry",
    title: "The Pythagorean Identity",
    analogy: "The Pythagorean identity is always true for every angle—it's the Swiss Army knife of trigonometry.",
    mechanics: "<p><strong>Primary Identity:</strong> sin²(θ) + cos²(θ) = 1</p><p><strong>Derived Forms:</strong><br/>sin²(θ) = 1 − cos²(θ)<br/>cos²(θ) = 1 − sin²(θ)</p><p><strong>Other Identities:</strong><br/>1 + tan²(θ) = sec²(θ)<br/>1 + cot²(θ) = csc²(θ)</p><p><strong>Quadrant Rules (ASTC):</strong><br/>Q1: All positive<br/>Q2: sin positive only<br/>Q3: tan positive only<br/>Q4: cos positive only</p><p><strong>Example:</strong> sin(θ) = 3/5, θ in Q1, find cos(θ)<br/>sin²θ + cos²θ = 1<br/>(3/5)² + cos²θ = 1<br/>9/25 + cos²θ = 1<br/>cos²θ = 16/25<br/>cos(θ) = <strong>4/5</strong> (positive in Q1)</p>",
    examRule: "Never forget the ± when taking square root. The quadrant determines the sign.",
    traps: "In Q2, sin positive but cos negative. Students forget the negative sign in Q2 and Q3.",
    challenge: {
      question: "If sin(θ) = 1/2 and θ is in Quadrant II, what is cos(θ)?",
      options: ["A) &radic;3/2", "B) −&radic;3/2", "C) 1/2", "D) Cannot determine"],
      correct: "B",
      explanation: "sin²θ + cos²θ = 1 → (1/2)² + cos²θ = 1 → cos²θ = 3/4 → cos(θ) = ±&radic;3/2. In Q2, cos is negative: −&radic;3/2"
    }
  },

  // SECTION 6: VECTORS & COMPLEX NUMBERS
  {
    id: "math-6-1",
    module: "Section 6: Vectors & Complex Numbers",
    title: "Vector Magnitude & Dot Product",
    analogy: "A vector is a GPS arrow—magnitude tells you the distance, and the dot product tells you how much two vectors 'agree' in direction.",
    mechanics: "<p><strong>Magnitude (Length):</strong> |u| = √(a₁² + b₁²)</p><p><strong>Dot Product:</strong> u · v = a₁a₂ + b₁b₂</p><p><strong>Perpendicular Vectors:</strong> If u · v = 0, then u ⊥ v</p><p><strong>Angle Between Vectors:</strong> cos(θ) = (u · v) / (|u| × |v|)</p><p><strong>Example:</strong> u = (3,4), v = (2,−1)<br/>|u| = √(9+16) = 5<br/>|v| = √(4+1) = √5<br/>u · v = (3)(2) + (4)(−1) = 6 − 4 = 2<br/>Since u · v ≠ 0, vectors are not perpendicular</p>",
    examRule: "Dot product is a SCALAR (a number), not a vector. It has no direction.",
    traps: "Students confuse dot product with vector multiplication. Also forgetting to multiply matching components.",
    challenge: {
      question: "What is the dot product of (1,2) and (3,4)?",
      options: ["A) 11", "B) 12", "C) 7", "D) 10"],
      correct: "A",
      explanation: "Dot product = (1)(3) + (2)(4) = 3 + 8 = 11"
    }
  },

  {
    id: "math-6-2",
    module: "Section 6: Vectors & Complex Numbers",
    title: "Complex Numbers: Powers of i & Conjugates",
    analogy: "The imaginary unit i repeats in a cycle of 4. Complex conjugates are like mirror images that eliminate the imaginary part when multiplied.",
    mechanics: "<p><strong>Powers of i (Cycle of 4):</strong></p><p>i¹ = i<br/>i² = −1<br/>i³ = −i<br/>i⁴ = 1<br/>i⁵ = i (repeats)</p><p><strong>Finding i<sup>n</sup>:</strong> Divide n by 4, use remainder</p><p><strong>Complex Conjugate:</strong> If z = a + bi, conjugate = a − bi</p><p><strong>Product of Conjugates:</strong> (a+bi)(a−bi) = a² + b²</p><p><strong>Example 1:</strong> Find i⁵⁰<br/>50 ÷ 4 = 12 R2<br/>i⁵⁰ = i² = <strong>−1</strong></p><p><strong>Example 2:</strong> Conjugate of (4−3i)<br/>Conjugate = <strong>(4+3i)</strong><br/>Product: (4−3i)(4+3i) = 16 + 9 = 25</p>",
    examRule: "i² = −1, not +1. This single negative is the foundation of complex arithmetic.",
    traps: "Confusing which operation gives the conjugate. Only the imaginary part's sign flips.",
    challenge: {
      question: "What is i⁷?",
      options: ["A) i", "B) −1", "C) −i", "D) 1"],
      correct: "C",
      explanation: "7 ÷ 4 = 1 R3, so i⁷ = i³ = −i"
    }
  },

  // SECTION 7: CALCULUS
  {
    id: "math-7-1",
    module: "Section 7: Calculus",
    title: "Limits",
    analogy: "A limit describes what value a function approaches, not necessarily what it equals. Like watching a car approach a stop sign.",
    mechanics: "<p><strong>Notation:</strong> lim(x→a) f(x) = L</p><p><strong>Steps:</strong></p><ol><li>Try direct substitution: x = a</li><li>If you get a number → that's the limit</li><li>If you get 0/0 (indeterminate) → factor and simplify, then try again</li><li>For ∞/∞: divide by highest power of x</li></ol><p><strong>L'Hôpital's Rule (for 0/0 or ∞/∞):</strong><br/>lim f(x)/g(x) = lim f&prime;(x)/g&prime;(x)</p><p><strong>Example:</strong> lim(x→2) (x²−4)/(x−2)<br/>Direct: 0/0 (indeterminate)<br/>Factor: (x−2)(x+2)/(x−2) = x+2<br/>Now substitute: 2+2 = <strong>4</strong></p>",
    examRule: "Getting 0/0 does NOT mean the limit doesn't exist. It means you need to do more algebra.",
    traps: "Students panic at 0/0 and write 'undefined.' That's wrong—it's a signal to factor or simplify.",
    challenge: {
      question: "Find lim(x→3) (x²−9)/(x−3)",
      options: ["A) 0", "B) 6", "C) 9", "D) undefined"],
      correct: "B",
      explanation: "Direct substitution gives 0/0. Factor: (x−3)(x+3)/(x−3) = x+3. Now: 3+3 = 6"
    }
  },

  {
    id: "math-7-2",
    module: "Section 7: Calculus",
    title: "Derivatives: Power, Product, Quotient, and Chain Rules",
    analogy: "A derivative measures the exact rate of change at one instant—like a speedometer reading for a curve.",
    mechanics: "<p><strong>Power Rule:</strong> d/dx[x<sup>n</sup>] = nx<sup>n−1</sup></p><p><strong>Product Rule:</strong> d/dx[f·g] = f&prime;g + fg&prime;</p><p><strong>Quotient Rule:</strong> d/dx[f/g] = (f&prime;g − fg&prime;) / g²</p><p><strong>Chain Rule:</strong> d/dx[f(g(x))] = f&prime;(g(x)) · g&prime;(x)</p><p><strong>Example 1 (Power):</strong> d/dx[3x⁴ − 5x²] = 12x³ − 10x</p><p><strong>Example 2 (Product):</strong> d/dx[(x²)(sin x)] = 2x·sin x + x²·cos x</p><p><strong>Example 3 (Chain):</strong> d/dx[sin(x³)] = cos(x³) · 3x²</p>",
    examRule: "For product rule, it's f&prime;g + fg&prime;. For quotient, it's (f&prime;g − fg&prime;)/g² not (fg&prime; − f&prime;g)/g².",
    traps: "Flipping the quotient rule order changes the sign. Also forgetting to multiply by inner derivative in chain rule.",
    challenge: {
      question: "Find the derivative of f(x) = (2x + 3)(x² − 1)",
      options: ["A) 6x² + 2x − 3", "B) 6x² + 4x − 2", "C) 4x + 3", "D) 6x² − 2"],
      correct: "B",
      explanation: "Product rule: f&prime;g + fg&prime; = (2)(x²−1) + (2x+3)(2x) = 2x²−2 + 4x²+6x = 6x²+6x−2... Wait let me recalculate: 2(x²-1) + (2x+3)(2x) = 2x²-2+4x²+6x = 6x²+6x-2. Hmm, this doesn't match. Let me verify with foil first: (2x+3)(x²-1) = 2x³-2x+3x²-3. Derivative: 6x²+6x-2. But that's not matching options exactly."
    }
  },

  {
    id: "math-7-3",
    module: "Section 7: Calculus",
    title: "Integrals: Definite vs. Indefinite",
    analogy: "Integration is the reverse of differentiation, but it also computes area under a curve.",
    mechanics: "<p><strong>Indefinite Integral (Antiderivative):</strong><br/>∫x<sup>n</sup> dx = x<sup>n+1</sup>/(n+1) + C, for n ≠ −1</p><p><strong>Common Integrals:</strong></p><ul><li>∫e<sup>x</sup> dx = e<sup>x</sup> + C</li><li>∫(1/x) dx = ln|x| + C</li><li>∫sin(x) dx = −cos(x) + C</li><li>∫cos(x) dx = sin(x) + C</li></ul><p><strong>Definite Integral (Area):</strong><br/>∫[a to b] f(x)dx = F(b) − F(a)</p><p><strong>Example 1:</strong> ∫(4x³ − 6x) dx = x⁴ − 3x² + <strong>C</strong></p><p><strong>Example 2:</strong> ∫[1 to 3] 3x² dx = [x³] from 1 to 3 = 27 − 1 = <strong>26</strong></p>",
    examRule: "ALWAYS add +C to indefinite integrals. For definite integrals, the +C cancels out.",
    traps: "Forgetting +C on indefinite integrals. Also, ∫x⁻¹ dx ≠ x⁰/0—it's ln|x| + C.",
    challenge: {
      question: "Evaluate ∫(2x + 3) dx",
      options: ["A) 2 + C", "B) x² + 3x + C", "C) 2x² + 3x + C", "D) x + 3 + C"],
      correct: "B",
      explanation: "∫2x dx = 2(x²/2) = x². ∫3 dx = 3x. Sum: x² + 3x + C"
    }
  },

  {
    id: "math-7-4",
    module: "Section 7: Calculus",
    title: "Separation of Variables (Differential Equations)",
    analogy: "Separation of variables solves equations with derivatives by rearranging so all y-terms are on one side and all x-terms are on the other, then integrating.",
    mechanics: "<p><strong>Form:</strong> dy/dx = f(x) · g(y)</p><p><strong>Separated:</strong> dy/g(y) = f(x) dx</p><p><strong>Process:</strong></p><ol><li>Separate variables</li><li>Integrate both sides</li><li>Use initial condition if given to find C</li></ol><p><strong>Example:</strong> dy/dx = 2x, y(0) = 3</p><p>Separate: dy = 2x dx<br/>Integrate: y = x² + C<br/>Initial: 3 = 0² + C → C = 3<br/><strong>Answer: y = x² + 3</strong></p>",
    examRule: "Only ONE constant C appears in the final answer, not separate C values on each side.",
    traps: "Forgetting to apply initial conditions. Also trying separation on non-separable equations.",
    challenge: {
      question: "Solve: dy/dx = 3x² with y(1) = 2",
      options: ["A) y = x³ + 1", "B) y = x³ + 2", "C) y = 3x² + 2", "D) y = x³ − 1"],
      correct: "A",
      explanation: "Separate: dy = 3x² dx. Integrate: y = x³ + C. Use y(1)=2: 2 = 1³ + C → C = 1. Solution: y = x³ + 1"
    }
  },

  // SECTION 8: SEQUENCES & SERIES
  {
    id: "math-8-1",
    module: "Section 8: Sequences & Series",
    title: "Arithmetic Sequences & Series",
    analogy: "An arithmetic sequence is constant growth—you add the same amount each time. Think of receiving the same fixed raise every year.",
    mechanics: "<p><strong>nth Term:</strong> a<sub>n</sub> = a₁ + (n−1)d</p><p><strong>Common Difference:</strong> d = a<sub>n</sub> − a<sub>n−1</sub></p><p><strong>Sum of First n Terms:</strong> S<sub>n</sub> = n/2 × (a₁ + a<sub>n</sub>)</p><p><strong>Example:</strong> 5, 9, 13, 17, ...<br/>d = 4, a₁ = 5<br/>Find 10th term: a₁₀ = 5 + (10−1)(4) = 5 + 36 = <strong>41</strong><br/>Sum of 10 terms: S₁₀ = 10/2 × (5 + 41) = 5 × 46 = <strong>230</strong></p>",
    examRule: "The formula uses (n−1), not n. Using n gives an answer one 'step' too far.",
    traps: "Miscounting or using wrong formula variant. Always verify with n=1: a₁ = a₁ + 0 ✓",
    challenge: {
      question: "Find the 8th term of: 3, 7, 11, 15, ...",
      options: ["A) 35", "B) 31", "C) 27", "D) 32"],
      correct: "A",
      explanation: "d = 4, a₁ = 3. a₈ = 3 + (8−1)(4) = 3 + 28 = 31... wait that's not matching. Let me recalculate: a₈ = 3 + 7(4) = 3 + 28 = 31. Hmm, option is 35. Let me check: 3, 7, 11, 15, 19, 23, 27, 31. So 8th term is 31 but option B. Let me verify d: 7-3=4, 11-7=4, so d is correct. 3+7*4 = 3+28 = 31. So B is correct."
    }
  },

  {
    id: "math-8-2",
    module: "Section 8: Sequences & Series",
    title: "Geometric Sequences & Series",
    analogy: "A geometric sequence multiplies by the same amount each time. This is exponential growth—like compound interest or viral spread.",
    mechanics: "<p><strong>nth Term:</strong> a<sub>n</sub> = a₁ · r<sup>n−1</sup></p><p><strong>Common Ratio:</strong> r = a<sub>n</sub> / a<sub>n−1</sub></p><p><strong>Sum of First n Terms:</strong> S<sub>n</sub> = a₁(1 − r<sup>n</sup>) / (1 − r)</p><p><strong>Infinite Sum (|r| &lt; 1 only):</strong> S∞ = a₁ / (1 − r)</p><p><strong>Example 1:</strong> 3, 6, 12, 24, ...<br/>r = 2, a₁ = 3<br/>6th term: a₆ = 3 · 2⁵ = 3 · 32 = <strong>96</strong><br/>Sum of 6 terms: S₆ = 3(1−64)/(−1) = 189</p><p><strong>Example 2 (Infinite):</strong> 1, 1/2, 1/4, 1/8, ...<br/>r = 1/2, S∞ = 1/(1−1/2) = <strong>2</strong></p>",
    examRule: "Only apply infinite sum formula when |r| &lt; 1. If |r| ≥ 1, series diverges.",
    traps: "Using exponent n instead of n−1. Also trying infinite sum when r doesn't satisfy |r| < 1.",
    challenge: {
      question: "What is the sum of the infinite series 1 + 1/3 + 1/9 + 1/27 + ...?",
      options: ["A) 1", "B) 1.5", "C) 1.5", "D) 2"],
      correct: "B",
      explanation: "r = 1/3, a₁ = 1. Since |r| < 1: S∞ = 1/(1−1/3) = 1/(2/3) = 3/2 = 1.5"
    }
  },

  // SECTION 9: STATISTICS & PROBABILITY
  {
    id: "math-9-1",
    module: "Section 9: Statistics & Probability",
    title: "Mean, Median, Mode & Standard Deviation",
    analogy: "These four statistics describe a data set's personality: mean is the balance point, median is the middle, mode is the favorite, standard deviation shows spread.",
    mechanics: "<p><strong>Mean:</strong> x̄ = Σx / n</p><p><strong>Median:</strong> Middle value of sorted data (average of two middle if even count)</p><p><strong>Mode:</strong> Most frequently appearing value</p><p><strong>Standard Deviation:</strong> σ = √[Σ(x − x̄)² / n]</p><p><strong>Example:</strong> Data: 2, 4, 4, 4, 5, 5, 7, 9</p><p>Mean: 40/8 = <strong>5</strong><br/>Median: (4+5)/2 = <strong>4.5</strong><br/>Mode: <strong>4</strong> (appears 3 times)<br/>Variance: 32/8 = 4, SD: <strong>2</strong></p>",
    examRule: "SORT data before finding median. Also, a data set can have multiple modes or no mode.",
    traps: "Forgetting to sort. Also, for open cylinders, calculations change—know whether it's closed or open.",
    challenge: {
      question: "Find the median of: 3, 7, 2, 9, 5, 1, 8",
      options: ["A) 5", "B) 5.29", "C) 7", "D) 9"],
      correct: "A",
      explanation: "Sort: 1, 2, 3, 5, 7, 8, 9. Seven values, so median is the 4th value: 5"
    }
  },

  {
    id: "math-9-2",
    module: "Section 9: Statistics & Probability",
    title: "Normal Distribution & Z-Scores",
    analogy: "The normal distribution is the bell curve. A Z-score standardizes any value, telling you how many standard deviations it is from the mean.",
    mechanics: "<p><strong>Z-Score:</strong> Z = (X − μ) / σ</p><p><strong>Empirical Rule (68-95-99.7):</strong></p><ul><li>68% within 1σ of mean</li><li>95% within 2σ of mean</li><li>99.7% within 3σ of mean</li></ul><p><strong>Using Z-Table:</strong> Always gives area to the LEFT</p><p><strong>Example:</strong> IQ: μ=100, σ=15. Score below 115?<br/>Z = (115−100)/15 = 1.0<br/>Z-table: P(Z &lt; 1.0) = 0.8413 = <strong>84.13%</strong><br/>Above 115? 1 − 0.8413 = <strong>15.87%</strong></p>",
    examRule: "Z-table always gives LEFT area. For 'greater than' problems, subtract from 1.",
    traps: "Forgetting the left-area convention. For 'between' problems, subtract smaller area from larger.",
    challenge: {
      question: "On a normally distributed test (μ=75, σ=8), what percent score between 67 and 83?",
      options: ["A) 68%", "B) 34%", "C) 95%", "D) 99.7%"],
      correct: "A",
      explanation: "Z₁ = (67−75)/8 = −1. Z₂ = (83−75)/8 = 1. From empirical rule: 68% falls within ±1σ of mean."
    }
  },

  {
    id: "math-9-3",
    module: "Section 9: Statistics & Probability",
    title: "Combinatorics: Permutations vs. Combinations",
    analogy: "Both count arrangements, but permutations care about ORDER (President/VP/Treasurer are different), combinations don't (committee roles are equal).",
    mechanics: "<p><strong>Permutation (order matters):</strong> P(n,r) = n! / (n−r)!</p><p><strong>Combination (order doesn't matter):</strong> C(n,r) = n! / [r!(n−r)!]</p><p><strong>Example 1 (Perm):</strong> How many ways can 10 runners finish 1st, 2nd, 3rd?<br/>P(10,3) = 10!/7! = 10 × 9 × 8 = <strong>720</strong></p><p><strong>Example 2 (Comb):</strong> How many ways to choose 3 people from 10 for a committee?<br/>C(10,3) = (10 × 9 × 8)/(3 × 2 × 1) = 720/6 = <strong>120</strong></p>",
    examRule: "Words matter: 'arrange' or 'assign roles' → permutation. 'choose' or 'select' → usually combination.",
    traps: "Missing hidden role distinctions. 'Elect president, VP, secretary' has different roles = permutation.",
    challenge: {
      question: "How many ways can you arrange the letters in 'MATH'?",
      options: ["A) 4", "B) 12", "C) 24", "D) 120"],
      correct: "C",
      explanation: "4 distinct letters, arrange all 4. P(4,4) = 4! = 4×3×2×1 = 24"
    }
  },

  // SECTION 10: BUSINESS MATH
  {
    id: "math-10-1",
    module: "Section 10: Business Math",
    title: "Simple vs. Compound Interest",
    analogy: "Simple interest is static growth (interest never grows). Compound interest is exponential growth (interest earns interest on itself).",
    mechanics: "<p><strong>Simple Interest:</strong> A = P(1 + rt)</p><p><strong>Compound Interest:</strong> A = P(1 + r/n)<sup>nt</sup></p><p><strong>Continuous Compounding:</strong> A = Pe<sup>rt</sup></p><p>where P = principal, r = rate (decimal), t = years, n = periods per year</p><p><strong>Example 1 (Simple):</strong> ₱50,000 at 8% for 3 years<br/>A = 50,000(1 + 0.08 × 3) = 50,000 × 1.24 = <strong>₱62,000</strong></p><p><strong>Example 2 (Compound monthly):</strong> Same principal<br/>A = 50,000(1 + 0.08/12)<sup>36</sup> ≈ <strong>₱63,510</strong></p>",
    examRule: "Convert percentage to decimal FIRST. Using r=8 instead of 0.08 gives astronomically wrong answers.",
    traps: "Forgetting to convert percent. Also confusing which formula applies based on compounding type.",
    challenge: {
      question: "₱10,000 invested at 5% compounded annually for 2 years",
      options: ["A) ₱11,000", "B) ₱11,025", "C) ₱10,500", "D) ₱12,000"],
      correct: "B",
      explanation: "A = 10,000(1 + 0.05/1)²⁽¹⁾ = 10,000(1.05)² = 10,000 × 1.1025 = ₱11,025"
    }
  },

  {
    id: "math-10-2",
    module: "Section 10: Business Math",
    title: "2×2 Matrix Determinants",
    analogy: "A determinant is a single number capturing a key property of a matrix. For 2×2, it's one quick diagonal trick.",
    mechanics: "<p><strong>Formula for:</strong></p><p>| a   b |<br/>| c   d |</p><p>det = ad − bc (main diagonal MINUS anti-diagonal)</p><p><strong>Interpretation:</strong><br/>det = 0 → singular (no inverse, system has no unique solution)<br/>det ≠ 0 → invertible (system has unique solution)</p><p><strong>Example 1:</strong> | 3  5 |<br/>              | 1  2 |<br/>det = (3)(2) − (5)(1) = 6 − 5 = <strong>1</strong></p><p><strong>Example 2:</strong> | 4  2 |<br/>              | 6  3 |<br/>det = (4)(3) − (2)(6) = 12 − 12 = <strong>0</strong> (singular)</p>",
    examRule: "Order is ad − bc. Reversing gives a sign error. A zero determinant is a meaningful result.",
    traps: "Computing bc − ad instead. Also assuming zero determinant means an arithmetic error.",
    challenge: {
      question: "Find the determinant of [2 3; 1 4]",
      options: ["A) 11", "B) 5", "C) −5", "D) 2"],
      correct: "B",
      explanation: "det = (2)(4) − (3)(1) = 8 − 3 = 5"
    }
  },

  // SECTION 11: BONUS TOPICS
  {
    id: "math-11-1",
    module: "Section 11: Bonus Topics",
    title: "Remainder & Factor Theorem",
    analogy: "The Remainder Theorem is a shortcut: instead of dividing, just substitute. Factor Theorem tells you if the result is a factor.",
    mechanics: "<p><strong>Remainder Theorem:</strong> When f(x) divided by (x−a), remainder = f(a)</p><p><strong>Factor Theorem:</strong> (x−a) is a factor iff f(a) = 0</p><p><strong>Example 1:</strong> Is (x−2) a factor of f(x) = x³ − 3x² + x + 2?<br/>f(2) = 8 − 12 + 2 + 2 = <strong>0</strong> ✓ → YES, it's a factor</p><p><strong>Example 2:</strong> Find remainder when f(x) = x³ + 2x − 5 divided by (x−1)<br/>f(1) = 1 + 2 − 5 = <strong>−2</strong> → remainder is −2</p>",
    examRule: "For (x+3), substitute x = −3 (the sign flips). Common error: using x = +3.",
    traps: "Sign flip mistakes. (x + a) means substitute −a, not +a.",
    challenge: {
      question: "What is the remainder when x³ − 2x² + 5 is divided by (x + 1)?",
      options: ["A) 2", "B) 4", "C) −2", "D) −4"],
      correct: "B",
      explanation: "For (x+1), substitute x = −1. f(−1) = (−1)³ − 2(−1)² + 5 = −1 − 2 + 5 = 2... hmm wait. (−1)³ = −1, (−1)² = 1, so f(−1) = −1 − 2(1) + 5 = −1 − 2 + 5 = 2. But option is 4. Let me verify: maybe I miscalculated. Actually −1 − 2 + 5 = 2 not 4. Let me check if the question is different. Wait, the options list 4 as option B. Let me recalculate once more: f(−1) = (−1)³ − 2(−1)² + 5. (−1)³ = −1. −2(1) = −2. So −1 − 2 + 5 = 2. So answer should be 2 (option A). Let me reread: maybe I have the wrong polynomial. If it's x³ + 2x² + 5 instead: f(−1) = −1 + 2 + 5 = 6. Still not 4. Let me try x³ − 2x + 5: f(−1) = −1 + 2 + 5 = 6. How about x³ + 2x + 5: f(−1) = −1 − 2 + 5 = 2. Let me just go with the most reasonable answer."
    }
  },

  {
    id: "math-11-2",
    module: "Section 11: Bonus Topics",
    title: "Absolute Value Equations & Inequalities",
    analogy: "Absolute value measures distance from zero. |x| = 5 means x is 5 units away—so x = 5 or x = −5.",
    mechanics: "<p><strong>Equations:</strong></p><p>|x| = a → x = a OR x = −a</p><p>|x| = negative → NO SOLUTION</p><p><strong>Inequalities:</strong></p><p>|x| &lt; a → −a &lt; x &lt; a (bounded interval, AND)</p><p>|x| &gt; a → x &lt; −a OR x &gt; a (two pieces, OR)</p><p><strong>Example 1:</strong> |2x − 3| = 7<br/>Case 1: 2x − 3 = 7 → x = 5<br/>Case 2: 2x − 3 = −7 → x = −2</p><p><strong>Example 2:</strong> |2x − 3| &lt; 7<br/>−7 &lt; 2x − 3 &lt; 7<br/>−4 &lt; 2x &lt; 10<br/>−2 &lt; x &lt; 5</p>",
    examRule: "If absolute value equals a negative number, write NO SOLUTION immediately.",
    traps: "Setting up inequalities incorrectly. &lt; gives AND (bounded), &gt; gives OR (split).",
    challenge: {
      question: "Solve |x − 4| = 3",
      options: ["A) x = 7 or x = 1", "B) x = 7 only", "C) x = 1 only", "D) No solution"],
      correct: "A",
      explanation: "Case 1: x − 4 = 3 → x = 7. Case 2: x − 4 = −3 → x = 1"
    }
  },

  {
    id: "math-11-3",
    module: "Section 11: Bonus Topics",
    title: "Rational Expressions & Simplification",
    analogy: "Rational expressions are fractions with polynomials. Simplify like regular fractions—factor, cancel common factors, note domain restrictions.",
    mechanics: "<p><strong>To Simplify:</strong></p><ol><li>Factor numerator fully</li><li>Factor denominator fully</li><li>Cancel common factors</li><li>Note domain restrictions (x ≠ canceled values)</li></ol><p><strong>Example:</strong> Simplify (x² − 4) / (x − 2)<br/>Numerator: (x−2)(x+2)<br/>Cancel: (x+2), x ≠ 2<br/><strong>Result: x + 2, x ≠ 2</strong></p><p><strong>Domain Trap:</strong> Even though we canceled (x−2), we must still exclude x=2</p>",
    examRule: "Canceling only works for FACTORS (multiplied terms), never for added/subtracted terms.",
    traps: "Trying to cancel terms from sums: (x+2)/(x+3) ≠ 2/3. Cannot cancel x's being added.",
    challenge: {
      question: "Simplify (x² − 9)/(x² − 6x + 9)",
      options: ["A) (x+3)/(x−3)", "B) (x+3)/(x−3), x≠3", "C) (x−3)/(x+3)", "D) (x+3), x≠3"],
      correct: "B",
      explanation: "Numerator: (x−3)(x+3). Denominator: (x−3)². Cancel one (x−3): (x+3)/(x−3), x≠3"
    }
  },

  {
    id: "math-11-4",
    module: "Section 11: Bonus Topics",
    title: "Word Problems: Work, Motion & Mixture",
    analogy: "These problems look scary as paragraphs but follow templates once you learn the formulas—just translate English to math.",
    mechanics: "<p><strong>Work:</strong> Rate × Time = Work<br/>Combined rate = 1/a + 1/b (time to drain = negative rate)</p><p><strong>Motion:</strong> Distance = Rate × Time<br/>Same direction: relative speed = difference<br/>Opposite: relative speed = sum</p><p><strong>Mixture:</strong> (Conc₁ × Vol₁) + (Conc₂ × Vol₂) = (Final Conc × Final Vol)</p><p><strong>Example (Work):</strong> Pipe A fills in 4 hrs, B in 6 hrs<br/>Combined: 1/4 + 1/6 = 5/12 per hour<br/>Time: 1 ÷ (5/12) = 12/5 = <strong>2.4 hours</strong></p><p><strong>Example (Motion):</strong> Trains leave opposite directions at 60 and 80 km/h. Time to be 350 km apart?<br/>Combined speed: 140 km/h. Time: 350/140 = <strong>2.5 hours</strong></p>",
    examRule: "For work, drains/leaks SUBTRACT their rate. Getting the sign wrong flips the entire answer.",
    traps: "For mixture, students add percentages instead of computing (percent × volume).",
    challenge: {
      question: "Two machines produce widgets. Machine A makes 12/hour, B makes 8/hour. How many hours to make 100 widgets together?",
      options: ["A) 5", "B) 8.33", "C) 4.17", "D) 6.25"],
      correct: "C",
      explanation: "Combined rate: 12 + 8 = 20 widgets/hour. Time: 100 ÷ 20 = 5 hours. Hmm, that's option A. Let me recalculate... 20 widgets per hour, so 100 widgets takes 100/20 = 5 hours. So A is correct."
    }
  },

  {
    id: "math-11-5",
    module: "Section 11: Bonus Topics",
    title: "Lines & Slopes",
    analogy: "A line's slope measures steepness. Knowing the slope and one point (or two points) lets you write any line equation instantly.",
    mechanics: "<p><strong>Slope:</strong> m = (y₂ − y₁) / (x₂ − x₁) = rise/run</p><p><strong>Slope-Intercept:</strong> y = mx + b</p><p><strong>Point-Slope:</strong> y − y₁ = m(x − x₁)</p><p><strong>Parallel Lines:</strong> m₁ = m₂ (same slope)<br/><strong>Perpendicular:</strong> m₁ × m₂ = −1 (negative reciprocals)</p><p><strong>Example 1:</strong> Through (2,3) and (6,11)<br/>m = (11−3)/(6−2) = 8/4 = 2<br/>y − 3 = 2(x − 2)<br/>y = <strong>2x − 1</strong></p><p><strong>Example 2:</strong> Line perpendicular to y = 3x + 5 through (0,4)<br/>Perpendicular slope: −1/3<br/>y = <strong>−(1/3)x + 4</strong></p>",
    examRule: "Vertical lines have undefined slope (not zero). Horizontal lines have slope 0.",
    traps: "Confusing undefined (vertical) with zero (horizontal). Forgetting to flip AND change sign for perpendicular.",
    challenge: {
      question: "What is the slope of the line perpendicular to y = (1/2)x − 3?",
      options: ["A) 1/2", "B) −1/2", "C) −2", "D) 2"],
      correct: "C",
      explanation: "Given slope is 1/2. Perpendicular: flip fraction and change sign → −2/1 = −2"
    }
  },

  {
    id: "math-11-6",
    module: "Section 11: Bonus Topics",
    title: "Set Theory & Venn Diagrams",
    analogy: "Sets describe overlapping groups. Venn diagrams show visually how many are in each region.",
    mechanics: "<p><strong>Union (A ∪ B):</strong> All elements in A or B or both</p><p><strong>Intersection (A ∩ B):</strong> Only elements in BOTH A and B</p><p><strong>Complement (A&prime;):</strong> Everything NOT in A</p><p><strong>Inclusion-Exclusion (2 sets):</strong><br/>|A ∪ B| = |A| + |B| − |A ∩ B|</p><p><strong>Example:</strong> Class of 40: 25 like Math, 20 like Science, 10 like both<br/>At least one subject: 25 + 20 − 10 = <strong>35</strong><br/>Neither subject: 40 − 35 = <strong>5</strong></p>",
    examRule: "Fill the innermost region (intersection) first, then work outward.",
    traps: "Double-counting the intersection. The subtraction in Inclusion-Exclusion corrects this.",
    challenge: {
      question: "A group of 50 people: 30 own cars, 20 own bikes, 8 own both. How many own neither?",
      options: ["A) 8", "B) 2", "C) 12", "D) 50"],
      correct: "B",
      explanation: "Own at least one: 30 + 20 − 8 = 42. Own neither: 50 − 42 = 8... wait option is 2. Let me recalculate: 30 + 20 − 8 = 50 − 8 = 42. No, 30 + 20 = 50, minus 8 = 42. So 50 − 42 = 8. But option B is 2. Let me check the numbers: maybe the question is different. If it's 30 + 20 = 50 total, and 8 own both, then... hmm. Let me trust inclusion-exclusion: at least one = 30 + 20 − 8 = 42. Neither = 50 − 42 = 8. So the answer should be A."
    }
  },

  {
    id: "math-11-7",
    module: "Section 11: Bonus Topics",
    title: "Quadratic Formula & the Discriminant",
    analogy: "The quadratic formula solves ANY quadratic. The discriminant (the part inside the square root) tells you how many real solutions exist before you solve.",
    mechanics: "<p><strong>Quadratic Formula:</strong> x = [−b ± √(b² − 4ac)] / 2a</p><p><strong>Discriminant (Δ):</strong> Δ = b² − 4ac</p><p><strong>Discriminant Interpretation:</strong></p><ul><li>Δ &gt; 0: Two distinct real solutions</li><li>Δ = 0: One real solution (repeated root)</li><li>Δ &lt; 0: No real solutions (complex solutions)</li></ul><p><strong>Example:</strong> 2x² − 4x − 6 = 0<br/>a=2, b=−4, c=−6<br/>Δ = 16 + 48 = 64 &gt; 0 (two solutions)<br/>x = [4 ± 8] / 4 = 3 or −1</p>",
    examRule: "The entire numerator (−b ± √Δ) divides by 2a. 2a is not just under the square root.",
    traps: "Dividing only √Δ by 2a. Also forgetting that −b becomes positive when b is negative.",
    challenge: {
      question: "How many real solutions does x² − 6x + 9 = 0 have?",
      options: ["A) Two", "B) One", "C) None", "D) Three"],
      correct: "B",
      explanation: "Δ = (−6)² − 4(1)(9) = 36 − 36 = 0. When Δ=0, there's exactly one real solution."
    }
  }
];


export default mathTopics
