
export interface Project {
  id: string;
  slug: string;
  title: string;
  location: string;
  status: 'Ongoing' | 'Completed' | 'Pilot' | 'Micro-Project' | 'Scaling';
  description: string;
  problem: string;
  intervention: string;
  results: string;
  imageUrl: string;
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  category: string;
}

export interface ImpactMetric {
  label: string;
  value: string;
  description: string;
}
