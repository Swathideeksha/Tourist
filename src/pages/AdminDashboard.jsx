import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../context/AdminContext';

// Version: 2.1 - Image Upload Fixed

const PlaceForm = ({ placeForm, setPlaceForm, onSubmit, onCancel, isEditing }) => (
  <form onSubmit={onSubmit} className="bg-white p-6 rounded-lg shadow-md mb-6">
    <h3 className="text-xl font-bold mb-4">{isEditing ? 'Edit Place' : 'Add New Place'}</h3>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <div>
        <label className="block text-sm font-medium mb-1">Place Name *</label>
        <input
          type="text"
          placeholder="e.g., Sakleshpur"
          value={placeForm.name || ''}
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
          value={placeForm.region || ''}
          onChange={(e) => setPlaceForm({...placeForm, region: e.target.value})}
          className="w-full border p-2 rounded"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Latitude</label>
        <input
          type="number"
          step="0.000001"
          placeholder="e.g., 12.9716"
          value={placeForm.latitude || ''}
          onChange={(e) => setPlaceForm({...placeForm, latitude: parseFloat(e.target.value) || null})}
          className="w-full border p-2 rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Longitude</label>
        <input
          type="number"
          step="0.000001"
          placeholder="e.g., 77.5946"
          value={placeForm.longitude || ''}
          onChange={(e) => setPlaceForm({...placeForm, longitude: parseFloat(e.target.value) || null})}
          className="w-full border p-2 rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Best Time to Visit</label>
        <input
          type="text"
          placeholder="e.g., October to March"
          value={placeForm.bestTime || ''}
          onChange={(e) => setPlaceForm({...placeForm, bestTime: e.target.value})}
          className="w-full border p-2 rounded"
        />
      </div>
    </div>

    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">Main Image *</label>
      <input
        type="file"
        onChange={(e) => setPlaceForm({...placeForm, image: e.target.files[0]})}
        className="w-full border p-2 rounded"
        accept="image/*"
        required={!isEditing}
      />
      {placeForm.image && typeof placeForm.image === 'string' && (
        <img src={placeForm.image || '/images/placeholder.jpg'} alt="" className="w-16 h-12 object-cover rounded" />
      )}
      {placeForm.image && typeof placeForm.image === 'object' && (
        <img
          src={URL.createObjectURL(placeForm.image)}
          alt="Preview main"
          className="mt-2 w-32 h-32 object-cover rounded"
        />
      )}
    </div>

    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">About the Place</label>
      <textarea
        placeholder="Describe the place, attractions, activities..."
        value={placeForm.about || ''}
        onChange={(e) => setPlaceForm({...placeForm, about: e.target.value})}
        className="w-full border p-2 rounded h-24"
        required
      />
    </div>

    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">Gallery Images (up to 6, max 5MB each, 25MB total - efficient upload)</label>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div key={num} className="space-y-1">
            <input 
              type="file" 
              onChange={(e) => setPlaceForm({...placeForm, [`image${num}`]: e.target.files[0]})} 
              className="border p-2 rounded text-sm w-full" 
              accept="image/*"
            />
            {placeForm[`image${num}`] && typeof placeForm[`image${num}`] === 'string' && (
              <div>
                <img
                  src={placeForm[`image${num}`]}
                  alt={`Current gallery ${num}`}
                  className="w-full h-20 object-cover rounded"
                />
                <p className="text-xs text-gray-500">Existing image</p>
              </div>
            )}
            {placeForm[`image${num}`] && typeof placeForm[`image${num}`] === 'object' && (
              <div>
                <img
                  src={URL.createObjectURL(placeForm[`image${num}`])}
                  alt={`New gallery ${num}`}
                  className="w-full h-20 object-cover rounded"
                />
                <p className="text-xs text-gray-500">
                  {(placeForm[`image${num}`].size / 1024 / 1024).toFixed(2)}MB
                </p>
              </div>
            )}
          </div>
        ))}
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

const BusForm = ({ busForm, setBusForm, onSubmit, onCancel, isEditing }) => (
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

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('places');
  const [places, setPlaces] = useState([]);
  const [buses, setBuses] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddPlaceForm, setShowAddPlaceForm] = useState(false);
  const [showAddBusForm, setShowAddBusForm] = useState(false);
  const [editingPlace, setEditingPlace] = useState(null);
  const [editingBus, setEditingBus] = useState(null);
  const { admin, logout } = useAdmin();
  const navigate = useNavigate();
  const API_URL = "https://backend-chi-one-70.vercel.app/api";

