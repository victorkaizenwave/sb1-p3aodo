import React from 'react';
import { Upload } from 'lucide-react';

interface ImportButtonProps {
  onClick: () => void;
}

export const ImportButton: React.FC<ImportButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
    >
      <Upload className="h-5 w-5 mr-2" />
      <span>Import Data</span>
    </button>
  );
};