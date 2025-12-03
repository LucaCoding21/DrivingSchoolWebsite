import React, { useState } from 'react';
import { ChevronDown, Phone } from 'lucide-react';
import { COMPANY_PHONE } from '../constants';

const FAQS = [
  {
    question: 'Do you provide a car for the road test?',
    shortQuestion: 'Car for road test?',
    answer: 'Yes! All our packages include car rental for your ICBC road test. We also offer a standalone warm-up lesson with car rental where we practice for 60 minutes before your test.',
    shortAnswer: 'Yes! All packages include car rental for your ICBC road test, plus a 60-min warm-up lesson.',
  },
  {
    question: 'What areas of Kelowna do you cover?',
    shortQuestion: 'Areas covered?',
    answer: 'We cover all of Kelowna and surrounding areas including Rutland, Glenmore, Mission, Downtown, and West Kelowna. We offer free pickup from your home or school.',
    shortAnswer: 'All of Kelowna: Rutland, Glenmore, Mission, Downtown, West Kelowna. Free pickup included!',
  },
  {
    question: 'Can I pay in installments?',
    shortQuestion: 'Payment plans?',
    answer: 'Yes! For our larger packages, we offer flexible payment options. You can split the payment into two or three installments. No hidden fees.',
    shortAnswer: 'Yes! Split into 2-3 installments. No hidden fees.',
  },
  {
    question: 'How do I book my first lesson?',
    shortQuestion: 'How to book?',
    answer: 'The fastest way is to call us directly. We\'ll match you with an instructor who fits your schedule and discuss your learning goals.',
    shortAnswer: 'Just call us! We\'ll match you with an instructor.',
  },
  {
    question: 'What qualifications do your instructors have?',
    shortQuestion: 'Instructor qualifications?',
    answer: 'All our instructors are ICBC certified, fully licensed under the Motor Vehicle Act, and have extensive local driving experience.',
    shortAnswer: 'ICBC certified, fully licensed, extensive local experience.',
  },
  {
    question: 'Do you train for both Class 5 and Class 7?',
    shortQuestion: 'Class 5 & 7 training?',
    answer: 'Yes! We offer training for both Class 7 (N) learners and Class 5 full license upgrades. Our instructors will prepare you for either test.',
    shortAnswer: 'Yes! Both Class 7 (N) and Class 5 full license.',
  },
];

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
            href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`}
            className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 active:bg-primary-700 text-white px-5 sm:px-6 py-3 rounded-lg sm:rounded-xl font-semibold transition-colors text-sm sm:text-base w-full sm:w-auto"
          >
            <Phone size={18} />
            {COMPANY_PHONE}
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
