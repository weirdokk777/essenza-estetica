import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { contact, whatsappUrl } from "@/content/site";
import {
  ClockIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  WhatsAppIcon,
} from "@/components/ui/icons";

export default function Contact() {
  return (
    <section id="contato" className="bg-ivory py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <SectionHeading
          eyebrow={contact.eyebrow}
          title="Vamos"
          accent="conversar?"
          description={contact.description}
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* WhatsApp */}
          <Reveal>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col gap-3 rounded-2xl border border-forest-900/10 bg-ivory-light p-7 transition-all duration-300 hover:-translate-y-1 hover:border-whatsapp/50 hover:shadow-lg hover:shadow-forest-900/10"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-whatsapp/15 text-whatsapp">
                <WhatsAppIcon className="h-6 w-6" />
              </span>
              <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-graphite-soft">
                WhatsApp
              </span>
              <span className="font-serif text-xl font-medium text-forest-900 group-hover:text-whatsapp">
                {contact.whatsapp.label}
              </span>
              <span className="text-xs italic text-graphite-soft/80">
                {contact.whatsapp.note}
              </span>
            </a>
          </Reveal>

          {/* Instagram */}
          <Reveal delay={80}>
            <a
              href="https://instagram.com/essenzaestetica"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col gap-3 rounded-2xl border border-forest-900/10 bg-ivory-light p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/50 hover:shadow-lg hover:shadow-forest-900/10"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/15 text-gold-600">
                <InstagramIcon className="h-6 w-6" />
              </span>
              <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-graphite-soft">
                Instagram
              </span>
              <span className="font-serif text-xl font-medium text-forest-900 group-hover:text-gold-600">
                {contact.instagram.label}
              </span>
              <span className="text-xs italic text-graphite-soft/80">
                {contact.instagram.note}
              </span>
            </a>
          </Reveal>

          {/* E-mail */}
          <Reveal delay={160}>
            <a
              href={`mailto:${contact.email.label}`}
              className="group flex h-full flex-col gap-3 rounded-2xl border border-forest-900/10 bg-ivory-light p-7 transition-all duration-300 hover:-translate-y-1 hover:border-forest-500/50 hover:shadow-lg hover:shadow-forest-900/10"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest-900/10 text-forest-700">
                <MailIcon className="h-6 w-6" />
              </span>
              <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-graphite-soft">
                E-mail
              </span>
              <span className="font-serif text-xl font-medium text-forest-900">
                {contact.email.label}
              </span>
              <span className="text-xs italic text-graphite-soft/80">
                {contact.email.note}
              </span>
            </a>
          </Reveal>

          {/* Horários */}
          <Reveal delay={240}>
            <div className="flex h-full flex-col gap-3 rounded-2xl border border-forest-900/10 bg-ivory-light p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest-900/10 text-forest-700">
                <ClockIcon className="h-6 w-6" />
              </span>
              <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-graphite-soft">
                Atendimento
              </span>
              <span className="font-serif text-xl font-medium text-forest-900">
                {contact.hours.label}
              </span>
              <span className="text-xs italic text-graphite-soft/80">
                {contact.hours.note}
              </span>
            </div>
          </Reveal>

          {/* Unidades */}
          <Reveal delay={320} className="sm:col-span-2">
            <div className="flex h-full flex-col gap-4 rounded-2xl border border-forest-900/10 bg-forest-900 p-7 text-ivory">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/15 text-gold-300">
                <MapPinIcon className="h-6 w-6" />
              </span>
              <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold-300">
                Unidades
              </span>
              <ul className="flex flex-col gap-4 sm:flex-row sm:gap-10">
                {contact.units.map((u) => (
                  <li key={u.city}>
                    <span className="block font-serif text-xl font-medium">
                      {u.city}
                    </span>
                    <span className="block text-xs italic text-sage-100/60">
                      {u.address}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <p className="mt-10 text-center text-xs italic text-graphite-soft/70">
          ⚠ Dados de contato ilustrativos — serão substituídos pelas
          informações oficiais da clínica antes da publicação.
        </p>
      </div>
    </section>
  );
}