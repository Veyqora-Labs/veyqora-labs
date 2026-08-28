import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { Button } from '../components/Button';

export const CTASection: React.FC = () => {
  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-28 relative z-10 bg-[#080B14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl bg-gradient-to-r from-[#0D111F] via-[#121727] to-[#0D111F] border border-white/[0.12] p-8 sm:p-12 md:p-16 text-center overflow-hidden shadow-2xl"
        >
          {/* Background Gradient Accents */}
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#0066FF]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#7B3FF2]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#0066FF] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>READY TO TALK IMPLEMENTATION?</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Have a problem worth solving?
            </h2>

            <p className="text-base sm:text-lg text-[#A7AFBE] leading-relaxed max-w-xl mx-auto">
              Tell us what you're trying to build or automate. We will help you scope, design, and engineer the right software solution.
            </p>

            <div className="pt-4 flex justify-center">
              <Button
                size="lg"
                variant="primary"
                icon={<ArrowUpRight className="w-5 h-5" />}
                onClick={scrollToContact}
              >
                Start a Project
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
