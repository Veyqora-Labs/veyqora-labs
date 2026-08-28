import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Code2, Rocket } from 'lucide-react';

export const CapabilityStrip: React.FC = () => {
  const capabilities = [
    { title: 'AI Automation', tag: 'Workflow Engineering', icon: Bot },
    { title: 'Custom AI Software', tag: 'Full-Stack Architecture', icon: Code2 },
    { title: 'AI MVP Development', tag: 'Concept to Launch', icon: Rocket },
  ];

  return (
    <section className="border-y border-white/[0.08] bg-[#0D111F]/60 py-8 backdrop-blur-sm relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-center gap-4 pt-4 md:pt-0 px-0 md:px-6 first:px-0"
              >
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-[#0066FF] shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white tracking-tight">{item.title}</div>
                  <div className="text-xs font-mono text-[#A7AFBE]">{item.tag}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
