import Link from "next/link";
import { notFound } from "next/navigation";

interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  completed: boolean;
}

interface ModuleData {
  title: string;
  description: string;
  lessons: Lesson[];
  icon: string;
  color: string;
}

const moduleData: Record<string, ModuleData> = {
  "discrete-math": {
    title: "Discrete Mathematics",
    description: "Sets, logic, relations, and functions - the foundation of computer science",
    icon: "🔢",
    color: "blue",
    lessons: [
      { id: "sets-intro", title: "Introduction to Sets", description: "What are sets and why they matter", duration: "15 min", completed: false },
      { id: "set-operations", title: "Set Operations", description: "Union, intersection, difference, and complement", duration: "20 min", completed: false },
      { id: "relations", title: "Relations and Functions", description: "Understanding relationships between sets", duration: "25 min", completed: false },
      { id: "logic-basics", title: "Propositional Logic", description: "Logical statements and truth tables", duration: "30 min", completed: false },
      { id: "proofs", title: "Proof Techniques", description: "Direct, indirect, and contradiction proofs", duration: "35 min", completed: false },
      { id: "combinatorics", title: "Combinatorics", description: "Counting principles and permutations", duration: "25 min", completed: false }
    ]
  },
  "linear-algebra": {
    title: "Linear Algebra",
    description: "Vectors, matrices, and linear transformations",
    icon: "📐",
    color: "green",
    lessons: [
      { id: "vectors-intro", title: "Vectors and Vector Spaces", description: "Introduction to vectors and their properties", duration: "20 min", completed: false },
      { id: "matrices", title: "Matrices and Operations", description: "Matrix operations and properties", duration: "25 min", completed: false },
      { id: "determinants", title: "Determinants", description: "Calculating and interpreting determinants", duration: "20 min", completed: false },
      { id: "eigenvalues", title: "Eigenvalues and Eigenvectors", description: "Finding and using eigenvalues", duration: "30 min", completed: false }
    ]
  },
  "probability": {
    title: "Probability & Statistics",
    description: "Probability theory and statistical analysis",
    icon: "📊",
    color: "purple",
    lessons: [
      { id: "probability-basics", title: "Basic Probability", description: "Probability axioms and rules", duration: "20 min", completed: false },
      { id: "distributions", title: "Probability Distributions", description: "Common distributions and their uses", duration: "25 min", completed: false },
      { id: "statistics", title: "Statistical Analysis", description: "Mean, variance, and hypothesis testing", duration: "30 min", completed: false }
    ]
  },
  "algorithms": {
    title: "Algorithm Analysis",
    description: "Complexity analysis and algorithmic paradigms",
    icon: "⚡",
    color: "orange",
    lessons: [
      { id: "complexity", title: "Time and Space Complexity", description: "Big O notation and complexity analysis", duration: "25 min", completed: false },
      { id: "sorting", title: "Sorting Algorithms", description: "Common sorting algorithms and their analysis", duration: "30 min", completed: false },
      { id: "searching", title: "Searching Algorithms", description: "Binary search and search algorithms", duration: "20 min", completed: false },
      { id: "dynamic-programming", title: "Dynamic Programming", description: "Solving problems with optimal substructure", duration: "35 min", completed: false }
    ]
  }
};

interface PageProps {
  params: Promise<{ moduleId: string }>;
}

export default async function ModulePage({ params }: PageProps) {
  const { moduleId } = await params;
  const module = moduleData[moduleId];

  if (!module) {
    notFound();
  }

  const completedLessons = module.lessons.filter(lesson => lesson.completed).length;
  const progressPercentage = Math.round((completedLessons / module.lessons.length) * 100);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-900">
                Software Engineering Mathematics
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/learn" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                ← Back to Learning Path
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Module Header */}
      <section className={`bg-gradient-to-r ${
        module.color === 'blue' ? 'from-blue-600 to-indigo-700' :
        module.color === 'green' ? 'from-green-600 to-teal-700' :
        module.color === 'purple' ? 'from-purple-600 to-pink-700' :
        'from-orange-600 to-red-700'
      } text-white py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <div className={`w-16 h-16 rounded-lg flex items-center justify-center text-4xl mr-6 ${
              module.color === 'blue' ? 'bg-blue-500' :
              module.color === 'green' ? 'bg-green-500' :
              module.color === 'purple' ? 'bg-purple-500' :
              'bg-orange-500'
            }`}>
              {module.icon}
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">{module.title}</h1>
              <p className="text-xl opacity-90">{module.description}</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="max-w-md">
            <div className="flex justify-between text-sm mb-2">
              <span>Progress</span>
              <span>{completedLessons} of {module.lessons.length} lessons ({progressPercentage}%)</span>
            </div>
            <div className="bg-white bg-opacity-20 rounded-full h-3">
              <div
                className="bg-white h-3 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Lessons List */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Lessons</h2>

          <div className="space-y-4">
            {module.lessons.map((lesson, index) => (
              <div key={lesson.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium mr-4 ${
                      lesson.completed
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {lesson.completed ? '✓' : index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{lesson.title}</h3>
                      <p className="text-gray-600">{lesson.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-500">{lesson.duration}</span>
                    <Link
                      href={`/learn/${moduleId}/${lesson.id}`}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        lesson.completed
                          ? 'bg-green-100 text-green-800 hover:bg-green-200'
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                    >
                      {lesson.completed ? 'Review' : 'Start'}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}