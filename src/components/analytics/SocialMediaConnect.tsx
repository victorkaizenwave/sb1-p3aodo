import React from 'react';
import { Instagram, Facebook, Twitter, Linkedin, Lock } from 'lucide-react';

export const SocialMediaConnect: React.FC = () => {
  const platforms = [
    {
      name: 'Instagram',
      icon: Instagram,
      connected: true,
      color: 'text-pink-500 hover:text-pink-600'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      connected: true,
      color: 'text-blue-600 hover:text-blue-700'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      connected: false,
      color: 'text-sky-500 hover:text-sky-600'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      connected: true,
      color: 'text-blue-700 hover:text-blue-800'
    }
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Connected Platforms</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {platforms.map((platform) => {
          const Icon = platform.icon;
          return (
            <button
              key={platform.name}
              className={`flex items-center justify-center space-x-2 p-4 rounded-lg border-2 ${
                platform.connected
                  ? 'border-gray-200 hover:border-gray-300'
                  : 'border-dashed border-gray-300 hover:border-gray-400'
              }`}
            >
              <Icon className={`h-6 w-6 ${platform.color}`} />
              <span className="text-sm font-medium text-gray-900">{platform.name}</span>
              {!platform.connected && (
                <Lock className="h-4 w-4 text-gray-400" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};