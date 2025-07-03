'use client';

import { Button, Card } from '@heroui/react';
import { HiPlus } from 'react-icons/hi';
import { HiBuildingOffice } from 'react-icons/hi2'; 
import Sidebar from '../../../layouts/owners/sidebar';

const PropertiesPage = () => {
  const properties = [
    { id: 1, name: 'Downtown Apartment', location: '123 Main St', units: 50 },
    { id: 2, name: 'Suburban Complex', location: '456 Oak Ave', units: 30 },
    { id: 3, name: 'City Towers', location: '789 Pine Rd', units: 75 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">My Properties</h1>
          <Button className="bg-blue-500 text-white hover:bg-blue-600 flex items-center">
            <HiPlus className="w-5 h-5 mr-2" />
            New Property
          </Button>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <Card key={property.id} className="rounded-lg shadow p-4">
              <div className="flex items-center mb-4">
                <HiBuildingOffice className="w-8 h-8 text-gray-500 mr-3" />
                <div>
                  <h3 className="font-semibold text-lg">{property.name}</h3>
                  <p className="text-gray-600">{property.location}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">Units: {property.units}</p>
              <Button className="w-full bg-green-500 text-white hover:bg-green-600">
                View Details
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertiesPage;