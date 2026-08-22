---
title: >-
  The 2024 Nobel Prize in Chemistry: How AlphaFold Cracked Protein Folding — and
  What It Still Can't Do
date: '2024-10-09'
videoUrl: 'https://www.youtube.com/watch?v=6tDWm97KvJY'
channelName: Ирина Якутенко
channelUrl: 'https://www.youtube.com/channel/UCnbGR1mOt2ER3glUovq1C6w'
shortDescription: >-
  This deep dive explains why the 2024 Chemistry Nobel went to David Baker,
  Demis Hassabis, and John Jumper for work on neural networks rather than
  chemistry proper — solving the protein problem in both directions: predicting
  3D structure from sequence, and designing sequences that fold into desired
  shapes. It traces the story from Levinthal's paradox and the slow grind of
  X-ray crystallography, through the CASP competition, to AlphaFold 2's leap to
  90% accuracy and DeepMind's release of 200 million predicted structures into
  open access. Just as important are the limits: hetero-oligomers, mutation
  effects, ligand docking, and co-translational folding remain stumbling blocks,
  and AlphaFold 3's closed commercial status raises real questions. The
  discussion widens into Rosetta and protein design, directed evolution, why
  nature's "wasteful" redundancy is actually the source of its power, and why
  engineered proteins still look like shovels next to nature's synchrotrons.
tags:
  - molecular biology
  - artificial intelligence
tagKeys:
  - molecular-biology
  - artificial-intelligence
---

# The 2024 Nobel Prize in Chemistry: Protein Structure Prediction, AlphaFold, and Protein Design

## Introduction: A Chemistry Prize That Isn't Really Chemistry

This year's Nobel Prize in Chemistry, much like the Physics Prize, was awarded for work on **neural networks** — meaning it is arguably a prize for biology and computational science rather than chemistry proper. Both the Physics and Chemistry prizes in 2024 can be summarized as awards "for networks."

### The Laureates

- **David Baker** received one half of the prize.
- **Demis Hassabis** and **John Jumper** shared the other half. Both are researchers at **DeepMind**, the company Hassabis founded, which was later acquired by Google.
- According to insider accounts, the mood at DeepMind was jubilant — the entire department was celebrating when the announcement was made.
- A notable cultural point: large technology corporations have now made their way into the Nobel Prize landscape.

### What the Prize Was For

The award recognizes methods that solve the protein problem **in both directions**:

1. Predicting a protein's three-dimensional **structure from its amino acid sequence**.
2. Designing **sequences that will fold into a desired structure** (protein design).

## Why Proteins Matter

DNA stores the information about how to build living organisms, but **proteins actually perform the functions**. They are the "universal soldiers" of biology:

- They **catalyze reactions** as enzymes, often far more efficiently and selectively than chemical catalysts.
- They build and grow muscles, digest food, and perform an enormous share of everything a living organism does.
- Their **specificity is extraordinary** — during COVID, people were struck by how a single amino acid change in the spike protein could stop antibodies from recognizing it. Proteins can recognize their targets (called **ligands**) with that level of precision.

### Practical Motivations

Understanding protein structure has immediate, obvious applications, unlike more abstract discoveries:

- **Drug development** — knowing precisely how a protein recognizes its ligand.
- **Designing new proteins** — for example, a therapeutic protein that binds and destroys a specific component of a bacterial cell, working with the precision of a living cell's own machinery.
- **Understanding disease** — many illnesses stem from an altered protein, an over- or under-expressed protein, or a bacterial toxin. To understand what reaction a protein catalyzes or inhibits, you must first know what it looks like.

## The Protein Folding Problem

### The Basic Difficulty

After the genetic code was cracked, it seemed the problem was solved: sequence follows from DNA, so proteins should be straightforward. But then the real difficulty appeared.

A protein is a long chain of **20 amino acids**, often hundreds of residues long. Crucially, **a protein is not a string of beads** — it folds into a complex three-dimensional shape resembling a tangled mass of wires or thread (not a neat ball, but a chaotic snarl with loops sticking out in all directions). Deducing this shape from the sequence alone appeared impossible.

