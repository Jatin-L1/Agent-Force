import { motion } from 'motion/react';
import { X, MapPin, Clock, Users, Star, CheckCircle2, ExternalLink } from 'lucide-react';

interface CourseBlock {
  id: string;
  code: string;
  name: string;
  professor: string;
  day: string;
  startTime: string;
  endTime: string;
  location: string;
  section: string;
  color: string;
  conflict?: boolean;
  highDemand?: boolean;
  seats: { available: number; total: number };
  rmpScore?: number;
}

interface CourseDetailsModalProps {
  course: CourseBlock;
  onClose: () => void;
}

export function CourseDetailsModal({ course, onClose }: CourseDetailsModalProps) {
  const seatPercentage = (course.seats.available / course.seats.total) * 100;
  const probability = 85; // Mock data

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-white rounded-xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-2xl">{course.code}</h2>
              {course.highDemand && (
                <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">
                  High Demand
                </span>
              )}
            </div>
            <p className="text-gray-600">{course.name}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Professor Info */}
          <div>
            <h3 className="text-sm text-gray-600 mb-2">Instructor</h3>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <div>{course.professor}</div>
                {course.rmpScore && (
                  <div className="flex items-center gap-1 mt-1 text-sm text-gray-600">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span>{course.rmpScore}/5.0 RateMyProfessor</span>
                  </div>
                )}
              </div>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1"
              >
                View Profile
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Section Details */}
          <div>
            <h3 className="text-sm text-gray-600 mb-2">Section Details</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">Schedule</div>
                  <div>{course.day} {course.startTime} - {course.endTime}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">Location</div>
                  <div>{course.location}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-purple-600" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-600">Seat Availability</div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          seatPercentage > 50 ? 'bg-green-500' :
                          seatPercentage > 20 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${seatPercentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm">{course.seats.available}/{course.seats.total}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Prerequisites Check */}
          <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-sm">✅ Prerequisites Met</div>
                <div className="text-xs text-gray-600 mt-1">
                  You completed all required courses in Fall 2024
                </div>
              </div>
            </div>
          </div>

          {/* AI Insight */}
          {course.highDemand && (
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 p-4 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs">AI</span>
                </div>
                <div>
                  <div className="text-sm mb-1">AI Insight</div>
                  <div className="text-sm text-gray-700">
                    High Demand: 300 students vying for 50 seats.
                  </div>
                  <div className="text-sm mt-2">
                    <span className="text-blue-600">Your probability of securing this seat: {probability}%</span>
                    <span className="text-gray-600"> (Senior Priority)</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Syllabus Link */}
          <div>
            <a
              href="#"
              className="flex items-center justify-center gap-2 w-full py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="text-sm">View Syllabus</span>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
