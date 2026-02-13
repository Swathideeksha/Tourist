import React from 'react';
import { Link } from 'react-router-dom';

const DiscoverMore = () => {
  return (
    <div className="px-4 md:px-10 py-8 md:py-12 bg-white">
      <div className="container mx-auto">
        <div className="bg-white border rounded-xl p-6 md:p-8 shadow-lg max-w-4xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-red-600">Discover More</h2>
          
          <p className="text-gray-600 mb-6">
            Uncover the layers of Karnataka's rich tapestry. Gain deeper professional insights into the state's governance, historical evolution, and geographical diversity.
          </p>
          
          <Link to="/place-details" className="inline-block bg-yellow-500 text-red-600 px-6 py-2 rounded-lg hover:bg-yellow-600 transition-colors duration-300 font-semibold">
            About Karnataka
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DiscoverMore;
