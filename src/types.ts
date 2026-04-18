export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  stars?: number;
  language?: string;
  languageColor?: string;
  updatedAt: string;
  role?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  link: string;
  content?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface Contribution {
  id: string;
  repo: string;
  description: string;
  type: 'PR' | 'Issue' | 'Maintenance';
  date: string;
}
