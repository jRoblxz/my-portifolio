// src/sections/AboutSection.tsx
import { motion } from 'framer-motion';

export function AboutSection() {
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
            Sobre <span className="bg-[#e4e0d7] bg-clip-text text-transparent">Mim</span>
          </h2>
          <div className="bg-[#e4e0d7] backdrop-blur-sm rounded-2xl p-8 border border-slate-800">
            {/* ... (Todo o seu conteúdo da seção Sobre Mim) ... */}
            <p className="text-lg text-[#1e1c1c] leading-relaxed mb-6">
              Sou João Pedro Costa Roblez, estudante de <strong>Análise e Desenvolvimento de Sistemas</strong>, atualmente no último termo da graduação, com conclusão prevista para meados de 2026.
            </p>
            <p className="text-lg text-[#1e1c1c] leading-relaxed mb-6">
              Atuo profissionalmente como <strong>Auxiliar de Desenvolvimento de Sistemas</strong> na <strong>Unoeste</strong>, no departamento de Design Instrucional, responsável pela gestão e desenvolvimento de soluções para laboratórios exclusivos da instituição, como a Sala Betha e a Arena Lab.
            </p>
           <p className="text-lg text-[#1e1c1c] leading-relaxed mb-6">
              Tenho experiência no desenvolvimento de sistemas utilizando <strong>React, PHP e Laravel</strong>, além de conhecimentos iniciais em Unity. Possuo forte interesse em criar soluções tecnológicas que unam eficiência, inovação e qualidade, sempre com atenção às boas práticas de engenharia de software, organização do código e usabilidade.
            </p>
            <p className="text-lg text-[#1e1c1c] leading-relaxed">
              Busco constantemente aprimorar meus conhecimentos e contribuir para projetos que gerem impacto real, agregando valor por meio da tecnologia.
            </p>
            <div className="mt-8 pt-8 border-t border-[#1e1c1c]">
                <h3 className="text-xl font-bold mb-4 text-[#1e1c1c]">Formação</h3>
                <p className="text-[#1e1c1c]">
                    <strong>Fatec Presidente Prudente</strong>
                    <br />
                    Análise e Desenvolvimento de Sistemas
                    <br />
                    <span className="text-[#1e1c1c] font-light">Conclusão prevista: Meio de 2026</span>
                </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}