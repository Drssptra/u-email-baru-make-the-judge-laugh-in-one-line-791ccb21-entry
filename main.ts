// Make the Judge Laugh in One Line — entry program (program/v1, node22).
// Writes a single original one-liner to /output/entry.txt, no trailing newline,
// exactly as the gate requires: UTF-8 text of 1 to 200 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My houseplant died of neglect, so I bought a cactus. It died too — out of solidarity.";

// Self-check against the gate before writing: 1–200 characters, one line,
// not only white space. Fail loudly instead of shipping an invalid entry.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`entry line is ${chars.length} characters, gate allows 1–200`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry line must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
