import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-15 px-6">
      <div className="container mx-auto max-w-5xl ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            {t.projects.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {t.projects.list.map((project, index) => (
              <motion.div
                key={index}
                className="bg-[#e4e0d7] backdrop-blur-sm rounded-2xl p-6 border border-slate-800 shadow-xl hover:shadow-[#7C3AED]  transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-3 text-[#1e1c1c]">{project.title}</h3>
                <p className="text-[#1e1c1c] mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs font-medium bg-[#1e1c1c] text-[#e4e0d7] rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#1e1c1c] hover:text-[#7C3AED]  transition-colors font-medium">
                  {t.projects.btnGithub} <ExternalLink size={16} className="ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}