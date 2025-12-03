import React from 'react';
import { Phone } from 'lucide-react';
import { COMPANY_PHONE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 min-h-screen">

          {/* Left - Content */}
          <div className="flex flex-col justify-center pt-32 pb-20 lg:pt-28 lg:pb-20 lg:pr-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium w-fit mb-6">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
              ICBC Certified · Surrey, BC
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-neutral-900 tracking-tight leading-[1.1] mb-6">
              Learn to drive<br />
              <span className="text-blue-600">with confidence.</span>
            </h1>

            <p className="text-lg text-neutral-600 mb-10 max-w-md">
              Patient instructors, flexible scheduling, and a 95% first-time pass rate.
              We'll pick you up anywhere in Surrey.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-full font-medium transition-colors"
              >
                <Phone size={18} />
                {COMPANY_PHONE}
              </a>
              <a
                href="#pricing"
                className="text-neutral-600 hover:text-blue-600 font-medium transition-colors"
              >
                View pricing →
              </a>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative lg:flex items-center hidden pt-24">
            <div className="w-full h-[80vh] rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 ring-1 ring-black/5">
              <img
                src="/hero.jpg"
                alt="Driving instructor teaching student"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Mobile image */}
      <div className="lg:hidden px-6 pb-12 -mt-8">
        <div className="rounded-2xl overflow-hidden shadow-xl shadow-blue-900/10">
          <img
            src="/hero.jpg"
            alt="Driving instructor teaching student"
            className="w-full h-64 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
