import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { buildOrganizationSchema, buildBreadcrumbSchema } from '../utils/schema';
import { blogRoutes, categoryConfigs } from '../config/routes';
import Breadcrumbs from '../components/Breadcrumbs';

const clusterLabels: Record<string, string> = {
  k1: 'Automatyzacja Procesów',
  k2: 'No-Code i Narzędzia',
  k3: 'Sprzedaż i Marketing',
  k4: 'AI i Systemy AI',
  k5: 'Branże',
  k6: 'Porównania Narzędzi',
  k7: 'Koszty i ROI',
};

const schemas = [
  buildOrganizationSchema(),
  buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
  ]),
];

const BlogIndex = () => {
  const [search, setSearch] = useState('');
  const [activeCluster, setActiveCluster] = useState<string>('all');

  const clusters = Array.from(new Set(blogRoutes.map((r) => r.cluster)));

  const filtered = blogRoutes.filter((r) => {
    const matchesSearch =
      search === '' ||
      r.h1.toLowerCase().includes(search.toLowerCase()) ||
      r.metaDescription.toLowerCase().includes(search.toLowerCase());
    const matchesCluster = activeCluster === 'all' || r.cluster === activeCluster;
    return matchesSearch && matchesCluster;
  });

  return (
    <>
      <SEOHead
        title="Blog WeFutura — Automatyzacja i AI dla Firm"
        description="Blog WeFutura — przewodniki, porównania narzędzi i przykłady wdrożeń automatyzacji procesów biznesowych i systemów AI dla firm."
        canonical="/blog"
        schemas={schemas}
      />

      <div className="min-h-screen pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8">
              <Breadcrumbs items={[{ label: 'Blog', path: '/blog' }]} />
            </div>

            <div className="mb-12 max-w-2xl">
              <h1 className="font-michroma text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                Blog
              </h1>
              <p className="text-white/60 leading-relaxed">
                Przewodniki, porównania narzędzi i przykłady wdrożeń automatyzacji i AI dla firm.
              </p>
            </div>

            <div className="mb-8 flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1 max-w-md">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                <input
                  type="text"
                  placeholder="Szukaj artykułu..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 min-h-[44px] rounded-lg text-sm text-white/80 bg-white/5 border border-white/10 focus:border-purple-500/50 focus:outline-none transition-colors duration-300 placeholder-white/25"
                />
              </div>

              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => setActiveCluster('all')}
                  className={`px-3 min-h-[44px] rounded-lg text-xs font-michroma tracking-wider transition-all duration-200 ${
                    activeCluster === 'all'
                      ? 'bg-white/12 border border-white/30 text-white'
                      : 'border border-white/10 text-white/40 hover:border-white/25 hover:text-white/60'
                  }`}
                >
                  Wszystkie
                </button>
                {clusters.map((cluster) => (
                  <button
                    key={cluster}
                    onClick={() => setActiveCluster(cluster)}
                    className={`px-3 min-h-[44px] rounded-lg text-xs font-michroma tracking-wider transition-all duration-200 ${
                      activeCluster === cluster
                        ? 'bg-white/12 border border-white/30 text-white'
                        : 'border border-white/10 text-white/40 hover:border-white/25 hover:text-white/60'
                    }`}
                  >
                    {clusterLabels[cluster] ?? cluster}
                  </button>
                ))}
              </div>
            </div>

            {filtered.length === 0 && (
              <p className="text-white/40 text-center py-16">
                Brak artykułów pasujących do wyszukiwania.
              </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((r, i) => (
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
                    <div className="mb-3">
                      {(() => {
                        const catConfig = categoryConfigs.find((c) => c.cluster === r.cluster);
                        return catConfig ? (
                          <Link
                            to={catConfig.path}
                            onClick={(e) => e.stopPropagation()}
                            className="text-white/40 hover:text-white/70 text-xs font-michroma tracking-wider uppercase transition-colors duration-200"
                          >
                            {clusterLabels[r.cluster] ?? r.cluster}
                          </Link>
                        ) : (
                          <span className="text-white/40 text-xs font-michroma tracking-wider uppercase">
                            {clusterLabels[r.cluster] ?? r.cluster}
                          </span>
                        );
                      })()}
                    </div>
                    <h2 className="font-michroma text-sm text-white/90 group-hover:text-white leading-snug mb-3 flex-1 transition-colors duration-300">
                      {r.h1}
                    </h2>
                    <p className="text-white/40 text-xs leading-relaxed mb-4 line-clamp-3">
                      {r.metaDescription}
                    </p>
                    <div className="flex items-center gap-1.5 text-purple-400/60 group-hover:text-purple-400 text-xs transition-colors duration-300">
                      <span className="font-michroma tracking-wider">Czytaj</span>
                      <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default BlogIndex;
