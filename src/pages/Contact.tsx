import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/i18n/LanguageContext';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO, { localBusinessSchema, createBreadcrumbSchema } from '@/components/SEO';

export default function Contact() {
  const { t, isRTL } = useLanguage();

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: isRTL ? 'الرئيسية' : 'Home', url: '/' },
    { name: isRTL ? 'اتصل بنا' : 'Contact Us', url: '/contact' },
  ]);

  const contactJsonLd = [
    localBusinessSchema,
    breadcrumbSchema,
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": isRTL ? "اتصل بنا - القطع للطاقة الشمسية" : "Contact Us - Al-Qatta Solar Energy",
      "description": isRTL 
        ? "تواصل مع القطع للطاقة الشمسية - الوكيل المعتمد الوحيد لـ Pylontech في اليمن"
        : "Contact Al-Qatta Solar Energy - The only authorized Pylontech agent in Yemen",
      "mainEntity": localBusinessSchema
    }
  ];

  const contactMethods = [
    {
      icon: MessageCircle,
      title: t('contact.whatsapp'),
      value: '+967 777 777 777',
      href: 'https://wa.me/967777777777',
      color: 'bg-[#25D366]/10 text-[#25D366]',
      hoverColor: 'group-hover:bg-[#25D366] group-hover:text-white'
    },
    {
      icon: Phone,
      title: t('contact.phone'),
      value: '+967 777 777 777',
      href: 'tel:+967777777777',
      color: 'bg-primary/10 text-primary',
      hoverColor: 'group-hover:bg-primary group-hover:text-primary-foreground'
    },
    {
      icon: Mail,
      title: t('contact.email'),
      value: 'info@alqatta.com',
      href: 'mailto:info@alqatta.com',
      color: 'bg-primary/10 text-primary',
      hoverColor: 'group-hover:bg-primary group-hover:text-primary-foreground'
    },
    {
      icon: MapPin,
      title: t('contact.address'),
      value: isRTL ? 'صنعاء، اليمن' : "Sana'a, Yemen",
      href: null,
      color: 'bg-primary/10 text-primary',
      hoverColor: ''
    },
  ];

  return (
    <Layout>
      <SEO
        title="Contact Us - Al-Qatta Solar Energy | WhatsApp, Phone, Email"
        titleAr="اتصل بنا - القطع للطاقة الشمسية | واتساب، هاتف، بريد إلكتروني"
        description="Contact Al-Qatta Solar Energy for solar system inquiries, quotes, and support. WhatsApp: +967 777 777 777. The only authorized Pylontech agent in Yemen."
        descriptionAr="تواصل مع القطع للطاقة الشمسية للاستفسارات وطلب عروض الأسعار والدعم الفني. واتساب: +967 777 777 777. الوكيل المعتمد الوحيد لـ Pylontech في اليمن."
        keywords="contact al-qatta, solar company yemen contact, pylontech yemen phone, solar energy support yemen"
        keywordsAr="اتصل بالقطع، تواصل شركة طاقة شمسية اليمن، هاتف بايلونتيك اليمن، دعم طاقة شمسية اليمن"
        canonical="/contact"
        jsonLd={contactJsonLd}
      />

      {/* Hero */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('contact.title')}</h1>
            <p className="text-lg opacity-90">{t('contact.subtitle')}</p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-surface">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
            {contactMethods.map((method, i) => {
              const Wrapper = method.href ? 'a' : 'div';
              return (
                <Wrapper
                  key={i}
                  {...(method.href ? { href: method.href, target: method.href.startsWith('http') ? '_blank' : undefined, rel: method.href.startsWith('http') ? 'noopener noreferrer' : undefined } : {})}
                  className={`group bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg hover:border-primary/30 transition-all ${method.href ? 'cursor-pointer' : ''}`}
                >
                  <div className={`inline-flex items-center justify-center h-16 w-16 rounded-xl mb-4 transition-colors ${method.color} ${method.hoverColor}`}>
                    <method.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold mb-1">{method.title}</h3>
                  <p className="text-sm text-muted-foreground" dir={method.value.startsWith('+') ? 'ltr' : undefined}>
                    {method.value}
                  </p>
                </Wrapper>
              );
            })}
          </div>

          {/* Working Hours */}
          <div className="max-w-lg mx-auto bg-card border border-border rounded-xl p-6 text-center mb-16">
            <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-secondary/10 text-secondary mb-4">
              <Clock className="h-7 w-7" />
            </div>
            <h3 className="text-lg font-bold mb-2">{isRTL ? 'ساعات العمل' : 'Working Hours'}</h3>
            <p className="text-muted-foreground">
              {isRTL ? 'السبت - الخميس: 8:00 ص - 6:00 م' : 'Saturday - Thursday: 8:00 AM - 6:00 PM'}
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              {isRTL ? 'الدعم الفني متاح 24/7 عبر واتساب' : 'Technical support available 24/7 via WhatsApp'}
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              {isRTL ? 'تواصل معنا الآن' : 'Contact Us Now'}
            </h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              {isRTL 
                ? 'أسرع طريقة للتواصل معنا هي عبر واتساب. نرد على جميع الاستفسارات في أقل من ساعة.'
                : 'The fastest way to reach us is via WhatsApp. We respond to all inquiries within an hour.'}
            </p>
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8">
              <a href="https://wa.me/967777777777" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                {t('contact.whatsapp')}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16">
        <div className="container">
          <div className="bg-muted rounded-xl h-64 flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <MapPin className="h-12 w-12 mx-auto mb-2 opacity-50" />
              <p>{isRTL ? 'خريطة الموقع' : 'Location Map'}</p>
              <p className="text-sm">{isRTL ? 'صنعاء، اليمن' : "Sana'a, Yemen"}</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
