import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { skillGroups } from '../app/utils/skill';

export const SkillsAndTechnologies: React.FC = () => {
  const [activeGroup, setActiveGroup] = useState(skillGroups[0].name);

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-4 text-primary">Compétences et Technologies</h2>
      <div className="flex flex-wrap gap-4 mb-6">
        {skillGroups.map((group) => (
          <button
            key={group.name}
            onClick={() => setActiveGroup(group.name)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeGroup === group.name
                ? 'border border-gold-600/50 text-gray-300 bg-gold-500/10'
                : 'border border-gray-700 bg-gray-800 text-gray-300 hover:bg-gold-500/10 hover:border-gold-600/50'
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
        className="grid grid-cols-3 gap-4"
      >
        {skillGroups.find(group => group.name === activeGroup)?.skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center p-3 bg-slate-800/50 border border-slate-700 rounded-lg shadow-md hover:border hover:border-gold-600/50"
          >
            <div className="w-10 h-10 mr-3 flex items-center justify-center">
              <Icon 
                icon={skill.icon} 
                width="28" 
                height="28" 
                className={skill.name === 'GitHub' ? 'filter brightness-0 invert' : ''}
              />
            </div>
            <span className="text-sm font-medium text-gray-300">{skill.name}</span>
          </div>
        ))}
      </motion.div>
      <p className="text-lg text-foreground/80 mt-6">
        Ces compétences techniques représentent mon expertise actuelle dans le développement web. Je reste constamment à l&apos;affût des nouvelles technologies pour enrichir et actualiser mes connaissances dans ce domaine en perpétuelle évolution.
      </p>
    </div>
  );
};