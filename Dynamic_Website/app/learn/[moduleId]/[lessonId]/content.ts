// Lesson content data
export const lessonContent = {
  "sets-intro": {
    title: "What is a Set?",
    content: `
      <h2>📖 Definition: Set</h2>
      <p>A set is an unordered collection of distinct objects. The objects in a set are called its elements or members.</p>

      <h3>Examples of Sets:</h3>
      <ul>
        <li><strong>Vowels:</strong> {a, e, i, o, u} - the set of English vowels</li>
        <li><strong>Even numbers:</strong> {2, 4, 6, 8, ...} - the set of positive even integers</li>
        <li><strong>Primary colors:</strong> {red, blue, yellow} - the set of primary colors</li>
        <li><strong>Empty set:</strong> {} or ∅ - the set with no elements</li>
      </ul>

      <div class="key-concept">
        <h3>🔑 Key Concepts</h3>
        <ul>
          <li><strong>Elements:</strong> Objects that belong to the set</li>
          <li><strong>Membership:</strong> We use ∈ to show membership (x ∈ A means "x is an element of set A")</li>
          <li><strong>Non-membership:</strong> We use ∉ to show non-membership (x ∉ A means "x is not an element of set A")</li>
          <li><strong>Cardinality:</strong> The number of elements in a set, denoted |A|</li>
        </ul>
      </div>

      <div class="interactive-example">
        <h3>💡 Interactive Example</h3>
        <p>Consider the set A = {1, 2, 3, 4, 5}:</p>
        <ul>
          <li>1 ∈ A ✓</li>
          <li>6 ∉ A ✓</li>
          <li>|A| = 5 ✓</li>
        </ul>
      </div>
    `
  },
  "set-operations": {
    title: "Set Operations",
    content: `
      <h2>🔧 Set Operations</h2>
      <p>Sets can be combined and manipulated using various operations. These operations are fundamental to working with collections of data in computer science.</p>

      <h3>Basic Set Operations:</h3>

      <div class="operation-grid">
        <div class="operation-card">
          <h4>Union (∪)</h4>
          <p>A ∪ B = {x | x ∈ A or x ∈ B}</p>
          <p><strong>Example:</strong> {1, 2, 3} ∪ {3, 4, 5} = {1, 2, 3, 4, 5}</p>
        </div>

        <div class="operation-card">
          <h4>Intersection (∩)</h4>
          <p>A ∩ B = {x | x ∈ A and x ∈ B}</p>
          <p><strong>Example:</strong> {1, 2, 3} ∩ {3, 4, 5} = {3}</p>
        </div>

        <div class="operation-card">
          <h4>Difference (-)</h4>
          <p>A - B = {x | x ∈ A and x ∉ B}</p>
          <p><strong>Example:</strong> {1, 2, 3} - {3, 4, 5} = {1, 2}</p>
        </div>

        <div class="operation-card">
          <h4>Complement (∁)</h4>
          <p>∁A = {x ∈ U | x ∉ A} (where U is the universal set)</p>
          <p><strong>Example:</strong> If U = {1, 2, 3, 4, 5} and A = {1, 3, 5}, then ∁A = {2, 4}</p>
        </div>
      </div>

      <div class="key-concept">
        <h3>🔑 Properties of Set Operations</h3>
        <ul>
          <li><strong>Commutative:</strong> A ∪ B = B ∪ A, A ∩ B = B ∩ A</li>
          <li><strong>Associative:</strong> (A ∪ B) ∪ C = A ∪ (B ∪ C)</li>
          <li><strong>Distributive:</strong> A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)</li>
          <li><strong>Identity:</strong> A ∪ ∅ = A, A ∩ U = A</li>
        </ul>
      </div>
    `
  },
  "special-sets": {
    title: "Special Sets and Properties",
    content: `
      <h2>⭐ Special Sets and Properties</h2>
      <p>Certain sets and relationships between sets have special properties that are important in computer science applications.</p>

      <h3>Special Types of Sets:</h3>

      <div class="key-concept">
        <h4>1. Subset (⊆)</h4>
        <p>A ⊆ B means every element of A is also an element of B.</p>
        <p><strong>Example:</strong> {1, 2} ⊆ {1, 2, 3, 4, 5}</p>
        <p><strong>Proper Subset (⊂):</strong> A ⊂ B means A ⊆ B and A ≠ B</p>
      </div>

      <div class="key-concept">
        <h4>2. Power Set</h4>
        <p>The power set P(A) is the set of all subsets of A.</p>
        <p><strong>Example:</strong> If A = {1, 2}, then P(A) = {∅, {1}, {2}, {1, 2}}</p>
        <p><strong>Cardinality:</strong> |P(A)| = 2<sup>|A|</sup></p>
      </div>

      <div class="interactive-example">
        <h3>💡 Power Set Examples</h3>
        <ul>
          <li>A = ∅ → P(A) = {∅}</li>
          <li>A = {a} → P(A) = {∅, {a}}</li>
          <li>A = {a, b} → P(A) = {∅, {a}, {b}, {a, b}}</li>
        </ul>
      </div>

      <h3>Set Properties:</h3>
      <ul>
        <li><strong>Reflexive:</strong> A ⊆ A for any set A</li>
        <li><strong>Antisymmetric:</strong> If A ⊆ B and B ⊆ A, then A = B</li>
        <li><strong>Transitive:</strong> If A ⊆ B and B ⊆ C, then A ⊆ C</li>
      </ul>
    `
  }
};

export const practiceProblems = {
  1: {
    problem: "Given sets A = {1, 2, 3} and B = {2, 3, 4}, find A ∪ B.",
    solution: "A ∪ B = {1, 2, 3, 4}"
  },
  2: {
    problem: "Given sets A = {1, 2, 3} and B = {2, 3, 4}, find A ∩ B.",
    solution: "A ∩ B = {2, 3}"
  },
  3: {
    problem: "Given sets A = {1, 2, 3} and B = {2, 3, 4}, find A - B.",
    solution: "A - B = {1}"
  },
  4: {
    problem: "Determine if {1, 2} ⊆ {1, 2, 3, 4}.",
    solution: "Yes, {1, 2} ⊆ {1, 2, 3, 4} because every element of the first set is in the second set."
  },
  5: {
    problem: "Find the power set of {a, b}.",
    solution: "P({a, b}) = {∅, {a}, {b}, {a, b}}"
  },
  6: {
    problem: "Given U = {1, 2, 3, 4, 5} and A = {1, 3, 5}, find ∁A.",
    solution: "∁A = {2, 4}"
  }
};