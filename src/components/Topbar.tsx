import { Mail, Phone, Facebook, X , Linkedin, Instagram } from 'lucide-react';
import { BsTwitterX } from "react-icons/bs";
interface TopbarProps {
  isVisible: boolean;
}

const Topbar = ({ isVisible }: TopbarProps) => {
  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-50 bg-secondary/80 backdrop-blur-md border-b border-border/50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="section-container py-2">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <div className="flex items-center gap-4 sm:gap-6 text-sm text-muted-foreground">
            <a href="mailto:info@amsoftware.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">info@amsoftware.com</span>
            </a>
            <a href="tel:+914048532637" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">+91 40 4853 2637</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            {[
              { icon: Facebook, href: '#' },
              { icon: BsTwitterX, href: '#' },
              { icon: Linkedin, href: '#' },
              { icon: Instagram, href: '#' },
            ].map((social, index) => (
              <a 
                key={index}
                href={social.href}
                className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
