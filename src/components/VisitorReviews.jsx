const VisitorReviews = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-red-700">
        Visitor Reviews
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="bg-white p-4 md:p-6 rounded-2xl shadow">
          ⭐⭐⭐⭐⭐
          <p className="mt-2 md:mt-3 text-gray-600 text-sm md:text-base">
            An absolutely breathtaking experience.
          </p>
          <p className="mt-2 font-semibold">– Ananya Rao</p>
        </div>

        <div className="bg-white p-4 md:p-6 rounded-2xl shadow">
          ⭐⭐⭐⭐⭐
          <p className="mt-2 md:mt-3 text-gray-600 text-sm md:text-base">
            Must visit during monsoon season!
          </p>
          <p className="mt-2 font-semibold">– Vikram Singh</p>
        </div>
      </div>
    </section>
  );
};

export default VisitorReviews;
