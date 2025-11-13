import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Phone, Mail, CheckCircle, Star, Users } from 'lucide-react';
import SectionTransition from './SectionTransition';

const CTA: React.FC = () => {
  const guarantees = [
    'One-time setup fee applies',
    '30-day money-back guarantee',
    'Free training and onboarding',
    'Dedicated success manager'
  ];

  const testimonialQuotes = [
    '"Saved us 18 hours per week" - Sarah, TechFlow',
    '"ROI in first month" - Marcus, GrowthLab',
    '"Game-changing automation" - Emily, ScaleUp'
  ];

  const handleBookCall = () => {
    window.open('https://tally.so/r/woJDGV', '_blank');
  };


  const handleEmailContact = () => {
    window.location.href = 'mailto:hello@wefutura.com?subject=Automation Consultation Request';
  };

  return (
    <SectionTransition className="relative overflow-hidden">
      {/* Animated section divider */}
      <motion.div
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-purple/30 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      
      <section className="py-20 relative">
        <div className="absolute inset-0 hero-bg" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
        {/* Enhanced animated background elements */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "easeInOut"
            }}
          />
        ))}

        <div className="container mx-auto px-6 relative z-10">
          <SectionTransition delay={0.2}>
            <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 px-4 sm:px-0">
              {/* GLOWING CTA TITLE - REDUCED INTENSITY */}
              <motion.h2 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 relative"
              >
                {/* Main glowing text - REDUCED INTENSITY */}
                <span 
                  className="relative z-10"
                  style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #8A2BE2 50%, #6495ED 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textShadow: '0 0 15px rgba(138, 43, 226, 0.6)', // Reduced from 20px to 15px
                    filter: 'drop-shadow(0 0 8px rgba(138, 43, 226, 0.4))', // Reduced from 10px to 8px
                  }}
                >
                  Ready to Transform Your Business?
                </span>
                
                {/* Fallback text for browsers that don't support background-clip */}
                <motion.span 
                  className="absolute inset-0 text-white opacity-0 z-0"
                  style={{
                    textShadow: '0 0 15px rgba(138, 43, 226, 0.6)',
                  }}
                >
                  Ready to Transform Your Business?
                </motion.span>
                
                {/* Additional pulsing glow animation - REDUCED INTENSITY */}
                <motion.span
                  className="absolute inset-0 text-neon-purple/40" // Reduced from 50% to 40%
                  style={{
                    textShadow: '0 0 20px rgba(138, 43, 226, 0.4)', // Reduced from 0.6 to 0.4
                  }}
                  animate={{
                    opacity: [0.25, 0.5, 0.25], // Reduced from 0.3-0.7 to 0.25-0.5
                    textShadow: [
                      '0 0 15px rgba(138, 43, 226, 0.4)', // Reduced intensity
                      '0 0 25px rgba(138, 43, 226, 0.6)', // Reduced intensity
                      '0 0 15px rgba(138, 43, 226, 0.4)'
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Ready to Transform Your Business?
                </motion.span>
              </motion.h2>
              
              {/* Enhanced subtitle with social proof */}
              <p className="text-base sm:text-lg md:text-xl text-white/80 mb-3 sm:mb-4">
                Join hundreds of businesses already saving time with intelligent automation
              </p>
              
              {/* Quick testimonial carousel */}
              <motion.div
                className="mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex justify-center items-center gap-3 sm:gap-4 text-xs sm:text-sm text-white/60">
                  <Star size={14} className="text-yellow-400" />
                  <motion.div
                    key={Math.floor(Date.now() / 3000) % testimonialQuotes.length}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    {testimonialQuotes[Math.floor(Date.now() / 3000) % testimonialQuotes.length]}
                  </motion.div>
                  <Star size={14} className="text-yellow-400" />
                </div>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.button
                  onClick={handleBookCall}
                  className="bg-neon-purple px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-white font-semibold text-base sm:text-lg flex items-center gap-2 sm:gap-3 pulse-glow group relative overflow-hidden w-full max-w-sm sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Button shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  <Calendar size={16} className="sm:w-5 sm:h-5" />
                  <span className="relative z-10">Book a Free Discovery Call</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight size={16} className="sm:w-5 sm:h-5" />
                  </motion.div>
                </motion.button>
                
              </motion.div>

              {/* Enhanced guarantees section with better visual hierarchy */}
              <motion.div
                className="mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-neon-purple">Our Guarantee to You</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 max-w-2xl mx-auto">
                  {guarantees.map((guarantee, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-2 sm:gap-3 text-white/80 text-xs sm:text-sm bg-dark-800/30 p-2 sm:p-3 rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <CheckCircle size={14} className="text-green-400 flex-shrink-0" />
                      {guarantee}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Enhanced statistics with better visual impact */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-3xl mx-auto mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {[
                  { value: '15+', label: 'Hours Saved Weekly', icon: '⏰' },
                  { value: '500+', label: 'Processes Automated', icon: '⚡' },
                  { value: '98%', label: 'Client Satisfaction', icon: '🎯' }
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="text-center bg-dark-800/30 p-4 sm:p-6 rounded-xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-xl sm:text-2xl mb-1 sm:mb-2">{stat.icon}</div>
                    {/* GLOWING CTA STATISTICS - REDUCED INTENSITY */}
                    <motion.div 
                      className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 relative cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                    >
                      {/* Main glowing text - REDUCED INTENSITY */}
                      <span 
                        className="relative z-10"
                        style={{
                          background: 'linear-gradient(135deg, #ffffff 0%, #8A2BE2 50%, #6495ED 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          textShadow: '0 0 12px rgba(138, 43, 226, 0.5)', // Reduced from 15px to 12px
                          filter: 'drop-shadow(0 0 6px rgba(138, 43, 226, 0.3))', // Reduced from 8px to 6px
                        }}
                      >
                        {stat.value}
                      </span>
                      
                      {/* Fallback text for browsers that don't support background-clip */}
                      <span 
                        className="absolute inset-0 text-neon-purple opacity-0 z-0"
                        style={{
                          textShadow: '0 0 12px rgba(138, 43, 226, 0.5)',
                        }}
                      >
                        {stat.value}
                      </span>
                      
                      {/* Additional pulsing glow animation - REDUCED INTENSITY */}
                      <motion.span
                        className="absolute inset-0 text-neon-purple/40" // Reduced from 50% to 40%
                        style={{
                          textShadow: '0 0 15px rgba(138, 43, 226, 0.3)', // Reduced intensity
                        }}
                        animate={{
                          opacity: [0.25, 0.5, 0.25], // Reduced from 0.3-0.6 to 0.25-0.5
                          textShadow: [
                            '0 0 12px rgba(138, 43, 226, 0.3)', // Reduced intensity
                            '0 0 20px rgba(138, 43, 226, 0.5)', // Reduced intensity
                            '0 0 12px rgba(138, 43, 226, 0.3)'
                          ],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.5
                        }}
                      >
                        {stat.value}
                      </motion.span>
                    </motion.div>
                    <div className="text-xs sm:text-sm text-white/60">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Enhanced contact options */}
              <motion.div
                className="mt-8 sm:mt-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <div className="text-xs sm:text-sm text-white/60 mb-3 sm:mb-4">
                  Prefer to talk first? We're here to help.
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm">
                  <button
                    onClick={handleEmailContact}
                    className="flex items-center gap-2 text-white/70 hover:text-neon-purple transition-colors duration-300"
                  >
                    <Mail size={14} className="text-neon-purple" />
                    hello@wefutura.com
                  </button>
                </div>
              </motion.div>
            </div>
          </SectionTransition>
        </div>
      </section>
    </SectionTransition>
  );
};

export default CTA;