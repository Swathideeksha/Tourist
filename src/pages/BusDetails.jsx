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

const busData = {
  1: {
    name: "Sea-Bird Travels",
    type: "PREMIUM SERVICES",
    image: seabirdImg,
    rating: 4.8,
    reviews: 324,
    contact: "+91-819-1234-567",
    address: "Mangalore, Karnataka",
    model: "Volvo 9800 Multi-Axle",
    capacity: "45 Seater",
    safetyGear: "Fire Extinguisher, First Aid Kit, Safety Hammers",
    engine: "BS6 Compliant",
    amenities: ["WiFi", "USB Charging", "Climate Control", "Water Bottle", "Reading Light"],
    reviewsList: [
      { name: "Rahul Sharma", type: "Business Traveler", date: "Jan 2024", rating: 5, text: "Excellent service, comfortable seats and great staff." },
      { name: "Priya Nair", type: "Tourist", date: "Dec 2023", rating: 5, text: "Best bus service in Karnataka. Highly recommended!" }
    ],
    travelInfo: [
      "Boarding points: Mangalore, Bangalore, Hubli",
      "Dropping points: Major cities in Karnataka",
      "Cancellation policy: 24 hours prior to departure"
    ]
  },
  2: {
    name: "VRL Travels",
    type: "TOP RATED",
    image: vrlImg,
    rating: 4.5,
    reviews: 287,
    contact: "+91-831-1234-567",
    address: "Hubli, Karnataka",
    model: "Scania Metrolink",
    capacity: "40 Seater",
    safetyGear: "Fire Extinguisher, First Aid Kit, CCTV",
    engine: "BS6 Compliant",
    amenities: ["WiFi", "USB Charging", "Air Conditioning", "Snacks"],
    reviewsList: [
      { name: "Amit Kumar", type: "Frequent Traveler", date: "Jan 2024", rating: 4, text: "Good service with comfortable seats." }
    ],
    travelInfo: [
      "Boarding points: Hubli, Dharwad, Bangalore",
      "Dropping points: All major cities",
      "Cancellation policy: 12 hours prior"
    ]
  },
  3: {
    name: "Sugama Tourist",
    type: "HERITAGE",
    image: sugamaImg,
    rating: 4.4,
    reviews: 156,
    contact: "+91-80-1234-5678",
    address: "Bangalore, Karnataka",
    model: "Ashok Leyland Viking",
    capacity: "38 Seater",
    safetyGear: "Fire Extinguisher, First Aid Kit",
    engine: "BS5 Compliant",
    amenities: ["Air Conditioning", "Water Bottle", "Blanket"],
    reviewsList: [
      { name: "Suresh Reddy", type: "Tourist", date: "Nov 2023", rating: 4, text: "Good value for money service." }
    ],
    travelInfo: [
      "Boarding points: Bangalore, Mysore",
      "Dropping points: Hampi, Badami",
      "Cancellation policy: 24 hours prior"
    ]
  },
  4: {
    name: "SRS Travels",
    type: "LUXURY COACHES",
    image: srsImg,
    rating: 4.6,
    reviews: 198,
    contact: "+91-80-2345-6789",
    address: "Bangalore, Karnataka",
    model: "Volvo 9400 AX",
    capacity: "42 Seater",
    safetyGear: "Fire Extinguisher, First Aid Kit, GPS",
    engine: "BS6 Compliant",
    amenities: ["WiFi", "USB Charging", "Climate Control", "Meal", "Entertainment"],
    reviewsList: [
      { name: "Kavita Singh", type: "Family Traveler", date: "Dec 2023", rating: 5, text: "Luxury experience at affordable price!" }
    ],
    travelInfo: [
      "Boarding points: Bangalore, Chennai",
      "Dropping points: Major South Indian cities",
      "Cancellation policy: 24 hours prior"
    ]
  },
  5: {
    name: "Kadamba Transport",
    type: "STATE RUN",
    image: kadambaImg,
    rating: 4.2,
    reviews: 145,
    contact: "+91-832-1234-567",
    address: "Panaji, Goa",
    model: "Ashok Leyland LP",
    capacity: "45 Seater",
    safetyGear: "Fire Extinguisher, First Aid Kit",
    engine: "BS4 Compliant",
    amenities: ["Air Conditioning", "Water Bottle"],
    reviewsList: [
      { name: "John D'Costa", type: "Tourist", date: "Oct 2023", rating: 4, text: "Good connectivity to Goa and nearby areas." }
    ],
    travelInfo: [
      "Boarding points: Panaji, Vasco",
      "Dropping points: Mumbai, Bangalore",
      "Cancellation policy: 12 hours prior"
    ]
  },
  6: {
    name: "KSRTC Volvo",
    type: "PREMIUM",
    image: seabirdImg,
    rating: 4.3,
    reviews: 267,
    contact: "+91-80-1234-0000",
    address: "Bangalore, Karnataka",
    model: "Volvo 8400",
    capacity: "40 Seater",
    safetyGear: "Fire Extinguisher, First Aid Kit, Safety Hammers",
    engine: "BS6 Compliant",
    amenities: ["WiFi", "USB Charging", "Climate Control", "Water Bottle", "Blanket"],
    reviewsList: [
      { name: "Ramesh G", type: "Business Traveler", date: "Jan 2024", rating: 4, text: "On time service with good comfort." }
    ],
    travelInfo: [
      "Boarding points: Bangalore, Mysore, Mangalore",
      "Dropping points: All Karnataka cities",
      "Cancellation policy: 24 hours prior"
    ]
  },
  7: {
    name: "Sharma Transport",
    type: "AC SLEEPER",
    image: sharmaImg,
    rating: 4.5,
    reviews: 189,
    contact: "+91-821-1234-567",
    address: "Mysore, Karnataka",
    model: "Bharat Benz AC Sleeper",
    capacity: "32 Sleeper",
    safetyGear: "Fire Extinguisher, First Aid Kit, CCTV",
    engine: "BS6 Compliant",
    amenities: ["AC", "WiFi", "USB Charging", "Bedroll", "Water Bottle"],
    reviewsList: [
      { name: "Vijay Kumar", type: "Tourist", date: "Dec 2023", rating: 5, text: "Very comfortable sleeper coach. Good sleep during night travel." }
    ],
    travelInfo: [
      "Boarding points: Mysore, Bangalore, Chennai",
      "Dropping points: Major South Indian cities",
      "Cancellation policy: 24 hours prior"
    ]
  },
  8: {
    name: "National Travels",
    type: "EXPRESS",
    image: nationalImg,
    rating: 4.4,
    reviews: 134,
    contact: "+91-80-3456-7890",
    address: "Bangalore, Karnataka",
    model: "Ashok Leyland Express",
    capacity: "44 Seater",
    safetyGear: "Fire Extinguisher, First Aid Kit",
    engine: "BS5 Compliant",
    amenities: ["Air Conditioning", "Water Bottle", "Snacks"],
    reviewsList: [
      { name: "Mahesh Patel", type: "Frequent Traveler", date: "Nov 2023", rating: 4, text: "Reliable service with good frequency." }
    ],
    travelInfo: [
      "Boarding points: Bangalore, Hyderabad",
      "Dropping points: Mumbai, Pune",
      "Cancellation policy: 12 hours prior"
    ]
  },
  9: {
    name: "Anand Travels",
    type: "SEMI SLEEPER",
    image: anandImg,
    rating: 4.1,
    reviews: 98,
    contact: "+91-820-1234-567",
    address: "Mangalore, Karnataka",
    model: "Tata Starbus Semi Sleeper",
    capacity: "40 Seater",
    safetyGear: "Fire Extinguisher, First Aid Kit",
    engine: "BS5 Compliant",
    amenities: ["Air Conditioning", "Water Bottle"],
    reviewsList: [
      { name: "Rajesh Nayak", type: "Tourist", date: "Oct 2023", rating: 4, text: "Decent service for the price." }
    ],
    travelInfo: [
      "Boarding points: Mangalore, Udupi",
      "Dropping points: Bangalore, Mysore",
      "Cancellation policy: 24 hours prior"
    ]
  },
  10: {
    name: "Orange Tours",
    type: "PREMIUM",
    image: orangeImg,
    rating: 4.6,
    reviews: 212,
    contact: "+91-80-4567-8901",
    address: "Bangalore, Karnataka",
    model: "Volvo 9800 Premium",
    capacity: "38 Seater",
    safetyGear: "Fire Extinguisher, First Aid Kit, GPS, CCTV",
    engine: "BS6 Compliant",
    amenities: ["WiFi", "USB Charging", "Climate Control", "Meal", "Entertainment", "Blanket"],
    reviewsList: [
      { name: "Sneha Rao", type: "Business Traveler", date: "Jan 2024", rating: 5, text: "Premium experience with excellent amenities!" }
    ],
    travelInfo: [
      "Boarding points: Bangalore, Chennai, Hyderabad",
      "Dropping points: All major South Indian cities",
      "Cancellation policy: 24 hours prior"
    ]
  }
};

