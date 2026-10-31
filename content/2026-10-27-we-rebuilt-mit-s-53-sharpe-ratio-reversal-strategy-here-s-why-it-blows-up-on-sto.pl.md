---
title: "Strategia odwrócenia przekrojowego z MIT: dlaczego koszty i koncentracja pozycji niszczą zysk w praktyce"
date: "2026-10-27"
videoUrl: "https://www.youtube.com/watch?v=elPKLu9cj_I"
channelName: "Unbiased Trading"
channelUrl: "https://www.youtube.com/channel/UCBc1EqknL4xzwJsUP9w7asg"
shortDescription: "Analiza przetestowuje klasyczną strategię \"cross-sectional reversal\" z pracy Khandaniego i Lo na realnych danych rynku akcji (2008–2026) oraz kryptowalut. Mimo obiecującego wyniku brutto na akcjach, ogromna liczba codziennych zleceń i koszty transakcyjne praktycznie zjadają zysk, zwłaszcza na mniejszych rachunkach, a zawężenie do płynnych spółek usuwa większość sygnału. Na kryptowalutach strategia doprowadziła do katastrofalnej, skoncentrowanej straty (ok. 290% kapitału w jednym dniu) przez brak limitów wielkości pozycji przy ekstremalnym ruchu jednego tokena. Wnioski podkreślają, że chwytliwe wyniki z publikacji naukowych wymagają samodzielnej walidacji przed wdrożeniem na realnym kapitale."
tags: ["strategia odwrócenia", "wskaźnik sharpe'a", "backtesting", "kryptowaluty", "koszty transakcyjne", "strategia kwantowa"]
tagKeys: ["reversal-strategy", "sharpe-ratio", "backtesting", "crypto-trading", "trading-costs", "quant-strategy"]
---

# Strategia odwrócenia przekrojowego z pracy MIT – czy wciąż działa w praktyce?

## Pochodzenie strategii

Punktem wyjścia jest praca badawcza napisana przez Khandaniego i Lo, powstała w związku z falą dużych strat kilku funduszy kwantowych w sierpniu 2007 roku. Autorzy chcieli zrozumieć, co wtedy faktycznie się wydarzyło, i do tego celu posłużyli się bardzo prostą strategią kontrariańską, która ekstremalnie gwałtownie spadała, a potem odbijała się – co pomogło im zbadać mechanizm tamtej wyprzedaży. To właśnie ta reguła jest przedmiotem testu w niniejszym materiale.

### Zasada działania – odwrócenie przekrojowe

Logika strategii nazywa się **cross-sectional reversal** (odwrócenie przekrojowe) i polega na porównywaniu spółek między sobą:

- Kupujemy akcje, które zostały w tyle za rynkiem.
- Shortujemy (sprzedajemy na krótko) akcje, które wybiegły mocno do przodu.
- Liczymy średnią zmianę ceny dla całej grupy spółek i porównujemy każdą z nich do tej średniej.
- Im większe odchylenie danej spółki od średniej grupy, tym większa pozycja na niej.
- Rebalans odbywa się codziennie.

Przykład: jeśli trzy spółki zmieniają się o -2%, +1% i +4%, średnia wynosi +1%. Pierwsza spółka jest 3 punkty procentowe poniżej średniej (kupujemy ją), trzecia jest 3 punkty powyżej (shortujemy ją), a druga leży na średniej, więc ją ignorujemy.

Krótka sprzedaż to pozycja, która zarabia, gdy cena spada, i traci, gdy cena rośnie. Istotny szczegół konstrukcyjny: na każdy 1 dolar kapitału otwierana jest pozycja długa za 1 dolara i krótka za 1 dolara, co daje łączną ekspozycję równą dwukrotności wartości rachunku. Kwoty się bilansują, ale ryzyko nie znika – akcje mogą się zachowywać różnie, a strata na pozycji krótkiej może przewyższyć kapitał początkowy. Ten szczegół okazuje się kluczowy przy teście na kryptowalutach.

## Wyniki oryginalnej pracy z 1995 roku

Strategia „All Stock” osiągnęła roczny **wskaźnik Sharpe’a na poziomie 53,87** – wartość ekstremalnie wysoka, biorąc się z kombinacji wysokiej średniej dziennej stopy zwrotu (1,38%, czyli ok. 140 dolarów dziennie na każde 10 000 dolarów kapitału) i bardzo niskiej zmienności dziennej (ok. 0,4%).

