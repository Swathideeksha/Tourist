import { useState, useEffect } from "react";
import { useLikes } from "../context/LikesContext";
import Navbar from "./Navbar";
import PlacesFilter from "./PlacesFilter";
import PlaceCard from "./PlaceCard";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

const HillStations = () => {
  const { likedPlaces, toggleLike } = useLikes();
  const [hillStations, setHillStations] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHillStations = async () => {
      setLoading(true);
      // setError(null);
      try {
        const response = await fetch(`${API_URL}/places?category=hill-station`);
        
        if (response.ok) {
          const data = await response.json();
          console.log("Hill Stations API Response:", data);
          setHillStations(data || []);
        } else {
          console.error("Hill Stations API error:", response.status);
          // setError("Failed to load hill stations");
          setHillStations([]);
        }
      } catch (error) {
        console.error("Error fetching hill stations:", error);
        // setError("Network error loading hill stations");
        setHillStations([]);
      } finally {
        setLoading(false);
      }
    };
    fetchHillStations();
  }, []);

  return (
    <>
      <Navbar />
      <div className="px-4 md:px-10 pt-24 md:pt-28">
        <h1 className="text-2xl md:text-4xl font-extrabold mb-4 md:mb-6">
          Hill Stations of Karnataka
        </h1>

      <PlacesFilter />

      {loading ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="bg-gray-200 rounded-lg h-64 animate-pulse"></div>
          ))}
        </div>
      ) : hillStations.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500 mb-4">No hill stations found</p>
          <p className="text-sm text-gray-400">Add hill stations through the Admin Dashboard to see them here</p>
        </div>
      ) : (
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {hillStations.map((p) => (
          <PlaceCard
            key={p.id || p._id}
            {...p}
            images={p.images || [p.img]}
            id={p.id || p._id}
            isLiked={likedPlaces.includes(p.id || p._id)}
            toggleLike={toggleLike}
          />
        ))}
      </div>
      )}
      </div>
    </>
  );
};

export default HillStations;
