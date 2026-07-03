import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Award,
  Code2,
  Cpu,
  CheckCircle2,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="py-24 px-6 text-[#e4e0d7] relative overflow-hidden min-h-screen flex items-center justify-center"
    >
      {/* Luz de fundo abstrata */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#7C3AED]/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Largura aumentada de max-w-5xl para max-w-7xl para um visual panorâmico */}
      <div className="container mx-auto max-w-7xl font-spartan relative z-10">
        {/* Título da Seção */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            {t.about.title}{" "}
            <span className="bg-gradient-to-r from-[#9F7AEA] to-[#7C3AED] bg-clip-text text-transparent">
              {t.about.me}
            </span>
          </h2>
          <div className="w-16 h-1.5 bg-[#7C3AED] mx-auto mt-4 rounded-full shadow-[0_0_12px_#7C3AED]" />
        </motion.div>

        {/* Grade Simétrica 50% / 50% no Desktop */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Biografia (Ocupa 6 Colunas e estica perfeitamente para igualar a direita) */}
          <motion.div
            className="lg:col-span-6 bg-white/[0.03] backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl flex flex-col justify-between text-slate-300 leading-relaxed text-base sm:text-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <p className="first-letter:text-4xl first-letter:font-bold first-letter:text-[#7C3AED] first-letter:mr-1.5">
                {t.about.p1}
              </p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10">
              <p className="text-white font-medium pl-5 border-l-4 border-[#7C3AED] bg-white/[0.02] py-4 rounded-r-2xl text-base sm:text-lg">
                {t.about.p4}
              </p>
            </div>
          </motion.div>

          {/* Coluna Lateral: Destaques Profissionais + Formação (Ocupa 6 Colunas) */}
          <motion.div
            className="lg:col-span-6 flex flex-col justify-between space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Card de Destaques Técnicos */}
            <div className="bg-white/[0.03] backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-xl relative overflow-hidden group hover:border-[#7C3AED]/40 transition-all duration-300 flex-grow">
              <div className="flex items-center gap-3.5 mb-6 pb-5 border-b border-white/10">
                <div className="w-12 h-12 rounded-2xl bg-[#7C3AED]/20 border border-[#7C3AED]/30 flex items-center justify-center text-[#7C3AED]">
                  <Briefcase size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Destaques Técnicos
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400">
                    Ponto de foco operacional
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3.5">
                  <Code2 size={20} className="text-[#7C3AED] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-white mb-1">
                      Full Stack Avançado
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-normal">
                      Domínio ponta a ponta com ecossistemas React, TypeScript,
                      PHP e Laravel.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Award size={20} className="text-[#7C3AED] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-white mb-1">
                      Arquitetura & Clean Code
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-normal">
                      Sistemas projetados para fácil manutenção, escalabilidade
                      e alta performance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Cpu size={20} className="text-[#7C3AED] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-white mb-1">
                      Automação & IA Aplicada
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-normal">
                      Integração com modelos de Visão Computacional (YOLO) e
                      automação de fluxos (N8N).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <CheckCircle2
                    size={20}
                    className="text-[#7C3AED] shrink-0 mt-0.5"
                  />
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-white mb-1">
                      Vivência Institucional
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-normal">
                      Experiência diária em sustentação e criação de sistemas
                      web de uso contínuo.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Formação Acadêmica */}
            <div className="bg-gradient-to-b from-white/[0.05] to-white/[0.02] rounded-3xl p-8 border border-white/10 shadow-xl relative overflow-hidden group hover:border-[#7C3AED]/40 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#7C3AED]/20 border border-[#7C3AED]/30 flex items-center justify-center text-[#7C3AED] shrink-0">
                  <GraduationCap size={28} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {t.about.educationTitle}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-slate-200">
                    Fatec Presidente Prudente
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400">
                    {t.about.educationCourse}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm">
                <span className="text-slate-400">Status do Curso</span>
                <span className="font-semibold text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20">
                  {t.about.educationStatus}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
