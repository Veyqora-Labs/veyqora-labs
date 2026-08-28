import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Cpu, Layers, Terminal } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  onOpenModal: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onOpenModal }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -4 }}
      onClick={() => onOpenModal(project)}
      className="group relative flex flex-col justify-between rounded-2xl bg-[#0D111F] border border-white/[0.08] hover:border-[#0066FF]/40 transition-all duration-300 shadow-xl overflow-hidden cursor-pointer"
    >
      {/* Visual Product UI Preview Placeholder Frame */}
      <div className="relative w-full h-52 sm:h-60 bg-[#080B14] border-b border-white/[0.08] p-4 flex flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

        {/* Top Window Header */}
        <div className="relative z-10 flex items-center justify-between font-mono text-[11px] text-[#A7AFBE]">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/40" />
            <span className="ml-2 font-medium text-white/70">{project.title.toLowerCase().replace(/\s+/g, '-')}.v1</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-[#0066FF]/10 text-[10px] text-[#0066FF] border border-[#0066FF]/20 font-semibold">
            {project.badge}
          </span>
        </div>

        {/* Dynamic Graphic UI Preview by Project */}
        <div className="relative z-10 my-auto flex flex-col justify-center items-center py-2">
          {project.previewType === 'document' && (
            <div className="w-full max-w-sm space-y-2 font-mono text-xs">
              <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2 text-white">
                  <Terminal className="w-4 h-4 text-[#0066FF]" />
                  <span>Extracting Document Fields...</span>
                </div>
                <span className="text-emerald-400 text-[10px]">99.4% Conf</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[10px] text-[#A7AFBE]">
                <div className="p-2 rounded bg-[#080B14] border border-white/[0.06]">
                  Invoice ID: #INV-9241
                </div>
                <div className="p-2 rounded bg-[#080B14] border border-white/[0.06]">
                  Total: $42,500.00
                </div>
              </div>
            </div>
          )}

          {project.previewType === 'ranking' && (
            <div className="w-full max-w-sm space-y-2 font-mono text-xs">
              <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2 text-white">
                  <Cpu className="w-4 h-4 text-[#7B3FF2]" />
                  <span>RankPilot Classification</span>
                </div>
                <span className="text-[#0066FF] text-[10px]">Active Model</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-[10px]">
                <span className="flex-1 p-2 rounded bg-[#080B14] border border-white/[0.06] text-white">Score: 0.964</span>
                <span className="flex-1 p-2 rounded bg-[#080B14] border border-white/[0.06] text-emerald-400">Class: Priority A</span>
              </div>
            </div>
          )}

          {project.previewType === 'academic' && (
            <div className="w-full max-w-sm space-y-2 font-mono text-xs">
              <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2 text-white">
                  <Layers className="w-4 h-4 text-[#0066FF]" />
                  <span>StudentHub Platform</span>
                </div>
                <span className="text-[#7B3FF2] text-[10px]">Full-Stack AI</span>
              </div>
              <div className="p-2 rounded bg-[#080B14] border border-white/[0.06] text-[10px] text-[#A7AFBE]">
                Course AI Engine & Knowledge Graph
              </div>
            </div>
          )}
        </div>

        {/* Action Hint */}
        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-[#A7AFBE]">
          <span>VEYQORA LABS</span>
          <span className="group-hover:text-white transition-colors">Inspect Project Spec →</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono font-medium text-[#0066FF] uppercase tracking-wider">
              {project.category}
            </span>

            <div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[#A7AFBE] group-hover:text-white group-hover:border-[#0066FF]/50 group-hover:bg-[#0066FF]/20 transition-all duration-200">
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#0066FF] transition-colors">
            {project.title}
          </h3>

          <p className="text-sm text-[#A7AFBE] leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Problem / Solution snippet */}
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] space-y-1 text-xs mb-6">
            <div><span className="text-white/40 font-mono">Problem:</span> <span className="text-[#A7AFBE]">{project.problem}</span></div>
            <div><span className="text-white/40 font-mono">Solution:</span> <span className="text-white">{project.solution}</span></div>
          </div>
        </div>

        {/* Tech Stack Chips */}
        <div className="pt-4 border-t border-white/[0.08] flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-[#A7AFBE]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
