import React, { useState } from "react";
import { FiGithub, FiExternalLink, FiEye } from "react-icons/fi";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";

const projectData = [
  {
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800",
    title: "ScenGen",
    tags: ["LLM", "Emerging Technology", "OCR", "Multi-Agent", "ADB"],
    category: "Emerging Technology",
    link: "https://github.com/Sahityabiswas/ScenGen",
    github: "https://github.com/Sahityabiswas/ScenGen",
    desc: "LLM-guided Android GUI automation framework for intelligent scenario-based testing.",
  },
  {
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800",
    title: "Gesture2Sentence",
    tags: ["Deep Learning", "MediaPipe", "T5", "CTRGCN", "Python"],
    category: "Deep Learning",
    link: "https://github.com/Sahityabiswas/Gesture2Sentence",
    github: "https://github.com/Sahityabiswas/Gesture2Sentence",
    desc: "Indian Sign Language recognition system using hierarchical deep learning (~2000 classes).",
  },
  {
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=800",
    title: "Smart City Traffic Control",
    tags: ["Reinforcement Learning", "Q-Learning", "Simulation", "Python"],
    category: "Reinforcement Learning",
    link: "https://github.com/Sahityabiswas/Smart_CIty_Traffic_light_Control",
    github: "https://github.com/Sahityabiswas/Smart_CIty_Traffic_light_Control",
    desc: "RL-based traffic light control that adapts to real-time traffic at four-way intersections.",
  },
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    title: "JOB_NEXUS",
    tags: ["Apache Spark", "Neo4j", "NLP", "Streamlit", "Python"],
    category: "Recommendation System",
    link: "https://github.com/Sahityabiswas/JOB_NEXUS",
    github: "https://github.com/Sahityabiswas/JOB_NEXUS",
    desc: "Distributed career recommendation platform with graph databases and semantic matching.",
  },
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    title: "ML Based AQI Prediction",
    tags: ["Regression", "Scikit-Learn", "Random Forest", "Python"],
    category: "Machine Learning",
    link: "https://github.com/Sahityabiswas/ML_BASED_AQI_PREDICTION",
    github: "https://github.com/Sahityabiswas/ML_BASED_AQI_PREDICTION",
    desc: "Air quality prediction using multiple regression models and ensemble methods.",
  },
];

const categories = ["All", "Deep Learning", "Emerging Technology", "Reinforcement Learning", "Machine Learning", "Recommendation System"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = activeCategory === "All"
    ? projectData
    : projectData.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="bg-[#020202] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-blue-500 font-mono tracking-[0.4em] uppercase text-[10px] mb-4"
        >
          Project Showcase
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black text-white mb-8 uppercase tracking-tighter"
        >
          Selected Works<span className="text-blue-500">.</span>
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-[10px] font-mono uppercase tracking-[0.2em] rounded-sm border transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-blue-600 border-blue-500 text-white'
                  : 'bg-transparent border-white/10 text-gray-400 hover:text-white hover:border-white/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {filtered.map((project, index) => (
          <motion.div
            key={project.title}
            layout
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-[2rem] bg-white/5 border border-white/10"
          >
            <div className="relative overflow-hidden aspect-[4/3] rounded-[1.5rem] m-2">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-black text-white mb-2 tracking-tight uppercase">{project.title}</h3>
              <p className="text-gray-500 text-xs font-light mb-4 leading-relaxed">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[9px] uppercase tracking-widest font-mono px-3 py-1 bg-white/10 text-blue-300 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <button onClick={() => setSelectedProject(project)} aria-label="Quick View" className="p-3 bg-white/5 text-white rounded-xl hover:bg-blue-600 transition-all border border-white/10">
                  <FiEye size={20} />
                </button>
                <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="Github Repository" className="p-3 bg-white/5 text-white rounded-xl hover:bg-blue-600 transition-all border border-white/10">
                  <FiGithub size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

export default Portfolio;
