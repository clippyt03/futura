import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function WhoWeAre() {
  const { t } = useTranslation();

  return (
    <section id="who-we-are" className="relative py-40 md:py-48 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />

      {/* Subtle purple halo effect */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Main headline */}
        <motion.div
          className="text-center mb-24 md:mb-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-michroma text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-12 md:mb-16 leading-[1.1]">
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
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-24 md:mb-32 max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            className="bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-xl md:text-2xl font-bold text-white leading-relaxed">
              {t('whoWeAre.notExperiment')}
            </p>
          </motion.div>

          <motion.div
            className="bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <p className="text-xl md:text-2xl font-bold text-white leading-relaxed">
              {t('whoWeAre.notGadget')}
            </p>
          </motion.div>

          <motion.div
            className="bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <p className="text-xl md:text-2xl font-bold text-white leading-relaxed">
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
          <p className="font-michroma text-2xl md:text-3xl lg:text-4xl font-bold text-white/60">
            {t('whoWeAre.footer')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
