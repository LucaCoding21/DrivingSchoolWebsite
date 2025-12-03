export interface ServicePackage {
  id: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string; // e.g., "Passed First Try"
  content: string;
  avatar: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Instructor {
  name: string;
  bio: string;
  image: string;
  experience: string;
}