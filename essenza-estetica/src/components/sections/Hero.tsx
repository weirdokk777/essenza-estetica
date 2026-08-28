import Image from "next/image";
import Button from "@/components/ui/Button";
import BotanicalAccent from "@/components/ui/BotanicalAccent";
import { hero, whatsappUrl } from "@/content/site";
import { CheckIcon } from "@/components/ui/icons";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-forest-950 text-ivory"
    >
      {/* Brilhos radiais e acento botânico */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-gold-500/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-forest-500/20 blur-3xl"
      />
      <BotanicalAccent className="pointer-events-none absolute -left-8 bottom-10 hidden h-64 text-sage-300/15 lg:block" />

      <div className="mx-auto grid min-h-svh w-full max-w-6xl items-center gap-14 px-6 pb-24 pt-36 md:px-10 lg:grid-cols-2 lg:gap-12 lg:pt-28">
        {/* Texto */}
        <div className="flex flex-col items-start gap-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-forest-900/60 px-4 py-1.5 text-[11px] uppercase tracking-[0.25em] text-gold-300">
            {hero.eyebrow}
          </span>
          <h1 className="font-serif text-5xl font-medium leading-[1.08] sm:text-6xl xl:text-7xl">
            {hero.titleStart}{" "}
            <em className="text-gold-300">{hero.titleAccent}</em>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-sage-100/85">
            {hero.description}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href={whatsappUrl} external>
              {hero.primaryCta}
            </Button>
            <Button href="#tratamentos" variant="outline-light">
              {hero.secondaryCta}
            </Button>
          </div>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-sage-100/70">
            {hero.trust.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-gold-300" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Imagem com moldura dourada deslocada */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -inset-3 rounded-[2rem] border border-gold-500/30"
          />
          <div className="relative aspect-[3/4] overflow-hidden rounded-[1.75rem] shadow-2xl shadow-black/40">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 90vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-forest-950/55 via-transparent to-forest-950/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}