import { useNavigate } from "react-router-dom";

const PlaceCard = ({
  id,
  img,
  name,
  location,
  isLiked,
  toggleLike,
}) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl shadow p-4 relative">
      <button
        onClick={() => toggleLike(id)}
        className="absolute top-4 right-4 text-2xl"
      >
        {isLiked ? "❤️" : "🤍"}
      </button>

      <img
        src={img}
        alt={name}
        className="rounded-xl h-48 w-full object-cover"
      />

      <h3 className="font-semibold mt-2">{name}</h3>
      <p className="text-sm text-gray-500">{location}</p>

      {/* ✅ VIEW DETAILS BUTTON */}
      <button
        onClick={() => navigate(`/destination/${id}`)}
        className="mt-4 w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-full transition"
      >
        View Details
      </button>
    </div>
  );
};

export default PlaceCard; // ✅ THIS LINE IS REQUIRED
