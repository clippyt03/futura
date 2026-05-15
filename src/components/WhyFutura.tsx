import { motion } from 'framer-motion';
import { FileText, Settings, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionTransition from './SectionTransition';
import { AUDIT_FORM_URL } from '../config/constants';

const WhyFutura = () => {
  const { t } = useTranslation();

  const handleCTA = () => {
    window.open(AUDIT_FORM_URL, '_blank');
  };

  const benefits = [
    {
      icon: FileText,
      title: t('whyFutura.approach.title'),
      description: t('whyFutura.approach.description'),
    },
    {
      icon: Settings,
      title: t('whyFutura.custom.title'),
      description: t('whyFutura.custom.description'),
    },
    {
      icon: Shield,
      title: t('whyFutura.control.title'),
      description: t('whyFutura.control.description'),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
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
    <SectionTransition className="relative overflow-hidden">
      <section id="why-futura" className="py-20 md:py-32 lg:py-40 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />

        {/* Subtle purple halo effect */}
        <motion.div
          className="absolute top-1/3 left-1/3 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-purple-600/10 rounded-full blur-[60px] md:blur-[110px]"
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
          {/* Header */}
          <SectionTransition delay={0.2}>
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-24 lg:mb-32 px-0">
              <h2 className="font-michroma text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 leading-tight px-4" style={{ color: '#ffffff' }}>
                {t('whyFutura.headline')}
              </h2>
            </div>
          </SectionTransition>

          {/* Benefits grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 lg:gap-16 mb-16 md:mb-28 lg:mb-40 justify-items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="group flex flex-col items-center text-center w-full max-w-sm mx-auto min-h-[320px] p-8 rounded-2xl bg-black/20 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
                variants={cardVariants}
              >
                <div className="flex justify-center w-full mb-6">
                  <benefit.icon
                    size={40}
                    className="text-purple-500 group-hover:text-purple-400 transition-colors duration-300"
                    style={{
                      filter: 'drop-shadow(0 0 10px rgba(147,51,234,0.6))'
                    }}
                  />
                </div>

                <h3 className="font-michroma text-xl md:text-2xl font-bold text-white mb-4">
                  {benefit.title}
                </h3>

                <p className="text-base md:text-lg text-white/50 leading-relaxed font-light">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.button
              onClick={handleCTA}
              className="group relative px-8 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 rounded-xl font-michroma text-sm sm:text-base md:text-lg text-white border-2 border-purple-500/40 bg-black/40 backdrop-blur-sm hover:border-purple-500/70 transition-all duration-300 hover:shadow-[0_0_30px_rgba(147,51,234,0.3)]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">{t('cta.main')}</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600/0 via-purple-600/10 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>

            <p className="text-sm text-white/30 mt-6">
              {t('cta.noCommitment')}
            </p>
          </motion.div>
        </div>
      </section>
    </SectionTransition>
  );
};

export default WhyFutura;
