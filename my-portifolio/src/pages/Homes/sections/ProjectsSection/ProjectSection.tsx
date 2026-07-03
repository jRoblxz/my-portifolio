import { useState } from "react";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function ProjectsSection() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const projects = t.projects.list;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Suporte ao gesto de arrastar (swipe) nativo no celular e PC
  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      nextSlide();
    } else if (info.offset.x > swipeThreshold) {
      prevSlide();
    }
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center py-20 px-4 md:px-8 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Cabeçalho da Seção */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            {t.projects.title}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Explore aplicações reais focadas em performance, arquitetura limpa e
            resolução de problemas complexos. Arraste para os lados para
            navegar.
          </p>
        </motion.div>

        {/* Área do Carrossel Panorâmico */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-[580px] sm:h-[520px] md:h-[480px] w-full bg-[#1e1c1c] rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.7}
                onDragEnd={handleDragEnd}
                className="absolute inset-0 grid md:grid-cols-12 cursor-grab active:cursor-grabbing touch-pan-y"
              >
                {/* Imagem do Projeto (Ocupa 5 colunas no desktop) */}
                <div className="md:col-span-6 h-56 sm:h-64 md:h-full relative overflow-hidden bg-slate-900 pointer-events-none">
                  {projects[currentIndex].image ? (
                    <img
                      src={projects[currentIndex].image}
                      alt={projects[currentIndex].title}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-600 font-mono">
                      [ Preview Indisponível ]
                    </div>
                  )}
                  {/* Overlay gradiente para unificar a imagem ao card no mobile */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e1c1c] via-transparent to-transparent md:hidden" />
                </div>

                {/* Conteúdo Descritivo (Ocupa 6 colunas no desktop) */}
                <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between h-full bg-[#1e1c1c] text-[#e4e0d7] z-10 pointer-events-auto">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-semibold tracking-wider uppercase text-[#7C3AED] bg-[#7C3AED]/10 px-3 py-1 rounded-full border border-[#7C3AED]/20">
                        Projeto 0{currentIndex + 1} / 0{projects.length}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-white leading-tight">
                      {projects[currentIndex].title}
                    </h3>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 select-none line-clamp-4 sm:line-clamp-none">
                      {projects[currentIndex].description}
                    </p>
                  </div>

                  <div>
                    {/* Lista de Tecnologias */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 select-none">
                      {projects[currentIndex].technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-slate-800/80 text-slate-200 rounded-lg border border-slate-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Botões de Ação */}
                    <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-800">
                      <a
                        href={projects[currentIndex].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold transition-all duration-200 border border-slate-700 hover:border-slate-600 shadow-sm"
                      >
                        <Github size={16} /> {t.projects.btnGithub}
                      </a>
                      {projects[currentIndex].siteLink && (
                        <a
                          href={projects[currentIndex].siteLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-sm font-semibold transition-all duration-200 shadow-lg shadow-[#7C3AED]/25"
                        >
                          <ExternalLink size={16} /> {t.projects.btnLink}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Setas Flutuantes Laterais (Visíveis principalmente em Desktop) */}
          <button
            onClick={prevSlide}
            aria-label="Projeto anterior"
            className="absolute -left-5 md:-left-6 top-1/2 -translate-y-1/2 w-11 h-11 hidden sm:flex items-center justify-center rounded-full bg-slate-800/90 hover:bg-[#7C3AED] text-white border border-slate-700 shadow-xl transition-all duration-200 z-20 cursor-pointer hover:scale-105"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Próximo projeto"
            className="absolute -right-5 md:-right-6 top-1/2 -translate-y-1/2 w-11 h-11 hidden sm:flex items-center justify-center rounded-full bg-slate-800/90 hover:bg-[#7C3AED] text-white border border-slate-700 shadow-xl transition-all duration-200 z-20 cursor-pointer hover:scale-105"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Indicadores (Dots) na base e controles para telas menores */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Ir para o projeto ${idx + 1}`}
              className={`transition-all duration-300 rounded-full h-2 cursor-pointer ${
                currentIndex === idx
                  ? "w-8 bg-[#7C3AED]"
                  : "w-2 bg-slate-700 hover:bg-slate-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
