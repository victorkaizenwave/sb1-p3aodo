import React from 'react';
import { LucideIcon } from 'lucide-react';

interface RoleWidgetProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick: () => void;
}

export const RoleWidget: React.FC<RoleWidgetProps> = ({
  icon: Icon,
  title,
  description,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="w-full p-6 bg-white rounded-xl shadow-lg transition-all hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      <div className="flex flex-col items-center space-y-4">
        <div className="p-3 bg-blue-50 rounded-full">
          <Icon className="h-8 w-8 text-blue-600" />
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </button>
  );
};