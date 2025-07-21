'use client'

import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '55206a88-9508-4c18-955b-f589fa2bd94a',
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Erreur envoi');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const contactInfo = [
    {
      icon: 'mdi:email',
      label: 'Email',
      value: 'duez.s@ik.me',
      link: 'mailto:duez.s@ik.me'
    },
    {
      icon: 'mdi:linkedin',
      label: 'LinkedIn',
      value: 'Sébastien Duez',
      link: 'https://www.linkedin.com/in/sebastien-duez/'
    },
    {
      icon: 'mdi:github',
      label: 'GitHub',
      value: 'D-Sriver',
      link: 'https://github.com/D-Sriver'
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-primary">Contact</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Informations de contact */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gold-400">Parlons de votre projet</h3>
            <p className="text-foreground/80 mb-6">
              Je suis toujours intéressé par de nouveaux projets et opportunités. 
              N&apos;hésitez pas à me contacter pour discuter de vos idées !
            </p>
          </div>

          <div className="space-y-4">
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center p-3 bg-slate-800/10 border border-gold-600/30 rounded-lg hover:border-gold-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-10 h-10 mr-3 flex items-center justify-center text-gold-400 group-hover:text-gold-300">
                  <Icon icon={item.icon} width="24" height="24" />
                </div>
                <div>
                  <p className="text-sm text-foreground/60">{item.label}</p>
                  <p className="text-foreground/90 group-hover:text-gold-300 transition-colors">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Formulaire de contact */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-slate-800/10 border border-gold-600/30 rounded-lg p-6"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">
                Nom *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-gray-800/50 border border-gold-600/30 rounded-md text-foreground focus:border-gold-500 focus:ring-1 focus:ring-gold-500 focus:outline-none transition-colors"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-gray-800/50 border border-gold-600/30 rounded-md text-foreground focus:border-gold-500 focus:ring-1 focus:ring-gold-500 focus:outline-none transition-colors"
                placeholder="votre@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-3 py-2 bg-gray-800/50 border border-gold-600/30 rounded-md text-foreground focus:border-gold-500 focus:ring-1 focus:ring-gold-500 focus:outline-none transition-colors resize-vertical"
                placeholder="Votre message..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-4 rounded-md font-medium transition-all duration-300 ${
                isSubmitting 
                  ? 'bg-gray-600 cursor-not-allowed' 
                  : 'bg-gold-600 hover:bg-gold-500 active:bg-gold-700'
              } text-white`}
              whileHover={!isSubmitting ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <Icon icon="mdi:loading" className="animate-spin mr-2" width="20" height="20" />
                  Envoi en cours...
                </div>
              ) : (
                'Envoyer le message'
              )}
            </motion.button>

            {/* Status messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-green-500/10 border border-green-500/30 rounded-md text-green-400 text-sm"
              >
                <div className="flex items-center">
                  <Icon icon="mdi:check-circle" className="mr-2" width="16" height="16" />
                  Message envoyé avec succès !
                </div>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-red-500/10 border border-red-500/30 rounded-md text-red-400 text-sm"
              >
                <div className="flex items-center">
                  <Icon icon="mdi:alert-circle" className="mr-2" width="16" height="16" />
                  Erreur lors de l&apos;envoi. Veuillez réessayer.
                </div>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};
