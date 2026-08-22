---
title: "Nobel z chemii 2024: jak sieci neuronowe rozwiązały zagadkę zwijania białek"
date: "2024-10-09"
videoUrl: "https://www.youtube.com/watch?v=6tDWm97KvJY"
channelName: "Ирина Якутенко"
channelUrl: "https://www.youtube.com/channel/UCnbGR1mOt2ER3glUovq1C6w"
shortDescription: "Opowieść o tegorocznej Nagrodzie Nobla z chemii dla Davida Bakera, Demisa Hassabisa i Johna Jumpera — za przewidywanie struktury białek na podstawie sekwencji aminokwasów i projektowanie białek o zadanej strukturze. Dowiesz się, na czym polegał paradoks Levinthala, dlaczego krystalografia rentgenowska przez dekady była wąskim gardłem biologii strukturalnej i jak AlphaFold przeszedł od 60% do 90% dokładności, udostępniając światu 200 milionów struktur za darmo. Nie brakuje też krytyki: model wciąż zawodzi przy heterooligomerach, mutacjach i dokingu z ligandem, bo nie szuka prawdy, lecz najbardziej prawdopodobnej odpowiedzi w świetle danych treningowych. Rozmowa kończy się refleksją o ewolucji, doborze naturalnym, fałdowaniu kotranslacyjnym i o tym, dlaczego „zbędna\" nadmiarowość jest warunkiem funkcjonalności zarówno w mózgu, jak i w genomie."
tags: ["nagroda nobla", "zwijanie białek", "sztuczna inteligencja", "biologia molekularna", "projektowanie białek"]
tagKeys: ["nobel-prize", "protein-folding", "artificial-intelligence", "molecular-biology", "protein-design"]
---

# Nagroda Nobla z chemii 2024 — przewidywanie i projektowanie struktury białek

## Kto i za co otrzymał nagrodę

- Tegoroczna Nagroda Nobla „z chemii" w praktyce dotyczy **biologii i nauk obliczeniowych** — podobnie jak nagroda z fizyki, przyznana za sieci neuronowe. Można powiedzieć, że w tym roku zarówno fizyka, jak i chemia zostały nagrodzone „za sieci".
- Laureaci: **David Baker** (połowa nagrody) oraz **Demis Hassabis** i **John Jumper** (druga połowa) — badacze z firmy **DeepMind**, założonej przez Hassabisa i przejętej później przez Google.
- Według nieoficjalnych informacji w DeepMind zapanowała ogromna radość — pracownicy słuchali ogłoszenia wyników i świętowali. Wielkie korporacje technologiczne dotarły więc już nawet do Nagród Nobla.
- Nagroda przyznana za metody pozwalające rozwiązać problem **w dwie strony**: przewidywanie struktury białka na podstawie sekwencji aminokwasów oraz projektowanie sekwencji, która da zadaną strukturę.

## Dlaczego białka są tak ważne

- DNA przechowuje informację, ale **wszystkie funkcje w organizmie realizują białka** — to „uniwersalni żołnierze" komórki.
- Białka katalizują reakcje (enzymy bywają skuteczniejsze i znacznie bardziej selektywne niż katalizatory chemiczne), odpowiadają za mięśnie, trawienie, wzrost — praktycznie za wszystko.
- Ich precyzja rozpoznawania jest ogromna: przykładem jest okres pandemii COVID-19, gdy pojedyncza zmiana w białku kolca (spike) wystarczała, by przeciwciała przestawały je rozpoznawać.
- Kluczowe zastosowania praktyczne:
  - **Projektowanie leków** — zrozumienie, z jaką dokładnością białko rozpoznaje swój **ligand** (cząsteczkę wiążącą się z białkiem).
  - Tworzenie **nowych, zaprojektowanych białek**, np. takich, które rozkładałyby antybiotyki lub niszczyły określone składniki komórki bakteryjnej.
  - Zrozumienie chorób związanych ze zmianami w białkach, a także działania toksyn bakteryjnych.

## Na czym polegał problem zwijania białek

### Poziomy struktury

- **Struktura pierwszorzędowa** — długi łańcuch złożony z 20 aminokwasów, rysowany często jako „koraliki".
- Białko jednak nie jest łańcuchem — zwija się w skomplikowaną, trójwymiarową bryłę przypominającą raczej **splątane przewody lub rozsupłany kłębek nici** niż uporządkowany kłębuszek.
- **Struktura drugorzędowa** — **helisy alfa** (rysowane jako spiralnie skręcone wstążki) i **harmonijki beta** tworzące **arkusze beta** (płaskie strzałki układające się w stosy), połączone pętlami. To właśnie pętle i boczne fragmenty często zawierają najważniejsze centra aktywne enzymów.
- **Struktura trzeciorzędowa** — ostateczne, skomplikowane zwinięcie całości. W jej wyniku aminokwas nr 3 może oddziaływać z aminokwasem nr 215, mimo że w sekwencji dzieli je ogromna odległość — i razem mogą tworzyć centrum aktywne enzymu.

