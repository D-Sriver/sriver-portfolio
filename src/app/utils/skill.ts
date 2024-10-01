export interface Skill {
  name: string;
  icon: string;
  url: string; // Nouvelle propriété
}

export const skillGroups = [
  {
    name: 'Langages et technologies front-end',
    skills: [
      { name: 'HTML5', icon: 'logos:html-5', url: 'https://developer.mozilla.org/fr/docs/Web/HTML' },
      { name: 'CSS3', icon: 'logos:css-3', url: 'https://developer.mozilla.org/fr/docs/Web/CSS' },
      { name: 'JavaScript', icon: 'logos:javascript', url: 'https://developer.mozilla.org/fr/docs/Web/JavaScript' },
      { name: 'TypeScript', icon: 'logos:typescript-icon', url: 'https://www.typescriptlang.org/' },
      { name: 'Sass', icon: 'logos:sass', url: 'https://sass-lang.com/' },
    ]
  },
  {
    name: 'Frameworks et bibliothèques',
    skills: [
      { name: 'React', icon: 'logos:react', url: 'https://reactjs.org/' },
      { name: 'Next.js', icon: 'logos:nextjs-icon', url: 'https://nextjs.org/' },
      { name: 'Redux', icon: 'logos:redux', url: 'https://redux.js.org/' },
      { name: 'React Router', icon: 'logos:react-router', url: 'https://reactrouter.com/' },
      { name: 'Material-UI', icon: 'logos:material-ui', url: 'https://mui.com/' },
      { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon', url: 'https://tailwindcss.com/' },
      { name: 'Bootstrap', icon: 'logos:bootstrap', url: 'https://getbootstrap.com/' },
      { name: 'styled-components', icon: 'file-icons:styledcomponents', url: 'https://styled-components.com/' },
      { name: 'Framer Motion', icon: 'logos:framer', url: 'https://www.framer.com/motion/' },
      { name: 'Axios', icon: 'simple-icons:axios', url: 'https://axios-http.com/' },
    ]
  },
  {
    name: 'Outils de développement',
    skills: [
      { name: 'Git', icon: 'logos:git-icon', url: 'https://git-scm.com/' },
      { name: 'GitHub', icon: 'logos:github-icon', url: 'https://github.com/' },
      { name: 'Vite', icon: 'logos:vitejs', url: 'https://vitejs.dev/' },
      { name: 'ESLint', icon: 'logos:eslint', url: 'https://eslint.org/' },
      { name: 'Prettier', icon: 'logos:prettier', url: 'https://prettier.io/' },
      { name: 'npm', icon: 'logos:npm-icon', url: 'https://www.npmjs.com/' },
      { name: 'yarn', icon: 'logos:yarn', url: 'https://yarnpkg.com/' },
      { name: 'pnpm', icon: 'logos:pnpm', url: 'https://pnpm.io/' },
    ]
  },
  {
    name: 'Backend, APIs et CMS',
    skills: [
      { name: 'Node.js', icon: 'logos:nodejs-icon', url: 'https://nodejs.org/' },
      { name: 'Postman', icon: 'logos:postman-icon', url: 'https://www.postman.com/' },
      { name: 'Strapi', icon: 'logos:strapi-icon', url: 'https://strapi.io/' },
      { name: 'WordPress', icon: 'logos:wordpress-icon', url: 'https://wordpress.com/' },
    ]
  },
  {
    name: 'Déploiement et DevOps',
    skills: [
      { name: 'Vercel', icon: 'logos:vercel-icon', url: 'https://vercel.com/' },
      { name: 'Bash', icon: 'logos:bash-icon', url: 'https://www.gnu.org/software/bash/' },
      { name: 'Lighthouse', icon: 'logos:lighthouse', url: 'https://developers.google.com/web/tools/lighthouse' },
    ]
  },
  {
    name: 'Design et outils graphiques',
    skills: [
      { name: 'Figma', icon: 'logos:figma', url: 'https://www.figma.com/' },
      { name: 'Adobe Photoshop', icon: 'logos:adobe-photoshop', url: 'https://www.adobe.com/products/photoshop.html' },
      { name: 'Adobe Illustrator', icon: 'logos:adobe-illustrator', url: 'https://www.adobe.com/products/illustrator.html' },
    ]
  },
]

