import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ClipboardCheck, CircleDollarSign, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDeviceDetection, useReducedMotion } from '../hooks/useDeviceDetection';

const serviceCategories = [
  { label: 'Automatyzacja Procesów', path: '/uslugi/automatyzacja-procesow-biznesowych' },
  { label: 'No-Code & Integracje', path: '/uslugi/automatyzacja-no-code' },
  { label: 'Sprzedaż & Marketing', path: '/uslugi/automatyzacja-sprzedazy-i-marketingu' },
  { label: 'Systemy AI', path: '/uslugi/systemy-ai-dla-firm' },
];

export default function Hero() {
  const { t } = useTranslation();
  const { isMobile, isTablet } = useDeviceDetection();
  const prefersReducedMotion = useReducedMotion();

  const shouldReduceAnimations = isMobile || prefersReducedMotion;
  const particleCount = isMobile ? 3 : 15;

  const handleCTA = () => {
    window.open('https://tally.so/r/2EPBVM', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 sm:py-28 md:py-40">
      {/* Background - Pure black to dark purple gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />

      {/* Circular purple halo effects - Disabled on mobile for performance */}
      {!shouldReduceAnimations && (
        <>
          <motion.div
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px]"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.35, 0.5, 0.35],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-700/30 rounded-full blur-[130px]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.45, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/25 rounded-full blur-[140px]"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.3, 0.4, 0.3],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </>
      )}

      {/* Static gradient for mobile */}
      {shouldReduceAnimations && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[400px] h-[280px] sm:h-[400px] bg-purple-600/20 rounded-full blur-[60px] sm:blur-[80px]" />
      )}

      {/* Subtle floating particles - Reduced count on mobile */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 opacity-30">
          {[...Array(particleCount)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-purple-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -80, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: shouldReduceAnimations ? 2 : 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 text-center px-5 sm:px-6 md:px-8 lg:px-12 max-w-5xl mx-auto w-full">

        {/* Main Headline - Clean and bold with text shadow */}
        <motion.h1
          className="font-michroma text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 md:mb-12 leading-[1.1] tracking-tight"
          style={{
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 8px 40px rgba(147, 51, 234, 0.4)',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t('hero.headline')}
        </motion.h1>

        {/* Subheadline - calm and clear */}
        <motion.p
          className="text-base sm:text-lg md:text-2xl lg:text-3xl text-white/60 mb-10 md:mb-20 max-w-3xl mx-auto leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t('hero.subheadline')}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-10 md:mb-20"
        >
          <div className="relative inline-block">
            {!shouldReduceAnimations && (
              <motion.div
                className="absolute -inset-1 rounded-xl bg-purple-500/40 blur-md"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            )}
            <motion.button
              onClick={handleCTA}
              className="group relative px-8 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 rounded-xl font-michroma text-sm sm:text-base md:text-lg text-white border-2 border-purple-500/40 bg-black/40 backdrop-blur-sm hover:border-purple-500/70 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">{t('hero.cta')}</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600/0 via-purple-600/10 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </div>

          <p className="text-sm text-white/30 mt-6">
            {t('cta.noCommitment')}
          </p>
        </motion.div>

        {/* 3 Benefits Bullets - with meaningful icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 max-w-4xl mx-auto"
        >
          <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceAnimations ? 0.3 : 0.6, delay: shouldReduceAnimations ? 0.1 : 0.7 }}
          >
            <div
              className="drop-shadow-[0_0_10px_rgba(147,51,234,0.6)]"
            >
              <ClipboardCheck
                size={32}
                className="text-purple-400"
              />
            </div>
            <p className="text-sm md:text-base text-white/50 font-light leading-relaxed">
              {t('hero.bullets.one')}
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceAnimations ? 0.3 : 0.6, delay: shouldReduceAnimations ? 0.15 : 0.85 }}
          >
            <div className="drop-shadow-[0_0_10px_rgba(147,51,234,0.6)]">
              <CircleDollarSign
                size={32}
                className="text-purple-400"
              />
            </div>
            <p className="text-sm md:text-base text-white/50 font-light leading-relaxed">
              {t('hero.bullets.two')}
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceAnimations ? 0.3 : 0.6, delay: shouldReduceAnimations ? 0.2 : 1 }}
          >
            <div className="drop-shadow-[0_0_10px_rgba(147,51,234,0.6)]">
              <Clock
                size={32}
                className="text-purple-400"
              />
            </div>
            <p className="text-sm md:text-base text-white/50 font-light leading-relaxed">
              {t('hero.bullets.three')}
            </p>
          </motion.div>
        </motion.div>

        {/* Service Category Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-16 md:mt-20"
        >
          <p className="text-xs font-michroma text-white/30 uppercase tracking-widest mb-5">
            Nasze obszary
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceCategories.map((cat, i) => (
              <motion.div
                key={cat.path}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + i * 0.08 }}
              >
                <Link
                  to={cat.path}
                  className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/3 hover:border-white/25 hover:bg-white/6 transition-all duration-300"
                >
                  <span className="font-michroma text-xs text-white/50 group-hover:text-white/80 transition-colors duration-300 tracking-wide">
                    {cat.label}
                  </span>
                  <ArrowRight size={11} className="text-white/25 group-hover:text-white/60 group-hover:translate-x-0.5 transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.55 }}
            >
              <Link
                to="/uslugi"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 hover:border-white/35 hover:bg-white/8 transition-all duration-300"
              >
                <span className="font-michroma text-xs text-white/60 group-hover:text-white transition-colors duration-300 tracking-wide">
                  Wszystkie usługi
                </span>
                <ArrowRight size={11} className="text-white/40 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Subtle scroll indicator - hidden on mobile */}
      <motion.div
        className="absolute bottom-12 w-full flex justify-center hidden sm:flex"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1 h-2 bg-white/40 rounded-full"
            animate={{
              y: [0, 12, 0],
              opacity: [1, 0, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
