import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            return setError('Passwords do not match');
        }
        setError('');
        setLoading(true);
        try {
            await register(name, email, password, 'student');
            navigate('/dashboard');
        } catch (err) {
            setError('Failed to create an account. The email might already be in use.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-[80vh] w-full animate-fade-in-up">
            <div className="w-full max-w-md">
                <form 
                  onSubmit={handleSubmit}
                  className="p-8 space-y-6 bg-white/30 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20"
                >
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-800 tracking-tight">Create Your Account</h2>
                        <p className="mt-2 text-gray-600">Join MindWell to get started</p>
                    </div>

                    {error && (
                        <div className="p-3 bg-red-100 border border-red-300 rounded-xl text-center text-red-700 font-medium">
                            {error}
                        </div>
                    )}

                    <div className="space-y-4">
                        <div className="relative">
                            <input
                                type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}
                                className="peer block w-full px-4 py-3 bg-white/50 rounded-xl border-none shadow-inner focus:ring-2 focus:ring-purple-500 placeholder-transparent"
                                placeholder="Full Name" required
                            />
                            <label htmlFor="name" className="absolute left-4 -top-2.5 text-sm text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-600">
                                Full Name
                            </label>
                        </div>

                        <div className="relative">
                            <input
                                type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}
                                className="peer block w-full px-4 py-3 bg-white/50 rounded-xl border-none shadow-inner focus:ring-2 focus:ring-purple-500 placeholder-transparent"
                                placeholder="Email Address" required
                            />
                            <label htmlFor="email" className="absolute left-4 -top-2.5 text-sm text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-600">
                                Email Address
                            </label>
                        </div>

                        <div className="relative">
                            <input
                                type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}
                                className="peer block w-full px-4 py-3 bg-white/50 rounded-xl border-none shadow-inner focus:ring-2 focus:ring-purple-500 placeholder-transparent"
                                placeholder="Password" required
                            />
                            <label htmlFor="password" className="absolute left-4 -top-2.5 text-sm text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-600">
                                Password
                            </label>
                        </div>

                        <div className="relative">
                            <input
                                type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                                className="peer block w-full px-4 py-3 bg-white/50 rounded-xl border-none shadow-inner focus:ring-2 focus:ring-purple-500 placeholder-transparent"
                                placeholder="Confirm Password" required
                            />
                            <label htmlFor="confirmPassword" className="absolute left-4 -top-2.5 text-sm text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-600">
                                Confirm Password
                            </label>
                        </div>
                    </div>
                    
                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full flex justify-center py-3 px-4 text-lg font-bold text-white bg-purple-600 rounded-xl shadow-lg transition-all duration-300 hover:bg-purple-700 disabled:bg-gray-400 transform hover:scale-105"
                        >
                            {loading ? 'Creating Account...' : 'Create Account'}
                        </button>
                    </div>
                    
                    <p className="text-center text-gray-600">
                        Already have an account?{' '}
                        <Link to="/login" className="font-semibold text-purple-600 hover:underline">
                            Sign in
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;