### Paradoks Levinthala

- Naukowcy szybko ustalili, że **białka zawsze zwijają się tak samo**. Po denaturacji (np. przez podgrzanie) i przywróceniu właściwych warunków białko wraca do tej samej konformacji.
- Jednocześnie w 1969 roku amerykański uczony **Cyrus Levinthal** obliczył, że małe białko złożone ze **100 aminokwasów** może teoretycznie przyjąć co najmniej **10⁴⁷ struktur trójwymiarowych** — liczba porównywalna z liczbą atomów we Wszechświecie.
- Rzeczywistość jest inna: realizuje się jedna, czasem dwie konformacje. Wyjątkiem są **priony** — białka mające dwie preferowane konformacje: normalną oraz „zabójczą", która wymusza nieprawidłowe zwinięcie kolejnych białek w reakcji łańcuchowej. Stąd choroby prionowe (kuru u ludów Papui-Nowej Gwinei, choroba Creutzfeldta-Jakoba), ujawniające się nawet po 30 latach.
- Wniosek: skoro konformacja jest jedna, to muszą istnieć **prawa rządzące zwijaniem** — a więc teoretycznie da się je przewidzieć.

## Metody eksperymentalne i ich ograniczenia

- Przez dziesięciolecia podstawową metodą była **krystalografia rentgenowska** (analiza rentgenostrukturalna): hodowla kryształów białka, prześwietlenie i rekonstrukcja struktury z obrazu dyfrakcyjnego.
- Metoda dokładna, ale:
  - Bardzo pracochłonna i długotrwała — bardziej sztuka niż rutynowa procedura.
  - Nie wszystkie białka dają się skrystalizować, a warunki krystalizacji często wymuszają konformację **inną niż natywna** (czyli inną niż w komórce).
  - Publikacyjnie była bardzo opłacalna — z jednego białka dało się zrobić kilka artykułów, publikując kolejne wersje o coraz lepszej rozdzielczości, aż do angstremów.
- Ciekawostka: **najwięcej sceptycyzmu wobec tegorocznej nagrody wyrażają właśnie krystalografowie**, choć ich problemy zaczęły się jeszcze przed AlphaFold.
- Alternatywą stała się **krioelektronowa mikroskopia**.

## Pierwsze postępy obliczeniowe

- Analiza komputerowa ujawniła, że sekwencje aminokwasów nie są przypadkowe — widać w nich **regularne wzorce**.
- Aminokwasy różnią się właściwościami: obojętne, polarne, naładowane, hydrofilowe, hydrofobowe, duże i małe. Pewne układy (np. polarny aminokwas co trzecią pozycję) niezawodnie zapowiadają helisę alfa.
- Przewidywania te potwierdzono eksperymentalnie — syntetyzowano krótkie peptydy o zadanych sekwencjach, które faktycznie tworzyły helisy alfa lub harmonijki beta. Wywołało to falę optymizmu, szybko jednak ostudzoną: to tylko struktura drugorzędowa, a nie całe białko.
- Ogólne reguły zwijania też były znane: aminokwasy polarne i naładowane wystają na zewnątrz (środowisko komórki jest wodne, polarne), a hydrofobowe chowają się wewnątrz. To jednak zdecydowanie za mało, by odtworzyć pełną strukturę — „jak stąd na Księżyc pieszo".

## Konkurs CASP jako motor postępu

- Postęp przyspieszyło **zewnętrzne przymuszenie** w postaci rywalizacji: konkurs **CASP** (*Critical Assessment of Protein Structure Prediction*), organizowany co dwa lata.
- Zasada: uczestnicy otrzymują wyłącznie sekwencje nowych, niepodobnych do znanych białek i muszą przewidzieć ich strukturę. Wyniki porównuje się z rzeczywistą, eksperymentalnie wyznaczoną strukturą.
- Przez lata wyniki były słabe — dokładność utrzymywała się na poziomie **ok. 30%** (2007, 2010, 2014), co nie dawało nadziei na praktyczne zastosowania.

## Wejście sieci neuronowych i przełom AlphaFold

### AlphaFold 1 (CASP 2018)

