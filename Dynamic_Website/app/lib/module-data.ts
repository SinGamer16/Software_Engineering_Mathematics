// Centralized module data - single source of truth
import { ModuleMetadata, ModuleId } from './types';

export const allModules: ModuleMetadata[] = [
  {
    id: "math-notation-beginner",
    title: "Mathematical Notation - Beginner",
    description: "Introduction to essential mathematical symbols and notation",
    lessons: 4,
    duration: "1 hour",
    difficulty: "Beginner",
    icon: "𝔸",
    color: "cyan",
    section: "Mathematical Notation",
    status: "available"
  },
  {
    id: "math-notation-intermediate",
    title: "Mathematical Notation - Intermediate",
    description: "Advanced notation for calculus, linear algebra, and logic",
    lessons: 4,
    duration: "1.5 hours",
    difficulty: "Intermediate",
    icon: "∑",
    color: "indigo",
    section: "Mathematical Notation",
    status: "available"
  },
  {
    id: "math-notation-advanced",
    title: "Mathematical Notation - Advanced",
    description: "Complex notation for advanced mathematics and applications",
    lessons: 5,
    duration: "2 hours",
    difficulty: "Advanced",
    icon: "∇",
    color: "pink",
    section: "Mathematical Notation",
    status: "available"
  },
  {
    id: "discrete-math",
    title: "Discrete Mathematics",
    description: "Sets, logic, relations, and functions - the foundation of computer science",
    lessons: 7,
    duration: "6 hours",
    difficulty: "Beginner",
    icon: "🔢",
    color: "blue",
    section: "Core Mathematical Foundations",
    status: "available"
  },
  {
    id: "linear-algebra",
    title: "Linear Algebra",
    description: "Vectors, matrices, and linear transformations for computer graphics and ML",
    lessons: 5,
    duration: "4 hours",
    difficulty: "Beginner",
    icon: "📐",
    color: "green",
    section: "Core Mathematical Foundations",
    status: "available"
  },
  {
    id: "probability",
    title: "Probability & Statistics",
    description: "Probability theory and statistical analysis for data science",
    lessons: 6,
    duration: "5 hours",
    difficulty: "Intermediate",
    icon: "📊",
    color: "purple",
    section: "Core Mathematical Foundations",
    status: "available"
  },
  {
    id: "calculus",
    title: "Calculus",
    description: "Single and multivariable calculus for optimization and analysis",
    lessons: 5,
    duration: "5 hours",
    difficulty: "Beginner",
    icon: "📈",
    color: "red",
    section: "Core Mathematical Foundations",
    status: "available"
  },
  {
    id: "algorithms",
    title: "Algorithm Analysis",
    description: "Complexity analysis, sorting, searching, and dynamic programming",
    lessons: 4,
    duration: "4 hours",
    difficulty: "Intermediate",
    icon: "⚡",
    color: "orange",
    section: "Computer Science Mathematics",
    status: "available"
  }
];

export function getModule(moduleId: string): ModuleMetadata | undefined {
  return allModules.find(m => m.id === moduleId);
}

export function getModulesBySection(section: string): ModuleMetadata[] {
  return allModules.filter(m => m.section === section);
}
