import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ProcessTimeline } from '../components/ProcessTimeline';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-24 md:py-32 relative z-10 bg-[#080B14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="OUR METHODOLOGY"
          title="From Problem to Product"
          description="A structured 5-step engineering methodology that eliminates ambiguity, mitigates risk, and guarantees production delivery."
        />

        <ProcessTimeline />
      </div>
    </section>
  );
};
