import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { differentials } from "@/content/site";
import {
  LeafIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UserRoundIcon,
} from "@/components/ui/icons";

const icons = [UserRoundIcon, ShieldCheckIcon, LeafIcon, SparklesIcon];

export default function Differentials() {
  return (
    <section className="bg-ivory py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Por que a Essenza"
          title="Uma experiência"
          accent="diferente."
          description="Mais do que procedimentos: um cuidado completo, do primeiro contato ao acompanhamento final."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={item.title} delay={i * 100}>
                <div className="group h-full rounded-2xl border border-forest-900/10 bg-ivory-light p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/50 hover:shadow-lg hover:shadow-forest-900/10">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest-900 text-gold-300 transition-colors duration-300 group-hover:bg-gold-500 group-hover:text-forest-950">
                    <Icon className="h-5.5 w-5.5" />
                  </span>
                  <h3 className="mt-5 font-serif text-xl font-medium text-forest-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-graphite-soft">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}