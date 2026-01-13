import Link from "next/link";
import { notFound } from "next/navigation";
import { getModule } from "../modules";

interface PageProps {
  params: Promise<{ moduleId: string }>;
}

export default async function ModulePage({ params }: PageProps) {
  const { moduleId } = await params;
  const module = getModule(moduleId);

  if (!module) {
    notFound();
  }

  const completedLessons = module.lessons.filter(lesson => lesson.completed).length;
  const progressPercentage = Math.round((completedLessons / module.lessons.length) * 100);

  const colorMap = {
    blue: 'from-blue-600 to-indigo-700',
    green: 'from-green-600 to-teal-700',
    purple: 'from-purple-600 to-pink-700',
    orange: 'from-orange-600 to-red-700'
  };

  const colorKey = module.color as keyof typeof colorMap;
  const gradientClass = colorMap[colorKey] || 'from-blue-600 to-indigo-700';

  const bgColorMap = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
    orange: 'bg-orange-500'
  };

  const bgColorClass = bgColorMap[colorKey] || 'bg-blue-500';

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
      <section className={`bg-gradient-to-r ${gradientClass} text-white py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <div className={`w-16 h-16 rounded-lg flex items-center justify-center text-4xl mr-6 ${bgColorClass}`}>
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

      {/* Quiz Section */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-200 p-8">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Test Your Knowledge</h3>
                <p className="text-gray-600 mb-4">
                  Ready to check how well you've learned the material? Take the module quiz to assess your understanding.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>✓ Instant feedback on each answer</li>
                  <li>✓ See your final score and results</li>
                  <li>✓ Review explanations for every question</li>
                </ul>
              </div>
              <Link
                href={`/learn/${moduleId}/quiz`}
                className="mt-4 sm:mt-0 px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors whitespace-nowrap"
              >
                Start Quiz →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}