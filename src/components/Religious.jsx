import { placesData } from "../data/placesData";
import PlaceCard from "../components/PlaceCard";
import { useLikes } from "../context/LikesContext";
import Navbar from "./Navbar";
import PlacesFilter from "./PlacesFilter";

const Religious = () => {
  const { likedPlaces, toggleLike } = useLikes();

  const religiousPlaces = placesData.filter(
    (place) => place.category === "religious"
  );

  return (
    <>
      <Navbar />
      <div className="px-4 md:px-10 pt-24 md:pt-28">
        <h1 className="text-2xl md:text-4xl font-extrabold mb-4 md:mb-6">
          Religious Sites of Karnataka
        </h1>

        <PlacesFilter />

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {religiousPlaces.map((p) => (
            <PlaceCard
              key={p.id}
              {...p}
              isLiked={likedPlaces.includes(p.id)}
              toggleLike={toggleLike}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Religious;
