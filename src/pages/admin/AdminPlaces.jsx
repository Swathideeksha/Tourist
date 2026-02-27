import { useState, useEffect } from "react";
import { useAdmin } from "../../context/AdminContext";
import { useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000/api";

const AdminPlaces = () => {
  const { admin, token, loading } = useAdmin();
  const navigate = useNavigate();
  const [places, setPlaces] = useState([]);
  const [loadingPlaces, setLoadingPlaces] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingPlace, setEditingPlace] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    description: "",
    category: "beach",
    image: "",
    images: ["", "", "", "", "", ""],
    rating: 0,
    isActive: true,
    placesToVisit: [],
    nearbyFacilities: [],
    howToReach: "",
  });

  useEffect(() => {
    if (!loading && !admin) {
      navigate("/admin/login");
    }
  }, [admin, loading, navigate]);

  useEffect(() => {
    if (admin && token) {
      fetchPlaces();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [admin, token]);

  const fetchPlaces = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await fetch(`${API_URL}/places-management`, { headers });
      const data = await response.json();
      setPlaces(data);
    } catch (error) {
      console.error("Error fetching places:", error);
    } finally {
      setLoadingPlaces(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      // Filter out empty images and create the data to send
      const filteredImages = formData.images.filter(img => img.trim() !== "");
      // Filter out empty places to visit
      const filteredPlacesToVisit = formData.placesToVisit.filter(place => place.trim() !== "");
      // Filter out empty nearby facilities
      const filteredNearbyFacilities = formData.nearbyFacilities.filter(facility => facility.trim() !== "");
      const dataToSend = {
        ...formData,
        images: filteredImages,
        placesToVisit: filteredPlacesToVisit,
        nearbyFacilities: filteredNearbyFacilities,
      };

      if (editingPlace) {
        await fetch(`${API_URL}/places-management/${editingPlace._id}`, {
          method: "PUT",
          headers,
          body: JSON.stringify(dataToSend),
        });
      } else {
        await fetch(`${API_URL}/places-management`, {
          method: "POST",
          headers,
          body: JSON.stringify(dataToSend),
        });
      }

      setShowModal(false);
      setEditingPlace(null);
      setFormData({
        name: "",
        location: "",
        description: "",
        category: "beach",
        image: "",
        images: ["", "", "", "", "", ""],
        rating: 0,
        isActive: true,
        placesToVisit: [],
        nearbyFacilities: [],
        howToReach: "",
      });
      fetchPlaces();
    } catch (error) {
      console.error("Error saving place:", error);
    }
  };

  const handleEdit = (place) => {
    setEditingPlace(place);
    setFormData({
      name: place.name,
      location: place.location,
      description: place.description,
      category: place.category,
      image: place.image,
      images: place.images && place.images.length >= 6 ? place.images : [...(place.images || []), ...Array(6 - (place.images?.length || 0)).fill("")],
      rating: place.rating,
      isActive: place.isActive,
      placesToVisit: place.placesToVisit || [],
      nearbyFacilities: place.nearbyFacilities || [],
      howToReach: place.howToReach || "",
    });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this place?")) {
      try {
        await fetch(`${API_URL}/places-management/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        fetchPlaces();
      } catch (error) {
        console.error("Error deleting place:", error);
      }
    }
  };

  if (loading || loadingPlaces) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-700"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin Header */}
      <header className="bg-red-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <button onClick={() => navigate("/admin/dashboard")} className="hover:bg-red-700 p-1 rounded">
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <h1 className="text-2xl font-bold">Manage Places</h1>
            </div>
            <button
              onClick={() => {
                setEditingPlace(null);
                setFormData({
                  name: "",
                  location: "",
                  description: "",
                  category: "beach",
                  image: "",
                  images: ["", "", "", "", "", ""],
                  rating: 0,
                  isActive: true,
                  placesToVisit: [],
                  nearbyFacilities: [],
                  howToReach: "",
                });
                setShowModal(true);
              }}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded-lg flex items-center gap-2"
            >
              <span className="material-symbols-outlined">add</span>
              Add Place
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Places Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {places.map((place) => (
            <div key={place._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200 relative">
                {place.image ? (
                  <img src={place.image} alt={place.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-4xl text-gray-400">image</span>
                  </div>
                )}
                <div className={`absolute top-2 right-2 px-2 py-1 rounded text-xs font-bold ${place.isActive ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
                  {place.isActive ? "Active" : "Inactive"}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{place.name}</h3>
                <p className="text-gray-500 text-sm">{place.location}</p>
                <p className="text-gray-600 text-sm mt-2 line-clamp-2">{place.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">
                    {place.category}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(place)}
                      className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
                    >
                      <span className="material-symbols-outlined text-sm">edit</span>
                    </button>
                    <button
                      onClick={() => handleDelete(place._id)}
                      className="bg-red-500 hover:bg-red-600 text-white p-2 rounded"
                    >
                      <span className="material-symbols-outlined text-sm">delete</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {places.length === 0 && (
          <div className="text-center py-12">
            <span className="material-symbols-outlined text-6xl text-gray-300">place</span>
            <p className="text-gray-500 mt-4">No places found. Add your first place!</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">{editingPlace ? "Edit Place" : "Add New Place"}</h2>
                <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700">
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-700"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Location</label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-700"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Category</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-700"
                    >
                      <option value="beach">Beach</option>
                      <option value="hill-station">Hill Station</option>
                      <option value="history">History</option>
                      <option value="religious">Religious</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Rating</label>
                    <input
                      type="number"
                      min="0"
                      max="5"
                      step="0.1"
                      value={formData.rating}
                      onChange={(e) => setFormData({ ...formData, rating: parseFloat(e.target.value) })}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-700"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-gray-700 mb-1">Image URL</label>
                    <input
                      type="text"
                      value={formData.image}
                      onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-700"
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>
                  
                  {/* Image Gallery Section - 6 Images */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-gray-700 mb-1">Image Gallery (Add 6 Images)</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[0, 1, 2, 3, 4, 5].map((index) => (
                        <div key={index} className="flex gap-2 items-center">
                          <span className="text-xs font-bold text-gray-500 w-6">#{index + 1}</span>
                          <input
                            type="text"
                            value={formData.images[index] || ""}
                            onChange={(e) => {
                              const newImages = [...formData.images];
                              newImages[index] = e.target.value;
                              setFormData({ ...formData, images: newImages });
                            }}
                            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-700 text-sm"
                            placeholder={`Image URL ${index + 1}`}
                          />
                          {formData.images[index] && (
                            <img
                              src={formData.images[index]}
                              alt={`Preview ${index + 1}`}
                              className="w-10 h-10 object-cover rounded"
                              onError={(e) => { e.target.style.display = 'none'; }}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Enter exactly 6 image URLs for the gallery</p>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-gray-700 mb-1">Description</label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      rows="4"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-700"
                      required
                    ></textarea>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-gray-700 mb-1">Places to Visit (one per line)</label>
                    <textarea
                      value={formData.placesToVisit.join("\n")}
                      onChange={(e) => setFormData({ ...formData, placesToVisit: e.target.value.split("\n") })}
                      rows="4"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-700"
                      placeholder="Enter places to visit, one per line"
                    ></textarea>
                    <p className="text-xs text-gray-500 mt-1">Enter each place on a new line</p>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-gray-700 mb-1">Nearby Facilities (one per line)</label>
                    <textarea
                      value={formData.nearbyFacilities.join("\n")}
                      onChange={(e) => setFormData({ ...formData, nearbyFacilities: e.target.value.split("\n") })}
                      rows="4"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-700"
                      placeholder="Enter nearby facilities, one per line"
                    ></textarea>
                    <p className="text-xs text-gray-500 mt-1">Enter each facility on a new line</p>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-gray-700 mb-1">How to Reach</label>
                    <textarea
                      value={formData.howToReach}
                      onChange={(e) => setFormData({ ...formData, howToReach: e.target.value })}
                      rows="4"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-700"
                      placeholder="Enter how to reach this place (by bus, train, flight, etc.)"
                    ></textarea>
                    <p className="text-xs text-gray-500 mt-1">Provide transportation details (nearest airport, railway station, bus stand, etc.)</p>
                  </div>
                  <div>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={formData.isActive}
                        onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                        className="w-4 h-4"
                      />
                      <span className="text-sm font-bold text-gray-700">Active</span>
                    </label>
                  </div>
                </div>

                <div className="flex justify-end gap-3 mt-6">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-lg"
                  >
                    {editingPlace ? "Update" : "Add"} Place
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPlaces;
