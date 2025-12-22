import { useEffect, useRef, useState } from 'react';
import { Target, Eye, Rocket, Users, Award, Clock, CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ years: 0, projects: 0, clients: 0, awards: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const targets = { years: 8, projects: 200, clients: 120, awards: 15 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);

      setCounters({
        years: Math.round(targets.years * eased),
        projects: Math.round(targets.projects * eased),
        clients: Math.round(targets.clients * eased),
        awards: Math.round(targets.awards * eased),
      });

      if (step >= steps) clearInterval(timer);
    }, interval);
  };

  const stats = [
    { icon: Clock, value: counters.years, suffix: '+', label: 'Years of Expertise' },
    { icon: Rocket, value: counters.projects, suffix: '+', label: 'Web Projects Delivered' },
    { icon: Users, value: counters.clients, suffix: '+', label: 'Satisfied Clients' },
    { icon: Award, value: counters.awards, suffix: '+', label: 'Industry Recognitions' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To craft intuitive UI/UX designs and high-performance web solutions that enhance usability, engagement, and business growth.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be a trusted digital partner known for clean design, scalable web development, and data-driven SEO strategies.'
    },
    {
      icon: Rocket,
      title: 'Our Goal',
      description: 'To redesign and develop modern websites that load fast, rank higher, and deliver seamless user experiences.'
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary mb-4">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            We Are <span className="gradient-text">AM Software Solution</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A focused team of UI/UX designers, web developers, and SEO specialists building
            visually appealing, performance-driven digital products.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image Side */}
          <div className={`relative ${isVisible ? 'animate-slide-right delay-200' : 'opacity-0'}`}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass-card p-1">
              <div className="absolute inset-0 bg-primary-gradient opacity-10" />
              <div className="relative h-full rounded-xl overflow-hidden bg-gradient-to-br from-navy-700 to-navy-800 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary-gradient flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-2xl sm:text-4xl">AM</span>
                  </div>
                  <h3 className="text-sm sm:text-2xl font-bold text-foreground mb-2">Design-Driven Development</h3>
                  <p className="text-muted-foreground">Modern UI, Clean Code, Scalable Database</p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-14 -right-4 sm:bottom-8 sm:right-8 glass-card rounded-xl p-4 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="font-bold text-foreground">SEO Optimized</div>
                  <div className="text-sm text-muted-foreground">Performance Focused</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-left delay-300' : 'opacity-0'}`}>
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Designing & Developing <span className="gradient-text">Impactful Web Experiences</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                At AM Software Solution, we specialize in UI/UX design, website redesign,
                and full-stack web development backed by database.
                Every interface we design is user-centric and conversion-focused.
              </p>
              <p className="text-muted-foreground">
                From SEO-optimized landing pages to scalable web applications,
                we ensure fast load times, clean architecture, and seamless performance
                across all devices.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4">
              {values.map((item, index) => (
                <div 
                  key={index}
                  className="flex gap-4 p-4 rounded-xl glass-card group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 ${isVisible ? 'animate-fade-up delay-400' : 'opacity-0'}`}>
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="glass-card rounded-2xl p-6 text-center group"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold gradient-text counter-value">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
