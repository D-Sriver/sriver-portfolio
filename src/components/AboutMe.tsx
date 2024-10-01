import { motion } from 'framer-motion';

export const AboutMe: React.FC = () => (
  <>
    <h2 className="text-3xl font-bold mb-4 text-primary">À propos de moi</h2>
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <p className="text-lg text-foreground/80">
        Je suis un développeur front-end React et un graphiste avec de l&apos;expérience. 
        <br />
        <br />
        Je me concentre sur la création d&apos;interfaces utilisateur intuitives et d&apos;expériences utilisateur, en utilisant les outils et les pratiques courantes de l&apos;écosystème React pour offrir des solutions solides.
        <br />
        <br />
        Je suis compétent dans la gestion d&apos;état avec Redux, la construction d&apos;applications avec Next.js, et la qualité du code par des tests approfondis.
        <br />
        <br />
        En tant que graphiste, j&apos;ai une solide compréhension de la théorie de la couleur, de la typographie et de la composition visuelle, ce qui m&apos;aide à concevoir des interfaces utilisateur fonctionnelles et esthétiques.
        Je suis ouvert à de nouveaux défis et prêt à apprendre dans ce domaine en constante évolution du développement web et du design graphique.
      </p>
    </motion.div>
  </>
)