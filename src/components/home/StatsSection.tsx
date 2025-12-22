import { Zap, Award, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { useParallax } from '@/hooks/use-parallax';

export function StatsSection() {
  const { isRTL } = useLanguage();
  const parallaxOffset = useParallax({ speed: 0.15, direction: 'up' });
  
  const stats = [
    { value: '500+', label: isRTL ? 'مشروع منجز' : 'Projects Completed', icon: Zap },
    { value: '10+', label: isRTL ? 'سنوات خبرة' : 'Years Experience', icon: Award },
    { value: '18', label: isRTL ? 'محافظة نخدمها' : 'Governorates Served', icon: MapPin },
    { value: '24/7', label: isRTL ? 'دعم فني' : 'Technical Support', icon: Clock },
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Glass gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary" />
      
      {/* Parallax decorative elements */}
      <div 
        className="absolute inset-0"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[60px]" />
      </div>
      
      {/* Grid pattern with glass effect */}
      <div className="absolute inset-0 bg-grid-modern opacity-[0.02]" />
      
      {/* Top glass edge */}
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-background/10 to-transparent" />
      
      <div className="container relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glass icon container */}
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl glass-dark mb-5 group-hover:bg-secondary/20 group-hover:scale-110 transition-all duration-500">
                <stat.icon className="h-8 w-8 text-secondary" />
              </div>
              <div className="text-4xl md:text-6xl font-black text-primary-foreground mb-2 group-hover:scale-105 transition-transform duration-300 drop-shadow-lg">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-primary-foreground/70 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom glass edge */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background/10 to-transparent" />
    </section>
  );
}