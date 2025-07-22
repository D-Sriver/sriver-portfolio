'use client'

import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { categories, projects } from '../../lib/project';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="space-y-6">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-primary">Projets</h2>
      
      {/* Projets mis en avant */}
      {featuredProjects.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-gold-400">Projets mis en avant</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <motion.div 
                key={project.title}
                className="group bg-slate-800/10 border border-gold-600/50 rounded-xl shadow-md relative overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-gold-600/20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02 }}
              >
                {project.image && (
                  <div className="relative h-48 overflow-hidden rounded-t-xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                  </div>
                )}
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-primary-light relative z-10 group-hover:text-gold-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      {project.featured && (
                        <span className="text-xs px-2 py-1 bg-gold-600/20 text-gold-400 rounded-full">
                          Favori
                        </span>
                      )}
                      {project.validated && (
                        <span className="text-xs px-2 py-1 bg-green-600/20 text-green-400 rounded-full">
                          Terminé
                        </span>
                      )}
                      {project.abandoned && (
                        <span className="text-xs px-2 py-1 bg-blue-600/20 text-blue-400 rounded-full">
                          Gelé
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-foreground/80 mb-3 relative z-10 text-sm">
                    {project.description}
                  </p>
                  <p className="text-foreground/60 text-xs mb-4 relative z-10">
                    <span className="font-semibold">Technologies:</span> {project.technologies}
                  </p>
                  <div className="flex mt-3 space-x-4">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gold-400 hover:text-gold-300 transition-colors"
                        aria-label="Voir le code source"
                      >
                        <Icon icon="mdi:github" width="20" height="20" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gold-400 hover:text-gold-300 transition-colors"
                        aria-label="Voir le projet en ligne"
                      >
                        <Icon icon="mdi:web" width="20" height="20" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Filtres par catégorie */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category.key}
            onClick={() => setActiveCategory(category.key)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category.key
                ? 'border border-gold-500/50 text-gray-300 bg-gold-500/10'
                : 'border border-gold-800/40 text-gray-300 hover:bg-gold-500/10 hover:border-gold-600/50'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Grille de projets */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.title}
              className="group bg-slate-800/10 border border-gold-600/50 p-3 sm:p-4 rounded-xl shadow-md relative overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-gold-600/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Effet de reflet doré animé */}
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-gold-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out transform -skew-x-12 group-hover:animate-golden-shine-once" />

              {project.image && (
                <div className="relative h-32 mb-3 overflow-hidden rounded-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                </div>
              )}

              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-primary-light relative z-10 group-hover:text-gold-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  {project.featured && (
                    <span className="text-xs px-2 py-1 bg-gold-600/20 text-gold-400 rounded-full">
                      Favori
                    </span>
                  )}
                  {project.validated && (
                    <span className="text-xs px-2 py-1 bg-green-600/20 text-green-400 rounded-full">
                      Terminé
                    </span>
                  )}
                  {project.abandoned && (
                    <span className="text-xs px-2 py-1 bg-blue-600/20 text-blue-400 rounded-full">
                      Gelé
                    </span>
                  )}
                </div>
              </div>
              <p className="text-foreground/80 mb-3 relative z-10 text-sm">
                {project.description}
              </p>
              <p className="text-foreground/60 text-xs mb-4 relative z-10">
                <span className="font-semibold">Technologies:</span> {project.technologies}
              </p>
              <div className="flex mt-3 space-x-4">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gold-400 hover:text-gold-300 transition-colors"
                    aria-label="Voir le code source"
                  >
                    <Icon icon="mdi:github" width="20" height="20" />
                  </a>
                )}
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gold-400 hover:text-gold-300 transition-colors"
                    aria-label="Voir le projet en ligne"
                  >
                    <Icon icon="mdi:web" width="20" height="20" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-8">
          <p className="text-foreground/60">Aucun projet trouvé dans cette catégorie.</p>
        </div>
      )}
    </div>
  );
};
