import React from 'react';
import { Crown, MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  return (
    <footer className="bg-[#030305] border-t border-gold-500/20 text-gray-400 relative z-20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-gray-800/80">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 p-[1px]">
                <div className="w-full h-full bg-[#0a0a0f] rounded-[11px] flex items-center justify-center">
                  <Crown className="w-5 h-5 text-gold-400" />
                </div>
              </div>
              <span className="font-cinzel font-extrabold text-xl tracking-wider gold-gradient-text">
                K.B. ROYAL
              </span>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Mumbai’s premier luxury real estate advisory and investors clinic. Specializing in high-ROI residential penthouses, commercial assets, developer pre-launches, and global NRI wealth management.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/kbroyal_mumbai"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-gold-500/10 hover:bg-gold-500 text-gold-400 hover:text-obsidian-950 transition-all border border-gold-500/20 flex items-center gap-2 text-xs font-bold"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>@kbroyal_mumbai</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <a
                href="https://share.google/QXNMZ1I6IQFyh061M"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-gold-500/10 hover:bg-gold-500 text-gold-400 hover:text-obsidian-950 transition-all border border-gold-500/20 flex items-center gap-2 text-xs font-bold"
              >
                <MapPin className="w-4 h-4" />
                <span>Google Business Location</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#hero" className="hover:text-gold-400 transition-colors">Overview & Hero</a></li>
              <li><a href="#showcase" className="hover:text-gold-400 transition-colors">3D Scroll Perspective World</a></li>
              <li><a href="#calculator" className="hover:text-gold-400 transition-colors">Investors ROI Calculator</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Services Spectrum</a></li>
              <li><a href="#properties" className="hover:text-gold-400 transition-colors">Prime Property Showcase</a></li>
              <li><a href="#nri" className="hover:text-gold-400 transition-colors">NRI Global Investment Desk</a></li>
            </ul>
          </div>

          {/* Contact & Location Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider">
              Clinic Office Location
            </h4>

            <div className="text-xs space-y-2 leading-relaxed">
              <p className="flex items-start gap-2 text-gray-300">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>
                  <strong>K.B. ROYAL REAL ESTATE AND INVESTORS CLINIC</strong><br />
                  Shop No. 9, Kanakia Ostwal Point, Kanakia Road,<br />
                  Mira Road East, Mumbai, Maharashtra 401107, India.
                </span>
              </p>

              <p className="flex items-center gap-2 text-gray-300 pt-1">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <span>+91 98200 88888 / +91 98200 99999</span>
              </p>

              <p className="flex items-center gap-2 text-gray-300">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <span>contact@kbroyal.com</span>
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="px-5 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-obsidian-950 font-bold text-xs uppercase tracking-wider transition-all"
              >
                Schedule Office Visit
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} K.B. ROYAL REAL ESTATE AND INVESTORS CLINIC. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with Framer Motion & 3D Scroll Physics</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
