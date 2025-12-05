import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../assets/images/A man wearing a hat that says quot he is a doctor quot _ Premium AI-generated image.jpeg';
import RegisterModal from './modals/RegisterModal';

const Hero = () => {
  const navigate = useNavigate();
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  return (
    <section id="home" className="pt-20 pb-20 bg-blue-800 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Content - Text Section */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Medications, Managed With Precision.
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl">
              MedTrack helps patients track medications with smart reminders while allowing pharmacies to monitor progress and provide personalized care through our secure platform.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => setShowRegisterModal(true)}
                className="bg-white text-blue-700 px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors font-bold text-lg shadow-lg"
              >
                Create Account
              </button>
              <button 
                onClick={() => navigate('/demo')}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white/10 transition-colors font-bold text-lg"
              >
                See Demo
              </button>
            </div>
          </div>

          {/* Right Content - Pharmacist Image */}
          <div className="lg:w-1/2 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <img 
                src={image} 
                alt="Pharmacist in pharmacy using MedTrack app" 
                className="w-[350px] h-auto rounded-2xl shadow-2xl object-cover"
              />
            </div>
            
            {/* Floating Icons */}
            <div className="absolute -top-4 -left-4 lg:-top-6 lg:-left-6 w-12 h-12 lg:w-16 lg:h-16 bg-white/20 rounded-full flex items-center justify-center animate-float">
              <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="absolute top-1/2 -right-3 lg:-right-4 w-10 h-10 lg:w-12 lg:h-12 bg-white/20 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
              <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div className="absolute bottom-4 lg:bottom-8 -left-3 lg:-left-4 w-8 h-8 lg:w-10 lg:h-10 bg-white/20 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
              <svg className="w-3 h-3 lg:w-4 lg:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Register Modal */}
      <RegisterModal 
        isOpen={showRegisterModal} 
        onClose={() => setShowRegisterModal(false)}
        onSwitchToLogin={() => {
          setShowRegisterModal(false);
          // You might want to add LoginModal state here if needed
        }}
      />
    </section>
  );
};

export default Hero;