// src/sections/Navigation.tsx
import { motion } from 'framer-motion';

interface NavigationProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const navItems = ['hero', 'about', 'skills', 'projects'];

export function Navigation({ activeSection, scrollToSection }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            JPC
          </motion.div>
          <div className="hidden md:flex gap-8">
            {navItems.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-colors ${
                  activeSection === section
                    ? 'text-blue-400'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {section === 'hero' ? 'Home' : section}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}