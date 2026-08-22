---
title: "Od ruchów Browna do bilionów dolarów — jak fizyka podbiła rynki finansowe"
date: "2024-04-08"
videoUrl: "https://www.youtube.com/watch?v=c-yf4nLgq2Q"
channelName: "Vert Dider"
channelUrl: "https://www.youtube.com/channel/UCY6zVRa3Km52bsBmpyQnk6A"
shortDescription: "Opowieść o tym, jak model Blacka–Scholesa–Mertona wyrósł z równania przewodnictwa cieplnego, ruchów Browna i zapomnianej rozprawy doktorskiej Louisa Bacheliera, by stać się fundamentem współczesnych rynków instrumentów pochodnych. Poznasz mechanikę opcji, ideę hedgingu dynamicznego Edwarda Thorpa oraz przyczyny eksplozji rynku wartego setki bilionów dolarów. Historia pokazuje też drugą stronę medalu: dźwignię finansową w przypadku GameStop i rolę derywatów w pogłębianiu kryzysów. Na koniec przyglądamy się Jimowi Simonsowi i funduszowi Medallion, którego wyniki podważają hipotezę rynku efektywnego."
tags: ["finanse ilościowe", "instrumenty pochodne", "matematyka finansowa", "efektywność rynku", "rachunek prawdopodobieństwa"]
tagKeys: ["quantitative-finance", "derivatives", "financial-mathematics", "market-efficiency", "probability-theory"]
---

# Równanie, które zmieniło rynki finansowe — od fizyki do bilionów dolarów

## Wprowadzenie: fizyka u podstaw finansów

Jedno równanie — **model Blacka–Scholesa–Mertona** — dało początek czterem branżom o wartości bilionów dolarów i całkowicie zmieniło globalne podejście do ryzyka. Jego korzenie sięgają zaskakująco odległych dziedzin: fizyki cząstek i odkrycia atomów, równania przewodnictwa cieplnego oraz... sposobu na ogranie kasyna w blackjacku. Nic dziwnego, że wśród najlepszych graczy giełdowych obok doświadczonych traderów znajdują się fizycy, matematycy i naukowcy.

### Dwa kontrastujące przykłady

- **Jim Simons** – w 1988 roku profesor matematyki założył fundusz Medallion. Przez kolejne 30 lat fundusz osiągał średnią stopę zwrotu **66% rocznie**, znacznie przewyższając rynek. Simons stał się prawdopodobnie najbogatszym matematykiem świata.
- **Isaac Newton** – doskonała znajomość matematyki nie gwarantuje sukcesu. Około 1720 roku Newton, dysponując majątkiem ok. 30 tys. funtów (dziś równowartość ok. 6 mln dolarów), zainwestował w akcje Kompanii Mórz Południowych. Kupował na szczycie, dokupował po spadkach, licząc na okazję — i stracił niemal jedną trzecią majątku. Sam podsumował to słowami, że potrafi obliczyć ruch ciał niebieskich, ale nie ludzkie szaleństwo.

## Louis Bachelier i narodziny matematyki finansowej

### Droga do giełdy

Louis Bachelier (ur. 1870) po śmierci rodziców przejął rodzinny interes winiarski, sprzedał go i przeniósł się do Paryża, gdzie studiował fizykę i podjął pracę na paryskiej giełdzie. Panujący tam chaos — krzyczący traderzy, gestykulacja, błyskawiczne transakcje — był dokładnie tym „ludzkim szaleństwem”, o którym mówił Newton. Najbardziej zaintrygowały go **opcje**.

### Czym są opcje — historia i mechanika

Pierwsze znane wykorzystanie opcji przypisuje się **Talesowi z Miletu**. Przewidując obfite zbiory oliwek, zapłacił właścicielom pras z góry za prawo do wynajęcia ich latem po ustalonej cenie. Gdy zbiory rzeczywiście okazały się rekordowe, a ceny wynajmu poszybowały, Tales podnajął prasy drożej i zainkasował różnicę — była to pierwsza w historii **opcja kupna (call)**.

