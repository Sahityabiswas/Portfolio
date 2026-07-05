import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX, FiTag } from 'react-icons/fi';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[500] bg-black/90 flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl bg-[#020202] border border-white/10 rounded-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-black/60 text-white rounded-full hover:bg-white/20 transition-colors"
          >
            <FiX size={20} />
          </button>

          <div className="p-8 md:p-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.3em]">{project.category}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight uppercase mb-4">{project.title}</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.desc}</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span key={tag} className="inline-flex items-center gap-1 px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[9px] font-mono tracking-wider rounded-sm">
                  <FiTag size={10} />
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 text-white hover:bg-white/20 transition-all rounded-xl text-xs font-mono uppercase tracking-widest"
              >
                <FiGithub size={16} /> View Source
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
