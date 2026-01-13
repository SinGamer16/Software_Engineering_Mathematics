import Link from "next/link";
import { notFound } from "next/navigation";
import { lessonContent } from "./content";
import { getModule } from "../../modules";
import PracticeProblems from "@/app/learn/components/PracticeProblems";
import MarkCompleteButton from "@/app/learn/components/MarkCompleteButton";
import Navigation from "@/app/components/Navigation";
import LessonNavigation from "@/app/learn/components/LessonNavigation";

interface PageProps {
  params: Promise<{ moduleId: string; lessonId: string }>;
}

export default async function LessonPage({ params }: PageProps) {
  const { moduleId, lessonId } = await params;

  const contentKey = lessonId as keyof typeof lessonContent;

  if (!(contentKey in lessonContent)) {
    notFound();
  }

  const lesson = lessonContent[contentKey];
  const problems = lesson.practiceProblems || [];
  const module = getModule(moduleId);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation showBackToModule={true} moduleId={moduleId} />

      {/* Lesson Header */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-2">{lesson.title}</h1>
          <p className="text-blue-100">Discrete Mathematics Module - Lesson</p>
        </div>
      </section>

      {/* Lesson Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <div
            className="prose prose-lg max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: lesson.content }}
          />
        </article>

        {/* Practice Problems */}
        {problems && problems.length > 0 && (
          <section className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Practice Problems</h2>
            {/* Check if using old or new format */}
            {'question' in problems[0] ? (
              <PracticeProblems problems={problems as any} />
            ) : (
              <div className="space-y-6">
                {problems.map((problem, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Problem {index + 1}
                    </h3>
                    <p className="text-gray-700 mb-4">{(problem as any).problem}</p>
                    <details className="cursor-pointer">
                      <summary className="text-blue-600 hover:text-blue-700 font-medium">
                        Show Solution
                      </summary>
                      <div className="mt-4 pt-4 border-t border-gray-300">
                        <p className="text-gray-700">{(problem as any).solution}</p>
                      </div>
                    </details>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Navigation Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <MarkCompleteButton moduleId={moduleId} lessonId={lessonId} />
          </div>
          {module && (
            <LessonNavigation 
              moduleId={moduleId} 
              currentLessonId={lessonId} 
              lessons={module.lessons} 
            />
          )}
        </footer>
      </main>
    </div>
  );
}