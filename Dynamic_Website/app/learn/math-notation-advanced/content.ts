export const lessonContent = {
  "sequence-series-notation": {
    title: "Sequences and Series Notation",
    description: "{aₙ}, Σ(n=1 to ∞), lim(n→∞), convergence notation",
    content: `
      <div class="lesson-content">
        <h2>Sequences and Series</h2>
        <p>Sequences and series are fundamental in calculus, analysis, and applications. They describe ordered lists and their sums.</p>

        <h3>Sequence Notation: {aₙ}</h3>
        <p>A sequence is an ordered list of numbers following a pattern, usually written as {aₙ}.</p>
        <div class="example">
          <strong>Example:</strong>
          <ul>
            <li>{aₙ} = {1, 2, 3, 4, 5, ...} = {n} (the sequence of natural numbers)</li>
            <li>{aₙ} = {1/n} = {1, 1/2, 1/3, 1/4, ...}</li>
            <li>{aₙ} = {(-1)ⁿ} = {-1, 1, -1, 1, ...} (alternating sequence)</li>
            <li>{aₙ} = {2ⁿ} = {2, 4, 8, 16, ...} (exponential growth)</li>
          </ul>
        </div>

        <h3>Limit of a Sequence: lim(n→∞) aₙ</h3>
        <p>This describes what value the sequence approaches as n gets very large.</p>
        <div class="example">
          <strong>Example:</strong>
          <ul>
            <li>lim(n→∞) 1/n = 0 (the sequence 1, 1/2, 1/3, ... approaches 0)</li>
            <li>lim(n→∞) n/(n+1) = 1 (the sequence approaches 1)</li>
            <li>lim(n→∞) 2ⁿ = ∞ (the sequence grows without bound)</li>
          </ul>
        </div>

        <h3>Convergence</h3>
        <p>A sequence converges if its limit exists and is finite. Otherwise it diverges.</p>
        <div class="example">
          <strong>Example:</strong>
          <ul>
            <li>{1/n} converges to 0</li>
            <li>{n²} diverges (grows to infinity)</li>
            <li>{sin(n)} diverges (oscillates, no limit)</li>
          </ul>
        </div>

        <h3>Series Notation: Σ</h3>
        <p>A series is the sum of a sequence's terms.</p>
        <div class="example">
          <strong>Example:</strong>
          <ul>
            <li>∑(n=1 to 5) n = 1+2+3+4+5 = 15 (finite sum)</li>
            <li>∑(n=1 to ∞) 1/n = 1+1/2+1/3+1/4+... (infinite series, this one diverges)</li>
            <li>∑(n=1 to ∞) 1/n² = 1+1/4+1/9+1/16+... (infinite series, converges to π²/6)</li>
          </ul>
        </div>

        <h3>Geometric Series</h3>
        <p>A geometric series has constant ratio between consecutive terms: ∑(n=0 to ∞) arⁿ</p>
        <div class="example">
          <strong>Example:</strong> ∑(n=0 to ∞) (1/2)ⁿ = 1 + 1/2 + 1/4 + 1/8 + ...
          <ul>
            <li>If |r| < 1, the sum converges to a/(1−r)</li>
            <li>∑(n=0 to ∞) (1/2)ⁿ = 1/(1−1/2) = 2</li>
          </ul>
        </div>

        <h3>Notation for Common Series</h3>
        <ul>
          <li><strong>Harmonic Series:</strong> ∑(n=1 to ∞) 1/n (diverges)</li>
          <li><strong>P-Series:</strong> ∑(n=1 to ∞) 1/nᵖ (converges if p > 1)</li>
          <li><strong>Telescoping Series:</strong> Terms cancel, leaving first and last</li>
          <li><strong>Alternating Series:</strong> ∑(n=1 to ∞) (−1)ⁿ·aₙ (terms alternate sign)</li>
        </ul>

        <h3>Convergence Tests</h3>
        <p>Several tests determine if a series converges:</p>
        <ul>
          <li><strong>Divergence Test:</strong> If lim(n→∞) aₙ ≠ 0, the series diverges</li>
          <li><strong>Geometric Series Test:</strong> ∑arⁿ converges if |r| < 1</li>
          <li><strong>Integral Test:</strong> Compare with an integral</li>
          <li><strong>Comparison Test:</strong> Compare with a known series</li>
          <li><strong>Ratio Test:</strong> lim(n→∞) |aₙ₊₁/aₙ|</li>
        </ul>

        <h3>Power Series</h3>
        <p>A power series is a series of the form: ∑(n=0 to ∞) cₙ(x − a)ⁿ</p>
        <div class="example">
          <strong>Example:</strong> eˣ = ∑(n=0 to ∞) xⁿ/n! = 1 + x + x²/2! + x³/3! + ...
        </div>

        <h3>Notation for Partial Sums</h3>
        <p>The partial sum Sₙ is the sum of first n terms.</p>
        <div class="example">
          <strong>Example:</strong> For ∑ aₙ
          <ul>
            <li>S₁ = a₁</li>
            <li>S₂ = a₁ + a₂</li>
            <li>S₃ = a₁ + a₂ + a₃</li>
            <li>Sₙ = a₁ + a₂ + ... + aₙ</li>
          </ul>
        </div>

        <h3>Key Takeaways</h3>
        <ul>
          <li>{aₙ} denotes a sequence</li>
          <li>lim(n→∞) shows sequence behavior as n → ∞</li>
          <li>∑ represents series (sums of sequences)</li>
          <li>Convergence means the series approaches a finite value</li>
          <li>Different tests determine convergence</li>
          <li>Power series represent functions as infinite polynomials</li>
        </ul>
      </div>
    `,
    practiceProblems: [
      {
        id: 1,
        question: "What does the notation {aₙ} represent?",
        type: "multiple-choice",
        options: [
          { id: "a", text: "A set with one element aₙ", isCorrect: false },
          { id: "b", text: "An ordered list of numbers following a pattern", isCorrect: true },
          { id: "c", text: "A series sum", isCorrect: false },
          { id: "d", text: "The limit of a sequence", isCorrect: false }
        ],
        explanation: "{aₙ} denotes a sequence: an ordered list like {1, 2, 3, ...} or {1, 1/2, 1/3, ...}."
      },
      {
        id: 2,
        question: "What does lim(n→∞) 1/n equal?",
        type: "input",
        correctAnswer: "0",
        hint: "As n gets very large, 1/n gets very small",
        explanation: "The sequence {1/n} = {1, 1/2, 1/3, 1/4, ...} approaches 0 as n approaches infinity."
      },
      {
        id: 3,
        question: "What is ∑(n=1 to 5) n equal to?",
        type: "input",
        correctAnswer: "15",
        hint: "Add 1+2+3+4+5",
        explanation: "∑(n=1 to 5) n = 1+2+3+4+5 = 15. The sigma notation represents summing terms."
      },
      {
        id: 4,
        question: "A sequence converges if its limit exists and is finite.",
        type: "true-false",
        correctAnswer: true,
        explanation: "True. Convergence means the sequence approaches a finite value as n → ∞."
      },
      {
        id: 5,
        question: "What type of series is ∑(n=0 to ∞) (1/2)ⁿ?",
        type: "input",
        correctAnswer: "geometric",
        hint: "There's a constant ratio between consecutive terms",
        explanation: "This is a geometric series with ratio r = 1/2. Since |r| < 1, it converges to 1/(1-1/2) = 2."
      },
      {
        id: 6,
        question: "What does the power series representation eˣ = ∑(n=0 to ∞) xⁿ/n! represent?",
        type: "input",
        correctAnswer: "infinite polynomial",
        acceptableAnswers: ["Taylor series", "function as sum"],
        hint: "Think of expressing a function as an infinite sum",
        explanation: "Power series represent functions as infinite polynomials. This one shows e to the x as a sum of terms."
      }
    ]
  },
  "topology-notation": {
    title: "Topology and Analysis Notation",
    description: "Open sets, closed sets, continuity, and metric spaces",
    content: `
      <div class="lesson-content">
        <h2>Topology and Analysis</h2>
        <p>Topology and analysis formalize concepts of closeness, continuity, and limit behavior. Essential for advanced mathematics.</p>

        <h3>Open and Closed Sets</h3>
        <p>Open set: a set where every point has a neighborhood entirely within the set.</p>
        <p>Closed set: a set that contains all its limit points (complement of open set).</p>
        <div class="example">
          <strong>Example:</strong>
          <ul>
            <li>(0, 1) is open (no endpoints)</li>
            <li>[0, 1] is closed (includes endpoints)</li>
            <li>[0, 1) is neither open nor closed (mixed)</li>
            <li>∅ and ℝ are both open AND closed</li>
          </ul>
        </div>

        <h3>Neighborhood: N(x, ε)</h3>
        <p>A neighborhood of point x is all points within distance ε of x.</p>
        <div class="example">
          <strong>Example:</strong>
          <ul>
            <li>N(x, ε) = {y : |y − x| < ε} (open ball in real line)</li>
            <li>N(2, 0.5) = (1.5, 2.5)</li>
            <li>In 2D: N(p, r) is a circle of radius r centered at p</li>
          </ul>
        </div>

        <h3>Distance/Metric: d(x, y)</h3>
        <p>The distance between two points (generalizes absolute value).</p>
        <div class="example">
          <strong>Example:</strong>
          <ul>
            <li>Euclidean distance: d(x,y) = √((x₁−y₁)² + (x₂−y₂)²)</li>
            <li>Manhattan distance: d(x,y) = |x₁−y₁| + |x₂−y₂|</li>
            <li>Properties: d(x,y) ≥ 0, d(x,y) = 0 iff x = y, triangle inequality</li>
          </ul>
        </div>

        <h3>Metric Space: (X, d)</h3>
        <p>A set X with a distance function d that satisfies metric properties.</p>
        <div class="example">
          <strong>Example:</strong>
          <ul>
            <li>(ℝ, |·|) is the real numbers with absolute value distance</li>
            <li>(ℝ², Euclidean) is 2D space with standard distance</li>
            <li>(C, |·|) is complex numbers with absolute value</li>
          </ul>
        </div>

        <h3>Limit Point/Accumulation Point</h3>
        <p>Point x is a limit point of set S if every neighborhood of x contains points of S (other than x).</p>
        <div class="example">
          <strong>Example:</strong>
          <ul>
            <li>Every point in [0, 1] is a limit point of [0, 1]</li>
            <li>1 is a limit point of (0, 1) (even though 1 isn't in the set)</li>
            <li>0 is NOT a limit point of (0, 1)</li>
          </ul>
        </div>

        <h3>Continuous Functions</h3>
        <p>Function f is continuous at x if: for all ε > 0, ∃δ > 0 such that |y − x| < δ ⟹ |f(y) − f(x)| < ε</p>
        <div class="example">
          <strong>Example:</strong>
          <ul>
            <li>f(x) = x is continuous everywhere</li>
            <li>f(x) = 1/x is continuous everywhere except at x = 0</li>
            <li>Discontinuity: jump, removable, infinite, or oscillating</li>
          </ul>
        </div>

        <h3>Compactness</h3>
        <p>A set is compact if every open cover has a finite subcover (roughly: "closed and bounded").</p>
        <div class="example">
          <strong>Example:</strong>
          <ul>
            <li>[a, b] is compact (Heine-Borel theorem)</li>
            <li>(0, 1) is NOT compact (not closed)</li>
            <li>Important: continuous functions map compact sets to compact sets</li>
          </ul>
        </div>

        <h3>Uniform Continuity</h3>
        <p>f is uniformly continuous on S if: for all ε > 0, ∃δ > 0 such that |y − x| < δ ⟹ |f(y) − f(x)| < ε for ALL x,y in S.</p>
        <div class="example">
          <strong>Difference from regular continuity:</strong>
          <ul>
            <li>Regular continuity: δ can depend on x</li>
            <li>Uniform continuity: δ works for all x</li>
            <li>Continuous on compact sets is uniformly continuous</li>
          </ul>
        </div>

        <h3>Completeness</h3>
        <p>A metric space is complete if every Cauchy sequence converges.</p>
        <div class="example">
          <strong>Example:</strong>
          <ul>
            <li>ℝ is complete</li>
            <li>ℚ (rationals) is NOT complete</li>
            <li>Used to define real numbers rigorously</li>
          </ul>
        </div>

        <h3>Key Topology Symbols</h3>
        <ul>
          <li><strong>∘</strong>: interior (largest open set contained in the set)</li>
          <li><strong>−</strong>: closure (smallest closed set containing the set)</li>
          <li><strong>∂S:</strong> boundary (points where every neighborhood contains both S and S^c)</li>
          <li><strong>S^c:</strong> complement (all points not in S)</li>
        </ul>

        <h3>Key Takeaways</h3>
        <ul>
          <li>Open sets have no boundary; closed sets contain their boundaries</li>
          <li>Neighborhoods formalize "closeness"</li>
          <li>Metric spaces generalize distance</li>
          <li>Continuous functions preserve limits</li>
          <li>Compactness is a topological property (closed + bounded in ℝⁿ)</li>
        </ul>
      </div>
    `,
    practiceProblems: [
      {
        id: 1,
        question: "Which interval is open?",
        type: "multiple-choice",
        options: [
          { id: "a", text: "[0, 1]", isCorrect: false },
          { id: "b", text: "(0, 1)", isCorrect: true },
          { id: "c", text: "[0, 1)", isCorrect: false },
          { id: "d", text: "[0, ∞)", isCorrect: false }
        ],
        explanation: "(0, 1) is open because it has no endpoints. [0, 1] is closed, [0, 1) is neither."
      },
      {
        id: 2,
        question: "What does N(x, ε) represent in topology?",
        type: "input",
        correctAnswer: "neighborhood",
        acceptableAnswers: ["epsilon neighborhood", "open ball"],
        hint: "It's all points within a certain distance of x",
        explanation: "N(x, ε) = {y : |y - x| < ε} is the neighborhood of x with radius ε."
      },
      {
        id: 3,
        question: "Is the set ℝ (all real numbers) both open and closed?",
        type: "true-false",
        correctAnswer: true,
        explanation: "True. ℝ is both open and closed in topology. Also, the empty set ∅ is both open and closed."
      },
      {
        id: 4,
        question: "What is a metric space?",
        type: "input",
        correctAnswer: "set with distance function",
        acceptableAnswers: ["set with metric", "space with distance defined"],
        hint: "Think of it as a generalization of the distance concept",
        explanation: "A metric space is a set with a distance function (metric) d(x,y) that satisfies properties like symmetry and triangle inequality."
      },
      {
        id: 5,
        question: "A function f is continuous if it preserves limits.",
        type: "true-false",
        correctAnswer: true,
        explanation: "True. f is continuous if lim(x→a) f(x) = f(a). Continuous functions preserve limit behavior."
      },
      {
        id: 6,
        question: "In ℝⁿ, a set is compact if it is both closed and what?",
        type: "input",
        correctAnswer: "bounded",
        hint: "Think of a finite 'size' property",
        explanation: "In ℝⁿ, a set is compact if and only if it's closed AND bounded. E.g., [0,1] is compact; [0,∞) is not."
      }
    ]
  },
  "linear-transformations": {
    title: "Linear Transformations Notation",
    description: "Function spaces, eigenvalues, characteristic polynomials",
    content: `
      <div class="lesson-content">
        <h2>Linear Transformations and Advanced Linear Algebra</h2>
        <p>Linear transformations connect linear algebra to functional analysis and provide powerful tools for understanding systems.</p>

        <h3>Linear Transformation: T: V → W</h3>
        <p>A linear transformation preserves addition and scalar multiplication.</p>
        <div class="example">
          <strong>Properties:</strong>
          <ul>
            <li>T(u + v) = T(u) + T(v) (additivity)</li>
            <li>T(cv) = cT(v) for scalar c (homogeneity)</li>
            <li>Example: T(x,y) = (x+y, 2x) is linear</li>
            <li>Example: T(x) = x² is NOT linear</li>
          </ul>
        </div>

        <h3>Kernel (Null Space): ker(T) or N(T)</h3>
        <p>The kernel is the set of all vectors that map to zero.</p>
        <div class="example">
          <strong>Example:</strong>
          <ul>
            <li>ker(T) = {v : T(v) = 0}</li>
            <li>If T(x,y) = x+y, then ker(T) = {(t, -t) : t ∈ ℝ}</li>
            <li>T is injective (one-to-one) iff ker(T) = {0}</li>
          </ul>
        </div>

        <h3>Image (Range): Im(T) or R(T)</h3>
        <p>The image is the set of all possible outputs.</p>
        <div class="example">
          <strong>Example:</strong>
          <ul>
            <li>Im(T) = {T(v) : v ∈ V}</li>
            <li>T is surjective (onto) iff Im(T) = W</li>
            <li>T is bijective iff it's injective and surjective</li>
          </ul>
        </div>

        <h3>Rank and Nullity</h3>
        <p>These measure the "size" of the image and kernel.</p>
        <div class="example">
          <strong>Example:</strong>
          <ul>
            <li>rank(T) = dim(Im(T)) (dimension of image)</li>
            <li>nullity(T) = dim(ker(T)) (dimension of kernel)</li>
            <li>Rank-Nullity Theorem: rank(T) + nullity(T) = dim(V)</li>
          </ul>
        </div>

        <h3>Eigenvalues and Eigenvectors (Review)</h3>
        <p>For a square matrix A, λ is an eigenvalue with eigenvector v if: Av = λv</p>
        <div class="example">
          <strong>Interpretation:</strong>
          <ul>
            <li>v is a direction that doesn't change under T</li>
            <li>λ is the scaling factor</li>
            <li>λ = 1: v stays the same</li>
            <li>λ = 0: v maps to zero (in kernel)</li>
            <li>λ < 0: v reverses direction</li>
          </ul>
        </div>

        <h3>Characteristic Polynomial</h3>
        <p>Used to find eigenvalues: det(A − λI) = 0</p>
        <div class="example">
          <strong>Example:</strong> For A = [2 1], characteristic polynomial is:
                                        [0 3]
          <ul>
            <li>det([2−λ 1  ]) = (2−λ)(3−λ) = λ² − 5λ + 6 = 0</li>
            <li>      [0   3−λ]</li>
            <li>Eigenvalues: λ = 2 and λ = 3</li>
          </ul>
        </div>

        <h3>Diagonalization</h3>
        <p>A matrix A is diagonalizable if A = PDP⁻¹ where D is diagonal.</p>
        <div class="example">
          <strong>Meaning:</strong>
          <ul>
            <li>P contains eigenvectors as columns</li>
            <li>D contains eigenvalues on diagonal</li>
            <li>Makes computation easier: Aⁿ = PDⁿP⁻¹</li>
            <li>Not all matrices are diagonalizable</li>
          </ul>
        </div>

        <h3>Vector Spaces and Subspaces</h3>
        <p>A vector space V has properties:</p>
        <ul>
          <li>Closure under addition: u + v ∈ V</li>
          <li>Closure under scalar multiplication: cu ∈ V</li>
          <li>Contains zero vector: 0 ∈ V</li>
          <li>Contains additive inverses: −v ∈ V</li>
        </ul>

        <h3>Basis and Dimension</h3>
        <p>A basis is a minimal spanning set. Dimension is the number of basis vectors.</p>
        <div class="example">
          <strong>Example:</strong>
          <ul>
            <li>Basis of ℝ²: {(1,0), (0,1)}, dimension = 2</li>
            <li>Basis of ℝⁿ: standard basis has n vectors, dimension = n</li>
            <li>Basis of polynomial space P₃: {1, x, x², x³}, dimension = 4</li>
          </ul>
        </div>

        <h3>Function Spaces</h3>
        <p>Vector spaces of functions:</p>
        <ul>
          <li><strong>C[a,b]:</strong> continuous functions on [a,b]</li>
          <li><strong>C^n[a,b]:</strong> n-times differentiable functions</li>
          <li><strong>L²:</strong> square-integrable functions (used in Fourier analysis)</li>
        </ul>

        <h3>Key Takeaways</h3>
        <ul>
          <li>Linear transformations preserve vector operations</li>
          <li>ker(T) and Im(T) describe the transformation's structure</li>
          <li>Eigenvalues/eigenvectors show "special" directions</li>
          <li>Diagonalization simplifies computation</li>
          <li>Function spaces extend vector concepts to infinite dimensions</li>
        </ul>
      </div>
    `,
    practiceProblems: [
      {
        id: 1,
        question: "What is an eigenvalue?",
        type: "multiple-choice",
        options: [
          { id: "a", text: "A special vector of a matrix", isCorrect: false },
          { id: "b", text: "A scalar λ such that Av = λv for eigenvector v", isCorrect: true },
          { id: "c", text: "The determinant of a matrix", isCorrect: false },
          { id: "d", text: "A transformation that scales a vector", isCorrect: false }
        ],
        explanation: "An eigenvalue λ is a scalar where Av = λv. The vector v is the corresponding eigenvector."
      },
      {
        id: 2,
        question: "What is the characteristic equation used for?",
        type: "input",
        correctAnswer: "finding eigenvalues",
        acceptableAnswers: ["det(A - λI) = 0", "solve for λ"],
        hint: "It's related to det(A - λI)",
        explanation: "The characteristic equation det(A - λI) = 0 is solved to find all eigenvalues of matrix A."
      },
      {
        id: 3,
        question: "What does diagonalization accomplish?",
        type: "input",
        correctAnswer: "simplifies computation",
        acceptableAnswers: ["rewrites matrix in diagonal form", "A = PDP⁻¹"],
        hint: "Think of expressing A in a simpler form",
        explanation: "Diagonalization rewrites A = PDP⁻¹ where D is diagonal, making powers of A easier to compute."
      },
      {
        id: 4,
        question: "Is every matrix diagonalizable?",
        type: "true-false",
        correctAnswer: false,
        explanation: "False. A matrix is diagonalizable only if it has n linearly independent eigenvectors (for n×n matrix)."
      },
      {
        id: 5,
        question: "What is a function space?",
        type: "input",
        correctAnswer: "space of functions",
        acceptableAnswers: ["vector space of functions", "set of functions with operations"],
        hint: "It extends the concept of vector spaces to functions",
        explanation: "A function space is a vector space where 'vectors' are actually functions, with addition and scalar multiplication."
      },
      {
        id: 6,
        question: "What is the trace of a matrix?",
        type: "input",
        correctAnswer: "sum of diagonal elements",
        acceptableAnswers: ["tr(A) = Σ aᵢᵢ"],
        hint: "Add the elements on the main diagonal",
        explanation: "The trace tr(A) is the sum of diagonal elements. It equals the sum of all eigenvalues."
      }
    ]
  },
  "advanced-logic": {
    title: "Advanced Logic and Proof Notation",
    description: "Formal proofs, quantifier notation, proof by induction",
    content: `
      <div class="lesson-content">
        <h2>Advanced Logic and Proof Techniques</h2>
        <p>Formal proofs require precise logical notation and rigorous reasoning. These techniques verify mathematical truth.</p>

        <h3>Formal Proof Structure</h3>
        <p>A proof consists of assumptions, logical steps, and conclusion:</p>
        <div class="example">
          <strong>Format:</strong>
          <ol>
            <li><strong>Hypothesis/Assumption:</strong> "Suppose..." or "Let..."</li>
            <li><strong>Logical steps:</strong> Each follows from previous</li>
            <li><strong>Conclusion:</strong> "Therefore..." or "∴"</li>
          </ol>
        </div>

        <h3>Direct Proof</h3>
        <p>Assume the hypothesis true, then derive the conclusion through logic.</p>
        <div class="example">
          <strong>Example:</strong> Prove: If n is even, then n² is even.
          <ul>
            <li>Assume n is even, so n = 2k for some integer k</li>
            <li>Then n² = (2k)² = 4k² = 2(2k²)</li>
            <li>Since 2k² is an integer, n² is even ∴</li>
          </ul>
        </div>

        <h3>Proof by Contradiction (Reductio ad Absurdum)</h3>
        <p>Assume the negation of what we want to prove, then derive a contradiction.</p>
        <div class="example">
          <strong>Example:</strong> Prove: √2 is irrational.
          <ul>
            <li>Assume √2 is rational, so √2 = p/q (p, q coprime)</li>
            <li>Then 2 = p²/q², so 2q² = p²</li>
            <li>This means p² is even, so p is even: p = 2m</li>
            <li>Substituting: 2q² = 4m², so q² = 2m² (q is even)</li>
            <li>But p and q can't both be even (contradiction!)</li>
            <li>Therefore √2 is irrational ∴</li>
          </ul>
        </div>

        <h3>Proof by Induction</h3>
        <p>Prove a statement P(n) for all natural numbers n:</p>
        <ol>
          <li><strong>Base case:</strong> Show P(1) is true</li>
          <li><strong>Inductive step:</strong> Show: P(k) ⟹ P(k+1)</li>
          <li><strong>Conclusion:</strong> P(n) is true for all n ∈ ℕ</li>
        </ol>
        <div class="example">
          <strong>Example:</strong> Prove: ∑(i=1 to n) i = n(n+1)/2
          <ul>
            <li>Base: n=1: 1 = 1(2)/2 ✓</li>
            <li>Inductive: Assume ∑(i=1 to k) i = k(k+1)/2</li>
            <li>Then ∑(i=1 to k+1) i = k(k+1)/2 + (k+1) = (k+1)(k+2)/2 ✓</li>
            <li>∴ True for all n</li>
          </ul>
        </div>

        <h3>Logical Equivalences</h3>
        <p>Two statements are equivalent if they always have the same truth value.</p>
        <div class="example">
          <strong>Example:</strong>
          <ul>
            <li>p ⟹ q ≡ ¬p ∨ q (implication as disjunction)</li>
            <li>¬(p ∧ q) ≡ ¬p ∨ ¬q (De Morgan's law)</li>
            <li>p ⟺ q ≡ (p ⟹ q) ∧ (q ⟹ p)</li>
          </ul>
        </div>

        <h3>Contraposit
      {
        id: 1,
        question: "What is proof by contradiction?",
        type: "multiple-choice",
        options: [
          { id: "a", text: "Assuming the result and showing it works", isCorrect: false },
          { id: "b", text: "Assuming the negation and deriving a contradiction", isCorrect: true },
          { id: "c", text: "Proving related simpler cases first", isCorrect: false },
          { id: "d", text: "Showing two things are equal", isCorrect: false }
        ],
        explanation: "In proof by contradiction, assume ¬p and derive a contradiction, thereby proving p."
      },
      {
        id: 2,
        question: "What is the contrapositive of 'If n is even, then n² is even'?",
        type: "input",
        correctAnswer: "If n² is odd, then n is odd",
        acceptableAnswers: ["If n² is not even, then n is not even"],
        hint: "Negate both sides and flip the implication",
        explanation: "The contrapositive of p ⟹ q is ¬q ⟹ ¬p. They're logically equivalent."
      },
      {
        id: 3,
        question: "What is a counterexample used for?",
        type: "input",
        correctAnswer: "disprove a universal claim",
        acceptableAnswers: ["show a statement is false", "∃ case where statement fails"],
        hint: "It's one example that breaks a claim",
        explanation: "A counterexample disproves ∀ claims by showing at least one case where the statement is false."
      },
      {
        id: 4,
        question: "Is the contrapositive of a true statement also true?",
        type: "true-false",
        correctAnswer: true,
        explanation: "True. A statement p ⟹ q and its contrapositive ¬q ⟹ ¬p are logically equivalent."
      },
      {
        id: 5,
        question: "In mathematical induction, what are the two parts of the proof?",
        type: "input",
        correctAnswer: "base case and inductive step",
        acceptableAnswers: ["base case, inductive hypothesis, inductive step"],
        hint: "First show it works for a starting case, then show if it works for k it works for k+1",
        explanation: "Mathematical induction requires: (1) Base case: prove for n=1, (2) Inductive step: prove if true for n, then true for n+1."
      },
      {
        id: 6,
        question: "What does ∴ mean in a proof?",
        type: "input",
        correctAnswer: "therefore",
        acceptableAnswers: ["so", "it follows"],
        hint: "It indicates a conclusion from previous statements",
        explanation: "∴ means 'therefore' and indicates the conclusion that follows from prior logical steps."
      }
    ive</h3>
        <p>p ⟹ q is logically equivalent to ¬q ⟹ ¬p</p>
        <div class="example">
          <strong>Example:</strong>
          <ul>
            <li>Original: "If it's raining, then the ground is wet"</li>
            <li>Contrapositive: "If the ground is not wet, then it's not raining" (same truth!)</li>
            <li>NOT logically equivalent to converse: "If ground is wet, then it's raining"</li>
          </ul>
        </div>

        <h3>Proof by Cases</h3>
        <p>Prove by checking all possible cases:</p>
        <div class="example">
          <strong>Example:</strong> Prove: For any integer n, n² ≥ 0
          <ul>
            <li>Case 1: n > 0, then n² > 0 ✓</li>
            <li>Case 2: n = 0, then n² = 0 ✓</li>
            <li>Case 3: n < 0, then n² > 0 ✓</li>
            <li>∴ n² ≥ 0 for all integers</li>
          </ul>
        </div>

        <h3>Counterexample</h3>
        <p>To disprove a universal statement ∀x P(x), find one x where P(x) is false.</p>
        <div class="example">
          <strong>Example:</strong> "All primes are odd" is FALSE
          <ul>
            <li>Counterexample: 2 is prime and even</li>
          </ul>
        </div>

        <h3>Well-Ordering Principle</h3>
        <p>Every non-empty set of natural numbers has a smallest element.</p>
        <p>Used in: strong induction, greatest common divisor proofs, etc.</p>

        <h3>Proof Verification Checklist</h3>
        <ul>
          <li>✓ All steps logically follow from previous ones</li>
          <li>✓ No circular reasoning (assuming what we're proving)</li>
          <li>✓ All variables properly introduced and defined</li>
          <li>✓ Conclusion clearly stated and follows from proof</li>
          <li>✓ No unjustified leaps or missing steps</li>
        </ul>

        <h3>Key Takeaways</h3>
        <ul>
          <li>Direct proof: assume hypothesis, derive conclusion</li>
          <li>Proof by contradiction: assume negation, find contradiction</li>
          <li>Induction: base case + inductive step</li>
          <li>Contrapositive: p ⟹ q ≡ ¬q ⟹ ¬p</li>
          <li>Counterexample disproves universal claims</li>
          <li>Rigorous proofs require careful logical steps</li>
        </ul>
      </div>
    `,
    practiceProblems: []
  },
  "notation-in-context": {
    title: "Notation in Applications",
    description: "Using advanced notation in algorithms, ML, and cryptography",
    content: `
      <div class="lesson-content">
        <h2>Advanced Notation in Real Applications</h2>
        <p>This lesson ties together various notations and shows how they're used in modern applications.</p>

        <h3>Big-O Notation in Algorithms</h3>
        <p>O(f(n)) describes how algorithm time/space scales with input size n.</p>
        <div class="example">
          <strong>Common Classes:</strong>
          <ul>
            <li>O(1): Constant time (lookup in hash table)</li>
            <li>O(log n): Logarithmic (binary search)</li>
            <li>O(n): Linear (simple loop)</li>
            <li>O(n log n): Linearithmic (efficient sorting)</li>
            <li>O(n²): Quadratic (nested loops, bubble sort)</li>
            <li>O(2ⁿ): Exponential (exponential search)</li>
            <li>O(n!): Factorial (permutations)</li>
          </ul>
        </div>
        <div class="example">
          <strong>Example:</strong> Searching an array of size n
          <ul>
            <li>Linear search: O(n) operations needed in worst case</li>
            <li>Binary search: O(log₂ n) operations</li>
            <li>Hash table lookup: O(1) average case</li>
          </ul>
        </div>

        <h3>Matrix Operations in Machine Learning</h3>
        <p>ML uses linear algebra extensively:</p>
        <div class="example">
          <strong>Example:</strong> Neural network forward pass
          <ul>
            <li>Input: X ∈ ℝ^(m×n) (m samples, n features)</li>
            <li>Weight matrix: W ∈ ℝ^(n×k) (n inputs, k outputs)</li>
            <li>Output: Y = XW ∈ ℝ^(m×k)</li>
            <li>Added bias: Y = XW + b</li>
            <li>Activation: Z = σ(Y) (σ is sigmoid or ReLU)</li>
          </ul>
        </div>

        <h3>Probability in Machine Learning</h3>
        <p>ML often deals with probabilistic models:</p>
        <div class="example">
          <strong>Example:</strong> Bayesian classification
          <ul>
            <li>Prior: P(class)</li>
            <li>Likelihood: P(data | class)</li>
            <li>Posterior: P(class | data) = P(data | class)P(class) / P(data)</li>
            <li>Decision: argmax(P(class | data))</li>
          </ul>
        </div>

        <h3>Optimization in Machine Learning</h3>
        <p>Training involves optimizing a loss function:</p>
        <div class="example">
          <strong>Example:</strong> Gradient descent
          <ul>
            <li>Objective: min(L(θ)) where L is loss function, θ are parameters</li>
            <li>Gradient: ∇L(θ) = [∂L/∂θ₁, ∂L/∂θ₂, ...]</li>
            <li>Update: θ_new = θ_old − α∇L(θ) (α is learning rate)</li>
            <li>Repeat until ∇L(θ) ≈ 0 (convergence)</li>
          </ul>
        </div>

        <h3>Cryptography and Number Theory</h3>
        <p>Cryptographic systems rely on number theory:</p>
        <div class="example">
          <strong>Example:</strong> RSA encryption
          <ul>
            <li>Choose primes p, q, compute n = pq</li>
            <li>Public key: (e, n)</li>
            <li>Encryption: C ≡ M^e (mod n)</li>
            <li>Decryption: M ≡ C^d (mod n)</li>
            <li>Security relies on difficulty of factoring n</li>
          </ul>
        </div>

        <h3>Information Theory Notation</h3>
        <p>Shannon entropy measures information content:</p>
        <div class="example">
          <strong>Example:</strong> Binary entropy
          <ul>
            <li>H(X) = −∑ P(x) log₂(P(x)) (bits)</li>
            <li>H = 0 if all probability on one outcome</li>
            <li>H = 1 for fair coin (maximum entropy)</li>
            <li>Mutual information: I(X;Y) measures dependence</li>
          </ul>
        </div>

        <h3>Complex Systems Notation</h3>
        <p>Differential equations model dynamic systems:</p>
        <div class="example">
          <strong>Example:</strong> Population growth
          <ul>
            <li>dp/dt = rp(1 − p/K) (logistic growth)</li>
            <li>p is population, t is time</li>
            <li>r is growth rate, K is carrying capacity</li>
            <li>Solution involves integration and solving DEs</li>
          </ul>
        </div>

        <h3>Notation Summary Table</h3>
        <table>
          <tr>
            <td><strong>Domain</strong></td>
            <td><strong>Key Notation</strong></td>
            <td><strong>Meaning</strong></td>
          </tr>
          <tr>
            <td>Algorithms</td>
            <td>O(f(n))</td>
            <td>Time/space complexity</td>
          </tr>
          <tr>
            <td>Linear Algebra</td>
            <td>A^T, ||x||, Av</td>
            <td>Transpose, norm, transform</td>
          </tr>
          <tr>
            <td>Calculus</td>
            <td>∂L/∂θ, ∫f(x)dx</td>
            <td>Partial derivative, integral</td>
          </tr>
          <tr>
            <td>Probability</td>
            <td>P(A|B), E[X]</td>
            <td>Conditional probability, expectation</td>
          </tr>
          <tr>
            <td>Logic</td>
            <td>∀, ∃, ⟹, ⟺</td>
            <td>Quantifiers and conditionals</td>
          </tr>
        </table>

        <h3>Key Takeaways</h3>
        <ul>
          <li>Big-O notation analyzes algorithm efficiency</li>
          <li>Linear algebra powers machine learning</li>
          <li>Calculus enables optimization</li>
          <li>Probability handles uncertainty</li>
          <li>Cryptography uses number theory</li>
          <li>Understanding notation is key to reading research papers and documentation</li>
        </ul>
      </div>
    `,
    practiceProblems: [
      {
        id: 1,
        question: "What does the limit notation lim(n→∞) f(n) represent?",
        type: "multiple-choice",
        options: [
          { id: "a", text: "The value f(n) approaches as n increases indefinitely", isCorrect: true },
          { id: "b", text: "The maximum value of f(n)", isCorrect: false },
          { id: "c", text: "The derivative of f(n)", isCorrect: false },
          { id: "d", text: "The value of f at infinity", isCorrect: false }
        ],
        explanation: "The limit describes what value a function approaches as the input approaches some value."
      },
      {
        id: 2,
        question: "Calculate: lim(n→∞) 1/n",
        type: "input",
        correctAnswer: "0",
        hint: "As n gets larger and larger, 1/n gets smaller and smaller.",
        explanation: "As n approaches infinity, 1/n approaches 0."
      },
      {
        id: 3,
        question: "The integral symbol ∫ represents summation",
        type: "true-false",
        correctAnswer: false,
        explanation: "Incorrect. ∫ represents integration, which is the reverse of differentiation. Integration finds the area under a curve, though it is related to continuous summation."
      },
      {
        id: 4,
        question: "∇f (nabla f) is the:",
        type: "multiple-choice",
        options: [
          { id: "a", text: "Inverse of f", isCorrect: false },
          { id: "b", text: "Gradient of f", isCorrect: true },
          { id: "c", text: "Limit of f", isCorrect: false },
          { id: "d", text: "Determinant of f", isCorrect: false }
        ],
        explanation: "∇f (gradient) is a vector pointing in the direction of steepest increase of function f."
      },
      {
        id: 5,
        question: "If det(A) = 0, the matrix A is:",
        type: "input",
        correctAnswer: "singular",
        acceptableAnswers: ["non-invertible", "degenerate"],
        hint: "When a matrix's determinant is zero, it doesn't have an inverse.",
        explanation: "A matrix with determinant 0 is singular (non-invertible) and has no unique inverse."
      },
      {
        id: 6,
        question: "The eigenvalue equation is Av = λv, where v is an eigenvector",
        type: "true-false",
        correctAnswer: true,
        explanation: "Correct! This equation defines eigenvectors and eigenvalues: A applied to eigenvector v equals λ times v."
      }
    ]
  }
} as const;

export function getNotationAdvancedLesson(lessonId: string) {
  return lessonContent[lessonId as keyof typeof lessonContent];
}
