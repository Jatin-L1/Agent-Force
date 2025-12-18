import { useState } from 'react';
import { LoginScreen } from './components/mobile/LoginScreen';
import { StudentDashboard } from './components/mobile/StudentDashboard';
import { DegreeAuditView } from './components/mobile/DegreeAuditView';
import { IntelligentPlanner } from './components/mobile/IntelligentPlanner';
import { PendingDashboard } from './components/mobile/PendingDashboard';
import { BottomNavigation } from './components/mobile/BottomNavigation';

type Screen = 'login' | 'dashboard' | 'degree-audit' | 'planner' | 'pending';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentScreen('dashboard');
  };

  const navigateTo = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col max-w-md mx-auto relative">
      <div className="flex-1 overflow-y-auto pb-20">
        {currentScreen === 'dashboard' && (
          <StudentDashboard onNavigate={navigateTo} />
        )}
        {currentScreen === 'degree-audit' && (
          <DegreeAuditView onNavigate={navigateTo} />
        )}
        {currentScreen === 'planner' && (
          <IntelligentPlanner onNavigate={navigateTo} />
        )}
        {currentScreen === 'pending' && (
          <PendingDashboard onNavigate={navigateTo} />
        )}
      </div>
      
      <BottomNavigation currentScreen={currentScreen} onNavigate={navigateTo} />
    </div>
  );
}
