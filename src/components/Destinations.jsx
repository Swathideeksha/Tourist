const Destinations = ({ search }) => {
  const placesData = [
    { name: "Hampi", img: "/images/hampi.jpg" },
    { name: "Coorg", img: "/images/coorg.jpg" },
    { name: "Mysuru", img: "/images/mysuru.jpg" },
  ];

  const filteredPlaces = placesData.filter((place) =>
    place.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="px-4 md:px-10 py-8 md:py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Elite Destinations</h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {filteredPlaces.length > 0 ? (
          filteredPlaces.map((place, index) => (
            <div
              key={index}
              className="shadow-lg rounded-lg overflow-hidden"
            >
              <img src={place.img} alt={place.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-bold">{place.name}</h3>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No places found</p>
        )}
      </div>
    </div>
  );
};

export default Destinations;
