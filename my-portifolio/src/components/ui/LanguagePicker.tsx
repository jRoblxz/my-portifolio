import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react'; // Certifique-se de ter lucide-react instalado

export function LanguagePicker() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fecha o dropdown se clicar fora dele
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const languages = [
    { code: 'pt', label: 'Português', flag: '🇧🇷' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
  ] as const;

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Botão Principal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          flex items-center gap-2 px-3 py-2 rounded-full
          text-[#e4e0d7]/80 hover:text-primary hover:bg-white/10
          transition-all duration-300 hover:cursor-pointer
        "
        aria-label="Select Language"
      >
        <Globe size={20} />
        <span className="uppercase text-sm font-bold tracking-wide">
          {language}
        </span>
      </button>

      {/* Dropdown Menu Glassmorphism */}
      {isOpen && (
        <div className="
          absolute right-0 mt-2 w-40 overflow-hidden
          rounded-xl border border-white/10
          bg-[#1e1c1c]/90 backdrop-blur-xl shadow-xl
          animate-fade-in z-50
        ">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`
                  w-full text-left px-4 py-3 text-sm flex items-center gap-3
                  transition-colors duration-200
                  ${language === lang.code 
                    ? 'bg-primary/20 text-primary font-bold' 
                    : 'text-gray-300 hover:bg-white/5 hover:text-white hover:cursor-pointer' }
                `}
              >
                <span className="text-lg">{lang.flag}</span>
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}