import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, BarChart3, Activity, ShoppingCart, CheckSquare, Utensils, Cloud } from 'lucide-react'
import type { ComponentType } from 'react'
import { projects, projectFilters } from '../config/site'
import Reveal from './Reveal'

const iconMap: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  chart: BarChart3,
  activity: Activity,
  shopping: ShoppingCart,
  check: CheckSquare,
  utensils: Utensils,
  cloud: Cloud,
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('todos')

  const filteredProjects = activeFilter === 'todos'
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projetos" className="section-padding">
      <div className="container-custom">
        <Reveal className="text-center">
          <span className="section-tag">Portfólio</span>
          <h2 className="section-title">
            Projetos que <span className="gradient-text">desenvolvemos</span>
          </h2>
          <p className="section-subtitle">
            Soluções digitais que criamos para nossos clientes.
          </p>
        </Reveal>

        {/* Filters */}
        <Reveal delay={0.1} className="mt-10 flex flex-wrap justify-center gap-3">
          {projectFilters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`filter-btn ${activeFilter === filter.value ? 'filter-btn-active' : ''}`}
              aria-pressed={activeFilter === filter.value}
            >
              {filter.label}
            </button>
          ))}
        </Reveal>

        {/* Projects Grid */}
        <motion.div layout className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const Icon = iconMap[project.icon] || BarChart3
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="project-card group">
                    <div className={`project-image bg-gradient-to-br ${project.gradient}`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon size={64} className="text-white/80 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                    </div>

                    <div className="p-6">
                      <h3 className="font-display font-semibold text-xl mb-2">{project.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs rounded-full bg-primary-500/10 text-primary-400 border border-primary-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <a
                          href={project.demo}
                          className="btn btn-primary flex-1 text-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={16} />
                          Ver projeto
                        </a>
                        <a
                          href={project.github}
                          className="btn btn-outline flex-1 text-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`GitHub do projeto ${project.name}`}
                        >
                          <Github size={16} />
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}