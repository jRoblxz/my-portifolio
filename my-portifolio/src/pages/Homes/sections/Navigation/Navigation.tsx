import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
// 1. Importe o componente que criamos
import { LanguagePicker } from "@/components/ui/LanguagePicker";
import { useLanguage } from "@/contexts/LanguageContext";
interface NavigationProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

export function Navigation({
  activeSection,
  scrollToSection,
}: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage(); // Pegue o objeto de traduções

  // Seus itens de menu...
  // DICA: Mova os labels para usar o hook de tradução depois,
  // mas por enquanto vamos manter assim para não quebrar.
  const navItems = [
    { label: t.nav.home, id: "hero" },
    { label: t.nav.about, id: "about" },
    { label: t.nav.skills, id: "skills" },
    { label: t.nav.experience, id: "experience" },
    { label: t.nav.recommendations, id: "recommendations" },
    { label: t.nav.projects, id: "projects" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const handleMobileClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    scrollToSection(id);
    setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  return (
    <nav className="fixed top-0 w-full bg-[#1e1c1c]/90 backdrop-blur-md shadow-lg z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center h-16">
          {/* ======================================= */}
          {/* 2. ÁREA DESKTOP (Links + Language)      */}
          {/* ======================================= */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hidden md:flex items-center space-x-8"
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors duration-300 relative group cursor-pointer bg-transparent border-none
                  ${
                    activeSection === item.id
                      ? "text-[#7c3aed]"
                      : "text-[#e4e0d7] hover:text-[#7c3aed]"
                  }
                `}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.span
                    layoutId="underline"
                    className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-[#7c3aed]"
                  />
                )}
              </button>
            ))}

            {/* Divisória e Seletor de Idioma no Desktop */}
            <div className="flex items-center pl-6 border-l border-white/10 ml-2">
              <LanguagePicker />
            </div>
          </motion.div>

          {/* ======================================= */}
          {/* 3. ÁREA MOBILE (Language + Menu Btn)    */}
          {/* ======================================= */}
          <div className="md:hidden flex items-center gap-4">
            {/* Colocamos o seletor AQUI, fora do menu retrátil */}
            <LanguagePicker />

            {/* Botão do Menu Hambúrguer */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#e4e0d7] p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Menu Retrátil Mobile */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-[#1e1c1c]"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            className="flex flex-col space-y-4 py-4 px-4 border-t border-white/10"
          >
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                variants={itemVariants}
                onClick={(e) => handleMobileClick(e, item.id)}
                className={`text-left font-medium transition-colors duration-300 py-2
                  ${
                    activeSection === item.id
                      ? "text-[#7c3aed]"
                      : "text-[#e4e0d7]"
                  }
                `}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </nav>
  );
}
