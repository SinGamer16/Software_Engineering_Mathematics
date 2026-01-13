// Module and lesson data imported from static website content
export const moduleData = {
  "discrete-math": {
    title: "Discrete Mathematics",
    description: "Sets, logic, relations, and functions - the foundation of computer science",
    icon: "🔢",
    color: "blue",
    lessons: [
      {
        id: "sets-intro",
        title: "What is a Set?",
        description: "Introduction to sets and their basic properties",
        duration: "15 min",
        completed: false
      },
      {
        id: "set-operations",
        title: "Set Operations",
        description: "Union, intersection, difference, and complement",
        duration: "20 min",
        completed: false
      },
      {
        id: "special-sets",
        title: "Special Sets and Properties",
        description: "Subsets, power sets, and important properties",
        duration: "25 min",
        completed: false
      },
      {
        id: "relations",
        title: "Relations and Functions",
        description: "Understanding relationships between sets",
        duration: "25 min",
        completed: false
      },
      {
        id: "logic-basics",
        title: "Propositional Logic",
        description: "Logical statements and truth tables",
        duration: "30 min",
        completed: false
      },
      {
        id: "proofs",
        title: "Proof Techniques",
        description: "Direct, indirect, and contradiction proofs",
        duration: "35 min",
        completed: false
      },
      {
        id: "combinatorics",
        title: "Combinatorics",
        description: "Counting principles and permutations",
        duration: "25 min",
        completed: false
      }
    ]
  },
  "linear-algebra": {
    title: "Linear Algebra",
    description: "Vectors, matrices, and linear transformations for computer graphics and ML",
    icon: "📐",
    color: "green",
    lessons: [
      {
        id: "vectors-intro",
        title: "Vectors and Vector Spaces",
        description: "Introduction to vectors and their properties",
        duration: "20 min",
        completed: false
      },
      {
        id: "matrices",
        title: "Matrices and Operations",
        description: "Matrix operations, multiplication, and properties",
        duration: "25 min",
        completed: false
      },
      {
        id: "systems-equations",
        title: "Systems of Linear Equations",
        description: "Solving systems using Gaussian elimination",
        duration: "25 min",
        completed: false
      },
      {
        id: "determinants",
        title: "Determinants",
        description: "Calculating and interpreting determinants",
        duration: "20 min",
        completed: false
      },
      {
        id: "eigenvalues",
        title: "Eigenvalues and Eigenvectors",
        description: "Finding and using eigenvalues in applications",
        duration: "30 min",
        completed: false
      }
    ]
  },
  "probability": {
    title: "Probability & Statistics",
    description: "Probability theory and statistical analysis for data science",
    icon: "📊",
    color: "purple",
    lessons: [
      {
        id: "probability-basics",
        title: "Basic Probability",
        description: "Probability axioms, sample spaces, and events",
        duration: "20 min",
        completed: false
      },
      {
        id: "conditional-probability",
        title: "Conditional Probability",
        description: "Bayes' theorem and conditional independence",
        duration: "25 min",
        completed: false
      },
      {
        id: "distributions",
        title: "Probability Distributions",
        description: "Binomial, Poisson, normal, and other distributions",
        duration: "25 min",
        completed: false
      },
      {
        id: "expectation",
        title: "Expectation and Variance",
        description: "Expected value, variance, and covariance",
        duration: "25 min",
        completed: false
      },
      {
        id: "statistics",
        title: "Descriptive Statistics",
        description: "Data summarization and visualization techniques",
        duration: "20 min",
        completed: false
      },
      {
        id: "hypothesis-testing",
        title: "Hypothesis Testing",
        description: "Statistical inference and significance testing",
        duration: "30 min",
        completed: false
      }
    ]
  },
  "algorithms": {
    title: "Algorithm Analysis",
    description: "Complexity analysis and algorithmic paradigms",
    icon: "⚡",
    color: "orange",
    lessons: [
      {
        id: "complexity",
        title: "Time and Space Complexity",
        description: "Big O notation and complexity analysis",
        duration: "25 min",
        completed: false
      },
      {
        id: "sorting",
        title: "Sorting Algorithms",
        description: "Common sorting algorithms and their analysis",
        duration: "30 min",
        completed: false
      },
      {
        id: "searching",
        title: "Searching Algorithms",
        description: "Binary search and search algorithms",
        duration: "20 min",
        completed: false
      },
      {
        id: "dynamic-programming",
        title: "Dynamic Programming",
        description: "Solving problems with optimal substructure",
        duration: "35 min",
        completed: false
      }
    ]
  },
  "calculus": {
    title: "Calculus",
    description: "Single and multivariable calculus for optimization and analysis",
    icon: "📈",
    color: "red",
    lessons: [
      {
        id: "limits-continuity",
        title: "Limits and Continuity",
        description: "Understanding limits and continuous functions",
        duration: "20 min",
        completed: false
      },
      {
        id: "derivatives",
        title: "Derivatives and Differentiation",
        description: "Rates of change and differentiation rules",
        duration: "25 min",
        completed: false
      },
      {
        id: "applications-derivatives",
        title: "Applications of Derivatives",
        description: "Optimization, curve sketching, and related rates",
        duration: "30 min",
        completed: false
      },
      {
        id: "integrals",
        title: "Integration",
        description: "Antiderivatives, definite integrals, and techniques",
        duration: "30 min",
        completed: false
      },
      {
        id: "multivariable",
        title: "Multivariable Calculus",
        description: "Partial derivatives, gradients, and optimization",
        duration: "35 min",
        completed: false
      }
    ]
  },
  "math-notation-beginner": {
    title: "Mathematical Notation - Beginner",
    description: "Introduction to essential mathematical symbols and notation for beginners",
    icon: "𝔸",
    color: "cyan",
    lessons: [
      {
        id: "symbols-basics",
        title: "Basic Mathematical Symbols",
        description: "Essential operators and symbols (=, +, −, ×, ÷)",
        duration: "15 min",
        completed: false
      },
      {
        id: "set-notation",
        title: "Set Notation",
        description: "Understanding {}, ∈, ∉, ⊂, ⊃, ∪, ∩",
        duration: "20 min",
        completed: false
      },
      {
        id: "equality-relations",
        title: "Equality and Relations",
        description: "=, ≠, <, >, ≤, ≥, ≈",
        duration: "15 min",
        completed: false
      },
      {
        id: "basic-operations",
        title: "Basic Operations Notation",
        description: "Sum, product, factorial, and power notation",
        duration: "20 min",
        completed: false
      }
    ]
  },
  "math-notation-intermediate": {
    title: "Mathematical Notation - Intermediate",
    description: "Advanced notation including calculus, linear algebra, and logic symbols",
    icon: "∑",
    color: "indigo",
    lessons: [
      {
        id: "logic-notation",
        title: "Logic and Set Notation",
        description: "∀, ∃, ∧, ∨, ¬, ⟹, ⟺, ∅, ℝ, ℤ, ℕ",
        duration: "20 min",
        completed: false
      },
      {
        id: "calculus-notation",
        title: "Calculus Notation",
        description: "Limits, derivatives, integrals: lim, d/dx, ∫, ∂",
        duration: "25 min",
        completed: false
      },
      {
        id: "linear-algebra-notation",
        title: "Linear Algebra Notation",
        description: "Vectors, matrices, norms: ||x||, A^T, A^(-1), det(A)",
        duration: "25 min",
        completed: false
      },
      {
        id: "probability-notation",
        title: "Probability and Statistics Notation",
        description: "Probability, expectation, variance: P, E, Var, σ, μ",
        duration: "20 min",
        completed: false
      }
    ]
  },
  "math-notation-advanced": {
    title: "Mathematical Notation - Advanced",
    description: "Complex notation including sequences, series, topology, and advanced logic",
    icon: "∇",
    color: "pink",
    lessons: [
      {
        id: "sequence-series-notation",
        title: "Sequences and Series Notation",
        description: "{aₙ}, Σ(n=1 to ∞), lim(n→∞), convergence notation",
        duration: "25 min",
        completed: false
      },
      {
        id: "topology-notation",
        title: "Topology and Analysis Notation",
        description: "Open sets, closed sets, continuity, and metric spaces",
        duration: "30 min",
        completed: false
      },
      {
        id: "linear-transformations",
        title: "Linear Transformations Notation",
        description: "Function spaces, eigenvalues, characteristic polynomials",
        duration: "30 min",
        completed: false
      },
      {
        id: "advanced-logic",
        title: "Advanced Logic and Proof Notation",
        description: "Formal proofs, quantifier notation, proof by induction",
        duration: "25 min",
        completed: false
      },
      {
        id: "notation-in-context",
        title: "Notation in Applications",
        description: "Using advanced notation in algorithms, ML, and cryptography",
        duration: "30 min",
        completed: false
      }
    ]
  }
};

export function getModule(moduleId: string) {
  return moduleData[moduleId as keyof typeof moduleData];
}

export function getLesson(moduleId: string, lessonId: string) {
  const module = getModule(moduleId);
  if (!module) return null;
  return module.lessons.find(l => l.id === lessonId);
}