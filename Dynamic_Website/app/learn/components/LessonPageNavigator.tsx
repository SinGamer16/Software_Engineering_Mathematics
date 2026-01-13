'use client';

import { useState } from 'react';

interface LessonPage {
  id: string;
  title: string;
  content: string;
}

interface LessonPageNavigatorProps {
  pages: readonly LessonPage[];
  lessonTitle: string;
}

export default function LessonPageNavigator({
  pages,
  lessonTitle
}: LessonPageNavigatorProps) {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const currentPage = pages[currentPageIndex];
  const totalPages = pages.length;

  const goToNextPage = () => {
    if (currentPageIndex < totalPages - 1) {
      setCurrentPageIndex(currentPageIndex + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToPreviousPage = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(currentPageIndex - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Progress Indicator */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">{lessonTitle}</h2>
            <span className="text-sm text-gray-600">
              Page {currentPageIndex + 1} of {totalPages}
            </span>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${((currentPageIndex + 1) / totalPages) * 100}%`
              }}
            ></div>
          </div>

          {/* Page Indicators */}
          <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
            {pages.map((page, index) => (
              <button
                key={page.id}
                onClick={() => setCurrentPageIndex(index)}
                className={`px-3 py-1 rounded text-sm whitespace-nowrap transition-colors ${
                  index === currentPageIndex
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {index + 1}. {page.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">{currentPage.title}</h3>
          <div
            className="prose prose-lg max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: currentPage.content }}
          />
        </article>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center gap-4">
          <button
            onClick={goToPreviousPage}
            disabled={currentPageIndex === 0}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              currentPageIndex === 0
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            ← Previous
          </button>

          <div className="text-sm text-gray-600">
            {currentPageIndex + 1} / {totalPages}
          </div>

          <button
            onClick={goToNextPage}
            disabled={currentPageIndex === totalPages - 1}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              currentPageIndex === totalPages - 1
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
