import { useState } from 'react';
import Card from '../../components/ui/Card';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { useAuth } from '../../context/AuthContext';

const Settings = () => {
  const { user } = useAuth();
  const [profileData, setProfileData] = useState({
    name: user?.displayName || '',
    email: user?.email || '',
    phone: '',
    address: '',
  });

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile updated:', profileData);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
        <p className="text-gray-600">Manage your account settings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card padding="large">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Profile Information
            </h2>
            <form onSubmit={handleSubmit}>
              <Input
                label="Full Name"
                name="name"
                value={profileData.name}
                onChange={handleChange}
              />
              <Input
                label="Email Address"
                type="email"
                name="email"
                value={profileData.email}
                onChange={handleChange}
              />
              <Input
                label="Phone Number"
                name="phone"
                value={profileData.phone}
                onChange={handleChange}
              />
              <Input
                label="Address"
                name="address"
                value={profileData.address}
                onChange={handleChange}
              />
              <Button type="submit">Save Changes</Button>
            </form>
          </Card>

          <Card padding="large">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Change Password
            </h2>
            <form>
              <Input label="Current Password" type="password" name="currentPassword" />
              <Input label="New Password" type="password" name="newPassword" />
              <Input label="Confirm New Password" type="password" name="confirmPassword" />
              <Button type="submit">Update Password</Button>
            </form>
          </Card>
        </div>

        <div className="space-y-6">
          <Card padding="large">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Notifications
            </h2>
            <div className="space-y-4">
              <label className="flex items-center justify-between">
                <span className="text-gray-700">Email Notifications</span>
                <input type="checkbox" defaultChecked className="rounded text-blue-800" />
              </label>
              <label className="flex items-center justify-between">
                <span className="text-gray-700">Push Notifications</span>
                <input type="checkbox" defaultChecked className="rounded text-blue-800" />
              </label>
              <label className="flex items-center justify-between">
                <span className="text-gray-700">SMS Alerts</span>
                <input type="checkbox" className="rounded text-blue-800" />
              </label>
            </div>
          </Card>

          <Card padding="large">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Account
            </h2>
            <Button variant="danger" className="w-full">
              Delete Account
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;
