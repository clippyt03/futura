import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, Phone, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const Support: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('general');

  const supportChannels = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: '24/7',
      responseTime: 'Under 5 minutes',
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Detailed assistance for complex issues',
      availability: 'Business hours',
      responseTime: 'Within 2 hours',
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Direct line to our technical experts',
      availability: 'Mon-Fri 9AM-6PM PST',
      responseTime: 'Immediate',
    },
  ];

  const faqCategories = [
    { id: 'general', label: 'General' },
    { id: 'technical', label: 'Technical' },
    { id: 'billing', label: 'Billing' },
    { id: 'automation', label: 'Automation' },
  ];

  const faqs = {
    general: [
      {
        question: 'How long does it take to set up automation?',
        answer: 'Most automation systems are deployed within 1-2 weeks, depending on complexity. Simple workflows can be ready in 2-3 days.'
      },
      {
        question: 'Do you provide training for our team?',
        answer: 'Yes, we include comprehensive training as part of every automation package, plus ongoing support documentation.'
      },
      {
        question: 'Can you integrate with our existing tools?',
        answer: 'We work with 500+ popular business tools and can create custom integrations for proprietary systems.'
      }
    ],
    technical: [
      {
        question: 'What happens if an automation fails?',
        answer: 'All automations include error handling and fallback procedures. You\'ll receive immediate notifications of any issues.'
      },
      {
        question: 'How secure are your automation systems?',
        answer: 'We use enterprise-grade security with encryption, secure API connections, and regular security audits.'
      },
      {
        question: 'Can we modify automations after deployment?',
        answer: 'Yes, all automations are fully customizable. We provide ongoing optimization and modification services.'
      }
    ],
    billing: [
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards, ACH transfers, and can accommodate custom billing arrangements for enterprise clients.'
      },
      {
        question: 'Are there any setup fees?',
        answer: 'No hidden fees. Our pricing is transparent with everything included in your monthly subscription.'
      },
      {
        question: 'Can we cancel anytime?',
        answer: 'Yes, you can cancel your subscription at any time. We also offer a 30-day money-back guarantee.'
      }
    ],
    automation: [
      {
        question: 'What types of processes can be automated?',
        answer: 'We can automate data entry, email sequences, report generation, lead processing, client onboarding, and much more.'
      },
      {
        question: 'How much time will automation save us?',
        answer: 'Most clients save 10-20 hours per week. The exact savings depend on your current processes and automation scope.'
      },
      {
        question: 'What if we need changes to our automation?',
        answer: 'All plans include ongoing support and optimization. We regularly review and improve your automations.'
      }
    ]
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
            Support Center
          </h1>
          <p className="text-xl text-white/80">
            Get the help you need, when you need it
          </p>
        </motion.div>

        {/* Support Channels */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-neon-purple">
            How Can We Help?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={index}
                className="bg-dark-800/50 backdrop-blur-sm p-8 rounded-xl neon-border text-center group"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(138, 43, 226, 0.3)' }}
              >
                {/* FIXED ICON ANIMATION */}
                <motion.div
                  className="support-icon-animate mb-4 mx-auto"
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, -10, 10, -5, 5, 0],
                  }}
                  transition={{ 
                    scale: { duration: 0.3 },
                    rotate: { duration: 0.8, ease: "easeInOut" }
                  }}
                >
                  <channel.icon size={48} className="text-neon-purple group-hover:text-white transition-colors duration-300" />
                </motion.div>
                
                <h3 className="text-xl font-bold mb-3">{channel.title}</h3>
                <p className="text-white/70 mb-4">{channel.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center gap-2">
                    <Clock size={16} className="text-neon-purple" />
                    <span>{channel.availability}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle size={16} className="text-neon-purple" />
                    <span>{channel.responseTime}</span>
                  </div>
                </div>
                <motion.button
                  className="mt-6 bg-neon-purple/20 border border-neon-purple/50 px-6 py-2 rounded-lg text-neon-purple hover:bg-neon-purple hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Now
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-neon-purple">
            Frequently Asked Questions
          </h2>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {faqCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-neon-purple text-white'
                    : 'bg-dark-800/50 text-white/70 hover:text-white hover:bg-dark-700/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs[selectedCategory as keyof typeof faqs].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-dark-800/50 backdrop-blur-sm rounded-xl neon-border overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <AlertCircle size={20} className="text-neon-purple mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-white">
                        {faq.question}
                      </h3>
                      <p className="text-white/80 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-dark-800/50 backdrop-blur-sm p-8 rounded-xl neon-border max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Still Need Help?</h3>
            <p className="text-white/70 mb-6">
              Our support team is standing by to assist you with any questions or issues.
            </p>
            <motion.button
              className="bg-neon-purple px-8 py-3 rounded-lg text-white font-semibold hover:bg-neon-purple/80 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Support Team
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Support;