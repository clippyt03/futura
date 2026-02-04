import { motion } from 'framer-motion';
import { Database, Workflow, GitBranch, BarChart3 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionTransition from './SectionTransition';

const Services = () => {
  const { t } = useTranslation();

  const handleCTA = () => {
    window.open('https://tally.so/r/2EPBVM', '_blank');
  };

  const services = [
    {
      icon: Workflow,
      title: t('services.workflow.title'),
      description: t('services.workflow.description'),
    },
    {
      icon: Database,
      title: t('services.data.title'),
      description: t('services.data.description'),
    },
    {
      icon: GitBranch,
      title: t('services.integration.title'),
      description: t('services.integration.description'),
    },
    {
      icon: BarChart3,
      title: t('services.analysis.title'),
      description: t('services.analysis.description'),
    },
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
    <SectionTransition className="relative overflow-hidden">
      <section id="services" className="py-40 md:py-48 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />

        {/* Subtle purple halo effect */}
        <motion.div
          className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-purple-700/10 rounded-full blur-[100px]"
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
                {t('services.headline')}
              </motion.h2>
              <motion.p
                className="text-lg md:text-xl text-white/60 leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {t('services.subtitle')}
              </motion.p>
              <motion.p
                className="text-base md:text-lg text-white/40 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {t('services.focus')}
              </motion.p>
            </div>
          </SectionTransition>

          {/* Services grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-32 md:mb-40"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group"
                variants={cardVariants}
              >
                {/* Icon */}
                <div className="mb-6">
                  <service.icon
                    size={40}
                    className="text-purple-500 group-hover:text-purple-400 transition-colors duration-300"
                  />
                </div>

                {/* Title */}
                <h3 className="font-michroma text-xl md:text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-base md:text-lg text-white/50 leading-relaxed font-light">
                  {service.description}
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
              className="group relative px-12 md:px-16 py-5 md:py-6 rounded-xl font-michroma text-base md:text-lg text-white border-2 border-purple-500/40 bg-black/40 backdrop-blur-sm hover:border-purple-500/70 transition-all duration-300 hover:shadow-[0_0_30px_rgba(147,51,234,0.3)]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">{t('howItWorks.cta')}</span>
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

export default Services;
