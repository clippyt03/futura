import { useEffect, useRef } from 'react';
import { useDeviceDetection, useReducedMotion } from '../hooks/useDeviceDetection';

interface PageBackgroundProps {
  variant?: 'default' | 'subtle';
}

const GRID_SIZE = 48;
const SWEEP_DURATION = 19000;
const BAND_WIDTH_RATIO = 0.28;

function GridMesh({ prefersReducedMotion }: { prefersReducedMotion: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId: number;
    let startTime: number | null = null;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawGrid = () => {
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

    const drawSweep = (progress: number) => {
      const w = canvas.width;
      const h = canvas.height;
      const bandWidth = w * BAND_WIDTH_RATIO;
      const centerX = -bandWidth + (w + bandWidth * 2) * progress;

      const grad = ctx.createLinearGradient(centerX - bandWidth / 2, 0, centerX + bandWidth / 2, 0);
      grad.addColorStop(0, 'rgba(147,51,234,0)');
      grad.addColorStop(0.5, 'rgba(147,51,234,0.09)');
      grad.addColorStop(1, 'rgba(147,51,234,0)');

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
    };

    const frame = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = (timestamp - startTime) % SWEEP_DURATION;
      const progress = elapsed / SWEEP_DURATION;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawGrid();

      if (!prefersReducedMotion) {
        drawSweep(progress);
      }

      rafId = requestAnimationFrame(frame);
    };

    resize();
    window.addEventListener('resize', resize);
    rafId = requestAnimationFrame(frame);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(rafId);
    };
  }, [prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
    />
  );
}

export default function PageBackground({ variant: _variant = 'default' }: PageBackgroundProps) {
  const { isMobile } = useDeviceDetection();
  const prefersReducedMotion = useReducedMotion();

  if (isMobile) {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" />
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <GridMesh prefersReducedMotion={prefersReducedMotion} />
    </div>
  );
}
