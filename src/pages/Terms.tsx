import { motion } from 'framer-motion';
import { FileText, Scale, AlertTriangle, CheckCircle, XCircle, Clock } from 'lucide-react';
import PageBackground from '../components/PageBackground';
import { CONTACT_EMAIL } from '../config/constants';

const sections = [
  {
    icon: CheckCircle,
    title: '§ 1. Akceptacja warunków',
    content: [
      'Korzystanie z serwisu wefutura.com oraz usług WeFutura jest równoznaczne z akceptacją niniejszego Regulaminu.',
      'Jeśli nie zgadzasz się z warunkami Regulaminu, prosimy o zaprzestanie korzystania z serwisu i usług.',
      'Regulamin dotyczy wszystkich użytkowników serwisu — odwiedzających, klientów oraz innych podmiotów korzystających z usług.',
      'WeFutura zastrzega sobie prawo do zmiany Regulaminu z co najmniej 14-dniowym wyprzedzeniem, informując użytkowników drogą e-mailową.',
    ],
  },
  {
    icon: FileText,
    title: '§ 2. Zakres usług',
    content: [
      'WeFutura świadczy usługi z zakresu automatyzacji procesów biznesowych, integracji systemów oraz wdrożeń sztucznej inteligencji.',
      'Usługi obejmują m.in.: automatyzację przepływów pracy, integracje no-code (Make, n8n, Zapier), wdrożenia chatbotów AI oraz systemów OCR.',
      'WeFutura zastrzega sobie prawo do modyfikacji, zawieszenia lub zakończenia świadczenia usług z zachowaniem rozsądnego terminu powiadomienia.',
      'Zakres i warunki konkretnych usług określają indywidualne umowy zawierane z Klientem.',
    ],
  },
  {
    icon: Scale,
    title: '§ 3. Obowiązki Klienta',
    content: [
      'Podawanie prawdziwych, kompletnych i aktualnych danych podczas nawiązywania współpracy.',
      'Zapewnienie bezpieczeństwa dostępu do konta i niezwłoczne powiadomienie WeFutura o każdym nieautoryzowanym dostępie.',
      'Korzystanie z usług wyłącznie w celach zgodnych z prawem, dobrymi obyczajami oraz postanowieniami niniejszego Regulaminu.',
      'Poszanowanie praw własności intelektualnej WeFutura — zakaz kopiowania, dekompilowania lub inżynierii wstecznej systemów.',
      'Przestrzeganie wszelkich obowiązujących przepisów prawa, w tym RODO i przepisów o zwalczaniu nieuczciwej konkurencji.',
    ],
  },
  {
    icon: AlertTriangle,
    title: '§ 4. Zakazy',
    content: [
      'Wykorzystywanie usług do działalności niezgodnej z prawem polskim lub przepisami Unii Europejskiej.',
      'Próby uzyskania nieautoryzowanego dostępu do systemów WeFutura lub danych innych użytkowników.',
      'Przesyłanie wirusów, złośliwego oprogramowania ani innych szkodliwych treści przez infrastrukturę WeFutura.',
      'Podejmowanie działań, które mogłyby zakłócić, uszkodzić lub przeciążyć infrastrukturę WeFutura.',
      'Używanie zautomatyzowanych narzędzi do pozyskiwania danych (scraping) bez pisemnej zgody WeFutura.',
    ],
  },
  {
    icon: XCircle,
    title: '§ 5. Ograniczenie odpowiedzialności',
    content: [
      'Usługi są świadczone w dobrej wierze i z należytą starannością, jednak WeFutura nie gwarantuje konkretnych wyników biznesowych.',
      'WeFutura nie ponosi odpowiedzialności za szkody pośrednie, utracone korzyści ani szkody wynikające z działania siły wyższej.',
      'Łączna odpowiedzialność WeFutura wobec Klienta jest ograniczona do wysokości wynagrodzenia zapłaconego za usługi w ciągu ostatnich 12 miesięcy.',
      'Klient jest zobowiązany do tworzenia własnych kopii zapasowych danych i utrzymania ciągłości działania swoich systemów.',
      'WeFutura dokłada starań, aby usługi były dostępne nieprzerwanie, jednak nie gwarantuje 100% dostępności infrastruktury zewnętrznych dostawców.',
    ],
  },
  {
    icon: Clock,
    title: '§ 6. Wypowiedzenie i rozwiązanie umowy',
    content: [
      'Każda ze stron może wypowiedzieć umowę o świadczenie usług z zachowaniem 30-dniowego okresu wypowiedzenia w formie pisemnej lub e-mailowej.',
      'WeFutura może zawiesić lub rozwiązać umowę ze skutkiem natychmiastowym w razie rażącego naruszenia Regulaminu przez Klienta.',
      'Po rozwiązaniu umowy Klient traci dostęp do usług; dane przechowywane są przez okres wynikający z przepisów prawa.',
      'Postanowienia dotyczące poufności, własności intelektualnej i ograniczenia odpowiedzialności pozostają w mocy po rozwiązaniu umowy.',
      'Klient ponosi wszelkie opłaty należne do dnia rozwiązania umowy.',
    ],
  },
];

