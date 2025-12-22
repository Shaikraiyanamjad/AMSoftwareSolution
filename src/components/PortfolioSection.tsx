import { useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';

type Project = [
  number,
  string,
  string,
  string,
  string[],
  string,
  string // website link
];

const projects: Project[] = [
  [1,'AJH Contractors','web','Professional construction and renovation website with modern UI and fast performance.',['Next.js'],'/ajh.png','https://ajhcontractors.com'],
  [2,'Infinity Construction NYC','web','Construction company website focused on NYC projects with clean layout and strong branding.',['Next.js'],'/infinity.png','https://infinityconstructionnyc.com'],
  [3,'JS Aldo','web','Business website built with Next.js showcasing services and company profile.',['Next.js'],'/jsaldo.png','https://jsaldoconstruction.com'],
  [4,'Lucianna Law','web','Law firm website with elegant design, responsive layout, and clear content structure.',['HTML','CSS','JavaScript'],'/lucianna.png','https://luciannalaw.com'],
  [5,'Nick Roofing','web','Roofing services website optimized for speed, SEO, and lead generation.',['Next.js'],'/nick.png','https://nickroofing.com'],
  [6,'SAS Roofing & Waterproofing','web','Corporate roofing and waterproofing website with modern UI and animations.',['Next.js'],'/sas.png','https://sasroofingwaterproofing.com'],
  [7,'Taskforce Interiors','web','Interior design company website with premium visuals and structured sections.',['Next.js'],'/taskforce.png','https://taskforceinteriors.com'],
  [8,'Turbo Shop','web','Automotive turbo rebuild and repair services website with bold branding.',['Next.js'],'/turbo.png','https://turboshop.ca'],
];

export default function PortfolioSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.1 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" ref={ref} className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="section-container relative z-10">
        <div className={`text-center mb-12 ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary mb-4">
            Our Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Recent <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our latest work and see how we've helped businesses transform their digital presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map(([id, title, , desc, tags, img, link], i) => (
            <div
              key={id}
              className={`group rounded-2xl overflow-hidden glass-card ${
                visible ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="relative aspect-[4/2] overflow-hidden bg-muted flex items-center justify-center">
                <img src={img} alt={title} className="w-full h-full object-contain" />

                {/* WEBSITE LINK ONLY */}
                <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-bold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 text-xs rounded-md bg-muted/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 ${visible ? 'animate-fade-up delay-500' : 'opacity-0'}`}>
          <a href="#contact" className="btn-outline">View All Projects</a>
        </div>
      </div>
    </section>
  );
}
      