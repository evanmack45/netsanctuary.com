// Builds /<slug>/index.html for each answer page, sitemap.xml, robots.txt, and the "Common questions" block on the home page.
// Run: node scripts/build-answers.mjs. The output is committed. Content owner: content/answers.mjs.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { PAGES, SOURCES, CHECKED, DATE } from "../content/answers.mjs";
import { esc, inline, renderBlocks } from "./lib/answers-lib.mjs";
const root = new URL("../", import.meta.url).pathname;
const SITE = "https://netsanctuary.com";
const bySlug = Object.fromEntries(PAGES.map(p => [p.slug, p]));

function sourcesFor(p) {
  const keys = new Set();
  for (const s of p.sections) for (const b of s.blocks) if (b.q) keys.add(b.src);
  for (const n of p.notSaid) for (const f of n.files) keys.add(f);
  return [...keys];
}

function jsonLd(p) {
  const url = `${SITE}/${p.slug}/`;
  const org = { "@type": "Organization", name: "Net Sanctuary", url: SITE + "/" };
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Article", "@id": url + "#article", headline: p.h1, description: p.description, url, mainEntityOfPage: url, inLanguage: "en", datePublished: DATE, dateModified: DATE, author: org, publisher: org, citation: sourcesFor(p).map(k => SOURCES[k].url) },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Net Sanctuary", item: SITE + "/" },
        { "@type": "ListItem", position: 2, name: p.title, item: url },
      ] },
    ],
  }, null, 2);
}

function page(p) {
  const url = `${SITE}/${p.slug}/`;
  const src = sourcesFor(p);
  const related = p.related.map(s => `<li><a href="/${s}/">${esc(bySlug[s].title)}</a></li>`).join("");
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(p.title)} | Net Sanctuary</title>
  <meta name="description" content="${esc(p.description)}">
  <link rel="canonical" href="${url}">
  <meta name="theme-color" content="#1d5c58">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="Net Sanctuary">
  <meta property="og:title" content="${esc(p.title)}">
  <meta property="og:description" content="${esc(p.description)}">
  <meta property="og:url" content="${url}">
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="${esc(p.title)}">
  <meta name="twitter:description" content="${esc(p.description)}">
  <script type="application/ld+json">
${jsonLd(p)}
  </script>
  <link rel="stylesheet" href="/css/site.css">
</head>
<body>
  <a class="skip" href="#main">Skip to content</a>
  <header class="site-header no-print">
    <div class="wrap">
      <a class="wordmark" href="/">Net <span>Sanctuary</span></a>
      <nav aria-label="Site">
        <a href="/">Home</a>
        <a href="/pack/">The free pack</a>
      </nav>
    </div>
  </header>
  <main id="main">
    <div class="wrap">
      <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Net Sanctuary</a> &rsaquo; Common questions</nav>
      <h1 class="page-h1">${esc(p.h1)}</h1>
      <div class="answer" role="note">
        <h2 class="answer-label">Short answer</h2>
        <p>${esc(p.short)}</p>
        <p class="checked">Checked against the sources below on ${CHECKED}. This is a reading guide, not legal advice, and we are not your agent.</p>
      </div>
${p.sections.map(s => `
      <section>
        <h2>${esc(s.h)}</h2>
        ${renderBlocks(s.blocks, SOURCES)}
      </section>`).join("\n")}

      <section class="not-said">
        <h2>What these pages do not say</h2>
        <ul>${p.notSaid.map(n => `<li>${inline(n.t)}</li>`).join("")}</ul>
        <p>We cannot see your situation, and we do not know how any company will answer you.</p>
      </section>

      <section class="note">
        <p><strong>The free pack.</strong> If you want to send a request, the <a href="/pack/">free pack</a> has a letter builder that runs in your browser, an appeal letter, and a tracker. We send nothing for you.</p>
      </section>

      <section id="related">
        <h2>Related questions</h2>
        <ul class="links">${related}</ul>
      </section>

      <section id="sources">
        <h2>Sources</h2>
        <p class="small">Pages read on ${CHECKED}. Each quote above appears in the page it links to.</p>
        <ol class="src">${src.map(k => `<li><a href="${esc(SOURCES[k].url)}">${esc(SOURCES[k].title)}</a>, ${esc(SOURCES[k].note)}</li>`).join("")}</ol>
      </section>
    </div>
  </main>
  <footer class="site-footer">
    <div class="wrap">
      <p>Not legal advice. We are not your agent. We never send, file, or follow up for you, and we never ask for your ID.</p>
      <p><a href="/privacy.html">Privacy</a> &middot; <a href="/">Home</a> &middot; <a href="/pack/">The pack</a></p>
      <p><a href="https://www.afternic.com/domain/netsanctuary.com">This domain is for sale</a></p>
    </div>
  </footer>
</body>
</html>
`;
}

for (const p of PAGES) {
  mkdirSync(root + p.slug, { recursive: true });
  writeFileSync(root + p.slug + "/index.html", page(p));
}

// Home page: questions block between markers, placed before the sources section.
const home = readFileSync(root + "index.html", "utf8");
const block = `<!-- answers:start -->
      <section id="questions" aria-labelledby="h-q">
        <h2 id="h-q">Common questions, answered from the sources</h2>
        <p>Each page quotes the statute or the company's own page, says what the sources do not cover, and lists them.</p>
        <ul class="links">${PAGES.map(p => `<li><a href="/${p.slug}/">${esc(p.title)}</a></li>`).join("")}</ul>
      </section>
      <!-- answers:end -->`;
let out;
if (home.includes("<!-- answers:start -->")) out = home.replace(/<!-- answers:start -->[\s\S]*?<!-- answers:end -->/, block);
else out = home.replace('<section id="sources"', block + '\n\n      <section id="sources"');
writeFileSync(root + "index.html", out);

const urls = [["/", DATE], ["/pack/", DATE], ["/privacy.html", DATE], ...PAGES.map(p => [`/${p.slug}/`, DATE])];
writeFileSync(root + "sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(([u, d]) => `  <url>\n    <loc>${SITE}${u}</loc>\n    <lastmod>${d}</lastmod>\n  </url>`).join("\n")}\n</urlset>\n`);
writeFileSync(root + "robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
console.log(`built ${PAGES.length} pages, sitemap.xml, robots.txt`);
