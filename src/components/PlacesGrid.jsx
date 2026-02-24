import { useState, useEffect } from "react";
import PlaceCard from "./PlaceCard";
import { useLikes } from "../context/LikesContext";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000/api";

const PlacesGrid = ({ search, activeCategory }) => {
  const { likedPlaces, toggleLike } = useLikes();
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlaces = async () => {
      setLoading(true);
      try {
        // Map frontend category names to backend category values
        const categoryMap = {
          "All Places": "all",
          "Hill Stations": "hill-station",
          "Beaches": "beach",
          "Historical Sites": "history",
          "Religious Sites": "religious"
        };
        const category = categoryMap[activeCategory] || "all";
        const response = await fetch(`${API_URL}/places?category=${category}`);
        const data = await response.json();
        setPlaces(data);
      } catch (error) {
        console.error("Error fetching places:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPlaces();
  }, [activeCategory]);

  const filteredPlaces = places.filter((place) => {
    const matchesSearch =
      place.name.toLowerCase().includes(search.toLowerCase()) ||
      place.location.toLowerCase().includes(search.toLowerCase());
    return matchesSearch;
  });

  if (loading) {
    return <p className="text-center text-gray-500 mt-10">Loading...</p>;
  }

  if (filteredPlaces.length === 0) {
    return <p className="text-center text-gray-500 mt-10">No places found</p>;
  }

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          dynamicBullets: true,
        }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-12 relative group"
      >
        {filteredPlaces.map((p) => (
          <SwiperSlide key={p._id}>
            <PlaceCard
              id={p._id}
              img={p.image || "/images/placeholder.jpg"}
              name={p.name}
              location={p.location}
              isLiked={likedPlaces.includes(p._id)}
              toggleLike={toggleLike}
            />
          </SwiperSlide>
        ))}

        {/* Custom Styled Navigation Buttons */}
        <button className="swiper-button-prev absolute left-0 top-1/3 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-2 md:p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button className="swiper-button-next absolute right-0 top-1/3 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-2 md:p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Pagination Dots */}
        <div className="swiper-pagination"></div>
      </Swiper>

      {/* Custom Styles for Pagination Dots */}
      <style>{`
        .swiper-pagination {
          bottom: 0 !important;
        }

        .swiper-pagination-bullet {
          background-color: #d1d5db !important;
          width: 10px !important;
          height: 10px !important;
          opacity: 0.6 !important;
          margin: 0 5px !important;
          transition: all 0.3s ease !important;
        }

        .swiper-pagination-bullet-active {
          background-color: #fbbf24 !important;
          opacity: 1 !important;
          width: 28px !important;
          border-radius: 5px !important;
        }

        .swiper-pagination-bullet:hover {
          opacity: 1 !important;
        }
      `}</style>
    </>
  );
};

export default PlacesGrid;
