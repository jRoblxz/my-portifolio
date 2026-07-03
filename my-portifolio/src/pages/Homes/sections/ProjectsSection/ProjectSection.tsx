import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Sparkles,
  Layers,
  Cpu,
  Layout,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function ProjectsSection() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const projects = t.projects.list;

  // Lógica inteligente para classificar os projetos dinamicamente sem alterar o locales.ts
  const getProjectCategory = (techs: string[]) => {
    const techString = techs.join(" ").toLowerCase();
    if (
      techString.includes("python") ||
      techString.includes("ia") ||
      techString.includes("yolo") ||
      techString.includes("opencv")
    ) {
      return "ai";
    }
    if (
      techString.includes("laravel") ||
      techString.includes("php") ||
      techString.includes("node") ||
      techString.includes("rest api")
    ) {
      return "fullstack";
    }
    return "frontend";
  };

  const filters = [
    { id: "all", label: "Todos os Projetos", icon: Sparkles },
    { id: "fullstack", label: "Full Stack & ERPs", icon: Layers },
    { id: "ai", label: "IA & Visão Computacional", icon: Cpu },
    { id: "frontend", label: "Front-End & UI/UX", icon: Layout },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter(
          (project) =>
            getProjectCategory(project.technologies) === activeFilter,
        );

  return (
    <section
      id="projects"
      className="py-24 text-[#e4e0d7] relative overflow-hidden"
    >
      {/* Luz ambiente abstrata */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#7C3AED]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#7C3AED]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-6 relative z-10 font-spartan">
        {/* Cabeçalho da Seção */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">
            {t.projects.title}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Arquiteturas reais desenvolvidas para resolver problemas complexos
            de negócios, automação e análise de dados. Filtre pelas
            especialidades abaixo.
          </p>
          <div className="w-16 h-1.5 bg-[#7C3AED] mx-auto mt-5 rounded-full shadow-[0_0_12px_#7C3AED]" />
        </motion.div>

        {/* Abas de Filtro (Tabs) */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-14">
          {filters.map((filter) => {
            const Icon = filter.icon;
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#7C3AED] text-white shadow-lg shadow-[#7C3AED]/30 scale-105"
                    : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10"
                }`}
              >
                <Icon size={16} />
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Grid de Projetos Moderno (2 Colunas em Desktop) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-8 items-stretch"
          >
            {filteredProjects.map((project, index) => {
              const isFeatured = index === 0 && activeFilter === "all"; // Destaca o primeiro projeto no modo "Todos"

              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                  className={`group relative bg-[#242222] rounded-3xl border border-white/10 hover:border-[#7C3AED]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl ${
                    isFeatured
                      ? "md:col-span-2 md:grid md:grid-cols-12 gap-6"
                      : ""
                  }`}
                >
                  {/* Container da Imagem com Zoom no Hover */}
                  <div
                    className={`relative overflow-hidden bg-slate-900 ${
                      isFeatured
                        ? "md:col-span-6 h-64 sm:h-80 md:h-full"
                        : "h-60 sm:h-64 w-full"
                    }`}
                  >
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-600 font-mono text-sm">
                        [ Preview Indisponível ]
                      </div>
                    )}

                    {/* Degradê sutil sobre a imagem */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#242222] via-transparent to-transparent opacity-80 md:opacity-40" />

                    {/* Badge flutuante sobre a foto */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 text-xs font-mono uppercase tracking-wider font-bold bg-[#1e1c1c]/90 text-[#7C3AED] rounded-lg border border-white/10 backdrop-blur-md shadow-md">
                        {getProjectCategory(project.technologies) === "ai"
                          ? "IA & Visão"
                          : getProjectCategory(project.technologies) ===
                              "fullstack"
                            ? "Full Stack / ERP"
                            : "Front-End App"}
                      </span>
                    </div>
                  </div>

                  {/* Conteúdo Descritivo do Card */}
                  <div
                    className={`p-6 sm:p-8 flex flex-col justify-between flex-grow ${
                      isFeatured ? "md:col-span-6 md:py-8 md:pr-8 md:pl-2" : ""
                    }`}
                  >
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#7C3AED] transition-colors leading-snug">
                        {project.title}
                      </h3>

                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      {/* Lista de Tecnologias */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium bg-white/5 text-slate-300 rounded-lg border border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Botões de Ação */}
                      <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#1e1c1c] hover:bg-white/10 text-white text-sm font-semibold transition-all duration-200 border border-white/10 shadow-sm"
                        >
                          <Github size={16} />
                          <span>{t.projects.btnGithub}</span>
                        </a>

                        {project.siteLink && (
                          <a
                            href={project.siteLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-sm font-semibold transition-all duration-200 shadow-lg shadow-[#7C3AED]/25"
                          >
                            <span>{t.projects.btnLink}</span>
                            <ExternalLink size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
