import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ServiceCard } from '../components/ServiceCard';
import { ServiceItem } from '../types';

const servicesData: ServiceItem[] = [
  {
    id: 'ai-automation',
    subtitle: 'WORKFLOW & PROCESS ENGINE',
    title: 'AI Automation',
    description: 'Automate repetitive workflows and business processes using intelligent AI systems designed for maximum efficiency.',
    iconName: 'Bot',
    features: [
      'Document parsing & data extraction pipelines',
      'Automated customer & internal triage systems',
      'Custom LLM agent workflow orchestration',
      'API integrations with existing business stack'
    ],
    gradient: 'from-[#0066FF]/20 to-[#7B3FF2]/20',
  },
  {
    id: 'custom-software',
    subtitle: 'TAILORED ENTERPRISE APPLICATION',
    title: 'Custom AI Software',
    description: 'Build tailored AI-powered applications engineered specifically around your exact operational & business requirements.',
    iconName: 'Cpu',
    features: [
      'Bespoke AI-powered SaaS & Web Applications',
      'Vector database & RAG knowledge bases',
      'Scalable cloud infrastructure & API layers',
      'Enterprise security & data compliance'
    ],
    gradient: 'from-[#7B3FF2]/20 to-[#0066FF]/20',
  },
  {
    id: 'ai-mvp',
    subtitle: 'CONCEPT TO PRODUCTION MVP',
    title: 'AI MVP Development',
    description: 'Turn ambitious product ideas into functional, production-ready MVPs from initial concept through deployment.',
    iconName: 'Rocket',
    features: [
      'Rapid prototype-to-production roadmap',
      'Modern React, TypeScript & Node architecture',
      'AI model selection & latency optimization',
      'Investor & early adopter ready build'
    ],
    gradient: 'from-[#0066FF]/20 to-[#5C66FF]/20',
  },
];

export const ServicesSection: React.FC = () => {
  const handleSelectService = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      const topOffset = contactSection.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 relative z-10 bg-[#080B14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="OUR CORE CAPABILITIES"
          title="What We Build"
          description="Practical software solutions designed around real business problems, built with software engineering rigor."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={idx}
              onSelect={handleSelectService}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
