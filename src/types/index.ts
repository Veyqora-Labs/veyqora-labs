export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  features: string[];
  gradient: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  metrics: string[];
  techStack: string[];
  badge: string;
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
  budgetRange: string;
  message: string;
}

export interface InquiryFormErrors {
  name?: string;
  email?: string;
  projectType?: string;
  budgetRange?: string;
  message?: string;
}
