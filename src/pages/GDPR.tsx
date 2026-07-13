import { motion } from 'framer-motion';
import { Shield, Eye, FileText, Download, Trash2, Lock, CheckCircle } from 'lucide-react';
import PageBackground from '../components/PageBackground';
import { CONTACT_EMAIL } from '../config/constants';

const rights = [
  {
    icon: Eye,
    title: 'Prawo dostępu',
    description: 'Możesz zażądać informacji, czy przetwarzamy Twoje dane, i uzyskać ich kopię (art. 15 RODO).',
  },
  {
    icon: FileText,
    title: 'Prawo do sprostowania',
    description: 'Możesz żądać poprawienia nieprawidłowych lub uzupełnienia niekompletnych danych (art. 16 RODO).',
  },
  {
    icon: Trash2,
    title: 'Prawo do usunięcia',
    description: 'Możesz żądać usunięcia swoich danych w określonych przypadkach — „prawo do bycia zapomnianym" (art. 17 RODO).',
  },
  {
    icon: Lock,
    title: 'Prawo do ograniczenia',
    description: 'Możesz żądać ograniczenia przetwarzania Twoich danych w określonych sytuacjach (art. 18 RODO).',
  },
  {
    icon: Download,
    title: 'Prawo do przenoszalności',
    description: 'Możesz otrzymać swoje dane w ustrukturyzowanym formacie nadającym się do odczytu maszynowego (art. 20 RODO).',
  },
  {
    icon: Shield,
    title: 'Prawo sprzeciwu',
    description: 'Możesz wnieść sprzeciw wobec przetwarzania opartego na prawnie uzasadnionym interesie lub marketingu bezpośredniego (art. 21 RODO).',
  },
];

const legalBases = [
  {
    title: 'Wykonanie umowy',
    description: 'Przetwarzanie niezbędne do świadczenia zamówionych usług (art. 6 ust. 1 lit. b RODO)',
    examples: ['Realizacja wdrożeń automatyzacji', 'Zarządzanie kontem klienta', 'Obsługa zgłoszeń serwisowych'],
  },
  {
    title: 'Prawnie uzasadniony interes',
    description: 'Przetwarzanie w celach wynikających z naszych uzasadnionych interesów biznesowych (art. 6 ust. 1 lit. f RODO)',
    examples: ['Doskonalenie jakości usług', 'Zapewnienie bezpieczeństwa systemów', 'Analiza biznesowa i statystyczna'],
  },
  {
    title: 'Obowiązek prawny',
    description: 'Przetwarzanie wymagane przez obowiązujące przepisy prawa (art. 6 ust. 1 lit. c RODO)',
    examples: ['Rozliczenia podatkowe i rachunkowość', 'Wymogi regulacyjne', 'Postępowania prawne'],
  },
  {
    title: 'Zgoda',
    description: 'Przetwarzanie oparte na Twojej dobrowolnej i świadomej zgodzie (art. 6 ust. 1 lit. a RODO)',
    examples: ['Wysyłka newslettera i informacji handlowych', 'Opcjonalne funkcje serwisu', 'Integracje zewnętrzne'],
  },
];

