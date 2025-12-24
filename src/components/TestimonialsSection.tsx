import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
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

  const testimonials = [
    {
  name: 'Amit Verma',
  role: 'Founder, TechNova Solutions (India)',
  content: 'AM Software Solution built a high-performance website for our company that looks great and works flawlessly across all devices. Their development approach is modern, scalable, and very reliable.',
  rating: 5,
  avatar: 'AV',
},
{
  name: 'Neha Sharma',
  role: 'Marketing Head, UrbanMart',
  content: 'Our website traffic and engagement improved significantly after their mobile responsiveness and UI/UX improvements. The site now feels fast, clean, and easy to use on phones and tablets.',
  rating: 5,
  avatar: 'NS',
},
{
  name: 'Rohit Mehta',
  role: 'Co-Founder, RetailEase',
  content: 'They delivered a complete e-commerce solution with smooth payment integration and easy inventory management. Sales increased within weeks of launch. Highly professional team.',
  rating: 5,
  avatar: 'RM',
},
{
  name: 'Priya Nair',
  role: 'Product Manager, FinCore Systems',
  content: 'Their cloud and database expertise helped us build a secure and scalable backend. The system performs exceptionally well even under high traffic. Clean architecture and great documentation.',
  rating: 5,
  avatar: 'PN',
},
{
  name: 'Suresh Patel',
  role: 'Director, GrowthSpark Digital',
  content: 'AM Software Solution handled our SEO and digital marketing with a clear strategy. We saw steady growth in search rankings, website traffic, and qualified leads.',
  rating: 5,
  avatar: 'SP',
},
{
  name: 'Anjali Kapoor',
  role: 'Business Owner, Kapoor Interiors',
  content: 'They redesigned our website with a strong focus on UI/UX and responsiveness. Clients now find it easier to explore our services, and inquiries have increased noticeably.',
  rating: 5,
  avatar: 'AK',
},

  ];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued clients have to say about working with us.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className={`max-w-4xl mx-auto ${isVisible ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
          <div className="relative">
            {/* Main Card */}
            <div className="glass-card rounded-3xl p-8 md:p-12">
              {/* Quote Icon */}
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                <Quote className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <div 
                className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
              >
                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                  "{testimonials[currentIndex].content}"
                </p>

                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary-gradient flex items-center justify-center text-primary-foreground font-bold text-lg">
                      {testimonials[currentIndex].avatar}
                    </div>
                    <div>
                      <div className="font-bold text-foreground">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonials[currentIndex].role}
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1">
                    {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-foreground hover:bg-muted/50 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAnimating(true);
                      setCurrentIndex(index);
                      setTimeout(() => setIsAnimating(false), 500);
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'w-8 bg-primary'
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-foreground hover:bg-muted/50 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
