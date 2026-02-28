import { useState, useEffect } from "react";
import { useAdmin } from "../../context/AdminContext";
import { useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000/api";

const AdminBuses = () => {
  const { admin, token, loading } = useAdmin();
  const navigate = useNavigate();
  const [buses, setBuses] = useState([]);
  const [loadingBuses, setLoadingBuses] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingBus, setEditingBus] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    type: "PREMIUM SERVICES",
    model: "",
    image: "",
    capacity: 40,
    safetyGear: "Standard",
    engine: "BS6",
    contact: "",
    address: "",
    amenities: [],
    rating: 0,
    isActive: true,
  });

  useEffect(() => {
    if (!loading && !admin) {
      navigate("/admin/login");
    }
  }, [admin, loading, navigate]);

  useEffect(() => {
    if (admin && token) {
      fetchBuses();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [admin, token]);

  const fetchBuses = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await fetch(`${API_URL}/buses-management`, { headers });
      const data = await response.json();
      setBuses(data);
    } catch (error) {
      console.error("Error fetching buses:", error);
    } finally {
      setLoadingBuses(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      if (editingBus) {
        await fetch(`${API_URL}/buses-management/${editingBus._id}`, {
          method: "PUT",
          headers,
          body: JSON.stringify(formData),
        });
      } else {
        await fetch(`${API_URL}/buses-management`, {
          method: "POST",
          headers,
          body: JSON.stringify(formData),
        });
      }

      setShowModal(false);
      setEditingBus(null);
      setFormData({
        name: "",
        type: "PREMIUM SERVICES",
        model: "",
        image: "",
        capacity: 40,
        safetyGear: "Standard",
        engine: "BS6",
        contact: "",
        address: "",
        amenities: [],
        rating: 0,
        isActive: true,
      });
      fetchBuses();
    } catch (error) {
      console.error("Error saving bus:", error);
    }
  };

  const handleEdit = (bus) => {
    setEditingBus(bus);
    setFormData({
      name: bus.name,
      type: bus.type,
      model: bus.model,
      image: bus.image,
      capacity: bus.capacity,
      safetyGear: bus.safetyGear,
      engine: bus.engine,
      contact: bus.contact,
      address: bus.address,
      amenities: bus.amenities || [],
      rating: bus.rating,
      isActive: bus.isActive,
    });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this bus?")) {
      try {
        await fetch(`${API_URL}/buses-management/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        fetchBuses();
      } catch (error) {
        console.error("Error deleting bus:", error);
      }
    }
  };

  if (loading || loadingBuses) {
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
              <h1 className="text-2xl font-bold">Manage Buses</h1>
            </div>
            <button
              onClick={() => {
                setEditingBus(null);
                setFormData({
                  name: "",
                  type: "PREMIUM SERVICES",
                  model: "",
                  image: "",
                  capacity: 40,
                  safetyGear: "Standard",
                  engine: "BS6",
                  contact: "",
                  address: "",
                  amenities: [],
                  rating: 0,
                  isActive: true,
                });
                setShowModal(true);
              }}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded-lg flex items-center gap-2"
            >
              <span className="material-symbols-outlined">add</span>
              Add Bus
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Buses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {buses.map((bus) => (
            <div key={bus._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200 relative">
                {bus.image ? (
                  <img src={bus.image} alt={bus.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-4xl text-gray-400">directions_bus</span>
                  </div>
                )}
                <div className={`absolute top-2 right-2 px-2 py-1 rounded text-xs font-bold ${bus.isActive ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
                  {bus.isActive ? "Active" : "Inactive"}
                </div>
                <div className="absolute top-2 left-2 bg-yellow-400 text-gray-900 px-2 py-1 rounded text-xs font-bold">
                  {bus.type}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{bus.name}</h3>
                <p className="text-gray-500 text-sm">{bus.model}</p>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                  <span>Capacity: {bus.capacity}</span>
                  <span>Engine: {bus.engine}</span>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-yellow-500 font-bold">★ {bus.rating}</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(bus)}
                      className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
                    >
                      <span className="material-symbols-outlined text-sm">edit</span>
                    </button>
                    <button
                      onClick={() => handleDelete(bus._id)}
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

        {buses.length === 0 && (
          <div className="text-center py-12">
            <span className="material-symbols-outlined text-6xl text-gray-300">directions_bus</span>
            <p className="text-gray-500 mt-4">No buses found. Add your first bus!</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">{editingBus ? "Edit Bus" : "Add New Bus"}</h2>
                <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700">
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Bus Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-700"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Type</label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-700"
                    >
                      <option value="PREMIUM SERVICES">Premium Services</option>
                      <option value="LUXURY SERVICES">Luxury Services</option>
                      <option value="SEMI LUXURY">Semi Luxury</option>
                      <option value="EXPRESS">Express</option>
                      <option value="ORDINARY">Ordinary</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Model</label>
                    <input
                      type="text"
                      value={formData.model}
                      onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-700"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Capacity</label>
                    <input
                      type="number"
                      value={formData.capacity}
                      onChange={(e) => setFormData({ ...formData, capacity: parseInt(e.target.value) })}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-700"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Engine</label>
                    <select
                      value={formData.engine}
                      onChange={(e) => setFormData({ ...formData, engine: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-700"
                    >
                      <option value="BS6">BS6</option>
                      <option value="BS5">BS5</option>
                      <option value="BS4">BS4</option>
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
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Contact</label>
                    <input
                      type="text"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-700"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Safety Gear</label>
                    <input
                      type="text"
                      value={formData.safetyGear}
                      onChange={(e) => setFormData({ ...formData, safetyGear: e.target.value })}
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
                      placeholder="https://example.com/bus.jpg"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-gray-700 mb-1">Address</label>
                    <textarea
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      rows="2"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-700"
                    ></textarea>
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
                    {editingBus ? "Update" : "Add"} Bus
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

export default AdminBuses;
