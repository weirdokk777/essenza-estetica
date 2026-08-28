import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  // ⚠ PLACEHOLDER — metadataBase a confirmar com o domínio real da clínica
  metadataBase: new URL("https://essenzaestetica.com.br"),
  title:
    "Essenza Estética | Estética Facial Premium em Guarulhos e Santana — Dra. Amanda Faustino",
  description:
    "Harmonização e estética facial com resultados naturais e avaliação individualizada. Conheça a Essenza Estética, de Dra. Amanda Faustino, em Guarulhos e Santana — SP.",
  keywords: [
    "estética facial",
    "harmonização facial Guarulhos",
    "toxina botulínica",
    "preenchimento labial",
    "bioestimuladores de colágeno",
    "Dra. Amanda Faustino",
    "Essenza Estética",
  ],
  openGraph: {
    title: "Essenza Estética — Beleza que respeita a sua essência",
    description:
      "Estética facial premium com avaliação individualizada e resultados naturais. Guarulhos • Santana — SP.",
    locale: "pt_BR",
    type: "website",
    siteName: "Essenza Estética",
    images: [{ url: "/images/hero.jpg", width: 900, height: 1350 }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0C2B26",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory font-sans text-graphite">
        {children}
      </body>
    </html>
  );
}
