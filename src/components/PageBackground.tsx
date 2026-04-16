import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useDeviceDetection } from '../hooks/useDeviceDetection';
import { useReducedMotion } from '../hooks/useDeviceDetection';

interface PageBackgroundProps {
  variant?: 'default' | 'subtle';
}

const GRID_SIZE = 48;

function GridMesh() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      draw();
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cols = Math.ceil(canvas.width / GRID_SIZE) + 1;
      const rows = Math.ceil(canvas.height / GRID_SIZE) + 1;

      ctx.strokeStyle = 'rgba(147,51,234,0.05)';
      ctx.lineWidth = 0.5;

      for (let col = 0; col <= cols; col++) {
        ctx.beginPath();
        ctx.moveTo(col * GRID_SIZE, 0);
        ctx.lineTo(col * GRID_SIZE, canvas.height);
        ctx.stroke();
      }
      for (let row = 0; row <= rows; row++) {
        ctx.beginPath();
        ctx.moveTo(0, row * GRID_SIZE);
        ctx.lineTo(canvas.width, row * GRID_SIZE);
        ctx.stroke();
      }
    };

    resize();
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
    />
  );
}

export default function PageBackground({ variant = 'default' }: PageBackgroundProps) {
  const { isMobile } = useDeviceDetection();
  const prefersReducedMotion = useReducedMotion();

  const haloOpacity = variant === 'subtle' ? 0.05 : 0.08;

  if (isMobile) {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute -top-40 -left-40 w-80 h-80 rounded-full"
          style={{
            background: `radial-gradient(circle, rgba(147,51,234,${haloOpacity}) 0%, transparent 70%)`,
          }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full"
          style={{
            background: `radial-gradient(circle, rgba(147,51,234,${haloOpacity}) 0%, transparent 70%)`,
          }}
        />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <GridMesh />

      <motion.div
        className="absolute pointer-events-none"
        style={{
          top: '-20%',
          left: '-10%',
          width: '55vw',
          height: '55vw',
          borderRadius: '50%',
          background: `radial-gradient(circle, rgba(147,51,234,${haloOpacity}) 0%, transparent 65%)`,
          willChange: 'transform, opacity',
        }}
        animate={prefersReducedMotion ? {} : {
          scale: [1, 1.08, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute pointer-events-none"
        style={{
          bottom: '-20%',
          right: '-10%',
          width: '50vw',
          height: '50vw',
          borderRadius: '50%',
          background: `radial-gradient(circle, rgba(147,51,234,${haloOpacity * 0.8}) 0%, transparent 65%)`,
          willChange: 'transform, opacity',
        }}
        animate={prefersReducedMotion ? {} : {
          scale: [1, 1.1, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 5,
        }}
      />
    </div>
  );
}
