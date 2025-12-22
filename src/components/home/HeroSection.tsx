import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Sun, Shield, Clock, MapPin, Battery, Award, Sparkles, Zap } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useParallax } from '@/hooks/use-parallax';

export function HeroSection() {
  const { t, isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;
  
  // Parallax effects
  const bgOffset = useParallax({ speed: 0.3, direction: 'down' });
  const contentOffset = useParallax({ speed: 0.1, direction: 'up' });
  const floatingOffset = useParallax({ speed: 0.2, direction: 'up' });

  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden">
      {/* Parallax gradient background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/80"
        style={{ transform: `translateY(${bgOffset * 0.5}px)` }}
      />
      
      {/* Animated mesh gradient with parallax */}
      <div 
        className="absolute inset-0 opacity-70"
        style={{ transform: `translateY(${bgOffset * 0.3}px)` }}
      >
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[100px] animate-pulse-soft" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[80px] animate-pulse-soft delay-300" />
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-primary-foreground/5 rounded-full blur-[60px]" />
      </div>

      {/* Glass texture overlay */}
      <div className="absolute inset-0 bg-grid-modern opacity-[0.02]" />
      
      {/* Frosted glass edge effect */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background/10 to-transparent backdrop-blur-[1px]" />

      <div className="container relative z-10 py-20 lg:py-24">
        <div 
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          style={{ transform: `translateY(${contentOffset}px)` }}
        >
          {/* Content */}
          <div className={cn("text-center lg:text-start", isRTL && "lg:order-2")}>
            {/* Badge with glass effect */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-dark mb-8 animate-fade-in">
              <Sparkles className="h-4 w-4 text-secondary" />
              <span className="text-sm font-semibold tracking-wide text-primary-foreground/90">{t('hero.badge')}</span>
            </div>

            {/* Title with gradient */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-primary-foreground mb-6 leading-[1.1] animate-slide-up">
              <span className="block drop-shadow-lg">{isRTL ? 'طاقة نظيفة' : 'Clean Energy'}</span>
              <span className="block text-transparent bg-clip-text bg-gradient-solar animate-gradient bg-[length:200%_auto] drop-shadow-lg">
                {isRTL ? 'لمستقبل أفضل' : 'For a Better Future'}
              </span>
            </h1>

            {/* Subtitle with glass backdrop */}
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-slide-up delay-100">
              {t('hero.subtitle')}
            </p>

            {/* CTAs with glass effects */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-slide-up delay-200">
              <Button 
                asChild 
                size="lg"
                className="group bg-gradient-solar text-secondary-foreground hover:opacity-95 px-8 py-7 text-base font-bold shadow-glow hover:shadow-[0_0_60px_hsl(32_95%_55%/0.5)] transition-all duration-500 rounded-xl"
              >
                <a href="https://wa.me/967777777777" target="_blank" rel="noopener noreferrer">
                  {t('hero.cta')}
                  <Arrow className="h-5 w-5 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="glass-dark border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-7 text-base font-semibold rounded-xl transition-all duration-300"
              >
                <Link to="/products">
                  {t('hero.ctaSecondary')}
                </Link>
              </Button>
            </div>

            {/* Trust indicators with glass cards */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-12 animate-slide-up delay-300">
              {[
                { icon: Shield, label: isRTL ? 'ضمان 10 سنوات' : '10 Years Warranty' },
                { icon: Clock, label: isRTL ? 'دعم 24/7' : '24/7 Support' },
                { icon: MapPin, label: isRTL ? 'تغطية شاملة' : 'Full Coverage' },
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl glass-dark text-primary-foreground/90 text-sm font-medium"
                >
                  <div className="h-7 w-7 rounded-lg bg-secondary/30 flex items-center justify-center">
                    <item.icon className="h-3.5 w-3.5 text-secondary" />
                  </div>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Visual with parallax floating elements */}
          <div 
            className={cn("relative hidden lg:flex items-center justify-center", isRTL && "lg:order-1")}
            style={{ transform: `translateY(${floatingOffset}px)` }}
          >
            <div className="relative w-full max-w-lg">
              {/* Main glass container */}
              <div className="relative aspect-square rounded-3xl glass-dark p-10 animate-scale-in overflow-hidden">
                {/* Inner glow effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-accent/5 rounded-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
                
                <div className="relative text-center h-full flex flex-col items-center justify-center">
                  <div className="relative inline-flex items-center justify-center h-24 w-24 rounded-2xl bg-gradient-solar mb-6 animate-float shadow-glow">
                    <Sun className="h-12 w-12 text-secondary-foreground" />
                  </div>
                  <div className="text-6xl font-black text-primary-foreground mb-2 drop-shadow-lg">500+</div>
                  <div className="text-base text-primary-foreground/70 font-medium">{isRTL ? 'مشروع منجز' : 'Projects Completed'}</div>
                </div>
              </div>

              {/* Floating glass badges with parallax */}
              <div 
                className="absolute -top-6 -end-6 card-glass p-4 shadow-elevated animate-slide-in-right delay-200"
                style={{ transform: `translateY(${floatingOffset * -0.5}px)` }}
              >
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-gradient-solar flex items-center justify-center shadow-glow">
                    <Battery className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-base">Pylontech</div>
                    <div className="text-sm text-muted-foreground">{isRTL ? 'وكيل معتمد' : 'Authorized'}</div>
                  </div>
                </div>
              </div>

              <div 
                className="absolute -bottom-6 -start-6 card-glass p-4 shadow-elevated animate-slide-in-left delay-300"
                style={{ transform: `translateY(${floatingOffset * 0.5}px)` }}
              >
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center">
                    <Award className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-base">10+</div>
                    <div className="text-sm text-muted-foreground">{isRTL ? 'سنوات خبرة' : 'Years Experience'}</div>
                  </div>
                </div>
              </div>

              {/* Extra floating element */}
              <div 
                className="absolute top-1/2 -end-12 glass-panel p-3 shadow-glow animate-float delay-500"
                style={{ transform: `translateY(${floatingOffset * -0.3}px)` }}
              >
                <Zap className="h-6 w-6 text-secondary" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Glass wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="absolute inset-x-0 bottom-16 h-20 bg-gradient-to-t from-background/20 to-transparent backdrop-blur-[2px]" />
        <svg viewBox="0 0 1440 80" className="w-full h-16 md:h-20 fill-background" preserveAspectRatio="none">
          <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
}