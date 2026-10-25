---
title: "Why Elite Trading Firms Teach Poker: 4 Lessons from Susquehanna, Jane Street, and MIT"
date: "2026-10-19"
videoUrl: "https://www.youtube.com/watch?v=6nJyh2_tVH0"
channelName: "Unbiased Trading"
channelUrl: "https://www.youtube.com/channel/UCBc1EqknL4xzwJsUP9w7asg"
shortDescription: "This piece explores why top quant trading firms like Susquehanna and Jane Street, along with MIT's academic curriculum, use poker to train traders. Drawing on insights from pros like Bill Chen and Jared Akerman, it outlines four core lessons: reading opponents' actions as information (and avoiding adverse selection), sizing up conviction only as evidence accumulates, building strategies that account for how others react to them, and judging results with a clear grasp of statistical variance. Ultimately, it argues poker is an unmatched training ground because it forces real-time decisions against opponents actively trying to outmaneuver you—mirroring the pressures and pitfalls traders face in live markets."
tags: ["poker", "trading strategy", "risk management", "probability", "decision making", "market making"]
tagKeys: ["poker", "trading-strategy", "risk-management", "probability", "decision-making", "market-making"]
---

# Why Elite Trading Firms Train Their Traders on Poker

Poker occupies a surprisingly central place in the training programs of some of the world's largest trading firms. Susquehanna, which manages over $800 billion and generated an estimated $20 billion in trading revenue in 2025, uses poker to train its traders. Jane Street, one of the biggest quantitative trading firms, includes poker in its trading internship. MIT even built an entire academic course around the connection between the two disciplines, bringing in guest lecturers such as Bill Chen, a Susquehanna quant and two-time World Series of Poker bracelet winner; Matt Lerchinko (referred to in the lecture material), a former trader who won over a million dollars in a single poker tournament; and Aaron Brown, a risk manager who worked at AQR.

Drawing on MIT's lectures and the insights of Susquehanna quant Jared Akerman — who played poker professionally before moving into high-frequency trading in equities and options, and who co-authored *The Mathematics of Poker* with Bill Chen — four core ideas emerge that form a roadmap for thinking about trading the way professional poker players think about hands.

## 1. Reading Other Players' Actions as Information

In poker, your information comes from three sources: your own cards, the cards everyone can see, and the behavior of the other players. A large bet means something entirely different depending on who makes it — a known bluffer's bet carries different implied odds than the same bet from someone who never bluffs.

### A Concrete Example: Pot Odds and Opponent Behavior

Consider a river situation (no more cards to come) with $150 in the pot, including the opponent's bet. You hold a hand that beats their bluffs but loses to their strong hands. It costs $50 to call, risking $50 to win a $150 pot. Dividing 50 by 200 gives a breakeven threshold of 25% — you only need to win one time in four to justify the call.

- If **Player A bluffs 40%** of the time, you win $150 on those bluffs and lose $50 the other 60% of the time, producing roughly **$30 of positive expected profit**.
- If **Player B only bluffs 10%** of the time, that identical call becomes a **$30 expected loss** — even though your cards and the stakes haven't changed at all. The only variable that moved is who you're playing against.

### The Trading Parallel: Market Making and Adverse Selection

In market making, a similar dynamic plays out. A market maker might value an option at $3.05 and sell it for $3.07, pocketing two cents of edge before costs. This can be a fair trade for both sides — the buyer might simply be hedging a business risk and is happy to pay a small premium for that protection.

The danger arises when the buyer knows something the market maker's model has missed. If the "true" value, accounting for that private information, is actually $3.10, then selling at $3.07 is really an expected **loss** of three cents, not a gain of two. This is **adverse selection**: the trades you win are disproportionately the ones you've mispriced, because the people choosing to trade against you are the ones who have an edge.

### Grouping Similar Situations

A single opponent's history — even a few hundred poker hands — covers very little of what can happen. To build a useful read, you need to learn from how similarly behaving players act as a group. The challenge is defining "similar enough":

- Lumping **everyone** into one group gives you plenty of data, but averages aggressive bluffers together with ultra-tight players, producing a model that describes nobody well.
- Building a **separate model for every player, every board, and every bet size** gives you so little data per group that a couple of unusual hands can distort the whole estimate.

The goal is to share information across situations that are genuinely comparable — and only add more granularity to a model when you have enough evidence to support it.

The same logic applies to recurring trades. A buy order might reflect a scheduled portfolio rebalance or a reaction to breaking news — these look identical as "new information" but mean completely different things for where the price is headed. Observable signals like timing can be used to separate these categories, and the resulting groupings should be validated against later data to confirm they actually improve the model.

## 2. Knowing How Much Evidence You Actually Have

A memorable story illustrates the danger of overconfidence in a read. In a tournament, a player desperate to reach the money was read by Matt Lerchinko as someone who would fold to nearly any aggression. Holding four-deuce offsuit, Matt pushed all-in — only for his opponent to say "I knew you were going to do that," call blind without even looking at his cards, and reveal nine-deuce offsuit, a hand that dominated Matt's. The opponent had been modeling Matt's read on him at the very same time Matt was reading him.

The lesson: **a small amount of evidence justifies only a small adjustment** to your strategy. Only as evidence accumulates and strengthens should you consider scaling up your conviction. Betting heavily on a read that might be wrong is a recipe for disaster.

### Applying This to Trading

- If you discover a potential trading inefficiency, test it first with **small size**.
- Check your actual fills and transaction costs before scaling up.
- Be especially cautious with **leverage** — a short run of profitable trades can mask large tail risks, and a real edge can evaporate quickly once you try to scale it.

### Acting Under Time Pressure

