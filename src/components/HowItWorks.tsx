import React from 'react';
import { motion } from 'framer-motion';
import { Search, Cog, Clock } from 'lucide-react';
import SectionTransition from './SectionTransition';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: Search,
      title: 'Identify Bottlenecks',
      description: 'We analyze your current workflows to find time-consuming manual processes that can be automated.',
      number: '01',
    },
    {
      icon: Cog,
      title: 'Build Workflow',
      description: 'Our team creates custom automation solutions tailored to your specific business needs and goals.',
      number: '02',
    },
    {
      icon: Clock,
      title: 'Save Time Weekly',
      description: 'Watch as your automated systems handle repetitive tasks, giving you 10-20 hours back each week.',
      number: '03',
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
      
      <section id="how-it-works" className="py-20 relative bg-dark-800/30 section-spacing">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        {/* Floating elements */}
        <motion.div
          className="absolute top-32 right-20 w-24 h-24 bg-neon-purple/10 rounded-full blur-2xl"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <SectionTransition delay={0.2}>
            <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-20 pt-12 sm:pt-16 px-4 sm:px-0">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 glow-text">
                How It Works
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/80">
                Our proven 3-step process to transform your business operations
              </p>
            </div>
          </SectionTransition>

          <div className="max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <SectionTransition
                key={index}
                delay={index * 0.3}
                direction={index % 2 === 0 ? 'left' : 'right'}
              >
                <motion.div
                  className="flex flex-col lg:flex-row items-center mb-20 last:mb-0 group"
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <div className={`flex-1 px-4 sm:px-0 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12 lg:order-2'}`}>
                    <motion.div 
                      className="bg-dark-800/50 backdrop-blur-sm p-6 sm:p-8 lg:p-12 rounded-xl neon-border cursor-pointer relative overflow-hidden"
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: '0 0 40px rgba(138, 43, 226, 0.2)',
                      }}
                    >
                      {/* Hover gradient */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 via-transparent to-blue-500/5 opacity-0"
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      <div className="flex items-center mb-6 relative z-10">
                        {/* ENHANCED GLOWING NUMBER - LIKE FUTURA LOGO */}
                        <motion.div 
                          className="text-4xl sm:text-5xl lg:text-6xl font-bold mr-4 sm:mr-6 relative cursor-pointer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {/* Background glow effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 via-transparent to-neon-purple/20 rounded-lg blur-xl opacity-0"
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                          
                          {/* Main number text with enhanced glow like FUTURA logo */}
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
                            {step.number}
                          </span>
                          
                          {/* Fallback text for browsers that don't support background-clip */}
                          <span 
                            className="absolute inset-0 text-neon-purple opacity-0 z-0"
                            style={{
                              textShadow: '0 0 15px rgba(138, 43, 226, 0.6)',
                            }}
                          >
                            {step.number}
                          </span>
                          
                          {/* Additional pulsing glow animation */}
                          <motion.div
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
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            {step.number}
                          </motion.div>
                        </motion.div>
                        
                        <motion.div
                          animate={{
                            scale: 1,
                            rotate: 0,
                          }}
                          whileHover={{
                            scale: 1.2,
                            rotate: [0, -15, 15, -8, 8, 0],
                          }}
                          transition={{ 
                            scale: { duration: 0.3 },
                            rotate: { duration: 1.2, ease: "easeInOut" }
                          }}
                        >
                          <step.icon size={36} className="text-neon-purple group-hover:text-white transition-colors duration-300 sm:w-12 sm:h-12" />
                        </motion.div>
                      </div>
                      
                      <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white relative z-10">
                        {step.title}
                      </h3>
                      
                      <p className="text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed relative z-10">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  <div className={`flex-1 mt-6 sm:mt-8 lg:mt-0 ${index % 2 === 0 ? '' : 'lg:order-1'}`}>
                    <motion.div
                      className="relative mx-auto w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Animated rings */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-transparent rounded-full" 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      />
                      <motion.div 
                        className="absolute inset-4 border border-neon-purple/30 rounded-full"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                      />
                      <motion.div 
                        className="absolute inset-8 border border-neon-purple/20 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      />
                      <motion.div 
                        className="absolute inset-12 border border-neon-purple/10 rounded-full"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                      />
                      
                      <motion.div
                        className="absolute inset-16 bg-neon-purple/10 rounded-full flex items-center justify-center"
                        animate={{ 
                          scale: [1, 1.05, 1],
                          boxShadow: [
                            '0 0 20px rgba(138, 43, 226, 0.3)',
                            '0 0 40px rgba(138, 43, 226, 0.5)',
                            '0 0 20px rgba(138, 43, 226, 0.3)'
                          ]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <motion.div
                          animate={{
                            scale: 1,
                            rotate: 0,
                          }}
                          whileHover={{
                            scale: 1.3,
                            rotate: [0, -20, 20, -10, 10, 0],
                          }}
                          transition={{ 
                            scale: { duration: 0.3 },
                            rotate: { duration: 1.5, ease: "easeInOut" }
                          }}
                        >
                          <step.icon size={64} className="text-neon-purple" />
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </SectionTransition>
            ))}
          </div>
        </div>
      </section>
    </SectionTransition>
  );
};

export default HowItWorks;