import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const FrameScrollAnimation = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100, damping: 30, restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="relative h-[120vh] bg-[#020202]">
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center">
        
        <motion.div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: `url(${import.meta.env.BASE_URL}images/bg-welcome.jpg)`,
            opacity: useTransform(smoothProgress, [0, 0.3, 0.45], [0, 0.5, 0.6])
          }}
        />
        
        <motion.div 
          style={{ opacity: useTransform(smoothProgress, [0.2, 0.4, 0.65, 0.85], [0, 1, 1, 0]) }}
          className="absolute inset-x-0 top-[50%] -translate-y-1/2 flex flex-col items-center justify-center text-center pointer-events-none z-[60]"
        >
          <h3 className="text-white text-4xl md:text-8xl font-black uppercase tracking-tighter mb-2 drop-shadow-2xl">
            Welcome to my <span className="text-blue-500">Projects</span>
          </h3>
          <p className="text-blue-400 font-mono tracking-[0.6em] uppercase text-[12px] opacity-70">
            Core System Interface
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default FrameScrollAnimation;