Poker forces decisions in real time — you can't pause a hand to research your opponent. The objective is to make your in-the-moment decision as close as possible to the decision you'd reach after careful study. This means developing **rules in advance** that can be applied instantly. In trading, this translates directly into researching and codifying rules ahead of time so an algorithm can apply them live, without requiring on-the-spot analysis, a calculator, or complete information.

### The Coin-Flip Game and Balanced Strategy

A simple game illustrates why pure "always bet when you know you're ahead" logic fails: two players each ante $1, a coin is flipped, and only one player sees the result. That player can bet $1 or check; the other can only call or fold (or must show down if there's a check).

- If you **only** bet when you have the winning side (heads) and check every time you lose (tails), your opponent will quickly realize that every bet you make is a winner — and will simply fold every time you bet, denying you any extra profit.
- The fix is a **balanced strategy**: always bet on heads, but also bluff on tails some fraction of the time — say, one bluff for every three value bets (making bluffs about 25% of all bets). This makes calling and folding equally unattractive for the opponent.
- If the opponent then calls two-thirds of the time, the math works out so that your bluffs **net to zero** on average (winning $2 one-third of the time, losing $1 two-thirds of the time) — but crucially, those bluffs are what make your value bets profitable, because they give the opponent a genuine reason to call rather than always folding.

The deeper point is that **no strategy can be judged in isolation** — you must consider how the other side will respond to it. In market making, changing your quoted price changes which orders you attract; you must evaluate the resulting fills and how your own quote changes affect subsequent prices and costs, since nobody else's behavior stays fixed while you change yours.

## 3. Building and Scaling a Strategy With Proper Position Sizing

This ties directly back to point 2: even a verified edge should be sized cautiously, tested incrementally, and scaled only as confidence grows — because the real danger isn't being wrong occasionally, it's over-committing to a read or a model before it has been sufficiently validated.

## 4. Judging Results and Handling Variance

### Why a Small Edge Can Look Like Noise

In heads-up limit hold'em, a genuinely strong edge might be around **0.02 big bets per hand**, while the standard deviation of outcomes on a single hand is about **2.5 big bets** — meaning the noise is roughly **125 times larger than the edge itself**. This explains why the outcome of any single hand (or trade) tells you almost nothing about whether your strategy is actually good.

Working through the numbers over a longer sample:

- After **100 hands**, you'd expect to be up about 2 big bets on average, but the standard deviation of your total result is about 25 big bets.
- Using a normal approximation, there is roughly a **40% chance of finishing down** after 100 hands — even with a genuine, positive edge.
- The standard error of your edge estimate after 100 hands is about 0.25 big bets — still far larger than the 0.02 edge you're trying to measure.
- Even after **10,000 hands**, that uncertainty only shrinks to about 0.025. Collecting **100 times more data** only buys you **10 times more precision**, because statistical precision improves with the square root of sample size.

This is why small edges are so difficult to validate from profit and loss alone — especially in trading, where market conditions shift faster than you can accumulate a truly independent sample.

### Independence Matters

Not all data points are equally informative. Betting three times within a single poker hand doesn't produce three independent trials — it's still one outcome determined by the same cards. Likewise, a single trade that gets split into ten separate fills isn't ten independent tests of your trading signal; it's one decision. Genuine statistical confidence requires **independent decisions**, not just a larger raw count of events.

### Training Yourself to Tolerate Being "Right but Unlucky"

Poker offers repeated, visceral practice at making the mathematically correct decision and still losing — exactly like the earlier example where a call with $30 of positive expected value still loses 60% of the time. Understanding the math intellectually doesn't make the losses feel better in the moment, but playing through that pattern over and over builds the emotional resilience to keep executing your process without being thrown off by short-term variance.

### The Real Danger: Letting Frustration Change Your Decisions

The costly mistake isn't losing — it's reacting to losing by abandoning your process. In poker, this looks like chasing losses by calling with weaker hands to "get the money back." In trading, the equivalent is increasing leverage after a losing stretch. The frustration itself hasn't created any new opportunity; it has only changed your decision-making, usually for the worse. Even with a fully automated trading system, a human can still interfere by changing position sizes or abandoning the system after a bad week.

### Distinguishing Bad Luck From a Broken Model

Having predetermined entry rules and risk limits gives you a stable benchmark against which to evaluate whether a losing streak is simply normal variance or a sign that your underlying assumptions have actually changed. Not every loss should be written off as "bad luck" — there's a real difference between getting unlucky at the right odds and having mis-estimated the odds in the first place (for instance, assuming an opponent bluffs 40% of the time when they actually only bluff 10%). In the latter case, the correct response is to **fix the estimate**, not to shrug off the loss. This is the same adverse-selection risk flagged earlier: if the person on the other side of your trade knows something you don't, that trade may never have carried the edge you believed it had.

### Reviewing Decisions After the Fact

Beyond managing emotional reactions to short-term swings, it's essential to continually re-examine the assumptions underlying a strategy. This is why post-hand discussion is emphasized so heavily in the MIT course — explaining what you believed about an opponent's hand and why you acted on it often exposes assumptions you hadn't consciously questioned. Students are encouraged to save their hand histories for later analysis, which mirrors the trading discipline of logging model inputs and actual fills so you can determine, after the fact, what (if anything) should change going forward.

## Bringing It All Together

These four ideas form a connected framework: use other participants' actions as information, learn from groups of similar situations rather than overfitting to tiny samples, build a strategy that accounts for how others will respond to it, and then rigorously judge whether that strategy is actually working while managing the emotional and financial toll of inevitable losing streaks. Poker provides a uniquely effective training ground for all of this because it pits you against real opponents who are actively trying to outmaneuver you — which is precisely why firms like Susquehanna and Jane Street, and institutions like MIT, treat it as a serious tool for developing trading judgment.
