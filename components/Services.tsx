import React from 'react';
import { GraduationCap, RefreshCw, Award, Car, Phone } from 'lucide-react';
import { COMPANY_PHONE } from '../constants';

const Services: React.FC = () => {
  const services = [
    {
      icon: <GraduationCap size={28} />,
      title: 'Class 7 (N) Training',
      description: 'Complete preparation for new drivers getting their learner\'s permit or preparing for the Class 7 road test.',
      features: ['Knowledge test prep', 'In-car training', 'Mock road tests', 'Parking skills'],
    },
    {
      icon: <Award size={28} />,
      title: 'Class 5 Upgrade',
      description: 'Advanced training for N drivers ready to upgrade to their full Class 5 license.',
      features: ['Highway driving', 'Defensive techniques', 'Night driving', 'Test preparation'],
    },
    {
      icon: <RefreshCw size={28} />,
      title: 'Refresher Lessons',
      description: 'Brush up on your skills after time away from driving or build confidence in specific areas.',
      features: ['Skill assessment', 'Targeted practice', 'Confidence building', 'Flexible hours'],
    },
    {
      icon: <Car size={28} />,
      title: 'Road Test Package',
      description: 'Warm-up lesson plus vehicle rental for your ICBC road test day.',
      features: ['60-min warm-up', 'Vehicle rental', 'Test route practice', 'Same-day support'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary-600 font-semibold text-sm uppercase tracking-wide mb-3">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Training Programs for Every Driver
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Whether you're a complete beginner or need to brush up on skills,
            we have a program that fits your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 border border-neutral-200 hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-5">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                {service.title}
              </h3>
              <p className="text-neutral-600 mb-5 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-neutral-700">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-neutral-600 mb-4">
            Not sure which program is right for you?
          </p>
          <a
            href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`}
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
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
