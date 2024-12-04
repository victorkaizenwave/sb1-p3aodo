import React, { useState } from 'react';
import { FileText, Download, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ReportGenerator: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickReports = [
    { label: 'Last Month', value: 'last-month' },
    { label: 'Last 3 Months', value: 'last-quarter' },
    { label: 'Last Year', value: 'last-year' }
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        <FileText className="h-5 w-5 mr-2" />
        Generate Report
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg z-10"
          >
            <div className="p-4 space-y-2">
              <h4 className="text-sm font-medium text-gray-900">Quick Reports</h4>
              {quickReports.map((report) => (
                <button
                  key={report.value}
                  className="flex items-center justify-between w-full p-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
                >
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                    {report.label}
                  </span>
                  <Download className="h-4 w-4 text-gray-400" />
                </button>
              ))}
              <hr className="my-2" />
              <button className="w-full text-left text-sm text-blue-600 hover:text-blue-700">
                Create Custom Report
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};