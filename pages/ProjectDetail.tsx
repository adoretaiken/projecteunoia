import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PROJECTS } from '../constants';
import BrutalistCard from '../components/BrutalistCard';
import BrutalistButton from '../components/BrutalistButton';
import { MapPin, Calendar, Users, Target, ArrowLeft } from 'lucide-react';
import { RevealOnScroll, StaggerContainer, StaggerItem } from '../components/MotionComponents';

import SEO from '../components/SEO';

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS.find(p => p.slug === slug);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <SEO 
        title={`${project.title} | Eunoia Society`} 
        description={project.description}
        image={project.imageUrl}
      />
      {/* Hero Section */}
      <div className="relative min-h-[60vh] w-full border-b-4 border-black flex flex-col justify-end">
        <div className="absolute inset-0 z-0">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative z-10 w-full p-8 md:p-12 bg-gradient-to-t from-black/90 via-black/50 to-transparent pt-32">
          <div className="max-w-7xl mx-auto">
            <div className="inline-block bg-[#FF6600] text-black font-black px-4 py-2 mb-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wider">
              {project.status}
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase mb-4 leading-none drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              {project.title}
            </h1>
            <div className="flex items-center text-white font-bold text-xl md:text-2xl">
              <MapPin className="mr-2 text-[#FF6600]" />
              {project.location}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-8 md:p-12">
        <Link to="/projects" className="inline-block mb-12">
          <BrutalistButton variant="outline" size="sm" className="flex items-center gap-2">
            <ArrowLeft size={16} /> Back to Operations
          </BrutalistButton>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <RevealOnScroll>
              <h2 className="text-4xl font-black uppercase mb-6 border-l-8 border-[#0338bb] pl-6">
                Mission Brief
              </h2>
              <p className="text-xl md:text-2xl font-medium leading-relaxed opacity-90">
                {project.description}
              </p>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <StaggerContainer>
                <StaggerItem>
                  <BrutalistCard className="h-full bg-white">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-black text-white rounded-none">
                        <Target size={24} />
                      </div>
                      <h3 className="text-2xl font-black uppercase">The Problem</h3>
                    </div>
                    <p className="text-lg font-medium opacity-80">
                      {project.problem}
                    </p>
                  </BrutalistCard>
                </StaggerItem>
                <StaggerItem>
                  <BrutalistCard className="h-full bg-white">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-[#FF6600] text-black border-2 border-black rounded-none">
                        <Users size={24} />
                      </div>
                      <h3 className="text-2xl font-black uppercase">Intervention</h3>
                    </div>
                    <p className="text-lg font-medium opacity-80">
                      {project.intervention}
                    </p>
                  </BrutalistCard>
                </StaggerItem>
              </StaggerContainer>
            </div>

            <RevealOnScroll>
              <div className="bg-black text-white p-8 md:p-12 border-4 border-[#FF6600] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]">
                <h3 className="text-3xl font-black uppercase mb-6 text-[#FF6600]">
                  Impact Report
                </h3>
                <p className="text-2xl md:text-3xl font-bold leading-tight">
                  "{project.results}"
                </p>
              </div>
            </RevealOnScroll>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <BrutalistCard className="bg-[#0338bb] text-white border-black">
              <h3 className="text-2xl font-black uppercase mb-6 border-b-2 border-white/20 pb-4">
                Key Statistics
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-bold uppercase opacity-70 mb-1">Status</p>
                  <p className="text-xl font-black uppercase">{project.status}</p>
                </div>
                <div>
                  <p className="text-sm font-bold uppercase opacity-70 mb-1">Location</p>
                  <p className="text-xl font-black uppercase">{project.location}</p>
                </div>
                <div>
                  <p className="text-sm font-bold uppercase opacity-70 mb-1">Timeline</p>
                  <p className="text-xl font-black uppercase">2024 - Present</p>
                </div>
              </div>
            </BrutalistCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
