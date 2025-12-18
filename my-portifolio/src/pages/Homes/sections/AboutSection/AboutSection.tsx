import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="container mx-auto max-w-4xl font-spartan">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center font-spartan">
            {t.about.title} <span className="bg-[#e4e0d7] bg-clip-text text-transparent">{t.about.me}</span>
          </h2>
          <div className="bg-[#e4e0d7] backdrop-blur-sm rounded-2xl p-8 border border-slate-800">
            {/* Texto vindo das traduções */}
            <p className="text-lg text-[#1e1c1c] leading-relaxed mb-6">
              {t.about.p1}
            </p>
            <p className="text-lg text-[#1e1c1c] leading-relaxed mb-6">
              {t.about.p2}
            </p>
           <p className="text-lg text-[#1e1c1c] leading-relaxed mb-6">
              {t.about.p3}
            </p>
            <p className="text-lg text-[#1e1c1c] leading-relaxed">
              {t.about.p4}
            </p>
            <div className="mt-8 pt-8 border-t border-[#1e1c1c]">
                <h3 className="text-xl font-bold mb-4 text-[#1e1c1c]">{t.about.educationTitle}</h3>
                <p className="text-[#1e1c1c]">
                    <strong>Fatec Presidente Prudente</strong>
                    <br />
                    {t.about.educationCourse}
                    <br />
                    <span className="text-[#1e1c1c] font-light">{t.about.educationStatus}</span>
                </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}