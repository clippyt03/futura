import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Twitter, Linkedin, Github, Shield, Award, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const footerLinks = {
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Services', href: '/#services' },
      { label: 'Case Studies', href: '/#case-studies' },
      { label: 'Blog', href: '/#blog' },
    ],
    services: [
      { label: 'AI Reports', href: '/#services' },
      { label: 'Lead Generation', href: '/#services' },
      { label: 'Client Onboarding', href: '/#services' },
      { label: 'Custom Automation', href: '/#services' },
    ],
    resources: [
      { label: 'Documentation', href: '/documentation' },
      { label: 'API Reference', href: '/documentation' },
      { label: 'Support Center', href: '/support' },
      { label: 'Status Page', href: '/status' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'GDPR Compliance', href: '/gdpr' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/futura_ai', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/futura-automation', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/futura-automation', label: 'GitHub' },
  ];

  const trustBadges = [
    { icon: Shield, text: 'Enterprise Security' },
    { icon: Award, text: 'Expert Team' },
    { icon: Clock, text: '24/7 Support' },
  ];

  const isExternalLink = (href: string) => href.startsWith('http') || href.startsWith('#');

  const renderLink = (link: { label: string; href: string }) => {
    if (isExternalLink(link.href)) {
      return (
        <motion.a
          href={link.href}
          className="text-white/60 hover:text-neon-purple transition-colors duration-300"
          whileHover={{ x: 5 }}
        >
          {link.label}
        </motion.a>
      );
    }

    return (
      <motion.div whileHover={{ x: 5 }}>
        <Link
          to={link.href}
          className="text-white/60 hover:text-neon-purple transition-colors duration-300"
        >
          {link.label}
        </Link>
      </motion.div>
    );
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:hello@wefutura.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+48663244790';
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    
    // In a real application, this would integrate with an email service
    console.log('Newsletter signup:', email);
    alert('Thank you for subscribing to our newsletter!');
    form.reset();
  };

  return (
    <footer className="relative overflow-hidden bg-dark-900">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Trust badges section */}
        <motion.div
          className="py-6 sm:py-8 border-b border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 text-white/60 text-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <badge.icon size={14} className="text-neon-purple" />
                <span className="text-xs sm:text-sm font-medium">{badge.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold glow-text mb-3 sm:mb-4">FUTURA</h3>
            <p className="text-sm sm:text-base text-white/70 mb-4 sm:mb-6 leading-relaxed">
              We give you time back through intelligent automation systems designed for scalable teams.
            </p>
            
            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              <button
                onClick={handleEmailClick}
                className="flex items-center gap-2 sm:gap-3 text-sm text-white/60 hover:text-neon-purple transition-colors duration-300"
              >
                <Mail size={14} className="text-neon-purple" />
                hello@wefutura.com
              </button>
              <div className="flex items-center gap-2 sm:gap-3 text-sm text-white/60">
                <MapPin size={14} className="text-neon-purple" />
                Warsaw, Poland
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-dark-800/50 rounded-lg flex items-center justify-center text-white/60 hover:text-neon-purple hover:bg-neon-purple/10 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={14} className="sm:w-4 sm:h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {Object.entries(footerLinks).map(([category, links], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 capitalize">
                  {category === 'company' ? 'Company' : category}
                </h4>
                <ul className="space-y-1 sm:space-y-2">
                  {links.map((link) => (
                    <li key={link.label}>
                      {renderLink(link)}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter signup */}
        <motion.div
          className="py-6 sm:py-8 border-t border-white/10 border-b border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-md mx-auto text-center px-4 sm:px-0">
            <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-neon-purple">Stay Updated</h4>
            <p className="text-white/60 text-xs sm:text-sm mb-3 sm:mb-4">
              Get the latest automation insights and product updates
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="flex-1 bg-dark-800/50 border border-neon-purple/30 rounded-lg px-3 sm:px-4 py-2 text-sm text-white placeholder-white/40 focus:border-neon-purple focus:outline-none"
              />
              <motion.button
                type="submit"
                className="bg-neon-purple px-4 py-2 rounded-lg text-white font-semibold hover:bg-neon-purple/80 transition-all duration-300 text-sm w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="py-6 sm:py-8 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-white/60 text-xs sm:text-sm text-center md:text-left">
            © 2024 Futura. All rights reserved. Built with the future in mind.
          </div>
          
          <div className="text-white/40 text-xs sm:text-sm">
            We give you time back.
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;