import { useParams } from "react-router-dom";
import { useState } from "react";
import places from "../data/places";

const Hillstationdetails = () => {
  const { id } = useParams();

  const place = places.find(
    (p) => p.id === id || p.id === parseInt(id)
  );

  // Always define gallery safely
  const galleryImages =
    place && place.images && place.images.length > 0
      ? place.images
      : place
      ? [place.image]
      : [];

  // ✅ Hook is now ALWAYS called (no condition before it)
  const [selectedImage, setSelectedImage] = useState(
    galleryImages[0]
  );

  // Now we can safely return if place not found
  if (!place) {
    return (
      <div className="p-10 text-center text-lg font-semibold">
        Destination not found
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HERO */}
      <div
        className="h-[280px] md:h-[350px] lg:h-[420px] relative flex items-end"
        style={{
          backgroundImage: `url(${place.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 p-4 md:p-10 text-white">
          <h1 className="text-2xl md:text-4xl font-bold">
            {place.name}
          </h1>
          <p className="mt-1 md:mt-2 text-sm opacity-90">
            {place.region} • {place.type}
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12 grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10">
        
        {/* LEFT */}
        <div className="lg:col-span-2 space-y-8">

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              About the Destination
            </h2>
            <p className="text-gray-600 leading-relaxed whitespace-pre-line">
              {place.about}
            </p>
          </section>

          <section className="bg-red-50 p-4 md:p-6 rounded-2xl">
            <h3 className="font-semibold text-red-600 mb-2">
              Best Time to Visit
            </h3>
            <p>
              {Array.isArray(place.bestTime)
                ? place.bestTime.join(", ")
                : place.bestTime}
            </p>
          </section>

          {/* GALLERY */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Image Gallery
            </h2>

            {/* Main Image */}
            <div className="mb-4">
              <img
                src={selectedImage}
                alt="Gallery"
                className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4 overflow-x-auto pb-2">
              {galleryImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="Thumbnail"
                  onClick={() => setSelectedImage(img)}
                  className={`w-24 h-24 object-cover rounded-lg cursor-pointer transition ${
                    selectedImage === img
                      ? "ring-2 ring-red-500"
                      : "hover:scale-105"
                  }`}
                />
              ))}
            </div>
          </section>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          <div className="bg-white p-4 md:p-6 rounded-2xl shadow">
            <h3 className="font-semibold mb-4">
              Nearby Facilities
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>🏨 Hotels</li>
              <li>🍽 Restaurants</li>
              <li>🏥 Hospital</li>
              <li>🏧 ATM</li>
            </ul>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-2xl shadow">
            <h3 className="font-semibold mb-4">
              Location & Transit
            </h3>
            <p className="text-gray-600 text-sm">
              Well connected by road. Nearest railway station is 30 km away.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hillstationdetails;