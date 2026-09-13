---
title: "From Assembly Lines to AI Agents: Rethinking Software Delivery Organizations"
date: "2026-09-13"
videoUrl: "https://www.youtube.com/watch?v=uImPHIhHzFs"
channelName: "Организованное программирование | Кирилл Мокевнин"
channelUrl: "https://www.youtube.com/channel/UCJuotEzekRzmMEQdADcdJ8w"
shortDescription: "Former T-Bank technical director Alexander Polomodov breaks down how AI agents are dismantling the Taylorist, pipeline-style organization of software delivery — collapsing specialized roles like frontend, backend, QA, and analyst into leaner \"product engineer\" and \"discovery\" pairings supported by agents. He explores the organizational friction this creates in large companies (platform teams vs. business verticals, legacy tooling built for humans not agents), why spec-driven development and domain-precise language dramatically improve agent output, and why early-adopter advantages in custom internal tooling are now becoming liabilities. The conversation closes on harder open questions: how to train juniors and hire engineers when old signals of competence are easily faked by agents, why agents excel at well-specified stateless systems but struggle with stateful legacy and physical-world systems, and how to measure whether AI adoption is actually creating business value versus just generating more code."
tags: ["ai agents", "software delivery", "organizational change", "spec-driven development", "platform engineering", "engineering metrics"]
tagKeys: ["ai-agents", "software-delivery", "organizational-change", "spec-driven-development", "platform-engineering", "engineering-metrics"]
---

# From Assembly Lines to AI Agents: Rethinking Software Delivery Organizations

## Introduction and Context

This conversation features Alexander Polomodov, who until the end of August served as a technical director at T-Bank, where his last year of work focused on AI-driven development at the company level — steering the organization toward a new model of building software. He is currently transitioning out of the company and plans to relocate to London in the fall. The discussion centers on how large organizations are restructuring their software delivery processes now that AI agents are writing a substantial share of code, drawing on his direct experience leading this transformation at scale.

## How Software Delivery Has Traditionally Been Organized

Large digital organizations have historically been structured as pipelines or conveyor belts for delivering value, split into two broad phases:

- **Discovery** — owned by business people, product managers, and various analysts, focused on deciding *what* to build.
- **Delivery** — focused on *how* to build, ship, and maintain it.

Following the logic of Taylorism (the industrial "pin factory" model popularized by Adam Smith), these phases were further broken down into discrete steps, each owned by specialists with narrowly defined job titles. The industry evolved toward the "stream-aligned team" and "platform team" structure familiar from Team Topologies, where a stream-aligned team ideally contains a mix of roles (frontend, backend, QA engineers, analysts, and so on) so it can independently ship changes end to end. In large corporations, such teams often ballooned to 15–20 people.

## The Shift Driven by AI Agents

By 2026, it became clear that if agents are writing the code, many of these narrowly specialized roles — separate frontend developers, backend developers, QA engineers who write automated tests, analysts who translate high-level product vision into specifications — are no longer needed as distinct headcount. This doesn't mean the underlying *roles* or functions disappear, but that far fewer *people* are needed to cover them, since a single person augmented by well-configured agents can cover competencies they didn't previously have themselves.

This creates pressure to shrink stream-aligned teams and collapse the handoffs between stages. However, this is a genuine organizational change, not just a tooling upgrade, and it is much harder to execute in large, established companies than in startups, where processes are lighter and people already wear multiple hats out of necessity. Large companies have entrenched job titles and identities tied to specific pipeline stages — people whose professional identity is built around excelling at "their" step of the conveyor belt, similar to specialized workers in an industrial assembly line.

### The 2025 "Assistant" Phase vs. the 2026 "Agent" Phase

In 2025, before true agents took hold, AI was used more like an assistant within each existing role: product people generated product write-ups with ChatGPT, analysts fed requirements documents to assistants and asked for detailed specs, engineers asked assistants to prioritize and generate tasks. This local optimization at each stage created a false sense of productivity — lots of visible activity at every step, but not much more actually reaching production, because the handoffs between people remained the bottleneck.

By 2026 the realization is that the more effective path is to *reduce* the number of handoffs altogether, letting fewer people (or the same people) cover more of the pipeline themselves with agent support, rather than just accelerating each individual, siloed step.

## What Roles Actually Remain

The question isn't that fewer roles/functions are needed — it's that fewer distinct job titles and separate people are needed to cover them. The target team shape that Polomodov describes (and that was already a direction T-Bank was exploring even before generative AI) collapses toward:

- A **Discovery-focused person** (product-oriented), responsible for figuring out what to build based on an intent or hypothesis.
- A **Delivery-focused person** (a "product engineer"), who turns that intent into specs, code, pull requests, code review, tests, and gets it to production.
- Some **operations/support** function, since software still needs to run somewhere and not every issue should flow directly to the development team.

Notably absent from this target picture are separate dedicated roles for QA engineers, analysts, and other narrow specialists as distinct headcounts — their functions get absorbed by the smaller core team, assisted by agents.

## The Idealized Flat Team Model

In this vision:

