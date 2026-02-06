const Hero = () => {
  return (
    <div
      className="h-[80vh] bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(245, 237, 237, 0), rgba(255, 251, 251, 0)), url('/images/Hero.png')",
      }}
    >
      {/* TEXT BOX */}
      <div className="ml-16 bg-red-900/80  backdrop-blur-md p-10 rounded-2xl max-w-xl shadow-2xl">
        <h1 className="text-5xl font-bold mb-4 text-white">
          Explore Karnataka
        </h1>

        <p className="text-lg text-gray-200">
          Discover heritage sites and scenic destinations.
        </p>
      </div>
    </div>
  );
};

export default Hero;
