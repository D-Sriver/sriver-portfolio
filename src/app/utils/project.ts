export interface Project {
  title: string;
  description: string;
  technologies: string;
  github?: string;
}

export const projects: Project[] = [
  { 
    title: 'Projet d\'automatisation en Node de création de site en React depuis le terminal', 
    description: 'Un outil en ligne de commande pour générer des applications React.',
    technologies: 'Node.js, React, CLI',
    github: 'https://github.com/votre-username/projet-automatisation-react'
  },
  { 
    title: 'Site utilisant TreeJS', 
    description: 'Un site web interactif utilisant la bibliothèque TreeJS pour la visualisation de données.',
    technologies: 'React, TreeJS, D3.js',
    github: 'https://github.com/votre-username/projet-treejs'
  },
  { 
    title: 'Tous les projets OpenClassrooms', 
    description: 'Tous les projets réalisés cette année sur la plateforme OpenClassrooms.',
    technologies: 'React, Node.js, Styled Components, Redux, TypeScript, Axios, Redux, Scss, Tailwind CSS',
    github: 'https://github.com/votre-username/projets-openclassrooms'
  },
]