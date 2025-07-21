'use client'

import { motion } from 'framer-motion';
import { useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Marie Dubois",
    role: "Chef de projet",
    company: "TechInnovation",
    content: "Sébastien a livré un travail exceptionnel sur notre site e-commerce. Son attention aux détails et sa maîtrise de React ont vraiment impressionné toute l&apos;équipe.",
    rating: 5
  },
  {
    id: 2,
    name: "Pierre Martin",
    role: "Directeur technique",
    company: "Digital Solutions",
    content: "Un développeur très professionnel avec une excellente compréhension des besoins client. Les animations et l&apos;UX qu&apos;il a créées sont remarquables.",
    rating: 5
  },
  {
    id: 3,
    name: "Sophie Laurent",
    role: "UX Designer",
    company: "CreativeAgency",
    content: "La collaboration avec Sébastien a été parfaite. Il sait traduire les maquettes en interfaces fluides et responsives avec une précision remarquable.",
    rating: 5
  }
];

export const Testimonials: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${i < rating ? 'text-gold-400' : 'text-gray-400'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-primary">Témoignages</h2>
      
      <div className="relative">
        {/* Testimonial principal */}
        <motion.div
          key={activeTestimonial}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-slate-800/10 border border-gold-600/30 rounded-lg p-6 mb-6"
        >
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-gold-600/20 rounded-full flex items-center justify-center text-gold-400 font-semibold text-xl">
              {testimonials[activeTestimonial].name.charAt(0)}
            </div>
            <div className="flex-1">
              <div className="flex items-center mb-2">
                {renderStars(testimonials[activeTestimonial].rating)}
              </div>
              <blockquote className="text-foreground/90 mb-4 italic">
                &ldquo;{testimonials[activeTestimonial].content}&rdquo;
              </blockquote>
              <div>
                <p className="font-semibold text-gold-400">
                  {testimonials[activeTestimonial].name}
                </p>
                <p className="text-sm text-foreground/60">
                  {testimonials[activeTestimonial].role} • {testimonials[activeTestimonial].company}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation des témoignages */}
        <div className="flex justify-center space-x-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                index === activeTestimonial
                  ? 'border-gold-500 bg-gold-500/10'
                  : 'border-gold-600/30 hover:border-gold-500/50'
              }`}
            >
              <span className="text-gold-400 font-semibold">
                {testimonials[index].name.charAt(0)}
              </span>
            </button>
          ))}
        </div>

        {/* Grille de témoignages pour desktop */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-4 mt-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className={`bg-slate-800/10 border rounded-lg p-4 cursor-pointer transition-all duration-300 ${
                index === activeTestimonial
                  ? 'border-gold-500 shadow-lg shadow-gold-500/10'
                  : 'border-gold-600/30 hover:border-gold-500/50'
              }`}
              onClick={() => setActiveTestimonial(index)}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-2">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-sm text-foreground/80 mb-3 line-clamp-3">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-gold-400 text-sm">
                  {testimonial.name}
                </p>
                <p className="text-xs text-foreground/60">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
