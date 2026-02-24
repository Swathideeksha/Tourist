import { useState, useEffect } from "react";
import PlaceCard from "../components/PlaceCard";
import { useLikes } from "../context/LikesContext";
import Navbar from "./Navbar";
import PlacesFilter from "./PlacesFilter";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000/api";

const Religious = () => {
  const { likedPlaces, toggleLike } = useLikes();
  const [religiousPlaces, setReligiousPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await fetch(`${API_URL}/places?category=religious`);
        const data = await response.json();
        setReligiousPlaces(data);
      } catch (error) {
        console.error("Error fetching religious places:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPlaces();
  }, []);

  return (
    <>
      <Navbar />
      <div className="px-4 md:px-10 pt-24 md:pt-28">
        <h1 className="text-2xl md:text-4xl font-extrabold mb-4 md:mb-6">
          Religious Sites of Karnataka
        </h1>

        <PlacesFilter />

        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : religiousPlaces.length === 0 ? (
          <p className="text-center text-gray-500">No religious sites found</p>
        ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {religiousPlaces.map((p) => (
            <PlaceCard
              key={p._id}
              id={p._id}
              img={p.image || "/images/placeholder.jpg"}
              name={p.name}
              location={p.location}
              isLiked={likedPlaces.includes(p._id)}
              toggleLike={toggleLike}
            />
          ))}
        </div>
        )}
      </div>
    </>
  );
};

export default Religious;
