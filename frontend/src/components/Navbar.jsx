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
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/dashboard" className="text-xl font-bold">
              Task Manager
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            {user && (
              <>
                <span className="text-sm">
                  Welcome, {user.username}
                  {user.role === 'admin' && (
                    <span className="ml-1 bg-yellow-500 text-black px-2 py-1 rounded text-xs">
                      Admin
                    </span>
                  )}
                </span>
                <Link
                  to="/dashboard"
                  className="hover:bg-blue-700 px-3 py-2 rounded"
                >
                  Dashboard
                </Link>
                <Link
                  to="/create-task"
                  className="hover:bg-blue-700 px-3 py-2 rounded"
                >
                  New Task
                </Link>
                <button
                  onClick={handleLogout}
                  className="hover:bg-blue-700 px-3 py-2 rounded"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;