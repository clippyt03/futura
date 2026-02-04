import { motion } from 'framer-motion';
import { Search, FileText, Cog, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionTransition from './SectionTransition';

const HowItWorks = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: Search,
      title: t('howItWorks.steps.understand.title'),
      description: t('howItWorks.steps.understand.description'),
      number: '01',
    },
    {
      icon: FileText,
      title: t('howItWorks.steps.plan.title'),
      description: t('howItWorks.steps.plan.description'),
      number: '02',
    },
    {
      icon: Cog,
      title: t('howItWorks.steps.system.title'),
      description: t('howItWorks.steps.system.description'),
      number: '03',
    },
    {
      icon: Shield,
      title: t('howItWorks.steps.support.title'),
      description: t('howItWorks.steps.support.description'),
      number: '04',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const stepVariants = {
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
      <section id="how-it-works" className="py-40 md:py-48 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />

        {/* Subtle purple halo effect */}
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          {/* Header */}
          <SectionTransition delay={0.2}>
            <div className="text-center max-w-3xl mx-auto mb-24 md:mb-32">
              <motion.h2
                className="font-michroma text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-10 text-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {t('howItWorks.headline')}
              </motion.h2>
              <motion.p
                className="font-michroma text-2xl md:text-3xl text-purple-400 leading-relaxed mb-6"
                style={{
                  textShadow: '0 0 20px rgba(147,51,234,0.8)'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {t('howItWorks.subtitle')}
              </motion.p>
              <motion.p
                className="text-base md:text-lg text-white/40 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {t('howItWorks.tagline')}
              </motion.p>
            </div>
          </SectionTransition>

          {/* Steps */}
          <motion.div
            className="space-y-16 md:space-y-20 mb-32 md:mb-40"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                variants={stepVariants}
              >
                <div className="flex items-start gap-6 md:gap-8">
                  {/* Number with neon effect */}
                  <div className="flex-shrink-0">
                    <motion.div
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-purple-500/40 bg-purple-500/10 flex items-center justify-center relative"
                      whileHover={{
                        scale: 1.1,
                        borderColor: 'rgba(147,51,234,0.8)',
                      }}
                      style={{
                        boxShadow: '0 0 30px rgba(147,51,234,0.5), inset 0 0 20px rgba(147,51,234,0.2)'
                      }}
                    >
                      <span
                        className="font-michroma text-lg md:text-xl text-purple-400"
                        style={{
                          textShadow: '0 0 10px rgba(147,51,234,0.8)'
                        }}
                      >
                        {step.number}
                      </span>
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-purple-400"
                        initial={{ scale: 1, opacity: 0 }}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0, 0.5, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: index * 0.5,
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        whileHover={{
                          rotate: 15,
                          scale: 1.2,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <step.icon
                          size={32}
                          className="text-purple-500"
                          style={{
                            filter: 'drop-shadow(0 0 10px rgba(147,51,234,0.6))'
                          }}
                        />
                      </motion.div>
                      <h3 className="font-michroma text-xl md:text-2xl font-bold text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-base md:text-lg text-white/50 leading-relaxed font-light max-w-2xl">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connecting line - except for last item */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 md:left-10 top-20 md:top-24 w-0.5 h-12 md:h-16 bg-gradient-to-b from-purple-500/30 to-transparent" />
                )}
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>
    </SectionTransition>
  );
};

export default HowItWorks;
