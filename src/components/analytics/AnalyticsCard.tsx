import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface AnalyticsCardProps {
  icon: LucideIcon;
  title: string;
  value: string | number;
  change?: {
    value: number;
    trend: 'up' | 'down';
  };
  onClick: () => void;
}

export const AnalyticsCard: React.FC<AnalyticsCardProps> = ({
  icon: Icon,
  title,
  value,
  change,
  onClick,
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow w-full text-left"
    >
      <div className="flex items-start justify-between">
        <div className="p-2 bg-blue-50 rounded-lg">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
        {change && (
          <span
            className={`text-sm font-medium ${
              change.trend === 'up' ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {change.trend === 'up' ? '↑' : '↓'} {change.value}%
          </span>
        )}
      </div>
      <h3 className="mt-4 text-2xl font-semibold text-gray-900">{value}</h3>
      <p className="mt-1 text-sm text-gray-500">{title}</p>
    </motion.button>
  );
};