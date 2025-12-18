import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ChevronDown, CheckCircle2, XCircle, Circle } from 'lucide-react';
import { Navigation } from './Navigation';

interface DegreeAuditViewProps {
  onNavigate: (screen: string) => void;
}

interface Requirement {
  id: string;
  name: string;
  status: 'completed' | 'missing' | 'in-progress';
  courses?: Course[];
}

interface Course {
  code: string;
  name: string;
  credits: number;
  status: 'completed' | 'missing' | 'in-progress';
  semester?: string;
}

const requirementsData: Requirement[] = [
  {
    id: 'core',
    name: 'Computer Science Core',
    status: 'in-progress',
    courses: [
      { code: 'CS 101', name: 'Intro to Computer Science', credits: 3, status: 'completed', semester: 'Fall 2023' },
      { code: 'CS 201', name: 'Data Structures', credits: 4, status: 'missing' },
      { code: 'CS 202', name: 'Algorithms', credits: 4, status: 'in-progress', semester: 'Fall 2025' },
      { code: 'CS 301', name: 'Operating Systems', credits: 3, status: 'completed', semester: 'Spring 2024' },
    ]
  },
  {
    id: 'math',
    name: 'Mathematics Requirements',
    status: 'completed',
    courses: [
      { code: 'MATH 140', name: 'Calculus I', credits: 4, status: 'completed', semester: 'Fall 2023' },
      { code: 'MATH 141', name: 'Calculus II', credits: 4, status: 'completed', semester: 'Spring 2024' },
      { code: 'MATH 220', name: 'Discrete Mathematics', credits: 3, status: 'completed', semester: 'Fall 2024' },
    ]
  },
  {
    id: 'electives',
    name: 'CS Electives',
    status: 'in-progress',
    courses: [
      { code: 'CS 405', name: 'Machine Learning', credits: 3, status: 'completed', semester: 'Spring 2025' },
      { code: 'CS 410', name: 'Database Systems', credits: 3, status: 'missing' },
      { code: 'CS 420', name: 'Web Development', credits: 3, status: 'missing' },
    ]
  },
  {
    id: 'general',
    name: 'General Education',
    status: 'in-progress',
    courses: [
      { code: 'ENG 101', name: 'Composition', credits: 3, status: 'completed', semester: 'Fall 2023' },
      { code: 'HIST 201', name: 'World History', credits: 3, status: 'missing' },
      { code: 'PHIL 110', name: 'Ethics', credits: 3, status: 'completed', semester: 'Spring 2024' },
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

  const getStatusBadge = (status: string) => {
    if (status === 'completed') return 'bg-green-100 text-green-700';
    if (status === 'missing') return 'bg-red-100 text-red-700';
    return 'bg-yellow-100 text-yellow-700';
  };

  const totalCredits = 120;
  const completedCredits = 78;
  const progress = (completedCredits / totalCredits) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation onNavigate={onNavigate} currentScreen="degree-audit" />
      
      <div className="max-w-5xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl mb-2">Degree Audit</h1>
          <p className="text-gray-600">Computer Science, B.S. - Class of 2026</p>
        </div>

        {/* Progress Summary */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl mb-1">Overall Progress</h2>
              <p className="text-gray-600">{completedCredits} of {totalCredits} credits completed</p>
            </div>
            <div className="text-right">
              <div className="text-3xl text-blue-600">{Math.round(progress)}%</div>
              <div className="text-sm text-gray-600">Complete</div>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
            />
          </div>
        </motion.div>

        {/* Requirements Tree */}
        <div className="space-y-3">
          {requirementsData.map((requirement, index) => (
            <motion.div
              key={requirement.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
              {/* Section Header */}
              <button
                onClick={() => toggleSection(requirement.id)}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  {expandedSection === requirement.id ? (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  )}
                  {getStatusIcon(requirement.status)}
                  <div className="text-left">
                    <h3 className="text-lg">{requirement.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`text-xs px-2 py-1 rounded ${getStatusBadge(requirement.status)}`}>
                        {requirement.status === 'completed' && 'Completed'}
                        {requirement.status === 'missing' && 'Incomplete'}
                        {requirement.status === 'in-progress' && 'In Progress'}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600">
                    {requirement.courses?.filter(c => c.status === 'completed').length || 0} / {requirement.courses?.length || 0} courses
                  </div>
                </div>
              </button>

              {/* Expanded Course List */}
              {expandedSection === requirement.id && requirement.courses && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="border-t border-gray-200 bg-gray-50"
                >
                  <div className="p-6 space-y-3">
                    {requirement.courses.map((course) => (
                      <div
                        key={course.code}
                        className={`p-4 rounded-lg border-2 ${
                          course.status === 'completed'
                            ? 'bg-green-50 border-green-200'
                            : course.status === 'missing'
                            ? 'bg-red-50 border-red-200'
                            : 'bg-yellow-50 border-yellow-200'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-3">
                            {getStatusIcon(course.status)}
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-sm">{course.code}</span>
                                <span className="text-gray-400">•</span>
                                <span className="text-sm">{course.name}</span>
                              </div>
                              {course.semester && (
                                <div className="text-xs text-gray-600 mt-1">
                                  Completed: {course.semester}
                                </div>
                              )}
                              {course.status === 'missing' && (
                                <div className="text-xs text-red-600 mt-1">
                                  ⚠️ Required for graduation
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="text-sm text-gray-600">{course.credits} cr</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <button
            onClick={() => onNavigate('planner')}
            className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition-colors"
          >
            Plan Missing Courses with AI
          </button>
        </motion.div>
      </div>
    </div>
  );
}
