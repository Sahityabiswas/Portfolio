import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiExternalLink, FiDownload } from 'react-icons/fi';

const certs = [
  {
    title: "MTTS 2024",
    subtitle: "Summer Training in Mathematics",
    desc: "Intensive summer training internship in mathematics covering advanced topics in analysis, algebra, and topology.",
    tags: ["Training", "Mathematics"],
    year: "2024",
  },
  {
    title: "IYMC Bronze Honour",
    subtitle: "International Youth Math Challenge",
    desc: "Awarded Bronze Honour at the International Youth Math Challenge, demonstrating excellence in mathematical problem-solving.",
    tags: ["Award", "Mathematics"],
    year: "2024",
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative w-full bg-[#020202] py-24 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.5em] mb-4">ACHIEVEMENTS</p>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
            Certifications<span className="text-blue-500">.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.15 }}
              className="group relative p-8 bg-black/60 border border-white/5 hover:border-blue-500/30 transition-all rounded-xl backdrop-blur-sm"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                  <FiAward className="text-blue-400" size={24} />
                </div>
                <span className="text-blue-400 font-mono text-xs tracking-widest">{cert.year}</span>
              </div>

              <h3 className="text-white text-xl font-bold tracking-tight mb-1">{cert.title}</h3>
              <p className="text-gray-500 text-xs font-mono tracking-wider mb-4">{cert.subtitle}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{cert.desc}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {cert.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[9px] font-mono tracking-wider rounded-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
