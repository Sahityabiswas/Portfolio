import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    year: "2023",
    title: "BSc Mathematics",
    subtitle: "RKMVCC",
    desc: "Graduated with a Bachelor's degree in Mathematics, building strong analytical and quantitative skills.",
    tags: ["Graduation", "Mathematics"]
  },
  {
    year: "2024",
    title: "MTTS 2024",
    subtitle: "Summer Training in Mathematics",
    desc: "Completed intensive summer training internship in mathematics at MTTS 2024 program.",
    tags: ["Training", "Mathematics"]
  },
  {
    year: "2024",
    title: "IYMC Bronze Honour",
    subtitle: "International Youth Math Challenge",
    desc: "Awarded Bronze Honour at the International Youth Math Challenge, demonstrating excellence in mathematics.",
    tags: ["Award", "Mathematics"]
  },
  {
    year: "2025",
    title: "GATE 2025 Qualified",
    subtitle: "Data Science & AI",
    desc: "Qualified GATE 2025 in Data Science and Artificial Intelligence with strong theoretical foundation.",
    tags: ["GATE", "Achievement"]
  },
  {
    year: "2026",
    title: "MSc Data Science & AI",
    subtitle: "RKMVERI",
    desc: "Pursuing master's with focus on deep learning, NLP, and reinforcement learning research.",
    tags: ["Deep Learning", "NLP", "Research"]
  }
];

export default function Career() {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.career-line', {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom center",
          scrub: 0.5
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="career"
      ref={sectionRef}
      className="relative w-full bg-[#020202] pt-24 pb-40 px-6 md:px-12"
    >
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.5em] mb-4">CAREER PATH</p>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
            My Journey<span className="text-blue-500">.</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div ref={timelineRef} className="absolute left-1/2 -translate-x-[1px] top-0 w-[2px] h-0 bg-blue-500/30 career-line"></div>

          <div className="space-y-16">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                  <div className={`inline-block p-6 bg-black/60 border border-white/5 hover:border-blue-500/30 transition-all rounded-xl backdrop-blur-sm ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center md:text-left`}>
                    <span className="text-blue-400 font-mono text-xs tracking-widest">{item.year}</span>
                    <h3 className="text-white text-lg md:text-xl font-bold tracking-tight mt-1">{item.title}</h3>
                    <p className="text-gray-500 text-xs font-mono tracking-wider mt-0.5">{item.subtitle}</p>
                    <p className="text-gray-400 text-sm leading-relaxed mt-3">{item.desc}</p>
                    <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} justify-center`}>
                      {item.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[9px] font-mono tracking-wider rounded-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex w-[10%] justify-center relative z-10">
                  <div className="w-4 h-4 rounded-full bg-blue-500 border-2 border-[#020202] shadow-[0_0_12px_rgba(59,130,246,0.5)]"></div>
                </div>

                <div className="hidden md:block w-[45%]"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
