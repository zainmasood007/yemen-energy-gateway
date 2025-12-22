import { Phone, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { useParallax } from '@/hooks/use-parallax';

export function CTASection() {
  const { t, isRTL } = useLanguage();
  const parallaxOffset = useParallax({ speed: 0.1, direction: 'up' });
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="py-20 md:py-24 relative overflow-hidden">
      {/* Parallax background */}
      <div 
        className="absolute inset-0"
        style={{ transform: `translateY(${parallaxOffset * 0.3}px)` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px]" />
      </div>
      
      <div className="container relative">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Glass background with gradient */}
          <div className="absolute inset-0 bg-gradient-solar" />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/95 to-orange-600/90" />
          
          {/* Glass texture */}
          <div className="absolute inset-0 bg-grid-modern opacity-[0.03]" />
          
          {/* Decorative blobs */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-foreground/10 rounded-full blur-3xl" />
          
          {/* Content */}
          <div className="relative p-10 md:p-16 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary-foreground/10 backdrop-blur-sm border border-secondary-foreground/10 text-secondary-foreground text-sm font-semibold mb-6 animate-fade-in">
                <Sparkles className="h-4 w-4" />
                <span>{isRTL ? 'استشارة مجانية' : 'Free Consultation'}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-secondary-foreground mb-5 drop-shadow-lg animate-slide-up">
                {isRTL ? 'هل أنت جاهز للتحول إلى الطاقة الشمسية؟' : 'Ready to Switch to Solar Energy?'}
              </h2>
              <p className="text-secondary-foreground/85 mb-10 text-lg leading-relaxed animate-slide-up delay-100">
                {isRTL 
                  ? 'تواصل معنا اليوم للحصول على استشارة مجانية وعرض سعر مخصص لاحتياجاتك'
                  : 'Contact us today for a free consultation and a customized quote for your needs'
                }
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-200">
                <Button 
                  asChild 
                  size="lg"
                  className="group bg-secondary-foreground text-secondary hover:bg-secondary-foreground/95 px-8 py-7 text-base font-bold shadow-xl hover:shadow-2xl transition-all duration-500 rounded-xl"
                >
                  <a href="https://wa.me/967777777777" target="_blank" rel="noopener noreferrer">
                    {t('hero.cta')}
                    <Arrow className="h-5 w-5 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                  </a>
                </Button>
                <Button 
                  asChild 
                  size="lg"
                  variant="outline"
                  className="border-2 border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 backdrop-blur-sm px-8 py-7 text-base font-semibold rounded-xl transition-all duration-300"
                >
                  <a href="tel:+967777777777">
                    <Phone className="h-5 w-5" />
                    {t('contact.phone')}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}