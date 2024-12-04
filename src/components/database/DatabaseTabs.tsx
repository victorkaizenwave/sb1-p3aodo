import React, { useState } from 'react';
import { Database, Users, Briefcase, FileText, MessageSquare, DollarSign, Upload, Menu } from 'lucide-react';
import { ClientsTable } from './tables/ClientsTable';
import { ProjectsTable } from './tables/ProjectsTable';
import { TasksTable } from './tables/TasksTable';
import { CommunicationsTable } from './tables/CommunicationsTable';
import { TransactionsTable } from './tables/TransactionsTable';
import { ImportModal } from './ImportModal';

const tabs = [
  { id: 'clients', label: 'Clients', icon: Users },
  { id: 'projects', label: 'Projects', icon: Briefcase },
  { id: 'tasks', label: 'Tasks', icon: FileText },
  { id: 'communications', label: 'Communications', icon: MessageSquare },
  { id: 'transactions', label: 'Transactions', icon: DollarSign },
];

export const DatabaseTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('clients');
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleImportData = (data: any[]) => {
    console.log(`Importing ${activeTab} data:`, data);
    // Here you would handle the imported data based on the active tab
  };

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div
        className={`${
          isMenuOpen ? 'w-64' : 'w-16'
        } bg-white shadow-lg transition-all duration-300 flex flex-col`}
      >
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <span className={`font-medium ${isMenuOpen ? 'block' : 'hidden'}`}>
            Database
          </span>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-1 hover:bg-gray-100 rounded-md"
          >
            <Menu className="h-5 w-5 text-gray-500" />
          </button>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${
                  activeTab === tab.id
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                } flex items-center space-x-2 w-full p-2 rounded-md transition-colors`}
              >
                <Icon className="h-5 w-5 flex-shrink-0" />
                {isMenuOpen && <span>{tab.label}</span>}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-50">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">
              {tabs.find((tab) => tab.id === activeTab)?.label}
            </h1>
            <button
              onClick={() => setIsImportModalOpen(true)}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              <Upload className="h-5 w-5 mr-2" />
              <span>Import Data</span>
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {activeTab === 'clients' && <ClientsTable />}
            {activeTab === 'projects' && <ProjectsTable />}
            {activeTab === 'tasks' && <TasksTable />}
            {activeTab === 'communications' && <CommunicationsTable />}
            {activeTab === 'transactions' && <TransactionsTable />}
          </div>
        </div>
      </div>

      <ImportModal
        isOpen={isImportModalOpen}
        onClose={() => setIsImportModalOpen(false)}
        onImport={handleImportData}
        tableType={activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
      />
    </div>
  );
};