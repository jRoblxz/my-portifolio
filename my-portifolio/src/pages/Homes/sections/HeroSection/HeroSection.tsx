// src/sections/HeroSection.tsx
import { motion } from "framer-motion";
import { Mail, Check, Linkedin, Instagram, Github } from "lucide-react"; // Importando Check e Mail
import { Button } from "@/components/ui/button";
import Typewriter from "@/components/Typewriter/Typewriter";
import avatarImg from "@/assets/Images/joao.png";
import { useState } from "react";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export function HeroSection({ scrollToSection }: HeroSectionProps) {
  const [copied, setCopied] = useState(false);
  const email = "joaoroblez@sparklab.dev.br";

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);

    // Volta ao estado normal após 2 segundosaad
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 px-6"
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Coluna da Esquerda: Textos */}
          <motion.div
            className="md:pl-12 lg:pl-24 xl:pl-32"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-4 font-spartan"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              João Pedro
              <br />
              <span className="bg-[#7C3AED] bg-clip-text text-transparent">
                Costa Roblez
              </span>
            </motion.h1>

            <motion.p
              className="text-2xl md:text-3xl text-[#e4e0d7] font-light mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Typewriter text="Software Developer" delay={120} />
            </motion.p>

            <motion.p
              className="text-lg text-[#e4e0d7] mb-8 max-w-xl font-chocolates"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Estudante de Análise e Desenvolvimento de Sistemas na Fatec,
              apaixonado por criar soluções tecnológicas inovadoras.
            </motion.p>

            {/* Botões de Ação */}
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Link to="/contact">
                <Button
                  className="
                  relative overflow-hidden rounded-[0.5em] border-none 
                  bg-gradient-to-r from-[#8e2de2] to-[#4a00e0] 
                  font-medium text-[#1e1c1c] tracking-wider 
                  cursor-pointer
                  transition-transform duration-150 ease-in-out active:scale-95
                  before:content-[''] before:absolute before:top-0 before:left-[-10%] 
                  before:w-[120%] before:h-full before:bg-[#e4e0d7] hover:text-[#e4e0d7] before:skew-x-[30deg] 
                  before:z-0 before:transition-transform before:duration-400 
                  before:ease-[cubic-bezier(0.3,1,0.8,1)]
                  hover:before:translate-x-full
                  w-33 h-10 justify-center font-spartan
                "
                  onClick={() => scrollToSection("projects")}
                >
                  <span className="relative z-10 inline-flex items-center transition-colors duration-400">
                    Contato
                  </span>
                </Button>
              </Link>

              <Button
                className="
                  relative overflow-hidden rounded-[0.5em] border-none 
                  bg-gradient-to-r from-[#8e2de2] to-[#4a00e0] 
                  font-medium text-[#1e1c1c] tracking-wider 
                  cursor-pointer
                  transition-transform duration-150 ease-in-out active:scale-95
                  before:content-[''] before:absolute before:top-0 before:left-[-10%] 
                  before:w-[120%] before:h-full before:bg-[#e4e0d7] hover:text-[#e4e0d7] before:skew-x-[30deg] 
                  before:z-0 before:transition-transform before:duration-400 
                  before:ease-[cubic-bezier(0.3,1,0.8,1)]
                  hover:before:translate-x-full
                  w-33 h-10 justify-center
                  font-spartan
                "
                onClick={() => scrollToSection("about")}
              >
                <span className="relative z-10 inline-flex items-center transition-colors duration-400 font-spartan">
                  Sobre mim
                </span>
              </Button>
            </motion.div>

            {/* Ícones Sociais */}
            <motion.div
              className="flex gap-4 mt-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {/* GitHub Button */}
              <a
                href="https://github.com/jRoblxz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg bg-[#131212] transition-colors"
              >
                <span className="absolute bottom-0 left-0 h-0 w-full bg-[#24262a] transition-all duration-300 ease-in-out group-hover:h-full"></span>
                <Github className="relative z-10 h-6 w-6 text-slate-400 transition-colors group-hover:text-white" size={20} />
              </a>

              {/* Email Button (Lógica de Copiar) */}
              <button
                onClick={handleCopyEmail}
                title={copied ? "E-mail copiado!" : "Copiar e-mail"}
                className="cursor-pointer group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg bg-[#131212] transition-colors border-none"
              >
                {/* Lógica do Fundo:
                  Se copied === true: Fundo verde e cheio (h-full).
                  Se copied === false: Fundo vermelho e vazio (h-0), enche no hover (group-hover:h-full).
                */}
                <span
                  className={`absolute bottom-0 left-0 w-full transition-all duration-300 ease-in-out 
                    ${
                      copied
                        ? "bg-green-600 h-full"
                        : "bg-[#d00909] h-0 group-hover:h-full"
                    }
                  `}
                ></span>

                <div className="relative z-10">
                  {copied ? (
                    <Check size={24} className="text-white animate-bounce" />
                  ) : (
                    <Mail
                      size={24}
                      className="text-slate-400 transition-colors group-hover:text-white"
                    />
                  )}
                </div>
              </button>

              {/* GitHub LinkedIn */}
              <a
                href="https://linkedin.com/in/joaoroblez"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkediIn"
                className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg bg-[#131212] transition-colors"
              >
                <span className="absolute bottom-0 left-0 h-0 w-full bg-[#0A66C2] transition-all duration-300 ease-in-out group-hover:h-full"></span>
                
                <Linkedin className="relative z-10 h-6 w-6 text-slate-400 transition-colors group-hover:text-white" size={20} />
              </a>

              {/* GitHub Instagram */}
              <a
                href="https://www.instagram.com/joaoroblxz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg bg-[#131212] transition-colors"
              >
                <span className="absolute bottom-0 left-0 h-0 w-full bg-[linear-gradient(45deg,#405de6,#5b51db,#b33ab4,#c135b4,#e1306c,#fd1f1f)] transition-all duration-300 ease-in-out group-hover:h-full"></span>
                <Instagram className="relative z-10 h-6 w-6 text-slate-400 transition-colors group-hover:text-white" size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Coluna da Direita: Imagem/Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-[#7C3AED] rounded-full blur-3xl opacity-30"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <img
                src={avatarImg}
                alt="João Pedro Costa Roblez"
                className="relative w-64 h-64 md:w-96 md:h-96 rounded-full object-cover border-4 border-black shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
