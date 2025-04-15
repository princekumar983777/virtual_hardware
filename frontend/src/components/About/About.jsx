import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Virtual Machine</h1>
          <p className="text-xl text-gray-600 mb-8">
            We are dedicated to providing innovative solutions for virtual machine management and monitoring.
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-gray-600 mb-8">
            Our mission is to simplify virtual machine management and provide real-time monitoring solutions
            for businesses of all sizes. We believe in making complex technology accessible and manageable
            for everyone.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Vision</h2>
          <p className="text-gray-600 mb-8">
            We envision a future where virtual machine management is seamless, efficient, and accessible
            to all. Through continuous innovation and user-centric design, we strive to be the leading
            platform for virtual machine solutions.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Team</h2>
          <p className="text-gray-600 mb-8">
            Our team consists of passionate engineers, developers, and technology enthusiasts who are
            committed to delivering the best possible solutions for our users. We combine technical
            expertise with a deep understanding of user needs to create products that make a difference.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Us</h2>
          <p className="text-gray-600">
            Email: info@virtualmachine.com<br />
            Phone: +1 (555) 123-4567<br />
            Address: 123 Tech Street, Silicon Valley, CA 94025
          </p>
        </div>
      </div>
    </div>
  );
};

export default About; 