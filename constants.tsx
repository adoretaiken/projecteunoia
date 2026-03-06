
import { Project, NewsItem, ImpactMetric } from './types';

export const COLORS = {
  primary: '#0338bb',
  accent: '#FF6600',
  background: '#FFFFFF',
  text: '#000000'
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    slug: 'project-heatwave',
    title: 'Project Heatwave – Hydration for Workers',
    location: 'Dhaka & Cumilla',
    status: 'Ongoing',
    description: 'Providing critical hydration stations for outdoor laborers during extreme heat.',
    problem: 'Extreme heatwaves causing dehydration and heatstroke among daily wage workers.',
    intervention: 'Setting up mobile hydration units and distributing ORS packets.',
    results: 'Served 5,000+ workers daily during peak summer months.',
    imageUrl: 'https://picsum.photos/800/600?random=1'
  },
  {
    id: '2',
    slug: 'flood-relief-recovery',
    title: 'Flood Relief & Recovery',
    location: 'Isapur & Burichong, Cumilla',
    status: 'Pilot',
    description: 'Emergency relief and long-term recovery for flood-affected communities.',
    problem: 'Severe flooding displacing families and destroying livelihoods.',
    intervention: 'Immediate food aid followed by housing reconstruction support.',
    results: 'Supported 1,200 families with emergency supplies and shelter.',
    imageUrl: 'https://picsum.photos/800/600?random=2'
  },
  {
    id: '3',
    slug: 'project-ushnayon',
    title: 'Project Ushnayon',
    location: 'Dhaka & Regional Areas',
    status: 'Micro-Project',
    description: 'Winter clothing distribution for vulnerable populations.',
    problem: 'Lack of warm clothing during harsh winter months for street dwellers.',
    intervention: 'Distribution of blankets and warm clothes to targeted areas.',
    results: 'Reached 3,500 individuals across 5 districts.',
    imageUrl: 'https://picsum.photos/800/600?random=3'
  },
  {
    id: '4',
    slug: 'permanent-livelihood-projects',
    title: 'Permanent Livelihood Projects',
    location: 'Dhaka & Regional Areas',
    status: 'Scaling',
    description: 'Creating sustainable income sources for ultra-poor families.',
    problem: 'Cyclical poverty due to lack of capital and skills.',
    intervention: 'Providing assets (livestock, sewing machines) and training.',
    results: 'Empowered 200 families with self-sustaining businesses.',
    imageUrl: 'https://picsum.photos/800/600?random=4'
  }
];

export const IMPACT_METRICS: ImpactMetric[] = [
  { label: 'Families Supported', value: '450+', description: 'Direct aid and sustainable support.' },
  { label: 'Regions Covered', value: '18', description: 'Wards across Dhaka.' },
  { label: 'Active Volunteers', value: '200', description: 'Dedicated boots on the ground.' },
  { label: 'Success Rate', value: '92%', description: 'OF ALL MICRO-PROJECTS' }
];

export const NEWS: NewsItem[] = [
  { id: '1', date: 'Oct 24, 2024', title: 'New Pilot Launched in Sylhet', excerpt: 'Our flood resilience team has completed the first phase of elevated housing...', category: 'Operations' },
  { id: '2', date: 'Oct 15, 2024', title: 'Annual Impact Report 2023', excerpt: 'Read how we utilized every BDT to create maximum change across the north...', category: 'Governance' },
  { id: '3', date: 'Oct 02, 2024', title: 'Volunteer Training in Dhaka', excerpt: 'Join our next cohort of community leaders this November at our central hub...', category: 'Community' }
];
