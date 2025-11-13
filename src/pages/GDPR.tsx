import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, FileText, Download, Trash2, Eye, Lock, CheckCircle } from 'lucide-react';

const GDPR: React.FC = () => {
  const rights = [
    {
      icon: Eye,
      title: 'Right to Access',
      description: 'Request a copy of all personal data we hold about you',
      action: 'Request Data Export'
    },
    {
      icon: FileText,
      title: 'Right to Rectification',
      description: 'Correct any inaccurate or incomplete personal data',
      action: 'Update Information'
    },
    {
      icon: Trash2,
      title: 'Right to Erasure',
      description: 'Request deletion of your personal data ("right to be forgotten")',
      action: 'Delete Account'
    },
    {
      icon: Lock,
      title: 'Right to Restrict Processing',
      description: 'Limit how we process your personal data',
      action: 'Restrict Processing'
    },
    {
      icon: Download,
      title: 'Right to Data Portability',
      description: 'Receive your data in a structured, machine-readable format',
      action: 'Export Data'
    },
    {
      icon: Shield,
      title: 'Right to Object',
      description: 'Object to processing based on legitimate interests or direct marketing',
      action: 'Object to Processing'
    }
  ];

  const legalBases = [
    {
      title: 'Contract Performance',
      description: 'Processing necessary to provide our automation services',
      examples: ['Account management', 'Service delivery', 'Customer support']
    },
    {
      title: 'Legitimate Interest',
      description: 'Processing for our legitimate business interests',
      examples: ['Service improvement', 'Security monitoring', 'Business analytics']
    },
    {
      title: 'Legal Obligation',
      description: 'Processing required by law',
      examples: ['Tax compliance', 'Regulatory reporting', 'Legal proceedings']
    },
    {
      title: 'Consent',
      description: 'Processing based on your explicit consent',
      examples: ['Marketing communications', 'Optional features', 'Third-party integrations']
    }
  ];

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
            GDPR Compliance
          </h1>
          <p className="text-xl text-white/80 mb-6">
            Your data protection rights under the General Data Protection Regulation
          </p>
          <div className="text-sm text-white/60">
            Effective: May 25, 2018 • Last updated: January 15, 2024
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
            <Shield size={32} className="text-neon-purple" />
            <h2 className="text-3xl font-bold">Our GDPR Commitment</h2>
          </div>
          <div className="space-y-4 text-white/80 leading-relaxed">
            <p>
              Futura is committed to protecting your personal data and respecting your privacy rights 
              under the General Data Protection Regulation (GDPR). As a data controller, we ensure 
              that all personal data processing is lawful, fair, and transparent.
            </p>
            <p>
              This page explains your rights under GDPR and how we comply with data protection 
              requirements. If you are an EU resident, these rights apply to you regardless of 
              where you access our services.
            </p>
          </div>
        </motion.div>

        {/* Your Rights */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 glow-text">Your Data Protection Rights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rights.map((right, index) => (
              <motion.div
                key={index}
                className="bg-dark-800/50 backdrop-blur-sm rounded-xl neon-border p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(138, 43, 226, 0.3)' }}
              >
                <right.icon size={40} className="text-neon-purple mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-3">{right.title}</h3>
                <p className="text-white/70 text-sm mb-6 leading-relaxed">{right.description}</p>
                <motion.button
                  className="bg-neon-purple/20 border border-neon-purple/50 px-4 py-2 rounded-lg text-neon-purple text-sm hover:bg-neon-purple hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {right.action}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Legal Bases */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-neon-purple">Legal Bases for Processing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {legalBases.map((basis, index) => (
              <motion.div
                key={index}
                className="bg-dark-800/50 backdrop-blur-sm rounded-xl neon-border p-6"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-3 text-neon-purple">{basis.title}</h3>
                <p className="text-white/80 mb-4">{basis.description}</p>
                <div>
                  <h4 className="font-semibold mb-2 text-white">Examples:</h4>
                  <ul className="space-y-1">
                    {basis.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="text-white/70 text-sm flex items-center gap-2">
                        <CheckCircle size={12} className="text-neon-purple" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Data Processing Information */}
        <motion.div
          className="bg-dark-800/50 backdrop-blur-sm rounded-xl neon-border p-8 mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-neon-purple">How We Process Your Data</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Data Collection</h3>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• Account registration information</li>
                <li>• Service usage data</li>
                <li>• Communication records</li>
                <li>• Technical and log data</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Data Storage</h3>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• EU-based data centers</li>
                <li>• Encrypted storage systems</li>
                <li>• Regular security audits</li>
                <li>• Access controls and monitoring</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Data Sharing</h3>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• Limited to service providers</li>
                <li>• Strict contractual agreements</li>
                <li>• No sale to third parties</li>
                <li>• Legal compliance only</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl neon-border p-8">
            <h3 className="text-2xl font-bold mb-6 text-neon-purple">Data Protection Officer</h3>
            <div className="space-y-4 text-white/80">
              <div>
                <h4 className="font-semibold mb-2">Contact Information</h4>
                <p>Email: dpo@wefutura.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Response time: Within 72 hours</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Mailing Address</h4>
                <p>Data Protection Officer</p>
                <p>Futura Automation Systems</p>
                <p>123 Innovation Drive</p>
                <p>San Francisco, CA 94105</p>
              </div>
            </div>
          </div>

          <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl neon-border p-8">
            <h3 className="text-2xl font-bold mb-6 text-neon-purple">Supervisory Authority</h3>
            <div className="space-y-4 text-white/80">
              <p>
                If you are not satisfied with our response to your data protection concerns, 
                you have the right to lodge a complaint with your local supervisory authority.
              </p>
              <div>
                <h4 className="font-semibold mb-2">EU Residents</h4>
                <p>Contact your national data protection authority</p>
                <p>Find your authority: ec.europa.eu/justice/data-protection</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">UK Residents</h4>
                <p>Information Commissioner's Office (ICO)</p>
                <p>Website: ico.org.uk</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Request Form CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="bg-neon-purple/10 border border-neon-purple/30 rounded-xl p-8 max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold mb-4 text-neon-purple">Exercise Your Rights</h4>
            <p className="text-white/80 mb-6">
              Ready to exercise your data protection rights? Use our secure form to submit your request.
            </p>
            <motion.button
              className="bg-neon-purple px-8 py-3 rounded-lg text-white font-semibold hover:bg-neon-purple/80 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit Data Request
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GDPR;