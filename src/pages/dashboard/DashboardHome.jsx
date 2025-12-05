import StatsCard from '../../components/cards/StatsCard';
import Card from '../../components/ui/Card';
import MedicationChart from '../../components/charts/MedicationChart';
import UserGrowthChart from '../../components/charts/UserGrowthChart';
import {
  UserGroupIcon,
  ClipboardDocumentCheckIcon,
  BellAlertIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

const DashboardHome = () => {
  const recentActivities = [
    { id: 1, action: 'New patient registered', user: 'John Doe', time: '5 minutes ago' },
    { id: 2, action: 'Prescription filled', user: 'Jane Smith', time: '15 minutes ago' },
    { id: 3, action: 'Refill requested', user: 'Mike Johnson', time: '1 hour ago' },
    { id: 4, action: 'Inventory updated', user: 'Admin', time: '2 hours ago' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Patients"
          value="2,234"
          icon={UserGroupIcon}
          trend="up"
          trendValue="12% from last month"
          color="blue"
        />
        <StatsCard
          title="Prescriptions"
          value="398"
          icon={ClipboardDocumentCheckIcon}
          trend="up"
          trendValue="8% from last month"
          color="green"
        />
        <StatsCard
          title="Pending Refills"
          value="45"
          icon={BellAlertIcon}
          trend="down"
          trendValue="3% from last week"
          color="yellow"
        />
        <StatsCard
          title="Active Users"
          value="1,890"
          icon={ChartBarIcon}
          trend="up"
          trendValue="15% from last month"
          color="blue"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card padding="large">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Prescription Overview
          </h2>
          <MedicationChart />
        </Card>

        <Card padding="large">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Patient Growth
          </h2>
          <UserGrowthChart />
        </Card>
      </div>

      <Card padding="large">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Recent Activity
        </h2>
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center justify-between py-3 border-b last:border-b-0"
            >
              <div>
                <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                <p className="text-sm text-gray-600">{activity.user}</p>
              </div>
              <p className="text-sm text-gray-500">{activity.time}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default DashboardHome;
