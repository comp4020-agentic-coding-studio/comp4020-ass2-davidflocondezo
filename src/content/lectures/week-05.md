---
title: Indulgences
description:
  The Shop tab as an economy of grace — remitting FOMO with a purchase instead
  of a change in behaviour.
week: 5
date: 2027-03-22
teachers:
  - perpetua-sconce
  - desmond-yarrow
slides: /decks/week-05/
related:
  - sessions/05-indulgences
---

An indulgence was never a purchase of forgiveness for something you hadn't
done yet; it was a way to settle an ongoing debt of guilt without the harder
work of penance. The Shop tab runs the identical transaction on FOMO — and
the interface patterns that do it have names in the UX research literature,
not just a theological one.

Artificial scarcity ("only 2 left") exploits loss aversion, the
well-documented finding that the pain of losing something is felt roughly
twice as strongly as the pleasure of gaining the equivalent — so a possible
loss motivates faster than a comparable gain does. A countdown timer
manufactures urgency where none actually exists, forcing a decision before
the slower, comparison-shopping part of judgement can engage. Drip
pricing — showing a low headline price and adding fees only at checkout —
relies on sunk-cost momentum: by the time the real total appears, the
effort already spent getting there feels like a cost the shopper doesn't
want to have wasted.

None of this requires the purchase to be a good deal. Like the indulgence,
its value is almost entirely in the relief it produces at the moment of
payment, which is exactly why the interface is built to maximise that
moment rather than the object being sold.

## How to spot (or build) a dark-pattern checkout

1. **Check whether the scarcity is real.** A "2 left" that resets on refresh,
   or is identical across browsers, is manufactured, not inventory.
2. **Time the urgency against the decision.** A genuine deadline doesn't need
   a visible countdown; a countdown exists specifically to shorten the time
   you'd otherwise spend comparing.
3. **Price the whole checkout before you start it.** Drip pricing depends on
   you being emotionally past the price check by the time the real number
   appears — price it out early to defeat this, or add fees late to use it.
4. **Notice the framing of the alternative.** "Skip this deal" phrased as a
   loss ("no, I don't want to save money") is loss-aversion framing made
   explicit — if you're building this, that line is doing the actual work.
5. **Separate relief from value.** If declining feels worse than the price
   feels expensive, that gap is the indulgence effect at work, and the
   object is worth pricing on its own terms before paying to make the
   feeling go away.

## Outline

- indulgences as debt-settlement for guilt, not payment for future sin
- the real mechanics: artificial scarcity and loss aversion, manufactured urgency, drip pricing
- why the purchase's value is in the relief, not the object
- how to spot — or build — a dark-pattern checkout
