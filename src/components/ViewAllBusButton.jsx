import { useNavigate } from "react-router-dom";

const ViewAllBusButton = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
      <div className="text-center">
        <button
          type="button"
          onClick={() => navigate("/allbuses")}
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg text-lg"
        >
          View All Buses →
        </button>
      </div>
    </div>
  );
};

export default ViewAllBusButton;
