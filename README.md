# fable5-method 🚀

**Make any AI coding assistant work like a careful senior engineer** — it checks
real evidence before changing code, proves things actually work, never breaks what
you didn't ask for, and leaves your project clean. Works with Claude, ChatGPT,
Cursor, Gemini, Copilot — any model.

<div dir="rtl">

## עברית — מה זה ואיך מתקינים

**fable5-method** הופך כל עוזר‑קוד מבוסס‑AI למהנדס בכיר וזהיר: הוא בודק את המצב
האמיתי לפני שהוא משנה קוד, מוכיח שהדברים באמת עובדים, לא שובר מה שלא ביקשת, ומשאיר
את הפרויקט מסודר. עובד עם כל מודל.

בחרו דרך אחת — לא צריך את שתיהן:

### 🅰️ דרך הפקודה — ל‑Claude Code (בתוך VS Code / Cursor / טרמינל)
פתחו את הטרמינל (ב‑VS Code או Cursor: תפריט **View → Terminal**, או **Ctrl + `**),
הדביקו את השורה ולחצו Enter:

```
npx fable5-method
```

תראו ✓ ירוק. **הפעילו מחדש את Claude Code** וזהו — הוא נדלק לבד בכל פעם שאתם
בונים או מתקנים משהו. (כדי להפעיל ידנית: כתבו *"use the fable5-method skill"*.)
אם המחשב לא מזהה את `npx` — התקינו פעם אחת את Node.js מ‑https://nodejs.org ונסו שוב.

### 🅱️ דרך העלאת קובץ — ל‑Claude באתר / באפליקציה
אם אתם משתמשים ב‑Claude בדפדפן או באפליקציה (בלי טרמינל): הורידו את הקובץ
`fable5-method.zip`, ואז בתוך Claude: **Settings → Skills → Add skill → Upload**
ובחרו את הקובץ. זהו ✅

</div>

---

## English — install in one of two ways

Pick **one** — you don't need both.

### 🅰️ One command — for Claude Code (in VS Code / Cursor / a terminal)
Open the terminal (in VS Code or Cursor: **View → Terminal**, or **Ctrl + `**),
paste this, and press Enter:

```
npx fable5-method
```

You'll see a green ✓. **Restart Claude Code** and it turns on automatically
whenever you build or fix something. (Force it on: say *"use the fable5-method
skill"*.) If `npx` isn't recognized, install Node.js once from https://nodejs.org.

### 🅱️ Upload a file — for Claude on the web or desktop app
No terminal? Download **`fable5-method.zip`**, then in Claude open **Settings →
Skills → Add skill → Upload** and choose that file. Done. ✅

### Using a different AI (ChatGPT / Cursor / Gemini / Copilot)?
It's just instructions. After installing, open `system-prompt.txt` and paste it
into your tool's custom-instructions box (ChatGPT → Custom Instructions; Cursor →
`.cursorrules`; Copilot → `.github/copilot-instructions.md`).

---

## What it actually changes

| A normal AI assistant | With fable5-method |
|---|---|
| Guesses the cause of a bug | Traces the real code and proves it |
| Says "done!" without testing | Builds, runs, and checks it really works |
| Quietly changes things you didn't ask for | Flags it and asks first |
| Overclaims it works | Tells you honestly what's proven vs assumed |

MIT licensed. Built from high-output Claude Fable 5 sessions — it's a *method*,
not a model trait, so it lifts whatever AI you run it on.
