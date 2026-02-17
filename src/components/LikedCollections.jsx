import { useLikes } from "../context/LikesContext";
import PlaceCard from "./PlaceCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// waterfalls / history
import badami from "../assests/badami.webp";
import hampi from "../assests/hampi.jpg";
import mysore from "../assests/places/Mysore.webp";
import bijapur from "../assests/places/Bijapur.webp";
import shimoga from "../assests/places/Shimoga.webp";
import halebidu from "../assests/places/Halebidu.webp";
import srirangapatna from "../assests/places/Srirangapatna.webp";
import aihole from "../assests/places/Aihole.webp";
import dandeli from "../assests/places/Dandeli.webp";
import ramanagaram from "../assests/places/Ramanagaram.webp";
import hassan from "../assests/places/Hassan.webp";
import bidar from "../assests/places/Bidar.webp";
import talakadu from "../assests/places/Talakadu.webp";
import melukote from "../assests/places/Melukote.webp";
import somnathpur from "../assests/places/Somnathpur.webp";
import sringeri from "../assests/places/Sringeri.webp";
import pattadakal from "../assests/places/Pattadakal.webp";

// Religious
import murudeshwaraTemple from "../assests/places/murudeshwara.jpg";
import kotilingeshwara from "../assests/places/koti.lingeswara.jpg";
import banashankari from "../assests/places/Banashankari.jpg";
import mookambika from "../assests/Mookambika.jpeg";
import kedareshwara from "../assests/Kedareshwara.jpg";
import amrutheshwara from "../assests/Amrtesvara.webp";

// hill stations
import sakleshpur from "../assests/sakleshpur.webp";
import coorg from "../assests/coorg.jpg";
import chikmangalur from "../assests/chikmangalur.avif";
import Agumbe from "../assests/Agumbe.jpeg";
import biligiri from "../assests/biligiri.jpg";
import gangamoola from "../assests/ganga mula.jpg";
import Kemmannugundi from "../assests/kemmannugundi.jpg";
import Kodachadri from "../assests/kodachadri.png";
import Kundadri from "../assests/KundadriHills.webp";
import Madikeri from "../assests/places/madikeri.jpg";
import nandihills from "../assests/NandiHills.jpg";

// beach
import kapuBeach from "../assests/Kapu-Beach.webp";
import devbaghBeach from "../assests/devbagh-beach.jpg";
import Malpe from "../assests/Malpe.jpg";
import Mattu from "../assests/Mattu.jpg";
import Murudeshwara from "../assests/murudeshwara-beach.jpg";
import Ombeach from "../assests/om-beach.jpg";
import PanamburuBeach from "../assests/panambur-beach.jpg";
import SomeshwaraBeach from "../assests/someshwara.jpg";
import StMarryBeach from "../assests/St.Marry-island.jpg";
import SurathkalBeach from "../assests/surathkal-beach.jpg";
import ThannirbhaviBeach from "../assests/tannirbhavi-beach.jpg";
import MaravantheBeach from "../assests/Maravanthe.avif";
import PadubidriBeach from "../assests/padubidri.jpg";