- W konkursie wystartował **Demis Hassabis** z DeepMind. Firma pierwotnie zajmowała się grami — Hassabis, sam szachista, stworzył **AlphaGo**, która pokonała najlepszych ludzkich mistrzów w go i w szachach.
- Zainteresowanie biologią przyszło później (podobno po lekturze książki), co skłoniło go do zastosowania własnych modeli do problemu struktury białek.
- Zaobserwowano wcześniej, że zastąpienie skomplikowanych algorytmów (np. metod Monte Carlo) prostym przeszukiwaniem siłowym (*brute force*) daje niewielki, ale realny postęp.
- **AlphaFold 1 podniósł dokładność do ok. 60%** — duży entuzjazm, ale wciąż zbyt mało do zastosowań praktycznych; 40% błędu nie pozwalało zrezygnować z pracy eksperymentalnej.

### Dlaczego sieci neuronowe zadziałały

- Sieci nie działają na zasadzie prostego przeszukiwania — 10⁴⁷ wariantów nie da się przejrzeć w rozsądnym czasie. Uczą się na kolejnych krokach, kierując poszukiwania we właściwą stronę.
- Kluczowe warunki przełomu:
  - **Ogromne zbiory danych treningowych** podawane wielokrotnie na wejście modelu.
  - **Nowe architektury** — sieci splotowe, transformery.
  - **Wzrost mocy obliczeniowej** dzięki kartom graficznym, co umożliwiło trenowanie modeli o miliardach parametrów.
- Historia sztucznej inteligencji obejmowała dwie „zimy" — okresy stagnacji, po których następowały skokowe przełomy (np. AlexNet).

### AlphaFold 2 (CASP 2020)

- Nie było to ulepszenie poprzednika, lecz **całkowicie nowa architektura**.
- **Dokładność wzrosła do ok. 90%** — struktury przewidziane przez AlphaFold w wielu przypadkach niemal nie różniły się od tych uzyskanych eksperymentalnie (krystalograficznie lub metodą krioelektronowej mikroskopii).
- Jak to działa (w uproszczeniu): do modelu ładuje się ogromne liczby **homologicznych białek z różnych gatunków** i wykorzystuje **dopasowanie sekwencji (alignment)**. Model porównuje, jak wyglądają białka spokrewnione, wyodrębnia odpowiadające sobie fragmenty strukturalne i uczy się, jakim sekwencjom aminokwasów odpowiadają jakie elementy struktury. Do treningu potrzebne są zarówno sekwencje, jak i eksperymentalnie wyznaczone struktury.
- Szczegółowy, choć bezwzorowy opis mechanizmu znajduje się w materiałach *Advanced Information* na stronie Komitetu Noblowskiego — bez matematyki pozostaje jednak sporo niejasności.
- Zasadniczy problem: **sieć znajduje wzorce, których ludzie nie dostrzegają**, ale często nie rozumiemy, w jaki sposób dochodzi do swoich wyników — to ograniczenie dotyczy wszystkich sieci neuronowych, nie tylko AlphaFold.

## Sieci neuronowe jako narzędzie o nieoczekiwanych zdolnościach

- Modele generatywne (jak GPT) potrafią czasem grać w szachy lepiej niż sieci projektowane specjalnie do gry w szachy — i **nie do końca rozumiemy, dlaczego**. Takie zdolności pojawiają się jako **efekt uboczny** treningu.
- Źródłem tej skuteczności jest sama struktura uczenia: wielokrotne przetwarzanie danych, korygowanie wag połączeń między warstwami neuronów, ponowne wykorzystywanie uzyskanej informacji do poprawiania własnych odpowiedzi.

## Otwarte udostępnienie 200 milionów struktur

- AlphaFold 2 pojawił się w 2020 roku — w szczycie pandemii, więc szeroka publiczność go nie zauważyła, ale wśród biologów i **strukturalistów** wywołał ogromny szum i obawy o utratę pracy.
- Po zwycięstwie DeepMind konkurs CASP w praktyce stracił sens — organizatorzy pytali sami siebie: *co dalej?*
- W geście dobrej woli Google/DeepMind wykorzystał AlphaFold 2 do wyznaczenia struktur **wszystkich ok. 200 milionów białek** znajdujących się w bazach sekwencji i **udostępnił je bezpłatnie**. Dotąd zakładano, że ich eksperymentalne wyznaczenie zajmie tysiące lat.
- Dziś w otwartych bazach danych obok sekwencji znajdują się także struktury — wystarczy z nich korzystać. Sam AlphaFold 2 również jest ogólnie dostępny za darmo.

