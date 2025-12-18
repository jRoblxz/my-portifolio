import { GlassmorphicCard } from '@/components/ui/GlassmorphicCard';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

import imgVictor from '@/assets/images/victor.png';
import SocialButton from '@/components/ui/LinkedInBtn';

export function LinkedInRecommendations() {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();

  // Imagens continuam hardcoded aqui para simplificar
  const images = [
      imgVictor,
  ];

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4"
          style={{
            fill: i < rating ? '#7C3AED' : 'rgba(255, 255, 255, 0.1)',
            color: i < rating ? '#7C3AED' : 'rgba(255, 255, 255, 0.1)',
          }}
        />
      ))}
    </div>
  );

  return (
    <section
      id="recommendations"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-16 md:mb-24">
          <h2
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#e4e0d7] mb-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.6s ease-out',
            }}
          >
            {t.recommendations.title}
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

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {t.recommendations.list.map((rec, index) => (
            <GlassmorphicCard key={index} delay={index * 100}>
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={images[index]}
                  alt={rec.name}
                  className="w-20 h-20 rounded-full border-2 border-[#7C3AED]"
                />
                <div className="flex-1">
                  <h3 className="font-heading text-lg font-semibold text-foreground ">
                    {rec.name}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {rec.title}
                  </p>
                </div>
              </div>

              <div className="mb-4 ">
                <StarRating rating={5} />
              </div>

              <p className="font-body text-foreground mb-6 leading-relaxed italic">
                "{rec.text}"
              </p>

              <SocialButton onClick={() => window.open('https://linkedin.com')} />
            </GlassmorphicCard>
          ))}
        </div>
      </div>
    </section>
  );
}