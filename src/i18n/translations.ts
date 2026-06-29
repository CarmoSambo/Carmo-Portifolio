export const translations = {
  pt: {
    navbar: {
      home: "Início",
      experience: "Experiência",
      skills: "Skills",
      projects: "Projetos",
      contact: "Contacto",
    },
    hero: {
      badge: "Disponível para trabalho",
      role: "Software Developer",
      description:
        "Olá, sou um desenvolvedor de software focado em criar soluções inovadoras e eficientes. Tenho experiência em diversas tecnologias e estou sempre a buscar aprender e crescer profissionalmente.",
      cv: "Curriculum Vitae",
      contact: "Falar comigo",
    },
    experience: {
      label: "Carreira",
      title: "Experiência",
      subtitle: "O meu percurso profissional ao longo dos anos.",
      items: [
        {
          role: "FrontEnd Developer",
          company: "EDUPRO, LDA.",
          period: "2025 – 2026",
          description:
            "Desenvolvimento de interfaces modernas e responsivas para a plataforma educacional da empresa, com foco em experiência do utilizador.",
        },
        {
          role: "FullStack Developer",
          company: "EvoTech, LDA.",
          period: "2023 – 2025",
          description:
            "Desenvolvimento full-stack de aplicações web empresariais, com foco em performance, escalabilidade e boas práticas de código.",
        },
      ],
    },
    skills: {
      label: "Competências",
      title: "O que sei fazer",
      subtitle: "Tecnologias e ferramentas que utilizo no dia a dia.",
      categories: ["Frontend", "Backend", "Ferramentas"],
    },
    projects: {
      label: "Portfólio",
      title: "Projetos",
      subtitle: "Alguns dos trabalhos que desenvolvi ao longo da minha carreira.",
      visitBtn: "Visitar Website",
      githubBtn: "Ver no GitHub",
      items: [
        {
          title: "Perfectus",
          description: "Impulsionando o seu crescimento focados em excelência.",
        },
        {
          title: "Blast",
          description: "Plataforma de e-commerce otimizada para alta performance.",
        },
        {
          title: "Quem quer ser milionário?",
          description: "Jogo de perguntas e respostas inspirado no famoso programa de TV.",
        },
        {
          title: "Universal Consulting Services",
          description: "Website institucional para empresa de consultoria, com foco em clareza e profissionalismo.",
        },
        {
          title: "Joelle Art",
          description: "Portfólio digital para artista, destacando trabalhos e identidade visual.",
        },
        {
          title: "CarmoBot TradingView",
          description: "Indicador em Pine Script para TradingView, com detecção automática de estrutura de mercado.",
        },
        {
          title: "Carmo MetaTrader",
          description: "Expert Advisor para MetaTrader, desenvolvido em MQL5 e C++ para automação de estratégias de trading.",
        },
      ],
    },
    contact: {
      label: "Contacto",
      title: "Vamos trabalhar juntos",
      description:
        "Tens um projecto em mente ou queres apenas dizer olá? Envia-me uma mensagem — respondo sempre.",
      namePlaceholder: "O teu nome",
      nameLabel: "Nome",
      emailLabel: "Email",
      emailPlaceholder: "o.teu@email.com",
      subjectLabel: "Assunto",
      subjectPlaceholder: "Em que posso ajudar?",
      messageLabel: "Mensagem",
      messagePlaceholder: "Escreve a tua mensagem aqui...",
      sendBtn: "Enviar mensagem",
      sending: "A enviar...",
      success: "Mensagem enviada com sucesso!",
      error: "Ocorreu um erro. Tenta novamente.",
    },
  },

  en: {
    navbar: {
      home: "Home",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      badge: "Available for work",
      role: "Software Developer",
      description:
        "Hi, I'm a software developer focused on building innovative and efficient solutions. I have experience across various technologies and I'm always looking to learn and grow professionally.",
      cv: "Curriculum Vitae",
      contact: "Get in touch",
    },
    experience: {
      label: "Career",
      title: "Experience",
      subtitle: "My professional journey over the years.",
      items: [
        {
          role: "FrontEnd Developer",
          company: "EDUPRO, LDA.",
          period: "2025 – 2026",
          description:
            "Development of modern and responsive interfaces for the company's educational platform, with a focus on user experience.",
        },
        {
          role: "FullStack Developer",
          company: "EvoTech, LDA.",
          period: "2023 – 2025",
          description:
            "Full-stack development of enterprise web applications, focusing on performance, scalability and coding best practices.",
        },
      ],
    },
    skills: {
      label: "Skills",
      title: "What I do",
      subtitle: "Technologies and tools I use on a daily basis.",
      categories: ["Frontend", "Backend", "Tools"],
    },
    projects: {
      label: "Portfolio",
      title: "Projects",
      subtitle: "Some of the work I've developed throughout my career.",
      visitBtn: "Visit Website",
      githubBtn: "View on GitHub",
      items: [
        {
          title: "Perfectus",
          description: "Driving your growth with a focus on excellence.",
        },
        {
          title: "Blast",
          description: "An e-commerce platform optimised for high performance.",
        },
        {
          title: "Who Wants to Be a Millionaire?",
          description: "A quiz game inspired by the famous TV show.",
        },
        {
          title: "Universal Consulting Services",
          description: "Institutional website for a consulting firm, focused on clarity and professionalism.",
        },
        {
          title: "Joelle Art",
          description: "Digital portfolio for an artist, showcasing work and visual identity.",
        },
        {
          title: "CarmoBot TradingView",
          description: "Pine Script indicator for TradingView with automatic market structure detection.",
        },
        {
          title: "Carmo MetaTrader",
          description: "Expert Advisor for MetaTrader, built with MQL5 and C++ to automate trading strategies.",
        },
      ],
    },
    contact: {
      label: "Contact",
      title: "Let's work together",
      description:
        "Have a project in mind or just want to say hello? Send me a message — I always reply.",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "your@email.com",
      subjectLabel: "Subject",
      subjectPlaceholder: "How can I help?",
      messageLabel: "Message",
      messagePlaceholder: "Write your message here...",
      sendBtn: "Send message",
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "Something went wrong. Please try again.",
    },
  },
};

export type Language = keyof typeof translations;
export type Translations = typeof translations.pt;