## Krytyka nagrody i realne ograniczenia AlphaFold 2

### Argument sceptyków

Pojawiają się głosy, że to nagroda „jak Pokojowy Nobel dla Baracka Obamy" — przyznana nie tyle za dokonania, ile za **oczekiwania wobec przyszłości**. Podobnie jak z ChatGPT: gdy się pojawił, ogłoszono koniec zawodu dziennikarza, a jednak nadal są ludzie piszący lepiej.

### Co AlphaFold 2 robi dobrze

- **Znakomicie przewiduje struktury niewielkich, niezbyt skomplikowanych białek globularnych** — wystarczy wprowadzić sekwencję, bez żadnej pracy eksperymentalnej.
- Dobrze radzi sobie także z **homooligomerami**, czyli białkami złożonymi z kilku identycznych podjednostek.
- Porównania struktur wyznaczonych „ręcznie" z przewidywaniami modelu potwierdzają jego skuteczność — potwierdzają to również osoby pracujące na co dzień w tej dziedzinie.

### Czego AlphaFold 2 nie potrafi

- **Heterooligomery** — kompleksy złożone z różnych białek: tu model często się myli.
- **Efekt mutacji** — nie potrafi przewidzieć, jak pojedyncza zmiana aminokwasu wpłynie na strukturę. To ogromny problem praktyczny: w czasie pandemii jedna mutacja białka kolca unieważniała działanie **przeciwciał monoklonalnych** stosowanych u osób z zaburzeniami odporności, co bardzo niepokoiło firmy farmaceutyczne.
- **Doking molekularny** — przewidywanie struktury białka po przyłączeniu **liganda** (leku lub inhibitora), czyli dokładnie to, czego potrzeba do projektowania leków.
- **Zmiany struktury po związaniu antygenu z przeciwciałem**.

### Dlaczego model zawodzi

- Przyczyną nie jest wyłącznie architektura, lecz przede wszystkim **sposób uczenia i dobór zbioru treningowego**. Model **nie szuka prawdy** — podaje najbardziej prawdopodobną odpowiedź w świetle danych, na których go trenowano.
- Analogia z modelami językowymi: ChatGPT nie wyszukuje faktów, tylko uzupełnia zdanie najbardziej prawdopodobnym słowem. Jeśli wcześniej rozmawialiśmy o kosmosie, model może „na łące paść komety" zamiast koni — bo kontekst przesunął rozkład prawdopodobieństwa.
- Analogicznie: jeśli w zbiorze treningowym dominowały białka o pewnej strukturze, model wskaże ją nawet wtedy, gdy w środku wstawimy niepolarny, hydrofobowy aminokwas, który w rzeczywistości tę strukturę zniszczy. Model ma wbudowane **obciążenie (bias)** wynikające ze sposobu uczenia.
- Zarzut o słabe wyniki w dokingu jest więc „sprawiedliwy, ale oczywisty" — **model nie był tego uczony**, bo w zbiorze treningowym było niewiele struktur białek związanych z ligandem.
- Warto pamiętać, że architektury się zmieniają: od sieci splotowych przez transformery (okazały się lepsze dla białek) po sieci dyfuzyjne.

## Praktyczna użyteczność już dziś

- AlphaFold pozwala **skrócić i potanić eksperymentalną pracę strukturalną**. Krystalografia rzadko kończy się na jednym krysztale — zwykle potrzebny jest drugi zestaw danych, uzyskany w innych warunkach, aby jednoznacznie odtworzyć strukturę.
- Drugi zestaw często nie powstaje (kryształ nie rośnie), a alternatywą są uciążliwe metody, np. **zastępowanie metioniny selenometioniną** (wprowadzenie cięższych atomów zmienia zbiór danych i ułatwia rekonstrukcję).
- Wykazano, że dysponując tylko jednym zestawem danych, można uzupełnić brakującą informację za pomocą AlphaFold — zamiast żmudnego podejścia eksperymentalnego.
- Efekt: badacze pracujący w tej dziedzinie mówią o **ogromnym przyspieszeniu pracy** i możliwości „wyciągnięcia z półek" starych, niedokończonych danych i wreszcie uzyskania z nich struktur.

## Kwestia komercjalizacji i AlphaFold 3

