import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function WhoWeAre() {
  const { t } = useTranslation();

  return (
    <section className="relative py-40 md:py-48 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />

      {/* Diagonal purple neon beam - inspired by pin_1_v2.jpg */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div
          className="absolute top-0 left-0 w-[200%] h-[2px] origin-top-left rotate-[30deg] translate-y-[20%]"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(147,51,234,0.9) 30%, rgba(147,51,234,0.9) 70%, transparent 100%)',
            boxShadow: '0 0 60px 20px rgba(147,51,234,0.8), 0 0 120px 40px rgba(147,51,234,0.4)',
            filter: 'blur(2px)'
          }}
        />
      </motion.div>

      {/* Glowing particles along the beam */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`beam-particle-${i}`}
            className="absolute w-3 h-3 bg-purple-400 rounded-full"
            style={{
              left: `${15 + i * 12}%`,
              top: `${20 + i * 8}%`,
              boxShadow: '0 0 30px 10px rgba(147,51,234,0.8)'
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Main headline */}
        <motion.div
          className="text-center mb-24 md:mb-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="font-michroma text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-12 md:mb-16 leading-[1.1]"
            style={{
              textShadow: '0 0 40px rgba(147,51,234,0.9), 0 0 80px rgba(147,51,234,0.6)'
            }}
          >
            {t('whoWeAre.headline')}
          </h2>

          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('whoWeAre.subtitle')}
          </motion.p>
        </motion.div>

        {/* Three columns */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-24 md:mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-2xl md:text-3xl font-bold text-white/80 leading-relaxed">
              {t('whoWeAre.notExperiment')}
            </p>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <p className="text-2xl md:text-3xl font-bold text-white/80 leading-relaxed">
              {t('whoWeAre.notGadget')}
            </p>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <p className="text-2xl md:text-3xl font-bold text-white/80 leading-relaxed">
              {t('whoWeAre.systemsWork')}
            </p>
          </motion.div>
        </motion.div>

        {/* Footer tagline */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <p
            className="font-michroma text-2xl md:text-3xl lg:text-4xl font-bold text-white"
            style={{
              textShadow: '0 0 20px rgba(147,51,234,0.8)'
            }}
          >
            {t('whoWeAre.footer')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
