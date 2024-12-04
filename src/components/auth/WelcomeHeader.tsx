import React from 'react';
import { KaizenWaveLogo } from '../dashboard/KaizenWaveLogo';

export const WelcomeHeader: React.FC = () => {
  return (
    <div className="text-center space-y-6">
      <div className="flex justify-center">
        <KaizenWaveLogo className="h-16 w-16" />
      </div>
      <div>
        <h1 className="text-4xl font-bold text-gray-900">Welcome to Kaizen Wave</h1>
        <p className="mt-3 text-lg text-gray-600">Select your portal to continue</p>
      </div>
    </div>
  );
};