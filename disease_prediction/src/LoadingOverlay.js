import React from 'react';

const LoadingOverlay = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80">
    <div className="bg-white p-8 rounded-lg text-center">
      <div className="animate-spin inline-block p-6">
        {/* You can replace this with your desired loading icon */}
        <div className="w-12 h-12 border-t-4 border-blue-500 rounded-full"></div>
      </div>
      <p className="text-gray-700 mt-4 text-lg">Model is Training</p>
    </div>
  </div>
  );
};

export default LoadingOverlay;
