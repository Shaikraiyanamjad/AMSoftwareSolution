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
  answer: 'We provide end-to-end digital solutions including website development, mobile-responsive design, UI/UX design, e-commerce development, SEO & digital marketing, and cloud & database solutions. All our services are tailored to meet your specific business goals.',
},
{
  question: 'How long does it typically take to complete a project?',
  answer: 'Project timelines depend on the scope and complexity. A standard business website usually takes 2–4 weeks, while larger web platforms or e-commerce solutions may take 6–12 weeks. We share a clear timeline before starting and keep you informed at every stage.',
},
{
  question: 'What is your development process like?',
  answer: 'Our process includes requirement analysis, UI/UX design, development, testing, deployment, and ongoing support. We follow a structured and transparent workflow to ensure quality, timely delivery, and smooth collaboration.',
},
{
  question: 'Do you provide post-launch support and maintenance?',
  answer: 'Yes, we offer reliable post-launch support including bug fixes, performance optimization, security updates, and feature enhancements. Our maintenance plans ensure your website remains fast, secure, and up to date.',
},
{
  question: 'How do you handle project pricing?',
  answer: 'We offer flexible pricing based on project requirements, including fixed pricing and hourly models. After understanding your needs, we provide a detailed proposal with transparent costs and no hidden charges.',
},
{
  question: 'Can you work with our existing website or systems?',
  answer: 'Absolutely. We can improve, redesign, or extend your existing website and integrate with current systems. We also collaborate smoothly with in-house teams when required.',
},
{
  question: 'What technologies do you specialize in?',
  answer: 'We specialize in modern web technologies such as React, Next.js, Node.js, Python, WordPress, Shopify, AWS, cloud databases, and SEO tools. We choose the right technology stack based on your project needs.',
},
{
  question: 'How do we get started with a project?',
  answer: 'You can get started by contacting us through our website, email, or phone. We offer a free consultation to understand your requirements and then share a clear project plan to move forward.',
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
