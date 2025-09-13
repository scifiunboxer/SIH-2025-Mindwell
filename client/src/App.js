import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import BookingPage from './pages/BookingPage';
import ResourceHubPage from './pages/ResourceHubPage';
import ForumPage from './pages/ForumPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans">
        <Navbar />
        <main className="px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/book-appointment" element={<BookingPage />} />
              <Route path="/resources" element={<ResourceHubPage />} />
              <Route path="/forum" element={<ForumPage />} />
              <Route path="/admin" element={<AdminDashboardPage />} />
            </Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;