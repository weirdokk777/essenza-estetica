/**
 * ============================================================
 *  ESSENZA ESTÉTICA — CONTEÚDO CENTRAL DO SITE
 * ============================================================
 *  ✏️  TODOS os textos, dados de contato e informações comerciais
 *  deste arquivo são PLACEHOLDERS de apresentação comercial.
 *  Substitua pelos dados reais da clínica antes da publicação.
 *
 *  ⚠️ POLÍTICA ANTI-DADOS-INVENTADOS:
 *  - Preços: NÃO exibidos (definidos apenas em avaliação).
 *  - Credenciais/CRM: aguardam validação (ver seção doctor).
 *  - Depoimentos: marcados como "conteúdo demonstrativo".
 *  - Contatos e endereços: genéricos, a confirmar.
 * ============================================================
 */

export const brand = {
  name: "Essenza Estética",
  doctor: "Dra. Amanda Faustino",
  tagline: "Estética facial premium",
  signature: "Beleza que respeita a sua essência.",
};

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Início", href: "#inicio" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Resultados", href: "#resultados" },
  { label: "Contato", href: "#contato" },
];

/* ⚠ PLACEHOLDER — substituir pelo número real (formato: 55 + DDD + número) */
export const whatsappNumber = "5511900000000";

export const whatsappMessage =
  "Olá! Vim pelo site da Essenza Estética e gostaria de agendar uma avaliação.";

