// src/App.tsx
import { useState, useEffect } from 'react';

// Importe os novos componentes de seção
import { Navigation } from '@/pages/Homes/sections/Navigation/Navigation';
import { HeroSection } from './sections/HeroSection/HeroSection';
import { AboutSection } from './sections/AboutSection/AboutSection';
import { SkillsSection } from './sections/Skills/SkillSection';
import { ProjectsSection } from './sections/ProjectsSection/ProjectSection';
import { Footer } from './sections/Footer/Footer';
import BtnTop from '@/components/ui/BtnTop'
// --- ADICIONE ESTAS LINHAS ---
// Importa o peso padrão (400)
import '@fontsource/league-spartan/400.css';
// Importa pesos adicionais que você pretende usar (ex: 500, 700)
import '@fontsource/league-spartan/500.css';
import '@fontsource/league-spartan/700.css';
// -----------------------------
export function Home() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#1e1c1c] text-[#e4e0d7] font-spartan">
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />

      <main>
        <HeroSection scrollToSection={scrollToSection} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
      </main>
      
        <BtnTop onClick={() => scrollToSection('hero')}/>
      <Footer />
    </div>
  );
}

export default Home;