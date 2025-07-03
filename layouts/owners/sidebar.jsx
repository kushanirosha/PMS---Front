'use client';

import React, { useState } from 'react';
import { Separator } from '@/components/ui/separator';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import {
  Home,
  Building,
  Users,
  DollarSign,
  MessageSquare,
  Settings,
  ChevronDown,
  User,
  LogOut,
  X,
} from 'lucide-react';
import Link from 'next/link';


const Sidebar = () => {
  const sidebarItems = [
    { icon: Home, label: 'Dashboard', href: '/owners/dashboard', active: true },
    { icon: Building, label: 'Properties', href: '/properties' },
    { icon: Users, label: 'Tenants', href: '/tenants' },
    { icon: DollarSign, label: 'Finance', href: '/finance' },
    { icon: MessageSquare, label: 'Messages', href: '/owners/notification' },
  ];

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div
      className={`${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
    >
      <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
            <Building className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">PMS</h1>
            <p className="text-xs text-gray-500">Property Management System</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setSidebarOpen(false)}
          className="lg:hidden"
          aria-label="Close sidebar"
        >
          <X className="w-5 h-5" />
        </Button>
      </div>

      <nav className="mt-8 px-4 space-y-2">
        {sidebarItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
              item.active
                ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25'
                : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
            }`}
            aria-label={item.label}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-full justify-start p-2 h-auto">
              <div className="flex items-center space-x-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="https://placehold.co/40x40" alt="John Splash" />
                  <AvatarFallback className="bg-emerald-500 text-white">JS</AvatarFallback>
                </Avatar>
                <div className="flex-1 text-left">
                  <p className="text-sm font-medium text-gray-900">John Splash</p>
                  <p className="text-xs text-gray-500">Admin</p>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem>
              <User className="w-4 h-4 mr-2" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="w-4 h-4 mr-2" />
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Sidebar;