export const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage,
)}`;

export const hero = {
  eyebrow: "Estética facial premium • Guarulhos & Santana — SP",
  titleStart: "Realce a beleza natural da sua pele",
  titleAccent: "e valorize a sua essência.",
  description:
    "Na Essenza, cada tratamento é uma experiência individual — conduzida com técnica, segurança e um olhar estético que respeita o que você tem de mais autêntico.",
  primaryCta: "Agendar avaliação",
  secondaryCta: "Conhecer tratamentos",
  trust: ["Avaliação individualizada", "Resultados naturais", "Atendimento premium"],
  image: {
    src: "/images/hero.jpg",
    alt: "Mulher com pele saudável e natural — imagem ilustrativa da Essenza Estética",
  },
};

export const philosophy = {
  eyebrow: "A Essenza",
  title: "Beleza que respeita",
  titleAccent: "a sua essência.",
  paragraphs: [
    "Acreditamos que estética não é sobre transformar quem você é — é sobre valorizar o que já existe em você, com equilíbrio, técnica e delicadeza.",
    "Cada rosto conta uma história. Por isso, nosso trabalho começa sempre com escuta e avaliação cuidadosa, para que o resultado traduza a sua melhor versão — nunca um padrão.",
  ],
  pillars: [
    {
      title: "Avaliação individualizada",
      text: "Nenhum plano de tratamento é igual a outro. Tudo começa com uma conversa e uma análise do seu rosto.",
    },
    {
      title: "Técnica e segurança",
      text: "Procedimentos conduzidos com embasamento técnico, materiais adequados e protocolos de segurança.",
    },
    {
      title: "Naturalidade",
      text: "O objetivo é realçar — nunca alterar. Resultados que passam despercebidos, exceto pelo elogio.",
    },
  ],
  imageMain: {
    src: "/images/oil.jpg",
    alt: "Cuidado com a pele em ambiente premium — imagem ilustrativa",
  },
  imageSecondary: {
    src: "/images/botanical-light.jpg",
    alt: "Detalhe botânico verde — identidade visual da Essenza Estética",
  },
};

export interface Treatment {
  name: string;
  description: string;
  image: string;
  alt: string;
}

/* ⚠ Descrições genéricas/ilustrativas — validar com a clínica antes de publicar. */
export const treatments: Treatment[] = [
  {
    name: "Toxina Botulínica",
    description:
      "Suavização de linhas de expressão com precisão técnica, preservando a naturalidade da sua expressão.",
    image: "/images/botox.jpg",
    alt: "Retrato de beleza com pele lisa — imagem ilustrativa de toxina botulínica",
  },
  {
    name: "Preenchimento Labial",
    description:
      "Contorno e volume dos lábios com proporções harmônicas, respeitando a anatomia de cada sorriso.",
    image: "/images/lips.jpg",
    alt: "Mulher sorrindo com lábios definidos — imagem ilustrativa de preenchimento labial",
  },
  {
    name: "Bioestimuladores de Colágeno",
    description:
      "Estímulo à produção natural de colágeno, para firmeza e qualidade de pele que evoluem com o tempo.",
    image: "/images/bioestimuladores.jpg",
    alt: "Ambiente de spa com toalhas e cosméticos — imagem ilustrativa de bioestimuladores",
  },
  {
    name: "Harmonização Facial",
    description:
      "Análise integrada do rosto para realçar a harmonia natural dos traços — nunca para transformá-los.",
    image: "/images/facial-treatment.jpg",
    alt: "Procedimento estético facial em andamento — imagem ilustrativa de harmonização facial",
  },
];

export const treatmentsNote =
  "Todos os procedimentos são definidos exclusivamente após avaliação presencial. Valores sob consulta.";

export const doctor = {
  eyebrow: "Sobre a profissional",
  name: "Dra. Amanda Faustino",
  role: "Estética facial premium",
  paragraphs: [
    "À frente da Essenza, a Dra. Amanda une formação técnica e um olhar apurado para a beleza natural. Sua abordagem parte de um princípio simples: entender a pessoa antes do procedimento.",
    "Cada avaliação é uma conversa honesta sobre expectativas, possibilidades e cuidados — porque confiança é o primeiro passo de um bom resultado.",
  ],
  chips: ["Escuta e avaliação cuidadosa", "Protocolos individualizados", "Foco em naturalidade"],
  image: {
    src: "/images/doctor.jpg",
    alt: "Dra. Amanda Faustino — imagem ilustrativa, a ser substituída por foto oficial da clínica",
  },
  /* ⚠ PLACEHOLDER — inserir formação, registro profissional (CRM/CRO),
     especializações e certificações APÓS validação pela clínica. */
  credentialsPlaceholder:
    "Espaço reservado para formação, registro profissional e certificações — conteúdo a inserir após validação pela clínica.",
};

export const differentials = [
  {
    title: "Atendimento individual",
    text: "Um plano desenhado para o seu rosto, seus objetivos e o seu momento.",
  },
  {
    title: "Avaliação cuidadosa",
    text: "Antes de qualquer procedimento, uma análise completa e uma conversa transparente.",
  },
  {
    title: "Resultados naturais",
    text: "Estética que valoriza seus traços, sem excessos e sem artificialidade.",
  },
  {
    title: "Experiência premium",
    text: "Do acolhimento ao pós-procedimento, cada detalhe pensado para o seu conforto.",
  },
];

export const results = {
  eyebrow: "Resultados",
  title: "Evolução com naturalidade",
  description:
    "Espaço reservado para registros reais de antes e depois, publicados somente com autorização expressa das pacientes.",
  beforeLabel: "Antes",
  afterLabel: "Depois",
  frameWatermark: "Foto ilustrativa — espaço para resultado real",
  disclaimer:
    "As imagens desta seção serão substituídas por casos reais, com consentimento formal. Resultados variam de pessoa para pessoa.",
};

export interface Testimonial {
  quote: string;
  name: string;
  detail: string;
  avatar: string;
  demo: boolean;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Espaço reservado para o depoimento real de uma paciente, com autorização expressa para uso no site.",
    name: "Paciente Essenza",
    detail: "Depoimento demonstrativo",
    avatar: "/images/avatar-1.jpg",
    demo: true,
  },
  {
    quote:
      "Espaço reservado para o depoimento real de uma paciente, com autorização expressa para uso no site.",
    name: "Paciente Essenza",
    detail: "Depoimento demonstrativo",
    avatar: "/images/avatar-2.jpg",
    demo: true,
  },
  {
    quote:
      "Espaço reservado para o depoimento real de uma paciente, com autorização expressa para uso no site.",
    name: "Paciente Essenza",
    detail: "Depoimento demonstrativo",
    avatar: "/images/avatar-3.jpg",
    demo: true,
  },
];

export const cta = {
  title: "Pronta para valorizar",
  titleAccent: "a sua melhor versão?",
  description:
    "Agende uma avaliação e descubra o plano ideal para os seus objetivos — sem compromisso, com toda a atenção que você merece.",
  button: "Agendar pelo WhatsApp",
  secondary: "Ver informações de contato",
};

export const contact = {
  eyebrow: "Contato & Localização",
  title: "Vamos conversar?",
  description:
    "Estamos prontas para receber você. Escolha o canal de sua preferência e agende sua avaliação.",
  /* ⚠ PLACEHOLDERS — substituir por dados reais antes da publicação. */
  whatsapp: { label: "(11) 90000-0000", note: "WhatsApp — número a confirmar" },
  instagram: { label: "@essenzaestetica", note: "Instagram — perfil a confirmar" },
  email: { label: "contato@essenzaestetica.com.br", note: "E-mail — a confirmar" },
  hours: { label: "Seg a Sex, 9h às 19h", note: "Horários a confirmar" },
  units: [
    {
      city: "Guarulhos — SP",
      address: "Endereço completo em confirmação",
    },
    {
      city: "Santana — São Paulo — SP",
      address: "Endereço completo em confirmação",
    },
  ],
};

export const footer = {
  blurb:
    "Estética facial premium que une técnica, segurança e um olhar genuíno pela beleza natural de cada pessoa.",
  demoNote:
    "Site demonstrativo criado para fins de proposta comercial. Imagens, depoimentos e dados de contato são ilustrativos.",
};