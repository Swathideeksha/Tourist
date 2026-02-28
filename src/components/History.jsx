import { useState, useEffect } from "react";
import PlaceCard from "../components/PlaceCard";
import { useLikes } from "../context/LikesContext";
import Navbar from "./Navbar";
import PlacesFilter from "./PlacesFilter";
import { placesData } from "../data/placesData";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

const History = () => {
  const { likedPlaces, toggleLike } = useLikes();
  const [historicalPlaces, setHistoricalPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await fetch(`${API_URL}/places?category=history`);
        const data = await response.json();
        if (data && data.length > 0) {
          setHistoricalPlaces(data);
        } else {
          // Fallback to static data
          const staticData = placesData.filter(p => p.category === "history");
          setHistoricalPlaces(staticData);
        }
      } catch (error) {
        console.error("Error fetching historical places:", error);
        // Fallback to static data
        const staticData = placesData.filter(p => p.category === "history");
        setHistoricalPlaces(staticData);
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
          Historical Sites of Karnataka
        </h1>

        <PlacesFilter />

        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="bg-gray-200 rounded-lg h-64 animate-pulse"></div>
            ))}
          </div>
        ) : historicalPlaces.length === 0 ? (
          <p className="text-center text-gray-500">No historical sites found</p>
        ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {historicalPlaces.map((p) => (
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

export default History;
