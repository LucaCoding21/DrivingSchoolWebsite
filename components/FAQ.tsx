import React, { useState } from 'react';
import { ChevronDown, Phone } from 'lucide-react';
import { COMPANY_PHONE } from '../constants';

const FAQS = [
  {
    question: 'Do you provide a car for the road test?',
    answer: 'Yes! All our packages include car rental for your ICBC road test. We also offer a standalone warm-up lesson with car rental where we practice for 60 minutes before your test.',
  },
  {
    question: 'What areas of Surrey do you cover?',
    answer: 'We cover all of Surrey and surrounding areas including Newton, Fleetwood, Guildford, Whalley, and Cloverdale. We offer free pickup from your home or school.',
  },
  {
    question: 'Can I pay in installments?',
    answer: 'Yes! For our larger packages, we offer flexible payment options. You can split the payment into two or three installments. No hidden fees.',
  },
  {
    question: 'How do I book my first lesson?',
    answer: 'The fastest way is to call us directly. We\'ll match you with an instructor who fits your schedule and discuss your learning goals.',
  },
  {
    question: 'What qualifications do your instructors have?',
    answer: 'All our instructors are ICBC certified, fully licensed under the Motor Vehicle Act, and have extensive local driving experience.',
  },
  {
    question: 'Do you train for both Class 5 and Class 7?',
    answer: 'Yes! We offer training for both Class 7 (N) learners and Class 5 full license upgrades. Our instructors will prepare you for either test.',
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary-600 font-semibold text-sm uppercase tracking-wide mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Common Questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className="border border-neutral-200 rounded-xl overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-white hover:bg-neutral-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-neutral-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-neutral-400 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? 'max-h-48' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-neutral-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center p-8 bg-neutral-50 rounded-2xl">
          <h3 className="text-xl font-bold text-neutral-900 mb-2">
            Still have questions?
          </h3>
          <p className="text-neutral-600 mb-4">
            We're happy to help. Give us a call anytime.
          </p>
          <a
            href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`}
            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
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
