import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Sparkles, Clock, MapPin, Coffee, AlertTriangle } from 'lucide-react';
import { Navigation } from './Navigation';
import { ScheduleVisualization } from './ScheduleVisualization';
import { CourseDetailsModal } from './CourseDetailsModal';
import { SubmissionReview } from './SubmissionReview';

interface IntelligentPlannerProps {
  onNavigate: (screen: string) => void;
}

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
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

const quickPrompts = [
  { icon: Sparkles, text: 'Focus on Core', color: 'blue' },
  { icon: Clock, text: 'Minimize Fridays', color: 'purple' },
  { icon: Coffee, text: 'Morning Classes', color: 'orange' }
];

const scheduleOptions: ScheduleOption[] = [
  {
    id: 'option-a',
    name: 'Option A: Balanced Schedule',
    recommended: true,
    stats: {
      walkingDistance: 'Low',
      lunchBreak: '1 hour',
      endTime: '3:00 PM'
    },
    schedule: [
      {
        id: '1',
        code: 'CS 201',
        name: 'Data Structures',
        professor: 'Dr. Sarah Chen',
        day: 'Mon',
        startTime: '10:00',
        endTime: '11:30',
        location: 'Engineering 201',
        section: 'SEC-001',
        color: '#3b82f6',
        seats: { available: 15, total: 50 },
        rmpScore: 4.5
      },
      {
        id: '2',
        code: 'CS 201',
        name: 'Data Structures',
        professor: 'Dr. Sarah Chen',
        day: 'Wed',
        startTime: '10:00',
        endTime: '11:30',
        location: 'Engineering 201',
        section: 'SEC-001',
        color: '#3b82f6',
        seats: { available: 15, total: 50 },
        rmpScore: 4.5
      },
      {
        id: '3',
        code: 'HIST 201',
        name: 'World History',
        professor: 'Prof. Michael Brown',
        day: 'Tue',
        startTime: '13:00',
        endTime: '14:30',
        location: 'Liberal Arts 105',
        section: 'SEC-003',
        color: '#8b5cf6',
        seats: { available: 8, total: 30 },
        rmpScore: 4.2
      },
      {
        id: '4',
        code: 'HIST 201',
        name: 'World History',
        professor: 'Prof. Michael Brown',
        day: 'Thu',
        startTime: '13:00',
        endTime: '14:30',
        location: 'Liberal Arts 105',
        section: 'SEC-003',
        color: '#8b5cf6',
        seats: { available: 8, total: 30 },
        rmpScore: 4.2
      },
      {
        id: '5',
        code: 'CS 305',
        name: 'Computer Architecture',
        professor: 'Dr. James Wilson',
        day: 'Mon',
        startTime: '14:00',
        endTime: '15:30',
        location: 'Engineering 305',
        section: 'SEC-002',
        color: '#10b981',
        highDemand: true,
        seats: { available: 5, total: 50 },
        rmpScore: 3.8
      },
      {
        id: '6',
        code: 'CS 305',
        name: 'Computer Architecture',
        professor: 'Dr. James Wilson',
        day: 'Wed',
        startTime: '14:00',
        endTime: '15:30',
        location: 'Engineering 305',
        section: 'SEC-002',
        color: '#10b981',
        highDemand: true,
        seats: { available: 5, total: 50 },
        rmpScore: 3.8
      },
      {
        id: '7',
        code: 'CS 410',
        name: 'Database Systems',
        professor: 'Dr. Emily Davis',
        day: 'Tue',
        startTime: '10:00',
        endTime: '11:30',
        location: 'Engineering 210',
        section: 'SEC-001',
        color: '#f59e0b',
        seats: { available: 12, total: 40 },
        rmpScore: 4.7
      },
      {
        id: '8',
        code: 'CS 410',
        name: 'Database Systems',
        professor: 'Dr. Emily Davis',
        day: 'Thu',
        startTime: '10:00',
        endTime: '11:30',
        location: 'Engineering 210',
        section: 'SEC-001',
        color: '#f59e0b',
        seats: { available: 12, total: 40 },
        rmpScore: 4.7
      }
    ]
  },
  {
    id: 'option-b',
    name: 'Option B: Afternoon Focus',
    recommended: false,
    stats: {
      walkingDistance: 'Medium',
      lunchBreak: '30 min',
      endTime: '6:00 PM',
      warning: 'Late End Time (6 PM)'
    },
    schedule: [
      {
        id: '9',
        code: 'CS 201',
        name: 'Data Structures',
        professor: 'Dr. Robert Lee',
        day: 'Mon',
        startTime: '13:00',
        endTime: '14:30',
        location: 'Engineering 202',
        section: 'SEC-002',
        color: '#3b82f6',
        seats: { available: 20, total: 50 },
        rmpScore: 4.0
      },
      {
        id: '10',
        code: 'CS 201',
        name: 'Data Structures',
        professor: 'Dr. Robert Lee',
        day: 'Wed',
        startTime: '13:00',
        endTime: '14:30',
        location: 'Engineering 202',
        section: 'SEC-002',
        color: '#3b82f6',
        seats: { available: 20, total: 50 },
        rmpScore: 4.0
      },
      {
        id: '11',
        code: 'HIST 201',
        name: 'World History',
        professor: 'Prof. Lisa Anderson',
        day: 'Tue',
        startTime: '16:30',
        endTime: '18:00',
        location: 'Liberal Arts 210',
        section: 'SEC-005',
        color: '#8b5cf6',
        seats: { available: 18, total: 30 },
        rmpScore: 3.9
      },
      {
        id: '12',
        code: 'HIST 201',
        name: 'World History',
        professor: 'Prof. Lisa Anderson',
        day: 'Thu',
        startTime: '16:30',
        endTime: '18:00',
        location: 'Liberal Arts 210',
        section: 'SEC-005',
        color: '#8b5cf6',
        seats: { available: 18, total: 30 },
        rmpScore: 3.9
      },
      {
        id: '13',
        code: 'CS 305',
        name: 'Computer Architecture',
        professor: 'Dr. James Wilson',
        day: 'Mon',
        startTime: '15:00',
        endTime: '16:30',
        location: 'Engineering 305',
        section: 'SEC-003',
        color: '#10b981',
        seats: { available: 22, total: 50 },
        rmpScore: 3.8
      },
      {
        id: '14',
        code: 'CS 305',
        name: 'Computer Architecture',
        professor: 'Dr. James Wilson',
        day: 'Wed',
        startTime: '15:00',
        endTime: '16:30',
        location: 'Engineering 305',
        section: 'SEC-003',
        color: '#10b981',
        seats: { available: 22, total: 50 },
        rmpScore: 3.8
      },
      {
        id: '15',
        code: 'CS 410',
        name: 'Database Systems',
        professor: 'Dr. Mark Thompson',
        day: 'Tue',
        startTime: '14:30',
        endTime: '16:00',
        location: 'Engineering 215',
        section: 'SEC-002',
        color: '#f59e0b',
        seats: { available: 16, total: 40 },
        rmpScore: 4.3
      },
      {
        id: '16',
        code: 'CS 410',
        name: 'Database Systems',
        professor: 'Dr. Mark Thompson',
        day: 'Thu',
        startTime: '14:30',
        endTime: '16:00',
        location: 'Engineering 215',
        section: 'SEC-002',
        color: '#f59e0b',
        seats: { available: 16, total: 40 },
        rmpScore: 4.3
      }
    ]
  }
];

