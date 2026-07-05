import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ParticleBackground from './ParticleBackground';

function useTypewriter(texts, { delay = 2000, typeSpeed = 50, deleteSpeed = 30 } = {}) {
  const [displayed, setDisplayed] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex % texts.length];
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (charIndex < currentText.length) {
          setDisplayed(currentText.slice(0, charIndex + 1));
          setCharIndex(c => c + 1);
        } else {
          setTimeout(() => setDeleting(true), delay);
        }
      } else {
        if (charIndex > 0) {
          setDisplayed(currentText.slice(0, charIndex - 1));
          setCharIndex(c => c - 1);
        } else {
          setDeleting(false);
          setTextIndex(i => i + 1);
        }
      }
    }, deleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, textIndex, texts, delay, typeSpeed, deleteSpeed]);

  return { text: displayed, isTyping: !deleting && charIndex < texts[textIndex % texts.length].length };
}

gsap.registerPlugin(ScrollTrigger);

const subtitleTexts = [
  "Data Scientist & AI Engineer",
  "Building Intelligent Systems",
  "Deep Learning | NLP | RL",
];

export default function Hero() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [ready, setReady] = useState(false);
  const { text: typedText } = useTypewriter(subtitleTexts, { delay: 2500 });

  const frameCount = 240;
  const currentFrame = (index) => `/images/ezgif-frame-${(index + 1).toString().padStart(3, '0')}.jpg`;
  
  const imagesRef = useRef([]);
  const seqRef = useRef({ frame: 0 });

  useEffect(() => {
    let loadedCount = 0;
    const total = frameCount;
    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        img.onload = () => {
            loadedCount++;
            if (loadedCount === 1) setReady(true);
        };
        img.onerror = () => {
            loadedCount++;
            if (loadedCount === 1) setReady(true);
        };
        imagesRef.current.push(img);
    }
    setTimeout(() => setReady(true), 3000);
  }, []);

  useEffect(() => {
    if (!ready) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    canvas.width = 1920;
    canvas.height = 1080;

    const render = () => {
        if (!canvasRef.current || !imagesRef.current.length) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let frameIdx = Math.round(seqRef.current.frame);
        if (frameIdx >= frameCount) frameIdx = frameCount - 1;
        
        const img = imagesRef.current[frameIdx];
        if (img && img.complete && img.naturalHeight !== 0) {
            const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
            const x = (canvas.width - img.width * scale) / 2;
            const y = (canvas.height - img.height * scale) / 2;
            ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
        }
    };

    render();

    const bootTl = gsap.timeline({ delay: 0.5 });

    bootTl.fromTo('.noise-overlay', { opacity: 0 }, { opacity: 0.15, duration: 1, ease: "none" }, 0);
    bootTl.fromTo('.center-glow', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1.5, ease: "power1.inOut" }, 0.2);
    bootTl.fromTo('nav', { y: -50, opacity: 0, filter: 'blur(10px)' }, { y: 0, opacity: 1, filter: 'blur(0)', duration: 1, ease: "power2.out" }, 0.5);
    bootTl.fromTo(canvas, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }, 0.8);
    bootTl.to(seqRef.current, { frame: 10, snap: "frame", duration: 1.5, ease: "power1.inOut", onUpdate: render }, 0.8);
    bootTl.fromTo('.hud-element', { opacity: 0 }, { opacity: 1, duration: 0.1, stagger: 0.1, ease: "none" }, 1.2);
    bootTl.fromTo('.social-icon', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.2, stagger: 0.1, ease: "none" }, 2.4);

    gsap.set('.name-text, .title-text, .desc-text, .btn-text', { opacity: 0 });
    gsap.set('.name-text', { y: 20 });
    gsap.set('.title-text', { y: 15 });
    gsap.set('.desc-text', { y: 15 });
    gsap.set('.btn-text', { y: 10 });
    gsap.set(canvas, { filter: "blur(0px)", webkitFilter: "blur(0px)" });

    const tlScroll = gsap.timeline({
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=800",
            scrub: 0.5,
            pin: true,
            anticipatePin: 1
        }
    });

    tlScroll.to(seqRef.current, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        duration: 0.5,
        onUpdate: render
    }, 0);

    tlScroll.to('.name-text', 
        { opacity: 1, y: 0, duration: 0.15, ease: "power2.out" },
        0
    );
    tlScroll.to('.title-text', 
        { opacity: 1, y: 0, duration: 0.15, ease: "power2.out" },
        0.1
    );
    tlScroll.to('.desc-text', 
        { opacity: 1, y: 0, duration: 0.15, ease: "power2.out" },
        0.2
    );
    tlScroll.to('.btn-text', 
        { opacity: 1, y: 0, duration: 0.15, ease: "power2.out" },
        0.3
    );

    tlScroll.to(canvas, {
        filter: "blur(15px)",
        webkitFilter: "blur(15px)",
        scale: 1.05,
        duration: 0.15,
        ease: "power2.inOut"
    }, 0.5);

    tlScroll.fromTo('.portfolio-ui', 
        { opacity: 1, filter: "blur(0px)" },
        { opacity: 0, filter: "blur(5px)", duration: 0.15, ease: "none" },
        0.5
    );
    
    tlScroll.fromTo('.social-icon', 
        { opacity: 1 },
        { opacity: 0, duration: 0.15, ease: "none" },
        0.5
    );

    return () => {
        ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [ready]);

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-[#020202] overflow-hidden flex items-center justify-center font-sans tracking-wide">
        
        <div className="portfolio-ui absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="portfolio-ui noise-overlay absolute inset-0 z-0 pointer-events-none mix-blend-overlay opacity-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
        <div className="portfolio-ui center-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none opacity-0 mix-blend-screen z-[1]"></div>

        <ParticleBackground />

        <div className="portfolio-ui absolute top-28 left-8 md:top-32 md:left-12 z-[60] font-mono text-[10px] text-blue-400 tracking-widest flex flex-col space-y-1.5 pointer-events-none">
            <span className="hud-element opacity-0">&gt; SYSTEM ONLINE</span>
            <span className="hud-element opacity-0">&gt; INITIALIZING PORTFOLIO v2.0</span>
            <span className="hud-element opacity-0">&gt; NEURAL LINK ESTABLISHED</span>
        </div>
        <div className="portfolio-ui absolute bottom-12 right-8 md:bottom-12 md:right-12 z-[60] font-mono text-[10px] text-gray-600 tracking-widest text-right flex flex-col space-y-1.5 pointer-events-none">
            <span className="hud-element opacity-0">SYS_ID: DS_AI_55</span>
            <span className="hud-element opacity-0">COORD: 22.5726 N / 88.3639 E</span>
        </div>

        <div className="portfolio-ui absolute bottom-12 left-8 md:left-12 z-[60] flex flex-col space-y-5">
            <a href="https://github.com/Sahityabiswas" target="_blank" rel="noreferrer" className="social-icon opacity-0 text-gray-500 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/mathdsai55" target="_blank" rel="noreferrer" className="social-icon opacity-0 text-gray-500 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
        </div>

        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full object-cover z-10 opacity-0 scale-95"
        />

        <div className="portfolio-ui absolute inset-0 z-[50] pointer-events-none flex flex-col md:flex-row justify-between items-center md:items-center px-8 md:px-[15%] lg:px-[18%] pt-32 pb-16 md:pt-0 pb-0">
            <div className="content-text w-full md:w-[35%] flex flex-col items-center md:items-start text-center md:text-left md:-ml-[12%]">
                <div className="mb-4">
                    <h1 className="name-text text-5xl md:text-6xl lg:text-7xl font-sans font-bold text-white tracking-[0.1em] uppercase leading-none" style={{ textShadow: "0 0 20px rgba(255,255,255,0.2)" }}>
                        SAHITYA BISWAS
                    </h1>
                </div>
                <div className="relative inline-block">
                    <h2 className="title-text text-sm md:text-md lg:text-lg font-mono text-gray-300 tracking-[0.2em] uppercase pb-2 min-h-[1.5em]">
                        {typedText || 'Data Scientist & AI Engineer'}
                        <span className="animate-pulse ml-0.5 text-blue-400">|</span>
                    </h2>
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/60"></div>
                </div>
            </div>
            <div className="content-text w-full md:w-[45%] flex flex-col items-center md:items-start text-center md:text-left mt-16 md:mt-0 md:pl-64">
                <div className="mb-8">
                    <p className="desc-text text-gray-400 text-sm md:text-sm lg:text-base font-light tracking-wide leading-relaxed">
                        Mathematics graduate pursuing MSc in Data Science and AI. Building AI systems across deep learning, NLP, and reinforcement learning.
                    </p>
                </div>
                <div className="pointer-events-auto">
                    <div className="btn-text inline-flex items-center px-8 py-3 border border-gray-700 bg-black/50 hover:bg-black/80 hover:border-blue-500/50 transition-colors cursor-pointer rounded-sm backdrop-blur-md group">
                        <span className="text-gray-300 font-mono tracking-widest uppercase text-xs group-hover:text-white transition-colors">Explore Work</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
