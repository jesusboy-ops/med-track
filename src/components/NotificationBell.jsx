import { useState } from 'react';
import { BellIcon } from '@heroicons/react/24/outline';

const NotificationBell = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications] = useState([
    { id: 1, title: 'New patient registered', time: '5 min ago', unread: true },
    { id: 2, title: 'Prescription refill request', time: '1 hour ago', unread: true },
    { id: 3, title: 'Inventory low alert', time: '2 hours ago', unread: false },
  ]);

  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-gray-600 hover:text-blue-800 transition-colors duration-200"
      >
        <BellIcon className="h-6 w-6" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl z-50">
          <div className="p-4 border-b">
            <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
          </div>
          <div className="max-h-96 overflow-y-auto">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 border-b hover:bg-gray-50 cursor-pointer ${
                  notification.unread ? 'bg-blue-50' : ''
                }`}
              >
                <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
              </div>
            ))}
          </div>
          <div className="p-4 text-center">
            <button className="text-sm text-blue-800 hover:text-blue-900 font-medium">
              View all notifications
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
