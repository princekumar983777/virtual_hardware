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
      <div className="flex flex-col items-center justify-center h-screen text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to the Virtual Machine</h1>
        <p className="text-xl mb-8">A solution to the Machines which are in Progress</p>
        <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <button
            onClick={handleCreateMachine}
            className="px-8 py-3 bg-white text-blue-500 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
          >
            {isLoggedIn ? 'Create New Server' : 'Create Your First Machine'}
          </button>
          <button
            onClick={handleStartMachine}
            className="px-8 py-3 bg-white text-blue-500 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
          >
            {isLoggedIn ? 'Access Your Servers' : 'Start your Machine'}
          </button>
        </div>
        {!isLoggedIn && (
          <p className="mt-4 text-sm text-white/80">
            Sign up to create your first virtual machine or login to access existing servers
          </p>
        )}
      </div>
    </div>
  );
};

export default Hero;