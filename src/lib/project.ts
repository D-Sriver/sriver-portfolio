export interface Project {
  title: string;
  description: string;
  technologies: string;
  github?: string;
  liveUrl?: string;
  image?: string;
  category: 'e-commerce' | 'portfolio' | 'application' | 'game' | 'cms' | 'tool';
  featured?: boolean;
  abandoned?: boolean;
  validated?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Rusty Learn',
    description: 'Plateforme d\'apprentissage interactive pour le langage Rust avec 11 chapitres progressifs, QCM intégrés et une mascotte sympathique. Un projet personnel pour rendre Rust accessible à tous.',
    technologies: 'React 19, TypeScript, Vite, TailwindCSS, MDX, PostgreSQL',
    github: 'https://github.com/D-Sriver/rusty_learn',
    category: 'application',
    featured: true,
    validated: true,
    image: '/images/projects/rusty.png'
  },
  { 
    title: 'Site e-learning Irène', 
    description: 'Plateforme de vente de formations en ligne avec système de paiement, dashboard administrateur et gestion des utilisateurs. Interface moderne et responsive.',
    technologies: 'React, TypeScript, Framer Motion, Supabase',
    github: 'https://github.com/D-Sriver/ireneG',
    liveUrl: 'https://irene-g.vercel.app/',
    category: 'e-commerce',
    featured: true,
    validated: true,
    image: '/images/projects/irene-g.png'
  },
  { 
    title: 'Job Finder', 
    description: 'Application de recherche d\'emploi avec système de filtres avancés, graphiques de visualisation des données et interface intuitive pour explorer le marché de l\'emploi.',
    technologies: 'React, TypeScript, Recharts, Axios',
    github: 'https://github.com/D-Sriver/JobFinder',
    liveUrl: 'https://job-finder-seven-tau.vercel.app',
    category: 'application',
    featured: true,
    validated: true,
    image: '/images/projects/JobFinder.png'
  },
  { 
    title: 'Backlog Tracker', 
    description: 'Application de suivi personnalisé pour films, séries, livres et autres contenus médias avec statistiques détaillées et système de notation.',
    technologies: 'React, TypeScript, Zustand, Framer Motion',
    github: 'https://github.com/D-Sriver/Suivi-du-contenu/',
    liveUrl: 'https://suivi-du-contenu.vercel.app/',
    category: 'application',
    abandoned: true,
    image: '/images/projects/Backlog.png'
  },
  { 
    title: 'HunterRemix', 
    description: 'Jeu web 3D interactif développé avec Three.js, featuring un environnement isométrique et des mécaniques de gameplay originales.',
    technologies: 'React, Three.js, TypeScript',
    github: 'https://github.com/D-Sriver/HunterRemix',
    liveUrl: 'https://hunter-remix.vercel.app/',
    category: 'game',
    abandoned: true,
    image: '/images/projects/Hunter.png'
  },
  { 
    title: 'ReactCreator CLI', 
    description: 'Outil en ligne de commande pour générer automatiquement des applications React avec configuration personnalisée et templates prêts à l\'emploi.',
    technologies: 'Node.js, CLI',
    github: 'https://github.com/D-Sriver/reactcreator',
    category: 'tool',
    abandoned: true,
    image: '/images/projects/ReactCreator.png'
  },
  {
    title: 'CMS Strapi',
    description: 'Application web développée avec Strapi CMS pour la gestion de contenu headless, avec interface d\'administration et API REST.',
    technologies: 'React, Strapi, TypeScript',
    github: 'https://github.com/D-Sriver/zds-news',
    category: 'cms',
    validated: true,
    image: '/images/projects/placeholder.svg'
  },
  {
    title: 'Create Easy Web',
    description: 'Interface de configuration automatisée pour projets web permettant de générer rapidement des setups personnalisés avec les outils modernes.',
    technologies: 'React, TypeScript, Tailwind CSS',
    github: 'https://github.com/D-Sriver/create-easy-web',
    liveUrl: 'https://create-easy-web.vercel.app/',
    category: 'tool',
    abandoned: true,
    image: '/images/projects/EasyDevSteps.png'
  }
]

export const categories = [
  { key: 'all', label: 'Tous les projets' },
  { key: 'e-commerce', label: 'E-commerce' },
  { key: 'application', label: 'Applications' },
  { key: 'game', label: 'Jeux' },
  { key: 'tool', label: 'Outils' },
  { key: 'cms', label: 'CMS' },
] as const;
