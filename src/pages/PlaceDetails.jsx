import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const API_URL = process.env.REACT_APP_API_URL || 'https://backend-chi-one-70.vercel.app/api';

function PlaceDetails() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlace = async () => {
      try {
        const response = await fetch(`${API_URL}/admin/places/${id}`);
        if (response.ok) {
          const data = await response.json();
          console.log("Place details data received:", data);
          setPlace(data);
        } else {
          setError("Place not found");
        }
      } catch (err) {
        setError("Error loading place details");
        console.error("Error fetching place details:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPlace();
    }
  }, [id]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <div className="text-xl text-gray-600">Loading place details...</div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl text-red-600 mb-4">{error}</div>
            <div className="text-gray-600">Please try again later.</div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (!place) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl text-gray-600 mb-4">Place not found</div>
            <div className="text-gray-600">The place you're looking for doesn't exist.</div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{place.name}</h1>
            <p className="text-xl text-gray-600">{place.location || place.region}</p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Image and Info */}
            <div>
              {/* Main Image */}
              {place.image && (
                <div className="mb-6">
                  <img 
                    src={place.image} 
                    alt={place.name}
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                  />
                </div>
              )}

              {/* Place Info */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Place</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {place.description}
                </p>

                {/* Additional Info */}
                <div className="space-y-4">
                  {place.category && (
                    <div>
                      <span className="font-semibold text-gray-900">Category:</span>
                      <span className="text-gray-700 ml-2">{place.category}</span>
                    </div>
                  )}

                  {place.bestTime && (
                    <div>
                      <span className="font-semibold text-gray-900">Best Time to Visit:</span>
                      <span className="text-gray-700 ml-2">{place.bestTime}</span>
                    </div>
                  )}

                  {place.latitude && place.longitude && (
                    <div>
                      <span className="font-semibold text-gray-900">Coordinates:</span>
                      <span className="text-gray-700 ml-2">
                        {place.latitude}, {place.longitude}
                      </span>
                    </div>
                  )}

                  {place.rating && (
                    <div>
                      <span className="font-semibold text-gray-900">Rating:</span>
                      <span className="text-gray-700 ml-2">{place.rating}/5</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Gallery */}
            <div>
              {place.images && place.images.length > 0 && (
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Gallery</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {place.images.map((image, index) => (
                      <img 
                        key={index}
                        src={image} 
                        alt={`${place.name} - Image ${index + 1}`}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Places to Visit */}
              {place.placesToVisit && place.placesToVisit.length > 0 && (
                <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Places to Visit</h2>
                  <ul className="space-y-2">
                    {place.placesToVisit.map((item, index) => (
                      <li key={index} className="text-gray-700 flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Nearby Facilities */}
              {place.nearbyFacilities && place.nearbyFacilities.length > 0 && (
                <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Nearby Facilities</h2>
                  <ul className="space-y-2">
                    {place.nearbyFacilities.map((facility, index) => (
                      <li key={index} className="text-gray-700 flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        {facility}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PlaceDetails;
