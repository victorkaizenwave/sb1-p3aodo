import React from 'react';
import { FileText, Download } from 'lucide-react';

export const InvoiceSection: React.FC = () => {
  const invoices = [
    {
      id: '1',
      name: 'January 2024 Invoice',
      date: 'Jan 31, 2024',
      amount: 2500
    },
    {
      id: '2',
      name: 'December 2023 Invoice',
      date: 'Dec 31, 2023',
      amount: 3200
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Invoices</h2>
      <div className="space-y-3">
        {invoices.map((invoice) => (
          <div
            key={invoice.id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <FileText className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{invoice.name}</p>
                <p className="text-xs text-gray-500">{invoice.date}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-900">
                ${invoice.amount.toLocaleString()}
              </span>
              <button className="p-2 text-gray-400 hover:text-gray-500">
                <Download className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};