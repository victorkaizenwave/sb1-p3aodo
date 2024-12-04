import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Breadcrumb } from '../components/navigation/Breadcrumb';
import { SidePanel } from '../components/navigation/SidePanel';
import { TeamDashboardOverview } from '../components/dashboard/TeamDashboardOverview';
import { ClientsList } from '../components/clients/ClientsList';
import { ProjectsDashboard } from '../components/projects/ProjectsDashboard';
import { CalendarDashboard } from '../components/calendar/CalendarDashboard';
import { MessagingDashboard } from '../components/messaging/MessagingDashboard';
import { FinancesDashboard } from '../components/finances/FinancesDashboard';
import { KaizenWaveLogo } from '../components/dashboard/KaizenWaveLogo';

export const TeamDashboard: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Team Member Dashboard', href: '/team' },
    { label: activeSection.charAt(0).toUpperCase() + activeSection.slice(1) },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SidePanel
        isCollapsed={isCollapsed}
        onToggle={() => setIsCollapsed(!isCollapsed)}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        role="team"
      />

      <div
        className={`transition-all duration-300 ${
          isCollapsed ? 'ml-16' : 'ml-64'
        }`}
      >
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <KaizenWaveLogo className="h-8 w-8" />
                <Breadcrumb items={breadcrumbItems} />
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-64 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex items-center space-x-3">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Profile"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Sarah Wilson</p>
                    <p className="text-xs text-gray-500">Senior Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {activeSection === 'dashboard' && <TeamDashboardOverview />}
              {activeSection === 'clients' && <ClientsList />}
              {activeSection === 'projects' && <ProjectsDashboard />}
              {activeSection === 'calendar' && <CalendarDashboard />}
              {activeSection === 'messages' && <MessagingDashboard />}
              {activeSection === 'finances' && <FinancesDashboard />}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};