import { motion } from 'framer-motion'
import { technologies } from '../config/site'
import Reveal from './Reveal'

const techColors: Record<string, string> = {
  html: '#E34F26',
  css: '#1572B6',
  js: '#F7DF1E',
  ts: '#3178C6',
  react: '#61DAFB',
  next: '#000000',
  node: '#339933',
  python: '#3776AB',
  php: '#777BB4',
  'react-native': '#61DAFB',
  flutter: '#02569B',
  postgres: '#336791',
  mysql: '#4479A1',
  mongo: '#47A248',
  git: '#F05032',
  docker: '#2496ED',
}

const techIcons: Record<string, string> = {
  html: 'M12 2L2 12l10 10 10-10L12 2z',
  css: 'M12 2L2 12l10 10 10-10L12 2z',
  js: 'M12 2L2 12l10 10 10-10L12 2z',
  ts: 'M12 2L2 12l10 10 10-10L12 2z',
  react: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z',
  next: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z',
  node: 'M12 2L2 7v10l10 5 10-5V7L12 2z',
  python: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z',
  php: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z',
  'react-native': 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z',
  flutter: 'M12 2L2 7v10l10 5 10-5V7L12 2z',
  postgres: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z',
  mysql: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z',
  mongo: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z',
  git: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z',
  docker: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z',
}

export default function Technologies() {
  return (
    <section id="tecnologias" className="section-padding bg-gray-50/50 dark:bg-dark-900/50">
      <div className="container-custom">
        <Reveal className="text-center">
          <span className="section-tag">Stack</span>
          <h2 className="section-title">
            Tecnologias que <span className="gradient-text">dominamos</span>
          </h2>
          <p className="section-subtitle">
            As principais tecnologias que utilizamos para construir produtos digitais de alta qualidade.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="glass-card p-4 flex flex-col items-center gap-3 card-hover cursor-pointer"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke={techColors[tech.icon] || '#6366f1'}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-10 h-10 transition-transform duration-300 hover:scale-110"
                aria-hidden="true"
              >
                <path d={techIcons[tech.icon] || techIcons.react} />
              </svg>
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400 text-center">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}