import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertCircle, CheckCircle } from 'lucide-react';
import { FileUpload } from './FileUpload';
import { DataPreview } from './DataPreview';
import { parseFile } from '../../utils/fileParser';

interface ImportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onImport: (data: any[]) => void;
  tableType: string;
}

export const ImportModal: React.FC<ImportModalProps> = ({
  isOpen,
  onClose,
  onImport,
  tableType
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [preview, setPreview] = useState<any[] | null>(null);

  const handleFileSelect = async (file: File) => {
    try {
      setFile(file);
      setError(null);
      const data = await parseFile(file);
      setPreview(data);
    } catch (err) {
      setError((err as Error).message);
      setFile(null);
      setPreview(null);
    }
  };

  const handleImport = async () => {
    if (!file || !preview) return;
    
    try {
      const data = await parseFile(file);
      onImport(data);
      onClose();
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black bg-opacity-30"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-2xl rounded-xl bg-white p-6 shadow-lg"
            >
              <button
                onClick={onClose}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-500"
              >
                <X className="h-5 w-5" />
              </button>

              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Import {tableType} Data
              </h2>

              <div className="space-y-6">
                <FileUpload
                  onFileSelect={handleFileSelect}
                  acceptedFormats=".xlsx,.xls,.csv,.html,.htm"
                  description="Excel (.xlsx, .xls), CSV (.csv), or HTML (.html, .htm)"
                />

                {error && (
                  <div className="flex items-center space-x-2 text-red-600">
                    <AlertCircle className="h-5 w-5" />
                    <span className="text-sm">{error}</span>
                  </div>
                )}

                {file && !error && (
                  <div className="flex items-center space-x-2 text-green-600">
                    <CheckCircle className="h-5 w-5" />
                    <span className="text-sm">{file.name} selected</span>
                  </div>
                )}

                {preview && <DataPreview data={preview} />}

                <div className="flex justify-end space-x-3">
                  <button
                    onClick={onClose}
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleImport}
                    disabled={!file || !!error}
                    className={`px-4 py-2 text-sm font-medium rounded-md ${
                      !file || !!error
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    Import Data
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};