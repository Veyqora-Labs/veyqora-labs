import React from 'react';
import { motion } from 'framer-motion';
import { ServiceItem } from '../types';
import * as Icons from 'lucide-react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
  onSelect?: (serviceId: string) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, onSelect }) => {
  // Dynamically resolve Lucide Icon
  const IconComponent = (Icons as unknown as Record<string, React.ElementType>)[service.iconName] || Icons.Cpu;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -4 }}
      onClick={() => onSelect?.(service.id)}
      className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#0D111F] border border-white/[0.08] hover:border-[#0066FF]/40 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#0066FF]/10 overflow-hidden cursor-pointer"
    >
      {/* Ambient hover glow */}
      <div className="absolute -right-16 -top-16 w-48 h-48 bg-gradient-to-br from-[#0066FF]/10 to-[#7B3FF2]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div>
        {/* Header with Icon and Arrow */}
        <div className="flex items-center justify-between mb-6">
          <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white group-hover:border-[#0066FF]/30 group-hover:bg-[#0066FF]/10 group-hover:text-[#0066FF] transition-all duration-300">
            <IconComponent className="w-6 h-6" />
          </div>

          <div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[#A7AFBE] group-hover:text-white group-hover:border-[#0066FF]/50 group-hover:bg-[#0066FF]/20 transition-all duration-200">
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>

        {/* Subtitle & Title */}
        <span className="text-xs font-mono font-medium text-[#0066FF] uppercase tracking-wider block mb-1">
          {service.subtitle}
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#0066FF] transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#A7AFBE] leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Capabilities / Examples */}
        <div className="pt-4 border-t border-white/[0.08] space-y-2.5">
          {service.examples.map((example, eIdx) => (
            <div key={eIdx} className="flex items-center gap-2.5 text-xs text-[#A7AFBE] group-hover:text-gray-300 transition-colors">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0066FF] shrink-0" />
              <span>{example}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action CTA Button */}
      <div className="mt-8 pt-4 border-t border-white/[0.04] flex items-center justify-between text-xs font-semibold text-white group-hover:text-[#0066FF] transition-colors">
        <span>{service.ctaText} →</span>
        <span className="text-[10px] font-mono text-white/40">0{index + 1}</span>
      </div>
    </motion.div>
  );
};
