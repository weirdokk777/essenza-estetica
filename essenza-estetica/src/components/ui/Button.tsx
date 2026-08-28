import type { ReactNode } from "react";

type Variant = "gold" | "outline-light" | "outline-dark" | "whatsapp";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  /** Abre em nova aba (links externos, ex.: WhatsApp) */
  external?: boolean;
  ariaLabel?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500";

const variants: Record<Variant, string> = {
  gold: "bg-gold-500 text-forest-950 shadow-[0_10px_30px_-12px_rgba(198,161,91,0.65)] hover:bg-gold-300 hover:shadow-[0_14px_34px_-12px_rgba(198,161,91,0.8)]",
  "outline-light":
    "border border-ivory/40 text-ivory hover:border-gold-300 hover:text-gold-300",
  "outline-dark":
    "border border-forest-900/30 text-forest-900 hover:border-gold-600 hover:text-gold-600",
  whatsapp:
    "bg-whatsapp text-forest-950 hover:brightness-110 shadow-[0_10px_30px_-12px_rgba(37,211,102,0.6)]",
};

export default function Button({
  href,
  children,
  variant = "gold",
  className = "",
  external = false,
  ariaLabel,
}: ButtonProps) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={`${base} ${variants[variant]} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}