- **Opcja kupna (call)** – daje prawo, ale nie obowiązek, kupna aktywa po z góry ustalonej **cenie wykonania**. Opłacalna, gdy spodziewamy się wzrostu cen.
- **Opcja sprzedaży (put)** – daje prawo, ale nie obowiązek, sprzedaży aktywa po cenie wykonania. Opłacalna przy oczekiwanych spadkach.
- **Opcje amerykańskie** można wykonać w dowolnym momencie do wygaśnięcia; **europejskie** — wyłącznie w dniu wygaśnięcia.

**Przykład:** akcje Apple kosztują 100 dolarów. Za 10 dolarów kupujemy opcję dającą prawo nabycia akcji po 100 dolarów za rok.
- Jeśli cena wzrośnie do 130 – kupujemy po 100, sprzedajemy po 130, po odjęciu kosztu opcji zysk wynosi 20 dolarów.
- Jeśli cena spadnie do 70 – po prostu nie korzystamy z opcji i tracimy tylko 10 dolarów.

### Trzy zalety opcji

1. **Ograniczenie strat** – maksymalna strata to cena zapłacona za opcję, podczas gdy przy zakupie akcji można stracić całą zainwestowaną kwotę.
2. **Dźwignia finansowa** – 30 dolarów zysku na akcji to 30% zwrotu; te same 30 dolarów przy opcji kosztującej 10 to 200% zwrotu (choć ryzyko utraty 100% wkładu również rośnie).
3. **Zabezpieczenie ryzyka** – opcje działają jak polisa ubezpieczeniowa; gdy pojawił się popyt na taką ochronę, znaleźli się też chętni, by ją sprzedawać — tak powstał rynek.

### Problem wyceny

Przez setki lat nikt nie wypracował sensownej metody wyceny opcji — traderzy po prostu targowali się, aż osiągnęli akceptowalną cenę. Bachelier uznał, że rozwiązanie leży w rachunku prawdopodobieństwa i uczynił z tego temat rozprawy doktorskiej pisanej pod kierunkiem **Henriego Poincarégo**, który — mimo egzotyczności tematu — zatwierdził go.

### Rynek jako błądzenie losowe

Cena akcji to efekt „przeciągania liny” między kupującymi a sprzedającymi, na który wpływa praktycznie wszystko: pogoda, polityka, konkurencja, innowacje. Bachelier uznał, że tych czynników nie da się przewidzieć, więc w każdej chwili cena może równie dobrze wzrosnąć, jak spaść — porusza się **losowo, jak przy rzucie monetą**.

**Efektywność rynku:** rynek efektywny to taki, na którym nie da się zarobić na spekulacji. Im więcej ludzi próbuje przewidywać przyszłość i na tym zarabiać, tym bardziej nieprzewidywalny staje się rynek — bo sama prognoza wpływa na dzisiejsze ceny. Jeśli wiemy, że coś podrożeje jutro, kupujemy dziś, a cena rośnie natychmiast.

**Deska Galtona jako model:** kulki spadające przez rzędy kołków skręcają losowo w lewo lub prawo. Ścieżki pojedynczych kulek są nieprzewidywalne, ale ich rozkład końcowy tworzy **rozkład normalny** — najwięcej kulek w środku, bo prowadzi tam najwięcej możliwych ścieżek. Każdy rząd kołków odpowiada interwałowi czasowemu: im dłuższy horyzont, tym szerszy możliwy zakres cen.

### Nieoczekiwane pokrewieństwo z fizyką

Bachelier zauważył, że wyprowadził na nowo **równanie przewodnictwa cieplnego** odkryte przez Fouriera w 1822 roku — opisujące przepływ ciepła z obszarów cieplejszych do chłodniejszych. U Bacheliera było to „rozprzestrzenianie się prawdopodobieństw”. Ponieważ praca dotyczyła finansów, fizycy jej nie zauważyli.

## Ruchy Browna i potwierdzenie istnienia atomów

- **1827** – botanik **Robert Brown** obserwował pod mikroskopem pyłek poruszający się chaotycznie w wodzie. Sprawdziwszy, że tak samo zachowują się cząstki jednoznacznie nieożywione (pył meteorytowy, skały wulkaniczne), stwierdził, że każda wystarczająco mała cząstka porusza się losowo. Przyczyna pozostawała nieznana przez 80 lat.
- **1905** – **Albert Einstein** wyjaśnił zjawisko: cząstkę popychają z różnych stron cząsteczki cieczy; gdy z jednej strony uderza ich więcej, cząstka wyraźnie się przesuwa. Skoro cząsteczek nie widać, ruch w każdym kierunku jest jednakowo prawdopodobny.

