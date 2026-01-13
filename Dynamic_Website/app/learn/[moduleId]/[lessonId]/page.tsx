import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ moduleId: string; lessonId: string }>;
}

export default async function LessonPage({ params }: PageProps) {
  const { moduleId, lessonId } = await params;

  // This would typically come from a database or CMS
  const lessonContent = {
    title: "Sample Lesson Title",
    content: `
      <h2>Lesson Content</h2>
      <p>This is where the lesson content would go. In a real application, this would include:</p>
      <ul>
        <li>Interactive explanations</li>
        <li>Mathematical formulas</li>
        <li>Code examples</li>
        <li>Practice problems</li>
      </ul>
      <h3>Example</h3>
      <p>Here's a simple mathematical concept:</p>
      <div class="math-example">
        A ∪ B = {x | x ∈ A ∨ x ∈ B}
      </div>
    `,
    moduleTitle: "Module Title"
  };

  if (!lessonContent) {
    notFound();
  }

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
                Learning Path
              </Link>
              <Link href={`/learn/${moduleId}`} className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                ← Back to {lessonContent.moduleTitle}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Lesson Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <article className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{lessonContent.title}</h1>
            <div className="flex items-center text-sm text-gray-500">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                {lessonContent.moduleTitle}
              </span>
            </div>
          </header>

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: lessonContent.content }}
          />

          {/* Navigation */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <Link
                href={`/learn/${moduleId}`}
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                ← Previous Lesson
              </Link>
              <div className="flex space-x-4">
                <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors">
                  Mark as Complete
                </button>
                <Link
                  href={`/learn/${moduleId}`}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Next Lesson →
                </Link>
              </div>
            </div>
          </footer>
        </article>
      </main>
    </div>
  );
}