const GDPR = () => {
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
              Ochrona Danych Osobowych
            </h1>
            <p className="text-white/60 text-sm">
              Zgodność z RODO &nbsp;|&nbsp; Ostatnia aktualizacja: 13 lipca 2026
            </p>
          </motion.div>

          <motion.div
            className="rounded-2xl bg-black/20 backdrop-blur-sm border border-purple-500/20 p-8 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-4 mb-5">
              <Shield size={28} className="text-purple-500 flex-shrink-0" />
              <h2 className="font-michroma text-xl md:text-2xl font-bold text-white">Nasze zobowiązanie wobec RODO</h2>
            </div>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                WeFutura jako administrator danych osobowych jest zobowiązana do przetwarzania Twoich danych
                zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 (RODO) oraz polską
                ustawą z dnia 10 maja 2018 r. o ochronie danych osobowych.
              </p>
              <p>
                Przetwarzamy dane osobowe wyłącznie na podstawie jednej ze wskazanych podstaw prawnych, w sposób
                przejrzysty i ograniczony do niezbędnego minimum (zasada minimalizacji danych). Prawa opisane
                poniżej przysługują Ci niezależnie od miejsca korzystania z naszych usług.
              </p>
            </div>
          </motion.div>

          <motion.section
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-michroma text-xl font-bold text-white mb-6 text-center">Twoje prawa na mocy RODO</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {rights.map((right, index) => (
                <motion.div
                  key={index}
                  className="rounded-2xl bg-black/20 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 p-6 flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 + index * 0.07 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <right.icon size={36} className="text-purple-500 mb-4" />
                  <h3 className="font-michroma text-sm font-bold text-white mb-3">{right.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{right.description}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-5 text-center">
              <p className="text-white/50 text-sm mb-3">
                Aby skorzystać z przysługujących Ci praw, wyślij wniosek na adres:
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Wniosek RODO`}
                className="inline-block px-8 py-3 rounded-xl font-michroma text-sm text-white border border-purple-500/40 bg-purple-500/15 hover:bg-purple-500/25 hover:border-purple-500/70 transition-all duration-300"
              >
                Złóż wniosek RODO
              </a>
            </div>
          </motion.section>

          <motion.section
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="font-michroma text-xl font-bold text-white mb-6">Podstawy prawne przetwarzania</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {legalBases.map((basis, index) => (
                <motion.div
                  key={index}
                  className="rounded-2xl bg-black/20 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-colors duration-300 p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.55 + index * 0.07 }}
                >
                  <h3 className="font-michroma text-sm font-bold text-purple-400 mb-2">{basis.title}</h3>
                  <p className="text-white/70 text-sm mb-4 leading-relaxed">{basis.description}</p>
                  <ul className="space-y-1.5">
                    {basis.examples.map((example, i) => (
                      <li key={i} className="text-white/55 text-sm flex items-center gap-2">
                        <CheckCircle size={11} className="text-purple-500 flex-shrink-0" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.div
            className="rounded-2xl bg-black/20 backdrop-blur-sm border border-purple-500/20 p-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
          >
            <h2 className="font-michroma text-lg font-bold text-white mb-6">Jak przetwarzamy Twoje dane</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-white font-semibold text-sm mb-3">Zbieranie danych</h3>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li>Dane podane przy rejestracji</li>
                  <li>Dane dotyczące użytkowania usług</li>
                  <li>Korespondencja i zgłoszenia</li>
                  <li>Dane techniczne i logi systemowe</li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm mb-3">Przechowywanie</h3>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li>Infrastruktura w UE</li>
                  <li>Szyfrowanie danych w spoczynku</li>
                  <li>Regularne audyty bezpieczeństwa</li>
                  <li>Kontrola dostępu i monitoring</li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm mb-3">Udostępnianie</h3>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li>Tylko zaufani podwykonawcy</li>
                  <li>Umowy powierzenia przetwarzania</li>
                  <li>Brak sprzedaży danych osobom trzecim</li>
                  <li>Ujawnienie wyłącznie na mocy prawa</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              className="rounded-2xl bg-black/20 backdrop-blur-sm border border-purple-500/20 p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
            >
              <h3 className="font-michroma text-lg font-bold text-white mb-5">Kontakt w sprawie danych</h3>
              <div className="space-y-3 text-white/70 text-sm">
                <div>
                  <p className="text-white font-semibold mb-1">Administrator danych</p>
                  <p>WeFutura, Polska</p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
                <div className="pt-2">
                  <p className="text-white font-semibold mb-1">Czas odpowiedzi</p>
                  <p>Do 72 godzin od otrzymania wniosku</p>
                  <p className="text-white/50 text-xs mt-1">
                    Wniosek rozpatrzymy w ciągu miesiąca od otrzymania (art. 12 RODO),
                    z możliwością przedłużenia o kolejne 2 miesiące w skomplikowanych przypadkach.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="rounded-2xl bg-black/20 backdrop-blur-sm border border-purple-500/20 p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.95 }}
            >
              <h3 className="font-michroma text-lg font-bold text-white mb-5">Organ nadzorczy</h3>
              <div className="space-y-3 text-white/70 text-sm">
                <p>
                  Jeśli uważasz, że przetwarzamy Twoje dane niezgodnie z prawem, masz prawo wnieść skargę do
                  organu nadzorczego właściwego dla ochrony danych osobowych.
                </p>
                <div className="pt-2">
                  <p className="text-white font-semibold mb-1">Urząd Ochrony Danych Osobowych (UODO)</p>
                  <p>ul. Stawki 2, 00-193 Warszawa</p>
                  <a
                    href="https://uodo.gov.pl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    uodo.gov.pl
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GDPR;
