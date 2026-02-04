import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();
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

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);

    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerHeight = 80;
      const visualPadding = isMobile ? 80 : 60;
      const totalOffset = headerHeight + visualPadding;

      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - totalOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-dark-900/95 backdrop-blur-xl border-b border-purple-500/20 shadow-2xl'
          : 'bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      style={{ height: '80px' }}
    >
      <nav className="max-w-7xl mx-auto px-6 h-full relative flex items-center justify-between">

        {/* LOGO - LEFT SIDE */}
        <motion.button
          className="relative cursor-pointer z-50"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h1 className="font-michroma text-2xl text-white tracking-wider hover:text-purple-400 transition-colors duration-300">
            FUTURA.
          </h1>
        </motion.button>

        {/* DESKTOP NAVIGATION - CENTERED */}
        {!isMobile && (
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="relative text-white/70 hover:text-white font-michroma text-xs tracking-wider transition-all duration-300 group"
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
          </div>
        )}

        {/* DESKTOP RIGHT SIDE - Language Switcher + CTA */}
        {!isMobile && (
          <div className="flex items-center gap-4">
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
        <div className="md:hidden flex items-center gap-3">
          <LanguageSwitcher />

          <motion.button
            className="text-white p-2.5 relative z-50 rounded-lg"
            style={{
              minHeight: '48px',
              minWidth: '48px',
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
            backdropFilter: 'blur(20px)',
          }}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="px-6 py-6 flex flex-col space-y-2">
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

            <motion.button
              onClick={handleCTA}
              className="bg-purple-500/20 border border-purple-500/50 text-purple-400 hover:bg-purple-500/30 hover:text-white transition-all duration-300 relative overflow-hidden w-full py-4 rounded-lg font-michroma text-sm tracking-wider mt-4"
              style={{ minHeight: '56px' }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
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
