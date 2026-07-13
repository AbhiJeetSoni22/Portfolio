export interface Projects {
  title: string;
  shortDescription: string;
  detailedDescription?: string;
  keyFeatures?: string[];
  architectureHighlights?: string;
  technologies: string[];
  githubLink: string;
  demoLink?: string;
  image: string;
  featured?: boolean;
}

export interface Blog {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
}
