"use client";

import { useEffect, useState } from "react";
import { navLinks, whatsappUrl } from "@/content/site";
import { CloseIcon, MenuIcon, WhatsAppIcon } from "@/components/ui/icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-gold-500/15 bg-forest-950/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="relative mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6 md:px-10">
        <a
          href="#inicio"
          className="font-serif text-2xl tracking-wide text-ivory"
          aria-label="Essenza Estética — voltar ao início"
        >
          Essenza <span className="italic text-gold-300">Estética</span>
        </a>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Navegação principal"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-ivory/80 transition-colors hover:text-gold-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-gold-500 px-5 py-2.5 text-sm font-medium text-forest-950 transition-colors hover:bg-gold-300 md:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Agendar avaliação
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ivory/25 text-ivory transition-colors hover:border-gold-300 hover:text-gold-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-300 md:hidden"
          >
            {open ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>

        <div
          id="menu-mobile"
          className={`absolute right-6 top-[calc(100%-0.25rem)] z-50 w-52 origin-top-right rounded-xl border border-gold-500/20 bg-forest-950/95 p-2 shadow-2xl shadow-black/30 backdrop-blur-md transition-all duration-200 md:hidden ${
            open
              ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
              : "pointer-events-none -translate-y-1 scale-[0.98] opacity-0"
          }`}
          aria-hidden={!open}
        >
          <nav className="flex flex-col" aria-label="Menu de navegação">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 font-sans text-sm tracking-wide text-ivory/85 transition-colors hover:bg-forest-700/70 hover:text-gold-300 focus-visible:bg-forest-700/70 focus-visible:text-gold-300 focus-visible:outline-none"
              >
                {link.label}
              </a>
            ))}
            <div className="my-1.5 border-t border-ivory/10" />
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 rounded-lg px-3 py-2.5 font-sans text-sm font-medium text-gold-300 transition-colors hover:bg-forest-700/70 focus-visible:outline-2 focus-visible:outline-gold-300"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Agendar avaliação
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
