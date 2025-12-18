import { motion } from "framer-motion";
import { useLanguage } from '@/contexts/LanguageContext';
// ... Mantenha seus imports de StyledButtons aqui ...
import StyeledPHP from "@/components/StyledButton/StyledPHP";
import StyeledLaravel from "@/components/StyledButton/StyledLavarel";
import StyledPython from "@/components/StyledButton/StyledPython";
import StyledReact from "@/components/StyledButton/StyledReact";
import StyledCSharp from "@/components/StyledButton/StyledCSharp";
import StyledGitHub from "@/components/StyledButton/StyledGitHub";
import StyledGit from "@/components/StyledButton/StyledGit";
import StyledFigma from "@/components/StyledButton/StyledFigma";
import StyledHTML from "@/components/StyledButton/StyledHTML";
import StyledCSS from "@/components/StyledButton/StyledCSS";
import StyledMySQL from "@/components/StyledButton/StyledMySQL";

export function SkillsSection() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-15 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            {t.skills.title}
          </h2>
          <div className="">
            <h3 className="text-4xl md:text-5xl font-bold mb-12 text-start">
              {t.skills.frontend}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 ">
              <StyledReact />
              <StyledHTML />
              <StyledCSS />
            </div>
            
            <h3 className="text-4xl md:text-5xl font-bold mb-12 mt-6 text-start">
              {t.skills.backend}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 ">
              <StyeledPHP />
              <StyeledLaravel />
              <StyledCSharp />
              <StyledPython />
            </div>

            <h3 className="text-4xl md:text-5xl font-bold mb-12 mt-6 text-start">
              {t.skills.tools}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 ">
              <StyledGitHub />
              <StyledGit />
              <StyledFigma />
            </div>

            <h3 className="text-4xl md:text-5xl font-bold mb-12 mt-6 text-start">
              {t.skills.database}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 ">
              <StyledMySQL />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}