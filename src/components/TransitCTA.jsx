import React from 'react';

const TransitCTA = () => {
  return (
    <div className="px-4 md:px-10 py-6 md:py-8">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-4 md:p-6 shadow-lg text-white">
        <h3 className="text-lg md:text-xl font-bold mb-2">Need a Bus?</h3>
        <p className="text-sm md:text-base mb-4 opacity-90">Find KSRTC buses to your destination</p>
        <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition text-sm md:text-base">
          Search Buses
        </button>
      </div>
    </div>
  );
};

export default TransitCTA;