const BusDetails = () => {
  const { id } = useParams();
  const bus = busData[id];

  if (!bus) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800">Bus not found</h1>
            <p className="text-gray-600 mt-2">The bus you're looking for doesn't exist.</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="bg-white">
        {/* Hero Section */}
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
                OPERATOR PORTAL
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
                    {amenity.toLowerCase().includes("wi-fi") && "📶"}
                    {amenity.toLowerCase().includes("charging") && "🔌"}
                    {amenity.toLowerCase().includes("climate") && "❄️"}
                    {amenity.toLowerCase().includes("ac") && "❄️"}
                    {amenity.toLowerCase().includes("water") && "💧"}
                    {amenity.toLowerCase().includes("light") && "💡"}
                    {amenity.toLowerCase().includes("meal") && "🍽️"}
                    {amenity.toLowerCase().includes("blanket") && "🛏️"}
                    {amenity.toLowerCase().includes("snack") && "🍪"}
                    {!amenity.toLowerCase().includes("wi-fi") && 
                     !amenity.toLowerCase().includes("charging") && 
                     !amenity.toLowerCase().includes("climate") && 
                     !amenity.toLowerCase().includes("ac") && 
                     !amenity.toLowerCase().includes("water") && 
                     !amenity.toLowerCase().includes("light") && 
                     !amenity.toLowerCase().includes("meal") && 
                     !amenity.toLowerCase().includes("blanket") && 
                     !amenity.toLowerCase().includes("snack") && "✓"}
                  </div>
                  <p className="text-sm font-semibold text-gray-900">{amenity}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <span className="mr-3">⭐</span> Traveler Reviews
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {bus.reviewsList.map((review, idx) => (
                <div key={idx} className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="font-bold text-gray-900">{review.name}</p>
                      <p className="text-xs text-gray-500">{review.type} • {review.date}</p>
                    </div>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < review.rating ? 'text-sm' : 'text-sm opacity-30'}>
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{review.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Travel Info */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <span className="mr-3">ℹ️</span> Travel Information
            </h2>
            <div className="bg-blue-50 p-6 rounded-lg">
              <ul className="space-y-3">
                {bus.travelInfo.map((info, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">•</span>
                    <span className="text-gray-700">{info}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BusDetails;
