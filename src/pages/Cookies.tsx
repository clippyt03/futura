import { useState } from 'react';
import { motion } from 'framer-motion';
import { Cookie, Settings, Eye, BarChart, Shield, ToggleLeft, ToggleRight } from 'lucide-react';
import PageBackground from '../components/PageBackground';
import { CONTACT_EMAIL } from '../config/constants';

interface CookieType {
  icon: React.ElementType;
  title: string;
  key: 'essential' | 'analytics' | 'marketing' | 'preferences';
  description: string;
  required: boolean;
  examples: string[];
  retention: string;
}

const cookieTypes: CookieType[] = [
  {
    icon: Shield,
    title: 'Niezbędne',
    key: 'essential',
    description: 'Wymagane do podstawowego działania serwisu i zapewnienia bezpieczeństwa',
    required: true,
    examples: ['Tokeny sesji i uwierzytelnienia', 'Ustawienia bezpieczeństwa', 'Zarządzanie sesją'],
    retention: 'Sesja lub do 1 roku',
  },
  {
    icon: BarChart,
    title: 'Analityczne',
    key: 'analytics',
    description: 'Pomagają nam zrozumieć, jak użytkownicy korzystają z serwisu, w celu jego ulepszania',
    required: false,
    examples: ['Wyświetlenia stron', 'Zachowanie użytkownika', 'Metryki wydajności'],
    retention: 'Do 2 lat',
  },
  {
    icon: Eye,
    title: 'Marketingowe',
    key: 'marketing',
    description: 'Służą do wyświetlania dopasowanych reklam i mierzenia skuteczności kampanii',
    required: false,
    examples: ['Targetowanie reklam', 'Śledzenie kampanii', 'Integracje z mediami społecznościowymi'],
    retention: 'Do 1 roku',
  },
  {
    icon: Settings,
    title: 'Preferencje',
    key: 'preferences',
    description: 'Zapamiętują Twoje wybory i umożliwiają korzystanie z rozszerzonych funkcji serwisu',
    required: false,
    examples: ['Ustawienia języka', 'Preferencje widoku', 'Dane formularzy'],
    retention: 'Do 6 miesięcy',
  },
];

