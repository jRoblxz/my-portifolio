import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-15 px-6">
      <div className="container mx-auto max-w-5xl">
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
                className="bg-[#e4e0d7] overflow-hidden rounded-2xl border border-slate-800 shadow-xl hover:shadow-[#7C3AED] transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                // Efeito de "apertar" o card ao tocar no celular
                whileTap={{ scale: 0.98 }} 
                // No desktop, você pode manter um leve brilho/sombra
                whileHover={{ borderColor: '#7C3AED' }}
              >
                {/* Container da Imagem */}
                <div className="w-full h-48 overflow-hidden border-b border-slate-800">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-110"
                  />
                </div>

                {/* Conteúdo do Card */}
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-[#1e1c1c]">{project.title}</h3>
                  <p className="text-[#1e1c1c] mb-4 text-sm md:text-base">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs font-medium bg-[#1e1c1c] text-[#e4e0d7] rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-5 mt-auto">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#1e1c1c] hover:text-[#7C3AED] transition-colors font-medium">
                      {t.projects.btnGithub} <ExternalLink size={16} className="ml-1" />
                    </a>
                    <a href={project.siteLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#1e1c1c] hover:text-[#7C3AED] transition-colors font-medium">
                      {t.projects.btnLink} <ExternalLink size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}