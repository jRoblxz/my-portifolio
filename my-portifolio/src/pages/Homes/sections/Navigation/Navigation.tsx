import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

export function Navigation({ activeSection, scrollToSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Início', id: 'hero' },
    { label: 'Sobre', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projetos', id: 'projects' },
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

  // Função auxiliar para lidar com o clique no mobile
  const handleMobileClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault(); // Previne comportamentos estranhos do navegador
    scrollToSection(id);
    
    // Pequeno delay para fechar o menu. Isso permite que o scroll inicie
    // antes que o menu colapse, evitando bugs visuais.
    setTimeout(() => {
      setIsOpen(false);
    }, 150); 
  };

  return (
    <nav className="fixed top-0 w-full bg-[#1e1c1c] shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CORREÇÃO: 'items-e' corrigido para 'items-center' */}
        <div className="flex justify-end items-center h-16">
          
          {/* Desktop Navigation */}
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
                  ${activeSection === item.id ? 'text-[#7c3aed]' : 'text-[#e4e0d7] hover:text-[#7c3aed]'}
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
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#e4e0d7]"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-[#1e1c1c]"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isOpen ? 'visible' : 'hidden'}
            className="flex flex-col space-y-4 py-4 px-4"
          >
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                variants={itemVariants}
                // AQUI ESTÁ A CORREÇÃO PRINCIPAL:
                onClick={(e) => handleMobileClick(e, item.id)}
                className={`text-left font-medium transition-colors duration-300 
                  ${activeSection === item.id ? 'text-[#7c3aed]' : 'text-[#e4e0d7]'}
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