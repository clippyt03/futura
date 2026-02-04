import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { AlertTriangle } from 'lucide-react';

export default function CommonMistake() {
  const { t } = useTranslation();

  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-800 via-dark-900 to-dark-900" />

      {/* Intense purple glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/30 rounded-full blur-[150px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        {/* Warning icon */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            animate={{
              rotate: [0, -5, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <AlertTriangle
              size={64}
              className="text-purple-400"
              style={{
                filter: 'drop-shadow(0 0 30px rgba(147,51,234,0.8))'
              }}
            />
          </motion.div>
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="font-michroma text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-10 md:mb-12 leading-[1.15]"
          style={{
            textShadow: '0 0 40px rgba(147,51,234,0.9), 0 0 80px rgba(147,51,234,0.6)'
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t('commonMistake.headline')}
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-xl md:text-2xl text-white/70 leading-relaxed mb-12 md:mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t('commonMistake.description')}
        </motion.p>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p
            className="font-michroma text-2xl md:text-3xl lg:text-4xl font-bold text-purple-400"
            style={{
              textShadow: '0 0 30px rgba(147,51,234,0.9)'
            }}
          >
            {t('commonMistake.tagline')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
