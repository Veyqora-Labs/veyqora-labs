import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { AlertCircle, CheckCircle2, Clock, Database, DollarSign, Lightbulb, Wrench } from 'lucide-react';

export const ProblemSolutionSection: React.FC = () => {
  const problems = [
    { title: 'Repetitive Manual Work', desc: 'Teams spending hours copy-pasting data and executing repetitive routine tasks.', icon: Clock },
    { title: 'Slow Business Processes', desc: 'Workflows delayed by manual approvals, handoffs, and paper/PDF bottlenecks.', icon: AlertCircle },
    { title: 'Scattered Business Data', desc: 'Information trapped in disparate silos, spreadsheets, and disconnected tools.', icon: Database },
    { title: 'Expensive Operational Tasks', desc: 'Scaling operations requires hiring more staff for low-leverage execution.', icon: DollarSign },
    { title: 'Ideas That Never Launch', desc: 'Promising product concepts stalled due to lack of technical implementation partners.', icon: Lightbulb },
    { title: 'Lack of Technical Resources', desc: 'Inability to hire or manage expensive full-time AI & software engineers.', icon: Wrench },
  ];

  return (
    <section className="py-24 md:py-32 relative z-10 bg-[#0D111F]/70 border-y border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="PROBLEM → SOLUTION"
          title="Turn Business Problems Into Intelligent Solutions."
          description="We help businesses eliminate operational bottlenecks, automate routine execution, and launch digital products without technical overhead."
          centered={true}
        />

        {/* Common Business Problems Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {problems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-[#080B14] border border-white/[0.08] hover:border-red-500/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 group-hover:bg-red-500/20 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white">{item.title}</h4>
                </div>
                <p className="text-xs text-[#A7AFBE] leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* The Veyqora Solution Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#080B14] via-[#121727] to-[#080B14] border border-[#0066FF]/30 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#0066FF]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/20 text-xs font-mono text-[#0066FF] uppercase">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>THE VEYQORA APPROACH</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
              Veyqora combines AI, automation, and modern software engineering to turn these challenges into practical digital systems.
            </h3>

            <p className="text-sm sm:text-base text-[#A7AFBE] leading-relaxed">
              We design robust, maintainable software around your existing operational workflows so your business runs faster, smarter, and more efficiently.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
