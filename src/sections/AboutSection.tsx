import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Target } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative z-10 bg-[#080B14] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Editorial Header & Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#0066FF] uppercase">
              <span>OUR STUDIO PHILOSOPHY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Built Around Problems, Not Hype.
            </h2>

            <p className="text-base sm:text-lg text-[#A7AFBE] leading-relaxed">
              Veyqora Labs is a technology studio focused on AI automation, custom software and AI-powered product development.
            </p>

            <p className="text-base sm:text-lg text-[#A7AFBE] leading-relaxed">
              We work with startups and businesses to turn ideas, repetitive workflows and operational problems into practical, maintainable software.
            </p>

            {/* Studio Core Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-[#0D111F] border border-white/[0.08]">
                <div className="flex items-center gap-2 text-white font-semibold text-sm mb-1">
                  <Terminal className="w-4 h-4 text-[#0066FF]" />
                  <span>Engineering Rigor</span>
                </div>
                <p className="text-xs text-[#A7AFBE] leading-relaxed">
                  Clean codebases, modular architecture, and typed interfaces built for longevity.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0D111F] border border-white/[0.08]">
                <div className="flex items-center gap-2 text-white font-semibold text-sm mb-1">
                  <Target className="w-4 h-4 text-[#7B3FF2]" />
                  <span>Business Outcome Focus</span>
                </div>
                <p className="text-xs text-[#A7AFBE] leading-relaxed">
                  We measure success by solved bottlenecks and operational efficiency, not hype.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Architecture Info Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#0D111F] border border-white/[0.08] space-y-6 relative overflow-hidden"
          >
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 font-mono text-xs text-[#A7AFBE]">
              <span>STUDIO ARCHITECTURE MANIFESTO</span>
              <span className="text-[#0066FF]">v2026.1</span>
            </div>

            <div className="space-y-4 text-xs font-mono text-[#A7AFBE]">
              <div className="p-3.5 rounded-lg bg-[#080B14] border border-white/[0.06] space-y-1">
                <div className="text-white font-semibold flex items-center justify-between">
                  <span>01. NO UNNECESSARY ABSTRACTIONS</span>
                  <span className="text-emerald-400">PASSED</span>
                </div>
                <div className="text-white/60">Use simple, robust patterns over complex trend-chasing frameworks.</div>
              </div>

              <div className="p-3.5 rounded-lg bg-[#080B14] border border-white/[0.06] space-y-1">
                <div className="text-white font-semibold flex items-center justify-between">
                  <span>02. PRAGMATIC AI INTEGRATION</span>
                  <span className="text-emerald-400">PASSED</span>
                </div>
                <div className="text-white/60">Deploy models only where deterministic code is insufficient.</div>
              </div>

              <div className="p-3.5 rounded-lg bg-[#080B14] border border-white/[0.06] space-y-1">
                <div className="text-white font-semibold flex items-center justify-between">
                  <span>03. DIRECT IMPLEMENTATION PARTNER</span>
                  <span className="text-emerald-400">PASSED</span>
                </div>
                <div className="text-white/60">You work directly with the engineers building your application.</div>
              </div>
            </div>

            <div className="pt-2 text-[11px] font-mono text-[#A7AFBE] text-right">
              VEYQORA LABS — INTELLIGENT SOFTWARE.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
