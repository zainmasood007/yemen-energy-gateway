import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/i18n/LanguageContext';
import { 
  MapPin, Battery, Sun, Calendar, Building2, Home, Factory, CheckCircle,
  Filter, X, ZoomIn, ChevronLeft, ChevronRight, Sparkles, Phone,
  ArrowLeft, ArrowRight, Eye, Award, Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import SEO, { createBreadcrumbSchema } from '@/components/SEO';
import { cn } from '@/lib/utils';

interface Project {
  id: number;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  type: 'residential' | 'commercial' | 'institutional' | 'agricultural';
  location: { ar: string; en: string };
  systemSize: string;
  batteryCapacity: string;
  panels: number;
  date: string;
  images: string[];
  features: { ar: string[]; en: string[] };
  clientAr?: string;
  clientEn?: string;
}

const projects: Project[] = [
  {
    id: 1,
    titleAr: 'نظام طاقة شمسية لفيلا سكنية - صنعاء',
    titleEn: 'Solar System for Residential Villa - Sana\'a',
    descAr: 'تركيب نظام طاقة شمسية متكامل لفيلا سكنية مع بطاريات Pylontech لتخزين الطاقة وتوفير الطاقة على مدار الساعة',
    descEn: 'Complete solar system installation for residential villa with Pylontech batteries for 24/7 energy storage',
    type: 'residential',
    location: { ar: 'صنعاء', en: "Sana'a" },
    systemSize: '10 kW',
    batteryCapacity: '14.4 kWh',
    panels: 20,
    date: '2024',
    clientAr: 'فيلا خاصة',
    clientEn: 'Private Villa',
    images: [
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&h=600&fit=crop',
    ],
    features: {
      ar: ['20 لوح شمسي 550W', 'بطاريات Pylontech US3000C × 4', 'انفرتر هجين 10kW', 'نظام مراقبة ذكي'],
      en: ['20 × 550W Solar Panels', 'Pylontech US3000C × 4 Batteries', '10kW Hybrid Inverter', 'Smart Monitoring System']
    }
  },
  {
    id: 2,
    titleAr: 'نظام طاقة شمسية لمصنع - عدن',
    titleEn: 'Solar System for Factory - Aden',
    descAr: 'تركيب نظام طاقة شمسية تجاري كبير لمصنع صناعي مع تخزين طاقة متقدم لضمان استمرارية الإنتاج',
    descEn: 'Large commercial solar system installation for industrial factory with advanced energy storage',
    type: 'commercial',
    location: { ar: 'عدن', en: 'Aden' },
    systemSize: '50 kW',
    batteryCapacity: '48 kWh',
    panels: 90,
    date: '2024',
    clientAr: 'مصنع صناعي',
    clientEn: 'Industrial Factory',
    images: [
      'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?w=800&h=600&fit=crop',
    ],
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
    clientAr: 'مبنى تجاري',
    clientEn: 'Commercial Building',
    images: [
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop',
    ],
    features: {
      ar: ['36 لوح شمسي 550W', 'بطاريات Pylontech US5000 × 6', 'انفرتر هجين 20kW', 'لوحة تحكم ذكية'],
      en: ['36 × 550W Solar Panels', 'Pylontech US5000 × 6 Batteries', '20kW Hybrid Inverter', 'Smart Control Panel']
    }
  },
  {
    id: 4,
    titleAr: 'نظام طاقة شمسية منزلي - الحديدة',
    titleEn: 'Home Solar System - Hudaydah',
    descAr: 'نظام طاقة شمسية منزلي مصمم خصيصاً لمناخ الحديدة الحار مع حماية متقدمة',
    descEn: 'Home solar system specially designed for Hudaydah\'s hot climate with advanced protection',
    type: 'residential',
    location: { ar: 'الحديدة', en: 'Hudaydah' },
    systemSize: '5 kW',
    batteryCapacity: '7.2 kWh',
    panels: 10,
    date: '2023',
    clientAr: 'منزل خاص',
    clientEn: 'Private Home',
    images: [
      'https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=800&h=600&fit=crop',
    ],
    features: {
      ar: ['10 ألواح شمسية مقاومة للحرارة', 'بطاريات Pylontech US3000C × 2', 'انفرتر 5kW مع تبريد', 'حماية ضد الملوحة'],
      en: ['10 × Heat-Resistant Solar Panels', 'Pylontech US3000C × 2 Batteries', '5kW Inverter with Cooling', 'Salinity Protection']
    }
  },
  {
    id: 5,
    titleAr: 'نظام طاقة شمسية لمستشفى - صنعاء',
    titleEn: 'Solar System for Hospital - Sana\'a',
    descAr: 'نظام طاقة شمسية ضخم لمستشفى مع تخزين طاقة يضمن استمرارية الخدمة الطبية',
    descEn: 'Large solar system for hospital with energy storage ensuring medical service continuity',
    type: 'institutional',
    location: { ar: 'صنعاء', en: "Sana'a" },
    systemSize: '100 kW',
    batteryCapacity: '200 kWh',
    panels: 180,
    date: '2023',
    clientAr: 'مستشفى خاص',
    clientEn: 'Private Hospital',
    images: [
      'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop',
    ],
    features: {
      ar: ['180 لوح شمسي 550W', 'بنك بطاريات Pylontech ضخم', 'انفرترات متعددة', 'نظام طوارئ احتياطي'],
      en: ['180 × 550W Solar Panels', 'Large Pylontech Battery Bank', 'Multiple Inverters', 'Emergency Backup System']
    }
  },
  {
    id: 6,
    titleAr: 'نظام طاقة شمسية لمزرعة - عدن',
    titleEn: 'Solar System for Farm - Aden',
    descAr: 'نظام طاقة شمسية لتشغيل مضخات الري والمعدات الزراعية بكفاءة عالية',
    descEn: 'Solar system to power irrigation pumps and agricultural equipment efficiently',
    type: 'agricultural',
    location: { ar: 'عدن', en: 'Aden' },
    systemSize: '15 kW',
    batteryCapacity: '21.6 kWh',
    panels: 27,
    date: '2023',
    clientAr: 'مزرعة خاصة',
    clientEn: 'Private Farm',
    images: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&h=600&fit=crop',
    ],
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

const typeColors = {
  residential: 'bg-blue-500',
  commercial: 'bg-purple-500',
  institutional: 'bg-emerald-500',
  agricultural: 'bg-amber-500',
};

export default function Projects() {
  const { t, isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.type === activeFilter);

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: isRTL ? 'الرئيسية' : 'Home', url: '/' },
    { name: isRTL ? 'مشاريعنا' : 'Our Projects', url: '/projects' },
  ]);

  const openGallery = (project: Project, imageIndex: number = 0) => {
    setSelectedProject(project);
    setCurrentImageIndex(imageIndex);
  };

  const closeGallery = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  return (
    <Layout>
      <SEO
        title="Solar Projects Portfolio Yemen | Al-Qatta Solar Energy"
        titleAr="معرض مشاريع الطاقة الشمسية في اليمن | القطاع للطاقة الشمسية"
        description="View our completed solar energy projects in Yemen. Residential, commercial, and industrial solar installations with Pylontech batteries."
        descriptionAr="شاهد مشاريع الطاقة الشمسية المنجزة في اليمن. تركيبات طاقة شمسية سكنية وتجارية وصناعية مع بطاريات Pylontech."
        keywords="solar projects yemen, solar installation portfolio, pylontech projects yemen"
        keywordsAr="مشاريع طاقة شمسية اليمن، معرض تركيبات شمسية، مشاريع بايلونتيك اليمن"
        canonical="/projects"
        jsonLd={[breadcrumbSchema]}
      />

      {/* Hero */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
              <Award className="h-4 w-4" />
              <span>{isRTL ? '+500 مشروع ناجح' : '500+ Successful Projects'}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
              {isRTL ? 'مشاريعنا المنجزة' : 'Our Completed Projects'}
            </h1>
            <p className="text-primary-foreground/80">
              {isRTL 
                ? 'نفخر بتقديم مشاريع عالية الجودة في جميع أنحاء اليمن'
                : 'We are proud to deliver high-quality projects across Yemen'}
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: '500+', labelEn: 'Projects', labelAr: 'مشروع منجز', icon: Award },
              { value: '2 MW+', labelEn: 'Installed', labelAr: 'قدرة مركبة', icon: Zap },
              { value: '18', labelEn: 'Governorates', labelAr: 'محافظة', icon: MapPin },
              { value: '98%', labelEn: 'Satisfaction', labelAr: 'رضا العملاء', icon: CheckCircle },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <stat.icon className="h-5 w-5 text-secondary-foreground/70 mb-1" />
                <div className="text-xl md:text-2xl font-black text-secondary-foreground">{stat.value}</div>
                <div className="text-xs text-secondary-foreground/75">{isRTL ? stat.labelAr : stat.labelEn}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-6 bg-surface border-b border-border sticky top-16 z-40">
        <div className="container">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <Button
              variant={activeFilter === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveFilter('all')}
              className="shrink-0"
            >
              <Filter className="h-4 w-4" />
              {isRTL ? 'الكل' : 'All'}
            </Button>
            {Object.entries(typeLabels).map(([key, label]) => {
              const Icon = typeIcons[key as keyof typeof typeIcons];
              return (
                <Button
                  key={key}
                  variant={activeFilter === key ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveFilter(key)}
                  className="shrink-0"
                >
                  <Icon className="h-4 w-4" />
                  {isRTL ? label.ar : label.en}
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => {
              const TypeIcon = typeIcons[project.type];
              const typeLabel = typeLabels[project.type];
              const typeColor = typeColors[project.type];
              
              return (
                <article 
                  key={project.id}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-300"
                >
                  {/* Image Gallery */}
                  <div className="relative aspect-video bg-muted overflow-hidden">
                    <img 
                      src={project.images[0]} 
                      alt={isRTL ? project.titleAr : project.titleEn}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button 
                        variant="secondary" 
                        size="sm"
                        onClick={() => openGallery(project)}
                      >
                        <ZoomIn className="h-4 w-4" />
                        {isRTL ? 'عرض الصور' : 'View Gallery'}
                        {project.images.length > 1 && ` (${project.images.length})`}
                      </Button>
                    </div>

                    {/* Badges */}
                    <div className="absolute top-3 start-3">
                      <Badge className={cn("text-white", typeColor)}>
                        <TypeIcon className="h-3 w-3" />
                        {isRTL ? typeLabel.ar : typeLabel.en}
                      </Badge>
                    </div>
                    <div className="absolute top-3 end-3">
                      <Badge variant="secondary" className="bg-card/90 backdrop-blur-sm">
                        <Calendar className="h-3 w-3" />
                        {project.date}
                      </Badge>
                    </div>

                    {/* Image count indicator */}
                    {project.images.length > 1 && (
                      <div className="absolute bottom-3 end-3 flex gap-1">
                        {project.images.slice(0, 4).map((_, idx) => (
                          <div 
                            key={idx}
                            className={cn(
                              "h-1.5 w-1.5 rounded-full",
                              idx === 0 ? "bg-white" : "bg-white/50"
                            )}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    {/* Location & Client */}
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>{isRTL ? project.location.ar : project.location.en}</span>
                      </div>
                      {project.clientAr && (
                        <span className="text-xs">{isRTL ? project.clientAr : project.clientEn}</span>
                      )}
                    </div>
                    
                    <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {isRTL ? project.titleAr : project.titleEn}
                    </h3>

                    {/* Specs */}
                    <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-muted/50 rounded-lg">
                      <div className="text-center">
                        <Sun className="h-4 w-4 mx-auto text-secondary mb-0.5" />
                        <div className="text-sm font-bold">{project.systemSize}</div>
                        <div className="text-xs text-muted-foreground">{isRTL ? 'القدرة' : 'Power'}</div>
                      </div>
                      <div className="text-center border-x border-border">
                        <Battery className="h-4 w-4 mx-auto text-primary mb-0.5" />
                        <div className="text-sm font-bold">{project.batteryCapacity}</div>
                        <div className="text-xs text-muted-foreground">{isRTL ? 'التخزين' : 'Storage'}</div>
                      </div>
                      <div className="text-center">
                        <div className="h-4 w-4 mx-auto text-accent mb-0.5 flex items-center justify-center text-sm font-bold">{project.panels}</div>
                        <div className="text-sm font-bold">{isRTL ? 'لوح' : 'Panels'}</div>
                        <div className="text-xs text-muted-foreground">{isRTL ? 'شمسي' : 'Solar'}</div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-1.5 mb-4">
                      {(isRTL ? project.features.ar : project.features.en).slice(0, 2).map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle className="h-3 w-3 text-success shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* View Gallery Button */}
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => openGallery(project)}
                    >
                      <Eye className="h-4 w-4" />
                      {isRTL ? 'عرض التفاصيل' : 'View Details'}
                    </Button>
                  </div>
                </article>
              );
            })}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="text-muted-foreground">
                {isRTL ? 'لا توجد مشاريع في هذا التصنيف' : 'No projects in this category'}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="container">
          <div className="bg-secondary rounded-2xl p-8 md:p-10 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-secondary-foreground mb-3">
              {isRTL ? 'هل تريد مشروعاً مثل هذه المشاريع؟' : 'Want a Project Like These?'}
            </h2>
            <p className="text-secondary-foreground/80 mb-6 max-w-lg mx-auto text-sm">
              {isRTL 
                ? 'تواصل معنا الآن للحصول على استشارة مجانية وتصميم نظام مخصص لاحتياجاتك'
                : 'Contact us now for a free consultation and a custom system design for your needs'}
            </p>
            <Button asChild size="lg" className="bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90">
              <a href="https://wa.me/967777777777" target="_blank" rel="noopener noreferrer">
                <Phone className="h-4 w-4" />
                {isRTL ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox Gallery Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
          onClick={closeGallery}
        >
          <button 
            className="absolute top-4 end-4 text-background hover:text-secondary transition-colors"
            onClick={closeGallery}
          >
            <X className="h-8 w-8" />
          </button>

          <div 
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Main Image */}
            <div className="relative aspect-video bg-muted rounded-lg overflow-hidden mb-4">
              <img 
                src={selectedProject.images[currentImageIndex]}
                alt={isRTL ? selectedProject.titleAr : selectedProject.titleEn}
                className="w-full h-full object-contain"
              />
              
              {/* Navigation Arrows */}
              {selectedProject.images.length > 1 && (
                <>
                  <button 
                    className="absolute start-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 hover:bg-background flex items-center justify-center transition-colors"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button 
                    className="absolute end-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 hover:bg-background flex items-center justify-center transition-colors"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}

              {/* Image Counter */}
              <div className="absolute bottom-4 start-1/2 -translate-x-1/2 bg-background/80 px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {selectedProject.images.length}
              </div>
            </div>

            {/* Thumbnails */}
            {selectedProject.images.length > 1 && (
              <div className="flex justify-center gap-2">
                {selectedProject.images.map((img, idx) => (
                  <button
                    key={idx}
                    className={cn(
                      "h-16 w-24 rounded-md overflow-hidden border-2 transition-colors",
                      idx === currentImageIndex ? "border-secondary" : "border-transparent opacity-60 hover:opacity-100"
                    )}
                    onClick={() => setCurrentImageIndex(idx)}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Project Info */}
            <div className="mt-4 text-center text-background">
              <h3 className="text-lg font-bold">
                {isRTL ? selectedProject.titleAr : selectedProject.titleEn}
              </h3>
              <div className="flex items-center justify-center gap-4 text-sm text-background/70 mt-2">
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {isRTL ? selectedProject.location.ar : selectedProject.location.en}
                </span>
                <span className="flex items-center gap-1">
                  <Sun className="h-4 w-4" />
                  {selectedProject.systemSize}
                </span>
                <span className="flex items-center gap-1">
                  <Battery className="h-4 w-4" />
                  {selectedProject.batteryCapacity}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
