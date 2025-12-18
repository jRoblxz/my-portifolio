import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { SkillCard } from "./SkillCard";

// Exemplo de dados das skills
const skills = {
  frontend: [
    {
      name: "React",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 10.11c1.03 0 1.87-.84 1.87-1.87S13.03 6.37 12 6.37s-1.87.84-1.87 1.87.84 1.87 1.87 1.87zm4.3-2.28L12 4.89 7.7 7.83l4.3 2.94 4.3-2.94zM4.89 12L7.83 7.7 12 12l4.17 4.3-4.3 2.94-4.3-2.94L4.89 12zm7.11 7.11c1.03 0 1.87-.84 1.87-1.87S13.03 15.37 12 15.37s-1.87.84-1.87 1.87.84 1.87 1.87 1.87z"/>
        </svg>
      ),
      color: "#61DAFB",
      level: 90,
      description: "Biblioteca JavaScript para interfaces de usuário"
    },
    {
      name: "HTML5",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 3h21l-2.5 20h-16L1.5 3zm3.4 2h14.2l-1.1 8.8H5.6L4.9 5zm7.1 11h-3.5l1.1 8.8h3.5l1.1-8.8h-3.2z"/>
        </svg>
      ),
      color: "#E34F26",
      level: 95,
      description: "Linguagem de marcação para estruturação web"
    },
    {
      name: "CSS3",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 0h21l-3.5 20.7c-.1.3-.4.5-.7.5H5.7c-.3 0-.6-.2-.7-.5L1.5 0zM7 18.5c0 .8-.7 1.5-1.5 1.5S4 19.3 4 18.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5zm4 0c0 .8-.7 1.5-1.5 1.5S8 19.3 8 18.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5zm4 0c0 .8-.7 1.5-1.5 1.5S12 19.3 12 18.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5z"/>
        </svg>
      ),
      color: "#1572B6",
      level: 88,
      description: "Estilização e layout para páginas web"
    }
  ],
  backend: [
    {
      name: "Laravel",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.05 0L1.26 6v12L12.05 24l10.79-6V6L12.05 0zm0 2.3l8.74 5.15v8.94L12.05 21.4 3.31 16.4V7.45L12.05 2.3z"/>
        </svg>
      ),
      color: "#FF2D20",
      level: 80,
      description: "Framework PHP para aplicações web"
    },
    {
      name: "PHP",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.95 18.5h-1.9l.5-3h1.4l.5 3zm-2.95-5h3.9l.5 3h-5l.6-3zm3.4-5h2.9l1.3 9h-5.6l1.4-9zm6.35 7.7L16.85 6.3l.9-2.4 2.6 9.3zM5.7 14.2L8.25 5l.9 2.4-3.45 6.8z"/>
        </svg>
      ),
      color: "#777BB4",
      level: 85,
      description: "Linguagem de programação para desenvolvimento web"
    },
    {
      name: "C#",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M10.5 1.5L4 7v10l6.5 5.5 6.5-5.5V7l-6.5-5.5zM11 3.3l4.7 3.9v1.6L11 12V3.3zM7 8.8l4 3.2v8L7 16.8V8.8zm6 6.8V12l4-3.2v4.8l-4 3.2z"/>
        </svg>
      ),
      color: "#68217A",
      level: 75,
      description: "Linguagem de programação da Microsoft"
    }
  ],
  tools: [
    {
      name: "GitHub",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      ),
      color: "#333",
      level: 92,
      description: "Plataforma de versionamento de código"
    },
    {
      name: "Figma",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8.72 3.93c-.3 0-.66.15-.84.33l-2.16 2.16c-.36.36-.36.93 0 1.29l1.2 1.2c.36.36.93.36 1.29 0l2.16-2.16c.18-.18.33-.54.33-.84V2.34c0-.12-.12-.24-.24-.24H6.48c-.6 0-1.08.48-1.08 1.08v1.51zm2.64 0c0 .24.06.39.12.51l.03.06c.03.06.09.12.15.18l1.2 1.2c.24.24.36.51.36.81v.15c0 .3-.12.57-.36.81l-1.2 1.2c-.24.24-.51.36-.81.36H9.24c-.3 0-.57-.12-.81-.36L7.23 8.58c-.24-.24-.36-.51-.36-.81V6.72c0-.3.12-.57.36-.81l1.2-1.2c.24-.24.51-.36.81-.36h2.4c.3 0 .57.12.81.36l1.2 1.2c.24.24.36.51.36.81v.15c0 .3-.12.57-.36.81l-1.2 1.2c-.24.24-.51.36-.81.36H9.6c-.3 0-.57-.12-.81-.36L7.59 7.62c-.24-.24-.36-.51-.36-.81V6.72c0-.3.12-.57.36-.81l1.2-1.2c.24-.24.51-.36.81-.36h1.68v.72h1.68c.24 0 .39.06.51.12l.06.03c.06.03.12.09.18.15L13.2 6.72c.36.36.36.93 0 1.29l-2.16 2.16c-.18.18-.54.33-.84.33h-.24v1.68h.24c.3 0 .66-.15.84-.33l2.16-2.16c.36-.36.36-.93 0-1.29L11.7 6.72V3.93h-.24z"/>
        </svg>
      ),
      color: "#F24E1E",
      level: 82,
      description: "Ferramenta de design de interfaces"
    }
  ],
  database: [
    {
      name: "MySQL",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.016 0C5.394 0 .029 5.375.029 11.998c0 5.078 3.657 9.38 8.655 10.704.6.12.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 11.998C24 5.375 18.626 0 12.016 0z"/>
        </svg>
      ),
      color: "#4479A1",
      level: 85,
      description: "Sistema de gerenciamento de banco de dados"
    }
  ]
};

const categories = {
  frontend: { title: "Front-End", icon: "🎨", description: "Interfaces e experiências visuais" },
  backend: { title: "Back-End", icon: "⚙️", description: "Lógica e infraestrutura de servidor" },
  tools: { title: "Ferramentas", icon: "🛠️", description: "Desenvolvimento e colaboração" },
  database: { title: "Banco de Dados", icon: "🗄️", description: "Armazenamento e organização de dados" }
};

export function SkillsSectionAlternative() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Habilidades
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Um conjunto completo de tecnologias e ferramentas para criar soluções digitais modernas
          </p>
        </motion.div>

        {/* Skills by category */}
        {Object.entries(categories).map(([categoryKey, category]) => {
          const categorySkills = skills[categoryKey as keyof typeof skills];
          
          return (
            <motion.div
              key={categoryKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              {/* Category header */}
              <div className="flex flex-col items-center mb-12">
                <div className="text-6xl mb-4">{category.icon}</div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-400 text-lg">
                  {category.description}
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-4"></div>
              </div>

              {/* Skills grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {categorySkills.map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                    color={skill.color}
                    level={skill.level}
                    description={skill.description}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          );
        })}

        {/* Summary stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Tecnologias", value: Object.values(skills).flat().length },
              { label: "Anos de Experiência", value: "5+" },
              { label: "Projetos Entregues", value: "50+" },
              { label: "Satisfação", value: "98%" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}