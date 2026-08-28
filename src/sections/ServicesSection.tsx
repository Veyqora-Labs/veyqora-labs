import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ServiceCard } from '../components/ServiceCard';
import { ServiceItem } from '../types';

const servicesData: ServiceItem[] = [
  {
    id: 'ai-automation',
    subtitle: 'WORKFLOW & AGENT ENGINE',
    title: 'AI Automation',
    description: 'Automate repetitive workflows, connect your tools, and use AI to make everyday business operations faster and more efficient.',
    iconName: 'Bot',
    examples: [
      'Workflow automation',
      'AI agents',
      'Document processing',
      'Data extraction',
      'Business process automation',
      'API integrations'
    ],
    ctaText: 'Automate Your Workflow',
    gradient: 'from-[#0066FF]/20 to-[#7B3FF2]/20',
  },
  {
    id: 'custom-software',
    subtitle: 'PURPOSE-BUILT BUSINESS SYSTEMS',
    title: 'Custom Software',
    description: 'Purpose-built software designed around your business processes, customers, and operational needs.',
    iconName: 'Cpu',
    examples: [
      'Internal business tools',
      'Web applications',
      'AI-powered dashboards',
      'SaaS platforms',
      'API integrations',
      'Business systems'
    ],
    ctaText: 'Build Custom Software',
    gradient: 'from-[#7B3FF2]/20 to-[#0066FF]/20',
  },
  {
    id: 'ai-mvp',
    subtitle: 'RAPID PRODUCT DEVELOPMENT',
    title: 'AI MVP Development',
    description: 'Turn your product idea into a functional MVP using modern software and AI technologies.',
    iconName: 'Rocket',
    examples: [
      'Product prototypes',
      'AI SaaS MVPs',
      'AI assistants',
      'Web applications',
      'Proof-of-concepts',
      'Rapid product development'
    ],
    ctaText: 'Build Your MVP',
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
          badge="OUR CORE SERVICES"
          title="What We Build"
          description="Engineered software solutions designed around real business problems and operational requirements."
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
