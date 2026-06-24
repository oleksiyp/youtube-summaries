---
title: "Cztery lata jako deweloper kwantytatywny – jak działa model wieloczynnikowy od środka"
date: "2026-06-18"
videoUrl: "https://www.youtube.com/watch?v=tzTftCzmr7k"
channelName: "The Quant Insider"
channelUrl: "https://www.youtube.com/channel/UC3qtlc2U7OevxHoDjVGj_cA"
shortDescription: "Autor dzieli się szczegółowym spojrzeniem na pracę dewelopera kwantytatywnego w funduszu inwestycyjnym – od sześcioetapowego procesu rekrutacji po architekturę całego systemu tradingowego. Wyjaśnia, jak model wieloczynnikowy łączy sygnały alfowe, zarządzanie ryzykiem, optymalizację portfela i egzekucję zleceń w jeden spójny mechanizm. Omawia kluczową rolę danych i infrastruktury technicznej – Apache Spark, Delta Lake, Parquet i KDB – pokazując, dlaczego każdy element tej układanki ma swoje konkretne uzasadnienie. Całość stanowi rzadkie, praktyczne spojrzenie na to, jak naprawdę wygląda aktywne zarządzanie aktywami od strony inżynierskiej."
tags: ["finanse ilościowe", "systemy tradingowe", "inżynieria danych", "modelowanie ryzyka", "obliczenia rozproszone", "generowanie alphy"]
tagKeys: ["quantitative-finance", "trading-systems", "data-engineering", "risk-modeling", "distributed-computing", "alpha-generation"]
---

# Cztery lata jako deweloper kwantytatywny – model wieloczynnikowy, dane i infrastruktura

## Droga do branży kwantytatywnej

### Wykształcenie i doświadczenie przed rekrutacją

Autor ukończył wydział inżynieryjny Uniwersytetu Waterloo i odbył sześć staży w dużych firmach technologicznych oraz startupach, pracując jako programista i inżynier uczenia maszynowego. Nie posiadał żadnego doświadczenia w finansach ani finansach kwantytatywnych. Po ukończeniu studiów aplikował na setki stanowisk kwantytatywnych, zanim ostatecznie otrzymał ofertę.

### Proces rekrutacyjny – sześć etapów

**Etap 1 i 2 – Zadania techniczne:**
- Pierwszy etap polegał na zbudowaniu systemu zarządzania portfelem (śledzenie zleceń, ich wykonywanie, zarządzanie pozycjami, stop-lossy, zlecenia limit).
- Drugi etap dotyczył algorytmów kombinatorycznych opartych na talii 52 kart z modyfikacjami – testował umiejętność stosowania statystyki w programowaniu.
- Autor nie rozwiązał drugiego zadania w pełni, ale dzięki **klarownemu komunikowaniu toku myślenia** przeszedł do kolejnego etapu.

**Kluczowa lekcja z etapów technicznych:** Połowa tego, czego szukają rekruterzy, to stosowanie dobrych praktyk technicznych, a druga połowa to umiejętność jasnego wyjaśniania swojego rozumowania. Doskonała komunikacja jest ważniejsza niż przeciętne umiejętności kodowania. Zalecana praktyka: rozwiązywać zadania głośno, zapisywać pseudokod, a dopiero potem implementować.

