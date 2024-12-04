import React, { useState } from 'react';
import { format } from 'date-fns';
import { Download, Filter } from 'lucide-react';

interface Transaction {
  id: string;
  date: Date;
  description: string;
  amount: number;
  status: 'paid' | 'pending' | 'scheduled';
  project: string;
}

interface TransactionsListProps {
  transactions: Transaction[];
}

export const TransactionsList: React.FC<TransactionsListProps> = ({ transactions }) => {
  const [filter, setFilter] = useState('all');

  const getStatusColor = (status: Transaction['status']) => {
    switch (status) {
      case 'paid':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'scheduled':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-medium text-gray-900">Transactions</h2>
          <div className="flex items-center space-x-2">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="text-sm rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="all">All Transactions</option>
              <option value="paid">Paid</option>
              <option value="pending">Pending</option>
              <option value="scheduled">Scheduled</option>
            </select>
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <Filter className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">
                    {transaction.description}
                  </p>
                  <span className="text-sm font-medium text-gray-900">
                    ${transaction.amount.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500">
                      {format(transaction.date, 'MMM d, yyyy')}
                    </span>
                    <span className="text-xs text-gray-500">•</span>
                    <span className="text-xs text-gray-500">{transaction.project}</span>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full capitalize ${getStatusColor(
                      transaction.status
                    )}`}
                  >
                    {transaction.status}
                  </span>
                </div>
              </div>
              <button className="ml-4 p-2 text-gray-400 hover:text-gray-500">
                <Download className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};