import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import Reveal from './Reveal'

export default function CTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-accent-purple to-accent-cyan bg-gradient-animate" aria-hidden="true" />
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl" aria-hidden="true" />

      <div className="container-custom relative z-10 text-center">
        <Reveal>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium backdrop-blur-sm"
          >
            <Sparkles size={16} />
            Vamos começar
          </motion.div>

          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
            Sua próxima grande ideia <br className="hidden md:block" />
            <span className="text-white/90">começa aqui.</span>
          </h2>

          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
            Conte-nos o que você está imaginando. Nós transformamos sua ideia em uma experiência digital.
          </p>

          <motion.a
            href="#contato"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 mt-10 px-8 py-4 rounded-lg bg-white text-primary-600 font-semibold shadow-glow-lg hover:shadow-2xl transition-all duration-300"
          >
            Começar um projeto
            <ArrowRight size={20} />
          </motion.a>
        </Reveal>
      </div>
    </section>
  )
}