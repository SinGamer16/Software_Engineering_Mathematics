'use client';

import { useState, useEffect } from 'react';

interface LessonProgress {
  completed: boolean;
  completedAt?: string;
}

interface ModuleProgress {
  [lessonId: string]: LessonProgress;
}

interface ProgressData {
  [moduleId: string]: ModuleProgress;
}

export function useModuleProgress(moduleId: string, lessonId: string) {
  const [progress, setProgress] = useState<LessonProgress>({ completed: false });

  // Load progress from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(`module-progress-${moduleId}`);
    if (stored) {
      const data: ModuleProgress = JSON.parse(stored);
      if (data[lessonId]) {
        setProgress(data[lessonId]);
      }
    }
  }, [moduleId, lessonId]);

  const markComplete = () => {
    const newProgress: LessonProgress = {
      completed: true,
      completedAt: new Date().toISOString()
    };

    // Update state
    setProgress(newProgress);

    // Save to localStorage
    const stored = localStorage.getItem(`module-progress-${moduleId}`) || '{}';
    const data: ModuleProgress = JSON.parse(stored);
    data[lessonId] = newProgress;
    localStorage.setItem(`module-progress-${moduleId}`, JSON.stringify(data));
  };

  return { progress, markComplete };
}

export function useModuleProgressOverview(moduleId: string, totalLessons: number) {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem(`module-progress-${moduleId}`);
    if (stored) {
      const data: ModuleProgress = JSON.parse(stored);
      const completedCount = Object.values(data).filter(p => p.completed).length;
      setCompleted(completedCount);
    }
  }, [moduleId]);

  const percentage = totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0;

  return { completed, percentage, total: totalLessons };
}