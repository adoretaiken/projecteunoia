import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, AlertCircle, Facebook, Twitter, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BrutalistButton from './BrutalistButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Impact', path: '/impact' },
    { name: 'Join', path: '/join' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-4 border-black px-4 md:px-8 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center relative z-50 bg-white">
        <Link to="/" className="text-2xl md:text-3xl font-black tracking-tighter uppercase font-header">
          Eunoia <span className="text-[#0338bb]">Society</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`font-bold uppercase tracking-widest text-[11px] hover:text-[#0338bb] transition-colors ${location.pathname === link.path ? 'text-[#0338bb] underline decoration-[3px] underline-offset-8' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/report">
            <BrutalistButton variant="accent" size="sm" magnetic>
              <AlertCircle size={14} className="mr-2" />
              Report Crisis
            </BrutalistButton>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden absolute top-full left-0 w-full bg-white border-b-4 border-black shadow-xl z-40 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-6 items-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-black uppercase tracking-widest hover:text-[#0338bb] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/report" onClick={() => setIsOpen(false)} className="w-full max-w-xs">
                <BrutalistButton variant="accent" fullWidth>
                  Report a Crisis
                </BrutalistButton>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-[#000000] text-white p-8 md:p-16 border-t-4 border-black">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-2">
        <h2 className="text-4xl md:text-5xl font-header uppercase mb-6">EUNOIA SOCIETY</h2>
        <p className="text-lg mb-8 opacity-80 max-w-md font-medium">
          Finding Bangladesh’s toughest social challenges and building practical, engineering, social, and logistical solutions that actually last.
        </p>
        <div className="flex space-x-4">
          <BrutalistButton variant="outline" size="sm" className="!bg-white !text-black p-2">
            <Facebook size={20} />
          </BrutalistButton>
          <BrutalistButton variant="outline" size="sm" className="!bg-white !text-black p-2">
            <Twitter size={20} />
          </BrutalistButton>
          <BrutalistButton variant="outline" size="sm" className="!bg-white !text-black p-2">
            <Instagram size={20} />
          </BrutalistButton>
        </div>
      </div>
      
      <div>
        <h3 className="text-xs font-black mb-6 uppercase text-[#FF6600] tracking-[0.3em]">QUICK LINKS</h3>
        <ul className="space-y-4 opacity-60 font-bold uppercase text-[11px] tracking-widest">
          <li><Link to="/about" className="hover:text-[#FF6600] transition-colors">Our Philosophy</Link></li>
          <li><Link to="/projects" className="hover:text-[#FF6600] transition-colors">Project Archive</Link></li>
          <li><Link to="/impact" className="hover:text-[#FF6600] transition-colors">Transparency Dashboard</Link></li>
          <li><Link to="/join" className="hover:text-[#FF6600] transition-colors">Join the Movement</Link></li>
        </ul>
      </div>

      <div>
        <h3 className="text-xs font-black mb-6 uppercase text-[#FF6600] tracking-[0.3em]">CONTACT US</h3>
        <ul className="space-y-4 opacity-60 font-bold uppercase text-[11px] tracking-widest leading-relaxed">
          <li>Phone - + 880 1334 330 984</li>
          <li>Email - contact@projecteunoia.org</li>
        </ul>
      </div>
    </div>
    <div className="mt-16 pt-8 border-t border-white/10 text-center opacity-40 text-[10px] font-black uppercase tracking-[0.4em]">
      <p>&copy; 2026 Eunoia Society. Developed by <a href="https://cursorstudios.net/" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline transition-colors">Cursor Studios</a></p>
    </div>
  </footer>
);

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;