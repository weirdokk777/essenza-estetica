import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, Code2, Zap, Shield, Sparkles } from 'lucide-react'
import { siteConfig } from '../config/site'

const particles = [
  { top: '20%', left: '10%', size: 4, delay: 0 },
  { top: '30%', left: '80%', size: 3, delay: 1 },
  { top: '60%', left: '15%', size: 5, delay: 2 },
  { top: '70%', left: '70%', size: 3, delay: 0.5 },
  { top: '40%', left: '50%', size: 4, delay: 1.5 },
  { top: '80%', left: '30%', size: 2, delay: 2.5 },
  { top: '15%', left: '60%', size: 3, delay: 3 },
  { top: '50%', left: '90%', size: 4, delay: 0.8 },
]

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden pt-16 md:pt-20">
      {/* Background */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="particle bg-primary-400/30 dark:bg-primary-400/40"
            style={{ top: p.top, left: p.left, width: p.size, height: p.size }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + p.delay,
              repeat: Infinity,
              delay: p.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-20">
        {/* Text Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium"
          >
            <Sparkles size={16} />
            {siteConfig.slogan}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight"
          >
            Criamos experiências digitais que fazem{' '}
            <span className="gradient-text">negócios crescerem.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-xl"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a href="#projetos" className="btn btn-primary">
              Ver projetos
              <ArrowRight size={18} />
            </a>
            <a href="#contato" className="btn btn-outline">
              <MessageCircle size={18} />
              Entrar em contato
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-sm text-gray-500 dark:text-gray-500"
          >
            Desenvolvimento Web • Mobile • Sistemas
          </motion.p>
        </div>

        {/* Visual Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative hidden lg:block"
          aria-hidden="true"
        >
          <div className="code-window animate-float">
            <div className="code-window-header">
              <span className="window-dot window-dot-red" />
              <span className="window-dot window-dot-yellow" />
              <span className="window-dot window-dot-green" />
              <span className="ml-2 text-xs text-gray-500">app.tsx</span>
            </div>
            <div className="code-window-body">
              <pre className="text-xs md:text-sm">
                <code>
                  <span className="code-keyword">const</span> <span className="code-class">DevSantos</span> = {'{'}
                  {'\n'}  <span className="code-keyword">const</span> mission = <span className="code-string">"transform ideas"</span>;
                  {'\n'}  <span className="code-keyword">const</span> stack = [
                  {'\n'}    <span className="code-string">"React"</span>,
                  {'\n'}    <span className="code-string">"TypeScript"</span>,
                  {'\n'}    <span className="code-string">"Node.js"</span>,
                  {'\n'}    <span className="code-string">"Flutter"</span>,
                  {'\n'}  ];
                  {'\n'}
                  {'\n'}  <span className="code-keyword">const</span> build = () => {'{'}
                  {'\n'}    <span className="code-keyword">return</span> (
                  {'\n'}      {'<'}<span className="code-type">Product</span>
                  {'\n'}        design=<span className="code-string">"premium"</span>
                  {'\n'}        code=<span className="code-string">"clean & scalable"</span>
                  {'\n'}        delivery=<span className="code-string">"on time"</span>
                  {'\n'}      {'/>'}
                  {'\n'}    );
                  {'\n'}  {'}'};
                  {'\n'}{'}'};
                </code>
              </pre>
            </div>
          </div>

          <div className="floating-card top-8 -right-4 animate-float-delayed">
            <Zap size={18} className="text-yellow-500" />
            <span>Performance</span>
          </div>

          <div className="floating-card bottom-16 -left-8 animate-float">
            <Shield size={18} className="text-green-500" />
            <span>Segurança</span>
          </div>

          <div className="floating-card top-1/2 -right-12 animate-float-delayed">
            <Code2 size={18} className="text-primary-500" />
            <span>Código limpo</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <a href="#sobre" className="scroll-indicator" aria-label="Rolar para a seção Sobre">
        <span className="scroll-mouse">
          <span className="scroll-wheel" />
        </span>
      </a>
    </section>
  )
}