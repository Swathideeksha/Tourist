import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLikes } from "../context/LikesContext";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000/api";

const Hillstationdetails = () => {
  const { id } = useParams();
  const { likedPlaces, toggleLike } = useLikes();
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  const isLiked = likedPlaces.includes(id);

  useEffect(() => {
    const fetchPlace = async () => {
      try {
        const response = await fetch(`${API_URL}/places/${id}`);
        const data = await response.json();
        setPlace(data);
        if (data.image) {
          setSelectedImage(data.image);
        }
      } catch (error) {
        console.error("Error fetching place:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPlace();
  }, [id]);

  const handleLike = async () => {
    toggleLike(id);
    
    // Update the saved count in backend
    try {
      await fetch(`${API_URL}/places/${id}/like`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ liked: !isLiked })
      });
    } catch (error) {
      console.error("Error updating like:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-700"></div>
      </div>
    );
  }

  if (!place) {
    return (
      <div className="p-10 text-center text-lg font-semibold">
        Destination not found
      </div>
    );
  }

  const galleryImages = place.images && place.images.length > 0 
    ? place.images 
    : place.image ? [place.image] : [];

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

        <div className="absolute top-4 right-4 z-20">
          <button
            onClick={handleLike}
            className={`p-3 rounded-full backdrop-blur-sm transition-all duration-300 ${
              isLiked
                ? "bg-red-500 text-white"
                : "bg-white/20 text-white hover:bg-white/40"
            }`}
            title={isLiked ? "Remove from favorites" : "Add to favorites"}
          >
            <svg
              className="w-8 h-8"
              fill={isLiked ? "currentColor" : "none"}
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>

        <div className="relative z-10 p-4 md:p-10 text-white">
          <h1 className="text-2xl md:text-4xl font-bold">
            {place.name}
          </h1>
          <p className="mt-1 md:mt-2 text-sm opacity-90">
            {place.location} • {place.category}
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
              {place.description}
            </p>
          </section>

          <section className="bg-red-50 p-4 md:p-6 rounded-2xl">
            <h3 className="font-semibold text-red-600 mb-2">
              Best Time to Visit
            </h3>
            <p>
              October to March is the ideal time to visit, with pleasant weather and clear skies perfect for sightseeing and outdoor activities.
            </p>
          </section>

          {/* GALLERY */}
          {galleryImages.length > 0 && (
            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">
                Image Gallery
              </h2>

              {/* Main Image */}
              <div className="mb-4">
                <img
                  src={selectedImage || place.image}
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
                    alt={`Thumbnail ${index + 1}`}
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
          )}
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          <div className="bg-white p-4 md:p-6 rounded-2xl shadow">
            <h3 className="font-semibold mb-4">
              Plan Your Trip
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <span>🏨</span>
                <span>Hotels & Resorts</span>
              </li>
              <li className="flex items-center gap-2">
                <span>🍽</span>
                <span>Local Restaurants</span>
              </li>
              <li className="flex items-center gap-2">
                <span>🚗</span>
                <span>Car Rentals</span>
              </li>
              <li className="flex items-center gap-2">
                <span>🗺️</span>
                <span>Guided Tours</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-2xl shadow">
            <h3 className="font-semibold mb-4">
              Best Time to Visit
            </h3>
            <p className="text-gray-600 text-sm">
              October to March offers pleasant weather with temperatures ranging from 15°C to 30°C, making it ideal for outdoor activities and sightseeing.
            </p>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-2xl shadow">
            <h3 className="font-semibold mb-4">
              How to Reach
            </h3>
            <p className="text-gray-600 text-sm">
              Well connected by road. The nearest railway station is {place.location} and major airports are accessible within 100-150 km.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hillstationdetails;