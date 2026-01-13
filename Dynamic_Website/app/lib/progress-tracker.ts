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

// Safe localStorage access with error handling
function getLocalStorageItem(key: string): string | null {
  if (typeof window === 'undefined') return null;
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.warn('localStorage access failed:', error);
    return null;
  }
}

function setLocalStorageItem(key: string, value: string): boolean {
  if (typeof window === 'undefined') return false;
  try {
    localStorage.setItem(key, value);
    return true;
  } catch (error) {
    console.warn('localStorage write failed:', error);
    return false;
  }
}

export function useModuleProgress(moduleId: string, lessonId: string) {
  const [progress, setProgress] = useState<LessonProgress>({ completed: false });

  // Load progress from localStorage
  useEffect(() => {
    const stored = getLocalStorageItem(`module-progress-${moduleId}`);
    if (stored) {
      try {
        const data: ModuleProgress = JSON.parse(stored);
        if (data[lessonId]) {
          setProgress(data[lessonId]);
        }
      } catch (error) {
        console.warn('Failed to parse progress data:', error);
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
    const stored = getLocalStorageItem(`module-progress-${moduleId}`) || '{}';
    try {
      const data: ModuleProgress = JSON.parse(stored);
      data[lessonId] = newProgress;
      setLocalStorageItem(`module-progress-${moduleId}`, JSON.stringify(data));
    } catch (error) {
      console.warn('Failed to save progress:', error);
    }
  };

  return { progress, markComplete };
}

export function useModuleProgressOverview(moduleId: string, totalLessons: number) {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    const stored = getLocalStorageItem(`module-progress-${moduleId}`);
    if (stored) {
      try {
        const data: ModuleProgress = JSON.parse(stored);
        const completedCount = Object.values(data).filter(p => p.completed).length;
        setCompleted(completedCount);
      } catch (error) {
        console.warn('Failed to parse progress overview:', error);
      }
    }
  }, [moduleId]);

  const percentage = totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0;

  return { completed, percentage, total: totalLessons };
}