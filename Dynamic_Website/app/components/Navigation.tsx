import Link from "next/link";

interface NavigationProps {
  showBackToModule?: boolean;
  moduleId?: string;
  showBackToLearningPath?: boolean;
}

export default function Navigation({ 
  showBackToModule = false, 
  moduleId,
  showBackToLearningPath = true 
}: NavigationProps) {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              Software Engineering Mathematics
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {showBackToLearningPath && (
              <Link 
                href="/learn" 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Learning Path
              </Link>
            )}
            {showBackToModule && moduleId && (
              <Link 
                href={`/learn/${moduleId}`} 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                ← Back to Module
              </Link>
            )}
            <Link 
              href="/" 
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link 
              href="/curriculum" 
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Curriculum
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
