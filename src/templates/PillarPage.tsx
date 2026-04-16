import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import PageBackground from '../components/PageBackground';
import type { BreadcrumbItem } from '../components/Breadcrumbs';
import { buildServiceSchema, buildFAQSchema, buildBreadcrumbSchema, buildOrganizationSchema } from '../utils/schema';
import type { RouteConfig } from '../config/routes';
import type { PageContent } from '../data/pageContent';
import { getPageContent } from '../data/pageContent';
import {
  supportingRoutes,
  blogRoutes,
} from '../config/routes';

interface PillarPageProps {
  route: RouteConfig;
}

function FAQAccordion({ items }: { items: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="space-y-0">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="border-b border-white/10 last:border-b-0"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full py-6 flex items-start justify-between gap-6 text-left group focus:outline-none"
            aria-expanded={openIndex === index}
          >
            <h3 className="text-base md:text-lg font-michroma text-white group-hover:text-purple-400 transition-colors duration-300 flex-1">
              {item.question}
            </h3>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0 mt-1"
            >
              <ChevronRight size={20} className="text-purple-500 rotate-90" />
            </motion.div>
          </button>
          {openIndex === index && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden pb-6"
            >
              <p className="text-white/70 leading-relaxed pr-10">{item.answer}</p>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

const PillarPage = ({ route }: PillarPageProps) => {
  const content: PageContent | undefined = getPageContent(route.slug);

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Usługi', path: '/uslugi' },
    { label: route.h1, path: route.path },
  ];

  const relatedSupporting = supportingRoutes.filter(
    (r) => r.cluster === route.cluster && r.parentPath === route.path
  );

  const relatedBlogs = content?.relatedBlogSlugs
    ? blogRoutes.filter((r) => content.relatedBlogSlugs!.includes(r.slug))
    : [];

  const schemas = [
    buildOrganizationSchema(),
    buildServiceSchema(route.h1, route.metaDescription, route.path),
    buildBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Usługi', url: '/uslugi' },
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

      <PageBackground />
      <div className="min-h-screen pt-24 pb-20 relative z-10">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8">
              <Breadcrumbs items={breadcrumbItems} />
            </div>

            <div className="mb-16">
              <motion.div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <span className="text-purple-400 text-xs font-michroma tracking-wider uppercase">Usługi WeFutura</span>
              </motion.div>

              <h1 className="font-michroma text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                {route.h1}
              </h1>

              {content?.intro && (
                <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl" style={{ lineHeight: 1.75 }}>
                  {content.intro}
                </p>
              )}

              <motion.div
                className="mt-8 flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <motion.button
                  onClick={() => window.open('https://tally.so/r/2EPBVM', '_blank')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-michroma text-sm tracking-wider transition-all duration-300"
                  style={{
                    background: 'rgba(147, 51, 234, 0.2)',
                    border: '1px solid rgba(147, 51, 234, 0.5)',
                  }}
                  whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(147, 51, 234, 0.3)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-purple-300">Bezpłatny Audyt</span>
                  <ArrowRight size={16} className="text-purple-400" />
                </motion.button>
              </motion.div>
            </div>

            {relatedSupporting.length > 0 && (
              <section className="mb-16" aria-label="Nasze usługi w tym obszarze">
                <h2 className="font-michroma text-xl md:text-2xl text-white mb-8 pb-4 border-b border-white/10">
                  Co wchodzi w skład
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {relatedSupporting.map((r, i) => (
                    <motion.div
                      key={r.slug}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.07 }}
                    >
                      <Link
                        to={r.path}
                        className="group block p-5 rounded-xl border border-white/10 hover:border-purple-500/40 bg-white/2 hover:bg-purple-500/5 transition-all duration-300"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="text-white/90 group-hover:text-white font-michroma text-sm leading-snug transition-colors duration-300">
                            {r.h1}
                          </h3>
                          <ArrowRight
                            size={16}
                            className="text-purple-500/50 group-hover:text-purple-400 flex-shrink-0 mt-0.5 transition-all duration-300 group-hover:translate-x-1"
                          />
                        </div>
                        <p className="text-white/40 text-xs mt-2 leading-relaxed line-clamp-2">
                          {r.metaDescription}
                        </p>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </section>
            )}

            {content?.sections && content.sections.length > 0 && (
              <section className="mb-16 space-y-12">
                {content.sections.map((section, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="font-michroma text-xl md:text-2xl text-white mb-4 pb-3 border-l-2 border-purple-500 pl-4">
                      {section.heading}
                    </h2>
                    <p className="text-white/70 leading-relaxed text-lg" style={{ lineHeight: 1.75 }}>
                      {section.body}
                    </p>
                  </motion.div>
                ))}
              </section>
            )}

            <section className="mb-16 p-8 md:p-10 rounded-2xl border border-white/10 bg-gradient-to-br from-purple-900/20 to-transparent">
              <h2 className="font-michroma text-xl md:text-2xl text-white mb-6">
                Jak pracujemy — 4 kroki
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { num: '01', title: 'Audyt procesów', desc: 'Identyfikujemy co kosztuje Twój zespół najwięcej czasu i gdzie jest największy potencjał zwrotu.' },
                  { num: '02', title: 'Plan wdrożenia', desc: 'Szczegółowy scenariusz: co, jak i w jakiej kolejności. Bez niespodzianek, z jasną wyceną.' },
                  { num: '03', title: 'Implementacja', desc: 'Wdrożenie etapami z testami w rzeczywistych warunkach. Działamy iteracyjnie.' },
                  { num: '04', title: 'Monitoring i kontrola', desc: 'System z dashboardem i alertami. Pełna dokumentacja. Zero uzależnienia od nas.' },
                ].map((step) => (
                  <motion.div
                    key={step.num}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <span className="font-michroma text-2xl text-purple-500/50 flex-shrink-0">{step.num}</span>
                    <div>
                      <h3 className="font-michroma text-white/90 text-sm mb-1">{step.title}</h3>
                      <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {content?.faq && content.faq.length > 0 && (
              <section className="mb-16">
                <h2 className="font-michroma text-xl md:text-2xl text-white mb-8">
                  Najczęstsze pytania
                </h2>
                <FAQAccordion items={content.faq} />
              </section>
            )}

            {relatedBlogs.length > 0 && (
              <section className="mb-16">
                <h2 className="font-michroma text-xl md:text-2xl text-white mb-6">
                  Poczytaj więcej
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relatedBlogs.slice(0, 4).map((r, i) => (
                    <motion.div
                      key={r.slug}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        to={r.path}
                        className="group flex items-start gap-3 p-4 rounded-lg border border-white/8 hover:border-white/20 transition-all duration-300"
                      >
                        <ArrowRight size={14} className="text-purple-500 flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform duration-300" />
                        <span className="text-white/60 group-hover:text-white/90 text-sm leading-snug transition-colors duration-300">
                          {r.h1}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </section>
            )}

            <motion.section
              className="p-8 md:p-12 rounded-2xl text-center"
              style={{
                background: 'linear-gradient(135deg, rgba(147,51,234,0.15) 0%, rgba(59,130,246,0.05) 100%)',
                border: '1px solid rgba(147,51,234,0.25)',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-michroma text-2xl md:text-3xl text-white mb-4">
                Gotowy na bezpłatny audyt?
              </h2>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                5 minut. Zero zobowiązań. Dowiedz się ile możesz zaoszczędzić.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                {[
                  'Plan dopasowany do Twojej firmy',
                  'Bez zobowiązań',
                  'ROI w 2–3 miesiące',
                ].map((item) => (
                  <span key={item} className="flex items-center gap-2 text-sm text-white/60">
                    <CheckCircle size={14} className="text-green-400" />
                    {item}
                  </span>
                ))}
              </div>
              <motion.button
                onClick={() => window.open('https://tally.so/r/2EPBVM', '_blank')}
                className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-lg font-michroma text-sm tracking-wider text-white transition-all duration-300"
                style={{
                  background: 'rgba(147, 51, 234, 0.3)',
                  border: '1px solid rgba(147, 51, 234, 0.6)',
                }}
                whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(147,51,234,0.4)' }}
                whileTap={{ scale: 0.98 }}
              >
                ODBIERAM BEZPŁATNY AUDYT
                <ArrowRight size={16} />
              </motion.button>
            </motion.section>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PillarPage;
