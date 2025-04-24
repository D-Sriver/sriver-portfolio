export interface Project {
  title: string;
  description: string;
  technologies: string;
  github?: string;
  liveUrl?: string; // Nouveau champ pour l'URL du projet en ligne
}

export const projects: Project[] = [
  { 
    title: 'Site e-commerce e-learning avec dashboard', 
    description: 'Réalisation de site web complet permetant de vendre des formation avec interface intuitive + blog',
    technologies: 'React, TypeScript, framer, supabase, zustand',
    github: 'https://github.com/D-Sriver/ireneG',
    liveUrl: 'https://irene-g.vercel.app/'
  },
  { 
    title: 'applicaton web de suivis de contenu', 
    description: 'Site de backlog en local utilisant taillwind4',
    technologies: 'React, TypeScript, framer, zod, zustand',
    github: 'https://github.com/D-Sriver/Suivi-du-contenu/',
    liveUrl: 'https://suivi-du-contenu.vercel.app/'
  },
  { 
    title: 'Job Finder', 
    description: "Site de recuperation d'annonce de réaliser de recherche de job",
    technologies: 'React, TypeScript, recharts, axios, shadcn',
    github: 'https://github.com/D-Sriver/JobFinder',
    liveUrl: 'job-finder-seven-tau.vercel.app'
  },
  { 
    title: 'Projet d\'automatisation en Node de création de site en React depuis le terminal', 
    description: 'Un outil en ligne de commande pour générer des applications React.',
    technologies: 'Node.js, React, CLI',
    github: 'https://github.com/D-Sriver/reactcreator'
  },
  { 
    title: 'Site utilisant TreeJS', 
    description: 'Un jeu isomérique interactif en treeJS',
    technologies: 'React, TreeJS, TypeScript',
    github: 'https://github.com/D-Sriver/HunterRemix',
    liveUrl: 'https://hunter-remix.vercel.app/'
  },
  {
    title: 'Test de projet Strapi',
    description: 'Un site de test Strapi en suivant un tutoriel.',
    technologies: 'React, Redux, TypeScript, Tailwind CSS, Strapi',
    github: 'https://github.com/D-Sriver/zds-news',
  },
  {
    title: 'Site d\'aide à la configuration de projet web',
    description: 'Un site pour aider à la configuration de projet web.',
    technologies: 'React, Redux, TypeScript, Tailwind CSS',
    github: 'https://github.com/D-Sriver/create-easy-web',
    liveUrl: 'https://create-easy-web.vercel.app/' // URL fictive, à remplacer par la vraie
  }
]
