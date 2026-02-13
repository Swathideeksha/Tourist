import React from 'react';
import { Link } from 'react-router-dom';

const RouteBanner = () => {
  return (
    <div className="px-4 md:px-10 py-6 md:py-8">
      <Link
        to="/routemap"
        className="block bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.01]"
      >
        <h2 className="text-lg md:text-xl font-bold mb-2">🗺️ Explore Karnataka Routes</h2>
        <p className="text-sm md:text-base opacity-90">Discover scenic routes and plan your journey across Karnataka</p>
      </Link>
    </div>
  );
};

export default RouteBanner;
