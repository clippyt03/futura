import type { PageContent } from './k1-automatyzacja-procesow';

export const k2PillarContent: PageContent = {
  slug: 'automatyzacja-no-code',
  intro:
    'Automatyzacja no-code pozwala budować zaawansowane integracje i automatyzacje bez pisania kodu. Narzędzia takie jak Make, n8n, Zapier i Power Automate łączą setki aplikacji w jeden automatyczny ekosystem. Wdrożenia no-code są szybsze i tańsze od tradycyjnego developmentu.',
  sections: [
    {
      heading: 'Czym jest automatyzacja no-code?',
      body: 'Automatyzacja no-code (i low-code) to budowanie automatycznych przepływów danych i akcji między aplikacjami bez pisania tradycyjnego kodu. Wizualne platformy takie jak Make czy n8n pozwalają "połączyć" aplikacje blokami i zdefiniować logikę "gdy X, to Y" przez przeciąganie i upuszczanie elementów. Zakres jest ogromny: od prostego "gdy formularz zostanie wypełniony, stwórz lead w CRM" po skomplikowane przepływy z logiką warunkową, pętlami i integracją z AI.',
    },
    {
      heading: 'Popularne platformy no-code',
      body: 'Make.com (dawniej Integromat) — wizualny konstruktor scenariuszy, 1500+ integracji, silna logika warunkowa, idealny dla złożonych przepływów. n8n — open-source, możliwość hostingu u siebie (Twoje dane zostają u Ciebie), własny kod JavaScript gdzie potrzeba, idealne dla firm z wymogami bezpieczeństwa. Zapier — najprostszy start, największa liczba integracji (7000+), wyższy koszt przy dużych wolumenach. Power Automate — idealny dla firm Microsoft 365, głęboka integracja z Teams, SharePoint, Excel.',
    },
    {
      heading: 'Kiedy wybrać no-code zamiast custom dev?',
      body: 'No-code jest właściwym wyborem gdy: integracje dotyczą popularnych narzędzi SaaS (Salesforce, Slack, Gmail, Trello itp.), logika biznesowa nie jest ekstremalnie złożona, szybkość wdrożenia jest priorytetem, budżet na development jest ograniczony. Custom development ma sens gdy: wymagana jest unikalna logika biznesowa, skala jest bardzo duża (miliony operacji), integracje z systemami legacy bez API, wysoka wydajność i SLA.',
    },
    {
      heading: 'Jak wdrażamy automatyzacje no-code',
      body: 'Krok 1: Mapowanie procesu — dokumentujemy dokładnie co ma się dziać, jakie dane przepływają i jakie są wyjątki. Krok 2: Wybór platformy — dobieramy narzędzie do Twoich systemów i wymagań. Krok 3: Budowa scenariusza — implementacja z testami na każdym kroku. Krok 4: Konfiguracja obsługi błędów — automatyczne alerty gdy coś pójdzie nie tak. Krok 5: Dokumentacja — pełna dokumentacja dla Twojego zespołu, żebyś mógł samodzielnie modyfikować.',
    },
  ],
  faq: [
    {
      question: 'Czy no-code jest tak samo niezawodne jak custom kod?',
      answer:
        'Tak — wiodące platformy no-code (Make, n8n) mają dostępność 99.9%+ i są używane przez tysiące firm Enterprise. Dodatkowym zabezpieczeniem jest monitoring i alerty, które konfigurujemy przy każdym wdrożeniu.',
    },
    {
      question: 'Czy po wdrożeniu mogę samodzielnie modyfikować automatyzacje?',
      answer:
        'Tak — to jeden z powodów dla których wybieramy no-code. Dostarczamy szkolenie i dokumentację. Proste zmiany (np. dodanie pola do formularza) możesz zrobić samodzielnie. Dla bardziej złożonych zmian jesteśmy dostępni w ramach wsparcia.',
    },
    {
      question: 'Ile kosztuje miesięczny abonament za narzędzia no-code?',
      answer:
        'Make.com: od 9 USD/mc (10k operacji) do 299 USD/mc (enterprise). n8n cloud: od 20 EUR/mc; n8n self-hosted: bezpłatny (tylko koszt serwera). Zapier: od 19.99 USD/mc. Power Automate: od 15 USD/user/mc lub w pakiecie Microsoft 365. Dla większości MŚP koszt narzędzi to 50–200 zł miesięcznie.',
    },
  ],
  relatedServiceSlugs: ['wdrozenia-make-com', 'wdrozenia-n8n', 'integracje-zapier', 'power-automate-wdrozenia', 'integracje-crm-erp'],
  relatedBlogSlugs: ['make-vs-zapier-porownanie', 'n8n-vs-make-co-wybrac', 'workflow-automatyzacja-przyklady'],
};

