# netsanctuary.com LOG (Mason)
Full step-by-step proof: /workspace/mason/netsanctuary-mvp.md

## 2026-11-24 (CT)
- 20:13 DNS check: A 13.248.169.48 and 76.223.54.146, NS ns3/ns4.afternic.com, no AAAA/CNAME. Not on GitHub Pages. DNS not changed (Dash's job).
- 20:14 Created AgentMail inbox netsanctuary@agentmail.to for the waitlist (existing AgentMail account, no new account, no credential).
- 20:17 Built static site: home, pack (letter builder, appeal, templates, tracker), privacy. Letter wording owned by js/letters.js.
- 20:21 Created public repo evanmack45/netsanctuary.com, enabled Pages (main, CNAME netsanctuary.com). Commit 5c14614.
- 20:22 Waitlist test: loopback message stored in the inbox (label received).
- 20:24 Found and fixed a 390px overflow bug (nowrap source links). Commit 6bca80c.
- Sources: cites Bus. & Com. Code ch. 510 (data brokers) and ch. 541 (TDPSA). Ch. 509 is now the SCOPE Act; the data broker law moved to ch. 510 on 2025-09-01 (HB 1620).
- Domain is listed for sale (Afternic, $995 ask). Footer link "This domain is for sale" on every page.
- Status: built and served by GitHub Pages; NOT live on the real domain until DNS moves. HTTPS not issued yet.
- Money rule: no payment, no Stripe, no pay button.
- 20:30–20:33 Barker moved DNS to GoDaddy NS + GitHub A/AAAA and www CNAME (see /workspace/barker/netsanctuary-dns.md). This log does not change DNS.
- 20:36–21:21 Polled Pages API every 5 min. Certificate object stayed null while GitHub's health check still saw the old Afternic A records. Cloudflare DoH was split across colos for a while.
- 20:51 First known fix (remove and re-add cname). GitHub still saw non-Pages IPs. Commits 2fe9fef / 457de1b (CNAME file only).
- 21:24 Pages health for the apex became is_pointed_to_github_pages_ip=true, is_served_by_pages=true, is_https_eligible=true. Google and Cloudflare DoH showed the four GitHub A records; www CNAME evanmack45.github.io. on Google (Cloudflare www was mostly the same, with one stale colo).
- 21:24–21:25 Second remove/re-add (commits cd2075a / 89136bc). Certificate started as authorization_pending, then approved at 21:25 CT. Domain on the cert: netsanctuary.com (apex only). expires_at 2027-02-22.
- 21:25 Build 89136bc status=built. Ran `gh api -X PUT repos/evanmack45/netsanctuary.com/pages -F https_enforced=true`. Now https_enforced=true, html_url=https://netsanctuary.com/, status=built.
- Cert (openssl s_client to 185.199.108.153:443 with SNI netsanctuary.com): CN=netsanctuary.com, SAN DNS:netsanctuary.com, issuer Let's Encrypt YR2, notBefore 2026-11-24 8:26:43 PM CT, notAfter 2027-02-22 8:26:42 PM CT, verify OK.
- The box egress proxy still intercepts curl/--resolve when the URL hostname is netsanctuary.com and returns the old GoDaddy lander (114 bytes). Checks used a Host header to 185.199.108.153, openssl with SNI to that IP, and an off-box fetch of https://netsanctuary.com/.
- HTTP to the Pages IP with Host: netsanctuary.com: 301 to https://netsanctuary.com/ (also /pack/ and /privacy.html). HTTPS to that IP with Host header (no SNI): 200, Server GitHub.com, / 13287, /pack/ 11764, /privacy.html 2914.
- Off-box fetch of https://netsanctuary.com/ returned the live Net Sanctuary page (not the Afternic lander).
- Waitlist mailto is netsanctuary@agentmail.to. For-sale footer on all three pages. No pay button. ch. 510 citation is correct (ch. 509 mentioned only to explain the 2025-09-01 move).
- Letter builder e2e (VIA_PAGES=1, real input José Peña / Café Data Co.): all 13 checks PASS.
- Live shots, viewed: /workspace/mason/netsanctuary-live-1280.jpg (1280x4262) and /workspace/mason/netsanctuary-live-390.jpg (390x6482).
- Residual: GitHub pages/health still flags www (stale alt_domain check). The issued cert covers the apex only. No DNS was changed. No further cname attempts.
- Status: live on https://netsanctuary.com with HTTPS enforced. Money rule still holds (pay button off).
- Site content commits unchanged; only GitHub's CNAME add/remove commits after  a706539.

## 2026-11-25 (CT) SEO pass (MSB-7)
- Added 8 answer pages at /texas-data-broker-registry/, /deletion-request-45-days/, /people-search-said-no/, /listing-came-back/, /remove-home-address/, /childs-data/, /texas-attorney-general-complaint/, /one-texas-opt-out-form/. Content owner: content/answers.mjs. Builder: scripts/build-answers.mjs. The output is committed.
- Every quote is checked against a saved copy of its source (sources/text/, scripts/check-quotes.mjs: 64 quotes, 41 absence checks). DROP Texas, Whitepages and Spokeo help text came from WebFetch reads because curl is blocked or the pages are JavaScript-rendered. The Secretary of State registry itself is a JS app and was not read.
- Added sitemap.xml (11 URLs), robots.txt with a Sitemap line, unique titles and meta descriptions, canonical, Open Graph and Twitter tags on every page, and JSON-LD: WebSite + Organization on home, WebPage + BreadcrumbList on pack and privacy, Article + BreadcrumbList on answer pages. No FAQPage or HowTo (Google limits FAQ rich results to well-known government and health sites and has deprecated How-to). JSON-LD checked against the schema.org vocabulary file: 62 nodes, 0 problems.
- Home: added a "Common questions" list, a "Deletion can mean suppression" item (541.052(f)) and an "A free Texas form already exists" item (DROP Texas, with a link to the comparison page).
- DROP Texas verdict (page /one-texas-opt-out-form/): for the companies it names, DROP Texas is less work and the page says so. The pack is the better fit only for deletion or access requests, companies DROP does not name, avoiding a birth date and mailing address, and appeal letters plus a tracker. Otherwise use DROP Texas.
- No pay button, no mailto on answer pages. The waitlist mailto and the for-sale footer link are unchanged.
- Checks: check-site (all pass), check-seo (all pass), check-quotes (all pass), test/letters.test.mjs (7 pass).
- Live check after 126471b (then 9b96ead): verify-live.mjs 49 PASS. All 11 sitemap URLs 200 with a valid certificate, bodies equal the repo files, canonicals, JSON-LD, robots Sitemap line, http 301. www has no valid certificate (apex-only cert, known). 9b96ead makes verify-live report that without failing the run. No DNS, CNAME, or Pages settings were changed.
- visual-qa-gate on the live home and at least two answer pages (phone and desktop) is queued until the box transcription (round 6, transcribe.py) finishes. Shots will be saved to /workspace/mason/seo-netsanctuary-*.jpg.
- visual-qa-gate on live home, /one-texas-opt-out-form/, and /deletion-request-45-days/ (and the three lwc pages): no P0. P1: 6 phone tap targets under 24px on each ns page, all header nav and footer links at 20px height. Fixed in css/site.css (nav and footer link padding; pack radio/checkbox controls set to 24px). P2: no og:image on any page, accepted (these pages have no images by design; no share card was added). Lighthouse mobile on all six live URLs: performance 99-100, a11y/best-practices/seo 100, CLS 0. Gate output: /workspace/mason/seo-pass/qa-live. A re-run after this CSS fix is required before DONE.
- Re-ran the live gate after b7cfd45: /workspace/mason/seo-pass/qa-live-ns2. PASS (no P0), no P1 tap-target findings. P2 no og:image accepted (no images by design). I looked at the new fold shots and the home phone footer. Live CSS and verify-live confirmed (one transient 503 right after the Pages build, then all 11 URLs 200). Shots: /workspace/mason/seo-netsanctuary-*.jpg. DONE 02:43 AM America/Chicago.
- Round 2 (Wed 25 Nov 2026): added 4 sourced answer pages from Texas Business & Commerce Code chapters 541 and 510 and the Whitepages privacy notice: /texas-privacy-law-small-business/ (a691f8f, e8d8b58 added its link), /texas-sensitive-data-consent/ (e8d8b58), /texas-browser-opt-out-signals/ (1b8efcb), /authorized-agent-texas-privacy-request/ (a909e7d). Absence claims (statute does not name Global Privacy Control, gives no size number, does not require signed permission for agents) are checked against the saved statute text. Sitemap is 13 URLs. verify-live passes; for-sale footer present on every page. visual-qa-gate on the 4 live pages (phone and desktop, I looked at the shots): PASS, no P0 or P1, Lighthouse mobile 100/100/100/100, CLS 0. Output: /workspace/mason/seo-pass/qa-live-round2.
