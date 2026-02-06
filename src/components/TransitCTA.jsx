const TransitCTA = () => {
  return (
    <div className="mx-10 my-16 bg-red-800 text-white rounded-3xl p-10 flex justify-between items-center">
      <div>
        <h2 className="text-2xl font-bold">Plan Your Transit Today</h2>
        <p className="text-gray-200 mt-2">
          Find official bus routes, schedules, and maps.
        </p>
      </div>

      <div className="flex gap-4">
        <button className="bg-yellow-400 text-black px-6 py-3 rounded-full">
          Check Tourist Bus Routes
        </button>
        <button className="border border-white px-6 py-3 rounded-full">
          View Map
        </button>
      </div>
    </div>
  );
};

export default TransitCTA;
