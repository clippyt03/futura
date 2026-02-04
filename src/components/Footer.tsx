import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  const legalLinks = [
    { label: t('footer.links.privacy'), href: '/privacy' },
    { label: t('footer.links.terms'), href: '/terms' },
    { label: t('footer.links.gdpr'), href: '/gdpr' },
    { label: t('footer.links.cookies'), href: '/cookies' },
  ];

  return (
    <footer id="contact" className="relative overflow-hidden bg-dark-900 border-t border-purple-500/10">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-800" />

      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-michroma text-2xl text-white tracking-wider mb-6">
              FUTURA.
            </h2>
            <p className="text-sm text-white/50 mb-6 leading-relaxed font-light">
              {t('footer.company.description')}
            </p>
            <div className="space-y-2 text-xs text-white/40 font-light">
              <p>{t('footer.company.nip')}</p>
              <p>{t('footer.company.regon')}</p>
              <p>{t('footer.company.address')}</p>
            </div>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-michroma text-sm font-bold text-white mb-6 uppercase tracking-wider">
              {t('footer.links.legal')}
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/50 hover:text-purple-400 transition-colors duration-300 font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-michroma text-sm font-bold text-white mb-6 uppercase tracking-wider">
              {t('footer.contact.title')}
            </h4>
            <a
              href={`mailto:${t('footer.contact.email')}`}
              className="flex items-center gap-3 text-sm text-white/50 hover:text-purple-400 transition-colors duration-300 font-light"
            >
              <Mail size={16} className="text-purple-500" />
              {t('footer.contact.email')}
            </a>
          </motion.div>
        </div>

        {/* Bottom Copyright */}
        <motion.div
          className="pt-8 border-t border-purple-500/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/30 font-light">
              © {new Date().getFullYear()} {t('footer.company.title')}. {t('footer.rights')}
            </p>
            <p className="text-xs text-white/20 font-light">
              Made with precision.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
