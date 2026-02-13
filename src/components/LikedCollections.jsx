import { useLikes } from "../context/LikesContext";
import PlaceCard from "./PlaceCard";

// waterfalls / history
import jog from "../assests/jog-falls.jpg";
import belur from "../assests/belur.jpg";
import badami from "../assests/badami.webp";

// hill stations
import sakleshpur from "../assests/sakleshpur.webp";
import coorg from "../assests/coorg.jpg";
import chikmangalur from "../assests/chikmangalur.avif";
import Agumbe from "../assests/Agumbe.jpeg";
import biligiri from "../assests/biligiri.jpg";
import gangamoola from "../assests/ganga mula.jpg";
import Kemmannugundi from "../assests/kemmannugundi.jpg";
import Kodachadri from "../assests/kodachadri.webp";
import Kundadri from "../assests/kundadri.jpg";
import Madikeri from "../assests/madikeri.jpg.webp";
import nandihills from "../assests/nandi hills.jpg";

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
  { id: 201, name: "Jog Falls", location: "Shivamogga", img: jog },
  { id: 202, name: "Belur Temple", location: "Hassan", img: belur },
  { id: 203, name: "Badami Caves", location: "Bagalkot", img: badami },

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

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {likedData.map((p) => (
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

export default LikedCollection;
