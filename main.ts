// One Word From Grandma — make.fun entry.
// The program writes exactly one word to /output/entry.txt:
// the word a grandma would text about AI.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const WORD = "Doohickey";

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, WORD);
