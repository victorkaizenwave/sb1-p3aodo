import React from 'react';
import { Clock, CheckCircle, Calendar, Bell } from 'lucide-react';
import { DashboardMetric } from './DashboardMetric';
import { TasksWidget } from './TasksWidget';
import { ProjectsWidget } from './ProjectsWidget';
import { NotificationsList } from './NotificationsList';
import { CalendarPreview } from './CalendarPreview';

export const TeamDashboardOverview: React.FC = () => {
  const metrics = [
    {
      icon: Clock,
      title: 'Active Tasks',
      value: '8',
      trend: { value: 2, isPositive: true },
      iconColor: 'text-blue-500'
    },
    {
      icon: CheckCircle,
      title: 'Completed Tasks',
      value: '12',
      trend: { value: 5, isPositive: true },
      iconColor: 'text-green-500'
    },
    {
      icon: Calendar,
      title: 'Upcoming Deadlines',
      value: '3',
      iconColor: 'text-yellow-500'
    },
    {
      icon: Bell,
      title: 'New Messages',
      value: '5',
      iconColor: 'text-purple-500'
    }
  ];

  const tasks = [
    {
      id: '1',
      title: 'Review Social Media Content',
      priority: 'high',
      dueDate: '2024-02-28',
      client: 'Bright Future Marketing',
      status: 'in-progress'
    },
    {
      id: '2',
      title: 'Create Monthly Analytics Report',
      priority: 'medium',
      dueDate: '2024-03-01',
      client: 'TechCorp Solutions',
      status: 'pending'
    },
    {
      id: '3',
      title: 'Update Brand Guidelines',
      priority: 'low',
      dueDate: '2024-03-05',
      client: 'Bright Future Marketing',
      status: 'in-progress'
    }
  ];

  const projects = [
    {
      id: '1',
      name: 'Q1 Marketing Campaign',
      client: 'Bright Future Marketing',
      progress: 75,
      dueDate: '2024-03-15'
    },
    {
      id: '2',
      name: 'Website Redesign',
      client: 'TechCorp Solutions',
      progress: 45,
      dueDate: '2024-04-01'
    }
  ];

  const notifications = [
    {
      id: '1',
      title: 'New Task Assignment',
      message: 'You have been assigned to review the Q1 campaign materials',
      time: '2 hours ago',
      type: 'task'
    },
    {
      id: '2',
      title: 'Client Message',
      message: 'Sarah from Bright Future Marketing sent you a message',
      time: '4 hours ago',
      type: 'message'
    },
    {
      id: '3',
      title: 'Deadline Reminder',
      message: 'Website mockup review due tomorrow at 2 PM',
      time: 'Yesterday',
      type: 'deadline'
    }
  ];

  const events = [
    {
      id: '1',
      title: 'Team Meeting',
      start: new Date('2024-02-28T14:00:00'),
      type: 'meeting'
    },
    {
      id: '2',
      title: 'Content Review',
      start: new Date('2024-03-01T10:00:00'),
      type: 'task'
    },
    {
      id: '3',
      title: 'Client Presentation',
      start: new Date('2024-03-02T15:00:00'),
      type: 'meeting'
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
        <div className="space-y-6">
          <TasksWidget tasks={tasks} />
          <ProjectsWidget projects={projects} />
        </div>
        <div className="space-y-6">
          <NotificationsList notifications={notifications} />
          <CalendarPreview events={events} />
        </div>
      </div>
    </div>
  );
};