- Nagród Nobla **nie przyznaje się za rozwiązania czysto komercyjne**. Przykład: przy nagrodzie za szczepionki mRNA pominięto twórców **otoczki lipidowej**, kluczowej dla ich działania — ponieważ jej struktura jest objęta patentem BioNTechu i Moderny i nie została udostępniona społeczności naukowej.
- W przypadku AlphaFold 2 warunek otwartości został spełniony: model i 200 milionów struktur trafiły do domeny publicznej.
- Istnieje już jednak **AlphaFold 3** — nowa, ulepszona iteracja, **niedostępna w otwartym dostępie**. Można korzystać z ograniczonej liczby zapytań dziennie przez stronę internetową, ale wiadomo o kontraktach z dużymi firmami farmaceutycznymi mającymi zapewne dostęp nieograniczony.
- Według publikacji AlphaFold 3 ma radzić sobie właśnie z **interakcjami białko–ligand** — czyli z tym, czego brakuje w wersji 2 i co jest niezbędne przy projektowaniu leków (np. inhibitora blokującego szkodliwe białko bakteryjne przy poszukiwaniu nowych antybiotyków). Ponieważ model nie jest publiczny, tych deklaracji nie da się na razie ani potwierdzić, ani obalić.
- DeepMind nie jest organizacją dobroczynną — otwarte udostępnienie AlphaFold 2 było ogromnym darem dla nauki, ale celem firmy pozostaje zarabianie. Brakuje „wielkiego, dobrego państwa", które finansowałoby takie prace równie efektywnie.

## Druga połowa nagrody: projektowanie białek i program Rosetta

### Jak działa Rosetta

- **David Baker** otrzymał nagrodę za proces odwrotny: **dobieranie sekwencji dla zadanej struktury**, czyli projektowanie i syntezę nowych białek.
- Narzędzie **Rosetta** powstało **wcześniej niż AlphaFold** i jest koncepcyjnie prostsze. Przeczesuje bazy znanych białek i wyszukuje potrzebne elementy strukturalne — tu helisa alfa, tam arkusz beta, tam określona pętla.
- Użytkownik określa, jak ma wyglądać docelowe białko, a program dobiera odpowiednie fragmenty, a następnie **optymalizuje ich wzajemne ułożenie** tak, aby oddziałując ze sobą nie niszczyły nawzajem swoich struktur (np. by pięknie uformowana helisa nie rozpadła się po zwinięciu całości).

### Co udaje się projektować, a co nie

- **Nie udaje się** tworzyć skutecznych **enzymów** — naturalne katalizatory białkowe są zbyt wyrafinowane.
- **Udaje się** dobrze projektować proste konstrukcje, przede wszystkim **sensory**: białka silnie i selektywnie wiążące określoną substancję. Pozwala to wykrywać w środowisku niebezpieczne związki, nanocząstki czy chemikalia i precyzyjnie oznaczać ich stężenie (np. po wyizolowaniu białka na kolumnie).
- Białka projektowane przez człowieka są „kwadratowo-gniazdowe" — proste i o nieskomplikowanej funkcji, bo **myślimy inaczej niż natura**: liniowo, od razu chcąc gotowe rozwiązanie dla konkretnej funkcji.

### Natura kontra projekt: rola ewolucji

- Przyroda dochodzi do rozwiązań drogą **ewolucji**: małe białko zmienia się stopniowo, geny się łączą, przypadkowo powstaje coś o nowej funkcji, która potem jest dopracowywana. Ma na to nieskończony czas i nieskończenie wiele prób, a nieudane warianty giną. Stąd naturalne białka wyglądają jak nieprzenikniony kłąb przewodów.
- Przykład koronawirusa: nieustannie zmienia pojedyncze aminokwasy; część zmian niszczy funkcję i taka linia wymiera, inne otwierają nowe drogi.
- Ludzie łączą oba podejścia: najpierw **projekt** (np. w Rosetcie), potem **metody ewolucji kierowanej** (uhonorowane osobnym Noblem):
  1. Wprowadza się losowe mutacje do genów zaprojektowanego białka.
  2. Bakterie (np. *E. coli*) syntetyzują setki wariantów.
  3. Wybiera się ten, który działa najlepiej — bywa, że przypadkowa mutacja daje lepszą konformację, niż przewidział projekt.
  4. Cykl powtarza się wielokrotnie — to selekcja analogiczna do hodowli roślin i zwierząt gospodarskich.
- Połączenie projektowania z ewolucją pozwala uzyskiwać bardzo skuteczne sensory, cząsteczki wiążące wybrane ligandy, a nawet proste enzymy.

### Wniosek dla teorii spiskowych o pochodzeniu koronawirusa

