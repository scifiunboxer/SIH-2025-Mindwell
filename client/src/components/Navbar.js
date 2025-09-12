import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate('/login');

  };

  const closeMenu = () => {
    setIsOpen(false);
  }

  const activeLinkStyle = {
    color: '#8b5cf6', // A vibrant purple for the active link
    fontWeight: '600',
  };

  return (
    <nav className="sticky top-4 z-50 mx-auto max-w-5xl rounded-2xl bg-white/30 p-4 shadow-lg backdrop-blur-lg border border-white/20">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="text-2xl font-bold text-purple-700 tracking-tight" onClick={closeMenu}>
            MindWell
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden items-center space-x-8 md:flex">
            {user ? (
              <>
                <NavLink to="/dashboard" style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="text-gray-600 hover:text-purple-600 transition-colors">Dashboard</NavLink>
                <NavLink to="/resources" style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="text-gray-600 hover:text-purple-600 transition-colors">Resources</NavLink>
                <NavLink to="/forum" style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="text-gray-600 hover:text-purple-600 transition-colors">Forum</NavLink>
                {user.role === 'admin' && <NavLink to="/admin" style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="text-gray-600 hover:text-purple-600 transition-colors">Admin</NavLink>}
                <button onClick={handleLogout} className="rounded-xl bg-red-500 px-4 py-2 font-semibold text-white shadow-md transition-transform duration-300 hover:scale-105 hover:bg-red-600">
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink to="/login" style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="text-gray-600 hover:text-purple-600 transition-colors">Login</NavLink>
                <NavLink to="/register" className="rounded-xl bg-purple-600 px-4 py-2 font-semibold text-white shadow-md transition-transform duration-300 hover:scale-105 hover:bg-purple-700">
                  Register
                </NavLink>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {isOpen ? <line x1="18" y1="6" x2="6" y2="18"></line> : <line x1="3" y1="12" x2="21" y2="12"></line>}
                {isOpen ? <line x1="6" y1="6" x2="18" y2="18"></line> : <line x1="3" y1="6" x2="21" y2="6"></line>}
                {isOpen ? null : <line x1="3" y1="18" x2="21" y2="18"></line>}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mt-4 flex flex-col space-y-4 md:hidden ${isOpen ? 'block' : 'hidden'}`}>
           {user ? (
              <>
                <NavLink to="/dashboard" onClick={closeMenu} className="text-gray-600 block px-4 py-2 rounded-md hover:bg-white/50">Dashboard</NavLink>
                <NavLink to="/resources" onClick={closeMenu} className="text-gray-600 block px-4 py-2 rounded-md hover:bg-white/50">Resources</NavLink>
                <NavLink to="/forum" onClick={closeMenu} className="text-gray-600 block px-4 py-2 rounded-md hover:bg-white/50">Forum</NavLink>
                {user.role === 'admin' && <NavLink to="/admin" onClick={closeMenu} className="text-gray-600 block px-4 py-2 rounded-md hover:bg-white/50">Admin</NavLink>}
                <button onClick={handleLogout} className="rounded-xl bg-red-500 px-4 py-2 text-left font-semibold text-white shadow-md">
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink to="/login" onClick={closeMenu} className="text-gray-600 block px-4 py-2 rounded-md hover:bg-white/50">Login</NavLink>
                <NavLink to="/register" onClick={closeMenu} className="rounded-xl bg-purple-600 px-4 py-2 text-center font-semibold text-white shadow-md">
                  Register
                </NavLink>
              </>
            )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;