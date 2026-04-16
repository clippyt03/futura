import { motion } from 'framer-motion';
import { Mail, Instagram, Facebook } from 'lucide-react';
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

  const serviceLinks = [
    { label: 'Automatyzacja Procesów', href: '/uslugi/automatyzacja-procesow-biznesowych' },
    { label: 'Automatyzacja No-Code', href: '/uslugi/automatyzacja-no-code' },
    { label: 'Sprzedaż i Marketing', href: '/uslugi/automatyzacja-sprzedazy-i-marketingu' },
    { label: 'Systemy AI dla Firm', href: '/uslugi/systemy-ai-dla-firm' },
    { label: 'Wszystkie usługi', href: '/uslugi' },
  ];

  const solutionLinks = [
    { label: 'Automatyzacja dla E-commerce', href: '/rozwiazania/automatyzacja-dla-ecommerce' },
    { label: 'Agencje Marketingowe', href: '/rozwiazania/automatyzacja-dla-agencji-marketingowych' },
    { label: 'Logistyka i Transport', href: '/rozwiazania/automatyzacja-dla-logistyki' },
    { label: 'Biura Rachunkowe', href: '/rozwiazania/automatyzacja-dla-biur-rachunkowych' },
    { label: 'Firmy Produkcyjne', href: '/rozwiazania/automatyzacja-dla-firm-produkcyjnych' },
    { label: 'Koszty Automatyzacji', href: '/koszty-automatyzacji' },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/futurasolutions_/', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61584275060063', label: 'Facebook' },
  ];

  return (
    <footer id="contact" className="relative overflow-hidden bg-dark-900 border-t border-purple-500/10">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-800" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-24 md:py-32 relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16 md:mb-20">
          {/* Company Info */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-michroma text-3xl md:text-4xl text-white tracking-wider mb-6">
              FUTURA.
            </h2>
            <p className="text-sm text-white/50 mb-8 leading-relaxed font-light" style={{ lineHeight: 1.7 }}>
              {t('footer.company.description')}
            </p>

            <div className="mb-8">
              <p className="text-xs font-michroma text-white/40 mb-4 uppercase tracking-wider">
                Follow Us
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 rounded-lg bg-white/5 border border-white/10 hover:border-white/25 hover:bg-white/8 transition-all duration-300"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={18} className="text-white/50 group-hover:text-white/80 transition-colors duration-300" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="space-y-1.5 text-xs text-white/30 font-light">
              <p>{t('footer.company.nip')}</p>
              <p>{t('footer.company.regon')}</p>
              <p>{t('footer.company.address')}</p>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            <h4 className="font-michroma text-xs font-bold text-white mb-6 uppercase tracking-wider">
              Usługi
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/45 hover:text-white/80 transition-colors duration-300 font-light block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.14 }}
          >
            <h4 className="font-michroma text-xs font-bold text-white mb-6 uppercase tracking-wider">
              Rozwiązania
            </h4>
            <ul className="space-y-3">
              {solutionLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/45 hover:text-white/80 transition-colors duration-300 font-light block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal + Contact */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-8">
              <h4 className="font-michroma text-xs font-bold text-white mb-6 uppercase tracking-wider">
                {t('footer.links.legal')}
              </h4>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-white/45 hover:text-white/80 transition-colors duration-300 font-light block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/blog"
                    className="text-sm text-white/45 hover:text-white/80 transition-colors duration-300 font-light block"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-michroma text-xs font-bold text-white mb-4 uppercase tracking-wider">
                {t('footer.contact.title')}
              </h4>
              <a
                href={`mailto:${t('footer.contact.email')}`}
                className="group flex items-center gap-3 text-sm text-white/45 hover:text-white/80 transition-colors duration-300 font-light p-3 rounded-lg bg-white/3 border border-white/8 hover:border-white/20 hover:bg-white/6"
              >
                <Mail size={16} className="text-white/40 group-hover:text-white/70 transition-colors duration-300 flex-shrink-0" />
                {t('footer.contact.email')}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Copyright */}
        <motion.div
          className="pt-10 border-t border-white/8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-white/30 font-light">
              © {new Date().getFullYear()} {t('footer.company.title')}. {t('footer.rights')}
            </p>
            <p className="text-sm text-white/20 font-light">
              Made with precision.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
