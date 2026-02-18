import kodachadriImg from "../assests/placehero.png";

const PlaceHero = () => {
  return (
    <div className="w-full px-4 md:px-8 py-6">
      {/* Card with background image */}
      <div 
        className="relative w-full h-[400px] md:h-[500px] rounded-3xl md:rounded-[3rem] shadow-2xl overflow-hidden"
        style={{
          backgroundImage: `url(${kodachadriImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-6">
            Explore Tourist Places in Karnataka
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl leading-relaxed">
            Witness the grandeur of Hampi and discover the land of sandalwood. 
            From ancient monuments to pristine coastlines and lush hills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlaceHero;
