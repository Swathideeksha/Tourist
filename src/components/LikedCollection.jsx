const LikedCollection = () => {
  return (
    <div className="mx-10 mt-16 bg-red-900 text-white rounded-3xl p-12 relative">
      <h3 className="text-sm text-yellow-400">DYNAMIC COLLECTION</h3>
      <h2 className="text-3xl font-bold mt-2">My Liked Places</h2>

      <p className="text-gray-200 mt-3 max-w-lg">
        A personalized selection of your favorite destinations across Karnataka.
      </p>

      <button className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-full font-medium">
        Open Collection
      </button>
    </div>
  );
};

export default LikedCollection;
