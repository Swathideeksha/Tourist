import { useNavigate } from "react-router-dom";

const PlaceCard = ({
  id,
  img,
  name,
  location,
  images,
  isLiked,
  toggleLike,
}) => {
  const navigate = useNavigate();

  // Use the first image from images array if no img provided
  const displayImage = img || (images && images.length > 0 ? images[0] : '/images/placeholder.jpg');

  console.log(`[PlaceCard] ${name}:`, {
    img,
    images,
    displayImage,
    imageCount: images?.length || 0
  });

  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-xl transition-shadow p-4 relative group">
      <button
        onClick={() => toggleLike(id)}
        className={`absolute top-4 right-4 z-10 p-2 rounded-full backdrop-blur-sm transition-all duration-300 transform ${
          isLiked
            ? "bg-red-500/20 border border-red-400 scale-100"
            : "bg-white/20 border border-white/30 hover:bg-white/40 hover:scale-110"
        }`}
        title={isLiked ? "Remove from favorites" : "Add to favorites"}
      >
        <svg
          className={`w-6 h-6 transition-colors duration-300 ${
            isLiked ? "text-red-500 fill-red-500" : "text-white"
          }`}
          fill={isLiked ? "currentColor" : "none"}
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </button>

      <img
        src={displayImage}
        alt={name}
        className="rounded-xl h-48 w-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
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

      <style>{`
        button:active {
          transform: scale(0.95);
        }
      `}</style>
    </div>
  );
};

export default PlaceCard; // ✅ THIS LINE IS REQUIRED
