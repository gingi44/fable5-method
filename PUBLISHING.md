# Publishing notes (for the maintainer — Amit only)

End users never see this file (it's not in the npm package). It's your cheat-sheet.

## Update the npm page / ship a new version
```powershell
cd C:\Users\user\fable5-method-dist
# bump "version" in package.json first (npm rejects re-publishing the same version)
npm publish        # enter the 6-digit code from your authenticator at "Enter OTP:"
```
Live page: https://www.npmjs.com/package/fable5-method
Test it:   npx fable5-method@latest

## Rebuild the zip after editing anything in skill/
```powershell
# Windows (bsdtar writes portable forward-slash paths — important for Mac/Linux users):
Remove-Item -Recurse -Force _stage -ErrorAction SilentlyContinue
New-Item -ItemType Directory -Force _stage\fable5-method | Out-Null
Copy-Item skill\* _stage\fable5-method\
& "$env:SystemRoot\System32\tar.exe" -a -c -f dist\fable5-method.zip -C _stage fable5-method
# then re-copy to your Desktop/Downloads for easy sharing.
```

## Where the shareable zip lives
`dist\fable5-method.zip` (also copied to your Desktop and Downloads). Hand this to
anyone using Claude on the web/app, or attach it on a landing/download page.

## The skill's single source of truth
`skill/SKILL.md` + `skill/system-prompt.txt` + `skill/README.md`. Edit there, then
(a) `npm publish` a new version, and (b) rebuild the zip. The installed copy at
`~/.claude/skills/fable5-method/` is just an output of the npx installer.
