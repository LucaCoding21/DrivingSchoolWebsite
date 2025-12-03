import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { COMPANY_PHONE, COMPANY_EMAIL, COMPANY_ADDRESS } from '../constants';

const Contact: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-neutral-900 text-white">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="font-bold text-xl mb-4">
              God Bless <span className="text-primary-400">Driving School</span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Professional driving instruction for new and experienced drivers.
              ICBC certified and licensed.
            </p>
            <div className="flex items-center gap-2 px-3 py-2 bg-primary-600/20 rounded-lg w-fit">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span className="text-sm text-primary-300 font-medium">ICBC Certified</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`}
                  className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  <Phone size={16} />
                  {COMPANY_PHONE}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY_EMAIL}`}
                  className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  <Mail size={16} />
                  {COMPANY_EMAIL}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-neutral-400 text-sm">
                  <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                  {COMPANY_ADDRESS}
                </div>
              </li>
              <li>
                <div className="flex items-center gap-3 text-neutral-400 text-sm">
                  <Clock size={16} />
                  Open 7 days, 8am - 8pm
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'About Us', href: '#about' },
                { name: 'Services', href: '#services' },
                { name: 'Pricing', href: '#pricing' },
                { name: 'Reviews', href: '#reviews' },
                { name: 'FAQ', href: '#faq' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-semibold text-white mb-4">Service Areas</h4>
            <div className="flex flex-wrap gap-2">
              {[
                'Newton',
                'Fleetwood',
                'Guildford',
                'Whalley',
                'Cloverdale',
                'South Surrey',
              ].map((area) => (
                <span
                  key={area}
                  className="text-xs text-neutral-400 px-2 py-1 bg-neutral-800 rounded"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-neutral-500 text-sm">
              © {currentYear} God Bless Driving School. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-neutral-500 hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="text-neutral-500 hover:text-white transition-colors">
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
