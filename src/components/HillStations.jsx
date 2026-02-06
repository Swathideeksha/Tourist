import { useNavigate } from "react-router-dom";
import { useLikes } from "../context/LikesContext";
import PlaceCard from "./PlaceCard";

import sakleshpur from "../assests/sakleshpur.webp";
import coorg from "../assests/coorg.jpg";
import chikmagalur from "../assests/chikmangalur.avif";
import Agumbe from "../assests/Agumbe.jpeg";
import biligiri from "../assests/biligiri.jpg";
import gangamoola from "../assests/ganga mula.jpg";
import Kemmannugundi from "../assests/kemmannugundi.jpg";
import Kodachadri from "../assests/kodachadri.webp";
import Kundadri from "../assests/kundadri.jpg";
import Madikeri from "../assests/madikeri.jpg.webp";
import nandihills from "../assests/nandi hills.jpg";

const hillStations = [
  { id: 101, name: "Sakleshpur", location: "Hassan", rating: 4.6, img: sakleshpur },
  { id: 102, name: "Coorg", location: "Kodagu", rating: 4.9, img: coorg },
  { id: 103, name: "Chikmagalur", location: "Chikkamagaluru", rating: 4.8, img: chikmagalur },
  { id: 104, name: "Agumbe", location: "Shivamogga", rating: 4.8, img: Agumbe },
  { id: 105, name: "Biligiri", location: "Chamarajanagara", rating: 4.8, img: biligiri },
  { id: 106, name: "Gangamoola", location: "Chikmagalur", rating: 4.8, img: gangamoola },
  { id: 107, name: "Kemmannugundi", location: "Chikmagalur", rating: 4.8, img: Kemmannugundi },
  { id: 108, name: "Kodachadri", location: "Shivamogga", rating: 4.8, img: Kodachadri },
  { id: 109, name: "Kundadri", location: "Shivamogga", rating: 4.8, img: Kundadri },
  { id: 110, name: "Madikeri", location: "Madikeri", rating: 4.8, img: Madikeri },
  { id: 111, name: "Nandi Hills", location: "Chikballapura", rating: 4.8, img: nandihills },
];

const HillStations = () => {
  const navigate = useNavigate();
  const { likedPlaces, toggleLike } = useLikes();

  return (
    <div className="px-10 mt-20">
     

     <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold">
              Hill Stations Of Karnataka
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
        {hillStations.map((p) => (
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

export default HillStations;
