// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '@/pages/Homes/Home.tsx';
import Contact from '@/pages/CTA/CTASection.tsx'; // Ajuste o caminho se necessário
import ScrollToTop from './components/ScrolltoTop.tsx'; // Vamos criar esse helper abaixo

// Import fonts
import '@fontsource/league-spartan/400.css';
import '@fontsource/league-spartan/500.css';
import '@fontsource/league-spartan/700.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      {/* Esse componente garante que ao mudar de página, o scroll volte pro topo */}
      <ScrollToTop /> 
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;