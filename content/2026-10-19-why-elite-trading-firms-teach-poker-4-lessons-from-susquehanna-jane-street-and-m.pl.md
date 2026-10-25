---
title: "Poker i trading: cztery lekcje MIT i Susquehanna o czytaniu rywala i wariancji"
date: "2026-10-19"
videoUrl: "https://www.youtube.com/watch?v=6nJyh2_tVH0"
channelName: "Unbiased Trading"
channelUrl: "https://www.youtube.com/channel/UCBc1EqknL4xzwJsUP9w7asg"
shortDescription: "Największe firmy tradingowe – Susquehanna, Jane Street i MIT – wykorzystują poker jako narzędzie szkolące traderów, bo gra ta uczy tych samych umiejętności, co handel na rynkach. Artykuł opisuje cztery kluczowe lekcje: odczytywanie działań innych jako informacji (w tym ryzyko selekcji negatywnej), dostosowywanie siły decyzji do ilości dowodów, budowanie strategii odpornej na reakcję przeciwnika oraz radzenie sobie z wariancją i oceną wyników mimo małych przewag statystycznych. Na bazie wykładów Jareda Ackermana, Matta Lerchinki i Aarona Browna pokazuje, jak matematyka pokera przekłada się na realne decyzje market makerów i traderów algorytmicznych. Kluczowy wniosek: dyscyplina, zbalansowane strategie i trzymanie się reguł są ważniejsze niż pojedynczy wynik, bo nawet dobra przewaga może prowadzić do strat w krótkim terminie."
tags: ["poker", "strategia tradingowa", "zarządzanie ryzykiem", "prawdopodobieństwo", "podejmowanie decyzji", "animacja rynku"]
tagKeys: ["poker", "trading-strategy", "risk-management", "probability", "decision-making", "market-making"]
---

# Poker jako szkoła myślenia tradera: cztery lekcje z MIT i Susquehanna

Poker nie jest tylko grą hazardową – to jedno z najważniejszych narzędzi treningowych wykorzystywanych przez największe firmy handlowe na świecie. Susquehanna, która zarządza ponad 800 miliardami dolarów i w 2025 roku wygenerowała szacunkowo ponad 20 miliardów dolarów przychodu z tradingu, wykorzystuje poker do szkolenia swoich traderów. Jane Street, jedna z największych firm kwantowych, włącza poker do swojego programu stażowego. MIT zbudowało wokół tego tematu cały kurs, na który zapraszani są m.in. Bill Chen (quant Susquehanna, dwukrotny zdobywca bransoletki World Series of Poker), Matt Lerchinko (trader, który wygrał ponad milion dolarów w jednym turnieju pokerowym) oraz Aaron Brown (menadżer ryzyka w AQR).

Jared Ackerman, który pracował w handlu wysokich częstotliwości na rynku akcji i opcji, a wcześniej był zawodowym pokerzystą i współautorem książki „The Mathematics of Poker” z Billem Chenem, wyjaśnia, dlaczego te zasady przenoszą się na trading. Z jego wykładów oraz materiałów MIT wyłaniają się cztery kluczowe idee.

## 1. Odczytywanie działań innych jako informacji

W pokerze masz swoje karty, karty widoczne na stole oraz informacje płynące z zachowania innych graczy. Ten sam zakład oznacza coś zupełnie innego, gdy stawia go gracz notorycznie bluffujący, a coś innego, gdy robi to gracz, który nigdy nie bluffuje.

### Przykładowa kalkulacja

Na rzece (ostatnia karta, brak kolejnych kart do rozdania) w garnku jest 150 dolarów, a dopłacenie kosztuje 50 dolarów. Twoja ręka wygrywa z bluffami przeciwnika, ale przegrywa, gdy ten ma silną rękę.

- Potrzebujesz wygrać tylko 25% czasu, aby wyjść na zero (50 ÷ 200).
- Jeśli przeciwnik bluffuje 40% czasu, oczekiwany zysk z tego zagrania wynosi około 30 dolarów.
- Jeśli ten sam przeciwnik bluffuje jedynie 10% czasu, identyczne zagranie przynosi już oczekiwaną stratę 30 dolarów – mimo że twoje karty i stawka się nie zmieniły.

Różnica leży wyłącznie w tym, z kim grasz.

### Przełożenie na trading – ryzyko selekcji negatywnej

Jako market maker możesz wycenić instrument na 3,05 dolara i sprzedać go za 3,07, zarabiając dwa centy na transakcji – i obie strony mogą na tym wyjść dobrze, jeśli kupujący po prostu zabezpiecza swoje ryzyko biznesowe. Problem pojawia się, gdy kupujący wie coś, czego twój model nie uwzględnił, a prawidłowa wartość instrumentu to w rzeczywistości 3,10 dolara. To, co wyglądało na przewagę, w rzeczywistości jest oczekiwaną stratą. To jest **selekcja negatywna** (adverse selection) – transakcje, które do ciebie trafiają, mogą być właśnie tymi, które wyceniłeś błędnie. Twój model musi uwzględniać fakt, że ktoś wybiera handel z tobą właśnie dlatego, że ma przewagę informacyjną.

