# Essenza Estética — Landing Page (Demo Comercial)

Landing page one-page para **Essenza Estética — Dra. Amanda Faustino**, criada
como peça de proposta comercial.

- **Stack:** Next.js 16 (App Router, Turbopack, geração estática) · React 19 · TypeScript · Tailwind CSS v4
- **Idioma:** pt-BR (`lang="pt-BR"`)
- **Tipografia:** Cormorant Garamond (serif, títulos) + Jost (sans, corpo) via `next/font`
- **Paleta:** verde profundo `#0C2B26`/`#081814` + dourado `#C6A15B` + marfim `#F7F3EC` + grafite `#1F2320` + acentos botânicos
  (tokens em `src/app/globals.css`, bloco `@theme`)

## Rodando

```bash
npm install   # já executado
npm run dev   # desenvolvimento — http://localhost:3000
npm run build # build de produção (verificado, 100% estático)
npm run start # serve o build de produção
```

## Estrutura

```
src/
├── app/
│   ├── layout.tsx      # fontes, metadata pt-BR, OpenGraph
│   ├── page.tsx        # composição das seções
│   ├── globals.css     # design system Tailwind v4 (@theme)
│   └── icon.svg        # favicon "E" dourado
├── content/
│   └── site.ts         # ⚠ TODO o conteúdo/texto do site (editar aqui)
└── components/
    ├── layout/         # Header (menu mobile), Footer, WhatsAppFloat
    ├── sections/       # Hero, Philosophy, Treatments, AboutDoctor,
    │                   # Differentials, Results, CtaSection, Contact
    └── ui/             # Reveal, SectionHeading, Button, icons, BotanicalAccent
```

## ⚠️ Checklist de placeholders (substituir antes de publicar)

**Tudo está centralizado em `src/content/site.ts`** (marcado com `⚠ PLACEHOLDER`):

| Item | Onde | Status atual |
|---|---|---|
| WhatsApp (número + link) | `whatsappNumber` | `5511900000000` — fake |
| Instagram | `contact.instagram` | `@essenzaestetica` — a confirmar |
| E-mail | `contact.email` | genérico — a confirmar |
| Endereços (Guarulhos / Santana) | `contact.units` | "em confirmação" |
| Horários | `contact.hours` | "a confirmar" |
| Credenciais/CRM da médica | `doctor.credentialsPlaceholder` | caixa tracejada visível |
| Depoimentos | `testimonials` | marcados **"Demonstrativo"** |
| Fotos antes/depois | seção `#resultados` | frames vazios rotulados |
| Preços | — | **intencionalmente não exibidos** (sob consulta) |
| Domínio (metadata/OG) | `src/app/layout.tsx` `metadataBase` | placeholder |

Anotação de rodapé já informa que o site é demonstrativo.

## Imagens

Em `public/images/` (Unsplash, licença aberta) — ilustrativas, a substituir
pelas fotos reais da clínica quando houver. Alts já sinalizam
"imagem ilustrativa".

## Acessibilidade / responsividade

- Navegação por âncoras com `scroll-padding-top` (header fixo);
- Menu mobile em tela cheia: trava scroll, fecha com Esc, `aria-expanded`;
- Botão flutuante de WhatsApp com `aria-label` e foco visível;
- `prefers-reduced-motion` respeitado (Reveal + CSS global);
- Testado o build estático; visual verificar em `npm run dev` (mobile-first).
