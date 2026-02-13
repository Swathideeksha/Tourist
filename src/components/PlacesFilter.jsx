import { useNavigate } from "react-router-dom";

const PlacesFilter = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap gap-3 md:gap-4 justify-center mt-4 md:mt-6 px-4">
      <button
        onClick={() => navigate("/places")}
        className="px-4 md:px-6 py-2 rounded-full bg-yellow-400 font-semibold text-sm md:text-base hover:bg-yellow-500 transition"
      >
        All Places
      </button>

      <button
        onClick={() => navigate("/hill-stations")}
        className="px-4 md:px-6 py-2 rounded-full bg-gray-200 font-semibold text-sm md:text-base hover:bg-gray-300 transition"
      >
        Hill Stations
      </button>

      <button
        onClick={() => navigate("/beaches")}
        className="px-4 md:px-6 py-2 rounded-full bg-gray-200 font-semibold text-sm md:text-base hover:bg-gray-300 transition"
      >
        Beaches
      </button>

      <button
        onClick={() => navigate("/history")}
        className="px-4 md:px-6 py-2 rounded-full bg-gray-200 font-semibold text-sm md:text-base hover:bg-gray-300 transition"
      >
        History
      </button>

      <button
        onClick={() => navigate("/religious")}
        className="px-4 md:px-6 py-2 rounded-full bg-gray-200 font-semibold text-sm md:text-base hover:bg-gray-300 transition"
      >
        Religious
      </button>
    </div>
  );
};

export default PlacesFilter;
