import { GlassmorphicCard } from '@/components/ui/GlassmorphicCard';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function WorkExperience() {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();

  // Função auxiliar para cores (mantive fixa, mas pode vir do JSON se quiser)
  const getExpColor = (index: number) => {
    return index % 2 === 0 ? '#7C3AED' : '#7C3AED';
  };

  return (
    <section id="experience" ref={ref as React.RefObject<HTMLElement>} className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section title */}
        <div className="mb-16 md:mb-24">
          <h2
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#e4e0d7] mb-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.6s ease-out',
            }}
          >
            {t.experience.title}
          </h2>
          <div
            className="w-20 h-1 bg-gradient-to-r from-[#7C3AED] to-[#] rounded-full"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
              transformOrigin: 'left',
              transition: 'all 0.6s ease-out 0.2s',
            }}
          />
        </div>

        {/* Timeline */}
        <div className="relative">
          <div
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary rounded-full"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.6s ease-out 0.3s',
              transform: 'translateX(-50%)',
            }}
          />

          {/* Iterando sobre a lista traduzida */}
          <div className="space-y-12 md:space-y-16">
            {t.experience.list.map((exp, index) => {
              const color = getExpColor(index);
              return (
              <div
                key={index}
                className={`relative md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div
                  className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full border-4 border-background"
                  style={{ background: color, transform: 'translate(-50%, 20px)' }}
                />

                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-12 md:ml-0`}>
                  <GlassmorphicCard delay={index * 100}>
                    <div className="mb-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-heading text-2xl font-semibold text-foreground">
                            {exp.title}
                          </h3>
                          <p className="font-body text-lg font-medium mt-1" style={{ color: color }}>
                            {exp.company}
                          </p>
                        </div>
                        <Briefcase className="w-6 h-6 flex-shrink-0" style={{ color: color }} />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 mb-4 text-muted-foreground font-body text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" style={{ color: color }} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" style={{ color: color }} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="font-body text-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full text-xs font-body text-foreground transition-all duration-300 hover:scale-110"
                          style={{
                            background: `${color}15`,
                            border: `1px solid ${color}30`,
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </GlassmorphicCard>
                </div>
              </div>
            )})}
          </div>
        </div>
      </div>
    </section>
  );
}