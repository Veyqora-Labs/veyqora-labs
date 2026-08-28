import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { ProjectItem } from '../types';

const projectsData: ProjectItem[] = [
  {
    id: 'ai-document-intelligence',
    title: 'AI Document Intelligence',
    category: 'AI / Document Intelligence',
    description: 'AI-powered document analysis engine for structured information extraction from complex unstructured business PDFs.',
    fullDescription: 'AI Document Intelligence is a specialized extraction platform engineered by Veyqora Labs. It parses multi-page PDF documents, financial statements, and operational contracts into validated JSON schemas using zero-shot LLM prompts paired with traditional OCR validation layers.',
    badge: 'STUDIO PROJECT',
    previewType: 'document',
    metrics: [
      '99.4% Schema Extraction Precision',
      '< 1.2s Processing Time / Page',
      'Zero-Shot Field Alignment'
    ],
    techStack: ['Python', 'FastAPI', 'OpenAI GPT-4o', 'Tesseract', 'React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 'rankpilot-ai',
    title: 'RankPilot AI',
    category: 'AI / Machine Learning',
    description: 'An AI-powered ranking and classification application optimized for multi-criteria search and candidate matching.',
    fullDescription: 'RankPilot AI is an intelligent scoring matrix application designed for automated candidate, deal, or lead prioritization. It leverages dense vector embeddings to instantly rank incoming data against defined business parameters.',
    badge: 'STUDIO PROJECT',
    previewType: 'ranking',
    metrics: [
      '12ms Embedding Match Latency',
      'High-Dimensional Clustering',
      'Multi-Tenant Vector Isolation'
    ],
    techStack: ['Python', 'Pinecone Vector DB', 'LangChain', 'React', 'TypeScript', 'Tailwind CSS', 'Vite'],
  },
  {
    id: 'studenthub-acadexa',
    title: 'StudentHub / Acadexa',
    category: 'Full-Stack / AI',
    description: 'A full-stack academic productivity platform combining modern web technologies with AI synthesis & course graph capabilities.',
    fullDescription: 'StudentHub / Acadexa is an end-to-end academic workspace engineered to streamline course schedules, lecture transcription summaries, and intelligent study graph synthesis using contextual RAG embeddings.',
    badge: 'STUDIO PROJECT',
    previewType: 'academic',
    metrics: [
      'Context-Aware Study Assistant',
      'Real-Time Collaborative Canvas',
      'Semantic Search across Notes'
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma', 'LLM RAG'],
  },
];

export const WorkSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="work" className="py-24 md:py-32 relative z-10 bg-[#080B14]">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#0066FF]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="PORTFOLIO SHOWCASE"
          title="Selected Work"
          description="A selection of AI and software projects demonstrating our engineering approach to solving real business problems."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              onOpenModal={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
