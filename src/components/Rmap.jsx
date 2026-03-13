import React, { useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import L from "leaflet";
import { placesData } from "../data/placesData";

// Fix for default marker icons in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

// Karnataka location data with proper IDs matching placesData.jsx
const karnatakaPlaces = [
  // 🌊 BEACHES
  { id: 1, name: "Kapu Beach", position: [13.3390, 74.7421], type: "beach", description: "Popular beach in Udupi", connectivity: "Well connected" },
  { id: 2, name: "Devbagh Beach", position: [14.8167, 74.3333], type: "beach", description: "Scenic beach in Karwar", connectivity: "Well connected" },
  { id: 3, name: "Malpe Beach", position: [13.3404, 74.7431], type: "beach", description: "Beautiful beach near Udupi", connectivity: "Well connected" },
  { id: 4, name: "Mattu Beach", position: [13.3404, 74.7431], type: "beach", description: "Serene beach in Udupi", connectivity: "Well connected" },
  { id: 5, name: "Murudeshwara Beach", position: [14.4289, 74.4843], type: "beach", description: "Coastal gem in Bhatkal", connectivity: "Well connected" },
  { id: 6, name: "Om Beach", position: [14.5644, 74.3204], type: "beach", description: "Crescent shaped beach in Gokarna", connectivity: "Well connected" },
  { id: 7, name: "Panamburu Beach", position: [12.8556, 74.8333], type: "beach", description: "Golden sandy beach in Mangaluru", connectivity: "Well connected" },
  { id: 8, name: "Someshwara Beach", position: [12.8556, 74.8333], type: "beach", description: "Peaceful beach in Mangaluru", connectivity: "Well connected" },
  { id: 9, name: "St. Mary's Island", position: [13.3390, 74.7421], type: "beach", description: "Island beach in Udupi", connectivity: "Well connected" },
  { id: 10, name: "Surathkal Beach", position: [12.8556, 74.8333], type: "beach", description: "Beach with historic fort in Mangaluru", connectivity: "Well connected" },
  { id: 11, name: "Thannirbhavi Beach", position: [12.8556, 74.8333], type: "beach", description: "Serene beach in Mangaluru", connectivity: "Well connected" },
  { id: 12, name: "Maravanthe Beach", position: [13.5344, 74.6951], type: "beach", description: "Beautiful beach in Kundapura", connectivity: "Well connected" },
  { id: 13, name: "Padubidri Beach", position: [13.3390, 74.7421], type: "beach", description: "Pristine beach in Udupi", connectivity: "Well connected" },

  // ⛰️ HILL STATIONS
  { id: 101, name: "Sakleshpur", position: [13.0333, 75.6500], type: "hill-station", description: "Scenic hill station in Hassan", connectivity: "250km from Bengaluru" },
  { id: 102, name: "Coorg", position: [12.3375, 75.8069], type: "hill-station", description: "Scotland of India - coffee plantations", connectivity: "260km from Bengaluru" },
  { id: 103, name: "Chikmagalur", position: [13.3258, 75.7804], type: "hill-station", description: "Coffee plantations and peaks", connectivity: "245km from Bengaluru" },
  { id: 104, name: "Agumbe", position: [13.5859, 75.6500], type: "hill-station", description: "Gateway to the Western Ghats", connectivity: "270km from Bengaluru" },
  { id: 105, name: "Biligiri Hills", position: [12.2000, 76.8500], type: "hill-station", description: "Scenic hills in Chamarajanagar", connectivity: "200km from Bengaluru" },
  { id: 106, name: "Gangamoola", position: [13.3500, 75.8000], type: "hill-station", description: "Source of Tunga River", connectivity: "250km from Bengaluru" },
  { id: 107, name: "Kemmannugundi", position: [13.4000, 75.7000], type: "hill-station", description: "Hill station in Chikmagalur", connectivity: "240km from Bengaluru" },
  { id: 108, name: "Kodachadri", position: [13.9333, 75.4500], type: "hill-station", description: "Trek destination in Shivamogga", connectivity: "270km from Bengaluru" },
  { id: 109, name: "Kundadri", position: [13.8667, 75.5500], type: "hill-station", description: "Hill station with temple in Shivamogga", connectivity: "280km from Bengaluru" },
  { id: 110, name: "Madikeri", position: [12.4381, 75.7304], type: "hill-station", description: "Heart of Coorg", connectivity: "260km from Bengaluru" },
  { id: 111, name: "Nandi Hills", position: [13.3667, 77.7167], type: "hill-station", description: "Popular hill station near Bengaluru", connectivity: "60km from Bengaluru" },

  // 🏛️ HISTORY
  { id: 201, name: "Hampi", position: [15.3350, 76.4600], type: "heritage", description: "UNESCO World Heritage Site", connectivity: "340km from Bengaluru" },
  { id: 202, name: "Mysore Palace", position: [12.2958, 76.6394], type: "heritage", description: "Palace city known for Mysore Palace", connectivity: "150km from Bengaluru" },
  { id: 203, name: "Bijapur Fort", position: [16.8300, 75.7100], type: "heritage", description: "Massive fortification", connectivity: "500km from Bengaluru" },
  { id: 204, name: "Shimoga Fort", position: [13.9289, 75.5604], type: "heritage", description: "Historic fort in Shivamogga", connectivity: "280km from Bengaluru" },
  { id: 205, name: "Badami Caves", position: [15.9167, 75.6750], type: "heritage", description: "Ancient cave temples", connectivity: "530km from Bengaluru" },
  { id: 206, name: "Halebidu Temple", position: [13.2000, 75.8500], type: "heritage", description: "Hoysala architecture masterpiece", connectivity: "250km from Bengaluru" },
  { id: 207, name: "Srirangapatna Fort", position: [12.4156, 76.7056], type: "heritage", description: "Island fortress", connectivity: "140km from Bengaluru" },
  { id: 208, name: "Aihole Temples", position: [15.9500, 75.8500], type: "heritage", description: "Cradle of Indian Architecture", connectivity: "550km from Bengaluru" },
  { id: 209, name: "Dandeli Fort", position: [14.9500, 74.5833], type: "heritage", description: "Fort on Kali River", connectivity: "380km from Bengaluru" },
  { id: 210, name: "Ramanagaram Fort", position: [12.7208, 77.2833], type: "heritage", description: "Historic fort near Bengaluru", connectivity: "50km from Bengaluru" },
  { id: 211, name: "Hassan Historic Site", position: [13.1988, 75.9400], type: "heritage", description: "Historic monuments", connectivity: "190km from Bengaluru" },
  { id: 212, name: "Bidar Fort", position: [17.5797, 77.5000], type: "heritage", description: "Medieval fortification", connectivity: "620km from Bengaluru" },
  { id: 213, name: "Talakadu", position: [12.1219, 76.8022], type: "heritage", description: "Sacred temples on Kaveri River", connectivity: "130km from Bengaluru" },
  { id: 214, name: "Melukote Temple", position: [12.4500, 77.0500], type: "heritage", description: "Divya Desam pilgrimage site", connectivity: "120km from Bengaluru" },
  { id: 215, name: "Somnathpur Temple", position: [12.2500, 76.8500], type: "heritage", description: "Hoysala temple", connectivity: "140km from Bengaluru" },
  { id: 216, name: "Sringeri Temple", position: [13.2833, 75.7333], type: "heritage", description: "Adi Shankara's institution", connectivity: "250km from Bengaluru" },
  { id: 217, name: "Pattadakal Temple", position: [15.9333, 75.8667], type: "heritage", description: "UNESCO World Heritage Site", connectivity: "540km from Bengaluru" },

  // 🛕 RELIGIOUS
  { id: 301, name: "Murudeshwara Temple", position: [14.3561, 74.4854], type: "religious", description: "Sacred temple with 249ft Shiva statue", connectivity: "380km from Bengaluru" },
  { id: 302, name: "Koti Lingeshwara", position: [13.2167, 78.1667], type: "religious", description: "Temple dedicated to Lord Shiva", connectivity: "280km from Bengaluru" },
  { id: 303, name: "Banashankari Temple", position: [15.9333, 75.7000], type: "religious", description: "Historic temple", connectivity: "520km from Bengaluru" },
  { id: 304, name: "Mookambika Temple", position: [13.5833, 74.6667], type: "religious", description: "Revered temple complex", connectivity: "350km from Bengaluru" },
  { id: 305, name: "Kedareshwara Temple", position: [13.2000, 75.8500], type: "religious", description: "Ancient Shiva temple", connectivity: "250km from Bengaluru" },
  { id: 306, name: "Amrutheshwara Temple", position: [13.3258, 75.7804], type: "religious", description: "Ancient temple in coffee country", connectivity: "245km from Bengaluru" },
];

const Rmap = () => {
  const center = [14.5204, 75.7224]; // Center of Karnataka
  const [selectedPlace, setSelectedPlace] = useState(null);
  const navigate = useNavigate();

  // Get place data from placesData.jsx
  const getPlaceImage = (placeId) => {
    const place = placesData.find(p => p.id === placeId);
    return place ? place.img : "https://images.unsplash.com/photo-1600359746315-119f93a7a7d4?w=800";
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
              
              {karnatakaPlaces.map((place) => (
                <Marker 
                  key={place.id} 
                  position={place.position}
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
                src={getPlaceImage(selectedPlace.id)}
                alt={selectedPlace.name}
                className="h-32 md:h-40 w-full object-cover"
              />
              <div className="p-3 md:p-4">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1">
                  {selectedPlace.name}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 mb-2">
                  {selectedPlace.description}
                </p>
                <p className="text-xs md:text-sm text-gray-600 mb-3">
                  Connectivity: {selectedPlace.connectivity}
                </p>
                <button 
                  onClick={() => handleViewDetails(selectedPlace.id)}
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

