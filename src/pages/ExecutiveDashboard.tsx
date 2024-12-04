import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, Trophy, CheckSquare, Users, Briefcase, 
  FileText, Tag, Archive, Database, Star, Mail,
  BarChart2, Activity, Target, TrendingUp, Menu
} from 'lucide-react';
import { KaizenWaveLogo } from '../components/dashboard/KaizenWaveLogo';
import { DatabaseTabs } from '../components/database/DatabaseTabs';
import { DashboardMetric } from '../components/dashboard/DashboardMetric';
import { ProjectProgress } from '../components/dashboard/ProjectProgress';
import { NotificationsList } from '../components/dashboard/NotificationsList';
import { CalendarPreview } from '../components/dashboard/CalendarPreview';

const sections = [
  {
    title: 'Company',
    items: [
      { id: 'agenda', label: 'Agenda', icon: Calendar },
      { id: 'goals', label: 'Goals', icon: Trophy },
      { id: 'internal-tasks', label: 'Internal Tasks', icon: CheckSquare },
      { id: 'team', label: 'Kaizen Wave Team', icon: Users }
    ]
  },
  {
    title: 'Clients & Projects',
    items: [
      { id: 'projects', label: 'Projects & Tasks', icon: Briefcase },
      { id: 'sales', label: 'Sales CRM', icon: FileText },
      { id: 'clients', label: 'Clients', icon: Mail }
    ]
  },
  {
    title: 'Resources',
    items: [
      { id: 'notes', label: 'Notes', icon: FileText },
      { id: 'resources', label: 'Business Resources', icon: Archive },
      { id: 'templates', label: 'Templates', icon: Archive },
      { id: 'products', label: 'Products Prices', icon: Tag },
      { id: 'team-dashboard', label: 'Team Dashboard', icon: Star }
    ]
  },
  {
    title: 'Databases',
    items: [
      { id: 'databases', label: 'All Databases', icon: Database }
    ]
  }
];

export const ExecutiveDashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <motion.div
        initial={false}
        animate={{ width: isSidebarOpen ? 280 : 0 }}
        className="bg-white shadow-lg fixed top-0 left-0 h-full z-20 overflow-hidden"
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <KaizenWaveLogo className="h-8 w-8" />
            <button onClick={() => setIsSidebarOpen(false)} className="text-gray-400">
              <Menu className="h-6 w-6" />
            </button>
          </div>
          <div className="space-y-8">
            {sections.map((section) => (
              <div key={section.title} className="space-y-2">
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  {section.title}
                </h3>
                <div className="space-y-1">
                  {section.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveSection(item.id)}
                        className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                          activeSection === item.id
                            ? 'bg-blue-50 text-blue-600'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <Icon className="h-5 w-5 flex-shrink-0" />
                        <span className="text-sm font-medium">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className={`flex-1 transition-all ${isSidebarOpen ? 'ml-[280px]' : 'ml-0'}`}>
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {!isSidebarOpen && (
                  <button onClick={() => setIsSidebarOpen(true)} className="text-gray-400">
                    <Menu className="h-6 w-6" />
                  </button>
                )}
                <h1 className="text-2xl font-bold text-gray-900">
                  {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
                </h1>
              </div>
              <div className="flex items-center space-x-4">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Profile"
                />
                <div>
                  <span className="text-sm font-medium text-gray-900">John Smith</span>
                  <p className="text-xs text-gray-500">Executive Director</p>
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
              {activeSection === 'databases' && <DatabaseTabs />}
              {/* Add other section components here */}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};