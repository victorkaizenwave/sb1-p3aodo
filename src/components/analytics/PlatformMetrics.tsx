import React from 'react';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

export const PlatformMetrics: React.FC = () => {
  const platforms = [
    {
      name: 'Instagram',
      icon: Instagram,
      followers: '12.3K',
      engagement: '4.8%',
      color: 'text-pink-500'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      followers: '8.2K',
      engagement: '3.2%',
      color: 'text-blue-600'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      followers: '5.1K',
      engagement: '2.9%',
      color: 'text-sky-500'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      followers: '3.4K',
      engagement: '5.4%',
      color: 'text-blue-700'
    }
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Platform Performance</h3>
      <div className="space-y-4">
        {platforms.map((platform) => {
          const Icon = platform.icon;
          return (
            <div
              key={platform.name}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <Icon className={`h-5 w-5 ${platform.color}`} />
                <span className="font-medium text-gray-900">{platform.name}</span>
              </div>
              <div className="flex items-center space-x-6">
                <div className="text-right">
                  <p className="text-sm text-gray-500">Followers</p>
                  <p className="font-medium text-gray-900">{platform.followers}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Engagement</p>
                  <p className="font-medium text-gray-900">{platform.engagement}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};