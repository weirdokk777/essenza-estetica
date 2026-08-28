import { motion } from 'framer-motion'
import { processSteps } from '../config/site'
import Reveal from './Reveal'

export default function Process() {
  return (
    <section id="processo" className="section-padding">
      <div className="container-custom">
        <Reveal className="text-center">
          <span className="section-tag">Processo</span>
          <h2 className="section-title">
            Do conceito <span className="gradient-text">ao produto.</span>
          </h2>
          <p className="section-subtitle">
            Um método organizado para transformar ideias em produtos reais.
          </p>
        </Reveal>

        <div className="mt-16 relative">
          {/* Timeline line */}
          <div className="timeline-line" aria-hidden="true" />

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.1}>
                <div className={`relative flex items-start gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Dot */}
                  <div className="timeline-dot" aria-hidden="true" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="glass-card p-6 card-hover">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-4xl font-display font-bold gradient-text opacity-50">
                          {step.number}
                        </span>
                        <h3 className="font-display font-semibold text-xl">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}