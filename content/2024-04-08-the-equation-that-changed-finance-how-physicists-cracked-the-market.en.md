---
title: "The Equation That Changed Finance: How Physicists Cracked the Market"
date: "2024-04-08"
videoUrl: "https://www.youtube.com/watch?v=c-yf4nLgq2Q"
channelName: "Vert Dider"
channelUrl: "https://www.youtube.com/channel/UCY6zVRa3Km52bsBmpyQnk6A"
shortDescription: "This post traces the surprising scientific lineage of modern finance, from Louis Bachelier's random walk theory and Einstein's work on Brownian motion to Ed Thorp's card counting and the Black-Scholes-Merton equation that launched the derivatives boom. It explains how options work, why stock prices behave like balls falling through a Galton board, and how dynamic hedging lets traders manufacture near-riskless portfolios. It also examines the trillion-dollar markets that grew from a single formula, their role in both providing liquidity and amplifying crashes, and how Jim Simons' Medallion Fund used hidden Markov models and machine learning to beat the market for decades. The story ends with a paradox: the more patterns we find and trade away, the closer markets come to pure randomness."
tags: ["quantitative finance", "derivatives", "financial mathematics", "market efficiency", "probability theory"]
tagKeys: ["quantitative-finance", "derivatives", "financial-mathematics", "market-efficiency", "probability-theory"]
---

# The Equation That Changed Finance: Physics, Randomness, and the Birth of the Derivatives Market

## Introduction: One Equation, Trillions of Dollars

A single equation launched four multi-trillion-dollar industries and permanently transformed how the world thinks about risk. Its intellectual roots lie in unexpected places: **physics**, the **discovery of atoms**, the study of **heat diffusion**, and a method for **beating the casino at blackjack**. Given these origins, it is unsurprising that the most successful market players include not only seasoned traders but also physicists, scientists, and mathematicians.

### Two Contrasting Case Studies

- **Jim Simons** founded the **Medallion Fund** in 1988. For the following three decades it beat the market — not marginally, but by returning roughly **66% annually**. This made Simons arguably the wealthiest mathematician in the world.
- **Isaac Newton**, by contrast, demonstrates that mathematical brilliance guarantees nothing. By 1720 Newton had amassed a fortune of about £30,000 (roughly $6 million today) from decades at Cambridge and his post at the Royal Mint. He invested in the **South Sea Company**, whose shares doubled rapidly. He bought more near the peak, refused to sell as prices fell, and even bought more on the way down, believing shares were cheap. He lost nearly a third of his fortune, later remarking that he could calculate the motions of heavenly bodies but not the madness of men.

## Louis Bachelier and the First Mathematics of Markets

**Louis Bachelier**, born in 1870, was among the first to apply mathematics to financial markets. Orphaned as a young man, he took over and then sold his father's wine business, moved to Paris to study physics, and took a job at the **Paris Stock Exchange**, where he witnessed the chaos of shouted prices and frantic dealmaking. What fascinated him most were **options**.

### What Options Are — and Where They Came From

The first recorded option buyer was the Greek philosopher **Thales of Miletus**, who predicted a bountiful olive harvest. Lacking capital to buy olive presses outright, he paid press owners a fee to secure the *right* to rent their equipment at a fixed price during the summer. When the harvest boomed and rental prices soared, Thales sublet the presses at market rates and pocketed the difference — effectively the first **call option**.

- A **call option** grants the right, but not the obligation, to buy something at a pre-agreed **strike price**.
- A **put option** grants the right, but not the obligation, to sell at a pre-agreed strike price.
- Calls profit when prices rise; puts profit when prices fall.
- **American options** can be exercised any time before expiry; **European options** only on the expiry date.

**Worked example:** Apple trades at $100. You pay $10 for a one-year call with a $100 strike. If Apple rises to $130, you exercise, sell at $130, and net $20 after the premium. If Apple falls to $70, you simply let the option expire and lose only the $10 premium.

