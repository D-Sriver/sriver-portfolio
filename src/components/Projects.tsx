import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { projects } from '../app/utils/project';

export const Projects: React.FC = () => (
  <>
    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-primary">Projets</h2>
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="grid grid-cols-1 gap-4 sm:gap-6">
        {projects.map((project) => (
          <motion.div 
            key={project.title}
            className="group bg-slate-800/10 border border-gold-600/50 p-3 sm:p-4 rounded-xl shadow-md relative overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-gold-600/20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Effet de reflet doré animé */}
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-gold-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out transform -skew-x-12 group-hover:animate-golden-shine-once" />

            <h3 className="text-xl font-semibold mb-2 text-primary-light relative z-10 group-hover:text-gold-400 transition-colors duration-300">{project.title}</h3>
            <p className="text-foreground/80 mb-4 relative z-10">{project.description}</p>
            <p className="text-foreground/60 text-sm mb-8 relative z-10">
              <span className="font-semibold">Technologies:</span> {project.technologies}
            </p>
            <div className="flex mt-4 space-x-4">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gold-400 hover:text-gold-300 transition-colors">
                  <Icon icon="mdi:github" width="24" height="24" />
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gold-400 hover:text-gold-300 transition-colors">
                  <Icon icon="mdi:web" width="24" height="24" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </>
)