const places = [
  // waterfalls / history - using IDs 201+ to avoid conflicts
  { id: 201, name: "Hampi", location: "Vijayanagara", img: hampi },
  { id: 202, name: "Mysore Palace", location: "Mysore", img: mysore },
  { id: 203, name: "Bijapur Fort", location: "Bijapur", img: bijapur },
  { id: 204, name: "Shimoga Fort", location: "Shimoga", img: shimoga },
  { id: 205, name: "Badami Caves", location: "Bagalkot", img: badami },
  { id: 206, name: "Halebidu Temple", location: "Hassan", img: halebidu },
  { id: 207, name: "Srirangapatna Fort", location: "Mandya", img: srirangapatna },
  { id: 208, name: "Aihole Temples", location: "Bagalkot", img: aihole },
  { id: 209, name: "Dandeli Fort", location: "Uttara Kannada", img: dandeli },
  { id: 210, name: "Ramanagaram Fort", location: "Ramanagaram", img: ramanagaram },
  { id: 211, name: "Hassan Historic Site", location: "Hassan", img: hassan },
  { id: 212, name: "Bidar Fort", location: "Bidar", img: bidar },
  { id: 213, name: "Talakadu", location: "Mysore", img: talakadu },
  { id: 214, name: "Melukote Temple", location: "Mandya", img: melukote },
  { id: 215, name: "Somnathpur Temple", location: "Mysore", img: somnathpur },
  { id: 216, name: "Sringeri Temple", location: "Chikmagalur", img: sringeri },
  { id: 217, name: "Pattadakal Temple", location: "Bagalkot", img: pattadakal },

  // Religious - IDs 301-306
  { id: 301, name: "Murudeshwara Temple", location: "Uttara Kannada", img: murudeshwaraTemple },
  { id: 302, name: "Koti Lingeshwara", location: "Kolar", img: kotilingeshwara },
  { id: 303, name: "Banashankari Temple", location: "Bagalkot", img: banashankari },
  { id: 304, name: "Mookambika Temple", location: "Kollur", img: mookambika },
  { id: 305, name: "Kedareshwara Temple", location: "Halebidu", img: kedareshwara },
  { id: 306, name: "Amrutheshwara Temple", location: "Chikkamagalur", img: amrutheshwara },

  // hill stations - IDs 101-111 (matching placesData.jsx)
  { id: 101, name: "Sakleshpur", location: "Hassan", img: sakleshpur },
  { id: 102, name: "Coorg", location: "Kodagu", img: coorg },
  { id: 103, name: "Chikmagalur", location: "Chikmagalur", img: chikmangalur },
  { id: 104, name: "Agumbe", location: "Shivamogga", img: Agumbe },
  { id: 105, name: "Biligiri Hills", location: "Chamarajanagar", img: biligiri },
  { id: 106, name: "Gangamoola", location: "Chikmagalur", img: gangamoola },
  { id: 107, name: "Kemmannugundi", location: "Chikmagalur", img: Kemmannugundi },
  { id: 108, name: "Kodachadri", location: "Shivamogga", img: Kodachadri },
  { id: 109, name: "Kundadri", location: "Shivamogga", img: Kundadri },
  { id: 110, name: "Madikeri", location: "Madikeri", img: Madikeri },
  { id: 111, name: "Nandi Hills", location: "Chikkaballapura", img: nandihills },

  // beaches - IDs 1-13 (matching placesData.jsx)
  { id: 1, name: "Kapu Beach", location: "Udupi", img: kapuBeach },
  { id: 2, name: "Devbagh Beach", location: "Karwar", img: devbaghBeach },
  { id: 3, name: "Malpe Beach", location: "Udupi", img: Malpe },
  { id: 4, name: "Mattu Beach", location: "Udupi", img: Mattu },
  { id: 5, name: "Murudeshwara Beach", location: "Bhatkal", img: Murudeshwara },
  { id: 6, name: "Om Beach", location: "Gokarna", img: Ombeach },
  { id: 7, name: "Panamburu Beach", location: "Mangaluru", img: PanamburuBeach },
  { id: 8, name: "Someshwara Beach", location: "Mangaluru", img: SomeshwaraBeach },
  { id: 9, name: "St. Mary's Island", location: "Udupi", img: StMarryBeach },
  { id: 10, name: "Surathkal Beach", location: "Mangaluru", img: SurathkalBeach },
  { id: 11, name: "Thannirbhavi Beach", location: "Mangaluru", img: ThannirbhaviBeach },
  { id: 12, name: "Maravanthe Beach", location: "Kundapura", img: MaravantheBeach },
  { id: 13, name: "Padubidri Beach", location: "Udupi", img: PadubidriBeach },
];

const LikedCollection = () => {
  const { likedPlaces, toggleLike } = useLikes();

  // 🔥 FILTER liked places
  const likedData = places.filter((p) =>
    likedPlaces.includes(p.id)
  );

  // 🟡 If nothing liked
  if (likedData.length === 0) {
    return (
      <div className="px-4 md:px-10 mt-16 md:mt-20">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">
          ❤️ My Liked Places
        </h2>
        <p className="text-gray-500">
          You haven't liked any places yet.
        </p>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-10 mt-16 md:mt-20">
      <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">
        ❤️ My Liked Places
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
          <SwiperSlide key={p.id}>
            <PlaceCard
              id={p.id}
              img={p.img}
              name={p.name}
              location={p.location}
              isLiked={likedPlaces.includes(p.id)}
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
