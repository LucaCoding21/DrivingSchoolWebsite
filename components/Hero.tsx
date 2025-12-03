import React from 'react';
import { Phone, Star, CheckCircle } from 'lucide-react';
import { COMPANY_PHONE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 min-h-screen">

          {/* Left - Content */}
          <div className="flex flex-col justify-center pt-24 sm:pt-28 pb-8 sm:pb-20 lg:pt-28 lg:pb-20 lg:pr-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-100 text-primary-700 rounded-full text-xs sm:text-sm font-medium w-fit mb-4 sm:mb-6">
              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full animate-pulse"></span>
              ICBC Certified · Kelowna, BC
            </div>

            {/* Headline - responsive sizing */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-neutral-900 tracking-tight leading-[1.15] sm:leading-[1.1] mb-4 sm:mb-6">
              Learn to drive<br />
              <span className="text-primary-600">with confidence.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-neutral-600 mb-6 sm:mb-8 max-w-md leading-relaxed">
              Patient instructors, flexible scheduling, and a 95% first-time pass rate.
              We'll pick you up anywhere in Kelowna.
            </p>

            {/* Mobile: Quick Trust Indicators */}
            <div className="flex items-center gap-4 mb-6 lg:hidden">
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-neutral-600 ml-1">5.0</span>
              </div>
              <span className="text-neutral-300">|</span>
              <span className="text-sm text-neutral-600">500+ Reviews</span>
            </div>

            {/* CTA Buttons - stack on mobile */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`}
                className="inline-flex items-center justify-center gap-2 bg-primary-600 active:bg-primary-700 hover:bg-primary-700 text-white px-6 py-4 rounded-xl sm:rounded-full font-semibold text-base sm:text-base transition-all shadow-lg shadow-primary-600/25 active:scale-[0.98]"
              >
                <Phone size={20} />
                {COMPANY_PHONE}
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center text-neutral-600 hover:text-primary-600 font-medium transition-colors py-3 sm:py-0"
              >
                View pricing →
              </a>
            </div>

            {/* Mobile: Quick Features */}
            <div className="grid grid-cols-2 gap-3 mt-8 lg:hidden">
              {[
                'Free Pickup',
                'Car for Test',
                'Flexible Hours',
                'All Levels'
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-neutral-600">
                  <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image (Desktop) */}
          <div className="relative lg:flex items-center hidden pt-24">
            <div className="w-full h-[80vh] rounded-3xl overflow-hidden shadow-2xl shadow-primary-900/10 ring-1 ring-black/5">
              <img
                src="/hero.jpg"
                alt="Driving instructor teaching student"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Hero Image - Full width with gradient overlay */}
      <div className="lg:hidden relative -mt-4">
        <div className="mx-4 sm:mx-6 rounded-2xl overflow-hidden shadow-xl shadow-primary-900/10">
          <div className="relative">
            <img
              src="/hero.jpg"
              alt="Driving instructor teaching student"
              className="w-full h-56 sm:h-72 object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

            {/* Floating stat card on image */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 sm:p-4 shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-lg sm:text-xl">🎯</span>
                  </div>
                  <div>
                    <div className="font-bold text-neutral-900 text-sm sm:text-base">94% Pass Rate</div>
                    <div className="text-xs sm:text-sm text-neutral-500">on first attempt</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-neutral-900 text-sm sm:text-base">2,400+</div>
                  <div className="text-xs sm:text-sm text-neutral-500">graduates</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom spacing for floating CTA */}
        <div className="h-4"></div>
      </div>
    </section>
  );
};

export default Hero;
