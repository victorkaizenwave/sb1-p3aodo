import React from 'react';

interface DataPreviewProps {
  data: any[];
}

export const DataPreview: React.FC<DataPreviewProps> = ({ data }) => {
  if (!data.length) return null;

  return (
    <div>
      <h3 className="text-sm font-medium text-gray-900 mb-2">Preview:</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              {data[0]?.map((header: any, index: number) => (
                <th
                  key={index}
                  className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.slice(1, 6).map((row: any[], rowIndex: number) => (
              <tr key={rowIndex}>
                {row.map((cell: any, cellIndex: number) => (
                  <td
                    key={cellIndex}
                    className="px-3 py-2 text-xs text-gray-900"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};