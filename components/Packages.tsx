import React, { useState } from 'react';
import { Check, Phone, Clock, Car, FileCheck, GraduationCap } from 'lucide-react';
import { BRAND, PACKAGES } from '../brand.config';

type Category = 'all' | 'lessons' | 'roadtest' | 'class';

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  '1hour': Clock,
  '1.5hour': Clock,
  'class4-1.5': Car,
  'class4-1': Car,
  'roadtest': FileCheck,
  'class': GraduationCap,
};

const CATEGORIES = [
  { id: 'all', label: 'All', mobileLabel: 'All' },
  { id: 'lessons', label: 'Driving Lessons', mobileLabel: 'Lessons' },
  { id: 'roadtest', label: 'Road Test', mobileLabel: 'Test' },
  { id: 'class', label: 'Class 4 & More', mobileLabel: 'Class 4+' },
];

const Packages: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredServices = activeCategory === 'all'
    ? PACKAGES
    : PACKAGES.filter(s => s.category === activeCategory);

  return (
    <section id="pricing" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <p className="text-primary-600 font-semibold text-xs sm:text-sm uppercase tracking-wide mb-2 sm:mb-3">
            Pricing
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-3 sm:mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-600 max-w-2xl mx-auto">
            Pay per lesson or book multiple sessions. Free pickup included with all lessons.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-start sm:justify-center gap-2 mb-6 sm:mb-8 lg:mb-10 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as Category)}
              className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap flex-shrink-0 active:scale-95 ${
                activeCategory === cat.id
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              <span className="sm:hidden">{cat.mobileLabel}</span>
              <span className="hidden sm:inline">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {filteredServices.map((service) => {
            const Icon = ICONS[service.id] || Clock;
            return (
              <div
                key={service.id}
                className={`relative rounded-xl p-3 sm:p-4 lg:p-6 border-2 transition-all hover:shadow-lg active:scale-[0.98] cursor-pointer ${
                  service.popular
                    ? 'border-primary-500 bg-primary-50/50'
                    : 'border-neutral-200 bg-white hover:border-primary-300'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-2.5 sm:-top-3 right-2 sm:right-4">
                    <span className="bg-primary-600 text-white text-[10px] sm:text-xs font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full">
                      Popular
                    </span>
                  </div>
                )}

                <div className="flex items-start justify-between mb-2 sm:mb-3 lg:mb-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-primary-100 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary-600" />
                  </div>
                  <div className="text-right">
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-neutral-900">${service.price}</div>
                  </div>
                </div>

                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-neutral-900 mb-0.5 sm:mb-1">
                  <span className="sm:hidden">{service.shortName}</span>
                  <span className="hidden sm:inline">{service.name}</span>
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500 mb-2 sm:mb-3">
                  <span className="sm:hidden">{service.shortDesc}</span>
                  <span className="hidden sm:inline">{service.description}</span>
                </p>

                <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-neutral-600">
                  <Clock size={12} className="text-primary-600 sm:w-3.5 sm:h-3.5" />
                  <span>{service.duration}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bulk Savings CTA */}
        <div className="mt-8 sm:mt-10 lg:mt-12 max-w-3xl mx-auto">
          <div className="bg-neutral-900 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 text-center">
            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1 sm:mb-2">
              Save More with Lesson Packages
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mb-4 sm:mb-5 lg:mb-6">
              Book 5+ lessons and save 10%. Book 10+ lessons and save 15%.
            </p>
            <a
              href={`tel:${BRAND.phone.replace(/\D/g, '')}`}
              className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 active:bg-primary-700 text-white px-5 sm:px-6 py-3 sm:py-3.5 rounded-full font-semibold transition-colors text-sm sm:text-base w-full sm:w-auto"
            >
              <Phone size={18} />
              <span className="sm:hidden">Call {BRAND.phone}</span>
              <span className="hidden sm:inline">Call to Book: {BRAND.phone}</span>
            </a>
          </div>
        </div>

        {/* Trust Elements */}
        <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-wrap justify-center gap-x-4 sm:gap-x-6 lg:gap-x-8 gap-y-2 sm:gap-y-3 text-xs sm:text-sm text-neutral-500">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Check size={14} className="text-primary-600 sm:w-4 sm:h-4" />
            No hidden fees
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Check size={14} className="text-primary-600 sm:w-4 sm:h-4" />
            Free pickup
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Check size={14} className="text-primary-600 sm:w-4 sm:h-4" />
            Free cancellation
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
