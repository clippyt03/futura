import { motion } from 'framer-motion';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';
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

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'Github' },
  ];

  return (
    <footer id="contact" className="relative overflow-hidden bg-dark-900 border-t border-purple-500/10">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-800" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-24 md:py-32 relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-20 mb-16 md:mb-20">
          {/* Company Info - Takes more space */}
          <motion.div
            className="md:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-michroma text-3xl md:text-4xl text-white tracking-wider mb-8">
              FUTURA.
            </h2>
            <p className="text-base md:text-lg text-white/60 mb-8 leading-relaxed font-light" style={{ lineHeight: 1.7 }}>
              {t('footer.company.description')}
            </p>

            {/* Social Media Links - Prominent placement */}
            <div className="mb-8">
              <p className="text-sm font-michroma text-white/50 mb-4 uppercase tracking-wider">
                Follow Us
              </p>
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 rounded-lg bg-purple-500/10 border border-purple-500/20 hover:border-purple-500/50 hover:bg-purple-500/20 transition-all duration-300"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={20} className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="space-y-2 text-sm text-white/40 font-light">
              <p>{t('footer.company.nip')}</p>
              <p>{t('footer.company.regon')}</p>
              <p>{t('footer.company.address')}</p>
            </div>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-michroma text-sm font-bold text-white mb-8 uppercase tracking-wider">
              {t('footer.links.legal')}
            </h4>
            <ul className="space-y-4">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-base text-white/50 hover:text-purple-400 transition-colors duration-300 font-light block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            className="md:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-michroma text-sm font-bold text-white mb-8 uppercase tracking-wider">
              {t('footer.contact.title')}
            </h4>
            <a
              href={`mailto:${t('footer.contact.email')}`}
              className="group flex items-center gap-3 text-base text-white/50 hover:text-purple-400 transition-colors duration-300 font-light p-4 rounded-lg bg-purple-500/5 border border-purple-500/10 hover:border-purple-500/30 hover:bg-purple-500/10"
            >
              <Mail size={20} className="text-purple-500 group-hover:text-purple-400 transition-colors duration-300" />
              {t('footer.contact.email')}
            </a>
          </motion.div>
        </div>

        {/* Bottom Copyright */}
        <motion.div
          className="pt-10 border-t border-purple-500/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-white/40 font-light">
              © {new Date().getFullYear()} {t('footer.company.title')}. {t('footer.rights')}
            </p>
            <p className="text-sm text-white/30 font-light">
              Made with precision.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
