import { ReactNode } from 'react';

interface GlassmorphicCardProps {
  children: ReactNode;
  className?: string;
}

// Ce composant semble être un élément UI réutilisable. Assurez-vous que tous les styles nécessaires sont inclus dans votre build.

export const GlassmorphicCard: React.FC<GlassmorphicCardProps> = ({ children, className = "" }) => (
  <div className={`relative overflow-hidden rounded-md bg-white/10 backdrop-blur-md border border-gold-600/50 ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black opacity-30"></div>
    <div className="relative z-10 p-4">{children}</div>
  </div>
)