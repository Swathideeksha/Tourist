import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

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
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Bus Details</h1>
              <p className="text-blue-100 text-lg">Complete information about our premium bus services</p>
            </div>
            <button
              onClick={() => navigate('/businfo')}
              className="bg-white/20 hover:bg-white/30 backdrop-blur text-white font-semibold px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
            >
              ← Back to All Buses
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Bus Header */}
          <div className="h-96 bg-gradient-to-br from-blue-500 to-blue-700 relative">
            {bus.image && (
              <img 
                src={bus.image} 
                alt={bus.name}
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-3">{bus.name}</h1>
                <span className="inline-block bg-white/20 backdrop-blur text-white text-xl px-6 py-3 rounded-full">
                  {bus.type}
                </span>
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Rating and Reviews Count */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">{bus.name}</h2>
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-500 text-2xl">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < (bus.overallRating || 4.5) ? "" : "opacity-30"}>★</span>
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600 text-lg">{bus.overallRating || '4.5'}</span>
                  <span className="text-gray-500">({bus.reviewsCount || 0} reviews)</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Basic Information */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Bus Information</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Model:</span>
                    <span className="font-semibold">{bus.model || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Capacity:</span>
                    <span className="font-semibold">{bus.capacity || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Contact:</span>
                    <span className="font-semibold">{bus.contact || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Address:</span>
                    <span className="font-semibold">{bus.address || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Website:</span>
                    {bus.website ? (
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
                        className="font-semibold text-blue-600 hover:text-blue-800 underline"
                        onClick={(e) => {
                          console.log('🔍 Website link clicked:', bus.website);
                          // Optional: Add confirmation or tracking
                        }}
                      >
                        Visit Website
                      </a>
                    ) : (
                      <span className="font-semibold">N/A</span>
                    )}
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Engine:</span>
                    <span className="font-semibold">{bus.engine || 'N/A'}</span>
                  </div>
                </div>
              </div>

              {/* Safety Features */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Safety Features</h3>
                <p className="text-gray-600">{bus.safetyGear || 'Standard safety equipment'}</p>
              </div>
            </div>

            {/* Amenities */}
            {bus.amenities && bus.amenities.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Amenities</h3>
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
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Travel Information</h3>
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

            {/* Back to Buses Button */}
            <div className="mt-8">
              <button 
                onClick={() => navigate('/businfo')}
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Back to All Buses
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusDetails;
