import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { COMPANY_PHONE, COMPANY_EMAIL, COMPANY_ADDRESS } from '../constants';

const Contact: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-neutral-900 text-white pb-20 md:pb-0">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Brand - full width on mobile */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <div className="font-bold text-lg sm:text-xl mb-3 sm:mb-4">
              Kelowna <span className="text-primary-400">Driving School</span>
            </div>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
              Professional driving instruction for new and experienced drivers.
              ICBC certified and licensed.
            </p>
            <div className="flex items-center gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 bg-primary-600/20 rounded-lg w-fit">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full"></span>
              <span className="text-xs sm:text-sm text-primary-300 font-medium">ICBC Certified</span>
            </div>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Contact</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`}
                  className="flex items-center gap-2 sm:gap-3 text-neutral-400 hover:text-white active:text-white transition-colors text-xs sm:text-sm"
                >
                  <Phone size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
                  <span className="truncate">{COMPANY_PHONE}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY_EMAIL}`}
                  className="flex items-center gap-2 sm:gap-3 text-neutral-400 hover:text-white active:text-white transition-colors text-xs sm:text-sm"
                >
                  <Mail size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
                  <span className="truncate">Email Us</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2 sm:gap-3 text-neutral-400 text-xs sm:text-sm">
                  <Clock size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
                  <span>7 days, 8am-8pm</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Pricing', href: '#pricing' },
                { name: 'Reviews', href: '#reviews' },
                { name: 'FAQ', href: '#faq' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-white active:text-white transition-colors text-xs sm:text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas - hidden on smallest mobile */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Service Areas</h4>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {[
                'Rutland',
                'Glenmore',
                'Mission',
                'Downtown',
                'W. Kelowna',
                'Lake Country',
              ].map((area) => (
                <span
                  key={area}
                  className="text-[10px] sm:text-xs text-neutral-400 px-2 py-1 bg-neutral-800 rounded"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Address - separate row on mobile for readability */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-neutral-800 lg:hidden">
          <div className="flex items-start gap-2 text-neutral-400 text-xs sm:text-sm">
            <MapPin size={14} className="sm:w-4 sm:h-4 flex-shrink-0 mt-0.5" />
            <span>{COMPANY_ADDRESS}</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-neutral-500 text-xs sm:text-sm text-center sm:text-left">
              © {currentYear} Kelowna Driving School
            </p>
            <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
              <a href="#" className="text-neutral-500 hover:text-white active:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="text-neutral-500 hover:text-white active:text-white transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
