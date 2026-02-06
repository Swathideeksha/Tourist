import heroImg from "../assests/placehero.png";

const PlacesHero = () => {
  return (
    <div
      className="mx-10 mt-6 rounded-3xl h-[380px] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="absolute inset-0 bg-black-500/70 rounded-3xl flex items-center">
        <div className="px-16 text-white max-w-2xl">
          <span className="bg-yellow-400 text-black text-xs px-3 py-1 rounded-full">
            UNESCO WORLD HERITAGE
          </span>

          <h1 className="text-4xl font-bold mt-6">
            Explore Tourist Places in Karnataka
          </h1>

          <p className="mt-3 text-black-200">
            Witness the grandeur of Hampi and discover the land of sandalwood.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlacesHero;
