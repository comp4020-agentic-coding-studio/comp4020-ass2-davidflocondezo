# Your harness

This file is yours, and it arrives with no rules in it on purpose --- this note
is all there is, and it goes when you write your own. The rules you hold the
agent to are part of what gets marked, so they should be rules you decided on.

Nothing about the starter is recorded here. The platform under you is fixed and
documented in `README.md`, and the
[course website](https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/)
publishes this deliverable's brief and spec. Read both before you plan or build;
what the agent needs to carry from either is your call.

## How to work in here

- Keep the dev server running (`pnpm dev`) so you see changes as you make them.
- Run `pnpm check` before you push.
- Open the page in a browser and look at it. The rendered page is the truth;
  your mental model of it isn't.
- When a check fails, read its output before you change anything.
- Never commit a red state.

## Carried from earlier prototypes

- Asset paths (images, posters, etc.) must be built through
  `import.meta.env.BASE_URL`-safe joins (strip the leading/trailing slash
  before concatenating), never as a root-absolute path --- root-absolute works
  on localhost and 404s under the Pages base path.
- Astro inlines a hoisted script chunk under 4096 bytes directly into the built
  HTML --- any spec test reading `doc.body.textContent` then reads source
  string literals too. Keep forbidden vocabulary out of every string literal
  regardless of how big the bundle ends up being.
