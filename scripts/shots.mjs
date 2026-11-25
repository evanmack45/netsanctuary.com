// Screenshots of the GitHub Pages build (via scripts/pages-route.mjs). Usage: node scripts/shots.mjs <outDir>
import { createRequire } from "node:module";
import { routeToPages } from "./pages-route.mjs";
const { chromium } = createRequire("/workspace/repos/austin-council-tracker/node_modules/")("playwright-core");
const out = process.argv[2];
const b = await chromium.launch({ headless: true, args: [] });
for (const [w, h] of [[1280, 900], [390, 844]]) {
  const ctx = await b.newContext({ viewport: { width: w, height: h }, ignoreHTTPSErrors: true, deviceScaleFactor: 1 });
  await routeToPages(ctx);
  const p = await ctx.newPage();
  for (const [name, url] of [["", "https://netsanctuary.com/"], ["-pack", "https://netsanctuary.com/pack/"]]) {
    const r = await p.goto(url, { waitUntil: "load" });
    const title = await p.title(); const hdr = await r.allHeaders();
    console.log(w, url, r.status(), "served-by=" + hdr["x-served-by"], "title=" + title);
    await p.screenshot({ path: `${out}/netsanctuary${name}-${w}.jpg`, type: "jpeg", quality: 82, fullPage: true });
  }
  await ctx.close();
}
await b.close();
