import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import BotanicalAccent from "@/components/ui/BotanicalAccent";
import { cta, whatsappUrl } from "@/content/site";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-forest-900 py-24 text-center md:py-32">
      {/* Textura botânica escura ao fundo */}
      <Image
        src="/images/botanical-dark.jpg"
        alt=""
        fill
        sizes="100vw"
        aria-hidden="true"
        className="object-cover opacity-15"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-forest-900 via-forest-900/70 to-forest-900"
      />
      <BotanicalAccent className="pointer-events-none absolute -right-8 -top-8 hidden h-64 -rotate-45 text-gold-300/10 lg:block" />

      <Reveal className="relative mx-auto flex w-full max-w-3xl flex-col items-center gap-6 px-6 md:px-10">
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold-300">
          Avaliação presencial
        </span>
        <h2 className="font-serif text-4xl font-medium leading-tight text-ivory md:text-6xl">
          {cta.title}{" "}
          <em className="text-gold-300">{cta.titleAccent}</em>
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-sage-100/80 md:text-lg">
          {cta.description}
        </p>
        <div className="mt-2 flex flex-col gap-4 sm:flex-row">
          <Button href={whatsappUrl} external>
            {cta.button}
          </Button>
          <Button href="#contato" variant="outline-light">
            {cta.secondary}
          </Button>
        </div>
      </Reveal>
    </section>
  );
}