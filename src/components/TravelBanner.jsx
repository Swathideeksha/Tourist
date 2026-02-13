import React from 'react';

const TravelBanner = () => {
  return (
    <div className="px-4 md:px-10 py-6 md:py-8">
      <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-xl p-4 md:p-6 shadow-lg text-white">
        <h3 className="text-lg md:text-xl font-bold mb-2">Travel Smart</h3>
        <p className="text-sm md:text-base opacity-90">Get expert travel tips and recommendations</p>
      </div>
    </div>
  );
};

export default TravelBanner;
