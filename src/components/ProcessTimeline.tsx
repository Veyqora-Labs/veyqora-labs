import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ProcessStep } from '../types';
import { CheckCircle2, Search, Layout, Code2, Rocket, RefreshCw } from 'lucide-react';

const steps: (ProcessStep & { icon: React.ElementType })[] = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understand the business problem, users and desired outcome.',
    details: [
      'Operational workflow mapping & bottleneck identification',
      'Target architecture & AI feasibility study',
      'Clear definition of success metrics & scope'
    ],
    icon: Search,
  },
  {
    number: '02',
    title: 'Design',
    description: 'Define the product experience, architecture and technical approach.',
    details: [
      'UI/UX design system & interactive prototypes',
      'System architecture & data model specification',
      'Model selection & AI integration pipeline design'
    ],
    icon: Layout,
  },
  {
    number: '03',
    title: 'Build',
    description: 'Develop the software, integrate AI and test the core workflows.',
    details: [
      'Production-grade full-stack development',
      'Custom AI prompt engineering & fine-tuning',
      'Automated testing & edge case verification'
    ],
    icon: Code2,
  },
  {
    number: '04',
    title: 'Deploy',
    description: 'Launch the product and make it production-ready.',
    details: [
      'Cloud infrastructure setup (Vercel, AWS, GCP)',
      'CI/CD pipeline configuration',
      'Performance optimization & security hardening'
    ],
    icon: Rocket,
  },
  {
    number: '05',
    title: 'Improve',
    description: 'Monitor, refine and continuously improve the solution.',
    details: [
      'Telemetry tracking & AI response evaluation',
      'Iterative feature enhancements',
      'Ongoing technical maintenance & support'
    ],
    icon: RefreshCw,
  },
];

export const ProcessTimeline: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<number>(0);

  return (
    <div className="w-full">
      {/* Desktop Horizontal Step Track */}
      <div className="hidden lg:grid grid-cols-5 gap-4 relative mb-12">
        {/* Connecting Background Line */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/[0.08] -translate-y-1/2 z-0" />
        
        {steps.map((step, idx) => {
          const StepIcon = step.icon;
          const isSelected = selectedStep === idx;
          return (
            <motion.button
              key={step.number}
              type="button"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              onClick={() => setSelectedStep(idx)}
              className={`relative z-10 p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                isSelected
                  ? 'bg-[#0D111F] border-[#0066FF] shadow-lg shadow-[#0066FF]/20 ring-1 ring-[#0066FF]'
                  : 'bg-[#080B14] border-white/[0.08] hover:border-white/20 hover:bg-[#0D111F]/60'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-mono font-semibold ${isSelected ? 'text-[#0066FF]' : 'text-[#A7AFBE]'}`}>
                  STEP {step.number}
                </span>
                <div className={`p-2 rounded-xl ${isSelected ? 'bg-[#0066FF]/20 text-[#0066FF]' : 'bg-white/[0.04] text-[#A7AFBE]'}`}>
                  <StepIcon className="w-4 h-4" />
                </div>
              </div>

              <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
              <p className="text-xs text-[#A7AFBE] leading-relaxed line-clamp-2">{step.description}</p>

              {isSelected && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0066FF] rotate-45 rounded-sm"
                />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Selected Step Expanded Inspector Card (Desktop & Tablet) */}
      <motion.div
        key={selectedStep}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="hidden lg:block p-8 rounded-2xl bg-[#0D111F] border border-white/[0.08] relative overflow-hidden"
      >
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-[#0066FF]/10 text-[#0066FF] border border-[#0066FF]/20">
                PHASE {steps[selectedStep].number}
              </span>
              <span className="text-xs font-mono text-[#A7AFBE]">METHODOLOGY SPEC</span>
            </div>
            <h3 className="text-2xl font-bold text-white">{steps[selectedStep].title}</h3>
            <p className="text-base text-[#A7AFBE] mt-1">{steps[selectedStep].description}</p>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-[#0066FF]">
            {React.createElement(steps[selectedStep].icon, { className: 'w-7 h-7' })}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/[0.08]">
          {steps[selectedStep].details.map((detail, dIdx) => (
            <div key={dIdx} className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
              <span className="text-xs text-white leading-relaxed">{detail}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Mobile Vertical Progression Timeline */}
      <div className="lg:hidden space-y-4">
        {steps.map((step, idx) => {
          const StepIcon = step.icon;
          return (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-[#0D111F] border border-white/[0.08] relative"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-[#0066FF]/10 text-[#0066FF] border border-[#0066FF]/20">
                    {step.number}
                  </span>
                  <h4 className="text-lg font-bold text-white">{step.title}</h4>
                </div>
                <div className="p-2 rounded-lg bg-white/[0.04] text-[#0066FF]">
                  <StepIcon className="w-4 h-4" />
                </div>
              </div>

              <p className="text-sm text-[#A7AFBE] mb-4 leading-relaxed">{step.description}</p>

              <div className="space-y-2 pt-3 border-t border-white/[0.08]">
                {step.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2 text-xs text-[#A7AFBE]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0066FF] shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
