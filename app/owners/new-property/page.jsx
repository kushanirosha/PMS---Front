'use client';

import { Button, Card, Input } from '@heroui/react';
import { HiArrowLeft} from 'react-icons/hi';
import { HiBuildingOffice } from "react-icons/hi2";
import Sidebar from '../../../layouts/owners/sidebar';

const NewPropertyPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-6">
        {/* Header */}
        <div className="flex items-center mb-6">
          <Button className="mr-4 bg-gray-200 hover:bg-gray-300 rounded-full p-2">
            <HiArrowLeft className="w-6 h-6 text-gray-700" />
          </Button>
          <h1 className="text-2xl font-bold">Add New Property</h1>
        </div>

        {/* Form Card */}
        <Card className="rounded-lg shadow p-6 max-w-lg">
          <div className="flex items-center mb-6">
            <HiBuildingOffice className="w-8 h-8 text-gray-500 mr-3" />
            <h2 className="text-xl font-semibold">Property Details</h2>
          </div>

          <div className="space-y-4">
            {/* Property Name */}
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                Property Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Enter property name"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Location */}
            <div>
              <label htmlFor="location" className="block text-gray-700 font-medium mb-1">
                Location
              </label>
              <Input
                id="location"
                type="text"
                placeholder="Enter location"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Units */}
            <div>
              <label htmlFor="units" className="block text-gray-700 font-medium mb-1">
                Number of Units
              </label>
              <Input
                id="units"
                type="number"
                placeholder="Enter number of units"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Submit Button */}
            <Button className="w-full bg-blue-500 text-white hover:bg-blue-600 mt-4">
              Add Property
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default NewPropertyPage;