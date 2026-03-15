import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BusDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const busData = {
    1: {
      name: "Premium Bus Service",
      type: "AC SLEEPER",
      rating: 4.8,
      reviews: 324,
      contact: "+91-819-1234-567",
      address: "Mangalore",
      model: "Volvo 9800 Multi-Axle",
      capacity: "45 Seater",
      safetyGear: "Fire Extinguisher, First Aid Kit, Safety Hammers",
      engine: "BS6 Compliant",
      amenities: ["WiFi", "USB Charging", "Climate Control", "Water Bottle", "Reading Light"],
      reviewsList: [
        { name: "Rahul Sharma", type: "Business Traveler", date: "Jan 2024", rating: 5, text: "Excellent service, comfortable seats and great staff." },
        { name: "Priya Nair", type: "Tourist", date: "Dec 2023", rating: 5, text: "Best bus service. Highly recommended!" }
      ],
      travelInfo: [
        "Boarding points: Major cities",
        "Dropping points: All major cities",
        "Cancellation policy: 24 hours prior to departure"
      ]
    },
    2: {
      name: "Express Bus Service",
      type: "TOP RATED",
      rating: 4.5,
      reviews: 287,
      contact: "+91-831-1234-567",
      address: "Hubli",
      model: "Volvo 9400",
      capacity: "40 Seater",
      safetyGear: "Fire Extinguisher, First Aid Kit, Safety Hammers",
      engine: "BS6 Compliant",
      amenities: ["WiFi", "USB Charging", "Climate Control", "Water Bottle"],
      reviewsList: [
        { name: "Amit Kumar", type: "Regular Traveler", date: "Jan 2024", rating: 4, text: "Good service and on-time departure." }
      ],
      travelInfo: [
        "Boarding points: Major cities",
        "Dropping points: All major cities",
        "Cancellation policy: 24 hours prior"
      ]
    },
    3: {
      name: "Heritage Bus Service",
      type: "HERITAGE",
      rating: 4.6,
      reviews: 198,
      contact: "+91-821-1234-567",
      address: "Bangalore",
      model: "Bharat Benz AC Sleeper",
      capacity: "32 Sleeper",
      safetyGear: "Fire Extinguisher, First Aid Kit, CCTV",
      engine: "BS6 Compliant",
      amenities: ["AC", "WiFi", "USB Charging", "Bedroll", "Water Bottle"],
      reviewsList: [
        { name: "Vijay Kumar", type: "Tourist", date: "Dec 2023", rating: 5, text: "Very comfortable sleeper coach. Good sleep during night travel." }
      ],
      travelInfo: [
        "Boarding points: Major cities",
        "Dropping points: All major cities",
        "Cancellation policy: 24 hours prior"
      ]
    }
  };

  const bus = busData[id];

  if (!bus) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Bus Not Found</h1>
          <button
            onClick={() => navigate('/allbuses')}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Back to All Buses
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <button
          onClick={() => navigate('/allbuses')}
          className="mb-6 text-red-600 hover:text-red-700 font-semibold flex items-center gap-2"
        >
          ← Back to All Buses
        </button>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="h-64 bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
            <span className="text-white text-8xl font-bold">{bus.name[0]}</span>
          </div>

          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{bus.name}</h1>
                <span className="inline-block bg-red-100 text-red-600 text-sm px-3 py-1 rounded-full">
                  {bus.type}
                </span>
              </div>
              <div className="text-right">
                <div className="flex items-center text-yellow-500 text-2xl">
                  <span>★★★★★</span>
                  <span className="ml-2 text-gray-600 text-lg">{bus.rating}</span>
                </div>
                <p className="text-gray-500 mt-1">{bus.reviews} reviews</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">Bus Details</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Model:</span>
                    <span className="font-semibold">{bus.model}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Capacity:</span>
                    <span className="font-semibold">{bus.capacity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Contact:</span>
                    <span className="font-semibold">{bus.contact}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Address:</span>
                    <span className="font-semibold">{bus.address}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Engine:</span>
                    <span className="font-semibold">{bus.engine}</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">Safety Features</h2>
                <p className="text-gray-600">{bus.safetyGear}</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Amenities</h2>
              <div className="flex flex-wrap gap-3">
                {bus.amenities.map((amenity, index) => (
                  <span key={index} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg">
                    {amenity}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Travel Information</h2>
              <ul className="space-y-2">
                {bus.travelInfo.map((info, index) => (
                  <li key={index} className="text-gray-600 flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    {info}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Customer Reviews</h2>
              <div className="space-y-4">
                {bus.reviewsList.map((review, index) => (
                  <div key={index} className="border-b pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-semibold text-gray-800">{review.name}</p>
                        <p className="text-sm text-gray-500">{review.type} • {review.date}</p>
                      </div>
                      <div className="flex text-yellow-500 text-sm">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < review.rating ? "" : "opacity-30"}>★</span>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600">{review.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusDetails;