### Levinthal's Paradox

Two facts stood in tension:

- **Proteins fold reproducibly.** Scientists learned early that if you gently denature a protein (for example by heating it so the weak interactions holding its fold together break) and then restore favorable conditions, it will **renature back into exactly the same conformation** it had before.
- **The number of possible conformations is astronomical.** In 1969, the American scientist **Cyrus Levinthal** calculated that a small protein of just 100 amino acids could in theory adopt at least **10⁴⁷** three-dimensional structures — comparable in order of magnitude to the number of atoms in the universe.

Yet only one structure is actually realized. Something in the folding process reliably steers the chain to a single outcome.

### Prions as the Exception

**Prions** are the famous exception: they have **more than one preferred conformation**, usually two. One is the normal, functional form; the other turns the protein into a destructive agent that collides with normal proteins and forces them to misfold as well, creating a chain reaction. This underlies diseases such as **kuru** (the "laughing death" of Papua New Guinea, linked to ritual consumption of brains, with decades-long incubation) and **Creutzfeldt–Jakob disease**. But even here the number of conformations is **two, not 10⁴⁷**, reinforcing that proteins adopt a strictly limited set of shapes.

This gave scientists hope: if only one conformation is realized, then discovering the rules governing folding should make prediction possible.

## The Experimental Alternative and Its Limits

For a long time, many biologists doubted the folding problem could ever be solved computationally, believing structures could only be determined **experimentally**.

### X-Ray Crystallography

The dominant method was **X-ray crystallographic analysis**: grow crystals of the protein under precise conditions, bombard them, and reconstruct the structure from the diffraction pattern. It is accurate and was steadily refined — researchers could even publish the same protein three times, each with improved resolution, in high-profile journals.

**Its drawbacks were severe:**

- Extremely **slow and labor-intensive** — closer to an art than a routine method.
- Not all proteins **crystallize**. Crystals form only under specific conditions.
- Some proteins, under crystallization conditions, lose their **native conformation** — you learn a structure that doesn't match how the protein looks inside a cell.
- Some proteins simply refuse to form usable crystals at all.

Notably, much of today's skepticism about the new Nobel Prize comes from crystallographers — though their field's difficulties predate AlphaFold.

## Early Computational Progress: Secondary Structure

Gradually, computational analysis revealed that sequences are **not random**; recognizable **patterns** emerged.

Amino acids differ in properties — neutral, polar, charged, hydrophilic, hydrophobic, large, small. Researchers found that certain patterns of these properties reliably produce specific local structures:

- **Alpha helices** — drawn as a ribbon coiled into a spiral.
- **Beta strands/sheets** — drawn as flat arrows stacked against one another.

For example, polar amino acids recurring at roughly every third position signal an alpha helix. These predictions were validated: scientists synthesized short designed peptides that folded exactly as predicted.

### Why This Wasn't Enough

Initial euphoria faded because alpha helices and beta sheets are only the **secondary structure**. The hierarchy is:

1. **Primary structure** — the linear sequence of amino acids.
2. **Secondary structure** — alpha helices and beta sheets, plus the loops between them. The loops and side chains are often where the functionally critical sites (like enzyme active centers) reside.
3. **Tertiary structure** — the full, intricately folded three-dimensional object. This is the actual protein.

The hard part is tertiary structure. Amino acid **number 3 may end up interacting with amino acid number 215** — residues far apart in sequence but adjacent in space, together forming an enzyme's active site. Predicting such long-range contacts was the real challenge.

Some general rules were understood — polar, hydrophilic, and charged residues tend to face outward toward the cell's aqueous environment, while hydrophobic residues hide inside (hydrophilic residues can be internal if shielded from hydrophobic surroundings). But these rules were as far from reconstructing a full structure as "walking to the Moon."

## CASP: Competition as a Driving Force

Progress needed external pressure, and it came in the form of a competition: **CASP (Critical Assessment of Protein Structure Prediction)**.

**How it works:**

