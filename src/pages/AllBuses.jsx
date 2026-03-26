import React from 'react';
import { useNavigate } from 'react-router-dom';

const AllBuses = () => {
  const navigate = useNavigate();

  const buses = [
    {
      id: 1,
      name: "Premium Bus Service",
      type: "AC SLEEPER",
      rating: 4.8,
      reviews: 324,
      contact: "+91-819-1234-567",
      address: "Mangalore",
      model: "Volvo 9800 Multi-Axle",
      capacity: "45 Seater",
      safetyGear: "Fire Extinguisher, First Aid Kit, Safety Hammers",
      engine: "BS6 Compliant",
      amenities: ["WiFi", "USB Charging", "Climate Control", "Water Bottle", "Reading Light"]
    },
    {
      id: 2,
      name: "Express Bus Service",
      type: "TOP RATED",
      rating: 4.5,
      reviews: 287,
      contact: "+91-831-1234-567",
      address: "Hubli",
      model: "Volvo 9400",
      capacity: "40 Seater",
      safetyGear: "Fire Extinguisher, First Aid Kit, Safety Hammers",
      engine: "BS6 Compliant",
      amenities: ["WiFi", "USB Charging", "Climate Control", "Water Bottle"]
    },
    {
      id: 3,
      name: "Heritage Bus Service",
      type: "HERITAGE",
      rating: 4.6,
      reviews: 198,
      contact: "+91-821-1234-567",
      address: "Bangalore",
      model: "Bharat Benz AC Sleeper",
      capacity: "32 Sleeper",
      safetyGear: "Fire Extinguisher, First Aid Kit, CCTV",
      engine: "BS6 Compliant",
      amenities: ["AC", "WiFi", "USB Charging", "Bedroll", "Water Bottle"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            All Bus Services
          </h1>
          <p className="text-gray-600">
            Showing all {buses.length} private agency routes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {buses.map((bus) => (
            <div key={bus.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
                <span className="text-white text-6xl font-bold">{bus.name[0]}</span>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{bus.name}</h3>
                    <span className="inline-block bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full mt-1">
                      {bus.type}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-yellow-500">
                      <span className="text-lg">★★★★★</span>
                      <span className="ml-1 text-gray-600 text-sm">{bus.rating}</span>
                    </div>
                    <p className="text-gray-500 text-xs mt-1">{bus.reviews} reviews</p>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <p><strong>Model:</strong> {bus.model}</p>
                  <p><strong>Capacity:</strong> {bus.capacity}</p>
                  <p>{bus.contact}</p>
                  <p><strong>Address:</strong> {bus.address}</p>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Amenities:</p>
                  <div className="flex flex-wrap gap-2">
                    {bus.amenities.map((amenity, index) => (
                      <span key={index} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => navigate(`/bus-details/${bus.id}`)}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBuses;
