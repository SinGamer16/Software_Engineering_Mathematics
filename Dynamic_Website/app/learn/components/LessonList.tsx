'use client';

import Link from 'next/link';
import { Lesson } from '@/app/lib/types';
import { useModuleProgress } from '@/app/lib/progress-tracker';
import { useEffect, useState } from 'react';

interface LessonListProps {
  moduleId: string;
  lessons: Lesson[];
}

export default function LessonList({ moduleId, lessons }: LessonListProps) {
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    try {
      const stored = localStorage.getItem(`module-progress-${moduleId}`);
      if (stored) {
        const data = JSON.parse(stored);
        const completed = new Set(
          Object.entries(data)
            .filter(([_, progress]: [string, any]) => progress.completed)
            .map(([lessonId]) => lessonId)
        );
        setCompletedLessons(completed);
      }
    } catch (error) {
      console.warn('Failed to load lesson progress:', error);
    }
  }, [moduleId]);

  return (
    <div className="space-y-4">
      {lessons.map((lesson, index) => {
        const isCompleted = completedLessons.has(lesson.id);
        return (
          <div key={lesson.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium mr-4 ${
                  isCompleted
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {isCompleted ? '✓' : index + 1}
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
                    isCompleted
                      ? 'bg-green-100 text-green-800 hover:bg-green-200'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {isCompleted ? 'Review' : 'Start'}
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
