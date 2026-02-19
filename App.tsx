
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Impact from './pages/Impact';
import Join from './pages/Join';
import ReportProblem from './pages/ReportProblem';

// Simple placeholder components for other routes
const About = () => (
  <div className="p-8 max-w-4xl mx-auto">
    <h1 className="text-6xl font-black uppercase mb-8">Philosophy</h1>
    <div className="space-y-12">
      <section>
        <h2 className="text-3xl font-black uppercase mb-4 text-[#0338bb]">Why We Exist</h2>
        <p className="text-xl leading-relaxed font-medium">
          Most aid is performative. Eunoia Society exists to fix that. We treat social issues as engineering failures. If a community lacks water, it's not a lack of "awareness"—it's a lack of functional pipes, stable power, and community ownership. We build the physical and digital systems to bridge those gaps.
        </p>
      </section>
      <section className="bg-black text-white p-8 border-4 border-[#FF6600]">
        <h2 className="text-3xl font-black uppercase mb-6">Milestone Timeline</h2>
        <div className="space-y-8 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-[#FF6600] pl-8">
          <div>
            <span className="font-black text-[#FF6600]">2021</span>
            <p className="font-bold">Founded as a clandestine engineering collective in Dhaka.</p>
          </div>
          <div>
            <span className="font-black text-[#FF6600]">2022</span>
            <p className="font-bold">First deep-well pilot launched in Kurigram.</p>
          </div>
          <div>
            <span className="font-black text-[#FF6600]">2023</span>
            <p className="font-bold">Formalized as Eunoia Society; reached 10,000 families.</p>
          </div>
          <div>
            <span className="font-black text-[#FF6600]">2024</span>
            <p className="font-bold">Integration with national disaster response data.</p>
          </div>
        </div>
      </section>
    </div>
  </div>
);

const News = () => (
  <div className="p-8 max-w-7xl mx-auto">
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
    <div className="md:w-1/2">
      <h1 className="text-6xl font-black uppercase mb-8">Talk To Us</h1>
      <p className="text-2xl font-bold mb-8 italic">"Direct lines for direct action."</p>
      <div className="space-y-6">
        <div className="p-6 border-4 border-black bg-[#FF6600] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <p className="font-black uppercase text-sm">WhatsApp Operations</p>
          <p className="text-3xl font-black">+880 1711 000 000</p>
        </div>
        <div className="p-6 border-4 border-black bg-[#0338bb] text-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <p className="font-black uppercase text-sm">Email Coordination</p>
          <p className="text-3xl font-black">mission@eunoia.org</p>
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
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<div className="p-12 text-center font-black text-4xl uppercase">Project Detail View (Coming Soon)</div>} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/join" element={<Join />} />
          <Route path="/apply/:type" element={<div className="p-12 text-center font-black text-4xl uppercase">Application Form (Mock Interface)</div>} />
          <Route path="/report" element={<ReportProblem />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
