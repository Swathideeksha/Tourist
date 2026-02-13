import React from 'react';

const PrivateScheduledServices = () => {
  const services = [
    { name: "Tours and Travels", desc: "Book private cabs" },
    { name: "Car Rentals", desc: "Self-drive options" },
    { name: "Bike Rentals", desc: "Two-wheeler adventures" },
  ];

  return (
    <div className="px-4 md:px-10 py-6 md:py-8">
      <h2 className="text-xl md:text-2xl font-bold mb-4">Private Scheduled Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {services.map((item, index) => (
          <div key={index} className="p-4 border rounded hover:shadow-md transition cursor-pointer">
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivateScheduledServices;
