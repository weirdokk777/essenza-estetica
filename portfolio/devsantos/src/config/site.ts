// ============================================
// CONFIGURAÇÃO CENTRALIZADA DO SITE
// Edite aqui todos os links e dados do site
// ============================================

export const siteConfig = {
  name: 'DevSantos',
  slogan: 'Transformando ideias em experiências digitais.',
  description: 'Desenvolvemos sites, aplicativos e sistemas modernos, rápidos e escaláveis para transformar ideias em produtos digitais de verdade.',
  email: 'contato@devsantos.dev',
  phone: '+55 11 99999-9999',
  whatsapp: 'https://wa.me/5500000000000',
  address: 'São Paulo, SP - Brasil',
  copyright: '© 2026 DevSantos. Todos os direitos reservados.',
  builtWith: 'Built with code & creativity.',
  social: {
    github: 'https://github.com/devsantos',
    linkedin: 'https://linkedin.com/in/devsantos',
    instagram: 'https://instagram.com/devsantos',
    whatsapp: 'https://wa.me/5500000000000',
    email: 'mailto:contato@devsantos.dev'
  }
}

export const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Tecnologias', href: '#tecnologias' },
  { label: 'Contato', href: '#contato' }
]

export const stats = [
  { value: 50, suffix: '+', label: 'Projetos desenvolvidos' },
  { value: 30, suffix: '+', label: 'Clientes atendidos' },
  { value: 5, suffix: '+', label: 'Anos de experiência' },
  { value: 99, suffix: '%', label: 'Foco em satisfação' }
]

export const aboutFeatures = [
  {
    icon: 'code',
    title: 'Código de alta qualidade',
    description: 'Código limpo, testado e escalável, seguindo as melhores práticas do mercado.'
  },
  {
    icon: 'palette',
    title: 'Design moderno',
    description: 'Interfaces elegantes e intuitivas que encantam os usuários.'
  },
  {
    icon: 'zap',
    title: 'Performance',
    description: 'Aplicações rápidas e otimizadas para máxima eficiência.'
  },
  {
    icon: 'shield',
    title: 'Segurança',
    description: 'Proteção de dados e práticas seguras em todas as camadas.'
  },
  {
    icon: 'trending',
    title: 'Escalabilidade',
    description: 'Soluções que crescem junto com o seu negócio.'
  }
]

export const services = [
  {
    icon: 'globe',
    title: 'Desenvolvimento Web',
    description: 'Sites institucionais, landing pages, plataformas web e sistemas personalizados.'
  },
  {
    icon: 'smartphone',
    title: 'Aplicativos Mobile',
    description: 'Aplicativos modernos para Android e iOS.'
  },
  {
    icon: 'layout',
    title: 'Sistemas Web',
    description: 'Dashboards, sistemas administrativos, plataformas SaaS e ferramentas empresariais.'
  },
  {
    icon: 'shopping',
    title: 'E-commerce',
    description: 'Lojas virtuais rápidas, modernas e preparadas para conversão.'
  },
  {
    icon: 'pen',
    title: 'UI/UX',
    description: 'Interfaces modernas, intuitivas e focadas na experiência do usuário.'
  },
  {
    icon: 'settings',
    title: 'Soluções Personalizadas',
    description: 'Desenvolvimento de soluções sob medida para necessidades específicas.'
  }
]

