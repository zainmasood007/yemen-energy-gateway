import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/i18n/LanguageContext';
import { Shield, Battery, CheckCircle, Star, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import SEO, { createBreadcrumbSchema, createProductSchema, createFAQSchema } from '@/components/SEO';

export default function Pylontech() {
  const { t, isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;
  
  const features = [
    { value: '6000+', label: isRTL ? 'دورة شحن' : 'Charge Cycles', icon: '🔄' },
    { value: '10', label: isRTL ? 'سنوات ضمان' : 'Years Warranty', icon: '✅' },
    { value: '95%+', label: isRTL ? 'كفاءة' : 'Efficiency', icon: '⚡' },
    { value: 'A+', label: isRTL ? 'تصنيف الأمان' : 'Safety Rating', icon: '🛡️' },
  ];

  const products = [
    { name: 'US2000C', capacity: '2.4 kWh', voltage: '48V', desc: isRTL ? 'مثالي للاستخدام المنزلي الصغير' : 'Ideal for small home use' },
    { name: 'US3000C', capacity: '3.5 kWh', voltage: '48V', desc: isRTL ? 'الأكثر شعبية للمنازل المتوسطة' : 'Most popular for medium homes' },
    { name: 'US5000', capacity: '4.8 kWh', voltage: '48V', desc: isRTL ? 'للاستخدام الكثيف والتجاري' : 'For heavy and commercial use' },
    { name: 'Force H1', capacity: '7.1 kWh', voltage: 'High Voltage', desc: isRTL ? 'للأنظمة الكبيرة والمشاريع' : 'For large systems and projects' },
  ];

  const faqs = [
    { 
      question: isRTL ? 'لماذا Pylontech هي الأفضل؟' : 'Why is Pylontech the best?',
      answer: isRTL ? 'Pylontech تستخدم تقنية LiFePO4 الأكثر أماناً وطولاً في العمر مع أكثر من 6000 دورة شحن وضمان 10 سنوات.' : 'Pylontech uses the safest and longest-lasting LiFePO4 technology with over 6000 charge cycles and a 10-year warranty.'
    },
    {
      question: isRTL ? 'كيف أتأكد من أصالة المنتج؟' : 'How do I verify product authenticity?',
      answer: isRTL ? 'كل منتج Pylontech من القطع يأتي مع رقم تسلسلي يمكن التحقق منه مباشرة من موقع Pylontech الرسمي.' : 'Every Pylontech product from Al-Qatta comes with a serial number that can be verified directly from the official Pylontech website.'
    },
    {
      question: isRTL ? 'ما هي مدة الضمان؟' : 'What is the warranty period?',
      answer: isRTL ? '10 سنوات ضمان من المصنع على جميع بطاريات Pylontech، ونحن كوكيل معتمد نوفر الدعم الكامل.' : '10 years factory warranty on all Pylontech batteries, and as an authorized agent, we provide full support.'
    },
  ];

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: isRTL ? 'الرئيسية' : 'Home', url: '/' },
    { name: 'Pylontech', url: '/pylontech' },
  ]);

  const pylontechProductSchema = createProductSchema({
    name: 'Pylontech LiFePO4 Batteries',
    description: 'Original Pylontech lithium iron phosphate batteries with 10-year warranty. The only authorized agent in Yemen.',
    brand: 'Pylontech',
    category: 'Energy Storage Batteries'
  });

  const faqSchema = createFAQSchema(faqs);

  return (
    <Layout>
      <SEO
        title="Pylontech Batteries Yemen | Official Authorized Agent | Al-Qatta"
        titleAr="بطاريات Pylontech اليمن | الوكيل المعتمد الرسمي | القطع"
        description="Buy original Pylontech LiFePO4 batteries in Yemen from the only authorized agent. US2000C, US3000C, US5000, Force H1 with 10-year warranty and full support."
        descriptionAr="اشتري بطاريات Pylontech الأصلية LiFePO4 في اليمن من الوكيل المعتمد الوحيد. US2000C، US3000C، US5000، Force H1 مع ضمان 10 سنوات ودعم كامل."
        keywords="pylontech yemen, pylontech batteries yemen, US2000C yemen, US3000C yemen, LiFePO4 batteries yemen, pylontech authorized agent"
        keywordsAr="بايلونتيك اليمن، بطاريات بايلونتيك اليمن، US2000C اليمن، US3000C اليمن، بطاريات ليثيوم فوسفات الحديد اليمن، وكيل بايلونتيك معتمد"
        canonical="/pylontech"
        jsonLd={[breadcrumbSchema, pylontechProductSchema, faqSchema]}
      />

      {/* Hero */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint opacity-30" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-6">
              <Shield className="h-4 w-4" />{t('pylontech.authorized')}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{t('pylontech.title')}</h1>
            <p className="text-lg opacity-90 mb-8">{t('pylontech.subtitle')}</p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {features.map((feature, i) => (
                <div key={i} className="p-4 rounded-xl bg-primary-foreground/10 border border-primary-foreground/10">
                  <div className="text-3xl mb-1">{feature.icon}</div>
                  <div className="text-2xl font-bold text-secondary">{feature.value}</div>
                  <div className="text-sm opacity-80">{feature.label}</div>
                </div>
              ))}
            </div>

            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <a href="https://wa.me/967777777777" target="_blank" rel="noopener noreferrer">{t('contact.whatsapp')}</a>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Products */}
      <section className="py-20 bg-surface">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">
            {isRTL ? 'منتجات Pylontech' : 'Pylontech Products'}
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            {isRTL ? 'جميع المنتجات أصلية 100% مع ضمان المصنع' : 'All products are 100% original with factory warranty'}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <article key={i} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-secondary/50 transition-all">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-xl bg-primary/10 text-primary mb-4">
                  <Battery className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <div className="flex gap-2 mb-3">
                  <span className="text-xs px-2 py-1 bg-secondary/10 text-secondary rounded">{product.capacity}</span>
                  <span className="text-xs px-2 py-1 bg-muted rounded">{product.voltage}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{product.desc}</p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <a href="https://wa.me/967777777777" target="_blank" rel="noopener noreferrer">
                    {t('common.requestQuote')}
                  </a>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Pylontech */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">{t('pylontech.whyTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: isRTL ? 'عمر افتراضي طويل' : 'Long Lifespan', desc: isRTL ? 'أكثر من 6000 دورة شحن، أي ما يعادل أكثر من 15 سنة من الاستخدام اليومي' : 'Over 6000 charge cycles, equivalent to over 15 years of daily use' },
              { title: isRTL ? 'أمان عالي' : 'High Safety', desc: isRTL ? 'تقنية LiFePO4 الأكثر أماناً - لا خطر انفجار أو حريق' : 'Safest LiFePO4 technology - no risk of explosion or fire' },
              { title: isRTL ? 'ضمان شامل' : 'Full Warranty', desc: isRTL ? '10 سنوات ضمان من المصنع مع دعم كامل من القطع' : '10 years factory warranty with full support from Al-Qatta' },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all">
                <CheckCircle className="h-12 w-12 text-success mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-surface">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            {isRTL ? 'أسئلة شائعة' : 'Frequently Asked Questions'}
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
