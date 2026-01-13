import Link from "next/link";

export default function Learn() {
  const modules = [
    {
      id: "discrete-math",
      title: "Discrete Mathematics",
      description: "Sets, logic, relations, and functions - the foundation of computer science",
      lessons: 12,
      duration: "8 hours",
      difficulty: "Beginner",
      icon: "🔢",
      color: "blue"
    },
    {
      id: "linear-algebra",
      title: "Linear Algebra",
      description: "Vectors, matrices, and linear transformations for computer graphics and ML",
      lessons: 10,
      duration: "6 hours",
      difficulty: "Intermediate",
      icon: "📐",
      color: "green"
    },
    {
      id: "probability",
      title: "Probability & Statistics",
      description: "Probability theory, distributions, and statistical analysis for data science",
      lessons: 8,
      duration: "5 hours",
      difficulty: "Intermediate",
      icon: "📊",
      color: "purple"
    },
    {
      id: "algorithms",
      title: "Algorithm Analysis",
      description: "Complexity analysis, algorithmic paradigms, and optimization techniques",
      lessons: 15,
      duration: "10 hours",
      difficulty: "Advanced",
      icon: "⚡",
      color: "orange"
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
              <Link href="/curriculum" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Curriculum
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Learning Path</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Master the mathematical concepts that power modern software engineering
            </p>
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modules.map((module) => (
              <div key={module.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl ${
                      module.color === 'blue' ? 'bg-blue-100' :
                      module.color === 'green' ? 'bg-green-100' :
                      module.color === 'purple' ? 'bg-purple-100' :
                      'bg-orange-100'
                    }`}>
                      {module.icon}
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      module.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                      module.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {module.difficulty}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{module.title}</h3>
                  <p className="text-gray-600 mb-4">{module.description}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{module.lessons} lessons</span>
                    <span>{module.duration}</span>
                  </div>

                  <Link
                    href={`/learn/${module.id}`}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center block"
                  >
                    Start Module
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Track Your Progress</h2>
            <p className="text-lg text-gray-600">Monitor your learning journey and celebrate milestones</p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="bg-gray-100 rounded-full h-4 mb-4">
              <div className="bg-blue-600 h-4 rounded-full" style={{ width: '15%' }}></div>
            </div>
            <p className="text-center text-gray-600">2 of 12 modules completed (15%)</p>
          </div>
        </div>
      </section>
    </div>
  );
}