import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, ArrowRight, Search } from 'lucide-react';
import SectionTransition from './SectionTransition';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  readTime: string;
  slug: string;
}

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'The Future of Business Automation: AI-Powered Workflows',
      excerpt: 'Discover how artificial intelligence is revolutionizing business workflows and what it means for your company\'s productivity.',
      author: 'James Mitchell',
      date: '2024-01-15',
      category: 'AI & Automation',
      tags: ['AI', 'Automation', 'Productivity'],
      readTime: '5 min read',
      slug: 'future-business-automation-ai-workflows',
    },
    {
      id: 2,
      title: 'ROI Calculator: How Much Time Can Automation Really Save?',
      excerpt: 'A comprehensive guide to calculating the return on investment for business automation solutions.',
      author: 'Rachel Kim',
      date: '2024-01-12',
      category: 'Strategy',
      tags: ['ROI', 'Strategy', 'Time Management'],
      readTime: '7 min read',
      slug: 'roi-calculator-automation-time-savings',
    },
    {
      id: 3,
      title: 'Case Study: 90% Reduction in Manual Data Entry',
      excerpt: 'Learn how TechFlow Agency eliminated manual data entry and increased their team productivity by 300%.',
      author: 'Daniel Foster',
      date: '2024-01-10',
      category: 'Case Studies',
      tags: ['Case Study', 'Data Entry', 'Efficiency'],
      readTime: '6 min read',
      slug: 'case-study-90-reduction-manual-data-entry',
    },
    {
      id: 4,
      title: 'Email Automation Best Practices for 2024',
      excerpt: 'Master the art of email automation with these proven strategies that increase engagement and conversion rates.',
      author: 'Sophie Turner',
      date: '2024-01-08',
      category: 'Email Marketing',
      tags: ['Email', 'Marketing', 'Automation'],
      readTime: '4 min read',
      slug: 'email-automation-best-practices-2024',
    },
    {
      id: 5,
      title: 'Building Scalable Lead Generation Systems',
      excerpt: 'Step-by-step guide to creating lead generation workflows that scale with your business growth.',
      author: 'Michael Zhang',
      date: '2024-01-05',
      category: 'Lead Generation',
      tags: ['Lead Generation', 'Scaling', 'Growth'],
      readTime: '8 min read',
      slug: 'building-scalable-lead-generation-systems',
    },
    {
      id: 6,
      title: 'The Psychology of Time: Why Automation Matters',
      excerpt: 'Understanding the psychological impact of time management and how automation can improve work-life balance.',
      author: 'Dr. Amanda Brooks',
      date: '2024-01-03',
      category: 'Psychology',
      tags: ['Psychology', 'Time Management', 'Work-Life Balance'],
      readTime: '6 min read',
      slug: 'psychology-time-why-automation-matters',
    },
  ];

  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <SectionTransition className="relative overflow-hidden">
      {/* Animated section divider */}
      <motion.div
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-purple/30 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      
      <section id="blog" className="py-20 relative bg-dark-800/30 section-spacing">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        {/* Floating elements */}
        <motion.div
          className="absolute top-16 left-16 w-32 h-32 bg-neon-purple/6 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <SectionTransition delay={0.2}>
            <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 pt-12 sm:pt-16 px-4 sm:px-0">
              {/* GLOWING SECTION TITLE - REDUCED INTENSITY */}
              <motion.h2 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 relative"
              >
                {/* Main glowing text - REDUCED INTENSITY */}
                <span 
                  className="relative z-10"
                  style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #8A2BE2 50%, #6495ED 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textShadow: '0 0 15px rgba(138, 43, 226, 0.6)', // Reduced from 20px to 15px
                    filter: 'drop-shadow(0 0 8px rgba(138, 43, 226, 0.4))', // Reduced from 10px to 8px
                  }}
                >
                  Insights & Intelligence
                </span>
                
                {/* Fallback text for browsers that don't support background-clip */}
                <span 
                  className="absolute inset-0 text-white opacity-0 z-0"
                  style={{
                    textShadow: '0 0 15px rgba(138, 43, 226, 0.6)',
                  }}
                >
                  Insights & Intelligence
                </span>
                
                {/* Additional pulsing glow animation - REDUCED INTENSITY */}
                <motion.span
                  className="absolute inset-0 text-neon-purple/40" // Reduced from 50% to 40%
                  style={{
                    textShadow: '0 0 20px rgba(138, 43, 226, 0.4)', // Reduced from 0.6 to 0.4
                  }}
                  animate={{
                    opacity: [0.25, 0.5, 0.25], // Reduced from 0.3-0.7 to 0.25-0.5
                    textShadow: [
                      '0 0 15px rgba(138, 43, 226, 0.4)', // Reduced intensity
                      '0 0 25px rgba(138, 43, 226, 0.6)', // Reduced intensity
                      '0 0 15px rgba(138, 43, 226, 0.4)'
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Insights & Intelligence
                </motion.span>
              </motion.h2>
              <p className="text-base sm:text-lg md:text-xl text-white/80">
                Stay ahead with the latest automation strategies and industry insights
              </p>
            </div>
          </SectionTransition>

          {/* Search and Filter */}
          <SectionTransition delay={0.4}>
            <div className="max-w-4xl mx-auto mb-8 sm:mb-12 px-4 sm:px-0">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40" size={16} />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-dark-800/50 border border-neon-purple/30 rounded-lg pl-9 pr-4 py-3 text-sm sm:text-base text-white placeholder-white/40 focus:border-neon-purple focus:outline-none transition-all duration-300"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-neon-purple text-white'
                        : 'bg-dark-800/50 text-white/60 hover:text-white hover:bg-dark-700/50'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>
          </SectionTransition>

          {/* Blog Posts Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto px-4 sm:px-0"
            layout
          >
            {filteredPosts.map((post, index) => (
              <SectionTransition
                key={post.id}
                delay={index * 0.1}
                direction="up"
              >
                <motion.article
                  className="bg-dark-800/50 backdrop-blur-sm rounded-xl neon-border overflow-hidden group cursor-pointer relative"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 0 30px rgba(138, 43, 226, 0.3)',
                  }}
                  layout
                >
                  {/* Hover gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-transparent to-blue-500/5 opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="p-4 sm:p-6 relative z-10">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <motion.span 
                        className="text-xs text-neon-purple bg-neon-purple/20 px-2 py-1 rounded text-[10px] sm:text-xs"
                        whileHover={{ scale: 1.05 }}
                      >
                        {post.category}
                      </motion.span>
                      <span className="text-[10px] sm:text-xs text-white/60">{post.readTime}</span>
                    </div>

                    {/* GLOWING BLOG POST TITLES - REDUCED INTENSITY */}
                    <motion.h3 
                      className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 line-clamp-2 cursor-pointer relative"
                      whileHover={{ scale: 1.02 }}
                    >
                      {/* Main glowing text - REDUCED INTENSITY */}
                      <span 
                        className="relative z-10"
                        style={{
                          background: 'linear-gradient(135deg, #ffffff 0%, #8A2BE2 50%, #6495ED 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          textShadow: '0 0 10px rgba(138, 43, 226, 0.4)', // Reduced from 12px to 10px
                          filter: 'drop-shadow(0 0 5px rgba(138, 43, 226, 0.25))', // Reduced from 6px to 5px
                        }}
                      >
                        {post.title}
                      </span>
                      
                      {/* Fallback text for browsers that don't support background-clip */}
                      <span 
                        className="absolute inset-0 text-white opacity-0 z-0"
                        style={{
                          textShadow: '0 0 10px rgba(138, 43, 226, 0.4)',
                        }}
                      >
                        {post.title}
                      </span>
                      
                      {/* Additional pulsing glow animation - REDUCED INTENSITY */}
                      <motion.span
                        className="absolute inset-0 text-neon-purple/40" // Reduced from 50% to 40%
                        style={{
                          textShadow: '0 0 12px rgba(138, 43, 226, 0.25)', // Reduced intensity
                        }}
                        animate={{
                          opacity: [0.25, 0.4, 0.25], // Reduced from 0.3-0.5 to 0.25-0.4
                          textShadow: [
                            '0 0 10px rgba(138, 43, 226, 0.25)', // Reduced intensity
                            '0 0 15px rgba(138, 43, 226, 0.4)', // Reduced intensity
                            '0 0 10px rgba(138, 43, 226, 0.25)'
                          ],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.2
                        }}
                      >
                        {post.title}
                      </motion.span>
                    </motion.h3>

                    <p className="text-sm sm:text-base text-white/70 mb-3 sm:mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                      {post.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          className="text-[10px] sm:text-xs text-white/50 bg-dark-700/50 px-2 py-1 rounded flex items-center gap-1"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Tag size={8} className="sm:w-2.5 sm:h-2.5" />
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-white/10">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-3 text-xs sm:text-sm text-white/60">
                        <div className="flex items-center gap-1">
                          <User size={12} />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={12} />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                      </div>

                      <motion.div
                        className="text-neon-purple group-hover:text-white transition-colors duration-300"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <ArrowRight size={16} />
                      </motion.div>
                    </div>
                  </div>
                </motion.article>
              </SectionTransition>
            ))}
          </motion.div>

          {filteredPosts.length === 0 && (
            <motion.div
              className="text-center py-8 sm:py-12 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-white/60 text-base sm:text-lg">No articles found matching your criteria.</p>
            </motion.div>
          )}
        </div>
      </section>
    </SectionTransition>
  );
};

export default Blog;