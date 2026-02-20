import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import seabirdImg from '../assests/seabird.avif';
import vrlImg from '../assests/VRL.jpg';
import sugamaImg from '../assests/sugama.jpg';
import srsImg from '../assests/SRS.jpg';
import kadambaImg from '../assests/Kadamba.webp';
import sharmaImg from '../assests/Sharma.png';
import nationalImg from '../assests/National.Travels.jpg';
import anandImg from '../assests/Anand.Travels.png';
import orangeImg from '../assests/Orange.Tours.png';

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
    {
      id: 4,
      name: "SRS Travels",
      type: "LUXURY COACHES",
      image: srsImg,
      model: "Scania Metrolink",
      capacity: "40 Sleeper Berths",
      safetyGear: "CCTV, ABS, Fire Extinguisher",
      engine: "Euro 6 Compliant",
      contact: "+91 80 2234 8888",
      address: "#45, M G Road, Bengaluru, Karnataka - 560001",
      amenities: ["High-Speed Wi-Fi", "USB Charging", "Reclining Seats", "Refreshments"],
      reviews: [
        {
          name: "Karthik R.",
          type: "Verified Traveler",
          date: "3 days ago",
          rating: 5,
          text: "Amazing journey to Hampi! The Scania bus was super comfortable and the journey was smooth.",
        },
        {
          name: "Lakshmi Devi",
          type: "Verified Traveler",
          date: "1 week ago",
          rating: 4,
          text: "Great service with comfortable seats. The staff was helpful throughout the journey.",
        },
      ],
      travelInfo: [
        "Carry valid ID proof for boarding.",
        "Report 30 minutes before departure.",
        "Refreshments included in ticket price",
      ],
      overallRating: 4.6,
    },
    {
      id: 5,
      name: "Kadamba Transport",
      type: "STATE RUN",
      image: kadambaImg,
      model: "Ashok Leyland Viking",
      capacity: "50 Seats",
      safetyGear: "First Aid, Fire Extinguisher",
      engine: "BS-IV Compliant",
      contact: "+91 832 222 1234",
      address: "Kadamba Depot, Panaji, Goa - 403001",
      amenities: ["Air Conditioning", "Reading Lights", "Emergency Exit", "Qualified Driver"],
      reviews: [
        {
          name: "Rahul Desai",
          type: "Verified Traveler",
          date: "5 days ago",
          rating: 4,
          text: "Good connectivity between Karnataka and Goa. Affordable pricing and reliable schedules.",
        },
        {
          name: "Meera Shetty",
          type: "Verified Traveler",
          date: "2 weeks ago",
          rating: 4,
          text: "Decent service for interstate travel. Buses are well-maintained.",
        },
      ],
      travelInfo: [
        "Valid ID required for interstate travel.",
        "Arrive 20 minutes before departure.",
        "Luggage allowance: 25kg per passenger",
      ],
      overallRating: 4.2,
    },
    {
      id: 6,
      name: "KSRTC Volvo",
      type: "PREMIUM",
      image: seabirdImg,
      model: "Volvo 9400 Multi-Axle",
      capacity: "44 Sleeper Berths",
      safetyGear: "CCTV, GPS, Fire Safety",
      engine: "BS-VI Compliant",
      contact: "+91 80 2235 9999",
      address: "Shantinagar Bus Station, Bengaluru, Karnataka - 560027",
      amenities: ["Wi-Fi", "USB Charging", "AC", "Water Bottle"],
      reviews: [
        {
          name: "Deepak Gowda",
          type: "Verified Traveler",
          date: "1 day ago",
          rating: 5,
          text: "Excellent Volvo service to Coorg! Very comfortable and punctual. Highly recommended.",
        },
        {
          name: "Smitha Nair",
          type: "Verified Traveler",
          date: "3 days ago",
          rating: 4,
          text: "Great experience traveling to hill stations. Clean buses and professional staff.",
        },
      ],
      travelInfo: [
        "Online booking available on KSRTC app.",
        "Report 15 minutes before departure.",
        "Student and senior citizen discounts available",
      ],
      overallRating: 4.3,
    },
    {
      id: 7,
      name: "Sharma Transport",
      type: "AC SLEEPER",
      image: sharmaImg,
      model: "Mercedes-Benz O500",
      capacity: "38 Sleeper Berths",
      safetyGear: "CCTV, ABS, GPS",
      engine: "Euro 5 Compliant",
      contact: "+91 80 2236 1010",
      address: "Electronic City Phase 1, Bengaluru, Karnataka - 560100",
      amenities: ["Premium Wi-Fi", "Individual AC Controls", "Blankets", "Snacks"],
      reviews: [
        {
          name: "Arjun Reddy",
          type: "Verified Traveler",
          date: "4 days ago",
          rating: 5,
          text: "Luxury travel to Mysore! The Mercedes bus was amazing with all amenities.",
        },
        {
          name: "Divya Menon",
          type: "Verified Traveler",
          date: "1 week ago",
          rating: 4,
          text: "Very comfortable journey. AC worked perfectly and seats were very comfortable.",
        },
      ],
      travelInfo: [
        "ID proof mandatory for booking.",
        "Boarding point: Electronic City Toll Plaza.",
        "Snacks and water provided free of cost",
      ],
      overallRating: 4.5,
    },
    {
      id: 8,
      name: "National Travels",
      type: "EXPRESS",
      image: nationalImg,
      model: "Volvo B9R",
      capacity: "45 Seater",
      safetyGear: "CCTV, Fire Extinguisher",
      engine: "BS-IV Compliant",
      contact: "+91 80 2237 2020",
      address: "Anand Rao Circle, Bengaluru, Karnataka - 560009",
      amenities: ["Wi-Fi", "Charging Points", "Air Conditioning", "Pushback Seats"],
      reviews: [
        {
          name: "Suresh Prabhu",
          type: "Verified Traveler",
          date: "2 days ago",
          rating: 4,
          text: "Good express service to Mangalore. Fast and comfortable journey.",
        },
        {
          name: "Asha Joseph",
          type: "Verified Traveler",
          date: "5 days ago",
          rating: 4,
          text: "Reliable service with decent amenities. On-time departure.",
        },
      ],
      travelInfo: [
        "Express routes with minimal stops.",
        "Report 20 minutes before departure.",
        "Cancellation allowed up to 6 hours before departure",
      ],
      overallRating: 4.4,
    },
    {
      id: 9,
      name: "Anand Travels",
      type: "SEMI SLEEPER",
      image: anandImg,
      model: "Ashok Leyland 3200",
      capacity: "42 Semi-Sleeper",
      safetyGear: "First Aid Kit, Fire Extinguisher",
      engine: "BS-IV Compliant",
      contact: "+91 80 2238 3030",
      address: "Kengeri Bus Terminal, Bengaluru, Karnataka - 560060",
      amenities: ["AC", "Charging Points", "Cup Holder", "Leg Rest"],
      reviews: [
        {
          name: "Naveen Kumar",
          type: "Verified Traveler",
          date: "6 days ago",
          rating: 4,
          text: "Good semi-sleeper service to Chikmagalur. Affordable and comfortable.",
        },
        {
          name: "Pooja Singh",
          type: "Verified Traveler",
          date: "10 days ago",
          rating: 4,
          text: "Nice experience traveling to hill station. Seats were comfortable.",
        },
      ],
      travelInfo: [
        "Semi-sleeper configuration for comfort.",
        "Report 15 minutes before departure.",
        "Economical option for budget travelers",
      ],
      overallRating: 4.1,
    },
    {
      id: 10,
      name: "Orange Tours",
      type: "PREMIUM",
      image: orangeImg,
      model: "Volvo 9800 Multi-Axle",
      capacity: "40 Sleeper Berths",
      safetyGear: "CCTV, ABS, GPS, Fire Safety",
      engine: "BS-VI Compliant",
      contact: "+91 80 2239 4040",
      address: "Yeshwanthpur Bus Depot, Bengaluru, Karnataka - 560022",
      amenities: ["Hi-Speed Wi-Fi", "USB Charging", "Climate Control", "Bedroll Provided"],
      reviews: [
        {
          name: "Vijay Malhotra",
          type: "Verified Traveler",
          date: "2 days ago",
          rating: 5,
          text: "Best premium service to Udupi! The multi-axle bus made the journey butter smooth.",
        },
        {
          name: "Radha Iyer",
          type: "Verified Traveler",
          date: "4 days ago",
          rating: 5,
          text: "Excellent service with world-class amenities. Will definitely travel again.",
        },
      ],
      travelInfo: [
        "Premium multi-axle coaches for extra comfort.",
        "Report 30 minutes before departure.",
        "Complimentary bedroll and water provided",
      ],
      overallRating: 4.6,
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
        {/* Hero Section - Like Place Details */}
        <div
          className="h-[280px] md:h-[350px] lg:h-[420px] relative flex items-end"
          style={{
            backgroundImage: `url(${bus.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10 p-4 md:p-10 text-white">
            <h1 className="text-2xl md:text-4xl font-bold">{bus.name}</h1>
            <p className="mt-1 md:mt-2 text-sm opacity-90">
              {bus.type} • {bus.model}
            </p>
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
                    {amenity === "Reclining Seats" && "💺"}
                    {amenity === "Refreshments" && "🥤"}
                    {amenity === "Air Conditioning" && "❄️"}
                    {amenity === "Emergency Exit" && "🚪"}
                    {amenity === "Qualified Driver" && "👨‍✈️"}
                    {amenity === "Reading Lights" && "💡"}
                    {amenity === "Water Bottle" && "💧"}
                    {amenity === "Individual AC Controls" && "🎛️"}
                    {amenity === "Snacks" && "🍪"}
                    {amenity === "Pushback Seats" && "🪑"}
                    {amenity === "Leg Rest" && "🦵"}
                    {amenity === "Bedroll Provided" && "🛏️"}
                    {amenity === "Cup Holder" && "☕"}
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
