import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useDeviceDetection } from '../hooks/useDeviceDetection';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { isMobile } = useDeviceDetection();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-50 p-3 sm:p-4 min-h-[44px] min-w-[44px] rounded-full bg-purple-500/20 border-2 border-purple-500/40 backdrop-blur-sm hover:bg-purple-500/30 hover:border-purple-500/60 transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-900"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to top"
        >
          {!isMobile && (
            <motion.div
              className="absolute inset-0 rounded-full bg-purple-500/20"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          )}
          <ArrowUp
            size={24}
            className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300 relative z-10"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
