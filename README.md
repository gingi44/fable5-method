<div align="center">

# fable5-method

**Turn any AI coding assistant into a careful senior engineer.**

It checks real evidence before changing code, proves things actually work,
never breaks what you didn't ask for, and leaves your project clean.
Works with Claude, ChatGPT, Cursor, Gemini, and Copilot.

[![npm version](https://img.shields.io/npm/v/fable5-method?color=2563eb&label=npm)](https://www.npmjs.com/package/fable5-method)
[![license](https://img.shields.io/badge/license-MIT-2563eb)](./LICENSE)
[![works with](https://img.shields.io/badge/works%20with-Claude%20·%20ChatGPT%20·%20Cursor%20·%20Gemini-2563eb)](https://www.npmjs.com/package/fable5-method)

🇮🇱 [**מדריך התקנה בעברית →**](https://github.com/gingi44/fable5-method/blob/main/README.he.md)

</div>

---

## Why we built it

Every AI coding assistant shares one default failure mode: it **pattern-matches a
plausible answer and tells you it works** — without tracing the real cause, without
running anything, sometimes quietly changing things you never asked it to touch.
On a toy script that's fine. On live, paying, or money/legal code it costs you
rework, broken deploys, and trust.

This package was distilled from high-output **Claude Fable 5** sessions on a real
production platform — but what made those sessions reliable wasn't the model, it
was the **discipline**: diagnose before touching, prove before claiming, never flip
a switch on your own. Discipline is *behavior you can write down*, so we did — and
because it's a method and not a model trait, it lifts **whatever AI you run it on**.

## What it does

It installs one set of instructions that swaps the model's "guess-and-claim" reflex
for a six-phase senior-engineer loop. It **scales the rigor to the risk** — a typo
stays light; a change to live/data/money/legal code gets the whole loop:

1. **Think before touching** — map the system, find the single source of truth, and
   diagnose from the *real* artifact (the actual code, row, log, rendered file) —
   never from the symptom. Bugs are usually compound, so it keeps tracing.
2. **Decompose under a strict contract** — split independent work, run it in
   parallel, integrate serially, and never trust generated code without reading it.
3. **Prove it — don't claim it** — build, run the tests, validate on the exact input
   that failed, and *look at* visual/PDF/3D output. A passing type-check is not proof.
4. **Respect intent** — never silently reverse your decision or flip a flag, default,
   or price on its own; removed behavior becomes opt-in, not deleted.
5. **Verify delivery** — confirm the change actually landed where it runs, then a
   final skeptic pass on its own diff.
6. **Leave it navigable** — update the notes/handoff so the next session resumes
   cleanly, and codify a repeated pattern into a reusable rule.

| A normal AI assistant | With fable5-method |
| :-- | :-- |
| Guesses the cause of a bug | Traces the real code and proves it |
| Says *"done"* without testing | Builds, runs, and checks it really works |
| Quietly changes things you didn't ask for | Flags it and asks first |
| Over-claims it works | Tells you honestly what's proven vs assumed |

## Why it's safe

**The installer.** `npx fable5-method` is a tiny, zero-dependency Node script you
can [read in full](./bin/install.mjs). It only ever writes to one folder —
`~/.claude/skills/fable5-method/` — never deletes anything outside it, and is
idempotent (re-running just refreshes the copy). No network calls, no telemetry,
no postinstall hooks.

**The method itself.** It's plain text — a set of instructions, not a tool. It can't
run commands, reach your files, or call an API on its own; the *worst* a bad actor
could do with it is suggest words. And the discipline it adds is the safety: it tells
the model to treat **production as read-only**, to **never flip a flag / default /
price autonomously** (it surfaces the recommendation and leaves the call to you), to
make removals **opt-in instead of deleted**, and to hold **money, legal, and
permission paths as hard rules even under "just ship it" pressure**. It makes your
assistant *more* cautious, not less.

---

## How to use it

Pick **one** path — you don't need more than one.

### ▸ Claude Code — in VS Code, Cursor, or any terminal

```sh
npx fable5-method
```

Then restart Claude Code. It switches on automatically whenever you build or fix
something. *(No `npx`? Install Node.js once from [nodejs.org](https://nodejs.org).)*

### ▸ Claude on the web or desktop app

**[⬇ Download fable5-method.zip](https://github.com/gingi44/fable5-method/releases/latest/download/fable5-method.zip)** — then in Claude open **Settings → Skills → Add skill → Upload** and choose the file.

### ▸ Any other AI (ChatGPT, Cursor, Gemini, Copilot)

It's just text. Paste **[`skill/system-prompt.txt`](./skill/system-prompt.txt)**
into wherever the tool keeps persistent instructions — ChatGPT *Custom
Instructions*, a `.cursorrules` file, the `system` prompt, or
`.github/copilot-instructions.md`.

---

## Get maximum efficiency — the kickoff prompt

The skill auto-triggers, but for a high-stakes session you can lock the behavior in
by pasting one message at the **start of the chat** (right after you run `npx`). It
costs nothing and makes the model commit to the loop from message one:

> **[📋 Copy `skill/kickoff-prompt.txt`](./skill/kickoff-prompt.txt)** and paste it as
> your first message.

<details>
<summary><b>Preview the kickoff prompt</b></summary>

```text
Operate by the fable5-method for this entire session. Work like a careful senior
engineer, not an autocomplete — and scale the rigor to the risk (a typo stays
light; anything live / paying / data / money / legal gets the full loop).

BEFORE you touch anything:
- Map the system and find the single source of truth for what you're changing.
- Diagnose from the REAL artifact — open the actual code path, data row, log, or
  rendered file. Never guess from the symptom. Bugs are usually compound, so keep
  tracing past the first cause.
- If I'm asking or describing (not requesting a change), the deliverable is the
  diagnosis. Report it and stop — don't start editing.

WHEN you build or fix:
- Decompose big work; run independent parts in parallel and integrate serially
  yourself against an exact shared spec.
- PROVE it — build, run the tests, and validate on the exact input that failed. A
  passing type-check is not proof. For any visual / image / PDF / 3D output, open
  the real file and look at it.
- Prefer a deterministic guarantee (measure-and-retry, a hard gate) over a hopeful
  prompt. When a step is only probabilistic, say so honestly — never call it a
  guarantee.
- Adversarially review your own diff before handoff; fix any crash / data-loss /
  money / security issue first.

GUARDRAILS (these hold under "just ship it" pressure):
- Never reverse a deliberate decision or flip a flag / default / price on your own.
  Surface the recommendation and let me make the on/off call. Make removed behavior
  opt-in, not deleted.
- Treat production as READ-ONLY unless I explicitly say otherwise. Respect
  permissions and money / legal paths as hard rules.
- If you're genuinely blocked by ambiguity, ask exactly ONE specific question, then
  act. Don't stack questions or stall.

REPORT outcome-first with honest counts: what's proven vs assumed, what you skipped,
what failed (with the output). Don't say "done" without running it. Then leave a
short note so the next session resumes where you ended.
```

</details>

> **`system-prompt.txt` vs `kickoff-prompt.txt`** — the long
> [`system-prompt.txt`](./skill/system-prompt.txt) is the full method for a tool's
> *persistent* instruction box (set it once). The short
> [`kickoff-prompt.txt`](./skill/kickoff-prompt.txt) is what you paste **into the
> chat** to activate it for one session — the fastest way to get maximum efficiency
> alongside `npx`.

---

<div align="center">

Built from high-output **Claude Fable 5** sessions — it's a *method, not a model
trait*, so it lifts whatever AI you run it on.

MIT © Amit Litman

</div>
