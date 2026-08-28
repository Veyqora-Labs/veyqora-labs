import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, Network, GitBranch, Zap, ShieldCheck, Activity } from 'lucide-react';

interface ArchitectureNode {
  id: string;
  name: string;
  type: string;
  x: number;
  y: number;
  icon: React.ElementType;
  status: 'active' | 'processing' | 'idle';
  telemetry: string;
}

const nodes: ArchitectureNode[] = [
  { id: 'n1', name: 'Ingestion Layer', type: 'Data Stream', x: 80, y: 100, icon: Database, status: 'active', telemetry: '12.4 MB/s' },
  { id: 'n2', name: 'AI Pipeline', type: 'LLM Orchestration', x: 260, y: 70, icon: Cpu, status: 'processing', telemetry: 'Token Latency: 14ms' },
  { id: 'n3', name: 'Automation Core', type: 'Workflow Engine', x: 260, y: 190, icon: GitBranch, status: 'active', telemetry: 'State: Synced' },
  { id: 'n4', name: 'Business API', type: 'REST & GraphQL', x: 440, y: 130, icon: Network, status: 'active', telemetry: '99.99% Uptime' },
];

export const HeroVisual: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string>('n2');

  return (
    <div className="relative w-full max-w-2xl mx-auto rounded-2xl bg-[#0D111F]/90 border border-white/[0.08] p-4 sm:p-6 shadow-2xl backdrop-blur-xl overflow-hidden group">
      {/* Subtle Background Radial Accent */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#0066FF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#7B3FF2]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Top Telemetry Header */}
      <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/[0.08]">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono font-medium text-white tracking-wider">SYSTEM ARCHITECTURE</span>
          <span className="px-2 py-0.5 text-[10px] font-mono text-[#0066FF] bg-[#0066FF]/10 rounded border border-[#0066FF]/20">
            Veyqora v2.4
          </span>
        </div>

        <div className="flex items-center gap-4 text-[11px] font-mono text-[#A7AFBE]">
          <div className="hidden sm:flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-[#0066FF]" />
            <span>Telemetry Active</span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Secure</span>
          </div>
        </div>
      </div>

      {/* Main Interactive Node Diagram */}
      <div className="relative z-10 my-6 h-56 sm:h-64 w-full flex items-center justify-center">
        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
          <defs>
            <linearGradient id="line_grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0066FF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#7B3FF2" stopOpacity="0.8" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Connection Lines between nodes */}
          <line x1="100" y1="110" x2="250" y2="80" stroke="url(#line_grad1)" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="100" y1="110" x2="250" y2="190" stroke="url(#line_grad1)" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="280" y1="80" x2="430" y2="130" stroke="url(#line_grad1)" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="280" y1="190" x2="430" y2="130" stroke="url(#line_grad1)" strokeWidth="1.5" strokeDasharray="4 4" />

          {/* Animated data pulses */}
          <circle r="3" fill="#0066FF" filter="url(#glow)">
            <animateMotion path="M 100,110 L 250,80" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle r="3" fill="#7B3FF2" filter="url(#glow)">
            <animateMotion path="M 100,110 L 250,190" dur="3.2s" repeatCount="indefinite" />
          </circle>
          <circle r="3.5" fill="#0066FF" filter="url(#glow)">
            <animateMotion path="M 280,80 L 430,130" dur="2s" repeatCount="indefinite" />
          </circle>
        </svg>

        {/* Nodes Layer */}
        <div className="relative w-full h-full flex items-center justify-between px-2 sm:px-6">
          {/* Column 1 */}
          <div className="flex flex-col items-center">
            {nodes.slice(0, 1).map((node) => (
              <NodeCard key={node.id} node={node} active={activeNode === node.id} onClick={() => setActiveNode(node.id)} />
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-center gap-6 sm:gap-8">
            {nodes.slice(1, 3).map((node) => (
              <NodeCard key={node.id} node={node} active={activeNode === node.id} onClick={() => setActiveNode(node.id)} />
            ))}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-center">
            {nodes.slice(3, 4).map((node) => (
              <NodeCard key={node.id} node={node} active={activeNode === node.id} onClick={() => setActiveNode(node.id)} />
            ))}
          </div>
        </div>
      </div>

      {/* Node Inspection Details Footer */}
      <div className="relative z-10 pt-3 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="text-[#A7AFBE]">Active Node:</span>
          <span className="text-white font-semibold">
            {nodes.find((n) => n.id === activeNode)?.name}
          </span>
          <span className="px-1.5 py-0.5 rounded bg-white/[0.06] text-[10px] text-[#0066FF]">
            {nodes.find((n) => n.id === activeNode)?.type}
          </span>
        </div>

        <div className="flex items-center gap-3 text-[11px] text-[#A7AFBE]">
          <span className="flex items-center gap-1">
            <Zap className="w-3 h-3 text-amber-400" />
            {nodes.find((n) => n.id === activeNode)?.telemetry}
          </span>
        </div>
      </div>
    </div>
  );
};

interface NodeCardProps {
  node: ArchitectureNode;
  active: boolean;
  onClick: () => void;
}

const NodeCard: React.FC<NodeCardProps> = ({ node, active, onClick }) => {
  const Icon = node.icon;
  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className={`relative p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
        active
          ? 'bg-[#121727] border-[#0066FF] shadow-lg shadow-[#0066FF]/20 ring-1 ring-[#0066FF]'
          : 'bg-[#080B14]/80 border-white/10 hover:border-white/20 hover:bg-[#121727]/50'
      }`}
    >
      <div className="flex items-center gap-2.5">
        <div
          className={`p-2 rounded-lg ${
            active ? 'bg-[#0066FF]/20 text-[#0066FF]' : 'bg-white/[0.05] text-[#A7AFBE]'
          }`}
        >
          <Icon className="w-4 h-4" />
        </div>
        <div className="hidden xs:flex flex-col">
          <span className="text-xs font-medium text-white tracking-tight">{node.name}</span>
          <span className="text-[10px] text-[#A7AFBE] font-mono">{node.type}</span>
        </div>
      </div>

      {active && (
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#0066FF] border-2 border-[#080B14]" />
      )}
    </motion.button>
  );
};
