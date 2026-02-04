import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ClipboardCheck, CircleDollarSign, Clock } from 'lucide-react';
import EnhancedMagneticButton from './EnhancedMagneticButton';

export default function Hero() {
  const { t } = useTranslation();

  const handleCTA = () => {
    window.open('https://tally.so/r/2EPBVM', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-32 md:py-40">
      {/* Background - Pure black to dark purple gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />

      {/* Circular purple halo effects - Subtle and cohesive */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-700/20 rounded-full blur-[130px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/15 rounded-full blur-[140px]"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.15, 0.25, 0.15],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Subtle floating particles */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(15)].map((_, i) => (
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
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 md:px-8 lg:px-12 max-w-5xl mx-auto">

        {/* Main Headline - Clean and bold */}
        <motion.h1
          className="font-michroma text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-10 md:mb-12 leading-[1.1] tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t('hero.headline')}
        </motion.h1>

        {/* Subheadline - calm and clear */}
        <motion.p
          className="text-lg md:text-2xl lg:text-3xl text-white/60 mb-16 md:mb-20 max-w-3xl mx-auto leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t('hero.subheadline')}
        </motion.p>

        {/* CTA Button - with magnetic and neon effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16 md:mb-20"
        >
          <EnhancedMagneticButton
            onClick={handleCTA}
            className="group relative px-10 md:px-14 py-5 md:py-6 rounded-xl font-michroma text-base md:text-lg text-white border-2 border-purple-500/40 bg-black/40 backdrop-blur-sm hover:border-purple-500/70 transition-all duration-300"
            magneticStrength={0.3}
          >
            <span
              className="relative z-10"
              style={{
                textShadow: '0 0 10px rgba(147,51,234,0.6)'
              }}
            >
              {t('hero.cta')}
            </span>
            <div
              className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600/0 via-purple-600/10 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                boxShadow: '0 0 30px rgba(147,51,234,0.7), inset 0 0 20px rgba(147,51,234,0.3)'
              }}
            />
          </EnhancedMagneticButton>
        </motion.div>

        {/* 3 Benefits Bullets - with meaningful icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto"
        >
          <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <motion.div
              animate={{
                y: [0, -8, 0],
                filter: [
                  'drop-shadow(0 0 10px rgba(147,51,234,0.6))',
                  'drop-shadow(0 0 20px rgba(147,51,234,0.9))',
                  'drop-shadow(0 0 10px rgba(147,51,234,0.6))'
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ClipboardCheck
                size={32}
                className="text-purple-400"
              />
            </motion.div>
            <p className="text-sm md:text-base text-white/50 font-light leading-relaxed">
              {t('hero.bullets.one')}
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
          >
            <motion.div
              animate={{
                y: [0, -8, 0],
                filter: [
                  'drop-shadow(0 0 10px rgba(147,51,234,0.6))',
                  'drop-shadow(0 0 20px rgba(147,51,234,0.9))',
                  'drop-shadow(0 0 10px rgba(147,51,234,0.6))'
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <CircleDollarSign
                size={32}
                className="text-purple-400"
              />
            </motion.div>
            <p className="text-sm md:text-base text-white/50 font-light leading-relaxed">
              {t('hero.bullets.two')}
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.div
              animate={{
                y: [0, -8, 0],
                filter: [
                  'drop-shadow(0 0 10px rgba(147,51,234,0.6))',
                  'drop-shadow(0 0 20px rgba(147,51,234,0.9))',
                  'drop-shadow(0 0 10px rgba(147,51,234,0.6))'
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            >
              <Clock
                size={32}
                className="text-purple-400"
              />
            </motion.div>
            <p className="text-sm md:text-base text-white/50 font-light leading-relaxed">
              {t('hero.bullets.three')}
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
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
