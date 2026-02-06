const PlaceCard = ({
  id,
  img,
  name,
  location,
  isLiked,
  toggleLike,
}) => {
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
    </div>
  );
};

export default PlaceCard; // ✅ THIS LINE IS REQUIRED
