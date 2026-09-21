# Process overview

## What I built

**The Theology of Brain Rot** (`SLOP8038`) frames online brain-rot culture as
a systematic theology degree, but the satire wraps real teaching rather than
replacing it. Each week reframes a real habit — doomscrolling, AI slop,
rage-baiting, misinformation — as a "doctrine" taught mostly through its real
mechanism (ranking-algorithm signals, dark-pattern UI, misinformation
research, network effects), plus a concrete "how to ___" section, building
from consuming (weeks 1–3) to producing (4–9) to recruiting (10–12). Every
week carries a real slide deck, and the three major assessments (21/31/36%)
track a forged-scripture composition, a canonization argument, and a
capstone portfolio closing with a reflection proposing a new doctrine of the
student's own, with the remaining 12% split evenly across the twelve
tutorials' own completion grades. The teaching team is a convenor plus two
tutors, each running
the practicum on a thematically related cluster of weeks, so a student
always meets the tutor whose specialty matches that week's doctrine.

## How I got here

The course concept came from thinking about something that wouldn't take itself seriously but could be relatable to current social media trends.
So i had an initial thought about doing a course that teaches 'brain-rot'. Then with the agent I came up with the doctrines, trained outcomes, an assessment structure. Unfortunately my laptop died then so i had to try and recover the session later on. I queried the agent and it was able to recover most of it, including a capstone I'd asked it to soften after flagging "recruit a real person" as a literal instruction. I then made two
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
and tutorial activities were rewritten twice.
First I imagined it as like a session where students could bring in their workings from outside of a tutorial and it would be reviewed. But afterwards I decided to change it to activities with graded work that can be completed in the room because it allows students to engage with the course content and actually build towards their final assignment too.
([`eb9cc33`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-davidflocondezo/commit/eb9cc33),
[`ba23fda`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-davidflocondezo/commit/ba23fda)).

The next big change came about when i did a readthrough of the lectures.
I realised that because i had prompted the agent that this was a "theology" course it made the content very heavy on the metaphors with "fancy" hooks, and didn't really have any real substance. This meant that although there was content every week in the lectures and slides it was just nonsense that barely contributed to the learnings of the student. I changed this moving forward by changing what I asked the agent for and what I accepted back. I strcitly started saying that I didnt want the content to focus on "theology" but rather to focus on actually delivering course content with an applied "how to ___" on a weekly basis that followed the topic of that week. I also strictly told the agent to only keep the "theology" aspect to the titles and quotes but thats it.
([`e5a8be2`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-davidflocondezo/commit/e5a8be2)).

The tutorials themselves stayed ungraded through all of that, which didn't
match a practicum-style course where the room work is most of the doing. A
fourth assessment gave each of the twelve tutorials its own 1%, rebalancing
the three majors down to fit
([`11aa1b8`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-davidflocondezo/commit/11aa1b8)),
then folded those twelve pages into one `tutorial-participation` page once
twelve near-identical assessment pages read as noise rather than structure
([`4f59387`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-davidflocondezo/commit/4f59387)).

I later wrote the theology-as-decoration rule from that lecture readthrough
into `CLAUDE.md` itself, then swept the four assessment pages against it.
Three already held to it; the fourth's intro spent a sentence and a half on
apocryphal texts' own history before reaching AI slop, so I cut it down to
lead with the shared mechanism instead
([`d86905b`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-davidflocondezo/commit/d86905b),
[`b107169`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-davidflocondezo/commit/b107169)).

## What's encoded where, and what's left out

`CLAUDE.md` carries harness discipline from earlier prototypes —
dev-server-on, check-before-push, asset-path and vocabulary rules — plus
one course-specific rule added once the content problem below repeated
itself often enough to be worth locking in: the theology conceit stays
confined to titles, doctrine names, and framing quotes, with the body
teaching the real underlying skill directly
([`d86905b`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-davidflocondezo/commit/d86905b)).
Nothing else is locked in that early: the
course kept moving weekly (new tutors, a rename, a content rebalance) right
up to submission, and a rule locked in too early would have fought the next
revision. `spec/course-spec.test.ts` likewise only checks the brief's own
numeric promises — weights summing to 100, weeks 1–12 covered once each,
every `slides:` link resolving to a built deck — not invariants like "every
practicum week names a tutor," verified by eye, not automated. Adding
people photos was skipped on purpose: the brief asks for neither, and it
would have spent time on polish over content gaps that mattered more. The
starter's colour palette did get swapped, to a stained-glass blue/purple
scheme (`src/styles/site-palette.css`) layered on top of
`astro-theme-slop`'s tokens via `astro.config.ts`'s `brandCss` array, rather
than edited in place
([`46744ac`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-davidflocondezo/commit/46744ac))
— the fixed brand plumbing (`site-config.ts`, the crest/logo assets) stays
exactly as it arrived, only the three colour tokens change.

I knew each pass was right because `pnpm check` — typecheck, build, the
platform's accessibility and link-check integrations, both spec files —
passed clean afterward, and because I read the rendered pages in `pnpm dev`,
not just the frontmatter.
