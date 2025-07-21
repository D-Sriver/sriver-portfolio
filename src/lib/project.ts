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
    title: 'Rusty Learn - Plateforme d\'apprentissage Rust',
    description: 'Plateforme d\'apprentissage interactive dédiée au langage Rust avec une approche pédagogique accessible. Propose un cours complet structuré en 11 chapitres progressifs, accompagné de "Rusty le crabe" comme mascotte. Comprend des QCM interactifs, un système de progression utilisateur, authentification, et contenu MDX pour une expérience d\'apprentissage moderne et engageante.',
    technologies: 'React 19, TypeScript, Vite, TailwindCSS, MDX, Zustand, GSAP, Hono, Drizzle ORM, PostgreSQL, Bun',
    github: 'https://github.com/D-Sriver/rusty_learn',
    category: 'application',
    featured: true,
    image: '/images/projects/rusty.png'
  },
  { 
    title: 'Site e-commerce e-learning avec dashboard', 
    description: 'Plateforme e-learning complète développée avec React et TypeScript. Comprend un système de vente de formations en ligne, un dashboard administrateur pour la gestion des cours, un système de blog intégré, et une interface utilisateur moderne avec animations fluides. Authentification sécurisée et base de données temps réel avec Supabase.',
    technologies: 'React, TypeScript, Framer Motion, Supabase, Zustand',
    github: 'https://github.com/D-Sriver/ireneG',
    liveUrl: 'https://irene-g.vercel.app/',
    category: 'e-commerce',
    featured: true,
    validated: true,
    image: '/images/projects/irene-g.png'
  },
  { 
    title: 'Application web de suivi de contenu', 
    description: 'Application de gestion personnelle développée pour organiser et suivre différents types de contenus médias (films, séries, livres, jeux). Interface moderne utilisant Tailwind CSS 4, gestion d\'état avec Zustand, validation des données avec Zod, et stockage local pour une utilisation hors ligne. Système de filtres avancés et statistiques personnalisées.',
    technologies: 'React, TypeScript, Framer Motion, Zod, Zustand',
    github: 'https://github.com/D-Sriver/Suivi-du-contenu/',
    liveUrl: 'https://suivi-du-contenu.vercel.app/',
    category: 'application',
    abandoned: true,
    image: '/images/projects/Backlog.png'
  },
  { 
    title: 'Job Finder', 
    description: "Plateforme de recherche d'emploi moderne qui agrège des offres d'emploi provenant de diverses sources. Interface intuitive avec système de filtres avancés, graphiques interactifs pour visualiser les tendances du marché, sauvegarde des favoris, et tableau de bord personnalisé. Utilise des APIs externes pour récupérer les données en temps réel.",
    technologies: 'React, TypeScript, Recharts, Axios, ShadCN',
    github: 'https://github.com/D-Sriver/JobFinder',
    liveUrl: 'https://job-finder-seven-tau.vercel.app',
    category: 'application',
    featured: true,
    validated: true,
    image: '/images/projects/jobFinder.png'
  },
  { 
    title: 'ReactCreator - Générateur d\'applications React', 
    description: 'Outil CLI automatisé pour la création rapide d\'applications React avec configuration personnalisée. Génère automatiquement la structure de projet, installe les dépendances, configure les outils de développement (ESLint, Prettier), et crée des templates de composants. Simplifie le processus de démarrage pour les développeurs React.',
    technologies: 'Node.js, React, CLI',
    github: 'https://github.com/D-Sriver/reactcreator',
    category: 'tool',
    abandoned: true,
    image: '/images/projects/ReactCreator.png'
  },
  { 
    title: 'HunterRemix - Jeu interactif Three.js', 
    description: 'Jeu web interactif en vue isométrique développé avec Three.js. Environnement 3D immersif avec système de mouvement fluide, interactions avec les objets, gestion des collisions, et effets visuels avancés. Optimisé pour les performances web avec rendu efficace et responsive design pour tous les appareils.',
    technologies: 'React, Three.js, TypeScript',
    github: 'https://github.com/D-Sriver/HunterRemix',
    liveUrl: 'https://hunter-remix.vercel.app/',
    category: 'game',
    abandoned: true,
    image: '/images/projects/Hunter.png'
  },
  {
    title: 'Projet de découverte Strapi CMS',
    description: 'Application web développée pour explorer les fonctionnalités de Strapi en tant que CMS headless. Implémentation d\'un système de gestion de contenu avec API REST, interface d\'administration personnalisée, gestion des utilisateurs et des rôles, et intégration front-end avec React pour afficher le contenu dynamiquement.',
    technologies: 'React, Redux, TypeScript, Tailwind CSS, Strapi',
    github: 'https://github.com/D-Sriver/zds-news',
    category: 'cms',
    validated: true,
    image: '/images/projects/placeholder.svg'
  },
  {
    title: 'Create Easy Web - Assistant de configuration',
    description: 'Outil web interactif conçu pour simplifier la configuration initiale de projets web. Interface guidée pour choisir les technologies, frameworks, et outils de développement. Génère automatiquement les fichiers de configuration, les scripts de build, et la documentation de démarrage. Idéal pour les développeurs qui veulent démarrer rapidement leurs projets.',
    technologies: 'React, Redux, TypeScript, Tailwind CSS',
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
