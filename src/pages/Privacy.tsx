import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, UserCheck, FileText } from 'lucide-react';
import PageBackground from '../components/PageBackground';
import { CONTACT_EMAIL } from '../config/constants';

const sections = [
  {
    icon: Database,
    title: 'Jakie dane zbieramy',
    content: [
      'Dane identyfikacyjne i kontaktowe (imię, nazwisko, adres e-mail, nazwa firmy)',
      'Dane techniczne niezbędne do świadczenia usług automatyzacji (logi systemowe, adresy IP)',
      'Informacje o sposobie korzystania z serwisu i naszych usług (analityka użytkowania)',
      'Dane komunikacyjne niezbędne do obsługi zapytań i wsparcia technicznego',
      'Dane dotyczące płatności — przetwarzane wyłącznie przez certyfikowanych dostawców płatności',
    ],
  },
  {
    icon: Eye,
    title: 'Cel i podstawa prawna przetwarzania',
    content: [
      'Świadczenie i utrzymanie usług automatyzacji — podstawa: wykonanie umowy (art. 6 ust. 1 lit. b RODO)',
      'Obsługa zapytań i wsparcie techniczne — podstawa: prawnie uzasadniony interes administratora (art. 6 ust. 1 lit. f RODO)',
      'Doskonalenie jakości usług na podstawie analizy sposobu korzystania — podstawa: prawnie uzasadniony interes',
      'Realizacja obowiązków podatkowych i rachunkowych — podstawa: obowiązek prawny (art. 6 ust. 1 lit. c RODO)',
      'Wysyłka informacji handlowych — wyłącznie po udzieleniu zgody (art. 6 ust. 1 lit. a RODO)',
    ],
  },
  {
    icon: Shield,
    title: 'Ochrona danych',
    content: [
      'Szyfrowanie danych w transmisji (TLS) i w spoczynku (AES-256)',
      'Regularne audyty bezpieczeństwa i testy podatności infrastruktury',
      'Ścisła kontrola dostępu do danych — zasada minimalnych uprawnień',
      'Procedury reagowania na incydenty bezpieczeństwa zgodne z wymogami RODO (72 godziny)',
      'Szkolenia pracowników z zakresu ochrony danych osobowych',
    ],
  },
  {
    icon: UserCheck,
    title: 'Twoje prawa',
    content: [
      'Prawo dostępu — możesz zażądać kopii swoich danych osobowych (art. 15 RODO)',
      'Prawo do sprostowania — możesz żądać poprawienia nieprawidłowych lub uzupełnienia niekompletnych danych (art. 16 RODO)',
      'Prawo do usunięcia — możesz żądać usunięcia danych w określonych przypadkach (art. 17 RODO)',
      'Prawo do ograniczenia przetwarzania i prawo sprzeciwu (art. 18 i 21 RODO)',
      'Prawo do przenoszenia danych oraz prawo skargi do UODO (uodo.gov.pl)',
    ],
  },
  {
    icon: Lock,
    title: 'Udostępnianie danych',
    content: [
      'Nie sprzedajemy Twoich danych osobowych podmiotom trzecim',
      'Ograniczone udostępnianie zaufanym podwykonawcom na podstawie umów powierzenia przetwarzania',
      'Ujawnienie danych organom publicznym wyłącznie na podstawie obowiązującego prawa',
      'W przypadku przekształceń organizacyjnych — z zachowaniem ciągłości ochrony Twoich danych',
      'Dane statystyczne (zanonimizowane) mogą być wykorzystywane do analizy rynku i rozwoju usług',
    ],
  },
  {
    icon: FileText,
    title: 'Okres przechowywania danych',
    content: [
      'Dane związane z umową — przez czas trwania umowy oraz 5 lat po jej zakończeniu (wymogi podatkowe)',
      'Dane analityczne — anonimizowane po 24 miesiącach',
      'Korespondencja i zgłoszenia — przez 3 lata od ostatniego kontaktu',
      'Dane przetwarzane na podstawie zgody — do momentu cofnięcia zgody',
      'Dane wymagane przepisami prawa — przez okresy określone w tych przepisach',
    ],
  },
];

const Privacy = () => {
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
              Polityka Prywatności
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
              <Shield size={28} className="text-purple-500 flex-shrink-0" />
              <h2 className="font-michroma text-xl md:text-2xl font-bold text-white">Nasze zobowiązanie do prywatności</h2>
            </div>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                WeFutura (dalej: „Administrator") przetwarza Twoje dane osobowe zgodnie z Rozporządzeniem Parlamentu
                Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. (RODO) oraz polską ustawą o ochronie
                danych osobowych z dnia 10 maja 2018 r.
              </p>
              <p>
                Niniejsza Polityka Prywatności wyjaśnia, jakie dane zbieramy, w jakim celu, na jakiej podstawie prawnej
                oraz jakie prawa przysługują Ci jako osobie, której dane dotyczą. Polityka dotyczy wszystkich usług
                świadczonych przez WeFutura, w tym serwisu internetowego wefutura.com.
              </p>
              <p className="text-white/50 text-sm">
                Administrator danych: WeFutura, Polska &nbsp;|&nbsp; Kontakt: {CONTACT_EMAIL}
              </p>
            </div>
          </motion.div>

          <div className="space-y-6">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                className="rounded-2xl bg-black/20 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-colors duration-300 p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
              >
                <div className="flex items-center gap-4 mb-5">
                  <section.icon size={24} className="text-purple-500 flex-shrink-0" />
                  <h3 className="font-michroma text-lg md:text-xl font-bold text-white">{section.title}</h3>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/70">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="rounded-2xl bg-black/20 backdrop-blur-sm border border-purple-500/20 p-8 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h3 className="font-michroma text-lg font-bold text-white mb-5">Kontakt w sprawach prywatności</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white/70">
              <div>
                <p className="font-semibold text-white mb-2">Administrator danych</p>
                <p>WeFutura</p>
                <p>Polska</p>
                <p className="mt-2">
                  E-mail:{' '}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-purple-400 hover:text-purple-300 transition-colors">
                    {CONTACT_EMAIL}
                  </a>
                </p>
                <p className="text-white/50 text-sm mt-1">Odpowiedź w ciągu 72 godzin</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-2">Organ nadzorczy</p>
                <p>Urząd Ochrony Danych Osobowych (UODO)</p>
                <p>ul. Stawki 2, 00-193 Warszawa</p>
                <a
                  href="https://uodo.gov.pl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition-colors text-sm mt-1 inline-block"
                >
                  uodo.gov.pl
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mt-8 rounded-2xl border border-purple-500/20 bg-purple-500/5 p-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="text-white/60 text-sm leading-relaxed">
              Zastrzegamy sobie prawo do aktualizacji niniejszej Polityki Prywatności. O istotnych zmianach
              poinformujemy drogą e-mailową lub poprzez komunikat na stronie. Dalsze korzystanie z usług po
              wprowadzeniu zmian oznacza ich akceptację.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
