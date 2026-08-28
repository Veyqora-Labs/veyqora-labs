import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Button } from './Button';
import logoImg from '../assets/veyqora-logo.png';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '#top' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    setMobileMenuOpen(false);
    const target = document.querySelector('#contact');
    if (target) {
      const topOffset = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080B14]/90 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a
            href="#top"
            onClick={(e) => handleNavClick(e, '#top')}
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF] rounded-lg p-1"
          >
            <div className="relative w-8 h-8 rounded-lg bg-[#080B14] border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-[#0066FF]/50 transition-colors">
              <img
                src={logoImg}
                alt="Veyqora Labs"
                className="w-full h-full object-cover p-1 hidden"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              {/* Veyqora Original SVG Logo */}
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6L12 19L20 6" stroke="url(#nav_grad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 6L12 13L16 6" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="nav_grad" x1="4" y1="6" x2="20" y2="19" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0066FF"/>
                    <stop offset="1" stopColor="#7B3FF2"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-white group-hover:text-[#0066FF] transition-colors">
                Veyqora<span className="text-[#A7AFBE] font-normal ml-1">Labs</span>
              </span>
            </div>
          </a>

          {/* Desktop Nav Links: Home, Services, Work, Process, About, Contact */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.08] px-4 py-1.5 rounded-full backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs lg:text-sm font-medium text-[#A7AFBE] hover:text-white px-3.5 py-1.5 rounded-full hover:bg-white/[0.06] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              size="sm"
              variant="primary"
              icon={<ArrowUpRight className="w-4 h-4" />}
              onClick={scrollToContact}
            >
              Start a Project
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/[0.05] border border-white/10 text-[#A7AFBE] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF]"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-[#080B14]/95 backdrop-blur-xl border-b border-white/[0.08] overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-base font-medium text-[#A7AFBE] hover:text-white py-2 px-3 rounded-lg hover:bg-white/[0.06] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="pt-4 border-t border-white/[0.08]">
                <Button
                  className="w-full justify-center"
                  size="md"
                  variant="primary"
                  icon={<ArrowUpRight className="w-4 h-4" />}
                  onClick={scrollToContact}
                >
                  Start a Project
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
