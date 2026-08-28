import {
  brand,
  contact,
  footer,
  navLinks,
  treatments,
  whatsappUrl,
} from "@/content/site";
import { InstagramIcon, MailIcon, WhatsAppIcon } from "@/components/ui/icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gold-500/10 bg-forest-950 text-ivory">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:px-10 lg:grid-cols-4">
        {/* Marca */}
        <div className="flex flex-col gap-4">
          <span className="font-serif text-2xl text-ivory">
            Essenza <span className="italic text-gold-300">Estética</span>
          </span>
          <p className="text-sm leading-relaxed text-sage-100/70">
            {footer.blurb}
          </p>
          <p className="text-xs uppercase tracking-[0.25em] text-gold-300/80">
            Guarulhos • Santana — SP
          </p>
        </div>

        {/* Navegação */}
        <nav aria-label="Links do rodapé">
          <h3 className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-gold-300">
            Navegação
          </h3>
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-ivory/75 transition-colors hover:text-gold-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Tratamentos */}
        <div>
          <h3 className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-gold-300">
            Tratamentos
          </h3>
          <ul className="flex flex-col gap-3">
            {treatments.map((t) => (
              <li key={t.name}>
                <a
                  href="#tratamentos"
                  className="text-sm text-ivory/75 transition-colors hover:text-gold-300"
                >
                  {t.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3 className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-gold-300">
            Contato
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-ivory/75">
            <li>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-gold-300"
              >
                <WhatsAppIcon className="h-4 w-4 text-whatsapp" />
                {contact.whatsapp.label}
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/essenzaestetica"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-gold-300"
              >
                <InstagramIcon className="h-4 w-4" />
                {contact.instagram.label}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MailIcon className="h-4 w-4" />
              {contact.email.label}
            </li>
            {contact.units.map((u) => (
              <li key={u.city} className="text-ivory/60">
                {u.city}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-ivory/50 md:flex-row md:items-center md:justify-between md:px-10">
          <p>
            © {year} {brand.name} — {brand.doctor}. Todos os direitos
            reservados.
          </p>
          <p className="max-w-md md:text-right">{footer.demoNote}</p>
        </div>
      </div>
    </footer>
  );
}