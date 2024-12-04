import React, { useState } from 'react';
import { Users, TrendingUp, Target, Share2, BarChart2, Activity } from 'lucide-react';
import { AnalyticsCard } from './AnalyticsCard';
import { AnalyticsChart } from './AnalyticsChart';
import { PlatformMetrics } from './PlatformMetrics';
import { EngagementBreakdown } from './EngagementBreakdown';
import { SocialMediaConnect } from './SocialMediaConnect';
import { ReportGenerator } from './ReportGenerator';

export const AnalyticsDashboard: React.FC = () => {
  const [selectedMetric, setSelectedMetric] = useState('followers');

  const metrics = [
    {
      icon: Users,
      title: 'Total Followers',
      value: '24.5K',
      change: { value: 12, trend: 'up' as const },
      id: 'followers'
    },
    {
      icon: Activity,
      title: 'Engagement Rate',
      value: '5.2%',
      change: { value: 8, trend: 'up' as const },
      id: 'engagement'
    },
    {
      icon: Target,
      title: 'Total Reach',
      value: '142K',
      change: { value: 15, trend: 'up' as const },
      id: 'reach'
    },
    {
      icon: Share2,
      title: 'Share of Voice',
      value: '34%',
      change: { value: 5, trend: 'up' as const },
      id: 'share'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Analytics Overview</h2>
        <ReportGenerator />
      </div>

      <SocialMediaConnect />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <AnalyticsCard
            key={metric.id}
            icon={metric.icon}
            title={metric.title}
            value={metric.value}
            change={metric.change}
            onClick={() => setSelectedMetric(metric.id)}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Performance Trends</h3>
          <AnalyticsChart selectedMetric={selectedMetric} />
        </div>
        <PlatformMetrics />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <EngagementBreakdown />
      </div>
    </div>
  );
};