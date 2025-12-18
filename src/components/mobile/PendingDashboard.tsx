import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, Circle, CheckCircle2, Loader2, Calendar, ChevronLeft } from 'lucide-react';
import { StatusBar } from './StatusBar';

interface PendingDashboardProps {
  onNavigate: (screen: string) => void;
}

const courses = [
  { code: 'CS 201', name: 'Data Structures', credits: 4 },
  { code: 'HIST 201', name: 'World History', credits: 3 },
  { code: 'CS 305', name: 'Computer Architecture', credits: 3 },
  { code: 'CS 410', name: 'Database Systems', credits: 3 }
];

export function PendingDashboard({ onNavigate }: PendingDashboardProps) {
  const [timeRemaining, setTimeRemaining] = useState({
    hours: 3,
    minutes: 42,
    seconds: 15
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-600">
      {/* Status Bar & Header */}
      <div className="text-white">
        <StatusBar />
        
        <div className="px-6 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('dashboard')}
              className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex-1">
              <h1 className="text-xl">Registration Status</h1>
              <p className="text-sm opacity-90">Request pending</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-t-3xl p-6 space-y-6 min-h-[80vh]">
        {/* Success Icon */}
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <Clock className="w-10 h-10 text-blue-600" />
          </motion.div>
          <h2 className="text-2xl mb-2">Request Received!</h2>
          <p className="text-gray-600 text-sm">Your request is queued for processing</p>
        </div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-6"
        >
          <div className="text-center mb-4">
            <div className="text-sm opacity-90 mb-2">Allocation runs in</div>
            <div className="flex items-center justify-center gap-2">
              <div className="text-center">
                <div className="text-4xl tabular-nums">
                  {String(timeRemaining.hours).padStart(2, '0')}
                </div>
                <div className="text-xs opacity-75 mt-1">hrs</div>
              </div>
              <div className="text-2xl opacity-50">:</div>
              <div className="text-center">
                <div className="text-4xl tabular-nums">
                  {String(timeRemaining.minutes).padStart(2, '0')}
                </div>
                <div className="text-xs opacity-75 mt-1">min</div>
              </div>
              <div className="text-2xl opacity-50">:</div>
              <div className="text-center">
                <div className="text-4xl tabular-nums">
                  {String(timeRemaining.seconds).padStart(2, '0')}
                </div>
                <div className="text-xs opacity-75 mt-1">sec</div>
              </div>
            </div>
          </div>
          
          <div className="pt-4 border-t border-white/20 text-center">
            <div className="text-xs opacity-75">Scheduled for Today</div>
            <div className="text-lg">5:00 PM</div>
          </div>
        </motion.div>

        {/* Request Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white border border-gray-200 rounded-2xl p-4"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg">Request Details</h3>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">
              Pending
            </span>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mb-4 pb-4 border-b border-gray-200">
            <div>
              <div className="text-xs text-gray-600 mb-1">Request ID</div>
              <div className="font-mono text-xs">REQ-8821</div>
            </div>
            <div>
              <div className="text-xs text-gray-600 mb-1">Total Credits</div>
              <div className="text-xs">{courses.reduce((sum, c) => sum + c.credits, 0)} credits</div>
            </div>
          </div>

          <h4 className="text-sm text-gray-600 mb-3">Requested Courses</h4>
          <div className="space-y-2">
            {courses.map((course, index) => (
              <motion.div
                key={course.code}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.05 }}
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl"
              >
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm truncate">{course.code}</div>
                  <div className="text-xs text-gray-600 truncate">{course.name}</div>
                </div>
                <div className="text-xs text-gray-600 flex-shrink-0">{course.credits} cr</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Status Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white border border-gray-200 rounded-2xl p-4"
        >
          <h3 className="text-lg mb-4">Processing Status</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
              </div>
              <div className="flex-1">
                <div className="text-sm">Request Submitted</div>
                <div className="text-xs text-gray-600">Completed</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
              </div>
              <div className="flex-1">
                <div className="text-sm">Prerequisites Verified</div>
                <div className="text-xs text-gray-600">Completed</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Loader2 className="w-4 h-4 text-blue-600 animate-spin" />
              </div>
              <div className="flex-1">
                <div className="text-sm">Awaiting Algorithm</div>
                <div className="text-xs text-gray-600">In Progress</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Circle className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-400">Seat Allocation</div>
                <div className="text-xs text-gray-600">Pending</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Circle className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-400">Email Confirmation</div>
                <div className="text-xs text-gray-600">Pending</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-blue-50 border border-blue-200 p-4 rounded-2xl"
        >
          <div className="flex items-start gap-3">
            <Calendar className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-sm text-blue-900 mb-1">What happens next?</div>
              <div className="text-xs text-blue-700">
                You'll receive an email with your registration results once the batch algorithm runs at 5:00 PM.
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action Button */}
        <button
          onClick={() => onNavigate('dashboard')}
          className="w-full py-3 border border-gray-300 rounded-2xl active:bg-gray-50 transition-colors"
        >
          Return to Dashboard
        </button>
      </div>
    </div>
  );
}
