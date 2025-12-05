import { useNavigate } from 'react-router-dom';
import Button from './ui/Button';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Pharmacy?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of healthcare professionals who trust MedTrack for their medication management needs. 
            Start your free 14-day trial today—no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="large"
              onClick={() => navigate('/register')}
              className="bg-white text-blue-900 hover:bg-blue-50 shadow-xl"
            >
              Start Free Trial
              <ArrowRightIcon className="w-5 h-5 ml-2 inline" />
            </Button>
            <Button
              size="large"
              variant="outline"
              onClick={() => navigate('/contact')}
              className="border-2 border-white text-white hover:bg-white/10"
            >
              Schedule a Demo
            </Button>
          </div>
          <p className="mt-6 text-blue-200 text-sm">
            ✓ 14-day free trial  ✓ No credit card required  ✓ Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
