import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "";

// One remark from the till, after it has scanned the whole basket:
// twelve yoghurts, and not one other thing in the bagging area.
const LINE = "Twelve yoghurts and nothing else. No spoon. No dignity. Please confirm you are an adult making adult choices.";

function resolveEntryPath(): string {
  if (OUTPUT_DIR.length === 0) {
    throw new Error("MAKEFUN_OUTPUT_DIR is not set");
  }
  mkdirSync(OUTPUT_DIR, { recursive: true });
  return join(OUTPUT_DIR, "entry.txt");
}

function main(): void {
  // A fixed line: every run writes the same bytes, nothing is chosen at run time.
  writeFileSync(resolveEntryPath(), LINE, "utf8");
}

main();

// The till has spoken, and there is nothing left in the basket to scan.
