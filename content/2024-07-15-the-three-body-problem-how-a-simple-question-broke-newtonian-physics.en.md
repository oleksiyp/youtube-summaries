---
title: 'The Three-Body Problem: How a Simple Question Broke Newtonian Physics'
date: '2024-07-15'
videoUrl: 'https://www.youtube.com/watch?v=l2wnqlcOL9A'
channelName: Up and Atom
channelUrl: 'https://www.youtube.com/channel/UCSIvk78tK2TiviLQn4fSHaw'
shortDescription: >-
  Three masses, known positions, known momenta — predict the future. It sounds
  trivial, but this question defeated Isaac Newton, dominated a royal
  mathematics competition in 1889, and ultimately exposed a hard limit on what
  science can ever know. This post traces how Henri Poincaré won King Oscar II's
  prize not by solving the three-body problem but by proving it analytically
  unsolvable, discovering saddle points and extreme sensitivity to initial
  conditions along the way. The result was a new kind of physics — chaos theory
  — and the unsettling insight that a fully deterministic universe can still be
  fundamentally unpredictable.
tags:
  - classical mechanics
  - philosophy
tagKeys:
  - classical-mechanics
  - philosophy
---

# The Three-Body Problem: How a Simple Question Broke Newtonian Physics

## The Problem in a Nutshell

The three-body problem asks something that sounds almost trivial: given three masses in space, each pulled by the others' gravity, and knowing all of their positions and momenta right now, predict where they will be at some future time. Armed with Newton's three laws of motion and his universal law of gravitation, this ought to be straightforward. Instead, the question overturned more than a century of physics, split the scientific landscape, and exposed a hard limit on what humans can ever know about the universe.

## King Oscar's Birthday Competition

- In **1889**, King Oscar II of Sweden celebrated his 60th birthday by staging a mathematics competition, with a prize of 2,500 crowns and lasting academic prestige.
- The central question was: **is our solar system stable?** Will the planets keep orbiting the Sun indefinitely, or will they eventually collide or fly off into space?
- The question was more than idle curiosity about humanity's fate — it had defeated brilliant mathematicians for over 200 years.

## Newton's Failure

Isaac Newton, who had transformed our understanding of nature in **1687**, was the first to seriously attack the problem.

- Newton's laws seemed like the perfect tools: derive the equations of planetary motion, solve them, and the future is revealed.
- The question was personally urgent for him. As a devout Christian, he believed the solar system was only around 6,000 years old — hardly enough evidence that it would keep running peacefully.
- The sensible strategy was to start with **two bodies**, confirm stability, then add bodies one at a time. The two-body case worked beautifully and proved stable.
- Adding a **third body** destroyed everything. Newton could not solve the equations — in fact, he could not even work out what the equations of motion were. He wrote to Edmond Halley that no problem had ever made his head ache like that of the Earth, Moon, and Sun.

## Why This Threatened All of Physics

Newton's laws had ushered in an era of confidence built on **determinism**: the present state of a system fully determines its future.

- Physics had effectively become a roadmap — the laws describe the shape of the road, the initial conditions tell you where you are, and solving the equations tells you exactly where you'll end up.
- At the core of this worldview were **analytical solutions**: exact mathematical expressions yielding exact numerical results (still the standard fare of high-school physics problems).
- Scientists acknowledged we can never measure anything with perfect precision — a limitation later made fundamental by **Heisenberg's uncertainty principle** — but assumed it didn't matter. **Small errors in measurement were expected to produce only small errors in prediction.** A tiny error in Halley's Comet's position in 1910 would only slightly shift the predicted 1986 return.
- The prevailing belief was that all science had left to do was measure more precisely, refine the laws, and build more computing power — then the entire future would lie open.

Newton's inability to handle just three bodies was the first crack in this optimistic picture.

## Poincaré's Radical Change of Perspective

Two centuries later, the mathematician **Henri Poincaré** entered the competition.

- He simplified the problem even further: two large masses fixed in place and a third, **massless** body whose motion is determined by their gravitational pulls.
- Like everyone before him, he couldn't find the equations. Unlike everyone before him, he refused to stop there — he **invented a new way of doing physics**.
- Where Newton analyzed individual scenarios, Poincaré zoomed out to study the system's overall geometry, behavior, and patterns. If Newton's laws showed the road, Poincaré wanted to study the whole map.

