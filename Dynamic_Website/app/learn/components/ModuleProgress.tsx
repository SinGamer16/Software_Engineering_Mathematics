'use client';

import { useModuleProgressOverview } from '@/app/lib/progress-tracker';

interface ModuleProgressProps {
  moduleId: string;
  totalLessons: number;
}

export default function ModuleProgress({ moduleId, totalLessons }: ModuleProgressProps) {
  const { completed, percentage } = useModuleProgressOverview(moduleId, totalLessons);

  return (
    <div className="max-w-md">
      <div className="flex justify-between text-sm mb-2">
        <span>Progress</span>
        <span>{completed} of {totalLessons} lessons ({percentage}%)</span>
      </div>
      <div className="bg-white bg-opacity-20 rounded-full h-3">
        <div
          className="bg-white h-3 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}
