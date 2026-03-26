import { useNavigate } from "react-router-dom";

const ViewAllBusButton = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 pt-4 pb-8">
      <div className="text-left">
        <button
          type="button"
          onClick={() => navigate("/allbuses")}
          className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg"
        >
          View All Buses →
        </button>
      </div>
    </div>
  );
};

export default ViewAllBusButton;
