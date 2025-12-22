import { useEffect, useRef, useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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

  const faqs = [
    {
      question: 'What services does AM Software Solution provide?',
      answer: 'We offer comprehensive digital solutions including web development, mobile app development, UI/UX design, e-commerce development, SEO & digital marketing, and cloud & IT solutions. Our team specializes in creating custom solutions tailored to your specific business needs.',
    },
    {
      question: 'How long does it typically take to complete a project?',
      answer: 'Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while complex web applications or mobile apps can take 3-6 months. We provide detailed timelines during our initial consultation and keep you updated throughout the development process.',
    },
    {
      question: 'What is your development process like?',
      answer: 'We follow an agile development methodology that includes: Discovery & Planning, Design & Prototyping, Development, Testing & QA, Deployment, and ongoing Support & Maintenance. This ensures transparent communication and allows for flexibility throughout the project.',
    },
    {
      question: 'Do you provide post-launch support and maintenance?',
      answer: 'Absolutely! We offer comprehensive post-launch support packages that include bug fixes, security updates, performance optimization, and feature enhancements. Our team is available to ensure your application runs smoothly long after launch.',
    },
    {
      question: 'How do you handle project pricing?',
      answer: 'We offer flexible pricing models including fixed-price projects, hourly rates, and dedicated team arrangements. After understanding your requirements, we provide a detailed proposal with transparent pricing. We believe in fair pricing that reflects the value we deliver.',
    },
    {
      question: 'Can you work with our existing team or systems?',
      answer: 'Yes, we frequently collaborate with in-house teams and integrate with existing systems. Whether you need us to lead the project, augment your team, or work alongside your developers, we adapt to your preferred working arrangement.',
    },
    {
      question: 'What technologies do you specialize in?',
      answer: 'We work with modern technologies including React, Next.js, Vue.js, Node.js, Python, React Native, Flutter, AWS, Azure, and more. Our team stays current with industry trends to deliver cutting-edge solutions that stand the test of time.',
    },
    {
      question: 'How do we get started with a project?',
      answer: 'Getting started is easy! Simply contact us through our website form, email, or phone. We\'ll schedule a free consultation to discuss your requirements, goals, and vision. From there, we\'ll provide a proposal and project roadmap to kickstart your digital transformation.',
    },
  ];

  return (
    <section id="faq" ref={sectionRef} className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services, process, and working with us.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`glass-card rounded-2xl overflow-hidden ${
                  isVisible ? 'animate-fade-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                  <div 
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      openIndex === index 
                        ? 'bg-primary text-primary-foreground rotate-180' 
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {openIndex === index ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 ${isVisible ? 'animate-fade-up delay-500' : 'opacity-0'}`}>
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <a href="#contact" className="btn-primary inline-block">
            <span className="relative z-10">Contact Us</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
