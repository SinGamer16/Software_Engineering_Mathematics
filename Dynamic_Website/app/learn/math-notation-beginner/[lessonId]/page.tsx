import Link from "next/link";
import { notFound } from "next/navigation";
import { lessonContent } from "../content";
import LessonPageNavigator from "@/app/learn/components/LessonPageNavigator";
import PracticeProblems from "@/app/learn/components/PracticeProblems";

interface PageProps {
  params: Promise<{ lessonId: string }>;
}

export default async function LessonPage({ params }: PageProps) {
  const { lessonId } = await params;

  const contentKey = lessonId as keyof typeof lessonContent;

  if (!(contentKey in lessonContent)) {
    notFound();
  }

  const lesson = lessonContent[contentKey];
  const problems = lesson.practiceProblems || [];

  // If lesson has pages, use the multi-page navigator
  if ('pages' in lesson && lesson.pages && lesson.pages.length > 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <Link href="/" className="text-xl font-bold text-gray-900">
                Software Engineering Mathematics
              </Link>
              <div className="flex items-center space-x-4">
                <Link href="/learn" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  Learning Path
                </Link>
                <Link href="/learn/math-notation-beginner" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  ← Back to Module
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <LessonPageNavigator pages={lesson.pages} lessonTitle={lesson.title} />

        {/* Practice Problems Section */}
        {problems.length > 0 && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Practice Problems</h2>
              <PracticeProblems problems={problems} />
            </div>

            {/* Footer Navigation */}
            <div className="mt-12 flex gap-4 justify-between">
              <Link
                href="/learn/math-notation-beginner"
                className="px-6 py-3 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 font-medium transition-colors"
              >
                ← Back to Module
              </Link>
              <Link
                href="/learn"
                className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 font-medium transition-colors"
              >
                Back to Learning Path
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Handle lessons with content property
  if (!('content' in lesson)) {
    notFound();
  }

  const lessonWithContent = lesson as { title: string; description: string; content: string; practiceProblems?: readonly any[] };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-900">
                Software Engineering Mathematics
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/learn" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Learning Path
              </Link>
              <Link href="/learn/math-notation-beginner" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                ← Back to Module
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Lesson Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{lessonWithContent.title}</h1>
          <p className="text-lg text-gray-600 mb-8">{lessonWithContent.description}</p>

          {/* Main Content */}
          <div className="prose prose-sm max-w-none mb-12">
            <div dangerouslySetInnerHTML={{ __html: lessonWithContent.content }} />
          </div>

          {/* Practice Problems */}
          {problems.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Practice Problems</h2>
              <PracticeProblems problems={problems} />
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 justify-between">
          <Link
            href="/learn/math-notation-beginner"
            className="px-6 py-3 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 font-medium transition-colors"
          >
            ← Back to Module
          </Link>
          <Link
            href="/learn"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 font-medium transition-colors"
          >
            Back to Learning Path
          </Link>
        </div>
      </div>
    </div>
  );
}
