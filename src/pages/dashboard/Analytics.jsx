import Card from '../../components/ui/Card';
import MedicationChart from '../../components/charts/MedicationChart';
import UserGrowthChart from '../../components/charts/UserGrowthChart';
import StatsCard from '../../components/cards/StatsCard';
import {
  ChartBarIcon,
  ArrowTrendingUpIcon,
  ClockIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline';

const Analytics = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics</h1>
        <p className="text-gray-600">Track your performance and insights</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Revenue"
          value="$45,231"
          icon={CurrencyDollarIcon}
          trend="up"
          trendValue="20% from last month"
          color="green"
        />
        <StatsCard
          title="Avg. Response Time"
          value="2.4 hrs"
          icon={ClockIcon}
          trend="down"
          trendValue="15% improvement"
          color="blue"
        />
        <StatsCard
          title="Growth Rate"
          value="12.5%"
          icon={ArrowTrendingUpIcon}
          trend="up"
          trendValue="3% from last quarter"
          color="green"
        />
        <StatsCard
          title="Satisfaction"
          value="4.8/5"
          icon={ChartBarIcon}
          trend="up"
          trendValue="0.3 points"
          color="yellow"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card padding="large">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Prescription Trends
          </h2>
          <MedicationChart />
        </Card>

        <Card padding="large">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            User Growth Analysis
          </h2>
          <UserGrowthChart />
        </Card>
      </div>

      <Card padding="large">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Top Medications
        </h2>
        <div className="space-y-4">
          {[
            { name: 'Amoxicillin', prescriptions: 234, percentage: 85 },
            { name: 'Lisinopril', prescriptions: 198, percentage: 72 },
            { name: 'Metformin', prescriptions: 176, percentage: 64 },
            { name: 'Atorvastatin', prescriptions: 145, percentage: 53 },
          ].map((med, index) => (
            <div key={index}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-900">{med.name}</span>
                <span className="text-sm text-gray-600">{med.prescriptions} prescriptions</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-800 h-2 rounded-full"
                  style={{ width: `${med.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Analytics;
