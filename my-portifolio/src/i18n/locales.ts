// src/i18n/locales.ts
import Peneira from '@/assets/images/peneiras.png';
import Tracking from '@/assets/images/tracking.png';
import KpopGame from '@/assets/images/kpopgame.png';
import PokedexImage from '@/assets/images/pokedex.png';
import TemperandinImage from "@/assets/images/temperandin.png";
import BarberflowImage from "@/assets/images/barberflow.png";

export type Language = 'pt' | 'en';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  siteLink?: string;
  image?: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
}

export interface Recommendation {
  name: string;
  title: string;
  text: string;
}

export interface Translation {
  nav: {
    home: string;
    about: string;
    skills: string;
    experience: string;
    recommendations: string;
    projects: string;
    contact: string;
  };
  hero: {
    role: string;
    description: string;
    btnContact: string;
    btnAbout: string;
    copyEmail: string;
    emailCopied: string;
  };
  about: {
    title: string;
    me: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    educationTitle: string;
    educationCourse: string;
    educationStatus: string;
  };
  skills: {
    title: string;
    frontend: string;
    backend: string;
    tools: string;
    database: string;
  };
  experience: {
    title: string;
    list: Experience[];
  };
  projects: {
    title: string;
    btnGithub: string;
    btnLink: string;
    list: Project[];
  };
  contact: {
    title: string;
    subtitle: string;
    infoTitle: string;
    socialTitle: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      subjectLabel: string;
      subjectPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      btnSubmit: string;
    };
    labels: {
      email: string;
      phone: string;
      location: string;
    }
  };
  recommendations: {
    title: string;
    btnLinkedin: string;
    list: Recommendation[];
  };
  footer: {
    rights: string;
  };
}

