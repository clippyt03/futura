import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  opacity: number;
}

const GlobalCursor: React.FC = () => {
  // Check if device is mobile/touch device
  const isMobile = typeof window !== 'undefined' && (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0
  );

  // Don't render cursor on mobile devices - COMPLETELY DISABLED ON MOBILE
  if (isMobile) {
    return null;
  }

  const glowRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const ambientRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const particleIdRef = useRef(0);

  useEffect(() => {
    const glow = glowRef.current;
    const trail = trailRef.current;
    const ambient = ambientRef.current;
    
    if (!glow || !trail || !ambient) return;

    let mouseX = 0;
    let mouseY = 0;
    let glowX = 0;
    let glowY = 0;
    let trailX = 0;
    let trailY = 0;
    let ambientX = 0;
    let ambientY = 0;

    let lastParticleTime = 0;
    const PARTICLE_INTERVAL = 50;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const now = Date.now();
      if (now - lastParticleTime > PARTICLE_INTERVAL) {
        const newParticle: Particle = {
          id: particleIdRef.current++,
          x: mouseX,
          y: mouseY,
          opacity: 1,
        };
        setParticles(prev => [...prev.slice(-8), newParticle]);
        lastParticleTime = now;
      }
    };

    const animateGlow = () => {
      // Different easing speeds for layered effect
      const ease = 0.15;
      const trailEase = 0.08;
      const ambientEase = 0.04;
      
      glowX += (mouseX - glowX) * ease;
      glowY += (mouseY - glowY) * ease;
      
      trailX += (mouseX - trailX) * trailEase;
      trailY += (mouseY - trailY) * trailEase;

      ambientX += (mouseX - ambientX) * ambientEase;
      ambientY += (mouseY - ambientY) * ambientEase;

      glow.style.transform = `translate(${glowX - 40}px, ${glowY - 40}px)`;
      trail.style.transform = `translate(${trailX - 75}px, ${trailY - 75}px)`;
      ambient.style.transform = `translate(${ambientX - 125}px, ${ambientY - 125}px)`;

      requestAnimationFrame(animateGlow);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animateGlow();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev =>
        prev
          .map(p => ({ ...p, opacity: p.opacity - 0.05 }))
          .filter(p => p.opacity > 0)
      );
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {particles.map(particle => (
        <div
          key={particle.id}
          className="fixed w-2 h-2 pointer-events-none z-[9996] rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            background: `rgba(147, 51, 234, ${particle.opacity * 0.6})`,
            boxShadow: `0 0 10px rgba(147, 51, 234, ${particle.opacity * 0.8})`,
            transform: 'translate(-50%, -50%)',
            transition: 'opacity 0.3s ease-out',
          }}
        />
      ))}
      {/* Large ambient background glow */}
      <div
        ref={ambientRef}
        className="fixed w-[250px] h-[250px] pointer-events-none z-[9997] mix-blend-mode-screen"
        style={{
          background: `
            radial-gradient(circle, 
              rgba(138, 43, 226, 0.08) 0%, 
              rgba(138, 43, 226, 0.04) 30%, 
              rgba(138, 43, 226, 0.02) 60%,
              transparent 100%
            )
          `,
          borderRadius: '50%',
          filter: 'blur(20px)',
        }}
      />

      {/* Medium trailing glow */}
      <div
        ref={trailRef}
        className="fixed w-[150px] h-[150px] pointer-events-none z-[9998] mix-blend-mode-screen"
        style={{
          background: `
            radial-gradient(circle, 
              rgba(138, 43, 226, 0.25) 0%, 
              rgba(138, 43, 226, 0.15) 40%, 
              rgba(138, 43, 226, 0.08) 70%,
              transparent 100%
            )
          `,
          borderRadius: '50%',
          filter: 'blur(15px)',
        }}
      />
      
      {/* Main sharp neon glow */}
      <div
        ref={glowRef}
        className="fixed w-[80px] h-[80px] pointer-events-none z-[9999] mix-blend-mode-screen"
        style={{
          background: `
            radial-gradient(circle, 
              rgba(138, 43, 226, 0.6) 0%, 
              rgba(138, 43, 226, 0.4) 30%, 
              rgba(138, 43, 226, 0.2) 60%,
              rgba(138, 43, 226, 0.1) 80%,
              transparent 100%
            )
          `,
          borderRadius: '50%',
          filter: 'blur(8px)',
        }}
      />
    </>
  );
};

export default GlobalCursor;