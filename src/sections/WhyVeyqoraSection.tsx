import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { Target, Cpu, TrendingUp, CheckCircle2 } from 'lucide-react';

export const WhyVeyqoraSection: React.FC = () => {
  const points = [
    {
      num: '01',
      title: 'Problem First',
      description: 'We start with the business problem rather than forcing technology into the solution.',
      details: [
        'Deep discovery of existing operational bottlenecks',
        'ROI-aligned technical scoping before writing any code',
        'Clear criteria for when AI is (and is not) the right tool'
      ],
      icon: Target,
    },
    {
      num: '02',
      title: 'Practical AI',
      description: 'We focus on useful AI systems that fit real workflows without adding operational overhead.',
      details: [
        'Deterministic guardrails & fallback mechanisms',
        'Sub-second model latency & token cost optimization',
        'Seamless integration with standard business databases & APIs'
      ],
      icon: Cpu,
    },
    {
      num: '03',
      title: 'Built to Grow',
      description: 'We build with maintainability, scalability and future iteration in mind from day one.',
      details: [
        'Clean modular TypeScript & React architecture',
        'Comprehensive technical documentation & schema specs',
        'Production CI/CD pipelines & automated test coverage'
      ],
      icon: TrendingUp,
    },
  ];

  return (
    <section id="why-us" className="py-24 md:py-32 relative z-10 bg-[#080B14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="WHY VEYQORA LABS"
          title="Engineered for Practical Business Impact"
          description="How our studio approach differs from generic dev shops and hype-driven AI agencies."
        />

        <div className="space-y-6">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <motion.div
                key={pt.num}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.15 }}
                className="p-6 sm:p-8 rounded-2xl bg-[#0D111F] border border-white/[0.08] hover:border-[#0066FF]/30 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
              >
                <div className="lg:col-span-5 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded bg-[#0066FF]/10 text-[#0066FF] border border-[#0066FF]/20">
                      POINT {pt.num}
                    </span>
                    <div className="p-2 rounded-lg bg-white/[0.04] text-white">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white">{pt.title}</h3>
                  <p className="text-sm text-[#A7AFBE] leading-relaxed">{pt.description}</p>
                </div>

                <div className="lg:col-span-7 pt-4 lg:pt-0 lg:border-l lg:border-white/[0.08] lg:pl-8 space-y-2.5">
                  {pt.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-3 text-xs text-[#A7AFBE]">
                      <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0" />
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
