---
title: "AI-native engineering: jak agenci zmieniają zespoły, procesy i rekrutację w dużych firmach"
date: "2026-09-13"
videoUrl: "https://www.youtube.com/watch?v=uImPHIhHzFs"
channelName: "Организованное программирование | Кирилл Мокевнин"
channelUrl: "https://www.youtube.com/channel/UCJuotEzekRzmMEQdADcdJ8w"
shortDescription: "Aleksandr Połomodow, były szef AI w T-Banku, opowiada o realnym wdrażaniu agentów AI w wielkich organizacjach – od spłaszczania konwejerowych struktur zespołów i przejścia z code review na design review, po napięcia między pilotażowymi zespołami a centralną platformą bezpieczeństwa. Rozmowa porusza spec-driven development, kodyfikację polityk firmowych jako skille dla agentów, trójstopniowy model mierzenia efektywności AI (adopcja, czas realizacji zadań, ekonomika) oraz problem malejącej użyteczności krańcowej przy wzroście przepustowości bez odpowiedniego zasilania lejka pomysłów. Osobny wątek dotyczy przyszłości rekrutacji i szkolenia juniorów, gdy klasyczne sygnały (algorytmy, system design) tracą wartość, a także granic automatyzacji w systemach ze złożonym stanem i „archeologią\" legacy kodu. Całość zamyka refleksja o strategiach różnicowania kompetencji inżynierskich w obliczu nadchodzącej, niepewnej „osobliwości\" AI."
tags: ["agenci ai", "dostarczanie oprogramowania", "zmiana organizacyjna", "rozwój oparty na specyfikacjach", "inżynieria platformowa", "metryki inżynierskie"]
tagKeys: ["ai-agents", "software-delivery", "organizational-change", "spec-driven-development", "platform-engineering", "engineering-metrics"]
---

# Zmiana modelu tworzenia oprogramowania w erze agentów AI

## Kontekst rozmowy

Gościem podcastu jest Aleksandr Połomodow, który do końca sierpnia pełnił funkcję odpowiedzialnego za rozwój AI w skali całej organizacji w T-Banku (dużym rosyjskim banku technologicznym), a wcześniej pracował jako dyrektor techniczny. Po zakończeniu tej pracy planuje przeprowadzkę do Londynu. Rozmowa dotyczy tego, jak duże korporacje faktycznie wdrażają sztuczną inteligencję do procesów wytwarzania oprogramowania — z perspektywy organizacyjnej, a nie pojedynczego programisty.

## Jak zmienia się struktura zespołów programistycznych

### Tradycyjny model korporacyjny

Duże organizacje cyfrowe od dawna były zorganizowane jako swoisty konwejer dostarczania wartości, podzielony na dwie zasadnicze fazy:

- **Discovery** — ustalanie, co należy zbudować (za to odpowiadał biznes, product managerowie, analitycy).
- **Delivery** — faktyczne zbudowanie, wdrożenie na produkcję i utrzymanie.

Zgodnie z logiką „taylorowsko-fordowską" te etapy dzielono dalej na wąskie kroki, z których każdy obsługiwała osoba o odrębnym stanowisku (analityk biznesowy, analityk systemowy, kilku typów inżynierów, testerzy automatyczni, testerzy manualni itd.). W ujęciu Team Topologies odpowiadało to zespołom strumieniowym (stream-aligned) oraz zespołom platformowym, przy czym w zespołach strumieniowych gromadziło się „każdej maści po trochu" — nawet do 15–20 osób.

### Co zmienia się wraz z pojawieniem się agentów

Gdy znaczną część kodu piszą agenci, wiele wąsko wyspecjalizowanych stanowisk przestaje być potrzebnych jako osobne role obsadzane osobnymi ludźmi — funkcje frontendu, backendu, inżynierii QA czy analizy da się skonsolidować w mniejszej liczbie osób wspieranych przez odpowiednio skonfigurowanych agentów. Rok 2025 był etapem „asystentów" — każda rola uczyła się generować więcej treści w swoim wewnętrznym cyklu (product manager generował więcej wymagań, analityk przerzucał je dalej, inżynier prosił o priorytetyzację), ale to prowadziło jedynie do przeciążenia kolejnych etapów, a nie do przyspieszenia całości — więcej pracy powstawało na każdym etapie, ale niewiele z tego faktycznie docierało do końca. W 2026 roku okazało się, że właściwą drogą jest **redukcja liczby przekazań pracy między ludźmi**, a nie zwiększanie produktywności na każdym z izolowanych etapów.

W startupach to naturalnie już działa, ponieważ nie ma rozbudowanych procesów i ludzie i tak robią wszystko, co potrzebne. W korporacjach jest to znacznie trudniejsze, ponieważ istnieją zawody i stanowiska, których tożsamość zawodowa jest zbudowana wokół dobrego wykonywania konkretnego wąskiego etapu procesu.

### Docelowy, uproszczony model zespołu

Chodzi nie o to, że jakieś role stają się zbędne, lecz o to, że nie potrzeba już osobnych osób (stanowisk) do obsługi każdej z nich. Docelowy obraz zespołu, do którego dążono jeszcze przed rozwojem AI (jako uproszczenie struktur), obejmuje zasadniczo:
- osobę odpowiedzialną za **Discovery** (stronę produktową),
- osobę/zespół odpowiedzialną za **Delivery** (specyfikacje, kod, pull requesty, code review, testy, wdrożenie),
- oraz ludzi zajmujących się **operacjami/wsparciem**, filtrujących problemy, zanim trafią bezpośrednio do zespołu deweloperskiego.

Sztuczna inteligencja znacząco ułatwia realizację takiego modelu, ponieważ dawniej inżynier musiał samodzielnie posiadać wiele kompetencji — teraz w zamkniętych obszarach, w których nie jest ekspertem, wspiera go dobrze skonfigurowany agent.

## Idealny, docelowy proces pracy

Opisany zostaje pewien wariant docelowy (na razie w dużej mierze teoretyczny): jedna osoba produktowa, wsparta agentem, generuje więcej hipotez i przekazuje dalej nie surowe wymagania, a już przetestowane, klikalne prototypy stworzone wspólnie z agentem. Osoba (inżynier produktowy) po stronie realizacji powinna móc automatycznie uwzględniać wszystkie wymagania „horyzontalne" — bezpieczeństwo, niezawodność, zgodność z krajobrazem architektonicznym firmy itd.

Kluczowa idea: reguły firmowe (polityki bezpieczeństwa, prawne, dotyczące marki, treści itd.) powinny być **zewnętrznie skodyfikowane** (policy as code) i dostępne agentowi w formie skilli/playbooków (na wzór podejścia Anthropic), tak aby były stosowane już na etapie projektowania wymagań — a nie sprawdzane ręcznie tygodniami po fakcie w formie code review bezpieczeństwa. Idealnie te reguły powinny działać już w wewnętrznym cyklu tworzenia funkcji, a dodatkowo powinny istnieć automatyczne bramki (gates) sprawdzające każdy pull request przed wdrożeniem na produkcję. Wtedy znika większość ręcznych barier spowalniających wdrożenia.

Rozmówca zaznacza jednak, że to wciąż „świat marzeń", do którego dojście jest ekstremalnie trudne.

## Rozróżnienie: vibe coding vs. inżynieria natywna dla AI

Kluczowe pytanie brzmi, czy te „bramki" i kontrole są oparte wyłącznie na AI, czy łączą to z deterministycznymi narzędziami (statyczna analiza, testy). Odpowiedź: różnica między czystym „vibe codingiem" a prawdziwym **AI-native engineering** polega właśnie na połączeniu:
- polityk stosowanych przez agenta w formie rekomendacji/skilli,
- oraz zestawu **deterministycznych, automatycznych sprawdzeń**, które każda zmiana musi przejść.

