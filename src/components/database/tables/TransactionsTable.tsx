import React, { useState } from 'react';
import { BaseTable } from './BaseTable';
import { format } from 'date-fns';

export const TransactionsTable: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const mockTransactions = [
    {
      id: '1',
      type: 'payment',
      amount: 2500,
      status: 'completed',
      date: new Date('2024-02-01'),
      description: 'Q1 Marketing Campaign Payment',
      client: 'Bright Future Marketing'
    },
    // Add more mock transactions...
  ];

  const columns = [
    { key: 'type', label: 'Type' },
    { key: 'amount', label: 'Amount' },
    { key: 'status', label: 'Status' },
    { key: 'date', label: 'Date' },
    { key: 'description', label: 'Description' },
    { key: 'client', label: 'Client' }
  ];

  const formattedData = mockTransactions.map(transaction => ({
    ...transaction,
    amount: `$${transaction.amount.toLocaleString()}`,
    date: format(transaction.date, 'MMM d, yyyy'),
    type: (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
        transaction.type === 'payment' ? 'bg-green-100 text-green-800' :
        transaction.type === 'invoice' ? 'bg-blue-100 text-blue-800' :
        'bg-red-100 text-red-800'
      }`}>
        {transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}
      </span>
    ),
    status: (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
        transaction.status === 'completed' ? 'bg-green-100 text-green-800' :
        transaction.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
        'bg-red-100 text-red-800'
      }`}>
        {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
      </span>
    )
  }));

  const filteredData = formattedData.filter(transaction =>
    Object.values(transaction).some(value =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <BaseTable
      title="Transactions Database"
      columns={columns}
      data={filteredData}
      onSearch={setSearchQuery}
      onExport={() => console.log('Exporting transactions data...')}
    />
  );
};