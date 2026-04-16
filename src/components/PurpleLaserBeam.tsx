import { motion } from 'framer-motion';
import { useDeviceDetection } from '../hooks/useDeviceDetection';

export default function PurpleLaserBeam() {
  const { isMobile } = useDeviceDetection();

  if (isMobile) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-[200%] h-[2px] origin-top-left"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(147,51,234,0.3) 20%, rgba(147,51,234,0.4) 50%, rgba(147,51,234,0.3) 80%, transparent 100%)',
          boxShadow: '0 0 40px 15px rgba(147,51,234,0.2), 0 0 80px 30px rgba(147,51,234,0.1)',
          filter: 'blur(2px)',
          transform: 'rotate(25deg) translateY(30vh)',
        }}
        animate={{
          opacity: [0.05, 0.1, 0.05],
          scaleX: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-[200%] h-[2px] origin-bottom-right"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(147,51,234,0.3) 20%, rgba(147,51,234,0.4) 50%, rgba(147,51,234,0.3) 80%, transparent 100%)',
          boxShadow: '0 0 40px 15px rgba(147,51,234,0.2), 0 0 80px 30px rgba(147,51,234,0.1)',
          filter: 'blur(2px)',
          transform: 'rotate(-25deg) translateY(-30vh)',
        }}
        animate={{
          opacity: [0.05, 0.1, 0.05],
          scaleX: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />

    </div>
  );
}
