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
  // waterfalls / history
  { id: 1, name: "Jog Falls", location: "Shivamogga", img: jog },
  { id: 2, name: "Belur Temple", location: "Hassan", img: belur },
  { id: 3, name: "Badami Caves", location: "Bagalkot", img: badami },

  // hill stations
  { id: 101, name: "Sakleshpur", location: "Hassan", img: sakleshpur },
  { id: 102, name: "Coorg", location: "Kodagu", img: coorg },
  { id: 103, name: "chikamangalur", location: "chikmangalur", img: chikmangalur },
 {
    id: 104,
    name: "Agumbe",
    location: "Shivamogga",
    rating: 4.8,
    img: Agumbe,
  },
    {
    id: 105,
    name: "biligiri",
    location: "ChamarajNagara",
    rating: 4.8,
    img: biligiri,
  },
   {
    id: 106,
    name: "gangamoola",
    location: "Chikmagalur",
    rating: 4.8,
    img: gangamoola,
  },
 {
    id: 107,
    name: "Kemmannugundi",
    location: "Chikmagalur",
    rating: 4.8,
    img: Kemmannugundi,
  },
  {
    id: 108,
    name: "Kodachadri",
    location: "Shivamogga",
    rating: 4.8,
    img: Kodachadri,
  },
  {
    id: 109,
    name: "Kundadri",
    location: "Shivamogga",
    rating: 4.8,
    img: Kundadri,
  },
   {
    id: 110,
    name: "Madikeri",
    location: "Madikeri",
    rating: 4.8,
    img: Madikeri,
  },
  {
    id: 111,
    name: "nandihills",
    location: "Chikballapura",
    rating: 4.8,
    img: nandihills,
  },




  // beaches
  { id: 6, name: "Kapu-Beach", location: "Udupi", img: kapuBeach },
  { id: 7, name: "devbagh-Beach", location: "Karvar", img: devbaghBeach },
{ id: 8, name: "Malpe Beach", location: "Udupi", img: Malpe },
{ id: 9, name: "Mattu Beach", location: "Udupi", img: Mattu },
{ id: 10, name: "Murudeshwara Beach", location: "Batkal", img: Murudeshwara },
{ id: 11, name: "Om-beach", location: "Gokarna", img: Ombeach },
{ id: 12, name: "Panamburu Beach", location: "Mangaluru", img: PanamburuBeach },
{ id: 13, name: "Someshwara Beach", location: "Mangaluru", img: SomeshwaraBeach },
{ id: 14, name: "St.Marry Beach", location: "Udupi", img: StMarryBeach },
{ id: 15, name: "Surathkal Beach", location: "Mangaluru", img: SurathkalBeach },
{ id: 16, name: "Thannirbhavi Beach", location: "Mangaluru", img: ThannirbhaviBeach },
{ id: 17, name: "Maravanthe Beach", location: "Kundapura", img: MaravantheBeach },
{ id: 18, name: "Padubidri Beach", location: "Udupi", img: PadubidriBeach },


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
      <div className="px-10 mt-20">
        <h2 className="text-2xl font-semibold mb-2">
          ❤️ My Liked Places
        </h2>
        <p className="text-gray-500">
          You haven’t liked any places yet.
        </p>
      </div>
    );
  }

  return (
    <div className="px-10 mt-20">
      <h2 className="text-2xl font-semibold mb-6">
        ❤️ My Liked Places
      </h2>

      <div className="grid grid-cols-3 gap-6">
        {likedData.map((p) => (
          <PlaceCard
            key={p.id}
            id={p.id}
            img={p.img}
            name={p.name}
            location={p.location}
            isLiked={true}
            toggleLike={toggleLike} // ✅ UNLIKE WORKS HERE TOO
          />
        ))}
      </div>
    </div>
  );
};

export default LikedCollection;
