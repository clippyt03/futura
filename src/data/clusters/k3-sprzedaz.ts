import type { PageContent } from './k1-automatyzacja-procesow';

export const k3PillarContent: PageContent = {
  slug: 'automatyzacja-sprzedazy-i-marketingu',
  intro:
    'Automatyzacja sprzedaży i marketingu pozwala firmom obsługiwać więcej leadów bez zwiększania zespołu. Lejek sprzedażowy działa 24/7, follow-upy wysyłają się automatycznie, a handlowcy skupiają się tylko na gotowych do zakupu klientach. Wdrożenia CRM, marketing automation i automatyzacji sprzedaży.',
  sections: [
    {
      heading: 'Czym jest automatyzacja sprzedaży?',
      body: 'Automatyzacja sprzedaży to zastosowanie technologii do wykonywania rutynowych zadań w procesie sprzedaży bez udziału handlowca. Follow-up e-mail po 24 godzinach od pobrania materiału? System wysyła go automatycznie. Lead nie odpowiedział przez 7 dni? Automatyczny SMS z nowym pytaniem. Klient otworzył ofertę 3 razy? Handlowiec dostaje powiadomienie w Slack. Automatyzacja nie zastępuje handlowca — daje mu supermoce.',
    },
    {
      heading: 'Czym jest marketing automation?',
      body: 'Marketing automation to automatyzowanie powtarzalnych zadań marketingowych — kampanie e-mail, segmentacja bazy, lead nurturing, scoring leadów, raportowanie. Zamiast ręcznie wysyłać każdą kampanię i śledzić wyniki, system robi to automatycznie. Klient, który pobrał ebook o automatyzacji, dostaje serię 5 e-maili edukacyjnych w ciągu 2 tygodni, potem ofertę konsultacji. Handlowiec kontaktuje się tylko gdy klient kliknie CTA w ostatnim e-mailu.',
    },
    {
      heading: 'Narzędzia automatyzacji sprzedaży i marketingu',
      body: 'CRM dla sprzedaży: Pipedrive (najlepszy UI dla małych teams), HubSpot (wszystko w jednym), Salesforce (enterprise). Marketing automation: HubSpot Marketing, SALESmanago (polskie), Mailchimp, ActiveCampaign. Automatyzacja workflow: Make.com, n8n, Zapier — łączenie CRM z innymi narzędziami. AI w sprzedaży: scoring leadów, generowanie emaili, analiza rozmów. Dobór zależy od rozmiaru firmy, budżetu i integracji z istniejącymi systemami.',
    },
    {
      heading: 'Jak wdrażamy automatyzację sprzedaży',
      body: 'Krok 1: Mapowanie procesu sprzedaży — dokumentujemy lejek, etapy, działania na każdym etapie. Krok 2: Identyfikacja bottlenecków — gdzie leady "giną", gdzie handlowcy tracą czas. Krok 3: Wybór i konfiguracja CRM — dopasowany do Twojego procesu, nie odwrotnie. Krok 4: Automatyzacje — follow-upy, powiadomienia, lead scoring, raportowanie. Krok 5: Szkolenie zespołu — handlowcy muszą używać systemu, żeby działał.',
    },
    {
      heading: 'Case Study: SaaS — 3x więcej kwalifikowanych rozmów',
      body: 'Klient z branży SaaS B2B otrzymywał 80 leadów miesięcznie, ale handlowcy kwalifikowali tylko 20 z nich — brak czasu na pierwsze kontakty. Wdrożyliśmy automatyczną kwalifikację leadów: formularz próbny → AI ocenia fit → wysyła spersonalizowany email → jeśli otworzył, powiadomienie w Slack → handlowiec dzwoni. Efekt: handlowcy rozmawiają z 45 kwalifikowanymi leadami miesięcznie (wzrost 3x), konwersja demo→oferta wzrosła o 40%.',
    },
  ],
  faq: [
    {
      question: 'Ile czasu zajmuje wdrożenie CRM z automatyzacjami?',
      answer:
        'Konfiguracja CRM i podstawowe automatyzacje (follow-upy, powiadomienia): 3–5 tygodni. Zaawansowane wdrożenie (scoring, marketing automation, integracje): 8–12 tygodni.',
    },
    {
      question: 'Czy automatyzacja sprzedaży sprawdza się w B2B?',
      answer:
        'Tak — i to szczególnie dobrze. B2B ma długi cykl sprzedaży (tygodnie lub miesiące), dlatego automatyczne follow-upy i lead nurturing są kluczowe. Handlowiec nie może ręcznie śledzić 100 otwartych szans sprzedaży.',
    },
    {
      question: 'Czy mogę zintegrować CRM z moją stroną www?',
      answer:
        'Tak — integracja formularza strony z CRM to jeden z pierwszych kroków. Każde wypełnienie formularza automatycznie tworzy lead w CRM, przypisuje do handlowca i uruchamia sekwencję follow-up.',
    },
  ],
  relatedServiceSlugs: ['wdrozenia-crm', 'automatyzacja-marketingu', 'wdrozenia-pipedrive', 'wdrozenia-hubspot'],
  relatedBlogSlugs: ['lejek-sprzedazowy-jak-zautomatyzowac', 'jak-wybrac-crm-dla-firmy', 'salesmanago-co-to-jest'],
};

