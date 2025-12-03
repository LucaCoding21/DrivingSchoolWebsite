import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle, Star, TrendingUp, Users, Phone, ArrowRight } from 'lucide-react';
import { BRAND, STATS, ABOUT, SERVICE_AREAS, COLORS } from '../brand.config';

// Custom hook for scroll-triggered animations
const useInView = (threshold = 0.1) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold, rootMargin: '50px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
};

// Animated counter hook
const useCounter = (end: number, duration: number = 2000, isActive: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isActive]);

  return count;
};

const SuccessGallery: React.FC = () => {
  const statsRef = useInView(0.3);
  const heroRef = useInView(0.2);
  const badgesRef = useInView(0.2);
  const galleryRef = useInView(0.1);
  const areasRef = useInView(0.5);

  // Animated counters
  const passRate = useCounter(STATS.passRate, 2000, statsRef.isInView);
  const students = useCounter(STATS.students, 2500, statsRef.isInView);
  const years = useCounter(STATS.yearsExperience, 1500, statsRef.isInView);
  const rating = useCounter(Math.round(STATS.googleRating * 10), 1800, statsRef.isInView);

  return (
    <section id="about" className="relative overflow-hidden">
      {/* Stats Bar */}
      <div ref={statsRef.ref} className="relative bg-white border-y border-neutral-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-0">
            {[
              { value: `${passRate}%`, label: 'Pass Rate', fullLabel: 'First-Time Pass Rate', icon: '🎯', delay: 0 },
              { value: `${students.toLocaleString()}+`, label: 'Graduates', fullLabel: 'Students Passed', icon: '🎓', delay: 100 },
              { value: `${years}+`, label: 'Years Exp.', fullLabel: 'Years Experience', icon: '📅', delay: 200 },
              { value: (rating / 10).toFixed(1), label: 'Rating', fullLabel: 'Google Rating', icon: '⭐', delay: 300, hasStar: true },
            ].map((stat, i) => (
              <div
                key={i}
                className={`relative flex flex-col items-center text-center transition-all duration-700 p-3 sm:p-4 md:p-0 rounded-xl sm:rounded-none ${
                  i < 3 ? 'md:border-r md:border-neutral-200' : ''
                } ${
                  statsRef.isInView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${stat.delay}ms` }}
              >
                <div className={`text-xl sm:text-2xl mb-1 sm:mb-2 transition-transform duration-500 ${
                  statsRef.isInView ? 'scale-100' : 'scale-0'
                }`} style={{ transitionDelay: `${stat.delay + 200}ms` }}>
                  {stat.icon}
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900">{stat.value}</span>
                  {stat.hasStar && <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />}
                </div>
                <div className="text-neutral-500 text-xs sm:text-sm mt-0.5 sm:mt-1 font-medium">
                  <span className="sm:hidden">{stat.label}</span>
                  <span className="hidden sm:inline">{stat.fullLabel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Value Prop Section */}
      <div className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Hero Split Layout */}
          <div ref={heroRef.ref} className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center mb-12 sm:mb-16 lg:mb-20">
            {/* Left: Content */}
            <div className={`transition-all duration-1000 ${
              heroRef.isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}>
              <div className={`inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6 transition-all duration-700 delay-200 ${
                heroRef.isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}>
                <CheckCircle className="w-4 h-4" />
                {BRAND.certification} & Licensed
              </div>
              <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight mb-4 sm:mb-6 transition-all duration-700 delay-300 ${
                heroRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}>
                {ABOUT.headline}
                <span className="text-primary-600 relative">
                  {' '}{ABOUT.headlineAccent}
                  <svg className={`absolute -bottom-1 sm:-bottom-2 left-0 w-full transition-all duration-1000 delay-700 ${
                    heroRef.isInView ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                  }`} style={{ transformOrigin: 'left' }} height="8" viewBox="0 0 200 8" fill="none">
                    <path d="M1 5.5C47.6667 2.16667 154.4 -1.9 199 7.5" stroke={COLORS.primary[600]} strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </span>
              </h2>
              <p className={`text-base sm:text-lg lg:text-xl text-neutral-600 leading-relaxed mb-6 sm:mb-8 transition-all duration-700 delay-400 ${
                heroRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}>
                {ABOUT.description}
              </p>

              {/* Quick Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 sm:gap-3 mb-6 sm:mb-8">
                {ABOUT.benefits.map((benefit, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-2 sm:gap-3 transition-all duration-500 ${
                      heroRef.isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                    }`}
                    style={{ transitionDelay: `${500 + i * 100}ms` }}
                  >
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 group">
                      <CheckCircle className={`w-3 h-3 sm:w-4 sm:h-4 text-primary-600 transition-transform duration-300 ${
                        heroRef.isInView ? 'scale-100' : 'scale-0'
                      }`} style={{ transitionDelay: `${600 + i * 100}ms` }} />
                    </div>
                    <span className="text-sm sm:text-base text-neutral-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 transition-all duration-700 delay-[900ms] ${
                heroRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <a
                  href={`tel:${BRAND.phone.replace(/\D/g, '')}`}
                  className="group inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 active:bg-primary-700 text-white px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all shadow-lg shadow-primary-600/25 hover:shadow-xl hover:shadow-primary-600/30 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Phone className="w-5 h-5 group-hover:animate-[wiggle_0.5s_ease-in-out]" />
                  Book Free Consultation
                </a>
                <a
                  href="#pricing"
                  className="group inline-flex items-center justify-center gap-2 bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-200 text-neutral-900 px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  View Packages
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Right: Image Collage */}
            <div className={`relative transition-all duration-1000 delay-300 ${
              heroRef.isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img
                  src="/happyphoto.webp"
                  alt="Happy student after passing driving test"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full transition-transform duration-1000 ${
                  heroRef.isInView ? 'animate-[shimmer_2s_ease-in-out_0.5s]' : ''
                }`}></div>

                <div className={`absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 sm:p-4 shadow-lg transition-all duration-700 delay-700 ${
                  heroRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <TrendingUp className={`w-5 h-5 sm:w-6 sm:h-6 text-green-600 transition-all duration-500 delay-1000 ${
                        heroRef.isInView ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
                      }`} />
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-900 text-sm sm:text-base">{STATS.passRate}% First-Time Pass Rate</div>
                      <div className="text-xs sm:text-sm text-neutral-600">BC average is only 52%</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Testimonial - hidden on mobile */}
              <div className={`absolute -top-4 -left-4 bg-white rounded-xl shadow-xl p-4 max-w-[200px] hidden lg:block transition-all duration-700 delay-500 ${
                heroRef.isInView ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 -translate-y-8 -rotate-6'
              }`}>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 fill-yellow-400 text-yellow-400 transition-all duration-300 ${
                        heroRef.isInView ? 'scale-100' : 'scale-0'
                      }`}
                      style={{ transitionDelay: `${800 + i * 100}ms` }}
                    />
                  ))}
                </div>
                <p className="text-sm text-neutral-700">"Best decision I ever made!"</p>
                <p className="text-xs text-neutral-500 mt-1">— Marcus C.</p>
              </div>
            </div>
          </div>

          {/* Trust Badges Row */}
          <div ref={badgesRef.ref} className="border-t border-neutral-200 pt-8 sm:pt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {ABOUT.badges.map((item, i) => (
                <div
                  key={i}
                  className={`text-center group cursor-default transition-all duration-500 p-3 sm:p-4 md:p-0 rounded-xl ${
                    badgesRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className={`text-2xl sm:text-3xl mb-2 sm:mb-3 transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-12 ${
                    badgesRef.isInView ? 'animate-[bounce_0.6s_ease-out]' : ''
                  }`} style={{ animationDelay: `${i * 100 + 200}ms` }}>
                    {item.icon}
                  </div>
                  <div className="font-semibold text-neutral-900 mb-0.5 sm:mb-1 group-hover:text-primary-600 transition-colors text-sm sm:text-base">
                    <span className="sm:hidden">{item.title}</span>
                    <span className="hidden sm:inline">{item.fullTitle}</span>
                  </div>
                  <div className="text-xs sm:text-sm text-neutral-600">
                    <span className="sm:hidden">{item.desc}</span>
                    <span className="hidden sm:inline">{item.fullDesc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof Gallery */}
      <div ref={galleryRef.ref} className="bg-neutral-50 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className={`text-center mb-8 sm:mb-12 transition-all duration-700 ${
            galleryRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mb-2 sm:mb-3">
              Join {STATS.students.toLocaleString()}+ Successful Graduates
            </h3>
            <p className="text-sm sm:text-base text-neutral-600">
              Real students, real results. See why {BRAND.city} trusts us.
            </p>
          </div>

          {/* Success Stories Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className={`col-span-2 row-span-1 sm:row-span-2 relative rounded-xl sm:rounded-2xl overflow-hidden group cursor-pointer transition-all duration-700 delay-100 ${
              galleryRef.isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600&h=600"
                alt="Happy student with license"
                className="w-full h-48 sm:h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-90"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 transition-transform duration-300 group-hover:translate-y-0 translate-y-2">
                <div className="flex gap-0.5 sm:gap-1 mb-1 sm:mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400 transition-all duration-300 ${
                        galleryRef.isInView ? 'scale-100' : 'scale-0'
                      }`}
                      style={{ transitionDelay: `${400 + i * 50}ms` }}
                    />
                  ))}
                </div>
                <p className="text-white font-medium mb-1 text-sm sm:text-base line-clamp-2">{ABOUT.galleryQuote}</p>
                <p className="text-white/70 text-xs sm:text-sm">{ABOUT.galleryAuthor}</p>
              </div>
            </div>

            {[
              { src: 'photo-1560250097-0b93528c311a', label: 'Professional Instructors', mobileLabel: 'Pro Instructors' },
              { src: 'photo-1469854523086-cc02fe5d8800', label: 'Highway Ready', mobileLabel: 'Highway Ready' },
              { src: 'photo-1449965408869-eaa3f722e40d', label: 'Hands-On Training', mobileLabel: 'Training' },
              { src: 'photo-1494976388531-d1058494cdd8', label: 'Modern Vehicles', mobileLabel: 'Modern Cars' },
            ].map((item, i) => (
              <div
                key={i}
                className={`relative rounded-lg sm:rounded-xl overflow-hidden aspect-square group transition-all duration-500 ${
                  i >= 2 ? 'hidden sm:block' : ''
                } ${
                  galleryRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                <img
                  src={`https://images.unsplash.com/${item.src}?auto=format&fit=crop&q=80&w=300&h=300`}
                  alt={item.label}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 transition-transform duration-300 group-hover:translate-y-0 translate-y-1">
                  <p className="text-white text-xs sm:text-sm font-medium">
                    <span className="sm:hidden">{item.mobileLabel}</span>
                    <span className="hidden sm:inline">{item.label}</span>
                  </p>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 bg-primary-500/20"></div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className={`mt-8 sm:mt-12 text-center transition-all duration-700 delay-500 ${
            galleryRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <a
              href={`tel:${BRAND.phone.replace(/\D/g, '')}`}
              className="group inline-flex items-center gap-2 sm:gap-3 bg-neutral-900 hover:bg-neutral-800 active:bg-neutral-800 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] w-full sm:w-auto justify-center"
            >
              <Phone className="w-5 h-5 transition-transform group-hover:rotate-12" />
              <span className="sm:hidden">Call {BRAND.phone}</span>
              <span className="hidden sm:inline">Start Your Journey — Call {BRAND.phone}</span>
            </a>
            <p className="text-neutral-500 text-xs sm:text-sm mt-2 sm:mt-3">No obligation. Free 5-minute consultation.</p>
          </div>
        </div>
      </div>

      {/* Areas Served */}
      <div ref={areasRef.ref} className="bg-primary-600 py-6 sm:py-8 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
            <div className={`flex items-center gap-2 sm:gap-3 text-white transition-all duration-500 ${
              areasRef.isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <Users className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="font-semibold text-sm sm:text-base">Serving {BRAND.city} & {BRAND.region}</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {SERVICE_AREAS.map((area, i) => (
                <span
                  key={area}
                  className={`bg-white/20 text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-500 hover:bg-white/30 hover:scale-105 cursor-default ${
                    areasRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${i * 75}ms` }}
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-10deg); }
          75% { transform: rotate(10deg); }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

export default SuccessGallery;
