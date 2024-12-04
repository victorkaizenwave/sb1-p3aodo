import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, BarChart2, Palette } from 'lucide-react';

export const ClientsList: React.FC = () => {
  const clients = [
    {
      id: '1',
      name: 'Bright Future Marketing',
      industry: 'Marketing Agency',
      avatar: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      status: 'active'
    },
    {
      id: '2',
      name: 'TechCorp Solutions',
      industry: 'Technology',
      avatar: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      status: 'active'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Assigned Clients</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {clients.map((client) => (
          <motion.div
            key={client.id}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center space-x-4">
                <img
                  src={client.avatar}
                  alt={client.name}
                  className="h-12 w-12 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{client.name}</h3>
                  <p className="text-sm text-gray-500">{client.industry}</p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <button
                  onClick={() => {/* Navigate to analytics */}}
                  className="flex items-center justify-center space-x-2 p-2 bg-blue-50 rounded-lg text-blue-600 hover:bg-blue-100"
                >
                  <BarChart2 className="h-5 w-5" />
                  <span className="text-sm font-medium">Analytics</span>
                </button>
                <button
                  onClick={() => {/* Navigate to brand resources */}}
                  className="flex items-center justify-center space-x-2 p-2 bg-purple-50 rounded-lg text-purple-600 hover:bg-purple-100"
                >
                  <Palette className="h-5 w-5" />
                  <span className="text-sm font-medium">Brand</span>
                </button>
              </div>

              <div className="mt-6">
                <button
                  onClick={() => {/* Navigate to client portal */}}
                  className="w-full flex items-center justify-center space-x-2 p-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  <ExternalLink className="h-5 w-5" />
                  <span className="text-sm font-medium">View Portal</span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};