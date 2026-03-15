import React from 'react';
import { useNavigate } from 'react-router-dom';

const PrivateScheduledServices = () => {
  const navigate = useNavigate();

  const services = [
    {
      name: "Premium Bus Service",
      type: "PREMIUM SERVICES",
      rating: "4.8/5",
      description: "Premium luxury bus service with comfortable seating and modern amenities"
    },
    {
      name: "Express Service",
      type: "TOP RATED",
      rating: "4.7/5",
      description: "Reliable service with extensive route network"
    },
    {
      name: "Heritage Tours",
      type: "HERITAGE",
      rating: "4.6/5",
      description: "Traditional service with cultural heritage routes"
    }
  ];

  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-700 mb-6 md:mb-8">
            Private Scheduled Services
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
            Premium private operators connecting major destinations with modern fleets and 
            reliable service. Experience comfortable journeys with top-rated operators.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden">
              <div className="relative h-[200px] bg-gradient-to-br from-red-600 to-red-800">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">{service.name[0]}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="bg-white text-red-600 text-xs font-semibold px-3 py-1 rounded-full">
                    {service.type}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold mt-2">
                    {service.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="text-sm">{service.rating}</span>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>
                <button
                  onClick={() => navigate('/allbuses')}
                  className="mt-4 md:mt-6 w-full bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  View All Services →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivateScheduledServices;
