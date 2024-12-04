import React from 'react';
import { X, Video, Calendar as CalendarIcon, Bell, FileText, Clock, Users, Globe } from 'lucide-react';
import { format } from 'date-fns';
import { motion } from 'framer-motion';

interface Event {
  id: string;
  title: string;
  type: 'content' | 'meeting' | 'deadline' | 'custom';
  date: Date;
  description?: string;
  platform?: string;
  attendees?: string[];
}

interface EventDetailsProps {
  event: Event;
  onClose: () => void;
}

export const EventDetails: React.FC<EventDetailsProps> = ({ event, onClose }) => {
  const getEventIcon = () => {
    switch (event.type) {
      case 'meeting':
        return <Video className="h-6 w-6 text-blue-500" />;
      case 'content':
        return <CalendarIcon className="h-6 w-6 text-green-500" />;
      case 'deadline':
        return <Bell className="h-6 w-6 text-yellow-500" />;
      default:
        return <FileText className="h-6 w-6 text-gray-500" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed inset-0 z-50 overflow-y-auto"
    >
      <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-black bg-opacity-30 transition-opacity"
          onClick={onClose}
        />

        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 sm:mx-0 sm:h-10 sm:w-10">
              {getEventIcon()}
            </div>
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {event.title}
              </h3>
              <div className="mt-2">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span>{format(event.date, 'MMMM d, yyyy h:mm a')}</span>
                </div>

                {event.description && (
                  <p className="mt-4 text-sm text-gray-600">
                    {event.description}
                  </p>
                )}

                {event.platform && (
                  <div className="mt-4 flex items-center space-x-2 text-sm text-gray-500">
                    <Globe className="h-4 w-4" />
                    <span>Platform: {event.platform}</span>
                  </div>
                )}

                {event.attendees && event.attendees.length > 0 && (
                  <div className="mt-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Users className="h-4 w-4" />
                      <span>Attendees:</span>
                    </div>
                    <div className="mt-2 space-y-1">
                      {event.attendees.map((attendee, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2 text-sm text-gray-600"
                        >
                          <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium">
                            {attendee.charAt(0)}
                          </div>
                          <span>{attendee}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Edit Event
            </button>
            <button
              type="button"
              onClick={onClose}
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:w-auto sm:text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};