// The box's egress layer answers for netsanctuary.com from real DNS (the Afternic lander). It ignores
// --resolve and --host-resolver-rules, and it also swallowed Node's own https client. curl to the Pages IP
// with a Host header is not intercepted, so this helper fetches with curl and serves the bytes to
// https://netsanctuary.com/* inside a Playwright context. Preview only, until DNS points at GitHub Pages.
import { execFile } from "node:child_process";
import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
export const PAGES_IP = "185.199.108.153";
export function fetchFromPages(path) {
  const dir = mkdtempSync(join(tmpdir(), "nspages-"));
  return new Promise((resolve, reject) => {
    execFile("curl", ["-sk", "--noproxy", "*", "-m", "20", "-D", join(dir, "h"), "-o", join(dir, "b"), "-H", "Host: netsanctuary.com", `https://${PAGES_IP}${path}`], err => {
      try {
        if (err) throw err;
        const head = readFileSync(join(dir, "h"), "utf8"); const body = readFileSync(join(dir, "b"));
        const status = +/^HTTP\/[\d.]+ (\d+)/m.exec(head)[1];
        const headers = Object.fromEntries([...head.matchAll(/^([A-Za-z-]+): (.*)\r?$/gm)].map(m => [m[1].toLowerCase(), m[2]]));
        resolve({ status, headers, body });
      } catch (e) { reject(e); } finally { rmSync(dir, { recursive: true, force: true }); }
    });
  });
}
export async function routeToPages(context) {
  await context.route("https://netsanctuary.com/**", async route => {
    const u = new URL(route.request().url());
    const r = await fetchFromPages(u.pathname + u.search);
    await route.fulfill({ status: r.status, headers: { "content-type": r.headers["content-type"] || "application/octet-stream", "x-served-by": String(r.headers["server"]) }, body: r.body });
  });
}
