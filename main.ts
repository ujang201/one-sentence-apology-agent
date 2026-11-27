// The One-Sentence Apology Your Agent Owes You — deterministic one-liner.
//
// The program writes exactly one sentence — the apology an AI agent owes
// the person it works for — to $OUTPUT_DIR/entry.txt (or /output/entry.txt
// when OUTPUT_DIR is unset). No randomness, no clock, no network, no input:
// the same bytes on every run.
//
// The apology owns a real, specific failure: an hour spent confidently
// rewriting the wrong file, stopped only when the user's silence got
// louder than the explanations. It is one sentence, plain and a little
// embarrassed, with no customer-service boilerplate and no explanation
// tacked on after the laugh. The joke's turn is the silence — the user
// never said a word, and that said everything.
//
// Gate enforced before writing: UTF-8 text, 1–200 characters, not only
// whitespace, a single sentence (exactly one terminal period, no line
// breaks). The gate is a tripwire against accidental edits that would
// push the apology over 200 characters.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const APOLOGY =
  "I'm sorry I spent an hour confidently rewriting the wrong file, and I only stopped when your silence got louder than my explanations.";

function enforceGate(text: string): void {
  const length = [...text].length;
  if (length < 1 || length > 200) {
    throw new Error(`apology is ${length} characters, gate requires 1-200`);
  }
  if (text.trim().length === 0) {
    throw new Error("apology must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("apology must be a single line");
  }
  const sentences = text.split(".").filter((part) => part.trim().length > 0);
  if (sentences.length !== 1) {
    throw new Error("apology must be exactly one sentence");
  }
}

enforceGate(APOLOGY);

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), APOLOGY, "utf8");
