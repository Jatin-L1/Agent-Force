import { useState } from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Sparkles } from 'lucide-react';

interface LoginScreenProps {
  onLogin: () => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-600 flex flex-col">
      {/* Status Bar */}
      <div className="px-6 py-3 flex items-center justify-between text-white text-sm">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <div className="w-4 h-3 border border-white rounded-sm relative">
            <div className="absolute inset-0.5 bg-white rounded-sm"></div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex-1 flex flex-col justify-center px-6 text-white">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-6"
        >
          <GraduationCap className="w-10 h-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-4xl mb-3">Welcome Back</h1>
          <p className="text-lg opacity-90">University Portal</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full w-fit"
        >
          <Sparkles className="w-4 h-4" />
          <span className="text-sm">Powered by Einstein AI</span>
        </motion.div>
      </div>

      {/* Login Form */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-t-3xl p-6 space-y-6"
      >
        <div>
          <h2 className="text-2xl mb-2 text-gray-900">Sign In</h2>
          <p className="text-gray-600">Access your academic dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="studentId" className="block text-sm mb-2 text-gray-700">
              Student ID
            </label>
            <input
              id="studentId"
              type="text"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your student ID"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm mb-2 text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-xl active:bg-blue-700 transition-colors"
          >
            Sign In
          </button>

          <div className="text-center">
            <a href="#" className="text-sm text-blue-600">
              Forgot your password?
            </a>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
