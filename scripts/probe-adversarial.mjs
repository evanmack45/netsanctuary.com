// Adversarial probes for the builder and waitlist link. Usage: node scripts/probe-adversarial.mjs <baseUrl>
import { createRequire } from "node:module";
const { chromium } = createRequire("/workspace/repos/austin-council-tracker/node_modules/")("playwright-core");
const base = process.argv[2];
const b = await chromium.launch({ headless: true });
const p = await (await b.newContext()).newPage();
let dialogs = 0; p.on("dialog", d => { dialogs++; d.dismiss(); });
let fail = 0; const ok = (c, m) => { console.log((c ? "PASS " : "FAIL ") + m); if (!c) fail++; };
await p.goto(base + "/pack/");
const evil = `"><img src=x onerror=alert(1)><script>alert(2)</script>`;
await p.fill("#f-broker", evil); await p.fill("#f-name", "a\u202eb"); await p.fill("#f-url", "javascript:alert(3)");
const out = await p.inputValue("#out");
ok(out.includes(evil) && dialogs === 0, "HTML/script in fields stays literal text in the textarea, no dialog");
ok(await p.evaluate(() => !document.querySelector("img[src=x]") && document.querySelectorAll("script[src]").length === 2), "no injected DOM nodes");
const href = await p.getAttribute("#b-mail", "href");
ok(!/[<>"]/.test(href.replace(/^mailto:\?/, "")) , "mailto href is fully percent-encoded (no raw < > \")");
await p.fill("#f-date", ""); ok((await p.inputValue("#out")).includes("Sent on [date]."), "blank date falls back to [date], no 'Invalid Date'/NaN");
ok(!/NaN|undefined|Invalid/.test(await p.inputValue("#out") + await p.textContent("#reply-by")), "no NaN/undefined/Invalid anywhere in output");
await p.uncheck("#w-delete"); await p.uncheck("#w-optout");
ok((await p.inputValue("#out")).includes("[pick at least one request above]"), "no boxes ticked -> visible placeholder, not an empty ask list");
await p.fill("#f-name", "x".repeat(5000));
ok((await p.getAttribute("#b-mail", "href")).length > 2000, "very long input makes a mailto over 2000 chars (known client limit; Copy/Download remain)");
await p.goto(base + "/");
const wl = await p.getAttribute("[data-waitlist-mailto]", "href");
const u = new URL(wl);
ok(u.pathname === "netsanctuary@agentmail.to", "waitlist mailto recipient = " + u.pathname);
ok(u.searchParams.get("subject") === "Add me to the Net Sanctuary list", "waitlist subject decodes cleanly");
ok(/^Please add this address to the Net Sanctuary list\.\n\nOptional: one thing you wish the pack did:\n$/.test(u.searchParams.get("body")), "waitlist body decodes cleanly: " + JSON.stringify(u.searchParams.get("body")));
for (const path of ["/", "/pack/", "/privacy.html"]) {
  const r = await p.goto(base + path); ok(r.status() === 200, `GET ${path} 200`);
  ok(await p.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `${path} no horizontal overflow at default width`);
  ok(await p.evaluate(() => [...document.querySelectorAll("a[href]")].every(a => a.getAttribute("href") !== "" )), `${path} no empty hrefs`);
}
await b.close(); process.exit(fail ? 1 : 0);
