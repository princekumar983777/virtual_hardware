import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Server = () => {
  const { isLoggedIn } = useAuth();
  const [selectedParameter, setSelectedParameter] = useState('temperature');
  const [timeRange, setTimeRange] = useState('day');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Mock data for demonstration
  const mockData = {
    temperature: [20, 22, 21, 23, 22, 24, 23],
    humidity: [45, 47, 46, 48, 47, 49, 48],
    pressure: [1013, 1012, 1014, 1013, 1015, 1014, 1016]
  };

  const chartData = {
    labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
    datasets: [
      {
        label: selectedParameter.charAt(0).toUpperCase() + selectedParameter.slice(1),
        data: mockData[selectedParameter],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  if (!isLoggedIn) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Please login to view your servers</h2>
          <button
            onClick={() => window.location.href = '/'}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Mobile Sidebar Toggle */}
      <div className="md:hidden bg-gray-800 p-4">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-white flex items-center space-x-2"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isSidebarOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
          <span>Your Servers</span>
        </button>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Sidebar - Hidden on mobile by default */}
        <div
          className={`${
            isSidebarOpen ? 'block' : 'hidden'
          } md:block w-full md:w-64 bg-gray-800 text-white p-4`}
        >
          <h2 className="text-xl font-bold mb-4">Your Servers</h2>
          <div className="space-y-2">
            <div className="p-2 bg-gray-700 rounded cursor-pointer hover:bg-gray-600">
              Server 1 (Live)
            </div>
            <div className="p-2 bg-gray-700 rounded cursor-pointer hover:bg-gray-600">
              Server 2 (Offline)
            </div>
            <div className="p-2 bg-gray-700 rounded cursor-pointer hover:bg-gray-600">
              Server 3 (Live)
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 md:p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Server Dashboard</h1>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <select
                value={selectedParameter}
                onChange={(e) => setSelectedParameter(e.target.value)}
                className="p-2 border rounded"
              >
                <option value="temperature">Temperature</option>
                <option value="humidity">Humidity</option>
                <option value="pressure">Pressure</option>
              </select>
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="p-2 border rounded"
              >
                <option value="day">Day</option>
                <option value="night">Night</option>
                <option value="cloudy">Cloudy</option>
                <option value="winter">Winter</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-4 rounded-lg shadow">
              <Line data={chartData} />
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Current Values</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-600">Temperature</p>
                  <p className="text-2xl font-bold">23°C</p>
                </div>
                <div>
                  <p className="text-gray-600">Humidity</p>
                  <p className="text-2xl font-bold">48%</p>
                </div>
                <div>
                  <p className="text-gray-600">Pressure</p>
                  <p className="text-2xl font-bold">1014 hPa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Server; 