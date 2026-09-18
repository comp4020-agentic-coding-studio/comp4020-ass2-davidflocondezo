---
title: Cosmogony
description:
  The algorithm as prime mover — a creation myth for the ranking system behind
  every feed.
week: 2
date: 2027-03-01
teachers:
  - perpetua-sconce
  - desmond-yarrow
slides: /decks/week-02/
related:
  - sessions/02-cosmogony
---

Every cosmogony needs something that moves everything else without itself
being moved. For a feed, that's the ranking system: not a neutral pipe
carrying content to you, but a scoring model that decided which content
existed for you at all.

Underneath the myth, the mechanism is a model trained to predict one thing:
how likely you are to keep watching, or come back. It learns from signals
that are more granular and more asymmetric than most people assume. Dwell
time counts for more than a tap on "like." Rewatching something is one of
the strongest positive signals a system has, stronger than most explicit
reactions, because re-consuming predicts sharing and memory far better than
a single pass does. Completion rate on short-form content rewards
front-loaded payoff specifically, which is why the fastest hooks tend to
survive the ranking process regardless of what comes after them. Hiding a
post or scrolling past it fast trains the model down for that content type
more decisively than any dislike button ever could.

These signals compound rather than just informing a static list. Every
interaction the model measures becomes training data for what it shows you
next, which in turn shapes what interactions are even available to make —
a feedback loop, not a one-off calculation, which is why a feed can drift a
long way from where it started without any single moment that looks like a
decision. Because the model learns from behaviour rather than stated
preference, it has no channel for "I watched this because it happened to be
in front of me" — only for "watched" — so passive consumption and genuine
interest look identical to it unless you actively separate them.

## How to train your feed

1. **Finish or bail on purpose.** Completion rate outweighs likes, so a video
   you let autoplay through registers as a stronger "more like this" signal
   than one you liked and then skipped.
2. **Rewatch deliberately.** A second, intentional watch is one of the
   strongest positive signals most ranking systems track — stronger, in
   practice, than most explicit reactions.
3. **Use the negative signals.** "Not interested" and hide are weighted far
   more heavily than simply scrolling past, since a mid-scroll pass already
   reads to the model as weak interest.
4. **Follow sparingly.** A follow is a stronger and longer-lived signal than
   any single watch — treat it as a vote that outlasts one session, not a
   bookmark.
5. **Give it repeated sessions.** One unusual session reads as noise; the
   same behaviour repeated across several sessions is what actually moves
   the model.

## Outline

- ranking as a trained prediction model, not neutral plumbing
- the real signals: dwell time, rewatch, and completion rate, and why they're weighted unevenly
- the feedback loop: every interaction becomes training data for what's offered next
- how to train your feed: five concrete actions and why each one works
