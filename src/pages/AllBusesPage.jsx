import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AllBusesPage = () => {
  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBuses = async () => {
      try {
        const response = await fetch('https://backend-chi-one-70.vercel.app/api/admin/buses');
        if (response.ok) {
          const data = await response.json();
          setBuses(data);
        } else {
          // Fallback to static data if API fails
          setBuses([
            {
              _id: '1',
              name: 'Sea-Bird Multi-Axle',
              type: 'PREMIUM',
              desc: 'Pioneer in coastal routes with premium Volvo and Scania sleeper coaches.',
              rating: '4.8/5',
              image: 'https://picsum.photos/seed/seabird/400/300.jpg',
              model: 'Volvo 9800 Multi-Axle',
              capacity: '45 Seater',
              address: 'Mangalore',
              website: 'www.seabirdtourists.com'
            },
            {
              _id: '2',
              name: 'VRL I-Shift Volvo',
              type: 'NETWORK LEADER',
              desc: 'Unmatched connectivity across major routes with high-frequency schedules.',
              rating: '4.7/5',
              image: 'https://picsum.photos/seed/vrl/400/300.jpg',
              model: 'Volvo 9400',
              capacity: '40 Seater',
              address: 'Hubli',
              website: 'www.vrllogistics.in'
            },
            {
              _id: '3',
              name: 'SRS Royal Engineers',
              type: 'PREMIUM',
              desc: 'Luxury Volvo coaches connecting Bengaluru to heritage circuits and beach destinations.',
              rating: '4.6/5',
              image: 'https://picsum.photos/seed/srs/400/300.jpg',
              model: 'Bharat Benz AC Sleeper',
              capacity: '32 Sleeper',
              address: 'Bangalore',
              website: 'www.srstravels.in'
            }
          ]);
        }
      } catch (error) {
        console.error('Error fetching buses:', error);
        // Fallback to static data
        setBuses([
          {
            _id: '1',
            name: 'Sea-Bird Multi-Axle',
            type: 'PREMIUM',
            desc: 'Pioneer in coastal routes with premium Volvo and Scania sleeper coaches.',
            rating: '4.8/5',
            image: 'https://picsum.photos/seed/seabird/400/300.jpg',
            model: 'Volvo 9800 Multi-Axle',
            capacity: '45 Seater',
            address: 'Mangalore',
            website: 'www.seabirdtourists.com'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchBuses();
  }, []);

  const handleViewDetails = (busId) => {
    console.log('🔍 Navigating to bus details for bus ID:', busId);
    navigate(`/bus/${busId}`);
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading all buses...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            All Available Buses
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {buses.map((bus) => (
            <div
              key={bus._id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {/* Bus Image */}
              {bus.image && (
                <div className="relative">
                  <img 
                    src={bus.image} 
                    alt={bus.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600/90 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                      {bus.type || 'PREMIUM'}
                    </span>
                  </div>
                </div>
              )}

              {/* Bus Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{bus.name}</h3>
                <p className="text-xl text-gray-600 mb-4">{bus.type}</p>

                {/* Bus Info */}
                <div className="space-y-4 mb-6">
                  {bus.model && (
                    <div>
                      <span className="font-semibold text-gray-900">Model:</span>
                      <span className="text-gray-700 ml-2">{bus.model}</span>
                    </div>
                  )}

                  {bus.capacity && (
                    <div>
                      <span className="font-semibold text-gray-900">Capacity:</span>
                      <span className="text-gray-700 ml-2">{bus.capacity}</span>
                    </div>
                  )}

                  {bus.engine && (
                    <div>
                      <span className="font-semibold text-gray-900">Engine:</span>
                      <span className="text-gray-700 ml-2">{bus.engine}</span>
                    </div>
                  )}

                  <div>
                    <span className="font-semibold text-gray-900">Rating:</span>
                    <span className="text-gray-700 ml-2">{bus.overallRating || '4.5'}/5</span>
                  </div>
                </div>

                {/* Website Link */}
                {bus.website && (
                  <div className="mb-6">
                    <a 
                      href={(() => {
                        const website = bus.website.trim();
                        if (website.startsWith('http://') || website.startsWith('https://')) {
                          return website;
                        }
                        return `https://${website}`;
                      })()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 underline font-semibold"
                    >
                      Visit Official Website →
                    </a>
                  </div>
                )}

                {/* Action Button */}
                <button
                  onClick={() => handleViewDetails(bus._id)}
                  className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => navigate('/businfo')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            ← Back to Bus Info
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllBusesPage;
