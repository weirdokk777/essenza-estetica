import { Github, Linkedin, Instagram, MessageCircle } from 'lucide-react'
import { siteConfig, navLinks } from '../config/site'

const footerSocial = [
  { name: 'GitHub', icon: Github, href: siteConfig.social.github },
  { name: 'LinkedIn', icon: Linkedin, href: siteConfig.social.linkedin },
  { name: 'Instagram', icon: Instagram, href: siteConfig.social.instagram },
  { name: 'WhatsApp', icon: MessageCircle, href: siteConfig.social.whatsapp },
]

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-dark-900/50">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <a href="#inicio" className="flex items-center gap-2">
              <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-600 to-accent-cyan flex items-center justify-center font-display font-bold text-white shadow-glow">
                DS
              </span>
              <span className="font-display font-bold text-lg">
                Dev<span className="gradient-text">Santos</span>
              </span>
            </a>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Desenvolvimento de experiências digitais modernas, rápidas e inteligentes.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-semibold mb-4">Redes sociais</h4>
            <div className="flex gap-3">
              {footerSocial.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label={social.name}
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-500">{siteConfig.copyright}</p>
          <p className="text-sm text-gray-500 dark:text-gray-500">{siteConfig.builtWith}</p>
        </div>
      </div>
    </footer>
  )
}