export const lessonContent = {
  "logic-notation": {
    title: "Logic and Set Notation",
    description: "∀, ∃, ∧, ∨, ¬, ⟹, ⟺, ∅, ℝ, ℤ, ℕ",
    content: `
      <div class="lesson-content">
        <h2>Logical Notation</h2>
        <p>Logical notation allows us to express complex mathematical statements precisely and compactly.</p>

        <h3>Universal Quantifier: ∀ (For All)</h3>
        <p>∀ means "for all" or "for every." It indicates a statement is true for all elements in a set.</p>
        <div class="example">
          <strong>Example:</strong>
          <ul>
            <li>∀x ∈ ℝ, x² ≥ 0 (For all real numbers x, x squared is non-negative)</li>
            <li>∀n ∈ ℕ, n > 0 (For all natural numbers n, n is greater than zero)</li>
            <li>∀x, y ∈ ℚ, x + y ∈ ℚ (For all rational numbers x and y, their sum is rational)</li>
          </ul>
        </div>

        <h3>Existential Quantifier: ∃ (There Exists)</h3>
        <p>∃ means "there exists" or "there is at least one." It indicates at least one element satisfies the condition.</p>
        <div class="example">
          <strong>Example:</strong>
          <ul>
            <li>∃x ∈ ℝ, x² = 2 (There exists a real number x such that x² = 2, namely √2)</li>
            <li>∃n ∈ ℕ, n is even (There exists a natural number that is even, e.g., 2, 4, 6, ...)</li>
            <li>∃x, x < 0 (There exists at least one x that is negative)</li>
          </ul>
        </div>

        <h3>Logical AND: ∧</h3>
        <p>∧ means both conditions must be true.</p>
        <div class="example">
          <strong>Example:</strong>
          <ul>
            <li>x > 0 ∧ x < 10 (x is greater than 0 AND x is less than 10)</li>
            <li>p ∧ q (both p and q are true)</li>
          </ul>
        </div>

        <h3>Logical OR: ∨</h3>
        <p>∨ means at least one condition is true (or both).</p>
        <div class="example">
          <strong>Example:</strong>
          <ul>
            <li>x < 0 ∨ x > 0 (x is either negative or positive)</li>
            <li>p ∨ q (p is true or q is true, or both)</li>
          </ul>
        </div>

        <h3>Negation: ¬</h3>
        <p>¬ means "not" or "the opposite." It negates a statement.</p>
        <div class="example">
          <strong>Example:</strong>
          <ul>
            <li>¬(x = 5) means x ≠ 5 (x is not equal to 5)</li>
            <li>¬p means "not p"</li>
            <li>¬(x > 0) means x ≤ 0</li>
          </ul>
        </div>

        <h3>Implication: ⟹ (If... Then...)</h3>
        <p>p ⟹ q means "if p then q." If p is true, then q must be true. If p is false, the statement is automatically true.</p>
        <div class="example">
          <strong>Example:</strong>
          <ul>
            <li>x = 2 ⟹ x² = 4 (If x equals 2, then x² equals 4)</li>
            <li>n is even ⟹ n is divisible by 2</li>
            <li>x < −3 ⟹ x < 0 (If x is less than -3, then x is less than 0)</li>
          </ul>
        </div>

        <h3>Biconditional: ⟺ (If and Only If)</h3>
        <p>p ⟺ q means "p if and only if q." Both statements are equivalent; they're true or false together.</p>
        <div class="example">
          <strong>Example:</strong>
          <ul>
            <li>x = 2 ⟺ x² = 4 is FALSE (x could be -2)</li>
            <li>x² = 4 ⟺ x = 2 ∨ x = -2 is TRUE</li>
            <li>n is even ⟺ n = 2k for some integer k (true definition)</li>
          </ul>
        </div>

        <h3>Therefore: ∴ and Since: ∵</h3>
        <p>These symbols are used in logical arguments.</p>
        <div class="example">
          <strong>Example:</strong>
          <ul>
            <li>x > 5 ∵ x ∈ (5, 10) (x is greater than 5 since x is in the interval (5, 10))</li>
            <li>∴ x² > 25 (Therefore x² is greater than 25)</li>
          </ul>
        </div>

        <h3>Number Sets (Review with symbols)</h3>
        <ul>
          <li><strong>ℕ</strong> = {0, 1, 2, 3, ...} (Natural numbers)</li>
          <li><strong>ℤ</strong> = {..., -2, -1, 0, 1, 2, ...} (Integers)</li>
          <li><strong>ℚ</strong> = {p/q | p, q ∈ ℤ, q ≠ 0} (Rational numbers)</li>
          <li><strong>ℝ</strong> = All real numbers on the number line</li>
          <li><strong>ℂ</strong> = All complex numbers a + bi</li>
          <li><strong>∅</strong> = {} (Empty set)</li>
        </ul>

        <h3>De Morgan's Laws</h3>
        <p>Important rules for negating complex statements:</p>
        <ul>
          <li>¬(p ∧ q) = (¬p) ∨ (¬q) (Not (p AND q) = (not p) OR (not q))</li>
          <li>¬(p ∨ q) = (¬p) ∧ (¬q) (Not (p OR q) = (not p) AND (not q))</li>
        </ul>

        <h3>Key Takeaways</h3>
        <ul>
          <li>∀ and ∃ are quantifiers that apply to many elements or at least one</li>
          <li>∧, ∨, ¬ are logical operators</li>
          <li>⟹ and ⟺ show relationships between statements</li>
          <li>∴ and ∵ connect logical steps</li>
          <li>De Morgan's laws help simplify negations of complex statements</li>
        </ul>
      </div>
    `,
    practiceProblems: [
      {
        id: 1,
        question: "What does the universal quantifier ∀ mean?",
        type: "multiple-choice",
        options: [
          { id: "a", text: "There exists", isCorrect: false },
          { id: "b", text: "For all", isCorrect: true },
          { id: "c", text: "Therefore", isCorrect: false },
          { id: "d", text: "Not", isCorrect: false }
        ],
        explanation: "∀ means 'for all' or 'for every.' It indicates a statement is true for all elements in a set."
      },
      {
        id: 2,
        question: "Which statement correctly translates: '∃x ∈ ℝ, x² = 2'?",
        type: "multiple-choice",
        options: [
          { id: "a", text: "For all real x, x² = 2", isCorrect: false },
          { id: "b", text: "There exists a real number x such that x² = 2", isCorrect: true },
          { id: "c", text: "Real numbers don't exist where x² = 2", isCorrect: false },
          { id: "d", text: "If x is real, then x² = 2", isCorrect: false }
        ],
        explanation: "∃ means 'there exists', so this reads 'There exists a real number x such that x² = 2' (namely √2)."
      },
      {
        id: 3,
        question: "Apply De Morgan's law: What is ¬(p ∧ q) equal to?",
        type: "input",
        correctAnswer: "(¬p) ∨ (¬q)",
        acceptableAnswers: ["(not p) or (not q)", "¬p ∨ ¬q"],
        hint: "Think about when 'not (p AND q)' is true",
        explanation: "De Morgan's law: ¬(p ∧ q) = (¬p) ∨ (¬q) - when it's not true that both p and q hold, then at least one is false."
      },
      {
        id: 4,
        question: "Is the statement 'p ⟹ q' false when p is true and q is false?",
        type: "true-false",
        correctAnswer: true,
        explanation: "True. An implication p ⟹ q is false only when p is true and q is false. In all other cases it's true."
      },
      {
        id: 5,
        question: "What does p ⟺ q mean?",
        type: "input",
        correctAnswer: "p if and only if q",
        acceptableAnswers: ["p equals q", "p and q are equivalent", "bidirectional implication"],
        hint: "Think of this as p and q going together",
        explanation: "p ⟺ q means 'p if and only if q' - both statements are equivalent; they're true or false together."
      },
      {
        id: 6,
        question: "Rewrite using logical notation: 'x is positive AND x is less than 10'",
        type: "input",
        correctAnswer: "(x > 0) ∧ (x < 10)",
        acceptableAnswers: ["x > 0 ∧ x < 10"],
        hint: "Use > for 'positive' and the AND symbol",
        explanation: "In logical notation: (x > 0) ∧ (x < 10). The ∧ represents the word AND."
      }
    ]
  },
  "calculus-notation": {
    title: "Calculus Notation",
    description: "Limits, derivatives, integrals: lim, d/dx, ∫, ∂",
    content: `
      <div class="lesson-content">
        <h2>Calculus Notation</h2>
        <p>Calculus notation describes rates of change and accumulation. These symbols are foundational for advanced mathematics and applications.</p>

        <h3>Limits: lim</h3>
        <p>The limit describes what value a function approaches as the input approaches some value.</p>
        <div class="example">
          <strong>Example:</strong>
          <ul>
            <li>lim(x→2) x² = 4 (As x approaches 2, x² approaches 4)</li>
            <li>lim(x→∞) 1/x = 0 (As x approaches infinity, 1/x approaches 0)</li>
            <li>lim(x→0) sin(x)/x = 1 (A famous limit in calculus)</li>
          </ul>
        </div>

        <h3>Derivative: d/dx or f'(x) or ∇f</h3>
        <p>The derivative measures the rate of change of a function at a point—the slope of the tangent line.</p>
        <div class="example">
          <strong>Example:</strong>
          <ul>
            <li>If f(x) = x², then f'(x) = 2x (the derivative of x² is 2x)</li>
            <li>d/dx(sin(x)) = cos(x) (the derivative of sin(x) is cos(x))</li>
            <li>df/dx tells us how much f changes when x changes slightly</li>
          </ul>
        </div>

        <h3>Second Derivative: d²/dx² or f''(x)</h3>
        <p>The second derivative is the derivative of the derivative. It measures acceleration or concavity.</p>
        <div class="example">
          <strong>Example:</strong>
          <ul>
            <li>If f(x) = x³, then f'(x) = 3x² and f''(x) = 6x</li>
            <li>f''(x) > 0 means the function is concave up (smiling)</li>
            <li>f''(x) < 0 means the function is concave down (frowning)</li>
          </ul>
        </div>

        <h3>Partial Derivatives: ∂f/∂x</h3>
        <p>Partial derivatives describe how a function changes with respect to one variable while holding others constant.</p>
        <div class="example">
          <strong>Example:</strong> If f(x,y) = x²y + 3xy²
          <ul>
            <li>∂f/∂x = 2xy + 3y² (derivative with respect to x, treating y as a constant)</li>
            <li>∂f/∂y = x² + 6xy (derivative with respect to y, treating x as a constant)</li>
          </ul>
        </div>

        <h3>Indefinite Integral: ∫</h3>
        <p>Integration is the reverse of differentiation. The integral accumulates areas under curves.</p>
        <div class="example">
          <strong>Example:</strong>
          <ul>
            <li>∫ 2x dx = x² + C (the integral of 2x is x² plus a constant)</li>
            <li>∫ cos(x) dx = sin(x) + C</li>
            <li>The "+C" represents the constant of integration</li>
          </ul>
        </div>

        <h3>Definite Integral: ∫ᵃᵇ</h3>
        <p>A definite integral calculates the area under a curve between two points (a and b).</p>
        <div class="example">
          <strong>Example:</strong>
          <ul>
            <li>∫₀² x² dx = [x³/3]₀² = 8/3 ≈ 2.67 (area under x² from 0 to 2)</li>
            <li>∫ₐᵇ f(x) dx represents the area under f(x) from x=a to x=b</li>
          </ul>
        </div>

        <h3>The Fundamental Theorem of Calculus</h3>
        <p>This connects derivatives and integrals:</p>
        <p>∫ₐᵇ f'(x) dx = f(b) − f(a)</p>
        <p>The integral of a derivative gives you the original function (evaluated at the endpoints).</p>

        <h3>Common Derivatives</h3>
        <ul>
          <li>d/dx(xⁿ) = nxⁿ⁻¹</li>
          <li>d/dx(eˣ) = eˣ</li>
          <li>d/dx(ln(x)) = 1/x</li>
          <li>d/dx(sin(x)) = cos(x)</li>
          <li>d/dx(cos(x)) = −sin(x)</li>
        </ul>

        <h3>Notation Context</h3>
        <p>In applied mathematics, you'll see:</p>
        <ul>
          <li><strong>dy/dt</strong> might represent velocity (change in position over time)</li>
          <li><strong>d²y/dt²</strong> might represent acceleration</li>
          <li><strong>∫ v(t) dt</strong> gives you distance (integral of velocity)</li>
        </ul>

        <h3>Key Takeaways</h3>
        <ul>
          <li>lim describes approaching values</li>
          <li>d/dx and f'(x) represent derivatives (rate of change)</li>
          <li>∂/∂x represents partial derivatives (multivariable calculus)</li>
          <li>∫ represents integration (accumulation)</li>
          <li>Derivatives and integrals are inverse operations</li>
        </ul>
      </div>
    `,
    practiceProblems: [
      {
        id: 1,
        question: "What does lim(x→3) f(x) = 7 mean?",
        type: "multiple-choice",
        options: [
          { id: "a", text: "f(3) = 7", isCorrect: false },
          { id: "b", text: "As x gets close to 3, f(x) gets close to 7", isCorrect: true },
          { id: "c", text: "f(x) equals 7 only when x equals 3", isCorrect: false },
          { id: "d", text: "The limit doesn't exist", isCorrect: false }
        ],
        explanation: "A limit describes what value f(x) approaches as x approaches 3, not necessarily f(3) itself."
      },
      {
        id: 2,
        question: "If f(x) = x², what is f'(x)?",
        type: "input",
        correctAnswer: "2x",
        acceptableAnswers: ["2*x"],
        hint: "Use the power rule: bring the exponent down and reduce it by 1",
        explanation: "The derivative of x² is 2x. This represents the slope (rate of change) at any point."
      },
      {
        id: 3,
        question: "What does ∫ f(x)dx represent?",
        type: "multiple-choice",
        options: [
          { id: "a", text: "The derivative of f(x)", isCorrect: false },
          { id: "b", text: "The area under the curve f(x)", isCorrect: true },
          { id: "c", text: "The slope of f(x)", isCorrect: false },
          { id: "d", text: "The limit of f(x)", isCorrect: false }
        ],
        explanation: "Integration represents accumulation—typically the area under a curve. It's the inverse operation of differentiation."
      },
      {
        id: 4,
        question: "Is d/dx the same as f'(x)?",
        type: "true-false",
        correctAnswer: true,
        explanation: "True. Both notations represent the derivative. d/dx is Leibniz's notation, f'(x) is Lagrange's notation."
      },
      {
        id: 5,
        question: "What is the notation for partial derivative with respect to x?",
        type: "input",
        correctAnswer: "∂/∂x",
        acceptableAnswers: ["∂f/∂x", "partial derivative"],
        hint: "It looks like 'd' but curly",
        explanation: "∂/∂x denotes a partial derivative, used in multivariable calculus to find the rate of change with respect to one variable."
      },
      {
        id: 6,
        question: "If the derivative f'(x) = 0 at a point, what does that typically indicate?",
        type: "input",
        correctAnswer: "local maximum or minimum",
        acceptableAnswers: ["critical point", "flat point", "horizontal tangent"],
        hint: "Think about where the function stops going up or down",
        explanation: "When f'(x) = 0, the tangent line is horizontal, which often indicates a local max or min (critical point)."
      }
    ]
  },
  "linear-algebra-notation": {
    title: "Linear Algebra Notation",
    description: "Vectors, matrices, norms: ||x||, A^T, A^(-1), det(A)",
    content: `
      <div class="lesson-content">
        <h2>Linear Algebra Notation</h2>
        <p>Linear algebra notation describes vectors, matrices, and transformations—essential for computer science, graphics, and machine learning.</p>

        <h3>Vectors: v or v⃗</h3>
        <p>A vector is a quantity with both magnitude and direction, often written in bold or with an arrow.</p>
        <div class="example">
          <strong>Example:</strong>
          <ul>
            <li><strong>v</strong> = [3, 4] (a 2D vector with components 3 and 4)</li>
            <li><strong>u</strong> = [1, -2, 5] (a 3D vector)</li>
            <li>v⃗ · u⃗ represents the dot product of two vectors</li>
          </ul>
        </div>

        <h3>Matrices: A or [aᵢⱼ]</h3>
        <p>A matrix is a rectangular array of numbers arranged in rows and columns.</p>
        <div class="example">
          <strong>Example:</strong> A = [1 2 3]
                                        [4 5 6]
          <ul>
            <li>This is a 2×3 matrix (2 rows, 3 columns)</li>
            <li>a₁₂ = 2 (element in row 1, column 2)</li>
            <li>a₂₃ = 6 (element in row 2, column 3)</li>
          </ul>
        </div>

        <h3>Transpose: Aᵀ or A'</h3>
        <p>The transpose of a matrix flips it along the diagonal (rows become columns, columns become rows).</p>
        <div class="example">
          <strong>Example:</strong> If A = [1 2] then Aᵀ = [1 3]
                                            [3 4]          [2 4]
        </div>

        <h3>Vector Norm: ||v||</h3>
        <p>The norm (or length) of a vector measures its magnitude.</p>
        <div class="example">
          <strong>Example:</strong>
          <ul>
            <li>||v|| = √(v₁² + v₂²) for a 2D vector v = [v₁, v₂]</li>
            <li>If v = [3, 4], then ||v|| = √(9 + 16) = √25 = 5</li>
            <li>For v = [1, -2, 5], ||v|| = √(1 + 4 + 25) = √30 ≈ 5.48</li>
          </ul>
        </div>

        <h3>Dot Product: u · v or ⟨u, v⟩</h3>
        <p>The dot product combines two vectors to produce a scalar (single number).</p>
        <div class="example">
          <strong>Example:</strong> u = [1, 2] and v = [3, 4]
          <ul>
            <li>u · v = (1)(3) + (2)(4) = 3 + 8 = 11</li>
            <li>u · v = ||u|| ||v|| cos(θ), where θ is the angle between the vectors</li>
          </ul>
        </div>

        <h3>Matrix Multiplication: AB</h3>
        <p>Multiplying two matrices produces a new matrix (when dimensions are compatible).</p>
        <div class="example">
          <strong>Example:</strong> If A is 2×3 and B is 3×4, then AB is 2×4
          <ul>
            <li>Element
      {
        id: 1,
        question: "What does the norm ||v|| of a vector v = (3, 4) equal?",
        type: "input",
        correctAnswer: "5",
        hint: "Use the formula √(x² + y²)",
        explanation: "||v|| = √(3² + 4²) = √(9 + 16) = √25 = 5. The norm measures the length of a vector."
      },
      {
        id: 2,
        question: "If A is a matrix, what does Aᵀ represent?",
        type: "multiple-choice",
        options: [
          { id: "a", text: "The inverse of A", isCorrect: false },
          { id: "b", text: "The transpose of A (rows become columns)", isCorrect: true },
          { id: "c", text: "A to the power of T", isCorrect: false },
          { id: "d", text: "The trace of A", isCorrect: false }
        ],
        explanation: "Aᵀ (A transpose) swaps rows and columns. Element (i,j) becomes element (j,i)."
      },
      {
        id: 3,
        question: "What is the matrix A⁻¹?",
        type: "input",
        correctAnswer: "inverse",
        acceptableAnswers: ["A inverse", "the matrix that multiplies A to give identity"],
        hint: "Think of it like division or reciprocals for matrices",
        explanation: "A⁻¹ is the inverse of A. When multiplied with A, it gives the identity matrix: A·A⁻¹ = I."
      },
      {
        id: 4,
        question: "Is a matrix with determinant 0 invertible?",
        type: "true-false",
        correctAnswer: false,
        explanation: "False. If det(A) = 0, the matrix A is singular and not invertible. Only non-zero determinants guarantee invertibility."
      },
      {
        id: 5,
        question: "What is the dimension of a 3×4 matrix?",
        type: "input",
        correctAnswer: "3 by 4",
        acceptableAnswers: ["3x4", "3 rows and 4 columns"],
        hint: "Think rows × columns",
        explanation: "A 3×4 matrix has 3 rows and 4 columns. The dimension tells us the matrix's size."
      },
      {
        id: 6,
        question: "What does the identity matrix I do when multiplied by a matrix A?",
        type: "input",
        correctAnswer: "returns A",
        acceptableAnswers: ["leaves A unchanged", "A", "A·I = A"],
        hint: "It's the matrix equivalent of multiplying by 1",
        explanation: "The identity matrix I leaves any matrix unchanged: A·I = A and I·A = A (just like x·1 = x)."
      }
     (i,j) of AB = dot product of row i of A with column j of B</li>
          </ul>
        </div>

        <h3>Identity Matrix: I</h3>
        <p>The identity matrix is like the number 1 for matrices—multiplying by it doesn't change things.</p>
        <div class="example">
          <strong>Example:</strong> I = [1 0]  (the 2×2 identity matrix)
                                       [0 1]
          <ul>
            <li>Any matrix A multiplied by I equals A: AI = IA = A</li>
          </ul>
        </div>

        <h3>Inverse: A⁻¹</h3>
        <p>The inverse of matrix A (written A⁻¹) is like the reciprocal 1/A.</p>
        <div class="example">
          <strong>Properties:</strong>
          <ul>
            <li>AA⁻¹ = I (a matrix times its inverse gives the identity)</li>
            <li>Not all matrices have inverses (only square invertible matrices)</li>
            <li>Used to solve: Ax = b ⟹ x = A⁻¹b</li>
          </ul>
        </div>

        <h3>Determinant: det(A)</h3>
        <p>The determinant is a number calculated from a square matrix that gives important information about it.</p>
        <div class="example">
          <strong>Example:</strong> For A = [a b]  det(A) = ad − bc
                                        [c d]
          <ul>
            <li>If det(A) = 0, the matrix is singular (not invertible)</li>
            <li>If det(A) ≠ 0, the matrix has an inverse</li>
            <li>det(A) relates to the volume of transformation</li>
          </ul>
        </div>

        <h3>Eigenvalues and Eigenvectors</h3>
        <p>For a square matrix A, λ is an eigenvalue and v is an eigenvector if: Av = λv</p>
        <div class="example">
          <strong>Meaning:</strong>
          <ul>
            <li>When A multiplies the eigenvector v, it just scales v by λ</li>
            <li>λ is a special value (eigenvalue)</li>
            <li>v is a special direction (eigenvector)</li>
          </ul>
        </div>

        <h3>Key Takeaways</h3>
        <ul>
          <li>Vectors have magnitude and direction</li>
          <li>Matrices are rectangular arrays of numbers</li>
          <li>Aᵀ is the transpose (flip rows and columns)</li>
          <li>||v|| measures vector length</li>
          <li>A⁻¹ is the matrix inverse (like 1/A)</li>
          <li>det(A) tells if A is invertible</li>
        </ul>
      </div>
    `,
    practiceProblems: []
  },
  "probability-notation": {
    title: "Probability and Statistics Notation",
    description: "Probability, expectation, variance: P, E, Var, σ, μ",
    content: `
      <div class="lesson-content">
        <h2>Probability and Statistics Notation</h2>
        <p>This notation describes randomness, uncertainty, and data distribution—critical for data science and decision-making.</p>

        <h3>Probability: P(A) or Pr(A)</h3>
        <p>P(A) is the probability that event A occurs. It's a number between 0 and 1 (or 0% to 100%).</p>
        <div class="example">
          <strong>Example:</strong>
          <ul>
            <li>P(Heads) = 0.5 (probability of heads in a fair coin flip)</li>
            <li>P(rolling a 6) = 1/6 ≈ 0.167</li>
            <li>P(rain tomorrow) = 0.3 (according to a forecast)</li>
            <li>P(A) = 0 means A is impossible</li>
            <li>P(A) = 1 means A is certain</li>
          </ul>
        </div>

        <h3>Conditional Probability: P(A|B)</h3>
        <p>P(A|B) is the probability of A given that B has already occurred.</p>
        <div class="example">
          <strong>Example:</strong>
          <ul>
            <li>P(raining tomorrow | clouds today) (probability of rain given cloudy weather)</li>
            <li>P(positive test | disease) (probability of positive test given disease is present)</li>
            <li>Formula: P(A|B) = P(A ∧ B) / P(B)</li>
          </ul>
        </div>

        <h3>Expected Value: E[X] or μ</h3>
        <p>The expected value is the long-run average of a random variable.</p>
        <div class="example">
          <strong>Example:</strong>
          <ul>
            <li>For a fair die: E[X] = 1(1/6) + 2(1/6) + 3(1/6) + 4(1/6) + 5(1/6) + 6(1/6) = 3.5</li>
            <li>E[X] = μ (mu represents the mean/expected value)</li>
            <li>This is the "average" value if we repeat the experiment many times</li>
          </ul>
        </div>

        <h3>Variance: Var(X) or σ²</h3>
        <p>Variance measures how spread out values are from the mean.</p>
        <div class="example">
          <strong>Example:</strong>
          <ul>
            <li>Var(X) = E[(X − μ)²] (average squared deviation from mean)</li>
            <li>High variance = values spread far from the mean</li>
            <li>Low variance = values clustered near the mean</li>
            <li>σ² represents variance (sigma squared)</li>
          </ul>
        </div>

        <h3>Standard Deviation: σ or SD</h3>
        <p>Standard deviation is the square root of variance. It's in the same units as the original data.</p>
        <div class="example">
          <strong>Example:</strong>
          <ul>
            <li>σ = √(Var(X)) = √(σ²)</li>
            <li>If μ = 100 and σ = 15, most values are within 85-115</li>
            <li>In a normal distribution: ~68% of data is within σ of μ, ~95% within 2σ</li>
          </ul>
        </div>

        <h3>Covariance and Correlation</h3>
        <p>These measure how two variables relate to each other.</p>
        <div class="example">
          <strong>Example:</strong>
          <ul>
            <li>Cov(X,Y) = E[(X − μₓ)(Y − μᵧ)] (how X and Y vary together)</li>
            <li>Corr(X,Y) = Cov(X,Y) / (σₓ σᵧ) (correlation ranges from -1 to 1)</li>
            <li>ρ (rho) often represents correlation coefficient</li>
          </ul>
        </div>

        <h3>Random Variable: X or x</h3>
        <p>A random variable is a variable whose value is determined by random events.</p>
        <div class="example">
          <strong>Example:</strong>
          <ul>
            <li>X = outcome of a coin flip (Heads or Tails)</li>
            <li>Y = tomorrow's temperature</li>
            <li>Z = number of customers arriving in an hour</li>
          </ul>
        </div>

        <h3>Probability Distribution: f(x) or P(X = x)</h3>
        <p>Shows all possible values and their probabilities.</p>
        <div class="example">
          <strong>Example:</strong>
          <ul>
            <li>Normal distribution (Gaussian): bell curve shape</li>
            <li>Binomial distribution: number of successes in n trials</li>
            <li>Poisson distribution: count of events in fixed time/space</li>
          </ul>
        </div>

        <h3>Common Probability Rules</h3>
        <ul>
          <li><strong>Addition Rule:</strong> P(A ∪ B) = P(A) + P(B) − P(A ∩ B)</li>
          <li><strong>Multiplication Rule:</strong> P(A ∩ B) = P(A) × P(B|A)</li>
          <li><strong>Complement:</strong> P(¬A) = 1 − P(A)</li>
          <li><strong>Independence:</strong> If A and B are independent: P(A ∩ B) = P(A) × P(B)</li>
        </ul>

        <h3>Hypothesis Testing Notation</h3>
        <ul>
          <li><strong>H₀:</strong> Null hypothesis (assumption we test)</li>
          <li><strong>H₁:</strong> Alternative hypothesis (what we want to prove)</li>
          <li><strong>α:</strong> Significance level (typically 0.05)</li>
          <li><strong>p-value:</strong> Probability of observing data if H₀ is true</li>
        </ul>

        <h3>Key Takeaways</h3>
        <ul>
          <li>P(A) is probability; ranges from 0 to 1</li>
          <li>P(A|B) is conditional probability</li>
          <li>E[X] = μ is the expected value (mean)</li>
          <li>Var(X) = σ² measures variability</li>
          <li>σ is standard deviation</li>
          <li>Probability and statistics quantify uncertainty</li>
        </ul>
      </div>
    `,
    practiceProblems: [
      {
        id: 1,
        question: "What is the truth table result for p ∧ q when both p and q are true?",
        type: "multiple-choice",
        options: [
          { id: "a", text: "True", isCorrect: true },
          { id: "b", text: "False", isCorrect: false },
          { id: "c", text: "Undefined", isCorrect: false },
          { id: "d", text: "Depends on context", isCorrect: false }
        ],
        explanation: "p ∧ q (AND) is true only when BOTH p and q are true."
      },
      {
        id: 2,
        question: "The symbol ∀ means:",
        type: "input",
        correctAnswer: "for all",
        acceptableAnswers: ["for each", "every", "all"],
        hint: "It's a universal quantifier used to indicate that something applies to every element.",
        explanation: "∀ is the universal quantifier meaning 'for all' or 'for every'."
      },
      {
        id: 3,
        question: "∃x means there exists at least one x that satisfies a condition",
        type: "true-false",
        correctAnswer: true,
        explanation: "Correct! ∃ is the existential quantifier meaning 'there exists'."
      },
      {
        id: 4,
        question: "If A = {1, 2, 3} and B = {2, 3, 4}, what is A ∩ B?",
        type: "input",
        correctAnswer: "{2, 3}",
        acceptableAnswers: ["{2,3}", "2, 3", "2,3"],
        hint: "Intersection contains elements that are in BOTH sets.",
        explanation: "A ∩ B contains only the common elements: {2, 3}"
      },
      {
        id: 5,
        question: "The complement of a set A (written A') contains all elements NOT in A",
        type: "true-false",
        correctAnswer: true,
        explanation: "Correct! The complement is the set of all elements outside of A."
      },
      {
        id: 6,
        question: "What operation is represented by ∪?",
        type: "multiple-choice",
        options: [
          { id: "a", text: "Intersection", isCorrect: false },
          { id: "b", text: "Union", isCorrect: true },
          { id: "c", text: "Subset", isCorrect: false },
          { id: "d", text: "Complement", isCorrect: false }
        ],
        explanation: "∪ represents union, which includes all elements from both sets."
      }
    ]
  }
} as const;

export function getNotationIntermediateLesson(lessonId: string) {
  return lessonContent[lessonId as keyof typeof lessonContent];
}
