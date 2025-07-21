import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { skillGroups } from '../../lib/skill';

export const SkillsAndTechnologies: React.FC = () => {
  const [activeGroup, setActiveGroup] = useState(skillGroups[0].name);

  return (
    <div className="space-y-4 sm:space-y-6">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4 text-primary">Compétences et Technologies</h2>
      <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
        {skillGroups.map((group) => (
          <button
            key={group.name}
            onClick={() => setActiveGroup(group.name)}
            className={`px-2 py-1 sm:px-3 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
              activeGroup === group.name
                ? 'border border-gold-500/50 text-gray-300 bg-gold-500/10'
                : 'border border-gold-800/40 text-gray-300 hover:bg-gold-500/10 hover:border-gold-600/50'
            }`}
          >
            {group.name}
          </button>
        ))}
      </div>
      <motion.div 
        key={activeGroup}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4"
      >
        {skillGroups.find(group => group.name === activeGroup)?.skills.map((skill) => (
          <motion.a
            key={skill.name}
            href={skill.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center p-3 sm:p-4 bg-slate-800/10 border border-gold-900/50 rounded-lg shadow-md hover:border-gold-900/90 relative overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-gold-600/10 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            {/* Effet de reflet doré animé */}
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-gold-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out transform -skew-x-12 group-hover:animate-golden-shine-once" />

            <div className="w-10 h-10 sm:w-12 sm:h-12 mr-3 sm:mr-4 flex items-center justify-center relative z-10">
              <Icon 
                icon={skill.icon} 
                width="32" 
                height="32" 
                className={skill.name === 'GitHub' ? 'filter brightness-0 invert' : ''}
              />
            </div>
            <span className="text-base sm:text-lg font-medium text-gray-300 relative z-10 group-hover:text-gold-400 transition-colors duration-300">{skill.name}</span>
          </motion.a>
        ))}
      </motion.div>
      <p className="text-sm sm:text-base text-foreground/80 mt-4 sm:mt-6">
        Ces compétences techniques représentent mon expertise actuelle dans le développement web. Je reste constamment à l&apos;affût des nouvelles technologies pour enrichir et actualiser mes connaissances dans ce domaine en perpétuelle évolution.
      </p>
    </div>
  );
};
