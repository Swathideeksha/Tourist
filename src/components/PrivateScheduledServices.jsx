
import seabird from "../assests/seabird.avif";
import vrl from "../assests/VRL.jpg";
import sugama from "../assests/sugama.jpg";


const services = [
  
  {
    tag: "AC SLEEPER",
    tagColor: "bg-yellow-400",
    image: seabird,
    name: "Sea-Bird Travels",
    subtitle: "PREMIUM COASTAL LINK",
    from: "Bengaluru (Anand Rao Circle)",
    to: "Gokarna (Beach Road)",
    rating: "4.6",
  },
  {
    tag: "TOP RATED",
    tagColor: "bg-yellow-400",
    image: vrl,
    name: "VRL Travels",
    subtitle: "MULTI-AXLE VOLVO",
    from: "Bengaluru (Kalashipalya)",
    to: "Hubballi (VRL Hub)",
    rating: "4.8",
  },
  {
    tag: "HERITAGE",
    tagColor: "bg-yellow-400",
    image: sugama,
    name: "Sugama Tourist",
    subtitle: "HERITAGE CIRCUIT",
    from: "Bengaluru (Majestic)",
    to: "Hampi (Hospet)",
    rating: "4.4",
  },
];



const PrivateScheduledServices = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 mt-16">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl font-bold text-gray-900">
          Private Scheduled Services
        </h2>
        <p className="text-sm text-gray-500">
          Showing top 18 private agency routes
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg overflow-hidden"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <span className="absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full text-black bg-yellow-400">
                {item.tag}
              </span>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-lg font-bold text-[#7a1c1c]">
                {item.name}
              </h3>
              <p className="text-xs tracking-wider text-gray-400 mt-1">
                {item.subtitle}
              </p>

              <div className="mt-6 space-y-3 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full border border-red-600"></span>
                  {item.from}
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-600"></span>
                  {item.to}
                </div>
              </div>

              <div className="mt-6 text-sm">
                <p className="text-gray-400 uppercase text-xs mb-1">
                  Rating
                </p>
                <p className="text-red-600 font-semibold">
                  ★ {item.rating}
                </p>
              </div>

              <button className="mt-6 w-full bg-yellow-400 hover:bg-yellow-500 transition text-black font-semibold py-3 rounded-full">
                View Details →
              </button>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PrivateScheduledServices;
