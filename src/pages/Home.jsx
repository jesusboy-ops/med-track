import Hero from '../components/Hero';
import FeatureCard from '../components/cards/FeatureCard';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import CTA from '../components/CTA';
import {
  ShieldCheckIcon,
  ChartBarIcon,
  BellAlertIcon,
  DevicePhoneMobileIcon,
  ClockIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

const Home = () => {
  const features = [
    {
      icon: ShieldCheckIcon,
      title: 'HIPAA Compliant',
      description: 'Enterprise-grade security with full HIPAA compliance to protect patient data and maintain privacy standards.',
    },
    {
      icon: ChartBarIcon,
      title: 'Advanced Analytics',
      description: 'Real-time insights and comprehensive reports to optimize your pharmacy operations and inventory management.',
    },
    {
      icon: BellAlertIcon,
      title: 'Smart Notifications',
      description: 'Automated alerts for refills, expiring medications, and low stock levels to keep your pharmacy running smoothly.',
    },
    {
      icon: DevicePhoneMobileIcon,
      title: 'Mobile Access',
      description: 'Manage your pharmacy on the go with our fully-featured mobile app for iOS and Android devices.',
    },
    {
      icon: ClockIcon,
      title: '24/7 Support',
      description: 'Round-the-clock customer support from our dedicated team of healthcare technology experts.',
    },
    {
      icon: UserGroupIcon,
      title: 'Multi-User Access',
      description: 'Collaborate seamlessly with role-based permissions for your entire pharmacy team.',
    },
  ];

  return (
    <div>
      <Hero />
      
      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed specifically for modern pharmacy management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      <Pricing />
      <Testimonials />
      <Team />
      <CTA />
    </div>
  );
};

export default Home;
