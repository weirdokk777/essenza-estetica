import { Github, Linkedin, Instagram, MessageCircle, Mail } from 'lucide-react'
import { siteConfig } from '../config/site'
import Reveal from './Reveal'

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: siteConfig.social.github,
    color: 'hover:text-gray-900 dark:hover:text-white',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: siteConfig.social.linkedin,
    color: 'hover:text-blue-600',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    href: siteConfig.social.instagram,
    color: 'hover:text-pink-600',
  },
  {
    name: 'WhatsApp',
    icon: MessageCircle,
    href: siteConfig.social.whatsapp,
    color: 'hover:text-green-500',
  },
  {
    name: 'E-mail',
    icon: Mail,
    href: siteConfig.social.email,
    color: 'hover:text-primary-500',
  },
]

export default function SocialLinks() {
  return (
    <section id="redes" className="section-padding">
      <div className="container-custom">
        <Reveal className="text-center">
          <span className="section-tag">Redes sociais</span>
          <h2 className="section-title">
            Vamos criar algo <span className="gradient-text">incrível juntos?</span>
          </h2>
          <p className="section-subtitle">
            Tem uma ideia, projeto ou negócio que precisa de tecnologia? Entre em contato.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 flex flex-wrap justify-center gap-4">
          {socialLinks.map((social) => {
            const Icon = social.icon
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`social-icon ${social.color}`}
                aria-label={social.name}
              >
                <Icon size={20} />
              </a>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}