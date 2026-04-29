import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Tag } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import PageBackground from '../components/PageBackground';
import { buildBreadcrumbSchema, buildCollectionPageSchema } from '../utils/schema';
import type { CategoryConfig } from '../config/routes';
import { blogRoutes } from '../config/routes';

interface CategoryPageProps {
  category: CategoryConfig;
}

const CategoryPage = ({ category }: CategoryPageProps) => {
  const articles = blogRoutes.filter((r) => r.cluster === category.cluster);

  const schemas = [
    buildBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Blog', url: '/blog' },
      { name: category.label, url: category.path },
    ]),
    buildCollectionPageSchema(
      category.label,
      category.metaDescription,
      category.path,
      articles.map((r) => ({ name: r.h1, url: r.path }))
    ),
  ];

  return (
    <>
      <SEOHead
        title={category.metaTitle}
        description={category.metaDescription}
        canonical={category.path}
        schemas={schemas}
      />

      <PageBackground variant="subtle" />
      <div className="min-h-screen pt-24 pb-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8">
              <Breadcrumbs
                items={[
                  { label: 'Blog', path: '/blog' },
                  { label: category.label, path: category.path },
                ]}
              />
            </div>

            <div className="mb-12 max-w-2xl">
              <motion.div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/3 mb-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <Tag size={12} className="text-white/40" />
                <span className="text-white/40 text-xs font-michroma tracking-wider uppercase">Kategoria</span>
              </motion.div>

              <h1 className="font-michroma text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                {category.label}
              </h1>
              <p className="text-white/60 leading-relaxed">
                {category.metaDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {articles.map((r, i) => (
                <motion.div
                  key={r.slug}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: Math.min(i * 0.04, 0.3) }}
                >
                  <Link
                    to={r.path}
                    className="group flex flex-col h-full p-5 rounded-xl border border-white/8 hover:border-white/20 bg-white/1.5 hover:bg-white/3 transition-all duration-300"
                  >
                    <h2 className="font-michroma text-sm text-white/90 group-hover:text-white leading-snug mb-3 flex-1 transition-colors duration-300">
                      {r.h1}
                    </h2>
                    <p className="text-white/40 text-xs leading-relaxed mb-4 line-clamp-3">
                      {r.metaDescription}
                    </p>
                    <div className="flex items-center gap-1.5 text-white/30 group-hover:text-white/60 text-xs transition-colors duration-300">
                      <span className="font-michroma tracking-wider">Czytaj</span>
                      <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-white/8">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors duration-300 font-michroma tracking-wider"
              >
                <ArrowRight size={13} className="rotate-180" />
                Wszystkie artykuły
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