Autorzy pracy sami zaznaczali jednak praktyczny problem: strategia handlowała średnio na 4781 spółkach dziennie – to ogromny portfel do codziennego rebalansowania. Już wtedy wskazywali, że realny wynik będzie znacznie słabszy po uwzględnieniu kosztów transakcyjnych, zleceń, wpływu na ceny i dostępności krótkiej sprzedaży dla poszczególnych tickerów.

## Test na danych rynku akcji (2008–październik 2026)

### Metodologia

Zachowano codzienny sygnał oraz sposób ważenia pozycji długich i krótkich, bez limitów na pojedyncze pozycje. Przetestowano dwa warianty momentu zawierania transakcji:

- **Metoda A** – sygnał liczony z finalnej ceny zamknięcia, transakcja zawierana po tej samej cenie zamknięcia, pozycja trzymana do następnego zamknięcia. Jest to wariant wyidealizowany (odpowiadający w przybliżeniu oryginalnej pracy), ponieważ w praktyce nie można handlować po cenie, którą już się znało.
- **Metoda B** – sygnał liczony po zamknięciu, transakcja zawierana na następnym otwarciu, pozycja trzymana do kolejnego otwarcia. Bardziej realistyczna sekwencja, choć wciąż zakłada możliwość handlu po cenach otwarcia.

### Wyniki przed kosztami

Przed uwzględnieniem kosztów transakcyjnych wyniki wyglądały obiecująco:

- Metoda A dała wskaźnik Sharpe’a ok. **1,54** – daleko od 53, ale wciąż realistyczny i wart dalszego testowania.
- Metoda B dała wskaźnik Sharpe’a ok. **0,69** – zmiana momentu zawierania transakcji istotnie pogarsza wynik.

### Problem kosztów i rotacji

Strategia generuje ogromną liczbę zleceń – średnio ok. 3689 dziennie, a łączny obrót (kupno plus sprzedaż) odpowiada ok. 2,94-krotności kapitału rachunku każdego dnia. Przy tak wysokiej rotacji nawet niewielki koszt na zleceniu mocno zjada zyski.

Przy rachunku 100 000 dolarów średnie zlecenie wynosi tylko ok. 80 dolarów – mimo że rachunek wydaje się stosunkowo duży, rozłożony na tysiące tickerów staje się bardzo mały. Przy milionie dolarów średnie zlecenie rośnie do ok. 800 dolarów.

Zastosowano uproszczony model prowizji (pół centa za akcję, minimum 1 dolar, limit 1% wartości zlecenia – zbliżony do modelu IBKR). Przy zleceniu 80 dolarów prowizja wynosi 80 centów, czyli trafia w limit 1%. Skutki dla rachunku 100 000 dolarów:

- Zysk brutto metody A: ok. 127 dolarów dziennie (podobnie jak w pracy z 1995 roku).
- Modelowane prowizje: ok. 2000 dolarów dziennie – znacznie więcej niż zysk.
- Przy takim modelu kosztów mały rachunek po prostu nie przetrwa.

Zwiększanie kapitału pomaga, ale nie rozwiązuje problemu:

- Przy 1 mln dolarów prowizje zjadają ok. 93% rocznie wobec zysku brutto 32%.
- Przy 5 mln dolarów prowizje wciąż są wyższe niż zysk brutto.
- Dopiero przy ok. 10 mln dolarów metoda A zostaje z niewielkim dodatnim wynikiem netto (ok. 3,8%) – i to bez uwzględnienia wpływu dużych zleceń na ruch cen (slippage).

### Wpływ poślizgu cenowego (slippage)

Przed prowizjami metoda A toleruje ok. **4,32 punktu bazowego** poślizgu na stronę transakcji, zanim przeciętny zysk zniknie całkowicie. Dla metody B ten limit spada do ok. **1,71 punktu bazowego**. Jeden punkt bazowy to 0,01%, a prowizje dodatkowo zużyją część tej „przestrzeni”.

### Test na bardziej płynnych spółkach

Zawężenie testu do 1000 tickerów o najwyższym niedawnym wolumenie dolarowym (łatwiejszym do realizacji bez dużego wpływu na cenę) dało:

- Metoda A: wskaźnik Sharpe’a spadł z 1,54 do **0,22**.
- Metoda B: wskaźnik Sharpe’a spadł z 0,69 do **0,53**.