Zarówno ceny giełdowe, jak i mikroskopijne cząstki zachowują się więc jak kulka na desce Galtona — ich oczekiwane położenie opisuje rozkład normalny poszerzający się w czasie (**dyfuzja**). Rozwiązując zagadkę ruchów Browna, Einstein potwierdził realne istnienie atomów i cząsteczek — nie mając pojęcia, że Bachelier opisał błądzenie losowe pięć lat wcześniej.

## Wycena opcji według Bacheliera

Bachelier wyprowadził matematyczny sposób wyceny opcji:
- Kupujący opcję zarabia, gdy cena akcji wzrośnie o więcej niż koszt opcji.
- Sprzedający zarabia, gdy do tego nie dojdzie.
- Mnożąc zysk lub stratę przez prawdopodobieństwo każdego scenariusza, obliczył oczekiwaną rentowność opcji.

**Cena sprawiedliwa** to według niego taka, przy której oczekiwane zyski kupujących i sprzedających są równe. Bachelier wyprzedził Einsteina w opisie błądzenia losowego i rozwiązał problem, który przez wieki opierał się traderom — ale nikt tego nie zauważył. Fizyków to nie interesowało, a traderzy nie byli gotowi: brakowało praktycznego sposobu, by na tym zarobić.

## Edward Thorp: od blackjacka do giełdy

Pod koniec lat 50. młody fizyk **Edward Thorp** pisał doktorat w Los Angeles, kilka godzin drogi od rozkwitającego Las Vegas.

- Przy stole do blackjacka krupierzy używali wtedy jednej talii, więc Thorp zapamiętywał wyłożone karty i na tej podstawie oceniał swoje szanse — obstawiał więcej przy korzystnym układzie, mniej przy niekorzystnym. Tak powstało **liczenie kart**.
- Kasyna rozgryzły jego strategię i dodały kolejne talie, by utrudnić liczenie. Thorp przeniósł więc swoje umiejętności na giełdę i założył fundusz, który przez 20 lat przynosił **20% zysku rocznie** — najlepszy ówczesny wynik.

### Hedging dynamiczny

Thorp zaproponował zabezpieczanie się przed stratami przez operacje kompensujące:

- Bob sprzedaje Alice opcję kupna na jedną akcję. Za każdego dolara wzrostu ceny akcji Bob traci dolara na opcji.
- Może to skompensować, posiadając akcję tej samej spółki — strata na opcji jest odrabiana wzrostem wartości akcji.
- Gdy cena spada, Bob sprzedaje akcję, by nie tracić.

To właśnie **hedging dynamiczny**: portfel jest „zerowy” pod względem ryzyka, jeśli wartość opcji w każdej chwili jest kompensowana odpowiednią liczbą akcji, określaną przez **współczynnik delta** (relacja zmiany wartości opcji do zmiany wartości akcji). Jak ujmuje to sam Thorp: można w praktyce sprzedać komuś coś, faktycznie nic nie sprzedając — opcja pojawia się „znikąd”, dopóki prowadzi się dynamiczny handel i hedging.

### Własny model wyceny

Thorp nie przyjął modelu Bacheliera wprost: zauważył, że akcje w sprzyjających warunkach z czasem rosną, a w niesprzyjających spadają — czego Bachelier nie uwzględniał. Swój dokładniejszy model opracował w połowie 1967 roku i przez sześć lat korzystał z niego wyłącznie on i jego inwestorzy. **Strategia:** kupować opcje wycenione poniżej wartości modelowej, szybko sprzedawać (grać przeciw) te wycenione powyżej.

## Równanie Blacka–Scholesa–Mertona (1973)

Fischer Black i Myron Scholes (z wkładem Roberta Mertona, który zastosował rachunek stochastyczny) opublikowali równanie, które odwróciło wszystko do góry nogami. Thorp przyznaje: „Myślałem, że działam na tym polu sam, ale niestety Black i Scholes opublikowali swoje rozważania, a ich model okazał się lepszy od mojego”.

