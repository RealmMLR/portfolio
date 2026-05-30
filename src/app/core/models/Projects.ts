export interface ProjectTech {
  label: string;
  value: number;
  color: string;
}

export interface ProjectSection {
  id: string;
  title: string;
  content: string;
  images?: string[];
}

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  role: string;
  year: string;
  images: string[];
  techMetrics: ProjectTech[];
  sections: ProjectSection[];
  demoUrl?: string;
  repoUrl?: string;
}
