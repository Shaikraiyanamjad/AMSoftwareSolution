import { useEffect, useRef, useState } from 'react';
import { 
  Globe, 
  Smartphone, 
  Palette, 
  ShoppingCart, 
  TrendingUp, 
  Cloud,
  ArrowRight
} from 'lucide-react';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies for optimal performance and scalability.',
      features: ['React & Next.js', 'Node.js & Python', 'WordPress & CMS'],
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver seamless user experiences across all devices.',
      features: ['iOS & Android', 'React Native', 'Flutter'],
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that combine aesthetics with functionality for maximum engagement.',
      features: ['User Research', 'Wireframing', 'Prototyping'],
    },
    {
      icon: Cloud,
      title: 'Cloud & Database',
      description: 'Secure, scalable cloud infrastructure with expert IT consulting for modern digital systems.',
      features: ['AWS & GCP', 'Mongo DB', 'SQL Databases'],
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Development',
      description: 'Complete e-commerce solutions that drive sales and provide exceptional shopping experiences.',
      features: ['Shopify & WooCommerce', 'Payment Integration', 'Inventory Management'],
    },
    {
      icon: TrendingUp,
      title: 'SEO & Digital Marketing',
      description: 'Data-driven marketing strategies that increase visibility, traffic, and conversions.',
      features: ['SEO Optimization', 'PPC Campaigns', 'Social Media Marketing'],
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            What We <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs. From concept to deployment, 
            we deliver excellence at every step.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group glass-card rounded-2xl p-6 lg:p-8 ${
                isVisible ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-primary font-medium text-sm group/link"
              >
                Learn More 
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 ${isVisible ? 'animate-fade-up delay-600' : 'opacity-0'}`}>
          <p className="text-muted-foreground mb-4">
            Need a custom solution? Let's discuss your project requirements.
          </p>
          <a href="#contact" className="btn-primary inline-flex items-center gap-2">
            <span className="relative z-10">Start Your Project</span>
            <ArrowRight className="w-5 h-5 relative z-10" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
