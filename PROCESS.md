# Process overview

## What I built

**The Theology of Brain Rot** (`SLOP8038`) is a satirical postgraduate course
that frames online brain-rot culture as a systematic theology degree. Each of
its twelve weeks reframes a real habit — doomscrolling, engaging with AI slop,
rage-baiting, spreading misinformation — as a "doctrine" with its own
technique, history, and standard for doing it well, building from consuming
(weeks 1–3) to producing (4–9) to recruiting others into the practice (10–12).
Four of those weeks carry a slide deck, and the three assessments (25/35/40%)
track a forged-scripture composition, a canonization argument, and a capstone
portfolio that closes with a reflection proposing a new doctrine of the
student's own.

## How I got here

The course concept had been worked out in an earlier session with this same
agent — week-by-week doctrines, an outcome each one trains, and an assessment
structure — but existed only in that session's history, not in this repo. I
opened this session by asking the agent to recover it rather than invent a
new one; it searched its own prior conversation logs and reconstructed the
design, including a couple of revisions (an assessment moving weeks, a
capstone component softened after I flagged discomfort with "recruit a real
person" as a literal instruction).

From there two decisions were mine to make explicitly: writing a lecture for
all twelve weeks rather than a subset, and placing the required slide decks
on weeks 1, 3, 6 and 9 rather than just one. The agent then proposed a full
implementation plan — file by file, sequenced to reach a green build before
polishing prose — which I approved before any content was written.

Implementation ran in five checkpointed commits, each followed by
`pnpm check`:

- course config, two new personas, and all 12 sessions/lectures:
  [`e9a6058`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-davidflocondezo/commit/e9a6058)
- the four decks and three assessments, replacing the starter's two:
  [`a204d00`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-davidflocondezo/commit/a204d00)
- a YAML fix caught by `pnpm check` (an unquoted colon in a spec bullet broke
  content sync):
  [`bde49e9`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-davidflocondezo/commit/bde49e9)
- homepage and policy copy, plus hand-authored hero/card art rasterised with
  `sharp`:
  [`bbdf4b3`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-davidflocondezo/commit/bbdf4b3)
- a new `spec/course-spec.test.ts` checking the brief's own numeric claims —
  weights summing to 100, weeks 1–12 covered exactly once, every `slides:`
  link resolving to a built deck:
  [`1401db2`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-davidflocondezo/commit/1401db2)

The full span is
[`e9a6058...1401db2`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-davidflocondezo/compare/e9a6058...1401db2).

I knew the result was right because `pnpm check` — typecheck, build, the
platform's own accessibility and link-check integrations, and the two spec
files — passed clean after each commit, and I read the rendered pages myself
in a running `pnpm dev` server rather than trusting the schema alone.

## Before you ship

`pnpm check:evidence` verifies that this comment is gone, that your citations
resolve to real commits, that a crit week's reflection entry is in
`reflections/`, and that your `CLAUDE.md` is there. It checks that your account
is traceable, not that it is good: that is the marker's call.

Images aren't checked: unlike a citation whose SHA doesn't resolve, a broken
image is visible the moment this file is rendered on GitHub.
