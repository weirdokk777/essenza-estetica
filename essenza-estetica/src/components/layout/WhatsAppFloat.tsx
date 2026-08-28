import { whatsappUrl } from "@/content/site";
import { WhatsAppIcon } from "@/components/ui/icons";

/**
 * Botão flutuante de WhatsApp — sempre visível, acessível por teclado.
 * ⚠ O número é placeholder (ver src/content/site.ts).
 */
export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar com a Essenza Estética no WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-forest-950 shadow-xl shadow-forest-950/30 transition-transform duration-300 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}