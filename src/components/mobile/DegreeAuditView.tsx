import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, ChevronDown, CheckCircle2, XCircle, Circle } from 'lucide-react';
import { StatusBar } from './StatusBar';

interface DegreeAuditViewProps {
  onNavigate: (screen: string) => void;
}

interface Course {
  code: string;
  name: string;
  credits: number;
  status: 'completed' | 'missing' | 'in-progress';
  semester?: string;
}

interface Requirement {
  id: string;
  name: string;
  status: 'completed' | 'missing' | 'in-progress';
  courses: Course[];
}

const requirementsData: Requirement[] = [
  {
    id: 'core',
    name: 'CS Core',
    status: 'in-progress',
    courses: [
      { code: 'CS 101', name: 'Intro to CS', credits: 3, status: 'completed', semester: 'Fall 2023' },
      { code: 'CS 201', name: 'Data Structures', credits: 4, status: 'missing' },
      { code: 'CS 202', name: 'Algorithms', credits: 4, status: 'in-progress', semester: 'Fall 2025' },
    ]
  },
  {
    id: 'math',
    name: 'Math Requirements',
    status: 'completed',
    courses: [
      { code: 'MATH 140', name: 'Calculus I', credits: 4, status: 'completed', semester: 'Fall 2023' },
      { code: 'MATH 141', name: 'Calculus II', credits: 4, status: 'completed', semester: 'Spring 2024' },
    ]
  },
  {
    id: 'electives',
    name: 'CS Electives',
    status: 'in-progress',
    courses: [
      { code: 'CS 405', name: 'Machine Learning', credits: 3, status: 'completed', semester: 'Spring 2025' },
      { code: 'CS 410', name: 'Database Systems', credits: 3, status: 'missing' },
    ]
  },
  {
    id: 'general',
    name: 'General Education',
    status: 'in-progress',
    courses: [
      { code: 'ENG 101', name: 'Composition', credits: 3, status: 'completed', semester: 'Fall 2023' },
      { code: 'HIST 201', name: 'World History', credits: 3, status: 'missing' },
    ]
  }
];

export function DegreeAuditView({ onNavigate }: DegreeAuditViewProps) {
  const [expandedSection, setExpandedSection] = useState<string>('core');

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? '' : id);
  };

  const getStatusIcon = (status: string) => {
    if (status === 'completed') return <CheckCircle2 className="w-5 h-5 text-green-600" />;
    if (status === 'missing') return <XCircle className="w-5 h-5 text-red-600" />;
    return <Circle className="w-5 h-5 text-yellow-600" />;
  };

  const totalCredits = 120;
  const completedCredits = 78;
  const progress = (completedCredits / totalCredits) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-600">
      {/* Status Bar & Header */}
      <div className="text-white">
        <StatusBar />
        
        <div className="px-6 py-4">
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => onNavigate('dashboard')}
              className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex-1">
              <h1 className="text-xl">Degree Audit</h1>
              <p className="text-sm opacity-90">Computer Science, B.S.</p>
            </div>
          </div>

          {/* Progress Summary */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl"
          >
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="text-sm opacity-90">Overall Progress</div>
                <div className="text-2xl">{Math.round(progress)}%</div>
              </div>
              <div className="text-right">
                <div className="text-sm opacity-90">{completedCredits} / {totalCredits}</div>
                <div className="text-xs opacity-75">credits</div>
              </div>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="h-full bg-white rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Requirements List */}
      <div className="bg-white rounded-t-3xl p-6 space-y-3 min-h-[60vh]">
        {requirementsData.map((requirement, index) => (
          <motion.div
            key={requirement.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white border border-gray-200 rounded-2xl overflow-hidden"
          >
            <button
              onClick={() => toggleSection(requirement.id)}
              className="w-full p-4 flex items-center justify-between active:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                {getStatusIcon(requirement.status)}
                <div className="text-left">
                  <div className="text-sm">{requirement.name}</div>
                  <div className="text-xs text-gray-600">
                    {requirement.courses.filter(c => c.status === 'completed').length} / {requirement.courses.length} complete
                  </div>
                </div>
              </div>
              {expandedSection === requirement.id ? (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronRight className="w-5 h-5 text-gray-400" />
              )}
            </button>

            {expandedSection === requirement.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="border-t border-gray-200 bg-gray-50 p-4 space-y-2"
              >
                {requirement.courses.map((course) => (
                  <div
                    key={course.code}
                    className={`p-3 rounded-xl border-2 ${
                      course.status === 'completed'
                        ? 'bg-green-50 border-green-200'
                        : course.status === 'missing'
                        ? 'bg-red-50 border-red-200'
                        : 'bg-yellow-50 border-yellow-200'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-2">
                        {getStatusIcon(course.status)}
                        <div>
                          <div className="text-sm">{course.code}</div>
                          <div className="text-xs text-gray-600">{course.name}</div>
                          {course.semester && (
                            <div className="text-xs text-gray-500 mt-1">
                              {course.semester}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="text-xs text-gray-600">{course.credits} cr</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>
        ))}

        {/* Action Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          onClick={() => onNavigate('planner')}
          className="w-full bg-blue-600 text-white py-4 rounded-2xl active:bg-blue-700 transition-colors"
        >
          Plan Missing Courses with AI
        </motion.button>
      </div>
    </div>
  );
}