### Three Advantages of Options

1. **Capped losses.** Buying the stock outright exposes you to the full decline (potentially to zero); with an option, the maximum loss is the premium.
2. **Leverage.** Buying stock at $100 and selling at $130 yields a 30% return; the $10 option yielding $20 profit is a **200% return**. The mirror image is also true — a decline that costs a shareholder 30% wipes out 100% of the option buyer's stake.
3. **Risk reduction / insurance.** Options originated as a hedging tool. Once buyers wanted such insurance, sellers emerged to provide it for a fee — and a market was born.

### The Pricing Problem

For centuries, nobody knew how to price an option properly. Traders simply haggled until both sides agreed. Because an option is a vague, contingent claim on the future, devising a pricing formula had frustrated economists and merchants for generations. Bachelier, interested in probability, believed the answer was mathematical, and made it the subject of his doctoral thesis under **Henri Poincaré** — who, remarkably for the era, approved the unconventional topic.

## Random Walks: From Stock Prices to Pollen Grains

### Why Prices Move Randomly

Stock prices result from a tug-of-war between buyers and sellers, and the balance can be shifted by almost anything: weather, politics, competition, innovation. Bachelier concluded that these factors cannot be computed, so one must assume that at any instant a price is equally likely to rise or fall — a **random walk**.

Randomness is a marker of **market efficiency**. The harder people try to forecast and profit, the more unpredictable markets become: if you knew a stock would rise tomorrow, you'd buy today, which pushes the price up *now*. Forecasts therefore destroy their own predictive power. In a perfectly efficient market, tomorrow's price cannot be predicted.

### The Galton Board Analogy

A **Galton board** drops thousands of balls through rows of pegs; each ball bounces left or right with 50% probability. Individual paths are unpredictable, but the collective outcome forms a **normal distribution** — most balls land in the center because thousands of paths lead there, while reaching the edges requires an unbroken run of same-direction bounces.

A stock price behaves like a ball on this board, where each row of pegs represents a time interval. Over short periods prices barely move; over longer periods the range of possible prices widens. Bachelier concluded that the expected future price follows a **normal distribution centered on the current price**, spreading out over time.

### The Link to Physics

Bachelier realized he had independently rediscovered the **heat equation** — Fourier's 1822 description of how heat spreads from hot to cold regions. His version described the diffusion of *probability*. Because his work was framed around finance, physicists ignored it, but mathematicians studying random walks would soon use these ideas to solve a century-old physics puzzle.

### Brownian Motion and Einstein

- In 1827, botanist **Robert Brown** observed pollen grains jittering randomly in water under a microscope. Suspecting the pollen might be alive, he tested plainly inanimate material — meteorite dust and volcanic rock — and saw identical behavior. Any sufficiently small particle moves randomly: **Brownian motion**.
- Eighty years later, in 1905, **Einstein** explained it. At the time, many doubted molecules were physically real. Einstein proposed that invisible molecules bombard the particle from all sides; when more strike one side than the other, the particle visibly jumps. Since collisions are unobservable, each instant's displacement is equally likely in any direction.
- Thus both stock prices and microscopic particles behave like balls on a Galton board, with expected position described by a normal distribution that widens with time — the basis of **diffusion**. In solving Brownian motion, Einstein confirmed that atoms and molecules truly exist, unaware that Bachelier had described random walks five years earlier.

## Bachelier's Option Price

Bachelier derived a pricing method: for a call option, the buyer loses the premium if the price ends below the strike, and profits by the excess if it ends above (after subtracting the premium). By weighting each outcome's profit or loss by its probability, he computed the option's **expected return**.

His pricing rule: a **fair price** is one at which the expected profit is equal for buyer and seller — both sides should face the same expected gains and losses.

Bachelier thus beat Einstein to the random walk and solved a centuries-old trading problem — and nobody noticed. Physicists were uninterested, and traders weren't ready. What was missing was a concrete way to make money from it.

