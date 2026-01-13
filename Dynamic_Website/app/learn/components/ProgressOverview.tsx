'use client';

import { allModules } from '@/app/lib/module-data';
import { useModuleProgressOverview } from '@/app/lib/progress-tracker';
import { useEffect, useState } from 'react';

export default function ProgressOverview() {
  const [totalCompleted, setTotalCompleted] = useState(0);
  const [totalLessons, setTotalLessons] = useState(0);

  useEffect(() => {
    let completed = 0;
    let total = 0;

    allModules.forEach(module => {
      total += module.lessons;
      // Calculate completed lessons for this module
      if (typeof window !== 'undefined') {
        try {
          const stored = localStorage.getItem(`module-progress-${module.id}`);
          if (stored) {
            const data = JSON.parse(stored);
            const moduleCompleted = Object.values(data).filter((p: any) => p.completed).length;
            completed += moduleCompleted;
          }
        } catch (error) {
          console.warn('Failed to load progress for module:', module.id);
        }
      }
    });

    setTotalCompleted(completed);
    setTotalLessons(total);
  }, []);

  const percentage = totalLessons > 0 ? Math.round((totalCompleted / totalLessons) * 100) : 0;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Track Your Progress</h2>
          <p className="text-lg text-gray-600">Monitor your learning journey and celebrate milestones</p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="bg-gray-100 rounded-full h-4 mb-4">
            <div 
              className="bg-blue-600 h-4 rounded-full transition-all duration-300" 
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          <p className="text-center text-gray-600">
            {totalCompleted} of {totalLessons} lessons completed ({percentage}%)
          </p>
        </div>
      </div>
    </section>
  );
}
