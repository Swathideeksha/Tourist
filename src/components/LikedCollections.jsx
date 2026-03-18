import { useState, useEffect } from "react";
import { useLikes } from "../context/LikesContext";
import PlaceCard from "./PlaceCard";
import { placesData } from "../data/placesData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const API_URL = "https://backend-chi-one-70.vercel.app/api";

const LikedCollection = () => {
  const { likedPlaces, toggleLike } = useLikes();
  const [likedData, setLikedData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLikedPlaces = async () => {
      if (likedPlaces.length === 0) {
        setLikedData([]);
        setLoading(false);
        return;
      }

      try {
        // Try to fetch from API first
        const response = await fetch(`${API_URL}/places`);
        if (response.ok) {
          const allPlaces = await response.json();
          
          // Filter places that are in the liked list (check both _id and id)
          const filtered = allPlaces.filter(p => 
            likedPlaces.includes(p._id) || likedPlaces.includes(p.id)
          );
          
          if (filtered.length > 0) {
            setLikedData(filtered);
            setLoading(false);
            return;
          }
        }
        
        // Fallback to static data
        const staticFiltered = placesData.filter(p => 
          likedPlaces.includes(String(p.id))
        );
        setLikedData(staticFiltered);
      } catch (error) {
        console.error("Error fetching liked places:", error);
        // Fallback to static data on error
        const staticFiltered = placesData.filter(p => 
          likedPlaces.includes(String(p.id))
        );
        setLikedData(staticFiltered);
      } finally {
        setLoading(false);
      }
    };

    fetchLikedPlaces();
  }, [likedPlaces]);

  // 🟡 If nothing liked
  if (loading) {
    return (
      <div className="px-4 md:px-10 mt-16 md:mt-20">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">
          ❤️ My Liked Places
        </h2>
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (likedData.length === 0) {
    return (
      <div className="px-4 md:px-10 mt-16 md:mt-20">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">
          ❤️ My Liked Places
        </h2>
        <p className="text-gray-500">
          You haven't liked any places yet. Start exploring and click the heart icon to save your favorite places!
        </p>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-10 mt-16 md:mt-20">
      <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">
        ❤️ My Liked Places ({likedData.length})
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        navigation={{
          nextEl: ".liked-swiper-button-next",
          prevEl: ".liked-swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          el: ".liked-swiper-pagination",
          dynamicBullets: true,
        }}
        autoplay={{ delay: 4000 }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-12 relative group"
      >
        {likedData.map((p) => (
          <SwiperSlide key={p._id || p.id}>
            <PlaceCard
              id={p._id || p.id}
              img={p.image || p.img || "/images/placeholder.jpg"}
              name={p.name}
              location={p.location}
              isLiked={likedPlaces.includes(p._id || p.id)}
              toggleLike={toggleLike}
            />
          </SwiperSlide>
        ))}

        {/* Custom Styled Navigation Buttons */}
        <button className="liked-swiper-button-prev absolute left-0 top-1/3 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-2 md:p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button className="liked-swiper-button-next absolute right-0 top-1/3 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-2 md:p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Pagination Dots */}
        <div className="liked-swiper-pagination"></div>
      </Swiper>

      {/* Custom Styles for Pagination Dots */}
      <style>{`
        .liked-swiper-pagination {
          bottom: 0 !important;
        }

        .liked-swiper-pagination .swiper-pagination-bullet {
          background-color: #d1d5db !important;
          width: 10px !important;
          height: 10px !important;
          opacity: 0.6 !important;
          margin: 0 5px !important;
          transition: all 0.3s ease !important;
        }

        .liked-swiper-pagination .swiper-pagination-bullet-active {
          background-color: #fbbf24 !important;
          opacity: 1 !important;
          width: 28px !important;
          border-radius: 5px !important;
        }

        .liked-swiper-pagination .swiper-pagination-bullet:hover {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
};

export default LikedCollection;
