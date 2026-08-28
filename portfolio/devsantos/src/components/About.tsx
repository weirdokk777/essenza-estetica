import type { Icon } from 'lucide-react'
import { Code2, Palette, Zap, Shield, TrendingUp } from 'lucide-react'
import { aboutFeatures } from '../config/site'
import Reveal from './Reveal'

const iconMap: Record<string, Icon> = {
  code: Code2,
  palette: Palette,
  zap: Zap,
  shield: Shield,
  trending: TrendingUp,
}

export default function About() {
  return (
    <section id="sobre" className="section-padding">
      <div className="container-custom">
        <Reveal className="text-center">
          <span className="section-tag">Sobre a DevSantos</span>
          <h2 className="section-title">
            Tecnologia que transforma <span className="gradient-text">ideias em realidade.</span>
          </h2>
          <p className="section-subtitle">
            Somos uma empresa focada em desenvolvimento de produtos digitais modernos. Criamos experiências digitais que combinam design, performance, tecnologia e estratégia.
          </p>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual */}
          <Reveal direction="right">
            <div className="relative">
              <div className="glass-card p-8">
                <div className="flex items-center gap-2 mb-6">
                  <span className="window-dot window-dot-red" />
                  <span className="window-dot window-dot-yellow" />
                  <span className="window-dot window-dot-green" />
                  <span className="ml-2 text-xs text-gray-500">terminal</span>
                </div>
                <div className="font-mono text-sm space-y-2">
                  <p className="text-gray-500">$ <span className="text-accent-cyan">cd</span> devsantos</p>
                  <p className="text-gray-500">$ <span className="text-accent-cyan">npm</span> run build</p>
                  <p className="text-green-400">✓ Compilando componentes...</p>
                  <p className="text-green-400">✓ Otimizando performance...</p>
                  <p className="text-green-400">✓ Gerando build de produção...</p>
                  <p className="text-primary-400">✨ Build concluído com sucesso!</p>
                  <p className="text-gray-500">$ <span className="animate-blink">▊</span></p>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-500/20 to-accent-cyan/20 rounded-2xl blur-xl" aria-hidden="true" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-accent-purple/20 to-primary-500/20 rounded-2xl blur-xl" aria-hidden="true" />
            </div>
          </Reveal>

          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-4">
            {aboutFeatures.map((feature, index) => {
              const Icon = iconMap[feature.icon] || Code2
              return (
                <Reveal key={feature.title} delay={index * 0.1}>
                  <div className="glass-card p-6 card-hover h-full">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500/20 to-accent-cyan/20 flex items-center justify-center mb-4">
                      <Icon size={24} className="text-primary-500" />
                    </div>
                    <h3 className="font-display font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}