export const quizData = {
  "math-notation-beginner": {
    title: "Mathematical Notation - Beginner Quiz",
    description: "Test your understanding of basic mathematical symbols and notation",
    questions: [
      {
        id: "q1",
        question: "What does the equals sign (=) represent?",
        type: "multiple-choice" as const,
        options: [
          { id: "a", text: "The start of an answer", correct: false },
          { id: "b", text: "That the values on both sides are identical", correct: true },
          { id: "c", text: "The end of a problem", correct: false },
          { id: "d", text: "A place to write a calculation", correct: false }
        ],
        explanation: "The equals sign (=) means the expression or value on the left side is identical to the value on the right side."
      },
      {
        id: "q2",
        question: "If 3 + x = 10, what is the value of x?",
        type: "fill-in" as const,
        correctAnswer: "7",
        explanation: "Subtract 3 from both sides: x = 10 - 3 = 7"
      },
      {
        id: "q3",
        question: "Which symbol means 'is an element of'?",
        type: "multiple-choice" as const,
        options: [
          { id: "a", text: "∉", correct: false },
          { id: "b", text: "⊂", correct: false },
          { id: "c", text: "∈", correct: true },
          { id: "d", text: "∪", correct: false }
        ],
        explanation: "The symbol ∈ means 'is an element of' or 'belongs to'. For example, a ∈ {a, e, i, o, u}"
      },
      {
        id: "q4",
        question: "What is {1, 2, 3} ∪ {3, 4, 5}?",
        type: "fill-in" as const,
        correctAnswer: "{1,2,3,4,5}",
        explanation: "Union (∪) combines all elements from both sets. {1, 2, 3} ∪ {3, 4, 5} = {1, 2, 3, 4, 5}"
      },
      {
        id: "q5",
        question: "Is 5 < 8 true or false?",
        type: "multiple-choice" as const,
        options: [
          { id: "a", text: "True", correct: true },
          { id: "b", text: "False", correct: false }
        ],
        explanation: "True. 5 is less than 8, so 5 < 8 is a correct statement."
      },
      {
        id: "q6",
        question: "What does 4! (factorial) equal?",
        type: "fill-in" as const,
        correctAnswer: "24",
        explanation: "4! = 4 × 3 × 2 × 1 = 24"
      },
      {
        id: "q7",
        question: "Which of the following is correct?",
        type: "multiple-choice" as const,
        options: [
          { id: "a", text: "2³ = 6", correct: false },
          { id: "b", text: "2³ = 8", correct: true },
          { id: "c", text: "2³ = 9", correct: false },
          { id: "d", text: "2³ = 5", correct: false }
        ],
        explanation: "2³ = 2 × 2 × 2 = 8. The exponent 3 means multiply 2 by itself 3 times."
      },
      {
        id: "q8",
        question: "Using PEMDAS, what is 2 + 3 × 4?",
        type: "fill-in" as const,
        correctAnswer: "14",
        explanation: "Following PEMDAS, multiply first: 3 × 4 = 12, then add: 2 + 12 = 14"
      },
      {
        id: "q9",
        question: "What is √9?",
        type: "fill-in" as const,
        correctAnswer: "3",
        explanation: "√9 = 3 because 3 × 3 = 9. The square root asks what number times itself gives 9."
      },
      {
        id: "q10",
        question: "Which symbol means 'not equal to'?",
        type: "multiple-choice" as const,
        options: [
          { id: "a", text: "=", correct: false },
          { id: "b", text: "≠", correct: true },
          { id: "c", text: "<", correct: false },
          { id: "d", text: ">", correct: false }
        ],
        explanation: "The symbol ≠ means 'not equal to'. For example, 5 ≠ 3 means 5 is not equal to 3."
      }
    ]
  }
};
