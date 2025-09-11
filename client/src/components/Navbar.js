import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold text-gray-700">
            <Link to="/" className="text-blue-600 hover:text-blue-800">MindWell</Link>
          </div>
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Link to="/dashboard" className="text-gray-600 hover:text-blue-600">Dashboard</Link>
                <Link to="/resources" className="text-gray-600 hover:text-blue-600">Resources</Link>
                <Link to="/forum" className="text-gray-600 hover:text-blue-600">Forum</Link>
                {user.role === 'admin' && <Link to="/admin" className="text-gray-600 hover:text-blue-600">Admin</Link>}
                <button onClick={handleLogout} className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-600 hover:text-blue-600">Login</Link>
                <Link to="/register" className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;