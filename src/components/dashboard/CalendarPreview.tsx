import React from 'react';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';
import { format } from 'date-fns';

interface Event {
  id: string;
  title: string;
  start: Date;
  type: 'meeting' | 'task' | 'milestone';
}

interface CalendarPreviewProps {
  events: Event[];
}

export const CalendarPreview: React.FC<CalendarPreviewProps> = ({ events }) => {
  const getEventColor = (type: Event['type']) => {
    switch (type) {
      case 'meeting':
        return 'bg-blue-100 text-blue-800';
      case 'task':
        return 'bg-green-100 text-green-800';
      case 'milestone':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium text-gray-900">Upcoming Events</h2>
        <CalendarIcon className="h-5 w-5 text-gray-400" />
      </div>
      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <div className="flex-shrink-0">
              <Clock className="h-5 w-5 text-gray-400" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">{event.title}</p>
              <div className="flex items-center mt-1">
                <span className={`text-xs px-2 py-1 rounded-full ${getEventColor(event.type)}`}>
                  {format(event.start, 'MMM d, h:mm a')}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};