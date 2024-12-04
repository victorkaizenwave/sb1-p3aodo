import React from 'react';
import { Users, TrendingUp, Target, Calendar, Bell } from 'lucide-react';
import { DashboardMetric } from './DashboardMetric';
import { ProjectProgress } from './ProjectProgress';
import { NotificationsList } from './NotificationsList';
import { CalendarPreview } from './CalendarPreview';

export const DashboardOverview: React.FC = () => {
  const metrics = [
    {
      icon: Users,
      title: 'Total Followers',
      value: '24.5K',
      trend: { value: 12, isPositive: true },
      iconColor: 'text-blue-500'
    },
    {
      icon: TrendingUp,
      title: 'Engagement Rate',
      value: '5.2%',
      trend: { value: 8, isPositive: true },
      iconColor: 'text-green-500'
    },
    {
      icon: Target,
      title: 'Total Reach',
      value: '142K',
      trend: { value: 15, isPositive: true },
      iconColor: 'text-purple-500'
    },
    {
      icon: Bell,
      title: 'New Notifications',
      value: '12',
      iconColor: 'text-yellow-500'
    }
  ];

  const projects = [
    {
      name: 'Social Media Campaign',
      progress: 75,
      status: 'On Track',
      team: ['Sarah Miller'],
      dueDate: '2024-02-15'
    },
    {
      name: 'Website Redesign',
      progress: 45,
      status: 'In Progress',
      team: ['John Davis'],
      dueDate: '2024-03-01'
    },
    {
      name: 'Content Strategy',
      progress: 90,
      status: 'Review',
      team: ['Emma Wilson'],
      dueDate: '2024-02-10'
    }
  ];

  const notifications = [
    {
      id: '1',
      title: 'Campaign Performance Update',
      message: 'Your recent campaign has exceeded target metrics by 15%',
      time: '2 hours ago',
      type: 'success'
    },
    {
      id: '2',
      title: 'New Message from Team',
      message: 'Sarah has shared the latest analytics report',
      time: '4 hours ago',
      type: 'message'
    },
    {
      id: '3',
      title: 'Upcoming Deadline',
      message: 'Content Strategy review meeting tomorrow at 2 PM',
      time: 'Yesterday',
      type: 'warning'
    }
  ];

  const events = [
    {
      id: '1',
      title: 'Strategy Review',
      start: new Date('2024-02-10T14:00:00'),
      type: 'meeting'
    },
    {
      id: '2',
      title: 'Content Publishing',
      start: new Date('2024-02-12T10:00:00'),
      type: 'task'
    },
    {
      id: '3',
      title: 'Campaign Launch',
      start: new Date('2024-02-15T09:00:00'),
      type: 'milestone'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <DashboardMetric key={index} {...metric} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <ProjectProgress projects={projects} />
        <div className="grid grid-cols-1 gap-6">
          <NotificationsList notifications={notifications} />
          <CalendarPreview events={events} />
        </div>
      </div>
    </div>
  );
};