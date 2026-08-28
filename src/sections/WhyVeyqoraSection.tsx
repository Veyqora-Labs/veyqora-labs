import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { Cpu, Target, Layers, Rocket, CheckCircle2 } from 'lucide-react';

export const WhyVeyqoraSection: React.FC = () => {
  const points = [
    {
      num: '01',
      title: 'PRACTICAL AI',
      description: 'We focus on useful AI applications that solve real business problems without operational overhead.',
      details: [
        'Deterministic guardrails & fallback execution',
        'Model latency & API cost optimization',
        'Seamless integration with your business tools'
      ],
      icon: Cpu,
    },
    {
      num: '02',
      title: 'BUILT AROUND YOUR BUSINESS',
      description: 'Solutions are designed around your actual workflows, customer needs, and operational requirements.',
      details: [
        'Discovery of current workflow bottlenecks',
        'Custom software tailored to exact business specs',
        'Direct collaboration with senior engineers'
      ],
      icon: Target,
    },
    {
      num: '03',
      title: 'MODERN TECHNOLOGY',
      description: 'We use modern AI and software technologies to build scalable, maintainable foundations.',
      details: [
        'Clean React, TypeScript & Node/Python codebases',
        'Production CI/CD & cloud infrastructure setup',
        'Enterprise data security & privacy standards'
      ],
      icon: Layers,
    },
    {
      num: '04',
      title: 'FROM IDEA TO PRODUCT',
      description: 'From automation concepts to working MVPs, we help turn ideas into functional software.',
      details: [
        'Rapid prototype-to-production roadmap',
        'Modular architecture ready for future scaling',
        'Transparent milestones & ongoing technical support'
      ],
      icon: Rocket,
    },
  ];

  return (
    <section id="why-us" className="py-24 md:py-32 relative z-10 bg-[#080B14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="THE VEYQORA APPROACH"
          title="Engineered for Practical Business Impact"
          description="How our AI agency approach ensures clear technical execution and real business value."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <motion.div
                key={pt.num}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.15 }}
                className="p-6 sm:p-8 rounded-2xl bg-[#0D111F] border border-white/[0.08] hover:border-[#0066FF]/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded bg-[#0066FF]/10 text-[#0066FF] border border-[#0066FF]/20">
                      POINT {pt.num}
                    </span>
                    <div className="p-2.5 rounded-xl bg-white/[0.04] text-white">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{pt.title}</h3>
                  <p className="text-sm text-[#A7AFBE] leading-relaxed mb-6">{pt.description}</p>
                </div>

                <div className="pt-4 border-t border-white/[0.08] space-y-2">
                  {pt.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2.5 text-xs text-[#A7AFBE]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0066FF] shrink-0" />
                      <span className="text-white/90">{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
