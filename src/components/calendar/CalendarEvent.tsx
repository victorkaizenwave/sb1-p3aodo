import React from 'react';
import { Video, Calendar as CalendarIcon, Bell, FileText } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  type: 'content' | 'meeting' | 'deadline' | 'custom';
  date: Date;
  description?: string;
  platform?: string;
  attendees?: string[];
}

interface CalendarEventProps {
  event: Event;
  onClick: () => void;
}

export const CalendarEvent: React.FC<CalendarEventProps> = ({ event, onClick }) => {
  const getEventStyles = () => {
    switch (event.type) {
      case 'meeting':
        return {
          bg: 'bg-blue-100',
          text: 'text-blue-800',
          icon: <Video className="h-3 w-3 text-blue-500" />
        };
      case 'content':
        return {
          bg: 'bg-green-100',
          text: 'text-green-800',
          icon: <CalendarIcon className="h-3 w-3 text-green-500" />
        };
      case 'deadline':
        return {
          bg: 'bg-yellow-100',
          text: 'text-yellow-800',
          icon: <Bell className="h-3 w-3 text-yellow-500" />
        };
      default:
        return {
          bg: 'bg-gray-100',
          text: 'text-gray-800',
          icon: <FileText className="h-3 w-3 text-gray-500" />
        };
    }
  };

  const styles = getEventStyles();

  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center space-x-1 px-2 py-1 rounded text-left ${styles.bg} ${styles.text} text-xs truncate`}
    >
      {styles.icon}
      <span className="truncate">{event.title}</span>
    </button>
  );
};