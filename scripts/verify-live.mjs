// Fetch every URL in the live sitemap over HTTPS and compare with the repo file. Run: node scripts/verify-live.mjs
// Uses curl --noproxy '*' because the box proxy intercepts by hostname.
import { readFileSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";
const root = new URL("../", import.meta.url).pathname;
const domain = readFileSync(root + "CNAME", "utf8").trim();
const SITE = "https://" + domain;
const fails = [];
const ok = (c, m) => { console.log((c ? "PASS " : "FAIL ") + m); if (!c) fails.push(m); };
const get = u => { const out = execFileSync("curl", ["-sS", "--noproxy", "*", "-m", "30", "-A", "Mozilla/5.0 (compatible; live-check/1.0)", "-o", "/tmp/live-body", "-w", "%{http_code} %{ssl_verify_result} %{content_type}", u], { encoding: "utf8" }).split(" "); return { status: +out[0], ssl: out[1], type: out.slice(2).join(" "), body: readFileSync("/tmp/live-body", "utf8") }; };
const sm = get(SITE + "/sitemap.xml");
ok(sm.status === 200 && sm.ssl === "0", "live sitemap.xml 200 with a valid certificate");
ok(/xml/.test(sm.type), "sitemap content-type is xml (" + sm.type.trim() + ")");
const locs = [...sm.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
ok(locs.length > 0, `live sitemap lists ${locs.length} URLs`);
for (const loc of locs) {
  const r = get(loc);
  ok(r.status === 200 && r.ssl === "0", `${r.status} cert ${r.ssl === "0" ? "ok" : "BAD"} ${loc}`);
  const path = new URL(loc).pathname;
  const file = root + path.replace(/^\//, "") + (path.endsWith("/") ? "index.html" : "");
  ok(existsSync(file) && readFileSync(file, "utf8") === r.body, `${loc} body equals repo file`);
  ok(r.body.includes(`<link rel="canonical" href="${loc}">`), `${loc} canonical is itself`);
  const blocks = [...r.body.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  ok(blocks.length > 0 && blocks.every(b => { try { JSON.parse(b[1]); return true; } catch { return false; } }), `${loc} live JSON-LD parses (${blocks.length} block)`);
}
const rb = get(SITE + "/robots.txt");
ok(rb.status === 200 && rb.body.includes(`Sitemap: ${SITE}/sitemap.xml`), "live robots.txt has the Sitemap line");
const www = execFileSync("curl", ["-sSI", "--noproxy", "*", "-m", "30", "https://www." + domain + "/"], { encoding: "utf8" });
console.log("www: " + www.split("\n")[0].trim() + " " + (www.match(/^location:.*$/im) || [""])[0].trim());
const http = execFileSync("curl", ["-sSI", "--noproxy", "*", "-m", "30", "-H", "Host: " + domain, "http://185.199.108.153/"], { encoding: "utf8" });
ok(/301/.test(http.split("\n")[0]) && new RegExp(`location: ${SITE}/`, "i").test(http), "http to the Pages IP with Host header 301s to https");
console.log(fails.length ? `\n${fails.length} FAILED` : "\nall live checks passed");
process.exit(fails.length ? 1 : 0);
