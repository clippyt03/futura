import React from 'react';
import { motion } from 'framer-motion';
import { Clock, TrendingUp, Users, Shield } from 'lucide-react';
import SectionTransition from './SectionTransition';

const WhyFutura: React.FC = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Save 10–20 Hours/Week',
      description: 'Reclaim your time with automated workflows that handle repetitive tasks 24/7.',
      stat: '15+ hrs',
      statLabel: 'Average weekly savings',
    },
    {
      icon: TrendingUp,
      title: 'Automate Repetitive Work',
      description: 'Transform manual processes into intelligent systems that scale with your business.',
      stat: '90%',
      statLabel: 'Process automation rate',
    },
    {
      icon: Users,
      title: 'Scale Without Hiring More',
      description: 'Increase capacity and output without the overhead costs of additional team members.',
      stat: '3x',
      statLabel: 'Productivity increase',
    },
    {
      icon: Shield,
      title: 'Premium Support & Strategy',
      description: 'Ongoing optimization and strategic guidance to maximize your automation ROI.',
      stat: '24/7',
      statLabel: 'Support availability',
    },
  ];

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
      
      <section id="why-futura" className="py-20 relative section-spacing">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
        {/* Floating background elements */}
        <motion.div
          className="absolute top-40 left-20 w-36 h-36 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            y: [0, -25, 0],
            x: [0, 15, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <SectionTransition delay={0.2}>
            <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 pt-12 sm:pt-16 px-4 sm:px-0">
              {/* GLOWING SECTION TITLE - REDUCED INTENSITY */}
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
                  Why Futura
                </span>
                
                {/* Fallback text for browsers that don't support background-clip */}
                <span 
                  className="absolute inset-0 text-white opacity-0 z-0"
                  style={{
                    textShadow: '0 0 15px rgba(138, 43, 226, 0.6)',
                  }}
                >
                  Why Futura
                </span>
                
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
                  Why Futura
                </motion.span>
              </motion.h2>
              <p className="text-base sm:text-lg md:text-xl text-white/80">
                The intelligent choice for businesses ready to embrace the future of operations
              </p>
            </div>
          </SectionTransition>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto px-4 sm:px-0">
            {benefits.map((benefit, index) => (
              <SectionTransition
                key={index}
                delay={index * 0.2}
                direction={index % 2 === 0 ? 'left' : 'right'}
              >
                <motion.div
                  className="bg-dark-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl neon-border group cursor-pointer relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 0 40px rgba(138, 43, 226, 0.2)',
                  }}
                >
                  {/* Hover gradient overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-neon-purple/8 via-transparent to-blue-500/5 opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="flex items-start justify-between mb-4 sm:mb-6 relative z-10">
                    <div>
                      <motion.div
                        animate={{
                          scale: 1,
                          rotate: 0,
                        }}
                        whileHover={{
                          scale: 1.15,
                          rotate: [0, -10, 10, -5, 5, 0],
                        }}
                        transition={{ 
                          scale: { duration: 0.2 },
                          rotate: { duration: 1, ease: "easeInOut" }
                        }}
                      >
                        <benefit.icon 
                          size={36} 
                          className="text-neon-purple group-hover:text-white transition-colors duration-300" 
                        />
                      </motion.div>
                    </div>
                    
                    <div className="text-right">
                      {/* GLOWING STATISTICS - REDUCED INTENSITY */}
                      <motion.div 
                        className="text-2xl sm:text-3xl font-bold relative cursor-pointer"
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
                          {benefit.stat}
                        </span>
                        
                        {/* Fallback text for browsers that don't support background-clip */}
                        <span 
                          className="absolute inset-0 text-neon-purple opacity-0 z-0"
                          style={{
                            textShadow: '0 0 12px rgba(138, 43, 226, 0.5)',
                          }}
                        >
                          {benefit.stat}
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
                          {benefit.stat}
                        </motion.span>
                      </motion.div>
                      <div className="text-xs sm:text-sm text-white/60">
                        {benefit.statLabel}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white group-hover:text-neon-purple transition-colors duration-300 relative z-10">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed relative z-10">
                    {benefit.description}
                  </p>

                  <motion.div
                    className="mt-4 sm:mt-6 h-1 bg-gradient-to-r from-neon-purple/30 to-transparent rounded-full relative z-10"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  />
                </motion.div>
              </SectionTransition>
            ))}
          </div>
        </div>
      </section>
    </SectionTransition>
  );
};

export default WhyFutura;