### Logika modelu

- Podobnie jak Bachelier, autorzy przyjęli, że cena opcji powinna dawać kupującym i sprzedającym równe szanse.
- Kluczowa nowość: jeśli zbudować **portfel bezryzykowny** złożony z opcji i akcji (to samo, co osiągał Thorp hedgingiem dynamicznym), to na efektywnym rynku jego rentowność nie może przekraczać zwrotu z papierów bezpiecznych, jak obligacje skarbowe USA. Bez dodatkowego ryzyka nie powinno być dodatkowego zysku.
- Zmiana ceny akcji w czasie składa się z losowej fluktuacji i ogólnego trendu rynkowego (ulepszona wersja modelu Bacheliera).

Połączenie tych elementów dało najsłynniejsze równanie w finansach, wyceniające dowolny instrument pochodny oparty na akcjach, obligacjach czy czymkolwiek innym. W roku publikacji powstała **Chicago Board Options Exchange**.

### Dlaczego to było tak przełomowe

- To **równanie różniczkowe cząstkowe** dające jasny wzór na wartość opcji jako funkcję określonych parametrów wejściowych.
- Po raz pierwszy giełda dostała formułę, do której można podstawić liczby i otrzymać wynik bezpośrednio użyteczny w handlu.
- Był to pierwszy przypadek w historii nauk społecznych, gdy rynek tak błyskawicznie przyswoił dorobek akademicki — w ciągu kilku lat model stał się standardem na Wall Street.

## Skala i konsekwencje

### Eksplozja rynku instrumentów pochodnych

- Rynek opcji rozkwitł; obraca się na nim dziś biliony dolarów, a jego wielkość podwaja się mniej więcej co pięć lat — finansowy odpowiednik **prawa Moore'a**.
- Podobnie rosły rynki **swapów kredytowych (CDS)**, **pozagiełdowych instrumentów pochodnych** i **zabezpieczonych zobowiązań dłużnych (CDO)** — wszystkie wielobilionowe i wszystkie w jakiejś formie korzystające z zasady Blacka–Scholesa.
- Szacowana wartość światowego rynku instrumentów pochodnych to **setki bilionów dolarów** — wielokrotnie więcej niż wartość aktywów bazowych, na których się opierają. Dzieje się tak, ponieważ opcje pozwalają „wykorzystać” aktywo bazowe pięcio-, dziesięcio- czy dwudziestokrotnie, tworząc mnóstwo wariantów o różnych profilach ryzyka i zwrotu, atrakcyjnych dla różnych inwestorów.

### Zastosowania praktyczne

Dziś opcji używają nie tylko fundusze hedgingowe, ale też wielkie korporacje, rządy i inwestorzy indywidualni. **Przykład:** linia lotnicza obawiająca się wzrostu cen paliwa może kupić opcję powiązaną z ceną ropy — jeśli ropa drożeje, zysk z opcji kompensuje wyższe koszty paliwa.

### Dźwignia i przypadek GameStop

Model daje też potężną dźwignię. Wartość akcji GameStop wzrosła o setki procent, gdy grupa użytkowników internetowego forum postanowiła „ukarać” fundusze grające na spadek spółki:
- Sam zakup akcji nie wystarczał — za daną kwotę można kupić ograniczoną ich liczbę.
- Kupując zamiast tego opcje, można wpłynąć na znacznie większą liczbę akcji: wydając 1 dolara, uzyskuje się efekt zakupu akcji za 20.
- Połączenie skupu akcji i opcji gwałtownie wywindowało cenę, a fundusze hedgingowe błyskawicznie poniosły ogromne straty.

### Wpływ na globalną gospodarkę

- **W normalnych warunkach** rynki instrumentów pochodnych są dobrym źródłem **płynności**, a więc i stabilności.
- **W warunkach kryzysowych** instrumenty te mają tendencję do ruchu w jedną stronę (zwykle w dół); ich jednoczesne załamanie pociąga za sobą cały rynek i może pogłębić już istniejące problemy.

### Uznanie

