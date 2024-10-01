import { motion } from 'framer-motion';

export const Header: React.FC = () => (
  <div className="py-6 backdrop-blur-sm">
    <motion.h1 
      className="text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-700"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      Duez Sébastien
    </motion.h1>
    <motion.div
      className="h-1 w-32 mx-auto bg-gradient-to-r from-gold-400 to-gold-600 rounded-full mb-6"
      initial={{ width: 0 }}
      animate={{ width: 128 }}
      transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
    />
    <motion.p 
      className="text-3xl text-gold-100 font-light tracking-wide"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.8 }}
    >
      Développeur Front-end React & Graphiste Publicitaire
    </motion.p>
  </div>
)