## Ed Thorp: From Blackjack to Wall Street

In late-1950s Los Angeles, a young physicist named **Ed Thorp** was writing his dissertation a few hours from Las Vegas.

### Card Counting

Casinos then used a single deck, so Thorp memorized the cards already played and continuously recalculated his odds, betting more when the remaining deck favored him and less when it didn't. He had invented **card counting** — a striking innovation given that people had played blackjack variants for centuries. He won heavily until casinos countered by adding extra decks.

### Delta Hedging

Thorp took his winnings — and his methods — to the market, running a fund that returned about **20% annually for 20 years**, the best record of its era. His key insight was that outcomes can be tilted in your favor by structuring bets correctly, using **offsetting positions**.

**Example:** Bob sells Alice a call option on one share. If the stock rises, Bob loses a dollar for every dollar of appreciation. But if Bob simultaneously *owns* the share, his gain on the stock offsets his loss on the option. If the stock instead falls, Bob can sell the share to avoid losses.

This is **dynamic hedging**: continually adjusting the number of shares held so that the option's value is offset by an appropriate quantity of stock, determined by the ratio **delta** — the sensitivity of the option's value to changes in the stock price. The resulting portfolio is essentially riskless, letting the seller earn a profit with minimal exposure to price swings. As Thorp puts it, this means one can effectively sell something without really selling anything — the option is manufactured out of nothing, so long as the dynamic hedging continues.

### Improving on Bachelier

Thorp also refined Bachelier's pricing model, which ignored the fact that stocks **drift upward in good times and downward in bad ones**. He devised a more accurate valuation around **mid-1967**, kept it private, and shared it only with his investors. His strategy was straightforward:

- If an option trades **below** the model price, buy it.
- If it trades **above**, sell it (bet against it).

For six years this gave him a consistent edge.

## Black, Scholes, and Merton (1973)

In 1973, **Fischer Black** and **Myron Scholes** — with **Robert Merton** contributing a version using stochastic calculus — published an equation that upended everything. Thorp acknowledges that although he had worked in the field alone, their model was better, backed by more rigorous mathematics.

### Their Reasoning

- Like Bachelier, they held that an option's price should give buyers and sellers equal odds, but they took a different route.
- If you build a **risk-free portfolio** of options and stock (what Thorp achieved through dynamic hedging), then on an efficient market that portfolio should earn no more than a **risk-free asset** such as US Treasury bonds.
- Their premise: **no extra return without extra risk**.
- They modeled stock price changes as the sum of a **random fluctuation** plus a **general market trend**, refining Bachelier's framework.

Combining these ideas produced the most famous equation in finance, giving the price of any derivative on an underlying asset — stocks, bonds, or anything else.

### Why It Mattered So Much

- It is a **partial differential equation** yielding an explicit formula for an option's value as a function of a handful of observable inputs.
- For the first time, traders could plug in numbers and get a directly usable price.
- The **Chicago Board Options Exchange** was founded the same year the equation was published.
- Within a few years it became Wall Street's standard reference for options trading — an unprecedentedly rapid adoption of academic research by a market, and arguably the first such case in the social sciences.

### The Resulting Boom

- The options market flourished, now measured in trillions of dollars, roughly **doubling every five years** — a financial equivalent of Moore's Law.
- Related multi-trillion-dollar markets grew from the same principles: **credit default swaps**, **over-the-counter derivatives**, and **collateralized debt obligations**.

## Applications: Hedging and Leverage

### Hedging Real-World Risk

Options are no longer just for hedge funds. Corporations, governments, and individual investors use them to hedge specific exposures. **Example:** an airline worried that rising oil prices will inflate its fuel bill can buy oil-linked options that pay off if oil keeps rising, offsetting the extra fuel cost.

### Leverage and the GameStop Episode

