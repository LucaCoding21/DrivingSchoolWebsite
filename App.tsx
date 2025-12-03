import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SuccessGallery from './components/SuccessGallery';
import Services from './components/Services';
import Packages from './components/Packages';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import FloatingCTA from './components/FloatingCTA';
import { Phone, ArrowRight } from 'lucide-react';
import { COMPANY_PHONE } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <SuccessGallery />
      <Services />
      <Packages />
      <Testimonials />
      <FAQ />

      {/* Final CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Start Driving?
          </h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Book your first lesson today. Our friendly team is ready to help you
            become a confident, safe driver.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`}
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 hover:bg-primary-50 px-6 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              <Phone size={20} />
              Call {COMPANY_PHONE}
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 bg-primary-700 hover:bg-primary-800 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              View Packages
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      <Contact />
      <FloatingCTA />
    </div>
  );
};

export default App;
