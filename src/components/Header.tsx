import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleCTA = () => {
    window.open('https://tally.so/r/2EPBVM', '_blank');
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { href: '#services', label: t('nav.whatWeDo') },
    { href: '#who-we-are', label: t('nav.whoWeAre') },
    { href: '#how-it-works', label: t('nav.howWeWork') },
    { href: '#faq', label: t('nav.faq') },
  ];

  const scrollToSection = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerHeight = isMobile ? 64 : 80;
      const visualPadding = isMobile ? 24 : 60;
      const totalOffset = headerHeight + visualPadding;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - totalOffset;
      window.scrollTo({ top: Math.max(0, offsetPosition), behavior: 'smooth' });
    }
  };

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);

    if (href.startsWith('/')) {
      navigate(href);
      return;
    }

    const targetId = href.substring(1);

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToSection(targetId), 300);
    } else {
      scrollToSection(targetId);
    }
  };

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-dark-900/95 backdrop-blur-md border-b border-purple-500/20 shadow-2xl'
          : 'bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      style={{ height: isMobile ? '64px' : '80px' }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 h-full flex items-center justify-between gap-4 md:gap-16">

        {/* LOGO - LEFT SIDE */}
        <motion.button
          className="relative cursor-pointer z-50 flex-shrink-0"
          onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h1 className="font-michroma text-xl sm:text-2xl text-white tracking-wider hover:text-purple-400 transition-colors duration-300">
            FUTURA.
          </h1>
        </motion.button>

        {/* DESKTOP NAVIGATION - CENTERED WITH FLEX */}
        {!isMobile && (
          <div className="flex-1 flex items-center justify-center">
            <div className="flex items-center space-x-8 lg:space-x-12">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="relative text-white/70 hover:text-white font-michroma text-xs tracking-wider transition-all duration-300 group whitespace-nowrap"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10">{item.label}</span>
                </motion.button>
              ))}

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Link
                  to="/uslugi"
                  className="relative text-white/70 hover:text-white font-michroma text-xs tracking-wider transition-all duration-300 group whitespace-nowrap inline-block"
                >
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10">{t('nav.services')}</span>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <Link
                  to="/blog"
                  className="relative text-white/70 hover:text-white font-michroma text-xs tracking-wider transition-all duration-300 group whitespace-nowrap inline-block"
                >
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10">{t('nav.blog')}</span>
                </Link>
              </motion.div>
            </div>
          </div>
        )}

        {/* DESKTOP RIGHT SIDE - Language Switcher + CTA */}
        {!isMobile && (
          <div className="flex items-center gap-3 flex-shrink-0">
            <LanguageSwitcher />

            <motion.button
              onClick={handleCTA}
              className="relative overflow-hidden group px-6 py-2.5 rounded-lg"
              style={{
                background: 'rgba(10, 10, 10, 0.8)',
                border: '2px solid rgba(147, 51, 234, 0.4)',
                backdropFilter: 'blur(10px)',
              }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{
                scale: 1.05,
                borderColor: 'rgba(147, 51, 234, 0.8)',
                boxShadow: '0 0 20px rgba(147, 51, 234, 0.3)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />

              <span className="relative z-10 text-purple-400 group-hover:text-white transition-colors duration-300 font-michroma text-xs tracking-wider">
                {t('nav.cta')}
              </span>
            </motion.button>
          </div>
        )}

        {/* MOBILE MENU BUTTON - RIGHT SIDE */}
        <div className="md:hidden flex items-center gap-3 flex-shrink-0">
          <LanguageSwitcher />

          <motion.button
            className="text-white p-2 relative z-50 rounded-lg"
            style={{
              minHeight: '44px',
              minWidth: '44px',
              background: isMobileMenuOpen ? 'rgba(147, 51, 234, 0.2)' : 'transparent'
            }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="relative z-10">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </span>
          </motion.button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden border-t border-purple-500/20"
          style={{
            background: 'rgba(10, 10, 10, 0.98)',
            backdropFilter: 'blur(10px)',
          }}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="px-4 py-4 flex flex-col space-y-1 max-h-[calc(100vh-64px)] overflow-y-auto">
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-white/70 hover:text-white font-michroma text-sm tracking-wider transition-colors duration-300 text-left relative group py-4 px-4 rounded-lg"
                style={{ minHeight: '56px' }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-purple-500/10 rounded-lg opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 block">{item.label}</span>
              </motion.button>
            ))}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <Link
                to="/uslugi"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white/70 hover:text-white font-michroma text-sm tracking-wider transition-colors duration-300 text-left relative group py-4 px-4 rounded-lg flex items-center hover:bg-purple-500/10"
                style={{ minHeight: '56px' }}
              >
                {t('nav.services')}
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <Link
                to="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white/70 hover:text-white font-michroma text-sm tracking-wider transition-colors duration-300 text-left relative group py-4 px-4 rounded-lg flex items-center hover:bg-purple-500/10"
                style={{ minHeight: '56px' }}
              >
                {t('nav.blog')}
              </Link>
            </motion.div>

            <motion.button
              onClick={handleCTA}
              className="bg-purple-500/20 border border-purple-500/50 text-purple-400 hover:bg-purple-500/30 hover:text-white transition-all duration-300 relative overflow-hidden w-full py-4 rounded-lg font-michroma text-sm tracking-wider mt-4"
              style={{ minHeight: '56px' }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">
                {t('nav.cta')}
              </span>
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
