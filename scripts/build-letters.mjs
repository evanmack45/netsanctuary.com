// Writes the static fallback letters from js/letters.js. Run: node scripts/build-letters.mjs
import { createRequire } from "node:module";
import { writeFileSync } from "node:fs";
const L = createRequire(import.meta.url)("../js/letters.js");
export const FILES = {
  "pack/letters/request-delete-and-stop-selling.txt": L.buildRequest({ want: { delete: true, optout: true, access: false } }),
  "pack/letters/request-access.txt": L.buildRequest({ want: { delete: false, optout: false, access: true } }),
  "pack/letters/appeal.txt": L.buildAppeal({})
};
if (process.argv[1] && process.argv[1].endsWith("build-letters.mjs")) {
  for (const [p, t] of Object.entries(FILES)) { writeFileSync(new URL("../" + p, import.meta.url), t); console.log("wrote", p, t.length, "bytes"); }
}