Ograniczenie do płynnych spółek ułatwia realizację zleceń, ale jednocześnie usuwa większość sygnału, na którym opierała się atrakcyjność strategii.

### Ograniczenia testu

- Dane zostały wyczyszczone z ekstremalnych/błędnych cen, a wszystkie spółki wycofane z notowań zostały uwzględnione (co jest istotne – brak takich tickerów w danych może dać zupełnie inne wyniki).
- Nie uwzględniono pełnego kosztu pożyczania akcji na krótką sprzedaż oraz dostępności shortów dla konkretnych tickerów.
- Nie uwzględniono w pełni wpływu własnych zleceń na ceny rynkowe nawet przy bardziej płynnych spółkach.

## Test na kryptowalutach

Zastosowano tę samą regułę do 50 najpłynniejszych kryptowalut (według niedawnego wolumenu dolarowego), testując ceny spot oraz kontrakty perpetual futures (kontrakty bez stałego terminu wygaśnięcia, umożliwiające zajmowanie pozycji długich i krótkich), oparte na cenach zamknięcia, ponieważ rynek krypto działa 24/7.

- **Rynek spot**: wynik ujemny przed kosztami, wskaźnik Sharpe’a ok. **-0,32** – krzywa kapitału traci praktycznie całą wartość początkową; koszty transakcyjne jedynie pogłębiają stratę. Dodatkowo test zakłada możliwość shortowania w momentach, w których odpowiadający kontrakt perpetual jeszcze nie istniał.
- **Kontrakty perpetual futures**: tu wystąpił poważny problem. 8 września 2025 roku model stracił w jednym dniu ok. **290% kapitału rachunku** (łącznie z finansowaniem pozycji), co całkowicie wymazało konto.

Przyczyna była jasna: jedna pozycja krótka – na tokenie MYX/USDT, który w dniu liczenia sygnału wzrósł o 167% – odpowiadała za większość tej straty. Ponieważ strategia obstawia przeciwko najsilniejszym relatywnym zwycięzcom, tak duży ruch generuje bardzo dużą pozycję. Bez limitu wielkości pozycji model ulokował ok. 97% kapitału rachunku w tym jednym shorcie, co oznaczało, że cała strona krótka portfela była praktycznie skoncentrowana w jednym tokenie. Cena tego tokena wzrosła następnie o kolejne 298%, zamiast odwrócić się – pozycja krótka straciła wielokrotność kapitału początkowego, mimo że portfel formalnie obejmował wiele innych monet.

## Wnioski

Akcje i kryptowaluty napotykają na różne problemy:

- **W przypadku akcji** – wynik brutto wygląda obiecująco, ale zależy silnie od tego, czy można handlować po cenie zamknięcia (nierealistyczne) czy dopiero na otwarciu następnego dnia (bardziej realistyczne, ale słabszy wynik), a koszty rebalansowania przy tak dużej liczbie zleceń praktycznie zjadają zysk, zwłaszcza na mniejszych rachunkach. Ograniczenie do płynnych spółek ułatwia egzekucję, ale eliminuje większość sygnału.
- **W przypadku kryptowalut** – najwięksi „zwycięzcy” mogą dalej rosnąć bez odwrócenia, a sposób ustalania wielkości pozycji w tej strategii prowadzi do największych zakładów właśnie przeciwko takim odstającym przypadkom, co może doprowadzić do katastrofalnej, skoncentrowanej straty.

Możliwe dalsze kroki badawcze obejmowałyby dodanie limitów wielkości pozycji w kryptowalutach oraz zmianę sposobu konstruowania wag pozycji w ogóle. Mimo to, na podstawie przeprowadzonych testów, nie udało się wypracować strategii gotowej do wdrożenia na żywym kapitale – wersja akcyjna ma dodatni sygnał brutto, ale wymagałaby dalszej pracy nad strukturą kosztów, aby rebalansowanie nie pochłaniało całego zysku.

Kluczowy wniosek praktyczny: zawsze warto samodzielnie przetestować strategię z pracy naukowej, a nie opierać się jedynie na nagłówkowym wyniku – publikacje akademickie często zawierają chwytliwe liczby, ale pod nimi kryją się interesujące idee wymagające dalszej, samodzielnej eksploracji i walidacji przed wdrożeniem na realnym kapitale.
