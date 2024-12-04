import React, { useState } from 'react';
import { ChatWindow } from './ChatWindow';
import { MessageSidebar } from './MessageSidebar';

export const MessagingDashboard: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [showSidebar, setShowSidebar] = useState(true);

  const chats = [
    {
      id: '1',
      name: 'Sarah Miller',
      type: 'direct',
      lastMessage: 'The new campaign looks great!',
      timestamp: new Date(),
      unread: 2,
      avatar: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    {
      id: '2',
      name: 'Marketing Team',
      type: 'group',
      lastMessage: 'Lets review the strategy tomorrow',
      timestamp: new Date(),
      unread: 0,
      avatar: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    }
  ];

  const messages = [
    {
      id: '1',
      content: 'Hi! How is the new campaign going?',
      sender: 'Sarah Miller',
      timestamp: new Date('2024-01-20T10:00:00'),
      isCurrentUser: false
    },
    {
      id: '2',
      content: 'Its going great! We have seen a 25% increase in engagement.',
      sender: 'You',
      timestamp: new Date('2024-01-20T10:05:00'),
      isCurrentUser: true
    }
  ];

  return (
    <div className="h-[calc(100vh-12rem)] bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="flex h-full">
        <MessageSidebar
          chats={chats}
          selectedChat={selectedChat}
          onChatSelect={setSelectedChat}
          visible={showSidebar}
          onToggleVisibility={() => setShowSidebar(!showSidebar)}
        />
        <ChatWindow
          messages={messages}
          selectedChat={chats.find(chat => chat.id === selectedChat)}
          onToggleSidebar={() => setShowSidebar(!showSidebar)}
          showSidebar={showSidebar}
        />
      </div>
    </div>
  );
};