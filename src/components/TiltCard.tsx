import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useTouchDevice } from '../hooks/useDeviceDetection';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltStrength?: number;
  glowColor?: string;
}

export default function TiltCard({
  children,
  className = '',
  tiltStrength = 15,
  glowColor = 'rgba(147,51,234,0.4)',
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const isTouchDevice = useTouchDevice();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * tiltStrength;
    const rotateY = ((x - centerX) / centerX) * tiltStrength * -1;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  if (isTouchDevice) {
    return (
      <motion.div
        className={className}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.15 }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
        position: 'relative',
      }}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
        scale: isHovered ? 1.05 : 1,
        y: isHovered ? -8 : 0,
      }}
      transition={{
        type: 'spring',
        stiffness: 600,
        damping: 20,
      }}
    >
      <div
        style={{
          transform: 'translateZ(20px)',
          position: 'relative',
          backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(147, 51, 234, 0.05), transparent 60%)',
        }}
      >
        {children}
      </div>
      {isHovered && (
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            boxShadow: `0 25px 80px ${glowColor}, 0 10px 40px rgba(0, 0, 0, 0.6)`,
          }}
        />
      )}
    </motion.div>
  );
}