export const k3SupportingContent: Record<string, PageContent> = {
  'wdrozenia-crm': {
    slug: 'wdrozenia-crm',
    intro:
      'Wdrożenie CRM to jedna z najważniejszych inwestycji w rozwój sprzedaży. Ale 50% wdrożeń CRM kończy się niepowodzeniem — bo firmy kupują "za duże" narzędzie lub nie konfigurują go pod swój proces. Wdrażamy CRM dopasowany do Twojej sprzedaży.',
    sections: [
      {
        heading: 'Czym jest system CRM?',
        body: 'CRM (Customer Relationship Management) to system do zarządzania relacjami z klientami i procesem sprzedaży. Centralny rejestr wszystkich leadów, szans sprzedaży i klientów z historią każdej interakcji. Handlowiec widzi: skąd przyszedł lead, co już mu wysłano, kiedy ostatnio rozmawiał, jakie ma otwarte szanse. Zamiast "pamiętam, że rozmawiałem z Kowalskim ale co ustaliliśmy?" — pełna historia w 3 kliknięciach.',
      },
      {
        heading: 'Jak wygląda proces wdrożenia CRM?',
        body: 'Faza 1: Audyt procesu sprzedaży (1 tydzień) — mapujemy lejek, etapy, działania i metryki. Faza 2: Wybór i konfiguracja CRM (1–2 tygodnie) — konfigurujemy pola, etapy, raporty pod Twój proces. Faza 3: Migracja danych (1 tydzień) — przenosimy leady z Excela/poprzedniego CRM. Faza 4: Automatyzacje (1–2 tygodnie) — follow-upy, powiadomienia, integracje. Faza 5: Szkolenie (1–2 dni) — onboarding całego zespołu sprzedaży.',
      },
    ],
    faq: [
      {
        question: 'Który CRM polecacie dla małej firmy?',
        answer:
          'Dla firmy 2–15 handlowców: Pipedrive (najlepszy UX, skupiony na sprzedaży, 15–50 EUR/user/mc). Dla firm chcących marketing automation w jednym miejscu: HubSpot CRM (bezpłatna wersja podstawowa, płatna marketing hub). Dla firm z większymi wymaganiami: Salesforce (najdroższy, najbardziej elastyczny).',
      },
    ],
    relatedBlogSlugs: ['jak-wybrac-crm-dla-firmy', 'lejek-sprzedazowy-jak-zautomatyzowac'],
  },

  'automatyzacja-marketingu': {
    slug: 'automatyzacja-marketingu',
    intro:
      'Automatyzacja marketingu to system, który prowadzi potencjalnych klientów przez lejek zakupowy bez udziału człowieka — do momentu gdy są gotowi do rozmowy z handlowcem. Nurturing e-mailowy, segmentacja bazy, scoring leadów, automatyczne kampanie.',
    sections: [
      {
        heading: 'Czym jest marketing automation?',
        body: 'Marketing automation to platformy i narzędzia do automatyzowania powtarzalnych zadań marketingowych. E-maile z serii onboardingowej wysyłają się według harmonogramu. Klient, który odwiedził stronę cennikową 3 razy, dostaje spersonalizowany e-mail. Lead, który nie otworzył oferty przez 14 dni, jest automatycznie "reaktywowany" nową kampanią. System działa 24/7, obsługując wszystkich leadów jednocześnie.',
      },
      {
        heading: 'Lead nurturing — jak to działa?',
        body: 'Lead nurturing to sekwencja komunikatów prowadząca lead od fazy "zainteresowany" do "gotowy do zakupu". Przykładowa sekwencja B2B: Lead pobiera ebook (dzień 0) → E-mail "co dalej" (dzień 1) → Artykuł case study (dzień 4) → Zaproszenie na webinar (dzień 7) → Oferta darmowej konsultacji (dzień 14). Każdy e-mail jest personalizowany na podstawie tego co lead zrobił wcześniej (otworzył, kliknął, pobrał).',
      },
    ],
    faq: [
      {
        question: 'Czy marketing automation to to samo co spam?',
        answer:
          'Nie — marketing automation bazuje na zgodzie i zachowaniu użytkownika. Wysyłasz komunikaty do osób, które wyraziły zgodę i reagują na Twoje treści. Dobrze skonfigurowany nurturing ma open rate 40–60% (vs. 15–20% dla typowych newsletterów).',
      },
    ],
    relatedBlogSlugs: ['lejek-sprzedazowy-jak-zautomatyzowac', 'salesmanago-co-to-jest'],
  },

  'wdrozenia-pipedrive': {
    slug: 'wdrozenia-pipedrive',
    intro:
      'Pipedrive to CRM zaprojektowany specjalnie dla handlowców — prosty, wizualny, skupiony na zamykaniu transakcji. Najlepszy UX spośród popularnych CRM-ów dla MŚP. Wdrożenia Pipedrive z konfiguracją pod Twój lejek sprzedaży.',
    sections: [
      {
        heading: 'Dlaczego Pipedrive?',
        body: 'Pipedrive wyróżnia się na rynku CRM jedną rzeczą: jest zbudowany z perspektywy handlowca, nie menadżera. Wizualny kanban z szansami sprzedaży, intuicyjne przeprowadzanie leadów przez etapy, automatyczne przypomnienia o działaniach. Handlowcy faktycznie używają Pipedrive — bo jest prosty i nie przeszkadza w sprzedaży. Statystycznie firmy po wdrożeniu Pipedrive skracają cykl sprzedaży o 28%.',
      },
    ],
    faq: [
      {
        question: 'Ile kosztuje Pipedrive?',
        answer:
          'Pipedrive Essential: 15 EUR/user/mc. Professional: 49 EUR/user/mc. Power: 69 EUR/user/mc. Enterprise: 99 EUR/user/mc. Do typowych potrzeb MŚP wystarcza Professional.',
      },
    ],
    relatedBlogSlugs: ['pipedrive-vs-hubspot', 'jak-wybrac-crm-dla-firmy'],
  },

  'wdrozenia-hubspot': {
    slug: 'wdrozenia-hubspot',
    intro:
      'HubSpot to platforma all-in-one: CRM, marketing automation, obsługa klienta i CMS w jednym miejscu. Dla firm chcących mieć spójny ekosystem sprzedaży i marketingu HubSpot jest często najlepszym wyborem. Wdrożenia HubSpot z pełną konfiguracją.',
    sections: [
      {
        heading: 'Czym jest HubSpot?',
        body: 'HubSpot to platforma inbound marketingu i sprzedaży. W odróżnieniu od Pipedrive (skupiony na sprzedaży) HubSpot obejmuje marketing (kampanie email, landing pages, SEO tools), sprzedaż (CRM, sekwencje email, spotkania) i obsługę klienta (tickety, helpdesk, chat). Bezpłatna wersja CRM jest jedną z najbardziej zaawansowanych bezpłatnych opcji na rynku.',
      },
    ],
    faq: [
      {
        question: 'Pipedrive czy HubSpot — co wybrać?',
        answer:
          'Pipedrive: gdy skupiasz się na sprzedaży, masz do 20 handlowców, nie potrzebujesz marketing automation. HubSpot: gdy chcesz sprzedaż + marketing w jednym miejscu, zależy Ci na content marketingu i nurturingu leadów.',
      },
    ],
    relatedBlogSlugs: ['pipedrive-vs-hubspot', 'jak-wybrac-crm-dla-firmy'],
  },
};

