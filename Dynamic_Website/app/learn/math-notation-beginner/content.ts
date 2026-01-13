export const lessonContent = {
  "symbols-basics": {
    title: "Basic Mathematical Symbols",
    description: "Essential operators and symbols (=, +, −, ×, ÷)",
    pages: [
      {
        id: "intro",
        title: "What are Mathematical Symbols?",
        content: `
          <div class="lesson-content">
            <h2>The Language of Mathematics</h2>
            <p>Mathematical notation provides a universal language for expressing mathematical ideas precisely. Just like spoken languages have words and grammar rules, mathematics has symbols and notation conventions.</p>
            
            <h3>Why Learn Mathematical Symbols?</h3>
            <ul>
              <li><strong>Precision:</strong> Symbols allow us to express complex ideas concisely</li>
              <li><strong>Universality:</strong> The same symbols are understood across countries and cultures</li>
              <li><strong>Efficiency:</strong> Writing mathematical expressions is faster and clearer than describing them in words</li>
              <li><strong>Foundation:</strong> Understanding symbols is essential for all advanced mathematics</li>
            </ul>

            <h3>Categories of Mathematical Symbols</h3>
            <p>In this lesson, we'll explore:</p>
            <ul>
              <li>Equality and comparison symbols</li>
              <li>Arithmetic operation symbols</li>
              <li>How these symbols are used in real-world applications</li>
            </ul>
          </div>
        `
      },
      {
        id: "equality",
        title: "The Equality Sign (=)",
        content: `
          <div class="lesson-content">
            <h2>Understanding the Equals Sign</h2>
            <p>The equals sign (=) is one of the most fundamental symbols in mathematics. It states that two expressions have the same value.</p>
            
            <h3>What Does = Really Mean?</h3>
            <p>The equals sign doesn't just mean "here comes the answer." It means the value on the left side is identical to the value on the right side.</p>
            
            <div class="example">
              <strong>Examples of Equality:</strong>
              <ul>
                <li>5 + 3 = 8 (Five plus three equals eight)</li>
                <li>x = 10 (x has the value 10)</li>
                <li>2 + 2 = 4 (Two plus two equals four)</li>
                <li>3 × 4 = 12 (Three times four equals twelve)</li>
              </ul>
            </div>

            <h3>Important Principle: Balance</h3>
            <p>Think of = as a balanced scale. Whatever you do to one side, you must do to the other to keep it balanced. This is crucial for solving equations.</p>
            
            <div class="example">
              <strong>Example:</strong> If x + 5 = 12, then x must equal 7 because 7 + 5 = 12
            </div>
          </div>
        `
      },
      {
        id: "arithmetic",
        title: "Arithmetic Operation Symbols",
        content: `
          <div class="lesson-content">
            <h2>The Four Basic Operations</h2>
            <p>These symbols represent the most fundamental mathematical operations you'll encounter.</p>
            
            <h3>Addition (+)</h3>
            <p>The plus sign indicates adding two or more numbers together.</p>
            <div class="example">
              <strong>Examples:</strong>
              <ul>
                <li>2 + 3 = 5 (Two plus three equals five)</li>
                <li>a + b (the sum of a and b)</li>
                <li>10 + 20 + 30 = 60</li>
              </ul>
            </div>

            <h3>Subtraction (−)</h3>
            <p>The minus sign indicates taking one quantity away from another.</p>
            <div class="example">
              <strong>Examples:</strong>
              <ul>
                <li>10 − 3 = 7 (Ten minus three equals seven)</li>
                <li>x − 5 (x minus five)</li>
                <li>100 − 25 − 15 = 60</li>
              </ul>
            </div>

            <h3>Multiplication (×, ·, or just writing variables together)</h3>
            <p>The multiplication sign indicates multiplying two or more numbers.</p>
            <div class="example">
              <strong>Examples:</strong>
              <ul>
                <li>4 × 5 = 20 (Four times five equals twenty)</li>
                <li>3 · 7 = 21 (dot notation, common in algebra)</li>
                <li>2a = 2 × a (just writing them together)</li>
              </ul>
            </div>

            <h3>Division (÷ or /)</h3>
            <p>The division sign indicates splitting something into equal parts.</p>
            <div class="example">
              <strong>Examples:</strong>
              <ul>
                <li>20 ÷ 4 = 5 (Twenty divided by four equals five)</li>
                <li>x / 2 (x divided by two)</li>
                <li>12 ÷ 3 = 4</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "practice",
        title: "Practice & Application",
        content: `
          <div class="lesson-content">
            <h2>Real-World Applications</h2>
            <p>Mathematical symbols aren't just abstract—they're used constantly in real life:</p>
            
            <h3>Money and Finance</h3>
            <p>If you buy an item for $5 and pay with $20, your change is 20 − 5 = 15 dollars.</p>

            <h3>Cooking and Recipes</h3>
            <p>A recipe calling for 2 cups of flour + 1 cup of sugar uses addition.</p>

            <h3>Time Management</h3>
            <p>If a meeting lasts 3 hours and you want to divide attendees into 4 equal groups, each group works 3 ÷ 4 = 0.75 hours on a task.</p>

            <h3>Shopping</h3>
            <p>Buying 3 items at $4 each: 3 × 4 = 12 dollars total.</p>

            <h2>Key Takeaways</h2>
            <ul>
              <li>= means the values on both sides are identical</li>
              <li>+ means addition (combining quantities)</li>
              <li>− means subtraction (removing a quantity)</li>
              <li>× means multiplication (repeated addition)</li>
              <li>÷ means division (splitting into equal parts)</li>
            </ul>
          </div>
        `
      }
    ],
    practiceProblems: [
      {
        id: 1,
        question: "What does the = symbol mean?",
        type: "multiple-choice",
        options: [
          { id: "a", text: "The values on both sides are identical", isCorrect: true },
          { id: "b", text: "The left side is larger", isCorrect: false },
          { id: "c", text: "The right side is smaller", isCorrect: false },
          { id: "d", text: "They are approximately equal", isCorrect: false }
        ],
        explanation: "The equals sign (=) means the expressions on both sides have the same value."
      },
      {
        id: 2,
        question: "Solve: 5 + x = 12. What is x?",
        type: "input",
        correctAnswer: "7",
        hint: "Subtract 5 from both sides",
        explanation: "If 5 + x = 12, then x = 12 - 5 = 7"
      },
      {
        id: 3,
        question: "If you have 20 apples and divide them equally among 4 friends, how many does each friend get?",
        type: "input",
        correctAnswer: "5",
        hint: "Use division: 20 ÷ 4",
        explanation: "20 ÷ 4 = 5 apples per friend"
      },
      {
        id: 4,
        question: "True or False: 3 × 4 = 4 × 3",
        type: "true-false",
        correctAnswer: true,
        explanation: "Correct! Both equal 12. This is the commutative property of multiplication."
      },
      {
        id: 5,
        question: "What is the result of 10 + 5 − 3?",
        type: "input",
        correctAnswer: "12",
        hint: "Work from left to right for addition and subtraction",
        explanation: "10 + 5 = 15, then 15 - 3 = 12"
      },
      {
        id: 6,
        question: "If a book costs $15 and you pay with $50, write an equation for your change.",
        type: "input",
        correctAnswer: "35",
        acceptableAnswers: ["$35", "fifty minus fifteen"],
        hint: "Subtract the cost from the amount paid",
        explanation: "Your change is $50 − $15 = $35"
      }
    ]
  },
  "set-notation": {
    title: "Set Notation",
    description: "Understanding {}, ∈, ∉, ⊂, ⊃, ∪, ∩",
    pages: [
      {
        id: "intro",
        title: "What is a Set?",
        content: `
          <h2>Definition: Set</h2>
          <p>A set is an unordered collection of distinct objects. The objects in a set are called its elements or members.</p>

          <h3>Examples of Sets:</h3>
          <ul>
            <li><strong>Vowels:</strong> {a, e, i, o, u} - the set of English vowels</li>
            <li><strong>Even numbers:</strong> {2, 4, 6, 8, ...} - the set of positive even integers</li>
            <li><strong>Primary colors:</strong> {red, blue, yellow} - the set of primary colors</li>
            <li><strong>Empty set:</strong> {} or ∅ - the set with no elements</li>
          </ul>

          <h3>Key Features of Sets</h3>
          <ul>
            <li><strong>Unordered:</strong> {1, 2, 3} is the same as {3, 1, 2}</li>
            <li><strong>Distinct elements:</strong> No duplicates allowed. {1, 1, 2} is written as {1, 2}</li>
            <li><strong>Well-defined:</strong> You can clearly tell if something is in the set or not</li>
          </ul>
        `
      },
      {
        id: "membership",
        title: "Membership Symbols: ∈ and ∉",
        content: `
          <h2>Membership: Is Something In the Set?</h2>
          
          <h3>The ∈ Symbol (Element Of)</h3>
          <p>∈ means "is an element of" or "belongs to"</p>
          <div class="example">
            <strong>Examples:</strong>
            <ul>
              <li>a ∈ {a, e, i, o, u} ✓ (a is a vowel)</li>
              <li>5 ∈ {2, 4, 6, 8} ✗ (5 is not even, well, actually 5 is odd)</li>
              <li>red ∈ {red, blue, yellow} ✓ (red is a primary color)</li>
            </ul>
          </div>

          <h3>The ∉ Symbol (Not an Element Of)</h3>
          <p>∉ means "is not an element of" or "does not belong to"</p>
          <div class="example">
            <strong>Examples:</strong>
            <ul>
              <li>b ∉ {a, e, i, o, u} (b is not a vowel)</li>
              <li>7 ∉ {2, 4, 6, 8} (7 is not even)</li>
              <li>green ∉ {red, blue, yellow} (green is not a primary color)</li>
            </ul>
          </div>

          <h3>Cardinality: How Many Elements?</h3>
          <p>The cardinality |A| of a set A is the number of elements it contains.</p>
          <ul>
            <li>|{a, e, i, o, u}| = 5</li>
            <li>|{2, 4, 6}| = 3</li>
            <li>|{}| = 0 (empty set)</li>
          </ul>
        `
      },
      {
        id: "operations",
        title: "Set Operations: ∪, ∩, ⊂",
        content: `
          <h2>Combining and Comparing Sets</h2>

          <h3>Union (∪) - Combining Sets</h3>
          <p>A ∪ B contains all elements that are in A OR in B (or both)</p>
          <div class="example">
            <strong>Example:</strong>
            <ul>
              <li>A = {1, 2, 3}</li>
              <li>B = {3, 4, 5}</li>
              <li>A ∪ B = {1, 2, 3, 4, 5}</li>
            </ul>
          </div>

          <h3>Intersection (∩) - Common Elements</h3>
          <p>A ∩ B contains only elements that are in BOTH A and B</p>
          <div class="example">
            <strong>Example:</strong>
            <ul>
              <li>A = {1, 2, 3}</li>
              <li>B = {3, 4, 5}</li>
              <li>A ∩ B = {3}</li>
            </ul>
          </div>

          <h3>Subset (⊆) and Proper Subset (⊂)</h3>
          <p>A ⊆ B means every element of A is also in B</p>
          <ul>
            <li>{1, 2} ⊆ {1, 2, 3, 4, 5} ✓</li>
            <li>{1, 2} ⊂ {1, 2, 3} ✓ (proper subset - not equal)</li>
            <li>{1, 2, 3} ⊆ {1, 2, 3} ✓ (subset - can be equal)</li>
          </ul>
        `
      },
      {
        id: "examples",
        title: "Real-World Set Examples",
        content: `
          <h2>Sets in Everyday Life</h2>

          <h3>School Rosters</h3>
          <p>Each class is a set of students. The intersection of two classes' sets shows students taking both courses.</p>

          <h3>Sports Teams</h3>
          <p>The union of all team members across different sports gives the total athletes at a school.</p>

          <h3>Food Categories</h3>
          <p>A = {foods that are fruits} and B = {foods that are red}. A ∩ B would be red fruits.</p>

          <h3>Music Preferences</h3>
          <p>Set A = {people who like rock music} and B = {people who like jazz}. A ∩ B = {people who like both}</p>

          <h2>Summary</h2>
          <ul>
            <li>{} = curly braces denote a set</li>
            <li>∈ = "element of" (something is in the set)</li>
            <li>∉ = "not element of" (something is not in the set)</li>
            <li>∪ = union (all elements from both sets)</li>
            <li>∩ = intersection (only common elements)</li>
            <li>⊂ = proper subset (entirely contained but not equal)</li>
            <li>⊆ = subset (entirely contained, may be equal)</li>
          </ul>
        `
      }
    ],
    practiceProblems: [
      {
        id: 1,
        question: "Which of the following best describes a set?",
        type: "multiple-choice",
        options: [
          { id: "a", text: "An ordered list of numbers", isCorrect: false },
          { id: "b", text: "An unordered collection of distinct objects", isCorrect: true },
          { id: "c", text: "A sequence of values", isCorrect: false },
          { id: "d", text: "A mathematical operation", isCorrect: false }
        ],
        explanation: "A set is an unordered collection of distinct elements with no duplicates."
      },
      {
        id: 2,
        question: "Does {1, 2, 3} = {3, 2, 1}? Why or why not?",
        type: "true-false",
        correctAnswer: true,
        explanation: "Yes! Sets are unordered, so the same elements in different order represent the same set."
      },
      {
        id: 3,
        question: "If A = {1, 2, 3} and B = {3, 4, 5}, what is A ∪ B?",
        type: "input",
        correctAnswer: "{1, 2, 3, 4, 5}",
        acceptableAnswers: ["1, 2, 3, 4, 5", "{1,2,3,4,5}"],
        hint: "Union includes all elements from both sets",
        explanation: "A ∪ B = {1, 2, 3, 4, 5} - all elements that appear in either set"
      },
      {
        id: 4,
        question: "If A = {1, 2, 3} and B = {3, 4, 5}, what is A ∩ B?",
        type: "input",
        correctAnswer: "{3}",
        acceptableAnswers: ["3", "{3}"],
        hint: "Intersection contains only common elements",
        explanation: "A ∩ B = {3} - the only element in both sets"
      },
      {
        id: 5,
        question: "Is {1, 2} a proper subset of {1, 2, 3}?",
        type: "true-false",
        correctAnswer: true,
        explanation: "Yes! {1, 2} is a proper subset because all its elements are in {1, 2, 3} and the sets are not equal."
      },
      {
        id: 6,
        question: "What does the symbol ∈ mean?",
        type: "input",
        correctAnswer: "element of",
        acceptableAnswers: ["belongs to", "is in"],
        hint: "It's used to show membership in a set",
        explanation: "∈ means 'is an element of' or 'belongs to'. For example, 5 ∈ {1, 3, 5, 7}"
      }
    ]
  },
  "equality-relations": {
    title: "Equality and Relations",
    description: "=, ≠, <, >, ≤, ≥, ≈",
    pages: [
      {
        id: "equality",
        title: "Equality and Inequality Symbols",
        content: `
          <h2>Comparing Values</h2>
          <p>Beyond just equality, mathematics has symbols to show different types of relationships between numbers.</p>

          <h3>Equality (=)</h3>
          <p>Values are exactly the same.</p>
          <ul>
            <li>5 = 5 ✓</li>
            <li>2 + 3 = 5 ✓</li>
          </ul>

          <h3>Inequality (≠)</h3>
          <p>Values are not equal.</p>
          <ul>
            <li>5 ≠ 3 ✓ (5 is not equal to 3)</li>
            <li>2 + 2 ≠ 5 ✓</li>
          </ul>

          <h3>Greater Than (>)</h3>
          <p>The value on the left is larger than the value on the right.</p>
          <ul>
            <li>10 > 5 ✓</li>
            <li>-2 > -5 ✓ (because -2 is closer to zero)</li>
            <li>3 > 8 ✗</li>
          </ul>

          <h3>Less Than (<)</h3>
          <p>The value on the left is smaller than the value on the right.</p>
          <ul>
            <li>3 < 8 ✓</li>
            <li>0 < 1 ✓</li>
            <li>5 < 5 ✗ (equal, not less)</li>
          </ul>
        `
      },
      {
        id: "inclusive",
        title: "Inclusive Relations: ≤ and ≥",
        content: `
          <h2>When Can Values Be Equal?</h2>

          <h3>Greater Than or Equal To (≥)</h3>
          <p>The value on the left is larger than OR equal to the value on the right.</p>
          <div class="example">
            <strong>Examples:</strong>
            <ul>
              <li>10 ≥ 5 ✓ (10 is greater than 5)</li>
              <li>5 ≥ 5 ✓ (5 equals 5)</li>
              <li>3 ≥ 8 ✗ (3 is less than 8)</li>
            </ul>
          </div>

          <h3>Less Than or Equal To (≤)</h3>
          <p>The value on the left is smaller than OR equal to the value on the right.</p>
          <div class="example">
            <strong>Examples:</strong>
            <ul>
              <li>3 ≤ 8 ✓ (3 is less than 8)</li>
              <li>5 ≤ 5 ✓ (5 equals 5)</li>
              <li>10 ≤ 5 ✗ (10 is greater than 5)</li>
            </ul>
          </div>

          <h3>Helpful Tip: The Arrow Points to the Smaller Value</h3>
          <p>Think of ≤ and ≥ as arrows pointing toward the smaller value:</p>
          <ul>
            <li>3 ≤ 5 (arrow points from 5 to 3, the smaller number)</li>
            <li>8 ≥ 4 (arrow points from 8 to 4, the smaller number)</li>
          </ul>
        `
      },
      {
        id: "approximation",
        title: "Approximation: ≈",
        content: `
          <h2>When Values Are Almost Equal</h2>

          <h3>Approximately Equal To (≈)</h3>
          <p>The values are close but not exactly equal. Often used when rounding or estimating.</p>
          <div class="example">
            <strong>Examples:</strong>
            <ul>
              <li>π ≈ 3.14159... (we often write π ≈ 3.14)</li>
              <li>√2 ≈ 1.414</li>
              <li>22/7 ≈ 3.14 (an approximation for π)</li>
              <li>3.14159 ≈ 3.14 (rounded)</li>
            </ul>
          </div>

          <h3>When Do We Use ≈?</h3>
          <ul>
            <li>Rounding numbers: 3.7 ≈ 4</li>
            <li>Using common approximations: π ≈ 22/7</li>
            <li>Dealing with irrational numbers that can't be written exactly</li>
            <li>Measuring real-world quantities that aren't exact</li>
          </ul>

          <h3>Difference Between = and ≈</h3>
          <ul>
            <li>= means exactly equal: 2 + 2 = 4</li>
            <li>≈ means approximately equal: √2 ≈ 1.41</li>
            <li>≠ means not equal: 2 + 2 ≠ 5</li>
          </ul>
        `
      },
      {
        id: "application",
        title: "Practical Applications",
        content: `
          <h2>Real-World Comparisons</h2>

          <h3>Temperature Control</h3>
          <ul>
            <li>Water freezes at 0°C and boils at 100°C</li>
            <li>Room temperature should be ≈ 20-22°C</li>
            <li>Safe food temperature should be ≥ 60°C</li>
          </ul>

          <h3>Age Restrictions</h3>
          <ul>
            <li>You must be ≥ 18 to vote in many countries</li>
            <li>You must be < 5 to watch G-rated movies (not always)</li>
          </ul>

          <h3>Grade Thresholds</h3>
          <ul>
            <li>A grade: score ≥ 90%</li>
            <li>B grade: 80% ≤ score < 90%</li>
            <li>C grade: 70% ≤ score < 80%</li>
          </ul>

          <h3>Measurements and Tolerances</h3>
          <ul>
            <li>A bolt must be 10mm ± 0.1mm (approximately 10mm)</li>
            <li>Weight limit: package ≤ 25kg</li>
          </ul>
        `
      }
    ],
    practiceProblems: [
      {
        id: 1,
        question: "What does the symbol ≤ mean?",
        type: "multiple-choice",
        options: [
          { id: "a", text: "Less than", isCorrect: false },
          { id: "b", text: "Greater than", isCorrect: false },
          { id: "c", text: "Less than or equal to", isCorrect: true },
          { id: "d", text: "Not equal to", isCorrect: false }
        ],
        explanation: "≤ means 'less than or equal to'. For example, 3 ≤ 5 and 5 ≤ 5 are both true."
      },
      {
        id: 2,
        question: "Is the statement '7 > 7' true or false?",
        type: "true-false",
        correctAnswer: false,
        explanation: "False. 7 is not greater than 7; they are equal. You would write 7 ≥ 7 or 7 = 7."
      },
      {
        id: 3,
        question: "Which symbol should go in the blank: 4.5 ___ 4.50?",
        type: "input",
        correctAnswer: "=",
        hint: "Are these the same value?",
        explanation: "4.5 and 4.50 are exactly the same number, so we use = (equals)."
      },
      {
        id: 4,
        question: "Is π ≈ 3.14 a true statement?",
        type: "true-false",
        correctAnswer: true,
        explanation: "True! π ≈ 3.14159..., so 3.14 is a reasonable approximation."
      },
      {
        id: 5,
        question: "List three inequality symbols and give an example of each.",
        type: "input",
        correctAnswer: "<, >, ≠",
        acceptableAnswers: ["< > ≠", "less than, greater than, not equal"],
        hint: "Think of symbols that compare numbers",
        explanation: "Examples: < (3 < 5), > (8 > 2), ≠ (4 ≠ 5)"
      },
      {
        id: 6,
        question: "If a speed limit sign says 65 km/h, what does that mean mathematically?",
        type: "input",
        correctAnswer: "≤ 65",
        acceptableAnswers: ["<= 65", "speed ≤ 65 km/h"],
        hint: "Your speed should not exceed the limit",
        explanation: "Your speed should be ≤ 65 km/h (less than or equal to 65 km/h)"
      }
    ]
  },
  "basic-operations": {
    title: "Basic Operations Notation",
    description: "Sum, product, factorial, and power notation",
    pages: [
      {
        id: "summation",
        title: "Summation (Σ): Adding Many Numbers",
        content: `
          <h2>The Summation Symbol (Σ)</h2>
          <p>Σ (sigma) is used when you need to add a long list of numbers. It's a shorthand for addition.</p>

          <h3>What Does Σ Mean?</h3>
          <p>Σ means "sum" or "add up all the following values". Instead of writing 1 + 2 + 3 + 4 + 5, we write:</p>
          <div class="example">
            Σ(i=1 to 5) i
          </div>

          <h3>How to Read It</h3>
          <ul>
            <li>Σ = "sum of"</li>
            <li>i = 1 (start at i = 1)</li>
            <li>to 5 = (continue until i = 5)</li>
            <li>i = (what we're adding)</li>
          </ul>

          <div class="example">
            <strong>Example:</strong>
            <ul>
              <li>Σ(i=1 to 4) i = 1 + 2 + 3 + 4 = 10</li>
              <li>Σ(i=1 to 5) 2i = 2 + 4 + 6 + 8 + 10 = 30</li>
            </ul>
          </div>
        `
      },
      {
        id: "products",
        title: "Products and Factorials",
        content: `
          <h2>The Product Symbol (Π)</h2>
          <p>Π (pi) is like Σ, but instead of adding, you multiply.</p>

          <div class="example">
            <strong>Examples:</strong>
            <ul>
              <li>Π(i=1 to 4) i = 1 × 2 × 3 × 4 = 24</li>
              <li>Π(i=1 to 3) (i+1) = 2 × 3 × 4 = 24</li>
            </ul>
          </div>

          <h2>Factorial (!)</h2>
          <p>n! (n factorial) means multiply n by every positive whole number below it.</p>

          <div class="example">
            <strong>Examples:</strong>
            <ul>
              <li>5! = 5 × 4 × 3 × 2 × 1 = 120</li>
              <li>3! = 3 × 2 × 1 = 6</li>
              <li>0! = 1 (by definition)</li>
            </ul>
          </div>

          <h3>Real-World Use: Permutations</h3>
          <p>How many ways can you arrange 5 different items? Answer: 5! = 120 ways</p>
        `
      },
      {
        id: "exponents",
        title: "Exponents and Roots",
        content: `
          <h2>Exponents (Powers)</h2>
          <p>When a number is repeated in multiplication, we use exponents as shorthand.</p>

          <h3>Notation</h3>
          <ul>
            <li>2³ means 2 × 2 × 2 = 8 (read as "2 to the power of 3" or "2 cubed")</li>
            <li>5² = 5 × 5 = 25 (read as "5 squared")</li>
            <li>10⁴ = 10 × 10 × 10 × 10 = 10,000</li>
          </ul>

          <h3>Special Cases</h3>
          <ul>
            <li>n¹ = n (any number to power 1 is itself)</li>
            <li>n⁰ = 1 (any number to power 0 is 1)</li>
            <li>2⁻¹ = 1/2 = 0.5 (negative exponents mean division)</li>
          </ul>

          <h2>Roots</h2>
          <p>Roots are the opposite of exponents. √ (square root) asks: what number times itself gives this?</p>

          <div class="example">
            <strong>Examples:</strong>
            <ul>
              <li>√4 = 2 (because 2 × 2 = 4)</li>
              <li>√9 = 3 (because 3 × 3 = 9)</li>
              <li>∛8 = 2 (cube root: 2 × 2 × 2 = 8)</li>
            </ul>
          </div>
        `
      },
      {
        id: "order",
        title: "Order of Operations",
        content: `
          <h2>PEMDAS/BODMAS: The Order of Operations</h2>
          <p>When multiple operations appear in an expression, we must follow a specific order:</p>

          <h3>The Order (PEMDAS)</h3>
          <ol>
            <li><strong>P</strong>arentheses (or Brackets)</li>
            <li><strong>E</strong>xponents (or Orders)</li>
            <li><strong>M</strong>ultiplication and <strong>D</strong>ivision (left to right)</li>
            <li><strong>A</strong>ddition and <strong>S</strong>ubtraction (left to right)</li>
          </ol>

          <div class="example">
            <strong>Example:</strong> 2 + 3 × 4
            <ul>
              <li>Wrong: 2 + 3 = 5, then 5 × 4 = 20 ✗</li>
              <li>Right: 3 × 4 = 12, then 2 + 12 = 14 ✓</li>
            </ul>
          </div>

          <div class="example">
            <strong>Complex Example:</strong> (2 + 3)² × 4 − 5
            <ul>
              <li>Parentheses: 2 + 3 = 5</li>
              <li>Exponents: 5² = 25</li>
              <li>Multiplication: 25 × 4 = 100</li>
              <li>Subtraction: 100 − 5 = 95</li>
            </ul>
          </div>

          <h3>Why Does Order Matter?</h3>
          <p>Different orders give different answers! That's why mathematicians agreed on PEMDAS.</p>
        `
      }
    ],
    practiceProblems: [
      {
        id: 1,
        question: "What is the result of 3 + 4 × 2?",
        type: "multiple-choice",
        options: [
          { id: "a", text: "14", isCorrect: true },
          { id: "b", text: "11", isCorrect: false },
          { id: "c", text: "20", isCorrect: false },
          { id: "d", text: "7", isCorrect: false }
        ],
        explanation: "Following PEMDAS, we do multiplication first: 3 + (4 × 2) = 3 + 8 = 14"
      },
      {
        id: 2,
        question: "Calculate 5! (5 factorial)",
        type: "input",
        correctAnswer: "120",
        hint: "5! = 5 × 4 × 3 × 2 × 1",
        explanation: "5 factorial is the product of all positive integers from 1 to 5."
      },
      {
        id: 3,
        question: "2⁵ is the same as 2 × 2 × 2 × 2 × 2",
        type: "true-false",
        correctAnswer: true,
        explanation: "Correct! 2⁵ means 2 multiplied by itself 5 times, which equals 32."
      },
      {
        id: 4,
        question: "Simplify: 2 × 5 − 3 + 1",
        type: "input",
        correctAnswer: "8",
        hint: "Remember PEMDAS: Multiplication first, then addition and subtraction from left to right",
        explanation: "(2 × 5) − 3 + 1 = 10 − 3 + 1 = 8"
      },
      {
        id: 5,
        question: "Which operation comes first in PEMDAS?",
        type: "multiple-choice",
        options: [
          { id: "a", text: "Addition", isCorrect: false },
          { id: "b", text: "Parentheses", isCorrect: true },
          { id: "c", text: "Multiplication", isCorrect: false },
          { id: "d", text: "Division", isCorrect: false }
        ],
        explanation: "Parentheses (or Brackets) always come first in the order of operations."
      },
      {
        id: 6,
        question: "√16 equals 4",
        type: "true-false",
        correctAnswer: true,
        explanation: "Correct! The square root of 16 is 4 because 4 × 4 = 16."
      }
    ]
  }
} as const;

export function getNotationBeginnerLesson(lessonId: string) {
  return lessonContent[lessonId as keyof typeof lessonContent];
}