export function IntelligentPlanner({ onNavigate }: IntelligentPlannerProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: 'Hi Raghav. I see you need 15 credits to stay on track. Shall we start planning your schedule?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSchedules, setShowSchedules] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>('option-a');
  const [selectedCourse, setSelectedCourse] = useState<CourseBlock | null>(null);
  const [showSubmissionReview, setShowSubmissionReview] = useState(false);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: 'Noted. Filtering 500+ sections... Found 3 viable paths. Let me show you the best options.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
      
      setTimeout(() => {
        setShowSchedules(true);
      }, 500);
    }, 1500);
  };

  const handleQuickPrompt = (text: string) => {
    handleSendMessage(text);
  };

  const handleCourseClick = (course: CourseBlock) => {
    setSelectedCourse(course);
  };

  const handleProceedToReview = () => {
    setShowSubmissionReview(true);
  };

  if (showSubmissionReview) {
    const selectedSchedule = scheduleOptions.find(opt => opt.id === selectedOption);
    return (
      <SubmissionReview
        schedule={selectedSchedule!}
        onBack={() => setShowSubmissionReview(false)}
        onSubmit={() => onNavigate('pending')}
        onNavigate={onNavigate}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation onNavigate={onNavigate} currentScreen="planner" />
      
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-6">
          <h1 className="text-3xl mb-2">Intelligent Planner</h1>
          <p className="text-gray-600">AI-powered course scheduling for Spring 2026</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-220px)]">
          {/* Chat Panel */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col">
            <div className="p-4 border-b border-gray-200 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg">Einstein AI Assistant</h3>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Online</span>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Quick Prompts */}
            {!showSchedules && (
              <div className="p-4 border-t border-gray-200">
                <p className="text-xs text-gray-600 mb-2">Quick prompts:</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {quickPrompts.map((prompt, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickPrompt(prompt.text)}
                      className="flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm transition-colors"
                    >
                      <prompt.icon className="w-4 h-4" />
                      <span>{prompt.text}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                  placeholder="I want no classes before 10 AM..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={() => handleSendMessage(inputValue)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Schedule Visualization Panel */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col">
            {!showSchedules ? (
              <div className="flex-1 flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <Sparkles className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>Your schedule will appear here</p>
                  <p className="text-sm mt-2">Start chatting to generate options</p>
                </div>
              </div>
            ) : (
              <>
                {/* Schedule Options Tabs */}
                <div className="p-4 border-b border-gray-200">
                  <div className="flex gap-2">
                    {scheduleOptions.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => setSelectedOption(option.id)}
                        className={`flex-1 px-4 py-2 rounded-lg text-sm transition-colors ${
                          selectedOption === option.id
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {option.name.split(':')[0]}
                        {option.recommended && selectedOption === option.id && (
                          <span className="ml-2 text-xs">⭐</span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Selected Schedule */}
                <div className="flex-1 overflow-y-auto p-4">
                  <AnimatePresence mode="wait">
                    {scheduleOptions
                      .filter(opt => opt.id === selectedOption)
                      .map(option => (
                        <ScheduleVisualization
                          key={option.id}
                          option={option}
                          onCourseClick={handleCourseClick}
                        />
                      ))}
                  </AnimatePresence>
                </div>

                {/* Action Button */}
                <div className="p-4 border-t border-gray-200">
                  <button
                    onClick={handleProceedToReview}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Proceed to Review
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Course Details Modal */}
      {selectedCourse && (
        <CourseDetailsModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}
    </div>
  );
}
