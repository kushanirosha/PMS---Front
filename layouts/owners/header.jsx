import React, { useState } from 'react';
import { Search, Bell, RefreshCw } from 'lucide-react';
import {Button, Input} from '@heroui/react';

const Header = ({ title, subtitle }) => {
  return (
    <div className="bg-white shadow-sm border-b px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
          <p className="text-gray-600">{subtitle}</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            {/*<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />*/}
            <Input
              type="text"
              placeholder="Search Anything..."
              className=""
            />
          </div>
          
          <Button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
            <Bell className="w-5 h-5" />
          </Button>
          
          <Button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
            <RefreshCw className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;