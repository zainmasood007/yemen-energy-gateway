import { useRef } from 'react';
import { Shield, CheckCircle2, Wrench, MapPin, Sparkles } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { cn } from '@/lib/utils';
import { useParallax } from '@/hooks/use-parallax';

export function FeaturesSection() {
  const { t } = useLanguage();
  const parallaxOffset = useParallax({ speed: 0.1, direction: 'up' });

  const features = [
    { icon: Shield, titleKey: 'features.authorized.title', descKey: 'features.authorized.desc', gradient: 'from-primary to-primary/80' },
    { icon: CheckCircle2, titleKey: 'features.warranty.title', descKey: 'features.warranty.desc', gradient: 'from-secondary to-orange-600' },
    { icon: Wrench, titleKey: 'features.expertise.title', descKey: 'features.expertise.desc', gradient: 'from-accent to-teal-600' },
    { icon: MapPin, titleKey: 'features.coverage.title', descKey: 'features.coverage.desc', gradient: 'from-success to-emerald-600' },
  ];

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Parallax background decorations */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
      >
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      </div>
      
      {/* Glass texture */}
      <div className="absolute inset-0 bg-mesh opacity-40" />
      
      <div className="container relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-panel text-primary text-sm font-semibold mb-6 animate-fade-in">
            <Sparkles className="h-4 w-4" />
            <span>{t('features.title')}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4 animate-slide-up">{t('features.title')}</h2>
          <div className="w-24 h-1.5 bg-gradient-solar mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.titleKey}
              className={cn(
                "group relative card-glass p-8 text-center card-interactive",
                "animate-slide-up"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 rounded-2xl shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className={cn(
                "relative inline-flex items-center justify-center h-16 w-16 rounded-2xl mb-6 transition-all duration-500",
                "bg-gradient-to-br shadow-lg",
                feature.gradient,
                "group-hover:scale-110 group-hover:shadow-glow"
              )}>
                <feature.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="relative text-xl font-bold mb-3">{t(feature.titleKey)}</h3>
              <p className="relative text-muted-foreground text-sm leading-relaxed">{t(feature.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}