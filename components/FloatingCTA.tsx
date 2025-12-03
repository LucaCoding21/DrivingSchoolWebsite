import React, { useEffect, useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { COMPANY_PHONE } from '../constants';

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > 400;
      if (shouldShow && !isVisible) {
        setIsVisible(true);
        // Trigger animation only once
        if (!hasAnimated) {
          setHasAnimated(true);
        }
      } else if (!shouldShow && isVisible) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible, hasAnimated]);

  return (
    <>
      {/* Mobile Bottom Bar - Fixed sticky CTA */}
      <div
        className={`fixed bottom-0 left-0 right-0 md:hidden z-40 transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        {/* Safe area padding for notched phones */}
        <div className="bg-white/95 backdrop-blur-md border-t border-neutral-200 shadow-lg shadow-black/10">
          <div className="px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
            <a
              href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`}
              className={`flex items-center justify-center gap-2.5 w-full bg-primary-600 active:bg-primary-700 text-white py-3.5 rounded-xl font-semibold transition-all shadow-lg shadow-primary-600/30 ${
                hasAnimated ? 'animate-[pulse_2s_ease-in-out_1]' : ''
              }`}
            >
              <Phone size={20} className="animate-[wiggle_1s_ease-in-out_infinite]" />
              <span className="text-base">Call Now - {COMPANY_PHONE}</span>
            </a>
            {/* Quick trust indicator */}
            <div className="flex items-center justify-center gap-4 mt-2 text-xs text-neutral-500">
              <span>Free Consultation</span>
              <span className="w-1 h-1 bg-neutral-300 rounded-full"></span>
              <span>Open 7 Days</span>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Floating Button */}
      <div
        className={`hidden md:block fixed bottom-8 right-8 z-40 transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <a
          href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`}
          className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-3 rounded-xl font-semibold shadow-lg shadow-primary-600/30 transition-all hover:scale-105 hover:shadow-xl"
        >
          <Phone size={18} />
          {COMPANY_PHONE}
        </a>
      </div>

      {/* Custom keyframes for phone wiggle */}
      <style>{`
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          10% { transform: rotate(-8deg); }
          20% { transform: rotate(8deg); }
          30% { transform: rotate(-8deg); }
          40% { transform: rotate(8deg); }
          50%, 100% { transform: rotate(0deg); }
        }
      `}</style>
    </>
  );
};

export default FloatingCTA;
