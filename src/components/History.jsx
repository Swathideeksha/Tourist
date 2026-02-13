import { placesData } from "../data/placesData";
import PlaceCard from "../components/PlaceCard";
import { useNavigate } from "react-router-dom";
import { useLikes } from "../context/LikesContext";
import Navbar from "./Navbar";

const History = () => {
  const navigate = useNavigate();
  const { likedPlaces, toggleLike } = useLikes();

  const historicalPlaces = placesData.filter(
    (place) => place.category === "history"
  );

  return (
    <>
      <Navbar />
      <div className="px-4 md:px-10 pt-24 md:pt-28">
        <h1 className="text-2xl md:text-4xl font-extrabold mb-4 md:mb-6">
          Historical Sites of Karnataka
        </h1>

        <button
          onClick={() => navigate("/places")}
          className="mb-6 md:mb-8 bg-yellow-400 px-5 md:px-6 py-2 md:py-3 rounded-full font-semibold text-sm md:text-base hover:bg-yellow-500 transition"
        >
          Back To Places
        </button>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {historicalPlaces.map((p) => (
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

export default History;
