// src/sections/Footer.tsx
import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8 px-6">
      <div className="container mx-auto text-center text-slate-500">
        <p>© {new Date().getFullYear()} João Pedro Costa Roblez. Todos os direitos reservados.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="https://github.com/jRoblxz" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/joaoroblez" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
          <Link to="/contact">
            <a  className="text-slate-400 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </Link>
          
        </div>
      </div>
    </footer>
  );
}