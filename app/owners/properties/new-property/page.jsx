'use client';

import React, { useState } from 'react';
import { Button} from '@heroui/react';

const page = () => {
  const [formData, setFormData] = useState({
    coverPhoto: null,
    name: '',
    propertyType: '',
    galleryPhotos: [],
  });

  const handleCoverPhotoChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, coverPhoto: file });
  };

  const handleGalleryPhotoChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, galleryPhotos: [...formData.galleryPhotos, ...files] });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Property Data:', formData);
    // Add your submission logic here (e.g., API call)
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex space-x-6">
          <div>
            <label className="block text-gray-600 mb-2">Upload Cover photo</label>
            <div className="w-64 h-48 bg-gray-200 flex items-center justify-center rounded-lg">
              <input
                type="file"
                accept="image/*"
                onChange={handleCoverPhotoChange}
                className="hidden"
                id="coverPhoto"
              />
              <label htmlFor="coverPhoto" className="cursor-pointer text-gray-500">
                Upload Cover photo
              </label>
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <div>
              <label className="block text-gray-600 mb-2">Name of property</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg"
                placeholder="Name of property"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Select Property type</label>
              <select
                name="propertyType"
                value={formData.propertyType}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg"
              >
                <option value="">Select Property type</option>
                <option value="House">House</option>
                <option value="Apartment">Apartment</option>
                <option value="Condo">Condo</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <label className="block text-gray-600 mb-2">photo gallery</label>
          <div className="flex space-x-4">
            {formData.galleryPhotos.map((photo, index) => (
              <div key={index} className="w-20 h-20 bg-gray-200 rounded-lg"></div>
            ))}
            <input
              type="file"
              accept="image/*"
              onChange={handleGalleryPhotoChange}
              multiple
              className="hidden"
              id="galleryPhotos"
            />
            <label htmlFor="galleryPhotos" className="w-20 h-20 bg-gray-200 flex items-center justify-center rounded-lg cursor-pointer text-gray-500">
              +
            </label>
          </div>
        </div>
         <Button
              type="submit"
              className="bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
            >
              Create
            </Button>
      </form>
    </div>
  )
}

export default page