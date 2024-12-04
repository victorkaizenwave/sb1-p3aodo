import React, { useState } from 'react';
import { BaseTable } from './BaseTable';
import { mockProjects } from '../../../data/mockData';
import { format } from 'date-fns';

export const ProjectsTable: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const columns = [
    { key: 'name', label: 'Project Name' },
    { key: 'type', label: 'Type' },
    { key: 'status', label: 'Status' },
    { key: 'progress', label: 'Progress' },
    { key: 'startDate', label: 'Start Date' },
    { key: 'dueDate', label: 'Due Date' },
    { key: 'budget', label: 'Budget' }
  ];

  const formattedData = mockProjects.map(project => ({
    ...project,
    startDate: format(project.startDate, 'MMM d, yyyy'),
    dueDate: format(project.dueDate, 'MMM d, yyyy'),
    budget: `$${project.budget.toLocaleString()}`,
    progress: (
      <div className="flex items-center space-x-2">
        <div className="flex-1 h-2 bg-gray-200 rounded-full">
          <div
            className="h-2 bg-blue-600 rounded-full"
            style={{ width: `${project.progress}%` }}
          />
        </div>
        <span className="text-sm text-gray-500">{project.progress}%</span>
      </div>
    ),
    status: (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
        project.status === 'completed' ? 'bg-green-100 text-green-800' :
        project.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
        project.status === 'review' ? 'bg-yellow-100 text-yellow-800' :
        'bg-gray-100 text-gray-800'
      }`}>
        {project.status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
      </span>
    )
  }));

  const filteredData = formattedData.filter(project =>
    Object.values(project).some(value =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <BaseTable
      title="Projects Database"
      columns={columns}
      data={filteredData}
      onSearch={setSearchQuery}
      onExport={() => console.log('Exporting projects data...')}
    />
  );
};