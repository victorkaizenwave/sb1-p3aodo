import React from 'react';

interface DashboardHeaderProps {
  title: string;
  userName: string;
  userAvatar: string;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  title,
  userName,
  userAvatar,
}) => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          <div className="flex items-center space-x-4">
            <img
              className="h-10 w-10 rounded-full"
              src={userAvatar}
              alt={userName}
            />
            <span className="text-gray-900 font-medium">{userName}</span>
          </div>
        </div>
      </div>
    </header>
  );
};