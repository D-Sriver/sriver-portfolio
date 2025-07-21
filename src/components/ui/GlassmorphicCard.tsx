import { ReactNode } from 'react';

interface GlassmorphicCardProps {
  children: ReactNode;
  className?: string;
}

// Ce composant semble être un élément UI réutilisable. Assurez-vous que tous les styles nécessaires sont inclus dans votre build.

export const GlassmorphicCard: React.FC<GlassmorphicCardProps> = ({ children, className = "" }) => (
  <div className={`relative overflow-hidden rounded-md bg-white/5 backdrop-blur-md border border-gold-600/50 ${className}`}>
    <div className="absolute inset-0 bg-linear-to-r from-black/10 to-black opacity-90"></div>
    <div className="relative z-10 p-4">{children}</div>
  </div>
)