import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/i18n/LanguageContext';
import { Battery, Sun, Zap, ArrowLeft, ArrowRight, Settings, Cable } from 'lucide-react';
import { cn } from '@/lib/utils';
import SEO, { createBreadcrumbSchema, createProductSchema } from '@/components/SEO';

export default function Products() {
  const { t, isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;
  
  const categories = [
    { 
      key: 'products.categories.pylontech', 
      icon: Battery, 
      highlight: true,
      desc: isRTL ? 'بطاريات ليثيوم فوسفات الحديد الأصلية من Pylontech' : 'Original Pylontech LiFePO4 batteries',
      products: ['US2000C', 'US3000C', 'US5000', 'Force H1', 'Force H2']
    },
    { 
      key: 'products.categories.lithium', 
      icon: Battery,
      desc: isRTL ? 'بطاريات ليثيوم عالية الأداء من أفضل العلامات التجارية' : 'High-performance lithium batteries from top brands',
      products: ['LiFePO4 100Ah', 'LiFePO4 200Ah', 'LiFePO4 300Ah']
    },
    { 
      key: 'products.categories.panels', 
      icon: Sun,
      desc: isRTL ? 'ألواح شمسية أحادية ومتعددة البلورات بكفاءة عالية' : 'High-efficiency mono and poly crystalline solar panels',
      products: ['Mono 550W', 'Mono 450W', 'Poly 330W']
    },
    { 
      key: 'products.categories.inverters', 
      icon: Zap,
      desc: isRTL ? 'انفرترات هجينة وخارج الشبكة من أفضل الماركات' : 'Hybrid and off-grid inverters from top brands',
      products: ['Hybrid 5kW', 'Hybrid 8kW', 'Off-grid 3kW']
    },
    { 
      key: 'products.categories.controllers', 
      icon: Settings,
      desc: isRTL ? 'منظمات شحن MPPT و PWM بأحجام مختلفة' : 'MPPT and PWM charge controllers in various sizes',
      products: ['MPPT 60A', 'MPPT 80A', 'MPPT 100A']
    },
    { 
      key: 'products.categories.accessories', 
      icon: Cable,
      desc: isRTL ? 'كيبلات، موصلات، وملحقات أنظمة الطاقة الشمسية' : 'Cables, connectors, and solar system accessories',
      products: ['MC4 Connectors', 'Solar Cables', 'Mounting Systems']
    },
  ];

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: isRTL ? 'الرئيسية' : 'Home', url: '/' },
    { name: isRTL ? 'منتجاتنا' : 'Our Products', url: '/products' },
  ]);

  const productSchemas = categories.slice(0, 4).map(cat => createProductSchema({
    name: t(cat.key),
    description: cat.desc,
    brand: cat.key.includes('pylontech') ? 'Pylontech' : 'Al-Qatta',
    category: 'Solar Energy Equipment'
  }));

  return (
    <Layout>
      <SEO
        title="Solar Products in Yemen | Pylontech Batteries, Solar Panels, Inverters"
        titleAr="منتجات الطاقة الشمسية في اليمن | بطاريات Pylontech، ألواح شمسية، انفرترات"
        description="Buy solar energy products in Yemen: Pylontech batteries, lithium batteries, solar panels, inverters, charge controllers. Original products with warranty."
        descriptionAr="اشتري منتجات الطاقة الشمسية في اليمن: بطاريات Pylontech، بطاريات ليثيوم، ألواح شمسية، انفرترات، منظمات شحن. منتجات أصلية مع ضمان."
        keywords="buy solar panels yemen, pylontech batteries yemen, solar inverter yemen, lithium battery yemen, charge controller yemen, solar equipment yemen"
        keywordsAr="شراء ألواح شمسية اليمن، بطاريات بايلونتيك اليمن، انفرتر شمسي اليمن، بطارية ليثيوم اليمن، منظم شحن اليمن، معدات طاقة شمسية اليمن"
        canonical="/products"
        jsonLd={[breadcrumbSchema, ...productSchemas]}
      />

      {/* Hero */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('products.title')}</h1>
            <p className="text-lg opacity-90">{t('products.subtitle')}</p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-surface">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <article 
                key={category.key} 
                className={cn(
                  "group relative overflow-hidden rounded-xl p-8 transition-all hover:shadow-xl cursor-pointer", 
                  category.highlight 
                    ? "bg-primary text-primary-foreground hover:-translate-y-1" 
                    : "bg-card border border-border hover:border-primary/50 hover:-translate-y-1"
                )}
              >
                {category.highlight && (
                  <div className="absolute top-3 end-3 px-2 py-1 bg-secondary text-secondary-foreground text-xs font-bold rounded">
                    {isRTL ? 'وكيل معتمد' : 'Authorized'}
                  </div>
                )}
                
                <div className={cn(
                  "inline-flex items-center justify-center h-16 w-16 rounded-xl mb-5 transition-transform group-hover:scale-110",
                  category.highlight 
                    ? "bg-secondary text-secondary-foreground" 
                    : "bg-primary/10 text-primary"
                )}>
                  <category.icon className="h-8 w-8" />
                </div>
                
                <h2 className="text-xl font-bold mb-3">{t(category.key)}</h2>
                <p className={cn("text-sm mb-4", category.highlight ? "opacity-80" : "text-muted-foreground")}>
                  {category.desc}
                </p>

                {/* Sample products */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {category.products.slice(0, 3).map((product, i) => (
                    <span 
                      key={i} 
                      className={cn(
                        "text-xs px-2 py-1 rounded",
                        category.highlight 
                          ? "bg-primary-foreground/20" 
                          : "bg-muted"
                      )}
                    >
                      {product}
                    </span>
                  ))}
                </div>

                <div className={cn(
                  "flex items-center gap-1 text-sm font-medium",
                  category.highlight ? "text-secondary" : "text-primary"
                )}>
                  {t('common.viewDetails')}
                  <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </div>
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
              {isRTL ? 'هل تبحث عن منتج معين؟' : 'Looking for a Specific Product?'}
            </h2>
            <p className="text-secondary-foreground/80 mb-6 max-w-xl mx-auto">
              {isRTL 
                ? 'تواصل معنا للاستفسار عن أي منتج والحصول على أفضل الأسعار'
                : 'Contact us to inquire about any product and get the best prices'}
            </p>
            <a 
              href="https://wa.me/967777777777" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-foreground text-background hover:bg-foreground/90 px-8 py-3 rounded-md font-medium transition-colors"
            >
              {t('contact.whatsapp')}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