export const translations: Record<Language, Translation> = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      skills: "Skills",
      experience: "Experiência",
      recommendations: "Recomendações",
      projects: "Projetos",
      contact: "Contato",
    },
    hero: {
      role: "Software Developer",
      description:
        "Formado em Análise e Desenvolvimento de Sistemas pela Fatec, apaixonado por criar soluções tecnológicas inovadoras.",
      btnContact: "Contato",
      btnAbout: "Sobre mim",
      copyEmail: "Copiar e-mail",
      emailCopied: "E-mail copiado!",
    },
    about: {
      title: "Sobre",
      me: "Mim",
      p1: "Desenvolvedor Full Stack focado em arquitetar soluções de software robustas, escaláveis e com alto impacto operacional. Minha filosofia de trabalho é guiada pela premissa de que código limpo e bem estruturado é o motor para transformar e impulsionar negócios.",
      p2: "Atuo profissionalmente na equipe de Desenvolvimento de Sistemas da Unoeste (Design Instrucional), onde crio e sustento aplicações web institucionais e colaboro na gestão de ecossistemas tecnológicos e laboratórios de inovação de referência, como a Sala Betha e a Arena Lab.",
      p3: "Combino forte domínio no Back-End com PHP, Laravel e modelagem relacional (MySQL) à criação de interfaces modernas, altamente reativas e performáticas utilizando React, TypeScript e Tailwind CSS. Também integro soluções de automação de fluxos (N8N) e exploro aplicações práticas de IA e Visão Computacional (OpenCV/YOLO).",
      p4: "Com postura pragmática e foco em entrega, busco constantemente alinhar excelência técnica, otimização de performance e a melhor experiência de uso em cada projeto assumido.",
      educationTitle: "Formação Acadêmica",
      educationCourse: "Análise e Desenvolvimento de Sistemas",
      educationStatus: "Concluído em 2026",
    },
    skills: {
      title: "Minhas Skills",
      frontend: "Front-End",
      backend: "Back-End",
      tools: "Ferramentas",
      database: "Banco de Dados",
    },
    experience: {
      title: "Experiência Profissional",
      list: [
        {
          title: "Auxiliar Técnico em Desenvolvimento de Sistemas",
          company: "Unoeste (Universidade do Oeste Paulista)",
          period: "2025 - Atual",
          location: "Presidente Prudente, SP",
          description:
            "Atuação direta no desenvolvimento full stack e sustentação de sistemas educacionais e institucionais focados em Design Instrucional. Responsável técnico pelo suporte e evolução de ecossistemas inovadores e laboratórios de tecnologia avançada, como a Sala Betha e a Arena Lab, aplicando arquiteturas escaláveis e integrações contínuas.",
          skills: [
            "React",
            "PHP",
            "Laravel",
            "TypeScript",
            "MySQL",
            "Tailwind CSS",
            "Suporte N3",
          ],
        },
        {
          title: "Auxiliar Administrativo & Logístico",
          company: "Alimentos Wuilson",
          period: "2023 - 2025",
          location: "Regente Feijó, SP",
          description:
            "Gestão analítica de processos logísticos reversos e emissão fiscal. Responsável por desenvolver controles e relatórios automatizados via planilhas complexas, auditar devoluções e prestar suporte operacional direto às transportadoras e clientes finais.",
          skills: [
            "Análise de Dados",
            "Logística Reversa",
            "Pacote Office Avançado",
            "Resolução de Problemas",
            "Gestão Operacional",
          ],
        },
        {
          title: "Jovem Aprendiz de Logística",
          company: "Alimentos Wuilson",
          period: "2022 - 2023",
          location: "Regente Feijó, SP",
          description:
            "Apoio no controle de tráfego de entregas, atualização contínua de bases de dados operacionais, renegociação de prazos de recebimento e suporte ao atendimento de clientes B2B.",
          skills: [
            "Trabalho em Equipe",
            "Controle de Dados",
            "Atendimento B2B",
            "Agilidade Operacional",
          ],
        },
      ],
    },
    projects: {
      title: "Meus Projetos",
      btnGithub: "Ver no GitHub",
      btnLink: "Ver Site",
      list: [
        {
          title: "TemperAndin | ERP Gastronômico & Gestão",
          description:
            "Sistema web full-stack para gestão operacional e controle de estoque. Arquitetado com baixa automática de insumos por venda, painéis gerenciais (Dashboards) para análise de fluxo de caixa e relatórios financeiros dinâmicos.",
          technologies: ["React", "PHP", "Laravel", "MySQL", "Tailwind CSS"],
          link: "https://github.com/jRoblxz/TemperAndin",
          siteLink: "https://sparklab.dev.br/projetos/temperandin",
          image: TemperandinImage,
        },
        {
          title: "BarberFlow | Agendamento & Gateway de Pagamento",
          description:
            "Plataforma inteligente de agendamentos online com gestão de clientes (regras de negócio para programa VIP), processamento de pagamentos integrado e automação de relatórios de faturamento.",
          technologies: ["React", "TypeScript", "REST API", "Tailwind CSS"],
          link: "https://github.com/jRoblxz/Barber_ERP",
          siteLink: "https://sparklab.dev.br/projetos/barberflow",
          image: BarberflowImage,
        },
        {
          title: "Plataforma de Gestão Esportiva & Scouting",
          description:
            "Arquitetura de software desenvolvida para automatizar a avaliação e seleção de atletas em peneiras de futebol. Gerencia fluxos de aprovação, cadastros e gera métricas de desempenho para clubes.",
          technologies: ["PHP", "Laravel", "MySQL", "React", "Vercel"],
          link: "https://github.com/jRoblxz/Projeto_TCC",
          siteLink: "https://projeto-tcc.vercel.app",
          image: Peneira,
        },
        {
          title: "Sports Analytics Tracker (Visão Computacional)",
          description:
            "Sistema avançado de Inteligência Artificial para mapeamento e rastreamento térmico de jogadores em tempo real utilizando redes neurais convolucionais (YOLO) e processamento de vídeo.",
          technologies: ["Python", "OpenCV", "YOLO", "IA", "Modal"],
          link: "https://github.com/jRoblxz/Sports-Analytics-Tracker",
          siteLink: "https://projeto-tcc.vercel.app",
          image: Tracking,
        },
        {
          title: "Pokédex Full-Stack (Projeto Colaborativo)",
          description:
            "Aplicação web modular construída em equipe consumindo a PokeAPI. Implementa filtros complexos cruzados, paginação otimizada, Dark Mode e visualização analítica com gráficos de estatísticas interativos.",
          technologies: [
            "React",
            "Node.js",
            "TypeScript",
            "Tailwind CSS",
            "Recharts",
          ],
          link: "https://github.com/jRoblxz/gestaoprojetosequipe3_pokedex",
          siteLink: "https://pokedex-fatecpp.vercel.app/",
          image: PokedexImage,
        },
        {
          title: "Engine de Caça-Palavras Interativo",
          description:
            "Aplicação web focada no gerenciamento de estados complexos e reatividade no front-end. Lida com algoritmos de validação de grade em tempo real e interface otimizada (UI/UX).",
          technologies: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
          link: "https://github.com/jRoblxz/word_search_kpop",
          siteLink: "https://word-search-kpop.vercel.app",
          image: KpopGame,
        },
      ],
    },
    contact: {
      title: "Vamos Trabalhar Juntos",
      subtitle:
        "Tem um projeto em mente? Entre em contato conosco e vamos transformar suas ideias em realidade",
      infoTitle: "Informações de Contato",
      socialTitle: "Siga-nos nas redes sociais",
      labels: {
        email: "Email",
        phone: "Telefone",
        location: "Localização",
      },
      form: {
        nameLabel: "Nome",
        namePlaceholder: "Seu nome",
        emailLabel: "Email",
        emailPlaceholder: "seu@email.com",
        subjectLabel: "Assunto",
        subjectPlaceholder: "Digite o assunto...",
        messageLabel: "Mensagem",
        messagePlaceholder: "Descreva seu projeto...",
        btnSubmit: "Enviar Mensagem",
      },
    },
    recommendations: {
      title: "Recomendações",
      btnLinkedin: "Ver no LinkedIn",
      list: [
        {
          name: "Victor Almeida",
          title: "Unity Developer | RA | RM | RV",
          text: "João Roblez é um profissional notável, tive a honra de trabalhar ao seu lado e puder ver de perto como sua dedicação e metodologia de trabalho aplicada funcionam...",
        },
      ],
    },
    footer: {
      rights: "Todos os direitos reservados.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      recommendations: "Recommendations",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      role: "Software Developer",
      description:
        "Graduated in Systems Analysis and Development from Fatec, passionate about creating innovative technological solutions.",
      btnContact: "Contact",
      btnAbout: "About Me",
      copyEmail: "Copy email",
      emailCopied: "Email copied!",
    },
    about: {
      title: "About",
      me: "Me",
      p1: "Full-Stack Developer focused on engineering robust, scalable software solutions with high operational impact. My work philosophy is driven by the belief that clean, well-architected code is the primary engine for business transformation.",
      p2: "I work professionally within the Systems Development team at Unoeste (Instructional Design), building and sustaining institutional web applications while collaborating on the technical management of cutting-edge innovation hubs such as Sala Betha and Arena Lab.",
      p3: "I combine strong Back-End expertise in PHP, Laravel, and relational databases (MySQL) with the creation of modern, highly reactive, and high-performance user interfaces using React, TypeScript, and Tailwind CSS. I also actively integrate workflow automation (N8N) and practical AI / Computer Vision features (OpenCV/YOLO).",
      p4: "With a pragmatic, results-oriented mindset, I consistently aim to bridge technical excellence, performance optimization, and seamless user experiences across every project.",
      educationTitle: "Education",
      educationCourse: "Systems Analysis and Development",
      educationStatus: "Completed in 2026",
    },
    skills: {
      title: "My Skills",
      frontend: "Front-End",
      backend: "Back-End",
      tools: "Tools",
      database: "Database",
    },
    experience: {
      title: "Professional Experience",
      list: [
        {
          title: "Systems Development Tech. Assistant",
          company: "Unoeste (University of Western São Paulo)",
          period: "2025 - Present",
          location: "Presidente Prudente, SP",
          description:
            "Direct involvement in full-stack development and maintenance of educational and institutional systems focused on Instructional Design. Technical lead for the technical support and evolution of cutting-edge innovation ecosystems and advanced tech laboratories, such as Sala Betha and Arena Lab, applying scalable architectures and continuous integration.",
          skills: [
            "React",
            "PHP",
            "Laravel",
            "TypeScript",
            "MySQL",
            "Tailwind CSS",
            "Tier 3 Support",
          ],
        },
        {
          title: "Administrative & Logistics Assistant",
          company: "Alimentos Wuilson",
          period: "2023 - 2025",
          location: "Regente Feijó, SP",
          description:
            "Analytical management of reverse logistics workflows and tax operations. Responsible for developing automated controls and reporting via complex spreadsheets, auditing product returns, and providing direct operational support to carriers and B2B clients.",
          skills: [
            "Data Analysis",
            "Reverse Logistics",
            "Advanced MS Office",
            "Problem Solving",
            "Operations Management",
          ],
        },
        {
          title: "Logistics Apprentice",
          company: "Alimentos Wuilson",
          period: "2022 - 2023",
          location: "Regente Feijó, SP",
          description:
            "Supported delivery traffic monitoring, continuous updates of operational databases, payment deadline negotiations, and direct support for B2B customer service.",
          skills: [
            "Teamwork",
            "Data Control",
            "B2B Customer Service",
            "Operational Agility",
          ],
        },
      ],
    },
    recommendations: {
      title: "Recommendations",
      btnLinkedin: "View on LinkedIn",
      list: [
        {
          name: "Victor Almeida",
          title: "Unity Developer | AR | MR | VR",
          text: "João Roblez is a remarkable professional. I had the honor of working alongside him and witnessed firsthand his dedication and applied work methodology. He demonstrates exceptional technical capability, high adaptability, and a strong collaborative mindset, consistently adding significant value to challenging software projects.",
        },
      ],
    },
    projects: {
      title: "My Projects",
      btnGithub: "View on GitHub",
      btnLink: "View Site",
      list: [
        {
          title: "TemperAndin | Gastronomic ERP & Management",
          description:
            "Full-stack web application for operational management and smart inventory control. Engineered with automated ingredient deduction per sale, analytical dashboards for cash flow, and financial reporting.",
          technologies: ["React", "PHP", "Laravel", "MySQL", "Tailwind CSS"],
          link: "https://github.com/jRoblxz/TemperAndin",
          siteLink: "https://sparklab.dev.br/projetos/temperandin",
          image: TemperandinImage,
        },
        {
          title: "BarberFlow | Smart Scheduling & Payment Gateway",
          description:
            "Intelligent online scheduling platform featuring customer relationship management (VIP loyalty tiers rules), integrated online payment processing, and automated revenue tracking.",
          technologies: ["React", "TypeScript", "REST API", "Tailwind CSS"],
          link: "https://github.com/jRoblxz/Barber_ERP",
          siteLink: "https://sparklab.dev.br/projetos/barberflow",
          image: BarberflowImage,
        },
        {
          title: "Sports Scouting & Assessment Platform",
          description:
            "Software architecture designed to streamline athlete evaluation and selection workflows. Manages approval stages, player registries, and outputs performance metrics for clubs.",
          technologies: ["PHP", "Laravel", "MySQL", "React", "Vercel"],
          link: "https://github.com/jRoblxz/Projeto_TCC",
          siteLink: "https://projeto-tcc.vercel.app",
          image: Peneira,
        },
        {
          title: "Sports Analytics Tracker (Computer Vision)",
          description:
            "Advanced Artificial Intelligence system for real-time player mapping and spatial tracking using convolutional neural networks (YOLO) and automated video processing.",
          technologies: ["Python", "OpenCV", "YOLO", "IA", "Modal"],
          link: "https://github.com/jRoblxz/Sports-Analytics-Tracker",
          siteLink: "https://projeto-tcc.vercel.app",
          image: Tracking,
        },
        {
          title: "Full-Stack Pokédex (Collaborative Team Project)",
          description:
            "Modular web app built collaboratively consuming the PokeAPI. Features cross-referenced type filtering, optimized pagination, Dark Mode, and analytical stat visualizations via interactive charts.",
          technologies: [
            "React",
            "Node.js",
            "TypeScript",
            "Tailwind CSS",
            "Recharts",
          ],
          link: "https://github.com/jRoblxz/gestaoprojetosequipe3_pokedex",
          siteLink: "https://pokedex-fatecpp.vercel.app/",
          image: PokedexImage,
        },
        {
          title: "Interactive Word Search Engine",
          description:
            "Web application highlighting complex front-end state management and user interactivity. Handles real-time grid validation algorithms alongside a highly responsive UI/UX.",
          technologies: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
          link: "https://github.com/jRoblxz/word_search_kpop",
          siteLink: "https://word-search-kpop.vercel.app",
          image: KpopGame,
        },
      ],
    },
    contact: {
      title: "Let's Work Together",
      subtitle:
        "Have a project in mind? Contact us and let's turn your ideas into reality",
      infoTitle: "Contact Information",
      socialTitle: "Follow us on social media",
      labels: {
        email: "Email",
        phone: "Phone",
        location: "Location",
      },
      form: {
        nameLabel: "Name",
        namePlaceholder: "Your name",
        emailLabel: "Email",
        emailPlaceholder: "your@email.com",
        subjectLabel: "Subject",
        subjectPlaceholder: "Enter the subject...",
        messageLabel: "Message",
        messagePlaceholder: "Describe your project...",
        btnSubmit: "Send Message",
      },
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
};