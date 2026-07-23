import React, { useState } from 'react';
import { FiAward, FiBookOpen, FiCode, FiDownload, FiEye, FiX } from "react-icons/fi";
import { 
  SiPython, 
  SiPytorch, 
  SiScikitlearn, 
  SiTensorflow, 
  SiGit,
  SiStreamlit
} from "react-icons/si";

export default function About() {
  const [showResume, setShowResume] = useState(false);
  const Aboutdata = [
    {
      icon: <FiCode size={20} />,
      title: "Languages",
      desc: "Python, R, SQL, LaTeX",
    },
    {
      icon: <FiBookOpen size={20} />,
      title: "Education",
      desc: "MSc Data Science & AI, RKMVERI, Balur | BSc Mathematics, RKMVCC, Rahara",
    },
    {
      icon: <FiAward size={20} />,
      title: "Projects",
      desc: "Built 5+ AI/ML projects: NLP, RL, CV, Distributed Systems",
    },
  ];

  const Tools = [
    { icon: <SiPython size={24} />, title: "Python" },
    { icon: <SiPytorch size={24} />, title: "PyTorch" },
    { icon: <SiScikitlearn size={24} />, title: "Scikit-Learn" },
    { icon: <SiTensorflow size={24} />, title: "TensorFlow" },
    { icon: <SiGit size={24} />, title: "Git" },
    { icon: <SiStreamlit size={24} />, title: "Streamlit" },
  ];

  return (
    <div id="about" className="relative w-full min-h-screen bg-[#020202] overflow-hidden flex items-center justify-center font-sans tracking-wide py-12 md:py-20 px-4 md:px-12">
        
        {/* --- BG EFFECTS --- */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        <div className="absolute inset-0 z-[15] pointer-events-none" style={{ background: "radial-gradient(circle at 30% 50%, transparent 20%, rgba(0,0,0,0.9) 100%)" }}></div>

        {/* --- STATIC FRAME IMAGE (LEFT 45%) --- */}
        <div className="absolute inset-y-0 left-0 w-[45%] z-10 pointer-events-none overflow-hidden hidden lg:block" style={{ WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)', maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)' }}>
            <img 
               src={`${import.meta.env.BASE_URL}profile.jpg`} 
               alt="Profile" 
               className="w-full h-full object-cover opacity-60 grayscale" 
            />
        </div>

        {/* --- CONTENT (RIGHT 55%) --- */}
        <div className="relative z-[50] w-full lg:w-[80%] flex flex-col md:flex-row items-center justify-end">
            
            <div className="hidden lg:block w-[35%] h-full"></div>

            <div className="w-full lg:w-[65%] flex flex-col space-y-6 md:space-y-10 pointer-events-auto bg-black/40 backdrop-blur-sm p-5 md:p-12 border border-white/5 rounded-2xl">
                <div className="space-y-2">
                    <p className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.5em]">SYSTEM INFO</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter uppercase">
                        About Me<span className="text-blue-500">.</span>
                    </h2>
                </div>

                <div className="robotic-section">
                    <p className="text-gray-400 text-sm md:text-md lg:text-xl font-light leading-relaxed max-w-2xl">
                        Mathematics graduate pursuing <span className="text-white font-medium">MSc in Data Science and AI</span> at Ramakrishna Mission Vivekananda Educational and Research Institute, Balur, 
                        with hands-on experience building AI systems across deep learning, NLP, and reinforcement learning. 
                        I move comfortably from theory to implementation — designing, training, and evaluating models that solve real problems.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Aboutdata.map((item) => (
                        <div key={item.title} className="group p-6 bg-white/5 border border-white/10 hover:border-blue-500/40 transition-all duration-300 rounded-xl">
                            <div className="text-blue-500 mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                                {item.icon}
                            </div>
                            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-1">{item.title}</h4>
                            <p className="text-gray-500 text-[11px] leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="space-y-4">
                    <h4 className="text-[10px] font-mono text-gray-500 tracking-[0.3em] uppercase">Core Tech Stack</h4>
                    <div className="flex flex-wrap gap-5">
                        {Tools.map((tool) => (
                            <div key={tool.title} className="group relative p-4 bg-black/50 border border-white/5 hover:border-blue-500/50 transition-all rounded-xl flex items-center justify-center cursor-help">
                                <div className="text-gray-500 group-hover:text-blue-400 transition-colors">
                                    {tool.icon}
                                </div>
                                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[9px] font-mono py-1.5 px-3 rounded-md opacity-0 group-hover:opacity-100 transition-all pointer-events-none z-[70] whitespace-nowrap shadow-xl">
                                    {tool.title}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="pt-6 flex flex-wrap gap-4">
                    <button
                        onClick={() => setShowResume(true)}
                        className="inline-flex items-center space-x-4 px-8 py-4 border border-blue-500/30 text-blue-400 font-bold text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all duration-300 rounded-full"
                    >
                        <span>Preview Resume</span>
                        <FiEye size={16} />
                    </button>
                    <a 
                        href={`${import.meta.env.BASE_URL}resume.pdf`} 
                        className="inline-flex items-center space-x-4 px-8 py-4 bg-blue-600 text-white font-bold text-xs uppercase tracking-widest hover:bg-blue-700 transition-all duration-300 rounded-full shadow-lg shadow-blue-900/20"
                    >
                        <span>Download</span>
                        <FiDownload size={16} />
                    </a>
                </div>

                {showResume && (
                    <div className="fixed inset-0 z-[500] bg-black/90 flex items-center justify-center p-4 md:p-8" onClick={() => setShowResume(false)}>
                        <div className="relative w-full max-w-4xl h-[90vh] bg-white rounded-xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
                            <button
                                onClick={() => setShowResume(false)}
                                className="absolute top-4 right-4 z-10 p-2 bg-black/60 text-white rounded-full hover:bg-black/80 transition-colors"
                            >
                                <FiX size={20} />
                            </button>
                            <iframe
                                src={`${import.meta.env.BASE_URL}resume.pdf#view=FitH`}
                                className="w-full h-full"
                                title="Resume Preview"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
  );
}
