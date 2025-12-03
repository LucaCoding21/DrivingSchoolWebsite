/**
 * BRAND CONFIGURATION
 *
 * This is the SINGLE SOURCE OF TRUTH for all brand-specific content.
 * To do a brand pivot, only edit this file!
 *
 * See BRAND_PIVOT.md for instructions.
 */

// ============================================
// CORE BRAND IDENTITY
// ============================================
export const BRAND = {
  name: "Kelowna Driving School",
  shortName: "Kelowna Driving",
  logoLetter: "K",
  tagline: "Learn to drive with confidence.",

  // Contact Info
  phone: "778-363-4380",
  email: "malang40@hotmail.com",
  address: "1036 Rutland Rd N, Kelowna, BC",

  // Location
  city: "Kelowna",
  region: "Okanagan",
  province: "BC",
  certification: "ICBC Certified",
  highway: "Highway 97", // Main highway reference
};

// ============================================
// COLOR THEME
// ============================================
// Use https://uicolors.app to generate a palette from your brand color
export const COLORS = {
  primary: {
    50: '#f0f5f3',
    100: '#d9e8e1',
    200: '#b3d1c4',
    300: '#84b5a0',
    400: '#5a967d',
    500: '#4a7d68',
    600: '#3d6654',  // Main brand color
    700: '#345647',
    800: '#2d463c',
    900: '#263b33',
  },
};

// ============================================
// SERVICE AREAS
// ============================================
export const SERVICE_AREAS = [
  'Rutland',
  'Glenmore',
  'Mission',
  'Downtown',
  'W. Kelowna',
  'Lake Country',
];

// ============================================
// TESTIMONIALS
// ============================================
export const TESTIMONIALS = [
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

// ============================================
// FAQ CONTENT
// ============================================
export const FAQS = [
  {
    question: 'Do you provide a car for the road test?',
    shortQuestion: 'Car for road test?',
    answer: 'Yes! All our packages include car rental for your ICBC road test. We also offer a standalone warm-up lesson with car rental where we practice for 60 minutes before your test.',
    shortAnswer: 'Yes! All packages include car rental for your ICBC road test, plus a 60-min warm-up lesson.',
  },
  {
    question: `What areas of ${BRAND.city} do you cover?`,
    shortQuestion: 'Areas covered?',
    answer: `We cover all of ${BRAND.city} and surrounding areas including ${SERVICE_AREAS.slice(0, 5).join(', ')}. We offer free pickup from your home or school.`,
    shortAnswer: `All of ${BRAND.city}: ${SERVICE_AREAS.slice(0, 5).join(', ')}. Free pickup included!`,
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
    answer: `The fastest way is to call us directly at ${BRAND.phone}. We'll match you with an instructor who fits your schedule and discuss your learning goals.`,
    shortAnswer: 'Just call us! We\'ll match you with an instructor.',
  },
  {
    question: 'What qualifications do your instructors have?',
    shortQuestion: 'Instructor qualifications?',
    answer: `All our instructors are ICBC certified, fully licensed under the Motor Vehicle Act, and have extensive local driving experience in ${BRAND.city}.`,
    shortAnswer: 'ICBC certified, fully licensed, extensive local experience.',
  },
  {
    question: 'Do you train for both Class 5 and Class 7?',
    shortQuestion: 'Class 5 & 7 training?',
    answer: 'Yes! We offer training for both Class 7 (N) learners and Class 5 full license upgrades. Our instructors will prepare you for either test.',
    shortAnswer: 'Yes! Both Class 7 (N) and Class 5 full license.',
  },
];

// ============================================
// PRICING / PACKAGES
// ============================================
export const PACKAGES = [
  {
    id: '1hour',
    name: '1 Hour Lesson',
    shortName: '1 Hour',
    price: 60,
    duration: '1 hour',
    category: 'lessons',
    description: 'Standard driving lesson',
    shortDesc: 'Standard lesson',
  },
  {
    id: '1.5hour',
    name: '1.5 Hour Lesson',
    shortName: '1.5 Hour',
    price: 85,
    duration: '90 min',
    category: 'lessons',
    description: 'Extended practice session',
    shortDesc: 'Extended session',
    popular: true,
  },
  {
    id: 'class4-1.5',
    name: '1.5 Hour Class 4',
    shortName: 'Class 4 (1.5h)',
    price: 100,
    duration: '90 min',
    category: 'class',
    description: 'Class 4 including Pre-Trip',
    shortDesc: 'Class 4 + Pre-Trip',
  },
  {
    id: 'class4-1',
    name: '1 Hour Class 4',
    shortName: 'Class 4 (1h)',
    price: 70,
    duration: '1 hour',
    category: 'class',
    description: 'Class 4 including Pre-Trip',
    shortDesc: 'Class 4 + Pre-Trip',
  },
  {
    id: 'roadtest',
    name: 'Road Test Package',
    shortName: 'Road Test',
    price: 150,
    duration: '1 hour',
    category: 'roadtest',
    description: 'Car rental + warm-up lesson',
    shortDesc: 'Car + warm-up',
  },
  {
    id: 'class',
    name: 'Classroom Session',
    shortName: 'Classroom',
    price: 100,
    duration: '1 hour',
    category: 'class',
    description: 'ICBC knowledge prep',
    shortDesc: 'ICBC knowledge',
  },
];

// ============================================
// STATS (for social proof sections)
// ============================================
export const STATS = {
  passRate: 94,
  students: 2400,
  yearsExperience: 15,
  googleRating: 4.9,
  reviewCount: '500+',
};

// ============================================
// HERO SECTION CONTENT
// ============================================
export const HERO = {
  badge: `${BRAND.certification} · ${BRAND.city}, ${BRAND.province}`,
  headline: "Learn to drive",
  headlineAccent: "with confidence.",
  subheadline: `Patient instructors, flexible scheduling, and a ${STATS.passRate}% first-time pass rate. We'll pick you up anywhere in ${BRAND.city}.`,
  quickFeatures: ['Free Pickup', 'Car for Test', 'Flexible Hours', 'All Levels'],
};

// ============================================
// ABOUT/SUCCESS SECTION CONTENT
// ============================================
export const ABOUT = {
  headline: "From nervous beginner to",
  headlineAccent: "confident driver",
  description: `Our instructors are experienced local drivers who've seen every road condition in ${BRAND.city}. We don't just teach you to pass—we teach you to drive safely for life.`,
  benefits: [
    'Free pickup from home, school, or work',
    'Practice on actual ICBC test routes',
    'Car rental included for your road test',
    'Flexible scheduling, 7 days a week',
  ],
  badges: [
    { title: 'Dual-Control', fullTitle: 'Dual-Control Vehicles', desc: 'Instructor brake access', fullDesc: 'Maximum safety with instructor brake access', icon: '🛡️' },
    { title: 'Local Experts', fullTitle: 'Local Road Experts', desc: 'Know every route', fullDesc: 'Experienced drivers who know every route', icon: '🗺️' },
    { title: 'Easy Payments', fullTitle: 'Flexible Payments', desc: '2-3 installments', fullDesc: 'Split into 2-3 easy installments', icon: '💳' },
    { title: 'All Areas', fullTitle: 'All Areas Covered', desc: `${BRAND.city} & more`, fullDesc: SERVICE_AREAS.slice(0, 4).join(', '), icon: '📍' },
  ],
  galleryQuote: `"I was terrified of driving. Now I drive on ${BRAND.highway} with confidence!"`,
  galleryAuthor: 'Sarah M. — Passed Class 7',
};
