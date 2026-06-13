# How to install **fable5-method** 🚀

This turns your AI coding assistant into a careful senior engineer — it checks
real evidence before changing code, proves things actually work, and never breaks
what you didn't ask it to. It works with any AI model.

Pick the way that matches how you use AI. **You only need ONE.**

---

## 🅰️ The 1-command way — for Claude Code (in your IDE / terminal)

If you use **Claude Code** (inside VS Code, Cursor, or any terminal), this is the
easiest. Open the terminal where Claude Code runs and paste this one line:

```
npx fable5-method
```

Press Enter. You'll see a green **`✓ fable5-method installed`**. That's it —
**restart Claude Code** and it switches on by itself whenever you build or fix
something. (To force it on: just say *"use the fable5-method skill"*.)

> 💡 What's `npx`? It's a tool that comes free with Node.js. It downloads and runs
> the installer for you — you don't install anything manually. If `npx` isn't
> recognized, install Node.js once from **https://nodejs.org** and try again.

---

## 🅱️ The upload-a-file way — for Claude on the web or desktop app

If you use **Claude in the browser (claude.ai) or the Claude Desktop app** (no
terminal), do this instead:

1. **Download the file:** `fable5-method.zip`.
2. In Claude, open **Settings → Capabilities / Skills → Add skill → Upload**, and
   choose the `fable5-method.zip` file you just downloaded.
3. Done — Claude now uses the method on your chats. ✅

---

## 💬 Using a different AI? (ChatGPT, Cursor, Gemini, Copilot)

No problem — it's just a set of instructions. Open the file **`system-prompt.txt`**,
copy everything in it, and paste it into your tool's "custom instructions" box:

- **ChatGPT** → Settings → *Custom Instructions*
- **Cursor** → a file named `.cursorrules` in your project
- **Gemini / API** → the *system prompt* box
- **GitHub Copilot** → `.github/copilot-instructions.md`

---

### Still not sure which one?
- Type commands in a terminal / use Claude Code in an IDE → **🅰️ `npx`**.
- Use Claude in a browser or the desktop app → **🅱️ upload the zip**.
- Use any other AI → **paste `system-prompt.txt`**.

Questions? Just ask. 🙂
