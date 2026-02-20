import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import seabirdImg from '../assests/seabird.avif';
import vrlImg from '../assests/VRL.jpg';
import sugamaImg from '../assests/sugama.jpg';
import srsImg from '../assests/SRS.jpg';
import kadambaImg from '../assests/Kadamba.webp';
import sharmaImg from '../assests/Sharma.png';
import nationalImg from '../assests/National.Travels.jpg';
import anandImg from '../assests/Anand.Travels.png';
import orangeImg from '../assests/Orange.Tours.png';

const PrivateScheduledServices = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef(null);
  const buses = [
    {
      id: 1,
      name: "Sea-Bird Travels",
      type: "PREMIUM SERVICES",
      image: seabirdImg,
      rating: 4.8,
      reviews: 324,
    },
    {
      id: 2,
      name: "VRL Travels",
      type: "TOP RATED",
      image: vrlImg,
      rating: 4.5,
      reviews: 287,
    },
    {
      id: 3,
      name: "Sugama Tourist",
      type: "HERITAGE",
      image: sugamaImg,
      rating: 4.4,
      reviews: 156,
    },
    {
      id: 4,
      name: "SRS Travels",
      type: "LUXURY COACHES",
      image: srsImg,
      rating: 4.6,
      reviews: 198,
    },
    {
      id: 5,
      name: "Kadamba Transport",
      type: "STATE RUN",
      image: kadambaImg,
      rating: 4.2,
      reviews: 145,
    },
    {
      id: 6,
      name: "KSRTC Volvo",
      type: "PREMIUM",
      image: seabirdImg,
      rating: 4.3,
      reviews: 267,
    },
    {
      id: 7,
      name: "Sharma Transport",
      type: "AC SLEEPER",
      image: sharmaImg,
      rating: 4.5,
      reviews: 189,
    },
    {
      id: 8,
      name: "National Travels",
      type: "EXPRESS",
      image: nationalImg,
      rating: 4.4,
      reviews: 134,
    },
    {
      id: 9,
      name: "Anand Travels",
      type: "SEMI SLEEPER",
      image: anandImg,
      rating: 4.1,
      reviews: 98,
    },
    {
      id: 10,
      name: "Orange Tours",
      type: "PREMIUM",
      image: orangeImg,
      rating: 4.6,
      reviews: 212,
    },
  ];

  return (
    <div className="px-4 md:px-10 py-12 md:py-16">
      <div className="mb-6 md:mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-3">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Private Scheduled Services</h2>
          <p className="text-gray-600">Showing top 10 private agency routes</p>
        </div>
        <button
          onClick={() => navigate("/allbuses")}
          className="self-start md:self-auto inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-4 py-2 rounded-full text-sm transition"
        >
          View All Buses <span>→</span>
        </button>
      </div>

      <Swiper
        ref={swiperRef}
        modules={[Navigation, Autoplay]}
        spaceBetween={24}
        navigation={{
          nextEl: ".bus-swiper-button-next",
          prevEl: ".bus-swiper-button-prev",
        }}
        autoplay={{ delay: 4000 }}
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-4 relative"
      >
        {buses.map((bus) => (
          <SwiperSlide key={bus.id}>
            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
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
                {/* Bus Name */}
                <h3 className="text-lg font-bold mb-2 text-gray-900">{bus.name}</h3>

                {/* Rating */}
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

                {/* View Details Button */}
                <button 
                  onClick={() => navigate(`/bus/${bus.id}`)}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded-lg transition-colors duration-300 text-sm">
                  View Details →
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Buttons - Positioned inside */}
        <button className="bus-swiper-button-prev absolute top-1/2 -translate-y-1/2 left-2 z-20 bg-white/90 hover:bg-white shadow-xl border border-gray-200 text-gray-700 hover:text-red-700 p-2 rounded-full transition-all duration-300 flex items-center justify-center">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button className="bus-swiper-button-next absolute top-1/2 -translate-y-1/2 right-2 z-20 bg-white/90 hover:bg-white shadow-xl border border-gray-200 text-gray-700 hover:text-red-700 p-2 rounded-full transition-all duration-300 flex items-center justify-center">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Pagination */}
        <div className="bus-swiper-pagination"></div>
      </Swiper>

      {/* Custom Pagination Below Cards - Centered */}
      <div className="flex justify-center items-center gap-2 mt-6">
        {buses.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (swiperRef.current) {
                swiperRef.current.slideTo(index);
              }
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-red-600 w-8"
                : "bg-gray-300 hover:bg-gray-400 w-2"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PrivateScheduledServices;
