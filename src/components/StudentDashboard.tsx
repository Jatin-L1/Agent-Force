import { motion } from 'motion/react';
import { Clock, TrendingUp, CheckCircle2, BookOpen, Calendar, AlertCircle } from 'lucide-react';
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Navigation } from './Navigation';

interface StudentDashboardProps {
  onNavigate: (screen: string) => void;
}

const academicProgress = [
  { name: 'Completed', value: 65 },
  { name: 'Remaining', value: 35 }
];

const gpaData = [
  { semester: 'Fall 23', gpa: 3.4 },
  { semester: 'Spr 24', gpa: 3.6 },
  { semester: 'Fall 24', gpa: 3.7 },
  { semester: 'Spr 25', gpa: 3.8 }
];

const COLORS = ['#3b82f6', '#e5e7eb'];

export function StudentDashboard({ onNavigate }: StudentDashboardProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation onNavigate={onNavigate} currentScreen="dashboard" />
      
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl mb-2">Welcome back, Raghav</h1>
          <p className="text-gray-600">Here's your academic overview</p>
        </div>

        {/* Registration Status Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-xl shadow-lg"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm opacity-90">Spring 2026 Registration</div>
                <div className="text-2xl">Status: OPEN</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm opacity-90">Closes in</div>
              <div className="text-2xl">2 days, 4 hours</div>
            </div>
          </div>
        </motion.div>

        {/* Main Widgets Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Academic Progress Widget */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-lg">Academic Progress</h3>
            </div>
            <div className="flex flex-col items-center">
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={academicProgress}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {academicProgress.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="text-center mt-4">
                <div className="text-3xl text-blue-600">65%</div>
                <div className="text-sm text-gray-600">Degree Complete</div>
              </div>
            </div>
          </motion.div>

          {/* GPA Trend Widget */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-lg">GPA Trend</h3>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={gpaData}>
                <XAxis dataKey="semester" tick={{ fontSize: 12 }} />
                <YAxis domain={[3.0, 4.0]} tick={{ fontSize: 12 }} />
                <Tooltip />
                <Line type="monotone" dataKey="gpa" stroke="#10b981" strokeWidth={3} dot={{ fill: '#10b981', r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
            <div className="text-center mt-4">
              <div className="text-3xl text-green-600">3.8</div>
              <div className="text-sm text-gray-600">Current GPA</div>
            </div>
          </motion.div>

          {/* Upcoming Tasks Widget */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-orange-600" />
              </div>
              <h3 className="text-lg">Upcoming Tasks</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
                <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="text-sm">Meet Academic Advisor</div>
                  <div className="text-xs text-gray-600 mt-1">Due: Dec 20, 2025</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="text-sm">Pay Spring Tuition</div>
                  <div className="text-xs text-gray-600 mt-1">Due: Dec 22, 2025</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <Calendar className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="text-sm">Register for Classes</div>
                  <div className="text-xs text-gray-600 mt-1">Closes in 2 days</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <button
            onClick={() => onNavigate('degree-audit')}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow text-left"
          >
            <BookOpen className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="text-lg mb-1">Degree Audit</h3>
            <p className="text-sm text-gray-600">Review your progress and requirements</p>
          </button>

          <button
            onClick={() => onNavigate('planner')}
            className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-xl shadow-sm text-white hover:shadow-md transition-shadow text-left"
          >
            <Calendar className="w-8 h-8 mb-3" />
            <h3 className="text-lg mb-1">Intelligent Planner</h3>
            <p className="text-sm opacity-90">AI-powered course scheduling</p>
          </button>

          <button className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow text-left">
            <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
            <h3 className="text-lg mb-1">My Schedule</h3>
            <p className="text-sm text-gray-600">View your current class schedule</p>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
