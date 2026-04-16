import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useDeviceDetection } from '../hooks/useDeviceDetection';
import { useReducedMotion } from '../hooks/useDeviceDetection';

interface PageBackgroundProps {
  variant?: 'default' | 'subtle';
}

const GRID_SIZE = 48;
const TRACE_PATHS = [
  { x1: '0%', y1: '15%', x2: '100%', y2: '65%' },
  { x1: '100%', y1: '10%', x2: '0%', y2: '80%' },
  { x1: '20%', y1: '0%', x2: '80%', y2: '100%' },
];

function CircuitTrace({
  x1, y1, x2, y2,
  delay,
  duration,
}: {
  x1: string; y1: string; x2: string; y2: string;
  delay: number;
  duration: number;
}) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`trace-grad-${delay}`} x1={x1} y1={y1} x2={x2} y2={y2} gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="rgba(147,51,234,0)" />
          <stop offset="45%" stopColor="rgba(147,51,234,0.12)" />
          <stop offset="55%" stopColor="rgba(167,71,254,0.18)" />
          <stop offset="100%" stopColor="rgba(147,51,234,0)" />
        </linearGradient>
        <filter id={`trace-blur-${delay}`}>
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.2" />
        </filter>
      </defs>
      <motion.line
        x1={x1} y1={y1} x2={x2} y2={y2}
        stroke={`url(#trace-grad-${delay})`}
        strokeWidth="1"
        filter={`url(#trace-blur-${delay})`}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          repeatDelay: duration * 0.6,
          ease: 'easeInOut',
        }}
      />
      <motion.circle
        r="2.5"
        fill="rgba(167,71,254,0.6)"
        style={{ filter: 'blur(1px)' }}
        animate={{
          cx: [x1, x2],
          cy: [y1, y2],
          opacity: [0, 0.7, 0.7, 0],
        }}
        transition={{
          duration,
          delay: delay + 0.1,
          repeat: Infinity,
          repeatDelay: duration * 0.6,
          ease: 'linear',
        }}
      />
    </svg>
  );
}

function GridMesh() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrame: number;
    let tick = 0;

    const activeCells: Map<string, number> = new Map();

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const cols = () => Math.ceil(canvas.width / GRID_SIZE) + 1;
    const rows = () => Math.ceil(canvas.height / GRID_SIZE) + 1;

    const draw = () => {
      tick++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const c = cols();
      const r = rows();

      if (tick % 45 === 0) {
        const col = Math.floor(Math.random() * c);
        const row = Math.floor(Math.random() * r);
        activeCells.set(`${col},${row}`, 1.0);
      }

      activeCells.forEach((alpha, key) => {
        const newAlpha = alpha - 0.015;
        if (newAlpha <= 0) {
          activeCells.delete(key);
        } else {
          activeCells.set(key, newAlpha);
        }
      });

      ctx.strokeStyle = 'rgba(147,51,234,0.04)';
      ctx.lineWidth = 0.5;

      for (let col = 0; col <= c; col++) {
        ctx.beginPath();
        ctx.moveTo(col * GRID_SIZE, 0);
        ctx.lineTo(col * GRID_SIZE, canvas.height);
        ctx.stroke();
      }
      for (let row = 0; row <= r; row++) {
        ctx.beginPath();
        ctx.moveTo(0, row * GRID_SIZE);
        ctx.lineTo(canvas.width, row * GRID_SIZE);
        ctx.stroke();
      }

      activeCells.forEach((alpha, key) => {
        const [col, row] = key.split(',').map(Number);
        ctx.strokeStyle = `rgba(147,51,234,${alpha * 0.18})`;
        ctx.lineWidth = 0.8;
        ctx.strokeRect(
          col * GRID_SIZE,
          row * GRID_SIZE,
          GRID_SIZE,
          GRID_SIZE
        );

        const grd = ctx.createRadialGradient(
          col * GRID_SIZE + GRID_SIZE / 2,
          row * GRID_SIZE + GRID_SIZE / 2,
          0,
          col * GRID_SIZE + GRID_SIZE / 2,
          row * GRID_SIZE + GRID_SIZE / 2,
          GRID_SIZE * 0.7
        );
        grd.addColorStop(0, `rgba(147,51,234,${alpha * 0.06})`);
        grd.addColorStop(1, 'rgba(147,51,234,0)');
        ctx.fillStyle = grd;
        ctx.fillRect(col * GRID_SIZE, row * GRID_SIZE, GRID_SIZE, GRID_SIZE);
      });

      animFrame = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 1 }}
    />
  );
}

export default function PageBackground({ variant = 'default' }: PageBackgroundProps) {
  const { isMobile } = useDeviceDetection();
  const prefersReducedMotion = useReducedMotion();

  const haloOpacity = variant === 'subtle' ? 0.04 : 0.06;

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

      {!prefersReducedMotion && (
        <>
          {TRACE_PATHS.map((path, i) => (
            <CircuitTrace
              key={i}
              x1={path.x1}
              y1={path.y1}
              x2={path.x2}
              y2={path.y2}
              delay={i * 4}
              duration={8 + i * 2}
            />
          ))}
        </>
      )}

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

      {!prefersReducedMotion && (
        <motion.div
          className="absolute pointer-events-none"
          style={{
            top: '35%',
            right: '15%',
            width: '25vw',
            height: '25vw',
            borderRadius: '50%',
            background: `radial-gradient(circle, rgba(59,130,246,${haloOpacity * 0.5}) 0%, transparent 65%)`,
            willChange: 'transform, opacity',
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.8, 0.4],
            x: [0, 20, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 8,
          }}
        />
      )}
    </div>
  );
}
