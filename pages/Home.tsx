import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Search, Activity, Globe, Zap, Target, Shield, Fingerprint, ChevronRight } from 'lucide-react';
import BrutalistButton from '../components/BrutalistButton';
import { PROJECTS, IMPACT_METRICS } from '../constants';
import { 
  StaggerContainer, 
  StaggerItem, 
  RevealOnScroll,
  LineReveal,
  GLIDE_EASE
} from '../components/MotionComponents';

const Home = () => {
  const [hoveredCase, setHoveredCase] = React.useState<string | null>(null);

  return (
    <div className="bg-white">
      {/* Cinematic Hero - Melvin Winkeler Inspired */}
      <section className="relative px-6 md:px-12 pt-32 pb-12 md:pt-48 md:pb-24 max-w-screen-2xl mx-auto overflow-hidden">
        <LineReveal className="mb-12 md:mb-20" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-20 md:mb-32">
          <div className="lg:col-span-8">
            <RevealOnScroll delay={0.1}>
              <h1 className="text-[clamp(3.5rem,14vw,14rem)] font-header uppercase tracking-[-0.05em] leading-[0.85] select-none">
                Hard <br/> Problems <br/> <span className="text-[#0338bb]">Fixed.</span>
              </h1>
            </RevealOnScroll>
          </div>
          <div className="lg:col-span-4 lg:pl-12">
            <RevealOnScroll delay={0.3}>
              <p className="text-lg md:text-xl font-medium mb-10 text-black/40 leading-tight uppercase tracking-widest">
                Bangladesh's Operational Backbone. We build systems where others see dead ends.
              </p>
              <div className="flex flex-wrap gap-6">
                <BrutalistButton variant="accent" magnetic>Report Crisis</BrutalistButton>
                <BrutalistButton variant="outline">Intel Feed</BrutalistButton>
              </div>
            </RevealOnScroll>
          </div>
        </div>

        <LineReveal className="mt-12 md:mt-20" />
      </section>

      {/* Process: Phase Boxes (Distinct Black Boxes with White Border) */}
      <section className="bg-slate-50 py-24 md:py-48 px-6 md:px-12 border-b-[4px] border-black">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-24 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <RevealOnScroll>
              <h2 className="text-5xl md:text-8xl font-header uppercase">Mission Control</h2>
            </RevealOnScroll>
            <p className="max-w-md text-sm font-bold opacity-30 uppercase tracking-[0.2em] leading-snug">
              Treating social entropy as a systems failure. Our 4-stage engine protocols.
            </p>
          </div>
          
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
            {[
              { icon: <Fingerprint size={32} />, title: "Identify", desc: "Data scraping across isolated Delta districts." },
              { icon: <Zap size={32} />, title: "Sprints", desc: "Rapid prototyping of logistical bridges." },
              { icon: <Target size={32} />, title: "Implement", desc: "Hardening pilot success into permanent infra." },
              { icon: <Shield size={32} />, title: "Handover", desc: "Transitioning systems to local communities." }
            ].map((item, i) => (
              <StaggerItem key={i}>
                <motion.div 
                  className="hw-accel bg-black text-white p-12 flex flex-col gap-10 border-[3px] border-white shadow-[8px_8px_0px_0px_#0338bb] transition-colors duration-500 group relative h-full overflow-hidden"
                  whileHover={{ 
                    backgroundColor: "#0338bb",
                    y: -8,
                    x: -8,
                    boxShadow: "16px 16px 0px_0px_#000000"
                  }}
                  transition={{ duration: 0.5, ease: GLIDE_EASE }}
                >
                  <div className="text-[#FF6600] group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-black opacity-30 uppercase tracking-[0.4em] group-hover:opacity-100">PHASE 0{i+1}</span>
                  <h3 className="text-4xl font-header uppercase group-hover:translate-x-2 transition-transform duration-300">{item.title}</h3>
                  <p className="text-[11px] font-bold opacity-30 uppercase leading-snug tracking-widest group-hover:opacity-100 transition-opacity">
                    {item.desc}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Impact Metrics: Contained Aggressive Typography */}
      <section className="bg-white py-24 md:py-48 px-6 md:px-12 border-b-[4px] border-black">
        <div className="max-w-screen-2xl mx-auto">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-[4px] border-black divide-y-[4px] md:divide-y-0 md:divide-x-[4px] divide-black bg-black">
            {IMPACT_METRICS.map((metric, i) => (
              <StaggerItem key={i} className="bg-white">
                <motion.div 
                  className="hw-accel relative p-[2.5rem] h-full flex flex-col justify-between overflow-hidden group"
                  whileHover={{ backgroundColor: '#f8fafc' }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-[10px] font-black uppercase text-[#0338bb] mb-12 tracking-[0.3em] whitespace-nowrap block">{metric.label}</span>
                  <div className="w-full">
                    <motion.p 
                      className="text-[clamp(2.5rem,15vw,6.5rem)] font-header mb-8 leading-[0.8] break-words uppercase w-[110%] -ml-1"
                      whileInView={{ scale: [0.98, 1] }}
                      transition={{ duration: 0.5, ease: GLIDE_EASE }}
                    >
                      {metric.value}
                    </motion.p>
                  </div>
                  <p className="text-[11px] font-bold opacity-30 uppercase tracking-[0.2em] leading-tight max-w-[200px]">
                    {metric.description}
                  </p>
                  {/* Subtle decorative elements for that Melvin feel */}
                  <div className="absolute top-4 right-4 text-[8px] font-black opacity-10 uppercase tracking-tighter">DATA POINT 00{i+1}</div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Selected Cases: Full-Width Hover Reveal List */}
      <section className="bg-white py-24 md:py-48 border-b-[4px] border-black">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <RevealOnScroll>
              <h2 className="text-6xl md:text-[10rem] font-header uppercase leading-none tracking-tighter">Selected <br/> Cases</h2>
            </RevealOnScroll>
            <BrutalistButton variant="outline" size="lg">Full Registry</BrutalistButton>
          </div>

          <div className="border-t-[4px] border-black">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={project.id}
                onMouseEnter={() => setHoveredCase(project.id)}
                onMouseLeave={() => setHoveredCase(null)}
                className="hw-accel group relative border-b-[4px] border-black py-12 md:py-16 px-6 md:px-12 cursor-pointer transition-colors duration-500 hover:bg-[#0338bb]"
              >
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8 group-hover:text-white">
                  <div className="flex flex-col gap-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 group-hover:opacity-70 transition-opacity">
                      SEC-0{i+1} / {project.status}
                    </span>
                    <h3 className="text-4xl md:text-7xl font-header uppercase tracking-tighter leading-none">{project.title}</h3>
                  </div>
                  
                  <div className="flex items-center gap-12">
                    <div className="hidden lg:block text-right">
                      <p className="text-[10px] font-black uppercase tracking-widest opacity-40 group-hover:opacity-70">Location</p>
                      <p className="text-lg font-bold uppercase">{project.location}</p>
                    </div>
                    <motion.div 
                      className="w-16 h-16 md:w-20 md:h-20 border-[3px] border-black bg-white flex items-center justify-center group-hover:border-white transition-colors"
                      whileHover={{ scale: 1.1, rotate: 45 }}
                    >
                      <ArrowUpRight className="text-black group-hover:text-[#0338bb] transition-colors" size={32} />
                    </motion.div>
                  </div>
                </div>

                {/* Hover Details Reveal */}
                <AnimatePresence>
                  {hoveredCase === project.id && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3, ease: GLIDE_EASE }}
                      className="hidden xl:block absolute left-[30%] top-1/2 -translate-y-1/2 z-20 pointer-events-none"
                    >
                      <div className="w-80 border-[4px] border-white bg-white p-2 shadow-[20px_20px_0px_0px_rgba(0,0,0,0.3)]">
                        <img src={project.imageUrl} className="w-full h-48 object-cover grayscale brightness-90" alt="" />
                        <div className="p-4 bg-white text-black">
                          <p className="text-[10px] font-black uppercase tracking-widest mb-2">Protocol Brief</p>
                          <p className="text-sm font-bold uppercase leading-tight">{project.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action: Massive Minimalist */}
      <section className="bg-black text-white py-48 md:py-72 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-screen-2xl mx-auto text-center relative z-10">
          <RevealOnScroll>
            <h2 className="text-6xl md:text-[12rem] font-header uppercase leading-[0.85] tracking-tighter mb-20">
              Ready to <br/> <span className="text-[#0338bb]">Engineer</span> <br/> Change?
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-10">
              <BrutalistButton variant="accent" size="lg">Apply to Join</BrutalistButton>
              <BrutalistButton variant="outline" size="lg" className="!bg-white !text-black !border-white">Contact HQ</BrutalistButton>
            </div>
          </RevealOnScroll>
        </div>
        
        {/* Background Visual Artifacts */}
        <div className="absolute inset-0 opacity-5 pointer-events-none select-none overflow-hidden">
          <div className="text-[20rem] font-header uppercase leading-none absolute -bottom-20 -left-20">HQ-01</div>
          <div className="text-[20rem] font-header uppercase leading-none absolute -top-20 -right-20">OP-18</div>
        </div>
      </section>
    </div>
  );
};

export default Home;