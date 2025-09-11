import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="text-center bg-white p-12 rounded-lg shadow-xl mt-10">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Welcome to MindWell
      </h1>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
        Your confidential and supportive space for mental wellness. We are here to help you navigate the challenges of college life.
      </p>
      <div className="flex justify-center space-x-4">
        <Link
          to="/register"
          className="px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Get Started
        </Link>
        <Link
          to="/login"
          className="px-8 py-3 text-lg font-semibold text-blue-600 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition duration-300"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default HomePage;