- Participants receive only the **sequences** of newly solved, previously unknown proteins that don't resemble known ones.
- They submit their models' predicted structures.
- Predictions are compared against the experimentally determined structures.

By this era it was clear that only **computational methods** could solve the problem — manual prediction had failed.

### Early Results Were Poor

For years, accuracy stagnated at roughly **30%** — in 2006/2007, 2010, and 2014 — nowhere near useful. Then in **2018 (CASP13)**, accuracy jumped dramatically to about **60%**.

## Enter DeepMind

### From Games to Biology

**Demis Hassabis**, founder of **DeepMind**, was a serious chess player, and the company originally focused on game-playing AI, not biology. Its model **AlphaGo** famously defeated the world's best Go and chess players. Hassabis later became fascinated by biology and protein structure — reportedly after reading a book on the subject — and decided to apply his methods to the folding problem.

### Why Neural Networks Worked

An important observation from earlier CASP rounds was that replacing elaborate algorithms (like Monte Carlo modeling) with **brute-force enumeration** produced a modest but genuine improvement. Neural networks go further:

- They rely on **very large training datasets**.
- Their **architecture** feeds outputs back as inputs, allowing iterative learning.
- Success depends on **massive amounts of data**, not blind enumeration — you could never enumerate 10⁴⁷ conformations in any reasonable time.

This mirrors the history of AI more broadly: two "**AI winters**" of stagnation punctuated by sudden breakthroughs. One key breakthrough (exemplified by **AlexNet**) came when **GPUs** dramatically increased computing power, making it feasible to train models on enough data with enough parameters — now counted in the **billions**. Alongside architectural innovations (**convolutional networks, transformers**), abundant training data became the essential precondition.

### AlphaFold 1 and AlphaFold 2

**AlphaFold 1** lifted CASP accuracy to about 60%. This generated enthusiasm but not practical utility — 60% accuracy means roughly 40% is wrong, which is insufficient to replace experimental structure determination.

**AlphaFold 2**, presented at **CASP14 in 2020** (largely overlooked amid the COVID pandemic), was not merely an improved version but a **substantially different architecture**. It reached roughly **90% accuracy**.

At that level, predicted structures became **practically indistinguishable from experimental ones** obtained by X-ray crystallography or **cryo-electron microscopy** in many cases.

### How AlphaFold 2 Works (In Broad Terms)

The method is genuinely complex, not brute-force search. In simplified terms:

- Enormous numbers of **homologous proteins from different species** are loaded in.
- The model uses **sequence alignment** to compare related proteins and identify corresponding regions.
- Training requires both **protein sequences and known structures** (supplied by crystallography), letting the model learn which sequence patterns correspond to which structural features.
- It can then predict the structure of a novel sequence.

The deeper principle is that after training on a large dataset, the layered neural network **learns to see patterns humans cannot detect**. This also raises the well-known interpretability problem shared by all neural networks: we often do not understand **how** the model arrives at its answers.

