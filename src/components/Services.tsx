import { motion } from 'framer-motion';
import { Database, Workflow, GitBranch, BarChart3, Brain, FileText, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SectionTransition from './SectionTransition';
import TiltCard from './TiltCard';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Workflow,
      title: t('services.workflow.title'),
      description: t('services.workflow.description'),
      path: '/uslugi/automatyzacja-procesow-biznesowych',
    },
    {
      icon: Database,
      title: t('services.data.title'),
      description: t('services.data.description'),
      path: '/uslugi/automatyzacja-no-code',
    },
    {
      icon: GitBranch,
      title: t('services.integration.title'),
      description: t('services.integration.description'),
      path: '/uslugi/automatyzacja-sprzedazy-i-marketingu',
    },
    {
      icon: BarChart3,
      title: t('services.analysis.title'),
      description: t('services.analysis.description'),
      path: '/uslugi/systemy-ai-dla-firm',
    },
    {
      icon: Brain,
      title: t('services.aiVisibility.title'),
      description: t('services.aiVisibility.description'),
      path: '/uslugi/widocznosc-w-ai',
    },
    {
      icon: FileText,
      title: t('services.cennikB2B.title'),
      description: t('services.cennikB2B.description'),
      path: '/uslugi/automatyczny-cennik-b2b',
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
      <section id="services" className="py-20 md:py-32 lg:py-40 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />

        {/* Subtle purple halo effect */}
        <motion.div
          className="absolute top-1/2 left-1/4 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-purple-700/10 rounded-full blur-[50px] md:blur-[100px]"
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
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-24 lg:mb-32">
              <p className="font-michroma text-base sm:text-xl md:text-2xl text-purple-400 mb-4 md:mb-6 tracking-wide">
                {t('services.preHeadline')}
              </p>
              <h2 className="font-michroma text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-10 text-white">
                {t('services.headline')}
              </h2>
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="h-full"
              >
                <TiltCard
                  className="group h-full p-6 md:p-8 rounded-2xl bg-black/20 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 flex flex-col min-h-[280px]"
                  tiltStrength={10}
                  glowColor="rgba(147,51,234,0.5)"
                >
                  {/* Icon */}
                  <motion.div
                    className="mt-8 mb-auto"
                    whileHover={{
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <service.icon
                      size={40}
                      className="text-purple-500 group-hover:text-purple-400 transition-colors duration-300"
                      style={{
                        filter: 'drop-shadow(0 0 10px rgba(147,51,234,0.6))'
                      }}
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="mb-6">
                    {/* Title */}
                    <h3 className="font-michroma text-xl md:text-2xl font-bold text-white mb-4">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base md:text-lg text-white/50 leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>

                  {/* Link */}
                  <Link
                    to={service.path}
                    className="inline-flex items-center gap-2 text-sm font-michroma text-white/40 hover:text-white/80 transition-colors duration-300 group/link mt-auto"
                  >
                    <span className="tracking-wide">Dowiedz się więcej</span>
                    <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform duration-300" />
                  </Link>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>

          {/* See all services CTA */}
          <motion.div
            className="mt-16 md:mt-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/uslugi"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl border border-white/15 bg-white/3 hover:border-white/30 hover:bg-white/6 transition-all duration-300"
            >
              <span className="font-michroma text-sm text-white/60 group-hover:text-white/90 tracking-wider transition-colors duration-300">
                Wszystkie usługi
              </span>
              <ArrowRight size={16} className="text-white/30 group-hover:text-white/70 group-hover:translate-x-1 transition-all duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>
    </SectionTransition>
  );
};

export default Services;
