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
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const categories = [
    { id: "all", label: "All", icon: "🗺️" },
    { id: "hill-station", label: "Hill Station", icon: "⛰️" },
    { id: "beach", label: "Beach", icon: "🏖️" },
    { id: "history", label: "History", icon: "🏛️" },
    { id: "religious", label: "Religious", icon: "🛕" }
  ];

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
          setFilteredPlaces(placesWithCoordinates);
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

  useEffect(() => {
    let filtered = places;
    
    // Filter by category
    if (activeCategory !== "all") {
      filtered = filtered.filter(place => place.category === activeCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(place => 
        place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        place.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredPlaces(filtered);
  }, [activeCategory, searchTerm, places]);

  const handleExplorePlace = (placeId) => {
    navigate(`/place/${placeId}`);
  };

  const getCategoryCount = (categoryId) => {
    if (categoryId === "all") return places.length;
    return places.filter(place => place.category === categoryId).length;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <div className="text-xl text-gray-600">Loading map...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😞</div>
          <div className="text-xl text-red-600">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            🗺️ Route Map
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Explore Karnataka's most beautiful tourist destinations with our interactive map
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="🔍 Search for places..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 pr-12 text-lg rounded-full border-2 border-gray-200 focus:border-blue-500 focus:outline-none shadow-lg"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                🔍
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`bg-white rounded-xl p-4 shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                activeCategory === category.id 
                  ? 'ring-2 ring-blue-500 bg-blue-50' 
                  : 'hover:bg-gray-50'
              }`}
            >
              <div className="text-2xl mb-2 text-center">{category.icon}</div>
              <div className="font-semibold text-center text-gray-800">{category.label}</div>
              <div className="text-2xl font-bold text-center text-blue-600">
                {getCategoryCount(category.id)}
              </div>
            </div>
          ))}
        </div>

        {/* Map Container */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-8">
          <div className="h-[400px] md:h-[500px]">
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
              {filteredPlaces.map((place) => (
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
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Explore Place
                      </button>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>

        {/* Place Cards Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Featured Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPlaces.slice(0, 8).map((place) => (
              <div 
                key={place._id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => handleExplorePlace(place._id)}
              >
                {/* Place Image */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={place.image} 
                    alt={place.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                {/* Place Info */}
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{place.name}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{place.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-600 font-semibold">
                      {categories.find(cat => cat.id === place.category)?.icon} {categories.find(cat => cat.id === place.category)?.label}
                    </span>
                    <button className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                      Explore →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map Info */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">🗺️ Interactive Route Map</h3>
          <p className="text-lg mb-4">
            {filteredPlaces.length} places available on map
          </p>
          <div className="flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <span>Click markers to explore places</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <span>Filter by category</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span>Search destinations</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rmap;