W praktyce liczba takich deterministycznych sprawdzeń w projekcie rośnie naturalnie wraz z napotykanymi problemami — każdy nowy problem generuje kolejny skrypt weryfikujący.

### Zasady projektowania architektury pod pracę z agentami

Startując projekt od zera, warto świadomie zaprojektować architekturę pod konkretne założenia, np.:
- Gotowość do tłumaczenia agentowi „co" zrobić, ale niechęć do tłumaczenia wielokrotnie „jak" to ma wyglądać — stąd potrzeba **self-healing** architektury, w której problemy ujawniają się na etapie wprowadzania zmiany, a nie dopiero na etapie eksploatacji.
- Skoro inkrement da się sprawdzić ręcznie, ale regresji ręcznie sprawdzić się nie da — regresja musi być weryfikowana maksymalnie automatycznie.
- Warto rozróżnić standardowy profil zmian (np. rutynowe dodawanie treści) od niestandardowego (duży refaktoring) — architekturę optymalizuje się pod przypadki standardowe, a niestandardowe świadomie traktuje się jako wymagające więcej czasu i ręcznego projektowania.

Odpowiadając sobie na takie pytania, lider techniczny/architekt jest w stanie precyzyjnie zaprojektować cały system, proces i infrastrukturę. Problem w tym, że istniejące projekty typu „brownfield" (już działające, rozwijane od dawna systemy) były zoptymalizowane pod zupełnie inne metryki, więc samo „dodanie AI do procesów" pociąga za sobą ogromny łańcuch koniecznych zmian — trzeba optymalizować system pracy i architekturę pod zupełnie inną metrykę.

## Organizacja wdrożenia AI w dużej firmie

### Podział na platformę i pion biznesowy

W dużych firmach (typu banki czy inne duże firmy technologiczne) typowo istnieje:
- **Inżynieria platformowa** dostarczająca ogólnofirmowe narzędzia: Model Gateway (jeden punkt dostępu do różnych modeli, zarządzanie kwotami i tożsamością), MCP Hub, Skill Hub (repozytorium sprawdzonych, przetestowanych skilli z mechanizmem współdzielenia), sandboxing/devboxing do uruchamiania agentowych „śladów" pracy poza komputerem użytkownika. Zespoły platformowe ściśle współpracują z działem bezpieczeństwa, by dopuszczać poszczególne narzędzia.
- **Piony biznesowe** (np. inwestycje, bankowość dla firm, bankowość dla osób fizycznych, telekomunikacja), które działają autonomicznie i mają własne potrzeby.

Problem w tym, że narzędzia platformowe historycznie optymalizowano pod interfejs graficzny dla człowieka, a nie pod interfejs agentowy — API bywają zbyt „gadatliwe" lub zbyt drobnoziarniste, przez co agent musi wykonać ogromną liczbę wywołań, by zebrać potrzebne informacje.

### Nierównomierność wdrożenia w pionach biznesowych

Piony biznesowe różnią się znacząco dojrzałością procesów — od modelu „product engineer + agent" po klasyczny łańcuch: product manager → analityk biznesowy → analityk systemowy → kilku inżynierów → testerzy automatyczni → testerzy manualni, gdzie każdy przekazuje pracę dalej. W zależności od punktu startowego trzeba zupełnie inaczej planować drogę transformacji.

