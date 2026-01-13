import Link from "next/link";
import Navigation from "@/app/components/Navigation";
import ModuleCard from "@/app/components/ModuleCard";
import { allModules, getModulesBySection } from "@/app/lib/module-data";

export default function Curriculum() {
  const notationModules = getModulesBySection("Mathematical Notation");
  const coreModules = getModulesBySection("Core Mathematical Foundations");
  const csModules = getModulesBySection("Computer Science Mathematics");
  
  const curriculumStructure = [
    {
      section: "Mathematical Notation",
      modules: [
        {
          name: "Mathematical Notation - Beginner",
          description: "Introduction to essential mathematical symbols and notation",
          lessons: 4,
          duration: "1 hour",
          icon: "𝔸",
          id: "math-notation-beginner",
          status: "available"
        },
        {
          name: "Mathematical Notation - Intermediate",
          description: "Advanced notation for calculus, linear algebra, and logic",
          lessons: 4,
          duration: "1.5 hours",
          icon: "∑",
          id: "math-notation-intermediate",
          status: "available"
        },
        {
          name: "Mathematical Notation - Advanced",
          description: "Complex notation for advanced mathematics and applications",
          lessons: 5,
          duration: "2 hours",
          icon: "∇",
          id: "math-notation-advanced",
          status: "available"
        }
      ]
    },
    {
      section: "Core Mathematical Foundations",
      modules: [
        {
          name: "Discrete Mathematics",
          description: "Sets, logic, relations, functions, and combinatorics",
          lessons: 7,
          duration: "6 hours",
          icon: "🔢",
          id: "discrete-math",
          status: "available"
        },
        {
          name: "Linear Algebra",
          description: "Vectors, matrices, systems of equations, eigenvalues, and orthogonality",
          lessons: 5,
          duration: "4 hours",
          icon: "📐",
          id: "linear-algebra",
          status: "available"
        },
        {
          name: "Probability & Statistics",
          description: "Probability, distributions, conditional probability, and statistical inference",
          lessons: 6,
          duration: "5 hours",
          icon: "📊",
          id: "probability",
          status: "available"
        },
        {
          name: "Calculus",
          description: "Limits, derivatives, integration, and multivariable calculus",
          lessons: 5,
          duration: "5 hours",
          icon: "📈",
          id: "calculus",
          status: "available"
        }
      ]
    },
    {
      section: "Computer Science Mathematics",
      modules: [
        {
          name: "Algorithm Analysis",
          description: "Complexity analysis, sorting, searching, and dynamic programming",
          lessons: 4,
          duration: "4 hours",
          icon: "⚡",
          id: "algorithms",
          status: "available"
        },
        {
          name: "Graph Theory",
          description: "Graphs, networks, trees, and graph algorithms",
          lessons: 6,
          duration: "5 hours",
          icon: "🕸️",
          id: "graph-theory",
          status: "coming-soon"
        },
        {
          name: "Automata & Formal Languages",
          description: "Regular expressions, context-free grammars, and Turing machines",
          lessons: 5,
          duration: "4 hours",
          icon: "🤖",
          id: "automata",
          status: "coming-soon"
        }
      ]
    },
    {
      section: "Advanced & Specialized Topics",
      modules: [
        {
          name: "Numerical Methods",
          description: "Numerical approximation and computational techniques",
          lessons: 4,
          duration: "3 hours",
          icon: "🔬",
          id: "numerical-methods",
          status: "coming-soon"
        },
        {
          name: "Optimization",
          description: "Linear programming and optimization techniques",
          lessons: 5,
          duration: "4 hours",
          icon: "📈",
          id: "optimization",
          status: "coming-soon"
        },
        {
          name: "Cryptography Mathematics",
          description: "Number theory and cryptographic foundations",
          lessons: 5,
          duration: "4 hours",
          icon: "🔐",
          id: "cryptography",
          status: "coming-soon"
        },
        {
          name: "Information Theory",
          description: "Entropy, coding theory, and compression",
          lessons: 4,
          duration: "3 hours",
          icon: "📡",
          id: "information-theory",
          status: "coming-soon"
        }
      ]
    }
  ];

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
              <Link href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link href="/learn" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Start Learning
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Complete Curriculum</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Comprehensive mathematics education for software engineers and computer scientists
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <div className="flex items-center gap-2 text-blue-100">
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span>Available</span>
              </div>
              <div className="flex items-center gap-2 text-blue-100">
                <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                <span>Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Sections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {curriculumStructure.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-blue-600">
                {section.section}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.section === "Mathematical Notation" && notationModules.map((module) => (
                  <ModuleCard key={module.id} module={module} />
                ))}
                {section.section === "Core Mathematical Foundations" && coreModules.map((module) => (
                  <ModuleCard key={module.id} module={module} />
                ))}
                {section.section === "Computer Science Mathematics" && csModules.map((module) => (
                  <ModuleCard key={module.id} module={module} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-blue-50 py-16 border-t border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{allModules.length}</div>
              <p className="text-gray-600">Modules Available</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {allModules.reduce((sum, m) => sum + m.lessons, 0)}
              </div>
              <p className="text-gray-600">Total Lessons</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">~37 hrs</div>
              <p className="text-gray-600">Learning Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path Recommendations */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended Learning Paths</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg border border-blue-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🚀 Beginner Path</h3>
              <ol className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 font-semibold mr-3">1.</span>
                  <span><strong>Discrete Mathematics</strong> - Foundation for computer science</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-semibold mr-3">2.</span>
                  <span><strong>Linear Algebra</strong> - Essential for ML and graphics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-semibold mr-3">3.</span>
                  <span><strong>Algorithm Analysis</strong> - Core CS skills</span>
                </li>
              </ol>
              <p className="text-sm text-gray-500 mt-4">⏱️ ~16 hours</p>
            </div>

            <div className="bg-white rounded-lg border border-purple-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">📊 Data Science Path</h3>
              <ol className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-purple-600 font-semibold mr-3">1.</span>
                  <span><strong>Probability & Statistics</strong> - Data fundamentals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-semibold mr-3">2.</span>
                  <span><strong>Linear Algebra</strong> - ML algorithms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-semibold mr-3">3.</span>
                  <span><strong>Calculus</strong> - Optimization techniques</span>
                </li>
              </ol>
              <p className="text-sm text-gray-500 mt-4">⏱️ ~14 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Begin your journey to mastering mathematics for software engineering
          </p>
          <Link
            href="/learn"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Start Learning Now
          </Link>
        </div>
      </section>
    </div>
  );
}
