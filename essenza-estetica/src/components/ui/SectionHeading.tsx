import Reveal from "@/components/ui/Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  /** Trecho final do título destacado em dourado/itálico */
  accent?: string;
  description?: string;
  /** "dark" = seção de fundo escuro; "light" = fundo claro (padrão) */
  tone?: "light" | "dark";
  align?: "center" | "left";
}

export default function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  tone = "light",
  align = "center",
}: SectionHeadingProps) {
  const isDark = tone === "dark";
  const alignCls = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <Reveal className={`flex flex-col gap-4 ${alignCls}`}>
      <span
        className={`text-xs font-medium uppercase tracking-[0.3em] ${
          isDark ? "text-gold-300" : "text-gold-600"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`font-serif text-4xl leading-tight font-medium md:text-5xl ${
          isDark ? "text-ivory" : "text-forest-900"
        }`}
      >
        {title}
        {accent ? (
          <>
            {" "}
            <em className={isDark ? "text-gold-300" : "text-gold-600"}>
              {accent}
            </em>
          </>
        ) : null}
      </h2>
      <span
        aria-hidden="true"
        className={`h-px w-16 ${isDark ? "bg-gold-500/60" : "bg-gold-500"}`}
      />
      {description ? (
        <p
          className={`max-w-2xl text-base leading-relaxed md:text-lg ${
            isDark ? "text-sage-100/80" : "text-graphite-soft"
          }`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}