import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
// Seus componentes StyledButton existentes
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

export function SkillsSectionImproved() {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t.skills.frontend || "Front-End",
      icon: "🎨",
      color: "#3B82F6",
      skills: [
        { component: <StyledReact />, name: "React" },
        { component: <StyledHTML />, name: "HTML5" },
        { component: <StyledCSS />, name: "CSS3" }
      ]
    },
    {
      title: t.skills.backend || "Back-End",
      icon: "⚙️",
      color: "#10B981",
      skills: [
        { component: <StyeledPHP />, name: "PHP" },
        { component: <StyeledLaravel />, name: "Laravel" },
        { component: <StyledCSharp />, name: "C#" },
        { component: <StyledPython />, name: "Python" }
      ]
    },
    {
      title: t.skills.tools || "Ferramentas",
      icon: "🛠️",
      color: "#F59E0B",
      skills: [
        { component: <StyledGitHub />, name: "GitHub" },
        { component: <StyledGit />, name: "Git" },
        { component: <StyledFigma />, name: "Figma" }
      ]
    },
    {
      title: t.skills.database || "Banco de Dados",
      icon: "🗄️",
      color: "#EF4444",
      skills: [
        { component: <StyledMySQL />, name: "MySQL" }
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20 px-6 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.15)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,119,198,0.15)_0%,transparent_50%)]"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            {t.skills.title}
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Um conjunto completo de tecnologias para desenvolvimento web moderno
          </p>
        </motion.div>

        {/* Skills by Category */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="category-section"
              style={{ '--category-color': category.color } as React.CSSProperties}
            >
              {/* Category Header */}
              <div className="text-center mb-12">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="text-4xl mb-4 inline-block"
                >
                  {category.icon}
                </motion.div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {category.title}
                </h3>
                
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "80px" }}
                  transition={{ duration: 1, delay: 0.5 + categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="h-1 rounded-full mx-auto"
                  style={{ backgroundColor: category.color }}
                ></motion.div>
              </div>

              {/* Skills Grid */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 + categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center"
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.1 
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      y: -8,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                    className="skill-item relative group"
                  >
                    {/* Glow Effect */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl blur-xl"
                      style={{
                        background: `radial-gradient(circle at center, ${category.color}30 0%, transparent 70%)`
                      }}
                    ></div>

                    {/* Card Container */}
                    <div className="relative bg-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8 transition-all duration-500 group-hover:border-gray-600/50 group-hover:bg-gray-800/40">
                      {/* Your existing card component */}
                      <div className="transform transition-all duration-500 group-hover:scale-105">
                        {skill.component}
                      </div>

                      {/* Skill Name */}
                      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div 
                          className="px-3 py-1 rounded-full text-xs font-semibold text-white shadow-lg whitespace-nowrap"
                          style={{ backgroundColor: category.color }}
                        >
                          {skill.name}
                        </div>
                      </div>
                    </div>

                    {/* Decorative corner */}
                    <div 
                      className="absolute -top-2 -right-2 w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-full"
                      style={{ backgroundColor: category.color }}
                    ></div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Decorative Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          {/* Divider */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent w-24"></div>
            <div className="mx-6 text-2xl">✨</div>
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent w-24"></div>
          </div>

          <p className="text-gray-400 text-lg">
            Continuamente aprendendo e explorando novas tecnologias
          </p>
        </motion.div>
      </div>

      {/* Floating Particles */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full opacity-30 animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-20 w-1 h-1 bg-pink-400 rounded-full opacity-50 animate-pulse delay-2000"></div>
      <div className="absolute bottom-20 right-10 w-2 h-2 bg-yellow-400 rounded-full opacity-40 animate-pulse delay-3000"></div>
    </section>
  );
}