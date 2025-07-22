'use client'

import { Icon } from '@iconify/react'; // Assurez-vous d'avoir installé @iconify/react
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { AboutMe } from './sections/AboutMe';
import { AnimatedBackground } from './ui/AnimatedBackground';
import { Contact } from './sections/Contact';
import { Experience } from './sections/Experience';
import { Footer } from './Footer';
import { Header } from './Header';
import { Projects } from './sections/Projects';
import { SkillsAndTechnologies } from './sections/SkillsAndTechnologies';

const sections = [
  { key: 'aPropos', label: 'À propos' },
  { key: 'competences', label: 'Compétences' },
  { key: 'experience', label: 'Expérience' },
  { key: 'projets', label: 'Projets' },
  { key: 'contact', label: 'Contact' }
] as const;
type Section = typeof sections[number]['key'];

export function ReactDeveloperPortfolioComponent() {
  const [activeSection, setActiveSection] = useState<Section>('aPropos');
  const [dropPosition, setDropPosition] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateDropPosition = () => {
      const navElement = navRef.current;
      if (navElement) {
        const activeButton = navElement.querySelector(`button[data-section="${activeSection}"]`) as HTMLButtonElement;
        if (activeButton) {
          const { offsetLeft, offsetWidth } = activeButton;
          setDropPosition({ left: offsetLeft, width: offsetWidth });
        }
      }
    };

    updateDropPosition();
    window.addEventListener('resize', updateDropPosition);
    return () => window.removeEventListener('resize', updateDropPosition);
  }, [activeSection]);

  return (
    <div className="min-h-screen flex flex-col text-gray-100 relative overflow-hidden">
      <AnimatedBackground />
      <div className="grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 relative z-10">
        <Header />

        {/* Navigation pour mobile */}
        <div className="md:hidden fixed top-4 right-4 z-50">
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg bg-gold-600/20 text-gold-400 hover:bg-gold-600/30 transition-colors duration-300"
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
          >
            <Icon icon={isMobileMenuOpen ? "mdi:close" : "mdi:menu"} width="38" height="38" />
          </motion.button>
        </div>
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed top-4 right-4 left-4 bg-gray-800/40 border border-gold-600/50 backdrop-blur-md rounded-md shadow-lg overflow-hidden z-40 gap-4"
            >
              {sections.map(({ key, label }) => (
                <motion.button
                  key={key}
                  onClick={() => {
                    setActiveSection(key);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left font-bold px-8 py-6 hover:bg-gold-700/30 transition-colors duration-200 hover:transition-all "
                >
                  {label}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation pour desktop */}
        <nav className="my-1 sm:my-4 relative hidden md:block" ref={navRef}>
          <div className="flex justify-around items-center rounded-full p-1">
            {sections.map(({ key, label }) => (
              <button
                key={key}
                data-section={key}
                onClick={() => setActiveSection(key)}
                className="relative z-10 px-4 py-2 rounded-full w-32 border-2 border-gold-600/50 transition-colors hover:border-gold-500/50 overflow-hidden group"
              >
                {/* Effet de reflet doré persistant */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-gold-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out" />
                
                {/* Effet de reflet doré animé */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-gold-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out transform -skew-x-12 group-hover:animate-golden-shine-once" />
                
                <span className={`relative z-10 ${
                  activeSection === key ? 'text-gray-900 font-bold' : 'text-gray-300 group-hover:text-white'
                }`}>
                  {label}
                </span>
              </button>
            ))}
            <motion.div
              className="absolute z-0 bg-gold-500 rounded-full"
              initial={false}
              animate={{
                left: dropPosition.left,
                width: dropPosition.width,
              }}
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 30
              }}
              style={{
                height: '80%',
                top: '10%',
              }}
            />
          </div>
        </nav>

        <main className={`grow transition-all duration-300 ${isMobileMenuOpen ? 'blur-xs' : ''}`}>
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-linear-to-br from-gray-900/10 backdrop-blur-xs rounded-xl shadow-lg p-4 sm:p-6 border border-gold-600/50"
          >
            {activeSection === 'aPropos' && <AboutMe />}
            {activeSection === 'competences' && <SkillsAndTechnologies />}
            {activeSection === 'experience' && <Experience />}
            {activeSection === 'projets' && <Projects />}
            {activeSection === 'contact' && <Contact />}
          </motion.div>
        </main>
      </div>

      <Footer />
    </div>
  )
}
