import React, { Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ScrollProgressBar from './components/ScrollProgressBar';
import CursorFollower from './components/CursorFollower';
import ScrollToTop from './components/ScrollToTop';
import TechMarquee from './components/TechMarquee';
import ParticleBackground from './components/ParticleBackground';
import SEO from './components/SEO';
import { ThemeProvider } from './context/ThemeContext';

const About = lazy(() => import('./components/About'));
const Career = lazy(() => import('./components/Career'));
const Certifications = lazy(() => import('./components/Certifications'));
const ProjectCaseStudy = lazy(() => import('./components/ProjectCaseStudy'));
const FrameScrollAnimation = lazy(() => import('./components/FrameScrollAnimation'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

const sectionVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function AnimatedSection({ children, ...props }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div variants={sectionVariants} initial="initial" animate="animate" {...props}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <SEO />
        <ParticleBackground />
        <ScrollProgressBar />
        <CursorFollower />
        <Navbar />
        <Hero />

        <Suspense fallback={<div className="h-screen bg-[#020202]" />}>
          <FrameScrollAnimation />
          <AnimatedSection><About /></AnimatedSection>
          <AnimatedSection><Career /></AnimatedSection>
          <AnimatedSection><Certifications /></AnimatedSection>
          <AnimatedSection><ProjectCaseStudy /></AnimatedSection>
          <TechMarquee />
          <AnimatedSection><Contact /></AnimatedSection>
          <Footer />
        </Suspense>

        <ScrollToTop />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
