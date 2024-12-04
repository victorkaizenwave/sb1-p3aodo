import React, { useState } from 'react';
import { BaseTable } from './BaseTable';
import { mockClients } from '../../../data/mockData';
import { format } from 'date-fns';

export const ClientsTable: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const columns = [
    { key: 'name', label: 'Client Name' },
    { key: 'industry', label: 'Industry' },
    { key: 'contactPerson', label: 'Contact Person' },
    { key: 'email', label: 'Email' },
    { key: 'phone', label: 'Phone' },
    { key: 'status', label: 'Status' },
    { key: 'createdAt', label: 'Created At' }
  ];

  const formattedData = mockClients.map(client => ({
    ...client,
    createdAt: format(client.createdAt, 'MMM d, yyyy'),
    status: (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
        client.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
      }`}>
        {client.status.charAt(0).toUpperCase() + client.status.slice(1)}
      </span>
    )
  }));

  const filteredData = formattedData.filter(client =>
    Object.values(client).some(value =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <BaseTable
      title="Clients Database"
      columns={columns}
      data={filteredData}
      onSearch={setSearchQuery}
      onExport={() => console.log('Exporting clients data...')}
    />
  );
};