
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-24"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.4em] text-blue-600 uppercase bg-blue-50 border border-blue-200 rounded-lg">
            Impact Timeline
          </span>
          <h2 className="text-4xl lg:text-7xl font-black text-slate-900 tracking-tighter mb-6">
            Driving Scale Across Borders.
          </h2>
          <p className="text-xl text-slate-500 font-medium">
            Two decades of navigating complex clinical landscapes to deliver transformative medical software.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {EXPERIENCES.map((exp, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index % 2 * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-[3rem] p-10 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-8">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      <Calendar size={12} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight">
                    {exp.role}
                  </h3>
                  <div className="text-lg font-bold text-slate-400 mt-1">{exp.company}</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                  <Briefcase size={24} />
                </div>
              </div>
              
              <p className="text-slate-600 leading-relaxed mb-10 text-lg font-medium">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-4 py-1.5 bg-slate-50 text-slate-500 text-[10px] font-black uppercase tracking-widest rounded-full border border-slate-100 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
