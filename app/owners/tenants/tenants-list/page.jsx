import React from 'react'
import { tenants } from '../../../../utils/dummydata';

const page = () => {

    

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
                <div className="bg-green-100 p-2 rounded-lg">
                    <p className="text-gray-600">Total Tenants</p>
                    <p className="text-2xl font-bold">{tenants.length}</p>
                </div>
                <button
                    // onClick={onNewTenantsButtonClick}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                >
                    New Tenants
                </button>
            </div>
            <div className="space-y-4">
                {tenants.map((tenant) => (
                    <div key={tenant.id} className="flex items-center p-2 border-b last:border-b-0">
                        <img
                            src={tenant.image}
                            alt={tenant.name}
                            className="w-10 h-10 rounded-full mr-4"
                        />
                        <span className="text-gray-700">{tenant.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default page