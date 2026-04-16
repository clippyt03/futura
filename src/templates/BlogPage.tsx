import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import PageBackground from '../components/PageBackground';
import type { BreadcrumbItem } from '../components/Breadcrumbs';
import { buildArticleSchema, buildFAQSchema, buildBreadcrumbSchema } from '../utils/schema';
import type { RouteConfig } from '../config/routes';
import { getPageContent } from '../data/pageContent';
import { supportingRoutes, pillarRoutes, blogRoutes } from '../config/routes';

interface BlogPageProps {
  route: RouteConfig;
}

const BlogPage = ({ route }: BlogPageProps) => {
  const content = getPageContent(route.slug);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Blog', path: '/blog' },
    { label: route.h1, path: route.path },
  ];

  const relatedServices = content?.relatedServiceSlugs
    ? [...supportingRoutes, ...pillarRoutes].filter((r) =>
        content.relatedServiceSlugs!.includes(r.slug)
      )
    : [];

  const relatedBlogs = blogRoutes.filter(
    (r) => r.cluster === route.cluster && r.slug !== route.slug
  ).slice(0, 3);

  const schemas = [
    buildArticleSchema(route.h1, route.metaDescription, route.path, '2026-04-01'),
    buildBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Blog', url: '/blog' },
      { name: route.h1, url: route.path },
    ]),
    ...(content?.faq ? [buildFAQSchema(content.faq)] : []),
  ];

  return (
    <>
      <SEOHead
        title={route.metaTitle}
        description={route.metaDescription}
        canonical={route.path}
        schemas={schemas}
      />

      <PageBackground variant="subtle" />
      <div className="min-h-screen pt-24 pb-20 relative z-10">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8">
              <Breadcrumbs items={breadcrumbItems} />
            </div>

            <header className="mb-12">
              <motion.div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/3 mb-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <span className="text-white/40 text-xs font-michroma tracking-wider uppercase">Blog WeFutura</span>
              </motion.div>

              <h1 className="font-michroma text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                {route.h1}
              </h1>

              {content?.intro && (
                <p className="text-lg text-white/80 leading-relaxed border-l-2 border-purple-500/50 pl-5 py-1" style={{ lineHeight: 1.75 }}>
                  {content.intro}
                </p>
              )}
            </header>

            {content?.sections && content.sections.length > 0 && (
              <article className="prose-custom mb-16">
                {content.sections.map((section, i) => (
                  <motion.div
                    key={i}
                    className="mb-10"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  >
                    <h2 className="font-michroma text-lg md:text-xl text-white mb-4">
                      {section.heading}
                    </h2>
                    <p className="text-white/70 leading-relaxed" style={{ lineHeight: 1.8 }}>
                      {section.body}
                    </p>
                  </motion.div>
                ))}
              </article>
            )}

            {relatedServices.length > 0 && (
              <aside className="mb-12 p-6 rounded-xl border border-purple-500/20 bg-purple-500/5">
                <h2 className="font-michroma text-sm text-purple-400 uppercase tracking-wider mb-4">
                  Powiązane usługi WeFutura
                </h2>
                <div className="flex flex-col gap-2">
                  {relatedServices.slice(0, 3).map((r) => (
                    <Link
                      key={r.slug}
                      to={r.path}
                      className="group flex items-center gap-3 py-2 text-sm text-white/60 hover:text-white transition-colors duration-300"
                    >
                      <ArrowRight size={13} className="text-purple-500 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
                      <span>{r.h1}</span>
                    </Link>
                  ))}
                </div>
              </aside>
            )}

            {content?.faq && content.faq.length > 0 && (
              <section className="mb-12">
                <h2 className="font-michroma text-xl text-white mb-6">Najczęstsze pytania</h2>
                <div className="space-y-0 border border-white/10 rounded-xl overflow-hidden">
                  {content.faq.map((item, index) => (
                    <div key={index} className="border-b border-white/10 last:border-b-0">
                      <button
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        className="w-full px-6 py-5 flex items-start justify-between gap-4 text-left group"
                        aria-expanded={openFaq === index}
                      >
                        <h3 className="text-white/90 group-hover:text-white font-michroma text-sm leading-snug transition-colors duration-300">
                          {item.question}
                        </h3>
                        <motion.div
                          animate={{ rotate: openFaq === index ? 180 : 0 }}
                          transition={{ duration: 0.25 }}
                          className="flex-shrink-0"
                        >
                          <ChevronDown size={18} className="text-purple-500" />
                        </motion.div>
                      </button>
                      {openFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 pb-5 text-white/60 text-sm leading-relaxed">{item.answer}</p>
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {relatedBlogs.length > 0 && (
              <section className="mb-12">
                <h2 className="font-michroma text-base text-white/60 uppercase tracking-wider mb-4">
                  Czytaj dalej
                </h2>
                <div className="flex flex-col gap-2">
                  {relatedBlogs.map((r) => (
                    <Link
                      key={r.slug}
                      to={r.path}
                      className="group flex items-center gap-3 p-3 rounded-lg hover:bg-white/3 transition-colors duration-300"
                    >
                      <ArrowRight size={13} className="text-white/20 flex-shrink-0 group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-300" />
                      <span className="text-white/50 group-hover:text-white/80 text-sm transition-colors duration-300">{r.h1}</span>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            <motion.div
              className="p-6 md:p-8 rounded-xl border border-white/10 bg-gradient-to-br from-purple-900/15 to-transparent"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="font-michroma text-white/50 text-xs uppercase tracking-wider mb-2">WeFutura</p>
              <h2 className="font-michroma text-lg md:text-xl text-white mb-3">
                Chcesz wdrożyć to w swojej firmie?
              </h2>
              <p className="text-white/50 text-sm mb-5 leading-relaxed">
                Bezpłatny audyt pokazuje dokładnie co automatyzować pierwsze i jaki ROI możesz osiągnąć.
              </p>
              <motion.button
                onClick={() => window.open('https://tally.so/r/2EPBVM', '_blank')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-michroma text-xs tracking-wider text-purple-300 transition-all duration-300"
                style={{ border: '1px solid rgba(147,51,234,0.35)', background: 'rgba(147,51,234,0.12)' }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                ZRÓB DARMOWY AUDYT
                <ArrowRight size={13} />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
