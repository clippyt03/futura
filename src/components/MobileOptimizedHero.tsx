import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight, Clock, Users, TrendingUp, Play, Shield, Award } from 'lucide-react';
import { useMobileOptimization, useAnimationOptimization } from '../hooks/useMobileOptimization';

const MobileOptimizedHero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLocked, setIsLocked] = useState(true);
  
  const { isMobile, isTablet, screenSize } = useMobileOptimization();
  const { shouldReduceAnimations, particleCount, enableComplexEffects } = useAnimationOptimization();

  // Optimized particle system for mobile
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || shouldReduceAnimations) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Reduced particle system for mobile performance
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      pulse: number;
    }> = [];

    // Create fewer particles on mobile
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * (isMobile ? 0.5 : 1),
        vy: (Math.random() - 0.5) * (isMobile ? 0.5 : 1),
        size: Math.random() * (isMobile ? 1 : 2) + 0.5,
        opacity: Math.random() * 0.1 + 0.05,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    let animationId: number;
    let time = 0;

    const animate = () => {
      time += isMobile ? 0.01 : 0.004;
      
      // Lighter fade for mobile
      ctx.fillStyle = isMobile ? 'rgba(0, 0, 1, 0.02)' : 'rgba(0, 0, 1, 0.008)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // Simpler movement for mobile
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.pulse += isMobile ? 0.02 : 0.01;

        // Boundary wrapping
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Simplified rendering for mobile
        const pulseSize = particle.size * (1 + Math.sin(particle.pulse) * 0.1);
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, pulseSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(138, 43, 226, ${particle.opacity})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [isMobile, shouldReduceAnimations, particleCount]);

  // Optimized mouse tracking (disabled on mobile)
  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  const scrollToNext = () => {
    setIsLocked(false);
    setTimeout(() => {
      const nextSection = document.getElementById('services');
      nextSection?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };

  const handleWatchDemo = () => {
    scrollToNext();
  };

  const handleBookConsultation = () => {
    window.open('https://calendly.com/futura-automation', '_blank');
  };

  // Mobile-optimized statistics
  const statistics = [
    {
      icon: Clock,
      value: '15+',
      label: 'Hours Saved Weekly',
      description: 'Average time savings per client'
    },
    {
      icon: TrendingUp,
      value: '500+',
      label: 'Processes Automated',
      description: 'Successful automations deployed'
    },
    {
      icon: Users,
      value: '98%',
      label: 'Client Satisfaction',
      description: 'Customer success rate'
    }
  ];

  // Mobile-optimized trust indicators
  const trustIndicators = [
    {
      icon: Shield,
      text: 'Enterprise Security',
      subtext: 'Encrypted & Protected'
    },
    {
      icon: Award,
      text: 'Expert Team',
      subtext: '10+ Years Experience'
    },
    {
      icon: Users,
      text: 'Growing Fast',
      subtext: '100+ Happy Clients'
    }
  ];

  // Responsive text sizes
  const getTitleSize = () => {
    if (screenSize === 'small') return 'text-3xl sm:text-4xl';
    if (screenSize === 'medium') return 'text-4xl md:text-5xl';
    return 'text-5xl md:text-6xl lg:text-7xl xl:text-8xl';
  };

  const getSubtitleSize = () => {
    if (screenSize === 'small') return 'text-sm';
    if (screenSize === 'medium') return 'text-base';
    return 'text-lg xl:text-xl';
  };

  return (
    <motion.section 
      ref={heroRef} 
      className="relative overflow-hidden"
      style={{
        height: '100vh',
        background: isMobile 
          ? 'linear-gradient(180deg, rgba(138, 43, 226, 0.05) 0%, rgba(0, 0, 1, 1) 70%)'
          : `
            radial-gradient(ellipse at center, rgba(138, 43, 226, 0.008) 0%, rgba(0, 0, 1, 1) 70%),
            radial-gradient(ellipse at 20% 80%, rgba(100, 150, 255, 0.003) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 20%, rgba(138, 43, 226, 0.004) 0%, transparent 60%),
            linear-gradient(180deg, rgba(0, 0, 1, 1) 0%, rgba(0, 0, 2, 1) 100%)
          `
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: shouldReduceAnimations ? 0.3 : 1.5 }}
    >
      {/* Optimized Particle Canvas */}
      {enableComplexEffects && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
        />
      )}

      {/* Simplified grid for mobile */}
      {!shouldReduceAnimations && (
        <motion.div 
          className="absolute inset-0 opacity-[0.008]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(138, 43, 226, 0.3) 0.5px, transparent 0.5px),
              linear-gradient(90deg, rgba(138, 43, 226, 0.3) 0.5px, transparent 0.5px)
            `,
            backgroundSize: isMobile ? '80px 80px' : '120px 120px',
          }}
          animate={!isMobile ? {
            backgroundPosition: ['0px 0px', '120px 120px'],
          } : {}}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      )}

      {/* Simplified ambient elements for mobile */}
      {!isMobile && (
        <motion.div
          className="absolute inset-0"
          style={{
            transform: `translate(${(mousePosition.x - 0.5) * 8}px, ${(mousePosition.y - 0.5) * 8}px)`,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 50 }}
        >
          <motion.div 
            className="absolute top-1/4 left-1/6 w-32 h-32 bg-neon-purple/[0.008] rounded-full blur-3xl"
            animate={{
              x: [0, 15, -8, 0],
              y: [0, -10, 8, 0],
              scale: [1, 1.05, 0.95, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      )}

      {/* MAIN CONTENT - MOBILE OPTIMIZED WITH PROPER HEADER CLEARANCE */}
      <div 
        className="absolute inset-0 flex items-center justify-center z-20"
        style={{
          paddingTop: isMobile ? '120px' : '80px', // Extra padding on mobile to clear header
          paddingBottom: '40px'
        }}
      >
        <div className="text-center w-full max-w-7xl px-4 sm:px-6">
          
          {/* MOBILE-OPTIMIZED TRUST INDICATORS */}
          <motion.div
            className={`flex ${isMobile ? 'flex-col gap-4' : 'justify-center items-center gap-8'} mb-6 sm:mb-8 opacity-70`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ duration: shouldReduceAnimations ? 0.3 : 1, delay: 0.2 }}
          >
            {trustIndicators.map((indicator, index) => (
              <motion.div
                key={index}
                className={`flex items-center gap-2 ${isMobile ? 'text-xs justify-center' : 'text-xs'} text-white/60`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <indicator.icon size={isMobile ? 12 : 14} className="text-neon-purple/70" />
                <div className={isMobile ? 'text-center' : 'text-left'}>
                  <div className="font-semibold text-white/70">{indicator.text}</div>
                  <div className="text-[10px] text-white/50">{indicator.subtext}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* MOBILE-OPTIMIZED MAIN TITLE */}
          <motion.h1
            className={`${getTitleSize()} font-bold font-orbitron tracking-[0.04em] leading-[0.9] mb-4 max-w-6xl mx-auto relative`}
            initial={{ opacity: 0, y: 30, scale: 0.99 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: shouldReduceAnimations ? 1 : [1, 1.002, 1],
            }}
            transition={{ 
              duration: shouldReduceAnimations ? 0.5 : 1.2, 
              delay: 0.3, 
              ease: [0.25, 0.1, 0.25, 1],
              scale: shouldReduceAnimations ? {} : {
                duration: 8,
                repeat: Infinity,
                ease: [0.4, 0, 0.6, 1]
              }
            }}
          >
            {/* Reduced glow effect for mobile */}
            <span 
              className="relative z-10"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #8A2BE2 50%, #6495ED 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: isMobile ? '0 0 4px rgba(138, 43, 226, 0.3)' : '0 0 8px rgba(138, 43, 226, 0.4)',
                filter: isMobile ? 'drop-shadow(0 0 2px rgba(138, 43, 226, 0.2))' : 'drop-shadow(0 0 4px rgba(138, 43, 226, 0.25))',
              }}
            >
              READY TO GET BACK
              <br />
              YOUR TIME?
            </span>
            
            {/* Fallback text */}
            <span 
              className="absolute inset-0 text-white opacity-0 z-0"
              style={{
                textShadow: isMobile ? '0 0 4px rgba(138, 43, 226, 0.3)' : '0 0 8px rgba(138, 43, 226, 0.4)',
              }}
            >
              READY TO GET BACK
              <br />
              YOUR TIME?
            </span>
          </motion.h1>

          {/* MOBILE-OPTIMIZED SUBTITLE */}
          <motion.div
            className="relative mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceAnimations ? 0.3 : 1, delay: 0.8 }}
          >
            <motion.p
              className={`relative ${getSubtitleSize()} text-white/75 font-orbitron tracking-[0.15em] font-normal max-w-4xl mx-auto leading-relaxed`}
              style={{
                textShadow: '0 0 4px rgba(255, 255, 255, 0.1), 0 0 8px rgba(138, 43, 226, 0.15)',
                filter: 'drop-shadow(0 0 2px rgba(255, 255, 255, 0.05))',
              }}
            >
              NEXT-GENERATION AUTOMATION SYSTEMS
            </motion.p>
          </motion.div>

          {/* MOBILE-OPTIMIZED STATISTICS */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceAnimations ? 0.3 : 1, delay: 1.0 }}
          >
            <div className={`grid ${isMobile ? 'grid-cols-1 gap-3' : 'grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6'} max-w-5xl mx-auto`}>
              {statistics.map((stat, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
                  whileHover={!isMobile ? { scale: 1.05 } : {}}
                >
                  {/* Simplified background for mobile */}
                  <div className={`relative bg-dark-800/20 backdrop-blur-sm border border-neon-purple/20 rounded-xl ${isMobile ? 'p-3' : 'p-4 lg:p-6'} text-center`}>
                    <motion.div className="mb-2">
                      <stat.icon size={isMobile ? 20 : 24} className="text-neon-purple mx-auto" />
                    </motion.div>
                    
                    <motion.div
                      className={`${isMobile ? 'text-lg' : 'text-xl sm:text-2xl lg:text-3xl'} font-bold text-white mb-1`}
                      style={{
                        textShadow: '0 0 10px rgba(138, 43, 226, 0.5)',
                      }}
                    >
                      {stat.value}
                    </motion.div>
                    
                    <div className={`${isMobile ? 'text-xs' : 'text-xs sm:text-sm lg:text-base'} font-semibold text-neon-purple mb-1`}>
                      {stat.label}
                    </div>
                    
                    <div className={`${isMobile ? 'text-xs' : 'text-xs'} text-white/60 leading-tight`}>
                      {stat.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* MOBILE-OPTIMIZED CTA BUTTONS */}
          <motion.div
            className={`flex ${isMobile ? 'flex-col gap-3' : 'flex-col sm:flex-row gap-4'} justify-center items-center mb-6`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <motion.button
              onClick={handleWatchDemo}
              className={`group relative ${isMobile ? 'w-full max-w-xs px-6 py-4' : 'px-8 py-3 lg:px-10 lg:py-4'} font-orbitron font-medium text-sm tracking-wide overflow-hidden`}
              style={{
                background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.8) 0%, rgba(100, 150, 255, 0.7) 100%)',
                border: '1px solid rgba(138, 43, 226, 0.3)',
                borderRadius: '8px',
                boxShadow: '0 0 6px rgba(138, 43, 226, 0.1)',
                minHeight: isMobile ? '48px' : 'auto',
              }}
              whileHover={!isMobile ? { 
                scale: 1.01,
                boxShadow: '0 0 15px rgba(138, 43, 226, 0.25)',
                transition: { duration: 0.3 }
              } : {}}
              whileTap={{ scale: 0.99 }}
            >
              <span className="relative z-10 text-white flex items-center justify-center gap-2">
                <Play size={14} />
                WATCH DEMO
                <ArrowRight size={14} />
              </span>
            </motion.button>
            
            <motion.button
              onClick={handleBookConsultation}
              className={`group relative ${isMobile ? 'w-full max-w-xs px-6 py-4' : 'px-8 py-3 lg:px-10 lg:py-4'} font-orbitron font-medium text-sm tracking-wide`}
              style={{
                background: 'rgba(0, 0, 1, 0.6)',
                border: '1px solid rgba(138, 43, 226, 0.25)',
                borderRadius: '8px',
                backdropFilter: 'blur(10px)',
                minHeight: isMobile ? '48px' : 'auto',
              }}
              whileHover={!isMobile ? { 
                scale: 1.01,
                borderColor: 'rgba(138, 43, 226, 0.5)',
                backgroundColor: 'rgba(138, 43, 226, 0.03)',
                boxShadow: '0 0 8px rgba(138, 43, 226, 0.1)',
                transition: { duration: 0.3 }
              } : {}}
              whileTap={{ scale: 0.99 }}
            >
              <span className="relative z-10 text-neon-purple group-hover:text-white transition-colors duration-300">
                BOOK FREE CONSULTATION
              </span>
            </motion.button>
          </motion.div>

          {/* MOBILE-OPTIMIZED SOCIAL PROOF */}
          <motion.div
            className="relative mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            <motion.div
              className={`${isMobile ? 'text-xs' : 'text-xs sm:text-sm'} text-white/50 font-orbitron tracking-[0.2em] font-light flex items-center justify-center gap-2`}
            >
              <Users size={12} className="text-neon-purple/60" />
              TRUSTED BY 100+ GROWING COMPANIES
            </motion.div>
          </motion.div>

          {/* MOBILE-OPTIMIZED STATUS TEXT */}
          <motion.div
            className="relative mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.0 }}
          >
            <motion.div
              className={`relative ${isMobile ? 'text-xs' : 'text-xs sm:text-sm'} text-white/60 font-orbitron tracking-[0.25em] font-light`}
            >
              AUTOMATION INTELLIGENCE ONLINE STATUS: READY
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* MOBILE-OPTIMIZED SCROLL INDICATOR */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 group"
        style={{ minHeight: '44px', minWidth: '44px' }} // Mobile touch target
        animate={{ 
          y: [0, -4, 0],
          opacity: [0.15, 0.4, 0.15]
        }}
        transition={{ 
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 2, repeat: Infinity }
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 2.5, duration: 0.6 }}
      >
        <ChevronDown 
          size={16} 
          className="text-white/15 group-hover:text-neon-purple transition-colors duration-400" 
        />
      </motion.button>

      {/* Mobile scroll hint */}
      {isMobile && (
        <motion.div
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <motion.p
            className="text-[10px] text-white/10 font-orbitron tracking-[0.2em] text-center"
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            SCROLL TO EXPLORE
          </motion.p>
        </motion.div>
      )}
    </motion.section>
  );
};

export default MobileOptimizedHero;