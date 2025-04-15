import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Hero = () => {
  const navigate = useNavigate();
  const { isLoggedIn, openLoginModal } = useAuth();

  const handleCreateMachine = () => {
    if (isLoggedIn) {
      // Check if user has any servers (you'll need to implement this logic)
      const hasServers = false; // This should be replaced with actual server check
      if (hasServers) {
        navigate('/server');
      } else {
        // Show signup for server creation
        openLoginModal();
      }
    } else {
      // For new users, open signup modal
      openLoginModal();
    }
  };

  const handleStartMachine = () => {
    if (isLoggedIn) {
      navigate('/server');
    } else {
      openLoginModal();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-white text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
            Welcome to the Virtual Machine
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl px-4">
            A solution to the Machines which are in Progress
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto px-4">
            <button
              onClick={handleCreateMachine}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-white text-blue-500 rounded-full font-semibold hover:bg-gray-100 transition duration-300 text-sm sm:text-base"
            >
              {isLoggedIn ? 'Create New Server' : 'Create Your First Machine'}
            </button>
            <button
              onClick={handleStartMachine}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-white text-blue-500 rounded-full font-semibold hover:bg-gray-100 transition duration-300 text-sm sm:text-base"
            >
              {isLoggedIn ? 'Access Your Servers' : 'Start your Machine'}
            </button>
          </div>
          {!isLoggedIn && (
            <p className="mt-6 text-sm sm:text-base text-white/80 max-w-md px-4">
              Sign up to create your first virtual machine or login to access existing servers
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;