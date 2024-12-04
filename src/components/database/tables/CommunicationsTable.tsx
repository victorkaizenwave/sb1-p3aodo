import React, { useState } from 'react';
import { BaseTable } from './BaseTable';
import { format } from 'date-fns';

export const CommunicationsTable: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const mockCommunications = [
    {
      id: '1',
      type: 'message',
      sender: 'Sarah Miller',
      recipients: ['John Davis'],
      content: 'Updated the campaign metrics',
      createdAt: new Date('2024-02-20T10:00:00'),
      project: 'Q1 Marketing Campaign'
    },
    // Add more mock communications...
  ];

  const columns = [
    { key: 'type', label: 'Type' },
    { key: 'sender', label: 'From' },
    { key: 'recipients', label: 'To' },
    { key: 'content', label: 'Content' },
    { key: 'createdAt', label: 'Date' },
    { key: 'project', label: 'Project' }
  ];

  const formattedData = mockCommunications.map(comm => ({
    ...comm,
    recipients: comm.recipients.join(', '),
    createdAt: format(comm.createdAt, 'MMM d, yyyy h:mm a'),
    type: (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
        comm.type === 'message' ? 'bg-blue-100 text-blue-800' :
        comm.type === 'email' ? 'bg-green-100 text-green-800' :
        'bg-purple-100 text-purple-800'
      }`}>
        {comm.type.charAt(0).toUpperCase() + comm.type.slice(1)}
      </span>
    )
  }));

  const filteredData = formattedData.filter(comm =>
    Object.values(comm).some(value =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <BaseTable
      title="Communications Database"
      columns={columns}
      data={filteredData}
      onSearch={setSearchQuery}
      onExport={() => console.log('Exporting communications data...')}
    />
  );
};