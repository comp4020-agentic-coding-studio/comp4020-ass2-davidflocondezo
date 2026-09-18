# Process overview

## What I built

**The Theology of Brain Rot** (`SLOP8038`) is a satirical postgraduate course
that frames online brain-rot culture as a systematic theology degree. Each
week reframes a real habit — doomscrolling, engaging with AI slop,
rage-baiting, spreading misinformation — as a "doctrine" with its own
technique, history, and standard for doing it well, building from consuming
(weeks 1–3) to producing (4–9) to recruiting others into the practice (10–12).
Every week carries a real slide deck, and the three assessments (25/35/40%)
track a forged-scripture composition, a canonization argument, and a
capstone portfolio closing with a reflection that proposes a new doctrine of
the student's own. The teaching team is a convenor plus two tutors, each
running the practicum on a thematically related cluster of weeks, so a
student always meets the tutor whose specialty matches that week's doctrine.

## How I got here

The course concept was worked out in an earlier session with this same
agent — week-by-week doctrines, an outcome each trains, an assessment
structure — but existed only in that session's history, not this repo. I had
the agent recover it rather than invent a new one; it reconstructed the
design, including a capstone I'd asked it to soften after flagging "recruit
a real person" as a literal instruction. I then made two calls explicitly:
write a lecture for all twelve weeks, not a subset, and don't stop at the
brief's minimum of one deck — the first pass
([`e9a6058...1401db2`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-davidflocondezo/compare/e9a6058...1401db2))
built config, personas, all 12 sessions/lectures, decks for weeks 1/3/6/9,
three assessments, homepage/policy copy, and the numeric `spec/` tests, each
commit gated on `pnpm check`.

Everything after that was reading the shipped site and deciding it wasn't
finished. Week 1 read thin next to its weight as the first impression, so I
had it expanded with real foundational content and a better slide
([`c679ca2`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-davidflocondezo/commit/c679ca2),
[`47f51d6`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-davidflocondezo/commit/47f51d6)).
Stopping the decks at four left eight weeks visibly second-class, so every
remaining week got built out to the same standard
([`a1aa6ba`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-davidflocondezo/commit/a1aa6ba)).
"Sessions" never matched a satire about doctrine and practicum, so the site's
vocabulary moved to "Tutorials"
([`adc756c`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-davidflocondezo/commit/adc756c)),
and the tutorial activities were rewritten twice — first to read as the
actually-graded work, then to be completable in the room instead of assigned
as homework
([`eb9cc33`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-davidflocondezo/commit/eb9cc33),
[`ba23fda`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-davidflocondezo/commit/ba23fda)).
The last pass dropped an honorific that read wrong aloud and split one
tutor's five weeks across three, so the teaching team matched a real course's
staffing
([`5377921`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-davidflocondezo/commit/5377921),
[`13441d2`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-davidflocondezo/commit/13441d2)).

## What's encoded where, and what's left out

`CLAUDE.md` only carries harness discipline inherited from earlier prototypes
— dev-server-on, check-before-push, asset-path and vocabulary rules —
nothing specific to this course's design. That's deliberate: the course was
still moving weekly (new tutors, a terminology rename) right up to
submission, and a rule locked in early would have fought the next revision.
`spec/course-spec.test.ts` likewise only checks the brief's own numeric
promises — weights summing to 100, weeks 1–12 covered once each, every
`slides:` link resolving to a built deck — not course-specific invariants
like "every practicum week names a tutor," which I verified by eye each time
a session changed rather than automating. Restyling the starter's visual
system and giving people photos were both skipped on purpose: the brief asks
for neither, and both would have spent this week on polish over the content
gaps that mattered more.

I knew each pass was right because `pnpm check` — typecheck, build, the
platform's accessibility and link-check integrations, and both spec files —
passed clean afterward, and because I read the rendered pages in `pnpm dev`
rather than trusting the frontmatter alone.
