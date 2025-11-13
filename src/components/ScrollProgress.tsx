import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = scrollPx / winHeightPx;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-purple via-blue-500 to-neon-purple z-[9999] origin-left"
      style={{
        scaleX: scrollProgress,
        background: 'linear-gradient(90deg, #8A2BE2 0%, #6495ED 50%, #8A2BE2 100%)',
        boxShadow: '0 0 10px rgba(138, 43, 226, 0.5)',
      }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: scrollProgress }}
      transition={{ duration: 0.1, ease: "easeOut" }}
    />
  );
};

export default ScrollProgress;