import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, addMonths, subMonths } from 'date-fns';
import { ChevronLeft, ChevronRight, Plus, Calendar as CalendarIcon, Video, Users, Bell } from 'lucide-react';
import { CalendarEvent } from './CalendarEvent';
import { NewEventModal } from './NewEventModal';
import { EventDetails } from './EventDetails';

interface Event {
  id: string;
  title: string;
  type: 'content' | 'meeting' | 'deadline' | 'custom';
  date: Date;
  description?: string;
  platform?: string;
  attendees?: string[];
}

export const CalendarDashboard: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isNewEventModalOpen, setIsNewEventModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [view, setView] = useState<'month' | 'week' | 'day'>('month');

  // Sample events data
  const events: Event[] = [
    {
      id: '1',
      title: 'Instagram Post',
      type: 'content',
      date: new Date(2024, 1, 15),
      platform: 'Instagram',
      description: 'New product launch announcement'
    },
    {
      id: '2',
      title: 'Client Meeting',
      type: 'meeting',
      date: new Date(2024, 1, 18),
      description: 'Monthly progress review',
      attendees: ['Sarah Miller', 'John Davis']
    },
    {
      id: '3',
      title: 'Campaign Deadline',
      type: 'deadline',
      date: new Date(2024, 1, 25),
      description: 'Q1 Marketing Campaign completion'
    }
  ];

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const handlePreviousMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const handleNextMonth = () => setCurrentDate(addMonths(currentDate, 1));

  const getEventsForDate = (date: Date) => {
    return events.filter(event => isSameDay(new Date(event.date), date));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-bold text-gray-900">Calendar</h2>
          <div className="flex space-x-2">
            {(['month', 'week', 'day'] as const).map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`px-3 py-1 text-sm rounded-md ${
                  view === v
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {v.charAt(0).toUpperCase() + v.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsNewEventModalOpen(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
        >
          <Plus className="h-5 w-5 mr-2" />
          New Event
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={handlePreviousMonth}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
            <h2 className="text-xl font-semibold text-gray-900">
              {format(currentDate, 'MMMM yyyy')}
            </h2>
            <button
              onClick={handleNextMonth}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <span className="flex items-center space-x-1">
              <Video className="h-4 w-4 text-blue-500" />
              <span className="text-sm text-gray-600">Meetings</span>
            </span>
            <span className="flex items-center space-x-1">
              <CalendarIcon className="h-4 w-4 text-green-500" />
              <span className="text-sm text-gray-600">Content</span>
            </span>
            <span className="flex items-center space-x-1">
              <Bell className="h-4 w-4 text-yellow-500" />
              <span className="text-sm text-gray-600">Deadlines</span>
            </span>
          </div>
        </div>

        <div className="border-t border-gray-200">
          <div className="grid grid-cols-7 gap-px">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div
                key={day}
                className="py-2 text-center text-sm font-medium text-gray-500 bg-gray-50"
              >
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-px bg-gray-200">
            {daysInMonth.map((date, idx) => {
              const dayEvents = getEventsForDate(date);
              return (
                <div
                  key={idx}
                  className={`min-h-[120px] bg-white p-2 ${
                    !isSameMonth(date, currentDate)
                      ? 'text-gray-400 bg-gray-50'
                      : 'text-gray-900'
                  }`}
                  onClick={() => setSelectedDate(date)}
                >
                  <div className="font-medium text-sm">
                    {format(date, 'd')}
                  </div>
                  <div className="mt-1 space-y-1">
                    {dayEvents.map((event) => (
                      <CalendarEvent
                        key={event.id}
                        event={event}
                        onClick={() => setSelectedEvent(event)}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <NewEventModal
        isOpen={isNewEventModalOpen}
        onClose={() => setIsNewEventModalOpen(false)}
        selectedDate={selectedDate}
      />

      {selectedEvent && (
        <EventDetails
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
};