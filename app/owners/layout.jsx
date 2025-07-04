'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Header from '../../layouts/owners/header';
import Sidebar from '../../layouts/owners/sidebar';

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(pathname.replace('/owners/', '') || 'properties');

  const getHeaderProps = () => {
    switch (activeTab) {
      case 'dashboard':
        return {
          title: 'Hello, John!',
          subtitle: 'Explore information and activity about your property',
        };
      case 'properties':
        return {
          title: 'Properties',
          subtitle: 'Manage your property portfolio',
        };
      case 'tenants':
        return {
          title: 'Tenants',
          subtitle: 'Manage tenant information and leases',
        };
      case 'finance':
        return {
          title: 'Finance',
          subtitle: 'Track payments and financial reports',
        };
      case 'notification':
        return {
          title: 'Messages',
          subtitle: 'Communicate with tenants and staff',
        };
      default:
        return {
          title: 'Properties',
          subtitle: 'Manage your property portfolio',
        };
    }
  };

  return (
    <div className="flex bg-gray-100">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header {...getHeaderProps()} />
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}