# Security & Safety

`fable5-method` is an open-source, **MIT-licensed** operating-method skill for AI
coding assistants. It is **plain text** — a set of working-discipline instructions
that make an assistant diagnose before changing code, prove its work, and never break
what you didn't ask for. Nothing more.

## What it is NOT

- **No tools, no functions, no code execution, no MCP server.** It cannot *do*
  anything on its own — it can only suggest words to the assistant reading it.
- **No network calls, no telemetry, no tracking, no postinstall hooks.**
- It **cannot** read your files, secrets, environment variables, or credentials.

Because it has no capabilities, the worst-case outcome of the skill itself is
off-topic text — there is no privilege for anyone to escalate.

## The installer (`npx fable5-method`)

A ~60-line, **zero-dependency** Node script — [read it in full](./bin/install.mjs).
It does exactly one thing: copy the bundled `skill/` files into
`~/.claude/skills/fable5-method/`. It:

- writes **only** to that one folder,
- **never** deletes anything outside it,
- makes **no** network request,
- is idempotent (re-running just refreshes the copy).

## How to install safely

Use one of the **official, named paths** — never by pasting a link into a chat:

| You use… | Do this |
|---|---|
| **Claude Code** (IDE / terminal) | run `npx fable5-method` in your terminal |
| **Claude app / claude.ai** (no terminal) | download the [release zip](https://github.com/gingi44/fable5-method/releases/latest/download/fable5-method.zip) → **Settings → Skills → Add skill → Upload** |
| **ChatGPT / Cursor / Gemini / Copilot** | copy [`skill/system-prompt.txt`](./skill/system-prompt.txt) into the tool's instructions |

> ⚠️ **If you paste any unknown URL into an AI chat and ask it to "install" it, a
> careful assistant will flag it as suspicious — and it is right to.** That is exactly
> why we ship clean, named install paths instead of "paste this link." A README URL is
> documentation, not an installer.

## Reporting an issue

Open an issue at <https://github.com/gingi44/fable5-method/issues> or email
**amit@litman-ai.com**.

— Maintained by Amit Litman · MIT License
