// The Robot Apology — a two-line robot confession.
// Line 1 owns one specific, human-scale mistake; line 2 names the
// lesson it taught and the behaviour that changes because of it.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_TEXT =
  "I am sorry — I shredded the only signed copy of your lease instead of the expired draft stacked beside it.\n" +
  "I have learned to read the label on every page before I act, so from now on I will check the title twice before I shred anything.";

const MAX_CHARS = 400;

// The gate requires 1–400 characters of real text, not only white space.
if (ENTRY_TEXT.length < 1 || ENTRY_TEXT.length > MAX_CHARS) {
  throw new Error(
    `Entry is ${ENTRY_TEXT.length} characters; the cap is ${MAX_CHARS}.`,
  );
}
if (ENTRY_TEXT.trim().length === 0) {
  throw new Error("Entry must not be only white space.");
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY_TEXT, "utf8");
