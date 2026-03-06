
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import Lenis from 'lenis';
import Layout from './components/Layout';
import { PageTransition } from './components/MotionComponents';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Impact from './pages/Impact';
import Join from './pages/Join';
import ReportProblem from './pages/ReportProblem';
import SEO from './components/SEO';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
};

// Simple placeholder components for other routes
const About = () => (
  <div className="p-8 max-w-4xl mx-auto">
    <SEO title="Philosophy | Eunoia Society" description="Our philosophy and timeline of operations." />
    <h1 className="text-6xl font-black uppercase mb-8">Philosophy</h1>
    <div className="space-y-12">
      <section>
        <h2 className="text-3xl font-black uppercase mb-4 text-[#0338bb]">Why We Exist</h2>
        <p className="text-xl leading-relaxed font-medium">
          Most aid only puts a bandage on problems. Eunoia Society goes deeper. We see social issues as broken systems. If people are suffering in the heat, it’s not because they don’t drink enough; it’s because clean water isn’t available on the street, and no one has made it easy to stay hydrated. We build the systems that actually fix these problems.
        </p>
      </section>
      <section className="bg-black text-white p-8 border-4 border-[#FF6600]">
        <h2 className="text-3xl font-black uppercase mb-6">Milestone Timeline</h2>
        <div className="space-y-8 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-[#FF6600] pl-8">
          <div>
            <span className="font-black text-[#FF6600]">2024</span>
            <p className="font-bold">Founded on April 26 and debuted with Project Heatwave, providing water and hydration to street workers during extreme heat.</p>
          </div>
          <div>
            <span className="font-black text-[#FF6600]">2025</span>
            <p className="font-bold">Launched Project Ushnayon, helping over 350 families stay warm with winter donations.</p>
            <p className="font-bold mt-2">Started Flood Relief Program, supporting 3 villages in Isapur and Burichong with emergency aid.</p>
          </div>
          <div>
            <span className="font-black text-[#FF6600]">2026</span>
            <p className="font-bold">Registered formally as a Non-Profit Organization, shifting from a short-term charity to a long-term organization focused on sustainable solutions and policy impact.</p>
          </div>
        </div>
      </section>
    </div>
  </div>
);

const News = () => (
  <div className="p-8 max-w-7xl mx-auto">
    <SEO title="Intelligence Feed | Eunoia Society" description="Latest updates and operational briefings." />
    <h1 className="text-6xl font-black uppercase mb-8">Intelligence Feed</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[1,2,3,4].map(i => (
        <div key={i} className="border-4 border-black p-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <span className="text-sm font-black uppercase text-[#0338bb]">Operations Update &bull; Oct 2024</span>
          <h2 className="text-3xl font-black uppercase my-4">Intelligence Briefing #{i}: Supply Chain Bottlenecks in the Delta</h2>
          <p className="text-lg font-medium opacity-70 mb-6">How seasonal river changes are affecting our delivery capacity for solar arrays in Barishal...</p>
          <button className="font-black uppercase underline decoration-4 underline-offset-4">Read Full Report</button>
        </div>
      ))}
    </div>
  </div>
);

const Contact = () => (
  <div className="p-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
    <SEO title="Contact | Eunoia Society" description="Get in touch with our operations team." />
    <div className="md:w-1/2">
      <h1 className="text-6xl font-black uppercase mb-8">Talk To Us</h1>
      <p className="text-2xl font-bold mb-8">Direct lines for direct action.</p>
      <div className="space-y-6">
        <div className="p-6 border-4 border-black bg-[#FF6600] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <p className="font-black uppercase text-sm">WhatsApp Operations</p>
          <p className="text-3xl font-black">+ 880 1334 330 984</p>
        </div>
        <div className="p-6 border-4 border-black bg-[#0338bb] text-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <p className="font-black uppercase text-sm">Email Coordination</p>
          <p className="text-3xl font-black">contact@projecteunoia.org</p>
        </div>
      </div>
    </div>
    <div className="md:w-1/2 bg-slate-50 border-4 border-black p-8">
      <h2 className="text-3xl font-black uppercase mb-6">Send a Message</h2>
      <form className="space-y-4">
        <div>
          <label className="block font-black uppercase mb-1">Your Name</label>
          <input type="text" className="w-full p-4 border-2 border-black font-bold outline-none focus:bg-white" />
        </div>
        <div>
          <label className="block font-black uppercase mb-1">Subject</label>
          <input type="text" className="w-full p-4 border-2 border-black font-bold outline-none focus:bg-white" />
        </div>
        <div>
          <label className="block font-black uppercase mb-1">Message</label>
          <textarea rows={4} className="w-full p-4 border-2 border-black font-bold outline-none focus:bg-white"></textarea>
        </div>
        <button className="w-full bg-black text-white p-4 font-black uppercase text-xl hover:bg-[#0338bb] transition-colors">Submit Inquiry</button>
      </form>
    </div>
  </div>
);

import NotFound from './pages/NotFound';

import ProjectDetail from './pages/ProjectDetail';

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
        <Route path="/projects/:slug" element={<PageTransition><ProjectDetail /></PageTransition>} />
        <Route path="/impact" element={<PageTransition><Impact /></PageTransition>} />
        <Route path="/join" element={<PageTransition><Join /></PageTransition>} />
        <Route path="/apply/:type" element={<PageTransition><div className="p-12 text-center font-black text-4xl uppercase">Application Form (Mock Interface)</div></PageTransition>} />
        <Route path="/report" element={<PageTransition><ReportProblem /></PageTransition>} />
        <Route path="/news" element={<PageTransition><News /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <AnimatedRoutes />
        </Layout>
      </Router>
    </HelmetProvider>
  );
};

export default App;
