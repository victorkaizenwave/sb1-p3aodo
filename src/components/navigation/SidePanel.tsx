import React from 'react';
import { 
  LayoutDashboard, Users, FolderKanban, Calendar, MessageCircle, 
  DollarSign, ChevronLeft, ChevronRight, BarChart2, Palette 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SidePanelProps {
  isCollapsed: boolean;
  onToggle: () => void;
  activeSection: string;
  onSectionChange: (section: string) => void;
  role?: 'client' | 'team' | 'executive';
}

export const SidePanel: React.FC<SidePanelProps> = ({
  isCollapsed,
  onToggle,
  activeSection,
  onSectionChange,
  role = 'client'
}) => {
  const getNavItems = () => {
    const baseItems = [
      { icon: LayoutDashboard, label: 'Dashboard', href: '#dashboard' },
      { icon: BarChart2, label: 'Analytics', href: '#analytics' },
      { icon: FolderKanban, label: 'Projects', href: '#projects' },
      { icon: Calendar, label: 'Calendar', href: '#calendar' },
      { icon: MessageCircle, label: 'Messages', href: '#messages' },
      { icon: DollarSign, label: 'Finances', href: '#finances' },
      { icon: Palette, label: 'Brand Resources', href: '#brand-resources' }
    ];

    if (role === 'team') {
      return [
        ...baseItems.slice(0, 1),
        { icon: Users, label: 'Clients', href: '#clients' },
        ...baseItems.slice(2, -1)
      ];
    }

    return baseItems;
  };

  const navItems = getNavItems();

  return (
    <motion.div
      initial={false}
      animate={{ width: isCollapsed ? 64 : 256 }}
      className="fixed top-0 left-0 h-full bg-white shadow-lg z-20"
    >
      <div className="flex flex-col h-full">
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <AnimatePresence mode="wait">
            {!isCollapsed && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="font-medium text-gray-900"
              >
                Menu
              </motion.span>
            )}
          </AnimatePresence>
          <button
            onClick={onToggle}
            className="p-1 rounded-md hover:bg-gray-100 transition-colors"
          >
            {isCollapsed ? (
              <ChevronRight className="h-5 w-5 text-gray-500" />
            ) : (
              <ChevronLeft className="h-5 w-5 text-gray-500" />
            )}
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.label.toLowerCase();
            return (
              <button
                key={item.href}
                onClick={() => onSectionChange(item.label.toLowerCase())}
                className={`flex items-center w-full p-2 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon className="h-5 w-5 flex-shrink-0" />
                <AnimatePresence mode="wait">
                  {!isCollapsed && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="ml-3 text-sm font-medium"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            );
          })}
        </nav>
      </div>
    </motion.div>
  );
};