import React from "react";

const Rmap = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="relative bg-white rounded-3xl p-10 shadow-xl overflow-hidden min-h-[600px]">

          {/* DOTTED BACKGROUND */}
          <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:18px_18px]" />

          <div className="relative z-10">

            {/* ROUTE LINES */}
            <svg className="absolute inset-0 w-full h-full">
              <line x1="70%" y1="65%" x2="55%" y2="72%" stroke="#ef4444" strokeWidth="2" strokeDasharray="6 6" />
              <line x1="55%" y1="72%" x2="45%" y2="65%" stroke="#ef4444" strokeWidth="2" strokeDasharray="6 6" />
              <line x1="45%" y1="65%" x2="60%" y2="35%" stroke="#ef4444" strokeWidth="2" strokeDasharray="6 6" />
            </svg>

            {/* MAP NODES */}
            <MapNode label="Bengaluru" color="yellow" positionClasses="left-[70%] top-[65%]" />
            <MapNode label="Mysuru" color="yellow" positionClasses="left-[55%] top-[72%]" />
            <MapNode label="Coorg" color="yellow" positionClasses="left-[45%] top-[65%]" />
            <MapNode label="Hampi" color="red" positionClasses="left-[60%] top-[35%]" />

            {/* LEGEND */}
            <div className="absolute bottom-6 left-6 bg-white rounded-2xl p-5 shadow-md w-56">
              <LegendItem color="bg-yellow-400" label="Hub Cities" />
              <LegendItem color="bg-red-500" label="Heritage Nodes" />
              <LegendItem dashed label="Bus Corridors" />
            </div>

            {/* INFO CARD */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 bg-white rounded-3xl shadow-xl w-80 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600359746315-119f93a7a7d4"
                alt="Hampi"
                className="h-44 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Hampi Ruins
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  UNESCO World Heritage Site.
                </p>
                <p className="text-sm text-gray-600 mb-5">
                  Connectivity: 340km from Bengaluru via NH50.
                </p>
                <button className="w-full bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition">
                  View Place Details →
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

/* MAP NODE */
const MapNode = ({ label, color, positionClasses }) => {
  const nodeColor = color === "red" ? "bg-red-500" : "bg-yellow-400";

  return (
    <div className={`absolute ${positionClasses}`}>
      <div className={`w-5 h-5 ${nodeColor} rounded-full border-4 border-white shadow-md`} />
      <p className="mt-2 text-sm font-semibold text-gray-700">
        {label}
      </p>
    </div>
  );
};

/* LEGEND ITEM */
const LegendItem = ({ color, label, dashed }) => (
  <div className="flex items-center gap-3 mb-3 last:mb-0">
    {dashed ? (
      <div className="w-6 border-t-2 border-dashed border-red-500" />
    ) : (
      <div className={`w-3 h-3 rounded-full ${color}`} />
    )}
    <span className="text-sm text-gray-700">{label}</span>
  </div>
);

export default Rmap;
