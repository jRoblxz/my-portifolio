import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-slate-800 py-8 px-6">
      <div className="container mx-auto text-center text-slate-500">
        <p>© {new Date().getFullYear()} João Pedro Costa Roblez. {t.footer.rights}</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="https://github.com/jRoblxz" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/joaoroblez" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
          <Link to="/contact">
            <span  className="text-slate-400 hover:text-white transition-colors">
              <Mail size={20} />
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}