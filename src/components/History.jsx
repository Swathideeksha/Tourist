import { useState, useEffect } from "react";
import PlaceCard from "../components/PlaceCard";
import { useLikes } from "../context/LikesContext";
import Navbar from "./Navbar";
import PlacesFilter from "./PlacesFilter";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

const History = () => {
  const { likedPlaces, toggleLike } = useLikes();
  const [historyPlaces, setHistoryPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHistory = async () => {
      setLoading(true);
      // setError(null);
      try {
        const response = await fetch(`${API_URL}/places?category=history`);
        
        if (response.ok) {
          const data = await response.json();
          console.log("History API Response:", data);
          setHistoryPlaces(data || []);
        } else {
          console.error("History API error:", response.status);
          // setError("Failed to load historical places");
          setHistoryPlaces([]);
        }
      } catch (error) {
        console.error("Error fetching history:", error);
        // setError("Network error loading historical places");
        setHistoryPlaces([]);
      } finally {
        setLoading(false);
      }
    };
    fetchHistory();
  }, []);

  return (
    <>
      <Navbar />
      <div className="px-4 md:px-10 pt-24 md:pt-28">
        <h1 className="text-2xl md:text-4xl font-extrabold mb-4 md:mb-6">
          Historical Places
        </h1>

        <PlacesFilter />

        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="bg-gray-200 rounded-lg h-64 animate-pulse"></div>
            ))}
          </div>
        ) : historyPlaces.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500 mb-4">No historical places found</p>
            <p className="text-sm text-gray-400">Add historical places through the Admin Dashboard to see them here</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {historyPlaces.map((p) => (
              <PlaceCard
                key={p.id || p._id}
                {...p}
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

export default History;
