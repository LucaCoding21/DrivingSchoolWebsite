import React from 'react';
import { GraduationCap, RefreshCw, Award, Car, Phone } from 'lucide-react';
import { BRAND } from '../brand.config';

const Services: React.FC = () => {
  const services = [
    {
      icon: <GraduationCap size={24} />,
      title: 'Class 7 (N) Training',
      shortTitle: 'Class 7 Training',
      description: 'Complete preparation for new drivers getting their learner\'s permit or preparing for the Class 7 road test.',
      shortDesc: 'Complete prep for new drivers and Class 7 road test.',
      features: ['Knowledge test prep', 'In-car training', 'Mock road tests', 'Parking skills'],
    },
    {
      icon: <Award size={24} />,
      title: 'Class 5 Upgrade',
      shortTitle: 'Class 5 Upgrade',
      description: 'Advanced training for N drivers ready to upgrade to their full Class 5 license.',
      shortDesc: 'Advanced training for your full Class 5 license.',
      features: ['Highway driving', 'Defensive techniques', 'Night driving', 'Test preparation'],
    },
    {
      icon: <RefreshCw size={24} />,
      title: 'Refresher Lessons',
      shortTitle: 'Refresher',
      description: 'Brush up on your skills after time away from driving or build confidence in specific areas.',
      shortDesc: 'Brush up on skills or build confidence.',
      features: ['Skill assessment', 'Targeted practice', 'Confidence building', 'Flexible hours'],
    },
    {
      icon: <Car size={24} />,
      title: 'Road Test Package',
      shortTitle: 'Road Test',
      description: 'Warm-up lesson plus vehicle rental for your ICBC road test day.',
      shortDesc: 'Warm-up lesson + car rental for test day.',
      features: ['60-min warm-up', 'Vehicle rental', 'Test route practice', 'Same-day support'],
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <p className="text-primary-600 font-semibold text-xs sm:text-sm uppercase tracking-wide mb-2 sm:mb-3">
            Our Services
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-3 sm:mb-4">
            Training Programs for Every Driver
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-600 max-w-2xl mx-auto">
            Whether you're a complete beginner or need to brush up on skills,
            we have a program that fits your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 border border-neutral-200 hover:shadow-lg transition-shadow active:scale-[0.98]"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-primary-100 rounded-lg sm:rounded-xl flex items-center justify-center text-primary-600 mb-3 sm:mb-4 lg:mb-5">
                {service.icon}
              </div>
              <h3 className="text-sm sm:text-base lg:text-xl font-bold text-neutral-900 mb-1 sm:mb-2 lg:mb-3">
                <span className="sm:hidden">{service.shortTitle}</span>
                <span className="hidden sm:inline">{service.title}</span>
              </h3>
              <p className="text-neutral-600 mb-3 sm:mb-4 lg:mb-5 leading-relaxed text-xs sm:text-sm lg:text-base line-clamp-2 sm:line-clamp-none">
                <span className="sm:hidden">{service.shortDesc}</span>
                <span className="hidden sm:inline">{service.description}</span>
              </p>
              {/* Features - hidden on mobile */}
              <ul className="hidden sm:block space-y-1.5 sm:space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-700">
                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary-500 rounded-full flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              {/* Mobile: show 2 features only */}
              <ul className="sm:hidden space-y-1">
                {service.features.slice(0, 2).map((feature, i) => (
                  <li key={i} className="flex items-center gap-1.5 text-xs text-neutral-600">
                    <span className="w-1 h-1 bg-primary-500 rounded-full flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 sm:mt-10 lg:mt-12 text-center">
          <p className="text-neutral-600 mb-3 sm:mb-4 text-sm sm:text-base">
            Not sure which program is right for you?
          </p>
          <a
            href={`tel:${BRAND.phone.replace(/\D/g, '')}`}
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 active:text-primary-700 font-semibold text-sm sm:text-base"
          >
            <Phone size={18} />
            Call us for a free consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
