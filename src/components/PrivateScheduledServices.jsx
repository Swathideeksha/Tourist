import React from 'react';
import { useNavigate } from 'react-router-dom';
import seabirdImg from '../assests/seabird.avif';
import vrlImg from '../assests/VRL.jpg';
import sugamaImg from '../assests/sugama.jpg';

const PrivateScheduledServices = () => {
  const navigate = useNavigate();
  const buses = [
    {
      id: 1,
      name: "Sea-Bird Travels",
      type: "PREMIUM SERVICES",
      image: seabirdImg,
      routes: [
        { from: "Bengaluru (Anand Rao Circle)", to: "" },
        { from: "Rishikonda (Beach Road)", to: "" }
      ],
      rating: 4.8,
      reviews: 324,
    },
    {
      id: 2,
      name: "VRL Travels",
      type: "TOP RATED",
      image: vrlImg,
      routes: [
        { from: "Bengaluru (Bengaluru Central)", to: "" },
        { from: "Mysore (Jaya Nagar)", to: "" }
      ],
      rating: 4.5,
      reviews: 287,
    },
    {
      id: 3,
      name: "Sugama Tourist",
      type: "HERITAGE",
      image: sugamaImg,
      routes: [
        { from: "Bengaluru (B5 Square)", to: "" },
        { from: "Mandya (Mampally)", to: "" }
      ],
      rating: 4.4,
      reviews: 156,
    },
  ];

  return (
    <div className="px-4 md:px-10 py-12 md:py-16">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Private Scheduled Services</h2>
        <p className="text-gray-600">Showing top 10 private agency routes</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {buses.map((bus) => (
          <div key={bus.id} className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            {/* Image Container */}
            <div className="relative h-48 md:h-56 overflow-hidden bg-gray-200">
              <img 
                src={bus.image} 
                alt={bus.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                {bus.type}
              </div>
            </div>

            {/* Content Container */}
            <div className="p-6">
              {/* Bus Name */}
              <h3 className="text-lg font-bold mb-4 text-gray-900">{bus.name}</h3>

              {/* Rating */}
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < Math.floor(bus.rating) ? 'text-lg' : 'text-lg opacity-30'}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="ml-2 font-bold text-gray-900">{bus.rating}</span>
              </div>

              {/* View Details Button */}
              <button 
                onClick={() => navigate(`/bus/${bus.id}`)}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-4 rounded-lg transition-colors duration-300">
                View Details →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivateScheduledServices;
