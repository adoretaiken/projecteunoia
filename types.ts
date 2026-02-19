
export interface Project {
  id: string;
  title: string;
  location: string;
  status: 'Ongoing' | 'Completed' | 'Pilot';
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
