import React from 'react';
import { Search, Filter, Download } from 'lucide-react';

interface BaseTableProps {
  title: string;
  columns: { key: string; label: string }[];
  data: any[];
  onSearch?: (query: string) => void;
  onFilter?: (filter: string) => void;
  onExport?: () => void;
}

export const BaseTable: React.FC<BaseTableProps> = ({
  title,
  columns,
  data,
  onSearch,
  onFilter,
  onExport
}) => {
  return (
    <div className="p-4 md:p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 mb-6">
        <h2 className="text-lg font-medium text-gray-900">{title}</h2>
        <div className="flex items-center space-x-2 md:space-x-4">
          <div className="relative flex-1 md:flex-none">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => onSearch?.(e.target.value)}
              className="w-full md:w-auto pl-9 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="p-2 text-gray-400 hover:text-gray-500">
            <Filter className="h-4 w-4" />
          </button>
          <button
            onClick={() => onExport?.()}
            className="p-2 text-gray-400 hover:text-gray-500"
          >
            <Download className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto -mx-4 md:mx-0">
        <div className="inline-block min-w-full align-middle">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                {columns.map((column) => (
                  <th
                    key={column.key}
                    className="px-3 md:px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((row, index) => (
                <tr key={index}>
                  {columns.map((column) => (
                    <td key={column.key} className="px-3 md:px-6 py-3 whitespace-nowrap text-xs md:text-sm text-gray-900">
                      {row[column.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};