// src/i18n/locales.ts
import Peneira from '@/assets/images/peneiras.png';
import Tracking from '@/assets/images/tracking.png';
import KpopGame from '@/assets/images/kpopgame.png';

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
      home: 'Início',
      about: 'Sobre',
      skills: 'Skills',
      experience: 'Experiência',
      recommendations: 'Recomendações',
      projects: 'Projetos',
      contact: 'Contato',
    },
    hero: {
      role: 'Software Developer',
      description: 'Estudante de Análise e Desenvolvimento de Sistemas na Fatec, apaixonado por criar soluções tecnológicas inovadoras.',
      btnContact: 'Contato',
      btnAbout: 'Sobre mim',
      copyEmail: 'Copiar e-mail',
      emailCopied: 'E-mail copiado!',
    },
    about: {
      title: 'Sobre',
      me: 'Mim',
      p1: 'Sou João Pedro Costa Roblez, estudante de Análise e Desenvolvimento de Sistemas, atualmente no último termo da graduação, com conclusão prevista para meados de 2026.',
      p2: 'Atuo profissionalmente como Auxiliar de Desenvolvimento de Sistemas na Unoeste, no departamento de Design Instrucional, responsável pela gestão e desenvolvimento de soluções para laboratórios exclusivos da instituição, como a Sala Betha e a Arena Lab.',
      p3: 'Tenho experiência no desenvolvimento de sistemas utilizando React, PHP e Laravel, além de conhecimentos iniciais em Unity. Possuo forte interesse em criar soluções tecnológicas que unam eficiência, inovação e qualidade.',
      p4: 'Busco constantemente aprimorar meus conhecimentos e contribuir para projetos que gerem impacto real, agregando valor por meio da tecnologia.',
      educationTitle: 'Formação',
      educationCourse: 'Análise e Desenvolvimento de Sistemas',
      educationStatus: 'Conclusão prevista: Meio de 2026',
    },
    skills: {
      title: 'Minhas Skills',
      frontend: 'Front-End',
      backend: 'Back-End',
      tools: 'Ferramentas',
      database: 'Banco de Dados',
    },
    experience: {
      title: 'Experiência Profissional',
      list: [
        {
          title: 'Aux. Técnico em Desenvolvimento de Sistemas',
          company: 'Unoeste',
          period: '2025 - Atual',
          location: 'Presidente Prudente, SP',
          description: 'Atuação no desenvolvimento e manutenção de sistemas institucionais, suporte a aplicações web e integração de novas funcionalidades.',
          skills: ['React', 'PHP', 'Laravel', 'Banco de Dados', 'Full Stack', 'Tailwind CSS']
        },
        {
          title: 'Auxiliar Administrativo',
          company: 'Alimentos Wuilson',
          period: '2023 - 2025 (SET)',
          location: 'Regente Feijó, SP',
          description: 'Responsável pela logística reversa, controlando retorno e autorizações de devoluções, baixa de notas fiscais de devoluções, atualização e alimentação de planilha de controle de devolução, relatório de devoluções, reposição de faltas e avarias nos clientes e transportadoras.',
          skills: ['Habilidades analíticas', 'Office', 'Logística Reversa', 'Conferencias', 'Suporte']
        },
        {
          title: 'Aprendiz de Logística',
          company: 'Alimentos Wuilson',
          period: '2022 - 2023',
          location: 'Regente Feijó, SP',
          description: 'Auxiliava o controle de entregas dando previsões de entregas ao cliente, prorrogando boletos atrasados, baixas de canhotos, alimentando e atualizando planilhas de controles de entregas.',
          skills: ['Trabalho em equipe', 'Office', 'Desempenho de entregas', 'Conferencias', 'Suporte']
        },
      ],
    },
    projects: {
      title: 'Meus Projetos',
      btnGithub: 'Ver no GitHub',
      btnLink: 'Ver Site',
      list: [
        {
            title: "Peneira DB (TCC)",
            description: "Sistema completo desenvolvido para gerenciar e otimizar processos de avaliação e seleção em peneiras de futebol.",
            technologies: ['PHP', 'Laravel', 'MySQL', 'React', 'Vercel', 'Railway'],
            link: "https://github.com/jRoblxz/Projeto_TCC",
            siteLink: "https://projeto-tcc.vercel.app",
            image: Peneira
        },
        {
            title: "Sports Analytics Tracker",
            description: "Sistema inovador de visão computacional capaz de mapear e rastrear jogadores de hóquei em tempo real. Integrado ao TCC.",
            technologies: ['Python', 'OpenCV', 'YOLO', 'IA', 'Modal', 'Vercel', 'Railway'],
            link: "https://github.com/jRoblxz/Projeto_TCC",
            siteLink: "https://projeto-tcc.vercel.app",
            image: Tracking
        },
        {
            title: "Jogo Web Interativo",
            description: "Aplicação web interativa focada na experiência do usuário e gerenciamento dinâmico de estados. Consiste em um jogo de caça-palavras.",
            technologies: ['React', 'TypeScript', 'Tailwind CSS', 'UI/UX', 'Vercel', 'Railway'],
            link: "https://github.com/jRoblxz/word_search_kpop",
            siteLink: "https://word-search-kpop.vercel.app",
            image: KpopGame
        },
      ]
    },
    contact: {
      title: 'Vamos Trabalhar Juntos',
      subtitle: 'Tem um projeto em mente? Entre em contato conosco e vamos transformar suas ideias em realidade',
      infoTitle: 'Informações de Contato',
      socialTitle: 'Siga-nos nas redes sociais',
      labels: {
        email: 'Email',
        phone: 'Telefone',
        location: 'Localização'
      },
      form: {
        nameLabel: 'Nome',
        namePlaceholder: 'Seu nome',
        emailLabel: 'Email',
        emailPlaceholder: 'seu@email.com',
        subjectLabel: 'Assunto',
        subjectPlaceholder: 'Digite o assunto...',
        messageLabel: 'Mensagem',
        messagePlaceholder: 'Descreva seu projeto...',
        btnSubmit: 'Enviar Mensagem'
      }
    },
    recommendations: {
        title: 'Recomendações',
        btnLinkedin: 'Ver no LinkedIn',
        list: [
            {
                name: 'Victor Almeida',
                title: 'Unity Developer | RA | RM | RV',
                text: 'João Roblez é um profissional notável, tive a honra de trabalhar ao seu lado e puder ver de perto como sua dedicação e metodologia de trabalho aplicada funcionam...',
            },
        ]
    },
    footer: {
      rights: 'Todos os direitos reservados.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      recommendations: 'Recommendations',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      role: 'Software Developer',
      description: 'Systems Analysis and Development student at Fatec, passionate about creating innovative technological solutions.',
      btnContact: 'Contact',
      btnAbout: 'About Me',
      copyEmail: 'Copy email',
      emailCopied: 'Email copied!',
    },
    about: {
      title: 'About',
      me: 'Me',
      p1: 'I am João Pedro Costa Roblez, a Systems Analysis and Development student, currently in the final term of my degree, expected to graduate in mid-2026.',
      p2: 'I work professionally as a Systems Development Assistant at Unoeste, in the Instructional Design department, responsible for managing and developing solutions for the institution\'s exclusive laboratories.',
      p3: 'I have experience in systems development using React, PHP, and Laravel, as well as initial knowledge in Unity.',
      p4: 'I constantly seek to improve my knowledge and contribute to projects that generate real impact.',
      educationTitle: 'Education',
      educationCourse: 'Systems Analysis and Development',
      educationStatus: 'Expected graduation: Mid-2026',
    },
    skills: {
      title: 'My Skills',
      frontend: 'Front-End',
      backend: 'Back-End',
      tools: 'Tools',
      database: 'Database',
    },
    experience: {
      title: 'Professional Experience',
      list: [
        {
          title: 'Systems Development Tech. Assistant',
          company: 'Unoeste',
          period: '2025 - Present',
          location: 'Presidente Prudente, SP',
          description: 'Working on the development and maintenance of institutional systems, supporting web applications, and integrating new features.',
          skills: ['React', 'PHP', 'Laravel', 'Database', 'Full Stack', 'Tailwind CSS']
        },
        {
          title: 'Administrative Assistant',
          company: 'Alimentos Wuilson',
          period: '2023 - 2025 (SEP)',
          location: 'Regente Feijó, SP',
          description: 'Responsible for reverse logistics, controlling returns and return authorizations, writing off return invoices, and assisting the billing sector.',
          skills: ['Analytical Skills', 'Office', 'Reverse Logistics', 'Conferences', 'Support']
        },
        {
          title: 'Logistics Apprentice',
          company: 'Alimentos Wuilson',
          period: '2022 - 2023',
          location: 'Regente Feijó, SP',
          description: 'Assisted in delivery control by providing delivery forecasts to the customer and managing delivery spreadsheets.',
          skills: ['Teamwork', 'Office', 'Delivery Performance', 'Conferences', 'Support']
        },
      ],
    },
    projects: {
      title: 'My Projects',
      btnGithub: 'View on GitHub',
      btnLink: 'View Site',
      list: [
        {
            title: "Peneira DB (TCC)",
            description: "Final Course Project focused on Systems Analysis and Development. A complete platform for soccer recruitment management.",
            technologies: ['PHP', 'Laravel', 'MySQL', 'React', 'N8N'],
            link: "https://github.com/jRoblxz/Projeto_TCC",
            siteLink: "https://projeto-tcc.vercel.app",
            image: Peneira
        },
        {
            title: "Sports Analytics Tracker",
            description: "Innovative computer vision system capable of mapping and tracking hockey players in real time. Integrated with the Capstone Project.",
            technologies: ['Python', 'OpenCV', 'YOLO', 'IA', 'Modal', 'Vercel', 'Railway'],
            link: "https://github.com/jRoblxz/Projeto_TCC",
            siteLink: "https://projeto-tcc.vercel.app",
            image: Tracking
        },
        {
            title: "Interactive Web Game",
            description: "Interactive web application focused on user experience and dynamic state management. It consists of a word search game.",
            technologies: ['React', 'TypeScript', 'Tailwind CSS', 'UI/UX', 'Vercel', 'Railway'],
            link: "https://github.com/jRoblxz/word_search_kpop",
            siteLink: "https://word-search-kpop.vercel.app/",
            image: KpopGame
        }
      ]
    },
    contact: {
      title: 'Let\'s Work Together',
      subtitle: 'Have a project in mind? Contact us and let\'s turn your ideas into reality',
      infoTitle: 'Contact Information',
      socialTitle: 'Follow us on social media',
      labels: {
        email: 'Email',
        phone: 'Phone',
        location: 'Location'
      },
      form: {
        nameLabel: 'Name',
        namePlaceholder: 'Your name',
        emailLabel: 'Email',
        emailPlaceholder: 'your@email.com',
        subjectLabel: 'Subject',
        subjectPlaceholder: 'Enter the subject...',
        messageLabel: 'Message',
        messagePlaceholder: 'Describe your project...',
        btnSubmit: 'Send Message'
      }
    },
    recommendations: {
        title: 'Recommendations',
        btnLinkedin: 'View on LinkedIn',
        list: [
            {
                name: 'Victor Almeida',
                title: 'Unity Developer | AR | MR | VR',
                text: 'João Roblez is a remarkable professional, I had the honor of working alongside him...',
            },
        ]
    },
    footer: {
      rights: 'All rights reserved.',
    },
  },
};