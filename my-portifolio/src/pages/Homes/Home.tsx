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
import { WorkExperience } from './sections/WorksSection/WorkExperience';
import { LinkedInRecommendations } from './sections/LinkedIn/LinkedInRecommendations';
// -----------------------------
export function Home() {
  const [activeSection, setActiveSection] = useState('hero');

 useEffect(() => {
    const handleScroll = () => {
      // 1. Remova 'contact' se não houver <section id="contact"> real na página
      const sections = [
        'hero', 
        'about', 
        'skills', 
        'experience',      // ID deve ser exato
        'recommendations', // ID deve ser exato
        'projects'
      ];
      
      // Ajuste do offset (ponto de gatilho no meio da tela)
      // Usar window.innerHeight / 2 garante que o item ative quando estiver no meio da tela
      const scrollPosition = window.scrollY + (window.innerHeight / 3);

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        
        if (element) {
          const rect = element.getBoundingClientRect();
          // rect.top + window.scrollY nos dá a posição absoluta do elemento na página
          const elementTop = rect.top + window.scrollY;
          const elementHeight = element.offsetHeight;

          if (scrollPosition >= elementTop && scrollPosition < elementTop + elementHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }

      // Lógica de Fim de Página:
      // Se chegou ao fundo, ative o último item da NAV (projects ou contact se existir no menu)
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
          // Se você tiver um item de menu "Contato", mude para 'contact', 
          // caso contrário mantenha o último visível, ex: 'projects'
          // setActiveSection('contact'); 
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
    <div className="dark min-h-screen bg-[#1e1c1c] text-[#e4e0d7] font-spartan">
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />

      <main>
        <HeroSection scrollToSection={scrollToSection} />
        <AboutSection />
        <SkillsSection />
        <WorkExperience />
        <LinkedInRecommendations />
        <ProjectsSection />
      </main>
      
        <BtnTop onClick={() => scrollToSection('hero')}/>
      <Footer />
    </div>
  );
}

export default Home;