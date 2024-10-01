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
            className="group border-l-4 border-gold-500/70 pl-4 py-2 relative overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            
            {/* Effet de reflet doré animé */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out transform -skew-x-12 group-hover:animate-golden-shine-once" />

            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-primary-light group-hover:text-gold-400 transition-colors duration-300">{exp.position}</h3>
              <p className="text-foreground/80">{exp.company} | {exp.period}</p>
              <p className="text-foreground/60 mt-2">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </>
)