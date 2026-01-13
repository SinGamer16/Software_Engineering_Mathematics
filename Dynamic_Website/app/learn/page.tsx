import Navigation from "@/app/components/Navigation";
import ModuleCard from "@/app/components/ModuleCard";
import { allModules, getModulesBySection } from "@/app/lib/module-data";
import ProgressOverview from "@/app/learn/components/ProgressOverview";

export default function Learn() {
  const notationModules = getModulesBySection("Mathematical Notation");
  const coreModules = getModulesBySection("Core Mathematical Foundations");
  const csModules = getModulesBySection("Computer Science Mathematics");

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Learning Path</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Master the mathematical concepts that power modern software engineering
            </p>
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Mathematical Notation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {notationModules.map((module) => (
                <ModuleCard key={module.id} module={module} />
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Core Mathematical Foundations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coreModules.map((module) => (
                <ModuleCard key={module.id} module={module} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Computer Science Mathematics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {csModules.map((module) => (
                <ModuleCard key={module.id} module={module} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <ProgressOverview />
    </div>
  );
}
