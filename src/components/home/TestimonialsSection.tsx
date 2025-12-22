import { Users, Star, Quote } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { useParallax } from '@/hooks/use-parallax';

export function TestimonialsSection() {
  const { isRTL } = useLanguage();
  const parallaxOffset = useParallax({ speed: 0.1, direction: 'up' });

  const testimonials = [
    {
      nameAr: 'محمد أحمد العامري',
      nameEn: 'Mohammed Ahmed Al-Ameri',
      roleAr: 'صاحب منزل - صنعاء',
      roleEn: 'Homeowner - Sana\'a',
      textAr: 'أفضل استثمار قمت به! النظام يعمل بشكل ممتاز منذ سنتين بدون أي مشاكل.',
      textEn: 'Best investment I made! The system has been working perfectly for 2 years without any issues.',
      rating: 5
    },
    {
      nameAr: 'شركة النور للتجارة',
      nameEn: 'Al-Nour Trading Company',
      roleAr: 'مكتب تجاري - عدن',
      roleEn: 'Commercial Office - Aden',
      textAr: 'وفرنا أكثر من 70% من تكاليف الكهرباء. بطاريات Pylontech ممتازة.',
      textEn: 'We saved over 70% on electricity costs. Pylontech batteries are excellent.',
      rating: 5
    },
    {
      nameAr: 'علي حسن المقطري',
      nameEn: 'Ali Hassan Al-Maqtari',
      roleAr: 'مزارع - تعز',
      roleEn: 'Farmer - Taiz',
      textAr: 'حلّوا لي مشكلة ضخ المياه للمزرعة. النظام قوي ويعمل بكفاءة عالية.',
      textEn: 'They solved my farm water pumping problem. The system is powerful and works efficiently.',
      rating: 5
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Parallax background */}
      <div 
        className="absolute inset-0"
        style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
      >
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-primary/5 rounded-full blur-[80px]" />
      </div>
      
      <div className="container relative">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-panel text-secondary text-sm font-semibold mb-6 animate-fade-in">
            <Users className="h-4 w-4" />
            <span>{isRTL ? 'آراء عملائنا' : 'Customer Reviews'}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4 animate-slide-up">
            {isRTL ? 'ماذا يقول عملاؤنا' : 'What Our Clients Say'}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg animate-slide-up delay-100">
            {isRTL ? 'نفتخر بثقة عملائنا وشهاداتهم عن خدماتنا' : 'We are proud of our clients\' trust and testimonials'}
          </p>
          <div className="w-24 h-1.5 bg-gradient-solar mx-auto rounded-full mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative card-glass p-8 card-interactive animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote icon with glass effect */}
              <div className="absolute top-6 end-6 h-12 w-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                <Quote className="h-6 w-6 text-secondary/50" />
              </div>
              
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-secondary fill-current drop-shadow-sm" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{isRTL ? testimonial.textAr : testimonial.textEn}"
              </p>

              {/* Author with glass avatar */}
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                  {(isRTL ? testimonial.nameAr : testimonial.nameEn).charAt(0)}
                </div>
                <div>
                  <div className="font-bold">{isRTL ? testimonial.nameAr : testimonial.nameEn}</div>
                  <div className="text-sm text-muted-foreground">{isRTL ? testimonial.roleAr : testimonial.roleEn}</div>
                </div>
              </div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 rounded-2xl shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}