const Cookies = () => {
  const [cookieSettings, setCookieSettings] = useState({
    essential: true,
    analytics: true,
    marketing: false,
    preferences: true,
  });
  const [saved, setSaved] = useState(false);

  const toggleCookie = (key: keyof typeof cookieSettings) => {
    if (key === 'essential') return;
    setCookieSettings((prev) => ({ ...prev, [key]: !prev[key] }));
    setSaved(false);
  };

  const saveSettings = () => {
    setSaved(true);
  };

  const rejectAll = () => {
    setCookieSettings({ essential: true, analytics: false, marketing: false, preferences: false });
    setSaved(true);
  };

  return (
    <>
      <PageBackground />
      <div className="min-h-screen pt-24 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-michroma text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Polityka Cookies
            </h1>
            <p className="text-white/60 text-sm">
              Ostatnia aktualizacja: 13 lipca 2026
            </p>
          </motion.div>

          <motion.div
            className="rounded-2xl bg-black/20 backdrop-blur-sm border border-purple-500/20 p-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-4 mb-5">
              <Cookie size={28} className="text-purple-500 flex-shrink-0" />
              <h2 className="font-michroma text-xl md:text-2xl font-bold text-white">Czym są pliki cookie?</h2>
            </div>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                Pliki cookie to małe pliki tekstowe zapisywane na Twoim urządzeniu podczas odwiedzania serwisu
                wefutura.com. Pomagają nam zapewnić Ci lepsze doświadczenie — zapamiętują Twoje preferencje
                i pozwalają nam zrozumieć, jak korzystasz z naszych usług.
              </p>
              <p>
                Stosowanie plików cookie na stronach internetowych reguluje w Polsce ustawa Prawo telekomunikacyjne
                oraz przepisy RODO. Masz prawo zarządzać swoimi preferencjami dotyczącymi plików cookie,
                z wyjątkiem tych, które są niezbędne do działania serwisu.
              </p>
            </div>
          </motion.div>

          <motion.section
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-michroma text-xl font-bold text-white mb-6">Rodzaje plików cookie, których używamy</h2>
            <div className="space-y-5">
              {cookieTypes.map((type, index) => (
                <motion.div
                  key={type.key}
                  className="rounded-2xl bg-black/20 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-colors duration-300 p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 + index * 0.07 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <type.icon size={22} className="text-purple-500 flex-shrink-0" />
                      <div>
                        <h3 className="font-michroma text-base font-bold text-white">{type.title}</h3>
                        <p className="text-white/60 text-sm mt-0.5">{type.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ml-4 flex-shrink-0">
                      {type.required ? (
                        <span className="text-xs text-orange-400 font-semibold whitespace-nowrap">Wymagane</span>
                      ) : (
                        <button
                          onClick={() => toggleCookie(type.key)}
                          className="text-purple-500 hover:text-white transition-colors duration-300"
                          aria-label={`Przełącz ${type.title}`}
                        >
                          {cookieSettings[type.key] ? <ToggleRight size={28} /> : <ToggleLeft size={28} />}
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-8">
                    <div>
                      <p className="text-purple-400 text-xs font-semibold uppercase tracking-wide mb-2">Przykłady:</p>
                      <ul className="space-y-1">
                        {type.examples.map((example, i) => (
                          <li key={i} className="text-white/60 text-sm flex items-center gap-2">
                            <div className="w-1 h-1 bg-purple-500 rounded-full flex-shrink-0" />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-purple-400 text-xs font-semibold uppercase tracking-wide mb-2">Okres przechowywania:</p>
                      <p className="text-white/60 text-sm">{type.retention}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.div
            className="rounded-2xl bg-black/20 backdrop-blur-sm border border-purple-500/20 p-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            <h2 className="font-michroma text-xl font-bold text-white mb-6">Twoje preferencje dotyczące cookies</h2>
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between p-4 bg-black/30 rounded-xl border border-white/5">
                <div>
                  <p className="text-white font-semibold text-sm">Niezbędne pliki cookie</p>
                  <p className="text-white/50 text-xs mt-0.5">Zawsze aktywne — wymagane do działania serwisu</p>
                </div>
                <ToggleRight size={22} className="text-orange-400 flex-shrink-0" />
              </div>
              {(Object.keys(cookieSettings) as Array<keyof typeof cookieSettings>)
                .filter((key) => key !== 'essential')
                .map((key) => {
                  const type = cookieTypes.find((t) => t.key === key)!;
                  return (
                    <div key={key} className="flex items-center justify-between p-4 bg-black/30 rounded-xl border border-white/5">
                      <div>
                        <p className="text-white font-semibold text-sm">{type.title} pliki cookie</p>
                        <p className="text-white/50 text-xs mt-0.5">{type.description}</p>
                      </div>
                      <button
                        onClick={() => toggleCookie(key)}
                        className="text-purple-500 hover:text-white transition-colors duration-300 flex-shrink-0 ml-4"
                        aria-label={`Przełącz ${type.title}`}
                      >
                        {cookieSettings[key] ? <ToggleRight size={22} /> : <ToggleLeft size={22} />}
                      </button>
                    </div>
                  );
                })}
            </div>
            <div className="flex flex-wrap gap-3 items-center">
              <motion.button
                onClick={saveSettings}
                className="px-8 py-3 rounded-xl font-michroma text-sm text-white border border-purple-500/40 bg-purple-500/20 hover:bg-purple-500/30 hover:border-purple-500/70 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Zapisz preferencje
              </motion.button>
              <motion.button
                onClick={rejectAll}
                className="px-8 py-3 rounded-xl font-michroma text-sm text-white/70 border border-white/10 bg-black/20 hover:border-white/20 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Odrzuć opcjonalne
              </motion.button>
              {saved && (
                <motion.span
                  className="text-sm text-purple-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  Preferencje zapisane.
                </motion.span>
              )}
            </div>
          </motion.div>

          <motion.div
            className="rounded-2xl bg-black/20 backdrop-blur-sm border border-purple-500/20 p-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            <h2 className="font-michroma text-xl font-bold text-white mb-6">Zarządzanie cookies w przeglądarce</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-white font-semibold mb-3 text-sm">Ustawienia przeglądarki</h3>
                <div className="space-y-2 text-white/60 text-sm">
                  <p>Pliki cookie możesz zarządzać bezpośrednio w ustawieniach przeglądarki:</p>
                  <ul className="space-y-1.5 mt-2">
                    <li>Chrome: Ustawienia → Prywatność i bezpieczeństwo → Pliki cookie</li>
                    <li>Firefox: Opcje → Prywatność i bezpieczeństwo</li>
                    <li>Safari: Preferencje → Prywatność</li>
                    <li>Edge: Ustawienia → Pliki cookie i uprawnienia witryn</li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-3 text-sm">Narzędzia zewnętrzne</h3>
                <div className="space-y-2 text-white/60 text-sm">
                  <p>Możesz również skorzystać z zewnętrznych narzędzi do zarządzania plikami cookie:</p>
                  <ul className="space-y-1.5 mt-2">
                    <li>Rozszerzenia przeglądarek do zarządzania cookies</li>
                    <li>Przeglądarki zorientowane na prywatność</li>
                    <li>Blokery reklam z kontrolą cookies</li>
                    <li>Ustawienia prywatności na urządzeniach mobilnych</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mt-2 rounded-2xl border border-purple-500/20 bg-purple-500/5 p-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
          >
            <p className="text-white/60 text-sm mb-2">Pytania dotyczące plików cookie?</p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-purple-400 hover:text-purple-300 transition-colors text-sm"
            >
              {CONTACT_EMAIL}
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Cookies;
