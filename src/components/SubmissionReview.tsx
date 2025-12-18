import { useState } from 'react';
import { motion } from 'motion/react';
import { GripVertical, ChevronLeft, AlertCircle } from 'lucide-react';
import { Navigation } from './Navigation';

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

interface ScheduleOption {
  id: string;
  name: string;
  recommended: boolean;
  schedule: CourseBlock[];
  stats: {
    walkingDistance: 'Low' | 'Medium' | 'High';
    lunchBreak: string;
    endTime: string;
    warning?: string;
  };
}

interface SubmissionReviewProps {
  schedule: ScheduleOption;
  onBack: () => void;
  onSubmit: () => void;
  onNavigate: (screen: string) => void;
}

interface CourseWithPriority {
  course: CourseBlock;
  priority: number;
}

export function SubmissionReview({ schedule, onBack, onSubmit, onNavigate }: SubmissionReviewProps) {
  // Get unique courses (remove duplicates from different days)
  const uniqueCourses = Array.from(
    new Map(schedule.schedule.map(course => [course.code, course])).values()
  );

  const [courses, setCourses] = useState<CourseWithPriority[]>(
    uniqueCourses.map((course, index) => ({
      course,
      priority: index + 1
    }))
  );

  const [draggedItem, setDraggedItem] = useState<number | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDragStart = (index: number) => {
    setDraggedItem(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedItem === null || draggedItem === index) return;

    const newCourses = [...courses];
    const draggedCourse = newCourses[draggedItem];
    newCourses.splice(draggedItem, 1);
    newCourses.splice(index, 0, draggedCourse);

    // Update priorities
    const updatedCourses = newCourses.map((item, idx) => ({
      ...item,
      priority: idx + 1
    }));

    setCourses(updatedCourses);
    setDraggedItem(index);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
  };

  const handleSubmit = () => {
    setShowConfirmation(true);
    setTimeout(() => {
      onSubmit();
    }, 2000);
  };

  if (showConfirmation) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation onNavigate={onNavigate} currentScreen="planner" />
        <div className="max-w-2xl mx-auto p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <motion.svg
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="w-10 h-10 text-green-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <motion.path
                  d="M20 6L9 17l-5-5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-2xl mb-3"
            >
              Request Received!
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-gray-600 mb-6"
            >
              Your course registration request has been successfully submitted.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-6"
            >
              <div className="text-sm text-gray-700 mb-2">Batch Allocation Run</div>
              <div className="text-xl text-blue-600">Today @ 5:00 PM</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-sm text-gray-500"
            >
              Request ID: <span className="text-gray-900 font-mono">REQ-2026-SP-8821</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation onNavigate={onNavigate} currentScreen="planner" />
      
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div>
            <h1 className="text-3xl mb-1">Review Your Selection</h1>
            <p className="text-gray-600">Set course priorities before submission</p>
          </div>
        </div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-blue-50 border border-blue-200 p-4 rounded-lg flex items-start gap-3"
        >
          <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <div className="text-sm text-blue-900 mb-1">Set Your Priorities</div>
            <div className="text-sm text-blue-700">
              Drag courses up or down to indicate which classes are most important to you. 
              The algorithm will prioritize your top choices when allocating seats.
            </div>
          </div>
        </motion.div>

        {/* Course List */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-4 border-b border-gray-200 bg-gray-50">
            <div className="grid grid-cols-12 gap-4 text-sm text-gray-600">
              <div className="col-span-1 text-center">Priority</div>
              <div className="col-span-6">Course</div>
              <div className="col-span-3">Professor</div>
              <div className="col-span-2 text-center">Seats</div>
            </div>
          </div>

          <div className="divide-y divide-gray-200">
            {courses.map((item, index) => (
              <motion.div
                key={item.course.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                draggable
                onDragStart={() => handleDragStart(index)}
                onDragOver={(e) => handleDragOver(e, index)}
                onDragEnd={handleDragEnd}
                className={`p-4 cursor-move hover:bg-gray-50 transition-colors ${
                  draggedItem === index ? 'opacity-50' : 'opacity-100'
                }`}
              >
                <div className="grid grid-cols-12 gap-4 items-center">
                  {/* Priority */}
                  <div className="col-span-1 flex items-center justify-center">
                    <div className="flex items-center gap-2">
                      <GripVertical className="w-4 h-4 text-gray-400" />
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">
                        {item.priority}
                      </div>
                    </div>
                  </div>

                  {/* Course Info */}
                  <div className="col-span-6">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-1 h-12 rounded-full"
                        style={{ backgroundColor: item.course.color }}
                      ></div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span>{item.course.code}</span>
                          {item.course.highDemand && (
                            <span className="px-2 py-0.5 bg-orange-100 text-orange-700 text-xs rounded">
                              High Demand
                            </span>
                          )}
                        </div>
                        <div className="text-sm text-gray-600">{item.course.name}</div>
                        <div className="text-xs text-gray-500 mt-1">
                          {item.course.section} • {item.course.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Professor */}
                  <div className="col-span-3">
                    <div className="text-sm">{item.course.professor}</div>
                    {item.course.rmpScore && (
                      <div className="text-xs text-gray-600 mt-1">
                        ⭐ {item.course.rmpScore}/5.0
                      </div>
                    )}
                  </div>

                  {/* Seats */}
                  <div className="col-span-2 text-center">
                    <div className="text-sm">
                      {item.course.seats.available}/{item.course.seats.total}
                    </div>
                    <div className="text-xs text-gray-600 mt-1">
                      {Math.round((item.course.seats.available / item.course.seats.total) * 100)}% available
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg mb-4">Registration Summary</h3>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <div className="text-sm text-gray-600 mb-1">Total Credits</div>
              <div className="text-2xl text-blue-600">
                {courses.reduce((sum, item) => {
                  // Mock credit values
                  const credits = item.course.code.includes('201') ? 4 : 3;
                  return sum + credits;
                }, 0)}
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Total Courses</div>
              <div className="text-2xl text-green-600">{courses.length}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Allocation Run</div>
              <div className="text-lg">Today @ 5:00 PM</div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition-colors text-lg"
        >
          Submit Priority Request
        </motion.button>

        <p className="text-xs text-gray-500 text-center">
          By submitting, you agree to the university's course registration policies.
          You will receive an email notification once the allocation is complete.
        </p>
      </div>
    </div>
  );
}
