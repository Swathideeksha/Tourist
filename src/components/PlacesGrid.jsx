import { placesData } from "../data/placesData";
import PlaceCard from "./PlaceCard";
import { useLikes } from "../context/LikesContext";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PlacesGrid = ({ search, activeCategory }) => {
  const { likedPlaces, toggleLike } = useLikes();

  const filteredPlaces = placesData.filter((place) => {
    const matchesCategory =
      activeCategory === "All Places" ||
      place.category === activeCategory;

    const matchesSearch =
      place.name.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  if (filteredPlaces.length === 0) {
    return <p className="text-center text-gray-500 mt-10">No places found</p>;
  }

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={24}
      navigation
      pagination={{
        clickable: true,
        el: ".swiper-pagination",
        type: "bullets",
        dynamicBullets: false,
      }}
      autoplay={{ delay: 3000 }}
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="pb-10"
    >
      {filteredPlaces.map((p) => (
        <SwiperSlide key={p.id}>
          <PlaceCard
            {...p}
            isLiked={likedPlaces.includes(p.id)}
            toggleLike={toggleLike}
          />
        </SwiperSlide>
      ))}
      <div className="swiper-pagination"></div>
    </Swiper>
  );
};

export default PlacesGrid;
