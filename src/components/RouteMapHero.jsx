const RouteMapHero = () => {
  return (
    <section className="max-w-7xl mx-auto mt-10 px-6">
      <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl">
        {/* Red Gradient Background */}
        <div className="bg-gradient-to-r from-[#6a0000] via-[#b11226] to-[#d11a2a] px-8 py-20 text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
            Karnataka Tourist Route Map
          </h1>

          <p className="text-white/90 max-w-3xl mx-auto text-lg leading-relaxed">
            Visualize your journey across the heart of South India. Discover
            high-frequency bus corridors and heritage circuits in the vibrant
            red and yellow state.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RouteMapHero;
