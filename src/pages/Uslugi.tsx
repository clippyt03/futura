import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import PageBackground from '../components/PageBackground';
import { buildOrganizationSchema, buildBreadcrumbSchema } from '../utils/schema';
import { pillarRoutes, supportingRoutes, industryRoutes, costRoutes } from '../config/routes';
import Breadcrumbs from '../components/Breadcrumbs';
import { AUDIT_FORM_URL } from '../config/constants';

const clusterLabels: Record<string, string> = {
  k1: 'Automatyzacja Procesów',
  k2: 'No-Code i Narzędzia',
  k3: 'Sprzedaż i Marketing',
  k4: 'AI dla Firm',
  k8: 'Widoczność i Ofertowanie',
};

const clusterDescriptions: Record<string, string> = {
  k1: 'Wdrożenia RPA, BPA i BPMS — eliminujemy ręczne, powtarzalne zadania.',
  k2: 'Make, n8n, Zapier, Power Automate — integrujemy Twoje aplikacje bez kodu.',
  k3: 'Automatyzacja lejka sprzedaży, CRM, marketing automation.',
  k4: 'Chatboty AI, OCR, LLM, systemy AI projektowane na zamówienie.',
  k8: 'GEO, widoczność w LLM i automatyczne cenniki B2B — nowe obszary przewagi.',
};

const schemas = [
  buildOrganizationSchema(),
  buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Usługi', url: '/uslugi' },
  ]),
];