- A product person can generate more hypotheses and hand off not just requirements but working prototypes they've already built and tested themselves with an agent's help.
- A "product engineer" on the delivery side must account for all the cross-cutting requirements (security, reliability, compliance, company architectural standards) — ideally, these are **externalized as company-wide policies** rather than enforced manually by a human reviewer weeks later. The goal is for these policies to be embedded early, e.g., accessible to agents as skills (analogous to Anthropic's "agent playbook" concept), applied automatically when translating an intent into implementable requirements.
- Automated gates then validate any pull request/change against these policies before it reaches production, eliminating slow manual review bottlenecks.

Achieving this "magical world" is acknowledged as extremely difficult in practice, even though it's a clear target to aim for.

## Deterministic Gates vs. Pure AI Judgment

A key distinction is drawn between "vibe coding" and genuine "AI-native engineering." In real projects, the effective approach combines:

- **Policy encoded as agent-readable guidance** (e.g., skills that the agent follows), and
- **A layered set of deterministic, automated checks** that every change must pass — accumulated incrementally as new problems are encountered (one deterministic check gets added after each new class of issue surfaces, eventually producing a large suite of checks/scripts).

To design a system this way, an architect/technical lead needs to explicitly decide what metrics they are optimizing for from the start of a project:

- Willingness to explain intent to an agent repeatedly vs. wanting to state it once.
- Preference for **self-healing architecture** (problems surface at change-time, not at runtime/operations-time).
- Accepting that regressions can't be checked manually and therefore must be caught by automated regression testing, while manual review is reserved for verifying new increments.
- Distinguishing "standard" change profiles (e.g., adding routine content) — which should be optimized for fast, largely automatic incremental validation — from "non-standard" changes (e.g., large refactors), which are deliberately not optimized for speed and are expected to take longer with more deliberate design.

Once these questions are answered, the shape of the whole system — process, architecture, and infrastructure — becomes much clearer. The catch is that most existing ("brownfield") systems were architected around entirely different metrics, so introducing AI into these established codebases and processes drags a long tail of required changes; you effectively have to re-optimize the whole production system around a new goal, not just bolt AI onto the old one.

## Organizational Structure for Rolling This Out at Scale

In large companies, the rollout typically involves:

- **Platform engineering**, which provides general-purpose tools and infrastructure: a **model gateway** (a single point of access to internal/external models, managing quotas, entities, etc.), an **MCP Hub** and **skill hub** (catalogs of available APIs/tools and vetted, shareable skills), and sandboxing/dev-boxing infrastructure so agents can run in more environments than just a developer's laptop. This platform group typically works very closely with the security team to get these tools approved.
- **Business verticals** (e.g., investment banking, retail banking, mobile) that operate somewhat independently and need to adapt their own development processes.

A structural tension (a "dualism") exists here: platform teams want their tools to be **"agent-ready"** — accessible and efficiently usable by an agent, not just humans through a UI — but platform interfaces were historically designed for graphical human interfaces, not agentic consumption. When platform teams expose their CRUD operations via MCP, the interfaces often turn out to be so verbose or overly granular that an agent has to make an excessive number of calls just to assemble the information it needs.

### Business Verticals Face a Double Burden

Business verticals must simultaneously:

1. Redesign their own internal development processes and team composition (which vary widely — from advanced "product + product-engineer" pairs to old-fashioned chains of product manager → business analyst → systems analyst → multiple engineers → automated tester → manual tester).
2. Negotiate with platform teams about what tools and capabilities are actually available to them, which can also be uneven — highly motivated, fast-moving teams can often get a pilot approved and gain access to top-tier tools by promising to demonstrate value, while slower-moving teams are stuck with baseline platform capabilities that lag behind (not built to "SOTA" level).

This creates a "the future is already here, it's just unevenly distributed" dynamic: some teams fully exploit new tools and get informal license to do so aggressively, achieving standout results (e.g., committing to launch a new product with a smaller team using AI subscriptions instead of standard headcount, replacing Jira/Wiki-based workflows with an "AI-native" repository-based intent-and-spec system, running SDD loops, showing demos weekly, and shipping in half the time with half the people). Meanwhile, teams without that same urgency, still using standard tools, may see more code and more pull requests generated without any real gain in throughput — the actual bottleneck (e.g., a fixed high-priority backlog agreed with stakeholders) remains unchanged, so leadership doesn't perceive AI as having truly "landed," even though incidental technical debt gets cleaned up during freed-up time.

## The Difficulty of Generalizing Success Company-Wide

Scaling isolated pockets of success to the whole organization is difficult:

- A high-revenue, highly motivated business line can negotiate special conditions for itself that aren't rolled out company-wide.
- Such lines can advance ahead of the centralized platform function, creating a mismatch: when their innovations are proposed for company-wide rollout, they collide with centralized requirements (e.g., security standards) that were relaxed for a pilot but not satisfied at scale.
- This can create circular, frustrating conversations: central functions say a capability can't be rolled out broadly because it's "not safe," and when pressed for what would make it safe, they point to compliance frameworks or standards (e.g., referencing an AWS specification for MCP security) that are scheduled for a future date years away — prompting the wry observation that the goal seems to have shifted from making the system "work" to making it merely "compliant" on paper.

## The MCP and Tooling Gap in Practice

Even mature vendors have basic friction points illustrating how far the ecosystem still is from "just works" integration. For example, one MCP implementation ties an OAuth token directly to the MCP server itself rather than allowing per-user login, meaning a separate MCP instance has to be created for every individual user instead of sharing one integration across a team. This kind of rough edge is common across the industry right now — most available tools are off-the-shelf rather than custom-built, yet even at that level only a handful of vendors have achieved true one-click, fully working integration. Companies mostly find that rolling out these tools internally is still a hassle, and adopters have to wait for vendors to mature their offerings. The underlying MCP standard itself is still evolving quickly and being simplified, largely because early versions created a lot of pain around state management.

## The Return of the Generalist: Why Frontend/Backend Separation Is Reversing

A central paradox is addressed directly: the industry spent years arguing for specialization — splitting frontend from backend, praising division of labor — and now everyone is suddenly saying "we just need full-stack generalists." This isn't a contradiction; it reflects a change in what the underlying production system is being optimized for.

### Why Specialization Made Sense Before

Splitting a pipeline into stages, each requiring different skills, is economically similar to comparative advantage in trade: even if one worker is better at everything, it's more efficient to assign each specialist to what they do relatively best. This let organizations:

- Increase throughput without proportionally increasing headcount.
- Find engineers who could deliver predictable, repeatable quality within a narrow stage, rather than needing rare people who could master everything.

Over time, complexity that could have stayed simple got pushed onto specific stages in pursuit of certain technical goals — frontend evolved into something as complex as a full application with its own state management, essentially becoming "desktop apps built in a browser." The same complexity growth happened in backend and later mobile domains. This created a recurring pattern (described as a personal "Groundhog Day") where each domain eventually absorbed enough complexity to become its own profession.

### The Coordination Cost of Pipelines

This specialization created a real cost: handing off work between pipeline stages. A telling example is a conference talk submission describing a feature that required coordinating four separate teams — which isn't really an architecture story, it's a symptom of organizational dysfunction. The root problem was that no single person could hold the whole feature in their head; when someone finally could, they became an irreplaceable "bus factor of one." Splitting the work into stages was a way to route around this limitation, trading unified understanding for repeatable, teachable segments.

### What Changed With Agents

AI progressed from autocomplete, to block-level editing, to full agents that have effectively seen the entire public internet's code plus enormous volumes of synthetic reinforcement-learning data built specifically to solve engineering problems. As a result, an agent can competently write frontend code, backend code, and everything in between — becoming a kind of universal equalizer (likened to a "great equalizer": the tool itself can handle almost any type of task).

This shifts the key question away from "which specialist do I need" toward "where do I aim this capability, and how do I verify the task was actually completed." If a person has solid general engineering judgment and real domain understanding, they can review both frontend and backend work without needing to be a narrow specialist in either — effectively returning the industry to an earlier era where engineers were more universally capable.

This mirrors an existing trend already underway before generative AI: leading organizations increasingly wanted "staff" or "principal" engineers — versatile senior people who could just solve the problem in front of them rather than identifying strictly as "a Java developer" or "a Go developer." That model is now becoming attainable at a much lower seniority level: a "product engineer" can start behaving this way even close to a junior level, because the agent extends their reach — while remaining closer to the product-thinking side of the work.

## Design Review Over Code Review

A related historical pattern is highlighted: some top engineering organizations recognized that code review alone is insufficient — a "design review" done earlier, before code is written, is what really matters. Historically this kind of upfront design review (documented via structures like an Architecture Decision Record, similar to Amazon's "one-way door" framing for expensive, hard-to-reverse decisions) was reserved only for large, costly changes, because doing it for every small task was too heavy.

With agents, this same discipline becomes cheap enough to apply at the level of individual tasks:

1. A product-side intent is defined.
2. Specifications ("specs") are written collaboratively.
3. An agent proposes an implementation plan, which a human reviews.
4. The agent writes the code.
5. The human checks whether acceptance criteria are met.

This benefits people who genuinely want to solve problems and see results, since they can now cover more ground personally. However, it can be a loss for engineers who specifically enjoyed the *craft* of writing code and the flow state of doing so continuously — the new workflow is inherently more asynchronous: you delegate a task, the agent goes off and works, and you must shift attention elsewhere in the meantime.

### Evidence That Over-Interacting With Agents Hurts Quality

Research on interactive benchmarks (from organizations including Meta and Scale AI) measuring how agents perform when given partial information and iterative clarification found that heavy real-time back-and-forth steering — watching the agent's trajectory and constantly injecting new instructions or requirements — dramatically reduces solution quality. The implication is that models perform best in something like a genuine Spec-Driven Development flow: front-load all requirements and review them as specs before execution, then let the agent work independently and verify against acceptance criteria at the end, rather than micromanaging it mid-task.

## Spec-Driven Development Works Even for Small Teams and Solo Projects

Processes once dismissed as unnecessary "enterprise" overhead — heavy specs, structured review, formal acceptance criteria — turn out to be valuable even for very small teams or solo developers once they're automated and cheap. A small team (with roughly one and a half people writing code) has fully adopted this approach: defining specs upfront, referencing ADRs, and structuring new projects this way from day one, because it demonstrably works. There's some nuance in how heavy the tooling needs to be — for very simple projects a full spec-driven framework can be overkill, while more ambitious products benefit from it — but the general direction is that pre-defined specifications used throughout the process will likely become standard at every scale, and skipping this approach risks falling behind those who use it.

### Why Explicit Specs Help Models So Much

Agents and models perform much better when the intent and acceptance criteria are made explicit and written down, because they can directly use that information to evaluate whether they've completed the task correctly, creating something close to a closed feedback loop within a given feature scope. A personal anecdote illustrates this: converting a local-first application prototype into a multi-tenant system was done in a single day with an agent — including going through a structured wizard-like process that produced a quality Architecture Decision Record — work that previously would have taken roughly a week to write up, two more weeks to socialize and explain to stakeholders, and a quarter to actually implement, with results not guaranteed even then. While the resulting prototype wasn't perfect, having genuinely detailed understanding of the system dramatically increases the value an architect provides, since they can articulate precise tradeoffs and explore modeling options directly with the agent in the organization's own architectural language.

### Domain-Specific Language Matters More Than Generic Prompting

Related research suggests that when a person communicates with an agent using vague, generic language, they get generic, mediocre answers. When they use precise, domain-specific terminology, the model appears to locate a much richer internal representation of that domain and produces significantly higher-quality output. This supports the broader claim that domain expertise can matter more than raw software engineering skill when delegating tasks to agents — a skilled accountant with strong domain fluency may get better results delegating an accounting task to an agent than a top engineer with no accounting background.

## Renaming and Reworking Projects for Agent Legibility

A concrete practical technique: legacy projects often accumulate inconsistent or outdated terminology over many years (in this case, an educational platform dating back over a decade), and agents make noticeably worse inferences when the code and documentation don't align with clean, standard domain vocabulary. Once this became clear, a significant refactoring effort was undertaken — deliberately renaming components and concepts to match proper, recognizable domain terminology (for example, aligning with standard terms used elsewhere, such as "admissions" processes in universities) so agents could reason about the system correctly without needing everything explained manually every time. Using terminology the model was actually trained on measurably improves the quality of its reasoning and recommendations.

## Big Tech's Custom Platforms: From Asset to Liability

A broader structural pattern is described using the history of internal tooling at large technology companies:

- At massive scale, standard open-source tools (Elasticsearch, Mattermost, Apache Zeppelin, and similar) historically broke down when stretched across thousands of engineers or users.
- Companies would try contributing scaling improvements upstream, but maintainers often rejected them as too niche and too disruptive to the broader architecture.
- This forced companies to fork these tools and heavily customize them, adding not just scaling and enterprise features (like federation) but also new product surfaces — partly driven by genuine need, and partly by internal incentives, since product managers needed visible "wins" and creative differentiation to justify their role and career growth rather than simply mirroring upstream.
- This same dynamic drove heavy internal UI/UX customization — building proprietary design systems and redesigned interfaces on top of forked tools.

This strategy worked well for a long time, letting companies capture economies of scale through their differentiated internal platforms.

### The Reversal With AI Agents

Once agents entered the picture, this advantage flipped into a liability:

- Agents are extremely well-trained on standard, mainstream open-source tools and can generally use them very effectively out of the box.
- But agents don't know an organization's internal quirks — the accumulated custom patches and modifications layered onto a forked tool.
- As a result, when internal platforms were exposed to agents, the biggest obstacle wasn't the agent's general capability — it was the mismatch between the internal customized tool and the standard version the agent was trained on, forcing organizations to explain excessive amounts of local context.
- This has led to internal pressure to reverse the customization trend: aligning internal forks back toward interface-compatibility with upstream open-source solutions specifically so agents can work with them "out of the box," gaining a productivity boost without needing to stuff huge amounts of contextual explanation into the model.
- This is very difficult to execute, and pretrained knowledge of standard tools consistently outperforms attempts to compensate via in-context instructions or fine-tuning; even fine-tuning or reinforcement learning approaches typically regress into just cramming more usage examples into an ever-larger context window, hoping the agent will eventually get it right.

A parallel real-world anecdote reinforces this: a habit of always trying to contribute fixes back to open-source projects (rather than keeping local patches) has become far easier with agent assistance — roughly twenty pull requests were submitted to various upstream projects (including Shopify-related projects) over about three months, each arising naturally from an in-context coding session where a local problem was identified and immediately upstreamed instead of just patched locally, keeping local customization to a minimum.

### A Broader Pattern: Early Advantages Becoming Later Liabilities

This dynamic is compared to how being an early adopter of a technology can later become a burden: cities like New York and London that built some of the world's first subway systems now suffer from the resulting legacy constraints, because many problems weren't understood at the time of construction. Similarly, the United States built one of the earliest modern banking systems, and it still relies on checks — an artifact of legacy infrastructure that most of the world has skipped entirely.

A modern analogy is drawn to robotics: humanoid robots are heavily hyped today largely because factories have already sunk enormous capital into automating pipelines designed around human physical form factors. Rather than redesigning an entire production line from scratch (which could use non-humanoid designs like wheeled bases with differently placed manipulators, likely more efficient for a pure greenfield build), companies find it cheaper to simply replace the remaining human-shaped gaps in an existing pipeline with human-shaped robots. This reflects a broader truth: humanoid robots are necessary largely because the surrounding environment and automation were already designed around humans, not because that's the objectively optimal form for a fresh design. If someone were building a car factory from scratch today, they would likely favor non-humanoid robotic systems optimized purely for throughput, cost, and simplicity — but humanoid robots exist now regardless and are already impressive in demonstrations like performances and competitions.

## The Future of Knowledge Bases: Confluence/Jira vs. Git-Centric Systems

Today, most large organizations rely heavily on tools like Confluence and Jira for documentation and requirements — storage systems fundamentally separate from code. There's a growing trend, driven by Spec-Driven Development, toward treating Git repositories as a more universal knowledge source rather than something purely for programmers, prompting questions about whether all organizational knowledge should migrate into repositories.

This depends heavily on who actually uses these knowledge systems today. Current wiki/ticket-based tools serve an extremely broad set of users beyond engineers: executives, product managers, designers, business/risk/quantitative analysts, support staff, and QA — not just developers. Meanwhile, some individuals and teams have already successfully moved their source of truth directly into the repository and are seeing strong results.

## From Screen-Based to Feature-Based Documentation: A Mobile Banking Case Study

A concrete story illustrates how painful it is to shift an organization's relationship with its own documentation. In a mobile banking product, requirements had historically been written per screen, and each new version's spec was essentially a copy-paste of the previous one, describing which screens appeared and what was on them. Almost nobody actually read these documents except support staff, who needed to figure out what had changed in a new release. When a serious bug appeared in the main screen of a new release, engineers escalated it to the technical director, who asked for help — and was handed a spec so long it felt like fifty pages of scrolling, with no concise conceptual summary of what the screen was supposed to do.

This revealed a kind of **Stockholm syndrome**: people who had worked with this format for years had simply gotten used to it. Those who genuinely needed to read the docs did so out of necessity; everyone else skipped them entirely. Talking to product managers and designers surfaced the real issue — they were actually designing and thinking in Figma, with proper scenarios and flows, and that clean thinking was later mangled into these unreadable screen-based specs.

This led to a deliberate effort to convert analysts' work from screen-based descriptions to **feature-based** descriptions that ordinary people — not just the select product and design insiders — could actually read and understand. A dedicated senior analyst was found to drive this transformation methodically, and it took about two years to fully change the process. Notably, the team never actually left the wiki (Confluence-style) platform — the real shift was orthogonal, from organizing content around screens to organizing it around features, with screens becoming just a composed view built from underlying feature tickets.

### The Harder Lesson: Migrating an Entire Organization's Knowledge to Git

Beyond that, an even more ambitious experiment was attempted in mobile banking: shifting configuration management to a GitOps-style approach and forcing analysts to start working directly in Git. This was extremely difficult even with direct authority and organizational power behind it. The takeaway is that changing information-handling habits within a large organization is inherently hard — and it becomes almost impossible to imagine replicating something like "move the entire company's knowledge base into Git" at the scale of tens of thousands of employees (or even under twenty, in some contexts) without dedicated ownership, sustained effort, and executive backing.

### Building an "Internal Perplexity" and Why It's Harder Than It Looks

One common attempted solution: building an internal search/RAG system that indexes everything across Confluence, wikis, GitLab Pages, and other repositories — complete with standard search metrics, a generation layer, full-text and semantic (vector) search, and ideally graph-based connections between documents. The core problem with this approach is that conventional search systems improve through **online relevance feedback loops** — you observe how people interact with results and use that signal to refine ranking. Internal knowledge search tools usually lack this feedback loop even with thousands of users, because usage patterns are sparse and inconsistent.

A concrete symptom: searching an internal tool for something like "explain the company's IT strategy" might return five different fragments — each a different business line's own interpretation of strategy — with no single canonical answer, because the canonical version was only read once, while various local interpretations got revisited more often and thus ranked higher. Determining true relevance in this situation is genuinely unclear.

### How Organizational Practices Actually Spread

The practical conclusion is that in large organizations, human behavior often can't be directly changed, so a technical workaround is built instead so that AI agents can be given the context they need, forming a kind of baseline. From there, motivated individuals adopt new approaches, word of mouth spreads that the new way works better, and top performers gradually migrate to the new process — following a classic technology-adoption-curve pattern.

### Vendor Lock-In: Confluence/Jira vs. Emerging Alternatives

Established platforms are aware of the threat AI poses to their position and are pushing hard to remain indispensable — reframing themselves not merely as document repositories but as custodians of actual workflows and organizational knowledge, encouraging users to keep relying on them for search and agent-facing knowledge layers. Internationally, newer, more flexible tools (like Linear-style alternatives) are gaining traction among teams that want to assemble their own workflows without being locked into a single monolithic vendor. In some markets (Russia specifically) this is complicated by licensing and access restrictions on established vendors, pushing some organizations toward older on-premise versions despite licensing violations. The broader prediction is that established international vendors will face a real battle over the next few years, precisely because the lock-in around documented workflows and institutional habits is very strong and organizational change is inherently slow.

## Measuring the Impact of AI Adoption: A Three-Layer Framework

A structured way of thinking about metrics for AI/agent adoption is laid out in three progressive layers.

### Layer 1: Usage and Penetration Metrics

The starting point is simply measuring whether people are actually using the tools they've been given — adoption and penetration rates. For agent-run (not just human-run) scenarios, this extends to tracking which use cases (like code review or bug fixing) are actually covered by agents and how much work they perform there. A related but flawed metric is raw volume of AI-generated code, which is criticized as being about as naive as the old "lines of code" metric — easy to game and largely meaningless on its own, though still useful as a starting signal to identify anomalies (e.g., parts of the organization not adopting the tools) worth investigating.

### Layer 2: Time-Based Job Metrics

The more interesting layer requires treating the engineering organization like a product with its own "customer journey" — identifying the discrete **jobs** engineers actually perform (implementing a change, discovering information, making an architectural decision, reviewing someone else's code, resolving an incident) and measuring the time each job takes.

Google is cited as a pioneering example (dating back to around 2019) of building genuine instrumentation for this: collecting logs from various tools, converting them into events, aggregating events into sessions, tagging sessions with the type of work and an artifact identifier (like a ticket or merge request), and then building metrics on top of that structure. This let Google measure not just how AI assistance affects a job's duration, but how any platform-tooling change affects it — for example, timing an end-to-end scenario like creating a new service and deploying it to production, then systematically reducing that time (a day → four hours → two hours) once it's actually measured.

A cautionary internal example: a team measured "diff time" (borrowed from Meta's terminology) — the time from merge request creation to merge — and found no visible improvement from AI assistance. Digging deeper revealed the likely explanation: an agent mainly accelerates the very first stage, from initial idea to the first draft merge request, not the later stage of incorporating review comments from humans or bots. When asked whether they could measure time from the original *intent* all the way to deployment, the team admitted they didn't capture when work actually began — unlike Google, which explicitly ties logs back to the person's work session and its associated ticket, enabling a true intent-to-deployment comparison with and without agent assistance. Building this kind of instrumentation is very difficult.

**Important caveat:** time saved from AI assistance does not automatically convert into business value, because work tends to expand to fill available time (like gas filling a container) — a freed-up engineer might simply spend the saved time socializing rather than doing more valuable work. Converting saved time into real outcomes is a separate, deliberate challenge.

### Layer 3: Closing the Economic Loop

The third layer attempts to connect job-level time savings to genuine business economics — calculating time saved across jobs against the cost of the platform team, tooling instrumentation, and token spend. Since this is difficult, most organizations instead try to reason from flow metrics instead of hard causal data: team throughput (story points, tickets closed per unit time) or lead/cycle time for the portion of the process AI has touched.

**The throughput trap:** if throughput increases by 20%, it's tempting to declare success, but it's essential to examine *what* that additional 20% actually consists of. As discussed with a guest (Gleb Mikheev) on a related podcast conversation, if the "discovery" process — generating and validating what's actually worth building — isn't scaled up alongside delivery capacity, the next layer of tasks pulled from the backlog will, by a law of diminishing returns, be lower-value than the first 100%. Teams then end up burning through arguably marginal tasks (nice-to-haves, internal technical items) while the business perceives no incremental benefit, since it never depended on those items in the first place. A real anecdote reinforces this: a company that pushed its team to accelerate through a years-old backlog of small tickets and content fixes suddenly found "productized" backlog draining unexpectedly fast, revealing that the backlog of *genuinely valuable* ideas had actually been artificially limited by the team's prior throughput ceiling, not by a lack of ideas — meaning as delivery capacity increases, the pressure shifts to discovery teams to generate correspondingly more high-value work, or organizations risk exhausting useful backlog and resorting to low-value busywork.

### Reality Check on Google-Style Instrumentation

Google's approach works partly because Google has essentially unlimited resources (driven by advertising revenue) and a research-lab culture that supports building such elaborate systems — so it's not automatically replicable elsewhere. However, Meta has published comparable, more modest work specifically on "diff time" for product-change scenarios, showing measurable effects: for instance, rolling out better test automation for legacy projects to a subset first, then measuring diff-time improvements (around 10–15% faster), and similarly for gradually introducing static typing to previously untyped test code in Hack (Meta's PHP-like language) and observing how quickly features shipped afterward.

A personal example from mobile banking: a counterfactual analysis was done comparing cross-platform mobile development against separate native Android/iOS implementations to estimate time savings — a solid pre-AI-era instrumentation exercise. However, an attempt to build a similarly rigorous system to instrument how engineers actually work was blocked by leadership at the time, who argued that with major process changes coming, it wasn't the right moment for this kind of "overly academic" measurement effort. In hindsight, this kind of instrumentation is valuable specifically because it lets you argue with hard numbers against people who insist "everything already works fine for me and I won't change" — pointing to comparable teams that improved efficiency by changing their approach is a much stronger argument than anecdote alone.

## The Coming Talent and Skills Question

The current environment of layoffs and AI-driven headcount reduction is a temporary phase — eventually there will be a new influx of people, both newcomers who need training and returning professionals, and hiring will resume. Nobody has fully answered what happens then. Specifically: will people who never had to develop deep foundational skills (because agents handled the fundamentals) end up meaningfully worse than engineers with a decade or more of hands-on experience? An anecdote is raised about a graduate ML program instructor telling students that low-level knowledge (e.g., of predictive models) may soon be unnecessary — a claim the speaker personally disputes, arguing that good decisions require genuine understanding even if someone works mostly at a higher system level.

### Why There's No Single Answer

This question blends several distinct issues: short-term operational and tactical concerns, longer-term strategic planning, and the deeper uncertainty of approaching something like a singularity, where the pace of change makes any fixed answer unreliable. If a superintelligence-level AI eventually arrives, questions about individual skill development may become largely moot; if it doesn't (or takes a long time), the calculus is entirely different — and nobody can currently know which scenario will play out.

### A Pascal's Wager for AI Skill-Building

Given this uncertainty, the reasoning suggested mirrors Pascal's Wager on belief in God: if superintelligence arrives and you've prepared, you benefit; if it arrives and you haven't, you're worse off; if it doesn't arrive, preparing costs you relatively little. The rational strategy is therefore to act as though continued skill development matters, regardless of which future materializes, rather than passively waiting to see what happens.

### Differentiation in a Commoditized Labor Market

The practical framing returns to economics: in a competitive capitalist market, if your labor is indistinguishable from many others', you fall into a race-to-the-bottom "commodity" market — comparable to gig-economy driving platforms, where interchangeable workers compete purely on price. To avoid this, a person needs a genuine point of differentiation, and one legitimate answer is being able to do something meaningfully better than others specifically *by working effectively with an agent*.

### The Leaky Abstraction Problem

A key caveat is introduced via the principle that many problems can be solved by adding a layer of abstraction — except for the problem of having too many layers of abstraction, and the related fact that **abstractions leak**. When something goes wrong that the current abstraction layer can't handle, someone needs to be able to look underneath it. Engineers with many years of hands-on experience working alongside agents currently retain this ability to "look under the hood" when something breaks and the existing abstraction fails.

## Choosing Where to Differentiate: Above or Below the Abstraction

When something fails and an agent can't resolve it, a person has two options: keep prompting and hoping it eventually works, or look underneath the abstraction, read the actual errors, and debug directly. If genuine superintelligence arrives, it will presumably handle this itself — but then it's unclear what role humans play in the process at all. If it doesn't arrive, the ability to go beneath the abstraction becomes a real point of differentiation from other engineers.

There's also a second, complementary path: differentiating *above* the abstraction rather than below it — becoming so skilled at using the abstraction layer that you work twice as fast or produce twice the quality, for as long as it holds up, and then bringing in a specialist when it breaks. This is already visible with product-oriented people who move quickly with their ideas: they validate and ship fast, then simply find someone who can close the gap for the parts they can't handle themselves, creating an effective combination of speed and depth.

Ultimately, everyone has to honestly answer what they want to compete on. Personally, curiosity about how things work under the hood has been a lifelong trait — strong in natural sciences, math, physics, and chemistry, weaker in reading people's emotions and interpersonal nuance (an area where a spouse's rational explanations of, say, children's behavior are often more insightful). That underlying-mechanism curiosity now translates into a practical advantage: understanding how different layers relate — models, infrastructure, agent frameworks, where the bottlenecks are — makes it possible to better predict what happens next in the industry, to recognize when an old fifty-year-old idea suddenly resurfaces and creates a new market leader, and generally to see further ahead than others. For anyone in a technical leadership or "visionary" role, this forward vision is essentially the job — like actually skating to where the puck is going, not just watching where it currently is.

## Rethinking How Junior Engineers Are Trained

### The Old Model No Longer Produces a Useful Signal

Previously, junior engineers were given small, well-scoped tasks — bug fixes, simple features — and their output served as a reliable proxy for whether they had actually understood something, since doing the work themselves required grappling with the problem. A passing test suite or a fixed bug was meaningful evidence of learning.

With agents, this signal breaks down: the artifact can exist with zero understanding behind it. This has direct implications for how organizations should design junior engineer workflows if they actually want to grow competent engineers rather than just close tickets:

- Small bugs and small features are increasingly candidates for full automation via "loop engineering," where an agent handles them directly rather than being routed to a junior.
- Juniors should instead be given larger tasks that they tackle together with an agent.
- Evaluation should shift away from "is the feature done?" toward process-level questions: how did the person interact with the agent, how did they specify the task and acceptance criteria, how did they evaluate what the agent proposed?
- Critically, after the artifact is complete, the junior should be able to explain how the solution actually works and why it solves the original problem — not just that "the agent did it and we merged it."

This requires deliberate process design specifically aimed at cultivating competence, not just throughput. Accountability for what ships to production rests with the person, not the agent — but if a junior simply feeds tasks to an agent and rubber-stamps the output for production, no real sense of ownership or understanding ever forms.

### A Likely Trade-off, Not a Catastrophe

The expectation is that this generation of engineers will lose some low-level competencies, much as programmers largely lost the ability to write or read assembly once higher-level languages emerged — yet a form of responsibility and understanding persisted at the new layer. The same pattern is likely to repeat: specifications effectively become "the new code," and the deployed system becomes the tangible result, but engineers will still need to understand how that result actually works.

## Hiring Is Broken by the Same Signal Problem

### Why Traditional Interview Pipelines No Longer Work

Big tech hiring has traditionally been built like a pipeline — screening, several rounds of technical interviews, culture-fit interviews, then an offer — designed to evaluate large candidate pools with many interviewers in an unbiased, repeatable way. In big tech specifically, the priority is asymmetric: avoiding false positives (hiring someone weak) matters more than avoiding false negatives (rejecting someone strong), though for targeted senior hiring the process looks different and is more bespoke.

The problem is that many of the signals this pipeline relies on were chosen precisely because they were *hard for people but easy to fake with agents* now:

- **Algorithms and data structures interviews** used to be a decent proxy for computer science fluency and structured thinking. Now an agent can solve the same problem instantly, yielding no signal about the candidate.
- **System design interviews** face a similar problem — an agent can generate a plausible-sounding system design narrative just as easily.

To preserve these signals, companies would need to run these interviews AI-free, but enforcing that online is unclear, and offline enforcement is expensive and inefficient.

### The New, Harder-to-Standardize Interview Layer

At the same time, companies want to add an entirely new interview dimension: how well a candidate actually works *with* tools and agents, since that's exactly how they'll operate on the job. This is difficult to standardize and evaluate because:

- Everyone's workflow can differ (one candidate works "by OpenAI spec," another by "GitHub spec," another by some custom method).
- It's unclear how to judge whether a good result came from genuine skill and understanding of the workflow, or simply because someone else configured it well for them.
- It raises the deeper question of what's actually being hired for — a "product engineer" who ships features, or someone who can explain, on a fundamental level, why something works.

These are large, currently unresolved questions about how to interview effectively in this new environment.

### The Junior Training Gap Is an Economic Problem, Not Just a Hiring Problem

For many small and mid-sized companies, it's now more economically attractive to hire already-strong engineers and equip them with tools than to invest in training juniors, especially when there isn't a large enough steady stream of tasks or budget to justify it. Large companies still run internships, typically drawing from a heavily pre-filtered pool (competitive programming, academic training programs) who already know how to code, and the company then teaches them industrial development practices — historically a strong pipeline.

This raises a "tragedy of the commons" concern: if it's individually rational for every company to just poach experienced engineers rather than invest in junior training, the industry-wide supply of trained engineers could eventually shrink. Large companies, however, are well-positioned to keep training juniors effectively, because their existing systems, tooling, and processes let a newcomer become productive at roughly a mid-level engineer's output relatively quickly.

On the broader talent-supply question, the free market is expected to self-correct, if with a lag: demand for trained engineers will eventually be met by education providers and companies entering that space, since there's inherent inertia between the moment demand appears and the moment the market adapts to supply it. This is a source of relative optimism about the long-run talent pipeline, even though today's answer to "what fundamentally needs to be known" is still genuinely unresolved — most people currently calibrate around whatever appears in job postings and interview requirements rather than any settled standard.

## A Personal Admission: Living With an Understanding Gap

A candid personal example illustrates the tension directly: being able to read and conceptually understand Go code without ever having written it, and starting a new project in Go purely through vibe-coding. There's an awareness of hitting a wall — recognizing conceptually what's happening but knowing that grasping a specific piece of code would require sitting down and working through it directly, and choosing to defer that. Each additional generated feature adds to a growing "pit of not-understanding": more code, more branching logic, more tests — enough that the overall shape (which folder does what) stays visible as an experienced engineer, but specific implementation details become opaque.

Eventually this will require deliberately stopping to run tests manually and work through the code by hand to build the tacit, "fingertip-level" understanding needed to keep moving confidently — but there's no clear answer yet on when that reckoning becomes unavoidable, or whether a simple library-sized task in an unfamiliar language genuinely requires hand-writing versus can be fully delegated. This is expected to become clearer quickly, given the current pace of model and harness improvement — possibly within a year, coding could reach a point widely regarded as "solved" as a category of problem, especially for tasks that can be fully specified externally, similar to the earlier "rewrite a ZIP library from scratch and pass all tests" pattern.

## Why Agentic Coding Excels at Some Systems and Struggles With Others

### The ZIP Library Is a Deceptively Easy Case

A counterpoint raised: something like a ZIP-parsing library is an unusually simple kind of system — largely stateless, close to pure functions, with simple, well-defined input/output and no complex pipelines. This differs sharply from most real systems. If a library is well described by tests, an agent can modify it fairly freely; a bug there would take real effort to introduce. The failure mode is more likely a performance regression (memory blowups, etc.) than an outright correctness bug.

### Live, Stateful Systems Are a Different, Unsolved Problem

The situation changes completely with live systems carrying real state — for example, data migrations. Running a naive migration directly against production data is often a recipe for disaster; a much more careful transition path between old and new formats is usually required. Legacy and migration work in general remains a genuinely unsolved problem for agentic approaches. Production access could in principle be granted for analysis, but this introduces its own set of complications.

The underlying pattern: agents are strong precisely where the system's behavior, boundaries, and verification method are explicit and well-specified — i.e., where there's a real feedback loop. Complex legacy systems and tangled dependencies are hard for *humans* too, which is exactly why they take years to untangle. Untangling them often isn't just a technical archaeology exercise (reading code, understanding structure) — it also involves surfacing genuinely confusing, undocumented business logic and asking the business "does anyone even know why this exists?", often only to be told "just keep it working exactly as it is," because the accidental historical behavior has become the de facto standard nobody dares change, and nobody may even know if it's still used.

An illustrative anecdote: a family always cuts the legs off a turkey before cooking it, generation after generation, without knowing why — until the grandmother reveals that decades earlier her pot was simply too small to fit a whole turkey, and the practice was never actually necessary once pots got bigger. Much of enterprise software behavior is exactly this kind of fossilized non-decision — and often "grandma" (the original reasoning) is unreachable, so the existing behavior gets treated as sacred just because no one can verify why it exists. In these real-world settings, agents face an even harder version of the robotics problem discussed earlier: there's no reset button, no infinite retries, no clean rollback without external side effects — if something breaks, it genuinely breaks, much like a robot falling and damaging itself in a competition. Software engineering as a discipline currently has no equivalent of a built-in "braking mechanism" for this kind of risk.

### Physical-World Testing Still Resists Full Automation

A concrete example of complexity that goes beyond servers and code: telecom companies send human testers out with multiple phones and SIM cards to physically walk around different regions verifying network quality and feature behavior in the real world. This kind of environment-bound, physically distributed verification currently has no clear automation path and illustrates that not all "systems" reduce to something a coding agent or even a well-instrumented pipeline can fully absorb.

## A Speculative Frontier: World Models

A more research-oriented direction worth watching is the shift from token-by-token generative prediction toward genuine **world models** — architectures that, instead of predicting outputs token by token, predict a target world-state directly from a latent representation. Yann LeCun's long-standing advocacy for this direction (including at Meta, prior to his departure) is cited as a notable signal that major labs see this as a serious frontier, alongside related public talks on the topic from other prominent self-driving/AI researchers.

The appeal of world models is that they could, in principle, be trained on physical processes and used to predict what happens next in the real world — potentially relevant to the kind of complex physical-world effects discussed above (robotics, network testing, physical system behavior) in a way current generative token-prediction models are not well-suited for. This is characterized as a genuinely exciting but still largely research-stage direction — much closer to academic exploration than the current mainstream, heavily funded GPT-style paradigm — though it could represent the next major wave once it matures, plausibly requiring another order-of-magnitude jump in compute and smarter models, which would in turn intensify the same dynamic already seen today: Nvidia and infrastructure providers accumulating enormous value while everyone else scrambles to buy the hardware needed to keep up.
