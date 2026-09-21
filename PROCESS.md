# Process overview

## What I built

**The Theology of Brain Rot** (`SLOP8038`) frames online brain-rot culture as
a systematic theology degree, but the satire wraps real teaching rather than
replacing it. Each week reframes a real habit — doomscrolling, AI slop,
rage-baiting, misinformation — as a "doctrine" taught mostly through its real
mechanism (ranking-algorithm signals, dark-pattern UI, misinformation
research, network effects), plus a concrete "how to ___" section, building
from consuming (weeks 1–3) to producing (4–9) to recruiting (10–12). Every
week carries a real slide deck, and the three assessments (25/35/40%) track a
forged-scripture composition, a canonization argument, and a capstone
portfolio closing with a reflection proposing a new doctrine of the
student's own. The teaching team is a convenor plus two tutors, each running
the practicum on a thematically related cluster of weeks, so a student
always meets the tutor whose specialty matches that week's doctrine.

## How I got here

The course concept came from an earlier session with this agent —
doctrines, trained outcomes, an assessment structure — existing only in
that session's history, not this repo. I had the agent recover it rather
than invent a new one, including a capstone I'd asked it to soften after
flagging "recruit a real person" as a literal instruction. I then made two
calls: a lecture for all twelve weeks, not a subset, and more than the
brief's minimum deck count — the first pass
([`e9a6058...1401db2`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-davidflocondezo/compare/e9a6058...1401db2))
built config, personas, all 12 sessions/lectures, decks for weeks 1/3/6/9,
three assessments, homepage/policy copy, and the numeric `spec/` tests, each
commit gated on `pnpm check`.

Everything after came from reading the shipped site and finding gaps.
Week 1 read thin next to its weight as the first impression, so I expanded
it with real content and a better slide
([`c679ca2`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-davidflocondezo/commit/c679ca2),
[`47f51d6`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-davidflocondezo/commit/47f51d6)).
Stopping the decks at four left eight weeks second-class, so every
remaining week got built to the same standard
([`a1aa6ba`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-davidflocondezo/commit/a1aa6ba)).
"Sessions" never fit a satire about doctrine and practicum, so vocabulary
moved to "Tutorials"
([`adc756c`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-davidflocondezo/commit/adc756c)),
and tutorial activities were rewritten twice — first as graded work, then
completable in the room, not assigned as homework
([`eb9cc33`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-davidflocondezo/commit/eb9cc33),
[`ba23fda`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-davidflocondezo/commit/ba23fda)).
One pass dropped a wrong-sounding honorific and split one tutor's five
weeks across three, matching real staffing
([`5377921`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-davidflocondezo/commit/5377921),
[`13441d2`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-davidflocondezo/commit/13441d2)).

A read-through of the lectures found the metaphor doing all the work, the
real subject barely appearing — the "twelve weeks that repeat one another"
trap the brief warns against. Every lecture was rewritten to teach the real
mechanism first, metaphor reduced to a hook, plus an applied "how to ___"
section per week
([`e5a8be2`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-davidflocondezo/commit/e5a8be2)).

## What's encoded where, and what's left out

`CLAUDE.md` only carries harness discipline from earlier prototypes —
dev-server-on, check-before-push, asset-path and vocabulary rules — nothing
course-specific. That's deliberate: the
course kept moving weekly (new tutors, a rename, a content rebalance) right
up to submission, and a rule locked in early would have fought the next
revision. `spec/course-spec.test.ts` likewise only checks the brief's own
numeric promises — weights summing to 100, weeks 1–12 covered once each,
every `slides:` link resolving to a built deck — not invariants like "every
practicum week names a tutor," verified by eye, not automated. Restyling
the starter's visual system and adding people photos were both skipped on
purpose: the brief asks for neither, and both would have spent time on
polish over content gaps that mattered more.

I knew each pass was right because `pnpm check` — typecheck, build, the
platform's accessibility and link-check integrations, both spec files —
passed clean afterward, and because I read the rendered pages in `pnpm dev`,
not just the frontmatter.
