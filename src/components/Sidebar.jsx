import { Link, useLocation } from 'react-router-dom';
import {
  HomeIcon,
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';

const Sidebar = () => {
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
    { name: 'Patients', href: '/dashboard/patients', icon: UserGroupIcon },
    { name: 'Messages', href: '/dashboard/messages', icon: ChatBubbleLeftRightIcon },
    { name: 'Analytics', href: '/dashboard/analytics', icon: ChartBarIcon },
    { name: 'Settings', href: '/dashboard/settings', icon: Cog6ToothIcon },
  ];

  return (
    <aside className="w-64 bg-white shadow-lg h-screen sticky top-0">
      <div className="p-6">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">M</span>
          </div>
          <span className="text-2xl font-bold text-blue-800">MedTrack</span>
        </Link>
      </div>

      <nav className="px-4 space-y-2">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-blue-800 text-white'
                  : 'text-gray-700 hover:bg-blue-50 hover:text-blue-800'
              }`}
            >
              <item.icon className="h-6 w-6" />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
