import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Mail, UserCheck, Settings, CheckCircle, Bot } from 'lucide-react';
import SectionTransition from './SectionTransition';

const Services: React.FC = () => {
  const services = [
    {
      icon: FileText,
      title: 'Monthly AI Reports',
      description: 'Automated PDF reports generated from your data sheets, delivered on schedule.',
      features: ['Data analysis', 'Custom formatting', 'Automated delivery'],
      popular: false,
      results: 'Up to 90% time saved on reporting',
    },
    {
      icon: Mail,
      title: 'Lead Scraper + Email Outreach',
      description: 'Find and reach prospects automatically with personalized email campaigns.',
      features: ['Lead discovery', 'Email sequences', 'Response tracking'],
      popular: true,
      results: 'Up to 5x more qualified leads',
    },
    {
      icon: UserCheck,
      title: 'Automated Client Onboarding',
      description: 'Streamline your client intake process with automated workflows and documents.',
      features: ['Document collection', 'Process automation', 'Progress tracking'],
      popular: false,
      results: 'Up to 75% faster onboarding',
    },
    {
      icon: Settings,
      title: 'Custom Automations',
      description: 'Tailored systems designed for your specific needs.',
      features: ['Custom integrations', 'Workflow optimization', 'Ongoing support'],
      popular: false,
      results: 'Unlimited automation possibilities',
    },
  ];

  const aiSupportService = {
    icon: Bot,
    title: 'AI Customer Support 24/7',
    description: 'Never lose a customer again. Our AI handles inquiries instantly, escalates complex issues, and converts visitors into buyers around the clock.',
    features: ['Instant responses', 'Smart escalation', 'Lead qualification', 'Multi-language support'],
    popular: false,
    results: 'Up to 300% increase in conversions',
    highlight: 'NEW',
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const handleConsultationClick = () => {
    window.open('https://tally.so/r/woJDGV', '_blank');
  };

  const renderServiceCard = (service: any, index: number, isAISupport = false) => (
    <motion.div
      key={index}
      className={`bg-dark-800/50 backdrop-blur-sm p-8 rounded-xl neon-border group cursor-pointer relative overflow-hidden ${
        isAISupport ? 'md:col-span-2 lg:col-span-4' : ''
      }`}
      variants={cardVariants}
      whileHover={{ 
        scale: 1.02,
        boxShadow: '0 0 30px rgba(138, 43, 226, 0.3)',
        transition: { duration: 0.3 }
      }}
    >
      {/* Popular badge - FIXED POSITIONING */}
      {service.popular && (
        <motion.div
          className="absolute top-4 right-4 bg-gradient-to-r from-neon-purple to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full z-20"
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          POPULAR
        </motion.div>
      )}

      {/* NEW highlight badge */}
      {service.highlight && (
        <motion.div
          className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full z-20"
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          {service.highlight}
        </motion.div>
      )}

      {/* Hover gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-transparent to-blue-500/5 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Icon with IDENTICAL animation for ALL services including AI Support */}
      <div className="mb-6 relative z-10">
        <motion.div
          animate={{
            scale: 1,
            rotate: 0,
          }}
          whileHover={{
            scale: 1.1,
            rotate: [0, -8, 8, -4, 4, 0],
          }}
          transition={{ 
            scale: { duration: 0.2 },
            rotate: { duration: 0.8, ease: "easeInOut" }
          }}
          className="group-hover:animate-icon"
        >
          <service.icon 
            size={isAISupport ? 48 : 48} 
            className={`${isAISupport ? 'text-green-400' : 'text-neon-purple'} group-hover:text-white transition-colors duration-300`} 
          />
        </motion.div>
      </div>
      
      {/* GLOWING TITLE - REDUCED INTENSITY */}
      <motion.h3 
        className={`${isAISupport ? 'text-2xl' : 'text-xl'} font-bold mb-4 relative z-10 cursor-pointer`}
        whileHover={{ scale: 1.02 }}
      >
        <React.Fragment>
          {/* Main glowing text - REDUCED INTENSITY */}
          <span 
            className="relative z-10"
            style={{
              background: isAISupport 
                ? 'linear-gradient(135deg, #ffffff 0%, #10B981 50%, #6495ED 100%)'
                : 'linear-gradient(135deg, #ffffff 0%, #8A2BE2 50%, #6495ED 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: isAISupport 
                ? '0 0 12px rgba(16, 185, 129, 0.5)'
                : '0 0 12px rgba(138, 43, 226, 0.5)', // Reduced from 15px to 12px
              filter: isAISupport 
                ? 'drop-shadow(0 0 6px rgba(16, 185, 129, 0.3))'
                : 'drop-shadow(0 0 6px rgba(138, 43, 226, 0.3))', // Reduced from 8px to 6px
            }}
          >
            {service.title}
          </span>
          
          {/* Fallback text for browsers that don't support background-clip */}
          <span 
            className="absolute inset-0 text-white opacity-0 z-0"
            style={{
              textShadow: isAISupport 
                ? '0 0 12px rgba(16, 185, 129, 0.5)'
                : '0 0 12px rgba(138, 43, 226, 0.5)',
            }}
          >
            {service.title}
          </span>
        </React.Fragment>
        
        {/* Additional pulsing glow animation - REDUCED INTENSITY */}
        <motion.span
          className={`absolute inset-0 ${isAISupport ? 'text-green-400/40' : 'text-neon-purple/40'}`} // Reduced from 50% to 40%
          style={{
            textShadow: isAISupport 
              ? '0 0 15px rgba(16, 185, 129, 0.3)'
              : '0 0 15px rgba(138, 43, 226, 0.3)', // Reduced intensity
          }}
          animate={{
            opacity: [0.25, 0.5, 0.25], // Reduced from 0.3-0.6 to 0.25-0.5
            textShadow: isAISupport 
              ? [
                  '0 0 12px rgba(16, 185, 129, 0.3)',
                  '0 0 20px rgba(16, 185, 129, 0.5)',
                  '0 0 12px rgba(16, 185, 129, 0.3)'
                ]
              : [
                  '0 0 12px rgba(138, 43, 226, 0.3)', // Reduced intensity
                  '0 0 20px rgba(138, 43, 226, 0.5)', // Reduced intensity
                  '0 0 12px rgba(138, 43, 226, 0.3)'
                ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {service.title}
        </motion.span>
      </motion.h3>
      
      <p className={`text-white/70 mb-6 leading-relaxed relative z-10 ${isAISupport ? 'text-base' : ''}`}>
        {service.description}
      </p>
      
      <ul className="space-y-2 mb-6 relative z-10">
        {service.features.map((feature: string, featureIndex: number) => (
          <motion.li 
            key={featureIndex} 
            className="text-sm text-white/60 flex items-center"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: featureIndex * 0.1 }}
          >
            <CheckCircle size={14} className={`${isAISupport ? 'text-green-400' : 'text-neon-purple'} mr-3 flex-shrink-0`} />
            {feature}
          </motion.li>
        ))}
      </ul>

      {/* Results badge */}
      <div className="relative z-10">
        <div className={`${isAISupport ? 'bg-green-400/20 border-green-400/30' : 'bg-neon-purple/20 border-neon-purple/30'} border rounded-lg p-3 text-center`}>
          <div className={`text-sm font-semibold ${isAISupport ? 'text-green-400' : 'text-neon-purple'}`}>{service.results}</div>
        </div>
      </div>

      {/* Enhanced conversion-focused micro-interaction */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-neon-purple to-transparent"
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: index * 0.3 }}
      />
    </motion.div>
  );

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
      
      <section id="services" className="py-32 relative section-spacing">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
        {/* Floating background elements */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-neon-purple/5 rounded-full blur-3xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            y: [0, 15, 0],
            x: [0, -15, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <SectionTransition delay={0.2}>
            <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-20 pt-12 sm:pt-16 px-4 sm:px-0">
              <motion.h2 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <React.Fragment>
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
                    Automation Solutions
                  </span>
                  
                  {/* Fallback text for browsers that don't support background-clip */}
                  <span 
                    className="absolute inset-0 text-white opacity-0 z-0"
                    style={{
                      textShadow: '0 0 15px rgba(138, 43, 226, 0.6)',
                    }}
                  >
                    Automation Solutions
                  </span>
                </React.Fragment>
                
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
                  Automation Solutions
                </motion.span>
              </motion.h2>
              <motion.p 
                className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Enterprise-grade automation systems that transform how your team works
              </motion.p>
            </div>
          </SectionTransition>

          {/* First 4 services in equal grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8 px-4 sm:px-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service, index) => renderServiceCard(service, index))}
          </motion.div>

          {/* AI Support service as wider card below */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {renderServiceCard(aiSupportService, 4, true)}
          </motion.div>

          {/* Enhanced Bottom CTA Section with urgency and social proof */}
          <motion.div
            className="text-center mt-12 sm:mt-16 px-4 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl neon-border p-6 sm:p-8 max-w-3xl mx-auto relative overflow-hidden">
              {/* Subtle animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-neon-purple/5 via-transparent to-blue-500/5"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Ready to Transform Your Workflow?</h3>
                <p className="text-white/70 mb-4 sm:mb-6 text-base sm:text-lg">
                  Join 500+ businesses already saving 15+ hours weekly with intelligent automation.
                </p>
                
                {/* Social proof indicators */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 mb-4 sm:mb-6 text-sm text-white/60">
                  <div className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-green-400" />
                    <span>Free consultation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-green-400" />
                    <span>30-day guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-green-400" />
                    <span>Setup in 1-2 weeks</span>
                  </div>
                </div>
                
                <motion.button
                  onClick={handleConsultationClick}
                  className="bg-neon-purple px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-white font-semibold text-base sm:text-lg hover:bg-neon-purple/80 transition-all duration-300 relative overflow-hidden group w-full sm:w-auto"
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
                  <span className="relative z-10">Schedule Free Consultation</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </SectionTransition>
  );
};

export default Services;