### Fixed Points

To follow his insight, consider a ball rolling over hills:

- **Stable fixed point** (a valley): nudge the ball and it returns. These act as **attractors**.
- **Unstable fixed point** (a hilltop): the slightest nudge sends the ball rolling away. These **repel**.

Poincaré showed that gravitational interactions create such balance points in space — but he also found a third, stranger type.

### Saddle Points and the Birth of Chaos

- A **saddle point** is simultaneously stable and unstable: viewed in three dimensions, the ball is drawn in along one direction but can roll away down either side along another.
- The tiniest difference in the ball's position determines which way it goes, producing a completely different, unrecognizable trajectory — in sharp contrast to the Newtonian assumption that small measurement errors yield small prediction errors.
- Gravitational interactions among three bodies generate these hypersensitive points, drawing objects in only to fling them off in wildly divergent directions. This is **extreme sensitivity to initial conditions**.

### Deterministic but Unpredictable

- Crucially, this behavior is **not random**. It is fully deterministic — it is simply **unpredictable**.
- The roadmap analogy becomes one of intersections: a car in the same lane always reaches the same destination, but a car one lane over ends up somewhere entirely different.
- Better instruments can't rescue us. The "lanes" are infinitely thin trajectories in a continuous space, and there are infinitely many of them. Beyond quantum limits, tiny external influences — a distant moon's gravitational tug, the subtle push of the solar wind — constantly perturb the system. We can only ever know *roughly* which trajectory we're on, which is useless for long-term prediction.

Poincaré's discovery revealed that **predictability is limited not by our technology or methods, but by the fundamental nature of the universe itself.**

## Aftermath and Legacy

- Poincaré **won the competition** — not by solving the three-body problem, but by proving it is **analytically unsolvable**.
- Ironically, his revolutionary insight was largely misunderstood at the time, partly because he was a notoriously poor draftsman (he even scored zero on the mechanical drawing section of his college entrance exam). **Chaos theory** wasn't truly established until it was rediscovered in the **1960s**.

## What "Solutions" to the Three-Body Problem Actually Mean

Claims that the problem has been "solved" generally refer to one of two things:

1. **Special-case solutions.** There is no general formula covering every scenario, but exact solutions exist for particular configurations — bodies arranged in an equilateral triangle, the stable figure-eight orbit, and various periodic orbits that repeat indefinitely.
2. **Numerical approximation.** Scientists developed **numerical integration**, which works as follows:
   - Break the problem into small time steps.
   - Compute the gravitational forces between each pair of bodies at that instant.
   - Use those forces and the current velocities to update each body's velocity and position for the next step.
   - Repeat, progressively building up each trajectory.

   With modern computing power, this technique is extremely effective for practical prediction.

## Chaos Everywhere

Poincaré's geometric methods did more than sidestep Newton's limitations — they gave birth to **chaos theory** and the field of **non-linear dynamics**. Chaotic systems have since been identified across an enormous range of domains:

- Weather patterns and ocean currents
- The rhythm of the human heart
- The stock market

The enduring lesson is that systems governed by exact, deterministic laws can nevertheless behave in ways that are fundamentally unpredictable.

## Closing Reflection

The most inspiring part of the story is that Poincaré cracked the problem by **looking at it differently** rather than by brute force. This mirrors a personal note from Jade: she began university studying biology but switched to physics because biology felt like learning *things*, while physics taught her a whole new **way of thinking** — how to reason about the world, think logically, and solve problems effectively.

### Sponsor

The episode is sponsored by **Brilliant**, an interactive learning platform emphasizing learning by doing, with thousands of lessons in math, data analysis, programming, and AI. Its appeal lies in a **first-principles approach** that builds intuition rather than memorization, and a strong focus on **problem solving** (cited as six times more effective than watching video lectures). The recommended starting point is the **Scientific Thinking** course. A free 30-day trial and 20% off an annual premium subscription are available at brilliant.org/atom.
