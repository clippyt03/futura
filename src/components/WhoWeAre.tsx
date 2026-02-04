import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Zap, Puzzle, Clock } from 'lucide-react';
import TiltCard from './TiltCard';

export default function WhoWeAre() {
  const { t } = useTranslation();

  const items = [
    { text: t('whoWeAre.notGadget'), icon: Zap },
    { text: t('whoWeAre.integration'), icon: Puzzle },
    { text: t('whoWeAre.systemsWork'), icon: Clock },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

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
        <div className="text-center mb-24 md:mb-32">
          <h2 className="font-michroma text-5xl md:text-7xl lg:text-8xl font-bold text-gradient-purple mb-12 md:mb-16 leading-[1.1]">
            {t('whoWeAre.headline')}
          </h2>

          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {t('whoWeAre.subtitle')}
          </motion.p>
        </div>

        {/* Three cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="h-full"
            >
              <TiltCard
                className="group h-full p-8 rounded-2xl bg-black/20 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 flex flex-col items-center justify-center gap-6 min-h-[280px]"
                tiltStrength={10}
                glowColor="rgba(147,51,234,0.5)"
              >
                <motion.div
                  whileHover={{
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <item.icon
                    size={40}
                    className="text-purple-500 group-hover:text-purple-400 transition-colors duration-300"
                    style={{
                      filter: 'drop-shadow(0 0 10px rgba(147,51,234,0.6))'
                    }}
                  />
                </motion.div>
                <p className="text-base md:text-lg text-white/70 leading-relaxed font-light text-center">
                  {item.text}
                </p>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
