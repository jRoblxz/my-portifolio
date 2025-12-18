import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
// Seus componentes StyledButton existentes - NENHUM CÓDIGO ALTERADO
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

export function SkillsSectionSimple() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20 px-6 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            {t.skills.title}
          </h2>
        </motion.div>

        {/* Front-End Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <span className="text-2xl">🎨</span>
              {t.skills.frontend}
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 transition-all duration-300 group-hover:border-blue-500/50">
                <StyledReact />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-orange-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 transition-all duration-300 group-hover:border-orange-500/50">
                <StyledHTML />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 transition-all duration-300 group-hover:border-blue-600/50">
                <StyledCSS />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Back-End Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <span className="text-2xl">⚙️</span>
              {t.skills.backend}
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
            {[
              { component: <StyeledPHP />, color: "bg-purple-500/20 border-purple-500/50 hover:border-purple-500" },
              { component: <StyeledLaravel />, color: "bg-red-500/20 border-red-500/50 hover:border-red-500" },
              { component: <StyledCSharp />, color: "bg-purple-700/20 border-purple-700/50 hover:border-purple-700" },
              { component: <StyledPython />, color: "bg-blue-500/20 border-blue-500/50 hover:border-blue-500" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group"
              >
                <div className={`absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${item.color.replace('border-', 'bg-').replace('/50', '/20')}`}></div>
                <div className={`relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 transition-all duration-300 ${item.color}`}>
                  {item.component}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <span className="text-2xl">🛠️</span>
              {t.skills.tools}
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 place-items-center">
            {[
              { component: <StyledGitHub />, color: "bg-gray-600/20 border-gray-600/50 hover:border-gray-600" },
              { component: <StyledGit />, color: "bg-red-500/20 border-red-500/50 hover:border-red-500" },
              { component: <StyledFigma />, color: "bg-orange-500/20 border-orange-500/50 hover:border-orange-500" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group"
              >
                <div className={`absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${item.color.replace('border-', 'bg-').replace('/50', '/20')}`}></div>
                <div className={`relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 transition-all duration-300 ${item.color}`}>
                  {item.component}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Database Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <span className="text-2xl">🗄️</span>
              {t.skills.database}
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mx-auto"></div>
          </div>
          
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 transition-all duration-300 group-hover:border-blue-500/50">
                <StyledMySQL />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-400 text-lg">
            ✨ Sempre aprendendo novas tecnologias e aprimorando habilidades
          </p>
        </motion.div>
      </div>
    </section>
  );
}