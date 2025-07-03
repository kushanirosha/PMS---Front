'use client';

import { Button, Input, Card } from '@heroui/react';
import Sidebar from '../../../layouts/owners/sidebar';
import { HiBuildingOffice } from "react-icons/hi2";
import { HiChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { HiBell } from "react-icons/hi2";
import { HiSearchCircle } from "react-icons/hi";
import { HiWrenchScrewdriver } from "react-icons/hi2";
import { HiBolt } from "react-icons/hi2";
import { FaFan } from "react-icons/fa";
import { useState } from 'react';

const Dashboard = () => {
  const maintenanceRequests = [
    { id: 'PRQ-1721', type: 'Plumbing', issue: 'Broken Garbage', assigned: 'Jacob Jones' },
    { id: 'PRQ-1722', type: 'Electrical', issue: 'No Heat-Bathroom', assigned: 'Albert Flores' },
    { id: 'PRQ-1723', type: 'HVAC', issue: 'Non Functional Fan', assigned: 'Robert Fox' },
  ];

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#E7EADF] flex">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 p-3">
          <div>
            <h1 className="text-2xl font-bold">Hello, John!</h1>
            <p className="text-gray-600">Explore information and activity about your property</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search Anything..."
                className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <HiSearchCircle className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
            <Button className="p-2 rounded-full bg-gray-200">
              <HiChatBubbleOvalLeftEllipsis className="w-6 h-6 text-gray-700" />
            </Button>
            <Button className="p-2 rounded-full bg-gray-200 relative">
              <HiBell className="w-6 h-6 text-gray-700" />
              <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">3</span>
            </Button>
          </div>
        </div>

        {/* Total Property Card */}
        <Card className="rounded-lg shadow mb-6 p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <HiBuildingOffice className="w-8 h-8 text-gray-500 mr-3" />
              <div>
                <p className="text-gray-600">Total Property</p>
                <p className="text-3xl font-bold">1,500</p>
              </div>
            </div>
            <div className="text-green-500">
              <p>20% <span className="text-gray-500">Last month total 1,050</span></p>
            </div>
          </div>
        </Card>

        {/* Maintenance Requests Card */}
        <Card className="rounded-lg shadow p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Maintenance Request</h2>
            <Button className="text-blue-500 hover:underline">See All</Button>
          </div>
          <div className="space-y-4">
            {maintenanceRequests.map((request) => (
              <div key={request.id} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                    {request.type === 'Plumbing' && <HiWrenchScrewdriver className="w-6 h-6 text-gray-600" />}
                    {request.type === 'Electrical' && <HiBolt className="w-6 h-6 text-gray-600" />}
                    {request.type === 'HVAC' && <FaFan className="w-6 h-6 text-gray-600" />}
                  </div>
                  <div>
                    <p className="font-semibold">{request.type} | Request ID: {request.id}</p>
                    <p className="text-gray-600">{request.issue}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <img
                    src="/images/profile.png"
                    alt="Assigned"
                    className="w-8 h-8 rounded-full mr-2 border-3"
                  />
                  <p className="text-gray-600">{request.assigned}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;