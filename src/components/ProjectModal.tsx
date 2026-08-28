import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { ProjectItem } from '../types';
import { Button } from './Button';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#080B14]/80 backdrop-blur-md"
        />

        {/* Dialog Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-3xl bg-[#0D111F] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl z-10 my-8 overflow-hidden text-white"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-lg bg-white/[0.05] text-[#A7AFBE] hover:text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF]"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-[#0066FF]/10 text-[#0066FF] border border-[#0066FF]/20">
                {project.category}
              </span>
              <span className="text-xs font-mono text-[#A7AFBE]">{project.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              {project.title}
            </h2>
          </div>

          {/* Project Abstract UI Preview Visual */}
          <div className="relative w-full h-48 sm:h-60 mb-6 rounded-xl bg-[#080B14] border border-white/[0.08] p-4 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 font-mono text-xs text-[#A7AFBE]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Product Telemetry Dashboard</span>
              </div>
              <span className="text-white/40">Veyqora Architecture Spec</span>
            </div>

            {/* Graphic dynamic visualization depending on project type */}
            <div className="my-auto flex items-center justify-center gap-8 py-2">
              {project.previewType === 'document' && (
                <div className="w-full space-y-2.5 max-w-md mx-auto">
                  <div className="flex justify-between text-xs font-mono text-[#A7AFBE]">
                    <span>OCR & Structure Extraction</span>
                    <span className="text-[#0066FF]">99.4% Accuracy</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-[#0066FF] to-[#7B3FF2] h-full w-[94%]" />
                  </div>
                  <div className="grid grid-cols-3 gap-2 pt-2 text-[10px] font-mono text-[#A7AFBE] text-center">
                    <div className="p-2 rounded bg-white/[0.04] border border-white/[0.06]">Schema Parser</div>
                    <div className="p-2 rounded bg-[#0066FF]/20 border border-[#0066FF]/30 text-white">NLP Extraction</div>
                    <div className="p-2 rounded bg-white/[0.04] border border-white/[0.06]">JSON Output</div>
                  </div>
                </div>
              )}

              {project.previewType === 'ranking' && (
                <div className="w-full max-w-md mx-auto space-y-3 font-mono text-xs">
                  <div className="flex justify-between items-center text-[#A7AFBE]">
                    <span>Ranking Classification Matrix</span>
                    <span className="text-emerald-400">Latency: 12ms</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center p-2 rounded bg-white/[0.04] border border-white/[0.06]">
                      <span className="text-white">Vector Match Confidence</span>
                      <span className="text-[#0066FF]">0.982</span>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded bg-white/[0.04] border border-white/[0.06]">
                      <span className="text-white">Cluster Score Index</span>
                      <span className="text-[#7B3FF2]">High Precision</span>
                    </div>
                  </div>
                </div>
              )}

              {project.previewType === 'academic' && (
                <div className="w-full max-w-md mx-auto space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between text-[#A7AFBE]">
                    <span>Academic Workflow Engine</span>
                    <span className="text-[#0066FF]">Real-Time Sync</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-[11px]">
                    <div className="p-3 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                      <div className="text-white font-semibold mb-1">Schedule AI</div>
                      <div className="text-white/60">Automated Course Planner</div>
                    </div>
                    <div className="p-3 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                      <div className="text-white font-semibold mb-1">Knowledge Graph</div>
                      <div className="text-white/60">Vector Embeddings</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-[#A7AFBE] pt-2 border-t border-white/[0.06]">
              <span>STATUS: PRODUCTION VALIDATED</span>
              <span>VEYQORA LABS ORIGINAL PRODUCT</span>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-4 mb-6">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">Overview</h4>
            <p className="text-sm text-[#A7AFBE] leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            {project.metrics.map((metric, mIdx) => (
              <div key={mIdx} className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <div className="text-xs text-[#A7AFBE] font-mono">Performance Metric</div>
                <div className="text-sm font-semibold text-white mt-1">{metric}</div>
              </div>
            ))}
          </div>

          {/* Tech Stack Tags */}
          <div className="mb-8">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono mb-3">Core Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-xs font-mono text-[#A7AFBE]">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-white/[0.08]">
            <span className="text-xs font-mono text-[#A7AFBE]">
              Veyqora Studio Portfolio Project
            </span>
            <Button size="sm" variant="secondary" onClick={onClose}>
              Close Preview
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
