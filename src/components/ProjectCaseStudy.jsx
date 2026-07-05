import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiChevronDown, FiTag, FiStar, FiLayers, FiBookOpen, FiCpu, FiCode, FiBarChart2, FiAlertTriangle, FiZap } from "react-icons/fi";
import caseStudyData from "../data/caseStudyData";

const categories = ["All", "Deep Learning", "Computer Vision", "Reinforcement Learning", "Machine Learning", "Data Engineering"];

const iconMap = {
  features: FiStar,
  problem: FiAlertTriangle,
  solution: FiZap,
  architecture: FiLayers,
  tech: FiCpu,
  methodology: FiBookOpen,
  model: FiCode,
  results: FiBarChart2,
  resources: FiExternalLink
};

function renderBold(text) {
  const parts = text.split(/(\*\*.*?\*\*)/);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="text-white">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

function Section({ title, icon: Icon, children, defaultOpen = false }) {
  return (
    <details open={defaultOpen} className="group border border-white/5 rounded-xl overflow-hidden bg-white/[0.02] hover:border-white/10 transition-all duration-300">
      <summary className="flex items-center gap-3 px-5 py-3.5 cursor-pointer text-sm font-mono uppercase tracking-widest text-gray-400 hover:text-white transition-colors select-none list-none">
        {Icon && <Icon size={14} className="text-blue-500 shrink-0" />}
        <span>{title}</span>
        <FiChevronDown size={14} className="ml-auto text-gray-600 group-open:rotate-180 transition-transform duration-300" />
      </summary>
      <div className="px-5 pb-5 pt-1 text-sm text-gray-400 leading-relaxed border-t border-white/5">
        {children}
      </div>
    </details>
  );
}

function ResultsTable({ results }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-xs font-mono">
        <thead>
          <tr className="border-b border-white/10 text-gray-500 uppercase tracking-wider">
            <th className="text-left py-2 pr-4">Metric</th>
            <th className="text-left py-2">Value</th>
          </tr>
        </thead>
        <tbody>
          {results.map((r, i) => (
            <tr key={i} className="border-b border-white/5 last:border-0">
              <td className="py-2 pr-4 text-gray-400">{r.metric}</td>
              <td className="py-2 text-white/90">{r.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TagBadge({ tag }) {
  return (
    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[9px] font-mono tracking-wider rounded-sm">
      <FiTag size={8} />
      {tag}
    </span>
  );
}

function TechStackTable({ techStack }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-xs font-mono">
        <thead>
          <tr className="border-b border-white/10 text-gray-500 uppercase tracking-wider">
            <th className="text-left py-2 pr-4 w-1/3">Category</th>
            <th className="text-left py-2">Technology</th>
          </tr>
        </thead>
        <tbody>
          {techStack.map((t, i) => (
            <tr key={i} className="border-b border-white/5 last:border-0">
              <td className="py-2 pr-4 text-gray-400">{t.category}</td>
              <td className="py-2 text-white/90">{t.tech}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const ProjectCard = React.memo(({ project }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden"
    >
      {/* Hero Bar */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={project.image} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#020202] via-[#020202]/95 to-transparent" />
        <div className="relative z-10 p-6 md:p-8 lg:p-10">
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tags.map(tag => <TagBadge key={tag} tag={tag} />)}
          </div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tighter uppercase mb-2">
            {project.title}<span className="text-blue-500">.</span>
          </h3>
          <p className="text-blue-400 font-mono text-[10px] uppercase tracking-[0.3em] mb-3">
            {project.category} · {project.duration} · {project.teamSize}
          </p>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-3xl mb-4">
            {project.tagline}
          </p>
          <div className="flex gap-3">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 text-white hover:bg-white/10 transition-all rounded-lg text-[10px] font-mono uppercase tracking-widest">
              <FiGithub size={14} /> Source
            </a>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="px-6 md:px-8 lg:px-10 pb-2">
        <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-blue-500/50 pl-4 italic">
          {project.summary}
        </p>
      </div>

      {/* Always-visible sections */}
      <div className="px-6 md:px-8 lg:px-10 pb-6 space-y-4">
        {/* Project Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4">
            <p className="text-red-400 font-mono text-[9px] uppercase tracking-widest mb-1.5">Problem</p>
            <p className="text-gray-400 text-xs leading-relaxed">{project.overview.problem}</p>
          </div>
          <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4">
            <p className="text-blue-400 font-mono text-[9px] uppercase tracking-widest mb-1.5">Why It Matters</p>
            <p className="text-gray-400 text-xs leading-relaxed">{project.overview.importance}</p>
          </div>
          <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4">
            <p className="text-green-400 font-mono text-[9px] uppercase tracking-widest mb-1.5">Target Users</p>
            <p className="text-gray-400 text-xs leading-relaxed">{project.overview.targetUsers}</p>
          </div>
        </div>

        {/* Problem Statement */}
        <Section title="Problem Statement" icon={iconMap.problem}>
          <div className="space-y-3">
            {project.problemStatement.opening && (
              <p className="text-gray-400 text-xs leading-relaxed">{project.problemStatement.opening}</p>
            )}
            <ul className="space-y-3 list-disc list-inside">
              {project.problemStatement.points.map((p, i) => (
                <li key={i} className="text-gray-400 text-xs leading-relaxed">{renderBold(p)}</li>
              ))}
            </ul>
            {project.problemStatement.closing && (
              <p className="text-gray-400 text-xs leading-relaxed italic">{project.problemStatement.closing}</p>
            )}
          </div>
        </Section>

        {/* Solution Approach */}
        <Section title="Solution Approach" icon={iconMap.solution}>
          <p className="text-gray-400 whitespace-pre-line">{renderBold(project.solutionApproach)}</p>
        </Section>

        {/* Key Features */}
        <Section title="Key Features" icon={iconMap.features} defaultOpen={false}>
          <ul className="space-y-2">
            {project.features.map((f, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-blue-500 mt-1 shrink-0">▸</span>
                <span className="text-gray-400">{renderBold(f)}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* System Architecture */}
        {project.architecture && (
          <Section title="System Architecture" icon={iconMap.architecture}>
            <div className="text-[10px] md:text-[11px] font-mono text-gray-500 leading-relaxed bg-black/30 p-4 rounded-lg overflow-x-auto whitespace-pre-wrap">
              {renderBold(project.architecture)}
            </div>
          </Section>
        )}

        {/* Technology Stack */}
        <Section title="Technology Stack" icon={iconMap.tech}>
          <TechStackTable techStack={project.techStack} />
        </Section>

        {/* Dataset / Inputs / Resources */}
        <Section title="Dataset / Inputs / Resources" icon={iconMap.resources}>
          <div className="text-[11px] font-mono text-gray-400 leading-relaxed whitespace-pre-wrap bg-black/30 p-4 rounded-lg">
            {renderBold(project.dataset)}
          </div>
          <div className="flex flex-wrap gap-3 mt-4">
            {project.resources.map((r, i) => (
              <a key={i} href={r.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-2 border border-white/10 text-gray-400 hover:text-white hover:border-blue-500/40 transition-all rounded-lg text-[10px] font-mono uppercase tracking-widest">
                <FiExternalLink size={12} />
                {r.label}
              </a>
            ))}
          </div>
        </Section>

        {/* Methodology / Workflow */}
        <Section title="Methodology / Workflow" icon={iconMap.methodology}>
          <ol className="space-y-2 list-decimal list-inside">
            {project.methodology.map((m, i) => (
              <li key={i} className="text-gray-400 text-xs">{renderBold(m)}</li>
            ))}
          </ol>
        </Section>

        {/* Model / System Design */}
        <Section title="Model / System Design" icon={iconMap.model}>
          <div className="text-xs font-mono text-gray-400 leading-relaxed whitespace-pre-wrap">{renderBold(project.modelDesign)}</div>
        </Section>

        {/* Results & Performance */}
        <Section title="Results & Performance" icon={iconMap.results} defaultOpen={true}>
          <ResultsTable results={project.results} />
        </Section>
      </div>
    </motion.div>
  );
});

export default function ProjectCaseStudy() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? caseStudyData
    : caseStudyData.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="bg-[#020202] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <p className="text-blue-500 font-mono tracking-[0.4em] uppercase text-[10px] mb-4">
            Project Showcase
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 uppercase tracking-tighter">
            Selected Works<span className="text-blue-500">.</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-3 mb-4">
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
        </motion.div>

        <div className="space-y-12">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 font-mono text-sm mt-20">No projects in this category.</p>
        )}
      </div>
    </section>
  );
}
