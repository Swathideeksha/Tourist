import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import L from "leaflet";

// Fix for default marker icons in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

const Rmap = () => {
  const center = [14.5204, 75.7224]; // Center of Karnataka

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
              
              {/* Show empty state message since no places */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-90">
                <div className="text-center p-8">
                  <h3 className="text-xl font-semibold text-gray-600 mb-4">No Places Available</h3>
                  <p className="text-gray-500 mb-4">Please add places through the Admin Dashboard</p>
                </div>
              </div>
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rmap;
