import { useState, useEffect } from "react";
import { Navigation } from "@/pages/Homes/sections/Navigation/Navigation";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { AboutSection } from "./sections/AboutSection/AboutSection";
import { SkillsSection } from "./sections/Skills/SkillSection";
import { ProjectsSection } from "./sections/ProjectsSection/ProjectSection";
import { Footer } from "./sections/Footer/Footer";
import BtnTop from "@/components/ui/BtnTop";
import "@fontsource/league-spartan/400.css";
import "@fontsource/league-spartan/500.css";
import "@fontsource/league-spartan/700.css";
import { WorkExperience } from "./sections/WorksSection/WorkExperience";
import { LinkedInRecommendations } from "./sections/LinkedIn/LinkedInRecommendations";

export function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "skills",
        "experience",
        "recommendations",
        "projects",
      ];

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);

        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementHeight = element.offsetHeight;

          if (
            scrollPosition >= elementTop &&
            scrollPosition < elementTop + elementHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    /* AQUI ESTÁ A MUDANÇA: bg-tech-grid adicionado no container principal */
    <div className="dark min-h-screen bg-[#1e1c1c] bg-tech-grid text-[#e4e0d7] font-spartan">
      <Navigation
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      <main className="bg-transparent">
        <HeroSection scrollToSection={scrollToSection} />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <WorkExperience />
        <LinkedInRecommendations />
      </main>

      <BtnTop onClick={() => scrollToSection("hero")} />
      <Footer />
    </div>
  );
}

export default Home;
