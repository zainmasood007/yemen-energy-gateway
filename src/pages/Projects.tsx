import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/i18n/LanguageContext';
import { MapPin, Battery, Sun, Calendar, Building2, Home, Factory, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO, { createBreadcrumbSchema } from '@/components/SEO';
import { cn } from '@/lib/utils';

// Sample projects data (placeholders)
const projects = [
  {
    id: 1,
    titleAr: 'نظام طاقة شمسية لفيلا سكنية - صنعاء',
    titleEn: 'Solar System for Residential Villa - Sana\'a',
    descAr: 'تركيب نظام طاقة شمسية متكامل لفيلا سكنية مع بطاريات Pylontech لتخزين الطاقة',
    descEn: 'Complete solar system installation for residential villa with Pylontech batteries for energy storage',
    type: 'residential',
    location: { ar: 'صنعاء', en: "Sana'a" },
    systemSize: '10 kW',
    batteryCapacity: '14.4 kWh',
    panels: 20,
    date: '2024',
    image: '/placeholder.svg',
    features: {
      ar: ['20 لوح شمسي 550W', 'بطاريات Pylontech US3000C × 4', 'انفرتر هجين 10kW', 'نظام مراقبة ذكي'],
      en: ['20 × 550W Solar Panels', 'Pylontech US3000C × 4 Batteries', '10kW Hybrid Inverter', 'Smart Monitoring System']
    }
  },
  {
    id: 2,
    titleAr: 'نظام طاقة شمسية لمصنع - عدن',
    titleEn: 'Solar System for Factory - Aden',
    descAr: 'تركيب نظام طاقة شمسية تجاري كبير لمصنع صناعي مع تخزين طاقة متقدم',
    descEn: 'Large commercial solar system installation for industrial factory with advanced energy storage',
    type: 'commercial',
    location: { ar: 'عدن', en: 'Aden' },
    systemSize: '50 kW',
    batteryCapacity: '48 kWh',
    panels: 90,
    date: '2024',
    image: '/placeholder.svg',
    features: {
      ar: ['90 لوح شمسي 550W', 'بطاريات Pylontech Force H1 × 6', 'انفرتر صناعي 50kW', 'نظام إدارة الطاقة'],
      en: ['90 × 550W Solar Panels', 'Pylontech Force H1 × 6 Batteries', '50kW Industrial Inverter', 'Energy Management System']
    }
  },
  {
    id: 3,
    titleAr: 'نظام طاقة شمسية لمكتب - تعز',
    titleEn: 'Solar System for Office - Taiz',
    descAr: 'تركيب نظام طاقة شمسية لمبنى مكاتب تجاري مع حل تخزين موثوق',
    descEn: 'Solar system installation for commercial office building with reliable storage solution',
    type: 'commercial',
    location: { ar: 'تعز', en: 'Taiz' },
    systemSize: '20 kW',
    batteryCapacity: '28.8 kWh',
    panels: 36,
    date: '2024',
    image: '/placeholder.svg',
    features: {
      ar: ['36 لوح شمسي 550W', 'بطاريات Pylontech US5000 × 6', 'انفرتر هجين 20kW', 'لوحة تحكم ذكية'],
      en: ['36 × 550W Solar Panels', 'Pylontech US5000 × 6 Batteries', '20kW Hybrid Inverter', 'Smart Control Panel']
    }
  },
  {
    id: 4,
    titleAr: 'نظام طاقة شمسية منزلي - الحديدة',
    titleEn: 'Home Solar System - Hudaydah',
    descAr: 'نظام طاقة شمسية منزلي مصمم خصيصاً لمناخ الحديدة الحار',
    descEn: 'Home solar system specially designed for Hudaydah\'s hot climate',
    type: 'residential',
    location: { ar: 'الحديدة', en: 'Hudaydah' },
    systemSize: '5 kW',
    batteryCapacity: '7.2 kWh',
    panels: 10,
    date: '2023',
    image: '/placeholder.svg',
    features: {
      ar: ['10 ألواح شمسية مقاومة للحرارة', 'بطاريات Pylontech US3000C × 2', 'انفرتر 5kW مع تبريد', 'حماية ضد الملوحة'],
      en: ['10 × Heat-Resistant Solar Panels', 'Pylontech US3000C × 2 Batteries', '5kW Inverter with Cooling', 'Salinity Protection']
    }
  },
  {
    id: 5,
    titleAr: 'نظام طاقة شمسية لمستشفى - صنعاء',
    titleEn: 'Solar System for Hospital - Sana\'a',
    descAr: 'نظام طاقة شمسية ضخم لمستشفى مع تخزين طاقة يضمن استمرارية الخدمة',
    descEn: 'Large solar system for hospital with energy storage ensuring service continuity',
    type: 'institutional',
    location: { ar: 'صنعاء', en: "Sana'a" },
    systemSize: '100 kW',
    batteryCapacity: '200 kWh',
    panels: 180,
    date: '2023',
    image: '/placeholder.svg',
    features: {
      ar: ['180 لوح شمسي 550W', 'بنك بطاريات Pylontech ضخم', 'انفرترات متعددة', 'نظام طوارئ احتياطي'],
      en: ['180 × 550W Solar Panels', 'Large Pylontech Battery Bank', 'Multiple Inverters', 'Emergency Backup System']
    }
  },
  {
    id: 6,
    titleAr: 'نظام طاقة شمسية لمزرعة - عدن',
    titleEn: 'Solar System for Farm - Aden',
    descAr: 'نظام طاقة شمسية لتشغيل مضخات الري والمعدات الزراعية',
    descEn: 'Solar system to power irrigation pumps and agricultural equipment',
    type: 'agricultural',
    location: { ar: 'عدن', en: 'Aden' },
    systemSize: '15 kW',
    batteryCapacity: '21.6 kWh',
    panels: 27,
    date: '2023',
    image: '/placeholder.svg',
    features: {
      ar: ['27 لوح شمسي', 'بطاريات Pylontech US3000C × 6', 'انفرتر للمضخات', 'نظام ري ذكي'],
      en: ['27 × Solar Panels', 'Pylontech US3000C × 6 Batteries', 'Pump Inverter', 'Smart Irrigation System']
    }
  },
];

const typeIcons = {
  residential: Home,
  commercial: Building2,
  institutional: Building2,
  agricultural: Factory,
};

const typeLabels = {
  residential: { ar: 'سكني', en: 'Residential' },
  commercial: { ar: 'تجاري', en: 'Commercial' },
  institutional: { ar: 'مؤسسي', en: 'Institutional' },
  agricultural: { ar: 'زراعي', en: 'Agricultural' },
};

export default function Projects() {
  const { isRTL } = useLanguage();

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: isRTL ? 'الرئيسية' : 'Home', url: '/' },
    { name: isRTL ? 'مشاريعنا' : 'Our Projects', url: '/projects' },
  ]);

  return (
    <Layout>
      <SEO
        title="Solar Projects Portfolio Yemen | Al-Qatta Solar Energy"
        titleAr="معرض مشاريع الطاقة الشمسية في اليمن | القطاع للطاقة الشمسية"
        description="View our completed solar energy projects in Yemen. Residential, commercial, and industrial solar installations with Pylontech batteries in Sana'a, Aden, Taiz, and Hudaydah."
        descriptionAr="شاهد مشاريع الطاقة الشمسية المنجزة في اليمن. تركيبات طاقة شمسية سكنية وتجارية وصناعية مع بطاريات Pylontech في صنعاء وعدن وتعز والحديدة."
        keywords="solar projects yemen, solar installation portfolio, pylontech projects yemen, solar case studies yemen"
        keywordsAr="مشاريع طاقة شمسية اليمن، معرض تركيبات شمسية، مشاريع بايلونتيك اليمن، دراسات حالة طاقة شمسية اليمن"
        canonical="/projects"
        jsonLd={[breadcrumbSchema]}
      />

      {/* Hero */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {isRTL ? 'مشاريعنا المنجزة' : 'Our Completed Projects'}
            </h1>
            <p className="text-lg opacity-90">
              {isRTL 
                ? 'نفخر بتقديم أكثر من 500 مشروع ناجح في جميع أنحاء اليمن'
                : 'We are proud to deliver over 500 successful projects across Yemen'}
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '500+', label: isRTL ? 'مشروع منجز' : 'Projects' },
              { value: '2 MW+', label: isRTL ? 'قدرة مركبة' : 'Installed Capacity' },
              { value: '18', label: isRTL ? 'محافظة' : 'Governorates' },
              { value: '98%', label: isRTL ? 'رضا العملاء' : 'Client Satisfaction' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl md:text-3xl font-bold text-secondary-foreground">{stat.value}</div>
                <div className="text-sm text-secondary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-surface">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => {
              const TypeIcon = typeIcons[project.type as keyof typeof typeIcons] || Building2;
              const typeLabel = typeLabels[project.type as keyof typeof typeLabels];
              
              return (
                <article 
                  key={project.id}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative aspect-video bg-muted overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={isRTL ? project.titleAr : project.titleEn}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 start-3 flex gap-2">
                      <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded">
                        {isRTL ? typeLabel.ar : typeLabel.en}
                      </span>
                    </div>
                    <div className="absolute top-3 end-3">
                      <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {project.date}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <MapPin className="h-4 w-4" />
                      <span>{isRTL ? project.location.ar : project.location.en}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-2 line-clamp-2">
                      {isRTL ? project.titleAr : project.titleEn}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {isRTL ? project.descAr : project.descEn}
                    </p>

                    {/* Specs */}
                    <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-muted/50 rounded-lg">
                      <div className="text-center">
                        <Sun className="h-4 w-4 mx-auto text-secondary mb-1" />
                        <div className="text-xs font-medium">{project.systemSize}</div>
                        <div className="text-xs text-muted-foreground">{isRTL ? 'القدرة' : 'Power'}</div>
                      </div>
                      <div className="text-center">
                        <Battery className="h-4 w-4 mx-auto text-primary mb-1" />
                        <div className="text-xs font-medium">{project.batteryCapacity}</div>
                        <div className="text-xs text-muted-foreground">{isRTL ? 'التخزين' : 'Storage'}</div>
                      </div>
                      <div className="text-center">
                        <div className="h-4 w-4 mx-auto text-accent mb-1 flex items-center justify-center text-xs font-bold">{project.panels}</div>
                        <div className="text-xs font-medium">{isRTL ? 'لوح' : 'Panels'}</div>
                        <div className="text-xs text-muted-foreground">{isRTL ? 'الألواح' : 'Count'}</div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-1.5">
                      {(isRTL ? project.features.ar : project.features.en).slice(0, 3).map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle className="h-3 w-3 text-success flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container">
          <div className="bg-gradient-to-br from-secondary to-warning rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-foreground mb-4">
              {isRTL ? 'هل تريد مشروعاً مثل هذه المشاريع؟' : 'Want a Project Like These?'}
            </h2>
            <p className="text-secondary-foreground/80 mb-6 max-w-xl mx-auto">
              {isRTL 
                ? 'تواصل معنا الآن للحصول على استشارة مجانية وتصميم نظام مخصص لاحتياجاتك'
                : 'Contact us now for a free consultation and a custom system design for your needs'}
            </p>
            <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90">
              <a href="https://wa.me/967777777777" target="_blank" rel="noopener noreferrer">
                {isRTL ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Note about placeholders */}
      <section className="py-8 bg-muted/30">
        <div className="container">
          <p className="text-center text-sm text-muted-foreground">
            {isRTL 
              ? '* الصور المعروضة هي صور توضيحية. سيتم استبدالها بصور المشاريع الفعلية.'
              : '* Images shown are placeholders. They will be replaced with actual project photos.'}
          </p>
        </div>
      </section>
    </Layout>
  );
}
