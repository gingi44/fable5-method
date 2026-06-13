#!/usr/bin/env node
/**
 * fable5-method installer — `npx fable5-method`.
 *
 * Copies the bundled skill (skill/*) into the user's Claude Code skills dir:
 *   ~/.claude/skills/fable5-method/
 * so it auto-loads on any non-trivial software task. Pure Node, zero deps,
 * cross-platform (uses os.homedir()). Idempotent — re-running overwrites with
 * the latest bundled copy. Never deletes anything outside the target folder.
 */
import { cpSync, mkdirSync, existsSync, readdirSync } from "node:fs";
import { homedir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const C = {
  reset: "\x1b[0m", bold: "\x1b[1m", dim: "\x1b[2m",
  blue: "\x1b[34m", green: "\x1b[32m", yellow: "\x1b[33m", red: "\x1b[31m",
};

const here = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.join(here, "..", "skill");
const destDir = path.join(homedir(), ".claude", "skills", "fable5-method");

function main() {
  if (!existsSync(srcDir) || !existsSync(path.join(srcDir, "SKILL.md"))) {
    console.error(`${C.red}✗ Bundled skill payload not found at ${srcDir}.${C.reset}`);
    console.error("  The package may be corrupted — reinstall with: npx fable5-method@latest");
    process.exit(1);
  }
  try {
    mkdirSync(destDir, { recursive: true });
    // Copy the whole payload (SKILL.md, system-prompt.txt, README.md).
    cpSync(srcDir, destDir, { recursive: true });
  } catch (err) {
    console.error(`${C.red}✗ Could not write to ${destDir}${C.reset}`);
    console.error(`  ${err && err.message ? err.message : err}`);
    console.error(`  Fix: ensure you can write to your home folder, then re-run.`);
    process.exit(1);
  }

  const files = readdirSync(destDir).sort();
  console.log("");
  console.log(`${C.green}${C.bold}✓ fable5-method installed${C.reset}`);
  console.log(`${C.dim}  →${C.reset} ${destDir}`);
  console.log(`${C.dim}    ${files.join("  ")}${C.reset}`);
  console.log("");
  console.log(`${C.bold}Next:${C.reset}`);
  console.log(`  1. Restart Claude Code (or reload Claude Desktop).`);
  console.log(`  2. It activates automatically on build / fix / debug / audit / deploy tasks.`);
  console.log(`     Force it anytime: ${C.blue}"use the fable5-method skill"${C.reset}.`);
  console.log("");
  console.log(`${C.bold}Max efficiency:${C.reset} paste ${C.blue}kickoff-prompt.txt${C.reset} as your first chat`);
  console.log(`  message to lock the discipline in for a high-stakes session:`);
  console.log(`${C.dim}  ${path.join(destDir, "kickoff-prompt.txt")}${C.reset}`);
  console.log("");
  console.log(`${C.dim}  Using a different tool (ChatGPT / Cursor / Gemini / Copilot)? Paste${C.reset}`);
  console.log(`${C.dim}  ${path.join(destDir, "system-prompt.txt")} into its custom-instructions / rules.${C.reset}`);
  console.log("");
}

main();
