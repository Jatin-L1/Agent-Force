import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, Send, Sparkles, Clock, MapPin, Coffee, X } from 'lucide-react';
import { StatusBar } from './StatusBar';

interface IntelligentPlannerProps {
  onNavigate: (screen: string) => void;
}

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

interface CourseBlock {
  id: string;
  code: string;
  name: string;
  professor: string;
  time: string;
  location: string;
  color: string;
  highDemand?: boolean;
}

const quickPrompts = [
  { text: 'Focus on Core', icon: Sparkles },
  { text: 'No Fridays', icon: Clock },
  { text: 'Morning Classes', icon: Coffee }
];

const scheduleOptions = [
  {
    id: 'option-a',
    name: 'Balanced',
    courses: [
      { id: '1', code: 'CS 201', name: 'Data Structures', professor: 'Dr. Chen', time: 'MW 10:00-11:30', location: 'Eng 201', color: '#3b82f6' },
      { id: '2', code: 'HIST 201', name: 'World History', professor: 'Prof. Brown', time: 'TR 13:00-14:30', location: 'LA 105', color: '#8b5cf6' },
      { id: '3', code: 'CS 305', name: 'Computer Architecture', professor: 'Dr. Wilson', time: 'MW 14:00-15:30', location: 'Eng 305', color: '#10b981', highDemand: true },
      { id: '4', code: 'CS 410', name: 'Database Systems', professor: 'Dr. Davis', time: 'TR 10:00-11:30', location: 'Eng 210', color: '#f59e0b' }
    ],
    stats: {
      walking: 'Low',
      lunch: '1 hour',
      endTime: '3:00 PM'
    }
  },
  {
    id: 'option-b',
    name: 'Afternoon',
    courses: [
      { id: '5', code: 'CS 201', name: 'Data Structures', professor: 'Dr. Lee', time: 'MW 13:00-14:30', location: 'Eng 202', color: '#3b82f6' },
      { id: '6', code: 'HIST 201', name: 'World History', professor: 'Prof. Anderson', time: 'TR 16:30-18:00', location: 'LA 210', color: '#8b5cf6' },
      { id: '7', code: 'CS 305', name: 'Computer Architecture', professor: 'Dr. Wilson', time: 'MW 15:00-16:30', location: 'Eng 305', color: '#10b981' },
      { id: '8', code: 'CS 410', name: 'Database Systems', professor: 'Dr. Thompson', time: 'TR 14:30-16:00', location: 'Eng 215', color: '#f59e0b' }
    ],
    stats: {
      walking: 'Medium',
      lunch: '30 min',
      endTime: '6:00 PM'
    }
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
  const [selectedOption, setSelectedOption] = useState(0);
  const [selectedCourse, setSelectedCourse] = useState<CourseBlock | null>(null);

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

    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: 'Filtering 500+ sections... Found 2 viable paths for you.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
      setTimeout(() => setShowSchedules(true), 500);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-600 flex flex-col">
      {/* Status Bar & Header */}
      <div className="text-white flex-shrink-0">
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
              <h1 className="text-xl">Course Planner</h1>
              <p className="text-sm opacity-90">AI-powered scheduling</p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        {messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-2xl ${
                message.type === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white/20 backdrop-blur-sm text-white'
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
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl">
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Quick Prompts */}
        {!showSchedules && messages.length === 1 && (
          <div className="flex flex-wrap gap-2">
            {quickPrompts.map((prompt, index) => (
              <button
                key={index}
                onClick={() => handleSendMessage(prompt.text)}
                className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm active:scale-95 transition-transform"
              >
                <prompt.icon className="w-4 h-4" />
                <span>{prompt.text}</span>
              </button>
            ))}
          </div>
        )}

        {/* Schedule Options */}
        {showSchedules && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {/* Option Tabs */}
            <div className="flex gap-2">
              {scheduleOptions.map((option, index) => (
                <button
                  key={option.id}
                  onClick={() => setSelectedOption(index)}
                  className={`flex-1 px-4 py-2 rounded-xl text-sm transition-colors ${
                    selectedOption === index
                      ? 'bg-white text-blue-600'
                      : 'bg-white/20 text-white'
                  }`}
                >
                  {option.name}
                </button>
              ))}
            </div>

            {/* Selected Schedule */}
            <div className="bg-white rounded-2xl p-4 space-y-4">
              {/* Stats */}
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-gray-50 p-3 rounded-xl">
                  <div className="flex items-center gap-1 text-gray-600 mb-1">
                    <MapPin className="w-3 h-3" />
                    <span className="text-xs">Walk</span>
                  </div>
                  <div className="text-xs">{scheduleOptions[selectedOption].stats.walking}</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-xl">
                  <div className="flex items-center gap-1 text-gray-600 mb-1">
                    <Coffee className="w-3 h-3" />
                    <span className="text-xs">Lunch</span>
                  </div>
                  <div className="text-xs">{scheduleOptions[selectedOption].stats.lunch}</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-xl">
                  <div className="flex items-center gap-1 text-gray-600 mb-1">
                    <Clock className="w-3 h-3" />
                    <span className="text-xs">End</span>
                  </div>
                  <div className="text-xs">{scheduleOptions[selectedOption].stats.endTime}</div>
                </div>
              </div>

              {/* Course List */}
              <div className="space-y-2">
                {scheduleOptions[selectedOption].courses.map((course) => (
                  <button
                    key={course.id}
                    onClick={() => setSelectedCourse(course)}
                    className="w-full p-3 rounded-xl text-left border-2 border-gray-200 active:scale-95 transition-transform"
                    style={{ borderLeftColor: course.color, borderLeftWidth: '4px' }}
                  >
                    <div className="flex items-start justify-between mb-1">
                      <div className="text-sm">{course.code}</div>
                      {course.highDemand && (
                        <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">
                          High Demand
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-gray-600">{course.name}</div>
                    <div className="text-xs text-gray-500 mt-1">{course.time}</div>
                  </button>
                ))}
              </div>

              {/* Action Button */}
              <button
                onClick={() => onNavigate('pending')}
                className="w-full bg-blue-600 text-white py-3 rounded-xl active:bg-blue-700 transition-colors"
              >
                Submit Request
              </button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Input Area */}
      <div className="bg-white rounded-t-3xl p-4 flex-shrink-0">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
            placeholder="I want no classes before 10 AM..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => handleSendMessage(inputValue)}
            className="px-4 py-3 bg-blue-600 text-white rounded-xl active:bg-blue-700 transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Course Details Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-end z-50"
            onClick={() => setSelectedCourse(null)}
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              className="bg-white rounded-t-3xl p-6 w-full max-w-md mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl mb-1">{selectedCourse.code}</h3>
                  <p className="text-gray-600">{selectedCourse.name}</p>
                </div>
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-xl">
                  <div className="text-xs text-gray-600 mb-1">Professor</div>
                  <div className="text-sm">{selectedCourse.professor}</div>
                </div>
                
                <div className="p-3 bg-gray-50 rounded-xl">
                  <div className="text-xs text-gray-600 mb-1">Schedule</div>
                  <div className="text-sm">{selectedCourse.time}</div>
                </div>
                
                <div className="p-3 bg-gray-50 rounded-xl">
                  <div className="text-xs text-gray-600 mb-1">Location</div>
                  <div className="text-sm">{selectedCourse.location}</div>
                </div>

                {selectedCourse.highDemand && (
                  <div className="p-3 bg-blue-50 rounded-xl border border-blue-200">
                    <div className="text-xs text-blue-900 mb-1">AI Insight</div>
                    <div className="text-sm text-blue-700">
                      High demand course. Your probability: 85% (Senior Priority)
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
