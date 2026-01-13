'use client';

import { useModuleProgress } from '@/app/lib/progress-tracker';

interface MarkCompleteButtonProps {
  moduleId: string;
  lessonId: string;
}

export default function MarkCompleteButton({ moduleId, lessonId }: MarkCompleteButtonProps) {
  const { progress, markComplete } = useModuleProgress(moduleId, lessonId);

  const handleClick = () => {
    markComplete();
  };

  if (progress.completed) {
    return (
      <button
        disabled
        className="bg-gray-400 text-white px-6 py-2 rounded-lg font-medium cursor-not-allowed opacity-75"
      >
        ✓ Completed
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
    >
      Mark as Complete
    </button>
  );
}