const Uslugi = () => {
  const clusters = ['k1', 'k2', 'k3', 'k4', 'k8'] as const;

  return (
    <>
      <SEOHead
        title="Usługi WeFutura — Automatyzacja i AI dla Firm"
        description="Wdrożenia automatyzacji procesów biznesowych i systemów AI dla firm w Polsce. RPA, Make, n8n, chatboty AI, OCR, CRM. Bezpłatny audyt."
        canonical="/uslugi"
        schemas={schemas}
      />

      <PageBackground />
      <div className="min-h-screen pt-24 pb-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8">
              <Breadcrumbs items={[{ label: 'Usługi', path: '/uslugi' }]} />
            </div>

            <div className="mb-16 max-w-3xl">
              <h1 className="font-michroma text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Nasze Usługi
              </h1>
              <p className="text-lg text-white/70 leading-relaxed" style={{ lineHeight: 1.75 }}>
                Projektujemy i wdrażamy systemy automatyzacji oraz AI dopasowane do Twoich procesów. Nie szablony — rozwiązania szyte na miarę, które działają 24/7 i generują mierzalny ROI.
              </p>
            </div>

            {clusters.map((cluster, clusterIndex) => {
              const pillars = pillarRoutes.filter((r) => r.cluster === cluster);
              const supporting = supportingRoutes.filter((r) => r.cluster === cluster);

              return (
                <motion.section
                  key={cluster}
                  className="mb-16"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: clusterIndex * 0.07 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span className="font-michroma text-xs text-purple-400 uppercase tracking-widest">{clusterLabels[cluster]}</span>
                    <div className="flex-1 h-px bg-white/8" />
                  </div>

                  {pillars.map((pillar) => (
                    <div key={pillar.slug} className="mb-6">
                      <Link
                        to={pillar.path}
                        className="group block p-6 md:p-8 rounded-xl border border-white/10 hover:border-purple-500/40 bg-white/2 hover:bg-purple-500/5 transition-all duration-300 mb-4"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <span className="font-michroma text-xs text-purple-400/70 uppercase tracking-wider mb-2 block">Główna usługa</span>
                            <h2 className="font-michroma text-lg md:text-xl text-white group-hover:text-purple-300 transition-colors duration-300 mb-2">
                              {pillar.h1}
                            </h2>
                            <p className="text-white/50 text-sm leading-relaxed">
                              {clusterDescriptions[cluster]}
                            </p>
                          </div>
                          <ArrowRight
                            size={20}
                            className="text-purple-500/40 group-hover:text-purple-400 flex-shrink-0 mt-1 transition-all duration-300 group-hover:translate-x-1"
                          />
                        </div>
                      </Link>

                      {supporting.filter((r) => r.parentPath === pillar.path).length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pl-4 border-l border-purple-500/15">
                          {supporting
                            .filter((r) => r.parentPath === pillar.path)
                            .map((r, i) => (
                              <motion.div
                                key={r.slug}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.04 }}
                              >
                                <Link
                                  to={r.path}
                                  className="group flex items-center gap-2 p-3 rounded-lg border border-white/6 hover:border-white/15 hover:bg-white/3 transition-all duration-300"
                                >
                                  <ArrowRight size={12} className="text-purple-500/40 flex-shrink-0 group-hover:text-purple-400 group-hover:translate-x-0.5 transition-all duration-300" />
                                  <span className="text-white/50 group-hover:text-white/80 text-sm transition-colors duration-300 leading-snug">
                                    {r.h1}
                                  </span>
                                </Link>
                              </motion.div>
                            ))}
                        </div>
                      )}
                    </div>
                  ))}
                </motion.section>
              );
            })}

            {/* Industries Section */}
            <motion.section
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="font-michroma text-xs text-white/40 uppercase tracking-widest">Rozwiązania branżowe</span>
                <div className="flex-1 h-px bg-white/8" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {industryRoutes.map((r, i) => (
                  <motion.div
                    key={r.slug}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={r.path}
                      className="group flex items-center gap-3 p-4 rounded-xl border border-white/8 hover:border-white/20 hover:bg-white/3 transition-all duration-300"
                    >
                      <ArrowRight size={14} className="text-white/25 flex-shrink-0 group-hover:text-white/60 group-hover:translate-x-0.5 transition-all duration-300" />
                      <span className="text-white/50 group-hover:text-white/80 text-sm transition-colors duration-300 leading-snug">
                        {r.h1}
                      </span>
                    </Link>
                  </motion.div>
                ))}
                {costRoutes.map((r, i) => (
                  <motion.div
                    key={r.slug}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (industryRoutes.length + i) * 0.05 }}
                  >
                    <Link
                      to={r.path}
                      className="group flex items-center gap-3 p-4 rounded-xl border border-white/8 hover:border-white/20 hover:bg-white/3 transition-all duration-300"
                    >
                      <ArrowRight size={14} className="text-white/25 flex-shrink-0 group-hover:text-white/60 group-hover:translate-x-0.5 transition-all duration-300" />
                      <span className="text-white/50 group-hover:text-white/80 text-sm transition-colors duration-300 leading-snug">
                        {r.h1}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <motion.div
              className="mt-8 p-8 md:p-12 rounded-2xl text-center"
              style={{
                background: 'rgba(147,51,234,0.07)',
                border: '1px solid rgba(147,51,234,0.2)',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-michroma text-2xl text-white mb-4">
                Nie wiesz od czego zacząć?
              </h2>
              <p className="text-white/50 mb-8 max-w-xl mx-auto text-sm leading-relaxed">
                Bezpłatny audyt procesów — 5 minut, zero zobowiązań. Dostaniesz konkretny plan co wdrożyć pierwsze i jaki ROI możesz osiągnąć.
              </p>
              <motion.button
                onClick={() => window.open(AUDIT_FORM_URL, '_blank')}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-michroma text-sm tracking-wider text-white transition-all duration-300"
                style={{
                  background: 'rgba(147, 51, 234, 0.25)',
                  border: '1px solid rgba(147, 51, 234, 0.5)',
                }}
                whileHover={{ scale: 1.03, boxShadow: '0 0 25px rgba(147,51,234,0.3)' }}
                whileTap={{ scale: 0.98 }}
              >
                ZRÓB DARMOWY AUDYT
                <ArrowRight size={16} />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Uslugi;
