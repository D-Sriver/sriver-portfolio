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
        {projects.map((project, index) => (
          <motion.div 
            key={project.title}
            className="bg-slate-800/10 border border-gold-600/50 p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-primary-light">{project.title}</h3>
            <p className="text-foreground/80 mb-4">{project.description}</p>
            <p className="text-foreground/60 text-sm">
              <span className="font-semibold">Technologies:</span> {project.technologies}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </>
)