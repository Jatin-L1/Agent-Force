import { motion } from 'motion/react';
import { Clock, TrendingUp, CheckCircle2, BookOpen, Calendar, AlertCircle, ChevronRight, User } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { StatusBar } from './StatusBar';

interface StudentDashboardProps {
  onNavigate: (screen: string) => void;
}

const academicProgress = [
  { name: 'Completed', value: 65 },
  { name: 'Remaining', value: 35 }
];

const COLORS = ['#3b82f6', '#e5e7eb'];

export function StudentDashboard({ onNavigate }: StudentDashboardProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-600">
      {/* Status Bar */}
      <div className="text-white">
        <StatusBar />
      </div>

      {/* Header */}
      <div className="px-6 py-4 text-white">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <span className="text-xl">U</span>
            </div>
            <div>
              <h1 className="text-xl">University Portal</h1>
              <p className="text-sm opacity-90">Student System</p>
            </div>
          </div>
          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <User className="w-5 h-5" />
          </div>
        </div>

        {/* Search Bar */}
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-3 mb-4">
          <input
            type="text"
            placeholder="Jump to or search..."
            className="w-full bg-transparent text-white placeholder-white/70 outline-none"
          />
        </div>

        {/* Registration Status Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl mb-6"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span className="text-sm">Registration</span>
            </div>
            <span className="text-xs bg-green-400 text-green-900 px-2 py-1 rounded-full">OPEN</span>
          </div>
          <div className="text-lg">Closes in 2 days, 4 hours</div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-t-3xl p-6 space-y-6 min-h-[60vh]">
        <div>
          <h2 className="text-xl mb-1 text-gray-900">Welcome back, Raghav</h2>
          <p className="text-gray-600 text-sm">Here's your academic overview</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => onNavigate('planner')}
            className="bg-gradient-to-br from-blue-600 to-blue-700 p-4 rounded-2xl text-white text-left active:scale-95 transition-transform"
          >
            <Calendar className="w-8 h-8 mb-3" />
            <h3 className="text-sm mb-1">Course Planner</h3>
            <p className="text-xs opacity-90">AI-powered scheduling</p>
          </button>

          <button
            onClick={() => onNavigate('degree-audit')}
            className="bg-white border border-gray-200 p-4 rounded-2xl text-left active:scale-95 transition-transform"
          >
            <BookOpen className="w-8 h-8 mb-3 text-blue-600" />
            <h3 className="text-sm mb-1">Degree Audit</h3>
            <p className="text-xs text-gray-600">Track progress</p>
          </button>
        </div>

        {/* Academic Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white border border-gray-200 p-4 rounded-2xl"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-lg">Academic Progress</h3>
          </div>
          
          <div className="flex items-center gap-4">
            <ResponsiveContainer width={100} height={100}>
              <PieChart>
                <Pie
                  data={academicProgress}
                  cx="50%"
                  cy="50%"
                  innerRadius={30}
                  outerRadius={45}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {academicProgress.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="flex-1">
              <div className="text-3xl text-blue-600 mb-1">65%</div>
              <div className="text-sm text-gray-600">Degree Complete</div>
              <div className="text-xs text-gray-500 mt-1">78 of 120 credits</div>
            </div>
          </div>
        </motion.div>

        {/* GPA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 p-4 rounded-2xl"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-600 mb-1">Current GPA</div>
              <div className="text-4xl text-green-600">3.8</div>
              <div className="text-xs text-gray-600 mt-1 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                <span>Trending up</span>
              </div>
            </div>
            <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center">
              <TrendingUp className="w-10 h-10 text-green-600" />
            </div>
          </div>
        </motion.div>

        {/* Upcoming Tasks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white border border-gray-200 p-4 rounded-2xl"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-orange-600" />
              </div>
              <h3 className="text-lg">Upcoming Tasks</h3>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-xl border border-orange-200">
              <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
              <div className="flex-1">
                <div className="text-sm">Meet Academic Advisor</div>
                <div className="text-xs text-gray-600">Due: Dec 20, 2025</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-red-50 rounded-xl border border-red-200">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
              <div className="flex-1">
                <div className="text-sm">Pay Spring Tuition</div>
                <div className="text-xs text-gray-600">Due: Dec 22, 2025</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl border border-blue-200">
              <Calendar className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <div className="flex-1">
                <div className="text-sm">Register for Classes</div>
                <div className="text-xs text-gray-600">Closes in 2 days</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
