import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/i18n/LanguageContext';
import { Shield, Users, Award, MapPin, Target, Eye, CheckCircle } from 'lucide-react';
import SEO, { organizationSchema, createBreadcrumbSchema } from '@/components/SEO';

export default function About() {
  const { t, isRTL } = useLanguage();
  
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: isRTL ? 'الرئيسية' : 'Home', url: '/' },
    { name: isRTL ? 'من نحن' : 'About Us', url: '/about' },
  ]);

  const aboutJsonLd = [
    organizationSchema,
    breadcrumbSchema,
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": isRTL ? "من نحن - القطع للطاقة الشمسية" : "About Us - Al-Qatta Solar Energy",
      "description": isRTL 
        ? "تعرف على القطع للطاقة الشمسية، الوكيل المعتمد الوحيد لـ Pylontech في اليمن"
        : "Learn about Al-Qatta Solar Energy, the only authorized Pylontech agent in Yemen",
      "mainEntity": organizationSchema
    }
  ];

  const values = [
    { icon: Shield, title: isRTL ? 'وكيل معتمد' : 'Authorized Agent', desc: isRTL ? 'الوكيل الرسمي والوحيد لـ Pylontech في اليمن' : 'The official and only Pylontech agent in Yemen' },
    { icon: Users, title: isRTL ? 'فريق متخصص' : 'Expert Team', desc: isRTL ? 'مهندسون ذوو خبرة عالية في أنظمة الطاقة الشمسية' : 'Highly experienced engineers in solar energy systems' },
    { icon: Award, title: isRTL ? 'جودة مضمونة' : 'Quality Guaranteed', desc: isRTL ? 'منتجات أصلية 100% مع ضمان المصنع' : '100% original products with factory warranty' },
    { icon: MapPin, title: isRTL ? 'تغطية شاملة' : 'Full Coverage', desc: isRTL ? 'خدماتنا تغطي جميع المحافظات اليمنية' : 'Our services cover all Yemeni governorates' },
  ];

  return (
    <Layout>
      <SEO
        title="About Us - Al-Qatta Solar Energy | Authorized Pylontech Agent"
        titleAr="من نحن - القطع للطاقة الشمسية | الوكيل المعتمد لـ Pylontech"
        description="Learn about Al-Qatta Solar Energy, Yemen's only authorized Pylontech agent. Over 10 years of experience in solar energy solutions and energy storage systems."
        descriptionAr="تعرف على القطع للطاقة الشمسية، الوكيل المعتمد الوحيد لـ Pylontech في اليمن. أكثر من 10 سنوات خبرة في حلول الطاقة الشمسية وأنظمة تخزين الطاقة."
        keywords="about al-qatta, solar company yemen, pylontech authorized agent, solar energy experts yemen"
        keywordsAr="عن القطع، شركة طاقة شمسية اليمن، وكيل بايلونتيك معتمد، خبراء الطاقة الشمسية اليمن"
        canonical="/about"
        jsonLd={aboutJsonLd}
      />

      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('nav.about')}</h1>
            <p className="text-lg opacity-90">
              {isRTL 
                ? 'الوكيل المعتمد الوحيد لـ Pylontech في اليمن منذ تأسيسنا. نقدم حلول طاقة شمسية متكاملة بأعلى معايير الجودة.'
                : 'The only authorized Pylontech agent in Yemen since our establishment. We provide complete solar energy solutions with the highest quality standards.'}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-surface">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-primary/10 text-primary mb-4">
                <Target className="h-7 w-7" />
              </div>
              <h2 className="text-2xl font-bold mb-4">{isRTL ? 'مهمتنا' : 'Our Mission'}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {isRTL 
                  ? 'توفير حلول طاقة شمسية موثوقة وعالية الجودة لكل منزل وشركة في اليمن، مع ضمان أفضل خدمة ما بعد البيع ودعم فني على مدار الساعة.'
                  : 'To provide reliable, high-quality solar energy solutions for every home and business in Yemen, ensuring the best after-sales service and 24/7 technical support.'}
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-secondary/10 text-secondary mb-4">
                <Eye className="h-7 w-7" />
              </div>
              <h2 className="text-2xl font-bold mb-4">{isRTL ? 'رؤيتنا' : 'Our Vision'}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {isRTL 
                  ? 'أن نكون الشركة الرائدة في مجال الطاقة الشمسية وتخزين الطاقة في اليمن والمنطقة، ونساهم في تحقيق استدامة الطاقة للجميع.'
                  : 'To be the leading company in solar energy and energy storage in Yemen and the region, contributing to energy sustainability for all.'}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">{isRTL ? 'لماذا تختارنا؟' : 'Why Choose Us?'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg hover:border-primary/30 transition-all">
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-primary/10 text-primary mb-4">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EEAT Section */}
      <section className="py-16 bg-surface">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">{isRTL ? 'خبرتنا ومصداقيتنا' : 'Our Expertise & Credibility'}</h2>
            <div className="space-y-4">
              {[
                isRTL ? 'الوكيل المعتمد والوحيد لـ Pylontech في اليمن' : 'The only authorized Pylontech agent in Yemen',
                isRTL ? 'أكثر من 500 مشروع منجز بنجاح' : 'Over 500 successfully completed projects',
                isRTL ? 'فريق من المهندسين المتخصصين والمعتمدين' : 'Team of specialized and certified engineers',
                isRTL ? 'ضمان المصنع الأصلي على جميع منتجات Pylontech' : 'Original factory warranty on all Pylontech products',
                isRTL ? 'دعم فني وصيانة على مدار الساعة' : '24/7 technical support and maintenance',
                isRTL ? 'تغطية جميع المحافظات اليمنية' : 'Coverage of all Yemeni governorates',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-card border border-border rounded-lg p-4">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
