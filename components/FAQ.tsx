import React, { useState } from 'react';
import { ChevronDown, Phone } from 'lucide-react';
import { BRAND, FAQS } from '../brand.config';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <p className="text-primary-600 font-semibold text-xs sm:text-sm uppercase tracking-wide mb-2 sm:mb-3">
            FAQ
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-3 sm:mb-4">
            Common Questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-2 sm:space-y-3">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className="border border-neutral-200 rounded-xl overflow-hidden"
            >
              <button
                className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left bg-white hover:bg-neutral-50 active:bg-neutral-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-neutral-900 pr-3 sm:pr-4 text-sm sm:text-base">
                  <span className="sm:hidden">{faq.shortQuestion}</span>
                  <span className="hidden sm:inline">{faq.question}</span>
                </span>
                <ChevronDown
                  size={18}
                  className={`flex-shrink-0 text-neutral-400 transition-transform sm:w-5 sm:h-5 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? 'max-h-48' : 'max-h-0'
                }`}
              >
                <div className="px-4 sm:px-6 pb-4 sm:pb-5 text-neutral-600 leading-relaxed text-sm sm:text-base">
                  <span className="sm:hidden">{faq.shortAnswer}</span>
                  <span className="hidden sm:inline">{faq.answer}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 sm:mt-10 lg:mt-12 text-center p-5 sm:p-6 lg:p-8 bg-neutral-50 rounded-xl sm:rounded-2xl">
          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-neutral-900 mb-1 sm:mb-2">
            Still have questions?
          </h3>
          <p className="text-neutral-600 mb-3 sm:mb-4 text-sm sm:text-base">
            We're happy to help. Give us a call anytime.
          </p>
          <a
            href={`tel:${BRAND.phone.replace(/\D/g, '')}`}
            className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 active:bg-primary-700 text-white px-5 sm:px-6 py-3 rounded-lg sm:rounded-xl font-semibold transition-colors text-sm sm:text-base w-full sm:w-auto"
          >
            <Phone size={18} />
            {BRAND.phone}
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
