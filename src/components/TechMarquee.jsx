import { motion } from "framer-motion";
import { SiPython, SiPytorch, SiTensorflow, SiScikitlearn, SiOpencv, SiStreamlit, SiApachespark, SiNeo4J, SiGit, SiDocker } from "react-icons/si";

const techIcons = [
  { icon: <SiPython size={22} />, label: "Python" },
  { icon: <SiPytorch size={22} />, label: "PyTorch" },
  { icon: <SiTensorflow size={22} />, label: "TensorFlow" },
  { icon: <SiScikitlearn size={22} />, label: "Scikit-Learn" },
  { icon: <SiOpencv size={22} />, label: "OpenCV" },
  { icon: <SiStreamlit size={22} />, label: "Streamlit" },
  { icon: <SiApachespark size={22} />, label: "Spark" },
  { icon: <SiNeo4J size={22} />, label: "Neo4j" },
  { icon: <SiGit size={22} />, label: "Git" },
  { icon: <SiDocker size={22} />, label: "Docker" },
];

const doubled = [...techIcons, ...techIcons];

export default function TechMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-12 bg-[#020202] border-t border-white/5">
      <div className="flex items-center gap-2 mb-4 px-6 md:px-12">
        <span className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.4em]">Tech Stack</span>
        <div className="flex-1 h-[1px] bg-white/5" />
      </div>
      <motion.div
        className="flex gap-16 items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 text-gray-500 hover:text-blue-400 transition-colors"
          >
            {item.icon}
            <span className="text-[11px] font-mono uppercase tracking-widest whitespace-nowrap">
              {item.label}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