- Stan sztuki w projektowaniu białek pokazuje, **jak daleko nam do naturalnego designu** — „jak stąd na Księżyc pieszo". Umiemy zrobić „łopatę", a natura tworzy „synchrotron".
- Twierdzenia, że koronawirus został od zera skonstruowany w laboratorium, **rażąco przeceniają nasze możliwości**. Zwolennicy tej tezy szybko zresztą przerzucili się na wersję o ucieczce z laboratorium lub o przyspieszonej ewolucji w warunkach laboratoryjnych (takie eksperymenty są mniej lub bardziej zakazane, choć niektórzy je prowadzą) — właśnie dlatego, że pierwotna hipoteza okazała się absurdalna.

## Refleksja: dlaczego sieci neuronowe okazały się tak skuteczne

- Pierwsze próby przewidywania struktury białek były **czysto algorytmiczne** — ustalano reguły przetwarzania danych. To nie zadziałało: trójwymiarowe oddziaływania w długim łańcuchu okazały się zbyt złożone dla wbudowanego modelu matematycznego.
- Sieci neuronowe rozwijają się w sposób poniekąd przypominający **procesy żywe**: same się uczą, korygują, wielokrotnie wykorzystują te same dane, aby poprawić poprzednią odpowiedź, i poruszają się po siatce decyzji drogami okrężnymi — tak jak życie nigdy nie zmierza do celu na wprost.
- Analogia z ewolucją zbieżną: ryba i delfin mają podobny kształt, choć delfin to ssak, który wrócił do morza i **okrężną drogą** doszedł do tego samego, najkorzystniejszego rozwiązania.
- To nie przypadek, że tak jest — sieci od początku były **inspirowane działaniem neuronów** i budową oka.

### Pochwała „zbędnej" nadmiarowości

- Przełom nastąpił, gdy odeszliśmy od prostych, „łopatologicznych" rozwiązań i zaczęliśmy naśladować zasady działania mózgu: **nadmiarowość, powtórzenia, krążenie w kółko**.
- Kiedyś dziwiono się, że mamy znacznie więcej neuronów, niż potrzeba do wykonywanych funkcji, i wnioskowano stąd, że każdy mógłby nauczyć się 10 języków i 15 zawodów. Dziś wiadomo, że ta „nadmiarowość" **jest właśnie warunkiem funkcjonalności**.
- To samo widać w genomie: gdy odkryto, że miliardom nukleotydów odpowiada tylko ok. 20 tysięcy białek, ogłoszono, że większość DNA to „śmieci". Tymczasem **mikroRNA** i sekwencje regulatorowe pokazują, że tak zwane śmieciowe DNA jest m.in. **rezerwuarem, z którego przypadkowe połączenia genów tworzą nowe białka**.
- Pozorna nadmiarowość to typowa cecha tego, co żywe: obserwujemy gotowy, często doskonały produkt, ale proces dochodzenia do niego bywa zawiły i wcale nie prostoliniowy. Sieci neuronowe — choć oparte na matematyce, a nie na biologii — wykorzystują ten sam podstawowy mechanizm i dlatego bywają tak zaskakująco skuteczne, potrafiąc np. „przy okazji" nauczyć się grać w szachy.

## Pytania i odpowiedzi

### Czy powstanie „AlphaFold dla psychologii"?

- Mózg pozostaje dla nas **czarną skrzynką** — a sieci neuronowe są drugą czarną skrzynką, której działania też nie rozumiemy do końca. Badania nad tym, „co pamiętają" sieci, pokazują, że zapamiętują one więcej, niż powinny — nie wiadomo, czy odtwarzają, czy rekonstruują informację.
- Aby stworzyć odpowiednik AlphaFold dla psychiki, trzeba by najpierw znacznie lepiej poznać budowę i działanie mózgu. To **problem trudniejszy niż zwijanie białek**.
- Moda na **geny kandydackie** (pojedynczy gen odpowiadający za cechę charakteru) okazała się w większości ślepą uliczką. Wyjątki istnieją — np. gen **MAOA** wyraźnie powiązany z agresją u mężczyzn — ale zwykle na każdą cechę wpływają **setki genów**, a charakter to złożenie setek takich cech.
- Brakuje też **motywacji ekonomicznej**: przy lekach cel jest oczywisty (AlphaFold 3 wprost celuje w projektowanie leków), natomiast nie widać, skąd miałby pochodzić zysk z „AlphaFold dla psychologii".

### Zwijanie białek: czynnik czasu

#### Fałdowanie kotranslacyjne

