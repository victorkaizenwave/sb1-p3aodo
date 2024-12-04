import React, { useState } from 'react';
import { CheckCircle, Clock, AlertCircle } from 'lucide-react';

export const TasksDashboard: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const tasks = [
    {
      id: '1',
      title: 'Design Homepage Mockup',
      description: 'Create wireframes and high-fidelity designs for the new homepage',
      status: 'in-progress',
      priority: 'high',
      dueDate: '2024-02-28',
      assignedBy: 'John Davis',
      project: 'Website Redesign'
    },
    {
      id: '2',
      title: 'Content Review',
      description: 'Review and approve content for social media campaign',
      status: 'pending',
      priority: 'medium',
      dueDate: '2024-03-01',
      assignedBy: 'Emma Thompson',
      project: 'Q1 Marketing Campaign'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'in-progress':
        return <Clock className="h-5 w-5 text-blue-500" />;
      case 'pending':
        return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Tasks</h2>
        <div className="flex items-center space-x-4">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="all">All Tasks</option>
            <option value="in-progress">In Progress</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            New Task
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="divide-y divide-gray-200">
          {tasks.map((task) => (
            <div key={task.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  {getStatusIcon(task.status)}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{task.title}</h3>
                    <p className="mt-1 text-sm text-gray-500">{task.description}</p>
                    <div className="mt-2 flex items-center space-x-4">
                      <span className="text-sm text-gray-500">Due: {task.dueDate}</span>
                      <span className="text-sm text-gray-500">Project: {task.project}</span>
                      <span className="text-sm text-gray-500">Assigned by: {task.assignedBy}</span>
                    </div>
                  </div>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    task.priority === 'high'
                      ? 'bg-red-100 text-red-800'
                      : task.priority === 'medium'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-green-100 text-green-800'
                  }`}
                >
                  {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)} Priority
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};