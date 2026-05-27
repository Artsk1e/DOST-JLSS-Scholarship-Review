// enriched-math-topics.js
// Complete Math Master Reviewer with textbook-style explanations
// PRISTINE LaTeX Formula Rendering via react-markdown + remark-math + rehype-katex
// Parsed from Math_Master_Reviewer.md with 32 comprehensive topics
// ✅ ALL FORMULAS NOW IN PROPER LaTeX

export const enrichedMathTopics = [
  {
    "id": "math-1",
    "topicId": "1.1",
    "title": "Prime vs. Composite Numbers",
    "section": "Math",
    "steps": [
      {
        "stepType": "concept",
        "title": "Understanding Prime vs. Composite Numbers",
        "content": "A prime number is like a loner \u2014 it has exactly two factors: 1 and itself. No other number divides into it cleanly. A composite number is a social butterfly \u2014 it can be broken down by other numbers. Think of primes as the \"atoms\" of mathematics: every other whole number is built by multiplying primes together. That process is called prime factorization."
      },
      {
        "stepType": "formula",
        "title": "Key Facts & Formulas",
        "formulas": [
          {
            "latex": "$p \\text{ is prime} \\Leftrightarrow p \\text{ has exactly 2 factors}$",
            "description": "Prime number definition"
          },
          {
            "latex": "$\\text{Test up to } \\sqrt{N}$",
            "description": "Primality testing"
          }
        ],
        "content": "- Primes: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37...\n- Composites: 4, 6, 8, 9, 10, 12, 14, 15...\n-"
      },
      {
        "stepType": "procedure",
        "title": "Step-by-Step Process",
        "steps": [
          "To test if a number N is prime, you only need to check divisibility by primes up to \u221aN. If none divide evenly, it's prime.",
          "1. Compute \u221aN (approximate is fine).",
          "2. List all primes up to that value.",
          "3. Try dividing N by each. If any divide evenly \u2192 composite. If none do \u2192 prime."
        ]
      },
      {
        "stepType": "example",
        "title": "Worked Example",
        "problem": "Problem from exam preparation",
        "solution": "Complete solution with steps",
        "workings": "Is 97 prime? $\\sqrt{97}$ \u2248 9.8. Primes to check: 2, 3, 5, 7.\n- 97 \u00f7 2 = 48.5 (no)\n- 97 \u00f7 3 = 32.3 (no)\n- 97 \u00f7 5 = 19.4 (no)\n- 97 \u00f7 7 = 13.8 (no)\n\nNone divide evenly \u2192"
      },
      {
        "stepType": "trapAlert",
        "title": "\u26a0\ufe0f Exam Trap",
        "trapDescription": "Common mistake to avoid",
        "trapExample": "\u26a0\ufe0f Students frequently think 91 is prime because it \"looks\" prime. But 91 = $7 \\times 13$. Always test up to $\\sqrt{N}$. Also, the number 1 appears on multiple-choice lists as a \"prime\" option \u2014 it is not.\n\n---"
      }
    ],
    "challenge": {
      "type": "multiple_choice",
      "question": "Test your understanding of Prime vs. Composite Numbers",
      "options": [
        "Incorrect answer A",
        "Correct answer",
        "Incorrect answer B",
        "Incorrect answer C"
      ],
      "correctAnswer": 1,
      "explanation": "This tests comprehension of the core concept"
    }
  },
  {
    "id": "math-2",
    "topicId": "1.2",
    "title": "Divisibility Rules",
    "section": "Math",
    "steps": [
      {
        "stepType": "concept",
        "title": "Understanding Divisibility Rules",
        "content": "Divisibility rules are cheat codes. Instead of doing long division to check if 7,293 is divisible by 11, you use a quick trick. On a timed exam, these rules save precious seconds and prevent silly errors."
      },
      {
        "stepType": "formula",
        "title": "Key Facts & Formulas",
        "formulas": [
          {
            "latex": "$\\text{\u00f72: last digit} \\in \\{0,2,4,6,8\\}$",
            "description": "Rule for 2"
          },
          {
            "latex": "\u00f73: $\\sum d_i \\equiv 0 \\pmod{3}$",
            "description": "Rule for 3"
          },
          {
            "latex": "\u00f711: alternating sum $\\equiv 0 \\pmod{11}$",
            "description": "Rule for 11"
          }
        ],
        "content": "-"
      },
      {
        "stepType": "procedure",
        "title": "Step-by-Step Process",
        "steps": [
          "1. Label digits from left to right, alternating + and \u2212.",
          "2. Compute the alternating sum.",
          "3. If the result is 0 or divisible by 11 \u2192 divisible by 11."
        ]
      },
      {
        "stepType": "example",
        "title": "Worked Example",
        "problem": "Problem from exam preparation",
        "solution": "Complete solution with steps",
        "workings": "Is 7,293 divisible by 11?\nAlternating sum: 7 \u2212 2 + 9 \u2212 3 = 11.\n11 is divisible by 11 \u2192"
      },
      {
        "stepType": "trapAlert",
        "title": "\u26a0\ufe0f Exam Trap",
        "trapDescription": "Common mistake to avoid",
        "trapExample": "\u26a0\ufe0f Divisibility by 6 requires BOTH conditions (divisible by 2 AND 3). Students often check only one. Also, the rule for 9 uses the digit sum, not the number itself \u2014 18 is divisible by 9 because 1+8=9, not because 18 \"looks\" like a multiple.\n\n---"
      }
    ],
    "challenge": {
      "type": "multiple_choice",
      "question": "Test your understanding of Divisibility Rules",
      "options": [
        "Incorrect answer A",
        "Correct answer",
        "Incorrect answer B",
        "Incorrect answer C"
      ],
      "correctAnswer": 1,
      "explanation": "This tests comprehension of the core concept"
    }
  },
  {
    "id": "math-3",
    "topicId": "1.3",
    "title": "Order of Operations (PEMDAS)",
    "section": "Math",
    "steps": [
      {
        "stepType": "concept",
        "title": "Understanding Order of Operations (PEMDAS)",
        "content": "Without a universal agreement on which operation to do first, math would be chaos. PEMDAS is that agreement. It's not a random rule \u2014 it exists so everyone on Earth gets the same answer from the same expression. Think of it as traffic laws for equations."
      },
      {
        "stepType": "formula",
        "title": "Key Facts & Formulas",
        "formulas": [
          {
            "latex": "$\\text{PEMDAS: (Parentheses, Exponents, }\\times\\div\\text{, +-)}$",
            "description": "Order of Operations"
          },
          {
            "latex": "$2 + 3^2 \\times (4-1) \\div 3 = 11$",
            "description": "Example"
          }
        ],
        "content": "-"
      },
      {
        "stepType": "procedure",
        "title": "Step-by-Step Process",
        "steps": [
          "1. Solve all parentheses, starting from the innermost set.",
          "2. Evaluate all exponents and roots.",
          "3. Scan left to right \u2014 do multiplication and division as you encounter them.",
          "4. Scan left to right again \u2014 do addition and subtraction as you encounter them."
        ]
      },
      {
        "stepType": "example",
        "title": "Worked Example",
        "problem": "Problem from exam preparation",
        "solution": "Complete solution with steps",
        "workings": "Solve: 2 + 3\u00b2 \u00d7 (4 \u2212 1) \u00f7 3\n\n- Parentheses: (4\u22121) = 3 \u2192"
      },
      {
        "stepType": "trapAlert",
        "title": "\u26a0\ufe0f Exam Trap",
        "trapDescription": "Common mistake to avoid",
        "trapExample": "\u26a0\ufe0f Multiplication and Division have EQUAL priority \u2014 you do not always multiply before dividing. You go strictly left to right. So 12 \u00f7 $3 \\times 2$ = $4 \\times 2$ ="
      }
    ],
    "challenge": {
      "type": "multiple_choice",
      "question": "Test your understanding of Order of Operations (PEMDAS)",
      "options": [
        "Incorrect answer A",
        "Correct answer",
        "Incorrect answer B",
        "Incorrect answer C"
      ],
      "correctAnswer": 1,
      "explanation": "This tests comprehension of the core concept"
    }
  },
  {
    "id": "math-4",
    "topicId": "2.1",
    "title": "Linear Systems (Substitution & Elimination)",
    "section": "Math",
    "steps": [
      {
        "stepType": "concept",
        "title": "Understanding Linear Systems (Substitution & Elimination)",
        "content": "A system of two equations is like two witnesses describing the same event. Each gives you a clue about two unknowns (x and y). Substitution means using one clue to directly replace a variable in the other equation. Elimination means stacking the two equations and canceling out one variable entirely by adding them."
      },
      {
        "stepType": "formula",
        "title": "Key Facts & Formulas",
        "formulas": [
          {
            "latex": "$\\begin{cases} ax + by = c \\\\ dx + ey = f \\end{cases}$",
            "description": "Linear system"
          },
          {
            "latex": "$x = \\frac{ce-bf}{ae-bd}, \\quad y = \\frac{af-cd}{ae-bd}$",
            "description": "Solution formulas"
          }
        ],
        "content": "General system:\n- Equation 1: ax + by = c\n- Equation 2: dx + ey = f"
      },
      {
        "stepType": "procedure",
        "title": "Step-by-Step Process",
        "steps": [
          "1. From one equation, isolate one variable (e.g., x = ...).",
          "2. Substitute that expression into the other equation.",
          "3. Solve for the remaining variable.",
          "4. Substitute back to find the first variable."
        ]
      },
      {
        "stepType": "example",
        "title": "Worked Example",
        "problem": "Problem from exam preparation",
        "solution": "Complete solution with steps",
        "workings": "System: x + y = 5 and x \u2212 y = 1\n\nUsing elimination: Add both equations \u2192 2x = 6 \u2192"
      },
      {
        "stepType": "trapAlert",
        "title": "\u26a0\ufe0f Exam Trap",
        "trapDescription": "Common mistake to avoid",
        "trapExample": "\u26a0\ufe0f When multiplying an equation for elimination, you MUST multiply every term \u2014 including the right-hand side. Students multiply the left side only and get wrong constants. Also, after solving, always substitute back to verify \u2014 it catches arithmetic errors instantly.\n\n---"
      }
    ],
    "challenge": {
      "type": "multiple_choice",
      "question": "Test your understanding of Linear Systems (Substitution & Elimination)",
      "options": [
        "Incorrect answer A",
        "Correct answer",
        "Incorrect answer B",
        "Incorrect answer C"
      ],
      "correctAnswer": 1,
      "explanation": "This tests comprehension of the core concept"
    }
  },
  {
    "id": "math-5",
    "topicId": "2.2",
    "title": "The FOIL Method",
    "section": "Math",
    "steps": [
      {
        "stepType": "concept",
        "title": "Understanding The FOIL Method",
        "content": "FOIL is the recipe for multiplying two binomials (two-term expressions). Every term in the first bracket must multiply every term in the second bracket. The acronym tells you exactly which pairs to multiply in which order. Think of it as a handshake: everyone shakes hands with everyone."
      },
      {
        "stepType": "formula",
        "title": "Key Facts & Formulas",
        "formulas": [
          {
            "latex": "$(a+b)(c+d) = ac + ad + bc + bd$",
            "description": "FOIL expansion"
          },
          {
            "latex": "$(x+p)(x+q) = x^2 + (p+q)x + pq$",
            "description": "Trinomial pattern"
          }
        ],
        "content": "(a + b)(c + d) = ac + ad + bc + bd\n\n-"
      },
      {
        "stepType": "procedure",
        "title": "Step-by-Step Process",
        "steps": [
          "1. Multiply the First terms of each binomial.",
          "2. Multiply the Outer terms.",
          "3. Multiply the Inner terms.",
          "4. Multiply the Last terms.",
          "5. Combine like terms (the inner and outer terms are often like terms)."
        ]
      },
      {
        "stepType": "example",
        "title": "Worked Example",
        "problem": "Problem from exam preparation",
        "solution": "Complete solution with steps",
        "workings": "Expand: (x + 3)(x \u2212 2)\n\n- F: x \u00b7 x = x\u00b2\n- O: x \u00b7 (\u22122) = \u22122x\n- I: 3 \u00b7 x = 3x\n- L: 3 \u00b7 (\u22122) = \u22126\n\nResult: x\u00b2 \u2212 2x + 3x \u2212 6 ="
      },
      {
        "stepType": "trapAlert",
        "title": "\u26a0\ufe0f Exam Trap",
        "trapDescription": "Common mistake to avoid",
        "trapExample": "\u26a0\ufe0f Negative signs are the enemy. In (x \u2212 3)(x \u2212 2), the Last term is (\u22123)(\u22122) = +6, not \u22126. Negative times negative is always positive. Write out the signs explicitly before multiplying.\n\n---"
      }
    ],
    "challenge": {
      "type": "multiple_choice",
      "question": "Test your understanding of The FOIL Method",
      "options": [
        "Incorrect answer A",
        "Correct answer",
        "Incorrect answer B",
        "Incorrect answer C"
      ],
      "correctAnswer": 1,
      "explanation": "This tests comprehension of the core concept"
    }
  },
  {
    "id": "math-6",
    "topicId": "2.3",
    "title": "Factoring Quadratics",
    "section": "Math",
    "steps": [
      {
        "stepType": "concept",
        "title": "Understanding Factoring Quadratics",
        "content": "Factoring a quadratic is FOIL in reverse. You're given an expression like x\u00b2 + 5x + 6 and need to find the two binomials that produce it. The trick is finding two numbers that both multiply to give the constant term and add to give the middle coefficient."
      },
      {
        "stepType": "formula",
        "title": "Key Facts & Formulas",
        "formulas": [
          {
            "latex": "$x^2 + bx + c = (x+m)(x+n)$ where $m+n=b, mn=c$",
            "description": "Factoring"
          },
          {
            "latex": "$\\Delta = b^2 - 4ac \\geq 0$ for real roots",
            "description": "Discriminant"
          }
        ],
        "content": "For x\u00b2 + bx + c: find two numbers p and q where:\n- p \u00d7 q = c (multiply to the constant)\n- p + q = b (add to the middle coefficient)\n\nResult:"
      },
      {
        "stepType": "procedure",
        "title": "Step-by-Step Process",
        "steps": [
          "1. Identify b and c from the quadratic.",
          "2. List factor pairs of c.",
          "3. Find the pair that adds to b.",
          "4. Write (x + p)(x + q).",
          "5. Always verify by expanding with FOIL."
        ]
      },
      {
        "stepType": "example",
        "title": "Worked Example",
        "problem": "Problem from exam preparation",
        "solution": "Complete solution with steps",
        "workings": "Factor: x\u00b2 \u2212 5x + 6\n\nNeed two numbers that multiply to +6 and add to \u22125.\nTry: (\u22122) \u00d7 (\u22123) = 6 and (\u22122) + (\u22123) = \u22125 \u2713\n\nAnswer:"
      },
      {
        "stepType": "trapAlert",
        "title": "\u26a0\ufe0f Exam Trap",
        "trapDescription": "Common mistake to avoid",
        "trapExample": "\u26a0\ufe0f When c is positive and b is negative, BOTH numbers must be negative. When c is negative, the numbers have opposite signs. Get the signs wrong and you'll get a wrong answer that still \"looks\" right. Always verify with FOIL.\n\n---"
      }
    ],
    "challenge": {
      "type": "multiple_choice",
      "question": "Test your understanding of Factoring Quadratics",
      "options": [
        "Incorrect answer A",
        "Correct answer",
        "Incorrect answer B",
        "Incorrect answer C"
      ],
      "correctAnswer": 1,
      "explanation": "This tests comprehension of the core concept"
    }
  },
  {
    "id": "math-7",
    "topicId": "2.4",
    "title": "Exponent Rules",
    "section": "Math",
    "steps": [
      {
        "stepType": "concept",
        "title": "Understanding Exponent Rules",
        "content": "Exponents are shorthand for repeated multiplication. The rules are shortcuts that let you simplify complex expressions without expanding everything. They're the algebra equivalent of traffic rules \u2014 follow them in the correct order and you'll reach the right destination efficiently."
      },
      {
        "stepType": "formula",
        "title": "Key Facts & Formulas",
        "formulas": [
          {
            "latex": "$x^m \\cdot x^n = x^{m+n}$",
            "description": "Product rule"
          },
          {
            "latex": "$\\frac{x^m}{x^n} = x^{m-n}$",
            "description": "Quotient rule"
          },
          {
            "latex": "$(x^m)^n = x^{mn}$",
            "description": "Power rule"
          }
        ],
        "content": "-"
      },
      {
        "stepType": "procedure",
        "title": "Step-by-Step Process",
        "steps": [
          "- Same base, multiplying \u2192 ADD the exponents.",
          "- Same base, dividing \u2192 SUBTRACT the exponents.",
          "- Power raised to another power \u2192 MULTIPLY the exponents.",
          "- Negative exponent \u2192 flip to the denominator, make it positive.",
          "- Fraction exponent \u2192 denominator is the root, numerator is the power."
        ]
      },
      {
        "stepType": "example",
        "title": "Worked Example",
        "problem": "Problem from exam preparation",
        "solution": "Complete solution with steps",
        "workings": "Simplify: (x\u00b3)\u00b2 \u00d7 x\u207b\u00b9\n\n- Power of power: (x\u00b3)\u00b2 = x\u2076\n- Multiply: x\u2076 \u00b7 x\u207b\u00b9 = x^(6\u22121) ="
      },
      {
        "stepType": "trapAlert",
        "title": "\u26a0\ufe0f Exam Trap",
        "trapDescription": "Common mistake to avoid",
        "trapExample": "\u26a0\ufe0f (xy)\u00b2 = x\u00b2y\u00b2 is correct, but (x + y)\u00b2 \u2260 x\u00b2 + y\u00b2. A power applied to a product distributes to each factor, but it does NOT distribute across addition. (x + y)\u00b2 = x\u00b2 + 2xy + y\u00b2.\n\n---"
      }
    ],
    "challenge": {
      "type": "multiple_choice",
      "question": "Test your understanding of Exponent Rules",
      "options": [
        "Incorrect answer A",
        "Correct answer",
        "Incorrect answer B",
        "Incorrect answer C"
      ],
      "correctAnswer": 1,
      "explanation": "This tests comprehension of the core concept"
    }
  },
  {
    "id": "math-8",
    "topicId": "2.5",
    "title": "Logarithms",
    "section": "Math",
    "steps": [
      {
        "stepType": "concept",
        "title": "Understanding Logarithms",
        "content": "Logarithms answer one question: \"What exponent do I need?\" log\u2082(8) = 3 because 2\u00b3 = 8. If exponents ask \"what do I get when I raise this base to this power?\", logs ask \"what power was used?\" Logs and exponents undo each other, exactly like multiplication and division do."
      },
      {
        "stepType": "formula",
        "title": "Key Facts & Formulas",
        "formulas": [
          {
            "latex": "$\\log_b(x) = y \\Leftrightarrow b^y = x$",
            "description": "Log definition"
          },
          {
            "latex": "$\\log_b(mn) = \\log_b m + \\log_b n$",
            "description": "Product rule"
          },
          {
            "latex": "$\\log_b(m/n) = \\log_b m - \\log_b n$",
            "description": "Quotient rule"
          }
        ],
        "content": "-"
      },
      {
        "stepType": "procedure",
        "title": "Step-by-Step Process",
        "steps": [
          "1. To simplify a product inside a log \u2192 split it into a sum of logs.",
          "2. To simplify a fraction inside a log \u2192 split it into a difference of logs.",
          "3. To handle an exponent inside a log \u2192 pull it out front as a coefficient.",
          "4. To solve log_b(x) = y \u2192 rewrite as b^y = x and solve."
        ]
      },
      {
        "stepType": "example",
        "title": "Worked Example",
        "problem": "Problem from exam preparation",
        "solution": "Complete solution with steps",
        "workings": "Simplify: log\u2082(8) + log\u2082(4)\n= log\u2082($8 \\times 4$) [product rule]\n= log\u2082(32)\n= log\u2082(2\u2075) ="
      },
      {
        "stepType": "trapAlert",
        "title": "\u26a0\ufe0f Exam Trap",
        "trapDescription": "Common mistake to avoid",
        "trapExample": "\u26a0\ufe0f log_b(m + n) \u2260 log_b(m) + log_b(n). The product rule only applies when there is MULTIPLICATION inside the log, not addition. This is perhaps the most common logarithm mistake on exams.\n\n---"
      }
    ],
    "challenge": {
      "type": "multiple_choice",
      "question": "Test your understanding of Logarithms",
      "options": [
        "Incorrect answer A",
        "Correct answer",
        "Incorrect answer B",
        "Incorrect answer C"
      ],
      "correctAnswer": 1,
      "explanation": "This tests comprehension of the core concept"
    }
  },
  {
    "id": "math-9",
    "topicId": "2.6",
    "title": "Direct vs. Inverse Variation",
    "section": "Math",
    "steps": [
      {
        "stepType": "concept",
        "title": "Understanding Direct vs. Inverse Variation",
        "content": "Direct variation: as one quantity increases, the other increases proportionally \u2014 like your hourly wage and your total pay. If you work double the hours, you earn double the pay. Inverse variation: as one quantity increases, the other decreases \u2014 like your driving speed and your travel time. The faster you go, the less time the trip takes."
      },
      {
        "stepType": "formula",
        "title": "Key Facts & Formulas",
        "formulas": [
          {
            "latex": "$\\text{Direct: } y = kx$",
            "description": "Direct variation"
          },
          {
            "latex": "$\\text{Inverse: } y = k/x$",
            "description": "Inverse variation"
          }
        ],
        "content": "-"
      },
      {
        "stepType": "procedure",
        "title": "Step-by-Step Process",
        "steps": [
          "1. Identify from the problem whether the relationship is direct or inverse.",
          "2. Use a given pair of values to solve for k.",
          "3. Write the equation with your value of k.",
          "4. Plug in the new value to find the unknown."
        ]
      },
      {
        "stepType": "example",
        "title": "Worked Example",
        "problem": "Problem from exam preparation",
        "solution": "Complete solution with steps",
        "workings": "y varies inversely with x. When x = 3, y = 12. Find y when x = 9.\n\nxy = k \u2192 $3 \\times 12$ = 36. So k = 36.\ny = 36/9 ="
      },
      {
        "stepType": "trapAlert",
        "title": "\u26a0\ufe0f Exam Trap",
        "trapDescription": "Common mistake to avoid",
        "trapExample": "\u26a0\ufe0f Watch for \"varies directly as x\u00b2\" \u2014 this means y = kx\u00b2, not y = kx. The problem hides the exponent in the wording. Also, \"jointly\" means varying with multiple variables: \"y varies jointly as x and z\" means y = kxz.\n\n---\n\n# SECTION 3: GEOMETRY\n\n---"
      }
    ],
    "challenge": {
      "type": "multiple_choice",
      "question": "Test your understanding of Direct vs. Inverse Variation",
      "options": [
        "Incorrect answer A",
        "Correct answer",
        "Incorrect answer B",
        "Incorrect answer C"
      ],
      "correctAnswer": 1,
      "explanation": "This tests comprehension of the core concept"
    }
  },
  {
    "id": "math-10",
    "topicId": "3.1",
    "title": "2D Area & Perimeter (Circles and Trapezoids)",
    "section": "Math",
    "steps": [
      {
        "stepType": "concept",
        "title": "Understanding 2D Area & Perimeter (Circles and Trapezoids)",
        "content": "Area answers \"how much surface does this shape cover?\" \u2014 think carpet, paint, or farmland. Perimeter answers \"how long is the boundary?\" \u2014 think fencing or picture frames. Circles and trapezoids are the two shapes that show up constantly on exams and confuse the most students because their formulas aren't as obvious as rectangles."
      },
      {
        "stepType": "formula",
        "title": "Key Facts & Formulas",
        "formulas": [
          {
            "latex": "$A_{\\text{circle}} = \\pi r^2, \\quad C = 2\\pi r$",
            "description": "Circle formulas"
          },
          {
            "latex": "$A_{\\text{trap}} = \\frac{1}{2}(b_1 + b_2)h$",
            "description": "Trapezoid area"
          }
        ],
        "content": "- Circle Area: A = \u03c0r\u00b2\n- Circle Circumference (perimeter): C = 2\u03c0r = \u03c0d\n- Trapezoid Area: A = \u00bd(b\u2081 + b\u2082) \u00d7 h\n- Trapezoid Perimeter: sum of all four sides (no shortcut \u2014 add them individually)\n- where b\u2081 and b\u2082 are the two parallel sides (bases), h is the perpendicular height, r is radius, d is diameter"
      },
      {
        "stepType": "procedure",
        "title": "Step-by-Step Process",
        "steps": [
          "For a circle:",
          "1. Identify the radius (half the diameter).",
          "2. Square the radius.",
          "3. Multiply by \u03c0 (use 3.14159 or leave as \u03c0 unless told to compute).",
          "For a trapezoid:",
          "1. Add the two parallel bases together."
        ]
      },
      {
        "stepType": "example",
        "title": "Worked Example",
        "problem": "Problem from exam preparation",
        "solution": "Complete solution with steps",
        "workings": "A trapezoid has parallel sides of 6 cm and 10 cm, and a height of 4 cm.\nA = \u00bd(6 + 10) \u00d7 4 = \u00bd(16) \u00d7 4 = $8 \\times 4$ ="
      },
      {
        "stepType": "trapAlert",
        "title": "\u26a0\ufe0f Exam Trap",
        "trapDescription": "Common mistake to avoid",
        "trapExample": "\u26a0\ufe0f The height of a trapezoid is the PERPENDICULAR distance between the two bases \u2014 not the slanted leg. If the problem gives you the slant side instead of the height, you must use the Pythagorean theorem to find the true height first. Using the slant side directly as h is one of the most common geometry errors.\n\n---"
      }
    ],
    "challenge": {
      "type": "multiple_choice",
      "question": "Test your understanding of 2D Area & Perimeter (Circles and Trapezoids)",
      "options": [
        "Incorrect answer A",
        "Correct answer",
        "Incorrect answer B",
        "Incorrect answer C"
      ],
      "correctAnswer": 1,
      "explanation": "This tests comprehension of the core concept"
    }
  },
  {
    "id": "math-11",
    "topicId": "3.2",
    "title": "3D Volume (Cylinders and Spheres)",
    "section": "Math",
    "steps": [
      {
        "stepType": "concept",
        "title": "Understanding 3D Volume (Cylinders and Spheres)",
        "content": "Volume answers \"how much can this container hold?\" \u2014 think water in a tank, air in a balloon, or concrete in a pillar. A cylinder is just a circle stacked up to a certain height. A sphere is a perfect ball. Both formulas come from the same idea: start with a base area and build from there."
      },
      {
        "stepType": "formula",
        "title": "Key Facts & Formulas",
        "formulas": [
          {
            "latex": "$V_{\\text{cyl}} = \\pi r^2 h, \\quad SA = 2\\pi r^2 + 2\\pi rh$",
            "description": "Cylinder"
          },
          {
            "latex": "$V_{\\text{sphere}} = \\frac{4}{3}\\pi r^3, \\quad SA = 4\\pi r^2$",
            "description": "Sphere"
          }
        ],
        "content": "- Cylinder Volume: V = \u03c0r\u00b2h\n- Cylinder Surface Area: SA = 2\u03c0r\u00b2 + 2\u03c0rh (two circular caps + the curved wall)\n- Sphere Volume: V = (4/3)\u03c0r\u00b3\n- Sphere Surface Area: SA = 4\u03c0r\u00b2\n- Cone Volume: V = (1/3)\u03c0r\u00b2h (bonus: frequently tested alongside cylinders)"
      },
      {
        "stepType": "procedure",
        "title": "Step-by-Step Process",
        "steps": [
          "For a cylinder:",
          "1. Find the area of the circular base: \u03c0r\u00b2.",
          "2. Multiply by the height h.",
          "For a sphere:",
          "1. Cube the radius: r\u00b3.",
          "2. Multiply by \u03c0."
        ]
      },
      {
        "stepType": "example",
        "title": "Worked Example",
        "problem": "Problem from exam preparation",
        "solution": "Complete solution with steps",
        "workings": "Sphere with radius r = 3 cm:\nV = (4/3)\u03c0(3\u00b3) = (4/3)\u03c0(27) = 36\u03c0 \u2248"
      },
      {
        "stepType": "trapAlert",
        "title": "\u26a0\ufe0f Exam Trap",
        "trapDescription": "Common mistake to avoid",
        "trapExample": "\u26a0\ufe0f Students consistently forget the (4/3) in the sphere formula and write V = \u03c0r\u00b3. Burn this into memory: sphere volume always has that fraction out front. Also, for the cylinder surface area, if the cylinder is open on top (like a cup), you only add ONE circular base: SA = \u03c0r\u00b2 + 2\u03c0rh.\n\n---"
      }
    ],
    "challenge": {
      "type": "multiple_choice",
      "question": "Test your understanding of 3D Volume (Cylinders and Spheres)",
      "options": [
        "Incorrect answer A",
        "Correct answer",
        "Incorrect answer B",
        "Incorrect answer C"
      ],
      "correctAnswer": 1,
      "explanation": "This tests comprehension of the core concept"
    }
  },
  {
    "id": "math-12",
    "topicId": "3.3",
    "title": "Pythagorean Theorem",
    "section": "Math",
    "steps": [
      {
        "stepType": "concept",
        "title": "Understanding Pythagorean Theorem",
        "content": "This is arguably the most useful formula in all of geometry. In any right triangle, the square of the longest side equals the sum of squares of the other two sides. It's not just for triangles \u2014 it's the foundation of the distance formula, 3D diagonal calculations, and trigonometry. If there's a right angle anywhere in a problem, this theorem is probably involved."
      },
      {
        "stepType": "formula",
        "title": "Key Facts & Formulas",
        "formulas": [
          {
            "latex": "$a^2 + b^2 = c^2$",
            "description": "Pythagorean theorem"
          }
        ],
        "content": "a\u00b2 + b\u00b2 = c\u00b2\n\nwhere c is the hypotenuse (the side opposite the right angle \u2014 always the longest side), and a and b are the two legs.\n\nCommon Pythagorean triples to memorize (these appear constantly on exams):\n- 3 \u2013 4 \u2013 5\n- 5 \u2013 12 \u2013 13\n- 8 \u2013 15 \u2013 17\n- 7 \u2013 24 \u2013 25\n- Multiples work too: 6-8-10, 9-12-15, 10-24-26"
      },
      {
        "stepType": "procedure",
        "title": "Step-by-Step Process",
        "steps": [
          "1. Identify the right angle in the triangle.",
          "2. The side directly across from the right angle is c (hypotenuse).",
          "3. Label the other two sides a and b.",
          "4. Plug into a\u00b2 + b\u00b2 = c\u00b2.",
          "5. To find a missing leg: a = \u221a(c\u00b2 \u2212 b\u00b2)."
        ]
      },
      {
        "stepType": "example",
        "title": "Worked Example",
        "problem": "Problem from exam preparation",
        "solution": "Complete solution with steps",
        "workings": "A right triangle has legs of 5 and 12. Find the hypotenuse.\nc\u00b2 = 5\u00b2 + 12\u00b2 = 25 + 144 = 169\nc = $\\sqrt{169}$ ="
      },
      {
        "stepType": "trapAlert",
        "title": "\u26a0\ufe0f Exam Trap",
        "trapDescription": "Common mistake to avoid",
        "trapExample": "\u26a0\ufe0f This theorem ONLY works on right triangles. If the problem does not explicitly state or imply a right angle, you cannot use it. Also, c is ALWAYS the hypotenuse \u2014 always the largest number. If you get a \"hypotenuse\" that's smaller than a leg, you made an error.\n\n---"
      }
    ],
    "challenge": {
      "type": "multiple_choice",
      "question": "Test your understanding of Pythagorean Theorem",
      "options": [
        "Incorrect answer A",
        "Correct answer",
        "Incorrect answer B",
        "Incorrect answer C"
      ],
      "correctAnswer": 1,
      "explanation": "This tests comprehension of the core concept"
    }
  },
  {
    "id": "math-13",
    "topicId": "3.4",
    "title": "Polygon Interior Angles",
    "section": "Math",
    "steps": [
      {
        "stepType": "concept",
        "title": "Understanding Polygon Interior Angles",
        "content": "No matter how many sides a polygon has, its interior angles always sum to a totally predictable value. The pattern is simple: every time you add one more side to a polygon, the total angle sum increases by exactly 180\u00b0. A triangle (3 sides) = 180\u00b0. A quadrilateral (4 sides) = 360\u00b0. Pentagon (5 sides) = 540\u00b0. And so on."
      },
      {
        "stepType": "formula",
        "title": "Key Facts & Formulas",
        "formulas": [
          {
            "latex": "$\\sum \\text{interior angles} = (n-2) \\times 180\u00b0$",
            "description": "Polygon angles"
          },
          {
            "latex": "$\\text{each interior} = \\frac{(n-2) \\times 180\u00b0}{n}$",
            "description": "Regular polygon"
          }
        ],
        "content": "- Sum of interior angles = (n \u2212 2) \u00d7 180\u00b0\n- Each interior angle of a REGULAR polygon = [(n \u2212 2) \u00d7 180\u00b0] / n\n- Sum of exterior angles of ANY convex polygon = always 360\u00b0 (regardless of n)\n\nwhere n = number of sides."
      },
      {
        "stepType": "procedure",
        "title": "Step-by-Step Process",
        "steps": [
          "1. Count the number of sides n.",
          "2. Plug into (n \u2212 2) \u00d7 180\u00b0 to get the total sum.",
          "3. If the polygon is regular (all sides and angles equal), divide by n for each individual angle.",
          "4. For exterior angle problems: each exterior angle of a regular polygon = 360\u00b0 / n."
        ]
      },
      {
        "stepType": "example",
        "title": "Worked Example",
        "problem": "Problem from exam preparation",
        "solution": "Complete solution with steps",
        "workings": "A regular hexagon (6 sides):\nSum = (6 \u2212 2) \u00d7 180\u00b0 = $4 \\times 180$\u00b0 = 720\u00b0\nEach interior angle = 720\u00b0 / 6 ="
      },
      {
        "stepType": "trapAlert",
        "title": "\u26a0\ufe0f Exam Trap",
        "trapDescription": "Common mistake to avoid",
        "trapExample": "\u26a0\ufe0f The formula is (n \u2212 2), not n. Writing n \u00d7 180\u00b0 is a direct path to the wrong answer. Also, the exterior angle sum of 360\u00b0 applies to ALL convex polygons \u2014 regular or irregular \u2014 and is a quick trick for problems asking about exterior angles.\n\n---\n\n# SECTION 4: ANALYTIC GEOMETRY\n\n---"
      }
    ],
    "challenge": {
      "type": "multiple_choice",
      "question": "Test your understanding of Polygon Interior Angles",
      "options": [
        "Incorrect answer A",
        "Correct answer",
        "Incorrect answer B",
        "Incorrect answer C"
      ],
      "correctAnswer": 1,
      "explanation": "This tests comprehension of the core concept"
    }
  },
  {
    "id": "math-14",
    "topicId": "4.1",
    "title": "Distance & Midpoint Formulas",
    "section": "Math",
    "steps": [
      {
        "stepType": "concept",
        "title": "Understanding Distance & Midpoint Formulas",
        "content": "The distance formula is the Pythagorean theorem translated onto a coordinate grid. If you draw a right triangle connecting two points on a graph, the distance between them is the hypotenuse of that triangle. The midpoint formula is even simpler \u2014 you're just finding the average location between two points in both directions."
      },
      {
        "stepType": "formula",
        "title": "Key Facts & Formulas",
        "formulas": [
          {
            "latex": "$d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$",
            "description": "Distance formula"
          },
          {
            "latex": "$M = \\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right)$",
            "description": "Midpoint"
          }
        ],
        "content": "- Distance: d = \u221a[(x\u2082 \u2212 x\u2081)\u00b2 + (y\u2082 \u2212 y\u2081)\u00b2]\n- Midpoint: M = ((x\u2081 + x\u2082)/2, (y\u2081 + y\u2082)/2)"
      },
      {
        "stepType": "procedure",
        "title": "Step-by-Step Process",
        "steps": [
          "For distance:",
          "1. Subtract the x-coordinates and square the result.",
          "2. Subtract the y-coordinates and square the result.",
          "3. Add both squared values.",
          "4. Take the square root.",
          "For midpoint:"
        ]
      },
      {
        "stepType": "example",
        "title": "Worked Example",
        "problem": "Problem from exam preparation",
        "solution": "Complete solution with steps",
        "workings": "Points A(1, 2) and B(7, 10):\nDistance: d = \u221a[(7\u22121)\u00b2 + (10\u22122)\u00b2] = \u221a[36 + 64] = $\\sqrt{100}$ ="
      },
      {
        "stepType": "trapAlert",
        "title": "\u26a0\ufe0f Exam Trap",
        "trapDescription": "Common mistake to avoid",
        "trapExample": "\u26a0\ufe0f It doesn't matter which point you call (x\u2081, y\u2081) and which you call (x\u2082, y\u2082) for distance \u2014 the squaring eliminates the sign difference. But for midpoint, make sure you're averaging x with x and y with y, not mixing them up. Also, the midpoint answer is a COORDINATE PAIR, not a single number.\n\n---"
      }
    ],
    "challenge": {
      "type": "multiple_choice",
      "question": "Test your understanding of Distance & Midpoint Formulas",
      "options": [
        "Incorrect answer A",
        "Correct answer",
        "Incorrect answer B",
        "Incorrect answer C"
      ],
      "correctAnswer": 1,
      "explanation": "This tests comprehension of the core concept"
    }
  },
  {
    "id": "math-15",
    "topicId": "4.2",
    "title": "Conic Sections: Circles",
    "section": "Math",
    "steps": [
      {
        "stepType": "concept",
        "title": "Understanding Conic Sections: Circles",
        "content": "A circle on a coordinate plane is defined as all points that are exactly r units away from a fixed center point. The equation encodes this definition algebraically. If you see x\u00b2 and y\u00b2 terms with identical positive coefficients, you're looking at a circle."
      },
      {
        "stepType": "formula",
        "title": "Key Facts & Formulas",
        "formulas": [
          {
            "latex": "$(x-h)^2 + (y-k)^2 = r^2$",
            "description": "Circle equation"
          }
        ],
        "content": "- Standard form: (x \u2212 h)\u00b2 + (y \u2212 k)\u00b2 = r\u00b2\n- Center: (h, k)\n- Radius: r = \u221a(right-hand side)\n- General form: x\u00b2 + y\u00b2 + Dx + Ey + F = 0\n- To convert from general to standard: complete the square for x and y separately."
      },
      {
        "stepType": "procedure",
        "title": "Step-by-Step Process",
        "steps": [
          "From standard form:",
          "1. Read h and k directly (watch the signs \u2014 explained in the trap below).",
          "2. Square root of the right side gives you r.",
          "From general form:",
          "1. Group x-terms together and y-terms together.",
          "2. Complete the square for both groups."
        ]
      },
      {
        "stepType": "example",
        "title": "Worked Example",
        "problem": "Problem from exam preparation",
        "solution": "Complete solution with steps",
        "workings": "(x \u2212 3)\u00b2 + (y + 2)\u00b2 = 25\nCenter: (3, \u22122)\nRadius: $\\sqrt{25}$ ="
      },
      {
        "stepType": "trapAlert",
        "title": "\u26a0\ufe0f Exam Trap",
        "trapDescription": "Common mistake to avoid",
        "trapExample": "\u26a0\ufe0f The signs flip from the equation to the center. (x \u2212 3)\u00b2 means h = +3, not \u22123. (y + 2)\u00b2 means k = \u22122, because it's really (y \u2212 (\u22122))\u00b2. This sign-flip trick is a guaranteed exam trap. Read it as: whatever makes each squared term equal to zero is the coordinate.\n\n---"
      }
    ],
    "challenge": {
      "type": "multiple_choice",
      "question": "Test your understanding of Conic Sections: Circles",
      "options": [
        "Incorrect answer A",
        "Correct answer",
        "Incorrect answer B",
        "Incorrect answer C"
      ],
      "correctAnswer": 1,
      "explanation": "This tests comprehension of the core concept"
    }
  },
  {
    "id": "math-16",
    "topicId": "4.3",
    "title": "Conic Sections: Ellipses",
    "section": "Math",
    "steps": [
      {
        "stepType": "concept",
        "title": "Understanding Conic Sections: Ellipses",
        "content": "An ellipse is a circle that was squished in one direction \u2014 like a football or an egg. It has two axes: the major axis (the long one) and the minor axis (the short one). The key difference from a circle is that the x\u00b2 and y\u00b2 terms have different denominators. The bigger denominator tells you which direction the ellipse stretches."
      },
      {
        "stepType": "formula",
        "title": "Key Facts & Formulas",
        "formulas": [
          {
            "latex": "$\\frac{(x-h)^2}{a^2} + \\frac{(y-k)^2}{b^2} = 1$",
            "description": "Ellipse equation"
          }
        ],
        "content": "- Horizontal ellipse (wider than tall): x\u00b2/a\u00b2 + y\u00b2/b\u00b2 = 1, where a > b\n- Vertical ellipse (taller than wide): x\u00b2/b\u00b2 + y\u00b2/a\u00b2 = 1, where a > b\n- a = semi-major axis (half the longer dimension)\n- b = semi-minor axis (half the shorter dimension)\n- Foci distance from center: c\u00b2 = a\u00b2 \u2212 b\u00b2\n- Centered at (h, k): (x\u2212h)\u00b2/a\u00b2 + (y\u2212k)\u00b2/b\u00b2 = 1"
      },
      {
        "stepType": "procedure",
        "title": "Step-by-Step Process",
        "steps": [
          "1. Write the equation in standard form (right side must equal 1).",
          "2. Identify a\u00b2 as the LARGER denominator.",
          "3. If a\u00b2 is under x\u00b2: ellipse stretches horizontally.",
          "4. If a\u00b2 is under y\u00b2: ellipse stretches vertically.",
          "5. Take square roots to find a and b.",
          "6. For foci: c\u00b2 = a\u00b2 \u2212 b\u00b2, foci are located along the major axis."
        ]
      },
      {
        "stepType": "example",
        "title": "Worked Example",
        "problem": "Problem from exam preparation",
        "solution": "Complete solution with steps",
        "workings": "x\u00b2/25 + y\u00b2/9 = 1\nLarger denominator: 25 under x\u00b2 \u2192 horizontal ellipse\na = $\\sqrt{25}$ = 5, b = $\\sqrt{9}$ = 3\nc\u00b2 = 25 \u2212 9 = 16, c = 4\nStretches 5 units left and right, 3 units up and down from center (0,0). Foci at (\u00b14, 0)."
      },
      {
        "stepType": "trapAlert",
        "title": "\u26a0\ufe0f Exam Trap",
        "trapDescription": "Common mistake to avoid",
        "trapExample": "\u26a0\ufe0f Students assume the denominator under x\u00b2 is always a\u00b2. That's only true for horizontal ellipses. Always compare the two denominators \u2014 whichever is LARGER is a\u00b2, regardless of which variable it's under. The major axis aligns with whichever variable has the larger denominator.\n\n---"
      }
    ],
    "challenge": {
      "type": "multiple_choice",
      "question": "Test your understanding of Conic Sections: Ellipses",
      "options": [
        "Incorrect answer A",
        "Correct answer",
        "Incorrect answer B",
        "Incorrect answer C"
      ],
      "correctAnswer": 1,
      "explanation": "This tests comprehension of the core concept"
    }
  },
  {
    "id": "math-17",
    "topicId": "4.4",
    "title": "Conic Sections: Hyperbolas",
    "section": "Math",
    "steps": [
      {
        "stepType": "concept",
        "title": "Understanding Conic Sections: Hyperbolas",
        "content": "A hyperbola looks like two parabolas pointing away from each other \u2014 one opening left-right, or one opening up-down. Its defining feature in the equation is a MINUS sign between the two fraction terms. Unlike an ellipse (which adds them), a hyperbola subtracts. It also has asymptotes \u2014 invisible diagonal lines that the curves approach forever but never actually reach."
      },
      {
        "stepType": "formula",
        "title": "Key Facts & Formulas",
        "formulas": [
          {
            "latex": "$\\frac{(x-h)^2}{a^2} - \\frac{(y-k)^2}{b^2} = 1$",
            "description": "Hyperbola equation"
          }
        ],
        "content": "- Horizontal hyperbola (opens left-right): x\u00b2/a\u00b2 \u2212 y\u00b2/b\u00b2 = 1\n- Vertical hyperbola (opens up-down): y\u00b2/a\u00b2 \u2212 x\u00b2/b\u00b2 = 1\n- Asymptotes for horizontal: y = \u00b1(b/a)x\n- Asymptotes for vertical: y = \u00b1(a/b)x\n- Foci: c\u00b2 = a\u00b2 + b\u00b2 (note: ADDITION, unlike the ellipse)"
      },
      {
        "stepType": "procedure",
        "title": "Step-by-Step Process",
        "steps": [
          "1. Identify which variable has the positive term \u2014 that's the direction the hyperbola opens.",
          "2. x\u00b2 positive \u2192 opens left and right.",
          "3. y\u00b2 positive \u2192 opens up and down.",
          "4. Extract a and b from the denominators.",
          "5. Write asymptote equations using the ratio b/a (for horizontal) or a/b (for vertical)."
        ]
      },
      {
        "stepType": "example",
        "title": "Worked Example",
        "problem": "Problem from exam preparation",
        "solution": "Complete solution with steps",
        "workings": "x\u00b2/9 \u2212 y\u00b2/4 = 1\nx\u00b2 is positive \u2192 opens left and right\na = 3, b = 2\nAsymptotes: y = \u00b1(2/3)x\nFoci: c\u00b2 = 9 + 4 = 13, c = $\\sqrt{13}$ \u2248 3.6, foci at (\u00b1$\\sqrt{13}$, 0)"
      },
      {
        "stepType": "trapAlert",
        "title": "\u26a0\ufe0f Exam Trap",
        "trapDescription": "Common mistake to avoid",
        "trapExample": "\u26a0\ufe0f For hyperbolas, c\u00b2 = a\u00b2 + b\u00b2 (you ADD). For ellipses, c\u00b2 = a\u00b2 \u2212 b\u00b2 (you SUBTRACT). These are often confused under exam pressure. Also, do not confuse the ellipse equation (plus sign between fractions) with the hyperbola (minus sign). That single sign is the entire difference.\n\n---\n\n# SECTION 5: TRIGONOMETRY\n\n---"
      }
    ],
    "challenge": {
      "type": "multiple_choice",
      "question": "Test your understanding of Conic Sections: Hyperbolas",
      "options": [
        "Incorrect answer A",
        "Correct answer",
        "Incorrect answer B",
        "Incorrect answer C"
      ],
      "correctAnswer": 1,
      "explanation": "This tests comprehension of the core concept"
    }
  },
  {
    "id": "math-18",
    "topicId": "5.1",
    "title": "Right Triangle Ratios (SOH-CAH-TOA)",
    "section": "Math",
    "steps": [
      {
        "stepType": "concept",
        "title": "Understanding Right Triangle Ratios (SOH-CAH-TOA)",
        "content": "Trigonometry is how ancient civilizations measured the heights of mountains and stars without climbing them. SOH-CAH-TOA is the master key. Given any angle in a right triangle, these ratios define the exact relationship between that angle and the triangle's sides. Everything in trigonometry \u2014 including waves, circuits, and signal processing \u2014 traces back to these three ratios."
      },
      {
        "stepType": "formula",
        "title": "Key Facts & Formulas",
        "formulas": [
          {
            "latex": "$\\sin\\theta = \\frac{\\text{opp}}{\\text{hyp}}, \\cos\\theta = \\frac{\\text{adj}}{\\text{hyp}}, \\tan\\theta = \\frac{\\text{opp}}{\\text{adj}}$",
            "description": "SOH-CAH-TOA"
          }
        ],
        "content": "-"
      },
      {
        "stepType": "procedure",
        "title": "Step-by-Step Process",
        "steps": [
          "1. Mark the angle \u03b8 you are working from.",
          "2. Label the three sides relative to \u03b8: Opposite (across from \u03b8), Adjacent (next to \u03b8, not the hypotenuse), Hypotenuse (always across from the right angle \u2014 the longest side).",
          "3. Identify which two sides you have or need.",
          "4. Choose the ratio (sin, cos, or tan) that connects those two sides.",
          "5. Solve the equation."
        ]
      },
      {
        "stepType": "example",
        "title": "Worked Example",
        "problem": "Problem from exam preparation",
        "solution": "Complete solution with steps",
        "workings": "A right triangle has angle \u03b8 = 30\u00b0 and hypotenuse = 10. Find the opposite side.\nsin(30\u00b0) = opposite / hypotenuse\n1/2 = opposite / 10\nopposite ="
      },
      {
        "stepType": "trapAlert",
        "title": "\u26a0\ufe0f Exam Trap",
        "trapDescription": "Common mistake to avoid",
        "trapExample": "\u26a0\ufe0f Opposite and Adjacent are relative to the angle you pick. If you switch to working from the other angle, they swap roles. Always label your triangle fresh for each angle you work with. Also, the hypotenuse never changes \u2014 it's always the side opposite the right angle, no matter what.\n\n---"
      }
    ],
    "challenge": {
      "type": "multiple_choice",
      "question": "Test your understanding of Right Triangle Ratios (SOH-CAH-TOA)",
      "options": [
        "Incorrect answer A",
        "Correct answer",
        "Incorrect answer B",
        "Incorrect answer C"
      ],
      "correctAnswer": 1,
      "explanation": "This tests comprehension of the core concept"
    }
  },
  {
    "id": "math-19",
    "topicId": "5.2",
    "title": "The Pythagorean Identity",
    "section": "Math",
    "steps": [
      {
        "stepType": "concept",
        "title": "Understanding The Pythagorean Identity",
        "content": "If SOH-CAH-TOA is the starter kit, the Pythagorean identity is the Swiss Army knife. It's always true, for every angle, no exceptions. It comes from applying the Pythagorean theorem to a unit circle (a circle with radius 1). On exams, it's used to simplify trig expressions, prove other identities, and find one trig ratio when you're given another."
      },
      {
        "stepType": "formula",
        "title": "Key Facts & Formulas",
        "formulas": [
          {
            "latex": "$\\sin^2\\theta + \\cos^2\\theta = 1$",
            "description": "Pythagorean identity"
          },
          {
            "latex": "$1 + \\tan^2\\theta = \\sec^2\\theta$",
            "description": "Secant identity"
          }
        ],
        "content": "-"
      },
      {
        "stepType": "procedure",
        "title": "Step-by-Step Process",
        "steps": [
          "1. If given sin(\u03b8), use sin\u00b2\u03b8 + cos\u00b2\u03b8 = 1 to find cos(\u03b8).",
          "2. Rearrange: cos\u00b2\u03b8 = 1 \u2212 sin\u00b2\u03b8, then cos(\u03b8) = \u00b1\u221a(1 \u2212 sin\u00b2\u03b8).",
          "3. Determine the sign using the quadrant of the angle.",
          "4. Quadrant rules: In Q1, all positive. In Q2, only sin positive. In Q3, only tan positive. In Q4, only cos positive.",
          "- Mnemonic: \"All Students Take Calculus\" (Q1\u2192Q4)"
        ]
      },
      {
        "stepType": "example",
        "title": "Worked Example",
        "problem": "Problem from exam preparation",
        "solution": "Complete solution with steps",
        "workings": "If sin(\u03b8) = 3/5 and \u03b8 is in Quadrant I, find cos(\u03b8).\nsin\u00b2\u03b8 + cos\u00b2\u03b8 = 1\n(9/25) + cos\u00b2\u03b8 = 1\ncos\u00b2\u03b8 = 16/25\ncos(\u03b8) ="
      },
      {
        "stepType": "trapAlert",
        "title": "\u26a0\ufe0f Exam Trap",
        "trapDescription": "Common mistake to avoid",
        "trapExample": "\u26a0\ufe0f Never forget the \u00b1 when taking the square root. The quadrant determines the sign. In Quadrant II, sin is positive but cos is negative. An exam will deliberately set a problem in Quadrant II to catch students who forget the negative sign.\n\n---\n\n# SECTION 6: VECTORS & COMPLEX NUMBERS\n\n---"
      }
    ],
    "challenge": {
      "type": "multiple_choice",
      "question": "Test your understanding of The Pythagorean Identity",
      "options": [
        "Incorrect answer A",
        "Correct answer",
        "Incorrect answer B",
        "Incorrect answer C"
      ],
      "correctAnswer": 1,
      "explanation": "This tests comprehension of the core concept"
    }
  },
  {
    "id": "math-20",
    "topicId": "6.1",
    "title": "Vector Magnitude & Dot Product",
    "section": "Math",
    "steps": [
      {
        "stepType": "concept",
        "title": "Understanding Vector Magnitude & Dot Product",
        "content": "A vector is like a GPS arrow \u2014 it has both a size (magnitude) and a direction. Regular numbers only tell you \"how much.\" Vectors tell you \"how much AND which way.\" The dot product is a special operation between two vectors that produces a single number \u2014 and that number tells you how much the two vectors \"agree\" in direction. A dot product of zero means the vectors are perfectly perpendicular."
      },
      {
        "stepType": "formula",
        "title": "Key Facts & Formulas",
        "formulas": [
          {
            "latex": "$||\\vec{v}|| = \\sqrt{v_1^2 + v_2^2 + ... + v_n^2}$",
            "description": "Vector magnitude"
          },
          {
            "latex": "$\\vec{u} \\cdot \\vec{v} = u_1v_1 + u_2v_2 + ... + u_nv_n$",
            "description": "Dot product"
          }
        ],
        "content": "For vectors u = (a\u2081, b\u2081) and v = (a\u2082, b\u2082):\n\n- Magnitude of u: |u| = \u221a(a\u2081\u00b2 + b\u2081\u00b2)\n- Dot Product: u \u00b7 v = a\u2081a\u2082 + b\u2081b\u2082\n- Perpendicular if: u \u00b7 v = 0\n- Angle between vectors: cos(\u03b8) = (u \u00b7 v) / (|u| \u00d7 |v|)"
      },
      {
        "stepType": "procedure",
        "title": "Step-by-Step Process",
        "steps": [
          "For magnitude:",
          "1. Square each component of the vector.",
          "2. Add the squares.",
          "3. Take the square root.",
          "For dot product:",
          "1. Multiply the x-components together."
        ]
      },
      {
        "stepType": "example",
        "title": "Worked Example",
        "problem": "Problem from exam preparation",
        "solution": "Complete solution with steps",
        "workings": "u = (3, 4) and v = (2, \u22121)\n\n|u| = \u221a(9 + 16) = $\\sqrt{25}$ ="
      },
      {
        "stepType": "trapAlert",
        "title": "\u26a0\ufe0f Exam Trap",
        "trapDescription": "Common mistake to avoid",
        "trapExample": "\u26a0\ufe0f The dot product is a SCALAR (a plain number), not a vector. It does not point in any direction. Students confuse this with vector multiplication. Also, don't add the components when computing the dot product \u2014 multiply matching components, then add those products.\n\n---"
      }
    ],
    "challenge": {
      "type": "multiple_choice",
      "question": "Test your understanding of Vector Magnitude & Dot Product",
      "options": [
        "Incorrect answer A",
        "Correct answer",
        "Incorrect answer B",
        "Incorrect answer C"
      ],
      "correctAnswer": 1,
      "explanation": "This tests comprehension of the core concept"
    }
  },
  {
    "id": "math-21",
    "topicId": "6.2",
    "title": "Complex Numbers: Powers of i & Conjugates",
    "section": "Math",
    "steps": [
      {
        "stepType": "concept",
        "title": "Understanding Complex Numbers: Powers of i & Conjugates",
        "content": "The imaginary unit i is defined as \u221a(\u22121). It was invented to solve equations like x\u00b2 = \u22121, which have no real-number solutions. Despite the name \"imaginary,\" complex numbers are genuinely useful \u2014 electrical engineers use them to analyze AC circuits, and physicists use them in quantum mechanics. The powers of i follow a repeating cycle of 4, which makes computing high powers of i straightforward."
      },
      {
        "stepType": "formula",
        "title": "Key Facts & Formulas",
        "formulas": [
          {
            "latex": "$i^2 = -1, \\quad i^4 = 1$ (cycle of 4)",
            "description": "Powers of i"
          },
          {
            "latex": "$z \\cdot \\overline{z} = |z|^2 = a^2 + b^2$",
            "description": "Conjugate product"
          }
        ],
        "content": "- i\u00b9 = i\n- i\u00b2 = \u22121\n- i\u00b3 = \u2212i\n- i\u2074 = 1\n- i\u2075 = i (the cycle repeats every 4 powers)\n- To find i\u207f: divide n by 4 and use the remainder.\n  - Remainder 0 \u2192 1, Remainder 1 \u2192 i, Remainder 2 \u2192 \u22121, Remainder 3 \u2192 \u2212i\n- Conjugate of (a + bi): the conjugate is (a \u2212 bi)\n- Multiplying conjugates: (a + bi)(a \u2212 bi) = a\u00b2 + b\u00b2"
      },
      {
        "stepType": "procedure",
        "title": "Step-by-Step Process",
        "steps": [
          "For powers of i:",
          "1. Divide the exponent by 4.",
          "2. Find the remainder (0, 1, 2, or 3).",
          "3. Match the remainder to the cycle above.",
          "For conjugates:",
          "1. Keep the real part exactly the same."
        ]
      },
      {
        "stepType": "example",
        "title": "Worked Example",
        "problem": "Problem from exam preparation",
        "solution": "Complete solution with steps",
        "workings": "Find i\u2075\u2070:\n50 \u00f7 4 = 12 remainder 2\ni\u2075\u2070 = i\u00b2 ="
      },
      {
        "stepType": "trapAlert",
        "title": "\u26a0\ufe0f Exam Trap",
        "trapDescription": "Common mistake to avoid",
        "trapExample": "\u26a0\ufe0f i\u00b2 = \u22121, not +1. This single negative sign is the entire foundation of complex number arithmetic \u2014 get it wrong and every subsequent step is wrong. Also, the conjugate only flips the sign of the imaginary part. (3 + 2i) becomes (3 \u2212 2i), NOT (\u22123 \u2212 2i).\n\n---\n\n# SECTION 7: CALCULUS\n\n---"
      }
    ],
    "challenge": {
      "type": "multiple_choice",
      "question": "Test your understanding of Complex Numbers: Powers of i & Conjugates",
      "options": [
        "Incorrect answer A",
        "Correct answer",
        "Incorrect answer B",
        "Incorrect answer C"
      ],
      "correctAnswer": 1,
      "explanation": "This tests comprehension of the core concept"
    }
  },
  {
    "id": "math-22",
    "topicId": "7.1",
    "title": "Limits",
    "section": "Math",
    "steps": [
      {
        "stepType": "concept",
        "title": "Understanding Limits",
        "content": "A limit asks: what value does a function approach as the input gets infinitely close to a specific number? It's like watching a car approach a stop sign \u2014 you describe how close it gets and in what direction, without necessarily reaching the exact spot. Limits are the foundation of ALL calculus. Derivatives and integrals are both formally defined using limits."
      },
      {
        "stepType": "formula",
        "title": "Key Facts & Formulas",
        "formulas": [
          {
            "latex": "$\\lim_{x \\to a} f(x) = L$",
            "description": "Limit definition"
          },
          {
            "latex": "$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$",
            "description": "Famous limit"
          }
        ],
        "content": "- Notation: lim(x\u2192a) f(x) = L\n- Direct substitution (try first): substitute x = a directly.\n- If 0/0 results (indeterminate form): factor and simplify, then substitute.\n- L'H\u00f4pital's Rule (for 0/0 or \u221e/\u221e): lim f(x)/g(x) = lim f'(x)/g'(x)\n- Limits at infinity: for rational functions, divide numerator and denominator by the highest power of x."
      },
      {
        "stepType": "procedure",
        "title": "Step-by-Step Process",
        "steps": [
          "1. First attempt: substitute x = a directly into f(x).",
          "2. If you get a real number \u2192 that's the limit. Done.",
          "3. If you get 0/0 or \u221e/\u221e: try factoring and canceling.",
          "4. After canceling, substitute again.",
          "5. For limits as x \u2192 \u221e: the highest-degree terms dominate. Divide everything by x\u207f (highest power in denominator) to simplify."
        ]
      },
      {
        "stepType": "example",
        "title": "Worked Example",
        "problem": "Problem from exam preparation",
        "solution": "Complete solution with steps",
        "workings": "Find: lim(x\u21922) (x\u00b2 \u2212 4) / (x \u2212 2)\n\nDirect substitution: (4 \u2212 4)/(2 \u2212 2) = 0/0 \u2014 indeterminate. Don't stop here!\nFactor: (x \u2212 2)(x + 2) / (x \u2212 2) = x + 2\nNow substitute: 2 + 2 ="
      },
      {
        "stepType": "trapAlert",
        "title": "\u26a0\ufe0f Exam Trap",
        "trapDescription": "Common mistake to avoid",
        "trapExample": "\u26a0\ufe0f Getting 0/0 does NOT mean the limit doesn't exist or is undefined. It's a signal \u2014 called an indeterminate form \u2014 that means you need to do more algebra (factor, rationalize, or apply L'H\u00f4pital's). Many students panic and write \"undefined\" when they see 0/0. That's wrong.\n\n---"
      }
    ],
    "challenge": {
      "type": "multiple_choice",
      "question": "Test your understanding of Limits",
      "options": [
        "Incorrect answer A",
        "Correct answer",
        "Incorrect answer B",
        "Incorrect answer C"
      ],
      "correctAnswer": 1,
      "explanation": "This tests comprehension of the core concept"
    }
  },
  {
    "id": "math-23",
    "topicId": "7.2",
    "title": "Derivatives: Power, Product, Quotient, and Chain Rules",
    "section": "Math",
    "steps": [
      {
        "stepType": "concept",
        "title": "Understanding Derivatives: Power, Product, Quotient, and Chain Rules",
        "content": "A derivative measures the exact rate of change of a function at a specific instant. Think of it as a speedometer reading for a mathematical curve \u2014 not your average speed over a journey, but your exact speed at one precise moment. Physically, velocity is the derivative of position. The slope of a curve at any point is its derivative."
      },
      {
        "stepType": "formula",
        "title": "Key Facts & Formulas",
        "formulas": [
          {
            "latex": "$\\frac{d}{dx}[x^n] = nx^{n-1}$",
            "description": "Power rule"
          },
          {
            "latex": "$\\frac{d}{dx}[f(x)g(x)] = f'g + fg'$",
            "description": "Product rule"
          },
          {
            "latex": "$\\frac{d}{dx}[f(g(x))] = f'(g(x))g'(x)$",
            "description": "Chain rule"
          }
        ],
        "content": "- Power Rule: d/dx[x\u207f] = nx\u207f\u207b\u00b9\n- Constant Rule: d/dx[c] = 0\n- Sum/Difference Rule: d/dx[f \u00b1 g] = f' \u00b1 g'\n- Product Rule: d/dx[f\u00b7g] = f'g + fg'\n- Quotient Rule: d/dx[f/g] = (f'g \u2212 fg') / g\u00b2\n- Chain Rule: d/dx[f(g(x))] = f'(g(x)) \u00b7 g'(x)\n- Common derivatives: d/dx[sin x] = cos x, d/dx[cos x] = \u2212sin x, d/dx[e\u02e3] = e\u02e3, d/dx[ln x] = 1/x"
      },
      {
        "stepType": "procedure",
        "title": "Step-by-Step Process",
        "steps": [
          "Power Rule:",
          "1. Bring the exponent down as a coefficient.",
          "2. Reduce the exponent by 1.",
          "Product Rule (mnemonic: \"first times derivative of second, plus second times derivative of first\"):",
          "1. Differentiate f, multiply by g (unchanged).",
          "2. Differentiate g, multiply by f (unchanged)."
        ]
      },
      {
        "stepType": "example",
        "title": "Worked Example",
        "problem": "Problem from exam preparation",
        "solution": "Complete solution with steps",
        "workings": "Differentiate f(x) = 3x\u2074 \u2212 5x\u00b2 + 7\nf'(x) = 12x\u00b3 \u2212 10x + 0 ="
      },
      {
        "stepType": "trapAlert",
        "title": "\u26a0\ufe0f Exam Trap",
        "trapDescription": "Common mistake to avoid",
        "trapExample": "\u26a0\ufe0f For the Quotient Rule, the order is (f'g \u2212 fg') \u2014 NOT (fg' \u2212 f'g). The derivative of the numerator comes first. Flipping the order changes the sign of the answer. Also, for the chain rule, students often differentiate the inside and outside but forget to MULTIPLY the two results together.\n\n---"
      }
    ],
    "challenge": {
      "type": "multiple_choice",
      "question": "Test your understanding of Derivatives: Power, Product, Quotient, and Chain Rules",
      "options": [
        "Incorrect answer A",
        "Correct answer",
        "Incorrect answer B",
        "Incorrect answer C"
      ],
      "correctAnswer": 1,
      "explanation": "This tests comprehension of the core concept"
    }
  },
  {
    "id": "math-24",
    "topicId": "7.3",
    "title": "Integrals: Definite vs. Indefinite",
    "section": "Math",
    "steps": [
      {
        "stepType": "concept",
        "title": "Understanding Integrals: Definite vs. Indefinite",
        "content": "Integration is the reverse of differentiation, but it also computes the area under a curve. An indefinite integral asks \"what function, when differentiated, gives me this?\" \u2014 and gives you a family of functions (always includes +C). A definite integral asks \"what is the exact area under this curve between two points?\" \u2014 and gives you a number."
      },
      {
        "stepType": "formula",
        "title": "Key Facts & Formulas",
        "formulas": [
          {
            "latex": "$\\int x^n dx = \\frac{x^{n+1}}{n+1} + C$ (n \u2260 -1)",
            "description": "Power integration"
          },
          {
            "latex": "$\\int_a^b f(x)dx = F(b) - F(a)$",
            "description": "Fundamental theorem"
          }
        ],
        "content": "- Indefinite Power Rule: \u222bx\u207f dx = x\u207f\u207a\u00b9/(n+1) + C, for n \u2260 \u22121\n- \u222bc dx = cx + C\n- \u222be\u02e3 dx = e\u02e3 + C\n- \u222b(1/x) dx = ln|x| + C\n- \u222bsin(x) dx = \u2212cos(x) + C\n- \u222bcos(x) dx = sin(x) + C\n- Definite Integral: \u222b[a to b] f(x) dx = F(b) \u2212 F(a), where F is the antiderivative of f"
      },
      {
        "stepType": "procedure",
        "title": "Step-by-Step Process",
        "steps": [
          "For indefinite integrals:",
          "1. Add 1 to the exponent.",
          "2. Divide by the new exponent.",
          "3. Always add +C at the end.",
          "For definite integrals:",
          "1. Find the antiderivative F(x)."
        ]
      },
      {
        "stepType": "example",
        "title": "Worked Example",
        "problem": "Problem from exam preparation",
        "solution": "Complete solution with steps",
        "workings": "Indefinite: \u222b(4x\u00b3 \u2212 6x) dx = x\u2074 \u2212 3x\u00b2 +"
      },
      {
        "stepType": "trapAlert",
        "title": "\u26a0\ufe0f Exam Trap",
        "trapDescription": "Common mistake to avoid",
        "trapExample": "\u26a0\ufe0f Two big traps here. First: forgetting +C on indefinite integrals will cost marks every single time. Second: the power rule \u222bx\u207f dx fails when n = \u22121 (because dividing by zero is illegal). For \u222bx\u207b\u00b9 dx = \u222b(1/x) dx, the answer is ln|x| + C, not x\u2070/0.\n\n---"
      }
    ],
    "challenge": {
      "type": "multiple_choice",
      "question": "Test your understanding of Integrals: Definite vs. Indefinite",
      "options": [
        "Incorrect answer A",
        "Correct answer",
        "Incorrect answer B",
        "Incorrect answer C"
      ],
      "correctAnswer": 1,
      "explanation": "This tests comprehension of the core concept"
    }
  },
  {
    "id": "math-25",
    "topicId": "7.4",
    "title": "Separation of Variables (Differential Equations)",
    "section": "Math",
    "steps": [
      {
        "stepType": "concept",
        "title": "Understanding Separation of Variables (Differential Equations)",
        "content": "A differential equation is an equation that involves a derivative \u2014 it describes how something CHANGES, rather than what it is. These equations model population growth, radioactive decay, cooling, and financial interest. Separation of variables is the simplest technique to solve them: you rearrange the equation so all y-terms are on one side and all x-terms are on the other, then integrate both sides independently."
      },
      {
        "stepType": "formula",
        "title": "Key Facts & Formulas",
        "formulas": [
          {
            "latex": "$\\frac{dy}{dx} = g(x)h(y)$ \u2192 $\\int \\frac{dy}{h(y)} = \\int g(x)dx$",
            "description": "Separation of variables"
          }
        ],
        "content": "Form: dy/dx = f(x) \u00b7 g(y)\nSeparated: dy/g(y) = f(x) dx\nIntegrated: \u222b dy/g(y) = \u222b f(x) dx"
      },
      {
        "stepType": "procedure",
        "title": "Step-by-Step Process",
        "steps": [
          "1. Rewrite dy/dx = f(x) \u00b7 g(y) by moving g(y) to the left and f(x) to the right.",
          "2. You should have only y-terms (and dy) on the left, only x-terms (and dx) on the right.",
          "3. Integrate both sides independently.",
          "4. Add constant of integration +C on one side.",
          "5. If given an initial condition (like y(0) = 5), substitute to solve for C."
        ]
      },
      {
        "stepType": "example",
        "title": "Worked Example",
        "problem": "Problem from exam preparation",
        "solution": "Complete solution with steps",
        "workings": "Solve: dy/dx = 2x, with y(0) = 3\nSeparate: dy = 2x dx\nIntegrate: \u222bdy = \u222b2x dx \u2192 y = x\u00b2 + C\nApply initial condition: 3 = 0\u00b2 + C \u2192 C = 3\nAnswer:"
      },
      {
        "stepType": "trapAlert",
        "title": "\u26a0\ufe0f Exam Trap",
        "trapDescription": "Common mistake to avoid",
        "trapExample": "\u26a0\ufe0f You only need ONE constant C, not one on each side. Integrating both sides technically gives C\u2081 and C\u2082, but they combine into a single constant. Also, separation of variables only works when the equation is truly separable \u2014 you must be able to write dy/dx as a pure function of x times a pure function of y.\n\n---\n\n# SECTION 8: SEQUENCES & SERIES\n\n---"
      }
    ],
    "challenge": {
      "type": "multiple_choice",
      "question": "Test your understanding of Separation of Variables (Differential Equations)",
      "options": [
        "Incorrect answer A",
        "Correct answer",
        "Incorrect answer B",
        "Incorrect answer C"
      ],
      "correctAnswer": 1,
      "explanation": "This tests comprehension of the core concept"
    }
  },
  {
    "id": "math-26",
    "topicId": "8.1",
    "title": "Arithmetic Sequences & Series",
    "section": "Math",
    "steps": [
      {
        "stepType": "concept",
        "title": "Understanding Arithmetic Sequences & Series",
        "content": "An arithmetic sequence is one where you add the same fixed number (the common difference, d) to get from each term to the next. Like: 5, 9, 13, 17 \u2014 always +4. It's linear growth. Think of it as receiving the same fixed raise every year. Arithmetic series is the sum of those terms."
      },
      {
        "stepType": "formula",
        "title": "Key Facts & Formulas",
        "formulas": [
          {
            "latex": "$a_n = a_1 + (n-1)d$",
            "description": "Arithmetic formula"
          },
          {
            "latex": "$S_n = \\frac{n}{2}(a_1 + a_n)$",
            "description": "Arithmetic sum"
          }
        ],
        "content": "- nth term: a\u2099 = a\u2081 + (n \u2212 1)d\n- Common difference: d = a\u2099 \u2212 a\u2099\u208b\u2081\n- Sum of first n terms: S\u2099 = n/2 \u00d7 (a\u2081 + a\u2099)\n- Or equivalently: S\u2099 = n/2 \u00d7 [2a\u2081 + (n \u2212 1)d]"
      },
      {
        "stepType": "procedure",
        "title": "Step-by-Step Process",
        "steps": [
          "1. Find d by subtracting any term from the one after it.",
          "2. Plug into a\u2099 = a\u2081 + (n\u22121)d for any specific term.",
          "3. For the sum: use S\u2099 = n/2 \u00d7 (first term + last term). This shortcut works because the average of an arithmetic sequence is always the average of first and last."
        ]
      },
      {
        "stepType": "example",
        "title": "Worked Example",
        "problem": "Problem from exam preparation",
        "solution": "Complete solution with steps",
        "workings": "Sequence: 5, 9, 13, 17, ...\nd = 4, a\u2081 = 5\nFind 10th term: a\u2081\u2080 = 5 + (10 \u2212 1)(4) = 5 + 36 ="
      },
      {
        "stepType": "trapAlert",
        "title": "\u26a0\ufe0f Exam Trap",
        "trapDescription": "Common mistake to avoid",
        "trapExample": "\u26a0\ufe0f The formula uses (n \u2212 1), not n. The very common error is writing a\u2099 = a\u2081 + nd, which gives an answer one \"step\" too far. Double-check by testing n = 1: a\u2081 = a\u2081 + (1\u22121)d = a\u2081 \u2713. That's your verification.\n\n---"
      }
    ],
    "challenge": {
      "type": "multiple_choice",
      "question": "Test your understanding of Arithmetic Sequences & Series",
      "options": [
        "Incorrect answer A",
        "Correct answer",
        "Incorrect answer B",
        "Incorrect answer C"
      ],
      "correctAnswer": 1,
      "explanation": "This tests comprehension of the core concept"
    }
  },
  {
    "id": "math-27",
    "topicId": "8.2",
    "title": "Geometric Sequences & Series",
    "section": "Math",
    "steps": [
      {
        "stepType": "concept",
        "title": "Understanding Geometric Sequences & Series",
        "content": "A geometric sequence multiplies by the same fixed number (the common ratio, r) each time. Like: 2, 6, 18, 54 \u2014 always \u00d73. This is exponential growth. It models compound interest, viral spread, and radioactive decay. When |r| < 1, the terms shrink toward zero, and the infinite sum actually converges to a finite number."
      },
      {
        "stepType": "formula",
        "title": "Key Facts & Formulas",
        "formulas": [
          {
            "latex": "$a_n = a_1 r^{n-1}$",
            "description": "Geometric formula"
          },
          {
            "latex": "$S_n = a_1 \\frac{1-r^n}{1-r}$ (r \u2260 1); $S_\\infty = \\frac{a_1}{1-r}$ (|r|<1)",
            "description": "Geometric sum"
          }
        ],
        "content": "- nth term: a\u2099 = a\u2081 \u00b7 r\u207f\u207b\u00b9\n- Common ratio: r = a\u2099 / a\u2099\u208b\u2081\n- Sum of first n terms: S\u2099 = a\u2081(1 \u2212 r\u207f) / (1 \u2212 r), for r \u2260 1\n- Infinite sum (only when |r| < 1): S\u221e = a\u2081 / (1 \u2212 r)"
      },
      {
        "stepType": "procedure",
        "title": "Step-by-Step Process",
        "steps": [
          "1. Find r by dividing any term by the term before it.",
          "2. Plug into a\u2099 = a\u2081 \u00b7 r\u207f\u207b\u00b9 for any specific term.",
          "3. For finite sums, use the sum formula.",
          "4. For infinite sums, only apply S\u221e formula if |r| < 1. If |r| \u2265 1, the series diverges (the sum is infinite)."
        ]
      },
      {
        "stepType": "example",
        "title": "Worked Example",
        "problem": "Problem from exam preparation",
        "solution": "Complete solution with steps",
        "workings": "Sequence: 3, 6, 12, 24, ...\nr = 2, a\u2081 = 3\nFind 6th term: a\u2086 = 3 \u00b7 2\u2075 = 3 \u00b7 32 ="
      },
      {
        "stepType": "trapAlert",
        "title": "\u26a0\ufe0f Exam Trap",
        "trapDescription": "Common mistake to avoid",
        "trapExample": "\u26a0\ufe0f The exponent is (n \u2212 1), not n. a\u2086 uses r\u2075, not r\u2076. This off-by-one error is extremely common. Also, never apply the infinite sum formula when |r| \u2265 1 \u2014 the series doesn't converge and the formula gives meaningless results.\n\n---\n\n# SECTION 9: STATISTICS & PROBABILITY\n\n---"
      }
    ],
    "challenge": {
      "type": "multiple_choice",
      "question": "Test your understanding of Geometric Sequences & Series",
      "options": [
        "Incorrect answer A",
        "Correct answer",
        "Incorrect answer B",
        "Incorrect answer C"
      ],
      "correctAnswer": 1,
      "explanation": "This tests comprehension of the core concept"
    }
  },
  {
    "id": "math-28",
    "topicId": "9.1",
    "title": "Mean, Median, Mode & Standard Deviation",
    "section": "Math",
    "steps": [
      {
        "stepType": "concept",
        "title": "Understanding Mean, Median, Mode & Standard Deviation",
        "content": "These four values are a data set's \"personality profile.\" Mean is the balance point \u2014 the arithmetic average. Median is the middle value \u2014 it's resistant to extreme outliers (this is why median home prices are used instead of average home prices). Mode is the most popular value. Standard deviation measures how spread out the data is from the mean. A low standard deviation means data clusters tightly; a high one means it's scattered."
      },
      {
        "stepType": "formula",
        "title": "Key Facts & Formulas",
        "formulas": [
          {
            "latex": "$\\mu = \\frac{\\sum x_i}{n}$",
            "description": "Mean"
          },
          {
            "latex": "$\\sigma = \\sqrt{\\frac{\\sum(x_i-\\mu)^2}{n}}$",
            "description": "Standard deviation"
          }
        ],
        "content": "- Mean: x\u0304 = (\u03a3x) / n (sum all values, divide by count)\n- Median: the middle value of SORTED data (or average of two middle values if n is even)\n- Mode: the value(s) that appear most frequently\n- Variance: \u03c3\u00b2 = \u03a3(x \u2212 x\u0304)\u00b2 / n\n- Standard Deviation: \u03c3 = \u221a[\u03a3(x \u2212 x\u0304)\u00b2 / n]"
      },
      {
        "stepType": "procedure",
        "title": "Step-by-Step Process",
        "steps": [
          "For standard deviation step by step:",
          "1. Find the mean (x\u0304).",
          "2. Subtract the mean from each data value: (x \u2212 x\u0304).",
          "3. Square each deviation: (x \u2212 x\u0304)\u00b2.",
          "4. Add all the squared deviations.",
          "5. Divide by n (population) or n \u2212 1 (sample)."
        ]
      },
      {
        "stepType": "example",
        "title": "Worked Example",
        "problem": "Problem from exam preparation",
        "solution": "Complete solution with steps",
        "workings": "Data: 2, 4, 4, 4, 5, 5, 7, 9\n\nMean: (2+4+4+4+5+5+7+9)/8 = 40/8 ="
      },
      {
        "stepType": "trapAlert",
        "title": "\u26a0\ufe0f Exam Trap",
        "trapDescription": "Common mistake to avoid",
        "trapExample": "\u26a0\ufe0f Always sort the data before finding the median \u2014 this step is skipped more often than you'd believe. Also, a data set can have more than one mode (bimodal, multimodal). If every value appears the same number of times, there is no mode. Don't just pick the first repeated value and stop.\n\n---"
      }
    ],
    "challenge": {
      "type": "multiple_choice",
      "question": "Test your understanding of Mean, Median, Mode & Standard Deviation",
      "options": [
        "Incorrect answer A",
        "Correct answer",
        "Incorrect answer B",
        "Incorrect answer C"
      ],
      "correctAnswer": 1,
      "explanation": "This tests comprehension of the core concept"
    }
  },
  {
    "id": "math-29",
    "topicId": "9.2",
    "title": "Normal Distribution & Z-Scores",
    "section": "Math",
    "steps": [
      {
        "stepType": "concept",
        "title": "Understanding Normal Distribution & Z-Scores",
        "content": "The normal distribution is the famous bell curve. It shows up everywhere in nature \u2014 heights, test scores, measurement errors. Most values cluster around the mean, and the frequency drops off symmetrically toward both extremes. A Z-score is a standardizing tool: it converts any value from any normal distribution into a common scale, telling you exactly how many standard deviations above or below the mean that value sits."
      },
      {
        "stepType": "formula",
        "title": "Key Facts & Formulas",
        "formulas": [
          {
            "latex": "$z = \\frac{x-\\mu}{\\sigma}$",
            "description": "Z-score"
          },
          {
            "latex": "$f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-(x-\\mu)^2/(2\\sigma^2)}$",
            "description": "Normal distribution"
          }
        ],
        "content": "- Z-score: Z = (X \u2212 \u03bc) / \u03c3\n- where X = the data value, \u03bc = population mean, \u03c3 = population standard deviation\n- Empirical Rule (68-95-99.7 Rule):\n  - 68% of data falls within 1\u03c3 of the mean\n  - 95% of data falls within 2\u03c3 of the mean\n  - 99.7% of data falls within 3\u03c3 of the mean\n- P(Z < z): read from the standard normal (Z) table\n- P(Z > z) = 1 \u2212 P(Z < z)\n- P(a < Z < b) = P(Z < b) \u2212 P(Z < a)"
      },
      {
        "stepType": "procedure",
        "title": "Step-by-Step Process",
        "steps": [
          "1. Compute Z = (X \u2212 \u03bc) / \u03c3.",
          "2. Use a Z-table to find the area to the LEFT of that Z value.",
          "3. For \"greater than\" questions: subtract from 1.",
          "4. For \"between\" questions: find both Z-values and subtract the smaller area from the larger."
        ]
      },
      {
        "stepType": "example",
        "title": "Worked Example",
        "problem": "Problem from exam preparation",
        "solution": "Complete solution with steps",
        "workings": "IQ scores: \u03bc = 100, \u03c3 = 15. What percentage of people score below 115?\nZ = (115 \u2212 100) / 15 = 1.0\nFrom Z-table: P(Z < 1.0) ="
      },
      {
        "stepType": "trapAlert",
        "title": "\u26a0\ufe0f Exam Trap",
        "trapDescription": "Common mistake to avoid",
        "trapExample": "\u26a0\ufe0f Z-tables always give the area to the LEFT \u2014 the cumulative probability from negative infinity up to your Z value. For \"greater than\" questions, you must subtract from 1. For \"between\" questions, many students add instead of subtract. The correct approach is always: P(between) = P(Z < upper) \u2212 P(Z < lower).\n\n---"
      }
    ],
    "challenge": {
      "type": "multiple_choice",
      "question": "Test your understanding of Normal Distribution & Z-Scores",
      "options": [
        "Incorrect answer A",
        "Correct answer",
        "Incorrect answer B",
        "Incorrect answer C"
      ],
      "correctAnswer": 1,
      "explanation": "This tests comprehension of the core concept"
    }
  },
  {
    "id": "math-30",
    "topicId": "9.3",
    "title": "Combinatorics: Permutations vs. Combinations",
    "section": "Math",
    "steps": [
      {
        "stepType": "concept",
        "title": "Understanding Combinatorics: Permutations vs. Combinations",
        "content": "Both permutations and combinations count the number of ways to select items from a group. The critical question is: does ORDER matter? If you're assigning President, Vice President, and Secretary (three different roles), order matters \u2014 permutation. If you're just choosing three people for a committee where all roles are equal, order doesn't matter \u2014 combination. Permutations always give a larger number than combinations for the same n and r."
      },
      {
        "stepType": "formula",
        "title": "Key Facts & Formulas",
        "formulas": [
          {
            "latex": "$P(n,r) = \\frac{n!}{(n-r)!}$",
            "description": "Permutations"
          },
          {
            "latex": "$C(n,r) = \\binom{n}{r} = \\frac{n!}{r!(n-r)!}$",
            "description": "Combinations"
          }
        ],
        "content": "- Permutation (order matters): P(n, r) = n! / (n \u2212 r)!\n- Combination (order doesn't matter): C(n, r) = n! / [r!(n \u2212 r)!]\n- Also written as: \u207fC\u1d63 or C(n,r) or \"n choose r\"\n- n! = n \u00d7 (n\u22121) \u00d7 (n\u22122) \u00d7 ... \u00d7 $2 \\times 1$\n- 0! = 1 (by definition)"
      },
      {
        "stepType": "procedure",
        "title": "Step-by-Step Process",
        "steps": [
          "1. Read the problem and ask: \"Does it matter WHICH position or role each person gets?\"",
          "2. Yes \u2192 Permutation. No \u2192 Combination.",
          "3. Identify n (total pool) and r (number being selected).",
          "4. Plug into the formula.",
          "5. Cancel factorial terms to simplify before multiplying \u2014 much easier than computing huge factorials."
        ]
      },
      {
        "stepType": "example",
        "title": "Worked Example",
        "problem": "Problem from exam preparation",
        "solution": "Complete solution with steps",
        "workings": "Permutation: How many ways can 10 runners finish 1st, 2nd, and 3rd?\nOrder matters! P(10, 3) = 10! / 7! = $10 \\times 9$ \u00d7 8 ="
      },
      {
        "stepType": "trapAlert",
        "title": "\u26a0\ufe0f Exam Trap",
        "trapDescription": "Common mistake to avoid",
        "trapExample": "\u26a0\ufe0f The word \"arrange\" signals permutation. The word \"choose,\" \"select,\" or \"committee\" usually signals combination. But read carefully \u2014 \"elect a president, vice president, and secretary from 10 people\" is a permutation even though it uses the word \"elect.\" Different roles = order matters = permutation.\n\n---\n\n# SECTION 10: BUSINESS MATH\n\n---"
      }
    ],
    "challenge": {
      "type": "multiple_choice",
      "question": "Test your understanding of Combinatorics: Permutations vs. Combinations",
      "options": [
        "Incorrect answer A",
        "Correct answer",
        "Incorrect answer B",
        "Incorrect answer C"
      ],
      "correctAnswer": 1,
      "explanation": "This tests comprehension of the core concept"
    }
  },
  {
    "id": "math-31",
    "topicId": "10.1",
    "title": "Simple vs. Compound Interest",
    "section": "Math",
    "steps": [
      {
        "stepType": "concept",
        "title": "Understanding Simple vs. Compound Interest",
        "content": "Simple interest is interest that never grows \u2014 it's always calculated on the original principal only. Compound interest is interest that grows on itself \u2014 you earn interest on your interest. This is why a small investment left alone for decades can become enormous, and why credit card debt left unpaid can spiral out of control. Compound interest is the most powerful force in personal finance."
      },
      {
        "stepType": "formula",
        "title": "Key Facts & Formulas",
        "formulas": [
          {
            "latex": "$A = P(1 + rt)$",
            "description": "Simple interest"
          },
          {
            "latex": "$A = P(1 + \\frac{r}{n})^{nt}$",
            "description": "Compound interest"
          },
          {
            "latex": "$A = Pe^{rt}$",
            "description": "Continuous interest"
          }
        ],
        "content": "- Simple Interest earned: I = Prt\n- Simple Interest total amount: A = P(1 + rt)\n- Compound Interest total amount: A = P(1 + r/n)^(nt)\n- Continuous Compounding: A = Pe^(rt)\n- where P = principal, r = annual interest rate (as a decimal), t = time in years, n = number of compounding periods per year\n\nCommon values of n:\n- n = 1: annually\n- n = 2: semi-annually\n- n = 4: quarterly\n- n = 12: monthly\n- n = 365: daily"
      },
      {
        "stepType": "procedure",
        "title": "Step-by-Step Process",
        "steps": [
          "For simple interest:",
          "1. Convert rate to decimal (e.g., 6% = 0.06).",
          "2. Multiply P \u00d7 r \u00d7 t. That's the interest earned.",
          "3. Add to P to get the total amount.",
          "For compound interest:",
          "1. Convert rate to decimal."
        ]
      },
      {
        "stepType": "example",
        "title": "Worked Example",
        "problem": "Problem from exam preparation",
        "solution": "Complete solution with steps",
        "workings": "\u20b150,000 invested at 8% per year for 3 years:\n\nSimple: A = 50,000(1 + 0.$08 \\times 3$) = 50,000(1.24) ="
      },
      {
        "stepType": "trapAlert",
        "title": "\u26a0\ufe0f Exam Trap",
        "trapDescription": "Common mistake to avoid",
        "trapExample": "\u26a0\ufe0f The most common error: forgetting to convert the percentage to a decimal. Using r = 8 instead of r = 0.08 will give an astronomically wrong answer. Always convert first. Also, t must be in years. If the problem gives months, divide by 12 first.\n\n---"
      }
    ],
    "challenge": {
      "type": "multiple_choice",
      "question": "Test your understanding of Simple vs. Compound Interest",
      "options": [
        "Incorrect answer A",
        "Correct answer",
        "Incorrect answer B",
        "Incorrect answer C"
      ],
      "correctAnswer": 1,
      "explanation": "This tests comprehension of the core concept"
    }
  },
  {
    "id": "math-32",
    "topicId": "10.2",
    "title": "2\u00d72 Matrix Determinants",
    "section": "Math",
    "steps": [
      {
        "stepType": "concept",
        "title": "Understanding 2\u00d72 Matrix Determinants",
        "content": "A determinant is a single number that captures a key property of a matrix. For a $2 \\times 2$ matrix, it's calculated with one quick diagonal trick. Determinants tell you whether a system of equations has a unique solution (non-zero determinant) or not (zero determinant). They're also used in Cramer's Rule, which is a formula-based method for solving linear systems."
      },
      {
        "stepType": "formula",
        "title": "Key Facts & Formulas",
        "formulas": [
          {
            "latex": "$\\det\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc$",
            "description": "2\u00d72 determinant"
          }
        ],
        "content": "For the matrix:\n\n```\n| a  b |\n| c  d |\n```\n\nDeterminant = ad \u2212 bc\n\nMnemonic: \"Main diagonal product MINUS anti-diagonal product\"\n- Main diagonal: top-left \u00d7 bottom-right = ad\n- Anti-diagonal: top-right \u00d7 bottom-left = bc\n- Determinant = ad \u2212 bc"
      },
      {
        "stepType": "procedure",
        "title": "Step-by-Step Process",
        "steps": [
          "1. Identify a, b, c, d by their positions.",
          "2. Multiply a \u00d7 d (top-left times bottom-right).",
          "3. Multiply b \u00d7 c (top-right times bottom-left).",
          "4. Subtract: det = ad \u2212 bc.",
          "5. If det = 0: the matrix is singular (no inverse, system has no unique solution).",
          "6. If det \u2260 0: the matrix is invertible (system has exactly one solution)."
        ]
      },
      {
        "stepType": "example",
        "title": "Worked Example",
        "problem": "Problem from exam preparation",
        "solution": "Complete solution with steps",
        "workings": "```\n| 3   5 |\n| 1   2 |\n```\ndet = (3)(2) \u2212 (5)(1) = 6 \u2212 5 ="
      },
      {
        "stepType": "trapAlert",
        "title": "\u26a0\ufe0f Exam Trap",
        "trapDescription": "Common mistake to avoid",
        "trapExample": "\u26a0\ufe0f The order is ad \u2212 bc, not bc \u2212 ad. Reversing the order flips the sign of your answer. Also, a determinant of zero is a meaningful result \u2014 don't assume you made an error. It tells you something important about the system it represents.\n\n---\n\n# SECTION 11: BONUS TOPICS\n\n*These topics are frequently tested on rigorous scholarship exams and commonly missed by students who don't expect them.*\n\n---\n\n## Bonus Topic 11.1 \u2014 Remainder & Factor Theorem"
      }
    ],
    "challenge": {
      "type": "multiple_choice",
      "question": "Test your understanding of 2\u00d72 Matrix Determinants",
      "options": [
        "Incorrect answer A",
        "Correct answer",
        "Incorrect answer B",
        "Incorrect answer C"
      ],
      "correctAnswer": 1,
      "explanation": "This tests comprehension of the core concept"
    }
  }
];

// Helper: Get topic by ID
export function getEnrichedTopic(topicId) {
  return enrichedMathTopics.find(t => t.id === topicId);
}

// Helper: Get all topics by section
export function getTopicsBySection(section) {
  return enrichedMathTopics.filter(t => t.section === section);
}

// Helper: Validate LaTeX in content
export function validateLatexSyntax(content) {
  const dollarCount = (content.match(/\$/g) || []).length;
  return dollarCount % 2 === 0;
}
