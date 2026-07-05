import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FiLayout, 
  FiServer, 
  FiCloud, 
  FiZap, 
  FiBriefcase, 
  FiArrowRight 
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const sidebarRef = useRef(null);

  const mainServices = [
    {
      icon: <FiZap size={24} />,
      title: "Deep Learning & NLP",
      p: "Build and deploy deep learning models for text classification, language generation, and sequence modeling using PyTorch and Transformers.",
    },
    {
      icon: <FiServer size={24} />,
      title: "Machine Learning",
      p: "Design end-to-end ML pipelines — from data preprocessing and feature engineering to model training, evaluation, and deployment.",
    },
    {
      icon: <FiLayout size={24} />,
      title: "Computer Vision",
      p: "Develop vision-based AI solutions including object detection, keypoint extraction, and video analysis using OpenCV and deep learning.",
    },
    {
      icon: <FiCloud size={24} />,
      title: "Data Engineering & Analytics",
      p: "Process large-scale data with Apache Spark, build graph databases with Neo4j, and create interactive dashboards with Streamlit.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          toggleActions: "play none none none"
        }
      });

      tl.fromTo(headerRef.current.children, 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.4, ease: "none", stagger: 0.1 }
      );

      tl.fromTo(".service-card", 
        { opacity: 0, y: 40 }, 
        { opacity: 1, y: 0, duration: 0.3, ease: "none", stagger: 0.1 },
        "-=0.2"
      );

      tl.fromTo(sidebarRef.current, 
        { opacity: 0, x: 50 }, 
        { opacity: 1, x: 0, duration: 0.5, ease: "none" },
        "-=0.3"
      );

      tl.fromTo(".corner-line",
        { scale: 0 },
        { scale: 1, duration: 0.3, ease: "none", stagger: 0.05 },
        "-=0.2"
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="expertise" 
      ref={containerRef}
      className="relative py-24 px-6 md:px-12 lg:px-24 bg-[#000] text-white overflow-hidden scroll-mt-24"
    >
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <div ref={headerRef} className="max-w-7xl mx-auto text-center mb-24 relative z-10">
        <div className="inline-block px-3 py-1 border border-blue-500/30 bg-blue-500/5 rounded-sm mb-4">
          <p className="text-blue-400 font-mono text-[10px] uppercase tracking-[0.5em]">EXPERTISE MODULE</p>
        </div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6">
          My Expertise<span className="text-blue-500">.</span>
        </h2>
        <div className="w-24 h-[1px] bg-blue-500/40 mx-auto mb-8"></div>
        <p className="max-w-3xl mx-auto text-gray-500 font-light text-base leading-relaxed">
          Hands-on experience building production-level AI systems across deep learning, NLP, computer vision, and distributed data processing.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">
        
        <div ref={gridRef} className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {mainServices.map((service) => (
            <div
              key={service.title}
              className="service-card group p-10 bg-[#0a0a0a] border border-white/[0.05] hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.05)] transition-all duration-300 rounded-sm cursor-default flex flex-col items-start"
            >
              <div className="mb-8 p-4 bg-white/5 border border-white/10 rounded-sm text-gray-300 group-hover:text-blue-400 group-hover:border-blue-500/20 transition-all">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight uppercase">{service.title}</h3>
              <p className="text-gray-500 font-light text-sm leading-relaxed mb-10">
                {service.p}
              </p>
              <button className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.3em] text-gray-400 hover:text-white group/btn transition-colors">
                <span>View Details</span> 
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        <div ref={sidebarRef} className="lg:col-span-4 h-full relative">
          <div className="sticky top-32 p-10 bg-[#0c0c0c] border border-white/[0.08] rounded-sm group overflow-hidden">
            
            <div className="corner-line absolute top-2 left-2 w-4 h-4 border-t border-l border-blue-500/50"></div>
            <div className="corner-line absolute top-2 right-2 w-4 h-4 border-t border-r border-blue-500/50"></div>
            <div className="corner-line absolute bottom-2 left-2 w-4 h-4 border-b border-l border-blue-500/50"></div>
            <div className="corner-line absolute bottom-2 right-2 w-4 h-4 border-b border-r border-blue-500/50"></div>

            <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-500/5 blur-[80px] group-hover:bg-blue-500/10 transition-all duration-1000" />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-12">
                <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-sm text-blue-400">
                  <FiBriefcase size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold tracking-widest uppercase">Achievements</h3>
                  <span className="text-[8px] font-mono text-gray-600 block tracking-[0.4em] mt-1">MODULE ACTIVE</span>
                </div>
              </div>

              <div className="flex gap-4 mb-8">
                <div className="h-10 px-3 bg-white flex items-center justify-center rounded-sm">
                   <span className="text-black font-black text-[10px] tracking-tighter">GATE 2025</span>
                </div>
                <div className="h-10 px-3 border border-white/20 flex items-center justify-center rounded-sm">
                   <span className="text-white font-bold text-[10px] tracking-widest">IYMC BRONZE</span>
                </div>
              </div>

              <p className="text-gray-400 font-light text-sm leading-relaxed mb-8">
                <span className="text-white font-medium">GATE 2025</span> qualified in Data Science and Artificial Intelligence. 
                Awarded <span className="text-white font-medium">Bronze Honour</span> at the International Youth Math Challenge (IYMC) 2024. 
                Completed <span className="text-white font-medium">MTTS 2024</span> — a summer training internship in mathematics.
              </p>

              <div className="mt-auto space-y-6">
                <div className="relative overflow-hidden rounded-sm group/img h-40">
                  <div className="absolute inset-0 bg-blue-500/5 z-10 mix-blend-overlay"></div>
                  <img 
                    className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-100 group-hover:scale-105" 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" 
                    alt="AI Research" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 font-mono text-[8px] text-gray-500 tracking-widest">ACHIEVEMENT_01</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-between items-center font-mono text-[9px] text-gray-700 tracking-[0.2em] px-2 opacity-50">
            <span>&gt; SYSTEM DATA LOADED</span>
            <span>0x034FB</span>
          </div>
        </div>

      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/[0.03] z-10"></div>
      <div className="absolute top-0 right-1/2 w-[1px] h-full bg-white/[0.03] z-10"></div>
    </section>
  );
}
