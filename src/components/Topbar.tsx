import { Mail, Phone, Facebook, Linkedin, Instagram } from 'lucide-react';
import { BsTwitterX } from 'react-icons/bs';

interface TopbarProps {
  isVisible: boolean;
}

const socials = [
  { icon: Facebook, href: '#' },
  { icon: BsTwitterX, href: '#' },
  { icon: Linkedin, href: '#' },
  { icon: Instagram, href: '#' },
];

const Topbar = ({ isVisible }: TopbarProps) => {
  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="bg-white backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="section-container py-2">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">

            {/* Contact Info */}
            <div className="flex items-center gap-5 text-sm text-slate-700">
              <a
                href="mailto:info@amsoftware.com"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-600" />
                <span className="hidden sm:inline">
                  info@amsoftware.com
                </span>
              </a>

              <span className="hidden sm:block h-4 w-px bg-slate-300" />

              <a
                href="tel:+914048532637"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 text-slate-600" />
                <span className="hidden sm:inline">
                  +91 40 4853 2637
                </span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label="Social link"
                  className="
                    w-8 h-8 rounded-full
                    border border-slate-200
                    bg-white
                    flex items-center justify-center
                    text-slate-600
                    hover:bg-primary
                    hover:text-white
                    hover:border-primary
                    transition-all duration-300
                  "
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
