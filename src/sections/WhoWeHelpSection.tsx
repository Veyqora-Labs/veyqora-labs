import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { Rocket, Building2, Briefcase, Sparkles, Cpu, CheckCircle2 } from 'lucide-react';

export const WhoWeHelpSection: React.FC = () => {
  const audiences = [
    {
      title: 'Startups',
      description: 'Engineering technical MVPs, AI assistants, and scalable SaaS foundations ready for user testing and fundraising.',
      icon: Rocket,
    },
    {
      title: 'Small & Growing Businesses',
      description: 'Automating internal workflows, reducing operational costs, and eliminating manual data entry.',
      icon: Building2,
    },
    {
      title: 'Service Businesses & Agencies',
      description: 'Streamlining customer onboarding, report generation, and document intelligence systems.',
      icon: Briefcase,
    },
    {
      title: 'Founders With Software Ideas',
      description: 'Turning early-stage product concepts into functional, production-ready software applications.',
      icon: Sparkles,
    },
    {
      title: 'Companies Automating Operations',
      description: 'Connecting existing tools and deploying custom AI agents for everyday business efficiency.',
      icon: Cpu,
    },
  ];

  return (
    <section className="py-24 md:py-32 relative z-10 bg-[#080B14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="WHO WE HELP"
          title="Built For Businesses Ready To Move Faster."
          description="We partner with forward-thinking teams, business owners, and founders equipped to scale operational output with intelligent software."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-[#0D111F] border border-white/[0.08] hover:border-[#0066FF]/30 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-[#0066FF] group-hover:bg-[#0066FF]/10 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#A7AFBE] leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-[#0066FF]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Target Alignment</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
