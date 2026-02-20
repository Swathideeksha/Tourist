import { useNavigate, useLocation } from "react-router-dom";

const PlacesFilter = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const filters = [
    { name: "All Places", path: "/places" },
    { name: "Hill Stations", path: "/hill-stations" },
    { name: "Beaches", path: "/beaches" },
    { name: "History", path: "/history" },
    { name: "Religious", path: "/religious" },
  ];

  return (
    <div className="flex flex-wrap gap-3 md:gap-4 justify-center mt-4 md:mt-6 px-4">
      {filters.map((filter) => (
        <button
          key={filter.name}
          onClick={() => navigate(filter.path)}
          className={`px-4 md:px-6 py-2 rounded-full font-semibold text-sm md:text-base transition ${
            location.pathname === filter.path
              ? "bg-yellow-400 hover:bg-yellow-500"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {filter.name}
        </button>
      ))}
    </div>
  );
};

export default PlacesFilter;
