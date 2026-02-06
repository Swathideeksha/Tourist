import { useNavigate } from "react-router-dom";

const categories = [
  "All Places",
  "Hill Stations",
  "Beaches",
  "History",
  "Religious",
];

const PlacesFilter = () => {
  const navigate = useNavigate();

  const handleNavigation = (category) => {
    if (category === "Hill Stations") {
      navigate("/hill-stations");
    } else if (category === "Beaches") {
      navigate("/beaches");
    } 
  };

  return (
    <div className="flex justify-between items-center px-10 mt-8">
      <div className="flex gap-3">
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => handleNavigation(cat)}
            className={`px-4 py-2 rounded-full text-sm transition ${
              index === 0
                ? "bg-yellow-400 text-black"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <input
        type="text"
        placeholder="Search destinations..."
        className="border rounded-full px-4 py-2 w-64 outline-none focus:ring-2 focus:ring-yellow-400"
      />
    </div>
  );
};

export default PlacesFilter;
