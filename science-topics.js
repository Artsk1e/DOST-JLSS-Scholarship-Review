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
    mechanics: `<div class="math-card">
  <p><strong>Subatomic Particles:</strong> Protons (+1, nucleus) carry positive charge; neutrons (0, nucleus) are neutral; electrons (&minus;1, electron cloud) carry negative charge.</p>
</div>
<div class="math-card">
  <p><strong>Key Formulas:</strong></p>
  <div class="math-equation"><i>Z</i> = Atomic Number = Protons</div>
  <div class="math-equation"><i>A</i> = Mass Number = Protons + Neutrons</div>
  <div class="math-equation">For neutral atoms: <i>e</i><sup>&minus;</sup> = Protons = <i>Z</i></div>
  <div class="math-equation">For ions: Cation (positive) = <i>Z</i> &minus; charge; Anion (negative) = <i>Z</i> + charge</div>
</div>
<div class="math-card">
  <p><strong>Isotopes, Isobars, Isotones:</strong></p>
  <ul>
    <li><strong>Isotopes:</strong> Same protons (same element), different neutrons</li>
    <li><strong>Isobars:</strong> Same mass number, different elements</li>
    <li><strong>Isotones:</strong> Same neutron count, different elements</li>
  </ul>
</div>`,
    examRule: "Always apply the ionic charge BEFORE calculating electrons. Treat charge sign as a direct instruction: negative = gain electrons (add), positive = lose electrons (subtract).",
    traps: "Students forget the ionic charge when calculating electron count. Example: S<sup>2&minus;</sup> (sulfur with 2&minus; charge) has 18 electrons, not 16.",
    challenge: {
      question: "An atom has a mass number of 40 and 21 neutrons. It forms a 2+ cation. How many electrons does it have?",
      options: ["A) 19", "B) 21", "C) 17", "D) 40"],
      correct: "C",
      explanation: "<i>Z</i> = 40 &minus; 21 = 19. Neutral atom has 19 electrons. The 2+ cation lost 2 electrons: 19 &minus; 2 = 17 electrons."
    }
  },

  {
    id: "sci-1-2",
    module: "Pathway 1: Chemistry",
    title: "Quantum Numbers & Electron Configurations",
    analogy: "Imagine a massive hotel where the Principal Quantum Number (<i>n</i>) is the floor, the Angular Momentum Quantum Number (<i>l</i>) is the wing, the Magnetic Quantum Number (<i>m</i><sub><i>l</i></sub>) is the room, and the Spin Quantum Number (<i>m</i><sub><i>s</i></sub>) is the bed. Each room has exactly two beds. No two guests can share the same bed in the same room on the same floor in the same wing.",
    mechanics: `<div class="math-card">
  <p><strong>Four Quantum Numbers:</strong></p>
  <ul>
    <li>Principal (<i>n</i>): 1, 2, 3, ...</li>
    <li>Angular Momentum (<i>l</i>): 0 to <i>n</i> &minus; 1</li>
    <li>Magnetic (<i>m</i><sub><i>l</i></sub>): &minus;<i>l</i> to +<i>l</i></li>
    <li>Spin (<i>m</i><sub><i>s</i></sub>): +&frac12; or &minus;&frac12;</li>
  </ul>
</div>
<div class="math-card">
  <p><strong>Subshells &amp; Capacities:</strong></p>
  <ul>
    <li><i>s</i>-subshell (<i>l</i> = 0): max 2 <i>e</i><sup>&minus;</sup></li>
    <li><i>p</i>-subshell (<i>l</i> = 1): max 6 <i>e</i><sup>&minus;</sup></li>
    <li><i>d</i>-subshell (<i>l</i> = 2): max 10 <i>e</i><sup>&minus;</sup></li>
    <li><i>f</i>-subshell (<i>l</i> = 3): max 14 <i>e</i><sup>&minus;</sup></li>
  </ul>
</div>
<div class="math-card">
  <p><strong>Filling Rules:</strong></p>
  <p><strong>Aufbau Principle:</strong> lowest energy first: 1s &rarr; 2s &rarr; 2p &rarr; 3s &rarr; 3p &rarr; 4s &rarr; 3d &rarr; 4p...</p>
  <p><strong>Pauli Exclusion Principle:</strong> No two electrons can share the same four quantum numbers.</p>
  <p><strong>Hund's Rule:</strong> Electrons occupy degenerate orbitals singly (with parallel spins) before pairing.</p>
</div>`,
    examRule: "When <i>l</i> = <i>n</i>, it's INVALID. Max <i>l</i> = <i>n</i> - 1. Electrons always remove from highest principal quantum number first during ionization.",
    traps: "Students write Fe<sup>2+</sup> as [Ar]4s<sup>2</sup>3d<sup>6</sup> when correct is [Ar]3d<sup>6</sup>. Electrons leave the 4s orbital first, not the 3d.",
    challenge: {
      question: "Which quantum number set is INVALID?",
      options: [
        "A) <i>n</i> = 2, <i>l</i> = 1, <i>m</i><sub><i>l</i></sub> = 0, <i>m</i><sub><i>s</i></sub> = +&frac12;",
        "B) <i>n</i> = 3, <i>l</i> = 3, <i>m</i><sub><i>l</i></sub> = &minus;2, <i>m</i><sub><i>s</i></sub> = &minus;&frac12;",
        "C) <i>n</i> = 4, <i>l</i> = 2, <i>m</i><sub><i>l</i></sub> = &minus;1, <i>m</i><sub><i>s</i></sub> = +&frac12;",
        "D) <i>n</i> = 1, <i>l</i> = 0, <i>m</i><sub><i>l</i></sub> = 0, <i>m</i><sub><i>s</i></sub> = &minus;&frac12;"
      ],
      correct: "B",
      explanation: "When <i>n</i> = 3, maximum <i>l</i> = <i>n</i> &minus; 1 = 2. Therefore <i>l</i> = 3 is impossible. This violates the fundamental quantum number rules."
    }
  },

  {
    id: "sci-1-3",
    module: "Pathway 1: Chemistry",
    title: "Stoichiometric Balancing & Reaction Types",
    analogy: "Balancing a chemical equation is like balancing a recipe: if one batch needs 1 egg for 2 pancakes, then 3 batches need 3 eggs for 6 pancakes. You never change the ingredients (subscripts), only the number of batches (coefficients). No atoms are created or destroyed, only rearranged.",
    mechanics: `<div class="math-card">
  <p><strong>Golden Rule:</strong> Change COEFFICIENTS only, never SUBSCRIPTS. Changing subscripts changes the chemical compound entirely.</p>
</div>
<div class="math-card">
  <p><strong>Five Reaction Types:</strong></p>
  <ul>
    <li><strong>Synthesis:</strong> (<i>A</i> + <i>B</i> &rarr; <i>AB</i>)</li>
    <li><strong>Decomposition:</strong> (<i>AB</i> &rarr; <i>A</i> + <i>B</i>)</li>
    <li><strong>Single Displacement:</strong> (<i>A</i> + <i>BC</i> &rarr; <i>AC</i> + <i>B</i>)</li>
    <li><strong>Double Displacement:</strong> (<i>AB</i> + <i>CD</i> &rarr; <i>AD</i> + <i>CB</i>)</li>
    <li><strong>Combustion:</strong> (hydrocarbon + O<sub>2</sub> &rarr; CO<sub>2</sub> + H<sub>2</sub>O)</li>
  </ul>
</div>
<div class="math-card">
  <p><strong>Limiting Reactant Procedure:</strong></p>
  <ol>
    <li>Convert all reactant masses to moles.</li>
    <li>Divide the moles of each reactant by its corresponding stoichiometric coefficient.</li>
    <li>The reactant with the smallest ratio is the <strong>limiting reactant</strong>.</li>
  </ol>
</div>
<div class="math-card">
  <p><strong>Percent Yield Formula:</strong></p>
  <div class="math-equation"><strong>Percent Yield</strong> = (Actual Yield &divide; Theoretical Yield) &times; 100%</div>
</div>`,
    examRule: "Always solve stoichiometry in the chain: grams &rarr; moles (&divide;<i>M</i>) &rarr; mole ratio (&times;coefficient) &rarr; moles &rarr; grams (&times;<i>M</i>). Never skip the mole ratio step.",
    traps: "Students use the EXCESS reactant's moles to calculate theoretical yield instead of the LIMITING reactant's moles. This produces inflated yield values.",
    challenge: {
      question: "In the reaction 2H<sub>2</sub> + O<sub>2</sub> &rarr; 2H<sub>2</sub>O, if 4 g of H<sub>2</sub> and 32 g of O<sub>2</sub> are reacted, what is the limiting reactant?",
      options: [
        "A) H<sub>2</sub>, because it has less mass",
        "B) O<sub>2</sub>, because oxygen is heavier",
        "C) H<sub>2</sub>, because the mole ratio shows it runs out first",
        "D) O<sub>2</sub>, because it has the smaller mole-to-coefficient ratio"
      ],
      correct: "D",
      explanation: "<i>n</i>(H<sub>2</sub>) = 4 &divide; 2 = 2 mol; ratio = 2 &divide; 2 = 1.0. <i>n</i>(O<sub>2</sub>) = 32 &divide; 32 = 1 mol; ratio = 1 &divide; 1 = 1.0. Both are stoichiometric (consumed simultaneously), but O<sub>2</sub> is limiting if either is present in less proportion."
    }
  },

  {
    id: "sci-1-4",
    module: "Pathway 1: Chemistry",
    title: "Intermolecular Forces (IMFs) vs. Intramolecular Bonds",
    analogy: "Intramolecular bonds (covalent, ionic) are the steel beams holding a building together. Intermolecular forces are handshakes between neighboring buildings &mdash; they determine how buildings cluster and affect boiling point, viscosity, and surface tension.",
    mechanics: `<div class="math-card">
  <p><strong>Intramolecular Bonds (Strong):</strong></p>
  <ul>
    <li><strong>Ionic:</strong> Metal + nonmetal (electron transfer)</li>
    <li><strong>Covalent:</strong> Nonmetal + nonmetal (electron sharing)</li>
    <li><strong>Metallic:</strong> Metal + metal</li>
  </ul>
</div>
<div class="math-card">
  <p><strong>Intermolecular Forces (Weak &rarr; Strong):</strong></p>
  <ol>
    <li><strong>London Dispersion Forces:</strong> All molecules, temporary induced dipoles</li>
    <li><strong>Dipole-Dipole:</strong> Polar molecules, permanent partial charges</li>
    <li><strong>Hydrogen Bonding:</strong> N-H, O-H, F-H bonds ONLY (unusually strong dipole-dipole)</li>
    <li><strong>Ion-Dipole:</strong> Ionic compound in a polar solvent</li>
  </ol>
</div>
<div class="math-card">
  <p><strong>Physical Property Effects &amp; Anomaly:</strong></p>
  <p>Stronger IMF &rarr; Higher boiling/melting point, higher viscosity, higher surface tension, LOWER vapor pressure.</p>
  <p><strong>Water Anomaly:</strong> H<sub>2</sub>O has an extended hydrogen bonding network (high boiling point).</p>
</div>`,
    examRule: "H-bonding requires hydrogen bonded DIRECTLY to N, O, or F ONLY. Not just any hydrogen. Also check molecular geometry before assigning IMF type.",
    traps: "CO<sub>2</sub> has polar C=O bonds but is NONPOLAR overall (linear geometry cancels dipoles), so it only has London Dispersion Forces. Students often call it dipole-dipole.",
    challenge: {
      question: "Which molecule has the HIGHEST boiling point?",
      options: ["A) CH<sub>4</sub>", "B) HCl", "C) NH<sub>3</sub>", "D) N<sub>2</sub>"],
      correct: "C",
      explanation: "NH<sub>3</sub> exhibits hydrogen bonding (N-H bond with lone pair on adjacent N). This is the strongest IMF among these options. CH<sub>4</sub> and N<sub>2</sub> have only London Dispersion Forces; HCl has dipole-dipole interactions."
    }
  },

  {
    id: "sci-1-5",
    module: "Pathway 1: Chemistry",
    title: "Solutions & Concentration Dynamics",
    analogy: "Molarity is like measuring sugar concentration in a glass of water &mdash; if the glass expands (temperature rises), the same sugar is now in a bigger volume, so molarity appears lower. Molality measures sugar per kilogram of water &mdash; even if water expands, the MASS stays constant, so molality remains unchanged.",
    mechanics: `<div class="math-card">
  <p><strong>Concentration Units:</strong></p>
  <ul>
    <li><strong>Molarity (<i>M</i>):</strong> moles solute &frasl; liters solution (depends on temperature <i>T</i>)</li>
    <li><strong>Molality (<i>m</i>):</strong> moles solute &frasl; kg solvent (independent of temperature <i>T</i>)</li>
    <li><strong>Mass %:</strong> (mass solute &divide; mass solution) &times; 100%</li>
    <li><strong>ppm (parts per million):</strong> (mass solute &divide; mass solution) &times; 10<sup>6</sup></li>
  </ul>
</div>
<div class="math-card">
  <p><strong>Dilution Formula:</strong></p>
  <div class="math-equation"><i>M</i><sub>1</sub><i>V</i><sub>1</sub> = <i>M</i><sub>2</sub><i>V</i><sub>2</sub></div>
  <p>(moles of solute before dilution = moles of solute after dilution)</p>
</div>
<div class="math-card">
  <p><strong>Colligative Property Equations:</strong></p>
  <div class="math-equation">&Delta;<i>T</i><sub>b</sub> = <i>K</i><sub>b</sub> &middot; <i>m</i></div>
  <div class="math-equation">&Delta;<i>T</i><sub>f</sub> = <i>K</i><sub>f</sub> &middot; <i>m</i></div>
</div>`,
    examRule: "For colligative property problems (boiling point elevation, freezing point depression), ALWAYS use MOLALITY, never molarity. &Delta;<i>T</i><sub>b</sub> = <i>K</i><sub>b</sub> &middot; <i>m</i> (where <i>m</i> is molality).",
    traps: "Students default to molarity for all concentration problems. Colligative properties REQUIRE molality because they depend on particle count, and molality is temperature-independent.",
    challenge: {
      question: "A solution is prepared by dissolving 2 moles of NaCl in 500 g of water. The temperature is raised from 25°C to 50°C. Which statement is TRUE?",
      options: ["A) Both molarity and molality increase", "B) Molarity increases; my molality stays the same", "C) Molarity decreases; molality stays the same", "D) Both molarity and molality decrease"],
      correct: "C",
      explanation: "Water expands at higher temperature, so volume increases. Molarity (moles/volume) decreases. Molality (moles/mass of solvent) remains constant because water's mass doesn't change with temperature."
    }
  },

  {
    id: "sci-1-6",
    module: "Pathway 1: Chemistry",
    title: "Gas Behavior & Ideal Gas Matrix",
    analogy: "Imagine molecules bouncing inside a sealed balloon like rubber balls. Squeeze the balloon smaller (decrease volume) → balls hit walls more often → higher pressure. Heat the balloon (increase temperature) → balls speed up → walls expand. The Ideal Gas Law ties all variables together, assuming molecules have no volume and feel no attraction.",
    mechanics: `<div class="math-card">
  <p><strong>Kinetic Molecular Theory:</strong> Gas molecules in constant random motion, negligible volume, no intermolecular forces, perfectly elastic collisions. Average kinetic energy is directly proportional to absolute temperature (Kelvin).</p>
</div>
<div class="math-card">
  <p><strong>Gas Laws:</strong></p>
  <ul>
    <li><strong>Boyle's Law:</strong> <i>P</i><sub>1</sub><i>V</i><sub>1</sub> = <i>P</i><sub>2</sub><i>V</i><sub>2</sub></li>
    <li><strong>Charles's Law:</strong> <i>V</i><sub>1</sub>&frasl;<i>T</i><sub>1</sub> = <i>V</i><sub>2</sub>&frasl;<i>T</i><sub>2</sub></li>
    <li><strong>Gay-Lussac's Law:</strong> <i>P</i><sub>1</sub>&frasl;<i>T</i><sub>1</sub> = <i>P</i><sub>2</sub>&frasl;<i>T</i><sub>2</sub></li>
    <li><strong>Combined Gas Law:</strong> <i>P</i><sub>1</sub><i>V</i><sub>1</sub>&frasl;<i>T</i><sub>1</sub> = <i>P</i><sub>2</sub><i>V</i><sub>2</sub>&frasl;<i>T</i><sub>2</sub></li>
  </ul>
</div>
<div class="math-card">
  <p><strong>Ideal Gas Law:</strong></p>
  <div class="math-equation"><i>PV</i> = <i>nRT</i></div>
  <p>Where <i>R</i> = 0.08206 L&middot;atm&frasl;(mol&middot;K) or 8.314 J&frasl;(mol&middot;K).</p>
  <p><strong>Absolute Temperature:</strong> <i>T</i> (Kelvin) = <i>T</i> (&deg;C) + 273.15</p>
</div>`,
    examRule: "ALWAYS convert temperature to Kelvin FIRST. This is the #1 source of errors in gas law problems. Make it a reflex: before touching any gas law formula, write T(K) = T(&deg;C) + 273.",
    traps: "Using Celsius instead of Kelvin produces wildly incorrect answers that often match distractor choices. For example, 27&deg;C is 300 K, not 27 K.",
    challenge: {
      question: "A gas occupies 4.0 L at 300 K and 1.0 atm. What volume does it occupy at 600 K and 2.0 atm?",
      options: ["A) 8.0 L", "B) 4.0 L", "C) 2.0 L", "D) 16.0 L"],
      correct: "B",
      explanation: "Using the Combined Gas Law: <i>V</i><sub>2</sub> = (<i>P</i><sub>1</sub><i>V</i><sub>1</sub><i>T</i><sub>2</sub>) &divide; (<i>T</i><sub>1</sub><i>P</i><sub>2</sub>) = (1.0 &times; 4.0 &times; 600) &divide; (300 &times; 2.0) = 2400 &divide; 600 = 4.0 L. The doubling of temperature and pressure cancel each other out."
    }
  },

  {
    id: "sci-1-7",
    module: "Pathway 1: Chemistry",
    title: "Hydrocarbon Saturation & Functional Groups",
    analogy: "Hydrocarbons are like a train of carbon cars. An alkane is fully loaded &mdash; every carbon seat filled with hydrogen passengers, all single bonds (saturated). An alkene has a double bond &mdash; two cars sharing a wall, missing two hydrogen seats (unsaturated). An alkyne has a triple bond &mdash; three shared walls, missing four hydrogens (highly unsaturated).",
    mechanics: `<div class="math-card">
  <p><strong>Hydrocarbon Series:</strong></p>
  <ul>
    <li><strong>Alkane:</strong> C<sub><i>n</i></sub>H<sub>2<i>n</i>+2</sub> (saturated, single bonds)</li>
    <li><strong>Alkene:</strong> C<sub><i>n</i></sub>H<sub>2<i>n</i></sub> (unsaturated, one C=C double bond)</li>
    <li><strong>Alkyne:</strong> C<sub><i>n</i></sub>H<sub>2<i>n</i>&minus;2</sub> (unsaturated, one C&equiv;C triple bond)</li>
  </ul>
</div>
<div class="math-card">
  <p><strong>IUPAC Naming Prefixes:</strong></p>
  <p>1-Meth, 2-Eth, 3-Prop, 4-But, 5-Pent, 6-Hex, 7-Hept, 8-Oct</p>
</div>
<div class="math-card">
  <p><strong>Functional Groups &amp; Esterification:</strong></p>
  <ul>
    <li><strong>Hydroxyl:</strong> &minus;OH (alcohol)</li>
    <li><strong>Carboxyl:</strong> &minus;COOH (carboxylic acid)</li>
    <li><strong>Ester:</strong> &minus;COO&minus; linkage</li>
    <li><strong>Amine:</strong> &minus;NH<sub>2</sub> (amine)</li>
  </ul>
  <p><strong>Esterification:</strong> R&minus;OH + R'&minus;COOH &rarr; R'&minus;COO&minus;R + H<sub>2</sub>O</p>
</div>`,
    examRule: "Cycloalkanes have formula C<sub><i>n</i></sub>H<sub>2<i>n</i></sub> (same as alkenes) but are NOT unsaturated. Check for ring structure in the description.",
    traps: "Alkenes and cycloalkanes share formula C<sub><i>n</i></sub>H<sub>2<i>n</i></sub>. Students assume any compound with that formula must be an alkene. Cycloalkanes are saturated (all single bonds in a ring).",
    challenge: {
      question: "What is the molecular formula of Butyne (4-carbon alkyne)?",
      options: ["A) C<sub>4</sub>H<sub>8</sub>", "B) C<sub>4</sub>H<sub>10</sub>", "C) C<sub>4</sub>H<sub>6</sub>", "D) C<sub>4</sub>H<sub>4</sub>"],
      correct: "C",
      explanation: "Alkynes follow the formula C<sub><i>n</i></sub>H<sub>2<i>n</i>&minus;2</sub>. For <i>n</i> = 4: H = 2(4) &minus; 2 = 6. So C<sub>4</sub>H<sub>6</sub>. Option A is Butene (alkene); Option B is Butane (alkane)."
    }
  },

  // ========== PATHWAY 2: PHYSICS & MECHANICAL SYSTEMS (7 topics) ==========

  {
    id: "sci-2-1",
    module: "Pathway 2: Physics",
    title: "Kinematics Matrix",
    analogy: "Distance is the total road your odometer travels (always positive). Displacement is a straight arrow from start to finish (can be zero if you return home). Speed is how fast the odometer reads. Velocity is speed plus direction.",
    mechanics: `<div class="math-card">
  <p><strong>Scalars vs. Vectors:</strong> Distance (scalar), Displacement (vector), Speed (scalar), Velocity (vector), Acceleration (vector)</p>
</div>
<div class="math-card">
  <p><strong>Four Kinematic Equations (Constant Acceleration):</strong></p>
  <div class="math-equation"><i>v</i> = <i>v</i><sub>0</sub> + <i>at</i> (missing: <i>d</i>)</div>
  <div class="math-equation"><i>d</i> = <i>v</i><sub>0</sub><i>t</i> + &frac12;<i>at</i><sup>2</sup> (missing: <i>v</i>)</div>
  <div class="math-equation"><i>v</i><sup>2</sup> = <i>v</i><sub>0</sub><sup>2</sup> + 2<i>ad</i> (missing: <i>t</i>)</div>
  <div class="math-equation"><i>d</i> = <sup>(<i>v</i><sub>0</sub> + <i>v</i>)</sup>&frasl;<sub>2</sub> &middot; <i>t</i> (missing: <i>a</i>)</div>
</div>
<div class="math-card">
  <p><strong>Free Fall:</strong></p>
  <div class="math-equation"><i>a</i> = <i>g</i> = -9.8 m/s<sup>2</sup> (downward)</div>
  <p>At maximum height: <i>v</i> = 0. Time up = Time down (symmetric).</p>
</div>`,
    examRule: "Define positive direction FIRST. Use <i>g</i> = -9.8 m/s<sup>2</sup> consistently. When object returns to starting height, displacement = 0.",
    traps: "Using only the upward phase of a projectile's motion and forgetting to double the time. Or using positive <i>g</i> instead of negative <i>g</i>, causing sign errors.",
    challenge: {
      question: "A ball is dropped from rest at a height of 45 m. How long does it take to reach the ground? (<i>g</i> = 10 m/s<sup>2</sup>)",
      options: ["A) 3.0 s", "B) 4.5 s", "C) 9.0 s", "D) 6.7 s"],
      correct: "A",
      explanation: "Using <i>d</i> = <i>v</i><sub>0</sub><i>t</i> + &frac12;<i>at</i><sup>2</sup>, with <i>v</i><sub>0</sub> = 0: 45 = 0 + &frac12;(10)<i>t</i><sup>2</sup> &rarr; 45 = 5<i>t</i><sup>2</sup> &rarr; <i>t</i><sup>2</sup> = 9 &rarr; <i>t</i> = 3.0 s"
    }
  },

  {
    id: "sci-2-2",
    module: "Pathway 2: Physics",
    title: "Dynamics & Newton's Laws",
    analogy: "1st Law: A hockey puck on ice slides forever (inertia). 2nd Law: The harder you kick AND the lighter it is, the faster it accelerates. 3rd Law: When you kick the puck, it pushes back on your foot with equal force.",
    mechanics: `<div class="math-card">
  <p><strong>Newton's Three Laws:</strong></p>
  <ul>
    <li><strong>First Law:</strong> If <i>F</i><sub>net</sub> = 0, then <i>a</i> = 0 (rest or constant velocity)</li>
    <li><strong>Second Law:</strong> <i>F</i><sub>net</sub> = <i>ma</i> (1 N = 1 kg&middot;m&frasl;s<sup>2</sup>)</li>
    <li><strong>Third Law:</strong> Action-Reaction pairs act on DIFFERENT objects with equal magnitude and opposite direction.</li>
  </ul>
</div>
<div class="math-card">
  <p><strong>Forces &amp; Friction:</strong></p>
  <ul>
    <li><strong>Weight:</strong> <i>W</i> = <i>mg</i> (downward)</li>
    <li><strong>Normal Force:</strong> <i>N</i> (perpendicular to surface)</li>
    <li><strong>Friction:</strong> <i>f</i><sub>s</sub> &le; &mu;<sub>s</sub><i>N</i> (static), <i>f</i><sub>k</sub> = &mu;<sub>k</sub><i>N</i> (kinetic). Note: &mu;<sub>s</sub> &gt; &mu;<sub>k</sub> always.</li>
  </ul>
</div>`,
    examRule: "Newton's 3rd Law pairs must act on DIFFERENT objects. Weight and Normal Force are NOT a 3rd Law pair (they act on the same object).",
    traps: "Students misidentify 3rd Law pairs by selecting forces that act on the same object. True 3rd Law pairs have (1) equal magnitude, (2) opposite direction, (3) same force type, (4) on DIFFERENT bodies.",
    challenge: {
      question: "A 5 kg box is pushed across a floor with a 30 N applied force. If &mu;<sub>k</sub> = 0.4 and <i>g</i> = 10 m/s<sup>2</sup>, what is the acceleration?",
      options: ["A) 2 m/s²", "B) 6 m/s²", "C) 4 m/s²", "D) 1 m/s²"],
      correct: "A",
      explanation: "<i>N</i> = <i>mg</i> = 5 &times; 10 = 50 N. <i>f</i><sub>k</sub> = &mu;<sub>k</sub><i>N</i> = 0.4 &times; 50 = 20 N. <i>F</i><sub>net</sub> = 30 &minus; 20 = 10 N. <i>a</i> = 10 &frasl; 5 = 2 m/s<sup>2</sup>"
    }
  },

  {
    id: "sci-2-3",
    module: "Pathway 2: Physics",
    title: "Thermodynamics & Entropy Directive",
    analogy: "The 1st Law is energy budgeting: heat into the system either stays inside (increases internal energy) or gets spent as work. The 2nd Law is the universe's irreversible arrow: a messy room never spontaneously organizes itself; heat never flows cold-to-hot without work.",
    mechanics: `<div class="math-card">
  <p><strong>First Law of Thermodynamics:</strong></p>
  <div class="math-equation">&Delta;<i>U</i> = <i>Q</i> &minus; <i>W</i></div>
  <p><strong>Sign Conventions:</strong></p>
  <ul>
    <li><i>Q</i> &gt; 0: Heat added to system; <i>Q</i> &lt; 0: Heat released from system</li>
    <li><i>W</i> &gt; 0: Work done by system; <i>W</i> &lt; 0: Work done on system</li>
  </ul>
</div>
<div class="math-card">
  <p><strong>Second Law &amp; Entropy:</strong></p>
  <div class="math-equation">&Delta;<i>S</i><sub>universe</sub> &ge; 0</div>
  <p>Spontaneous processes always increase the total entropy of the universe.</p>
</div>
<div class="math-card">
  <p><strong>Carnot Efficiency:</strong></p>
  <div class="math-equation">Efficiency = 1 &minus; (<i>T</i><sub>cold</sub> &frasl; <i>T</i><sub>hot</sub>)</div>
  <p>Note: Temperatures <i>T</i> must be in Kelvin. No real engine is 100% efficient.</p>
</div>`,
    examRule: "Physics convention: &Delta;<i>U</i> = <i>Q</i> &minus; <i>W</i>. The system LOSES energy when it does work (negative <i>W</i>) and GAINS energy when heat enters (positive <i>Q</i>).",
    traps: "Sign convention inconsistency between physics and chemistry textbooks. Always verify which convention your course uses. Some use &Delta;<i>U</i> = <i>Q</i> + <i>W</i>.",
    challenge: {
      question: "A gas absorbs 500 J of heat and does 200 J of work on its surroundings. What is the change in internal energy?",
      options: ["A) 700 J", "B) 300 J", "C) -300 J", "D) -700 J"],
      correct: "B",
      explanation: "&Delta;<i>U</i> = <i>Q</i> &minus; <i>W</i> = 500 &minus; 200 = 300 J. Heat absorbed (<i>Q</i> positive), work done by system (<i>W</i> positive). Net change is +300 J."
    }
  },

  {
    id: "sci-2-4",
    module: "Pathway 2: Physics",
    title: "Simple Machines & Mechanical Advantage",
    analogy: "Simple machines are trade-off tools: you can move a heavy load with a small force over a long distance, or move it with a large force over a short distance. You never get more work out than you put in, but you can redistribute the effort. A pulley system is like multiple teammates sharing the load &mdash; each rope segment shares the weight.",
    mechanics: `<div class="math-card">
  <p><strong>Mechanical Advantage:</strong></p>
  <div class="math-equation"><i>IMA</i> = <i>d</i><sub>effort</sub> &frasl; <i>d</i><sub>load</sub></div>
  <div class="math-equation"><i>AMA</i> = <i>F</i><sub>resistance</sub> &frasl; <i>F</i><sub>effort</sub></div>
</div>
<div class="math-card">
  <p><strong>Three Lever Classes:</strong></p>
  <ul>
    <li><strong>Class 1 (Fulcrum in middle):</strong> Seesaw, scissors, crowbar. <i>IMA</i> depends on arm lengths.</li>
    <li><strong>Class 2 (Resistance in middle):</strong> Wheelbarrow, nutcracker. <i>IMA</i> &gt; 1 always.</li>
    <li><strong>Class 3 (Effort in middle):</strong> Tweezers, baseball bat. <i>IMA</i> &lt; 1 always (gains speed/range).</li>
  </ul>
</div>
<div class="math-card">
  <p><strong>Pulley Systems:</strong></p>
  <p><i>IMA</i> = number of rope segments supporting the movable pulley block.</p>
</div>`,
    examRule: "Count the rope SEGMENTS supporting the movable pulley, not the total number of pulleys. Each rope segment equally shares the load.",
    traps: "Counting total pulleys instead of rope segments. A 4-pulley system could have IMA of 2, 3, 4, or higher depending on configuration.",
    challenge: {
      question: "A block-and-tackle system uses 6 rope segments supporting the movable pulley to lift a 600 N weight. What effort force is required (ideal conditions)?",
      options: ["A) 600 N", "B) 100 N", "C) 300 N", "D) 200 N"],
      correct: "B",
      explanation: "<i>IMA</i> = 6. Effort force = <i>F</i><sub>resistance</sub> &frasl; <i>IMA</i> = 600 &frasl; 6 = 100 N"
    }
  },

  {
    id: "sci-2-5",
    module: "Pathway 2: Physics",
    title: "Electric Circuits",
    analogy: "Think of a circuit as water pipes. Voltage is water pressure. Current is flow rate. Resistance is pipe narrowness. Series circuits are one pipe through multiple valves; if one valve breaks, everything stops. Parallel circuits are separate pipes; if one blocks, water still flows elsewhere.",
    mechanics: `<div class="math-card">
  <p><strong>Ohm's Law &amp; Power:</strong></p>
  <div class="math-equation"><i>V</i> = <i>IR</i></div>
  <div class="math-equation"><i>P</i> = <i>VI</i> = <i>I</i><sup>2</sup><i>R</i> = <i>V</i><sup>2</sup> &frasl; <i>R</i></div>
</div>
<div class="math-card">
  <p><strong>Series Circuits:</strong></p>
  <p>Same current <i>I</i> through all resistors. Voltage splits.</p>
  <div class="math-equation"><i>V</i><sub>total</sub> = <i>V</i><sub>1</sub> + <i>V</i><sub>2</sub> + ...</div>
  <div class="math-equation"><i>R</i><sub>eq</sub> = <i>R</i><sub>1</sub> + <i>R</i><sub>2</sub> + ...</div>
</div>
<div class="math-card">
  <p><strong>Parallel Circuits:</strong></p>
  <p>Same voltage <i>V</i> across all branches. Current splits.</p>
  <div class="math-equation"><i>I</i><sub>total</sub> = <i>I</i><sub>1</sub> + <i>I</i><sub>2</sub> + ...</div>
  <div class="math-equation">1 &frasl; <i>R</i><sub>eq</sub> = 1 &frasl; <i>R</i><sub>1</sub> + 1 &frasl; <i>R</i><sub>2</sub> + ...</div>
</div>`,
    examRule: "Household wiring is PARALLEL (each appliance gets full voltage independently). Christmas lights (old-style) are SERIES (one bulb burns out, all go dark).",
    traps: "Students intuitively feel that adding more resistors increases total resistance. True for series, FALSE for parallel. In parallel, each additional resistor provides a new current pathway, DECREASING total resistance.",
    challenge: {
      question: "Three resistors of 6 &Omega;, 3 &Omega;, and 2 &Omega; are connected in parallel to a 12 V battery. What is the total current?",
      options: ["A) 1.09 A", "B) 12 A", "C) 6 A", "D) 2 A"],
      correct: "B",
      explanation: "1 &frasl; <i>R</i><sub>eq</sub> = 1 &frasl; 6 + 1 &frasl; 3 + 1 &frasl; 2 = 1 &frasl; 6 + 2 &frasl; 6 + 3 &frasl; 6 = 6 &frasl; 6 = 1 &rarr; <i>R</i><sub>eq</sub> = 1 &Omega;. <i>I</i> = <i>V</i> &frasl; <i>R</i><sub>eq</sub> = 12 &frasl; 1 = 12 A."
    }
  },

  {
    id: "sci-2-6",
    module: "Pathway 2: Physics",
    title: "Wave Optics",
    analogy: "Reflection is a tennis ball bouncing off a wall at the same angle. Refraction is a car wheel hitting mud &mdash; the side that hits first slows down, causing the car to turn (light bends toward denser medium). Lenses and mirrors redirect light so it reconverges (or appears to diverge) at an image point.",
    mechanics: `<div class="math-card">
  <p><strong>Reflection &amp; Refraction:</strong></p>
  <div class="math-equation">&theta;<sub>i</sub> = &theta;<sub>r</sub> (measured from normal)</div>
  <p><strong>Snell's Law:</strong></p>
  <div class="math-equation"><i>n</i><sub>1</sub> sin &theta;<sub>1</sub> = <i>n</i><sub>2</sub> sin &theta;<sub>2</sub></div>
</div>
<div class="math-card">
  <p><strong>Mirror &amp; Lens Equations:</strong></p>
  <div class="math-equation">1 &frasl; <i>f</i> = 1 &frasl; <i>d</i><sub>o</sub> + 1 &frasl; <i>d</i><sub>i</sub></div>
  <p><strong>Magnification:</strong></p>
  <div class="math-equation"><i>M</i> = &minus;<i>d</i><sub>i</sub> &frasl; <i>d</i><sub>o</sub> = <i>h</i><sub>i</sub> &frasl; <i>h</i><sub>o</sub></div>
  <p>Note: <i>M</i> &gt; 0 is upright; <i>M</i> &lt; 0 is inverted; |<i>M</i>| &gt; 1 is magnified.</p>
</div>`,
    examRule: "Concave mirrors and convex lenses both CONVERGE light. Remember: \"CONcave = CONconcentrates\" for mirrors. For lenses, it flips.",
    traps: "Mixing up which mirror/lens is converging vs. diverging. Also, incorrectly interpreting image properties (real vs. virtual, upright vs. inverted).",
    challenge: {
      question: "An object is placed 30 cm in front of a concave mirror with <i>f</i> = 10 cm. Where is the image formed?",
      options: ["A) 15 cm behind the mirror (virtual)", "B) 15 cm in front of the mirror (real)", "C) 10 cm in front of the mirror (real)", "D) 30 cm behind the mirror (virtual)"],
      correct: "B",
      explanation: "1 &frasl; <i>f</i> = 1 &frasl; <i>d</i><sub>o</sub> + 1 &frasl; <i>d</i><sub>i</sub> &rarr; 1 &frasl; 10 = 1 &frasl; 30 + 1 &frasl; <i>d</i><sub>i</sub> &rarr; 1 &frasl; <i>d</i><sub>i</sub> = 1 &frasl; 10 &minus; 1 &frasl; 30 = 1 &frasl; 15 &rarr; <i>d</i><sub>i</sub> = 15 cm. Positive <i>d</i><sub>i</sub> indicates a real image formed in front of the mirror."
    }
  },

  {
    id: "sci-2-7",
    module: "Pathway 2: Physics",
    title: "Electromagnetism",
    analogy: "A moving electric charge creates a magnetic field. This is the foundation of every electric motor. A changing magnetic field induces an electric current (Faraday's Law) &mdash; like squeezing toothpaste forces it out. Lenz's Law says the induced current always fights the change that created it &mdash; nature resists disruption.",
    mechanics: `<div class="math-card">
  <p><strong>Right-Hand Rules (RHR):</strong></p>
  <ul>
    <li><strong>RHR 1 (Straight Wire):</strong> Thumb = current <i>I</i>; fingers curl = magnetic field <i>B</i></li>
    <li><strong>RHR 2 (Solenoid):</strong> Fingers curl = current <i>I</i>; thumb = North pole (field <i>B</i>)</li>
    <li><strong>RHR 3 (Force on Charge):</strong> Fingers = velocity <i>v</i>; curl = field <i>B</i>; thumb = force <i>F</i></li>
  </ul>
  <div class="math-equation"><i>F</i> = <i>qvB</i> sin &theta;</div>
</div>
<div class="math-card">
  <p><strong>Electromagnetic Induction:</strong></p>
  <p><strong>Faraday's Law:</strong></p>
  <div class="math-equation">&epsilon; = &minus;<i>N</i> (&Delta;&Phi;<sub><i>B</i></sub> &frasl; &Delta;<i>t</i>)</div>
  <p><strong>Lenz's Law:</strong> Induced current opposes the change in magnetic flux that caused it ("Lenz hates change").</p>
</div>`,
    examRule: "Lenz's Law: \"Lenz hates change.\" If flux increases &rarr; induced current opposes it (reduces it). If flux decreases &rarr; induced current maintains it (increases it).",
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
