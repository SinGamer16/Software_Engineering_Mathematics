'use client';

import Link from 'next/link';
import { Lesson } from '@/app/lib/types';

interface LessonNavigationProps {
  moduleId: string;
  currentLessonId: string;
  lessons: Lesson[];
}

export default function LessonNavigation({ moduleId, currentLessonId, lessons }: LessonNavigationProps) {
  const currentIndex = lessons.findIndex(l => l.id === currentLessonId);
  const previousLesson = currentIndex > 0 ? lessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null;

  return (
    <div className="flex justify-between items-center gap-4">
      {previousLesson ? (
        <Link
          href={`/learn/${moduleId}/${previousLesson.id}`}
          className="text-gray-600 hover:text-gray-900 font-medium flex items-center"
        >
          ← {previousLesson.title}
        </Link>
      ) : (
        <Link
          href={`/learn/${moduleId}`}
          className="text-gray-600 hover:text-gray-900 font-medium"
        >
          ← Back to Module
        </Link>
      )}
      
      <div className="text-sm text-gray-500">
        Lesson {currentIndex + 1} of {lessons.length}
      </div>

      {nextLesson ? (
        <Link
          href={`/learn/${moduleId}/${nextLesson.id}`}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center"
        >
          {nextLesson.title} →
        </Link>
      ) : (
        <Link
          href={`/learn/${moduleId}`}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Back to Module →
        </Link>
      )}
    </div>
  );
}
