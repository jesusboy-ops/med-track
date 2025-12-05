import { CheckIcon } from '@heroicons/react/24/outline';
import Button from './ui/Button';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  const navigate = useNavigate();

  const plans = [
    {
      name: 'Free',
      price: '₦0',
      period: 'forever',
      description: 'Perfect for small pharmacies getting started',
      features: [
        'Up to 50 patients',
        'Basic medication tracking',
        'Email support',
        '1 user account',
        'Mobile app access',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Standard',
      price: '₦49,999',
      period: 'per month',
      description: 'Ideal for growing pharmacy operations',
      features: [
        'Up to 500 patients',
        'Advanced medication tracking',
        'Priority email & chat support',
        '5 user accounts',
        'Mobile app access',
        'Inventory management',
        'Custom reports',
        'API access',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Premium',
      price: '₦149,999',
      period: 'per month',
      description: 'For large-scale pharmacy networks',
      features: [
        'Unlimited patients',
        'Enterprise medication tracking',
        '24/7 phone & chat support',
        'Unlimited user accounts',
        'Mobile app access',
        'Advanced inventory management',
        'Custom reports & analytics',
        'API access',
        'Dedicated account manager',
        'Custom integrations',
        'HIPAA compliance tools',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your pharmacy. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
                plan.popular ? 'ring-4 ring-blue-800 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-0 right-0 flex justify-center">
                  <span className="bg-blue-800 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">/ {plan.period}</span>
                </div>

                <Button
                  className="w-full mb-8"
                  variant={plan.popular ? 'primary' : 'outline'}
                  onClick={() => navigate('/register')}
                >
                  {plan.cta}
                </Button>

                <div className="space-y-4">
                  <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                    What's included:
                  </p>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Need a custom plan for your organization?
          </p>
          <Button variant="outline" onClick={() => navigate('/contact')}>
            Contact Our Sales Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
