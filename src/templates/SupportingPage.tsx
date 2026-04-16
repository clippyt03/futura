import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import PageBackground from '../components/PageBackground';
import type { BreadcrumbItem } from '../components/Breadcrumbs';
import { buildServiceSchema, buildFAQSchema, buildBreadcrumbSchema } from '../utils/schema';
import type { RouteConfig } from '../config/routes';
import { getPageContent } from '../data/pageContent';
import { blogRoutes, pillarRoutes } from '../config/routes';

interface SupportingPageProps {
  route: RouteConfig;
}

const SupportingPage = ({ route }: SupportingPageProps) => {
  const content = getPageContent(route.slug);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const parentPillar = pillarRoutes.find((r) => r.path === route.parentPath);

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Usługi', path: '/uslugi' },
    ...(parentPillar
      ? [{ label: parentPillar.h1, path: parentPillar.path }]
      : []),
    { label: route.h1, path: route.path },
  ];

  const relatedBlogs = content?.relatedBlogSlugs
    ? blogRoutes.filter((r) => content.relatedBlogSlugs!.includes(r.slug))
    : [];

  const schemas = [
    buildServiceSchema(route.h1, route.metaDescription, route.path),
    buildBreadcrumbSchema(
      breadcrumbItems.map((b) => ({ name: b.label, url: b.path }))
        ? [{ name: 'Home', url: '/' }, ...breadcrumbItems.map((b) => ({ name: b.label, url: b.path }))]
        : [{ name: 'Home', url: '/' }]
    ),
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
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8">
              <Breadcrumbs items={breadcrumbItems} />
            </div>

            <div className="mb-12">
              <h1 className="font-michroma text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                {route.h1}
              </h1>

              {content?.intro && (
                <p className="text-lg text-white/80 leading-relaxed max-w-2xl" style={{ lineHeight: 1.75 }}>
                  {content.intro}
                </p>
              )}

              <motion.button
                onClick={() => window.open('https://tally.so/r/2EPBVM', '_blank')}
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-lg font-michroma text-sm tracking-wider transition-all duration-300"
                style={{
                  background: 'rgba(147, 51, 234, 0.2)',
                  border: '1px solid rgba(147, 51, 234, 0.4)',
                }}
                whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(147,51,234,0.25)' }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-purple-300">Bezpłatna Konsultacja</span>
                <ArrowRight size={14} className="text-purple-400" />
              </motion.button>
            </div>

            {content?.sections && content.sections.length > 0 && (
              <div className="mb-12 space-y-10">
                {content.sections.map((section, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  >
                    <h2 className="font-michroma text-lg md:text-xl text-white mb-3 pb-3 border-l-2 border-purple-500 pl-4">
                      {section.heading}
                    </h2>
                    <p className="text-white/70 leading-relaxed" style={{ lineHeight: 1.75 }}>
                      {section.body}
                    </p>
                  </motion.div>
                ))}
              </div>
            )}

            {content?.faq && content.faq.length > 0 && (
              <section className="mb-12">
                <h2 className="font-michroma text-xl text-white mb-6">Pytania i odpowiedzi</h2>
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
                <h2 className="font-michroma text-lg text-white mb-4">Dowiedz się więcej</h2>
                <div className="flex flex-col gap-2">
                  {relatedBlogs.slice(0, 3).map((r) => (
                    <Link
                      key={r.slug}
                      to={r.path}
                      className="group flex items-center gap-3 p-4 rounded-lg border border-white/8 hover:border-white/20 transition-all duration-300"
                    >
                      <ArrowRight size={14} className="text-purple-500 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
                      <span className="text-white/60 group-hover:text-white/90 text-sm transition-colors duration-300">{r.h1}</span>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            <motion.div
              className="p-8 rounded-xl text-center"
              style={{
                background: 'rgba(147,51,234,0.08)',
                border: '1px solid rgba(147,51,234,0.2)',
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="font-michroma text-xl text-white mb-3">
                Sprawdź jak to wygląda w Twojej firmie
              </h2>
              <p className="text-white/50 text-sm mb-6">
                Bezpłatny audyt · 5 minut · Zero zobowiązań
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                {['Darmowy audyt', 'Plan wdrożenia', 'Jasna wycena'].map((label) => (
                  <span key={label} className="flex items-center gap-1.5 text-xs text-white/50">
                    <CheckCircle size={12} className="text-green-400" />
                    {label}
                  </span>
                ))}
              </div>
              <motion.button
                onClick={() => window.open('https://tally.so/r/2EPBVM', '_blank')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-michroma text-xs tracking-wider text-purple-300 transition-all duration-300"
                style={{ border: '1px solid rgba(147,51,234,0.4)', background: 'rgba(147,51,234,0.15)' }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                ZRÓB DARMOWY AUDYT
                <ArrowRight size={14} />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SupportingPage;
