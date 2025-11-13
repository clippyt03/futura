import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, UserCheck, FileText } from 'lucide-react';

const Privacy: React.FC = () => {
  const sections = [
    {
      icon: Database,
      title: 'Information We Collect',
      content: [
        'Account information (name, email, company details)',
        'Usage data and analytics to improve our services',
        'Communication records for support purposes',
        'Technical data necessary for automation functionality',
        'Payment information (processed securely through third-party providers)'
      ]
    },
    {
      icon: Eye,
      title: 'How We Use Your Information',
      content: [
        'Provide and maintain our automation services',
        'Process transactions and send related information',
        'Send technical notices and support communications',
        'Improve our services based on usage patterns',
        'Comply with legal obligations and protect our rights'
      ]
    },
    {
      icon: Shield,
      title: 'Data Protection',
      content: [
        'Industry-standard encryption for data in transit and at rest',
        'Regular security audits and vulnerability assessments',
        'Access controls and authentication mechanisms',
        'Secure data centers with physical and digital safeguards',
        'Employee training on data protection best practices'
      ]
    },
    {
      icon: UserCheck,
      title: 'Your Rights',
      content: [
        'Access your personal data and request corrections',
        'Request deletion of your data (subject to legal requirements)',
        'Opt-out of non-essential communications',
        'Data portability for information you provide',
        'Lodge complaints with relevant data protection authorities'
      ]
    },
    {
      icon: Lock,
      title: 'Data Sharing',
      content: [
        'We do not sell your personal information to third parties',
        'Limited sharing with service providers under strict agreements',
        'Legal disclosures when required by law or to protect rights',
        'Business transfers (with notice and continued protection)',
        'Anonymized data for research and improvement purposes'
      ]
    },
    {
      icon: FileText,
      title: 'Data Retention',
      content: [
        'Account data retained while your account is active',
        'Backup data retained for 90 days after account deletion',
        'Legal and compliance data retained as required by law',
        'Analytics data anonymized after 24 months',
        'Communication records retained for 3 years for support purposes'
      ]
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
            Privacy Policy
          </h1>
          <p className="text-xl text-white/80 mb-6">
            Your privacy is fundamental to how we operate
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
            <Shield size={32} className="text-neon-purple" />
            <h2 className="text-3xl font-bold">Our Commitment to Privacy</h2>
          </div>
          <p className="text-white/80 leading-relaxed mb-4">
            At Futura, we understand that your data is one of your most valuable assets. This Privacy Policy 
            explains how we collect, use, protect, and share information when you use our automation services.
          </p>
          <p className="text-white/80 leading-relaxed">
            We are committed to transparency and giving you control over your information. This policy applies 
            to all users of Futura's services, including our website, automation platforms, and related services.
          </p>
        </motion.div>

        {/* Privacy Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="bg-dark-800/50 backdrop-blur-sm rounded-xl neon-border p-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <section.icon size={28} className="text-neon-purple" />
                <h3 className="text-2xl font-bold">{section.title}</h3>
              </div>
              <ul className="space-y-3">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3 text-white/80">
                    <div className="w-2 h-2 bg-neon-purple rounded-full mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Information */}
        <motion.div
          className="bg-dark-800/50 backdrop-blur-sm rounded-xl neon-border p-8 mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-neon-purple">Contact Us About Privacy</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-3">Data Protection Officer</h4>
              <p className="text-white/80 mb-2">Email: privacy@wefutura.com</p>
              <p className="text-white/80 mb-2">Phone: +1 (555) 123-4567</p>
              <p className="text-white/80">Response time: Within 48 hours</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">Mailing Address</h4>
              <p className="text-white/80 mb-2">Futura Automation Systems</p>
              <p className="text-white/80 mb-2">123 Innovation Drive</p>
              <p className="text-white/80 mb-2">San Francisco, CA 94105</p>
              <p className="text-white/80">United States</p>
            </div>
          </div>
        </motion.div>

        {/* Updates Notice */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="bg-neon-purple/10 border border-neon-purple/30 rounded-xl p-6 max-w-2xl mx-auto">
            <h4 className="text-lg font-semibold mb-3 text-neon-purple">Policy Updates</h4>
            <p className="text-white/80 text-sm">
              We may update this Privacy Policy from time to time. We will notify you of any material 
              changes by email and by posting the updated policy on our website. Your continued use 
              of our services after such changes constitutes acceptance of the updated policy.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;