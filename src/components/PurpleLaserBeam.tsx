import { motion } from 'framer-motion';

export default function PurpleLaserBeam() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-[200%] h-[2px] origin-top-left"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(147,51,234,0.6) 20%, rgba(147,51,234,0.8) 50%, rgba(147,51,234,0.6) 80%, transparent 100%)',
          boxShadow: '0 0 80px 30px rgba(147,51,234,0.5), 0 0 160px 60px rgba(147,51,234,0.3)',
          filter: 'blur(2px)',
          transform: 'rotate(25deg) translateY(30vh)',
        }}
        animate={{
          opacity: [0.15, 0.25, 0.15],
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
          background: 'linear-gradient(90deg, transparent 0%, rgba(147,51,234,0.5) 20%, rgba(147,51,234,0.7) 50%, rgba(147,51,234,0.5) 80%, transparent 100%)',
          boxShadow: '0 0 60px 25px rgba(147,51,234,0.4), 0 0 120px 50px rgba(147,51,234,0.2)',
          filter: 'blur(2px)',
          transform: 'rotate(-25deg) translateY(-30vh)',
        }}
        animate={{
          opacity: [0.1, 0.2, 0.1],
          scaleX: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />

      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`laser-particle-${i}`}
          className="absolute w-2 h-2 bg-purple-400 rounded-full"
          style={{
            left: `${10 + i * 7}%`,
            top: `${25 + i * 3}%`,
            boxShadow: '0 0 20px 8px rgba(147,51,234,0.7)'
          }}
          animate={{
            scale: [0.5, 1.5, 0.5],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 2 + Math.random(),
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
