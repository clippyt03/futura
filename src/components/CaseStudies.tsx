import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import SectionTransition from './SectionTransition';

const CaseStudies: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Marketing Director',
      company: 'TechFlow Agency',
      content: 'Futura transformed our client reporting process. What used to take 8 hours now happens automatically. Our team can focus on strategy instead of data compilation.',
      rating: 5,
      savings: '12 hours/week',
      metric: '300% efficiency gain',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Founder & CEO',
      company: 'GrowthLab',
      content: 'The lead generation automation has been a game-changer. We\'re reaching 5x more prospects with personalized outreach while maintaining quality relationships.',
      rating: 5,
      savings: '18 hours/week',
      metric: '500% lead increase',
    },
    {
      name: 'Emily Watson',
      role: 'Operations Manager',
      company: 'ScaleUp Solutions',
      content: 'Client onboarding used to be our biggest bottleneck. Now it\'s completely streamlined, and our clients love the professional, automated experience.',
      rating: 5,
      savings: '15 hours/week',
      metric: '90% faster onboarding',
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
      
      <section id="case-studies" className="py-20 relative bg-dark-800/30 section-spacing">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        {/* Floating elements */}
        <motion.div
          className="absolute top-20 right-32 w-28 h-28 bg-neon-purple/8 rounded-full blur-2xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 7,
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
                  Success Stories
                </span>
                
                {/* Fallback text for browsers that don't support background-clip */}
                <span 
                  className="absolute inset-0 text-white opacity-0 z-0"
                  style={{
                    textShadow: '0 0 15px rgba(138, 43, 226, 0.6)',
                  }}
                >
                  Success Stories
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
                  Success Stories
                </motion.span>
              </motion.h2>
              <p className="text-base sm:text-lg md:text-xl text-white/80">
                Real results from businesses that chose to automate their future
              </p>
            </div>
          </SectionTransition>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto px-4 sm:px-0">
            {testimonials.map((testimonial, index) => (
              <SectionTransition
                key={index}
                delay={index * 0.2}
                direction="up"
              >
                <motion.div
                  className="bg-dark-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl neon-border group relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 0 40px rgba(138, 43, 226, 0.2)',
                  }}
                >
                  {/* Hover gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-transparent to-blue-500/5 opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <motion.div
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 text-neon-purple/30"
                    whileHover={{ scale: 1.2, rotate: 15 }}
                  >
                    <Quote size={24} className="sm:w-8 sm:h-8" />
                  </motion.div>

                  <div className="mb-4 sm:mb-6 relative z-10">
                    <div className="flex items-center mb-1 sm:mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Star size={14} className="text-neon-purple fill-current" />
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-start mb-3 sm:mb-4">
                      <div className="text-sm text-white/60">
                        {/* GLOWING TIME SAVINGS - REDUCED INTENSITY */}
                        <motion.div 
                          className="font-semibold relative cursor-pointer"
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
                              textShadow: '0 0 8px rgba(138, 43, 226, 0.4)', // Reduced from 10px to 8px
                              filter: 'drop-shadow(0 0 4px rgba(138, 43, 226, 0.25))', // Reduced from 5px to 4px
                            }}
                          >
                            {testimonial.savings}
                          </span>
                          
                          {/* Fallback text for browsers that don't support background-clip */}
                          <span 
                            className="absolute inset-0 text-neon-purple opacity-0 z-0"
                            style={{
                              textShadow: '0 0 8px rgba(138, 43, 226, 0.4)',
                            }}
                          >
                            {testimonial.savings}
                          </span>
                          
                          {/* Additional pulsing glow animation - REDUCED INTENSITY */}
                          <motion.span
                            className="absolute inset-0 text-neon-purple/40" // Reduced from 50% to 40%
                            style={{
                              textShadow: '0 0 12px rgba(138, 43, 226, 0.25)', // Reduced intensity
                            }}
                            animate={{
                              opacity: [0.25, 0.5, 0.25], // Reduced from 0.3-0.6 to 0.25-0.5
                              textShadow: [
                                '0 0 8px rgba(138, 43, 226, 0.25)', // Reduced intensity
                                '0 0 15px rgba(138, 43, 226, 0.4)', // Reduced intensity
                                '0 0 8px rgba(138, 43, 226, 0.25)'
                              ],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            {testimonial.savings}
                          </motion.span>
                        </motion.div>
                        <div>Time Saved</div>
                      </div>
                      <div className="text-xs sm:text-sm text-white/60 text-right">
                        {/* GLOWING METRICS - REDUCED INTENSITY */}
                        <motion.div 
                          className="font-semibold relative cursor-pointer"
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
                              textShadow: '0 0 8px rgba(138, 43, 226, 0.4)', // Reduced from 10px to 8px
                              filter: 'drop-shadow(0 0 4px rgba(138, 43, 226, 0.25))', // Reduced from 5px to 4px
                            }}
                          >
                            {testimonial.metric}
                          </span>
                          
                          {/* Fallback text for browsers that don't support background-clip */}
                          <span 
                            className="absolute inset-0 text-neon-purple opacity-0 z-0"
                            style={{
                              textShadow: '0 0 8px rgba(138, 43, 226, 0.4)',
                            }}
                          >
                            {testimonial.metric}
                          </span>
                          
                          {/* Additional pulsing glow animation - REDUCED INTENSITY */}
                          <motion.span
                            className="absolute inset-0 text-neon-purple/40" // Reduced from 50% to 40%
                            style={{
                              textShadow: '0 0 12px rgba(138, 43, 226, 0.25)', // Reduced intensity
                            }}
                            animate={{
                              opacity: [0.25, 0.5, 0.25], // Reduced from 0.3-0.6 to 0.25-0.5
                              textShadow: [
                                '0 0 8px rgba(138, 43, 226, 0.25)', // Reduced intensity
                                '0 0 15px rgba(138, 43, 226, 0.4)', // Reduced intensity
                                '0 0 8px rgba(138, 43, 226, 0.25)'
                              ],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 0.5
                            }}
                          >
                            {testimonial.metric}
                          </motion.span>
                        </motion.div>
                        <div>Improvement</div>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-4 sm:mb-6 italic relative z-10">
                    "{testimonial.content}"
                  </p>

                  <div className="border-t border-neon-purple/20 pt-3 sm:pt-4 relative z-10">
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-neon-purple text-sm">{testimonial.role}</div>
                    <div className="text-white/60 text-xs sm:text-sm">{testimonial.company}</div>
                  </div>

                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-neon-purple to-transparent"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.3 }}
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

export default CaseStudies;