export const projects = [
  {
    id: 1,
    name: 'Nexus Finance',
    description: 'Plataforma de gerenciamento financeiro.',
    category: 'sistemas',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/devsantos/nexus-finance',
    demo: '#',
    gradient: 'from-blue-600 to-cyan-500',
    icon: 'chart'
  },
  {
    id: 2,
    name: 'FitTrack',
    description: 'Aplicativo de acompanhamento de treinos e saúde.',
    category: 'mobile',
    technologies: ['React Native', 'TypeScript', 'Node.js', 'MongoDB'],
    github: 'https://github.com/devsantos/fittrack',
    demo: '#',
    gradient: 'from-green-500 to-emerald-600',
    icon: 'activity'
  },
  {
    id: 3,
    name: 'ShopWave',
    description: 'E-commerce moderno.',
    category: 'ecommerce',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    github: 'https://github.com/devsantos/shopwave',
    demo: '#',
    gradient: 'from-purple-600 to-pink-500',
    icon: 'shopping'
  },
  {
    id: 4,
    name: 'TaskFlow',
    description: 'Sistema de gerenciamento de tarefas para equipes.',
    category: 'sistemas',
    technologies: ['React', 'TypeScript', 'Node.js', 'MySQL'],
    github: 'https://github.com/devsantos/taskflow',
    demo: '#',
    gradient: 'from-orange-500 to-red-500',
    icon: 'check'
  },
  {
    id: 5,
    name: 'Foodly',
    description: 'Aplicativo de pedidos de comida.',
    category: 'mobile',
    technologies: ['Flutter', 'Dart', 'Firebase'],
    github: 'https://github.com/devsantos/foodly',
    demo: '#',
    gradient: 'from-yellow-500 to-orange-600',
    icon: 'utensils'
  },
  {
    id: 6,
    name: 'CloudDesk',
    description: 'Plataforma SaaS para empresas.',
    category: 'web',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'Docker'],
    github: 'https://github.com/devsantos/clouddesk',
    demo: '#',
    gradient: 'from-indigo-600 to-purple-600',
    icon: 'cloud'
  }
]

export const projectFilters = [
  { label: 'Todos', value: 'todos' },
  { label: 'Web', value: 'web' },
  { label: 'Mobile', value: 'mobile' },
  { label: 'Sistemas', value: 'sistemas' },
  { label: 'E-commerce', value: 'ecommerce' }
]

export const technologies = [
  { name: 'HTML', icon: 'html' },
  { name: 'CSS', icon: 'css' },
  { name: 'JavaScript', icon: 'js' },
  { name: 'TypeScript', icon: 'ts' },
  { name: 'React', icon: 'react' },
  { name: 'Next.js', icon: 'next' },
  { name: 'Node.js', icon: 'node' },
  { name: 'Python', icon: 'python' },
  { name: 'PHP', icon: 'php' },
  { name: 'React Native', icon: 'react-native' },
  { name: 'Flutter', icon: 'flutter' },
  { name: 'PostgreSQL', icon: 'postgres' },
  { name: 'MySQL', icon: 'mysql' },
  { name: 'MongoDB', icon: 'mongo' },
  { name: 'Git', icon: 'git' },
  { name: 'Docker', icon: 'docker' }
]

export const processSteps = [
  {
    number: '01',
    title: 'Descoberta',
    description: 'Entendemos o problema, objetivo e público.'
  },
  {
    number: '02',
    title: 'Planejamento',
    description: 'Definimos arquitetura, funcionalidades e experiência.'
  },
  {
    number: '03',
    title: 'Desenvolvimento',
    description: 'Transformamos o planejamento em código.'
  },
  {
    number: '04',
    title: 'Lançamento',
    description: 'Testamos, otimizamos e colocamos o projeto no ar.'
  }
]

export const testimonials = [
  {
    quote: 'DevSantos transformou completamente nossa ideia em um produto profissional. O resultado superou nossas expectativas.',
    author: 'Carlos Almeida',
    role: 'CEO da Nexus Finance',
    initials: 'CA'
  },
  {
    quote: 'A equipe da DevSantos é extremamente profissional e entregou nosso aplicativo no prazo, com qualidade impressionante.',
    author: 'Mariana Costa',
    role: 'Fundadora da FitTrack',
    initials: 'MC'
  },
  {
    quote: 'Nosso e-commerce cresceu 200% após o novo site. A DevSantos entendeu exatamente o que precisávamos.',
    author: 'Rafael Oliveira',
    role: 'Diretor da ShopWave',
    initials: 'RO'
  }
]

export const projectTypes = [
  'Site institucional',
  'Landing page',
  'Aplicativo mobile',
  'Sistema web',
  'E-commerce',
  'Plataforma SaaS',
  'Outro'
]

export const budgets = [
  'Até R$ 5.000',
  'R$ 5.000 - R$ 15.000',
  'R$ 15.000 - R$ 30.000',
  'R$ 30.000 - R$ 50.000',
  'Acima de R$ 50.000'
]