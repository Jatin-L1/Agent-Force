import { Home, BookOpen, Calendar, Activity } from 'lucide-react';

interface BottomNavigationProps {
  currentScreen: string;
  onNavigate: (screen: string) => void;
}

export function BottomNavigation({ currentScreen, onNavigate }: BottomNavigationProps) {
  const navItems = [
    { id: 'dashboard', label: 'Home', icon: Home },
    { id: 'degree-audit', label: 'Audit', icon: BookOpen },
    { id: 'planner', label: 'Planner', icon: Calendar },
    { id: 'pending', label: 'Status', icon: Activity },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 z-50">
      <div className="flex items-center justify-around px-4 py-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentScreen === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="flex flex-col items-center gap-1 min-w-0 flex-1"
            >
              <div className="relative">
                <Icon
                  className={`w-6 h-6 ${
                    isActive ? 'text-blue-600' : 'text-gray-500'
                  }`}
                />
                {item.id === 'pending' && currentScreen !== 'pending' && (
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
                )}
              </div>
              <span
                className={`text-xs ${
                  isActive ? 'text-blue-600' : 'text-gray-600'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
      
      {/* Home Indicator */}
      <div className="flex justify-center pb-2">
        <div className="w-32 h-1 bg-gray-900 rounded-full"></div>
      </div>
    </div>
  );
}