**Etap 3 – Projekt systemu i przegląd CV:**
- Rozmowa z dwoma wspólnikami firmy (atmosfera „dobry i zły policjant").
- Szczegółowe omówienie projektów z CV – kandydat musiał udowodnić, że naprawdę je realizował.
- Autor omówił projekt z zakresu uczenia maszynowego oraz własny system tradingowy, rysując na żywo architekturę systemów.
- Pytania dotyczyły inżynierii danych, struktury bazy danych oraz algorytmów (m.in. gradient boosting).

**Etapy 4–6 – Rozmowy z kolejnymi wspólnikami:**
- Każdy etap prowadził inny wspólnik z innego podzespołu działu kwantytatywnego.
- Pytania obejmowały projekt systemu, zagadnienia behawioralne, bazy danych oraz ogólną wiedzę o globalnych akcjach.

---

## Model wieloczynnikowy – szkielet całego systemu

### Podstawowa idea: alfa i przewaga nad benchmarkiem

Firmy kwantytatywne są opłacane za wyniki powyżej benchmarku (np. indeksu). Wartość dodana ponad benchmark nosi nazwę **alfy**. Zadaniem nie jest ustalenie absolutnej wartości akcji, lecz znalezienie miejsc, gdzie opinia firmy różni się od konsensusu rynkowego – i częstsze trafienie w tych rozbieżnościach niż konkurencja. **Aktywne zarządzanie to prognozowanie błędów rynku.**

### Dekompozycja zwrotów

Zwrot akcji nie jest jednolitą wartością – składa się z wielu warstw:
- Ruch całego rynku akcji
- Ruch charakterystyczny dla danego kraju
- Ruch charakterystyczny dla danej branży
- **Reszta (składnik idiosynkratyczny)** – specyficzna dla konkretnej spółki

Przez **regresję** wyjaśnia się część zwrotu czynnikami wspólnymi, a pozostała reszta to zwrot idiosynkratyczny. Nawet dla akcji silnie skorelowanych z sektorem ta reszta stanowi znaczącą część całkowitego ruchu.

### Elementy składowe modelu wieloczynnikowego

**1. Dane i sygnały**
- Źródłem są zarówno tradycyjne dane finansowe, jak i **dane alternatywne** (media społecznościowe, łańcuchy dostaw, artykuły prasowe, transakcje kartami kredytowymi, raporty brokerskie).
- Z danych buduje się **sygnały** – mierzalne poglądy na temat akcji (np. wartość, momentum, wielkość, jakość).
- Niezbędne jest wcześniejsze zdefiniowanie **wszechświata instrumentów** – zbioru spółek, którymi firma jest w stanie handlować (eliminacja mało płynnych papierów).

**2. Alfa – oczyszczona prognoza zwrotu**
- Surowy sygnał wymaga przetworzenia. Gotowa alfa to iloczyn trzech elementów:
  - **Zmienność** danej akcji
  - **Rzeczywista zdolność predykcyjna** sygnału
  - **Siła sygnału** dla konkretnej akcji w danym momencie
- Model wieloczynnikowy oznacza jednoczesne uruchamianie wielu takich czynników, z których każdy uchwytuje inną, niezależną przewagę.

**3. Model ryzyka**
- Działa równolegle do systemu alfy, nie po nim.
- Odpowiada na pytanie: ile będzie kosztować dany zwrot w kategoriach zmienności?
- Używa tej samej dekompozycji: ekspozycja na czynniki wspólne (branże, indeksy ryzyka) plus składnik specyficzny.
- **Dlaczego czynniki, a nie bezpośrednie pary akcji?** Dla 1400 spółek liczba par wynosi ~980 000 – niemożliwe do wiarygodnego oszacowania. Przy założeniu ~65 czynników wspólnych potrzeba jedynie ~2000 kowariancji. To jedyny sposób, aby matematyka była wykonalna.

**Dwie kluczowe intuicje dotyczące ryzyka:**
- Ryzyko portfela jest **mniejsze** niż ważona suma ryzyk składowych (dywersyfikacja). Ryzyko specyficzne można zdywersyfikować, ryzyko systematyczne – nie.
- Wariancja rośnie **liniowo** z czasem, więc ryzyko rośnie proporcjonalnie do **pierwiastka kwadratowego z czasu**. Stąd miesięczną zmienność przelicza się na roczną, mnożąc przez √12, nie przez 12.

**4. Budowa portfela**
- Optymalizator bilansuje: maksymalizację oczekiwanego zwrotu, minus kara za ryzyko, minus koszty transakcyjne – przy zachowaniu ograniczeń (limity pozycji, neutralność sektorowa, limity rotacji, dźwignia).
- Wynikiem jest **portfel docelowy** – konkretne liczby akcji do posiadania.

**5. Implementacja i handel**
- Filozofia: **odjąć jak najmniej wartości**. Każda transakcja uszczupla część alfy.
- Rodzaje kosztów transakcyjnych:
  - Prowizja dla brokera
  - Spread bid-ask (koszt podróży w obie strony)
  - **Wpływ rynkowy** – kupno dużej liczby akcji przesuwa cenę niekorzystnie (analogia do zasady nieoznaczoności Heisenberga w fizyce)
  - Koszt alternatywny – zlecenie, na które czekano, a które „uciekło"
- Pomiar efektywności: **implementation shortfall** – różnica między hipotetycznym portfelem bez kosztów a portfelem rzeczywistym.

**6. Analiza wyników**
- Dekompozycja tego, co się wydarzyło: ile pochodziło z zamierzonych zakładów czynnikowych, ile z ograniczeń, ile z szumu.
- Cel: oddzielenie umiejętności od szczęścia i identyfikacja, gdzie leży rzeczywista przewaga.
- Wyniki zasilają z powrotem badania, bo **czynniki zawsze tracą na wartości** – gdy inni je odkryją, przewaga zanika.

### Fundamentalne prawo aktywnego zarządzania

Dwie kluczowe miary:
- **Współczynnik informacji (IR)** = aktywny zwrot / aktywne ryzyko – karta wyników menedżera.
- **Fundamentalne prawo aktywnego zarządzania**: IR ≈ umiejętność × √szerokość, gdzie szerokość to liczba **niezależnych** zakładów.

Model wieloczynnikowy to **maszyna do generowania szerokości** – umożliwia stawianie tysięcy małych, niezależnych, nieznacznie korzystnych zakładów każdego dnia na całym rynku.

---

## Dane i sygnały – szczegółowe omówienie

### Czyszczenie i harmonizacja danych

Dane nigdy nie przychodzą czyste. Praca obejmuje:
- Weryfikację wartości odstających w odniesieniu do innych źródeł
- Uzupełnianie luk i poprawianie formatów
- Uzgadnianie różnych systemów identyfikacji między dostawcami (ISIN, CUSIP, identyfikatory Bloomberg)

### Dopasowywanie papierów wartościowych

- Proces mapowania podmiotów z zakupionego zbioru danych na wewnętrzne identyfikatory firmy (np. adres URL apple.com → oficjalny identyfikator Apple).
- Kluczowa zasada: **punkt w czasie** (*point in time*) – identyfikator jest ważny tylko w konkretnym okresie historycznym, co zapobiega **błędowi wyprzedzenia** (*look-ahead bias*). Identyfikatory mogą się zmieniać np. w wyniku fuzji i przejęć.
- Zbiory danych mają często kilka terabajtów – wymagają przetwarzania rozproszonego (Spark) oraz szybkich transformacji (Polars, NumPy).

### Ładowarki danych

- Automatycznie pobierają zaktualizowane dane od dostawcy (codziennie, tygodniowo lub miesięcznie).
- Wykonują niezbędne transformacje i agregacje, a następnie zapisują dane do wewnętrznej bazy.
- Jeśli ładowarka nie działa – czynnik tradingowy oparty na tych danych zostaje wstrzymany. **Niezawodność jest krytyczna.**

### Audyt danych

- Systemy automatycznego monitorowania statystyk kolumn i pokrycia papierów wartościowych w nowych plikach.
- Przekroczenie progów odchylenia wywołuje alert dla odpowiedzialnego pracownika.
- Zasada: wykryć błąd **jak najwcześniej i jak najbliżej źródła**.

---

## Produkcjonalizacja czynników tradingowych

### Praca dewelopera kwantytatywnego przy czynnikach

- Autor współpracował z badaczami (quant researchers), przenosząc ich kod badawczy (głównie w języku R) do produkcji w Pythonie, Sparku lub KDB.
- Pracował nad około sześcioma projektami badawczymi przez trzy lata.
- Większość modeli opierała się na **regresji lub gradient boosting**, a nie na sieciach neuronowych.
- Pełny przebieg historyczny (5–15 lat danych) dzięki przetwarzaniu rozproszonemu zajmuje ok. pół dnia do jednego dnia.

### Okno czasowe w produkcji

- Modele wieloczynnikowe aktualizowane są **codziennie**.
- Przy handlu globalnymi akcjami istnieje wąskie okno: po zamknięciu rynku w Nowym Jorku firma ma kilka godzin, aby uruchomić model przed otwarciem rynku w Japonii.

### Dokumentacja i współpraca

- Każdy projekt był opisany w dokumencie metodologicznym (Word), który służył jako centralne źródło wiedzy dla całego zespołu (badacz, deweloper, tester, starsi wspólnicy).
- Dokumentacja jest niezbędna, bo czynniki wymagają przyszłych projektów badawczych w celu naprawy lub poprawy wyników.
- Menedżerowie portfela obserwowali efektywność małych zespołów projektowych i utrzymywali te o najlepszej dynamice pracy.

---

## Infrastruktura – migracja do chmury i silniki przetwarzania

### Przejście z serwerów lokalnych na chmurę

Firma początkowo posiadała własne serwery w biurze. Wzrost zespołu, danych i złożoności obliczeń wymusił migrację do chmury. Autor przeprowadził znaczną część tej migracji, korzystając z **AWS** (EC2, ECR, S3) i **Databricks**.

### Apache Spark – silnik przetwarzania rozproszonego

Spark to rozproszony, działający w pamięci silnik przetwarzania danych:
- **Sterownik** (*driver*) – „mózg" systemu, trzyma program i buduje plan wykonania.
- **Executory** – „robotnicy" rozmieszczeni w klastrze, wykonujący obliczenia równolegle.
- Dane dzielone są na **partycje**, każdy executor przetwarza swoje partycje jednocześnie – stąd przyspieszenie.

#### Leniwe wykonanie i optymalizator Catalyst

Spark nie wykonuje transformacji natychmiast po ich zdefiniowaniu – buduje **graf kroków** (plan wykonania) i uruchamia obliczenia dopiero w momencie wywołania akcji (np. zapisania wyniku lub zliczenia wierszy). To **leniwe wykonanie** (*lazy evaluation*) pozwala optymalizatorowi Catalyst przeanalizować cały plan i przepisać go tak, aby był jak najbardziej efektywny:
- filtry są „wciskane" jak najgłębiej – Spark czyta tylko potrzebne dane,
- kolejność złączeń jest optymalizowana automatycznie,
- żaden bajt nie jest przetwarzany, zanim plan nie zostanie ostatecznie zatwierdzony.

#### Przetwarzanie w pamięci i odporność na błędy

W przeciwieństwie do starego modelu MapReduce, który zapisywał wyniki pośrednie na dysku między każdym krokiem, Spark **trzyma dane w pamięci** przez cały czas trwania potoku obliczeniowego. Dzięki temu jest często rząd wielkości szybszy dla wieloetapowych potoków danych. Jednocześnie Spark jest **odporny na błędy** – zapamiętuje pełną genealogię transformacji (*lineage*), więc jeśli maszyna padnie, potrafi odtworzyć utracone dane bez przerywania całego zadania.

#### Shuffle – najdroższy element

Operacje takie jak złączenia (*joins*) i grupowania (*group by*) wymagają przemieszczenia danych między maszynami, aby powiązane rekordy znalazły się razem. Ten ruch przez sieć, zwany **shufflem**, jest najkosztowniejszą operacją. Większość optymalizacji Sparka sprowadza się do minimalizowania i kontrolowania shuffli.

#### Praktyczny przykład – przetwarzanie terabajtowych danych alternatywnych

Typowy przepływ pracy w firmie kwantytatywnej wyglądał następująco:
1. Spark wczytuje z S3 partycjonowane pliki o rozmiarze kilku terabajtów.
2. Filtry dat i kolumn są „wepchnięte" do źródła – system pobiera tylko to, co niezbędne.
3. Transformacje (czyszczenie, agregacje, obliczanie cech) uruchamiane są równolegle na każdej partycji.
4. Dopasowanie papierów wartościowych realizowane jest jako **broadcast join** – mała tabela mapowań rozsyłana jest do każdego executora, dzięki czemu złączenie odbywa się lokalnie bez kosztownego shuffla.
5. Wyniki są partycjonowane według daty i zapisywane do tabeli Delta Lake, gotowej do wykorzystania przez czynnik tradingowy.

Historyczny przebieg, który na jednej maszynie trwałby kilka dni, dzięki Sparkowi zajmuje zaledwie kilka godzin.

---

## Przechowywanie danych – dwa filary architektury

### Parquet i Delta Lake – magazyn badań i przetwarzania wsadowego

**Parquet** to kolumnowy format plików. W odróżnieniu od tradycyjnych baz wierszowych, przechowuje każdą kolumnę osobno. Ma to ogromne znaczenie dla pracy kwantytatywnej, gdzie zapytania zazwyczaj dotyczą kilku kolumn na milionach wierszy:
- odczytywane są **tylko potrzebne kolumny**,
- zbliżone wartości siedzące obok siebie umożliwiają **doskonałą kompresję**,
- można pomijać całe bloki pliku, które na pewno nie spełniają filtra.

**Delta Lake** to warstwa transakcyjna nałożona na zestaw plików Parquet, która dodaje:
- **gwarancje ACID** – zapis albo w całości się powiedzie, albo w ogóle nie nastąpi; czytelnicy nigdy nie widzą połowicznie zapisanej tabeli,
- **wymuszanie schematu** – błędne dane nie wkradają się po cichu,
- **wersjonowanie i podróż w czasie** (*time travel*) – można zapytać tabelę o stan dokładnie z dowolnej przeszłej daty.

#### Dlaczego to idealne rozwiązanie dla danych kwantytatywnych?

- Dane są **partycjonowane według daty** – czynnik potrzebujący ostatnich 10 lat kilku pól skanuje wyłącznie odpowiednie partycje i kolumny.
- Codzienne aktualizacje to **jedynie dołączenie nowej partycji** – szybkie i tanie.
- **Wersjonowanie** bezpośrednio realizuje wymóg *point in time* – przy obliczeniach historycznych system widzi dane takie, jakimi były w danym momencie, a nie w postaci późniejszych korekt. Jeśli dostawca zmieni historyczne dane, wystarczy nadpisać konkretne partycje.
- Dane leżą na **tanim przechowywaniu obiektowym** (np. S3), a przepustowość odczytu i zapisu skaluje się wraz z rozmiarem klastra.

### KDB i język Q – silnik czasu rzeczywistego

**KDB** to zupełnie inny rodzaj technologii – **kolumnowa baza danych czasu rzeczywistego, działająca w pamięci**, zaprojektowana od podstaw dla danych finansowych: ogromnych strumieni ostemplowanych czasem zdarzeń (ticków, kwotowań, transakcji).

**Język Q** jest zwięzły i wektoryzowany – małe wyrażenia operują na całych kolumnach naraz, podobnie jak NumPy, działając bardzo blisko warstwy sprzętowej.

#### Kluczowa przewaga KDB – złączenie „na moment"

Dla każdej transakcji należy znaleźć kwotowanie, które obowiązywało dokładnie w tamtym momencie. Ta operacja jest wszechobecna w finansach i dramatycznie wolna w tradycyjnych bazach. W KDB jest **wbudowaną, błyskawiczną operacją pierwszej klasy** – to główny powód, dla którego wiele funduszy hedgingowych nadal buduje na nim rdzeń swojej infrastruktury, mimo że jest to stara, niszowa technologia.

#### Zastosowanie w firmie autora

KDB stanowił **kręgosłup żywego modelu tradingowego** i był uruchamiany w połączeniu z **HTCondor** – harmonogramem zadań, który rozdziela pracę obliczeniową na siatce maszyn. KDB przechowywał i serwował dane szeregów czasowych z dużą szybkością, a HTCondor dystrybuował właściwe obliczenia modelowe po klastrze.

---

## Porównanie – kiedy co stosować?

| Kryterium | Parquet + Delta Lake | KDB |
|---|---|---|
| Przeznaczenie | Badania, przetwarzanie wsadowe | Handel na żywo, szeregi czasowe |
| Skalowalność | Horyzontalna, tania (S3) | Ograniczona, droga |
| Szybkość | Wysoka dla dużych skanów | Ekstremalna dla operacji czasowych |
| Wersjonowanie | Wbudowane | Brak natywnego |
| Złączenie na moment | Wolne | Natywne, błyskawiczne |

Większość firm stosuje **obie technologie jednocześnie**, bo rozwiązują dwa różne problemy. To nie konkurencja, lecz uzupełnienie.

---

## Spójność całego systemu

Cały opisany system tworzy jeden połączony organizm, w którym każdy element istnieje z konkretnego powodu i jest ściśle powiązany z pozostałymi:
- **Blok danych** obejmuje dopasowywanie papierów wartościowych, ładowarki i audyt danych.
- **Blok alfy** realizuje się przez potok badań przenoszonych do produkcji.
- **Infrastruktura i bazy danych** – Spark, Parquet, Delta Lake i KDB – to fundament, który sprawia, że cały system działa na czas.

To właśnie tak wygląda praca dewelopera kwantytatywnego od środka – nie jako zbiór niezwiązanych zadań, lecz jako ciągła praca nad kolejnymi blokami tej samej, wielkiej maszyny.
