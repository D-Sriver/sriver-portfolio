export interface Project {
  title: string;
  description: string;
  technologies: string;
  github?: string;
  liveUrl?: string; // Nouveau champ pour l'URL du projet en ligne
}

export const projects: Project[] = [
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
    liveUrl: 'https://hunter-remix.vercel.app/' // URL fictive, à remplacer par la vraie
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
