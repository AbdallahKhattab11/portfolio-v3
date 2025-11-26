import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { PROJECTS } from '../constants';

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-slate-400 max-w-md">
              A selection of projects that demonstrate my passion for building complex web applications.
            </p>
          </motion.div>
          
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="https://github.com/AbdallahKhattab11"
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            View all on GitHub <FiGithub />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-indigo-500/30 transition-colors"
            >
              {/* Image Section */}
              <div className="aspect-video overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content Section */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      className="text-slate-400 hover:text-white transition-colors"
                      aria-label="GitHub Repo"
                    >
                      <FiGithub size={20} />
                    </a>
                    <a
                      href={project.liveUrl}
                      className="text-slate-400 hover:text-white transition-colors"
                      aria-label="Live Demo"
                    >
                      <FiExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <p className="text-slate-400 mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-indigo-300 bg-indigo-500/10 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
            <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            View all on GitHub <FiGithub />
          </a>
        </div>
      </div>
    </section>
  );
};
