import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import L from "leaflet";
import { placesData } from "../data/placesData";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

// Default coordinates for popular places (fallback when API doesn't have coordinates)
const defaultCoordinates = {
  // Beaches
  "1": [13.3390, 74.7421], // Kapu Beach
  "2": [14.8167, 74.3333], // Devbagh Beach
  "3": [13.3404, 74.7431], // Malpe Beach
  "4": [13.3404, 74.7431], // Mattu Beach
  "5": [14.4289, 74.4843], // Murudeshwara Beach
  "6": [14.5644, 74.3204], // Om Beach
  "7": [12.8556, 74.8333], // Panamburu Beach
  "8": [12.8556, 74.8333], // Someshwara Beach
  "9": [13.3390, 74.7421], // St. Mary's Island
  "10": [12.8556, 74.8333], // Surathkal Beach
  "11": [12.8556, 74.8333], // Thannirbhavi Beach
  "12": [13.5344, 74.6951], // Maravanthe Beach
  "13": [13.3390, 74.7421], // Padubidri Beach
  // Hill Stations
  "101": [13.0333, 75.6500], // Sakleshpur
  "102": [12.3375, 75.8069], // Coorg
  "103": [13.3258, 75.7804], // Chikmagalur
  "104": [13.5859, 75.6500], // Agumbe
  "105": [12.2000, 76.8500], // Biligiri Hills
  "106": [13.3500, 75.8000], // Gangamoola
  "107": [13.4000, 75.7000], // Kemmannugundi
  "108": [13.9333, 75.4500], // Kodachadri
  "109": [13.8667, 75.5500], // Kundadri
  "110": [12.4381, 75.7304], // Madikeri
  "111": [13.3667, 77.7167], // Nandi Hills
  // History
  "201": [15.3350, 76.4600], // Hampi
  "202": [12.2958, 76.6394], // Mysore Palace
  "203": [16.8300, 75.7100], // Bijapur Fort
  "204": [13.9289, 75.5604], // Shimoga Fort
  "205": [15.9167, 75.6750], // Badami Caves
  "206": [13.2000, 75.8500], // Halebidu Temple
  "207": [12.4156, 76.7056], // Srirangapatna Fort
  "208": [15.9500, 75.8500], // Aihole Temples
  "209": [14.9500, 74.5833], // Dandeli Fort
  "210": [12.7208, 77.2833], // Ramanagaram Fort
  "211": [13.1988, 75.9400], // Hassan Historic Site
  "212": [17.5797, 77.5000], // Bidar Fort
  "213": [12.1219, 76.8022], // Talakadu
  "214": [12.4500, 77.0500], // Melukote Temple
  "215": [12.2500, 76.8500], // Somnathpur Temple
  "216": [13.2833, 75.7333], // Sringeri Temple
  "217": [15.9333, 75.8667], // Pattadakal Temple
  // Religious
  "301": [14.3561, 74.4854], // Murudeshwara Temple
  "302": [13.2167, 78.1667], // Koti Lingeshwara
  "303": [15.9333, 75.7000], // Banashankari Temple
  "304": [13.5833, 74.6667], // Mookambika Temple
  "305": [13.2000, 75.8500], // Kedareshwara Temple
  "306": [13.3258, 75.7804], // Amrutheshwara Temple
};

// Fix for default marker icons in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});


