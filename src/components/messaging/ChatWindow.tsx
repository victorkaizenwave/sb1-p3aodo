import React, { useState } from 'react';
import { Menu, ArrowUp } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  sender: string;
  timestamp: Date;
  isCurrentUser: boolean;
}

interface Chat {
  id: string;
  name: string;
  type: 'direct' | 'group';
  avatar: string;
}

interface ChatWindowProps {
  messages: Message[];
  selectedChat: Chat | undefined;
  onToggleSidebar: () => void;
  showSidebar: boolean;
}

export const ChatWindow: React.FC<ChatWindowProps> = ({
  messages,
  selectedChat,
  onToggleSidebar,
  showSidebar
}) => {
  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      // Handle sending message
      setNewMessage('');
    }
  };

  if (!selectedChat) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <p className="text-gray-500">Select a conversation to start messaging</p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex items-center px-4 py-3 border-b border-gray-200">
        <button
          onClick={onToggleSidebar}
          className="md:hidden p-2 -ml-2 text-gray-500 hover:text-gray-600"
        >
          <Menu className="h-6 w-6" />
        </button>
        <img
          src={selectedChat.avatar}
          alt={selectedChat.name}
          className="h-8 w-8 rounded-full"
        />
        <h2 className="ml-3 font-medium">{selectedChat.name}</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isCurrentUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                message.isCurrentUser
                  ? 'bg-blue-500 text-white rounded-br-none'
                  : 'bg-gray-100 text-gray-900 rounded-bl-none'
              }`}
            >
              <p className="text-sm">{message.content}</p>
              <p
                className={`text-xs mt-1 ${
                  message.isCurrentUser ? 'text-blue-100' : 'text-gray-500'
                }`}
              >
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="iMessage"
            className="flex-1 px-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {newMessage && (
            <button
              type="submit"
              className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          )}
        </div>
      </form>
    </div>
  );
};