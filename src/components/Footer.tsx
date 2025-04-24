import { GlassmorphicCard } from './GlassmorphicCard';

export const Footer: React.FC = () => (
  <footer className="mt-auto">
    <GlassmorphicCard className="py-2 bg-linear-to-br from-gray-900/80 to-gray-800/80">
      <p className="text-center text-gold-100 text-sm">
        © {new Date().getFullYear()} Duez Sébastien. Tous droits réservés.
      </p>
    </GlassmorphicCard>
  </footer>
);