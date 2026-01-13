import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
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
                Start Learning
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            Master Mathematics for
            <span className="text-blue-600 block">Software Engineering</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Interactive learning platform covering discrete mathematics, algorithms, and computational thinking
            essential for modern software development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/learn"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Learning
            </Link>
            <Link
              href="/curriculum"
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              View Curriculum
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Learn Mathematics for Software Engineering?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mathematics forms the foundation of computer science and software engineering.
              Master the concepts that power modern technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔢</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Discrete Mathematics</h3>
              <p className="text-gray-600">
                Sets, logic, graph theory, and combinatorics - the building blocks of algorithms and data structures.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Probability & Statistics</h3>
              <p className="text-gray-600">
                Statistical analysis, probability distributions, and data-driven decision making for software systems.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧮</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Linear Algebra</h3>
              <p className="text-gray-600">
                Vectors, matrices, and transformations essential for computer graphics, machine learning, and optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Curriculum Overview</h2>
            <p className="text-lg text-gray-600">Comprehensive coverage from fundamentals to advanced topics</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Mathematical Foundations</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Discrete Mathematics & Set Theory</li>
                <li>• Logic & Proof Techniques</li>
                <li>• Combinatorics & Counting</li>
                <li>• Graph Theory Fundamentals</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Computer Science Mathematics</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Algorithm Analysis & Complexity</li>
                <li>• Automata & Formal Languages</li>
                <li>• Cryptography Mathematics</li>
                <li>• Information Theory</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Software Engineering Mathematics</h3>
            <p className="text-gray-400 mb-4">
              Building the mathematical foundation for the next generation of software engineers.
            </p>
            <p className="text-sm text-gray-500">
              © 2026 Software Engineering Mathematics. Built for the developer community.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
