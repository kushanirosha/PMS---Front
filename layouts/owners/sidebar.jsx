'use client';

import React, { useState } from 'react';
import { Home, Building, Users, DollarSign, MessageCircle, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = ({ activeTab, onTabChange }) => {
  const menuItems = [
    { id: '/owners/dashboard', icon: Home, label: 'Dashboard' },
    { id: '/owners/properties', icon: Building, label: 'Properties' },
    { id: '/owners/tenants', icon: Users, label: 'Tenants' },
    { id: '/owners/finance', icon: DollarSign, label: 'Finance' },
    { id: '/owners/notification', icon: MessageCircle, label: 'Messages' },
  ];

  return (
    <div className="w-80 bg-white h-screen shadow-lg flex flex-col">
      <div className="p-6 border-b">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
            <Building className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">PMS</h1>
            <p className="text-sm text-gray-500">Property Management System</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              href={item.id}
              onClick={() => onTabChange(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === item.id
                  ? 'bg-green-50 text-green-600 border-r-2 border-green-500'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>

      <div className="p-4 border-t">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-gray-600" />
          </div>
          <div>
            <p className="font-medium text-gray-800">John Splash</p>
            <p className="text-sm text-gray-500">Administrator</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(pathname || '/owners/dashboard');

  return (
    <div className="">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <div>
        {children}
      </div>
    </div>
  );
}