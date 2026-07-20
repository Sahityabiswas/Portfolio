import React, { Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import ErrorBoundary from './components/ErrorBoundary';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ScrollProgressBar from './components/ScrollProgressBar';
import CursorFollower from './components/CursorFollower';
import ScrollToTop from './components/ScrollToTop';
import TechMarquee from './components/TechMarquee';
import ParticleBackground from './components/ParticleBackground';
import SEO from './components/SEO';

const About = lazy(() => import('./components/About'));
const Career = lazy(() => import('./components/Career'));
const Certifications = lazy(() => import('./components/Certifications'));
const ProjectCaseStudy = lazy(() => import('./components/ProjectCaseStudy'));
const FrameScrollAnimation = lazy(() => import('./components/FrameScrollAnimation'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <SEO />
        <ParticleBackground />
        <ScrollProgressBar />
        <CursorFollower />
        <Navbar />
        <Hero />

        <Suspense fallback={<div className="h-screen bg-[#020202]" />}>
          <FrameScrollAnimation />
          <About />
          <Career />
          <Certifications />
          <ProjectCaseStudy />
          <TechMarquee />
          <Contact />
          <Footer />
        </Suspense>

        <ScrollToTop />
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
