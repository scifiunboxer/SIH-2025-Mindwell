import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Chatbot from '../components/Chatbot';

// A reusable component for our action cards to keep the code clean
const ActionCard = ({ to, icon, title, description }) => (
    <Link to={to} className="group relative block p-8 bg-white/30 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="flex items-center space-x-4">
            <div className="text-purple-600 bg-white/50 p-3 rounded-xl shadow-inner">
                {icon}
            </div>
            <div>
                <h3 className="text-xl font-bold text-gray-800">{title}</h3>
                <p className="text-gray-600 mt-1">{description}</p>
            </div>
        </div>
        <div className="absolute top-4 right-4 text-purple-300 opacity-0 transition-opacity duration-300 group-hover:opacity-20">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </div>
    </Link>
);

const DashboardPage = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-[80vh] bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">
                Welcome back, <span className="text-purple-700">{user?.name}!</span>
            </h1>
            <p className="text-gray-600 mt-2 text-lg">We're here to support you. What would you like to do today?</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Main Actions & Info */}
            <div className="lg:col-span-2 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ActionCard 
                        to="/book-appointment"
                        title="Book an Appointment"
                        description="Schedule a confidential session."
                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>}
                    />
                     <ActionCard 
                        to="/resources"
                        title="Explore Resources"
                        description="Find guides, audio, and videos."
                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>}
                    />
                     <ActionCard 
                        to="/forum"
                        title="Peer Support Forum"
                        description="Connect with other students."
                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>}
                    />
                </div>
                
                <div className="p-8 bg-white/30 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Upcoming Appointments</h3>
                    <p className="text-gray-600">You currently have no upcoming appointments scheduled. Take the first step today!</p>
                </div>
            </div>

            {/* Right Column: Chatbot */}
            <div className="lg:col-span-1">
                <Chatbot />
            </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;