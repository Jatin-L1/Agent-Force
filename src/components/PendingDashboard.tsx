import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, Circle, CheckCircle2, Loader2, Calendar } from 'lucide-react';
import { Navigation } from './Navigation';

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

  const allocationTime = '5:00 PM';
  const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation onNavigate={onNavigate} currentScreen="pending" />
      
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Clock className="w-10 h-10 text-blue-600" />
          </motion.div>
          <h1 className="text-3xl mb-2">Registration Request Pending</h1>
          <p className="text-gray-600">Your request is queued for batch processing</p>
        </div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl shadow-lg p-8"
        >
          <div className="text-center mb-6">
            <div className="text-sm opacity-90 mb-2">Batch allocation runs in</div>
            <div className="flex items-center justify-center gap-4">
              <div className="text-center">
                <div className="text-5xl tabular-nums">
                  {String(timeRemaining.hours).padStart(2, '0')}
                </div>
                <div className="text-sm opacity-75 mt-1">Hours</div>
              </div>
              <div className="text-4xl opacity-50">:</div>
              <div className="text-center">
                <div className="text-5xl tabular-nums">
                  {String(timeRemaining.minutes).padStart(2, '0')}
                </div>
                <div className="text-sm opacity-75 mt-1">Minutes</div>
              </div>
              <div className="text-4xl opacity-50">:</div>
              <div className="text-center">
                <div className="text-5xl tabular-nums">
                  {String(timeRemaining.seconds).padStart(2, '0')}
                </div>
                <div className="text-sm opacity-75 mt-1">Seconds</div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-between pt-6 border-t border-white/20">
            <div>
              <div className="text-sm opacity-75">Scheduled for</div>
              <div className="text-lg">{today}</div>
            </div>
            <div className="text-right">
              <div className="text-sm opacity-75">Run time</div>
              <div className="text-lg">{allocationTime}</div>
            </div>
          </div>
        </motion.div>

        {/* Request Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl">Request Details</h2>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-sm rounded-full">
              Pending
            </span>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-gray-200">
            <div>
              <div className="text-sm text-gray-600 mb-1">Request ID</div>
              <div className="font-mono text-sm">REQ-2026-SP-8821</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Submitted</div>
              <div className="text-sm">{new Date().toLocaleTimeString()}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Semester</div>
              <div className="text-sm">Spring 2026</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Total Credits</div>
              <div className="text-sm">
                {courses.reduce((sum, course) => sum + course.credits, 0)} credits
              </div>
            </div>
          </div>

          <h3 className="text-sm text-gray-600 mb-3">Requested Courses</h3>
          <div className="space-y-3">
            {courses.map((course, index) => (
              <motion.div
                key={course.code}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
              >
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span>{course.code}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm text-gray-600">{course.name}</span>
                  </div>
                </div>
                <div className="text-sm text-gray-600">{course.credits} cr</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Status Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
        >
          <h2 className="text-xl mb-4">Processing Status</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <div className="text-sm">Request Submitted</div>
                <div className="text-xs text-gray-600">Completed</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <div className="text-sm">Prerequisites Verified</div>
                <div className="text-xs text-gray-600">Completed</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Loader2 className="w-5 h-5 text-blue-600 animate-spin" />
              </div>
              <div className="flex-1">
                <div className="text-sm">Awaiting Batch Algorithm</div>
                <div className="text-xs text-gray-600">In Progress</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <Circle className="w-5 h-5 text-gray-400" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-400">Seat Allocation</div>
                <div className="text-xs text-gray-600">Pending</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <Circle className="w-5 h-5 text-gray-400" />
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
          className="bg-blue-50 border border-blue-200 p-4 rounded-lg"
        >
          <div className="flex items-start gap-3">
            <Calendar className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-sm text-blue-900 mb-1">What happens next?</div>
              <div className="text-sm text-blue-700">
                Once the batch algorithm runs at {allocationTime}, you'll receive an email with your 
                registration results. If any courses are full, you'll receive waitlist information 
                and alternative suggestions.
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => onNavigate('dashboard')}
            className="flex-1 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Return to Dashboard
          </button>
          <button className="flex-1 py-3 bg-gray-100 text-gray-400 rounded-lg cursor-not-allowed" disabled>
            Modify Request (Locked)
          </button>
        </div>
      </div>
    </div>
  );
}
