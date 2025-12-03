import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { BRAND } from '../brand.config';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 sm:py-4'
          : 'bg-transparent py-4 sm:py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 sm:gap-2.5 z-50">
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-base sm:text-lg">{BRAND.logoLetter}</span>
            </div>
            <span className="text-base sm:text-lg font-semibold text-neutral-900">
              {BRAND.shortName}
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 ml-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 rounded-lg hover:bg-black/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block ml-auto">
            <a
              href={`tel:${BRAND.phone.replace(/\D/g, '')}`}
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
            >
              <Phone size={15} />
              Call Us
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden ml-auto p-3 -mr-2 text-neutral-900 hover:bg-black/5 rounded-xl transition-colors active:scale-95 z-50"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-40 transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{ top: 0 }}
      >
        <div className="flex flex-col h-full pt-20 pb-8 px-6">
          <div className="flex-1 flex flex-col justify-center space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className={`block py-4 px-4 text-xl text-neutral-800 font-medium rounded-xl hover:bg-neutral-50 active:bg-neutral-100 transition-all transform ${
                  isOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                }`}
                style={{ transitionDelay: isOpen ? `${index * 75}ms` : '0ms' }}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className={`space-y-4 transition-all duration-500 ${
            isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: isOpen ? '300ms' : '0ms' }}>
            <a
              href={`tel:${BRAND.phone.replace(/\D/g, '')}`}
              className="flex items-center justify-center gap-3 w-full bg-primary-600 active:bg-primary-700 text-white py-4 rounded-2xl font-semibold text-lg shadow-lg shadow-primary-600/25"
            >
              <Phone size={22} />
              Call {BRAND.phone}
            </a>
            <p className="text-center text-neutral-500 text-sm">
              Open 7 days a week, 8am - 8pm
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
