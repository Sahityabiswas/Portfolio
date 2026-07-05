import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiAward, FiGitBranch, FiDatabase } from 'react-icons/fi';

const stats = [
  { icon: <FiCode size={20} />, label: "Projects Built", value: 5, suffix: "+" },
  { icon: <FiAward size={20} />, label: "Certifications", value: 2, suffix: "" },
  { icon: <FiGitBranch size={20} />, label: "GitHub Repos", value: 10, suffix: "+" },
  { icon: <FiDatabase size={20} />, label: "Tech Stack", value: 12, suffix: "" },
];

function AnimatedCounter({ to, suffix = "" }) {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef(null);
  const counted = React.useRef(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const steps = 30;
          const increment = to / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= to) {
              setCount(to);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 40);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [to]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function StatsCounter() {
  return (
    <section className="relative w-full bg-[#020202] py-16 px-6 md:px-12 border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-blue-400 flex justify-center mb-3">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-black text-white mb-1">
                <AnimatedCounter to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-gray-500 text-[10px] font-mono uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
