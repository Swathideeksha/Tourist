import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";

const BusDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bus, setBus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBusDetails = async () => {
      try {
        console.log('🔍 Fetching bus details for ID:', id);
        const response = await fetch(`https://backend-chi-one-70.vercel.app/api/admin/buses/${id}`);
        
        if (response.ok) {
          const busData = await response.json();
          console.log('🔍 Bus data received:', busData);
          console.log('🔍 Bus website field:', busData.website);
          setBus(busData);
          setLoading(false);
        } else {
          console.error('🔍 Failed to fetch bus:', response.status);
          setError('Bus not found');
          setLoading(false);
        }
      } catch (error) {
        console.error('🔍 Error fetching bus details:', error);
        setError('Failed to load bus details');
        setLoading(false);
      }
    };

    fetchBusDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading bus details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Error</h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => navigate('/businfo')}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Back to Buses
          </button>
        </div>
      </div>
    );
  }

  if (!bus) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Bus Not Found</h1>
          <p className="text-gray-600 mb-6">The bus you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/businfo')}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Back to Buses
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{bus.name}</h1>
            <p className="text-xl text-gray-600">{bus.type}</p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Image and Info */}
            <div>
              {/* Main Image */}
              {bus.image && (
                <div className="mb-6">
                  <img 
                    src={bus.image} 
                    alt={bus.name}
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                  />
                </div>
              )}

              {/* Bus Info */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Bus</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Premium bus service offering comfortable and safe travel experience with modern amenities and professional service.
                </p>

                {/* Additional Info */}
                <div className="space-y-4">
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
              </div>

              {/* Website Link */}
              {bus.website && (
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Official Website</h3>
                  <a 
                    href={(() => {
                      const website = bus.website.trim();
                      console.log('🔍 Processing website URL:', website);
                      if (website.startsWith('http://') || website.startsWith('https://')) {
                        return website;
                      }
                      return `https://${website}`;
                    })()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 underline font-semibold"
                    onClick={(e) => {
                      console.log('🔍 Website link clicked:', bus.website);
                    }}
                  >
                    Visit Official Website →
                  </a>
                </div>
              )}
            </div>

            {/* Right Column - Details */}
            <div>
              {/* Location Information */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Location Information</h2>
                <div className="space-y-4">
                  {bus.address && (
                    <div>
                      <span className="font-semibold text-gray-900">Address:</span>
                      <span className="text-gray-700 ml-2">{bus.address}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Safety Features */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Safety Features</h2>
                <p className="text-gray-700">{bus.safetyGear || 'Standard safety equipment including fire extinguisher, first aid kit, and safety hammers.'}</p>
              </div>

              {/* Amenities */}
              {bus.amenities && bus.amenities.length > 0 && (
                <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Amenities</h2>
                  <div className="flex flex-wrap gap-3">
                    {bus.amenities.map((amenity, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg">
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Travel Information */}
              {bus.travelInfo && bus.travelInfo.length > 0 && (
                <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Travel Information</h2>
                  <ul className="space-y-2">
                    {bus.travelInfo.map((info, index) => (
                      <li key={index} className="text-gray-600 flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        {info}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action Button */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <button 
                  onClick={() => navigate('/businfo')}
                  className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  ← Back to All Buses
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusDetails;
