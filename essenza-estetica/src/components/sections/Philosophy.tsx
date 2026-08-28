import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import BotanicalAccent from "@/components/ui/BotanicalAccent";
import { philosophy } from "@/content/site";
import {
  LeafIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "@/components/ui/icons";

const pillarIcons = [LeafIcon, ShieldCheckIcon, SparklesIcon];

export default function Philosophy() {
  return (
    <section className="relative overflow-hidden bg-ivory py-24 md:py-32">
      <BotanicalAccent className="pointer-events-none absolute -right-10 top-10 hidden h-72 rotate-180 text-forest-500/10 lg:block" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 px-6 md:px-10 lg:grid-cols-2">
        {/* Composição de imagens */}
        <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] shadow-xl shadow-forest-900/15">
            <Image
              src={philosophy.imageMain.src}
              alt={philosophy.imageMain.alt}
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-10 -right-4 w-44 overflow-hidden rounded-2xl border-4 border-ivory shadow-lg shadow-forest-900/20 sm:-right-8 sm:w-56">
            <div className="relative aspect-square">
              <Image
                src={philosophy.imageSecondary.src}
                alt={philosophy.imageSecondary.alt}
                fill
                sizes="220px"
                className="object-cover"
              />
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute -left-3 -top-3 h-24 w-24 rounded-tl-[1.5rem] border-l-2 border-t-2 border-gold-500"
          />
        </Reveal>

        {/* Texto + pilares */}
        <div className="flex flex-col gap-8 pt-6 lg:pt-0">
          <Reveal className="flex flex-col gap-4">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold-600">
              {philosophy.eyebrow}
            </span>
            <h2 className="font-serif text-4xl font-medium leading-tight text-forest-900 md:text-5xl">
              {philosophy.title}{" "}
              <em className="text-gold-600">{philosophy.titleAccent}</em>
            </h2>
            <span aria-hidden="true" className="h-px w-16 bg-gold-500" />
            {philosophy.paragraphs.map((p) => (
              <p
                key={p.slice(0, 24)}
                className="max-w-xl leading-relaxed text-graphite-soft"
              >
                {p}
              </p>
            ))}
          </Reveal>

          <div className="flex flex-col gap-6">
            {philosophy.pillars.map((pillar, i) => {
              const Icon = pillarIcons[i % pillarIcons.length];
              return (
                <Reveal key={pillar.title} delay={i * 100}>
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold-500/40 bg-ivory-light text-gold-600">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-serif text-xl font-medium text-forest-900">
                        {pillar.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-graphite-soft">
                        {pillar.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}