import { ArrowRight, Play } from 'lucide-react';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-40 pb-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(217_33%_20%/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(217_33%_20%/0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div 
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm ${
                isVisible ? 'animate-fade-up' : ''
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-muted-foreground">Leading Web Development Company</span>
            </div>

            <h1 
              className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight ${
                isVisible ? 'animate-fade-up delay-100' : ''
              }`}
            >
              We Build{' '}
              <span className="gradient-text">Digital</span>
              <br />
              Experiences That
              <br />
              <span className="gradient-text">Matter</span>
            </h1>

            <p 
              className={`text-lg sm:text-xl text-muted-foreground max-w-xl ${
                isVisible ? 'animate-fade-up delay-200' : ''
              }`}
            >
              Transform your business with cutting-edge web solutions. We craft innovative, 
              scalable, and user-centric digital products that drive growth and success.
            </p>

            <div 
              className={`flex flex-col sm:flex-row gap-4 ${
                isVisible ? 'animate-fade-up delay-300' : ''
              }`}
            >
              <a href="#contact" className="btn-primary flex items-center justify-center gap-2 group">
                <span className="relative z-10">Get Free Quote</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#portfolio" className="btn-outline flex items-center justify-center gap-2">
                <Play className="w-4 h-4" />
                View Our Work
              </a>
            </div>

            {/* Stats */}
            <div 
              className={`flex flex-wrap gap-8 pt-4 ${
                isVisible ? 'animate-fade-up delay-400' : ''
              }`}
            >
              {[
                { number: '250+', label: 'Projects Completed' },
                { number: '100+', label: 'Happy Clients' },
                { number: '10+', label: 'Years Experience' },
              ].map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Animated Illustration */}
          <div 
            className={`relative hidden lg:block ${
              isVisible ? 'animate-slide-left delay-300' : 'opacity-0'
            }`}
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Floating Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 glass-card rounded-2xl animate-float flex items-center justify-center" style={{ animationDelay: '0s' }}>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">AI</div>
                  <div className="text-xs text-muted-foreground">Powered</div>
                </div>
              </div>

              <div className="absolute top-1/4 left-0 w-28 h-28 glass-card rounded-2xl animate-float flex items-center justify-center" style={{ animationDelay: '1s' }}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">99%</div>
                  <div className="text-xs text-muted-foreground">Uptime</div>
                </div>
              </div>

              <div className="absolute bottom-1/4 right-0 w-36 h-36 glass-card rounded-2xl animate-float flex items-center justify-center" style={{ animationDelay: '2s' }}>
                <div className="text-center">
                  <div className="text-4xl">⚡</div>
                  <div className="text-sm text-muted-foreground">Fast Delivery</div>
                </div>
              </div>

              <div className="absolute bottom-0 left-1/4 w-32 h-32 glass-card rounded-2xl animate-float flex items-center justify-center" style={{ animationDelay: '1.5s' }}>
                <div className="text-center">
                  <div className="text-4xl">🛡️</div>
                  <div className="text-sm text-muted-foreground">Secure</div>
                </div>
              </div>

              {/* Central Element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-primary-gradient opacity-20 animate-pulse-glow" />
                <div className="absolute w-40 h-40 rounded-full bg-primary-gradient opacity-30 animate-ping" style={{ animationDuration: '3s' }} />
                <div className="absolute w-24 h-24 rounded-full bg-primary-gradient flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">AM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
