import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';

export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Work Experience</h2>
          <p className="text-slate-400">My professional journey in the tech industry.</p>
        </motion.div>

        <div className="relative border-l border-slate-800 ml-3 md:ml-6 space-y-12">
          {EXPERIENCE.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-white">{job.role}</h3>
                <span className="text-sm font-mono text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                  {job.period}
                </span>
              </div>
              
              <div className="text-lg text-slate-300 font-medium mb-4">{job.company}</div>
              
              <p className="text-slate-400 mb-4 leading-relaxed max-w-2xl">
                {job.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {job.technologies.map((tech) => (
                  <span key={tech} className="text-xs text-slate-500 border border-slate-800 px-2 py-1 rounded">
                    {tech}
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