export const k2SupportingContent: Record<string, PageContent> = {
  'wdrozenia-make-com': {
    slug: 'wdrozenia-make-com',
    intro:
      'Make.com (dawniej Integromat) to jedna z najpotężniejszych platform automatyzacji no-code na rynku. Łączy ponad 1500 aplikacji i umożliwia budowanie zaawansowanych scenariuszy z logiką warunkową, transformacją danych i obsługą błędów. Wdrożenia Make.com dla firm — szybko, niezawodnie, z pełną dokumentacją.',
    sections: [
      {
        heading: 'Czym jest Make.com?',
        body: 'Make.com (wcześniej Integromat) to wizualna platforma automatyzacji, która pozwala łączyć aplikacje i budować automatyczne przepływy danych bez pisania kodu. Interfejs "przeciągnij i upuść" pozwala zobaczyć cały przepływ danych na jednym ekranie. Make wyróżnia się zaawansowaną logiką: filtry, iteracje, agregacje danych, routery, obsługa błędów — możliwości porównywalne z programowaniem, bez pisania kodu.',
      },
      {
        heading: 'Kiedy wybrać Make.com?',
        body: 'Make jest idealny gdy: potrzebujesz złożonej logiki (wiele warunków, transformacje danych), chcesz widzieć przepływ danych wizualnie, potrzebujesz zaawansowanej obsługi błędów, integrujesz się z mniej popularną aplikacją (Make ma 1500+ konektorów). Make jest lepszy od Zapiera w: złożoności logiki, cenie przy dużych wolumenach, możliwości debuggowania scenariuszy.',
      },
      {
        heading: 'Przykłady wdrożeń Make.com',
        body: 'Automatyzacja sprzedaży: nowy lead z LinkedIn → wzbogacenie danych przez Clearbit → zapis do Pipedrive z pełnym profilem → powiadomienie Slack dla handlowca → e-mail powitalny. Przetwarzanie zamówień: nowe zamówienie w Shopify → sprawdzenie stanu magazynu → aktualizacja WMS → wystawienie faktury → SMS do klienta. Raportowanie: codziennie o 8:00 pobierz dane z Google Analytics + CRM + Ads → stwórz raport w Sheets → wyślij do managera.',
      },
    ],
    faq: [
      {
        question: 'Ile kosztuje wdrożenie Make.com dla firmy?',
        answer:
          'Wdrożenie prostego scenariusza (1 integracja, np. formularz → CRM): 2–5 tys. zł. Kompleksowy system automatyzacji (5+ integracji, złożona logika): 10–25 tys. zł. Miesięczny abonament Make: 9–99 USD. Wsparcie i utrzymanie: opcjonalnie 500–2000 zł/mc.',
      },
    ],
    relatedBlogSlugs: ['make-vs-zapier-porownanie', 'n8n-vs-make-co-wybrac', 'workflow-automatyzacja-przyklady'],
  },

  'wdrozenia-n8n': {
    slug: 'wdrozenia-n8n',
    intro:
      'n8n to open-source platforma automatyzacji, którą możesz hostować na własnym serwerze. Twoje dane zostają u Ciebie — żadna zewnętrzna platforma nie ma do nich dostępu. Dla firm z wymogami bezpieczeństwa i RODO to kluczowa zaleta. Wdrożenia n8n — bez kompromisów w bezpieczeństwie danych.',
    sections: [
      {
        heading: 'Czym jest n8n?',
        body: 'n8n to open-source platforma workflow automation z możliwością hostowania na własnej infrastrukturze. W odróżnieniu od Make czy Zapier, które są SaaS (Twoje dane przechodzą przez ich serwery), n8n możesz uruchomić na swoim serwerze — danych Twoich klientów nie widzi żaden zewnętrzny dostawca. n8n oferuje 400+ konektorów, własny kod JavaScript w węzłach i zaawansowane możliwości debuggowania.',
      },
      {
        heading: 'n8n self-hosted vs n8n cloud',
        body: 'n8n self-hosted: uruchamiasz na własnym serwerze (VPS, AWS, GCP), pełna kontrola danych, bezpłatne oprogramowanie (tylko koszt serwera: 50–300 zł/mc), wymaga konfiguracji technicznej. n8n cloud: zarządzany przez n8n, podobny model do Make/Zapier, od 20 EUR/mc, brak konieczności zarządzania serwerem. Dla firm z wymogami bezpieczeństwa rekomendujemy self-hosted — wdrażamy i konfigurujemy.',
      },
    ],
    faq: [
      {
        question: 'Czy n8n jest trudne w utrzymaniu?',
        answer:
          'n8n self-hosted wymaga podstawowej wiedzy o serwerach. Oferujemy wdrożenie i skonfigurowanie n8n, szkolenie z obsługi oraz opcjonalne wsparcie utrzymania. Dla większości firm aktualizacje n8n zajmują godzinę raz na kilka miesięcy.',
      },
    ],
    relatedBlogSlugs: ['n8n-vs-make-co-wybrac', 'make-vs-zapier-porownanie'],
  },

  'integracje-zapier': {
    slug: 'integracje-zapier',
    intro:
      'Zapier to najpopularniejsze narzędzie automatyzacji no-code z ponad 7000 aplikacji. Jeśli używasz aplikacji SaaS (Slack, Gmail, HubSpot, Trello), Zapier prawie na pewno ma gotowy konektor. Szybki start, łatwa konfiguracja, zero kodu.',
    sections: [
      {
        heading: 'Czym jest Zapier?',
        body: 'Zapier to platforma automatyzacji, która łączy ze sobą ponad 7000 aplikacji. Każda automatyzacja ("Zap") składa się z wyzwalacza (trigger) i akcji — gdy coś się dzieje w aplikacji A, Zapier wykonuje akcję w aplikacji B. Zapier jest znany z prostoty i ogromnej biblioteki konektorów — dla każdej popularnej aplikacji SaaS istnieje gotowy konektor.',
      },
      {
        heading: 'Kiedy Zapier, kiedy Make lub n8n?',
        body: 'Zapier jest najlepszy gdy: szybko chcesz coś uruchomić, używasz popularnych SaaS, logika jest prosta (wyzwalacz → 1–3 akcje). Make jest lepszy przy: złożonej logice, transformacjach danych, niższych kosztach przy dużych wolumenach. n8n jest lepszy gdy: kluczowe są wymogi bezpieczeństwa danych, chcesz hosting własny. WeFutura pomaga wybrać właściwe narzędzie do konkretnego przypadku.',
      },
    ],
    faq: [
      {
        question: 'Czy Zapier jest bezpieczny dla danych firmy?',
        answer:
          'Zapier jest zgodny z SOC2, RODO i posiada szyfrowanie danych. Dla bardzo wrażliwych danych (dane medyczne, finansowe) lub firm z wymogami on-premise, n8n self-hosted jest lepszym wyborem.',
      },
    ],
    relatedBlogSlugs: ['make-vs-zapier-porownanie', 'zapier-vs-power-automate'],
  },

  'power-automate-wdrozenia': {
    slug: 'power-automate-wdrozenia',
    intro:
      'Microsoft Power Automate to platforma automatyzacji z pakietu Microsoft 365. Jeśli Twoja firma używa Teams, SharePoint, Outlook lub Excel, Power Automate jest naturalnym wyborem — głęboka integracja, brak dodatkowych licencji (włączony w Microsoft 365).',
    sections: [
      {
        heading: 'Czym jest Power Automate?',
        body: 'Microsoft Power Automate (dawniej Microsoft Flow) to platforma automatyzacji wbudowana w ekosystem Microsoft 365. Pozwala automatyzować procesy oparte na aplikacjach Microsoft (Teams, Outlook, SharePoint, Excel, OneDrive) i setki aplikacji zewnętrznych. Kluczowa zaleta: dla firm z pakietem Microsoft 365 Business Power Automate jest dostępny bez dodatkowych opłat.',
      },
      {
        heading: 'Typowe wdrożenia Power Automate',
        body: 'Zatwierdzanie dokumentów: plik dodany do SharePoint → powiadomienie Teams → zatwierdzenie przez przełożonego → zapis do odpowiedniego folderu. Automatyzacja e-maili: e-mail z załącznikiem faktury → zapis do SharePoint → powiadomienie księgowości. Raportowanie: dane z Excela → automatyczny raport w Teams co tydzień. Formularz PowerApps → zapis do listy SharePoint → powiadomienie.',
      },
    ],
    faq: [
      {
        question: 'Czy Power Automate zastąpi Make lub Zapier?',
        answer:
          'Power Automate jest najlepszy dla procesów w ekosystemie Microsoft. Dla integracji z zewnętrznymi SaaS (Salesforce, Shopify, własne API) Make lub n8n są często lepszym wyborem. Wiele firm używa Power Automate dla procesów Microsoft i Make dla reszty.',
      },
    ],
    relatedBlogSlugs: ['zapier-vs-power-automate', 'workflow-automatyzacja-przyklady'],
  },

  'integracje-crm-erp': {
    slug: 'integracje-crm-erp',
    intro:
      'Integracje CRM i ERP eliminują ręczne przepisywanie danych między systemami. Nowe zamówienie automatycznie trafia z e-commerce do ERP. Lead z CRM automatycznie synchronizuje się z systemem fakturowania. Koniec z "podwójnym prowadzeniem" danych w dwóch systemach.',
    sections: [
      {
        heading: 'Dlaczego integracje CRM i ERP są krytyczne?',
        body: 'Większość firm używa kilku systemów: CRM do sprzedaży, ERP do operacji, platformy e-commerce do sprzedaży online, narzędzi komunikacji. Bez integracji dane muszą być przepisywane ręcznie — co kosztuje czas, generuje błędy i tworzy niespójność. Klient w CRM ma inny adres niż w systemie wysyłki. Zamówienie jest w sklepie, ale handlowiec tego nie widzi w CRM. Integracje rozwiązują te problemy raz na zawsze.',
      },
    ],
    faq: [
      {
        question: 'Jakie systemy możecie integrować?',
        answer:
          'Integrujemy dowolne systemy mające API lub format wymiany danych (XML, JSON, CSV). Specjalizujemy się w: Salesforce, HubSpot, Pipedrive, SAP, Comarch ERP, Subiekt, BaseLinker, Shopify, WooCommerce, Allegro i dziesiątkach innych. Skontaktuj się — ocenimy Twój przypadek.',
      },
    ],
    relatedBlogSlugs: ['workflow-automatyzacja-przyklady', 'automatyzacja-procesow-co-to-jest'],
  },
};

