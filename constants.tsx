
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
    title: 'Clean Water Initiative',
    location: 'Kurigram District',
    status: 'Ongoing',
    description: 'Providing sustainable deep tube wells to arsenic-affected regions.',
    problem: 'High arsenic concentration in groundwater leading to chronic illness.',
    intervention: 'Installation of 50 solar-powered deep tube wells and community training.',
    results: 'Access to safe drinking water for 15,000 households.',
    imageUrl: 'https://picsum.photos/800/600?random=1'
  },
  {
    id: '2',
    title: 'Flood Resilience Project',
    location: 'Sylhet Division',
    status: 'Pilot',
    description: 'Elevated housing and community centers for recurring flood zones.',
    problem: 'Monsoon flooding displaces thousands annually, destroying infrastructure.',
    intervention: 'Engineered elevated plinths and modular emergency shelters.',
    results: '0 casualties in pilot cluster during 2024 floods.',
    imageUrl: 'https://picsum.photos/800/600?random=2'
  },
  {
    id: '3',
    title: 'Mobile Healthcare Units',
    location: 'Chattogram Hill Tracts',
    status: 'Ongoing',
    description: 'Reaching remote hilly regions with primary healthcare.',
    problem: 'Zero medical facilities within 30km radius for many indigenous communities.',
    intervention: 'Equipped 4x4 vehicles with medical kits and telemedicine links.',
    results: '3,000+ prenatal checks conducted in 6 months.',
    imageUrl: 'https://picsum.photos/800/600?random=3'
  }
];

export const IMPACT_METRICS: ImpactMetric[] = [
  { label: 'Families Supported', value: '45,000+', description: 'Direct aid and sustainable support.' },
  { label: 'Regions Covered', value: '18', description: 'Districts across Bangladesh.' },
  { label: 'Active Volunteers', value: '1,200', description: 'Dedicated boots on the ground.' },
  { label: 'Success Rate', value: '92%', description: 'Long-term solution durability.' }
];

export const NEWS: NewsItem[] = [
  { id: '1', date: 'Oct 24, 2024', title: 'New Pilot Launched in Sylhet', excerpt: 'Our flood resilience team has completed the first phase of elevated housing...', category: 'Operations' },
  { id: '2', date: 'Oct 15, 2024', title: 'Annual Impact Report 2023', excerpt: 'Read how we utilized every BDT to create maximum change across the north...', category: 'Governance' },
  { id: '3', date: 'Oct 02, 2024', title: 'Volunteer Training in Dhaka', excerpt: 'Join our next cohort of community leaders this November at our central hub...', category: 'Community' }
];
