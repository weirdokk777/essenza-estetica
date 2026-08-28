import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { treatments, treatmentsNote } from "@/content/site";

export default function Treatments() {
  return (
    <section id="tratamentos" className="relative bg-forest-900 py-24 md:py-32">
      {/* Vinheta botânica sutil nas bordas */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(30,86,74,0.5),transparent)]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 md:px-10">
        <SectionHeading
          tone="dark"
          eyebrow="Tratamentos"
          title="Cuidado facial"
          accent="sob medida."
          description="Procedimentos realizados com técnica e segurança, sempre a partir de uma avaliação individual — porque cada rosto pede um plano próprio."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {treatments.map((treatment, i) => (
            <Reveal key={treatment.name} delay={i * 100}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ivory/10 bg-forest-950/50 transition-colors duration-300 hover:border-gold-500/40">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={treatment.image}
                    alt={treatment.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 90vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-6">
                  <h3 className="font-serif text-2xl font-medium text-ivory">
                    {treatment.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-sage-100/75">
                    {treatment.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mx-auto mt-12 max-w-2xl border-l-2 border-gold-500/60 pl-5 text-center text-sm italic leading-relaxed text-sage-100/70 sm:text-left">
            {treatmentsNote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}