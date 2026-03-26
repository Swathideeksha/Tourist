import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { useNavigate } from "react-router-dom";

// Fix for default marker icons in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

// Custom marker icon - Simple red marker
const createCustomIcon = (isActive = false) => {
  console.log('Creating custom icon, isActive:', isActive);
  
  return L.divIcon({
    html: `
      <div style="
        background-color: ${isActive ? '#d93025' : '#ef4444'};
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 2px solid #d93025;
        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
      "></div>
    `,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
    popupAnchor: [0, -10],
    className: ''
  });
};

const API_URL = "https://backend-chi-one-70.vercel.app/api";

const PlaceCard = ({ place, onClose, onExplore }) => {
  if (!place) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full max-h-[80vh] overflow-y-auto animate-fade-in">
        {/* Close button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-2 right-2 z-20 bg-red-500 hover:bg-red-600 text-white rounded-full p-1.5 shadow-lg transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Place Image */}
        <div className="h-36 relative overflow-hidden rounded-t-2xl">
          <img
            src={place.image || '/images/placeholder.jpg'}
            alt={place.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* Place Content */}
        <div className="p-4">
          {/* Place Name */}
          <h3 className="text-xl font-bold text-gray-900 mb-2">{place.name}</h3>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {place.description || 'Beautiful destination in Karnataka'}
          </p>

          {/* Location Info */}
          <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{place.location || place.region || 'Karnataka'}</span>
            </div>
          </div>

          {/* View Details Button */}
          <button
            onClick={() => {
              console.log('🔍 Explore button clicked - place object:', place);
              console.log('🔍 Explore button clicked - place._id:', place._id);
              console.log('🔍 Explore button clicked - place.slug:', place.slug);
              console.log('🔍 Explore button clicked - placeId:', place._id || place.slug);
              onExplore(place._id || place.slug);
            }}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

const Rmap = () => {
  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mapCenter, setMapCenter] = useState([14.5204, 75.7224]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/places`);
        
        if (response.ok) {
          const data = await response.json();
          console.log("Rmap - Places fetched:", data);
          console.log("Rmap - Places count:", data.length);
          
          // Log each place's coordinates for debugging
          data.forEach((place, index) => {
            console.log(`Rmap - Place ${index + 1}:`, {
              name: place.name,
              latitude: place.latitude,
              longitude: place.longitude,
              hasCoordinates: !!(place.latitude && place.longitude),
              isValidCoordinates: !!(place.latitude && place.longitude && !isNaN(place.latitude) && !isNaN(place.longitude))
            });
          });
          
          console.log('Total places loaded:', data.length);
          console.log('Places with valid coordinates:', data.filter(place => 
            place.latitude && place.longitude && 
            !isNaN(place.latitude) && !isNaN(place.longitude)
          ).length);
          
          // Filter places that have coordinates
          const placesWithCoordinates = data.filter(place => 
            place.latitude && place.longitude && 
            !isNaN(place.latitude) && !isNaN(place.longitude)
          );
          
          console.log("Rmap - Places with coordinates:", placesWithCoordinates);
          console.log("Rmap - Places with coordinates count:", placesWithCoordinates.length);
          
          if (placesWithCoordinates.length === 0) {
            console.warn("Rmap - No places with valid coordinates found!");
          }
          
          setPlaces(placesWithCoordinates);
        } else {
          console.error("Rmap - API error:", response.status);
          setError("Failed to load places");
        }
      } catch (error) {
        console.error("Rmap - Error fetching places:", error);
        setError("Network error loading places");
      } finally {
        setLoading(false);
      }
    };

    fetchPlaces();
  }, []);

  const handleMarkerClick = (place) => {
    setSelectedPlace(place);
    setMapCenter([place.latitude, place.longitude]);
  };

  const handleClosePlaceCard = () => {
    setSelectedPlace(null);
  };

  const handleExplorePlace = (placeId) => {
    console.log('🔍 Explore Place clicked - navigating to:', `/destination/${placeId}`);
    console.log('🔍 Place ID type:', typeof placeId);
    console.log('🔍 Place ID value:', placeId);
    
    // Navigate to the existing destination page
    navigate(`/destination/${placeId}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <div className="text-xl text-gray-600">Loading map...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😞</div>
          <div className="text-xl text-red-600">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-gray-50 py-4 md:py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="relative bg-white rounded-xl md:rounded-3xl p-4 md:p-6 shadow-xl overflow-hidden min-h-[350px] md:min-h-[500px]">
          
          {/* Map Container */}
          <div className="relative z-10 h-[300px] md:h-[450px] w-full rounded-lg md:rounded-xl overflow-hidden">
            <MapContainer 
              center={mapCenter}
              zoom={6} 
              style={{ height: "100%", width: "100%" }}
              scrollWheelZoom={true}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              
              {places.length > 0 ? (
                places.map((place) => {
                  console.log('Rendering marker for place:', place.name, 'coords:', [place.latitude, place.longitude]);
                  return (
                  <Marker
                    key={place._id}
                    position={[place.latitude, place.longitude]}
                    icon={createCustomIcon(selectedPlace?._id === place._id)}
                    eventHandlers={{
                      click: () => handleMarkerClick(place),
                    }}
                  >
                  </Marker>
                  );
                })
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-90 pointer-events-none">
                  <div className="text-center p-8">
                    <h3 className="text-xl font-semibold text-gray-600 mb-4">No Places Available</h3>
                    <p className="text-gray-500 mb-4">Please add places through the Admin Dashboard</p>
                  </div>
                </div>
              )}
            </MapContainer>
          </div>
        </div>
      </div>

      {/* Place Card Modal */}
      <PlaceCard 
        place={selectedPlace} 
        onClose={handleClosePlaceCard}
        onExplore={handleExplorePlace}
      />
    </section>
  );
};

export default Rmap;
