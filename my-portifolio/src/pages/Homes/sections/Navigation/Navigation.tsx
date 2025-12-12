import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

export function Navigation({ activeSection, scrollToSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  // CORREÇÃO: Os IDs aqui devem ser IGUAIS aos do App.tsx ('hero', 'about', 'skills', 'projects')
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

  // CORREÇÃO: Em vez de navigate('/'), usamos o scroll para o topo
  const handleHomeClick = () => {
    scrollToSection('hero');
  };

  return (
    <nav className="fixed top-0 w-full bg-[#1e1c1c] shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <span onClick={handleHomeClick} className="cursor-pointer w-auto h-16 flex items-center">
             {/* Certifique-se que essa imagem existe na pasta public */}
              <img src="/logo_branca.png" alt="Spark Lab Code" className="h-full w-auto object-contain" />
            </span>
          </motion.div>

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
                onClick={() => {
                  scrollToSection(item.id);
                  setIsOpen(false);
                }}
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