W 1997 roku **Merton i Scholes** otrzymali Nagrodę Nobla z ekonomii. Zasługi Fischera Blacka również uznano, ale zmarł on dwa lata wcześniej.

## Jim Simons i Renaissance Technologies

Gdy wzór stał się powszechnie znany, fundusze musiały szukać nowych obszarów nieefektywności rynku.

### Naukowiec przed finansistą

Zanim Jim Simons wszedł w świat papierów wartościowych, był wybitnym matematykiem. Jego osiągnięcia w geometrii różniczkowej znalazły zastosowanie w teorii węzłów, kwantowej teorii pola i informatyce kwantowej, a **teoria Cherna–Simonsa** stała się jednym z fundamentów teorii strun. W 1976 roku otrzymał amerykańską nagrodę za osiągnięcia w geometrii — ale u szczytu kariery naukowej zapragnął nowych wyzwań.

### Rynek jako szyfr

- W 1978 roku założył **Renaissance Technologies** z zamiarem szukania prawidłowości giełdowych metodami uczenia maszynowego.
- Kluczem było zgromadzenie ogromnych zbiorów danych — wówczas ręcznie: „Chodziliśmy do Rezerwy Federalnej i przepisywaliśmy historyczne dane o stopach procentowych; nic nie było przechowywane cyfrowo”.
- Simons zakładał, że rynek jest zbyt złożony, by cokolwiek pewnie prognozować, ale w czasie zimnej wojny pracował w Institute for Defense Analyses, gdzie łamał sowieckie szyfry, szukając wzorców w wielkich zbiorach danych. Uznał, że rynek można potraktować tak samo.

### Rekrutacja

Dzięki kontaktom akademickim Simons ściągnął najlepszych naukowców. Kryteria były specyficzne: **nie musieli znać się na finansach**. Szukano fizyków z doktoratem obronionym kilka lat wcześniej i kilkoma porządnymi publikacjami, a także astronomów, matematyków i statystyków — ludzi z udokumentowanymi sukcesami naukowymi.

Dlaczego naukowcy garną się do tej branży? Po pierwsze, zarobki na giełdzie znacznie przewyższają uniwersyteckie pensje. Po drugie, dla części matematyków wycena instrumentów finansowych jest równie fascynująca jak inne problemy w ich dziedzinie.

### Ukryte modele Markowa

Jednym z rekrutów był **Leonard Baum**, współtwórca **ukrytych modeli Markowa**. Analogia jest wymowna: tak jak Einstein zrozumiał, że widoczny ruch pyłku potwierdza istnienie niewidocznych atomów, tak Baum dostrzegł, że ukryte modele Markowa pozwalają wykryć niewidoczne czynniki przez ich wpływ na procesy obserwowalne. Na tej podstawie Renaissance stworzył fundusz **Medallion** — najbardziej rentowny znany fundusz inwestycyjny w historii.

## Czy hipoteza rynku efektywnego jest fałszywa?

Bradford Cornell z Uniwersytetu Kalifornijskiego w artykule o funduszu Medallion dochodzi do wniosku, że hipoteza efektywnego rynku może być z gruntu błędna. Podobnie brzmi wniosek badania z 1988 roku na przykładzie giełdy amerykańskiej: w danych o cenach papierów wartościowych istnieją elementy przewidywalne — **rynek można ograć**, jeśli dysponuje się właściwym modelem, przygotowaniem, zasobami i mocą obliczeniową.

## Podsumowanie

Ludźmi, którzy odkrywali prawidłowości rynku finansowego — a także jego losowość — okazali się przede wszystkim **fizycy i matematycy**. Ich wpływ wykracza daleko poza osobiste wzbogacenie: modele dynamiki rynku pozwoliły spojrzeć na ryzyko w nowy sposób, stworzyły fundament pod nowe rynki i ustaliły, jak wyceniać instrumenty pochodne — czyniąc rynek bardziej efektywnym.

Kryje się w tym paradoks: gdybyśmy kiedykolwiek odkryli wszystkie prawidłowości rynku papierów wartościowych, tym samym byśmy je wyeliminowali. Otrzymalibyśmy wreszcie idealnie efektywny rynek, na którym pozostałyby wyłącznie zmiany czysto losowe.
