import { motion } from 'motion/react';
import { MapPin, Clock, Coffee, AlertTriangle } from 'lucide-react';

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

interface ScheduleVisualizationProps {
  option: ScheduleOption;
  onCourseClick: (course: CourseBlock) => void;
}

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const timeSlots = [
  '8:00', '9:00', '10:00', '11:00', '12:00', 
  '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'
];

function timeToMinutes(time: string): number {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
}

export function ScheduleVisualization({ option, onCourseClick }: ScheduleVisualizationProps) {
  const getBlockPosition = (course: CourseBlock) => {
    const startMinutes = timeToMinutes(course.startTime);
    const endMinutes = timeToMinutes(course.endTime);
    const duration = endMinutes - startMinutes;
    
    // 8:00 AM is our starting point (480 minutes from midnight)
    const baseMinutes = 8 * 60;
    const top = ((startMinutes - baseMinutes) / 60) * 80; // 80px per hour
    const height = (duration / 60) * 80;
    
    return { top, height };
  };

  const getDayIndex = (day: string) => {
    return days.indexOf(day);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-4"
    >
      {/* Header */}
      <div>
        <h3 className="text-lg mb-2">{option.name}</h3>
        {option.recommended && (
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
            ⭐ Recommended
          </span>
        )}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-gray-50 p-3 rounded-lg">
          <div className="flex items-center gap-2 text-gray-600 mb-1">
            <MapPin className="w-4 h-4" />
            <span className="text-xs">Walking</span>
          </div>
          <div className="text-sm">{option.stats.walkingDistance}</div>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <div className="flex items-center gap-2 text-gray-600 mb-1">
            <Coffee className="w-4 h-4" />
            <span className="text-xs">Lunch</span>
          </div>
          <div className="text-sm">{option.stats.lunchBreak}</div>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <div className="flex items-center gap-2 text-gray-600 mb-1">
            <Clock className="w-4 h-4" />
            <span className="text-xs">End Time</span>
          </div>
          <div className="text-sm">{option.stats.endTime}</div>
        </div>
      </div>

      {/* Warning Badge */}
      {option.stats.warning && (
        <div className="bg-orange-50 border border-orange-200 p-3 rounded-lg flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-orange-600" />
          <span className="text-sm text-orange-700">⚠️ {option.stats.warning}</span>
        </div>
      )}

      {/* Calendar Grid */}
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        {/* Day Headers */}
        <div className="grid grid-cols-6 bg-gray-50 border-b border-gray-200">
          <div className="p-2 text-xs text-gray-600 border-r border-gray-200">Time</div>
          {days.map(day => (
            <div key={day} className="p-2 text-xs text-center border-r border-gray-200 last:border-r-0">
              {day}
            </div>
          ))}
        </div>

        {/* Time Grid */}
        <div className="relative">
          {/* Time labels and grid lines */}
          <div className="absolute inset-0">
            {timeSlots.map((time, index) => (
              <div
                key={time}
                className="absolute left-0 right-0 border-b border-gray-100"
                style={{ top: `${index * 80}px`, height: '80px' }}
              >
                <div className="w-16 text-xs text-gray-500 p-2">{time}</div>
              </div>
            ))}
          </div>

          {/* Day columns */}
          <div className="grid grid-cols-6 relative" style={{ minHeight: `${timeSlots.length * 80}px` }}>
            <div className="border-r border-gray-200"></div>
            {days.map((day, dayIndex) => (
              <div
                key={day}
                className="border-r border-gray-200 last:border-r-0 relative"
              >
                {/* Course blocks for this day */}
                {option.schedule
                  .filter(course => course.day === day)
                  .map((course, courseIndex) => {
                    const { top, height } = getBlockPosition(course);
                    return (
                      <motion.button
                        key={course.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: courseIndex * 0.1 }}
                        onClick={() => onCourseClick(course)}
                        className="absolute left-1 right-1 rounded-lg p-2 text-left text-white hover:shadow-lg transition-shadow cursor-pointer overflow-hidden"
                        style={{
                          top: `${top}px`,
                          height: `${height}px`,
                          backgroundColor: course.color,
                          border: course.highDemand ? '2px solid #f59e0b' : 'none'
                        }}
                      >
                        {course.highDemand && (
                          <div className="absolute top-1 right-1">
                            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                          </div>
                        )}
                        <div className="text-xs opacity-90">{course.code}</div>
                        <div className="text-xs mt-1 line-clamp-2">{course.name}</div>
                        <div className="text-xs opacity-75 mt-1">{course.startTime} - {course.endTime}</div>
                      </motion.button>
                    );
                  })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
