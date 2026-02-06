import { useNavigate } from "react-router-dom";

const DiscoverMore = () => {
  const navigate = useNavigate();

  return (
    <div className="px-10 py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center bg-white shadow-lg rounded-2xl p-10">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Discover More About Karnataka
        </h2>

        <p className="text-gray-600 mb-6">
          Explore Karnataka’s rich heritage, cultural diversity, scenic
          landscapes, and transportation facilities designed to make
          your journey comfortable and memorable.
        </p>

        <button
          onClick={() => navigate("/place/1")}
          className="bg-red-600 text-white px-8 py-3 rounded-full font-medium hover:bg-red-700 transition"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default DiscoverMore;

