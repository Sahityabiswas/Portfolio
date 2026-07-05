import { useEffect, useRef } from 'react';

export default function CursorFollower() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;

    let mouseX = 0, mouseY = 0;
    let posX = 0, posY = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      posX += (mouseX - posX) * 0.08;
      posY += (mouseY - posY) * 0.08;
      el.style.transform = `translate(${posX - 15}px, ${posY - 15}px)`;
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove);
    requestAnimationFrame(animate);

    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-[30px] h-[30px] rounded-full border border-blue-500/40 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
      style={{ transition: 'none' }}
    />
  );
}
