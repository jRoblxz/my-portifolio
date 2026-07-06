import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Cpu,
  TrendingUp,
  GitBranch,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function EngineeringImpact() {
  const { t } = useLanguage();
  const [activeCase, setActiveCase] = useState<number>(0);

  const icons = [ShieldCheck, TrendingUp, GitBranch, Cpu];
  const cases = t.engineering.cases;

  return (
    <section
      id="engineering"
      className="py-24 text-[#e4e0d7] relative overflow-hidden font-spartan"
    >
      {/* Iluminação de fundo abstrata */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7C3AED]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7C3AED]/15 border border-[#7C3AED]/30 text-[#7C3AED] text-xs font-mono uppercase tracking-wider mb-4 font-bold">
            <Zap size={14} className="fill-[#7C3AED]" />
            {t.engineering.badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            {t.engineering.title}{" "}
            <span className="bg-gradient-to-r from-[#9F7AEA] to-[#7C3AED] bg-clip-text text-transparent">
              {t.engineering.titleHighlight}
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {t.engineering.subtitle}
          </p>
          <div className="w-16 h-1.5 bg-[#7C3AED] mx-auto mt-6 rounded-full shadow-[0_0_12px_#7C3AED]" />
        </div>

        {/* Seletores Horizontais no Topo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {cases.map((item, index) => {
            const Icon = icons[index % icons.length];
            const isSelected = activeCase === index;
            return (
              <button
                key={item.id}
                onClick={() => setActiveCase(index)}
                className={`text-left p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between cursor-pointer group ${
                  isSelected
                    ? "bg-[#242222] border-[#7C3AED] shadow-[0_0_25px_rgba(124,58,237,0.25)] scale-[1.02]"
                    : "bg-white/[0.02] border-white/5 hover:bg-white/[0.06] hover:border-white/10"
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected
                        ? "bg-[#7C3AED] text-white shadow-md"
                        : "bg-white/5 text-slate-400 group-hover:text-white"
                    }`}
                  >
                    <Icon size={20} />
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white/5 text-slate-400">
                    #0{index + 1}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#7C3AED] font-semibold block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-sm font-bold text-white leading-snug group-hover:text-[#7C3AED] transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>

        {/* Card Panorâmico */}
        <AnimatePresence mode="wait">
          {cases[activeCase] && (
            <motion.div
              key={activeCase}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-[#242222] p-8 sm:p-10 lg:p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden flex flex-col justify-between gap-8"
            >
              {/* Brilho de topo no card */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent opacity-80" />

              {/* Linha Superior: 5 Colunas (Esquerda) / 7 Colunas (Direita) */}
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
                {/* Coluna Esquerda: Contexto + Problema */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                      {t.engineering.caseStudyLabel} #0{activeCase + 1}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight">
                      {cases[activeCase].title}
                    </h3>
                    <p className="text-sm text-[#7C3AED] font-semibold">
                      {cases[activeCase].subtitle}
                    </p>
                  </div>

                  {/* O Gargalo / Problema */}
                  <div className="bg-[#1e1c1c]/90 p-6 rounded-2xl border border-white/5 flex-grow flex flex-col justify-center">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-rose-400 font-bold flex items-center gap-2 mb-3">
                      <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                      {t.engineering.problemLabel}
                    </h4>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {cases[activeCase].problem}
                    </p>
                  </div>
                </div>

                {/* Coluna Direita: Engenharia & Solução Aplicada (Agora ocupa 100% da altura) */}
                <div className="lg:col-span-7 bg-white/[0.02] p-6 sm:p-8 rounded-2xl border border-white/5 flex flex-col justify-between">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#7C3AED] font-bold mb-6 flex items-center gap-2">
                    <Cpu size={16} />
                    {t.engineering.engineeringLabel}
                  </h4>
                  <ul className="space-y-6 my-auto">
                    {cases[activeCase].engineering.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-4 text-sm sm:text-base text-slate-200"
                      >
                        <div className="w-7 h-7 rounded-lg bg-[#7C3AED]/20 border border-[#7C3AED]/30 flex items-center justify-center text-[#7C3AED] shrink-0 mt-0.5 font-mono text-xs font-bold">
                          {idx + 1}
                        </div>
                        <span className="leading-relaxed pt-0.5">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Linha Inferior: Impacto Final Ocupando 100% da Largura */}
              <div className="bg-gradient-to-r from-[#7C3AED]/25 via-[#7C3AED]/10 to-transparent p-6 sm:p-7 rounded-2xl border-l-4 border-[#7C3AED] w-full">
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-2 mb-2">
                  <CheckCircle2
                    size={16}
                    className="text-emerald-400 shrink-0"
                  />
                  {t.engineering.impactLabel}
                </h4>
                <p className="text-white font-medium text-sm sm:text-base leading-relaxed">
                  {cases[activeCase].impact}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