- Białka **nie zwijają się jednorazowo**, jak sugerują gotowe modele. Zwijanie zachodzi **w trakcie syntezy** — rybosom odczytuje kolejne kodony mRNA, tRNA dostarczają aminokwasy, a wychodzący z rybosomu łańcuch zaczyna się fałdować już podczas translacji. To tzw. **fałdowanie kotranslacyjne**.
- Konsekwencja: najpierw zwija się pierwszy fragment, potem pojawia się kolejny, oddziałuje z nim i **zmienia jego konformację**, a dopiero to zmodyfikowane ułożenie wchodzi w interakcję z ostatnią wychodzącą częścią łańcucha.
- Dlatego struktura optymalna energetycznie „przy jednoczesnym zwinięciu" może być **zupełnie inna** niż ta powstająca stopniowo w czasie.

#### Rzadkie kodony jako regulator tempa

- Istnieją **rzadkie kodony**, na które rybosom musi długo czekać, aż nadpłynie odpowiedni tRNA. Badania wskazują, że służy to celowemu **wstrzymaniu translacji**, by białko zdążyło przyjąć właściwą konformację.
- Jeśli aminokwas dotrze zbyt szybko, białko zwinie się nieprawidłowo i **finalna struktura nie będzie funkcjonalna**.

#### Inne źródła rozbieżności z przewidywaniami

- Białko często nie funkcjonuje „samo dla siebie" — w warunkach naturalnych wiąże **ligand**, który dołącza w określonym momencie i zmienia strukturę. Modele tego nie uwzględniają.
- Do tego dochodzą znane wcześniej ograniczenia: heterooligomery, obecność ligandów, wpływ mutacji.
- Odpowiedź na pytanie, czy białka „obliczają same siebie" analogowo: **nie** — w białkach nie ma żadnych centrów obliczeniowych. Obliczenia prowadzi natomiast **ewolucja — metodą selekcji**.

### Ewolucja, selekcja i mit „nieskierowanej przypadkowości"

- Ewolucja dysponuje praktycznie nieskończoną liczbą prób, ale kluczowy jest **dobór**, który nadaje kierunek.
- Popularny argument, że „nieskończona liczba małp z maszynami do pisania nie napisze *Wojny i pokoju*", jest chybiony — **małpy nie mają doboru**. W ewolucji dobór ukierunkowuje losowe mutacje na potrzebne cechy.
- Paradoks: przy hodowli jabłoni czy zwierząt wszyscy intuicyjnie rozumieją siłę selekcji, ale w dyskusji o ewolucji ta intuicja nagle znika.

#### Przykład udomowienia wilka

1. Mniej agresywny wilk (lub wychowany przez ludzi wilczek) trzyma się blisko obozowiska, bo zyskuje resztki jedzenia.
2. Dobiera się w parę z równie mało agresywną samicą — potomstwo jest średnio jeszcze mniej lękliwe i agresywne.
3. Ludzie zatrzymują przy sobie osobniki najbardziej przyjazne i dokarmiają je, zwiększając ich szanse przeżycia.
4. Pokolenie po pokoleniu prowadzi to od wilka do współczesnego psa.

- **Dobór na przyjazność pociągnął za sobą zmiany fenotypowe**: mniejsze rozmiary, mniejsze zęby. Potwierdzać to ma nowosybirski eksperyment z lisami (choć wokół niego pojawiały się zastrzeżenia, sama koncepcja jest sensowna).
- To argument przeciw „inteligentnemu projektowi": zmiany widać niemal na naszych oczach.

#### Dobór sztuczny a naturalny

- **Dobór sztuczny powtarza mechanizm naturalnego** — różnica dotyczy kryterium. Człowiek wybiera pestki z najsłodszego jabłka i po wielu pokoleniach z cierpkiego dziczka otrzymuje jadalny owoc.
- W przyrodzie kryterium jest **przystosowanie do warunków** — a że nisz i warunków jest wiele, kierunków doboru też. Gatunek może nie zdążyć się przystosować i po prostu wymrzeć.
- **W biologii nie ma stuprocentowych gwarancji — poza śmiercią.** To zasadnicza różnica wobec inżynierskiego podejścia do projektowania białek, gdzie chcemy od razu gotowy, pewny wynik.

### Rekomendacje filmowe

- **Anihilacja (Annihilation)** — fabularnie nie olśniewa, ale **wizualnie znakomicie oddaje**, jak wygląda życie rozwijające się metodą prób i błędów, rozrastające się we wszystkich kierunkach w macko-podobne struktury.
- **Ex Machina** — tego samego reżysera, o sztucznej inteligencji; zdaniem prowadzącej jeden z najlepszych filmów science fiction.

### Dlaczego wciąż pojawiają się nowe pytania?

