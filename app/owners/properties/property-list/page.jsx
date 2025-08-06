'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { properties } from '../../../../utils/dummydata';
import { Button } from '@heroui/react';

const PropertyList = () => {
  const router = useRouter();

  const onNewPropertyButtonClick = () => {
    router.push('/owners/properties/new-property');
  };

  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
        <p className="text-gray-600">Total Property</p>
        <p className="text-2xl font-bold">{properties.length}</p>
        <Button
          onClick={onNewPropertyButtonClick}
          className="bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
        >
          New Property
        </Button>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-4">See All</h2>
        <div className="max-h-80 overflow-y-auto">
          {properties.map((prop) => (
            <Link
              key={prop.id}
              href={`/owners/properties/property-details/${prop.id}`}
              className="flex items-center justify-between py-2 border-b last:border-b-0 hover:bg-gray-100"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={prop.images[0] || 'https://via.placeholder.com/40'}
                  alt={prop.title}
                  className="w-10 h-10 rounded"
                />
                <div>
                  <p className="text-sm">{prop.title}</p>
                  <p className="text-xs text-gray-500">
                    {new Date(prop.createdAt).toLocaleDateString('en-US', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              </div>
              <p className="text-lg font-bold">${(prop.price / 1000).toFixed(0)}K</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default PropertyList;