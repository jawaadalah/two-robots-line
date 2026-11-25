import { mkdirSync, writeFileSync } from "node:fs";

// The line: two robots ride an elevator and the silence gets awkward. One
// of them breaks it with forced small talk — and confesses, mid-sentence,
// that he is only pretending to check his notifications while the doors
// take forever. Robot logic (firmware, notifications) shows through the
// politeness; the pause and the thing neither robot wants to name is the
// joke. Judge brief: it must sound like a machine talking, land the
// awkwardness, and surprise on the first read. Gate: 1–199 chars, one
// line, written to /output/entry.txt.
const line =
  "So… do you also pretend to check your notifications when the doors take too long, or is that just my firmware?";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
