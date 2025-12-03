import { ServicePackage, Testimonial, FaqItem, Instructor } from './types';
import { ShieldCheck, Clock, MapPin, Award, Zap, Heart, Car, Brain, Signpost, BookOpen, Users } from 'lucide-react';
import React from 'react';

export const COMPANY_NAME = "Kelowna Driving School";
export const COMPANY_PHONE = "778-363-4380";
export const COMPANY_EMAIL = "malang40@hotmail.com";
export const COMPANY_ADDRESS = "1036 Rutland Rd N, Kelowna, BC";

export const PACKAGES: ServicePackage[] = [
  {
    id: '1hour',
    title: '1 Hour Lesson',
    price: '$60',
    description: 'Standard driving lesson with pickup included.',
    features: [
      '1 Hour In-Car Training',
      'Free Pickup & Drop-off',
      'Personalized Instruction',
      'All Skill Levels Welcome'
    ],
    popular: false,
  },
  {
    id: '1.5hour',
    title: '1.5 Hour Lesson',
    price: '$85',
    description: 'Extended practice for more focused training.',
    features: [
      '90 Minutes In-Car Training',
      'Free Pickup & Drop-off',
      'Highway & City Practice',
      'Best Value Per Hour'
    ],
    popular: true,
  },
  {
    id: 'roadtest',
    title: 'Road Test Package',
    price: '$150',
    description: 'Car rental and warm-up lesson for your ICBC road test.',
    features: [
      '1 Hour Warm-up Lesson',
      'Car Rental for Road Test',
      'Practice on Test Routes',
      'Pick up from ICBC Location'
    ],
    popular: false,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Emily Wilson',
    role: 'Passed Class 7',
    content: "I was so nervous about driving, but my instructor was patient and helped me build confidence. Passed my road test on the first try at the Kelowna ICBC!",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    rating: 5,
  },
  {
    id: '2',
    name: 'Marcus Chen',
    role: 'Parent from Kelowna',
    content: "Our instructors are experienced local drivers who know every road in the city. They taught my son to drive safely in all conditions. Highly recommend!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    rating: 5,
  },
  {
    id: '3',
    name: 'Aisha Patel',
    role: 'Newcomer to Canada',
    content: "As a newcomer, I needed to understand BC driving rules. Kelowna Driving School made it easy. Now I drive confidently on Highway 97!",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150",
    rating: 5,
  },
];

export const FEATURES = [
  {
    icon: <Car className="w-6 h-6 text-brand-600" />,
    title: "Safe & Modern Vehicles",
    description: "Learn in well-maintained vehicles with dual-brake controls, backup cameras, and 5-star safety ratings for your peace of mind."
  },
  {
    icon: <MapPin className="w-6 h-6 text-brand-600" />,
    title: "Local Road Experts",
    description: "Our instructors are experienced local drivers who know every road condition in Kelowna. We train you on actual ICBC test routes."
  },
  {
    icon: <Clock className="w-6 h-6 text-brand-600" />,
    title: "Convenient Pickup",
    description: "Free pickup from your home or school in Kelowna and surrounding areas. We work around your schedule."
  },
  {
    icon: <Award className="w-6 h-6 text-brand-600" />,
    title: "Affordable Prices",
    description: "We offer the most affordable driving lessons in town without compromising on quality. Certified and licensed under the Motor Vehicle Act."
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "Do you offer car rental for the ICBC road test?",
    answer: "Yes! All our comprehensive packages include car rental for your exam day. We also offer a standalone 'Warm-up + Car Rental' service where we practice for 60 minutes before your test."
  },
  {
    question: "Which areas of Kelowna do you cover?",
    answer: "We cover all of Kelowna and surrounding areas including Rutland, Glenmore, Mission, Downtown, and West Kelowna. We offer free pickup from your home or school."
  },
  {
    question: "Can I pay in installments?",
    answer: "Absolutely! For our larger packages (Beginner and Class 5 Prep), we offer flexible payment options. You can split the payment into two or three installments."
  },
  {
    question: "How do I book my first lesson?",
    answer: "The fastest way is to call us at 778-363-4380. We'll match you with an instructor who fits your schedule. We're a small home-based company, so you'll always get personalized attention."
  },
  {
    question: "What qualifications do your instructors have?",
    answer: "All our instructors are experienced local drivers who know the Kelowna roads in all different conditions. We are approved, certified and licensed under the Motor Vehicle Act."
  },
  {
    question: "Do you train for Class 5 and Class 7 tests?",
    answer: "Yes! We currently train new drivers for both their Class 5 and Class 7 Driver's tests. Our instructors will provide all the necessary training so you're fully prepared."
  },
];
