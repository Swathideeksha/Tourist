import React from 'react';
import { Link } from 'react-router-dom';

const PlanJourney = () => {
  return (
    <div className="px-4 md:px-10 py-6 md:py-8">
      <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl p-4 md:p-6 shadow-lg text-white">
        <h3 className="text-lg md:text-xl font-bold mb-2">Plan Your Journey</h3>
        <p className="text-sm md:text-base mb-4 opacity-90">Get personalized travel recommendations</p>
        <Link to="/plan" className="inline-block bg-white text-amber-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition text-sm md:text-base">
          Start Planning
        </Link>
      </div>
    </div>
  );
};

export default PlanJourney;
