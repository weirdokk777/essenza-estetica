import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { testimonials } from '../config/site'
import Reveal from './Reveal'

export default function Testimonials() {
  return (
    <section id="depoimentos" className="section-padding bg-gray-50/50 dark:bg-dark-900/50">
      <div className="container-custom">
        <Reveal className="text-center">
          <span className="section-tag">Depoimentos</span>
          <h2 className="section-title">
            O que nossos <span className="gradient-text">clientes dizem</span>
          </h2>
          <p className="section-subtitle">
            A confiança dos nossos clientes é o nosso maior patrimônio.
          </p>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.author} delay={index * 0.1}>
              <div className="glass-card p-8 card-hover h-full flex flex-col">
                <Quote size={32} className="text-primary-500/30 mb-6" />
                <p className="text-gray-700 dark:text-gray-300 flex-1 mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-cyan flex items-center justify-center font-display font-bold text-white">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}