
import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import BrutalistCard from '../components/BrutalistCard';
import BrutalistButton from '../components/BrutalistButton';
import { Filter, MapPin } from 'lucide-react';
import { StaggerContainer, StaggerItem, RevealOnScroll } from '../components/MotionComponents';

const Projects = () => {
  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      <RevealOnScroll className="mb-12 border-b-4 border-black pb-8">
        <h1 className="text-5xl md:text-7xl font-header uppercase mb-4">The Operations</h1>
        <p className="text-xl md:text-2xl font-bold opacity-70">A complete archive of our active and completed interventions.</p>
      </RevealOnScroll>

      <div className="flex flex-wrap gap-4 mb-12">
        <BrutalistButton variant="primary" size="sm">All</BrutalistButton>
        <BrutalistButton variant="outline" size="sm">Agriculture</BrutalistButton>
        <BrutalistButton variant="outline" size="sm">Health</BrutalistButton>
        <BrutalistButton variant="outline" size="sm">Water</BrutalistButton>
        <BrutalistButton variant="outline" size="sm">Education</BrutalistButton>
        <BrutalistButton variant="outline" size="sm" className="ml-auto">
          <Filter size={18} className="mr-2" /> Filter
        </BrutalistButton>
      </div>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map(project => (
          <StaggerItem key={project.id}>
            <BrutalistCard className="group overflow-hidden !p-0 flex flex-col h-full border-[3px]">
              <div className="h-64 border-b-[3px] border-black overflow-hidden relative">
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className="bg-[#FF6600] text-black text-xs font-black border-2 border-black px-2 py-1 uppercase">
                    {project.status}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h2 className="text-3xl font-header uppercase mb-2">{project.title}</h2>
                <div className="flex items-center text-[#0338bb] font-bold mb-4">
                  <MapPin size={18} className="mr-2" />
                  {project.location}
                </div>
                <p className="mb-8 text-lg opacity-80 flex-grow">{project.description}</p>
                <Link to={`/projects/${project.id}`}>
                  <BrutalistButton variant="outline" fullWidth>Explore Deployment</BrutalistButton>
                </Link>
              </div>
            </BrutalistCard>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
};

export default Projects;
