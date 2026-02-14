import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import seabirdImg from '../assests/seabird.avif';
import vrlImg from '../assests/VRL.jpg';
import sugamaImg from '../assests/sugama.jpg';

const BusDetails = () => {
  const { id } = useParams();

  const busesData = [
    {
      id: 1,
      name: "Sea-Bird Travels",
      type: "OFFICIAL SERVICE PROVIDER",
      image: seabirdImg,
      model: "Volvo 9600 Multi-Axle",
      capacity: "42 Sleeper Berths",
      safetyGear: "CCTV, Fire Extinguisher",
      engine: "BS-VI Compliant",
      contact: "+91 80 2225 5555",
      address: "#12, 1st Cross, Gandhi Nagar, Near Anand Rao Circle, Bengaluru, Karnataka - 560009",
      amenities: ["Hi-Speed Wi-Fi", "Charging Points", "Climate Control", "Water Provided"],
      reviews: [
        {
          name: "Ramesh A.",
          type: "Verified Traveler",
          date: "2 days ago",
          rating: 5,
          text: "Extremely comfortable journey. The bus arrived exactly on time at Anand Rao Circle. The multi-axle suspension makes the short sections very smooth.",
        },
        {
          name: "Sunitha Nayak",
          type: "Verified Traveler",
          date: "1 week ago",
          rating: 5,
          text: "Punctual and clean. The staff was professional. Great charging ports and high-quality blankets provided. Will book again for my coastal trips.",
        },
      ],
      travelInfo: [
        "Identity proof required for boarding.",
        "Reporting time is 15 minutes before departure.",
        "Cancellation policies vary by operator",
      ],
      overallRating: 4.6,
    },
    {
      id: 2,
      name: "VRL Travels",
      type: "NETWORK LEADER",
      image: vrlImg,
      model: "Volvo B11R",
      capacity: "45 Sleeper Berths",
      safetyGear: "CCTV, ABS, Fire Safety",
      engine: "BS-VI Compliant",
      contact: "+91 80 2225 6666",
      address: "#25, Commercial Street, Bengaluru, Karnataka - 560001",
      amenities: ["Wi-Fi", "USB Charging", "AC & Heating", "Blankets & Pillows"],
      reviews: [
        {
          name: "Priya Sharma",
          type: "Verified Traveler",
          date: "3 days ago",
          rating: 5,
          text: "Excellent service and on-time departure. The bus is well-maintained and the staff is courteous.",
        },
        {
          name: "Rajesh Kumar",
          type: "Verified Traveler",
          date: "5 days ago",
          rating: 4,
          text: "Good experience overall. Clean buses and professional drivers. Would recommend.",
        },
      ],
      travelInfo: [
        "Valid ID proof required for check-in.",
        "Report 15 minutes before departure time.",
        "Special cancellation charges apply during peak season",
      ],
      overallRating: 4.5,
    },
    {
      id: 3,
      name: "Sugama Tourist",
      type: "HERITAGE OPERATOR",
      image: sugamaImg,
      model: "Volvo B11R Heritage",
      capacity: "48 Sleeper Berths",
      safetyGear: "CCTV, ABS, Extinguisher",
      engine: "BS-VI Compliant",
      contact: "+91 80 2225 7777",
      address: "#18, Park Road, Bengaluru, Karnataka - 560002",
      amenities: ["Premium Wi-Fi", "Individual Lights", "Climate Control", "Meal Service"],
      reviews: [
        {
          name: "Ananya Pillai",
          type: "Verified Traveler",
          date: "1 day ago",
          rating: 5,
          text: "Best experience with Sugama Tourist! The hospitality was incredible and the bus is very comfortable.",
        },
        {
          name: "Vikram Singh",
          type: "Verified Traveler",
          date: "4 days ago",
          rating: 4,
          text: "Great service. Punctual and well-organized. Recommended for family trips.",
        },
      ],
      travelInfo: [
        "Government-issued ID proof mandatory.",
        "Arrive 20 minutes before scheduled departure.",
        "Group discounts available on advance bookings",
      ],
      overallRating: 4.4,
    },
  ];

  const bus = busesData.find((b) => b.id === parseInt(id));

  if (!bus) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-2xl font-bold">Bus not found</h1>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="bg-white">
        {/* Hero Section with Bus Image */}
        <div className="relative h-96 md:h-[450px] overflow-hidden rounded-xl mx-4 md:mx-10 mt-6 shadow-lg">
          <img
            src={bus.image}
            alt={bus.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/70 via-red-900/50 to-transparent flex items-center justify-start">
            <div className="text-white p-8 md:p-12 max-w-md">
              <p className="text-xs md:text-sm font-bold text-yellow-400 mb-3 uppercase tracking-wide">{bus.type}</p>
              <h1 className="text-3xl md:text-5xl font-bold mb-2 leading-tight">{bus.name}</h1>
              <div className="w-16 h-1 bg-yellow-400 mt-4"></div>
            </div>
          </div>
        </div>

        {/* Bus Information Section */}
        <div className="px-4 md:px-10 py-12">
          <div className="flex gap-8 mb-12 flex-col md:flex-row">
            {/* Bus Details Grid */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-8 flex items-center">
                <span className="text-red-600 mr-3">🚌</span> Bus Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Bus Model */}
                <div className="border-l-4 border-red-600 pl-4">
                  <p className="text-xs text-gray-500 font-semibold uppercase">Bus Model</p>
                  <p className="text-lg font-bold text-gray-900">{bus.model}</p>
                </div>

                {/* Capacity */}
                <div className="border-l-4 border-blue-600 pl-4">
                  <p className="text-xs text-gray-500 font-semibold uppercase">Total Capacity</p>
                  <p className="text-lg font-bold text-gray-900">{bus.capacity}</p>
                </div>

                {/* Safety Gear */}
                <div className="border-l-4 border-red-600 pl-4">
                  <p className="text-xs text-gray-500 font-semibold uppercase">Safety Gear</p>
                  <p className="text-lg font-bold text-gray-900">{bus.safetyGear}</p>
                </div>

                {/* Engine Standards */}
                <div className="border-l-4 border-yellow-400 pl-4">
                  <p className="text-xs text-gray-500 font-semibold uppercase">Engine Standards</p>
                  <p className="text-lg font-bold text-gray-900">{bus.engine}</p>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="w-full md:w-80 bg-red-900 text-white rounded-2xl p-8">
              <p className="text-xs font-bold uppercase text-yellow-400 mb-4">🎯 Operator Contact</p>
              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase text-gray-300 mb-1">Support Helpline</p>
                  <p className="text-2xl font-bold">{bus.contact}</p>
                </div>
                <div>
                  <p className="text-xs uppercase text-gray-300 mb-2">Head Office</p>
                  <p className="text-sm leading-relaxed">{bus.address}</p>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-6 pt-6 border-t border-red-800">
                OFFICIAL OPERATOR PORTAL
              </p>
            </div>
          </div>

          {/* Amenity Highlights */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <span className="mr-3">🎯</span> Amenity Highlights
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {bus.amenities.map((amenity, idx) => (
                <div key={idx} className="text-center p-6 rounded-lg hover:bg-gray-50 transition">
                  <div className="text-4xl mb-4">
                    {amenity === "Hi-Speed Wi-Fi" && "📶"}
                    {amenity === "Charging Points" && "🔌"}
                    {amenity === "Climate Control" && "❄️"}
                    {amenity === "Water Provided" && "💧"}
                    {amenity === "Premium Wi-Fi" && "📶"}
                    {amenity === "Individual Lights" && "💡"}
                    {amenity === "Meal Service" && "🍽️"}
                    {amenity === "USB Charging" && "🔌"}
                    {amenity === "AC & Heating" && "🌡️"}
                    {amenity === "Blankets & Pillows" && "🛏️"}
                  </div>
                  <p className="text-sm font-semibold text-gray-900">{amenity}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Travel Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-6">Travel Information</h3>
              <ul className="space-y-3">
                {bus.travelInfo.map((info, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-red-600 mr-3 flex-shrink-0">●</span>
                    <span className="text-gray-700">{info}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* User Reviews */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold flex items-center">
                <span className="mr-3">⭐</span> User Reviews
              </h2>
              <div className="flex items-center">
                <span className="text-yellow-400 text-2xl mr-2">★</span>
                <span className="text-2xl font-bold text-gray-900">{bus.overallRating}</span>
                <span className="text-gray-400 ml-1">/5.0</span>
              </div>
            </div>

            <div className="space-y-6">
              {bus.reviews.map((review, idx) => (
                <div key={idx} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-bold text-gray-900">{review.name}</p>
                      <p className="text-sm text-gray-500">{review.type} • {review.date}</p>
                    </div>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 italic">{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BusDetails;
