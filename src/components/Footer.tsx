import React from 'react';
import { Github, Linkedin, Instagram, Mail, ArrowUpRight } from 'lucide-react';
import logoImg from '../assets/veyqora-logo.png';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    if (href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      const topOffset = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#080B14] border-t border-white/[0.08] text-[#A7AFBE] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08]">
          {/* Company Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#0D111F] border border-white/10 flex items-center justify-center overflow-hidden">
                <img src={logoImg} alt="Veyqora Labs" className="w-full h-full object-cover p-1 hidden" onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }} />
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6L12 19L20 6" stroke="url(#ft_grad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 6L12 13L16 6" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <defs>
                    <linearGradient id="ft_grad" x1="4" y1="6" x2="20" y2="19" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#0066FF"/>
                      <stop offset="1" stopColor="#7B3FF2"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Veyqora<span className="text-[#A7AFBE] font-normal ml-1">Labs</span>
              </span>
            </div>

            <p className="text-sm font-semibold text-white">
              Intelligent Software. Built for Business.
            </p>
            
            <p className="text-xs text-[#A7AFBE] max-w-sm leading-relaxed">
              AI-powered automation, custom software, and MVP development for modern businesses.
            </p>

            {/* Operational Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All Systems Operational</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: 'Services', href: '#services' },
                { name: 'Work', href: '#work' },
                { name: 'Process', href: '#process' },
                { name: 'About', href: '#about' },
                { name: 'Contact', href: '#contact' },
              ].map((item) => (
                <li key={item.name}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(item.href)}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Social Links & Direct Email */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
              Official Channels
            </h4>

            <div className="space-y-2.5 text-sm">
              <a
                href="mailto:veyqora.labs@gmail.com"
                className="flex items-center gap-2.5 text-[#A7AFBE] hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 text-[#0066FF]" />
                <span>veyqora.labs@gmail.com</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href="https://www.linkedin.com/company/veyqora-labs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[#A7AFBE] hover:text-white transition-colors group"
              >
                <Linkedin className="w-4 h-4 text-[#0066FF]" />
                <span>LinkedIn / veyqora-labs</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href="https://www.instagram.com/veyqora.labs/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[#A7AFBE] hover:text-white transition-colors group"
              >
                <Instagram className="w-4 h-4 text-[#0066FF]" />
                <span>Instagram / veyqora.labs</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href="https://github.com/veyqora-labs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[#A7AFBE] hover:text-white transition-colors group"
              >
                <Github className="w-4 h-4 text-[#0066FF]" />
                <span>GitHub / veyqora-labs</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A7AFBE]/70">
          <div>
            © {currentYear} Veyqora Labs. All rights reserved.
          </div>
          <div className="font-mono">
            Intelligent Software. Built for Business.
          </div>
        </div>
      </div>
    </footer>
  );
};