console.log("AdminDashboard API_URL:", API_URL);

  // Place form state - updated for file uploads and coordinates
  const [placeForm, setPlaceForm] = useState({
    name: '',
    type: 'Hill Station',
    region: '',
    latitude: '',
    longitude: '',
    image: null,
    about: '',
    bestTime: '',
    image1: null,
    image2: null,
    image3: null,
    image4: null,
    image5: null,
    image6: null
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
      const [placesResponse, busesResponse, messagesResponse] = await Promise.all([
        fetch(`${API_URL}/admin/places`),
        fetch(`${API_URL}/admin/buses`),
        fetch(`${API_URL}/contact`)
      ]);
      
      const placesData = (placesResponse.ok && placesResponse.status !== 500) ? await placesResponse.json() : [];
      const busesData = (busesResponse.ok && busesResponse.status !== 500) ? await busesResponse.json() : [];
      const messagesData = (messagesResponse.ok && messagesResponse.status !== 500) ? await messagesResponse.json() : { messages: [] };
      
      setPlaces(Array.isArray(placesData) ? placesData : []);
      setBuses(Array.isArray(busesData) ? busesData : []);
      setMessages(Array.isArray(messagesData?.messages) ? messagesData.messages : []);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Place CRUD operations - use FormData for efficient uploads
  const handleAddPlace = async (e) => {
    e.preventDefault();
    
    console.log('🔍 DEBUG: handleAddPlace called');
    console.log('🔍 DEBUG: placeForm.image:', placeForm.image);
    console.log('🔍 DEBUG: placeForm.image1:', placeForm.image1);
    console.log('🔍 DEBUG: placeForm.image2:', placeForm.image2);
    
    try {
      console.log('Processing place data with FormData uploads...');
      
      // Validate files before processing
      const maxFileSize = 5 * 1024 * 1024; // 5MB per file (back to normal for FormData)
      const maxTotalSize = 25 * 1024 * 1024; // 25MB total limit (back to normal for FormData)
      const allFiles = [];
      
      if (placeForm.image && placeForm.image instanceof File) {
        allFiles.push({ file: placeForm.image, type: 'main' });
      }
      
      // Only process first 2 gallery images for testing
      let galleryCount = 0;
      for (let i = 1; i <= 6; i++) {
        const imageKey = `image${i}`;
        if (placeForm[imageKey] && placeForm[imageKey] instanceof File && galleryCount < 2) {
          allFiles.push({ file: placeForm[imageKey], type: `gallery${i}` });
          galleryCount++;
        }
      }
      
      // Calculate total estimated size
      let totalSize = 0;
      for (const { file, type } of allFiles) {
        if (file.size > maxFileSize) {
          window.alert(`${type === 'main' ? 'Main image' : `Gallery image ${type.replace('gallery', '')}`} is too large (${(file.size / 1024 / 1024).toFixed(1)}MB). Please choose images under 5MB.`);
          return;
        }
        totalSize += file.size;
      }
      
      if (totalSize > maxTotalSize) {
        window.alert(`Total images size is too large (${(totalSize / 1024 / 1024).toFixed(1)}MB). Please reduce total size under 25MB.`);
        return;
      }
      
      // Create FormData for multipart upload
      const formData = new FormData();
      formData.append('name', placeForm.name);
      formData.append('location', placeForm.region);
      formData.append('category', placeForm.type.toLowerCase().replace(' ', '-'));
      formData.append('description', placeForm.about);
      formData.append('bestTime', placeForm.bestTime);
      formData.append('isActive', 'true');
      
      // Add main image
      if (placeForm.image && placeForm.image instanceof File) {
        formData.append('image', placeForm.image);
      }
      
      // Add gallery images
      for (let i = 1; i <= 6; i++) {
        const imageKey = `image${i}`;
        if (placeForm[imageKey] && placeForm[imageKey] instanceof File) {
          formData.append('images', placeForm[imageKey]);
        }
      }
      
      console.log('Submitting place with FormData:', {
        name: placeForm.name,
        hasMainImage: !!placeForm.image,
        mainImageName: placeForm.image?.name,
        mainImageSize: placeForm.image?.size,
        mainImageType: placeForm.image?.type,
        galleryImageCount: allFiles.filter(f => f.type.startsWith('gallery')).length,
        galleryImageNames: allFiles.filter(f => f.type.startsWith('gallery')).map(f => f.file.name),
        totalSizeMB: (totalSize / 1024 / 1024).toFixed(1)
      });

      // Debug FormData contents
      console.log('FormData entries before sending:');
      for (let [key, value] of formData.entries()) {
        if (value instanceof File) {
          console.log(`${key}:`, {
            name: value.name,
            size: value.size,
            type: value.type,
            lastModified: value.lastModified,
            constructor: value.constructor.name
          });
        } else if (value instanceof Blob) {
          console.log(`${key}:`, { type: 'Blob', size: value.size });
        } else {
          console.log(`${key}:`, value);
        }
      }

      // Send FormData instead of JSON
      console.log('Sending request to:', `${API_URL}/admin/places`);
      const response = await fetch(`${API_URL}/admin/places`, {
        method: 'POST',
        body: formData // No Content-Type header, let browser set it with boundary
      });
      
      console.log('Response status:', response.status);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));
      
      if (response.ok) {
        const newPlace = await response.json();
        console.log("New place created:", newPlace);
        console.log("New place image:", newPlace.image);
        console.log("New place images:", newPlace.images);
        
        // DEBUG: Check current places list before update
        console.log("Current places list before update:", places.length);
        console.log("Current places names before update:", places.map(p => p.name));
        
        // DEBUG: Check new place details
        console.log("New place details:", {
          _id: newPlace._id,
          name: newPlace.name,
          image: newPlace.image,
          imagesCount: newPlace.images?.length || 0
        });
        
        setPlaces([newPlace, ...places]);
        
        // DEBUG: Check places list after update
        setTimeout(() => {
          console.log("Places list after update:", places.length);
          console.log("First 3 places after update:", places.slice(0, 3).map(p => ({
            name: p.name,
            image: p.image,
            hasImage: !!p.image
          })));
        }, 100);
        
        setShowAddPlaceForm(false);
        resetPlaceForm();
        window.alert('Place added successfully with your images!');
      } else {
        const errorData = await response.json();
        console.error('Server error details:', errorData);
        
        if (response.status === 413) {
          window.alert('Error: Images are still too large. Try uploading fewer images or smaller files (under 2MB each).');
        } else if (response.status === 500) {
          window.alert(`Server error: ${errorData.message || 'Unknown error'}\n\nDetails: ${errorData.error || 'No details available'}\n\nPlease check the console for more information.`);
        } else {
          window.alert(`Error: ${response.status} - ${errorData.message || errorData.error || 'Unknown error'}`);
        }
      }
    } catch (error) {
      window.alert(`Network error: ${error.message}`);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleUpdatePlace = async (e) => {
    e.preventDefault();
    
    const formDataToSend = new FormData();
    formDataToSend.append('name', placeForm.name);
    formDataToSend.append('location', placeForm.region);
    formDataToSend.append('category', placeForm.type.toLowerCase().replace(' ', '-'));
    formDataToSend.append('description', placeForm.about);
    formDataToSend.append('bestTime', placeForm.bestTime);
    formDataToSend.append('isActive', 'true');
    
    // Add existing images to preserve them if no new ones are uploaded
    formDataToSend.append('existingImage', editingPlace.image || '');
    formDataToSend.append('existingImages', JSON.stringify(editingPlace.images || []));
    
    // Add main image if new one is selected
    if (placeForm.image && placeForm.image instanceof File) {
      // console.log('Updating main image for Cloudinary upload:', placeForm.image.name);
      formDataToSend.append('image', placeForm.image);
    }
    
    // Add gallery images if new ones are selected
    [placeForm.image1, placeForm.image2, placeForm.image3, placeForm.image4, placeForm.image5, placeForm.image6].forEach((imageFile) => {
      if (imageFile && imageFile instanceof File) {
        // console.log('Updating gallery image for Cloudinary upload:', imageFile.name);
        formDataToSend.append('images', imageFile);
      }
    });
    
    try {
      // console.log('Updating place with Cloudinary images...');
      const response = await fetch(`${API_URL}/admin/places/${editingPlace._id}`, {
        method: 'PUT',
        body: formDataToSend
      });
      
      if (response.ok) {
        const updatedPlace = await response.json();
        // console.log('Place updated with Cloudinary images:', updatedPlace);
        setPlaces(places.map(p => p._id === editingPlace._id ? updatedPlace : p));
        setEditingPlace(null);
        resetPlaceForm();
        window.alert('Place updated successfully with images uploaded to Cloudinary!');
      } else {
        const errorData = await response.text();
        // console.error('Server error:', errorData);
        window.alert(`Error: ${response.status} - ${errorData}`);
      }
    } catch (error) {
      // console.error('Error updating place:', error);
      window.alert(`Network error: ${error.message}`);
    }
  };

  const handleEditPlace = (place) => {
    console.log('Editing place data:', place);
    console.log('Place images array:', place.images);
    console.log('Place main image:', place.image);
    console.log('Place image type:', typeof place.image);
    console.log('Place images type:', typeof place.images);
    
    setEditingPlace(place);
    setPlaceForm({
      name: place.name || '',
      type: place.type || place.category || 'Hill Station',
      region: place.region || place.location || '',
      latitude: place.latitude || '',
      longitude: place.longitude || '',
      image: place.image || place.img || null,
      about: place.about || place.description || '',
      bestTime: place.bestTime || '',
      image1: place.images?.[0] || null,
      image2: place.images?.[1] || null,
      image3: place.images?.[2] || null,
      image4: place.images?.[3] || null,
      image5: place.images?.[4] || null,
      image6: place.images?.[5] || null
    });
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
      // console.error('Error deleting place:', error);
      // Demo mode - delete from local state
      setPlaces(places.filter(p => p._id !== id));
    }
  };

  const resetPlaceForm = () => {
    setPlaceForm({
      name: '',
      type: 'Hill Station',
      region: '',
      latitude: '',
      longitude: '',
      image: null,
      about: '',
      bestTime: '',
      image1: null,
      image2: null,
      image3: null,
      image4: null,
      image5: null,
      image6: null
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
      // console.error('Error adding bus:', error);
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
      // console.error('Error updating bus:', error);
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
      // console.error('Error deleting bus:', error);
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
          <button
            onClick={() => setActiveTab('messages')}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              activeTab === 'messages' 
                ? 'bg-red-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-200'
            }`}
          >
            Messages ({messages.length})
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
                placeForm={placeForm}
                setPlaceForm={setPlaceForm}
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
                  {console.log("RENDERING PLACES LIST:", places.length)}
                  {places.map((place) => {
                    console.log("RENDERING PLACE:", place.name, place.image);
                    return (
                    <tr key={place._id} className="border-b hover:bg-gray-50">
                      <td className="p-3">
                        <div className="flex flex-col gap-1">
                          <img 
                            src={place.image || place.img || '/images/placeholder.jpg'} 
                            alt="" 
                            className="w-16 h-12 object-cover rounded" 
                            onError={(e) => {
                              console.log(`Image load error for place ${place.name}:`, place.image);
                              console.log(`Image src attempted:`, e.target.src);
                            }}
                            onLoad={(e) => {
                              console.log(`Image loaded successfully for place ${place.name}:`, e.target.src);
                            }}
                          />
                          <div className="text-xs text-gray-500 max-w-16 truncate">
                            {place.image ? 'Custom' : 'Placeholder'}
                          </div>
                        </div>
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
                    );
                  })}
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
                busForm={busForm}
                setBusForm={setBusForm}
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

        {/* Messages Tab */}
        {activeTab === 'messages' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Messages</h2>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              {messages.length === 0 ? (
                <div className="p-8 text-center text-gray-500">
                  No messages yet. Messages from users will appear here.
                </div>
              ) : (
                <div className="divide-y">
                  {messages.map((msg) => (
                    <div key={msg._id} className="p-4 hover:bg-gray-50">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <span className="font-semibold text-lg">{msg.name}</span>
                          <span className="text-gray-500 ml-2 text-sm">{msg.email}</span>
                        </div>
                        <span className="text-gray-400 text-sm">
                          {msg.createdAt ? new Date(msg.createdAt).toLocaleDateString() : 'N/A'}
                        </span>
                      </div>
                      <p className="text-gray-700 whitespace-pre-wrap">{msg.message}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
