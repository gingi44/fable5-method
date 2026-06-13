# Fable 5 Operating Method — install guide

This skill helps any AI coding assistant **execute a senior-engineer discipline
reliably** instead of defaulting to eager-autocomplete guessing: diagnose from
real evidence, prove every claim by running it, prefer deterministic guarantees
over hopeful prompts, review its own work, respect your prior decisions, never
flip a default on its own, and leave the project navigable.

It's a *method, not a model trait* — it encodes behavior, so it lifts whatever
model you run it on (the better the model, the more reliably it follows it).

---

## Install — Claude Code / Claude Desktop / Claude.ai (skills)

The skill auto-loads and triggers itself on coding/build/debug/deploy tasks.

1. Copy the whole `fable5-method/` folder into your skills directory:
   - **Mac/Linux:** `~/.claude/skills/`
   - **Windows:** `C:\Users\<you>\.claude\skills\`
2. Restart Claude Code (or reload the app).
3. Done. On any non-trivial software task it activates automatically. You can
   also force it: *"use the fable5-method skill"*.

```bash
# Mac/Linux one-liner
mkdir -p ~/.claude/skills && cp -r fable5-method ~/.claude/skills/
```
```powershell
# Windows PowerShell
Copy-Item -Recurse fable5-method "$HOME\.claude\skills\"
```

To share with others: zip the `fable5-method/` folder and send it —
they drop it in the same place.

---

## Use with ANY OTHER LLM (ChatGPT, Gemini, Cursor, Copilot, etc.)

Other tools don't read Claude Code skills, but the method is just text. Paste the
contents of **`system-prompt.txt`** into wherever that tool keeps its persistent
instructions:

- **ChatGPT** → Settings → Personalization → *Custom Instructions* (or a Project's
  instructions).
- **Cursor** → `.cursorrules` file in the project root.
- **Gemini / Claude API** → the `system` prompt.
- **GitHub Copilot** → `.github/copilot-instructions.md`.
- Any agent framework → the system message.

That single block turns the model's default "guess-and-claim" behavior into the
disciplined loop.

---

## What it actually changes

| Before (default AI) | After (this method) |
|---|---|
| Guesses the bug from the symptom | Traces the real code/data/file and proves the cause |
| "Done!" without running anything | Builds, runs tests, validates on the input that failed |
| Fixes the first cause, misses the rest | Keeps tracing — bugs are usually compound |
| Trusts its own generated code | Reads it + runs an adversarial self-review |
| Hopes a prompt fixes a flaky step | Adds a deterministic check + retry, or says "not guaranteed" |
| Silently deletes/“improves” your work | Flags it; makes removal an opt-in toggle |
| Overclaims it works | Separates proven from assumed, states uncertainty honestly |
| Leaves no trace | Updates docs/notes so the next session resumes cleanly |

---

## Files
- `SKILL.md` — the skill itself (auto-loaded by Claude Code).
- `system-prompt.txt` — the same method as a paste-ready system prompt for any
  other LLM/tool.
- `README.md` — this file.
