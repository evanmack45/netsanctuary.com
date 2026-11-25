// Static rules for the site. Run: node scripts/check-site.mjs  (add --links to also HEAD/GET every external link)
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
const root = new URL("../", import.meta.url).pathname;
const walk = d => readdirSync(d).flatMap(f => f === ".git" || f === "node_modules" || f === "shots" ? [] : (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]));
const files = walk(root);
const text = f => readFileSync(f, "utf8");
const html = files.filter(f => f.endsWith(".html"));
const js = files.filter(f => f.endsWith(".js"));
const fails = []; const ok = (c, m) => { console.log((c ? "PASS " : "FAIL ") + m); if (!c) fails.push(m); };

const ADDR = "netsanctuary@agentmail.to";
const mailtos = html.flatMap(f => [...text(f).matchAll(/mailto:([^"?]*)/g)].map(m => [relative(root, f), m[1]]));
const waitlist = mailtos.filter(([f, a]) => a !== "");
ok(waitlist.length >= 1 && waitlist.every(([, a]) => a === ADDR), `every addressed mailto goes to ${ADDR} (${waitlist.length} found)`);
ok(html.filter(f => /data-waitlist-mailto/.test(text(f))).length === 1, "exactly one page carries the waitlist button");

ok(html.every(f => !/<form[\s>]/i.test(text(f))), "no <form> element on any page (no form posts)");
ok(js.every(f => !/\bfetch\s*\(|XMLHttpRequest|sendBeacon|localStorage|sessionStorage|document\.cookie|WebSocket|import\(/.test(text(f))), "no fetch/XHR/beacon/storage/cookie/websocket in any JS");
const external = html.flatMap(f => [...text(f).matchAll(/<(script|link|img|iframe)[^>]+(src|href)="(https?:)?\/\/[^"]+"/g)].filter(m => m[1] !== "a").map(m => [relative(root, f), m[0]]));
ok(external.filter(([, t]) => /<(script|iframe|img)/.test(t) || /rel="stylesheet"/.test(t)).length === 0, "no third-party script, iframe, image or stylesheet");

// "different price(s)" is allowed only as a verbatim quote of Bus. & Com. Code 541.101(b)(3) or (c),
// inside a <blockquote>, with the chapter 541 cite in that same block (same idea as the $7,500 rule).
// Paraphrases, short answers, and any other use of the word stay banned.
const STATUTE_PRICE = /charging different prices or rates for goods or services|offering a different price, rate, level, quality/;
const stripCitedPriceQuotes = htmlText => htmlText.replace(/<blockquote\b[\s\S]*?<\/blockquote>/gi, bq => {
  const cited = /chapter 541|BC\.541\.htm/i.test(bq);
  return cited && STATUTE_PRICE.test(bq) ? bq.replace(/\bdifferent prices?\b/gi, "") : bq;
});
const all = [...html, ...js].map(f => (f.endsWith(".html") ? stripCitedPriceQuotes(text(f)) : text(f))).join("\n").toLowerCase();
for (const w of ["stripe", "checkout", "buy now", "add to cart", "paypal", "price", "pay now", "order now", "subscribe now"]) ok(!all.includes(w), `no "${w}" anywhere in html/js (except "different price(s)" as a quoted, cited 541.101(b)(3) or (c) line)`);
ok(!/\$\s?\d/.test(all.replace(/\$300\b/g, "").replace(/\$7,500\b/g, "")), "no dollar amounts except the $300 state registration fee and the $7,500 civil penalty ceiling (cited legal facts)");
// Three pages share one art setting (window sill and lamp). No two of them may sit next to each other in any link list.
const SHARED_ART_GROUPS = [
  ["access-my-data", "correct-my-data", "opt-out-of-sale"],
  ["employer-face-scan", "voter-data-on-a-private-site"],
];
for (const f of html) for (const m of text(f).matchAll(/<ul class="links">([\s\S]*?)<\/ul>/g)) {
  const hrefs = [...m[1].matchAll(/href="\/([^\/"]+)\/"/g)].map(x => x[1]);
  hrefs.forEach((h, i) => { for (const g of SHARED_ART_GROUPS) if (g.includes(h) && g.includes(hrefs[i + 1])) ok(false, `${relative(root, f)}: ${h} and ${hrefs[i + 1]} share art and are adjacent in a link list`); });
}
ok(true, "no two of the shared-art pages are adjacent in any link list");
ok(html.every(f => /This domain is for sale/.test(text(f))), "every page carries the 'This domain is for sale' footer link");
ok(html.every(f => /afternic\.com\/domain\/netsanctuary\.com/.test(text(f))), "for-sale link points at the Afternic listing");
ok(["index.html", "pack/index.html", "privacy.html"].every(p => /not legal advice/i.test(text(root + p)) && /not your agent/i.test(text(root + p))), "'not legal advice' and 'not your agent' on home, pack, privacy");
ok(!/chapter 509|ch\. 509|Code ch\. 509/.test(text(root + "pack/index.html")), "pack page does not cite ch. 509 for brokers");
const slop = /\b(delve|crucial|pivotal|showcase|testament|vibrant|foster|landscape|leverage|utilize|seamless|robust|empower)\b/i;
ok(!html.some(f => slop.test(text(f).replace(/<[^>]+>/g, " "))), "no banned AI vocabulary in page text");
ok(!html.some(f => /[—–]/.test(text(f))) && !js.some(f => /[—–]/.test(text(f))), "no em or en dashes");
ok(readFileSync(root + "CNAME", "utf8").trim() === "netsanctuary.com", "CNAME is netsanctuary.com");

if (process.argv.includes("--links")) {
  const urls = [...new Set(html.flatMap(f => [...text(f).matchAll(/href="(https:\/\/[^"#]+)/g)].map(m => m[1].replace(/&amp;/g, "&"))))].filter(u => !u.includes("netsanctuary.com"));
  for (const u of urls) {
    let s = 0; try { const r = await fetch(u, { headers: { "user-agent": "Mozilla/5.0 (X11; Linux x86_64) Chrome/124 Safari/537.36" }, redirect: "follow", signal: AbortSignal.timeout(25000) }); s = r.status; } catch (e) { s = "ERR " + e.message; }
    ok(s === 200, `link ${s} ${u}`);
  }
}
console.log(fails.length ? `\n${fails.length} FAILED` : "\nall checks passed");
process.exit(fails.length ? 1 : 0);
