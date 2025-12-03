import React, { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';
import { COMPANY_PHONE } from '../constants';

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Mobile Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden z-40 p-3 bg-white/95 backdrop-blur-sm border-t border-neutral-200">
        <a
          href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`}
          className="flex items-center justify-center gap-2 w-full bg-primary-600 hover:bg-primary-700 text-white py-3.5 rounded-lg font-semibold transition-colors"
        >
          <Phone size={18} />
          Call Now - {COMPANY_PHONE}
        </a>
      </div>

      {/* Desktop Floating Button */}
      <div className="hidden md:block fixed bottom-8 right-8 z-40">
        <a
          href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`}
          className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-3 rounded-lg font-semibold shadow-lg transition-colors"
        >
          <Phone size={18} />
          {COMPANY_PHONE}
        </a>
      </div>
    </>
  );
};

export default FloatingCTA;
