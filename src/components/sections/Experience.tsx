import { motion } from 'framer-motion';
import { experiences } from '../../lib/experiences';

export const Experience: React.FC = () => (
  <>
    <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-primary">Expérience</h2>
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div 
            key={exp.company}
            className="group border-l-4 border-gold-500/70 pl-4 py-2 relative overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {/* ... existing content ... */}
            <div className="relative z-10">
              <h3 className="text-lg sm:text-xl font-semibold text-primary-light group-hover:text-gold-400 transition-colors duration-300">{exp.position}</h3>
              <p className="text-sm sm:text-base text-foreground/80">{exp.company} | {exp.period}</p>
              <p className="text-sm sm:text-base text-foreground/60 mt-2">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </>
)