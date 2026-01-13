import Link from "next/link";
import { ModuleMetadata } from '@/app/lib/types';

interface ModuleCardProps {
  module: ModuleMetadata;
}

export default function ModuleCard({ module }: ModuleCardProps) {
  const colorMap = {
    blue: 'bg-blue-100',
    green: 'bg-green-100',
    purple: 'bg-purple-100',
    orange: 'bg-orange-100',
    red: 'bg-red-100',
    cyan: 'bg-cyan-100',
    indigo: 'bg-indigo-100',
    pink: 'bg-pink-100'
  };

  const colorClass = colorMap[module.color] || 'bg-blue-100';
  const isAvailable = !module.status || module.status === "available";

  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow ${
      !isAvailable ? 'opacity-75' : ''
    }`}>
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl ${colorClass}`}>
            {module.icon}
          </div>
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
            module.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
            module.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {module.difficulty}
          </span>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-2">{module.title}</h3>
        <p className="text-gray-600 mb-4">{module.description}</p>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <span>📚 {module.lessons} lessons</span>
          <span>⏱️ {module.duration}</span>
        </div>

        {isAvailable ? (
          <Link
            href={`/learn/${module.id}`}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center block"
          >
            Start Module
          </Link>
        ) : (
          <button className="w-full bg-gray-200 text-gray-600 py-2 px-4 rounded-lg font-medium cursor-not-allowed">
            Coming Soon
          </button>
        )}
      </div>
    </div>
  );
}