Powstaje też zjawisko nierównomiernego dostępu do zasobów: zespoły „napędowe" (zmotywowane, szybkie) potrafią wynegocjować pilotaż z dostępem do najlepszych narzędzi (np. najwyższy poziom SLA/SOTA), obiecując w zamian pokazanie wyników wdrożenia, podczas gdy zespoły mniej aktywne pozostają przy standardowych, słabszych możliwościach platformy. Efekt: „przyszłość już nadeszła, tylko jest nierównomiernie rozłożona" — pojawiają się pojedyncze punkty sukcesu (np. zespół uruchamiający nowy produkt dostaje np. subskrypcję Claude zamiast standardowych zasobów, product manager i inżynierowie są silnie zmotywowani, przechodzą na proces „AI-native": zamiast Jiry i Wiki piszą intencje wprost w repozytorium, wspólnie tworzą specyfikacje, karmią nimi agenta w pętli TDD, pokazują demo co tydzień — i budują produkt np. dwa razy szybciej, dwukrotnie mniejszym zespołem). Jednocześnie sąsiedni zespół, pracujący na standardowych narzędziach bez presji czasu (brownfield, nie greenfield), może odnotować wzrost liczby linii kodu i pull requestów, lecz brak realnej poprawy przepustowości zespołu — bo cały zaoszczędzony czas trafia do zaległego długu technicznego, a nie przyspiesza dostarczanie priorytetowych zadań biznesowych. To rodzi frustrację biznesu: „wdrożyliście AI?" — efektywnie nie, bo efektu nie widać.

### Potrzeba dedykowanej roli/zespołu ds. zmiany procesów

Pojawia się pytanie, czy potrzebny jest dedykowany zespół/osoba zajmująca się wyłącznie ulepszaniem workflow, ustanawianiem bramek i wdrażaniem zmian procesowych — a nie rozwijaniem funkcji produktowych, ponieważ zespół zajęty wyłącznie funkcjami traktuje takie usprawnienia jako działanie poboczne, trudne do wygospodarowania w czasie.

W dużych pionach biznesowych (rzędu tysiąca inżynierów) zwykle już istnieją scentralizowane funkcje wewnątrz pionu (własne mini-zespoły platformowe odpowiedzialne za niezawodność, wydajność, czasem własną nadbudowę ponad standardową platformę). Dodanie do takiej struktury osoby odpowiedzialnej za zmianę workflow nie jest więc dużym problemem samym w sobie — trzeba tylko znaleźć odpowiednio kompetentnych ludzi. W T-Banku z samym znalezieniem takich zaangażowanych osób nie było problemu — w wielu pionach i zespołach platformowych byli ludzie chcący i potrafiący realnie zmieniać procesy.

### Trudność w skalowaniu na całą firmę

Prawdziwym wyzwaniem okazało się **uogólnienie** dobrych praktyk na poziom całej firmy. Silny, dochodowy pion biznesowy z zaangażowanymi ludźmi potrafi wynegocjować dla siebie warunki, których nie da się rozszerzyć na całą organizację (np. z powodów bezpieczeństwa). Taki pion wypracowuje własne usprawnienia i z czasem wyprzedza centralną funkcję platformową. Gdy próbuje się te usprawnienia rozpropagować na wszystkich, napotyka się scentralizowane wymagania, które były złagodzone na potrzeby pilotażu, ale nie nadają się do pełnego skalowania. Powstaje błędne koło: dział bezpieczeństwa odpowiada, że czegoś nie da się rozszerzyć na wszystkich, bo jest to niebezpieczne, a gdy pyta się, jakie warunki trzeba spełnić, by było bezpiecznie, wskazuje się na wymagania, które same nie są jeszcze zaimplementowane w stosownych standardach branżowych (np. dopiero planowane na dalekie kwartały przyszłych lat) — co prowadzi do ironicznej konkluzji, że priorytetem staje się formalne „bezpieczeństwo" zamiast tego, by rozwiązanie po prostu działało.

## Problem niedojrzałej integracji narzędzi (MCP)

Rozmówcy zwracają uwagę na praktyczne trudności z integracją narzędzi agentowych, nawet przy korzystaniu z gotowych rozwiązań, a nie budowaniu własnych. Przykładem jest sytuacja w Yandex Cloud, gdzie autoryzacja OAuth przypisywana jest bezpośrednio do konkretnego serwera MCP, przez co nie można stworzyć jednego wspólnego MCP dla wielu użytkowników — trzeba tworzyć osobną instancję dla każdego użytkownika logującego się na swoje konto. Tego typu „dziwactw" jest obecnie bardzo dużo, nawet w niewielkich firmach wdrożenie okazuje się kłopotliwe i wymaga czekania, aż dostawcy narzędzi „dojrzeją". Sam standard MCP ulega w tej chwili istotnym zmianom i uproszczeniom właśnie z powodu problemów związanych z zarządzaniem stanem.

## Powrót do specjalistów uniwersalnych (fullstack) zamiast wąskich specjalizacji

### Historyczny kontekst podziału ról

Branża od dawna przechodziła przez cykliczne etapy narastającej specjalizacji: oddzielenie frontendu od backendu, potem powstanie osobnych domen dla mobile itd. Każdy z tych etapów wynikał z narastającej złożoności danego obszaru — frontend z czasem stał się właściwie osobną aplikacją desktopową działającą w przeglądarce, ze swoim stanem i dynamiką, więc naturalnie wymagał odrębnej specjalizacji.

### Dlaczego to podejście traci sens

Kluczowe pytanie brzmi, pod jaką metrykę optymalizuje się system produkcyjny. Podział na wąskie etapy (konwejer) miał sens, gdy każdy etap wymagał innych umiejętności — obniżało to koszt produkcji i zwiększało przepustowość bez zwiększania liczby ludzi, dzięki specjalizacji (analogicznie do klasycznej ekonomicznej zasady przewagi względnej w handlu międzynarodowym). Problem pojawiał się jednak w **przekazywaniu pracy między etapami** — przykładem może być sytuacja, w której realizacja jednej funkcji wymagała koordynacji czterech zespołów, co stanowi już nie kwestię architektury, lecz dysfunkcję organizacji pracy. Wynikało to z tego, że całościowa wiedza o zadaniu nie mieściła się w głowie jednej osoby (a jeśli się mieściła, taka osoba stawała się bardzo cenna i stanowiła pojedynczy punkt awarii).

Agenci zmieniają tę kalkulację, ponieważ zostali wytrenowani na całym publicznym kodzie i ogromnej ilości danych syntetycznych z uczenia przez wzmacnianie — potrafią pisać zarówno frontend, jak i backend czy inne warstwy. Powstaje więc narzędzie uniwersalne (porównywane do rewolweru „wielkiego wyrównywacza"), a kluczowym pytaniem staje się, w co je wycelować i jak zweryfikować, że zadanie zostało wykonane poprawnie — a nie jaką wąską specjalizację posiada dana osoba.

### Powrót do modelu „silnego inżyniera uniwersalnego"

Branża zmierzała już wcześniej w tym kierunku poprzez koncepcję staff/principal engineer — osoby rozwiązującej problem niezależnie od tego, czy określa się jako „programista Java" czy „programista JS". Obecnie ten poziom kompetencji zaczyna być wymagany znacznie wcześniej w karierze — nawet od inżyniera na poziomie juniora oczekuje się, że będzie działał jako **inżynier produktowy** blisko współpracujący z agentem, potrafiący razem z nim opracować plan działania.

## Design review zamiast code review

Nawiązując do znanej w branży idei (przypisywanej m.in. wypowiedziom Phila Kalgena), że sam code review jest mniej wartościowy niż wcześniejszy **design review** — uzgodnienie z góry, co i jak ma zostać zrobione. Wcześniej taki proces (np. w formie architecture decision record, ADR) stosowano tylko przy dużych, kosztownych i trudno odwracalnych decyzjach architektonicznych (analogicznie do koncepcji Jeffa Bezosa o decyzjach jednokierunkowych). Dzięki agentom ten sam mechanizm da się teraz stosować na poziomie pojedynczego zadania: istnieje intencja produktowa, powstają wspólnie ze specyfikacją (spec) plany działania proponowane przez agenta, które są recenzowane, po czym agent pisze kod, a rola człowieka sprowadza się do weryfikacji rezultatu.

### Konsekwencje dla różnych typów inżynierów

Dla osób, którym zależało na wyniku i uczestnictwie w samym procesie decyzyjnym, taki model jest korzystny — mogą teraz osiągać więcej. Jednak część inżynierów była przywiązana właśnie do samego procesu pisania kodu i stanu „przepływu" (flow) — a nowy model pracy jest z natury **asynchroniczny**: zlecasz zadanie agentowi, on je wykonuje, a człowiek w tym czasie przełącza się na coś innego.

### Znaczenie pracy w trybie specyfikacji zamiast interaktywnego podpowiadania

Badania nad interaktywnymi benchmarkami (dotyczącymi tego, jak agenci radzą sobie w trybie częściowego ujawniania informacji i doprecyzowywania wymagań w locie) pokazują, że praca w trybie interaktywnym — gdy człowiek na bieżąco koryguje tok rozumowania agenta i dorzuca kolejne wymagania — **drastycznie obniża jakość** rozwiązania w porównaniu do podejścia typu **spec-driven development**, w którym wszystkie wymagania są z góry rozłożone, zweryfikowane, a dopiero potem agent samodzielnie realizuje zadanie i sprawdza kryteria akceptacji na końcu.

### Doświadczenie praktyczne z pracy w małych zespołach

Procesy uważane wcześniej za typowo korporacyjne (spec-driven development, ADR-y) okazały się na tyle uproszczone i zautomatyzowane dzięki agentom, że stały się naturalne nawet dla bardzo małych zespołów (półtora człowieka piszącego kod) — i nowe projekty od razu startują w tym trybie, nawet gdy programista pracuje sam. Zaznaczono jednak, że istnieje pewien rozrzut narzędzi pod tym względem — niektóre podejścia (np. narzędzie „OpenSpec") mogą być nadmiarowe dla mniejszych projektów typu open source, a lepiej pasują do dużych produktów, choć ogólny trend zmierza w stronę powszechnego stosowania wcześniej ustalanej specyfikacji na każdym poziomie skali projektu.

## Znaczenie jawnej wiedzy i domenowej terminologii

Jawnie zapisana wiedza (opisany zamiar, kryteria akceptacji) bardzo pomaga modelom działać skutecznie — pozwala agentowi samodzielnie ocenić, czy zadanie zostało wykonane, i rozliczyć się z tego bez konieczności ręcznej weryfikacji przez człowieka za każdym razem.

### Przykład z praktyki: refaktoryzacja przez tworzenie prototypu

Rozmówca opisuje własne doświadczenie: potrzebę przekształcenia aplikacji typu „local-first" w system wielodostępny (multi-tenant). Dzięki pracy z agentem w trybie asystowanym (np. „wizard" pytań) udało się w ciągu jednego dnia uzyskać działający, choć niedoskonały prototyp wraz z dokumentem projektowym (ADR) porównywalnej jakości do tego, co wcześniej wymagałoby tygodnia pisania, dwóch tygodni przekonywania innych i kwartału oczekiwania na realizację. Kluczowy wniosek: głęboka znajomość domeny i architektury pozwala precyzyjnie formułować agentowi kompromisy projektowe (trade-offy) w odpowiednim języku technicznym, co drastycznie zwiększa jakość efektu — a bez tej wiedzy trzeba by dopiero tłumaczyć wszystkim uczestnikom podstawy zagadnienia.

### Ekspertyza domenowa ważniejsza niż inżynieria oprogramowania

Nawiązując do wspólnych rozmów z innymi gośćmi (m.in. Siergiejem Baranowem) na temat przeglądu literatury o stanie sztuki w architekturze — modele językowe potrafią lepiej odpowiadać, gdy komunikat jest sformułowany precyzyjnym, domenowym językiem, ponieważ model wtedy trafniej „odnajduje" odpowiednią reprezentację danej dziedziny. Podobne wnioski przedstawiał zespół Anthropic, wskazując, że ekspertyza domenowa (np. dobry księgowy) często ma większe znaczenie przy delegowaniu zadań agentowi niż sama biegłość inżynierska (dobry inżynier bez znajomości księgowości gorzej rozwiąże zadanie księgowe).

### Znaczenie nazewnictwa (naming) w projekcie

Podano konkretny przykład: w długo istniejącym projekcie edukacyjnym (rozwijanym od 2013 roku) terminologia z czasem „rozjechała się" od właściwych pojęć domenowych. Agent bez podpowiedzi nie potrafił wyciągnąć poprawnych wniosków przy niespójnym nazewnictwie. Rozwiązaniem stało się świadome dopytywanie agenta o standardową terminologię branżową (np. jak w uczelniach nazywa się proces rekrutacji — „admission") i przeprowadzenie w ciągu ostatniego roku szeroko zakrojonego refaktoringu polegającego głównie na przemianowaniu pojęć w kodzie, tak by były zgodne z ogólnie przyjętą terminologią — bez potrzeby tłumaczenia tego agentowi za każdym razem. Zgodność terminologii z tą, na której model był trenowany, dodatkowo wzmacnia trafność jego rekomendacji.

## Platformy wewnętrzne kontra rozwiązania open source

### Dawny model: fork i dostosowanie pod skalę

Duże firmy technologiczne (bigtechy) tradycyjnie napotykały problem, że gotowe narzędzia open source (np. Elasticsearch, Mattermost, Apache Zeppelin) nie wytrzymywały skali dziesiątek tysięcy użytkowników i „rozsypywały się". Próby wniesienia potrzebnych zmian do głównej gałęzi (upstream) zwykle kończyły się odmową — twórcy uznawali, że tak specyficzna skala komplikowałaby architekturę dla wszystkich pozostałych użytkowników. W efekcie firmy tworzyły własne forki i dobudowywały nad nimi kolejne, coraz bardziej autorskie funkcje i interfejsy — częściowo uzasadnione realną potrzebą skalowania, a częściowo wynikające z presji na product managerów, by wykazywali się kreatywnością (samo podążanie za upstreamem nie dawało im podstaw do awansu).

### Nowy problem: agenci nie znają lokalnych „dziwactw"

Wraz z pojawieniem się agentów okazało się, że te rozbudowane, autorskie platformy stają się przeszkodą — agent jest świetnie wytrenowany na oryginalnym, standardowym rozwiązaniu (np. „ważnym" Apache Zeppelinie), ale nie rozpoznaje lokalnie dostosowanej wersji i wymaga mnóstwa dodatkowych wyjaśnień w kontekście, by zrozumieć, czym różni się to rozwiązanie i jak się z nim komunikować. To, co wcześniej stanowiło **aktywo** (przewaga konkurencyjna dzięki dostosowaniu narzędzia do skali firmy), zamieniło się w swego rodzaju **pasywo** — dodatkowy koszt konieczny, by uczynić rozwiązanie ponownie użytecznym dla agenta.

Stąd pojawił się trend odwrotny: dążenie do przywrócenia zgodności API wewnętrznych platform z rozwiązaniami z głównego nurtu (upstream), tak aby agenci mogli obsługiwać je „z pudełka", bez potrzeby dostarczania dodatkowego kontekstu tłumaczącego lokalne odstępstwa. Doświadczenie pokazuje, że podejścia pretrenowane (gdzie model uczył się posługiwać danym narzędziem od podstaw) działają znacznie lepiej niż próby doszkolenia modelu poprzez wrzucanie dodatkowych przykładów do okna kontekstu lub fine-tuning/uczenie przez wzmacnianie.

### Praktyka contribution do open source w małych firmach

Rozmówca (Kirył) potwierdza podobne doświadczenie we własnej, niewielkiej firmie: regularnie, niemal codziennie, zgłasza pull requesty do zewnętrznych projektów open source (np. Shopify) zamiast utrzymywać własne lokalne łatki — zgłoszenia te powstają naturalnie w toku pracy z agentem, gdy w sesji pojawia się problem i łatwo od razu przygotować zgłoszenie do głównego repozytorium zamiast trzymać poprawkę lokalnie. W ciągu ostatnich trzech miesięcy powstało w ten sposób około dwudziestu pull requestów.

### Analogia z innymi dziedzinami techniki

Zjawisko, w którym dawna przewaga technologiczna zamienia się w obciążenie, porównano do:
- **Metra w Nowym Jorku i Londynie** — jako jedne z pierwszych na świecie, ucierpiały później na problemach wynikających z wczesnych, przestarzałych rozwiązań technicznych.
- **Systemu bankowego w USA** — jednego z pierwszych nowoczesnych systemów bankowych na świecie, gdzie do dziś funkcjonują czeki, będące reliktem starego systemu, niespotykanym już praktycznie nigdzie indziej.
- **Robotów humanoidalnych** — są potrzebne głównie tam, gdzie zainwestowano już miliardy dolarów w zautomatyzowaną linię produkcyjną zaprojektowaną pod ludzi, więc prościej wstawić w luki robota o kształcie człowieka niż przeprojektować całą linię od podstaw. Gdyby projektować linię produkcyjną od zera (greenfield), zoptymalizowaną pod przepustowość, koszt i prostotę, najprawdopodobniej wybrano by roboty nie-humanoidalne (np. na kółkach, z inaczej rozmieszczonymi manipulatorami) — jednak roboty humanoidalne mimo to pozostają obecne, choćby jako atrakcja na pokazach czy zawodach.

## Przyszłość baz wiedzy w organizacjach

Pada pytanie o przyszłość korporacyjnych baz wiedzy: czy dotychczasowe narzędzia typu Confluence/Jira zostaną zastąpione przez repozytoria kodu (Git) jako uniwersalne źródło prawdy (co sugerowałby rozwój spec-driven development), czy pozostaną dominującym rozwiązaniem, jedynie wzbogaconym o nowe narzędzia AI działające na nich.

Odpowiedź wskazuje, że obecne podejście do zarządzania wiedzą w dużych organizacjach jest silnie uzależnione od tego, **kto** z tej wiedzy korzysta. O ile niektóre zespoły są gotowe przenieść źródło prawdy bezpośrednio do repozytorium kodu i osiągają dzięki temu świetne rezultaty, o tyle klasyczne narzędzia (Wiki, Jira) są zwykle używane przez znacznie szersze i bardziej zróżnicowane grono odbiorców — menedżerów najwyższego szczebla, product managerów, projektantów, analityków różnych typów (biznesowych, systemowych, ilościowych, ryzyka), inżynierów, wsparcie (support) oraz dział QA.

## Studium przypadku: reforma dokumentacji w mobilnym banku

Rozmówca opisuje własne doświadczenie ze stanowiska dyrektora technicznego w bankowości mobilnej, gdzie od 2019 roku dokumentacja wymagań opierała się na modelu zewnętrznej organizacji (outsourcingu). Wymagania na nową wersję powstawały przez kopiowanie poprzedniej dokumentacji i dopisywanie zmian na poziomie poszczególnych ekranów, przez co dokumenty rozrastały się do gigantycznych rozmiarów, których praktycznie nikt poza wsparciem (support) nie czytał. Inżynierowie zgłaszali problemy z takim podejściem, a próba zrozumienia opisu jednego ekranu ujawniła efekt „syndromu sztokholmskiego" — ludzie, którzy latami pracowali z tym systemem, przyzwyczaili się do niego i przestali dostrzegać jego dysfunkcyjność.

Rozwiązaniem stało się przejście od opisu „po ekranach" do opisu „po funkcjach" (features), co wymagało dwóch lat planowej pracy pod przewodnictwem dedykowanej analityczki. Mimo tej zmiany organizacja nie zrezygnowała z Wiki jako narzędzia — po prostu zreorganizowano sposób grupowania informacji. Równolegle prowadzono eksperyment polegający na wdrożeniu zarządzania konfiguracją poprzez GitOps, co również okazało się bardzo trudne organizacyjnie i wymagało silnego mandatu decyzyjnego (władzy i odpowiedzialności) po stronie osoby wdrażającej zmianę.

### Dlaczego skalowanie zmiany na całą organizację jest tak trudne

Próba przeniesienia całej bazy wiedzy dużej organizacji (rzędu dziesiątek tysięcy pracowników) bezpośrednio do repozytoriów kodu (Git) jest, zdaniem rozmówcy, trudna do wyobrażenia w praktyce. Zamiast tego bardziej realistycznym kierunkiem jest budowa wewnętrznego narzędzia typu „Perplexity" — systemu indeksującego wszystkie istniejące źródła (Confluence, Wiki, GitLab Pages itd.), łączącego pełnotekstowe i semantyczne wyszukiwanie z komponentem generatywnym.

Problemem takich wewnętrznych systemów wyszukiwania jest brak pętli sprzężenia zwrotnego (feedback loop) porównywalnej z tą, jaką dysponują publiczne wyszukiwarki internetowe korzystające z metryk klikalności na dużej populacji użytkowników. Przy dziesiątkach tysięcy użytkowników wewnętrznych trudno wyciągnąć wiarygodne sygnały o trafności wyników — przykładowo wyszukiwanie „strategii IT firmy" zwraca fragmenty interpretacji różnych linii biznesowych zamiast jednego, spójnego dokumentu ogólnego, ponieważ lokalne wersje są częściej odwiedzane i tym samym wyżej indeksowane.

### Wniosek dotyczący zmiany zachowań w dużych organizacjach

Ponieważ ludzkich zachowań często nie da się szybko zmienić, praktycznym rozwiązaniem staje się dostarczenie agentom potrzebnego kontekstu za pomocą rozwiązań technicznych, a nie wymuszanie zmiany nawyków. To rozwiązanie staje się swego rodzaju punktem odniesienia (baseline), a osoby najbardziej zainteresowane wynikiem zaczynają adaptować nowe podejścia, po czym poprzez „pocztę pantoflową" rozprzestrzeniają się one dalej — zgodnie z klasyczną krzywą adopcji innowacji (Rogers/Geoffrey Moore).

### Rywalizacja narzędzi typu Confluence/Jira z nowymi rozwiązaniami

Dostawcy tacy jak Atlassian starają się repozycjonować nie tylko jako strażnicy dokumentacji, ale jako strażnicy całych przepływów pracy (workflow) i wiedzy organizacyjnej, oferując możliwość udostępniania tych danych agentom. Za granicą pojawia się jednak trend odchodzenia w stronę bardziej elastycznych narzędzi (np. Linear), pozwalających swobodniej dopasować workflow bez uzależnienia od jednego dużego dostawcy. W Rosji sytuacja jest specyficzna — z powodu ograniczeń licencyjnych i braku dostępu do rozwiązań chmurowych firmy pozostają przy lokalnie zainstalowanych wersjach Atlassiana sprzed wycofania się firmy z rynku, mimo naruszania warunków licencji, co sprawia, że rynek rosyjski może zostać przez tego dostawcę utracony, w przeciwieństwie do rynku globalnego, gdzie walka o klienta dopiero się rozegra ze względu na silny efekt uzależnienia od dostawcy (vendor lock-in).

## Metryki wdrożenia AI — trójstopniowy model

Rozmówca przedstawia szkołę myślenia dotyczącą pomiaru efektów wdrożenia narzędzi AI, złożoną z trzech poziomów.

### Poziom 1: adopcja i wykorzystanie

Pierwszym krokiem jest sprawdzenie podstawowych metryk użycia i penetracji technologii — czy ludzie, którzy otrzymali dostęp do narzędzi, faktycznie z nich korzystają, oraz jakie scenariusze pracy agentów (np. code review, naprawianie błędów) są już pokryte automatyzacją. Można też mierzyć ilość wygenerowanego kodu, jednak ta metryka jest krytykowana jako równie mało użyteczna i myląca jak klasyczne „liczba linii kodu". Odchylenia w adopcji między częściami organizacji są sygnałem do zbadania przyczyn.

### Poziom 2: pomiar czasu wykonania zadań (jobs)

Bardziej zaawansowanym podejściem jest zmapowanie typowych zadań (jobs) wykonywanych przez inżynierów — analogicznie do customer journey map — i zmierzenie czasu potrzebnego na ich realizację. Przykłady takich zadań to: tworzenie zmiany w kodzie, odkrywanie informacji o systemie, podejmowanie decyzji architektonicznej, przegląd cudzego kodu czy usuwanie incydentu.

**Przykład Google** — firma zbudowała ten proces jeszcze w 2019 roku: loguje dane z różnych narzędzi, przekształca je w zdarzenia, zdarzenia łączy w sesje powiązane z konkretnym typem pracy (identyfikator zadania lub incydentu) oraz z artefaktem (np. kodem lub pull requestem), a na tej podstawie buduje metryki. Dzięki temu Google mógł mierzyć, jak zmiany w narzędziach platformowych wpływają na czas realizacji poszczególnych zadań — np. skrócenie czasu end-to-end tworzenia i wdrożenia nowego serwisu z jednego dnia do czterech, a potem dwóch godzin.

**Przykład z własnej praktyki rozmówcy** — w jego firmie mierzono szybkość od stworzenia pull requesta do jego zmergowania, jednak nie było widać efektu pomocy AI, ponieważ zespół w ogóle nie zbierał danych o momencie rozpoczęcia pracy nad zadaniem (czyli od intencji, a nie od pierwszego commit'a) — w przeciwieństwie do Google, które potrafi zmierzyć cały łańcuch od intencji do wdrożenia i porównać go z wersją bez agenta.

Ważne zastrzeżenie: instrumentalizacja tego procesu jest bardzo skomplikowana, a zaoszczędzony czas nie przekłada się automatycznie na realny efekt biznesowy — praca, podobnie jak gaz, wypełnia całą dostępną przestrzeń czasową, więc zaoszczędzony czas może zostać po prostu „przejedzony" przez inne aktywności zamiast przełożyć się na dodatkową wartość.

### Poziom 3: zamykanie ekonomiki

Trzeci poziom polega na próbie policzenia realnej ekonomiki: ile czasu zaoszczędzono na poszczególnych zadaniach w zestawieniu z kosztem inwestycji w zespół platformowy, instrumentalizację i tokeny zużywane przez modele. Ponieważ jest to trudne, wiele firm zamiast tego posługuje się metrykami przepływu pracy — np. przepustowością zespołu (liczba zamkniętych ticketów/story pointów na jednostkę czasu) lub czasem realizacji (lead time / cycle time, time to market).

**Kluczowe zastrzeżenie — malejąca użyteczność krańcowa**: jeśli wzrost przepustowości (np. o 20%) nie towarzyszy równoczesnemu poszerzeniu lejka odkrywania wartościowych zadań (discovery), to dodatkowe zadania będą z natury mniej wartościowe niż poprzednie — zgodnie z prawem malejącej użyteczności krańcowej. Realizacja większej liczby zadań niekoniecznie przełoży się wtedy na odczuwalną wartość biznesową, ponieważ biznes „żył bez nich" wcześniej. Prawdziwa korzyść pojawia się dopiero, gdy system produkcyjny (delivery) zaczyna „wciągać" (pull) coraz większy strumień wartościowych wymagań z etapu discovery, zamiast po prostu przyspieszać realizację istniejącego zaległego zapasu (backlogu).

Rozmówca (Kirył) potwierdza to własnym przykładem — po przyspieszeniu tempa realizacji zadań w swojej firmie zespół „wyczyścił" wieloletni dług techniczny i zaległości z backlogu szybciej niż zakładano, po czym dział produktowy dostarczył ponad 200 nowych zgłoszeń w ciągu dwóch dni, co pokazuje, że wcześniej ograniczano zgłaszanie pomysłów właśnie ze względu na brak przepustowości do ich realizacji. Zwrócono uwagę, że nie każdy zespół produktowy znajduje się w fazie aktywnego wzrostu — bywa, że przy nagłym wzroście przepustowości product managerowie nie są w stanie wystarczająco szybko wymyślać nowych, wartościowych funkcji, co prowadzi do wypełniania zaoszczędzonego czasu zadaniami mało istotnymi.

### Ograniczenia replikowalności podejścia Google

Google jest firmą o unikalnej pozycji ekonomicznej (przychody z reklam pozwalają na „akademicki" sposób działania), więc nie każde rozwiązanie da się bezpośrednio powtórzyć w innych organizacjach. Niemniej podobne, choć węższe podejście zastosowała też Meta, mierząc tzw. „diffing time" dla konkretnych scenariuszy zmian produktowych:
- Wdrożenie automatyzacji testów (bettest) w starszych projektach, gdzie automatyzacji wcześniej brakowało, przyniosło mierzalne 10–15% przyspieszenia pracy nad zadaniem po stopniowym wdrożeniu (najpierw na części projektów, potem porównaniu wyników).
- W języku Hack (podobnym do PHP) wprowadzono typowanie w testach (wcześniej typowany był tylko kod produktowy) dla połowy testów i zmierzono, że typowanie pozwalało wychwycić błędy już w trakcie pisania kodu, co przełożyło się na szybszą realizację funkcji.

Podobny kontrfaktyczny eksperyment prowadzono też w mobilnym banku, gdzie analizowano, ile czasu oszczędza podejście cross-platformowe (wspólny kod na Androida i iOS) względem osobnych implementacji natywnych.

### Trudność w „sprzedaniu" inicjatywy pomiarowej wewnątrz organizacji

Rozmówca opisuje własną porażkę: gdy zaproponował swojemu przełożonemu (COO) zbudowanie systemu instrumentalizacji pracy inżynierów, usłyszał odpowiedź, że jest „zbyt akademicki" i że w okresie dużych zmian procesowych nie czas na takie pomiary. Mimo tego uważa, że posiadanie twardych metryk daje bardzo silny argument w rozmowie z ludźmi opornymi na zmianę („u mnie i tak wszystko działa") — pokazanie liczbowo, że sąsiedni zespół osiągnął lepsze wyniki dzięki zmianie podejścia, jest przekonującym narzędziem zarządzania zmianą na dużą skalę.

## Przyszłość rynku pracy i kompetencji inżynierskich

### Kontekst: redukcje zatrudnienia i niepewność co do przyszłego zapotrzebowania na ludzi

Poruszono temat obecnej fazy branży, w której z powodów ekonomicznych i wpływu AI trwają masowe zwolnienia, a zapotrzebowanie na specjalistów maleje. Pojawia się pytanie, co się stanie, gdy nastąpi kolejna fala napływu nowych pracowników i konieczność ich szkolenia — czy nastąpi degradacja umiejętności osób, które nie miały dostępu do nowych narzędzi w porównaniu z doświadczonymi specjalistami, oraz czy wiedza na „niższym poziomie" (np. rozumienie działania modeli predykcyjnych) będzie w ogóle jeszcze potrzebna.

### Brak jednoznacznej odpowiedzi z powodu zbliżającej się „osobliwości"

Zdaniem rozmówcy nie ma jednej pewnej odpowiedzi, ponieważ obecnie nakładają się na siebie rozważania operacyjne, taktyczne i strategiczne z bardzo szybkim tempem zmian technologicznych, zbliżającym branżę do swoistej „osobliwości" (singularity) — nie wiadomo, czy i kiedy pojawi się sztuczna superinteligencja i jak będzie zharmonizowana z intencjami ludzkości (nawiązanie do książki Eliezera Yudkowskiego o ryzykach superinteligencji, a także jego książki o Harrym Potterze i racjonalnym myśleniu).

### Argument w stylu zakładu Pascala

Rozmówca proponuje analogię do zakładu Pascala dotyczącego wiary w Boga: niezależnie od tego, czy nadejście superinteligencji jest pewne, racjonalną strategią jest działać tak, jakby miała nadejść — ponieważ koszt przygotowania się w scenariuszu, w którym ona nie nadejdzie, jest niski, a korzyść w scenariuszu, w którym nadejdzie, jest wysoka.

### Strategia personalna: unikanie „komodytyzacji" własnej pracy

Kluczowym pytaniem indywidualnej strategii kariery jest to, dzięki czemu dana osoba będzie się wyróżniać na tle innych w warunkach kapitalistycznej konkurencji. Jeśli czyjaś praca jako „towar" jest nieodróżnialna od pracy wielu innych osób, taka osoba trafia w „krwawy kocioł" doskonałej konkurencji — analogicznie jak kierowcy w gospodarce współdzielenia (np. Uber), gdzie nieważne kto prowadzi, ponieważ stawki i tak dążą do minimum (efekt komodytyzacji). Aby tego uniknąć, trzeba mieć odpowiedź na pytanie, co robi się lepiej niż inni — a wiedza pozwalająca skuteczniej współpracować z agentem AI może być właśnie taką przewagą.

### Problem cieknących abstrakcji

Klasyczna zasada inżynierska mówi, że każdy problem można rozwiązać przez dodanie kolejnej warstwy abstrakcji — z wyjątkiem problemu nadmiaru samych warstw abstrakcji. Jednak abstrakcje „cieknę" — gdy zdarza się coś nieprzewidzianego, a bieżący poziom abstrakcji nie pozwala dalej efektywnie pracować, konieczne staje się „zajrzenie pod maskę". Kluczowe pytanie brzmi, czy dana osoba jest w stanie to zrobić. Doświadczeni inżynierowie z wieloletnim stażem, pracujący z agentami, wciąż dysponują tą zdolnością.

## Debugowanie a nadzieja na sztuczną superinteligencję

Gdy agent napotyka problem, można albo bezrefleksyjnie próbować ponownie licząc na przypadkowe rozwiązanie, albo „zajrzeć pod maskę" — przeczytać błędy i samodzielnie podebugować. Jeśli kiedyś nadejdzie prawdziwa sztuczna superinteligencja, sama sobie z takimi problemami poradzi, ale wtedy pojawia się pytanie, jaka byłaby rola człowieka w tym procesie. Jeśli superinteligencja nie nadejdzie, umiejętność samodzielnego debugowania i rozumienia niższych warstw stanie się czynnikiem różnicującym inżyniera na tle innych.

### Dwa kierunki różnicowania się na rynku

Zamiast różnicować się „w dół" (rozumienie warstw pod abstrakcją), można różnicować się „w górę" — czyli być tak biegłym w posługiwaniu się daną abstrakcją (np. agentem AI), że wykonuje się pracę dwa razy szybciej lub lepiej, dopóki to działa, a w razie problemu wzywa się specjalistę, który pomoże. Ten wzorzec widać już dziś u product managerów, którzy szybko prototypują swoje pomysły za pomocą narzędzi AI, a lukę kompetencyjną uzupełniają, zatrudniając kogoś, kto domyka techniczne braki. Kluczowe jest świadome zdecydowanie, na czym chce się budować swoją przewagę konkurencyjną.

### Osobista motywacja rozmówcy

Rozmówca opisuje własną naturalną ciekawość działania świata od dzieciństwa — zamiłowanie do nauk ścisłych (matematyka, fizyka, chemia) przy jednoczesnej słabszej intuicji w relacjach międzyludzkich (w przeciwieństwie do żony, która potrafi mu racjonalnie wytłumaczyć zachowania dzieci). Ta skłonność do zagłębiania się w mechanizmy działania rzeczy pomaga mu dziś lepiej przewidywać trendy technologiczne — rozumiejąc powiązania między warstwami (model, infrastruktura, obwiązki agentowe), łatwiej dostrzec, gdzie jest wąskie gardło systemu i dlaczego jakieś rozwiązanie „strzeliło" na rynku mimo że koncepcyjnie miało już dekady. Dla osoby w roli technologicznego wizjonera zdolność przewidywania kierunku rozwoju „szybciej niż inni" jest wręcz zawodowym obowiązkiem.

## Zmiana modelu pracy z młodszymi programistami (junior developers)

### Stary model oceny juniorów

Wcześniej junior dostawał zadania na poziomie prostych poprawek błędów lub niewielkich funkcji, a po wykonanym artefakcie (kodzie) można było ocenić, czy praca została wykonana i czy programista czegoś się przy tym nauczył — zaliczone testy i naprawiony błąd świadczyły o realnym zrozumieniu.

### Problem w erze agentów

W pracy z agentami artefakt może istnieć, mimo że zrozumienia po stronie człowieka brak. Dlatego, jeśli firma chce faktycznie rozwijać kompetencje młodych inżynierów, powinna:
- Automatyzować proste poprawki błędów i drobne funkcje przez „loop inżynieringu" z udziałem agenta, zamiast dawać je juniorom.
- Powierzać juniorom większe zadania, które mogą realizować wspólnie z agentem.
- Weryfikować nie sam gotowy artefakt, lecz sposób interakcji z agentem — jak junior specyfikował zadanie, ustalał kryteria akceptacji i oceniał propozycje agenta.
- Sprawdzać, czego junior faktycznie się nauczył — np. prosząc go o wyjaśnienie, jak zbudowana funkcja rozwiązuje pierwotny problem, zamiast pozwalać mu po prostu przepuścić wynik pracy agenta przez pull request.

Jest to konieczne, ponieważ odpowiedzialność za wdrożoną zmianę wciąż ponosi człowiek, a nie agent — jeśli junior jedynie „karmi" zadaniem agenta i wdraża efekt bez zrozumienia, ani odpowiedzialność, ani kompetencje się nie kształtują.

### Utrata kompetencji niskopoziomowych jako naturalny proces

Rozmówca przewiduje, że młodzi inżynierowie prawdopodobnie utracą część kompetencji niskopoziomowych — analogicznie do tego, jak wcześniejsze pokolenia straciły masową umiejętność programowania w asemblerze wraz z pojawieniem się języków wysokiego poziomu. Mimo to pewien poziom odpowiedzialności pozostanie — tak jak programiści języków wysokopoziomowych wciąż odpowiadają za działanie swojego kodu. W nowym paradygmacie specyfikacje (specs) stają się „nowym kodem", a wynikowy kod — swego rodzaju „skompilowanym artefaktem", ale zrozumienie, jak to działa, wciąż pozostaje potrzebne.

## Problemy rekrutacji w erze agentów

### Dlaczego klasyczny proces rekrutacyjny się załamuje

Rekrutacja w dużych firmach technologicznych (bigtechach) tradycyjnie zbudowana jest jako swego rodzaju „taśma produkcyjna": screening, kilka etapów wywiadów technicznych, wywiad kulturowy (fit interview), oferta. Celem takiego procesu jest ocena dużej liczby kandydatów przez wielu rekruterów w sposób powtarzalny i pozbawiony błędu, przy czym priorytetem jest unikanie zatrudnienia słabego kandydata (fałszywie pozytywnego) kosztem ewentualnego odrzucenia mocnego kandydata (fałszywie negatywnego). Przy rekrutacji punktowej na konkretne stanowisko stosuje się inne, bardziej dopasowane podejście.

Problem polega na tym, że wiele tradycyjnych sygnałów rekrutacyjnych opierało się na zadaniach, które ludziom trudno było wykonać, a które dziś łatwo wykonują agenty:
- **Wywiady kodowe (algorytmy i struktury danych)** były niegdyś dobrym wskaźnikiem znajomości informatyki i sposobu myślenia kandydata. Dziś agent rozwiąże takie zadanie bez wysiłku, więc sygnał zanika.
- **Projektowanie systemów (system design)** — podobnie, agent potrafi wygenerować przekonujący opis architektury systemu, co obniża wartość tego typu wywiadu jako testu kompetencji.

### Możliwe kierunki zmian w rekrutacji

Aby zachować wartościowe sygnały, firmy musiałyby prowadzić część rozmów bez dostępu do AI, jednak trudno to skutecznie zweryfikować w trybie zdalnym (online) — sprawdzenie offline jest kosztowne i nieefektywne. Jednocześnie potrzebny byłby zupełnie nowy etap rozmowy kwalifikacyjnej oceniający, jak kandydat pracuje z narzędziami AI, ale taki etap jest trudny do ustandaryzowania i oceny — musiałby go prowadzić ktoś, kto sam dobrze rozumie temat, a różni kandydaci mogą stosować zupełnie różne przepływy pracy (np. jeden pracuje według OpenSpec, inny według GitHub Spec). Rodzi to fundamentalne pytanie: kogo właściwie się rekrutuje — inżyniera produktowego, który ma wdrażać funkcje, czy metodologa, który potrafi jasno wyjaśnić, dlaczego dane rozwiązanie działa.

### Ekonomia szkolenia juniorów

Dla wielu średnich i małych firm bardziej opłacalne stało się dziś zatrudnianie doświadczonych inżynierów wyposażonych w narzędzia AI niż inwestowanie w szkolenie juniorów — brakuje im zarówno wystarczającego strumienia zadań, jak i budżetu na proces edukacyjny. Duże firmy nadal prowadzą programy stażowe, ale bazują na bardzo silnym wstępnym filtrze (np. absolwenci programów olimpiad programistycznych), którzy już potrafią pisać kod, i uczą ich jedynie przemysłowego podejścia do rozwoju oprogramowania.

### „Tragedia wspólnego pastwiska" w skali branży

Pojawia się ryzyko efektu znanego jako tragedia wspólnych zasobów: dla pojedynczej firmy bardziej opłaca się przekupić już wyszkolonego inżyniera od konkurencji niż inwestować w szkolenie własnych juniorów, co w skali całej branży prowadzi do niedoinwestowania w kształcenie nowych kadr. Trudno to zmienić na poziomie pojedynczej organizacji, choć duże firmy — dzięki posiadanym systemom, procesom i narzędziom — potrafią efektywnie i szybko podnosić kompetencje początkujących inżynierów niemal do poziomu programisty średniego szczebla.

Rozmówca (Kirył) zauważa, że mechanizm rynkowy sam z czasem rozwiąże ten problem: gdy pojawi się realny popyt na specjalistów, z pewnym opóźnieniem dostosują się do niego systemy edukacyjne i firmy edukacyjne (w tym jego własna), choć na poziomie całej branży wciąż nie ma jasności, jaka dokładnie wiedza będzie niezbędna w przyszłości — poza tym, czego aktualnie wymagają ogłoszenia o pracę i rozmowy kwalifikacyjne.

## Osobisty przykład: praca w trybie „vibe coding"

Kirył opisuje własne doświadczenie: rozumie kod w języku Go na poziomie koncepcyjnym, ale nigdy w nim aktywnie nie programował. Rozpoczynając nowy projekt w tym języku, pracuje w trybie generowania kodu przez AI („vibe coding"), świadomie odkładając moment głębszego wniknięcia w szczegóły. Zauważa, że z każdą kolejną wygenerowaną funkcją narasta „dziura niezrozumienia" — rozumie ogólną strukturę projektu (foldery, główne komponenty), ale traci orientację w konkretnych fragmentach kodu. Prędzej czy później będzie musiał zatrzymać się, uruchomić testy i ręcznie popracować z kodem, by zbudować praktyczne wyczucie („na końcach palców") niezbędne do dalszej pracy. Otwartym pytaniem pozostaje, czy przy prostych, niewielkich zadaniach (np. bibliotece na tysiąc linii kodu) konieczne jest ręczne pisanie kodu w danym języku, czy można się bez tego obejść.

## Różnica między prostymi a złożonymi systemami w kontekście automatyzacji

### Kontrargument dotyczący prostoty systemu bankowego

W dyskusji pojawia się zastrzeżenie, że przywoływany wcześniej przykład banku mobilnego (przepisywanego przez agentów w oparciu o testy) dotyczy stosunkowo prostego systemu — bez trwałego stanu, opartego na niemal czystych funkcjach, z prostym wejściem-wyjściem bez skomplikowanych pipeline'ów. To zasadniczo różni się od bardziej złożonych systemów. Jeśli tworzy się dobrze przetestowaną bibliotekę, agent może w niej robić niemal dowolne zmiany bez ryzyka poważnych błędów — poza ewentualnymi problemami z wydajnością czy zużyciem pamięci.

### Trudność systemów z żywym stanem i danymi historycznymi

Zupełnie inaczej wygląda sytuacja w systemach z żywym stanem, np. przy migracjach danych — bezpośrednie uruchomienie takiej zmiany na produkcji zwykle kończy się źle, a potrzebne jest znacznie bardziej złożone podejście do przejścia ze starego formatu na nowy. Wszystko, co dotyczy migracji i długu technicznego (legacy), pozostaje w dużej mierze nierozwiązanym problemem. Agentowi można dać dostęp do analizy środowiska produkcyjnego, ale pojawiają się przy tym dodatkowe niuanse.

### Dlaczego agenty radzą sobie tam, gdzie warunki są jawnie zdefiniowane

Agenty są silne tam, gdzie jednoznacznie określono, co dokładnie ma robić system, w jakich granicach i jak to zweryfikować (czyli tam, gdzie istnieje wyraźna pętla sprzężenia zwrotnego). W przypadku migracji czy złożonych, mocno powiązanych zależności ludzie latami rozplątują takie „kłębki" nie tylko dlatego, że trzeba zrozumieć techniczne działanie systemu, ale też dlatego, że wymaga to swoistej „archeologii architektonicznej" — analizy kodu, wydobywania ukrytych, historycznie ukształtowanych zachowań i konsultacji z biznesem, który często sam już nie pamięta, dlaczego dany mechanizm działa tak, a nie inaczej.

### Anegdota o indyku

Zilustrowano to opowieścią o żonie, która przed pieczeniem odcina nogi indyka, bo „zawsze tak robiono w rodzinie" — dopiero pytanie prababci ujawnia, że powodem był zbyt mały garnek sprzed lat. Podobnie w systemach informatycznych bieżące, historycznie ukształtowane zachowanie bywa traktowane jako wzorzec do zachowania, mimo że nikt już nie pamięta prawdziwego uzasadnienia — a często nie ma do kogo „zadzwonić", by się tego dowiedzieć.

### Brak mechanizmu bezpiecznego wycofania się (rollback) w świecie fizycznym

W odróżnieniu od czysto programistycznych środowisk, gdzie można nieskończenie powtarzać próby i cofać stan bez efektów ubocznych, w rzeczywistości fizycznej (np. w robotyce) błąd może być nieodwracalny — analogicznie do robota, który się rozpędził i uszkodził podczas zawodów. W inżynierii oprogramowania częściej brakuje właśnie takiego „mechanizmu hamowania".

### Przykład testowania fizycznego w telekomunikacji

Podano przykład operatora telekomunikacyjnego (Megafon), który w różnych regionach zatrudnia specjalnych pracowników fizycznie testujących jakość usług — chodzących z wieloma telefonami i kartami SIM w terenie, by zweryfikować działanie sieci. Pokazuje to, że istnieją bardzo złożone, powiązane ze środowiskiem fizycznym zadania, wykraczające poza samą serwerownię, których zautomatyzowanie i całkowite wyeliminowanie czynnika ludzkiego wymagałoby ogromnego wysiłku.

## Modele świata (World Models) jako przyszły kierunek rozwoju AI

Rozmówca wspomina o interesujących próbach budowy tzw. modeli świata (world models) — koncepcji różniącej się od klasycznych modeli generatywnych przewidujących kolejne tokeny. Model świata przewiduje bezpośrednio ze stanu latentnego docelowy stan świata, będący odpowiedzią na zapytanie, pomijając etap generowania tokenów. Powołuje się na wystąpienia badacza związanego z tematem self-supervised learning (wspomniany „Coco Wejm"), a także na Yanna LeCuna, głównego naukowca Meta (zablokowanej w Rosji), znanego z promowania koncepcji world models. Ten kierunek badań obejmuje m.in. generowanie światów gier czy przewidywanie kolejnego stanu świata na podstawie procesów fizycznych i może w przyszłości pomóc w rozwiązywaniu złożonych, powiązanych ze środowiskiem problemów technicznych, choć obecnie jest to bardziej dziedzina badawcza niż mainstreamowa technologia z miliardowymi inwestycjami, jaką są dziś modele typu GPT.

### Ryzyko kolejnej fali gonitwy za mocą obliczeniową

Rozmówca żartobliwie podsumowuje, że rozwój modeli świata może wymagać kolejnego skoku mocy obliczeniowej (nawet dziesięciokrotnego), co ponownie napędzi wzrost wartości firm takich jak Nvidia, podczas gdy reszta branży będzie w pośpiechu kupować kolejne karty graficzne.

## Zakończenie rozmowy

Rozmowa kończy się podziękowaniami między prowadzącym a gościem, zaproszeniem widzów do polubienia materiału, jeśli był interesujący, wyrażenia sprzeciwu przez „dislike" w razie niezgody z poglądami gościa oraz do dzielenia się własną opinią w komentarzach.
