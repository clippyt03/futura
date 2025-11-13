import React from 'react';
import { motion } from 'framer-motion';
import { Play, Calendar, Shield, Users, TrendingUp, CheckCircle } from 'lucide-react';

export default function Hero() {
  const scrollToNext = () => {
    const nextSection = document.querySelector('#services');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWatchDemo = () => {
    window.open('https://tally.so/r/woJDGV', '_blank');
  };

  const handleBookConsultation = () => {
    window.open('https://tally.so/r/woJDGV', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-bg" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Animated hexagon pattern background */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-24 h-24 border border-purple-500/30"
            style={{
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              left: `${(i % 5) * 20}%`,
              top: `${Math.floor(i / 5) * 25}%`,
            }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-600/20 via-transparent to-transparent rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 150, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-tl from-blue-600/20 via-transparent to-transparent rounded-full blur-3xl"
        animate={{
          x: [0, -150, 0],
          y: [0, -100, 0],
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.5, 0.2],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Scanning lines effect */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(168, 85, 247, 0.3) 2px, rgba(168, 85, 247, 0.3) 4px)',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '0% 100%'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Circular pulse rings */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`ring-${i}`}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-purple-500/20 rounded-full"
          style={{
            width: '300px',
            height: '300px',
          }}
          animate={{
            scale: [1, 3, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 2.5,
            ease: "easeOut"
          }}
        />
      ))}
      
      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-20 pb-16 md:pt-32 md:pb-24">
        
        {/* Trust Indicators - Mobile: Single Row */}
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 mb-6 md:mb-8">
          <div className="flex items-center gap-1.5 text-white/60">
            <Shield className="w-3 h-3 md:w-4 md:h-4" />
            <span className="text-[10px] md:text-xs font-medium">Enterprise Security</span>
          </div>
          <div className="flex items-center gap-1.5 text-white/60">
            <CheckCircle className="w-3 h-3 md:w-4 md:h-4" />
            <span className="text-[10px] md:text-xs font-medium">Encrypted & Protected</span>
          </div>
          <div className="flex items-center gap-1.5 text-white/60">
            <Users className="w-3 h-3 md:w-4 md:h-4" />
            <span className="text-[10px] md:text-xs font-medium">Expert Team</span>
          </div>
          <div className="flex items-center gap-1.5 text-white/60">
            <TrendingUp className="w-3 h-3 md:w-4 md:h-4" />
            <span className="text-[10px] md:text-xs font-medium">10+ Years Experience</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-6 md:mb-8 leading-[1.1] tracking-tight">
          READY TO GET BACK
          <br />
          <motion.span
            className="relative inline-block"
            style={{
              background: 'linear-gradient(90deg, rgba(168, 85, 247, 0.4) 0%, rgba(168, 85, 247, 1) 25%, rgba(236, 72, 153, 1) 50%, rgba(168, 85, 247, 1) 75%, rgba(168, 85, 247, 0.4) 100%)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            animate={{
              backgroundPosition: ['0% 0%', '200% 0%'],
              scale: [1, 1.05, 1],
            }}
            transition={{
              backgroundPosition: {
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              },
              scale: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            YOUR TIME?
          </motion.span>
        </h1>

        {/* Subheadline */}
        <p className="text-sm md:text-xl lg:text-2xl text-white/70 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
          NEXT-GENERATION AUTOMATION SYSTEMS
        </p>

        {/* Social Proof */}
        <p className="text-[10px] md:text-sm text-white/50 mb-6 md:mb-8 font-medium">
          TRUSTED BY 100+ GROWING COMPANIES
        </p>

        {/* Statistics Grid - Mobile: Vertical Stack */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 mb-8 md:mb-12 max-w-2xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 md:p-6 text-center">
            <div className="text-lg md:text-3xl font-bold text-white mb-1 md:mb-2">15+</div>
            <div className="text-[10px] md:text-sm text-white/60 font-medium">Hours Saved Weekly</div>
            <div className="hidden md:block text-xs text-white/40 mt-2">Average per client</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 md:p-6 text-center">
            <div className="text-lg md:text-3xl font-bold text-white mb-1 md:mb-2">500+</div>
            <div className="text-[10px] md:text-sm text-white/60 font-medium">Processes Automated</div>
            <div className="hidden md:block text-xs text-white/40 mt-2">And counting</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 md:p-6 text-center">
            <div className="text-lg md:text-3xl font-bold text-white mb-1 md:mb-2">98%</div>
            <div className="text-[10px] md:text-sm text-white/60 font-medium">Client Satisfaction</div>
            <div className="hidden md:block text-xs text-white/40 mt-2">Verified reviews</div>
          </div>
        </div>

        {/* CTA Buttons - Mobile: Vertical Stack */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center mb-8 md:mb-12 max-w-md md:max-w-none mx-auto">
          <button 
            onClick={handleWatchDemo}
            className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Play className="w-4 h-4 md:w-5 md:h-5" />
            Watch Demo
          </button>
          <button 
            onClick={handleBookConsultation}
            className="w-full md:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-lg"
          >
            <Calendar className="w-4 h-4 md:w-5 md:h-5" />
            Book Free Consultation
          </button>
        </div>

        {/* Status Text */}
        <p className="text-[10px] md:text-xs text-white/40 mb-4 md:mb-6">
          AUTOMATION INTELLIGENCE ONLINE STATUS: READY
        </p>

        {/* Bottom Trust Text */}
        <p className="text-[9px] md:text-xs text-white/30 max-w-2xl mx-auto leading-relaxed px-4">
          Trusted by 100+ growing companies worldwide. Join industry leaders who've transformed their operations with our cutting-edge automation solutions.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToNext}
          className="text-white/40 hover:text-white/60 transition-colors duration-200"
          aria-label="Scroll to next section"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
}