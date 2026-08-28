export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  examples: string[];
  ctaText: string;
  gradient: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  fullDescription: string;
  metrics: string[];
  techStack: string[];
  badge: 'Veyqora Project' | 'Prototype' | 'STUDIO PROJECT';
  previewType: 'document' | 'ranking' | 'academic';
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details: string[];
}

export interface InquiryFormData {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  message: string;
}

export interface InquiryFormErrors {
  name?: string;
  email?: string;
  projectType?: string;
  message?: string;
}