export const k2BlogContent: Record<string, PageContent> = {
  'make-vs-zapier-porownanie': {
    slug: 'make-vs-zapier-porownanie',
    intro:
      'Make vs Zapier — to jedno z najczęstszych pytań firm zaczynających przygodę z automatyzacją no-code. Oba narzędzia służą do tego samego, ale są bardzo różne. Które wybrać? Odpowiedź zależy od złożoności Twoich procesów, budżetu i wymagań technicznych.',
    sections: [
      {
        heading: 'Make vs Zapier — krótkie porównanie',
        body: 'Zapier: łatwiejszy start, 7000+ aplikacji, cena rośnie szybko przy dużych wolumenach, idealne dla prostych integracji. Make: bardziej zaawansowany, wizualny diagram całego przepływu, tańszy przy dużych wolumenach, lepsza obsługa błędów, trudniejszy na start.',
      },
      {
        heading: 'Cena — Zapier vs Make',
        body: 'Zapier: bezpłatny do 100 zadań/mc. Plan Starter: 19.99 USD/mc (750 zadań). Plan Professional: 49 USD/mc (2000 zadań). Ceny rosną szybko. Make: bezpłatny do 1000 operacji/mc. Plan Core: 9 USD/mc (10 000 operacji). Plan Pro: 16 USD/mc (10 000 operacji z zaawansowanymi funkcjami). Make jest tańszy przy dużych wolumenach — operacja w Make odpowiada kilku "zadaniom" w Zapierze.',
      },
      {
        heading: 'Kiedy wybrać Zapier?',
        body: 'Wybierz Zapier gdy: dopiero zaczynasz z automatyzacją i chcesz szybko uruchomić coś prostego, używasz bardzo specyficznej aplikacji (Zapier ma więcej mniej popularnych konektorów), budżet jest ograniczony i wolumeny małe, Twój zespół nie jest techniczny i potrzebuje najprostszego rozwiązania.',
      },
      {
        heading: 'Kiedy wybrać Make?',
        body: 'Wybierz Make gdy: Twoje procesy mają złożoną logikę (wiele warunków, transformacje danych), chcesz widzieć cały przepływ wizualnie, masz duże wolumeny operacji, potrzebujesz zaawansowanej obsługi błędów i debuggowania, budujesz coś ważnego dla firmy gdzie niezawodność jest priorytetem.',
      },
    ],
    faq: [
      {
        question: 'Czy można używać Make i Zapier jednocześnie?',
        answer:
          'Tak — wiele firm używa Zapiera do prostych integracji z narzędziami które nie mają konektora w Make, a Make do bardziej złożonych scenariuszy. Nie ma powodu by być "lojalnym" wobec jednej platformy.',
      },
      {
        question: 'Czy można przenieść automatyzacje z Zapiera do Make?',
        answer:
          'Tak, ale wymaga to ręcznej rekonfiguracji — scenariusze nie są kompatybilne. Przy zmianie platformy WeFutura może przebudować istniejące automatyzacje w nowej platformie.',
      },
    ],
    relatedServiceSlugs: ['wdrozenia-make-com', 'integracje-zapier'],
  },

  'n8n-vs-make-co-wybrac': {
    slug: 'n8n-vs-make-co-wybrac',
    intro:
      'n8n vs Make — starcie open-source contra SaaS. n8n to jedyne główne narzędzie automatyzacji, które możesz hostować na własnym serwerze. Dla firm dbających o bezpieczeństwo danych i RODO to kluczowy argument. Ale Make ma swoje mocne strony. Porównujemy.',
    sections: [
      {
        heading: 'Kluczowa różnica: hosting i bezpieczeństwo danych',
        body: 'Make: SaaS — Twoje dane przepływają przez serwery Make (Czechy, UE). Bezpieczne dla większości firm, ale dane opuszczają Twoją infrastrukturę. n8n self-hosted: uruchamiasz na własnym serwerze — dane nigdy nie opuszczają Twojej organizacji. Dla firm przetwarzających dane wrażliwe (medycznych, finansowych, klientów enterprise) to zasadnicza różnica.',
      },
      {
        heading: 'Możliwości techniczne — n8n vs Make',
        body: 'n8n: własny kod JavaScript w węzłach (pełna elastyczność), bardzo zaawansowana obsługa danych, aktywna społeczność open-source, 400+ konektorów. Make: wizualny konstruktor (łatwiejszy), zaawansowane operacje na danych bez kodu, 1500+ konektorów, lepszy support komercyjny. Dla zaawansowanych przypadków n8n daje więcej możliwości technicznych; Make jest bardziej dostępny dla mniej technicznych użytkowników.',
      },
    ],
    faq: [
      {
        question: 'Ile kosztuje n8n w porównaniu do Make?',
        answer:
          'n8n cloud: od 20 EUR/mc. n8n self-hosted: bezpłatne oprogramowanie + serwer (50–200 zł/mc za VPS). Make: od 9 USD/mc. Przy małych wolumenach ceny są podobne; przy dużych n8n self-hosted jest najtańszy.',
      },
    ],
    relatedServiceSlugs: ['wdrozenia-n8n', 'wdrozenia-make-com'],
  },
};
