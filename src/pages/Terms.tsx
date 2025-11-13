import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, AlertTriangle, CheckCircle, XCircle, Clock } from 'lucide-react';

const Terms: React.FC = () => {
  const sections = [
    {
      icon: CheckCircle,
      title: 'Acceptance of Terms',
      content: [
        'By accessing or using Futura services, you agree to be bound by these Terms of Service',
        'If you do not agree to these terms, you may not use our services',
        'These terms apply to all users, including visitors, customers, and other users of the service',
        'We may update these terms from time to time with notice to users'
      ]
    },
    {
      icon: FileText,
      title: 'Service Description',
      content: [
        'Futura provides business automation systems and related services',
        'Services include but are not limited to workflow automation, data processing, and integration services',
        'We reserve the right to modify, suspend, or discontinue services with reasonable notice',
        'Service availability may vary based on your subscription plan and technical requirements'
      ]
    },
    {
      icon: Scale,
      title: 'User Responsibilities',
      content: [
        'Provide accurate and complete information when creating your account',
        'Maintain the security of your account credentials and notify us of unauthorized access',
        'Use services only for lawful purposes and in accordance with these terms',
        'Respect intellectual property rights and not reverse engineer our systems',
        'Comply with all applicable laws and regulations in your use of our services'
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Prohibited Uses',
      content: [
        'Using services for illegal activities or to violate any laws or regulations',
        'Attempting to gain unauthorized access to our systems or other users\' accounts',
        'Transmitting viruses, malware, or other harmful code through our services',
        'Engaging in activities that could damage, disable, or impair our services',
        'Using automated systems to access services without our express written permission'
      ]
    },
    {
      icon: XCircle,
      title: 'Limitation of Liability',
      content: [
        'Services are provided "as is" without warranties of any kind',
        'We are not liable for indirect, incidental, or consequential damages',
        'Our total liability is limited to the amount paid for services in the preceding 12 months',
        'We do not guarantee uninterrupted or error-free service operation',
        'Users are responsible for backing up their data and maintaining business continuity'
      ]
    },
    {
      icon: Clock,
      title: 'Termination',
      content: [
        'Either party may terminate the agreement with 30 days written notice',
        'We may suspend or terminate accounts for violation of these terms',
        'Upon termination, you will lose access to services and any data stored therein',
        'Certain provisions of these terms will survive termination',
        'You remain responsible for all charges incurred before termination'
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
            Terms of Service
          </h1>
          <p className="text-xl text-white/80 mb-6">
            Legal terms and conditions for using Futura services
          </p>
          <div className="text-sm text-white/60">
            Last updated: January 15, 2024 • Effective: January 15, 2024
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
            <Scale size={32} className="text-neon-purple" />
            <h2 className="text-3xl font-bold">Agreement Overview</h2>
          </div>
          <p className="text-white/80 leading-relaxed mb-4">
            These Terms of Service ("Terms") govern your use of Futura's automation services, website, 
            and related offerings. By using our services, you enter into a legally binding agreement with 
            Futura Automation Systems, Inc.
          </p>
          <p className="text-white/80 leading-relaxed">
            Please read these terms carefully before using our services. If you have questions about 
            these terms, please contact our legal team at legal@futura.ai.
          </p>
        </motion.div>

        {/* Terms Sections */}
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

        {/* Additional Legal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <motion.div
            className="bg-dark-800/50 backdrop-blur-sm rounded-xl neon-border p-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-neon-purple">Governing Law</h3>
            <div className="space-y-4 text-white/80">
              <p>
                These Terms are governed by the laws of the State of California, United States, 
                without regard to conflict of law principles.
              </p>
              <p>
                Any disputes arising from these Terms will be resolved through binding arbitration 
                in San Francisco, California.
              </p>
              <p>
                If any provision of these Terms is found to be unenforceable, the remaining 
                provisions will continue in full force and effect.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-dark-800/50 backdrop-blur-sm rounded-xl neon-border p-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-neon-purple">Contact Information</h3>
            <div className="space-y-4 text-white/80">
              <div>
                <h4 className="font-semibold mb-2">Legal Department</h4>
                <p>Email: legal@futura.ai</p>
                <p>Phone: +1 (555) 123-4567</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Mailing Address</h4>
                <p>Futura Automation Systems, Inc.</p>
                <p>123 Innovation Drive</p>
                <p>San Francisco, CA 94105</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Acknowledgment */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="bg-neon-purple/10 border border-neon-purple/30 rounded-xl p-6 max-w-3xl mx-auto">
            <h4 className="text-lg font-semibold mb-3 text-neon-purple">Acknowledgment</h4>
            <p className="text-white/80 text-sm leading-relaxed">
              By using Futura services, you acknowledge that you have read, understood, and agree to be 
              bound by these Terms of Service. You also acknowledge that these Terms, together with our 
              Privacy Policy, constitute the complete and exclusive agreement between you and Futura 
              regarding the use of our services.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;