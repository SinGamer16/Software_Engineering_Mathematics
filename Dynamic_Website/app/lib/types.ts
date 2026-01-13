// Shared TypeScript types for the learning platform

export type ModuleId = 
  | "discrete-math"
  | "linear-algebra"
  | "probability"
  | "calculus"
  | "algorithms"
  | "math-notation-beginner"
  | "math-notation-intermediate"
  | "math-notation-advanced";

export type ModuleColor = 
  | "blue"
  | "green"
  | "purple"
  | "orange"
  | "red"
  | "cyan"
  | "indigo"
  | "pink";

export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export type ModuleSection = 
  | "Mathematical Notation"
  | "Core Mathematical Foundations"
  | "Computer Science Mathematics"
  | "Advanced & Specialized Topics";

export interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  completed?: boolean;
}

export interface Module {
  id: ModuleId;
  title: string;
  description: string;
  icon: string;
  color: ModuleColor;
  lessons: Lesson[];
  section?: ModuleSection;
  difficulty?: Difficulty;
}

export interface ModuleMetadata {
  id: ModuleId;
  title: string;
  description: string;
  lessons: number;
  duration: string;
  difficulty: Difficulty;
  icon: string;
  color: ModuleColor;
  section: ModuleSection;
  status?: "available" | "coming-soon";
}
