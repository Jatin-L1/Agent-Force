import { Home, BookOpen, Calendar, User, Bell } from 'lucide-react';

interface NavigationProps {
  onNavigate: (screen: string) => void;
  currentScreen: string;
}

export function Navigation({ onNavigate, currentScreen }: NavigationProps) {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white">U</span>
              </div>
              <span className="text-lg">University Portal</span>
            </div>
            
            <div className="hidden md:flex items-center gap-1">
              <button
                onClick={() => onNavigate('dashboard')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  currentScreen === 'dashboard'
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Home className="w-4 h-4" />
                <span className="text-sm">Home</span>
              </button>
              
              <button
                onClick={() => onNavigate('degree-audit')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  currentScreen === 'degree-audit'
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span className="text-sm">Degree Audit</span>
              </button>
              
              <button
                onClick={() => onNavigate('planner')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  currentScreen === 'planner'
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Calendar className="w-4 h-4" />
                <span className="text-sm">Course Planner</span>
              </button>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="relative p-2 text-gray-600 hover:bg-gray-50 rounded-lg">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            <div className="flex items-center gap-3 pl-3 border-l border-gray-200">
              <div className="text-right hidden sm:block">
                <div className="text-sm">Raghav Kumar</div>
                <div className="text-xs text-gray-600">ID: 20240815</div>
              </div>
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
                RK
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
