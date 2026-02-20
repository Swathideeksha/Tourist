import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import seabirdImg from '../assests/seabird.avif';
import vrlImg from '../assests/VRL.jpg';
import sugamaImg from '../assests/sugama.jpg';
import srsImg from '../assests/SRS.jpg';
import kadambaImg from '../assests/Kadamba.webp';
import sharmaImg from '../assests/Sharma.png';
import nationalImg from '../assests/National.Travels.jpg';
import anandImg from '../assests/Anand.Travels.png';
import orangeImg from '../assests/Orange.Tours.png';

const AllBuses = () => {
  const navigate = useNavigate();

  const buses = [
    { id: 1, name: "Sea-Bird Travels", type: "PREMIUM SERVICES", image: seabirdImg, rating: 4.8, reviews: 324 },
    { id: 2, name: "VRL Travels", type: "TOP RATED", image: vrlImg, rating: 4.5, reviews: 287 },
    { id: 3, name: "Sugama Tourist", type: "HERITAGE", image: sugamaImg, rating: 4.4, reviews: 156 },
    { id: 4, name: "SRS Travels", type: "LUXURY COACHES", image: srsImg, rating: 4.6, reviews: 198 },
    { id: 5, name: "Kadamba Transport", type: "STATE RUN", image: kadambaImg, rating: 4.2, reviews: 145 },
    { id: 6, name: "KSRTC Volvo", type: "PREMIUM", image: seabirdImg, rating: 4.3, reviews: 267 },
    { id: 7, name: "Sharma Transport", type: "AC SLEEPER", image: sharmaImg, rating: 4.5, reviews: 189 },
    { id: 8, name: "National Travels", type: "EXPRESS", image: nationalImg, rating: 4.4, reviews: 134 },
    { id: 9, name: "Anand Travels", type: "SEMI SLEEPER", image: anandImg, rating: 4.1, reviews: 98 },
    { id: 10, name: "Orange Tours", type: "PREMIUM", image: orangeImg, rating: 4.6, reviews: 212 },
  ];

  return (
    <>
      <Navbar />
      <div className="px-4 md:px-10 pt-24 md:pt-28 pb-12">
        <h1 className="text-2xl md:text-4xl font-extrabold mb-2">All Tourist Buses</h1>
        <p className="text-gray-600 mb-6 md:mb-8">Showing all {buses.length} private agency routes in Karnataka</p>

        <button
          onClick={() => navigate("/businfo")}
          className="mb-6 md:mb-8 bg-yellow-400 hover:bg-yellow-500 px-5 md:px-6 py-2 md:py-3 rounded-full font-semibold text-sm md:text-base transition"
        >
          ← Back to Bus Info
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {buses.map((bus) => (
            <div key={bus.id} className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Image Container */}
              <div className="relative h-40 md:h-48 overflow-hidden bg-gray-200">
                <img
                  src={bus.image}
                  alt={bus.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-yellow-400 text-gray-900 px-2 py-1 rounded-full text-xs font-bold">
                  {bus.type}
                </div>
              </div>

              {/* Content Container */}
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-gray-900">{bus.name}</h3>

                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < Math.floor(bus.rating) ? 'text-sm' : 'text-sm opacity-30'}>
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="ml-1 text-sm font-bold text-gray-900">{bus.rating}</span>
                  <span className="ml-1 text-xs text-gray-500">({bus.reviews})</span>
                </div>

                <button
                  onClick={() => navigate(`/bus/${bus.id}`)}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded-lg transition-colors duration-300 text-sm"
                >
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllBuses;
