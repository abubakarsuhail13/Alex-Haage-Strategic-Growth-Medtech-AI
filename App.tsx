
import React from 'react';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';

const App: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white selection:bg-blue-600 selection:text-white"
    >
      <Navigation />
      <main>
        <Hero />
        
        <section className="bg-white py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden bg-slate-950 rounded-[4rem] p-12 lg:p-24 shadow-3xl"
            >
              <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-blue-600/20 via-indigo-600/5 to-transparent pointer-events-none"></div>
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px]"></div>
              
              <div className="relative z-10 flex flex-col lg:flex-row items-center gap-20">
                <div className="flex-1">
                  <span className="inline-block px-4 py-2 mb-8 text-[11px] font-black tracking-[0.3em] text-blue-400 uppercase border border-blue-400/20 rounded-xl bg-blue-400/5">
                    Growth Catalyst
                  </span>
                  <h2 className="text-5xl lg:text-7xl font-black text-white mb-10 leading-[0.9] tracking-tighter">
                    Innovation via <br />
                    <span className="text-blue-500">Execution.</span>
                  </h2>
                  <p className="text-slate-400 text-xl lg:text-2xl leading-relaxed mb-10 font-medium">
                    A multi-lingual approach to high-stakes medtech. We bridge clinical needs with AI-powered solutions to deliver measurable impact at a global scale.
                  </p>
                  <div className="flex items-center gap-6">
                    <div className="h-px w-16 bg-blue-600"></div>
                    <span className="text-white font-bold tracking-widest uppercase text-sm">Strategic Advisory & Implementation</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 w-full lg:w-[480px]">
                  {[
                    { label: 'C-Level', sub: 'Leadership', color: 'blue' },
                    { label: 'Market', sub: 'Expansion', color: 'indigo' },
                    { label: 'AI/GTM', sub: 'Specialist', color: 'blue' },
                    { label: 'Cloud', sub: 'Enablement', color: 'indigo' }
                  ].map((stat, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="group bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-blue-500/30 transition-all text-center"
                    >
                      <div className="text-3xl font-black text-white mb-2 tracking-tighter">{stat.label}</div>
                      <div className="text-blue-500 text-[10px] font-black uppercase tracking-[0.2em]">{stat.sub}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>
      
      <footer className="bg-slate-950 border-t border-slate-900 pt-32 pb-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center mb-20">
            <div className="text-center md:text-left">
              <div className="text-4xl font-black text-white tracking-tighter mb-6">ALEX HAAGE</div>
              <p className="text-slate-400 text-lg max-w-sm leading-relaxed">
                Strategic Growth Advisor for AI-driven Medtech & Digital Health Solutions.
              </p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-12 font-bold uppercase tracking-widest text-[11px]">
              <a href="https://linkedin.com" className="text-slate-500 hover:text-blue-500 transition-colors">LinkedIn</a>
              <a href="#experience" className="text-slate-500 hover:text-blue-500 transition-colors">Experience</a>
              <a href="#contact" className="text-slate-500 hover:text-blue-500 transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-slate-600 text-[11px] font-black tracking-widest uppercase">
              © {new Date().getFullYear()} Alex Haage. Barcelona • Amsterdam • Global
            </p>
            <div className="flex flex-col items-center md:items-end">
              <p className="text-slate-700 text-[9px] font-black tracking-[0.4em] uppercase mb-2">
                Strategic Partner
              </p>
              <p className="text-blue-500 text-xs font-black tracking-[0.2em] uppercase">
                Built by Nexaforge Technologies
              </p>
            </div>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default App;