const Rmap = () => {
  const center = [14.5204, 75.7224]; // Center of Karnataka
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [mapPlaces, setMapPlaces] = useState([]);
  const navigate = useNavigate();

  // Fetch places from API, fallback to static data
  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        console.log("Fetching places from API:", `${API_URL}/places?category=all`);
        const response = await fetch(`${API_URL}/places?category=all`);
        console.log("API Response status:", response.status);
        
        if (response.ok) {
          const data = await response.json();
          console.log("API Response data:", data);
          console.log("Number of places fetched:", data?.length || 0);
          
          if (data && data.length > 0) {
            setMapPlaces(data);
          } else {
            // Fallback to static data if API returns empty
            console.log("API returned empty, using static data");
            setMapPlaces(placesData);
          }
        } else {
          // Fallback to static data on API error
          console.log("API error, using static data");
          setMapPlaces(placesData);
        }
      } catch (error) {
        console.error("Error fetching places for map:", error);
        // Fallback to static data on error
        setMapPlaces(placesData);
      }
    };
    fetchPlaces();
  }, []);

  // Get coordinates for a place (from API, default mapping, or generate from id)
  const getPlaceCoordinates = (place) => {
    // If place has explicit coordinates from API
    if (place.latitude && place.longitude) {
      return [place.latitude, place.longitude];
    }
    
    // Check default coordinates mapping by different id formats
    const placeId = String(place.id || place._id || "");
    
    // Try direct match with id
    if (defaultCoordinates[placeId]) {
      return defaultCoordinates[placeId];
    }
    
    // Try numeric id match (convert MongoDB _id to potential numeric)
    const numericId = parseInt(placeId.substring(0, 3), 16) % 400;
    if (defaultCoordinates[String(numericId)]) {
      return defaultCoordinates[String(numericId)];
    }
    
    // For places with position array (old format)
    if (place.position && place.position[0] && place.position[1]) {
      return [place.position[0], place.position[1]];
    }
    
    // Try matching by name for common places
    const nameCoords = {
      "Kapu Beach": [13.3390, 74.7421],
      "Devbagh Beach": [14.8167, 74.3333],
      "Malpe Beach": [13.3404, 74.7431],
      "Mattu Beach": [13.3404, 74.7431],
      "Murudeshwara Beach": [14.4289, 74.4843],
      "Om Beach": [14.5644, 74.3204],
      "Panamburu Beach": [12.8556, 74.8333],
      "Someshwara Beach": [12.8556, 74.8333],
      "Maravanthe Beach": [13.5344, 74.6951],
      "Padubidri Beach": [13.3390, 74.7421],
      "Sakleshpur": [13.0333, 75.6500],
      "Coorg": [12.3375, 75.8069],
      "Chikmagalur": [13.3258, 75.7804],
      "Agumbe": [13.5859, 75.6500],
      "Biligiri Hills": [12.2000, 76.8500],
      "Gangamoola": [13.3500, 75.8000],
      "Kemmannugundi": [13.4000, 75.7000],
      "Kodachadri": [13.9333, 75.4500],
      "Kundadri": [13.8667, 75.5500],
      "Madikeri": [12.4381, 75.7304],
      "Nandi Hills": [13.3667, 77.7167],
      "Hampi": [15.3350, 76.4600],
      "Mysore Palace": [12.2958, 76.6394],
      "Bijapur Fort": [16.8300, 75.7100],
      "Shimoga Fort": [13.9289, 75.5604],
      "Badami Caves": [15.9167, 75.6750],
      "Halebidu Temple": [13.2000, 75.8500],
      "Srirangapatna Fort": [12.4156, 76.7056],
      "Aihole Temples": [15.9500, 75.8500],
      "Dandeli Fort": [14.9500, 74.5833],
      "Ramanagaram Fort": [12.7208, 77.2833],
      "Hassan Historic Site": [13.1988, 75.9400],
      "Bidar Fort": [17.5797, 77.5000],
      "Talakadu": [12.1219, 76.8022],
      "Melukote Temple": [12.4500, 77.0500],
      "Somnathpur Temple": [12.2500, 76.8500],
      "Sringeri Temple": [13.2833, 75.7333],
      "Pattadakal Temple": [15.9333, 75.8667],
      "Murudeshwara Temple": [14.3561, 74.4854],
      "Koti Lingeshwara": [13.2167, 78.1667],
      "Banashankari Temple": [15.9333, 75.7000],
      "Mookambika Temple": [13.5833, 74.6667],
      "Kedareshwara Temple": [13.2000, 75.8500],
      "Amrutheshwara Temple": [13.3258, 75.7804],
    };
    
    if (place.name && nameCoords[place.name]) {
      return nameCoords[place.name];
    }
    
    // Generate consistent coordinates based on name hash as last resort
    if (place.name) {
      let hash = 0;
      for (let i = 0; i < place.name.length; i++) {
        hash = place.name.charCodeAt(i) + ((hash << 5) - hash);
      }
      const lat = 12 + Math.abs(hash % 5) + 0.5;
      const lng = 74 + Math.abs(hash % 4) + 0.5;
      return [lat, lng];
    }
    
    // Default to center of Karnataka if nothing else works
    return [14.5204, 75.7224];
  };


  const handleViewDetails = (placeId) => {
    navigate(`/destination/${placeId}`);
  };

  return (
    <section className="bg-gray-50 py-4 md:py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="relative bg-white rounded-xl md:rounded-3xl p-4 md:p-6 shadow-xl overflow-hidden min-h-[350px] md:min-h-[500px]">
          
          {/* Map Container */}
          <div className="relative z-10 h-[300px] md:h-[450px] w-full rounded-lg md:rounded-xl overflow-hidden">
            <MapContainer 
              center={center} 
              zoom={6} 
              style={{ height: "100%", width: "100%" }}
              scrollWheelZoom={true}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              
              {mapPlaces.map((place) => (
                  <Marker 
                    key={place._id || place.id} 
                    position={getPlaceCoordinates(place)}
                    eventHandlers={{
                      click: () => {
                        setSelectedPlace(place);
                      },
                    }}
                  />
                ))}
            </MapContainer>
          </div>

          {/* Dynamic Info Card - Shows selected location details on the right */}
          {selectedPlace && (
            <div className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white rounded-xl shadow-xl w-64 md:w-80 overflow-hidden z-[400]">
              {/* Close Button */}
              <button 
                onClick={() => setSelectedPlace(null)}
                className="absolute top-2 right-2 w-6 h-6 md:w-8 md:h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors z-10"
              >
                <svg className="w-3 h-3 md:w-4 md:h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <img
                src={selectedPlace.image || selectedPlace.img || "https://images.unsplash.com/photo-1600359746315-119f93a7a7d4?w=800"}
                alt={selectedPlace.name}
                className="h-32 md:h-40 w-full object-cover"
              />
              <div className="p-3 md:p-4">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1">
                  {selectedPlace.name}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 mb-3">
                  {selectedPlace.location}
                </p>
                <button 
                  onClick={() => handleViewDetails(selectedPlace._id || selectedPlace.id)}
                  className="w-full bg-red-600 text-white py-2 md:py-3 rounded-lg md:rounded-xl font-semibold hover:bg-red-700 transition text-sm md:text-base"
                >
                  View Place Details →
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default Rmap;
