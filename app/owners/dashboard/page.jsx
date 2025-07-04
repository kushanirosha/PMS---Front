'use client';

import React from 'react';
import { Building, TrendingUp, Users, DollarSign } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { icon: Building, label: 'Total Properties', value: '1,500', color: 'bg-blue-500' },
    { icon: TrendingUp, label: 'Occupied', value: '1,200', color: 'bg-green-500' },
    { icon: Users, label: 'Active Tenants', value: '945', color: 'bg-purple-500' },
    { icon: DollarSign, label: 'Monthly Revenue', value: '$45,000', color: 'bg-orange-500' }
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activities</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <Building className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="font-medium text-gray-800">New property added</p>
              <p className="text-sm text-gray-600">123 Maple Avenue Springfield - 2 hours ago</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Users className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="font-medium text-gray-800">Tenant lease signed</p>
              <p className="text-sm text-gray-600">Garden Street Apartment - 5 hours ago</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <p className="font-medium text-gray-800">Rent payment received</p>
              <p className="text-sm text-gray-600">Villa Street Property - 1 day ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;