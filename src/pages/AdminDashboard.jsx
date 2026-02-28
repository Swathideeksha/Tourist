import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../context/AdminContext';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('places');
  const [places, setPlaces] = useState([]);
  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddPlaceForm, setShowAddPlaceForm] = useState(false);
  const [showAddBusForm, setShowAddBusForm] = useState(false);
  const [editingPlace, setEditingPlace] = useState(null);
  const [editingBus, setEditingBus] = useState(null);
  const { admin, logout } = useAdmin();
  const navigate = useNavigate();
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost';

  // Place:5000/api form state - matching places.js structure
  const [placeForm, setPlaceForm] = useState({
    name: '',
    type: 'Hill Station',
    region: '',
    image: '',
    about: '',
    bestTime: '',
    image1: '',
    image2: '',
    image3: '',
    image4: '',
    image5: '',
    image6: ''
  });

  // Bus form state
  const [busForm, setBusForm] = useState({
    name: '',
    type: '',
    image: '',
    model: '',
    capacity: '',
    safetyGear: '',
    engine: '',
    contact: '',
    address: '',
    amenities: '',
    travelInfo: ''
  });

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [placesRes, busesRes] = await Promise.all([
        fetch(`${API_URL}/admin/places`),
        fetch(`${API_URL}/admin/buses`)
      ]);
      
      const placesData = await placesRes.json();
      const busesData = await busesRes.json();
      
      setPlaces(placesData);
      setBuses(busesData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Place CRUD operations
  const handleAddPlace = async (e) => {
    e.preventDefault();
    const placeData = {
      name: placeForm.name,
      location: placeForm.region,
      category: placeForm.type.toLowerCase().replace(' ', '-'),
      description: placeForm.about,
      image: placeForm.image,
      bestTime: placeForm.bestTime,
      images: [placeForm.image1, placeForm.image2, placeForm.image3, placeForm.image4, placeForm.image5, placeForm.image6].filter(img => img)
    };
    
    try {
      const response = await fetch(`${API_URL}/admin/places`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(placeData)
      });
      
      if (response.ok) {
        const newPlace = await response.json();
        setPlaces([newPlace, ...places]);
        setShowAddPlaceForm(false);
        resetPlaceForm();
      }
    } catch (error) {
      console.error('Error adding place:', error);
      // Demo mode - add to local state
      const newPlace = { ...placeData, _id: Date.now().toString() };
      setPlaces([newPlace, ...places]);
      setShowAddPlaceForm(false);
      resetPlaceForm();
    }
  };

  const handleUpdatePlace = async (e) => {
    e.preventDefault();
    const placeData = {
      name: placeForm.name,
      location: placeForm.region,
      category: placeForm.type.toLowerCase().replace(' ', '-'),
      description: placeForm.about,
      image: placeForm.image,
      bestTime: placeForm.bestTime,
      images: [placeForm.image1, placeForm.image2, placeForm.image3, placeForm.image4, placeForm.image5, placeForm.image6].filter(img => img)
    };
    
    try {
      const response = await fetch(`${API_URL}/admin/places/${editingPlace._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(placeData)
      });
      
      if (response.ok) {
        const updatedPlace = await response.json();
        setPlaces(places.map(p => p._id === editingPlace._id ? updatedPlace : p));
        setEditingPlace(null);
        resetPlaceForm();
      }
    } catch (error) {
      console.error('Error updating place:', error);
      // Demo mode - update local state
      const updatedPlace = { ...placeData, _id: editingPlace._id };
      setPlaces(places.map(p => p._id === editingPlace._id ? updatedPlace : p));
      setEditingPlace(null);
      resetPlaceForm();
    }
  };

  const handleDeletePlace = async (id) => {
    if (!window.confirm('Are you sure you want to delete this place?')) return;
    try {
      const response = await fetch(`${API_URL}/admin/places/${id}`, {
        method: 'DELETE'
      });
      
      if (response.ok) {
        setPlaces(places.filter(p => p._id !== id));
      }
    } catch (error) {
      console.error('Error deleting place:', error);
      // Demo mode - delete from local state
      setPlaces(places.filter(p => p._id !== id));
    }
  };

  const handleEditPlace = (place) => {
    setEditingPlace(place);
    setPlaceForm({
      name: place.name || '',
      type: place.type || place.category || 'Hill Station',
      region: place.region || place.location || '',
      image: place.img || place.image || '',
      about: place.about || place.description || '',
      bestTime: place.bestTime || '',
      image1: place.images?.[0] || '',
      image2: place.images?.[1] || '',
      image3: place.images?.[2] || '',
      image4: place.images?.[3] || '',
      image5: place.images?.[4] || '',
      image6: place.images?.[5] || ''
    });
  };

  const resetPlaceForm = () => {
    setPlaceForm({
      name: '',
      type: 'Hill Station',
      region: '',
      image: '',
      about: '',
      bestTime: '',
      image1: '',
      image2: '',
      image3: '',
      image4: '',
      image5: '',
      image6: ''
    });
  };

  // Bus CRUD operations
  const handleAddBus = async (e) => {
    e.preventDefault();
    const busData = {
      ...busForm,
      amenities: busForm.amenities.split(',').map(a => a.trim()).filter(a => a),
      travelInfo: busForm.travelInfo.split(',').map(t => t.trim()).filter(t => t)
    };
    
    try {
      const response = await fetch(`${API_URL}/admin/buses`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(busData)
      });
      
      if (response.ok) {
        const newBus = await response.json();
        setBuses([newBus, ...buses]);
        setShowAddBusForm(false);
        resetBusForm();
      }
    } catch (error) {
      console.error('Error adding bus:', error);
      // Demo mode
      const newBus = { ...busData, _id: Date.now().toString() };
      setBuses([newBus, ...buses]);
      setShowAddBusForm(false);
      resetBusForm();
    }
  };

  const handleUpdateBus = async (e) => {
    e.preventDefault();
    const busData = {
      ...busForm,
      amenities: busForm.amenities.split(',').map(a => a.trim()).filter(a => a),
      travelInfo: busForm.travelInfo.split(',').map(t => t.trim()).filter(t => t)
    };
    
    try {
      const response = await fetch(`${API_URL}/admin/buses/${editingBus._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(busData)
      });
      
      if (response.ok) {
        const updatedBus = await response.json();
        setBuses(buses.map(b => b._id === editingBus._id ? updatedBus : b));
        setEditingBus(null);
        resetBusForm();
      }
    } catch (error) {
      console.error('Error updating bus:', error);
      // Demo mode
      const updatedBus = { ...busData, _id: editingBus._id };
      setBuses(buses.map(b => b._id === editingBus._id ? updatedBus : b));
      setEditingBus(null);
      resetBusForm();
    }
  };

  const handleDeleteBus = async (id) => {
    if (!window.confirm('Are you sure you want to delete this bus?')) return;
    try {
      const response = await fetch(`${API_URL}/admin/buses/${id}`, {
        method: 'DELETE'
      });
      
      if (response.ok) {
        setBuses(buses.filter(b => b._id !== id));
      }
    } catch (error) {
      console.error('Error deleting bus:', error);
      // Demo mode
      setBuses(buses.filter(b => b._id !== id));
    }
  };

  const handleEditBus = (bus) => {
    setEditingBus(bus);
    setBusForm({
      name: bus.name || '',
      type: bus.type || '',
      image: bus.image || '',
      model: bus.model || '',
      capacity: bus.capacity || '',
      safetyGear: bus.safetyGear || '',
      engine: bus.engine || '',
      contact: bus.contact || '',
      address: bus.address || '',
      amenities: bus.amenities ? bus.amenities.join(', ') : '',
      travelInfo: bus.travelInfo ? bus.travelInfo.join(', ') : ''
    });
  };

  const resetBusForm = () => {
    setBusForm({ name: '', type: '', image: '', model: '', capacity: '', safetyGear: '', engine: '', contact: '', address: '', amenities: '', travelInfo: '' });
  };

  const PlaceForm = ({ onSubmit, onCancel, isEditing }) => (
    <form onSubmit={onSubmit} className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-xl font-bold mb-4">{isEditing ? 'Edit Place' : 'Add New Place'}</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium mb-1">Place Name *</label>
          <input
            type="text"
            placeholder="e.g., Sakleshpur"
            value={placeForm.name}
            onChange={(e) => setPlaceForm({...placeForm, name: e.target.value})}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Type *</label>
          <select
            value={placeForm.type}
            onChange={(e) => setPlaceForm({...placeForm, type: e.target.value})}
            className="w-full border p-2 rounded"
          >
            <option value="Hill Station">Hill Station</option>
            <option value="Beach">Beach</option>
            <option value="History">History</option>
            <option value="Religious">Religious</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Region *</label>
          <input
            type="text"
            placeholder="e.g., Western Ghats"
            value={placeForm.region}
            onChange={(e) => setPlaceForm({...placeForm, region: e.target.value})}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Best Time to Visit</label>
          <input
            type="text"
            placeholder="e.g., October to March"
            value={placeForm.bestTime}
            onChange={(e) => setPlaceForm({...placeForm, bestTime: e.target.value})}
            className="w-full border p-2 rounded"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Main Image URL *</label>
        <input
          type="text"
          placeholder="https://example.com/image.jpg"
          value={placeForm.image}
          onChange={(e) => setPlaceForm({...placeForm, image: e.target.value})}
          className="w-full border p-2 rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">About/Description</label>
        <textarea
          placeholder="Describe the place..."
          value={placeForm.about}
          onChange={(e) => setPlaceForm({...placeForm, about: e.target.value})}
          className="w-full border p-2 rounded"
          rows="4"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Gallery Images (up to 6)</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          <input type="text" placeholder="Image 1 URL" value={placeForm.image1} onChange={(e) => setPlaceForm({...placeForm, image1: e.target.value})} className="border p-2 rounded text-sm" />
          <input type="text" placeholder="Image 2 URL" value={placeForm.image2} onChange={(e) => setPlaceForm({...placeForm, image2: e.target.value})} className="border p-2 rounded text-sm" />
          <input type="text" placeholder="Image 3 URL" value={placeForm.image3} onChange={(e) => setPlaceForm({...placeForm, image3: e.target.value})} className="border p-2 rounded text-sm" />
          <input type="text" placeholder="Image 4 URL" value={placeForm.image4} onChange={(e) => setPlaceForm({...placeForm, image4: e.target.value})} className="border p-2 rounded text-sm" />
          <input type="text" placeholder="Image 5 URL" value={placeForm.image5} onChange={(e) => setPlaceForm({...placeForm, image5: e.target.value})} className="border p-2 rounded text-sm" />
          <input type="text" placeholder="Image 6 URL" value={placeForm.image6} onChange={(e) => setPlaceForm({...placeForm, image6: e.target.value})} className="border p-2 rounded text-sm" />
        </div>
      </div>

      <div className="flex gap-2">
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          {isEditing ? 'Update' : 'Add'} Place
        </button>
        <button type="button" onClick={onCancel} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
          Cancel
        </button>
      </div>
    </form>
  );

  const BusForm = ({ onSubmit, onCancel, isEditing }) => (
    <form onSubmit={onSubmit} className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-xl font-bold mb-4">{isEditing ? 'Edit Bus' : 'Add New Bus'}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Bus Operator Name"
          value={busForm.name}
          onChange={(e) => setBusForm({...busForm, name: e.target.value})}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="Type (e.g., PREMIUM, LUXURY)"
          value={busForm.type}
          onChange={(e) => setBusForm({...busForm, type: e.target.value})}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={busForm.image}
          onChange={(e) => setBusForm({...busForm, image: e.target.value})}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Bus Model"
          value={busForm.model}
          onChange={(e) => setBusForm({...busForm, model: e.target.value})}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Capacity"
          value={busForm.capacity}
          onChange={(e) => setBusForm({...busForm, capacity: e.target.value})}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Safety Gear"
          value={busForm.safetyGear}
          onChange={(e) => setBusForm({...busForm, safetyGear: e.target.value})}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Engine Type"
          value={busForm.engine}
          onChange={(e) => setBusForm({...busForm, engine: e.target.value})}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Contact"
          value={busForm.contact}
          onChange={(e) => setBusForm({...busForm, contact: e.target.value})}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Address"
          value={busForm.address}
          onChange={(e) => setBusForm({...busForm, address: e.target.value})}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Amenities (comma separated)"
          value={busForm.amenities}
          onChange={(e) => setBusForm({...busForm, amenities: e.target.value})}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Travel Info (comma separated)"
          value={busForm.travelInfo}
          onChange={(e) => setBusForm({...busForm, travelInfo: e.target.value})}
          className="border p-2 rounded md:col-span-2"
        />
      </div>
      <div className="flex gap-2 mt-4">
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          {isEditing ? 'Update' : 'Add'} Bus
        </button>
        <button type="button" onClick={onCancel} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
          Cancel
        </button>
      </div>
    </form>
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-red-900 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm">Welcome, {admin?.username}</span>
            <button
              onClick={handleLogout}
              className="bg-red-700 hover:bg-red-600 px-4 py-2 rounded transition"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4">
        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab('places')}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              activeTab === 'places' 
                ? 'bg-red-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-200'
            }`}
          >
            Manage Places ({places.length})
          </button>
          <button
            onClick={() => setActiveTab('buses')}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              activeTab === 'buses' 
                ? 'bg-red-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-200'
            }`}
          >
            Manage Buses ({buses.length})
          </button>
        </div>

        {/* Places Tab */}
        {activeTab === 'places' && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Places Management</h2>
              <button
                onClick={() => {
                  setShowAddPlaceForm(true);
                  setEditingPlace(null);
                  resetPlaceForm();
                }}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
              >
                + Add Place
              </button>
            </div>

            {(showAddPlaceForm || editingPlace) && (
              <PlaceForm
                onSubmit={editingPlace ? handleUpdatePlace : handleAddPlace}
                onCancel={() => {
                  setShowAddPlaceForm(false);
                  setEditingPlace(null);
                  resetPlaceForm();
                }}
                isEditing={!!editingPlace}
              />
            )}

            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="p-3 text-left">Image</th>
                    <th className="p-3 text-left">Name</th>
                    <th className="p-3 text-left">Type</th>
                    <th className="p-3 text-left">Region</th>
                    <th className="p-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {places.map((place) => (
                    <tr key={place._id} className="border-b hover:bg-gray-50">
                      <td className="p-3">
                        <img src={place.img || place.image || 'https://via.placeholder.com/50'} alt="" className="w-16 h-12 object-cover rounded" />
                      </td>
                      <td className="p-3 font-medium">{place.name}</td>
                      <td className="p-3">{place.type || place.category}</td>
                      <td className="p-3">{place.region || place.location}</td>
                      <td className="p-3 text-center">
                        <button
                          onClick={() => handleEditPlace(place)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded mr-2"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeletePlace(place._id)}
                          className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                  {places.length === 0 && (
                    <tr>
                      <td colSpan="5" className="p-4 text-center text-gray-500">
                        No places found. Add your first place!
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Buses Tab */}
        {activeTab === 'buses' && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Buses Management</h2>
              <button
                onClick={() => {
                  setShowAddBusForm(true);
                  setEditingBus(null);
                  resetBusForm();
                }}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
              >
                + Add Bus
              </button>
            </div>

            {(showAddBusForm || editingBus) && (
              <BusForm
                onSubmit={editingBus ? handleUpdateBus : handleAddBus}
                onCancel={() => {
                  setShowAddBusForm(false);
                  setEditingBus(null);
                  resetBusForm();
                }}
                isEditing={!!editingBus}
              />
            )}

            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="p-3 text-left">Name</th>
                    <th className="p-3 text-left">Type</th>
                    <th className="p-3 text-left">Model</th>
                    <th className="p-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {buses.map((bus) => (
                    <tr key={bus._id} className="border-b hover:bg-gray-50">
                      <td className="p-3">{bus.name}</td>
                      <td className="p-3">{bus.type}</td>
                      <td className="p-3">{bus.model}</td>
                      <td className="p-3 text-center">
                        <button
                          onClick={() => handleEditBus(bus)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded mr-2"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteBus(bus._id)}
                          className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                  {buses.length === 0 && (
                    <tr>
                      <td colSpan="4" className="p-4 text-center text-gray-500">
                        No buses found. Add your first bus!
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
