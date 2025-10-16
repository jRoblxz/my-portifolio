import AboutSection from "./pages/Homes/sections/AboutSection/AboutSection"
import HeroSection from "./pages/Homes/sections/HeroSection/HeroSection"
import Navbar from "./components/Navbar/NavBar"
import ProjectsSection from "./pages/Homes/sections/ProjectsSection/ProjectsSection"
import Footer from "./components/Footer/Footer"

const App: React.FC = () => {

  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <Footer />
    </>
  )
}

export default App
