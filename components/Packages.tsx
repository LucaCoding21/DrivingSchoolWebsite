import React, { useState } from 'react';
import { Check, Phone, Clock, Car, FileCheck, GraduationCap } from 'lucide-react';
import { COMPANY_PHONE } from '../constants';

type Category = 'all' | 'lessons' | 'roadtest' | 'class';

const SERVICES = [
  {
    id: '1hour',
    name: '1 Hour Lesson',
    price: 60,
    duration: '1 hour',
    category: 'lessons',
    description: 'Standard driving lesson',
    icon: Clock,
  },
  {
    id: '1.5hour',
    name: '1.5 Hour Lesson',
    price: 85,
    duration: '90 min',
    category: 'lessons',
    description: 'Extended practice session',
    icon: Clock,
    popular: true,
  },
  {
    id: 'class4-1.5',
    name: '1.5 Hour Class 4',
    price: 100,
    duration: '90 min',
    category: 'class',
    description: 'Class 4 including Pre-Trip',
    icon: Car,
  },
  {
    id: 'class4-1',
    name: '1 Hour Class 4',
    price: 70,
    duration: '1 hour',
    category: 'class',
    description: 'Class 4 including Pre-Trip',
    icon: Car,
  },
  {
    id: 'roadtest',
    name: 'Road Test Package',
    price: 150,
    duration: '1 hour',
    category: 'roadtest',
    description: 'Car rental + warm-up lesson',
    icon: FileCheck,
  },
  {
    id: 'class',
    name: 'Classroom Session',
    price: 100,
    duration: '1 hour',
    category: 'class',
    description: 'ICBC knowledge prep',
    icon: GraduationCap,
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'lessons', label: 'Driving Lessons' },
  { id: 'roadtest', label: 'Road Test' },
  { id: 'class', label: 'Class 4 & More' },
];

const Packages: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary-600 font-semibold text-sm uppercase tracking-wide mb-3">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Pay per lesson or book multiple sessions. Free pickup included with all lessons.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as Category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`relative rounded-xl p-6 border-2 transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer ${
                  service.popular
                    ? 'border-primary-500 bg-primary-50/50'
                    : 'border-neutral-200 bg-white hover:border-primary-300'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 right-4">
                    <span className="bg-primary-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                      Popular
                    </span>
                  </div>
                )}

                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-neutral-900">${service.price}</div>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                  {service.name}
                </h3>
                <p className="text-sm text-neutral-500 mb-3">
                  {service.description}
                </p>

                <div className="flex items-center gap-2 text-sm text-neutral-600">
                  <Clock size={14} className="text-primary-600" />
                  <span>Duration: {service.duration}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bulk Savings CTA */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="bg-neutral-900 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-2">
              Save More with Lesson Packages
            </h3>
            <p className="text-neutral-400 mb-6">
              Book 5+ lessons and save 10%. Book 10+ lessons and save 15%.
            </p>
            <a
              href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`}
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full font-semibold transition-colors"
            >
              <Phone size={18} />
              Call to Book: {COMPANY_PHONE}
            </a>
          </div>
        </div>

        {/* Trust Elements */}
        <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-neutral-500">
          <div className="flex items-center gap-2">
            <Check size={16} className="text-primary-600" />
            No hidden fees
          </div>
          <div className="flex items-center gap-2">
            <Check size={16} className="text-primary-600" />
            Free pickup included
          </div>
          <div className="flex items-center gap-2">
            <Check size={16} className="text-primary-600" />
            Free cancellation (24h notice)
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
