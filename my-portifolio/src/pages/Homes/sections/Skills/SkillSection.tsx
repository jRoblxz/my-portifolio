import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Code2, Server, Database, Wrench, Sparkles, Cpu } from "lucide-react";

interface Skill {
  name: string;
  category: "frontend" | "backend" | "database" | "tools";
  level: string;
  iconUrl: string;
  color: string;
}

// Componente interno com proteção contra imagem quebrada (Fallback)
function SkillIcon({
  src,
  alt,
  color,
}: {
  src: string;
  alt: string;
  color: string;
}) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Cpu size={28} style={{ color }} />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      className="w-full h-full object-contain filter drop-shadow transition-transform duration-300"
      loading="lazy"
    />
  );
}

export function SkillsSection() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("all");

  // Links corrigidos usando CDNs estáveis (SimpleIcons e Devicon)
  const skills: Skill[] = [
    // Front-End
    {
      name: "React",
      category: "frontend",
      level: "Avançado",
      color: "#61DAFB",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "TypeScript",
      category: "frontend",
      level: "Intermediário",
      color: "#3178C6",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "Tailwind CSS",
      category: "frontend",
      level: "Avançado",
      color: "#06B6D4",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "HTML5 & CSS3",
      category: "frontend",
      level: "Avançado",
      color: "#E34F26",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },

    // Back-End & IA
    {
      name: "PHP",
      category: "backend",
      level: "Avançado",
      color: "#777BB4",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },
    {
      name: "Laravel",
      category: "backend",
      level: "Avançado",
      color: "#FF2D20",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    },
    {
      name: "Python",
      category: "backend",
      level: "Intermediário",
      color: "#3776AB",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Node.js",
      category: "backend",
      level: "Intermediário",
      color: "#339933",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "OpenCV / YOLO",
      category: "backend",
      level: "IA & Visão",
      color: "#5C3EE8",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
    },
    {
      name: "C# / Unity",
      category: "backend",
      level: "Noções",
      color: "#239120",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    },

    // Banco de Dados & Cloud (URLs 100% confiáveis)
    {
      name: "MySQL",
      category: "database",
      level: "Avançado",
      color: "#4479A1",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "Vercel / Cloud",
      category: "database",
      level: "Deploy",
      color: "#FFFFFF",
      iconUrl: "https://cdn.simpleicons.org/vercel/white",
    },
    {
      name: "Railway / Render",
      category: "database",
      level: "DevOps",
      color: "#FFFFFF",
      iconUrl: "https://cdn.simpleicons.org/railway/white",
    },

    // Ferramentas & Automação (N8N corrigido)
    {
      name: "Git",
      category: "tools",
      level: "Avançado",
      color: "#F05032",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      category: "tools",
      level: "Avançado",
      color: "#FFFFFF",
      iconUrl: "https://cdn.simpleicons.org/github/white",
    },
    {
      name: "Figma",
      category: "tools",
      level: "UI/UX",
      color: "#F24E1E",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      name: "N8N Automação",
      category: "tools",
      level: "Workflows",
      color: "#EA4B71",
      iconUrl: "https://cdn.simpleicons.org/n8n/EA4B71",
    },
  ];

  const categories = [
    { id: "all", label: "Todas", icon: Sparkles },
    { id: "frontend", label: t.skills.frontend || "Front-End", icon: Code2 },
    { id: "backend", label: t.skills.backend || "Back-End & IA", icon: Server },
    {
      id: "database",
      label: t.skills.database || "Cloud & Dados",
      icon: Database,
    },
    { id: "tools", label: t.skills.tools || "Ferramentas", icon: Wrench },
  ];

  const filteredSkills =
    activeTab === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeTab);

  return (
    <section
      id="skills"
      className="py-24 text-[#e4e0d7] relative overflow-hidden"
    >
      {/* Luz de fundo decorativa */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#7C3AED]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl px-6 relative z-10 font-spartan">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            {t.skills.title}
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">
            Um ecossistema de tecnologias modernas focado em entregar
            arquiteturas escaláveis, interfaces dinâmicas e inteligência
            aplicada.
          </p>
        </motion.div>

        {/* Abas de Navegação (Tabs) */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#7C3AED] text-white shadow-lg shadow-[#7C3AED]/30 scale-105"
                    : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10"
                }`}
              >
                <Icon size={16} />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Grade de Skills Ultra-Fluida */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: index * 0.03 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative bg-[#242222] p-5 rounded-2xl border border-white/10 hover:border-[#7C3AED] transition-all duration-300 flex flex-col items-center justify-center text-center overflow-hidden shadow-lg cursor-default"
              >
                {/* Brilho de fundo com a cor da tecnologia */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-300 pointer-events-none"
                  style={{ backgroundColor: skill.color }}
                />

                {/* Ícone da Tecnologia com Fallback */}
                <div className="w-14 h-14 rounded-xl bg-[#1e1c1c] border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-inner p-2.5 relative z-10">
                  <SkillIcon
                    src={skill.iconUrl}
                    alt={skill.name}
                    color={skill.color}
                  />
                </div>

                {/* Nome e Nível */}
                <h4 className="font-bold text-base text-white mb-1 group-hover:text-[#7C3AED] transition-colors relative z-10">
                  {skill.name}
                </h4>
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5 relative z-10">
                  {skill.level}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
