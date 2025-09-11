import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Chatbot from '../components/Chatbot';

const DashboardPage = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome, {user?.name}!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <ul className="space-y-3">
            <li><Link to="/book-appointment" className="text-blue-600 hover:underline">Book an Appointment</Link></li>
            <li><Link to="/resources" className="text-blue-600 hover:underline">Explore Resources</Link></li>
            <li><Link to="/forum" className="text-blue-600 hover:underline">Join Peer Forum</Link></li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Upcoming Appointments</h2>
          <p className="text-gray-600">You have no upcoming appointments.</p>
        </div>
      </div>
      <div className="mt-8">
          <Chatbot />
      </div>
    </div>
  );
};

export default DashboardPage;