const Terms = () => {
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
              Regulamin Usług
            </h1>
            <p className="text-white/60 text-sm">
              Ostatnia aktualizacja: 13 lipca 2026 &nbsp;|&nbsp; Obowiązuje od: 13 lipca 2026
            </p>
          </motion.div>

          <motion.div
            className="rounded-2xl bg-black/20 backdrop-blur-sm border border-purple-500/20 p-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-4 mb-5">
              <Scale size={28} className="text-purple-500 flex-shrink-0" />
              <h2 className="font-michroma text-xl md:text-2xl font-bold text-white">Informacje ogólne</h2>
            </div>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                Niniejszy Regulamin określa zasady korzystania z serwisu internetowego wefutura.com oraz usług
                świadczonych przez WeFutura z siedzibą w Polsce (dalej: „WeFutura" lub „Usługodawca").
              </p>
              <p>
                Korzystając z serwisu lub zamawiając usługi WeFutura, zawierasz z nami wiążącą prawnie umowę.
                Prosimy o uważne zapoznanie się z niniejszym Regulaminem. W przypadku pytań skontaktuj się z nami
                pod adresem{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-purple-400 hover:text-purple-300 transition-colors">
                  {CONTACT_EMAIL}
                </a>.
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <motion.div
              className="rounded-2xl bg-black/20 backdrop-blur-sm border border-purple-500/20 p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
            >
              <h3 className="font-michroma text-lg font-bold text-white mb-5">Prawo właściwe i jurysdykcja</h3>
              <div className="space-y-3 text-white/70 text-sm leading-relaxed">
                <p>
                  Niniejszy Regulamin podlega prawu polskiemu. W sprawach nieuregulowanych stosuje się przepisy
                  Kodeksu Cywilnego oraz innych właściwych aktów prawnych obowiązujących w Polsce.
                </p>
                <p>
                  Wszelkie spory wynikające z niniejszego Regulaminu będą rozstrzygane przez sąd właściwy dla
                  siedziby WeFutura, chyba że bezwzględnie obowiązujące przepisy prawa stanowią inaczej.
                </p>
                <p>
                  Jeśli którekolwiek postanowienie Regulaminu zostanie uznane za nieważne, pozostałe postanowienia
                  zachowują pełną moc obowiązującą.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="rounded-2xl bg-black/20 backdrop-blur-sm border border-purple-500/20 p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
            >
              <h3 className="font-michroma text-lg font-bold text-white mb-5">Dane kontaktowe</h3>
              <div className="space-y-3 text-white/70 text-sm">
                <div>
                  <p className="text-white font-semibold mb-1">Usługodawca</p>
                  <p>WeFutura</p>
                  <p>Polska</p>
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Kontakt</p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mt-8 rounded-2xl border border-purple-500/20 bg-purple-500/5 p-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
          >
            <h4 className="font-michroma text-sm font-bold text-purple-400 mb-3">Potwierdzenie akceptacji</h4>
            <p className="text-white/60 text-sm leading-relaxed">
              Korzystając z usług WeFutura, potwierdzasz, że zapoznałeś(-aś) się z niniejszym Regulaminem,
              rozumiesz jego treść i akceptujesz wszystkie jego postanowienia. Regulamin, łącznie z Polityką
              Prywatności, stanowi całość umowy pomiędzy Tobą a WeFutura w zakresie korzystania z usług.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Terms;