- Mózg jest **ewolucyjnie „zaprogramowany" do szukania problemów** — ci, którzy się rozluźniali w warunkach jaskiniowych, gorzej przeżywali i zostawiali mniej potomstwa.
- Dlatego idea „rozwiążę wszystkie problemy i osiągnę trwały spokój" jest **złudna** — to gonienie własnego ogona. Życie „w wannie z szampanem" prowadzi raczej do prokrastynacji i degradacji.
- Praktyczny wniosek: skoro i tak będziemy szukać problemów, lepiej **podsuwać sobie problemy ciekawe i wartościowe**.

### Przewidywanie struktur kryształów (prace Artioma Ogannowa)

To **inna dziedzina** — chemia przewidywania struktur substancji w skrajnych warunkach (np. 500 atmosfer). Nie konkuruje z AlphaFold.

### Czy trzeba weryfikować 200 milionów przewidzianych struktur?

- **Nie ma takiej potrzeby ani możliwości.** Wiemy już, jakie typy białek model przewiduje dobrze, a jakie źle. Jeśli konkretne białko jest celem w projektowaniu leku, i tak zostanie zweryfikowane strukturalnie — a AlphaFold tę weryfikację upraszcza (np. wystarczy jeden zestaw danych zamiast kilku).
- Baza jest **bezcenna dla badań podstawowych**: ewolucji białek, porównywania struktur między gatunkami, badania nabywania i utraty funkcji, zegarów molekularnych.
- Błędy się zdarzają, czasem krytyczne — ale znamy ich przyczyny (fałdowanie kotranslacyjne, heterooligomery, obecność ligandów), więc wiemy, na które przypadki uważać lub które odrzucić z analizy.
- **Analogia z tłumaczeniem maszynowym**: ChatGPT nie rozumie sensu i nie ma świadomości, a mimo to tłumaczy wystarczająco dobrze do codziennych zastosowań. Historia firmy ABBYY, która latami próbowała rozwiązać „problem sensu" jako warunek przekładu, pokazuje, jak bardzo zmienił to model językowy. Podobnie 200 mln struktur „wystarczająco dobrych" ma ogromną wartość praktyczną.

### Epigenetyka

- To **kolejny, w pełni uznany poziom regulacji** — nadbudowa nad DNA, odkryta stosunkowo niedawno (lata 80.–90., czyli ok. 40 lat temu).
- Regulacja może zachodzić na poziomie genu, RNA (jak mikroRNA) lub białka; epigenetyka działa **na poziomie genów** i stanowi system **szybkiej regulacji** — np. niezdrowa dieta prowadzi do pojawienia się znaczników epigenetycznych na genach związanych z metabolizmem.

### Projektowanie organizmów, transhumanizm, nieśmiertelność

- Jesteśmy od tego bardzo daleko — „jak stąd na Księżyc pieszo". Craig Venter próbował stworzyć organizm minimalny, ale **projektowanie złożonych układów biologicznych na razie nam nie wychodzi**.
- Przyczyna: natura dysponuje warunkowo nieskończonym czasem i liczbą prób, my podchodzimy do problemu inaczej. Czasem to inne podejście bywa skuteczniejsze — **samoloty latają inaczej niż ptaki i latają dobrze** — ale w przypadku projektowania organów i organizmów jak dotąd zawodzi.

### Inne krótkie odpowiedzi

- Noble 2024 jeszcze się nie zakończyły — omówiono dwie z nagród, pozostałe dopiero przed nami.
- Osiągnięcia w dziedzinie **GMO** są dziś istotnie skromniejsze, niż mogłyby być, z powodu zakazów obowiązujących niemal wszędzie.
- Pytanie o skuteczność psychologii jako temat osobnego materiału pozostaje otwarte — istnieją wywiady na ten temat, samodzielne wideo może kiedyś powstanie.

## Zakończenie i zapowiedzi

- Prośba o polubienia, subskrypcje i aktywne komentowanie — algorytmy YouTube'a to premiują; wsparcie finansowe możliwe przez sponsoring kanału, Patreon i Boosty.
- Zapowiedź **podsumowującej transmisji o trzech tegorocznych Noblach** — krótkiego przeglądu tego, za co je przyznano i dlaczego to ważne.
- Na kanale ukazało się nowe wideo o **teorii Darwina** i próbach jej zakazania — nie tylko w Rosji. Ujęcie biologiczne: istnieją dane naukowe pozwalające z pewnym prawdopodobieństwem przewidzieć, którzy ludzie są bardziej skłonni odrzucać racjonalne wyjaśnienia rzeczywistości na rzecz nadprzyrodzonych.
