import Link from "next/link";
import QuizComponent from "@/app/learn/components/QuizComponent";
import { quizData } from "@/app/learn/quizzes/quizData";

export default function MathNotationBeginnerQuiz() {
  const quiz = quizData["math-notation-beginner"];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              Software Engineering Mathematics
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/learn" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Learning Path
              </Link>
              <Link href="/learn/math-notation-beginner" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Back to Module
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <QuizComponent
        title={quiz.title}
        description={quiz.description}
        questions={quiz.questions}
        moduleName="Mathematical Notation - Beginner"
      />
    </div>
  );
}
