import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { useMobileOptimization } from '../hooks/useMobileOptimization';

const MobileOptimizedHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isMobile, isTablet } = useMobileOptimization();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#services', label: 'SOLUTIONS' },
    { href: '#how-it-works', label: 'PROCESS' },
    { href: '#case-studies', label: 'RESULTS' },
    { href: '#blog', label: 'INSIGHTS' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const headerHeight = 80;
      const visualPadding = isMobile ? 80 : 60; // More padding on mobile
      const totalOffset = headerHeight + visualPadding;
      
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - totalOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
    }
  };

  const handleConsultationClick = () => {
    window.open('https://calendly.com/futura-automation', '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+48663244790';
  };

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-dark-900/95 backdrop-blur-xl border-b border-neon-purple/20 shadow-2xl' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      style={{ height: '80px' }}
    >
      <nav className="container mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
        {/* MOBILE-OPTIMIZED LOGO */}
        <motion.button
          className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-bold font-orbitron tracking-wider relative cursor-pointer z-50`}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ minHeight: '44px', minWidth: '44px' }} // Mobile touch target
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 via-transparent to-neon-purple/20 rounded-lg blur-xl opacity-0"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          
          <span 
            className="relative z-10 text-white"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #8A2BE2 50%, #6495ED 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 20px rgba(138, 43, 226, 0.8)',
              filter: 'drop-shadow(0 0 10px rgba(138, 43, 226, 0.6))',
            }}
          >
            FUTURA
          </span>
          
          <span 
            className="absolute inset-0 text-white opacity-0 z-0"
            style={{
              textShadow: '0 0 20px rgba(138, 43, 226, 0.8)',
            }}
          >
            FUTURA
          </span>
        </motion.button>

        {/* DESKTOP NAVIGATION - HIDDEN ON MOBILE */}
        {!isMobile && (
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="relative text-white/80 hover:text-white font-orbitron text-sm tracking-widest transition-all duration-300 group px-4 py-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                style={{ minHeight: '44px' }} // Touch target
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-neon-purple/10 via-neon-purple/20 to-neon-purple/10 rounded-lg opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-neon-purple to-blue-500"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
                
                <span className="relative z-10">{item.label}</span>
              </motion.button>
            ))}
          </div>
        )}

        {/* DESKTOP CTA BUTTONS - HIDDEN ON MOBILE */}
        {!isMobile && (
          <div className="hidden md:flex items-center gap-4">
            <motion.button
              onClick={handlePhoneClick}
              className="flex items-center gap-2 text-white/70 hover:text-neon-purple transition-colors duration-300 text-sm"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              style={{ minHeight: '44px' }}
            >
              <Phone size={16} />
              <span className="font-orbitron tracking-wider">+48 663 244 790</span>
            </motion.button>

            <motion.button
              onClick={handleConsultationClick}
              className="relative px-6 lg:px-8 py-3 font-orbitron font-semibold text-sm tracking-wider overflow-hidden group"
              style={{
                background: 'rgba(10, 10, 10, 0.8)',
                border: '2px solid rgba(138, 43, 226, 0.5)',
                borderRadius: '8px',
                backdropFilter: 'blur(10px)',
                minHeight: '44px',
              }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ 
                scale: 1.05,
                borderColor: 'rgba(138, 43, 226, 1)',
                boxShadow: '0 0 25px rgba(138, 43, 226, 0.4)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-purple/30 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              
              <span className="relative z-10 text-neon-purple group-hover:text-white transition-colors duration-300">
                GET FREE CONSULTATION
              </span>
            </motion.button>
          </div>
        )}

        {/* MOBILE MENU BUTTON */}
        <motion.button
          className="md:hidden text-white p-3 relative z-50 rounded-lg"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ 
            minHeight: '48px', 
            minWidth: '48px',
            background: isMobileMenuOpen ? 'rgba(138, 43, 226, 0.2)' : 'transparent'
          }}
        >
          <motion.div
            className="absolute inset-0 bg-neon-purple/20 rounded-lg opacity-0"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <span className="relative z-10">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </span>
        </motion.button>
      </nav>

      {/* MOBILE MENU - ENHANCED FOR TOUCH */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-dark-900/98 backdrop-blur-xl border-t border-neon-purple/20"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            {/* Mobile Navigation Items */}
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-white/80 hover:text-neon-purple font-orbitron text-sm tracking-widest transition-colors duration-300 text-left relative group py-4 px-4 rounded-lg"
                style={{ minHeight: '56px' }} // Larger touch target for mobile
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-neon-purple/10 rounded-lg opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 block">{item.label}</span>
              </motion.button>
            ))}
            
            {/* Mobile Contact Info */}
            <motion.button
              onClick={handlePhoneClick}
              className="flex items-center gap-3 text-white/70 hover:text-neon-purple transition-colors duration-300 text-sm py-4 px-4 rounded-lg"
              style={{ minHeight: '56px' }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone size={18} />
              <span className="font-orbitron tracking-wider">+48 663 244 790</span>
            </motion.button>

            {/* Mobile CTA Button */}
            <motion.button
              onClick={handleConsultationClick}
              className="bg-neon-purple/20 border border-neon-purple/50 px-6 py-4 rounded-lg text-neon-purple font-orbitron font-semibold text-sm tracking-wider hover:bg-neon-purple hover:text-white transition-all duration-300 relative overflow-hidden"
              style={{ minHeight: '56px' }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10">GET FREE CONSULTATION</span>
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default MobileOptimizedHeader;