
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-4' : 'py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className={`flex justify-between items-center px-8 py-3 rounded-full transition-all duration-500 ${
          isScrolled ? 'bg-white/80 backdrop-blur-xl border border-slate-200 shadow-2xl shadow-blue-900/10' : 'bg-transparent'
        }`}>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-slate-900 tracking-tighter">
              ALEX <span className="text-blue-600">HAAGE</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            {['About', 'Experience', 'Specialties'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="group relative text-[11px] font-black uppercase tracking-[0.25em] text-slate-500 hover:text-blue-600 transition-colors"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </a>
            ))}
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="px-6 py-2.5 bg-slate-900 text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-blue-600 transition-all shadow-lg"
            >
              Consultation
            </motion.a>
          </div>

          <button className="md:hidden text-slate-900 p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
