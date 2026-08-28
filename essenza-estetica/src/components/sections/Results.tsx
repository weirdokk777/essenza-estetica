import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { results, testimonials } from "@/content/site";
import { QuoteIcon } from "@/components/ui/icons";

export default function Results() {
  return (
    <section id="resultados" className="bg-forest-950 py-24 text-ivory md:py-32">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <SectionHeading
          tone="dark"
          eyebrow={results.eyebrow}
          title="Evolução com"
          accent="naturalidade."
          description={results.description}
        />

        {/* Frames Antes/Depois — vazios por política anti-dados-inventados */}
        <div className="mx-auto mt-16 grid max-w-3xl gap-6 sm:grid-cols-2">
          {[results.beforeLabel, results.afterLabel].map((label, i) => (
            <Reveal key={label} delay={i * 150}>
              <figure className="relative flex aspect-[4/3] flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-gold-500/40 bg-forest-900/40">
                <span className="rounded-full border border-gold-500/40 px-4 py-1 text-[11px] uppercase tracking-[0.3em] text-gold-300">
                  {label}
                </span>
                <figcaption className="px-6 text-center text-xs italic text-sage-100/60">
                  {results.frameWatermark}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-sage-100/50">
          {results.disclaimer}
        </p>

        {/* Depoimentos demonstrativos */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.avatar} delay={i * 100}>
              <figure className="flex h-full flex-col gap-4 rounded-2xl border border-ivory/10 bg-forest-900/50 p-7">
                <QuoteIcon className="h-7 w-7 text-gold-500/70" />
                <blockquote className="flex-1 text-sm leading-relaxed text-sage-100/85">
                  “{t.quote}”
                </blockquote>
                <figcaption className="flex items-center gap-3 border-t border-ivory/10 pt-4">
                  <span className="relative h-11 w-11 overflow-hidden rounded-full border border-gold-500/30">
                    <Image
                      src={t.avatar}
                      alt=""
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-ivory">
                      {t.name}
                    </span>
                    <span className="block text-xs text-sage-100/60">
                      {t.detail}
                    </span>
                  </span>
                  <span className="ml-auto rounded-full border border-gold-500/30 px-2.5 py-1 text-[9px] uppercase tracking-[0.2em] text-gold-300">
                    Demonstrativo
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}