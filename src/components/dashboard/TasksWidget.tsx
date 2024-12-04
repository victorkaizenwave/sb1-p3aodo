import React from 'react';
import { Clock, AlertCircle, ArrowRight } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  priority: string;
  dueDate: string;
  client: string;
  status: string;
}

interface TasksWidgetProps {
  tasks: Task[];
}

export const TasksWidget: React.FC<TasksWidgetProps> = ({ tasks }) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'text-red-600 bg-red-50';
      case 'medium':
        return 'text-yellow-600 bg-yellow-50';
      case 'low':
        return 'text-green-600 bg-green-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium text-gray-900">Active Tasks</h2>
        <button className="text-sm text-blue-600 hover:text-blue-700 flex items-center">
          View All <ArrowRight className="h-4 w-4 ml-1" />
        </button>
      </div>
      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-900">{task.title}</h3>
                <p className="mt-1 text-xs text-gray-500">Client: {task.client}</p>
                <div className="mt-2 flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="text-xs text-gray-500">Due: {task.dueDate}</span>
                </div>
              </div>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(
                  task.priority
                )}`}
              >
                {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};