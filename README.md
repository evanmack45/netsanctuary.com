# netsanctuary.com

Static site: a free Texas data broker request pack (letters, tracker, guide) plus an email waitlist.

- Letter wording lives only in `js/letters.js`. `node scripts/build-letters.mjs` regenerates `pack/letters/*.txt`.
- Tests: `node --test test/letters.test.mjs`, `node scripts/check-site.mjs [--links]`, `node scripts/e2e-builder.mjs <baseUrl>`, `node scripts/probe-adversarial.mjs <baseUrl>`.
- Waitlist: `mailto:` to the AgentMail inbox `netsanctuary@agentmail.to`. No server, no form posts.
- No payments. No lookups. No personal data is processed by the site.