*(For those interested, the Nobel Committee's "Advanced Information" document describes the mechanism without formulas — though arguably it adds more fog than clarity.)*

## The 200 Million Structure Release

After AlphaFold 2 won CASP so decisively that the competition effectively lost its purpose — the organizers themselves asked "what next?" — DeepMind made a remarkable gesture of goodwill.

- Google/DeepMind used AlphaFold 2 to predict the structures of **all roughly 200 million protein sequences** held in public databases.
- These were sequences researchers had assumed would take **thousands of years** to solve by crystallography or cryo-EM, one at a time.
- Essentially **overnight** (or over a few days), all 200 million predicted structures were **released into open access**.
- Today, public databases contain not just sequences but structures — freely available for anyone to use.

This triggered both panic and euphoria among structural biologists: "We'll lose our jobs" / "No we won't."

## The Skeptical Reaction

Some critics compare the prize to **Barack Obama's Nobel Peace Prize** — awarded not for what has been achieved but for what is expected. The claim that the eternal problem of biology has been "solved" turns out, on closer inspection, to be **premature**.

A useful analogy: when ChatGPT appeared, everyone declared journalists and PR specialists obsolete. That hasn't happened — the model writes well, better than some people, but not better than the best.

### What AlphaFold 2 Does Well

- Predicts the structure of **relatively small, globular proteins** excellently. Researchers have directly compared hand-determined structures with AlphaFold predictions and confirmed the quality.
- Handles **homo-oligomers** reasonably well — proteins built from several **identical** subunits.
- Is **free and openly available**, another generous move by Google.

### What AlphaFold 2 Does Poorly or Not at All

- **Hetero-oligomers** — complexes formed by *different* proteins working together. Here AlphaFold frequently makes errors.
- **Predicting the effects of mutations.** This was painfully relevant during COVID: a single amino acid substitution could render **monoclonal antibodies** useless. Pharmaceutical companies producing these antibodies for immunocompromised patients desperately need such predictions, and AlphaFold 2 cannot deliver them.
- **Docking** — predicting how a protein's structure changes when a **ligand** binds. This is precisely what drug design requires: what happens when a candidate drug or inhibitor attaches to a target protein.
- **Antigen–antibody binding** — how a protein's shape changes upon binding an antibody.

### Why It Fails: An Architecture and Training Problem

Mathematicians working in biology (a field now full of mathematicians and physicists — the image of the biologist as an absent-minded Jacques Paganel with thick glasses and a butterfly net is long obsolete) explain that these failures stem from **how the model is trained**, not from a flaw in the idea.

The crucial point: **the model does not find truth.** Like a generative language model, it produces the *most probable* output given its training data.

- A vivid illustration: if asked to complete "far away in the meadow graze…," the model answers "horses" — but if you have been discussing space beforehand, it may say "comets," steered by context rather than meaning.
- Similarly, if AlphaFold's training set contains many proteins with a given fold, it will predict that fold even when a **hydrophobic amino acid has been inserted into the hydrophilic core**, a change that would in reality destroy the structure. The model carries a **bias** baked in by its training.
- On docking: the training set contains **few structures of ligand-bound proteins** where binding deforms the fold. Inserting a molecule into a tangled ball of protein obviously changes its shape — but the model was never taught this. Criticism that "it docks badly" is fair but somewhat beside the point: **it was never trained to dock.**

Architecture matters too: the shift from **convolutional networks to transformers** proved more successful for protein work, and **diffusion networks** are a further development.

## Where AlphaFold Is Already Transforming Practice

Even where experimental structure determination is still required, AlphaFold **eliminates steps and cuts costs**.

Crystallography is rarely a one-shot process:

1. You grow a crystal and collect one dataset — but often that isn't enough.
2. You need a **second crystal grown under different conditions** and a second dataset to compare against the first.
3. That second crystal frequently **refuses to grow**, wasting time.
4. The alternative is laborious tricks such as **selenomethionine substitution** — replacing methionine with a heavier-atom analogue to obtain a slightly different dataset that helps reconstruct the structure.

Researchers have shown that with AlphaFold you can work from **a single dataset** and let the model supply the missing information that would otherwise demand this whole experimental ordeal. Many practitioners are delighted, reporting that it has **dramatically accelerated their work** and allowed them to pull **old data off the shelf** and finally extract structures from it.

## AlphaFold 3 and the Commercial Question

Nobel Prizes are generally not awarded for closed commercial work. A telling precedent: the COVID vaccine prize went to the mRNA researchers, but **not** to those who developed the **lipid nanoparticle envelope** — a genuinely critical component (mRNA vaccines failed for years precisely because this shell couldn't be made) that remains **under patent**, with BioNTech and Moderna withholding its structure from the scientific community.

AlphaFold 2, by contrast, satisfied every openness condition: the model and the 200 million structures are public.

**AlphaFold 3**, however:

- Is **not open source**; usable only through a website with a limited number of daily queries.
- Is reportedly covered by **contracts with major pharmaceutical companies** who presumably have unrestricted access.
- Is claimed, in published papers, to fix exactly the weaknesses of AlphaFold 2 — including **protein–ligand interaction prediction**, the key to drug design and to problems like designing a ligand that shuts down a harmful bacterial protein to create new antibiotics.
- Cannot currently be independently verified or refuted because of restricted access.

DeepMind is not a charity. Its open release was an enormous gift to science, but the company exists to make money, and there is no benevolent state funding such research efficiently in its place.

## The Other Half of the Prize: David Baker and Rosetta

The second half of the prize covers the **inverse problem**: choosing a sequence that will fold into a **desired structure**.

This work actually came **earlier** than AlphaFold. Baker's computational tool is called **Rosetta**, and he too competed in CASP.

### How Rosetta Works

1. It **combs through the entire database** of known protein structures.
2. It catalogues structural fragments: here an **alpha helix**, there a **beta sheet**, there a particular loop.
3. The user specifies the desired architecture — "I want a helix here and a sheet there."
4. Rosetta selects matching fragments from real proteins.
5. Crucially, it then **optimizes their arrangement** so that the pieces don't destroy each other's folds. Two fragments can come together and disrupt a beautiful alpha helix that would form in isolation; Rosetta arranges the design so the required elements survive in the folded protein.

### What Designed Proteins Can and Cannot Do

Designed proteins are genuinely synthesized and used — for example, proteins that bind chosen ligands. Baker published this work several years ago.

- **Successes: sensors.** If you need to detect a hazardous substance, nanoparticle, or chemical in the environment, you can design a protein that binds it very tightly, then isolate that protein (on a column, for instance) and precisely measure the contaminant's concentration. These "mini-sensors" are structurally simple and work very well.
- **Failures: enzymes.** Natural enzymes catalyze reactions with extraordinary efficiency, and **artificial enzymes remain poor**.

### Why Human Design Differs from Nature's

Designed proteins are **simple and boxy** — "square-nest" constructions, built to a plan.

- Humans think **linearly**: we know the function we want, specify the active site, and let everything else fall where it may.
- Nature works by **evolution over infinite time with infinite attempts**, with death as the filter. A protein may evolve from a tiny ancestor, or two genes may fuse to produce something that accidentally has a useful function, which is then refined over generations. Coronavirus illustrates the process: it constantly changes one amino acid, then another; some changes destroy function and that lineage dies out, while others survive.
- The result is why natural proteins look like **hopelessly tangled balls of wire** — hugely complex, but shaped by a process fundamentally unlike engineering.

### Combining Design with Directed Evolution

The most effective current approach fuses both strategies:

1. **Design** a protein computationally with Rosetta (or successors) and synthesize it.
2. Apply **directed evolution** — itself the subject of an earlier Nobel Prize — by introducing **random mutations** into the gene.
3. Let bacteria such as *E. coli* express thousands of mutant variants.
4. **Screen** for variants that bind the target better. A random substitution may produce a conformation the design model never predicted, yet works slightly better.
5. Take the improved gene, mutagenize again, synthesize, screen, and select — **breeding proteins** much as one breeds plants or livestock.

This hybrid of rational design and evolution yields highly effective sensors, binders, and even simple enzymes.

## What This Says About COVID Conspiracy Theories

The state of protein design is a direct rebuttal to claims that SARS-CoV-2 was **built from scratch in a laboratory**.

- We think in terms of **ready-made structures**; evolution works through endless trial, error, and selection.
- Compared with natural design, humans are still "**walking to the Moon on foot**."
- Conspiracy theorists quietly abandoned the "artificially created" claim once its absurdity became clear, switching instead to the **lab-leak** hypothesis — that the virus came from some mouse or was subjected to accelerated evolution in a lab (such gain-of-function experiments are more or less banned, though some still attempt them).
- The comparison offered: we can build a **shovel**; nature builds a **synchrotron**. Natural enzymes are the synchrotron. We are still at the shovel stage.

## Why Neural Networks Succeeded: A Philosophical Reflection

The first attempts at structure prediction were **purely algorithmic** — explicit rules about what to take into account. This failed. Protein folding, with its long chain of beads and complex three-dimensional interactions, proved too complex for hand-built mathematical models.

### Neural Networks Resemble Living Systems

- A network **trains itself**, feeding its own outputs back to correct previous answers, iterating toward a solution.
- It moves through a decision space by **indirect, roundabout paths** — exactly as living systems do. Nature never goes straight to its goal; it tries things, fails, tries from another direction, and can reach the same solution by wholly different routes.
- **Example of convergence:** a fish and a dolphin have nearly the same body shape because it is the optimal form factor — yet the dolphin arrived there by an enormous detour, evolving as a mammal on land before some mammals returned to the sea.
- This is unsurprising given that neural networks were **originally inspired by neurons** and the visual system.

### Apparent Redundancy Is Actually Function

A recurring theme across biology and AI: what looks like waste turns out to be the source of capability.

- **Brains:** people long calculated that we have far more neurons and connections than our functions seem to require, concluding you should therefore be able to memorize whole libraries, learn 15 professions and 10 languages. In fact this "excess" is precisely what **provides the computational power**.
- **The genome:** when the genetic code was deciphered and only ~20,000 proteins were found encoded across billions of nucleotides, most of the genome was dismissed as **junk**. But **microRNAs** and other regulatory sequences show otherwise. Even genuinely non-coding stretches serve as a **resource for generating new proteins**, as redundant fragments randomly fuse and occasionally produce something useful.
- **Neural networks:** their circular, repetitive, seemingly wasteful architecture is what makes them work.

The breakthrough in AI came precisely when researchers **stopped trying to solve problems the simple, "square-nest" way** — "I want it to play chess, so I'll program chess" — and instead imitated some principles of how our own heads work, redundancy included.

This explains one of the strangest observations: **generative models like GPT play chess better than networks purpose-built for chess**. Nobody fully understands how; strong chess emerges as a **side effect**. People are working to extract where and how such capabilities are learned, but the mechanism remains opaque.

The general lesson: we usually see only nature's **finished product**, which looks perfect, while the **decision-making process** behind it is complicated and anything but direct. Neural networks succeed because they partially reproduce that basic principle of the living.

## Q&A: Folding in Real Time, Evolution as a Search Algorithm, and the Limits of Design

### Could There Be an "AlphaFold for Psychology"?

A viewer asked whether something like AlphaFold could predict human behavior from brain structure. The answer is a firm no, for several reasons:

- **The brain is a black box** — and, ironically, so are neural networks. Researchers studying what networks "remember" have found they retain more than they should, and it is unclear whether they reconstruct or genuinely store this information. We don't fully understand either system.
- **Behavior depends on a million factors.** Biology went through a fashionable phase of hunting for "candidate genes" — the idea that one mutation makes you a miser, an idiot, or an aggressor. Genuine single-gene effects exist but are rare; **MAOA** and aggression in men is one clear example. Typically **hundreds of genes** influence each trait, and character is itself a composite of hundreds of such traits.
- **There is no obvious motive or funding.** With drugs the payoff is clear — AlphaFold 3 is explicitly aimed at drug design. For psychology, nobody has identified where the profit would come from, so the work is unlikely to be prioritized.

### How Proteins Actually Fold: The Time Dimension

A viewer asked whether folding proteins are "computing themselves." Strictly speaking, no — proteins have no computational centers. But the question opens onto one of the deepest reasons AlphaFold sometimes gets structures wrong.

#### Co-translational Folding

Models present folding as an **instantaneous, one-shot event**: sequence in, finished structure out. Reality is very different.

1. A gene is copied into **RNA**.
2. A **ribosome** attaches and reads the three-nucleotide codons one at a time.
3. For each codon it waits until the matching **tRNA** arrives carrying the correct amino acid, which pairs complementarily with the codon.
4. Amino acids are strung together like beads, one after another.
5. **As the chain emerges from the ribosome, it already begins to fold.**

This is called **co-translational folding** — folding happens *during* translation, not after it. The consequence is significant: the first part of the protein folds on its own, then the next segment appears and interacts with it, subtly reshaping it, and that already-modified state then interacts with whatever emerges last. **Folding unfolds in time.**

This changes which structure is optimal. If a protein folded all at once, one conformation would be energetically favorable; because it folds progressively, a **completely different structure** may end up being the one that forms.

#### Rare Codons as Deliberate Pauses

Nature exploits this timing. Some codons are **rare**, meaning the ribosome must wait a long time for the matching tRNA. Research shows this is not accidental:

- Rare codons force the ribosome to **pause**.
- The pause gives the partially synthesized protein **time to fold into the required conformation**.
- If the amino acid arrived too quickly, the protein would fold incorrectly and the final structure would not work properly.

#### Ligands Add Further Complexity

A protein is often not "its own protein" — in normal function it binds a **ligand**, which arrives at some particular moment and alters the structure. The final fold therefore differs from what models predict. This compounds the difficulties already discussed with hetero-oligomers and docking.

### Evolution: Infinite Attempts Plus Selection

While proteins don't compute, **evolution computes by selection**. It has effectively infinite time and infinite attempts — though the attempts are only conditionally infinite, since a bad enough try means the organism dies.

#### Answering the "Monkeys with Typewriters" Objection

Critics say: put infinite monkeys at typewriters and they still won't produce *War and Peace*, therefore evolution is impossible. The rebuttal is simple — **the monkeys have no selection**. Evolution combines vast numbers of random attempts with a **directing filter** that steers development.

Curiously, people intuitively grasp this when it comes to **artificial selection**: everyone understands that our ancestors turned inedible crabapples into modern apples by repeatedly planting seeds from the sweetest fruit, generation after generation. Somehow that understanding evaporates when the same logic is applied to nature.

#### How Wolves Became Dogs

The domestication of the dog is offered as visible, on-the-record evolution — a direct challenge to intelligent-design arguments:

- Ancient humans and wolves normally killed each other. But occasionally a **less aggressive wolf**, or a cub raised among people, would linger nearby.
- People fed it scraps; the animal found it advantageous to stay close.
- That wolf paired with a similarly unaggressive mate, and their cubs were, on average, **slightly less aggressive still**.
- Humans kept the friendliest animals, fed them more, and gave them better survival odds — repeating the cycle generation after generation.
- Selecting for **friendliness** dragged the **phenotype** along with it: animals became smaller, teeth shrank. The result is the modern spectrum from wolf to chihuahua.

The **Novosibirsk fox experiment** deliberately replicated this by breeding only the friendliest foxes, and — despite some reported controversies — the design remains a reasonable demonstration of the principle.

#### Artificial vs. Natural Selection

Are they fundamentally different phenomena? Not really — **artificial selection reproduces natural selection**, just with a human-chosen criterion.

- **Artificial selection** aims at what suits people.
- **Natural selection** has no goal at all; it simply happens that the better-adapted survive. There are many possible directions because there are many niches and conditions.
- Neither offers guarantees. A species may wander into a niche too harsh to adapt to and simply go extinct. As in all of biology, **nothing is one hundred percent except death**.

This is precisely the contrast with protein engineering: we want guarantees, we want to specify "three alpha folds and two alpha helices with exactly this function." Nature doesn't work that way — it is winding, roundabout, driven by trial and error.

#### Film Recommendations

Two films are suggested as visual intuitions for these ideas:

- ***Annihilation*** — not brilliant in plot, but visually beautiful; its tentacle-like emergent structures capture how living things grow, probing in all directions at once.
- ***Ex Machina*** — by the same director, about artificial intelligence, and considered one of the best science fiction films.

### Why Answers Breed More Questions

Asked whether the endless proliferation of questions reflects the brain or the universe, the answer is **the brain**, and it is evolutionary. Our ancestors who did *not* look for problems survived poorly — relax too much in a cave and something eats you. We are therefore **wired to hunt for problems**.

The implication: the idea that you will one day solve everything and settle into permanent bliss is a **flawed premise**. That state will never arrive. Recognizing this frees you from chasing your own tail. The practical advice is to **feed yourself interesting problems**, since you will seek problems regardless — otherwise the drive degenerates into trivia, procrastination, and mental decline.

### Assorted Shorter Answers

**Crystal structure prediction (Artem Oganov's work).** Not a competitor to AlphaFold — it is a different field of chemistry, predicting how substances behave under extreme conditions such as **500 atmospheres of pressure** or very high temperatures.

**GMO achievements.** Possible future topic, but advances are **substantially fewer than they might have been** because GMOs are banned almost everywhere.

**Epigenetics.** Taken seriously — the speaker wrote both a term paper and a diploma thesis on it. Epigenetics is **another major regulatory system**, discovered relatively recently (1980s–90s, with serious work following later). It sits alongside the other layers of regulation already discussed:

- Regulation at the level of the **gene** (epigenetic marks on DNA determining whether a gene is activated)
- Regulation at the level of **RNA** (microRNAs)
- Regulation at the level of **protein**

It functions as a system of **rapid regulation** — for instance, eating a poor diet produces epigenetic marks on genes involved in metabolism.

**Have all the Nobel Prizes been awarded?** Not yet — only two at the time of speaking, with more pending. Everyone has already joked that all that remains is a Nobel for neural networks, completing the sweep.

### Verifying 200 Million Predicted Structures

A viewer asked how many of AlphaFold's 200 million predictions have been checked and how many are simply wrong.

- **Nobody will re-verify 200 million structures**, and there's no need to.
- We already know the **pattern of reliability**: which protein types the model handles well and which it doesn't. If a specific protein is a critical drug target, you will verify it structurally anyway — and even then AlphaFold reduces the burden, letting you get a good structure from a **single dataset** instead of several.
- Errors do occur, sometimes **critical ones** where the prediction bears no resemblance to reality. But the causes are largely understood: co-translational folding, hetero-oligomers, bound ligands. Knowing the risk factors lets researchers scrutinize or exclude those cases.
- The database is **enormously valuable for fundamental research**, not just applications: studies of **protein evolution** (how proteins changed across species, which functions were gained or lost), genome-change laws, molecular clock calibration. All of this needs structures, and now the structures exist.

#### The ChatGPT Analogy

The situation parallels machine translation. The **ABBYY** company spent years trying to crack translation by first solving the **problem of meaning** — the assumption being that electronic minds must genuinely understand what is said. Then ChatGPT appeared: it understands nothing, has no consciousness, doesn't think — and translates well enough. Not perfectly, but more than adequately for everyday purposes, and good enough that you can feed it a large document in a language you don't read and get a usable result. (Hence the argument that ABBYY should have begun restructuring the day after ChatGPT launched, rather than arriving at the layoffs scandal it eventually did.)

The same logic applies to AlphaFold's database: **good enough at scale, with known caveats, is transformative.**

### Design of Organisms, Transhumanism, and Immortality

Asked whether full-scale design of organisms and organs — and thus transhumanism and immortality — remains distant, the answer is yes: **as far away as walking to the Moon**.

- **Craig Venter's** attempt to build a minimal organism illustrates how far there is to go.
- Human design and complex biological systems "combine very badly" at present.
- Nature has effectively infinite time and infinite attempts; we approach the problem differently.
- That different approach is sometimes *more* successful in its own terms: **airplanes don't fly like birds**, they fly on a principle humans invented, and they fly well. Birds also fly well — differently.
- But for **organ design** and similar biological engineering, our alternative approach simply isn't working yet.

## Closing Notes

The stream ends with the usual requests — likes, subscriptions, active commenting (which pleases YouTube's own neural networks), and sponsorship via YouTube memberships, Patreon, or Boosty as a meaningful part of the channel's finances.

Announcements go out via the Telegram channel and Facebook, though Facebook's algorithms appear to have **shadow-banned** the page for unknown reasons — another reminder that nobody knows what goes on inside these electronic brains.

Upcoming content:

- **Tomorrow:** a wrap-up stream covering all three Nobel Prizes concisely — what was awarded, why, and why it matters.
- **Already released:** a new video on **Darwin's theory** and attempts to ban it — in Russia and elsewhere, since this is not a uniquely Russian phenomenon. The video takes a biological angle, examining scientific data suggesting we can predict, with some probability, which people are more likely to reject rational explanations in favor of supernatural ones.
