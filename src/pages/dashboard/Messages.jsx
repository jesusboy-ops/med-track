import { useState } from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState('');

  const conversations = [
    {
      id: 1,
      name: 'John Doe',
      lastMessage: 'Thank you for the prescription',
      time: '10:30 AM',
      unread: 2,
    },
    {
      id: 2,
      name: 'Jane Smith',
      lastMessage: 'When can I pick up my medication?',
      time: '9:15 AM',
      unread: 0,
    },
    {
      id: 3,
      name: 'Mike Johnson',
      lastMessage: 'I need a refill',
      time: 'Yesterday',
      unread: 1,
    },
  ];

  const messages = [
    { id: 1, sender: 'patient', text: 'Hello, I need a refill', time: '10:25 AM' },
    { id: 2, sender: 'me', text: 'Sure, I can help with that', time: '10:27 AM' },
    { id: 3, sender: 'patient', text: 'Thank you for the prescription', time: '10:30 AM' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Messages</h1>
        <p className="text-gray-600">Communicate with your patients</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card padding="medium" className="lg:col-span-1">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Conversations</h2>
          <div className="space-y-2">
            {conversations.map((conv) => (
              <div
                key={conv.id}
                onClick={() => setSelectedChat(conv.id)}
                className={`p-3 rounded-lg cursor-pointer transition-colors ${
                  selectedChat === conv.id ? 'bg-blue-50' : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <p className="font-medium text-gray-900">{conv.name}</p>
                  {conv.unread > 0 && (
                    <span className="bg-blue-800 text-white text-xs px-2 py-1 rounded-full">
                      {conv.unread}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600 truncate">{conv.lastMessage}</p>
                <p className="text-xs text-gray-500 mt-1">{conv.time}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card padding="medium" className="lg:col-span-2">
          {selectedChat ? (
            <div className="flex flex-col h-[600px]">
              <div className="border-b pb-4 mb-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  {conversations.find((c) => c.id === selectedChat)?.name}
                </h2>
              </div>

              <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs px-4 py-2 rounded-lg ${
                        msg.sender === 'me'
                          ? 'bg-blue-800 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <p>{msg.text}</p>
                      <p className={`text-xs mt-1 ${msg.sender === 'me' ? 'text-blue-100' : 'text-gray-500'}`}>
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button>
                  <PaperAirplaneIcon className="h-5 w-5" />
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-[600px] text-gray-500">
              Select a conversation to start messaging
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Messages;