### Problem grupowania danych

Nawet kilkaset rozdanych rąk z danym graczem pokrywa niewielką część możliwych sytuacji, więc trzeba uczyć się także na podstawie zachowań podobnych graczy. Trudność leży w tym, co uznać za „podobne wystarczająco”:

- Jedna wspólna grupa dla wszystkich daje dużo danych, ale uśrednia agresywnych bluffujących z grającymi tylko na mocne ręce – średnia nie opisuje dobrze żadnego z nich.
- Osobny model dla każdego gracza, układu kart i wielkości zakładu daje bardzo mało przykładów w każdej grupie, więc kilka nietypowych rozdań całkowicie zmienia estymację.

W tradingu ten sam problem dotyczy powtarzających się zleceń – zaplanowana rebalansacja portfela i reakcja na newsa mogą wygenerować identyczne zlecenie kupna, ale oznaczają coś zupełnie innego dla przyszłej ceny. Można wykorzystać obserwowalne informacje, na przykład czas zlecenia, żeby odróżnić te grupy, a następnie sprawdzić na kolejnych danych, czy taki podział faktycznie poprawia model.

## 2. Ile dowodów potrzebujesz, zanim postawisz pieniądze

Matt Lerchinko opowiada historię, w której sądził, że ma „najmocniejszy odczyt w życiu” na przeciwniku desperacko chcącym dotrzeć do pieniędzy w turnieju. Z ręką cztery-dwa (bez koloru) poszedł all-in, przekonany, że przeciwnik spasuje prawie wszystko. Przeciwnik odpowiedział, że wiedział, że Matt tak zagra, zawołał bez patrzenia na karty i odkrył dziewiątkę-dwójkę, dominując rękę Matta. Matt próbował przewidzieć zachowanie przeciwnika, podczas gdy przeciwnik już wcześniej przewidział zachowanie Matta.

Wniosek: **mała ilość dowodów wymaga małej korekty strategii**. Dalsze posunięcia można rozważać tylko wtedy, gdy dowody się wzmacniają – inaczej stawiasz zbyt dużo na odczyt, który może być błędny.

### Zastosowanie w tradingu

Jeśli zauważysz nieefektywność rynkową:

1. Przetestuj ją na małej wielkości pozycji.
2. Sprawdź realne wypełnienia zleceń i koszty transakcyjne, zanim zwiększysz skalę.
3. Zachowaj szczególną ostrożność wobec lewarowania – krótkoterminowa seria zyskownych transakcji może maskować ogromne straty lub ryzyko ogona rozkładu, a przewaga może zniknąć bardzo szybko przy skalowaniu.

Ważne jest również działanie w czasie rzeczywistym – nie można zatrzymać rozdania, żeby zbadać przeciwnika. Dlatego celem jest, by szybka decyzja była jak najbliższa tej, którą podjąłbyś po dokładnym przestudiowaniu sytuacji. Trzeba więc wypracować reguły, które można zastosować na bieżąco – w przypadku algorytmu można je zbadać wcześniej, a potem zastosować w czasie rzeczywistym na danych handlowych.

## 3. Budowanie strategii odpornej na odpowiedź przeciwnika

Matt ilustruje to prostą grą w rzut monetą: dwaj gracze wpłacają po dolarze, moneta jest rzucana, tylko jeden gracz widzi wynik. Orzeł oznacza jego wygraną, reszka – przegraną. Gracz widzący wynik może postawić dolar albo czekać; przeciwnik może tylko sprawdzić albo – jeśli pada zakład – dołożyć lub spasować.

- Oczywistym posunięciem wydaje się: stawiać zawsze przy orle, czekać przy reszce. Ale gdy przeciwnik to rozgryzie, zacznie pasować przy każdym zakładzie i nigdy nie zapłaci za wygrywającą rękę.
- **Zbalansowana strategia** wymaga wplecenia bluffów: stawiając 1/3 czasu jako bluff (czyli jeden bluff na trzy zakłady z wartością, co daje 25% wszystkich zakładów jako bluffy), sprawianie, że wołanie i pasowanie są dla przeciwnika równie „opłacalne”.
- Jeśli przeciwnik woła dwa razy z trzech, bluff wygrywa 2 dolary jeden raz na trzy i przegrywa 1 dolara dwa razy na trzy – średnio wychodzi na zero. Przy takich regułach z obu stron nikt nie poprawi swojego wyniku, zmieniając tylko własną strategię.

