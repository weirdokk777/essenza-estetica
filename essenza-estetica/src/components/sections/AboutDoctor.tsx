import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import BotanicalAccent from "@/components/ui/BotanicalAccent";
import { doctor } from "@/content/site";
import { CheckIcon } from "@/components/ui/icons";

export default function AboutDoctor() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-ivory-light py-24 md:py-32">
      <BotanicalAccent className="pointer-events-none absolute -left-10 bottom-8 hidden h-72 text-forest-500/10 lg:block" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 px-6 md:px-10 lg:grid-cols-2">
        {/* Retrato com cartão flutuante */}
        <Reveal className="relative mx-auto order-2 w-full max-w-md lg:order-1 lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -inset-3 rounded-[2rem] border border-gold-500/40"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] shadow-xl shadow-forest-900/20">
            <Image
              src={doctor.image.src}
              alt={doctor.image.alt}
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 left-6 right-6 rounded-2xl border border-gold-500/25 bg-forest-950/95 px-6 py-5 text-center shadow-lg backdrop-blur sm:left-10 sm:right-auto sm:min-w-64">
            <p className="font-serif text-2xl font-medium text-ivory">
              {doctor.name}
            </p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.3em] text-gold-300">
              {doctor.role}
            </p>
          </div>
        </Reveal>

        {/* Texto */}
        <div className="order-1 flex flex-col gap-6 lg:order-2">
          <Reveal className="flex flex-col gap-4">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold-600">
              {doctor.eyebrow}
            </span>
            <h2 className="font-serif text-4xl font-medium leading-tight text-forest-900 md:text-5xl">
              {doctor.name}
            </h2>
            <span aria-hidden="true" className="h-px w-16 bg-gold-500" />
            {doctor.paragraphs.map((p) => (
              <p
                key={p.slice(0, 24)}
                className="max-w-xl leading-relaxed text-graphite-soft"
              >
                {p}
              </p>
            ))}
          </Reveal>

          <Reveal delay={100}>
            <ul className="flex flex-col gap-3">
              {doctor.chips.map((chip) => (
                <li
                  key={chip}
                  className="flex items-center gap-3 text-sm text-graphite"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-500/15 text-gold-600">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  {chip}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* ⚠ Espaço para credenciais reais — não inventar dados */}
          <Reveal delay={200}>
            <p className="rounded-xl border border-dashed border-gold-500/50 bg-ivory px-5 py-4 text-sm italic leading-relaxed text-graphite-soft">
              {doctor.credentialsPlaceholder}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}