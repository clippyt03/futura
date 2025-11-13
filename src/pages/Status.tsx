import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle, XCircle, Clock, Activity } from 'lucide-react';

const Status: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      name: 'Automation Engine',
      status: 'operational',
      uptime: '99.98%',
      responseTime: '45ms',
      description: 'Core automation processing system'
    },
    {
      name: 'API Gateway',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '32ms',
      description: 'API endpoints and integrations'
    },
    {
      name: 'Email Systems',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '120ms',
      description: 'Email automation and delivery'
    },
    {
      name: 'Data Processing',
      status: 'operational',
      uptime: '99.97%',
      responseTime: '78ms',
      description: 'Data analysis and report generation'
    },
    {
      name: 'Client Dashboard',
      status: 'maintenance',
      uptime: '99.92%',
      responseTime: '156ms',
      description: 'Client portal and management interface'
    },
    {
      name: 'Webhook Delivery',
      status: 'operational',
      uptime: '99.96%',
      responseTime: '89ms',
      description: 'Real-time event notifications'
    }
  ];

  const incidents = [
    {
      date: '2024-01-15',
      time: '14:30 PST',
      title: 'Scheduled Maintenance - Client Dashboard',
      status: 'ongoing',
      description: 'Routine maintenance to improve dashboard performance. Expected completion: 16:00 PST.',
      impact: 'Minor service disruption'
    },
    {
      date: '2024-01-12',
      time: '09:15 PST',
      title: 'API Rate Limiting Issue',
      status: 'resolved',
      description: 'Temporary increase in API response times due to high traffic volume.',
      impact: 'Degraded performance',
      resolution: 'Resolved by scaling infrastructure and optimizing rate limiting algorithms.'
    },
    {
      date: '2024-01-08',
      time: '11:45 PST',
      title: 'Email Delivery Delays',
      status: 'resolved',
      description: 'Some automated emails experienced delivery delays.',
      impact: 'Service disruption',
      resolution: 'Issue resolved by switching to backup email service provider.'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="text-green-500" size={20} />;
      case 'maintenance':
        return <AlertCircle className="text-yellow-500" size={20} />;
      case 'degraded':
        return <AlertCircle className="text-orange-500" size={20} />;
      case 'outage':
        return <XCircle className="text-red-500" size={20} />;
      default:
        return <Clock className="text-gray-500" size={20} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-500';
      case 'maintenance':
        return 'text-yellow-500';
      case 'degraded':
        return 'text-orange-500';
      case 'outage':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  const getIncidentIcon = (status: string) => {
    switch (status) {
      case 'ongoing':
        return <AlertCircle className="text-yellow-500" size={16} />;
      case 'resolved':
        return <CheckCircle className="text-green-500" size={16} />;
      default:
        return <Clock className="text-gray-500" size={16} />;
    }
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
            System Status
          </h1>
          <p className="text-xl text-white/80 mb-4">
            Real-time status of all Futura services
          </p>
          <div className="text-sm text-white/60">
            Last updated: {currentTime.toLocaleString()}
          </div>
        </motion.div>

        {/* Overall Status */}
        <motion.div
          className="bg-dark-800/50 backdrop-blur-sm rounded-xl neon-border p-8 mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <CheckCircle className="text-green-500" size={32} />
            <h2 className="text-3xl font-bold text-green-500">All Systems Operational</h2>
          </div>
          <p className="text-white/70">
            All core services are running normally with optimal performance.
          </p>
        </motion.div>

        {/* Services Status */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-neon-purple flex items-center gap-3">
            <Activity size={32} />
            Service Status
          </h2>
          <div className="space-y-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-dark-800/50 backdrop-blur-sm rounded-xl neon-border p-6"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {getStatusIcon(service.status)}
                    <div>
                      <h3 className="text-lg font-semibold">{service.name}</h3>
                      <p className="text-white/60 text-sm">{service.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`font-semibold capitalize ${getStatusColor(service.status)}`}>
                      {service.status}
                    </div>
                    <div className="text-sm text-white/60 mt-1">
                      {service.uptime} uptime • {service.responseTime} avg
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Recent Incidents */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-neon-purple">
            Recent Incidents
          </h2>
          <div className="space-y-6">
            {incidents.map((incident, index) => (
              <motion.div
                key={index}
                className="bg-dark-800/50 backdrop-blur-sm rounded-xl neon-border p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  {getIncidentIcon(incident.status)}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold">{incident.title}</h3>
                      <div className="text-sm text-white/60">
                        {incident.date} at {incident.time}
                      </div>
                    </div>
                    <p className="text-white/80 mb-3">{incident.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-orange-400">
                        Impact: {incident.impact}
                      </span>
                      <span className={`text-sm font-semibold capitalize ${
                        incident.status === 'resolved' ? 'text-green-500' : 'text-yellow-500'
                      }`}>
                        {incident.status}
                      </span>
                    </div>
                    {incident.resolution && (
                      <div className="mt-3 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                        <p className="text-sm text-green-400">
                          <strong>Resolution:</strong> {incident.resolution}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Subscribe to Updates */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-dark-800/50 backdrop-blur-sm p-8 rounded-xl neon-border max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-white/70 mb-6">
              Subscribe to receive notifications about system status changes and maintenance windows.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-dark-700/50 border border-neon-purple/30 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:border-neon-purple focus:outline-none"
              />
              <motion.button
                className="bg-neon-purple px-6 py-3 rounded-lg text-white font-semibold hover:bg-neon-purple/80 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Status;