import React, { useState } from 'react';
import { BaseTable } from './BaseTable';
import { format } from 'date-fns';

export const TasksTable: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const mockTasks = [
    {
      id: '1',
      title: 'Create social media content',
      status: 'in-progress',
      priority: 'high',
      dueDate: new Date('2024-03-01'),
      assignedTo: 'Sarah Miller',
      project: 'Q1 Marketing Campaign'
    },
    // Add more mock tasks...
  ];

  const columns = [
    { key: 'title', label: 'Task' },
    { key: 'status', label: 'Status' },
    { key: 'priority', label: 'Priority' },
    { key: 'dueDate', label: 'Due Date' },
    { key: 'assignedTo', label: 'Assigned To' },
    { key: 'project', label: 'Project' }
  ];

  const formattedData = mockTasks.map(task => ({
    ...task,
    dueDate: format(task.dueDate, 'MMM d, yyyy'),
    status: (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
        task.status === 'completed' ? 'bg-green-100 text-green-800' :
        task.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
        'bg-yellow-100 text-yellow-800'
      }`}>
        {task.status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
      </span>
    ),
    priority: (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
        task.priority === 'high' ? 'bg-red-100 text-red-800' :
        task.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
        'bg-green-100 text-green-800'
      }`}>
        {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
      </span>
    )
  }));

  const filteredData = formattedData.filter(task =>
    Object.values(task).some(value =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <BaseTable
      title="Tasks Database"
      columns={columns}
      data={filteredData}
      onSearch={setSearchQuery}
      onExport={() => console.log('Exporting tasks data...')}
    />
  );
};