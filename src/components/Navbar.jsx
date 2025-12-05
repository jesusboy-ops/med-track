import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../context/AuthContext';
import Button from './ui/Button';
import LoginModal from './modals/LoginModal';
import RegisterModal from './modals/RegisterModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-2xl font-bold text-blue-800">MedTrack</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-blue-800 font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <Button onClick={() => navigate('/dashboard')}>Dashboard</Button>
            ) : (
              <>
                <Button variant="outline" onClick={() => setShowLoginModal(true)}>
                  Login
                </Button>
                <Button onClick={() => setShowRegisterModal(true)}>Sign Up</Button>
              </>
            )}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-800"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-800 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              {user ? (
                <Button
                  className="w-full"
                  onClick={() => {
                    navigate('/dashboard');
                    setIsOpen(false);
                  }}
                >
                  Dashboard
                </Button>
              ) : (
                <>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      setShowLoginModal(true);
                      setIsOpen(false);
                    }}
                  >
                    Login
                  </Button>
                  <Button
                    className="w-full"
                    onClick={() => {
                      setShowRegisterModal(true);
                      setIsOpen(false);
                    }}
                  >
                    Sign Up
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Modals */}
      <LoginModal 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)}
        onSwitchToRegister={() => {
          setShowLoginModal(false);
          setShowRegisterModal(true);
        }}
      />
      <RegisterModal 
        isOpen={showRegisterModal} 
        onClose={() => setShowRegisterModal(false)}
        onSwitchToLogin={() => {
          setShowRegisterModal(false);
          setShowLoginModal(true);
        }}
      />
    </nav>
  );
};

export default Navbar;
