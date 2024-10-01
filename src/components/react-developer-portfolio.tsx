'use client'

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { AboutMe } from './AboutMe';
import { AnimatedBackground } from './AnimatedBackground';
import { Experience } from './Experience';
import { Footer } from './Footer';
import { Header } from './Header';
import { Projects } from './Projects';
import { SkillsAndTechnologies } from './SkillsAndTechnologies';

const sections = ['aboutMe', 'skills', 'experience', 'projects'] as const;
type Section = typeof sections[number];

export function ReactDeveloperPortfolioComponent() {
  const [activeSection, setActiveSection] = useState<Section>('aboutMe');
  const [dropPosition, setDropPosition] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLDivElement>(null);

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
      <div className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <Header />

        <nav className="my-12 relative" ref={navRef}>
          <div className="flex justify-around items-center rounded-full p-1">
            {sections.map((section) => (
              <button
                key={section}
                data-section={section}
                onClick={() => setActiveSection(section)}
                className="relative z-10 px-4 py-2 rounded-full w-32 border border-gold-600/50 transition-colors hover:border-gold-500/50 overflow-hidden group"
              >
                {/* Effet de reflet doré persistant */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out" />
                
                {/* Effet de reflet doré animé */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out transform -skew-x-12 group-hover:animate-golden-shine-once" />
                
                <span className={`relative z-10 ${
                  activeSection === section ? 'text-gray-900' : 'text-gray-300 group-hover:text-white'
                }`}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
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

        <main className="flex-grow">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-gray-900/10 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gold-600/50"
          >
            {activeSection === 'aboutMe' && <AboutMe />}
            {activeSection === 'skills' && <SkillsAndTechnologies />}
            {activeSection === 'experience' && <Experience />}
            {activeSection === 'projects' && <Projects />}
          </motion.div>
        </main>
      </div>

      <Footer />
    </div>
  )
}