Kluczowy wniosek: bluffy wpływają na to, ile zarabiasz na dobrych rękach, bo dają przeciwnikowi powód do wołania. Trzeba oceniać **całą strategię i reakcję, którą ona wywołuje** – u market makera zmiana cytowanej ceny zmienia, jakie zlecenia trafiają do niego do realizacji, więc trzeba analizować skutki tej zmiany, w tym kolejne ceny i koszty. Nie można zakładać, że reakcja rynku pozostanie taka sama, gdy zmieniasz własną strategię.

## 4. Ocena wyników i radzenie sobie z wariancją

Jared podaje przykład z pokera typu limit hold'em (gra już rzadziej spotykana), gdzie:

- Dobra przewaga wynosi około **0,02 dużego zakładu na rozdanie**.
- Odchylenie standardowe wynosi **2,5 dużego zakładu na rozdanie** – czyli 125 razy więcej niż sama przewaga.

### Co to oznacza w liczbach

Przy założeniu niezależności rozdań i stałej przewadze:

- Po 100 rozdaniach oczekiwany zysk to około 2 duże zakłady, ale odchylenie standardowe sumy to 25 – co przy przybliżeniu rozkładem normalnym daje około **40% szans na zakończenie na minusie**, mimo pozytywnej przewagi.
- Błąd standardowy szacowania średniego zysku na rozdanie po 100 rozdaniach wynosi 0,25 dużego zakładu – wciąż znacznie więcej niż szukana przewaga 0,02.
- Nawet po 10 000 rozdań niepewność spada tylko do 0,025 – sto razy więcej danych daje jedynie dziesięciokrotną precyzję.

To wyjaśnia, dlaczego pojedyncza przegrana sesja nic nie mówi o tym, czy strategia jest dobra, oraz czemu małe przewagi są tak trudne do zweryfikowania samym wynikiem finansowym – zwłaszcza w tradingu, gdzie warunki zmieniają się szybko.

### Niezależność decyzji

Trzy zakłady w ramach jednego rozdania nie dają trzech niezależnych dowodów – to wciąż te same karty i ten sam wynik. Podobnie jedna transakcja rozbita na 10 wypełnień nie stanowi 10 niezależnych testów sygnału. Liczą się tylko **niezależne decyzje**.

### Emocjonalna strona wariancji

Poker uczy znoszenia sytuacji, w których podjęto właściwą decyzję, a mimo to się przegrało – jak w przykładzie z początku, gdzie zagranie miało 30 dolarów oczekiwanego zysku, a przegrywało w 60% przypadków. Samo zrozumienie matematyki nie czyni tego łatwiejszym emocjonalnie, ale wielokrotne przechodzenie przez takie sytuacje uczy radzenia sobie z frustracją bez pozwalania, by wpływała na następną decyzję.

Kosztowny moment następuje wtedy, gdy zaczynasz wołać słabszymi rękami, żeby „odbić” stratę, albo w tradingu – zwiększasz lewarowanie po stracie. Frustracja nie stworzyła lepszej okazji, tylko zmieniła podejmowane decyzje. Dlatego warto mieć z góry ustalone reguły wejścia i limity ryzyka – dają one punkt odniesienia, by sprawdzić, czy straty wpisują się w oczekiwania, czy coś faktycznie się zmieniło.

Nie każdą stratę można zrzucić na zły los – inaczej wygląda sytuacja, gdy mamy dobre szanse i trafia nas niefortunny wynik, a inaczej, gdy zakładaliśmy, że przeciwnik bluffuje 40% czasu, a w rzeczywistości bluffował tylko 10% – w takim przypadku estymację trzeba poprawić. To właśnie ryzyko, na które wskazuje Jared, gdy druga strona wie coś, czego my nie wiemy – dana transakcja mogła nigdy nie mieć przewagi, którą zakładaliśmy.

### Nauka z historii decyzji

Dlatego Jared kładzie duży nacisk na rozmawianie z innymi uczestnikami o rozegranych rękach – wyjaśnienie, co sądziłeś o kartach przeciwnika i czemu podjąłeś dane działanie, może ujawnić założenie, którego nigdy nie zweryfikowałeś. Studenci MIT zapisują historię swoich rozdań do dalszej analizy; w tradingu odpowiednikiem jest zapisywanie danych wejściowych modelu oraz rzeczywistych wypełnień zleceń, żeby ustalić, co – jeśli coś – powinno się zmienić.

## Podsumowanie

Te cztery elementy łączą się w spójny proces: wykorzystywanie działań innych uczestników rynku jako informacji, uczenie się na podobnych sytuacjach, budowanie strategii uwzględniającej reakcję innych na nasze posunięcia, a następnie ocena skuteczności tej strategii i radzenie sobie z seriami strat bez pogarszania kolejnych decyzji. Poker daje praktyczny trening wszystkich tych umiejętności w konfrontacji z przeciwnikami, którzy aktywnie próbują cię pokonać – i to właśnie dlatego największe firmy handlowe traktują go jako tak skuteczne narzędzie szkoleniowe.
