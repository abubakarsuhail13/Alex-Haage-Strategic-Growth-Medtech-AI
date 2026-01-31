
import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_GROUPS } from '../constants';
import { ShieldCheck, Zap, Globe, Layers } from 'lucide-react';

const icons = [ShieldCheck, Zap, Layers, Globe];

const SkillsSection: React.FC = () => {
  return (
    <section id="specialties" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] font-black tracking-[0.5em] text-blue-600 uppercase mb-4 block"
          >
            Capabilities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-8xl font-black text-slate-900 tracking-tighter mb-8"
          >
            Global Domain Expertise.
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            className="h-2 bg-blue-600 mx-auto rounded-full"
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_GROUPS.map((group, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group p-12 bg-slate-50 rounded-[3.5rem] border border-slate-100 hover:bg-slate-900 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-all"></div>
                
                <div className="relative z-10 h-full flex flex-col">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-slate-900 mb-8 shadow-xl shadow-slate-200/50 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Icon size={28} />
                  </div>
                  
                  <h3 className="text-2xl font-black text-slate-900 mb-8 group-hover:text-white transition-colors tracking-tight">
                    {group.category}
                  </h3>
                  
                  <ul className="space-y-4 mt-auto">
                    {group.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start text-slate-500 group-hover:text-slate-400 text-sm font-bold tracking-tight">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-1.5 flex-shrink-0 group-hover:bg-blue-600 transition-colors"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
