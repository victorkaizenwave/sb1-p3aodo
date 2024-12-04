import React from 'react';
import { format } from 'date-fns';

interface ChatBubbleProps {
  message: {
    id: string;
    content: string;
    sender: string;
    timestamp: Date;
    isCurrentUser: boolean;
  };
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
  return (
    <div
      className={`flex ${message.isCurrentUser ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`max-w-[70%] rounded-2xl px-4 py-2 ${
          message.isCurrentUser
            ? 'bg-blue-500 text-white rounded-br-none'
            : 'bg-gray-100 text-gray-900 rounded-bl-none'
        }`}
      >
        {!message.isCurrentUser && (
          <p className="text-xs font-medium text-gray-500 mb-1">{message.sender}</p>
        )}
        <p className="text-sm">{message.content}</p>
        <p
          className={`text-xs mt-1 ${
            message.isCurrentUser ? 'text-blue-100' : 'text-gray-500'
          }`}
        >
          {format(message.timestamp, 'h:mm a')}
        </p>
      </div>
    </div>
  );
};