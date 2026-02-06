import { useNavigate } from "react-router-dom";
import { useLikes } from "../context/LikesContext";
import PlaceCard from "./PlaceCard";

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

const beaches = [
  { id: 6, name: "Kapu Beach", location: "Udupi", img: kapuBeach },
  { id: 7, name: "Devbagh Beach", location: "Karwar", img: devbaghBeach },
  { id: 8, name: "Malpe Beach", location: "Udupi", img: Malpe },
  { id: 9, name: "Mattu Beach", location: "Udupi", img: Mattu },
  { id: 10, name: "Murudeshwara Beach", location: "Bhatkal", img: Murudeshwara },
  { id: 11, name: "Om Beach", location: "Gokarna", img: Ombeach },
  { id: 12, name: "Panamburu Beach", location: "Mangaluru", img: PanamburuBeach },
  { id: 13, name: "Someshwara Beach", location: "Mangaluru", img: SomeshwaraBeach },
  { id: 14, name: "St. Mary’s Beach", location: "Udupi", img: StMarryBeach },
  { id: 15, name: "Surathkal Beach", location: "Mangaluru", img: SurathkalBeach },
  { id: 16, name: "Thannirbhavi Beach", location: "Mangaluru", img: ThannirbhaviBeach },
  { id: 17, name: "Maravanthe Beach", location: "Kundapura", img: MaravantheBeach },
  { id: 18, name: "Padubidri Beach", location: "Udupi", img: PadubidriBeach },
];

const Beaches = () => {
  const navigate = useNavigate();
  const { likedPlaces, toggleLike } = useLikes();

  return (
    <div className="px-10 mt-20">
         <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold">
               Beaches of Karnataka
              <br />
            
            </h1>
       {/* BACK BUTTON */}
      <button
              onClick={() => navigate("/places")}
              className="mt-8 inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-red-900 font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg"
            >
               Back To Places 
            </button>

      

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {beaches.map((p) => (
          <PlaceCard
            key={p.id}
            id={p.id}
            img={p.img}
            name={p.name}
            location={p.location}
            isLiked={likedPlaces.includes(p.id)}
            toggleLike={toggleLike}
          />
        ))}
      </div>
    </div>
  );
};

export default Beaches;
