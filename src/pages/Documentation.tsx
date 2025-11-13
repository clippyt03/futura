import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, Code, Settings, Zap, ChevronRight, Search } from 'lucide-react';

const Documentation: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState('getting-started');
  const [searchTerm, setSearchTerm] = useState('');

  const sections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Zap,
      content: {
        title: 'Getting Started with Futura',
        description: 'Everything you need to know to begin your automation journey.',
        items: [
          {
            title: 'Initial Consultation',
            content: 'Book a discovery call to discuss your automation needs and current workflows.'
          },
          {
            title: 'Process Analysis',
            content: 'Our team analyzes your existing processes to identify automation opportunities.'
          },
          {
            title: 'Custom Solution Design',
            content: 'We design tailored automation systems specific to your business requirements.'
          },
          {
            title: 'Implementation & Testing',
            content: 'Deploy and thoroughly test your automation systems before going live.'
          },
          {
            title: 'Training & Support',
            content: 'Comprehensive training for your team plus ongoing support and optimization.'
          }
        ]
      }
    },
    {
      id: 'api-reference',
      title: 'API Reference',
      icon: Code,
      content: {
        title: 'API Documentation',
        description: 'Complete reference for integrating with Futura systems.',
        items: [
          {
            title: 'Authentication',
            content: 'All API requests require authentication using your unique API key. Include it in the Authorization header.'
          },
          {
            title: 'Endpoints',
            content: 'Base URL: https://api.futura.ai/v1/ - All endpoints support JSON requests and responses.'
          },
          {
            title: 'Rate Limits',
            content: 'API calls are limited to 1000 requests per hour per API key. Contact support for higher limits.'
          },
          {
            title: 'Webhooks',
            content: 'Configure webhooks to receive real-time notifications about automation events.'
          },
          {
            title: 'Error Handling',
            content: 'Standard HTTP status codes with detailed error messages in JSON format.'
          }
        ]
      }
    },
    {
      id: 'automation-guides',
      title: 'Automation Guides',
      icon: Settings,
      content: {
        title: 'Automation Setup Guides',
        description: 'Step-by-step guides for common automation scenarios.',
        items: [
          {
            title: 'Email Automation',
            content: 'Set up automated email sequences, lead nurturing campaigns, and response handling.'
          },
          {
            title: 'Data Processing',
            content: 'Automate data collection, cleaning, and report generation from multiple sources.'
          },
          {
            title: 'Client Onboarding',
            content: 'Streamline client intake with automated document collection and workflow triggers.'
          },
          {
            title: 'Lead Generation',
            content: 'Configure automated lead scraping, qualification, and outreach systems.'
          },
          {
            title: 'Integration Setup',
            content: 'Connect your existing tools and platforms with Futura automation systems.'
          }
        ]
      }
    },
    {
      id: 'best-practices',
      title: 'Best Practices',
      icon: Book,
      content: {
        title: 'Automation Best Practices',
        description: 'Proven strategies for maximizing your automation ROI.',
        items: [
          {
            title: 'Start Small, Scale Fast',
            content: 'Begin with simple automations and gradually build more complex workflows as your team adapts.'
          },
          {
            title: 'Monitor & Optimize',
            content: 'Regularly review automation performance and optimize based on real usage data.'
          },
          {
            title: 'Team Training',
            content: 'Ensure your team understands how automations work and when to intervene manually.'
          },
          {
            title: 'Data Quality',
            content: 'Maintain clean, consistent data inputs to ensure reliable automation outputs.'
          },
          {
            title: 'Backup Plans',
            content: 'Always have manual processes ready as fallbacks for critical business functions.'
          }
        ]
      }
    }
  ];

  const currentSection = sections.find(s => s.id === selectedSection);

  const filteredSections = sections.filter(section =>
    section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    section.content.items.some(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.content.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-dark-900 text-white font-orbitron">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">
            Documentation
          </h1>
          <p className="text-xl text-white/80">
            Complete guides and references for Futura automation systems
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          className="max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40" size={20} />
            <input
              type="text"
              placeholder="Search documentation..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-dark-800/50 border border-neon-purple/30 rounded-lg pl-12 pr-4 py-4 text-white placeholder-white/40 focus:border-neon-purple focus:outline-none"
            />
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <motion.div
            className="lg:w-1/4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl neon-border p-6 sticky top-24">
              <h3 className="text-lg font-bold mb-4 text-neon-purple">Sections</h3>
              <nav className="space-y-2">
                {filteredSections.map((section) => (
                  <motion.button
                    key={section.id}
                    onClick={() => setSelectedSection(section.id)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-300 flex items-center gap-3 ${
                      selectedSection === section.id
                        ? 'bg-neon-purple/20 text-neon-purple'
                        : 'text-white/70 hover:text-white hover:bg-dark-700/50'
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <section.icon size={18} />
                    <span className="text-sm">{section.title}</span>
                    {selectedSection === section.id && (
                      <ChevronRight size={16} className="ml-auto" />
                    )}
                  </motion.button>
                ))}
              </nav>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="lg:w-3/4"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {currentSection && (
              <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl neon-border p-8">
                <div className="flex items-center gap-4 mb-6">
                  <currentSection.icon size={32} className="text-neon-purple" />
                  <div>
                    <h2 className="text-3xl font-bold">{currentSection.content.title}</h2>
                    <p className="text-white/70 mt-2">{currentSection.content.description}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {currentSection.content.items.map((item, index) => (
                    <motion.div
                      key={index}
                      className="border-l-2 border-neon-purple/30 pl-6 py-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <h3 className="text-xl font-semibold mb-3 text-neon-purple">
                        {item.title}
                      </h3>
                      <p className="text-white/80 leading-relaxed">
                        {item.content}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;