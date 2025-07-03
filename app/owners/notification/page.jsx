"use client";

import { useState } from 'react';
import {
    Building,
    Search,
    Bell,
    Settings,
    Zap,
    Droplets,
    Wind,
    AlertCircle,
    Clock,
    CheckCircle,
    Menu,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Sidebar from '../../../layouts/owners/sidebar';
import { Separator } from '@/components/ui/separator';


const propertyRequests = [
    {
        id: 1,
        type: 'Plumbing',
        location: '721 Meadowview',
        issue: 'Broken Garbage',
        requestId: 'PL-MR-001',
        assignee: {
            name: 'Jacob Jones',
            avatar: '/api/placeholder/32/32',
            initials: 'JJ'
        },
        priority: 'high',
        status: 'in-progress',
        icon: Droplets
    },
    {
        id: 2,
        type: 'Electrical',
        location: '721 Meadowview',
        issue: 'No Heat Bathroom',
        requestId: 'EL-MR-002',
        assignee: {
            name: 'Albert Flores',
            avatar: '/api/placeholder/32/32',
            initials: 'AF'
        },
        priority: 'medium',
        status: 'pending',
        icon: Zap
    },
    {
        id: 3,
        type: 'Electrical',
        location: '721 Meadowview',
        issue: 'No Heat Bathroom',
        requestId: 'EL-MR-003',
        assignee: {
            name: 'Albert Flores',
            avatar: '/api/placeholder/32/32',
            initials: 'AF'
        },
        priority: 'medium',
        status: 'pending',
        icon: Zap
    },
    {
        id: 4,
        type: 'Plumbing',
        location: '721 Meadowview',
        issue: 'Broken Garbage',
        requestId: 'PL-MR-004',
        assignee: {
            name: 'Jacob Jones',
            avatar: '/api/placeholder/32/32',
            initials: 'JJ'
        },
        priority: 'high',
        status: 'in-progress',
        icon: Droplets
    },
    {
        id: 5,
        type: 'Electrical',
        location: '721 Meadowview',
        issue: 'No Heat Bathroom',
        requestId: 'EL-MR-005',
        assignee: {
            name: 'Albert Flores',
            avatar: '/api/placeholder/32/32',
            initials: 'AF'
        },
        priority: 'low',
        status: 'completed',
        icon: Zap
    },
    {
        id: 6,
        type: 'HVAC',
        location: '721 Meadowview',
        issue: 'Non Functional Fan',
        requestId: 'HV-MR-006',
        assignee: {
            name: 'Robert Fox',
            avatar: '/api/placeholder/32/32',
            initials: 'RF'
        },
        priority: 'medium',
        status: 'pending',
        icon: Wind
    },
];

const getPriorityColor = (priority, string) => {
    switch (priority) {
        case 'high': return 'bg-red-100 text-red-800 border-red-200';
        case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
        case 'low': return 'bg-green-100 text-green-800 border-green-200';
        default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
};

const getStatusColor = (status, string) => {
    switch (status) {
        case 'completed': return 'bg-green-100 text-green-800 border-green-200';
        case 'in-progress': return 'bg-blue-100 text-blue-800 border-blue-200';
        case 'pending': return 'bg-orange-100 text-orange-800 border-orange-200';
        default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
};

const getStatusIcon = (status, string) => {
    switch (status) {
        case 'completed': return CheckCircle;
        case 'in-progress': return Clock;
        case 'pending': return AlertCircle;
        default: return Clock;
    }
};

export default function PropertyManagementDashboard() {
    const [searchQuery, setSearchQuery] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const filteredRequests = propertyRequests.filter(request =>
        request.issue.toLowerCase().includes(searchQuery.toLowerCase()) ||
        request.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        request.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        request.assignee.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="bg-white shadow-sm border-b border-gray-200">
                    <div className="flex items-center justify-between h-16 px-6">
                        <div className="flex items-center space-x-4">
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setSidebarOpen(true)}
                                className="lg:hidden"
                            >
                                <Menu className="w-5 h-5" />
                            </Button>
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">Hello, John!</h1>
                                <p className="text-sm text-gray-500">Explore information and activity about your property</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <Input
                                    placeholder="Search Anything..."
                                    className="pl-10 pr-4 py-2 w-64 bg-gray-50 border-gray-200 focus:bg-white"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                            <Button variant="ghost" size="sm">
                                <Bell className="w-5 h-5" />
                            </Button>
                            <Button variant="ghost" size="sm">
                                <Settings className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                </header>

                {/* Dashboard Content */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
                    <div className="p-6 space-y-6">
                        {/* Stats Card */}
                        <Card className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white">
                            <CardHeader className="pb-3">
                                <CardTitle className="flex items-center space-x-2">
                                    <Building className="w-5 h-5" />
                                    <span>Total Property</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold">1,500</div>
                            </CardContent>
                        </Card>

                        {/* Property Requests */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Property Requests</CardTitle>
                                <CardDescription>
                                    Manage and track all property maintenance requests
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {filteredRequests.map((request) => {
                                        const StatusIcon = getStatusIcon(request.status);
                                        return (
                                            <div
                                                key={request.id}
                                                className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-200"
                                            >
                                                <div className="flex items-center space-x-4">
                                                    <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-lg">
                                                        <request.icon className="w-5 h-5 text-gray-600" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="flex items-center space-x-2">
                                                            <h3 className="font-semibold text-gray-900">
                                                                {request.type} | {request.location}
                                                            </h3>
                                                            <Badge variant="outline" className={getPriorityColor(request.priority)}>
                                                                {request.priority}
                                                            </Badge>
                                                        </div>
                                                        <p className="text-sm text-gray-600">{request.issue}</p>
                                                        <p className="text-xs text-gray-500 mt-1">Request ID: {request.requestId}</p>
                                                    </div>
                                                </div>

                                                <div className="flex items-center space-x-4">
                                                    <div className="flex items-center space-x-2">
                                                        <StatusIcon className="w-4 h-4 text-gray-400" />
                                                        <Badge variant="outline" className={getStatusColor(request.status)}>
                                                            {request.status}
                                                        </Badge>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <Avatar className="w-8 h-8">
                                                            <AvatarImage src={request.assignee.avatar} alt={request.assignee.name} />
                                                            <AvatarFallback className="bg-emerald-500 text-white text-xs">
                                                                {request.assignee.initials}
                                                            </AvatarFallback>
                                                        </Avatar>
                                                        <span className="text-sm font-medium text-gray-900">
                                                            {request.assignee.name}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </main>
            </div>

            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}
        </div>
    );
}