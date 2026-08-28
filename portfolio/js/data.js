// ============================================================
// DADOS CENTRALIZADOS DO PORTFÓLIO
// Edite aqui suas informações reais. Os componentes leem estes dados.
// ============================================================

// ---------- CONFIGURAÇÕES GERAIS ----------
const siteConfig = {
  name: "Kevin Santos",
  role: "Desenvolvedor de Aplicativos & Criador de Soluções Digitais",
  shortDescription:
    "Transformo ideias em aplicativos e soluções digitais com foco em experiência do usuário, inovação e design.",
  aboutText:
    "Sou apaixonado por tecnologia e criação de soluções digitais. Desenvolvo aplicativos e projetos digitais com foco em experiência do usuário, inovação, funcionalidade e design.",
  aboutExtra:
    "Trabalho de forma organizada e colaborativa, unindo criatividade e técnica para entregar produtos digitais que realmente fazem a diferença. Estou sempre em busca de novos desafios e oportunidades de crescimento.",
  email: "[SEU E-MAIL]",
  location: "Brasil",
};

// ---------- REDES SOCIAIS ----------
// Substitua os placeholders pelos seus links reais.
const socialLinks = {
  linkedin: "[SEU LINK]",
  github: "[SEU LINK]",
  instagram: "[SEU LINK]",
  twitter: "[SEU LINK]",
  whatsapp: "[SEU LINK]",
  email: "[SEU E-MAIL]",
};

// ---------- EXPERIÊNCIA / SOBRE ----------
const aboutStats = [
  { value: "2+", label: "Anos de experiência" },
  { value: "10+", label: "Projetos desenvolvidos" },
  { value: "5+", label: "Tecnologias dominadas" },
  { value: "100%", label: "Dedicação e foco" },
];

const aboutCards = [
  {
    icon: "briefcase",
    title: "Experiência",
    text: "Desenvolvimento de aplicativos mobile e web, do conceito à publicação.",
  },
  {
    icon: "code",
    title: "Tecnologias",
    text: "Flutter, React Native, React, Node.js, Firebase e muito mais.",
  },
  {
    icon: "layers",
    title: "Áreas de atuação",
    text: "Aplicativos mobile, plataformas web, UI/UX e soluções digitais.",
  },
  {
    icon: "target",
    title: "Objetivos",
    text: "Criar produtos digitais inovadores que gerem valor real para as pessoas.",
  },
];

// ---------- PROJETOS ----------
// Substitua os dados fictícios pelos seus projetos reais.
const projects = [
  {
    id: 1,
    name: "FinTrack",
    category: "Aplicativos",
    description:
      "Aplicativo de finanças pessoais desenvolvido para ajudar usuários a controlar gastos e economizar de forma inteligente.",
    technologies: ["Flutter", "Firebase", "API REST"],
    image: "gradient-blue",
    icon: "chart",
    link: "#",
    github: "https://github.com/",
  },
  {
    id: 2,
    name: "DeliveryPro",
    category: "Aplicativos",
    description:
      "Plataforma digital criada para conectar restaurantes e entregadores, otimizando pedidos e rotas em tempo real.",
    technologies: ["React Native", "Node.js", "PostgreSQL"],
    image: "gradient-purple",
    icon: "truck",
    link: "#",
    github: "https://github.com/",
  },
  {
    id: 3,
    name: "EduLearn",
    category: "Web",
    description:
      "Plataforma web de ensino online com cursos interativos, progresso do aluno e painel administrativo completo.",
    technologies: ["React", "TypeScript", "Firebase"],
    image: "gradient-cyan",
    icon: "book",
    link: "#",
    github: "https://github.com/",
  },
  {
    id: 4,
    name: "HealthTrack",
    category: "Aplicativos",
    description:
      "Aplicativo de monitoramento de saúde que registra atividades físicas, alimentação e sinais vitais do usuário.",
    technologies: ["Flutter", "Node.js", "MongoDB"],
    image: "gradient-green",
    icon: "heart",
    link: "#",
    github: "https://github.com/",
  },
  {
    id: 5,
    name: "StoreHub",
    category: "Web",
    description:
      "Solução de e-commerce completa com gestão de estoque, pagamentos integrados e painel de vendas em tempo real.",
    technologies: ["React", "Node.js", "Stripe API"],
    image: "gradient-orange",
    icon: "cart",
    link: "#",
    github: "https://github.com/",
  },
  {
    id: 6,
    name: "TaskFlow",
    category: "UI/UX",
    description:
      "Design system e protótipo de alta fidelidade para um aplicativo de produtividade e gerenciamento de tarefas.",
    technologies: ["Figma", "Design System", "Prototipagem"],
    image: "gradient-pink",
    icon: "check",
    link: "#",
    github: null,
  },
];

// ---------- TECNOLOGIAS ----------
// Edite a lista conforme suas tecnologias reais.
const technologies = [
  { name: "Flutter", icon: "flutter", type: "Mobile" },
  { name: "React Native", icon: "react", type: "Mobile" },
  { name: "React", icon: "react", type: "Frontend" },
  { name: "JavaScript", icon: "js", type: "Frontend" },
  { name: "TypeScript", icon: "ts", type: "Frontend" },
  { name: "Node.js", icon: "node", type: "Backend" },
  { name: "Firebase", icon: "firebase", type: "Backend" },
  { name: "Git", icon: "git", type: "Ferramentas" },
  { name: "GitHub", icon: "github", type: "Ferramentas" },
  { name: "Figma", icon: "figma", type: "Design" },
  { name: "APIs REST", icon: "api", type: "Backend" },
  { name: "PostgreSQL", icon: "db", type: "Backend" },
];

// ---------- PROCESSO DE DESENVOLVIMENTO ----------
const processSteps = [
  {
    icon: "bulb",
    title: "Ideia",
    text: "Entendo o objetivo do projeto, o público-alvo e as necessidades para transformar a ideia em um conceito claro.",
  },
  {
    icon: "plan",
    title: "Planejamento",
    text: "Defino a arquitetura, as tecnologias, o cronograma e as etapas de desenvolvimento de forma organizada.",
  },
  {
    icon: "code",
    title: "Desenvolvimento",
    text: "Construo o produto com código limpo, testes e foco total em performance, segurança e experiência do usuário.",
  },
  {
    icon: "rocket",
    title: "Entrega",
    text: "Publico o projeto, realizo os ajustes finais e ofereço suporte para garantir o sucesso da solução.",
  },
];

// ---------- NAVEGAÇÃO ----------
const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Tecnologias", href: "#tecnologias" },
  { label: "Processo", href: "#processo" },
  { label: "Contato", href: "#contato" },
];