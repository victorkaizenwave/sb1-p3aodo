import React from 'react';
import { Search, Menu } from 'lucide-react';

interface Chat {
  id: string;
  name: string;
  type: 'direct' | 'group';
  lastMessage: string;
  timestamp: Date;
  unread: number;
  avatar: string;
}

interface MessageSidebarProps {
  chats: Chat[];
  selectedChat: string | null;
  onChatSelect: (chatId: string) => void;
  visible: boolean;
  onToggleVisibility: () => void;
}

export const MessageSidebar: React.FC<MessageSidebarProps> = ({
  chats,
  selectedChat,
  onChatSelect,
  visible,
  onToggleVisibility
}) => {
  if (!visible) return null;

  return (
    <div className="w-full md:w-80 border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search messages"
            className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {chats.map((chat) => (
          <button
            key={chat.id}
            onClick={() => onChatSelect(chat.id)}
            className={`w-full p-4 flex items-center space-x-3 hover:bg-gray-50 ${
              selectedChat === chat.id ? 'bg-blue-50' : ''
            }`}
          >
            <img
              src={chat.avatar}
              alt={chat.name}
              className="h-12 w-12 rounded-full"
            />
            <div className="flex-1 min-w-0">
              <div className="flex justify-between">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {chat.name}
                </p>
                <p className="text-xs text-gray-500">
                  {chat.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
              <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
            </div>
            {chat.unread > 0 && (
              <span className="bg-blue-500 text-white text-xs font-medium rounded-full h-5 w-5 flex items-center justify-center">
                {chat.unread}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};