Options also supply powerful **leverage**. In the GameStop episode, a group of retail users on a Reddit forum set out to punish hedge fund managers who were short the stock and predicting its collapse. They discovered that buying shares alone was insufficient, because a fixed sum buys only so many shares. Spending the same money on **options** influences a far larger number of shares — a small premium delivers the effect of a much larger stock purchase. The combination of share buying and option buying drove the price up roughly **700%**, inflicting enormous, rapid losses on the short sellers.

## The Scale and Systemic Impact of Derivatives

A **derivative** is a financial instrument whose value depends on the value of another instrument; an option is one example.

- The global derivatives market is estimated at **several hundred trillion dollars** — many times larger than the underlying assets on which it is built.
- This is possible because derivatives let market participants take an underlying asset and effectively "use" it five, ten, or twenty times over, spawning many variants of the base asset with different risk/return profiles that appeal to different investors.

### Stability or Fragility?

- Under **normal conditions**, these markets are a valuable source of **liquidity** and therefore stability.
- Under **stressed conditions**, all these instruments tend to move in the same direction — usually **down** — and their simultaneous collapse can bring down the wider market, amplifying rather than absorbing shocks.

In **1997**, Merton and Scholes received the **Nobel Prize in Economics**; Black's contribution was acknowledged, but he had died two years earlier.

## Jim Simons and Renaissance Technologies

Once the Black–Scholes–Merton formula became public, the easy profits evaporated, and funds needed new ways to find market inefficiencies.

### From Pure Mathematics to Markets

Before finance, **Jim Simons** was a distinguished mathematician. His work in **differential geometry** influenced knot theory, quantum field theory, and quantum computing, and **Chern–Simons theory** helped lay the foundations of string theory. He won the American Mathematical Society's geometry prize in 1976. At the height of his academic career, he sought new challenges.

### Building a Data-Driven Fund

In 1978 he founded **Renaissance Technologies** to hunt for **patterns in market data using machine learning**. In an era before digital records, this meant collecting data by hand — including visits to the Federal Reserve to copy out historical interest rate data.

Simons assumed markets were too complex for confident forecasting, but his Cold War experience at the **Institute for Defense Analyses**, where he broke Soviet codes by finding patterns in large datasets, convinced him the same approach could work in finance.

### Hiring Scientists, Not Financiers

Using his academic network, Simons recruited top scientists who explicitly **did not** understand finance:

- Physicists with PhDs earned about five years earlier who had published several solid papers — demonstrably capable people.
- Astronomers, mathematicians, and statisticians with proven research success.

Two reasons draw such people to markets: the pay far exceeds a university salary, and for some, financial pricing is as intellectually captivating as any problem in their own discipline.

### Leonard Baum and Hidden Markov Models

Among the recruits was **Leonard Baum**, co-discoverer of **hidden Markov models**. Just as Einstein realized that the visible motion of pollen revealed invisible atoms, Baum recognized that hidden Markov models could uncover **invisible driving factors** through their effects on observable processes. Renaissance's **Medallion Fund**, built on these data-analysis tools, became the most profitable known investment fund in history.

## Rethinking Market Efficiency

Medallion's record led **Bradford Cornell** of UCLA to conclude in a paper on the fund that the **efficient market hypothesis may be fundamentally wrong**. A 1988 study of the US stock market likewise found the hypothesis mistaken: securities data contain **predictable components**, meaning the market *can* be beaten — provided one has the right model, training, resources, and computing power.

## Conclusion: The Physicists Who Rebuilt Finance

Time and again, the people who uncovered both the patterns and the randomness of financial markets have been **physicists and mathematicians**. Their influence extends far beyond personal wealth: their models of market dynamics reframed how the world understands **risk**, laid the foundations of entirely new markets, and established how derivatives should be priced — thereby making markets more efficient.

The final irony: if we ever discover *all* the market's patterns, we will trade them away and eliminate them entirely — producing at last a perfectly efficient market in which nothing remains but random fluctuation.
