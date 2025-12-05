import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import NotificationBell from '../components/NotificationBell';
import SearchBar from '../components/SearchBar';
import Button from '../components/ui/Button';
import { useAuth } from '../context/AuthContext';

const DashboardLayout = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-8 py-4">
            <div className="flex-1 max-w-2xl">
              <SearchBar placeholder="Search patients, medications..." />
            </div>
            <div className="flex items-center space-x-4 ml-4">
              <NotificationBell />
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">
                    {user?.displayName || user?.email}
                  </p>
                  <p className="text-xs text-gray-500">Administrator</p>
                </div>
                <Button variant="outline" size="small" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
