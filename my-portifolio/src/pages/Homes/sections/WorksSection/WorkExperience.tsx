import { GlassmorphicCard } from "@/components/ui/GlassmorphicCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function WorkExperience() {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();

  return (
    <section
      id="experience"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 text-[#e4e0d7] overflow-hidden"
    >
      {/* Luz decorativa de fundo */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-[#7C3AED]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl font-spartan relative z-10">
        {/* Cabeçalho da Seção */}
        <div className="mb-16 text-center">
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.6s ease-out",
            }}
          >
            {t.experience.title}
          </h2>
          <div className="w-16 h-1.5 bg-[#7C3AED] mx-auto rounded-full shadow-[0_0_12px_#7C3AED]" />
        </div>

        {/* Linha do Tempo Vertical Contínua */}
        <div className="relative border-l-2 border-white/10 ml-4 md:ml-32 pl-6 md:pl-10 space-y-12">
          {t.experience.list.map((exp, index) => {
            const isLatest = index === 0;
            return (
              <div key={index} className="relative group">
                {/* Indicador Flutuante na Linha do Tempo */}
                <div
                  className={`absolute -left-[31px] md:-left-[49px] top-1.5 w-8 h-8 rounded-full border-4 border-[#1e1c1c] flex items-center justify-center transition-all duration-300 ${
                    isLatest
                      ? "bg-[#7C3AED] text-white shadow-[0_0_15px_#7C3AED]"
                      : "bg-white/10 text-slate-400 group-hover:bg-[#7C3AED] group-hover:text-white"
                  }`}
                >
                  <Briefcase size={14} />
                </div>

                {/* Período flutuante à esquerda em monitores médios/grandes */}
                <div className="hidden md:block absolute -left-[200px] top-2 w-32 text-right font-mono text-sm text-slate-400 font-semibold">
                  {exp.period}
                </div>

                {/* Cartão Glassmorphic com fundo escuro forçado */}
                <GlassmorphicCard delay={index * 100}>
                  <div className="p-6 md:p-8 bg-[#242222] rounded-2xl border border-white/10 shadow-xl group-hover:border-[#7C3AED]/40 transition-all duration-300">
                    {/* Cabeçalho do Cargo */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-white/10 pb-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#7C3AED] transition-colors">
                            {exp.title}
                          </h3>
                          {isLatest && (
                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider bg-[#7C3AED]/20 text-[#7C3AED] border border-[#7C3AED]/30 px-2.5 py-0.5 rounded-full">
                              <CheckCircle2 size={12} /> Atual
                            </span>
                          )}
                        </div>
                        <p className="text-base font-semibold text-slate-300 mt-1">
                          {exp.company}
                        </p>
                      </div>

                      {/* Período visível apenas em telas menores */}
                      <div className="flex md:hidden items-center gap-2 text-xs font-mono text-[#7C3AED] font-semibold bg-[#7C3AED]/10 px-3 py-1 rounded-lg w-fit">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Localização */}
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-4 font-mono">
                      <MapPin size={14} className="text-[#7C3AED]" />
                      <span>{exp.location}</span>
                    </div>

                    {/* Descrição das atividades */}
                    <p className="text-slate-300 leading-relaxed mb-6 text-sm sm:text-base">
                      {exp.description}
                    </p>

                    {/* Tags de Habilidades aplicadas */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-lg text-xs font-medium bg-white/5 text-slate-200 border border-white/10 transition-all duration-200 group-hover:border-[#7C3AED]/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlassmorphicCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
