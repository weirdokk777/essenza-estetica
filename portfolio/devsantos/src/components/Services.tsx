import type { Icon } from 'lucide-react'
import { Globe, Smartphone, Layout, ShoppingCart, PenTool, Settings, ArrowRight } from 'lucide-react'
import { services } from '../config/site'
import Reveal from './Reveal'

const iconMap: Record<string, Icon> = {
  globe: Globe,
  smartphone: Smartphone,
  layout: Layout,
  shopping: ShoppingCart,
  pen: PenTool,
  settings: Settings,
}

export default function Services() {
  return (
    <section id="servicos" className="section-padding bg-gray-50/50 dark:bg-dark-900/50">
      <div className="container-custom">
        <Reveal className="text-center">
          <span className="section-tag">Serviços</span>
          <h2 className="section-title">
            O que podemos <span className="gradient-text">construir para você?</span>
          </h2>
          <p className="section-subtitle">
            Soluções digitais completas para transformar seu negócio.
          </p>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Globe
            return (
              <Reveal key={service.title} delay={index * 0.1}>
                <div className="glass-card p-8 card-hover h-full group">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-cyan/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                    <Icon size={28} className="text-primary-500" />
                  </div>
                  <h3 className="font-display font-semibold text-xl mb-3">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
                  <a
                    href="#contato"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary-500 hover:text-primary-400 transition-colors duration-300"
                  >
                    Saiba mais
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}