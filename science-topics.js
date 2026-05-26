/**
 * DOST JLSS Master Science Reviewer — All 27 Science Topics
 * Pathways: Chemistry (7) | Physics (7) | Geoscience (5) | Biology (6) | Astronomy (4)
 * JavaScript Array Ready for Application Integration
 */

const scienceTopics = [
  // ========== PATHWAY 1: CHEMISTRY & MATTER SYSTEMS (7 topics) ==========
  
  {
    id: "sci-1-1",
    module: "Pathway 1: Chemistry",
    title: "Atomic Architecture & Subatomic Balance",
    analogy: "An atom is like a miniature solar system: the nucleus is a heavily secured vault holding protons and neutrons, while electrons orbit in defined corridors. The proton count (Atomic Number) is the building&rsquo;s official address &mdash; it tells you which element you&rsquo;re dealing with.",
    mechanics: "<p><strong>Subatomic Particles:</strong> Protons (+1, nucleus) carry positive charge; neutrons (0, nucleus) are neutral; electrons (-1, electron cloud) carry negative charge.</p><p><strong>Key Formulas:</strong><br/>Z = Atomic Number = Protons<br/>A = Mass Number = Protons + Neutrons<br/>For neutral atoms: e&minus; = Protons = Z<br/>For ions: Cation (positive) = Z - charge; Anion (negative) = Z + charge</p><p><strong>Isotopes, Isobars, Isotones:</strong> Isotopes have same protons (same element), different neutrons. Isobars have same mass number, different elements. Isotones have same neutron count, different elements.</p>",
    examRule: "Always apply the ionic charge BEFORE calculating electrons. Treat charge sign as a direct instruction: negative = gain electrons (add), positive = lose electrons (subtract).",
    traps: "Students forget the ionic charge when calculating electron count. Example: S&sup2;&minus; (sulfur with 2&minus; charge) has 18 electrons, not 16.",
    challenge: {
      question: "An atom has a mass number of 40 and 21 neutrons. It forms a 2+ cation. How many electrons does it have?",
      options: ["A) 19", "B) 21", "C) 17", "D) 40"],
      correct: "C",
      explanation: "Z = 40 - 21 = 19. Neutral atom has 19 electrons. The 2+ cation lost 2 electrons: 19 - 2 = 17 electrons."
    }
  },

  {
    id: "sci-1-2",
    module: "Pathway 1: Chemistry",
    title: "Quantum Numbers & Electron Configurations",
    analogy: "Imagine a massive hotel where the Principal Quantum Number (n) is the floor, the Angular Momentum Quantum Number (l) is the wing, the Magnetic Quantum Number (m&lt;sub&gt;l&lt;/sub&gt;) is the room, and the Spin Quantum Number (m&lt;sub&gt;s&lt;/sub&gt;) is the bed. Each room has exactly two beds. No two guests can share the same bed in the same room on the same floor in the same wing.",
    mechanics: "<p><strong>Four Quantum Numbers:</strong> n (1,2,3,...), l (0 to n&minus;1), m&lt;sub&gt;l&lt;/sub&gt; (&minus;l to +l), m&lt;sub&gt;s&lt;/sub&gt; (+½ or &minus;½)</p><p><strong>Subshells:</strong> s (l=0, max 2e&minus;), p (l=1, max 6e&minus;), d (l=2, max 10e&minus;), f (l=3, max 14e&minus;)</p><p><strong>Filling Rules:</strong> Aufbau Principle (lowest energy first): 1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p...</p><p><strong>Pauli Exclusion:</strong> No two electrons have identical quantum numbers. <strong>Hund&rsquo;s Rule:</strong> Electrons occupy separate orbitals singly before pairing.</p>",
    examRule: "When l = n, it's INVALID. Max l = n - 1. Electrons always remove from highest principal quantum number first during ionization.",
    traps: "Students write Fe&sup;2+&sup; as [Ar]4s&sup;2&sup;3d&sup;6&sup; when correct is [Ar]3d&sup;6&sup;. Electrons leave the 4s orbital first, not the 3d.",
    challenge: {
      question: "Which quantum number set is INVALID?",
      options: ["A) n=2, l=1, m&lt;sub&gt;l&lt;/sub&gt;=0, m&lt;sub&gt;s&lt;/sub&gt;=+½", "B) n=3, l=3, m&lt;sub&gt;l&lt;/sub&gt;=-2, m&lt;sub&gt;s&lt;/sub&gt;=-½", "C) n=4, l=2, m&lt;sub&gt;l&lt;/sub&gt;=-1, m&lt;sub&gt;s&lt;/sub&gt;=+½", "D) n=1, l=0, m&lt;sub&gt;l&lt;/sub&gt;=0, m&lt;sub&gt;s&lt;/sub&gt;=-½"],
      correct: "B",
      explanation: "When n = 3, maximum l = n - 1 = 2. Therefore l = 3 is impossible. This violates the fundamental quantum number rules."
    }
  },

  {
    id: "sci-1-3",
    module: "Pathway 1: Chemistry",
    title: "Stoichiometric Balancing & Reaction Types",
    analogy: "Balancing a chemical equation is like balancing a recipe: if one batch needs 1 egg for 2 pancakes, then 3 batches need 3 eggs for 6 pancakes. You never change the ingredients (subscripts), only the number of batches (coefficients). No atoms are created or destroyed, only rearranged.",
    mechanics: "<p><strong>Golden Rule:</strong> Change COEFFICIENTS only, never SUBSCRIPTS. Changing subscripts changes the compound entirely.</p><p><strong>Five Reaction Types:</strong> Synthesis (A+B→AB), Decomposition (AB→A+B), Single Displacement (A+BC→AC+B), Double Displacement (AB+CD→AD+CB), Combustion (hydrocarbon + O&sub;2&sub; → CO&sub;2&sub; + H&sub;2&sub;O)</p><p><strong>Limiting Reactant Procedure:</strong> Convert masses to moles, divide each by stoichiometric coefficient, smallest ratio = limiting reactant.</p><p><strong>Percent Yield:</strong> (Actual Yield / Theoretical Yield) × 100%</p>",
    examRule: "Always solve stoichiometry in the chain: grams → moles (÷M) → mole ratio (×coefficient) → moles → grams (×M). Never skip the mole ratio step.",
    traps: "Students use the EXCESS reactant&rsquo;s moles to calculate theoretical yield instead of the LIMITING reactant&rsquo;s moles. This produces inflated yield values.",
    challenge: {
      question: "In the reaction 2H&sub;2&sub; + O&sub;2&sub; → 2H&sub;2&sub;O, if 4 g of H&sub;2&sub; and 32 g of O&sub;2&sub; are reacted, what is the limiting reactant?",
      options: ["A) H&sub;2&sub;, because it has less mass", "B) O&sub;2&sub;, because oxygen is heavier", "C) H&sub;2&sub;, because the mole ratio shows it runs out first", "D) O&sub;2&sub;, because it has the smaller mole-to-coefficient ratio"],
      correct: "D",
      explanation: "n(H&sub;2&sub;) = 4/2 = 2 mol; ratio = 2/2 = 1.0. n(O&sub;2&sub;) = 32/32 = 1 mol; ratio = 1/1 = 1.0. Both are stoichiometric (consumed simultaneously), but O&sub;2&sub; is limiting if either is present in less proportion."
    }
  },

  {
    id: "sci-1-4",
    module: "Pathway 1: Chemistry",
    title: "Intermolecular Forces (IMFs) vs. Intramolecular Bonds",
    analogy: "Intramolecular bonds (covalent, ionic) are the steel beams holding a building together. Intermolecular forces are handshakes between neighboring buildings &mdash; they determine how buildings cluster and affect boiling point, viscosity, and surface tension.",
    mechanics: "<p><strong>Intramolecular Bonds (Strong):</strong> Ionic (metal + nonmetal, electron transfer), Covalent (nonmetal + nonmetal, electron sharing), Metallic (metal + metal)</p><p><strong>Intermolecular Forces (Weak → Strong):</strong> London Dispersion Forces (all molecules, temporary induced dipoles), Dipole-Dipole (polar molecules, permanent partial charges), Hydrogen Bonding (N-H, O-H, F-H bonds ONLY), Ion-Dipole (ionic compound in polar solvent)</p><p><strong>Physical Property Effects:</strong> Stronger IMF → Higher boiling/melting point, higher viscosity, higher surface tension, LOWER vapor pressure.</p><p><strong>Water Anomaly:</strong> H&sub;2&sub;O has 3 hydrogen bonds per molecule (2 O-H bonds, 2 lone pairs on O), making its boiling point unusually high.</p>",
    examRule: "H-bonding requires hydrogen bonded DIRECTLY to N, O, or F ONLY. Not just any hydrogen. Also check molecular geometry before assigning IMF type.",
    traps: "CO&sub;2&sub; has polar C=O bonds but is NONPOLAR overall (linear geometry cancels dipoles), so it only has London Dispersion Forces. Students often call it dipole-dipole.",
    challenge: {
      question: "Which molecule has the HIGHEST boiling point?",
      options: ["A) CH&sub;4&sub;", "B) HCl", "C) NH&sub;3&sub;", "D) N&sub;2&sub;"],
      correct: "C",
      explanation: "NH&sub;3&sub; exhibits hydrogen bonding (N-H bond with lone pair on adjacent N). This is the strongest IMF among these options. CH&sub;4&sub; and N&sub;2&sub; have only London Dispersion Forces; HCl has dipole-dipole interactions."
    }
  },

  {
    id: "sci-1-5",
    module: "Pathway 1: Chemistry",
    title: "Solutions & Concentration Dynamics",
    analogy: "Molarity is like measuring sugar concentration in a glass of water &mdash; if the glass expands (temperature rises), the same sugar is now in a bigger volume, so molarity appears lower. Molality measures sugar per kilogram of water &mdash; even if water expands, the MASS stays constant, so molality remains unchanged.",
    mechanics: "<p><strong>Concentration Units:</strong> Molarity (mol/L, changes with T), Molality (mol/kg solvent, independent of T), Mass % = (mass solute / mass solution) × 100%, ppm = (mass solute / mass solution) × 10&sup;6&sup;</p><p><strong>Dilution Formula:</strong> M&sub;1&sub;V&sub;1&sub; = M&sub;2&sub;V&sub;2&sub; (moles of solute before = moles after)</p><p><strong>Temperature Effect:</strong> Molarity DEPENDS on T (volume changes). Molality INDEPENDENT of T (mass constant).</p>",
    examRule: "For colligative property problems (boiling point elevation, freezing point depression), ALWAYS use MOLALITY, never molarity. ΔT&lt;sub&gt;b&lt;/sub&gt; = K&lt;sub&gt;b&lt;/sub&gt;·m (lowercase m = molality).",
    traps: "Students default to molarity for all concentration problems. Colligative properties REQUIRE molality because they depend on particle count, and molality is temperature-independent.",
    challenge: {
      question: "A solution is prepared by dissolving 2 moles of NaCl in 500 g of water. The temperature is raised from 25°C to 50°C. Which statement is TRUE?",
      options: ["A) Both molarity and molality increase", "B) Molarity increases; molality stays the same", "C) Molarity decreases; molality stays the same", "D) Both molarity and molality decrease"],
      correct: "C",
      explanation: "Water expands at higher temperature, so volume increases. Molarity (moles/volume) decreases. Molality (moles/mass of solvent) remains constant because water's mass doesn't change with temperature."
    }
  },

  {
    id: "sci-1-6",
    module: "Pathway 1: Chemistry",
    title: "Gas Behavior & Ideal Gas Matrix",
    analogy: "Imagine molecules bouncing inside a sealed balloon like rubber balls. Squeeze the balloon smaller (decrease volume) → balls hit walls more often → higher pressure. Heat the balloon (increase temperature) → balls speed up → walls expand. The Ideal Gas Law ties all variables together, assuming molecules have no volume and feel no attraction.",
    mechanics: "<p><strong>Kinetic Molecular Theory:</strong> Gas molecules in constant random motion, negligible volume, no intermolecular forces, perfectly elastic collisions, average kinetic energy ∝ absolute temperature (Kelvin).</p><p><strong>Gas Laws:</strong> Boyle's (P&sub;1&sub;V&sub;1&sub; = P&sub;2&sub;V&sub;2&sub;), Charles's (V&sub;1&sub;/T&sub;1&sub; = V&sub;2&sub;/T&sub;2&sub;), Gay-Lussac's (P&sub;1&sub;/T&sub;1&sub; = P&sub;2&sub;/T&sub;2&sub;), Combined (P&sub;1&sub;V&sub;1&sub;/T&sub;1&sub; = P&sub;2&sub;V&sub;2&sub;/T&sub;2&sub;)</p><p><strong>Ideal Gas Law:</strong> PV = nRT, where R = 0.08206 L·atm/(mol·K) when P in atm, or 8.314 J/(mol·K) when P in Pa</p><p><strong>CRITICAL:</strong> Temperature MUST be in Kelvin: K = °C + 273.15</p>",
    examRule: "ALWAYS convert temperature to Kelvin FIRST. This is the #1 source of errors in gas law problems. Make it a reflex: before touching any gas law formula, write T(K) = T(°C) + 273.",
    traps: "Using Celsius instead of Kelvin produces wildly incorrect answers that often match distractor choices. For example, 27°C is 300 K, not 27 K.",
    challenge: {
      question: "A gas occupies 4.0 L at 300 K and 1.0 atm. What volume does it occupy at 600 K and 2.0 atm?",
      options: ["A) 8.0 L", "B) 4.0 L", "C) 2.0 L", "D) 16.0 L"],
      correct: "B",
      explanation: "Using Combined Gas Law: V&sub;2&sub; = (P&sub;1&sub;V&sub;1&sub;T&sub;2&sub;)/(T&sub;1&sub;P&sub;2&sub;) = (1.0 × 4.0 × 600)/(300 × 2.0) = 2400/600 = 4.0 L. The doubling of temperature and pressure cancel out."
    }
  },

  {
    id: "sci-1-7",
    module: "Pathway 1: Chemistry",
    title: "Hydrocarbon Saturation & Functional Groups",
    analogy: "Hydrocarbons are like a train of carbon cars. An alkane is fully loaded &mdash; every carbon seat filled with hydrogen passengers, all single bonds (saturated). An alkene has a double bond &mdash; two cars sharing a wall, missing two hydrogen seats (unsaturated). An alkyne has a triple bond &mdash; three shared walls, missing four hydrogens (highly unsaturated).",
    mechanics: "<p><strong>Hydrocarbon Series:</strong> Alkane (C&lt;sub&gt;n&lt;/sub&gt;H&lt;sub&gt;2n+2&lt;/sub&gt;, saturated), Alkene (C&lt;sub&gt;n&lt;/sub&gt;H&lt;sub&gt;2n&lt;/sub&gt;, one C=C), Alkyne (C&lt;sub&gt;n&lt;/sub&gt;H&lt;sub&gt;2n-2&lt;/sub&gt;, one C≡C)</p><p><strong>IUPAC Naming Prefixes:</strong> 1-Meth, 2-Eth, 3-Prop, 4-But, 5-Pent, 6-Hex, 7-Hept, 8-Oct</p><p><strong>Functional Groups:</strong> Hydroxyl (-OH = alcohol), Carboxyl (-COOH = carboxylic acid), Ester (-COO- linkage), Aldehyde (-CHO), Ketone (C=O middle), Amine (-NH&sub;2&sub;)</p><p><strong>Esterification:</strong> R-OH + R'-COOH → R'-COO-R + H&sub;2&sub;O (responsible for fruit/flower fragrances)</p>",
    examRule: "Cycloalkanes have formula C&lt;sub&gt;n&lt;/sub&gt;H&lt;sub&gt;2n&lt;/sub&gt; (same as alkenes) but are NOT unsaturated. Check for ring structure in the description.",
    traps: "Alkenes and cycloalkanes share formula C&lt;sub&gt;n&lt;/sub&gt;H&lt;sub&gt;2n&lt;/sub&gt;. Students assume any compound with that formula must be an alkene. Cycloalkanes are saturated (all single bonds in a ring).",
    challenge: {
      question: "What is the molecular formula of Butyne (4-carbon alkyne)?",
      options: ["A) C&sub;4&sub;H&sub;8&sub;", "B) C&sub;4&sub;H&lt;sub&gt;10&lt;/sub&gt;", "C) C&sub;4&sub;H&sub;6&sub;", "D) C&sub;4&sub;H&sub;4&sub;"],
      correct: "C",
      explanation: "Alkynes follow C&lt;sub&gt;n&lt;/sub&gt;H&lt;sub&gt;2n-2&lt;/sub&gt;. For n=4: H = 2(4) - 2 = 6. So C&sub;4&sub;H&sub;6&sub;. Option A is Butene (alkene); Option B is Butane (alkane)."
    }
  },

  // ========== PATHWAY 2: PHYSICS & MECHANICAL SYSTEMS (7 topics) ==========

  {
    id: "sci-2-1",
    module: "Pathway 2: Physics",
    title: "Kinematics Matrix",
    analogy: "Distance is the total road your odometer travels (always positive). Displacement is a straight arrow from start to finish (can be zero if you return home). Speed is how fast the odometer reads. Velocity is speed plus direction.",
    mechanics: "<p><strong>Scalars vs. Vectors:</strong> Distance (scalar), Displacement (vector), Speed (scalar), Velocity (vector), Acceleration (vector)</p><p><strong>Four Kinematic Equations (Constant Acceleration):</strong></p><p>v = v&lt;sub&gt;0&lt;/sub&gt; + at (missing: d)<br/>d = v&lt;sub&gt;0&lt;/sub&gt;t + ½at&lt;sup&gt;2&lt;/sup&gt; (missing: v)<br/>v&lt;sup&gt;2&lt;/sup&gt; = v&lt;sub&gt;0&lt;/sub&gt;&lt;sup&gt;2&lt;/sup&gt; + 2ad (missing: t)<br/>d = (v&lt;sub&gt;0&lt;/sub&gt; + v)/2 · t (missing: a)</p><p><strong>Free Fall:</strong> a = g = -9.8 m/s&lt;sup&gt;2&lt;/sup&gt; (downward). At maximum height: v = 0. Time up = Time down (symmetric).</p>",
    examRule: "Define positive direction FIRST. Use g = -9.8 m/s² consistently. When object returns to starting height, displacement = 0.",
    traps: "Using only the upward phase of a projectile's motion and forgetting to double the time. Or using positive g instead of negative g, causing sign errors.",
    challenge: {
      question: "A ball is dropped from rest at a height of 45 m. How long does it take to reach the ground? (g = 10 m/s²)",
      options: ["A) 3.0 s", "B) 4.5 s", "C) 9.0 s", "D) 6.7 s"],
      correct: "A",
      explanation: "Using d = v&lt;sub&gt;0&lt;/sub&gt;t + ½at², with v&lt;sub&gt;0&lt;/sub&gt; = 0: 45 = 0 + ½(10)t² → 45 = 5t² → t² = 9 → t = 3.0 s"
    }
  },

  {
    id: "sci-2-2",
    module: "Pathway 2: Physics",
    title: "Dynamics & Newton's Laws",
    analogy: "1st Law: A hockey puck on ice slides forever (inertia). 2nd Law: The harder you kick AND the lighter it is, the faster it accelerates. 3rd Law: When you kick the puck, it pushes back on your foot with equal force.",
    mechanics: "<p><strong>Newton's First Law:</strong> If F&lt;sub&gt;net&lt;/sub&gt; = 0, then a = 0 (constant velocity or rest)</p><p><strong>Newton's Second Law:</strong> F&lt;sub&gt;net&lt;/sub&gt; = ma (1 N = 1 kg·m/s²)</p><p><strong>Newton's Third Law:</strong> For every action force, equal and opposite reaction on DIFFERENT objects</p><p><strong>Free-Body Diagram (FBD):</strong> Identify ALL forces: Weight (mg, downward), Normal Force (N, perpendicular), Applied Force (F&lt;sub&gt;app&lt;/sub&gt;), Friction (f), Tension (T)</p><p><strong>Friction:</strong> f&lt;sub&gt;s&lt;/sub&gt; ≤ μ&lt;sub&gt;s&lt;/sub&gt;N (static), f&lt;sub&gt;k&lt;/sub&gt; = μ&lt;sub&gt;k&lt;/sub&gt;N (kinetic). Note: μ&lt;sub&gt;s&lt;/sub&gt; > μ&lt;sub&gt;k&lt;/sub&gt; always.</p>",
    examRule: "Newton's 3rd Law pairs must act on DIFFERENT objects. Weight and Normal Force are NOT a 3rd Law pair (they act on the same object).",
    traps: "Students misidentify 3rd Law pairs by selecting forces that act on the same object. True 3rd Law pairs have (1) equal magnitude, (2) opposite direction, (3) same force type, (4) on DIFFERENT bodies.",
    challenge: {
      question: "A 5 kg box is pushed across a floor with a 30 N applied force. If μ&lt;sub&gt;k&lt;/sub&gt; = 0.4 and g = 10 m/s², what is the acceleration?",
      options: ["A) 2 m/s²", "B) 6 m/s²", "C) 4 m/s²", "D) 1 m/s²"],
      correct: "A",
      explanation: "N = mg = 5 × 10 = 50 N. f&lt;sub&gt;k&lt;/sub&gt; = μ&lt;sub&gt;k&lt;/sub&gt;N = 0.4 × 50 = 20 N. F&lt;sub&gt;net&lt;/sub&gt; = 30 - 20 = 10 N. a = 10/5 = 2 m/s²"
    }
  },

  {
    id: "sci-2-3",
    module: "Pathway 2: Physics",
    title: "Thermodynamics & Entropy Directive",
    analogy: "The 1st Law is energy budgeting: heat into the system either stays inside (increases internal energy) or gets spent as work. The 2nd Law is the universe's irreversible arrow: a messy room never spontaneously organizes itself; heat never flows cold-to-hot without work.",
    mechanics: "<p><strong>First Law of Thermodynamics:</strong> ΔU = Q - W</p><p><strong>Sign Conventions:</strong> Q > 0 = heat added TO system; Q < 0 = heat released FROM system. W > 0 = work done BY system; W < 0 = work done ON system.</p><p><strong>Second Law:</strong> ΔS ≥ 0 for isolated systems. Entropy measures disorder/randomness. Spontaneous processes increase total entropy of the universe.</p><p><strong>Carnot Efficiency:</strong> Efficiency = 1 - (T&lt;sub&gt;cold&lt;/sub&gt;/T&lt;sub&gt;hot&lt;/sub&gt;). Temperatures must be in Kelvin. No engine is 100% efficient.</p>",
    examRule: "Physics convention: ΔU = Q - W (check your textbook). The system LOSES energy when it does work (negative W) and GAINS energy when heat enters (positive Q).",
    traps: "Sign convention inconsistency between physics and chemistry textbooks. Always verify which convention your course uses. Some use ΔU = Q + W.",
    challenge: {
      question: "A gas absorbs 500 J of heat and does 200 J of work on its surroundings. What is the change in internal energy?",
      options: ["A) 700 J", "B) 300 J", "C) -300 J", "D) -700 J"],
      correct: "B",
      explanation: "ΔU = Q - W = 500 - 200 = 300 J. Heat absorbed (Q positive), work done by system (W positive). Net change is +300 J."
    }
  },

  {
    id: "sci-2-4",
    module: "Pathway 2: Physics",
    title: "Simple Machines & Mechanical Advantage",
    analogy: "Simple machines are trade-off tools: you can move a heavy load with a small force over a long distance, or move it with a large force over a short distance. You never get more work out than you put in, but you can redistribute the effort. A pulley system is like multiple teammates sharing the load &mdash; each rope segment shares the weight.",
    mechanics: "<p><strong>Mechanical Advantage:</strong> IMA = (distance moved by effort) / (distance moved by load) = (resistance force) / (effort force)</p><p><strong>Three Lever Classes:</strong></p><p><strong>Class 1 (Fulcrum in middle):</strong> Seesaw, scissors, crowbar. IMA depends on arm lengths.</p><p><strong>Class 2 (Resistance in middle):</strong> Wheelbarrow, nutcracker. IMA > 1 always.</p><p><strong>Class 3 (Effort in middle):</strong> Tweezers, baseball bat. IMA < 1 always (speed/range gained, not force).</p><p><strong>Pulley Systems:</strong> IMA = number of rope segments supporting the movable pulley block.</p>",
    examRule: "Count the rope SEGMENTS supporting the movable pulley, not the total number of pulleys. Each rope segment equally shares the load.",
    traps: "Counting total pulleys instead of rope segments. A 4-pulley system could have IMA of 2, 3, 4, or higher depending on configuration.",
    challenge: {
      question: "A block-and-tackle system uses 6 rope segments supporting the movable pulley to lift a 600 N weight. What effort force is required (ideal conditions)?",
      options: ["A) 600 N", "B) 100 N", "C) 300 N", "D) 200 N"],
      correct: "B",
      explanation: "IMA = 6. Effort force = (Resistance force) / IMA = 600 / 6 = 100 N"
    }
  },

  {
    id: "sci-2-5",
    module: "Pathway 2: Physics",
    title: "Electric Circuits",
    analogy: "Think of a circuit as water pipes. Voltage is water pressure. Current is flow rate. Resistance is pipe narrowness. Series circuits are one pipe through multiple valves; if one valve breaks, everything stops. Parallel circuits are separate pipes; if one blocks, water still flows elsewhere.",
    mechanics: "<p><strong>Ohm's Law:</strong> V = IR, I = V/R, R = V/I</p><p><strong>Power:</strong> P = VI = I²R = V²/R (measured in Watts)</p><p><strong>Series Circuits:</strong> Same current through all; voltage splits (V&lt;sub&gt;total&lt;/sub&gt; = V₁ + V₂ + ...); R&lt;sub&gt;eq&lt;/sub&gt; = R₁ + R₂ + ...</p><p><strong>Parallel Circuits:</strong> Same voltage across all; current splits; 1/R&lt;sub&gt;eq&lt;/sub&gt; = 1/R₁ + 1/R₂ + ... (two equal resistors: R&lt;sub&gt;eq&lt;/sub&gt; = R/2)</p><p><strong>Key Difference:</strong> In series, MORE resistors → HIGHER total resistance. In parallel, MORE resistors → LOWER total resistance.</p>",
    examRule: "Household wiring is PARALLEL (each appliance gets full voltage independently). Christmas lights (old-style) are SERIES (one bulb burns out, all go dark).",
    traps: "Students intuitively feel that adding more resistors increases total resistance. True for series, FALSE for parallel. In parallel, each additional resistor provides a new current pathway, DECREASING total resistance.",
    challenge: {
      question: "Three resistors of 6 Ω, 3 Ω, and 2 Ω are connected in parallel to a 12 V battery. What is the total current?",
      options: ["A) 1.09 A", "B) 12 A", "C) 6 A", "D) 2 A"],
      correct: "B",
      explanation: "1/R&lt;sub&gt;eq&lt;/sub&gt; = 1/6 + 1/3 + 1/2 = 1/6 + 2/6 + 3/6 = 6/6 = 1 → R&lt;sub&gt;eq&lt;/sub&gt; = 1 Ω. I = V/R&lt;sub&gt;eq&lt;/sub&gt; = 12/1 = 12 A"
    }
  },

  {
    id: "sci-2-6",
    module: "Pathway 2: Physics",
    title: "Wave Optics",
    analogy: "Reflection is a tennis ball bouncing off a wall at the same angle. Refraction is a car wheel hitting mud &mdash; the side that hits first slows down, causing the car to turn (light bends toward denser medium). Lenses and mirrors redirect light so it reconverges (or appears to diverge) at an image point.",
    mechanics: "<p><strong>Law of Reflection:</strong> θ&lt;sub&gt;i&lt;/sub&gt; = θ&lt;sub&gt;r&lt;/sub&gt; (measured from normal, not surface)</p><p><strong>Snell's Law:</strong> n₁ sin θ₁ = n₂ sin θ₂. Light bends TOWARD normal when entering denser medium; AWAY from normal when entering less dense.</p><p><strong>Mirror/Lens Equation:</strong> 1/f = 1/d&lt;sub&gt;o&lt;/sub&gt; + 1/d&lt;sub&gt;i&lt;/sub&gt;</p><p><strong>Magnification:</strong> M = -d&lt;sub&gt;i&lt;/sub&gt;/d&lt;sub&gt;o&lt;/sub&gt; = h&lt;sub&gt;i&lt;/sub&gt;/h&lt;sub&gt;o&lt;/sub&gt; (M > 0 = upright; M < 0 = inverted; |M| > 1 = magnified)</p><p><strong>Concave mirror/Convex lens = Converging. Convex mirror/Concave lens = Diverging.</strong></p>",
    examRule: "Concave mirrors and convex lenses both CONVERGE light. Remember: \"CONcave = CONcentrates\" for mirrors. For lenses, it flips.",
    traps: "Mixing up which mirror/lens is converging vs. diverging. Also, incorrectly interpreting image properties (real vs. virtual, upright vs. inverted).",
    challenge: {
      question: "An object is placed 30 cm in front of a concave mirror with f = 10 cm. Where is the image formed?",
      options: ["A) 15 cm behind the mirror (virtual)", "B) 15 cm in front of the mirror (real)", "C) 10 cm in front of the mirror (real)", "D) 30 cm behind the mirror (virtual)"],
      correct: "B",
      explanation: "1/f = 1/d&lt;sub&gt;o&lt;/sub&gt; + 1/d&lt;sub&gt;i&lt;/sub&gt; → 1/10 = 1/30 + 1/d&lt;sub&gt;i&lt;/sub&gt; → 1/d&lt;sub&gt;i&lt;/sub&gt; = 1/10 - 1/30 = 1/15 → d&lt;sub&gt;i&lt;/sub&gt; = 15 cm. Positive d&lt;sub&gt;i&lt;/sub&gt; means real image IN FRONT."
    }
  },

  {
    id: "sci-2-7",
    module: "Pathway 2: Physics",
    title: "Electromagnetism",
    analogy: "A moving electric charge creates a magnetic field. This is the foundation of every electric motor. A changing magnetic field induces an electric current (Faraday's Law) &mdash; like squeezing toothpaste forces it out. Lenz's Law says the induced current always fights the change that created it &mdash; nature resists disruption.",
    mechanics: "<p><strong>Right-Hand Rule 1 (Straight Wire):</strong> Thumb = current direction; fingers curl in direction of magnetic field</p><p><strong>Right-Hand Rule 2 (Solenoid):</strong> Fingers curl in current direction; thumb points to North pole (field direction)</p><p><strong>Right-Hand Rule 3 (Moving Charge):</strong> Point fingers in velocity direction; curl toward B-field; thumb = force direction. F = qvB sin θ</p><p><strong>Faraday's Law:</strong> ε = -N(ΔΦ&lt;sub&gt;B&lt;/sub&gt;/Δt). Induced EMF when magnetic flux CHANGES (change in B, area A, or angle θ).</p><p><strong>Lenz's Law:</strong> Induced current opposes the change in magnetic flux that caused it.</p>",
    examRule: "Lenz's Law: \"Lenz hates change.\" If flux increases → induced current opposes it (reduces it). If flux decreases → induced current maintains it (increases it).",
    traps: "Students think induced current tries to \"maintain\" the original field. More precisely, it opposes the CHANGE in flux. This is how electromagnetic braking works.",
    challenge: {
      question: "A bar magnet is quickly pushed into a coil. According to Lenz's Law, the induced current will:",
      options: ["A) Create a field attracting the magnet further", "B) Create a field opposing/repelling the magnet's approach", "C) Have no effect (coil is not a magnet)", "D) Reverse if the magnet moves faster"],
      correct: "B",
      explanation: "As the magnet approaches, flux through the coil INCREASES. Lenz's Law: induced current opposes this increase by creating a repelling field. This is why pushing a magnet into a coil feels resistant."
    }
  },

  // ========== PATHWAY 3: EARTH SCIENCE & GEOPHYSICS (5 topics) ==========

  {
    id: "sci-3-1",
    module: "Pathway 3: Geoscience",
    title: "Lithosphere & The Rock Cycle Matrix",
    analogy: "The rock cycle is like planetary recycling: rocks transform magma → igneous → weathering → sedimentary → burial/heat → metamorphic → melting back to magma over millions of years. Earth constantly runs this recycling program.",
    mechanics: "<p><strong>Igneous Rocks:</strong> Intrusive (slow cooling, large crystals: granite, gabbro). Extrusive (fast cooling, small crystals: basalt, obsidian).</p><p><strong>Sedimentary Rocks:</strong> Clastic (compacted fragments: shale, sandstone). Chemical (precipitated: limestone, rock salt). Organic/Biogenic (accumulated remains: coal, fossiliferous limestone).</p><p><strong>Metamorphic Rocks:</strong> Foliated (layered/banded: slate, schist, gneiss). Non-Foliated (massive: marble, quartzite).</p><p><strong>Key Insight:</strong> ONLY sedimentary rocks contain fossils (organic material buried before destruction).</p>",
    examRule: "Metamorphic grade increases: Slate → Phyllite → Schist → Gneiss (with increasing temperature and pressure).",
    traps: "Students confuse granite (intrusive igneous with visible crystals) with sandstone (sedimentary with glued grains). Granite sparkles with interlocked crystals from slow cooling; sandstone grains look glued together.",
    challenge: {
      question: "Which sequence represents increasing metamorphic grade of a pelitic rock?",
      options: ["A) Gneiss → Schist → Phyllite → Slate", "B) Slate → Phyllite → Schist → Gneiss", "C) Phyllite → Gneiss → Slate → Schist", "D) Schist → Slate → Gneiss → Phyllite"],
      correct: "B",
      explanation: "As temperature and pressure increase progressively: Slate (lowest grade) → Phyllite (silky sheen) → Schist (distinct minerals) → Gneiss (highest grade, coarse banding)"
    }
  },

  {
    id: "sci-3-2",
    module: "Pathway 3: Geoscience",
    title: "Plate Tectonics & Boundary Dynamics",
    analogy: "Earth's crust is like a cracked eggshell floating on molten yolk (mantle). Cracks (plate boundaries) show where pieces pull apart (magma fills gaps), collide (heavier one dives under), or grind sideways (earthquakes).",
    mechanics: "<p><strong>Five Boundary Types:</strong></p><p><strong>Divergent:</strong> Plates apart → Mid-ocean ridges, rift valleys, new ocean floor</p><p><strong>Convergent (Ocean-Ocean):</strong> Oceanic-oceanic collision → Deep trench, island volcanic arc</p><p><strong>Convergent (Ocean-Continental):</strong> Oceanic subducts under continental → Trench, coastal volcanic mountains</p><p><strong>Convergent (Continental-Continental):</strong> No subduction → High fold mountains (Himalayas, Alps), NO volcanoes</p><p><strong>Transform:</strong> Plates slide horizontally → Fault lines, shallow earthquakes</p><p><strong>Why oceanic subducts:</strong> Oceanic crust (basaltic, ~3.0 g/cm³) denser than continental (granitic, ~2.7 g/cm³).</p>",
    examRule: "Continental-continental convergence produces MOUNTAINS but NO VOLCANOES (no subduction, no magma). The Himalayas are fold mountains, not volcanic.",
    traps: "Students think all convergent boundaries produce volcanoes. FALSE. Only convergent boundaries with subduction produce magma and volcanoes. C-C collision produces no volcanoes.",
    challenge: {
      question: "The Mariana Trench formed because of which process?",
      options: ["A) Continental plates colliding", "B) Transform fault causing seafloor to drop", "C) Oceanic plate subducting beneath another oceanic plate", "D) Mid-ocean ridge spreading"],
      correct: "C",
      explanation: "Mariana Trench is an oceanic-oceanic convergent boundary where the Pacific Plate subducts beneath the Mariana Plate. The downward bending of the sinking plate creates the deepest trench."
    }
  },

  {
    id: "sci-3-3",
    module: "Pathway 3: Geoscience",
    title: "Seismic Geophysics & Earth's Layers",
    analogy: "Seismic waves are like diagnostic ultrasound for Earth. P-waves travel through anything (solid/liquid/gas). S-waves travel only through solids. When S-waves vanish in a shadow zone opposite an earthquake, this proves the outer core is liquid.",
    mechanics: "<p><strong>P-Waves vs. S-Waves:</strong> P (Primary, compressional, fast ~6-13 km/s, travel through all media) vs. S (Secondary, shear, slow ~3.5-7.5 km/s, solids ONLY)</p><p><strong>Earth's Layers:</strong> Crust (0-35 km, solid silicates). Mantle (35-2900 km, solid but ductile/plastic). Outer Core (2900-5100 km, LIQUID iron-nickel). Inner Core (5100-6371 km, SOLID iron-nickel due to extreme pressure).</p><p><strong>S-Wave Shadow Zone Proof:</strong> If S-waves are absent on far side of Earth from epicenter, outer core must be LIQUID (S-waves cannot travel through liquid).</p>",
    examRule: "Inner core is SOLID despite being hotter than outer core because PRESSURE overrides temperature at those depths. The extreme pressure forces iron into solid state.",
    traps: "Students think inner core is liquid because \"it's hotter.\" Wrong. State of matter is determined by BOTH temperature AND pressure. At extreme pressure, even super-hot iron is solid.",
    challenge: {
      question: "Which observation BEST proves Earth's outer core is liquid?",
      options: ["A) P-waves detected on opposite side from earthquake", "B) Inner core has higher temperature", "C) S-waves absent in the shadow zone", "D) Mantle convects like viscous liquid"],
      correct: "C",
      explanation: "S-waves cannot travel through liquids. Their absence in the shadow zone directly proves outer core is liquid. P-waves travel through both solids and liquids, so option A doesn't prove anything."
    }
  },

  {
    id: "sci-3-4",
    module: "Pathway 3: Geoscience",
    title: "Atmospheric Stratification",
    analogy: "Earth's atmosphere is a layered cake: troposphere (where weather happens), stratosphere (protective ozone layer), mesosphere (coldest layer where meteors burn), thermosphere (very thin but very hot), exosphere (satellites orbit here).",
    mechanics: "<p><strong>Atmospheric Layers (bottom to top):</strong></p><p><strong>Troposphere (0-12 km):</strong> Temperature DECREASES with altitude (~-6.5°C/km). All weather. 75% of atmospheric mass.</p><p><strong>Stratosphere (12-50 km):</strong> Temperature INCREASES with altitude (thermal inversion). Contains OZONE LAYER (15-35 km). Absorbs UV radiation.</p><p><strong>Mesosphere (50-80 km):</strong> Temperature DECREASES. COLDEST layer (~-90°C). Meteor ablation occurs here.</p><p><strong>Thermosphere (80-700 km):</strong> Temperature INCREASES dramatically. Ionosphere. Auroras (Aurora Borealis/Australis). Radio wave reflection.</p><p><strong>Exosphere (700+ km):</strong> Satellites orbit. Merges with outer space.</p>",
    examRule: "Thermosphere has very HIGH TEMPERATURE but very LOW THERMAL ENERGY (few molecules). Temperature ≠ thermal energy. Thermosphere would NOT feel hot to a human despite 2000°C+.",
    traps: "Students assume thermosphere is \"cold\" because it's high altitude. Actually extremely hot in temperature, but has minimal thermal energy due to low density.",
    challenge: {
      question: "In which atmospheric layer do meteors typically burn up?",
      options: ["A) Troposphere", "B) Stratosphere", "C) Mesosphere", "D) Thermosphere"],
      correct: "C",
      explanation: "Meteors burn up in the MESOSPHERE due to friction. Despite being the coldest layer, it has enough air density to create significant friction that ablates incoming space debris."
    }
  },

  {
    id: "sci-3-5",
    module: "Pathway 3: Geoscience",
    title: "Weather, Climate, & Biogeochemical Cycles",
    analogy: "Biogeochemical cycles are perpetual recycling programs where carbon, nitrogen, phosphorus, and water move between atmosphere, oceans, soil, and living organisms. Every breath, every decaying leaf, every raindrop returns atoms to these cycles.",
    mechanics: "<p><strong>Water Cycle:</strong> Evaporation → Transpiration → Condensation → Precipitation → Runoff/Infiltration → back to evaporation</p><p><strong>Carbon Cycle:</strong> Atmosphere (CO₂) ↔ Biosphere (organisms) ↔ Oceans (dissolved CO₂, HCO₃⁻) ↔ Lithosphere (limestone, fossil fuels). Photosynthesis removes CO₂; respiration/combustion release CO₂.</p><p><strong>Nitrogen Cycle:</strong> Atmosphere (N₂, unreactive) → Fixation (bacteria, lightning) → NH₃/NH₄⁺ → Nitrification → NO₃⁻ (usable by plants) → Assimilation → Animals → Decomposition → Denitrification → back to N₂</p><p><strong>Phosphorus Cycle:</strong> KEY DIFFERENCE: NO atmospheric phase. Cycles only through lithosphere ↔ hydrosphere ↔ biosphere. SLOWEST cycle.</p>",
    examRule: "Phosphorus has NO atmospheric reservoir (unlike C and N). When exam asks which nutrient cycles slowest or lacks atmospheric phase, answer is PHOSPHORUS.",
    traps: "Students incorrectly say phosphorus \"cycles through the atmosphere.\" Phosphorus is rock-based; it cycles through soil/water/organisms only.",
    challenge: {
      question: "Which process converts atmospheric N₂ into usable ammonia?",
      options: ["A) Nitrification", "B) Denitrification", "C) Nitrogen Fixation", "D) Decomposition"],
      correct: "C",
      explanation: "Nitrogen Fixation (by Rhizobium bacteria or lightning) converts inert N₂ into reactive NH₃. Nitrification converts already-fixed NH₄⁺ to NO₃⁻. Denitrification returns fixed nitrogen back to N₂."
    }
  },

  // ========== PATHWAY 4: HUMAN SCIENCE & CELLULAR PHYSIOLOGY (6 topics) ==========

  {
    id: "sci-4-1",
    module: "Pathway 4: Biology",
    title: "Cellular Division Matrix",
    analogy: "Mitosis is a photocopier making perfect duplicates for growth/repair. Meiosis is a shuffling machine creating four unique \"half-decks\" (gametes with half the chromosomes). Meiosis happens only in gonads to create reproductive cells.",
    mechanics: "<p><strong>Mitosis vs. Meiosis:</strong> Mitosis: 1 diploid (2n) → 2 diploid (2n), growth/repair, somatic cells. Meiosis: 1 diploid (2n) → 4 haploid (n), reproduction, gonads.</p><p><strong>Mitosis Phases:</strong> Prophase (chromatin condenses) → Metaphase (chromosomes at equator) → Anaphase (sister chromatids pulled apart) → Telophase (nuclear envelope reforms) → Cytokinesis (cell divides)</p><p><strong>Meiosis I (Reductive):</strong> Homologous chromosomes separate. Crossing Over (Prophase I) = genetic recombination. Independent Assortment (Metaphase I) = random orientation.</p><p><strong>Meiosis II (Equatorial):</strong> Sister chromatids separate (like mitosis). Result: 4 haploid, genetically unique gametes.</p>",
    examRule: "MEIOSIS I separates HOMOLOGOUS chromosomes (reduces 2n to n). MEIOSIS II separates SISTER CHROMATIDS (like mitosis, but haploid).",
    traps: "Students confuse sister chromatids with homologous chromosomes. Sister chromatids = identical copies joined at centromere. Homologs = corresponding pair (one from mom, one from dad).",
    challenge: {
      question: "If an original cell has 46 chromosomes, how many will each gamete have after meiosis?",
      options: ["A) 46", "B) 92", "C) 23", "D) 12"],
      correct: "C",
      explanation: "Meiosis reduces chromosome number by half (2n → n). In humans, 2n = 46, so gametes have n = 23 chromosomes."
    }
  },

  {
    id: "sci-4-2",
    module: "Pathway 4: Biology",
    title: "Mendelian & Non-Mendelian Genetics",
    analogy: "Mendelian genetics is like coin flips: each parent passes one \"coin\" (allele), and certain combinations win. Non-Mendelian: sometimes two \"heads\" blend (incomplete dominance), or both show at once (codominance), or there are 4 coins (multiple alleles).",
    mechanics: "<p><strong>Monohybrid Cross (Aa × Aa):</strong> Genotypic ratio 1:2:1 (AA:Aa:aa). Phenotypic ratio 3:1 (dominant:recessive).</p><p><strong>Dihybrid Cross (AaBb × AaBb):</strong> Phenotypic ratio 9:3:3:1</p><p><strong>Incomplete Dominance:</strong> Heterozygote shows blended intermediate phenotype. Phenotypic ratio 1:2:1 (three distinct phenotypes).</p><p><strong>Codominance:</strong> Both alleles fully expressed simultaneously. Example: AB blood type shows both A and B antigens.</p><p><strong>Multiple Alleles:</strong> More than 2 alleles exist (but individual has only 2). Example: ABO blood type ($I^A$, $I^B$, $i$).</p><p><strong>ABO Genotypes:</strong> $I^A I^A$ or $I^A i$ = Type A; $I^B I^B$ or $I^B i$ = Type B; $I^A I^B$ = Type AB; $ii$ = Type O</p>",
    examRule: "Complete Dominance → 3:1 phenotypic ratio. Incomplete Dominance & Codominance → 1:2:1 phenotypic ratio. The key difference is whether heterozygotes show intermediate (incomplete) or both traits (codominance).",
    traps: "In incomplete dominance, students expect 3:1 ratio. It's 1:2:1 (all three phenotypes visible). Codominance also gives 1:2:1.",
    challenge: {
      question: "A red flower (RR) × white flower (WW) in incomplete dominance. What is the F1 phenotype?",
      options: ["A) All red", "B) All white", "C) All pink", "D) Half red, half white"],
      correct: "C",
      explanation: "RR × WW → all offspring RW. With incomplete dominance, heterozygotes show blended intermediate (pink = blend of red and white)."
    }
  },

  {
    id: "sci-4-3",
    module: "Pathway 4: Biology",
    title: "The Central Dogma",
    analogy: "DNA is the master manuscript locked in the library (nucleus). Transcription is making a photocopy (mRNA) to carry out. Translation is factory workers (ribosomes) reading the copy and assembling a product (protein). The copy can be reused or discarded.",
    mechanics: "<p><strong>Central Dogma:</strong> DNA → (Replication) → DNA; DNA → (Transcription) → mRNA; mRNA → (Translation) → Protein</p><p><strong>DNA Replication:</strong> Location: Nucleus. Template: both strands. Enzyme: DNA Polymerase. Product: 2 identical DNA (semi-conservative).</p><p><strong>Transcription:</strong> Location: Nucleus. Template: one DNA strand (template strand). Enzyme: RNA Polymerase. Product: mRNA. KEY: RNA uses URACIL (U), not Thymine (T).</p><p><strong>Base Pairing (DNA → mRNA):</strong> A→U, T→A, G→C, C→G</p><p><strong>Translation:</strong> Location: Ribosomes. Template: mRNA. Adaptor: tRNA. Units: Codons (mRNA, 3 nucleotides) match Anticodons (tRNA). Start codon: AUG. Stop codons: UAA, UAG, UGA.</p>",
    examRule: "THYMINE exists only in DNA. URACIL exists only in RNA. If you see T in mRNA, it's WRONG. Every RNA sequence must use U, not T.",
    traps: "Students accidentally write T (thymine) in mRNA sequences. This is an automatic error signal. Always double-check: \"Did I write T in RNA?\" If yes, change to U.",
    challenge: {
      question: "If DNA template strand is 3'-TAC-GGC-ATG-5', what is the mRNA sequence?",
      options: ["A) 5'-AUG-CCG-UAC-3'", "B) 5'-ATG-CCG-TAC-3'", "C) 3'-AUG-GGC-UAC-5'", "D) 5'-UAC-CCG-AUG-3'"],
      correct: "A",
      explanation: "DNA 3'-TAC-GGC-ATG-5' transcribes to mRNA 5'-AUG-CCG-UAC-3'. Base pairing: T→A, A→U, C→G, G→C. Direction: 5' to 3' for mRNA synthesis."
    }
  },

  {
    id: "sci-4-4",
    module: "Pathway 4: Biology",
    title: "Membrane Transport",
    analogy: "Cell membrane has a free lane (passive transport &mdash; downhill, no energy) and a toll lane (active transport &mdash; uphill, costs ATP). Water specifically flows via osmosis toward concentrated (salty) regions to equalize.",
    mechanics: "<p><strong>Passive Transport:</strong> Simple Diffusion (small nonpolar through lipid bilayer), Facilitated Diffusion (through protein channels, high→low), Osmosis (water through semipermeable membrane)</p><p><strong>Osmosis Effects:</strong> Hypotonic (lower solute outside) → Water enters → Cell swells/lyses. Isotonic (equal solute) → No net movement. Hypertonic (higher solute outside) → Water exits → Cell shrinks/crenates.</p><p><strong>Active Transport:</strong> Movement against gradient (low→high), requires ATP. Example: Na⁺/K⁺ pump (3 Na⁺ OUT, 2 K⁺ IN per ATP).</p>",
    examRule: "HYPOtonic = HYPer cell volume (swells). HYPERtonic = water exits (shrinks). Memory: \"HYPOtonic = cell gets fat.\"",
    traps: "Students reverse osmosis effects: \"Hypertonic causes cells to swell.\" FALSE. Hypertonic = higher solute outside = water leaves = cell shrinks.",
    challenge: {
      question: "RBC placed in 0.9% NaCl (isotonic). What happens?",
      options: ["A) Swells and bursts (lysis)", "B) Shrinks (crenation)", "C) Remains unchanged", "D) Actively pumps out water"],
      correct: "C",
      explanation: "0.9% NaCl is isotonic to blood plasma. Equal solute concentration inside and outside → no net water movement → cell maintains normal size."
    }
  },

  {
    id: "sci-4-5",
    module: "Pathway 4: Biology",
    title: "Cardiovascular Circulation Loops",
    analogy: "Heart is a double pump side-by-side. Right pump (\"dirty pump\") sends oxygen-poor blood to lungs. Left pump (\"clean pump\") sends oxygenated blood to body. Pulmonary loop is low-pressure, short. Systemic loop is high-pressure, long.",
    mechanics: "<p><strong>Blood Pathway:</strong> Right Atrium → Tricuspid Valve → Right Ventricle → Pulmonary Semilunar Valve → Pulmonary Arteries → LUNGS → Pulmonary Veins → Left Atrium → Bicuspid (Mitral) Valve → Left Ventricle → Aortic Semilunar Valve → Aorta → Body → Venae Cavae → Right Atrium</p><p><strong>Two Loops:</strong> Pulmonary (right heart → lungs → left heart, low pressure, deoxygenated out, oxygenated in). Systemic (left heart → body → right heart, high pressure, oxygenated out, deoxygenated in).</p><p><strong>EXCEPTION:</strong> Pulmonary arteries carry DEOXYGENATED blood; pulmonary veins carry OXYGENATED blood (opposite of systemic!).</p><p><strong>Left Ventricle Wall:</strong> 3× thicker than right (must pump entire body against high resistance).</p>",
    examRule: "Arteries defined by direction (away from heart), not oxygen content. Pulmonary arteries = EXCEPTION (carry deoxygenated blood).",
    traps: "Students: \"Arteries always carry oxygenated blood.\" FALSE. Pulmonary arteries carry deoxygenated blood TO lungs. Definition is direction, not oxygen.",
    challenge: {
      question: "Blood passes through aortic semilunar valve. What is the NEXT structure?",
      options: ["A) Left atrium", "B) Mitral valve", "C) Aorta", "D) Pulmonary artery"],
      correct: "C",
      explanation: "Aortic semilunar valve separates LEFT VENTRICLE from AORTA. Blood passing through enters the AORTA and travels through systemic circulation."
    }
  },

  {
    id: "sci-4-6",
    module: "Pathway 4: Biology",
    title: "Endocrine Control & Homeostasis",
    analogy: "Negative feedback loops are thermostats: when hot, AC turns on; when cool, AC turns off. System actively counters deviation. Positive feedback loops amplify the signal toward an endpoint (childbirth, blood clotting).",
    mechanics: "<p><strong>Negative Feedback — Blood Sugar:</strong> High glucose → Pancreas releases Insulin → Cells take up glucose/store as glycogen → Blood glucose falls → Insulin stops (loop closes)</p><p><strong>Negative Feedback — Low Sugar:</strong> Low glucose → Pancreas releases Glucagon → Liver releases glucose → Blood glucose rises → Glucagon stops</p><p><strong>Positive Feedback — Childbirth:</strong> Cervical pressure → Posterior pituitary releases Oxytocin → Uterine contractions increase → More cervical pressure → MORE oxytocin (loop amplifies until baby born)</p><p><strong>Key Hormones:</strong> Insulin (lowers blood glucose), Glucagon (raises blood glucose), Thyroxine (T₃, T₄ - metabolism), Epinephrine (fight-or-flight), Cortisol (stress response), Oxytocin (uterine contractions), ADH (water retention)</p>",
    examRule: "INsulin = INtake (brings glucose INTO cells, LOWERS blood level). GLUCagon = GLUCose agonist = RAISES blood glucose.",
    traps: "Students reverse: \"Insulin raises blood sugar.\" FALSE. Insulin LOWERS blood sugar (promotes uptake and storage). Glucagon RAISES it.",
    challenge: {
      question: "Which describes a NEGATIVE feedback mechanism?",
      options: ["A) Oxytocin stimulates contractions, which stimulate more oxytocin", "B) Rising temperature triggers sweating, which lowers temperature", "C) Blood clotting factors amplify the cascade until clot forms", "D) Milk letdown intensifies as baby continues to nurse"],
      correct: "B",
      explanation: "Sweating in response to heat, which then lowers temperature, is negative feedback: response opposes original stimulus. Returning to set point. A, C, D are positive feedback (response amplifies)."
    }
  },

  // ========== PATHWAY 5: ASTRONOMY & SPACE SYSTEMS (4 topics) ==========

  {
    id: "sci-5-1",
    module: "Pathway 5: Astronomy",
    title: "Celestial Mechanics & Kepler's Laws",
    analogy: "Kepler's Laws describe planetary orbits like traffic laws describe road movement. 1st Law: road is oval (ellipse). 2nd Law: speed up near Sun, slow down when far away. 3rd Law: larger orbit = longer journey.",
    mechanics: "<p><strong>Kepler's 1st Law:</strong> All planets orbit in ELLIPSES, with Sun at one focus (not center).</p><p><strong>Kepler's 2nd Law:</strong> Line connecting planet to Sun sweeps EQUAL AREAS in equal time. Result: faster near Sun (perihelion), slower far away (aphelion).</p><p><strong>Kepler's 3rd Law:</strong> T² ∝ a³. In solar system: T² = a³ (T in years, a in AU)</p><p><strong>Definitions:</strong> Perihelion = closest to Sun (MAXIMUM orbital speed). Aphelion = farthest from Sun (minimum speed). Eccentricity (e) = how stretched the ellipse is (0 = circle, 1 = parabola).</p>",
    examRule: "At PERIHELION (closest), planet moves FASTEST. At APHELION (farthest), planet moves SLOWEST. \"Perihelion = Proximity = Presto fast!\"",
    traps: "Students reverse: \"Fastest at aphelion.\" FALSE. Closest = fastest (like a ball on a shorter string spins faster).",
    challenge: {
      question: "Planet X has orbital period T = 27 years. Using T² = a³, what is its distance from Sun?",
      options: ["A) 9 AU", "B) 3 AU", "C) 27 AU", "D) 6 AU"],
      correct: "A",
      explanation: "27² = a³ → 729 = a³ → a = ∛729 = 9 AU"
    }
  },

  {
    id: "sci-5-2",
    module: "Pathway 5: Astronomy",
    title: "Stellar Evolution & The H-R Diagram",
    analogy: "H-R Diagram is a \"vital statistics chart\" for stars: brightness (luminosity) vs. color (temperature). Stars progress across this chart as they age. Mass determines the life path.",
    mechanics: "<p><strong>H-R Diagram Regions:</strong> Upper Left (hot, bright, massive blue stars). Lower Right (cool, dim, small red dwarfs). Upper Right (cool but HUGE red giants, red supergiants). Lower Left (hot but TINY white dwarfs).</p><p><strong>Stellar Life Cycle (low/medium mass like Sun):</strong> Nebula → Protostar → MAIN SEQUENCE (H→He fusion) → RED GIANT (shell burning) → Planetary nebula → WHITE DWARF → Black dwarf (theoretical)</p><p><strong>Stellar Life Cycle (high mass >8 M☉):</strong> Nebula → Protostar → MAIN SEQUENCE (short lifespan, burns fast) → RED SUPERGIANT → SUPERNOVA → Neutron Star (if <3 M☉ remnant) or Black Hole (if >3 M☉ remnant)</p><p><strong>Why Iron Ends Fusion:</strong> Iron-56 has most stable nucleus. Fusing iron COSTS energy instead of releasing it → core collapses → supernova.</p>",
    examRule: "MASSIVE stars have SHORTER main sequence lifetimes (burn fuel faster). Red dwarfs live for TRILLIONS of years. Mass inversely proportional to lifespan.",
    traps: "Students: \"Larger star = longer lifespan.\" FALSE. Massive stars burn fuel so fast they die young. Our Sun (~10 billion year lifetime) outlives massive stars by far.",
    challenge: {
      question: "A star has very high luminosity but low temperature. Where on H-R Diagram?",
      options: ["A) Lower left (white dwarf)", "B) Upper right (giant/supergiant)", "C) Lower right (red dwarf)", "D) Center of Main Sequence"],
      correct: "B",
      explanation: "High luminosity + low temperature = enormous star. Large surface area compensates for low T to produce high total brightness. Upper right = red giant/supergiant region."
    }
  },

  {
    id: "sci-5-3",
    module: "Pathway 5: Astronomy",
    title: "Gravitational Tidal Alignment",
    analogy: "Tides are oceans responding to Moon-Sun gravitational tug-of-war. Spring tides: Moon and Sun pull together (or opposite) = maximum effect. Neap tides: Moon and Sun pull at right angles = partial cancellation.",
    mechanics: "<p><strong>Spring Tides (Maximum Range):</strong> Earth-Moon-Sun COLLINEAR (straight line) at New Moon OR Full Moon. Moon and Sun gravity COMBINE. Highest highs, lowest lows.</p><p><strong>Neap Tides (Minimum Range):</strong> Earth-Moon-Sun form 90° angle at First Quarter OR Third Quarter. Gravity partially CANCELS. Moderate tides.</p><p><strong>Two Tidal Bulges Per Day:</strong> Near-side bulge (Moon pulls water toward it). Far-side bulge (Moon pulls Earth away, leaving water behind). Result: two high tides, two low tides daily.</p>",
    examRule: "\"SPRING\" comes from German \"springen\" (to jump/leap), not the season. Spring tides occur 2× per lunar month (~every 14 days), not just in spring season.",
    traps: "Students think spring tides only occur in spring (season). FALSE. \"Spring\" refers to the water \"springing\" up to greater heights. Occurs at every New and Full Moon.",
    challenge: {
      question: "During which moon phase is the LOWEST tidal range (smallest high-low difference)?",
      options: ["A) New Moon", "B) Full Moon", "C) First Quarter Moon", "D) A and B both"],
      correct: "C",
      explanation: "First Quarter (and Third Quarter) produce NEAP TIDES due to 90° Earth-Moon-Sun angle. Sun's tidal force partially cancels Moon's, giving minimum tidal range."
    }
  },

  {
    id: "sci-5-4",
    module: "Pathway 5: Astronomy",
    title: "Big Bang Theory & Cosmic Scale",
    analogy: "Imagine all dots on a balloon representing galaxies. Blow up the balloon → every dot moves away from every other dot. No single dot is the \"center.\" This is the expanding universe. Big Bang = expansion of space itself, not explosion in space.",
    mechanics: "<p><strong>Evidence for Big Bang:</strong> Cosmological Redshift (distant galaxies redshifted = moving away = expanding). Hubble's Law: v = H₀d. Cosmic Microwave Background Radiation (2.7 K, residual heat from early universe). Light element abundances match predictions (~75% H, ~25% He).</p><p><strong>Cosmological Redshift:</strong> z = (λ&lt;sub&gt;observed&lt;/sub&gt; - λ&lt;sub&gt;rest&lt;/sub&gt;)/λ&lt;sub&gt;rest&lt;/sub&gt;. Higher z = farther away = faster recession.</p><p><strong>Universe Timeline:</strong> 10⁻⁴³ s (Planck Epoch, physics breaks down). 10⁻⁶ s (quarks form protons). 3 min (Big Bang Nucleosynthesis, H/He nuclei). 380,000 years (Universe cools, electrons combine with nuclei, CMBR released). ~200 million years (First stars). ~1 billion years (First galaxies). 13.8 billion years (Present).</p>",
    examRule: "Big Bang ≠ explosion at a location in space. Big Bang = rapid expansion OF space itself from singularity. No center. All points equally the \"origin.\"",
    traps: "Students frame Big Bang as \"massive explosion that happened at a point in space.\" Incorrect. It was expansion of space itself, not an explosion within pre-existing space.",
    challenge: {
      question: "The Cosmic Microwave Background Radiation is significant because it:",
      options: ["A) Proves universe is contracting to Big Crunch", "B) Is evidence of initial hot dense universe, supporting Big Bang Theory", "C) Represents current output of all active stars", "D) Is only detectable at edge of observable universe"],
      correct: "B",
      explanation: "CMBR is residual thermal radiation from ~380,000 years after Big Bang, when universe cooled enough for electrons to combine with nuclei. Its uniform detection at ~2.7 K precisely matches Big Bang predictions."
    }
  }
];

// Export for use in applications
if (typeof module !== 'undefined' && module.exports) {
  module.exports = scienceTopics;
}
