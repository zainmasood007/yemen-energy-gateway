import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/i18n/LanguageContext';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO, { createBreadcrumbSchema, createServiceSchema } from '@/components/SEO';

export default function Services() {
  const { t, isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;
  
  const services = [
    { 
      key: 'services.items.design', 
      icon: '📐',
      features: isRTL 
        ? ['تحليل استهلاك الطاقة', 'تصميم هندسي احترافي', 'اختيار المعدات المناسبة', 'رسومات تنفيذية']
        : ['Energy consumption analysis', 'Professional engineering design', 'Equipment selection', 'Implementation drawings']
    },
    { 
      key: 'services.items.installation', 
      icon: '🔧',
      features: isRTL 
        ? ['تركيب احترافي', 'فريق مهندسين متخصص', 'اختبار شامل', 'تسليم مفتاح']
        : ['Professional installation', 'Specialized engineering team', 'Comprehensive testing', 'Turnkey delivery']
    },
    { 
      key: 'services.items.storage', 
      icon: '🔋',
      features: isRTL 
        ? ['بطاريات Pylontech الأصلية', 'أنظمة هجينة', 'حلول خارج الشبكة', 'تخزين طاقة ذكي']
        : ['Original Pylontech batteries', 'Hybrid systems', 'Off-grid solutions', 'Smart energy storage']
    },
    { 
      key: 'services.items.consultation', 
      icon: '💡',
      features: isRTL 
        ? ['استشارة مجانية', 'تحديد الحجم المناسب', 'دراسة الجدوى', 'توصيات مخصصة']
        : ['Free consultation', 'Proper sizing', 'Feasibility study', 'Customized recommendations']
    },
    { 
      key: 'services.items.maintenance', 
      icon: '🛠️',
      features: isRTL 
        ? ['صيانة دورية', 'دعم فني 24/7', 'قطع غيار أصلية', 'استجابة سريعة']
        : ['Regular maintenance', '24/7 technical support', 'Original spare parts', 'Fast response']
    },
    { 
      key: 'services.items.assessment', 
      icon: '📊',
      features: isRTL 
        ? ['تقييم الموقع', 'قياس الإشعاع الشمسي', 'تحليل الظل', 'تقرير شامل']
        : ['Site evaluation', 'Solar radiation measurement', 'Shade analysis', 'Comprehensive report']
    },
  ];

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: isRTL ? 'الرئيسية' : 'Home', url: '/' },
    { name: isRTL ? 'خدماتنا' : 'Our Services', url: '/services' },
  ]);

  const servicesSchemas = services.map(service => createServiceSchema({
    name: t(`${service.key}.title`),
    description: t(`${service.key}.desc`),
    areaServed: 'Yemen'
  }));

  return (
    <Layout>
      <SEO
        title="Solar Energy Services in Yemen | Al-Qatta Solar Energy"
        titleAr="خدمات الطاقة الشمسية في اليمن | القطع للطاقة الشمسية"
        description="Complete solar energy services in Yemen: system design, professional installation, energy storage solutions, technical consultation, maintenance, and site assessment."
        descriptionAr="خدمات طاقة شمسية متكاملة في اليمن: تصميم الأنظمة، التركيب الاحترافي، حلول تخزين الطاقة، الاستشارات الفنية، الصيانة، ودراسة الجدوى."
        keywords="solar installation yemen, solar system design yemen, energy storage installation, solar maintenance yemen, solar consultation yemen"
        keywordsAr="تركيب طاقة شمسية اليمن، تصميم أنظمة شمسية اليمن، تركيب تخزين الطاقة، صيانة طاقة شمسية اليمن، استشارات طاقة شمسية اليمن"
        canonical="/services"
        jsonLd={[breadcrumbSchema, ...servicesSchemas]}
      />

      {/* Hero */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('services.title')}</h1>
            <p className="text-lg opacity-90">{t('services.subtitle')}</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-surface">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <article 
                key={service.key} 
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h2 className="text-xl font-bold mb-3">{t(`${service.key}.title`)}</h2>
                <p className="text-muted-foreground mb-4">{t(`${service.key}.desc`)}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild variant="outline" className="w-full group">
                  <a href="https://wa.me/967777777777" target="_blank" rel="noopener noreferrer">
                    {t('common.requestQuote')}
                    <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                  </a>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container">
          <div className="bg-gradient-to-br from-secondary to-warning rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-foreground mb-4">
              {isRTL ? 'هل تحتاج إلى استشارة مجانية؟' : 'Need a Free Consultation?'}
            </h2>
            <p className="text-secondary-foreground/80 mb-6 max-w-xl mx-auto">
              {isRTL 
                ? 'تواصل معنا الآن للحصول على استشارة مجانية وعرض سعر مخصص لمشروعك'
                : 'Contact us now for a free consultation and a customized quote for your project'}
            </p>
            <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90">
              <a href="https://wa.me/967777777777" target="_blank" rel="noopener noreferrer">
                {t('contact.whatsapp')}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
