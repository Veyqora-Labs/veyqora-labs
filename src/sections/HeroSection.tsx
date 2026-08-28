import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronRight, Bot } from 'lucide-react';
import { Button } from '../components/Button';
import { HeroVisual } from '../components/HeroVisual';

export const HeroSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <section id="top" className="relative min-h-[90vh] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden flex items-center">
      {/* Background Micro-grid & Atmospheric Lighting */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#0066FF]/10 to-[#7B3FF2]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* AI Agency Studio Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#A7AFBE]"
            >
              <Bot className="w-3.5 h-3.5 text-[#0066FF]" />
              <span className="text-white font-medium">AI Agency & Software Studio</span>
              <span className="text-[#0066FF] font-semibold">/// Veyqora Labs</span>
            </motion.div>

            {/* Primary Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.1]"
            >
              Intelligent Software.{' '}
              <span className="bg-gradient-to-r from-[#0066FF] via-[#5C66FF] to-[#7B3FF2] bg-clip-text text-transparent block sm:inline">
                Built for Business.
              </span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-[#A7AFBE] font-normal leading-relaxed max-w-2xl"
            >
              Veyqora Labs builds AI-powered automation, custom software, and MVPs that help businesses turn ideas and repetitive processes into practical digital solutions.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Button
                size="lg"
                variant="primary"
                icon={<ArrowUpRight className="w-5 h-5" />}
                onClick={() => scrollTo('#contact')}
              >
                Start a Project
              </Button>

              <Button
                size="lg"
                variant="secondary"
                icon={<ChevronRight className="w-5 h-5" />}
                onClick={() => scrollTo('#work')}
              >
                Explore Our Work
              </Button>
            </motion.div>
          </div>

          {/* Right Column: AI / System Telemetry Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="lg:col-span-5 w-full"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
