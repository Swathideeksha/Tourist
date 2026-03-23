import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { useNavigate } from "react-router-dom";
import "leaflet/dist/leaflet.css";

// Fix for default markers in React Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const API_URL = "https://backend-chi-one-70.vercel.app/api";

const Rmap = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        setLoading(true);
        console.log("Rmap - Starting fetch...");
        const response = await fetch(`${API_URL}/places`);
        
        console.log("Rmap - Response status:", response.status);
        
        if (response.ok) {
          const data = await response.json();
          console.log("Rmap - Places fetched:", data);
          console.log("Rmap - Places count:", data.length);
          
          // Filter places that have coordinates
          const placesWithCoordinates = data.filter(place => 
            place.latitude && place.longitude && !isNaN(place.latitude) && !isNaN(place.longitude)
          );
          
          console.log("Rmap - Places with coordinates:", placesWithCoordinates);
          console.log("Rmap - Places with coordinates count:", placesWithCoordinates.length);
          
          setPlaces(placesWithCoordinates);
        } else {
          console.error("Rmap - API error:", response.status);
          const errorText = await response.text();
          console.error("Rmap - Error text:", errorText);
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

  const handleExplorePlace = (placeId) => {
    navigate(`/place/${placeId}`);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-xl">Loading places...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-xl text-red-600">{error}</div>
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
              center={[12.9716, 77.5946]} // Center of Karnataka
              zoom={7} 
              style={{ height: "100%", width: "100%" }}
              scrollWheelZoom={true}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              
              {/* Dynamic Markers for each place */}
              {places.map((place) => (
                <Marker 
                  key={place._id} 
                  position={[place.latitude, place.longitude]}
                >
                  <Popup>
                    <div className="p-3 max-w-xs">
                      {/* Place Image */}
                      {place.image && (
                        <img 
                          src={place.image} 
                          alt={place.name}
                          className="w-full h-32 object-cover rounded-lg mb-2"
                        />
                      )}
                      
                      {/* Place Details */}
                      <h3 className="font-bold text-lg mb-1">{place.name}</h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {place.description}
                      </p>
                      
                      {/* Explore Button */}
                      <button
                        onClick={() => handleExplorePlace(place._id)}
                        className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
                      >
                        Explore Place
                      </button>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
          
          {/* Map Info */}
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Interactive Route Map</h3>
            <p className="text-gray-600 mb-3">
              {places.length} places available on map
            </p>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-3 h-3 bg-red-600 rounded-full"></div>
              <span>Click markers to explore places</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rmap;
