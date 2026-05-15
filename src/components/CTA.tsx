import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionTransition from './SectionTransition';
import { AUDIT_FORM_URL, CONTACT_EMAIL } from '../config/constants';
import { useDeviceDetection } from '../hooks/useDeviceDetection';

const CTA = () => {
  const { t } = useTranslation();
  const { isMobile } = useDeviceDetection();

  const stats = [
    { value: '15+', label: t('cta.statHours') },
    { value: '500+', label: t('cta.statProcesses') },
    { value: '98%', label: t('cta.statSatisfaction') },
  ];

  return (
    <SectionTransition className="relative overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      />

      <section className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />

        {!isMobile && (
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/8 rounded-full blur-[100px]"
            animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.15, 0.08] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <SectionTransition delay={0.1}>
            <motion.h2
              className="font-michroma text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {t('cta.headline')}
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg text-white/60 mb-12 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {t('cta.subtitle')}
            </motion.p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="font-michroma text-2xl sm:text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-white/40 leading-snug">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Primary CTA */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.button
                onClick={() => window.open(AUDIT_FORM_URL, '_blank')}
                className="inline-flex items-center gap-3 px-8 py-4 min-h-[52px] rounded-xl font-michroma text-sm tracking-wider text-white w-full sm:w-auto justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                style={{
                  background: 'rgba(147, 51, 234, 0.25)',
                  border: '1px solid rgba(147, 51, 234, 0.5)',
                }}
                whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(147,51,234,0.25)' }}
                whileTap={{ scale: 0.98 }}
              >
                {t('nav.cta')}
                <ArrowRight size={16} />
              </motion.button>
            </motion.div>

            {/* Contact line */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-xs text-white/35 mb-3">{t('cta.preferTalk')}</p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white/80 transition-colors duration-300"
              >
                <Mail size={14} />
                {CONTACT_EMAIL}
              </a>
            </motion.div>
          </SectionTransition>
        </div>
      </section>
    </SectionTransition>
  );
};

export default CTA;
