import { MessageCircle } from 'lucide-react'
import { siteConfig } from '../config/site'

export default function WhatsAppButton() {
  return (
    <a
      href={siteConfig.social.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Conversar no WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  )
}