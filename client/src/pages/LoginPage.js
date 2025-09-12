import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError('Failed to log in. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-4">
      <div className="w-full max-w-md animate-fade-in-up">
        <form 
          onSubmit={handleSubmit}
          className="p-8 space-y-6 bg-white/30 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 tracking-tight">Welcome Back</h2>
            <p className="mt-2 text-gray-600">Sign in to continue to MindWell</p>
          </div>

          {error && (
            <div className="p-3 bg-red-100 border border-red-300 rounded-xl text-center text-red-700 font-medium">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div className="relative">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="peer block w-full px-4 py-3 bg-white/50 rounded-xl border-none shadow-inner focus:ring-2 focus:ring-purple-500 placeholder-transparent"
                placeholder="Email Address"
                required
              />
              <label 
                htmlFor="email" 
                className="absolute left-4 -top-2.5 text-sm text-gray-600 transition-all 
                           peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5
                           peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-600"
              >
                Email Address
              </label>
            </div>

            <div className="relative">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="peer block w-full px-4 py-3 bg-white/50 rounded-xl border-none shadow-inner focus:ring-2 focus:ring-purple-500 placeholder-transparent"
                placeholder="Password"
                required
              />
               <label 
                htmlFor="password" 
                className="absolute left-4 -top-2.5 text-sm text-gray-600 transition-all 
                           peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5
                           peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-600"
              >
                Password
              </label>
            </div>
          </div>
          
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-3 px-4 text-lg font-bold text-white bg-purple-600 rounded-xl shadow-lg transition-all duration-300 hover:bg-purple-700 disabled:bg-gray-400 transform hover:scale-105"
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </div>
          
          <p className="text-center text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="font-semibold text-purple-600 hover:underline">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;