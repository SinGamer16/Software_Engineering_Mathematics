import Link from "next/link";
import { notFound } from "next/navigation";
import { getModule } from "../modules";
import Navigation from "@/app/components/Navigation";
import LessonList from "@/app/learn/components/LessonList";
import ModuleProgress from "@/app/learn/components/ModuleProgress";

interface PageProps {
  params: Promise<{ moduleId: string }>;
}

export default async function ModulePage({ params }: PageProps) {
  const { moduleId } = await params;
  const module = getModule(moduleId);

  if (!module) {
    notFound();
  }


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
      <Navigation showBackToLearningPath={true} />

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
          <ModuleProgress moduleId={moduleId} totalLessons={module.lessons.length} />
        </div>
      </section>

      {/* Lessons List */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Lessons</h2>

          <LessonList moduleId={moduleId} lessons={module.lessons} />
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