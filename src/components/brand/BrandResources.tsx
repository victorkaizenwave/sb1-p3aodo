import React, { useState } from 'react';
import { Download, ExternalLink, Image, FileText, Palette, Brain } from 'lucide-react';
import { RequestStudyModal } from './RequestStudyModal';

export const BrandResources: React.FC = () => {
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);

  const brandAssets = [
    {
      category: 'Logo Package',
      items: [
        { name: 'Primary Logo - Full Color', type: 'PNG, SVG, AI', size: '2.4 MB' },
        { name: 'Logo Mark Only', type: 'PNG, SVG', size: '1.2 MB' },
        { name: 'Logo - White Version', type: 'PNG, SVG', size: '1.8 MB' },
        { name: 'Logo - Black Version', type: 'PNG, SVG', size: '1.8 MB' }
      ]
    },
    {
      category: 'Brand Guidelines',
      items: [
        { name: 'Brand Style Guide', type: 'PDF', size: '4.2 MB' },
        { name: 'Typography Guide', type: 'PDF', size: '1.5 MB' },
        { name: 'Color Palette', type: 'PDF', size: '890 KB' },
        { name: 'Usage Guidelines', type: 'PDF', size: '2.1 MB' }
      ]
    },
    {
      category: 'Marketing Templates',
      items: [
        { name: 'Social Media Templates', type: 'PSD, AI', size: '15.4 MB' },
        { name: 'Email Signature', type: 'HTML', size: '45 KB' },
        { name: 'Presentation Template', type: 'PPTX', size: '8.2 MB' },
        { name: 'Business Cards', type: 'PDF, AI', size: '3.6 MB' }
      ]
    }
  ];

  const colorPalette = [
    { name: 'Primary Blue', hex: '#345BBF' },
    { name: 'Secondary Blue', hex: '#7BC9EF' },
    { name: 'Dark Blue', hex: '#00317F' },
    { name: 'Light Gray', hex: '#F3F4F6' },
    { name: 'Dark Gray', hex: '#374151' }
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Digital Assets Library</h2>
        <button
          onClick={() => setIsRequestModalOpen(true)}
          className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          <Brain className="h-5 w-5 mr-2" />
          Get a Deeper Study
        </button>
      </div>

      {/* Color Palette Section */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex items-center space-x-2 mb-4">
          <Palette className="h-5 w-5 text-blue-600" />
          <h2 className="text-lg font-medium text-gray-900">Brand Colors</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {colorPalette.map((color) => (
            <div key={color.hex} className="space-y-2">
              <div 
                className="h-20 rounded-lg"
                style={{ backgroundColor: color.hex }}
              />
              <div className="text-sm">
                <p className="font-medium text-gray-900">{color.name}</p>
                <p className="text-gray-500">{color.hex}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Brand Assets Section */}
      {brandAssets.map((category) => (
        <div key={category.category} className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-medium text-gray-900 mb-4">{category.category}</h2>
          <div className="space-y-4">
            {category.items.map((item) => (
              <div 
                key={item.name}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  {category.category.includes('Logo') ? (
                    <Image className="h-5 w-5 text-blue-600" />
                  ) : (
                    <FileText className="h-5 w-5 text-blue-600" />
                  )}
                  <div>
                    <p className="font-medium text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      {item.type} • {item.size}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-gray-600">
                    <ExternalLink className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-blue-600 hover:text-blue-700">
                    <Download className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <RequestStudyModal
        isOpen={isRequestModalOpen}
        onClose={() => setIsRequestModalOpen(false)}
      />
    </div>
  );
};