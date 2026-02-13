import React, { useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";

// Fix for default marker icons in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

// Karnataka location data with detailed info
const karnatakaPlaces = [
  { 
    id: 1, 
    name: "Bengaluru", 
    position: [12.9716, 77.5946], 
    type: "hub", 
    description: "Capital city, IT hub of India",
    connectivity: "Well connected by air, rail, and road",
    image: "https://images.unsplash.com/photo-1600359746315-119f93a7a7d4?w=800"
  },
  { 
    id: 2, 
    name: "Mysuru", 
    position: [12.2958, 76.6394], 
    type: "hub", 
    description: "Palace city known for Mysore Palace",
    connectivity: "150km from Bengaluru via NH75",
    image: "https://images.unsplash.com/photo-1600359746315-119f93a7a7d4?w=800"
  },
  { 
    id: 3, 
    name: "Coorg", 
    position: [12.3375, 75.8069], 
    type: "heritage", 
    description: "Scotland of India, coffee plantations",
    connectivity: "260km from Bengaluru via NH48",
    image: "https://images.unsplash.com/photo-1600359746315-119f93a7a7d4?w=800"
  },
  { 
    id: 4, 
    name: "Hampi", 
    position: [15.3350, 76.4600], 
    type: "heritage", 
    description: "UNESCO World Heritage Site",
    connectivity: "340km from Bengaluru via NH50",
    image: "https://images.unsplash.com/photo-1600359746315-119f93a7a7d4?w=800"
  },
  { 
    id: 5, 
    name: "Mangalore", 
    position: [12.9141, 74.8560], 
    type: "hub", 
    description: "Coastal city, major port",
    connectivity: "350km from Bengaluru via NH69",
    image: "https://images.unsplash.com/photo-1600359746315-119f93a7a7d4?w=800"
  },
  { 
    id: 6, 
    name: "Badami", 
    position: [15.9167, 75.6750], 
    type: "heritage", 
    description: "Ancient capital of Chalukyas",
    connectivity: "530km from Bengaluru via NH48",
    image: "https://images.unsplash.com/photo-1600359746315-119f93a7a7d4?w=800"
  },
  { 
    id: 7, 
    name: "Chikmagalur", 
    position: [13.3258, 75.7804], 
    type: "heritage", 
    description: "Coffee plantations, hill station",
    connectivity: "245km from Bengaluru via NH48",
    image: "https://images.unsplash.com/photo-1600359746315-119f93a7a7d4?w=800"
  },
  { 
    id: 8, 
    name: "Jog Falls", 
    position: [14.2147, 74.8560], 
    type: "heritage", 
    description: "Magnificent waterfall, second highest in India",
    connectivity: "400km from Bengaluru via NH48",
    image: "https://images.unsplash.com/photo-1600359746315-119f93a7a7d4?w=800"
  },
];

const Rmap = () => {
  const center = [14.5204, 75.7224]; // Center of Karnataka
  const [selectedPlace, setSelectedPlace] = useState(null);

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
                src={selectedPlace.image}
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
                <button className="w-full bg-red-600 text-white py-2 md:py-3 rounded-lg md:rounded-xl font-semibold hover:bg-red-700 transition text-sm md:text-base">
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
