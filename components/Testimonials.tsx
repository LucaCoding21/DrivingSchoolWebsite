import React, { useRef, useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: '1',
    name: 'Emily W.',
    location: 'Kelowna',
    content: 'I was really nervous about driving, but my instructor was so patient. Passed my N test on the first try!',
    shortContent: 'So patient! Passed my N test on the first try!',
    rating: 5,
  },
  {
    id: '2',
    name: 'Marcus C.',
    location: 'Rutland',
    content: 'Great value for money. The instructors really know the roads and taught my son everything he needed.',
    shortContent: 'Great value. Taught my son everything!',
    rating: 5,
  },
  {
    id: '3',
    name: 'Aisha P.',
    location: 'Glenmore',
    content: 'As a newcomer to Canada, I needed to learn BC rules. They made it easy and I feel confident now.',
    shortContent: 'Made learning BC rules easy. Very confident now!',
    rating: 5,
  },
  {
    id: '4',
    name: 'Ryan T.',
    location: 'Mission',
    content: 'Most affordable driving school I found. Excellent quality instruction. Highly recommend!',
    shortContent: 'Most affordable + excellent quality!',
    rating: 5,
  },
  {
    id: '5',
    name: 'Sarah K.',
    location: 'West Kelowna',
    content: 'My daughter passed on her first attempt! They covered everything from parking to highway driving.',
    shortContent: 'Daughter passed first attempt!',
    rating: 5,
  },
  {
    id: '6',
    name: 'James A.',
    location: 'Lake Country',
    content: 'Very organized and professional. Great communication throughout. Passed my Class 5!',
    shortContent: 'Very professional. Passed Class 5!',
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const scrollEl = scrollRef.current;
    if (scrollEl) {
      scrollEl.addEventListener('scroll', checkScrollButtons);
      return () => scrollEl.removeEventListener('scroll', checkScrollButtons);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth * 0.85;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="reviews" className="py-12 sm:py-16 lg:py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <p className="text-primary-600 font-semibold text-xs sm:text-sm uppercase tracking-wide mb-2 sm:mb-3">
            Reviews
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-3 sm:mb-4">
            What Our Students Say
          </h2>
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-neutral-600 text-sm sm:text-base">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={16} className="text-yellow-400 fill-yellow-400 sm:w-5 sm:h-5" />
              ))}
            </div>
            <span className="font-medium">5.0</span>
            <span className="text-neutral-400">|</span>
            <span className="text-xs sm:text-base">500+ Google reviews</span>
          </div>
        </div>

        {/* Mobile: Horizontal scroll carousel */}
        <div className="lg:hidden relative">
          {/* Scroll buttons */}
          <button
            onClick={() => scroll('left')}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white shadow-lg rounded-full flex items-center justify-center transition-opacity ${
              canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scroll('right')}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white shadow-lg rounded-full flex items-center justify-center transition-opacity ${
              canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight size={18} />
          </button>

          {/* Scrollable container */}
          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-[85%] sm:w-[45%] bg-white rounded-xl p-4 sm:p-5 border border-neutral-200 snap-start"
              >
                <Quote size={20} className="text-primary-200 mb-3" />
                <p className="text-neutral-700 mb-4 leading-relaxed text-sm">
                  <span className="sm:hidden">"{testimonial.shortContent}"</span>
                  <span className="hidden sm:inline">"{testimonial.content}"</span>
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-neutral-900 text-sm">{testimonial.name}</p>
                    <p className="text-xs text-neutral-500">{testimonial.location}</p>
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll indicator dots */}
          <div className="flex justify-center gap-1.5 mt-4">
            {TESTIMONIALS.map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-neutral-300"
              />
            ))}
          </div>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-6 border border-neutral-200"
            >
              <Quote size={24} className="text-primary-200 mb-4" />
              <p className="text-neutral-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-neutral-900">{testimonial.name}</p>
                  <p className="text-sm text-neutral-500">{testimonial.location}</p>
                </div>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Link */}
        <div className="mt-8 sm:mt-10 lg:mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 active:text-primary-700 font-semibold text-sm sm:text-base"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            See all reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
