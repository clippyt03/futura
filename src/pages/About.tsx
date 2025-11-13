import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Globe, Zap, Shield, Clock } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We exist to give businesses their time back through intelligent automation.',
    },
    {
      icon: Users,
      title: 'Team-Focused',
      description: 'Every solution is designed with your team\'s productivity and growth in mind.',
    },
    {
      icon: Award,
      title: 'Excellence First',
      description: 'We deliver premium automation systems that exceed expectations.',
    },
    {
      icon: Globe,
      title: 'Future-Ready',
      description: 'Building tomorrow\'s business infrastructure today.',
    },
  ];

  const expertise = [
    {
      icon: Zap,
      title: 'Automation Engineering',
      description: 'Expert team with 10+ years building scalable automation systems for enterprise clients.',
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security specialists ensuring your data and processes remain protected.',
    },
    {
      icon: Clock,
      title: 'Client Success',
      description: 'Dedicated success managers focused on maximizing your automation ROI and business growth.',
    },
  ];

  return (
    <div className="min-h-screen bg-dark-900 text-white font-orbitron">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">
            About Futura
          </h1>
          <p className="text-xl text-white/80 leading-relaxed">
            We're a team of automation experts dedicated to transforming how modern businesses operate. 
            Our mission is simple: give you time back through intelligent systems that scale with your growth.
          </p>
        </motion.div>

        {/* Company Story */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-dark-800/50 backdrop-blur-sm p-12 rounded-xl neon-border">
            <h2 className="text-3xl font-bold mb-6 text-neon-purple">Our Story</h2>
            <div className="text-white/80 leading-relaxed space-y-4">
              <p>
                Founded in 2023, Futura emerged from a simple observation: businesses were drowning in repetitive tasks 
                that could be automated. Our founders, having worked with hundreds of companies, saw the same patterns 
                everywhere—teams spending 60% of their time on manual processes that technology could handle.
              </p>
              <p>
                We built Futura to bridge that gap. Not just another automation company, but a strategic partner that 
                understands your business needs and creates systems that actually work. Every solution we build is 
                designed to give you the most precious resource: time.
              </p>
              <p>
                Today, we've helped over 500 businesses reclaim thousands of hours, allowing them to focus on what 
                truly matters—growing their business and serving their customers.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Values */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 glow-text">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-dark-800/50 backdrop-blur-sm p-6 rounded-xl neon-border text-center"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(138, 43, 226, 0.3)' }}
              >
                <value.icon size={48} className="text-neon-purple mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-white/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Expertise Areas */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 glow-text">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertise.map((area, index) => (
              <motion.div
                key={index}
                className="bg-dark-800/50 backdrop-blur-sm p-8 rounded-xl neon-border text-center"
                whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(138, 43, 226, 0.2)' }}
              >
                <div className="w-24 h-24 bg-neon-purple/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <area.icon size={32} className="text-neon-purple" />
                </div>
                <h3 className="text-xl font-bold mb-2">{area.title}</h3>
                <p className="text-white/70">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Company Stats */}
        <motion.section
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-dark-800/50 backdrop-blur-sm p-12 rounded-xl neon-border">
            <h2 className="text-3xl font-bold text-center mb-12 text-neon-purple">By the Numbers</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-neon-purple mb-2">500+</div>
                <div className="text-white/70">Businesses Automated</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-neon-purple mb-2">10,000+</div>
                <div className="text-white/70">Hours Saved Weekly</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-neon-purple mb-2">99.9%</div>
                <div className="text-white/70">System Uptime</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-neon-purple mb-2">24/7</div>
                <div className="text-white/70">Support Available</div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;