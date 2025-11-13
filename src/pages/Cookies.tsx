import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cookie, Settings, Eye, BarChart, Shield, ToggleLeft, ToggleRight } from 'lucide-react';

const Cookies: React.FC = () => {
  const [cookieSettings, setCookieSettings] = useState({
    essential: true,
    analytics: true,
    marketing: false,
    preferences: true,
  });

  const cookieTypes = [
    {
      icon: Shield,
      title: 'Essential Cookies',
      description: 'Required for basic website functionality and security',
      required: true,
      examples: ['Authentication tokens', 'Security preferences', 'Session management'],
      retention: 'Session or up to 1 year'
    },
    {
      icon: BarChart,
      title: 'Analytics Cookies',
      description: 'Help us understand how visitors interact with our website',
      required: false,
      examples: ['Page views', 'User behavior', 'Performance metrics'],
      retention: 'Up to 2 years'
    },
    {
      icon: Eye,
      title: 'Marketing Cookies',
      description: 'Used to deliver relevant advertisements and track campaign effectiveness',
      required: false,
      examples: ['Ad targeting', 'Campaign tracking', 'Social media integration'],
      retention: 'Up to 1 year'
    },
    {
      icon: Settings,
      title: 'Preference Cookies',
      description: 'Remember your choices and provide enhanced features',
      required: false,
      examples: ['Language settings', 'Theme preferences', 'Form data'],
      retention: 'Up to 6 months'
    }
  ];

  const toggleCookie = (type: string) => {
    if (type === 'essential') return; // Essential cookies cannot be disabled
    
    setCookieSettings(prev => ({
      ...prev,
      [type]: !prev[type as keyof typeof prev]
    }));
  };

  const saveSettings = () => {
    // In a real application, this would save the settings to localStorage or send to server
    console.log('Cookie settings saved:', cookieSettings);
    alert('Cookie preferences saved successfully!');
  };

  return (
    <div className="min-h-screen bg-dark-900 text-white font-orbitron">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">
            Cookie Policy
          </h1>
          <p className="text-xl text-white/80 mb-6">
            How we use cookies to improve your experience
          </p>
          <div className="text-sm text-white/60">
            Last updated: January 15, 2024
          </div>
        </motion.div>

        {/* Introduction */}
        <motion.div
          className="bg-dark-800/50 backdrop-blur-sm rounded-xl neon-border p-8 mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <Cookie size={32} className="text-neon-purple" />
            <h2 className="text-3xl font-bold">What Are Cookies?</h2>
          </div>
          <div className="space-y-4 text-white/80 leading-relaxed">
            <p>
              Cookies are small text files that are stored on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences and 
              understanding how you use our services.
            </p>
            <p>
              We use cookies for various purposes, including essential site functionality, analytics, 
              and improving our services. You have control over which cookies you accept, except for 
              those that are essential for the website to function properly.
            </p>
          </div>
        </motion.div>

        {/* Cookie Types */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-neon-purple">Types of Cookies We Use</h2>
          <div className="space-y-6">
            {cookieTypes.map((type, index) => (
              <motion.div
                key={index}
                className="bg-dark-800/50 backdrop-blur-sm rounded-xl neon-border p-8"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <type.icon size={28} className="text-neon-purple" />
                    <div>
                      <h3 className="text-xl font-bold">{type.title}</h3>
                      <p className="text-white/70 mt-1">{type.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {type.required ? (
                      <span className="text-sm text-orange-400 font-semibold">Required</span>
                    ) : (
                      <button
                        onClick={() => toggleCookie(type.title.toLowerCase().split(' ')[0])}
                        className="text-neon-purple hover:text-white transition-colors duration-300"
                      >
                        {cookieSettings[type.title.toLowerCase().split(' ')[0] as keyof typeof cookieSettings] ? (
                          <ToggleRight size={32} />
                        ) : (
                          <ToggleLeft size={32} />
                        )}
                      </button>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-neon-purple">Examples:</h4>
                    <ul className="space-y-1">
                      {type.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="text-white/70 text-sm flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-neon-purple rounded-full" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-neon-purple">Retention Period:</h4>
                    <p className="text-white/70 text-sm">{type.retention}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Cookie Settings */}
        <motion.div
          className="bg-dark-800/50 backdrop-blur-sm rounded-xl neon-border p-8 mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-neon-purple">Your Cookie Preferences</h2>
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-between p-4 bg-dark-700/50 rounded-lg">
              <div>
                <h4 className="font-semibold">Essential Cookies</h4>
                <p className="text-white/60 text-sm">Always active - required for basic functionality</p>
              </div>
              <ToggleRight size={24} className="text-orange-400" />
            </div>
            
            {Object.entries(cookieSettings).filter(([key]) => key !== 'essential').map(([key, value]) => (
              <div key={key} className="flex items-center justify-between p-4 bg-dark-700/50 rounded-lg">
                <div>
                  <h4 className="font-semibold capitalize">{key} Cookies</h4>
                  <p className="text-white/60 text-sm">
                    {key === 'analytics' && 'Help us improve our services'}
                    {key === 'marketing' && 'Personalized ads and content'}
                    {key === 'preferences' && 'Remember your settings'}
                  </p>
                </div>
                <button
                  onClick={() => toggleCookie(key)}
                  className="text-neon-purple hover:text-white transition-colors duration-300"
                >
                  {value ? <ToggleRight size={24} /> : <ToggleLeft size={24} />}
                </button>
              </div>
            ))}
          </div>
          
          <div className="flex gap-4">
            <motion.button
              onClick={saveSettings}
              className="bg-neon-purple px-8 py-3 rounded-lg text-white font-semibold hover:bg-neon-purple/80 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Save Preferences
            </motion.button>
            <motion.button
              onClick={() => setCookieSettings({ essential: true, analytics: false, marketing: false, preferences: false })}
              className="border border-neon-purple/50 px-8 py-3 rounded-lg text-neon-purple hover:bg-neon-purple/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Reject All Optional
            </motion.button>
          </div>
        </motion.div>

        {/* Managing Cookies */}
        <motion.div
          className="bg-dark-800/50 backdrop-blur-sm rounded-xl neon-border p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-neon-purple">Managing Cookies in Your Browser</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Browser Settings</h3>
              <div className="space-y-3 text-white/80 text-sm">
                <p>You can control cookies through your browser settings:</p>
                <ul className="space-y-2 ml-4">
                  <li>• Chrome: Settings → Privacy and Security → Cookies</li>
                  <li>• Firefox: Preferences → Privacy & Security</li>
                  <li>• Safari: Preferences → Privacy</li>
                  <li>• Edge: Settings → Cookies and Site Permissions</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Third-Party Tools</h3>
              <div className="space-y-3 text-white/80 text-sm">
                <p>You can also use third-party tools to manage cookies:</p>
                <ul className="space-y-2 ml-4">
                  <li>• Browser extensions for cookie management</li>
                  <li>• Privacy-focused browsers</li>
                  <li>• Ad blockers with cookie controls</li>
                  <li>• Privacy settings on mobile devices</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="bg-neon-purple/10 border border-neon-purple/30 rounded-xl p-6 max-w-2xl mx-auto">
            <h4 className="text-lg font-semibold mb-3 text-neon-purple">Questions About Cookies?</h4>
            <p className="text-white/80 text-sm mb-4">
              If you have any questions about our use of cookies or this Cookie Policy, 
              please contact our privacy team.
            </p>
            <p className="text-white/60 text-sm">
              Email: privacy@wefutura.com • Phone: +1 (555) 123-4567
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Cookies;