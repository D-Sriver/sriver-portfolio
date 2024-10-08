import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { projects } from '../app/utils/project';

export const Projects: React.FC = () => (
  <>
    <h2 className="text-3xl font-bold mb-6 text-primary">Projets</h2>
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <motion.a 
            key={project.title}
            href={project.github}
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-slate-800/10 border border-gold-600/50 p-6 rounded-xl shadow-md relative overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-gold-600/20 cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Effet de reflet doré animé */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out transform -skew-x-12 group-hover:animate-golden-shine-once" />

            <h3 className="text-xl font-semibold mb-2 text-primary-light relative z-10 group-hover:text-gold-400 transition-colors duration-300">{project.title}</h3>
            <p className="text-foreground/80 mb-4 relative z-10">{project.description}</p>
            <p className="text-foreground/60 text-sm mb-8 relative z-10">
              <span className="font-semibold">Technologies:</span> {project.technologies}
            </p>
            <div className="absolute bottom-4 right-4 text-foreground/60 group-hover:text-gold-400 transition-colors z-10">
              <Icon icon="mdi:github" width="32" height="32" />
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  </>
)