export const k3BlogContent: Record<string, PageContent> = {
  'lejek-sprzedazowy-jak-zautomatyzowac': {
    slug: 'lejek-sprzedazowy-jak-zautomatyzowac',
    intro:
      'Lejek sprzedażowy to droga klienta od pierwszego kontaktu do zamknięcia transakcji. Automatyzacja lejka sprzedażowego oznacza, że system wykonuje powtarzalne działania na każdym etapie — handlowiec skupia się tylko na rozmowach, które konwertują.',
    sections: [
      {
        heading: 'Co to jest lejek sprzedażowy?',
        body: 'Lejek sprzedażowy (sales funnel) to model opisujący etapy, przez które przechodzi potencjalny klient zanim dokona zakupu. Typowe etapy B2B: Awareness (świadomość marki) → Interest (zainteresowanie ofertą) → Consideration (porównanie opcji) → Decision (decyzja zakupu) → Retention (lojalność). Na każdym etapie potencjalni klienci "wypadają z lejka" — zadaniem automatyzacji jest minimalizowanie tych strat.',
      },
      {
        heading: 'Jakie elementy lejka można zautomatyzować?',
        body: 'Top of funnel (TOFU): automatyczne powitanie nowych subskrybentów, lead magnet delivery, segmentacja nowych leadów. Middle of funnel (MOFU): sekwencje nurturingowe, lead scoring, powiadomienia handlowców o aktywnych leadach. Bottom of funnel (BOFU): automatyczne propozycje spotkań, przypomnienia o ofertach, follow-up po spotkaniu. Post-sale: onboarding klienta, prośby o opinie, kampanie upsell.',
      },
      {
        heading: 'Krok po kroku: automatyzacja lejka sprzedażowego',
        body: 'Krok 1: Zmapuj swój lejek — jakie etapy, jakie działania na każdym. Krok 2: Zidentyfikuj powtarzalne działania — co handlowcy robią przy każdym leadzie (follow-up email, dodanie do sekwencji, aktualizacja CRM). Krok 3: Wdróż CRM z automatyzacjami — każde przejście do etapu wyzwala odpowiednie działanie. Krok 4: Dodaj lead scoring — punkty za otwarcia emaili, odwiedziny stron cennikowych, pobrane materiały. Krok 5: Monitoruj i optymalizuj — na jakim etapie tracisz najwięcej leadów?',
      },
    ],
    faq: [
      {
        question: 'Ile czasu można zaoszczędzić na automatyzacji lejka?',
        answer:
          'Handlowcy tracą średnio 30–40% czasu pracy na zadania administracyjne (aktualizacja CRM, wysyłanie emaili, szukanie informacji). Automatyzacja lejka odzyskuje 10–15 godzin tygodniowo na handlowca — czas przekierowany na aktywną sprzedaż.',
      },
    ],
    relatedServiceSlugs: ['automatyzacja-sprzedazy-i-marketingu', 'wdrozenia-crm'],
  },

  'jak-wybrac-crm-dla-firmy': {
    slug: 'jak-wybrac-crm-dla-firmy',
    intro:
      'Wybór CRM to jedna z ważniejszych decyzji technologicznych w firmie — zły wybór kosztuje nie tylko pieniądze, ale też czas i zaangażowanie zespołu. W tym przewodniku znajdziesz framework do porównania systemów CRM i rekomendacje dla różnych typów firm.',
    sections: [
      {
        heading: 'Jak wybrać CRM — 5 kluczowych kryteriów',
        body: 'Kryterium 1: Dopasowanie do procesu sprzedaży — CRM musi odzwierciedlać Twój lejek, nie odwrotnie. Kryterium 2: Adoption (przyjęcie przez zespół) — najlepszy CRM to ten, którego handlowcy faktycznie używają. Kryterium 3: Integracje — czy CRM integruje się z Twoim systemem email, komunikacją, fakturami? Kryterium 4: Skalowalność — czy CRM obsłuży 10x więcej leadów? Kryterium 5: Cena — całkowity koszt posiadania (TCO), nie tylko licencja.',
      },
      {
        heading: 'Porównanie popularnych CRM dla firm w Polsce',
        body: 'Pipedrive: najlepszy UX, skupiony na sprzedaży, od 15 EUR/user/mc. Najlepszy dla: 2–30 handlowców, B2B, proste procesy. HubSpot: all-in-one (marketing + sprzedaż), bezpłatna wersja. Najlepszy dla: content marketing, inbound. Salesforce: enterprise, bardzo elastyczny, drogi. Najlepszy dla: 50+ handlowców, złożone procesy. Freshsales: dobry stosunek cena/jakość, AI wbudowany. Closest.io: najlepszy dla SDR i cold outreach.',
      },
    ],
    faq: [
      {
        question: 'Czy Excel może zastąpić CRM?',
        answer:
          'Excel jest złym CRM — brak historii kontaktów, brak powiadomień, brak raportowania, błędy przy pracy wielu osób, brak integracji. Każda firma z aktywną sprzedażą B2B powinna używać dedykowanego CRM.',
      },
    ],
    relatedServiceSlugs: ['wdrozenia-crm', 'wdrozenia-pipedrive', 'wdrozenia-hubspot'],
  },

  'salesmanago-co-to-jest': {
    slug: 'salesmanago-co-to-jest',
    intro:
      'SALESmanago to polska platforma marketing automation — jedna z największych w Europie Środkowej. Obsługuje ponad 3000 firm, w tym wiele polskich marek. Co to jest SALESmanago, jak działa i dla kogo jest idealne?',
    sections: [
      {
        heading: 'Co to jest SALESmanago?',
        body: 'SALESmanago to platforma marketing automation z siedzibą w Krakowie, działająca od 2012 roku. Łączy funkcje email marketing, marketing automation, CRM, personalizacji stron www i analityki w jednym systemie. Wyróżnia się zaawansowaną segmentacją behawioralną — śledzi zachowanie użytkowników na stronie i automatycznie dostosowuje komunikację.',
      },
      {
        heading: 'Dla kogo jest SALESmanago?',
        body: 'SALESmanago jest przeznaczony dla firm e-commerce i B2B chcących zaawansowanego lead nurturingu. Jest szczególnie popularny w e-commerce (integracje z Shopify, WooCommerce, Magento) i firmach B2B z długim cyklem sprzedaży. Ze względu na cenę (od ~1000 EUR/mc) jest przeznaczony dla firm o większej skali — mikrofirmy lepiej zaczną od Mailchimp lub ActiveCampaign.',
      },
    ],
    faq: [
      {
        question: 'Ile kosztuje SALESmanago?',
        answer:
          'SALESmanago nie publikuje cennika publicznie — cena jest negocjowana. Szacunkowo od 1000–3000 EUR miesięcznie zależnie od bazy i funkcji. Dla mniejszych firm lepszą opcją cenową jest ActiveCampaign (od 29 USD/mc) lub HubSpot.',
      },
    ],
    relatedServiceSlugs: ['automatyzacja-marketingu', 'automatyzacja-sprzedazy-i-marketingu'],
  },
};
