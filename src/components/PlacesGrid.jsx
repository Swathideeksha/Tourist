import { useLikes } from "../context/LikesContext";
import PlaceCard from "./PlaceCard";
import jog from "../assests/jog-falls.jpg";
import belur from "../assests/belur.jpg";
import badami from "../assests/badami.webp";
import sakleshpur from "../assests/sakleshpur.webp";
import kapuBeach from "../assests/Kapu-Beach.webp";

const places = [
  { id: 1, name: "Jog Falls", location: "Shivamogga", img: jog, rating: 4.8 },
  { id: 2, name: "Belur Temple", location: "Hassan", img: belur, rating: 4.9 },
  { id: 3, name: "Badami Caves", location: "Bagalkot", img: badami, rating: 4.7 },
  { id: 4, name: "Sakleshpur", location: "Hassan", img: sakleshpur, rating: 4.6 },
  { id: 6, name: "KapuBeach", location: "Udupi", img: kapuBeach, rating: 4.7 },
];

const PlacesGrid = () => {
  const { likedPlaces, toggleLike } = useLikes();

  return (
    <div className="grid grid-cols-3 gap-6 px-10 mt-10">
      {places.map((p) => (
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
  );
};

export default PlacesGrid;
