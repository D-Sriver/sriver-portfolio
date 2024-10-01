import { motion } from 'framer-motion';
import { experiences } from '../app/utils/experiences';

export const Experience: React.FC = () => (
  <>
    <h2 className="text-3xl font-bold mb-6 text-primary">Expérience</h2>
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div 
            key={exp.company}
            className="border-l-4 border-gold-500/70 pl-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold text-primary-light">{exp.position}</h3>
            <p className="text-foreground/80">{exp.company} | {exp.period}</p>
            <p className="text-foreground/60 mt-2">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </>
)