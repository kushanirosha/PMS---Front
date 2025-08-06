'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { properties } from '../../../../../utils/dummydata';

const PropertyDetails = () => {
  const { id } = useParams(); 
  const property = properties.find((prop) => prop.id.toString() === id); 

  if (!property) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm mx-auto mt-6 max-w-2xl">
        <h2 className="text-2xl font-bold text-red-600">Property not found</h2>
        <Link
          href="/owners/properties"
          className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Back to Properties
        </Link>
      </div>
    );
  }

  const handleEdit = () => {
    console.log(`Editing property with id: ${property.id}`);
    // Add your edit logic here (e.g., redirect to an edit form or open a modal)
  };

  const handleDelete = () => {
    console.log(`Deleting property with id: ${property.id}`);
    // Add your delete logic here (e.g., remove from state or call API)
    window.location.href = '/owners/properties'; // Navigate back to the list after deletion
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mx-auto mt-6 max-h-[80vh] overflow-y-auto pr-4 ">
      <h2 className="text-2xl font-bold mb-4">{property.title}</h2>
      <img
        src={property.images[0] || 'https://via.placeholder.com/400'}
        alt={property.title}
        className="w-full h-64 object-cover rounded mb-4"
      />
      {/* Scrollable container for property details */}
      <div className="">
        <div className="space-y-4">
          <p>
            <span className="font-semibold">Address:</span> {property.address}
          </p>
          <p>
            <span className="font-semibold">Price:</span> ${property.price.toLocaleString()}
          </p>
          <p>
            <span className="font-semibold">Type:</span> {property.type}
          </p>
          <p>
            <span className="font-semibold">Status:</span> {property.status}
          </p>
          <p>
            <span className="font-semibold">Bedrooms:</span> {property.bedrooms}
          </p>
          <p>
            <span className="font-semibold">Bathrooms:</span> {property.bathrooms}
          </p>
          <p>
            <span className="font-semibold">Area:</span> {property.area} sq ft
          </p>
          <p>
            <span className="font-semibold">Description:</span> {property.description}
          </p>
          <p>
            <span className="font-semibold">Amenities:</span> {property.amenities.join(', ')}
          </p>
          <p>
            <span className="font-semibold">Created At:</span>{' '}
            {new Date(property.createdAt).toLocaleString('en-US', {
              dateStyle: 'medium',
              timeStyle: 'short',
            })}
          </p>
          <p>
            <span className="font-semibold">Updated At:</span>{' '}
            {new Date(property.updatedAt).toLocaleString('en-US', {
              dateStyle: 'medium',
              timeStyle: 'short',
            })}
          </p>
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Gallery</h3>
            <div className="grid grid-cols-2 gap-4">
              {property.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${property.title} ${index + 1}`}
                  className="w-full h-40 object-cover rounded"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Buttons remain outside the scrollable area */}
      <div className="mt-6 flex space-x-4">
        <button
          onClick={handleEdit}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
        <Link
          href="/owners/properties"
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Back to Properties
        </Link>
      </div>
    </div>
  );
};

export default PropertyDetails;