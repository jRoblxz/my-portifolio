import { GlassmorphicCard } from "@/components/ui/GlassmorphicCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star, Quote, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import imgVictor from "@/assets/images/victor.png";

export function LinkedInRecommendations() {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();

  const images = [imgVictor];

  return (
    <section
      id="recommendations"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 text-[#e4e0d7] overflow-hidden"
    >
      {/* Brilho decorativo sutil */}
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#7C3AED]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl font-spartan relative z-10">
        {/* Cabeçalho */}
        <div className="mb-16 text-center">
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.6s ease-out",
            }}
          >
            {t.recommendations.title}
          </h2>
          <div className="w-16 h-1.5 bg-[#7C3AED] mx-auto rounded-full shadow-[0_0_12px_#7C3AED]" />
        </div>

        {/* Grid de Recomendações */}
        <div className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto">
          {t.recommendations.list.map((rec, index) => (
            <GlassmorphicCard key={index} delay={index * 100}>
              <div className="p-8 md:p-10 bg-[#242222] rounded-2xl border border-white/10 shadow-xl relative overflow-hidden group hover:border-[#7C3AED]/40 transition-all duration-300">
                {/* Ícone de aspas gigantes como marca d'água no fundo */}
                <Quote
                  size={140}
                  className="absolute -right-6 -bottom-6 text-white/[0.03] -rotate-12 pointer-events-none group-hover:text-[#7C3AED]/[0.06] transition-colors duration-500"
                />

                {/* Perfil do Recomendador */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10 relative z-10">
                  <div className="flex items-center gap-4">
                    <img
                      src={images[index]}
                      alt={rec.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-[#7C3AED] shadow-md"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#7C3AED] transition-colors">
                          {rec.name}
                        </h3>
                        <span className="text-xs bg-[#0A66C2]/20 text-[#0A66C2] border border-[#0A66C2]/30 px-2 py-0.5 rounded font-mono font-semibold">
                          Verified
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                        {rec.title}
                      </p>
                    </div>
                  </div>

                  {/* Avaliação de 5 Estrelas */}
                  <div className="flex items-center gap-1 bg-white/5 px-3 py-1.5 rounded-xl border border-white/5 w-fit">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-[#7C3AED] text-[#7C3AED]"
                      />
                    ))}
                  </div>
                </div>

                {/* Texto da Recomendação */}
                <p className="text-slate-300 leading-relaxed text-base sm:text-lg italic mb-8 relative z-10">
                  "{rec.text}"
                </p>

                {/* Botão de Verificação LinkedIn */}
                <div className="relative z-10">
                  <a
                    href="https://www.linkedin.com/in/joaoroblez/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-[#0A66C2] hover:bg-[#084e96] text-white text-sm font-semibold transition-all duration-200 shadow-lg shadow-[#0A66C2]/20 cursor-pointer"
                  >
                    <Linkedin size={18} />
                    <span>
                      {t.recommendations.btnLinkedin || "Conferir no LinkedIn"}
                    </span>
                  </a>
                </div>
              </div>
            </GlassmorphicCard>
          ))}
        </div>
      </div>
    </section>
  );
}
