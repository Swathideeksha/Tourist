import { useState, useEffect } from "react";
import PlaceCard from "../components/PlaceCard";
import { useLikes } from "../context/LikesContext";
import Navbar from "./Navbar";
import PlacesFilter from "./PlacesFilter";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000/api";

const Beaches = () => {
  const { likedPlaces, toggleLike } = useLikes();
  const [beaches, setBeaches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await fetch(`${API_URL}/places?category=beach`);
        const data = await response.json();
        setBeaches(data);
      } catch (error) {
        console.error("Error fetching beaches:", error);
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
          Beaches of Karnataka
        </h1>

      <PlacesFilter />

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : beaches.length === 0 ? (
        <p className="text-center text-gray-500">No beaches found</p>
      ) : (
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {beaches.map((p) => (
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

export default Beaches;
