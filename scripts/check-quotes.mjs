// Every quote on an answer page must appear in the saved source text. Every "not said" claim must be absent from the files it names.
import { readFileSync, existsSync } from "node:fs";
import { PAGES, SOURCES } from "../content/answers.mjs";
import { norm } from "./lib/answers-lib.mjs";
const root = new URL("../", import.meta.url).pathname;
const fails = [];
const ok = (c, m) => { if (!c) { fails.push(m); console.log("FAIL " + m); } return c; };
const cache = {};
const text = key => cache[key] ??= (() => {
  const s = SOURCES[key];
  const f = root + "sources/text/" + s.file;
  if (!existsSync(f)) return "";
  const raw = readFileSync(f, "utf8");
  const body = raw.split(/\n\n/).slice(1).join("\n\n"); // drop the URL/FETCHED header
  return norm(body);
})();
let nq = 0, na = 0;
for (const key of Object.keys(SOURCES)) ok(text(key).length > 100, `source ${key} text snapshot exists and has content`);
for (const p of PAGES) {
  for (const sec of p.sections) for (const b of sec.blocks) if (b.q) {
    nq++;
    ok(text(b.src).includes(norm(b.q)), `${p.slug}: quote not found in ${b.src}: ${b.q.slice(0, 80)}`);
  }
  for (const n of p.notSaid) {
    if (n.ours) { ok(!n.absent.length, `${p.slug}: ours claim carries no absence terms`); continue; } // a statement about our own work, nothing to check in a source
    ok(Array.isArray(n.absent) && n.absent.length && n.files?.length, `${p.slug}: notSaid needs absent terms and files`);
    for (const f of n.files) for (const term of n.absent) {
      na++;
      ok(!text(f).includes(norm(term)), `${p.slug}: term "${term}" IS present in ${f}, so the not-said claim is wrong: ${n.t.slice(0, 60)}`);
    }
  }
}
console.log(`${nq} quotes checked, ${na} absence checks`);
console.log(fails.length ? `${fails.length} FAILED` : "all quote checks passed");
process.exit(fails.length ? 1 : 0);
