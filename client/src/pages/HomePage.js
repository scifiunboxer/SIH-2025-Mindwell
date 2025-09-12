import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    // Main container with a full-screen, soft gradient background
    <div className="flex items-center justify-center min-h-[80vh] bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-4">

      {/* The Glassmorphic Card Container */}
      <div className="
        w-full max-w-3xl
        p-8 md:p-12
        bg-white/30 backdrop-blur-xl
        rounded-2xl shadow-lg
        border border-white/20
        transform transition-all duration-300 hover:scale-105 hover:shadow-2xl
        text-center
      ">
        <h1 className="
          text-4xl md:text-6xl font-bold text-gray-800
          mb-4
          tracking-tight
        ">
          Welcome to <span className="text-purple-700">MindWell</span>
        </h1>
        <p className="
          text-lg text-gray-700
          mb-8 max-w-2xl
          mx-auto
          leading-relaxed
        ">
          Your confidential and supportive space for mental wellness. We are here to help you navigate the challenges of college life, judgment-free.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            to="/register"
            className="
              w-full sm:w-auto
              px-8 py-3
              text-lg font-semibold text-white
              bg-purple-600 rounded-xl
              shadow-lg hover:bg-purple-700
              transform transition-transform duration-300 hover:scale-110
              focus:outline-none focus:ring-4 focus:ring-purple-300
            "
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="
              w-full sm:w-auto
              px-8 py-3
              text-lg font-semibold text-purple-700
              bg-white/50 rounded-xl
              shadow-lg hover:bg-white/80
              transform transition-transform duration-300 hover:scale-110
              focus:outline-none focus:ring-4 focus:ring-purple-200
              border border-white/50
            "
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;