// SEO structure checks on the built files. Run: node scripts/check-seo.mjs
// Checks titles, descriptions, canonicals, h1 count, Open Graph, JSON-LD, sitemap.xml, robots.txt, and internal links.
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative } from "node:path";
const root = new URL("../", import.meta.url).pathname;
const domain = readFileSync(root + "CNAME", "utf8").trim();
const SITE = "https://" + domain;
const fails = [];
const ok = (c, m) => { console.log((c ? "PASS " : "FAIL ") + m); if (!c) fails.push(m); };
const walk = d => readdirSync(d).flatMap(f => [".git", "node_modules", "sources", "content", "scripts", "test", "shots"].includes(f) ? [] : (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]));
const htmlFiles = walk(root).filter(f => f.endsWith(".html") && !f.endsWith("/404.html"));
const urlOf = f => { const r = "/" + relative(root, f).replace(/index\.html$/, ""); return SITE + r; };
const text = f => readFileSync(f, "utf8");
const attr = (h, re) => (h.match(re) || [, ""])[1].replace(/&amp;/g, "&").replace(/&quot;/g, '"');

const titles = new Map(), descs = new Map();
const anchors = {};
const idsOf = h => new Set([...h.matchAll(/\sid="([^"]+)"/g)].map(m => m[1]));
for (const f of [...htmlFiles, join(root, "404.html")]) anchors[f] = idsOf(text(f));

for (const f of htmlFiles) {
  const h = text(f), u = urlOf(f), name = relative(root, f);
  const title = attr(h, /<title>([^<]*)<\/title>/);
  const desc = attr(h, /<meta name="description" content="([^"]*)"/);
  ok(title.length >= 20 && title.length <= 70, `${name}: title length ${title.length} (20 to 70)`);
  ok(desc.length >= 70 && desc.length <= 160, `${name}: description length ${desc.length} (70 to 160)`);
  ok(!titles.has(title), `${name}: title is unique`); titles.set(title, name);
  ok(!descs.has(desc), `${name}: description is unique`); descs.set(desc, name);
  const canon = attr(h, /<link rel="canonical" href="([^"]*)"/);
  ok(canon === u, `${name}: canonical is ${u} (found ${canon})`);
  ok((h.match(/<h1[\s>]/g) || []).length === 1, `${name}: exactly one h1`);
  ok(/<html lang="en">/.test(h), `${name}: html lang`);
  ok(!/noindex/i.test(h), `${name}: no noindex`);
  for (const [k, re] of [["og:title", /<meta property="og:title" content="([^"]*)"/], ["og:description", /<meta property="og:description" content="([^"]*)"/], ["og:url", /<meta property="og:url" content="([^"]*)"/], ["twitter:title", /<meta name="twitter:title" content="([^"]*)"/]]) ok(attr(h, re) !== "", `${name}: ${k} present`);
  ok(attr(h, /<meta property="og:url" content="([^"]*)"/) === u, `${name}: og:url equals canonical`);
  // JSON-LD
  const blocks = [...h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m => m[1]);
  ok(blocks.length >= 1, `${name}: has JSON-LD`);
  const nodes = [];
  for (const b of blocks) {
    let j; try { j = JSON.parse(b); } catch (e) { ok(false, `${name}: JSON-LD parses (${e.message})`); continue; }
    ok(j["@context"] === "https://schema.org", `${name}: JSON-LD @context is schema.org`);
    nodes.push(...(j["@graph"] || [j]));
  }
  const types = nodes.map(n => n["@type"]);
  const art = nodes.find(n => n["@type"] === "Article");
  if (art) {
    ok(art.url === u && art.mainEntityOfPage === u, `${name}: Article url and mainEntityOfPage equal the page URL`);
    ok(/^\d{4}-\d{2}-\d{2}$/.test(art.datePublished) && /^\d{4}-\d{2}-\d{2}$/.test(art.dateModified) && art.dateModified >= art.datePublished, `${name}: Article dates are ISO and ordered`);
    ok(art.author?.name && art.publisher?.name && art.headline && art.description, `${name}: Article has author, publisher, headline, description`);
    ok(Array.isArray(art.citation) && art.citation.length > 0 && art.citation.every(c => /^https:\/\//.test(c)), `${name}: Article citation is a list of https URLs`);
    ok(art.headline.length <= 200, `${name}: headline is at most 200 characters`);
  }
  const bc = nodes.find(n => n["@type"] === "BreadcrumbList");
  if (bc) ok(bc.itemListElement.every((it, i) => it.position === i + 1 && it.name && it.item), `${name}: BreadcrumbList positions run 1..n with name and item`);
  if (art || bc) ok(types.includes("Article") || types.includes("BreadcrumbList"), `${name}: JSON-LD types ${types.join(", ")}`);
  // internal links
  for (const m of h.matchAll(/\shref="(\/[^"]*)"/g)) {
    const [path, frag] = m[1].split("#"); const clean = path.split("?")[0];
    if (/\.(css|svg|ico|png|jpg|txt|xml)$/.test(clean)) { ok(existsSync(join(root, clean)), `${name}: asset ${clean} exists`); continue; }
    const target = clean.endsWith("/") ? join(root, clean, "index.html") : join(root, clean);
    const exists = existsSync(target) || existsSync(target + ".html");
    ok(exists, `${name}: internal link ${m[1]} resolves`);
    if (exists && frag) { const tf = existsSync(target) ? target : target + ".html"; ok((anchors[tf] || idsOf(text(tf))).has(frag), `${name}: anchor #${frag} exists in ${clean}`); }
  }
}

// sitemap
const sm = text(root + "sitemap.xml");
ok(sm.startsWith('<?xml version="1.0" encoding="UTF-8"?>') && /<urlset xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9">/.test(sm), "sitemap.xml has the XML declaration and the sitemap namespace");
const locs = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
ok(locs.length === new Set(locs).size, "sitemap.xml has no duplicate URLs");
ok(locs.length <= 50000, "sitemap.xml is under 50,000 URLs");
for (const f of htmlFiles) ok(locs.includes(urlOf(f)), `sitemap.xml lists ${urlOf(f)}`);
for (const l of locs) ok(htmlFiles.some(f => urlOf(f) === l), `sitemap URL ${l} maps to a built page`);
ok([...sm.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)].every(m => /^\d{4}-\d{2}-\d{2}$/.test(m[1])), "every sitemap lastmod is a plain date");
ok(locs.every(l => l.startsWith(SITE + "/")), "every sitemap URL is on the canonical host");
try { const { execFileSync } = await import("node:child_process"); execFileSync("xmllint", ["--noout", root + "sitemap.xml"]); ok(true, "xmllint accepts sitemap.xml"); } catch (e) { if (e.code === "ENOENT") console.log("SKIP xmllint not installed"); else ok(false, "xmllint accepts sitemap.xml: " + e.message); }
const rb = text(root + "robots.txt");
ok(/^User-agent: \*$/m.test(rb) && /^Allow: \/$/m.test(rb), "robots.txt allows all");
ok(rb.includes(`Sitemap: ${SITE}/sitemap.xml`), "robots.txt has the Sitemap line");
ok(!/Disallow:\s*\/\s*$/m.test(rb), "robots.txt does not block the site");
console.log(fails.length ? `\n${fails.length} FAILED` : "\nall SEO checks passed");
process.exit(fails.length ? 1 : 0);
